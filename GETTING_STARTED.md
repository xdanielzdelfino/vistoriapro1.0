# VistoriaPro - Como Começar

## 1️⃣ Pré-requisitos

- Node.js 20+ 
- npm 10+
- PostgreSQL 15+ (ou conta Supabase)
- Docker (opcional, para desenvolvimento com containers)
- Git

## 2️⃣ Setup Inicial

### Clonar o repositório
```bash
git clone https://github.com/xdanielzdelfino/vistoriapro1.0.git
cd vistoriapro1.0
```

### Instalar dependências
```bash
# Backend
cd backend
npm install

# Frontend (em outro terminal)
cd frontend
npm install
```

## 3️⃣ Configurar Ambiente

### Backend
```bash
cd backend

# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env com suas credenciais:
# - DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
# - JWT_SECRET (gere uma chave aleatória)
# - SUPABASE_URL e SUPABASE_API_KEY
```

### Frontend
```bash
cd frontend

# Copiar arquivo de exemplo
cp .env.example .env.local

# Editar .env.local com URL da API:
# - VITE_API_URL=http://localhost:3000
```

## 4️⃣ Executar Localmente

### Opção A: Sem Docker

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Rodará em http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Rodará em http://localhost:5173
```

### Opção B: Com Docker

```bash
# Iniciar todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f backend

# Parar
docker-compose down
```

## 5️⃣ Acessar a Aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Docs (Swagger)**: http://localhost:3000 (documentação em swagger.yaml)
- **Health Check**: http://localhost:3000/health

## 6️⃣ Credenciais Demo

Após criar o usuário admin:
```
Email: admin@empresa.com
Senha: admin123
```

## 7️⃣ Testes

### Backend
```bash
cd backend
npm test              # Executar uma vez
npm run test:watch   # Modo observador
npm run test:coverage # Gerar cobertura
```

### Frontend
```bash
cd frontend
npm test              # Executar uma vez
npm run test:watch   # Modo observador
npm run test:coverage # Gerar cobertura
```

## 8️⃣ Build para Produção

### Frontend
```bash
cd frontend
npm run build
# Output em: frontend/dist/
```

### Backend (Docker)
```bash
docker build -t vistoriapro-api:latest .
docker run -p 3000:3000 -e NODE_ENV=production vistoriapro-api:latest
```

## 9️⃣ Deployar

### Frontend (Netlify)
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Backend (Railway)
1. Conecte seu GitHub ao Railway
2. Railway detectará o Dockerfile automaticamente
3. Configure as variáveis de ambiente
4. Deploy será automático

## 🔟 Estrutura do Projeto

```
vistoriapro/
├── backend/                 # API Node.js/Express
│   ├── src/
│   │   ├── controllers/     # Lógica das rotas
│   │   ├── services/        # Lógica de negócio
│   │   ├── middlewares/     # Middleware Express
│   │   ├── models/          # Modelos de dados
│   │   ├── routes/          # Rotas da API
│   │   └── __tests__/       # Testes automatizados
│   ├── .env.example         # Variáveis de ambiente
│   ├── Dockerfile           # Container definition
│   └── package.json
│
├── frontend/                # React + TypeScript
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/           # Páginas/Views
│   │   ├── services/        # Serviços (API client)
│   │   ├── __tests__/       # Testes automatizados
│   │   └── styles/          # Estilos globais
│   ├── .env.example         # Variáveis de ambiente
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml        # Pipeline GitHub Actions
│
├── databases/               # Scripts SQL
├── docker-compose.yml       # Compose para dev local
├── Dockerfile               # Backend container
├── README.md                # Documentação principal
├── DEPLOYMENT.md            # Guia de deployment
└── REQUIREMENTS.md          # Mapeamento de requisitos

```

## 📞 Suporte

- Verifique `DEPLOYMENT.md` para troubleshooting
- Verifique `REQUIREMENTS.md` para requisitos do projeto
- Veja `README.md` para documentação completa

## 📚 Documentação

- [API Swagger](./backend/swagger.yaml)
- [Guia de Deployment](./DEPLOYMENT.md)
- [Requisitos do Projeto](./REQUIREMENTS.md)
- [README Principal](./README.md)

## ✨ Próximas Etapas

1. Criar relatório técnico
2. Gravar vídeo de demonstração
3. Fazer push para GitHub
4. Configurar deploy automático
5. Testar pipeline CI/CD
