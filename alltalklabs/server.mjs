import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { createServer } from 'node:http';

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const host = process.env.HOST ?? '0.0.0.0';
const publicDir = join(process.cwd(), 'public');

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp'
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { 'content-type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(payload));
}

function safePathname(url) {
  const pathname = new URL(url, 'http://localhost').pathname;
  const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  return normalizedPath === '/' ? '/index.html' : normalizedPath;
}

function resolveAsset(pathname) {
  const candidate = join(publicDir, pathname);
  if (!candidate.startsWith(publicDir)) return null;
  if (!existsSync(candidate)) return null;
  if (!statSync(candidate).isFile()) return null;
  return candidate;
}

createServer((request, response) => {
  if (!request.url) {
    sendJson(response, 400, { ok: false, error: 'missing_url' });
    return;
  }

  const pathname = new URL(request.url, 'http://localhost').pathname;

  if (pathname === '/healthz') {
    sendJson(response, 200, { ok: true });
    return;
  }

  const assetPath = resolveAsset(safePathname(request.url)) ?? join(publicDir, 'index.html');
  const extension = extname(assetPath).toLowerCase();
  const contentType = contentTypes[extension] ?? 'application/octet-stream';

  response.writeHead(200, {
    'cache-control': extension === '.html' ? 'no-cache' : 'public, max-age=3600',
    'content-type': contentType
  });

  createReadStream(assetPath).pipe(response);
}).listen(port, host, () => {
  console.log(`AllTalk Labs landing page listening on http://${host}:${port}`);
});
