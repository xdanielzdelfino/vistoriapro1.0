# Docker Setup - VistoriaPro

## Build da Imagem

```bash
docker build -t vistoriapro:1.0.0 -f Dockerfile .
```

## Executar Container

### Variáveis de Ambiente Necessárias

O container requer as seguintes variáveis de ambiente:

- `DATABASE_URL`: **String de conexão PostgreSQL/Supabase completa** (obrigatório)
  - Formato: `postgresql://user:password@host:port/database`
  - Exemplo Supabase: `postgresql://postgres.xxxxx:password@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`
- `JWT_SECRET`: Secret para geração de tokens JWT (obrigatório)
  - Mínimo: 16 caracteres
  - Exemplo: `vistoriapro-secret-key-production-2026`
- `NODE_ENV`: Ambiente (padrão: `production`)
- `PORT`: Porta interna do container (padrão: `3000`)

### Comando Com Variáveis

```bash
docker run -d \
  --rm \
  -p 3001:3000 \
  -e "DATABASE_URL=postgresql://user:password@host:port/database" \
  -e "JWT_SECRET=seu-jwt-secret-aqui" \
  -e "NODE_ENV=production" \
  --name vistoriapro \
  vistoriapro:1.0.0
```

### Exemplo Com Credenciais Reais (Supabase)

```bash
# Definir variáveis (substitua pelos seus valores reais)
export DATABASE_URL="postgresql://postgres.YOUR_SUPABASE_ID:YOUR_PASSWORD@aws-0-sa-east-1.pooler.supabase.com:6543/postgres"
export JWT_SECRET="seu-jwt-secret-production-key-aqui"

# Para produção com Supabase real:
docker run -d \
  --rm \
  -p 3001:3000 \
  -e "DATABASE_URL=$DATABASE_URL" \
  -e "JWT_SECRET=$JWT_SECRET" \
  -e "NODE_ENV=production" \
  --name vistoriapro \
  vistoriapro:1.0.0
```

**Onde encontrar suas credenciais:**
- `DATABASE_URL`: Supabase Dashboard → Project → Database → Connection pooler
- `JWT_SECRET`: Gerado pelo seu sistema ou 32+ caracteres aleatórios

### Teste de Conectividade

Após iniciar o container, verificar se está respondendo:

```bash
# Health check
curl http://localhost:3001/health

# Debug (mostra variáveis de ambiente)
curl http://localhost:3001/debug

# Login de teste (substitua com credenciais reais do seu banco)
curl -X POST http://localhost:3001/api/usuarios/login \
  -H "Content-Type: application/json" \
  -d '{"email":"seu-email@exemplo.com","senha":"sua-senha"}'
```

Se receber token JWT (status 200), significa que o container está **100% funcional**!

## Validar Container

### Health Check
```bash
curl http://localhost:3001/health
```

Resposta esperada:
```json
{
  "status": "OK",
  "timestamp": "2026-02-22T01:22:42.586Z"
}
```

### Debug Endpoint
```bash
curl http://localhost:3001/debug
```

### Verificar Logs
```bash
docker logs vistoriapro
```

## Parar Container

```bash
docker stop vistoriapro
```

## Integração com Docker Compose (Opcional)

```yaml
version: '3.8'

services:
  vistoriapro:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3001:3000"
    environment:
      DATABASE_URL: "postgresql://user:password@postgres:5432/vistoriapro"
      JWT_SECRET: "seu-jwt-secret"
      NODE_ENV: "production"
    depends_on:
      - postgres
    healthcheck:
      test: ["CMD", "node", "-e", "require('http').get('http://localhost:3000', (res) => { if (res.statusCode !== 200) throw new Error(res.statusCode) })"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 5s

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: "password"
      POSTGRES_DB: "vistoriapro"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Com Docker Compose
```bash
docker-compose up -d
```
