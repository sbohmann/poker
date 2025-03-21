
import http from 'http';

import fs from 'fs';

import path from 'path';

const DEFAULT_PORT = 3607;
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configPath = path.join(__dirname, 'configuration.json');

function getPortFromConfig() {
  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    return config.port;
  } catch (error) {
    console.error('Error reading configuration.json:', error.message);
    return undefined;
  }
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = getPortFromConfig() || DEFAULT_PORT;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
