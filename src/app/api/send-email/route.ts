// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email template
const EmailTemplate = ({ name, email, phone, message }: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #333333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #00577d 0%, #8ad3f2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .info-row {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #f3f4f6;
          }
          .label {
            color: #00577d;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .value {
            color: #374151;
            font-size: 16px;
          }
          .message-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #8ad3f2;
            margin-top: 10px;
          }
          .footer {
            background: #f9fafb;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            color: #6b7280;
            font-size: 14px;
          }
          .badge {
            display: inline-block;
            background: #8ad3f2;
            color: #00577d;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📧 Nuevo Contacto desde nmolatam.com</h1>
          <span class="badge">Capacitación Neurolúdica</span>
        </div>
        
        <div class="content">
          <div class="info-row">
            <div class="label">👤 Nombre Completo</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="info-row">
            <div class="label">📧 Email</div>
            <div class="value">
              <a href="mailto:${email}" style="color: #00577d; text-decoration: none;">${email}</a>
            </div>
          </div>
          
          ${phone ? `
          <div class="info-row">
            <div class="label">📱 Teléfono</div>
            <div class="value">
              <a href="tel:${phone}" style="color: #00577d; text-decoration: none;">${phone}</a>
            </div>
          </div>
          ` : ''}
          
          <div class="info-row" style="border-bottom: none;">
            <div class="label">💬 Mensaje</div>
            <div class="message-box">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto en <strong>nmolatam.com</strong></p>
          <p style="margin: 10px 0 0 0; font-size: 12px;">NMO Capacitación Neurolúdica © 2025</p>
        </div>
      </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // ✅ LAZY INITIALIZATION - Solo crear instancia cuando se necesite
    const apiKey = process.env.RESEND_API_KEY;

    // Verificar que la API key exista
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables');
      return NextResponse.json(
        {
          error: 'Configuración del servidor incompleta',
          details: 'RESEND_API_KEY no configurada'
        },
        { status: 500 }
      );
    }

    // Crear instancia de Resend solo cuando se hace la request
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validación de campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Enviar email con Resend
    const { data, error } = await resend.emails.send({
      from: 'NMO Contacto <contacto@nmolatam.com>',
      to: ['contacto@nmolatam.com'],
      replyTo: email,
      subject: `Nuevo contacto de ${name} - nmolatam.com`,
      html: EmailTemplate({ name, email, phone, message }),
    });

    // Manejar error de Resend
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          error: 'Error al enviar el email',
          details: error.message
        },
        { status: 500 }
      );
    }

    // Respuesta exitosa
    return NextResponse.json(
      {
        success: true,
        message: 'Email enviado correctamente',
        emailId: data?.id
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        error: 'Error al enviar el email',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// ✅ Opcional: GET para healthcheck
export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;

  return NextResponse.json({
    status: 'ok',
    resendConfigured: !!apiKey,
    timestamp: new Date().toISOString(),
  });
}