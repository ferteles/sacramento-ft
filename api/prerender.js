export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'];
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent);

  if (isBot) {
    const prerenderToken = process.env.PRERENDER_TOKEN;
    const prerenderUrl = `https://service.prerender.io${req.url}`;
    const response = await fetch(prerenderUrl, {
      headers: { 'X-Prerender-Token': prerenderToken }
    });
    const html = await response.text();
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  }

  // Se não for bot, retorna 404 ou pode redirecionar para SPA normalmente
  res.status(404).send('Not found');
}
