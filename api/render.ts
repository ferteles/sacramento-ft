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
      script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https://www.clarity.ms https://c.clarity.ms https://www.googletagmanager.com;
      connect-src 'self' https://*.clarity.ms https://www.clarity.ms https://c.clarity.ms https://www.googletagmanager.com;
      frame-src 'self' https://www.googletagmanager.com;
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

    // 5. Substituir o placeholder "r4nd0m" pelo nonce real e adicionar nonce aos scripts do Vite
    let modifiedHtml = html.replace(/nonce="r4nd0m"/g, `nonce="${nonce}"`);
    
    // Adicionar nonce a todos os scripts que não têm nonce
    modifiedHtml = modifiedHtml.replace(
      /<script(?![^>]*nonce)([^>]*src="[^"]*"[^>]*)>/g,
      `<script nonce="${nonce}"$1>`
    );
    
    // Adicionar nonce a scripts inline que não têm nonce
    modifiedHtml = modifiedHtml.replace(
      /<script(?![^>]*nonce)([^>]*>)/g,
      `<script nonce="${nonce}"$1`
    );

    // 6. Enviar o HTML modificado
    response.setHeader('Content-Type', 'text/html');
    response.status(200).send(modifiedHtml);
  } catch (error) {
    console.error('Erro na função de renderização:', error);
    response.status(500).send('Internal Server Error');
  }
}