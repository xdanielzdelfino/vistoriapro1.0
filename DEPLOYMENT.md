# 🚀 Guia de Deployment e DevOps - VistoriaPro

## Índice
1. [Docker e Containerização](#docker-e-containerização)
2. [CI/CD Pipeline](#cicd-pipeline)
3. [Deployment Automático](#deployment-automático)
4. [Ambientes](#ambientes)
5. [Monitoramento](#monitoramento)
6. [Troubleshooting](#troubleshooting)

---

## Docker e Containerização

### Build da Imagem

```bash
# Build da imagem backend
docker build -t vistoriapro-api:latest .

# Tag para registro
docker tag vistoriapro-api:latest seu-registry/vistoriapro-api:latest
```

### Executar com Docker Compose

```bash
# Iniciar todos os serviços
docker-compose up -d

# Apenas backend
docker-compose up -d backend

# Com rebuild
docker-compose up -d --build

# Ver logs
docker-compose logs -f backend

# Parar tudo
docker-compose down
```

### Dockerfile Highlights

- **Multi-stage build**: Reduz tamanho da imagem
- **Health check**: Monitoramento automático do container
- **Graceful shutdown**: Manipulação correta de sinais SIGTERM
- **Alpine Linux**: Imagem base otimizada e segura

---

## CI/CD Pipeline

### GitHub Actions Workflow

O projeto inclui pipeline automático em `.github/workflows/ci-cd.yml` com:

#### 1. **Backend Testing**
- Testes unitários com Jest
- Testes de integração  
- ESLint para verificação de código

#### 2. **Frontend Testing**
- Testes de componentes
- Build validation
- ESLint para verificação de código

#### 3. **Docker Build**
- Build da imagem Docker
- Push para registro (GHCR)
- Cache otimizado com buildx

#### 4. **Code Quality**
- Trivy security scanner
- Análise de vulnerabilidades

#### 5. **Deployment**
- Deploy automático na branch `main`
- Integração com Railway/Render

### Trigger do Pipeline

```yaml
- Push em main ou develop
- Pull requests para main/develop
```

### Secrets Necessários

Configure no GitHub Settings → Secrets and variables:

```
DEPLOY_KEY          # Chave privada SSH
DEPLOY_HOST         # Host do servidor
DEPLOY_USER         # Usuário SSH
RAILWAY_TOKEN       # Token Railway (opcional)
```

---

## Deployment Automático

### Railway (Recomendado)

#### Setup Automático
1. Conecte seu repositório GitHub ao Railway
2. Railway detectará o Dockerfile automaticamente
3. Configure variáveis de ambiente no painel

#### Variáveis de Ambiente
```env
NODE_ENV=production
PORT=3000
DB_HOST=seu-db-host
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua-senha
DB_NAME=vistoriapro
JWT_SECRET=sua-chave-segura
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_API_KEY=sua-chave-api
```

#### Deploy Manual
```bash
# Instalar CLI do Railway
npm i -g railway

# Login
railway login

# Inicial projeto
railway init

# Deploy
railway up
```

### Render

#### Configuração
1. Conecte GitHub ao Render
2. Crie novo Web Service
3. Aponte para Dockerfile
4. Configure environment variables

#### Deploy via CLI
```bash
# Instalar
npm install -g render-cli

# Deploy
render deploy --service-id=seu-id
```

### Netlify (Frontend)

```bash
# Instalar CLI
npm install -g netlify-cli

# Configure netlify.toml (já presente)

# Deploy
netlify deploy --prod
```

---

## Ambientes

### Desenvolvimento

```bash
# Terminal 1: Backend
cd backend
npm install
npm run dev

# Terminal 2: Frontend
cd frontend
npm install
npm run dev

# Acesso
# Frontend: http://localhost:5173
# Backend: http://localhost:3000
# API Docs: http://localhost:3000/api-docs
```

### Staging (usando Docker Compose)

```bash
# Estará no arquivo .env.staging
docker-compose -f docker-compose.staging.yml up
```

### Produção

- Deployado automaticamente em branch `main`
- Variáveis de ambiente configuradas no painel do serviço
- HTTPS obrigatório
- SSL/TLS automático (Let's Encrypt)

---

## Testes

### Backend

```bash
cd backend

# Executar testes
npm test

# Modo watch
npm run test:watch

# Cobertura
npm run test:coverage
```

### Frontend

```bash
cd frontend

# Executar testes
npm test

# Modo watch
npm run test:watch

# Cobertura
npm run test:coverage
```

### Testes E2E (opcional)

```bash
# Instalar dependências de testes
npm install -D cypress

# Executar
npx cypress run
```

---

## Monitoramento

### Logs

#### Backend (Docker)
```bash
docker logs vistoriapro-api -f

# Ver arquivo de logs
cat logs/requests.log
cat logs/errors.log
```

#### Railway/Render
- Acesse o dashboard do serviço
- Vá para "Logs"
- Filtre por timestamp ou erro

### Métricas

#### Railway
- CPU Usage
- Memory Usage
- Network I/O
- Request Rate

#### Render
- Memory
- CPU
- Storage

### Alertas

Configure notificações em:
- GitHub Actions (failed workflows)
- Railway/Render dashboard alerts
- Email alerts para erros críticos

---

## Variáveis de Ambiente

### Backend

```env
# Servidor
NODE_ENV=production
PORT=3000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=senha_super_segura
DB_NAME=vistoriapro

# JWT
JWT_SECRET=chave_super_segura_com_muitos_caracteres

# Supabase
SUPABASE_URL=https://projeto.supabase.co
SUPABASE_API_KEY=chave-api-supabase

# AWS S3 (opcional)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=sua-key
AWS_SECRET_ACCESS_KEY=sua-secret
S3_BUCKET_NAME=seu-bucket

# Logs
LOG_DIR=./logs
LOG_LEVEL=info
```

### Frontend

```env
VITE_API_URL=https://api.vistoriapro.com
VITE_SUPABASE_URL=https://projeto.supabase.co
VITE_SUPABASE_KEY=chave-publica-supabase
```

---

## Troubleshooting

### Container não inicia

```bash
# Verificar logs
docker logs vistoriapro-api

# Verificar variáveis de ambiente
docker inspect vistoriapro-api | grep -A 50 Env

# Reconstruir imagem
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Erro de conexão com banco

```bash
# Verificar se PostgreSQL está rodando
docker ps | grep postgres

# Testar conexão
docker exec vistoriapro-api psql postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME -c "SELECT version();"
```

### Deploy falha no GitHub Actions

1. Verifique secrets configurados
2. Veja logs em "Actions" tab
3. Verifique permissões do token
4. Valide Dockerfile

### Problemas de memória

```bash
# Aumentar limite
docker-compose.yml:
  services:
    backend:
      deploy:
        resources:
          limits:
            memory: 1G
```

---

## Performance e Segurança

### Otimizações

- ✅ Dockerfile multi-stage
- ✅ Health checks automáticos
- ✅ Graceful shutdown
- ✅ Connection pooling no banco
- ✅ Compressão GZIP habilitada
- ✅ Rate limiting (via middleware)
- ✅ CORS configurado

### Segurança

- ✅ JWT autenticação
- ✅ HTTPS/TLS obrigatório em produção
- ✅ Variáveis de ambiente para secrets
- ✅ Sanitização de inputs
- ✅ Validação robusta de dados
- ✅ Logging de requisições e erros
- ✅ CORS restritivo

---

## Checklist de Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados migrado
- [ ] SSL/TLS habilitado
- [ ] CORS configurado corretamente
- [ ] Logs funcionando
- [ ] Testes passando
- [ ] Health check respondendo
- [ ] Monitoramento configurado
- [ ] Backups agendados
- [ ] Documentação atualizada

---

## Referências

- [Docker Documentation](https://docs.docker.com)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)
- [Express.js Guide](https://expressjs.com)
