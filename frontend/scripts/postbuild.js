/**
 * Post-build script - cross-platform
 * Copia arquivo _redirects para dist (se existir)
 * Funciona em Windows, macOS e Linux
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, '..', 'public', '_redirects');
const dest = path.join(__dirname, '..', 'dist', '_redirects');

if (fs.existsSync(source)) {
  try {
    fs.copyFileSync(source, dest);
    console.log('✓ _redirects copiado para dist/');
  } catch (err) {
    console.error('Erro ao copiar _redirects:', err);
    process.exit(1);
  }
} else {
  console.log('ℹ public/_redirects não encontrado, pulando cópia');
}
