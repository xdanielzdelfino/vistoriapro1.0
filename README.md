<p align="center">
  <img src="frontend/public/VistoriaPro.png" alt="VistoriaPro Logo" width="120" height="120">
</p>

<h1 align="center">VistoriaPro</h1>

<p align="center">
  <strong>Sistema completo de vistorias de imóveis com geração automática de laudos</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" alt="Status: Em Desenvolvimento">
  <img src="https://img.shields.io/badge/version-1.0.0--beta-blue" alt="Version: 1.0.0-beta">
  <img src="https://img.shields.io/badge/tipo-projeto%20pessoal-purple" alt="Tipo: Projeto Pessoal">
  <img src="https://img.shields.io/badge/demo-disponível-orange" alt="Demo Disponível">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-Express%205-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/PostgreSQL-Supabase-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa&logoColor=white" alt="PWA">
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Arquitetura](#-arquitetura)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [API Reference](#-api-reference)
- [Roadmap](#-roadmap)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

### O que é o VistoriaPro?

O **VistoriaPro** é uma solução completa e moderna para gestão de vistorias imobiliárias. Desenvolvido com foco em **mobile-first** e experiência de usuário fluida, o sistema permite que vistoriadores realizem inspeções de imóveis de forma rápida, organizada e profissional.

### Problema que Resolve

- **Vistorias em papel**: Elimina a necessidade de formulários físicos e digitalização posterior
- **Fotos desorganizadas**: Organiza automaticamente as fotos por cômodo
- **Laudos manuais**: Gera laudos profissionais em PDF e DOCX automaticamente
- **Falta de padronização**: Checklists pré-definidos por tipo de imóvel garantem consistência
- **Retrabalho**: Dados salvos em tempo real, sem perda de informações

### Principais Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 📱 **PWA Mobile-First** | Funciona offline e pode ser instalado como app nativo |
| 🏠 **Cadastro de Imóveis** | Gestão completa de imóveis com tipos personalizados |
| 📸 **Captura de Fotos** | Câmera integrada com organização por cômodo |
| 🎤 **Transcrição de Áudio** | Grave descrições e converta automaticamente em texto |
| 📄 **Geração de Laudos** | PDF e DOCX profissionais com fotos e descrições |
| 👥 **Multi-usuários** | Controle de acesso com permissões por empresa |
| ☁️ **Storage na Nuvem** | Fotos armazenadas no Supabase Storage |

### Diferenciais

- ⚡ **Performance**: Lazy loading, code splitting e otimizações de renderização
- 🎨 **UI/UX Moderna**: Interface escura elegante com animações fluidas
- 📱 **100% Responsivo**: Experiência nativa em qualquer dispositivo
- 🔒 **Seguro**: Autenticação JWT com controle de permissões
- 🌐 **Offline-Ready**: PWA com service workers para uso sem internet

---

## 🖥️ Demonstração

### Screenshots

<p align="center">
  <img src="docs/screenshots/dashboard.png" alt="Dashboard Principal" width="300"><br>
  <em>Dashboard Principal</em>
</p>

<p align="center">
  <img src="docs/screenshots/imoveis.png" alt="Lista de Imóveis" width="300"><br>
  <em>Lista de Imóveis Cadastrados</em>
</p>

<p align="center">
  <img src="docs/screenshots/nova-vistoria.gif" alt="Nova Vistoria" width="300"><br>
  <em>Fluxo de Nova Vistoria</em>
</p>

### Demo Online

| Ambiente | URL |
|----------|-----|
| **Frontend (Demo)** | [https://vistoriapro.netlify.app](https://vistoriapro.netlify.app) |
| **Backend API (Demo)** | Hospedado no Railway |

> 🔑 **Credenciais de Demonstração:**
> - **Email:** `admin1@empresa.com`
> - **Senha:** `admin123`
>
> *Use essas credenciais para explorar todas as funcionalidades do sistema.*

### Fluxo do Usuário

```
1. Login → 2. Dashboard → 3. Nova Vistoria → 4. Selecionar Tipo de Imóvel
     ↓
5. Escolher Imóvel → 6. Checklist de Cômodos → 7. Capturar Fotos/Áudio
     ↓
8. Revisar Dados → 9. Gerar Laudo PDF/DOCX → 10. Download/Compartilhar
```

---

## 🏗️ Arquitetura

### Visão Geral

O VistoriaPro segue uma arquitetura **cliente-servidor** com separação clara de responsabilidades:

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  React 19 + TypeScript + Vite + Styled Components + PWA         │
│  Deploy: Netlify                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ HTTPS/REST
┌─────────────────────────────────────────────────────────────────┐
│                          BACKEND                                 │
│  Node.js + Express 5 + JWT Auth + Multer                        │
│  Deploy: Render/Railway                                          │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌─────────────────────────┐     ┌─────────────────────────┐
│      POSTGRESQL         │     │    SUPABASE STORAGE     │
│   Banco de Dados        │     │   Arquivos e Imagens    │
│   (Supabase)            │     │                         │
└─────────────────────────┘     └─────────────────────────┘
```

### Diagrama de Fluxo (Mermaid)

```mermaid
flowchart TB
    subgraph Cliente["📱 Cliente (PWA)"]
        UI[React + TypeScript]
        SW[Service Worker]
        LS[Local Storage]
    end

    subgraph API["🖥️ Backend API"]
        EXP[Express.js]
        AUTH[Auth Middleware]
        CTRL[Controllers]
        SVC[Services]
        MDL[Models]
    end

    subgraph Database["🗄️ Dados"]
        PG[(PostgreSQL)]
        SB[(Supabase Storage)]
    end

    subgraph Reports["📄 Geração de Laudos"]
        PDF[Puppeteer - PDF]
        DOCX[docx - Word]
    end

    UI -->|REST API| EXP
    SW -->|Cache| LS
    EXP --> AUTH
    AUTH --> CTRL
    CTRL --> SVC
    SVC --> MDL
    MDL --> PG
    SVC --> SB
    SVC --> PDF
    SVC --> DOCX
    PDF -->|Download| UI
    DOCX -->|Download| UI
```

### Fluxo de Vistoria

```mermaid
sequenceDiagram
    participant U as Usuário
    participant F as Frontend
    participant B as Backend
    participant DB as PostgreSQL
    participant S as Supabase Storage

    U->>F: Inicia Nova Vistoria
    F->>B: POST /vistorias
    B->>DB: INSERT vistoria
    DB-->>B: vistoria_id
    B-->>F: { id, status: "em_andamento" }
    
    loop Para cada cômodo
        U->>F: Captura foto
        F->>B: POST /fotos (multipart)
        B->>S: Upload imagem
        S-->>B: URL pública
        B->>DB: INSERT foto
        B-->>F: { foto_id, url }
    end

    U->>F: Finaliza Vistoria
    F->>B: PUT /vistorias/:id/finalizar
    B->>DB: UPDATE status = "finalizada"
    B-->>F: { success: true }

    U->>F: Gerar Laudo
    F->>B: POST /relatorios/gerar
    B->>DB: SELECT dados completos
    B->>B: Gera PDF/DOCX
    B->>S: Upload relatório
    B-->>F: { url_arquivo }
    F->>U: Download automático
```

---

## 🛠️ Tecnologias

### Frontend

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.1.0 | Biblioteca de UI |
| **TypeScript** | 5.8 | Tipagem estática |
| **Vite** | 6.3 | Build tool e dev server |
| **Styled Components** | 6.1 | CSS-in-JS |
| **React Router** | 7.6 | Roteamento SPA |
| **Framer Motion** | 12.x | Animações |
| **Lucide React** | 0.517 | Ícones |
| **Axios** | 1.10 | Cliente HTTP |
| **PWA (vite-plugin-pwa)** | 1.0 | Progressive Web App |

### Backend

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **Node.js** | 20+ | Runtime JavaScript |
| **Express** | 5.1 | Framework web |
| **PostgreSQL** | 15+ | Banco de dados |
| **Supabase** | 2.43 | Storage e auth |
| **JWT** | 9.0 | Autenticação |
| **Multer** | 2.0 | Upload de arquivos |
| **Puppeteer** | 24.x | Geração de PDF |
| **docx** | - | Geração de DOCX |
| **bcrypt** | 6.0 | Hash de senhas |

### Infraestrutura

| Serviço | Uso |
|---------|-----|
| **Netlify** | Deploy frontend |
| **Render/Railway** | Deploy backend |
| **Supabase** | PostgreSQL + Storage |
| **GitHub** | Versionamento |

---

## 🚀 Instalação

### Pré-requisitos

- **Node.js** >= 20.x
- **npm** >= 10.x ou **yarn** >= 1.22
- **PostgreSQL** 15+ (ou conta Supabase)
- **Git**

### Clone o Repositório

```bash
git clone https://github.com/seu-usuario/vistoriapro1.0.git
cd vistoriapro
```

### Backend

```bash
# Acesse a pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# Execute em desenvolvimento
npm run dev
```

### Frontend

```bash
# Em outro terminal, acesse a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com a URL da API

# Execute em desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Frontend
cd frontend
npm run build
# Output em: frontend/dist/

# Backend
cd backend
npm start
```

---

## ⚙️ Configuração

### Variáveis de Ambiente - Backend

Crie um arquivo `.env` na pasta `backend/`:

```env
# Servidor
PORT=3001
NODE_ENV=production

# Banco de Dados
DATABASE_URL=postgresql://user:password@host:5432/database

# JWT
JWT_SECRET=sua-chave-secreta-muito-segura-aqui
JWT_EXPIRES_IN=7d

# Supabase Storage
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-anon-aqui
SUPABASE_BUCKET=fotos

# CORS
FRONTEND_URL=https://vistoriapro.netlify.app
```

### Variáveis de Ambiente - Frontend

Crie um arquivo `.env` na pasta `frontend/`:

```env
VITE_API_URL=https://sua-api.com
VITE_APP_NAME=VistoriaPro
```

### Configuração do Supabase

1. Crie um projeto em [supabase.com](https://supabase.com)
2. Copie as credenciais de `Settings > API`
3. Crie um bucket chamado `fotos` em `Storage`
4. Configure as políticas de acesso do bucket

### Banco de Dados

Execute o script de criação das tabelas:

```bash
cd backend
node scripts/recreate-database.js
```

---

## 📖 Uso

### Endpoints da API

#### Autenticação

```bash
# Login
curl -X POST https://api.vistoriapro.com/usuarios/login \
  -H "Content-Type: application/json" \
  -d '{"email": "usuario@email.com", "senha": "123456"}'

# Resposta
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "email": "usuario@email.com"
  }
}
```

#### Imóveis

```bash
# Listar imóveis
curl -X GET https://api.vistoriapro.com/imoveis \
  -H "Authorization: Bearer SEU_TOKEN"

# Criar imóvel
curl -X POST https://api.vistoriapro.com/imoveis \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Apartamento Centro",
    "tipo": "APARTAMENTO",
    "endereco_completo": "Rua das Flores, 123",
    "cidade": "São Paulo",
    "uf": "SP",
    "cep": "01234-567"
  }'
```

#### Vistorias

```bash
# Criar vistoria
curl -X POST https://api.vistoriapro.com/vistorias \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "imovel_id": 1,
    "descricao": "Vistoria de entrada",
    "data": "2025-12-04"
  }'

# Finalizar vistoria
curl -X PUT https://api.vistoriapro.com/vistorias/1/finalizar \
  -H "Authorization: Bearer SEU_TOKEN"
```

#### Fotos

```bash
# Upload de foto
curl -X POST https://api.vistoriapro.com/fotos \
  -H "Authorization: Bearer SEU_TOKEN" \
  -F "foto=@/caminho/foto.jpg" \
  -F "vistoria_id=1" \
  -F "comodo_id=sala"
```

#### Relatórios

```bash
# Gerar laudo PDF
curl -X POST https://api.vistoriapro.com/relatorios/gerar \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"vistoria_id": 1, "formato": "pdf"}'

# Gerar laudo DOCX
curl -X POST https://api.vistoriapro.com/relatorios/gerar \
  -H "Authorization: Bearer SEU_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"vistoria_id": 1, "formato": "docx"}'
```

### Exemplo em TypeScript

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.vistoriapro.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

// Listar vistorias de um imóvel
async function listarVistorias(imovelId: number) {
  const response = await api.get(`/vistorias/imovel/${imovelId}`);
  return response.data;
}

// Upload de foto
async function uploadFoto(file: File, vistoriaId: number, comodoId: string) {
  const formData = new FormData();
  formData.append('foto', file);
  formData.append('vistoria_id', String(vistoriaId));
  formData.append('comodo_id', comodoId);

  const response = await api.post('/fotos', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

// Gerar laudo
async function gerarLaudo(vistoriaId: number, formato: 'pdf' | 'docx') {
  const response = await api.post('/relatorios/gerar', {
    vistoria_id: vistoriaId,
    formato,
  });
  
  // Download automático
  window.open(response.data.url, '_blank');
}
```

---

## 📁 Estrutura de Pastas

```
vistoriapro/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 config/          # Configurações (database, supabase)
│   │   ├── 📁 constants/       # Constantes do sistema
│   │   ├── 📁 controllers/     # Controladores das rotas
│   │   │   ├── comodoVistoriaController.js
│   │   │   ├── empresaController.js
│   │   │   ├── fotoController.js
│   │   │   ├── imovelController.js
│   │   │   ├── relatorioController.js
│   │   │   ├── usuarioController.js
│   │   │   └── vistoriaController.js
│   │   ├── 📁 middlewares/     # Middlewares (auth, upload)
│   │   │   ├── auth.js
│   │   │   ├── bloqueioUsuario.js
│   │   │   └── multerFoto.js
│   │   ├── 📁 models/          # Modelos de dados
│   │   │   ├── empresaModel.js
│   │   │   ├── fotoModel.js
│   │   │   ├── imovelModel.js
│   │   │   ├── usuarioModel.js
│   │   │   └── vistoriaModel.js
│   │   ├── 📁 routes/          # Definição de rotas
│   │   ├── 📁 services/        # Serviços (storage, reports)
│   │   │   ├── storageService.js
│   │   │   └── docxReportService.js
│   │   └── 📁 templates/       # Templates HTML para PDF
│   ├── 📁 scripts/             # Scripts utilitários
│   │   ├── create-admin.js
│   │   ├── recreate-database.js
│   │   └── seed-imoveis.js
│   ├── 📁 uploads/             # Uploads temporários
│   ├── server.js               # Entry point
│   ├── package.json
│   └── Procfile                # Deploy config
│
├── 📁 frontend/
│   ├── 📁 public/              # Assets estáticos
│   │   ├── manifest.webmanifest
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   └── _redirects          # Netlify SPA config
│   ├── 📁 src/
│   │   ├── 📁 assets/          # Imagens e sons
│   │   ├── 📁 components/      # Componentes React
│   │   │   ├── AppHeader.tsx
│   │   │   ├── MobileTabBar.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── 📁 inspection/  # Componentes de vistoria
│   │   ├── 📁 config/          # Configurações
│   │   ├── 📁 constants/       # Constantes e tipos de imóveis
│   │   ├── 📁 data/            # Dados estáticos (checklists)
│   │   ├── 📁 hooks/           # Custom hooks
│   │   ├── 📁 pages/           # Páginas da aplicação
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── PropertyListPage.tsx
│   │   │   ├── PropertyLaudoPage.tsx
│   │   │   ├── InspectionPage.tsx
│   │   │   └── PropertyCategoryPage.tsx
│   │   ├── 📁 routes/          # Configuração de rotas
│   │   ├── 📁 services/        # Serviços de API
│   │   ├── 📁 styles/          # Temas e estilos globais
│   │   └── 📁 types/           # Tipos TypeScript
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── netlify.toml            # Config Netlify
│
├── 📁 modelo-laudo/            # Modelo de laudo de referência
├── banco.sql                   # Schema do banco
└── README.md                   # Este arquivo
```

---

## 🗺️ Roadmap

### ✅ Concluído (v1.0)

- [x] Autenticação JWT com controle de permissões
- [x] CRUD completo de imóveis
- [x] Sistema de vistorias com checklist por tipo
- [x] Captura de fotos com câmera nativa
- [x] Upload de fotos para Supabase Storage
- [x] Geração de laudos em PDF
- [x] Geração de laudos em DOCX
- [x] Interface mobile-first com PWA
- [x] Barra de navegação inferior (MobileTabBar)
- [x] Filtros por tipo de imóvel
- [x] Sistema multi-empresa
- [x] Transcrição de áudio para texto (Speech-to-Text)

### 🚧 Em Desenvolvimento (v1.1)

- [ ] Assinatura digital no laudo
- [ ] Modo offline completo com sincronização
- [ ] Notificações push

### 📋 Planejado (v2.0)

- [ ] App nativo Android/iOS (Capacitor)
- [ ] Dashboard de métricas e relatórios
- [ ] Integração com CRMs imobiliários
- [ ] Compartilhamento de laudos por link
- [ ] Comparativo entre vistorias (entrada vs saída)
- [ ] Reconhecimento de danos por IA
- [ ] Geolocalização e mapa de imóveis

### 💡 Backlog

- [ ] Tema claro/escuro configurável
- [ ] Exportação em lote
- [ ] API pública com documentação Swagger
- [ ] Webhooks para integrações
- [ ] Backup automático de dados

---

## 💼 Habilidades Demonstradas

Este projeto demonstra domínio nas seguintes competências:

### Frontend
- ✅ **React 19** com Hooks e componentes funcionais
- ✅ **TypeScript** para tipagem estática e código robusto
- ✅ **Styled Components** para CSS-in-JS e theming
- ✅ **PWA** com Service Workers e instalação nativa
- ✅ **Mobile-First** e design responsivo
- ✅ **Lazy Loading** e code splitting para performance
- ✅ **Integração com APIs Web** (câmera, microfone, storage)

### Backend
- ✅ **Node.js + Express 5** para APIs REST
- ✅ **Arquitetura MVC** (Models, Controllers, Services)
- ✅ **JWT** para autenticação segura
- ✅ **Middlewares** customizados (auth, upload, validação)
- ✅ **Upload de arquivos** com Multer
- ✅ **Geração de PDF** com Puppeteer
- ✅ **Geração de DOCX** com biblioteca docx

### Banco de Dados & Infraestrutura
- ✅ **PostgreSQL** para persistência relacional
- ✅ **Supabase** para storage de arquivos na nuvem
- ✅ **Deploy** em Netlify (frontend) e Render (backend)
- ✅ **Variáveis de ambiente** e configuração segura

### Boas Práticas
- ✅ **Clean Code** e separação de responsabilidades
- ✅ **Conventional Commits** para histórico organizado
- ✅ **Documentação** técnica completa
- ✅ **Tratamento de erros** e validações
- ✅ **Segurança** (CORS, sanitização, auth)

---

## 🤝 Como Contribuir

O VistoriaPro está aberto para melhorias! Se você quer contribuir:

1. **Leia o [CONTRIBUTING.md](./CONTRIBUTING.md)** - Guia completo de contribuição
2. **Faça um fork** do projeto
3. **Crie uma branch** para sua feature (`git checkout -b feature/minha-feature`)
4. **Commit com padrão semântico** (`git commit -m "feat: adicionar minha feature"`)
5. **Faça push** para a branch (`git push origin feature/minha-feature`)
6. **Abra um Pull Request**

### Padrão de Commits

Seguimos [Commits Semânticos](https://www.conventionalcommits.org/pt-br/):

```bash
feat:     ✨ Nova funcionalidade
fix:      🐛 Correção de bug
docs:     📚 Documentação
style:    💄 Formatação
refactor: ♻️  Refatoração
perf:     ⚡ Performance
test:     ✅ Testes
chore:    🔧 Manutenção
```

### Exemplo de Commit

```bash
git commit -m "feat(autenticacao): adicionar login com Google

- Implementar OAuth 2.0
- Adicionar redirect flow
- Configurar API credentials"
```

---

## 📚 Documentação Adicional

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guia detalhado de contribuição
- **[SETUP_GITHUB.md](./SETUP_GITHUB.md)** - Como criar repositório no GitHub
- **[NOVO_REPO_PASSO_A_PASSO.md](./NOVO_REPO_PASSO_A_PASSO.md)** - Passo-a-passo prático
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guia de deployment e CI/CD
- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Quick start (10 min)
- **[REQUIREMENTS.md](./REQUIREMENTS.md)** - Mapeamento de requisitos
- **[CONFORMIDADE.md](./CONFORMIDADE.md)** - Conformidade com proposta
- **[START_HERE.md](./START_HERE.md)** - Ponto de entrada

---

## 📋 Roadmap

- [ ] **v1.0.0-beta** (Atual)
  - ✅ Autenticação JWT
  - ✅ CRUD de vistorias
  - ✅ Upload de fotos
  - ✅ Geração de laudos
  
- [ ] **v1.0.0** (Próximo)
  - [ ] Integração com sistema de pagamento
  - [ ] Dashboard avançado
  - [ ] Relatórios em PDF/Excel
  - [ ] Notificações em tempo real

- [ ] **v2.0.0** (Futuro)
  - [ ] API pública
  - [ ] Integração com sistemas imobiliários
  - [ ] Análise com IA
  - [ ] Marketplace de vistoriadores

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](./LICENSE) para detalhes.

---

## 👤 Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/xdanielzdelfino">
        <img src="https://github.com/xdanielzdelfino.png" width="100px;" alt="Daniel Leite Delfino"/><br>
        <sub><b>Daniel Leite Delfino</b></sub>
      </a><br>
      <sub>Desenvolvedor Full Stack</sub>
    </td>
  </tr>
</table>

### 📬 Contato

- 📧 **Email:** danielmarrero3@gmail.com
- 💼 **LinkedIn:** [xdanielzdelfino](https://www.linkedin.com/in/xdanielzdelfino)
- 🐙 **GitHub:** [@xdanielzdelfino](https://github.com/xdanielzdelfino)

---

> 💡 **Este é um projeto de portfólio** desenvolvido para demonstrar habilidades técnicas em desenvolvimento Full Stack. O sistema possui uma versão de demonstração online disponível para testes e avaliação.

---

<p align="center">
  <strong>Projeto desenvolvido como case de portfólio</strong><br>
</p>

<p align="center">
  <a href="#-vistoriapro">⬆️ Voltar ao topo</a>
</p>
