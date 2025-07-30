import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    // 1. Gerar um nonce aleatório e único para cada pedido
    const nonce = crypto.randomBytes(16).toString('base64');

    // 2. Construir a string da CSP com o nonce gerado
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://reservation.dish.co;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https://www.clarity.ms https://c.clarity.ms https://www.googletagmanager.com;
      connect-src 'self' https://*.clarity.ms https://www.clarity.ms https://c.clarity.ms https://www.googletagmanager.com https://reservation.dish.co;
      frame-src 'self' https://www.googletagmanager.com https://reservation.dish.co;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `;

    // 3. Definir o cabeçalho na resposta
    response.setHeader(
      'Content-Security-Policy',
      cspHeader.replace(/\s{2,}/g, ' ').trim()
    );

    // 4. Ler o ficheiro index.html da pasta de build (geralmente 'dist' para Vite)
    const buildDir = path.join(process.cwd(), 'dist');
    const html = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

    // 5. Ler e enviar o HTML
    let modifiedHtml = html;
    
    // Substituir qualquer placeholder "r4nd0m" caso exista
    modifiedHtml = modifiedHtml.replace(/nonce="r4nd0m"/g, '');

    // 6. Enviar o HTML modificado
    response.setHeader('Content-Type', 'text/html');
    response.status(200).send(modifiedHtml);
  } catch (error) {
    console.error('Erro na função de renderização:', error);
    response.status(500).send('Internal Server Error');
  }
}