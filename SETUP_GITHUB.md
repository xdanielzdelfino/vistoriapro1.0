# 🚀 Setup do Repositório GitHub

## Passo 1: Criar Repositório no GitHub

```bash
# Abrir https://github.com/new
# Preencher:
# - Repository name: vistoriapro
# - Description: Sistema de vistorias de imóveis com geração automática de laudos
# - Public (✓)
# - Add a README file (✗) - já temos
# - Add .gitignore (✓) selecionar "Node"
# - Add a license (✓) selecionar "MIT"
```

## Passo 2: Clonar e Fazer Push Inicial

```bash
cd c:\vistoriapro

# Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/vistoriapro.git

# Fazer push da branch main
git branch -M main
git push -u origin main

# Criar branch develop
git checkout -b develop
git push -u origin develop
```

## Passo 3: Configurar Branch Protection

**GitHub → Settings → Branches → Add branch protection rule**

### Para `main`:
- ✅ Require pull request reviews before merging (1 approval)
- ✅ Require status checks to pass before merging
- ✅ Include administrators
- ✅ Restrict who can push to matching branches

### Para `develop`:
- ✅ Require pull request reviews before merging (1 approval)
- ⚠️ Menos restritivo que main

## Passo 4: Configurar GitHub Actions

O arquivo `.github/workflows/ci-cd.yml` já está pronto!

**Verificar:**
```
GitHub → Actions → Ver que CI/CD Pipeline aparece
```

## Passo 5: Configurar GitHub Projects (Kanban)

### 5.1 Criar Projeto

```
GitHub → Projects → New → Table (beta)
Nome: "VistoriaPro Development"
Descrição: "Kanban para desenvolvimento"
```

### 5.2 Estrutura

Criar com colunas:
- **📋 Backlog** - Ideias não iniciadas
- **🔄 In Progress** - Sendo desenvolvido
- **🔍 Review** - Aguardando revisão
- **✅ Done** - Completo

### 5.3 Adicionar Issues

```
Projects → Add item → Criar/Selecionar issues
```

## Passo 6: Criar Milestones

**GitHub → Issues → Milestones → New**

```
Exemplo:
- v1.0.0-beta (15/03/2026)
- v1.0.0 (30/04/2026)
- v2.0.0-roadmap (futuro)
```

## Passo 7: Configurar Secrets para CI/CD

**GitHub → Settings → Secrets and variables → Actions**

Adicionar (se tiver):
```
GitHub → Settings → Developer settings → Personal access tokens
Criar token com escopo 'repo'
Copiar token
GitHub → Settings → Secrets → REGISTRY_TOKEN
```

## Passo 8: Criar Labels Padrão

**GitHub → Issues → Labels**

Remover labels padrão e criar customizados:

### Tipos
- `type: feature` - Nova funcionalidade (✨ verde)
- `type: bug` - Bug (🐛 vermelho)
- `type: documentation` - Documentação (📚 azul)
- `type: enhancement` - Melhoria (💄 roxo)

### Prioridade
- `priority: critical` - Crítico (🔴 vermelho escuro)
- `priority: high` - Alto (🟠 laranja)
- `priority: medium` - Médio (🟡 amarelo)
- `priority: low` - Baixo (🟢 verde)

### Status
- `status: needs-review` - Aguardando revisão (🔵 azul)
- `status: blocked` - Bloqueado (⚫ preto)
- `status: wontfix` - Não será corrigido (⚪ branco)

### Componentes
- `component: backend` - Backend
- `component: frontend` - Frontend
- `component: devops` - DevOps/Docker
- `component: docs` - Documentação

## Passo 9: Estrutura Inicial de Issues

Criar Issues para features principais:

```markdown
### Epic 1: Autenticação
- [ ] Issue: Implementar JWT
- [ ] Issue: Implementar 2FA

### Epic 2: Vistorias
- [ ] Issue: CRUD de vistorias
- [ ] Issue: Upload de fotos

### Epic 3: DevOps
- [ ] Issue: Setup Docker
- [ ] Issue: Setup CI/CD
```

## Passo 10: Testar o Workflow Completo

```bash
# 1. Criar feature branch
git checkout -b feature/teste-branch develop

# 2. Fazer mudança
echo "# Teste" >> README.md

# 3. Commit semântico
git add .
git commit -m "feat: adicionar teste de branch"

# 4. Push
git push -u origin feature/teste-branch

# 5. Criar PR no GitHub (develop)
# GitHub → Compare & pull request → Create pull request

# 6. Aguardar testes passarem ✅

# 7. Merge pelo GitHub

# 8. Delete branch
git branch -D feature/teste-branch
```

## ✅ Checklist Final

- [ ] Repositório criado e público
- [ ] Main branch protegida
- [ ] Develop branch criada
- [ ] CI/CD pipeline executando
- [ ] GitHub Projects (Kanban) criado
- [ ] Labels customizados criados
- [ ] Issue templates funcionando
- [ ] PR template funcionando
- [ ] CONTRIBUTING.md linkado no README
- [ ] Secrets configurados (se necessário)

## 📚 Recursos

- [GitHub Docs](https://docs.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Commits Semânticos](https://www.conventionalcommits.org/)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## 🚀 Passo Extra: Adicionar Badge ao README

```markdown
[![CI/CD Pipeline](https://github.com/SEU-USUARIO/vistoriapro/workflows/CI%2FCD%20Pipeline/badge.svg)](https://github.com/SEU-USUARIO/vistoriapro/actions)
[![Code Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)](https://github.com/SEU-USUARIO/vistoriapro)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
```

---

**Após seguir esses passos, seu repositório estará 100% em conformidade com a proposta! 🎉**
