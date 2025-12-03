# 🚀 GUIA DE HOSPEDAGEM GRÁTIS

## 🎯 VISÃO GERAL

Você vai hospedar seu site de hamburgueria 100% GRÁTIS usando:
- **Railway** (back-end) - GRÁTIS
- Site fica disponível 24/7
- Sem precisar deixar computador ligado

---

## 📦 OPÇÃO 1: RAILWAY (MAIS FÁCIL) ⭐

### PASSO 1: Criar conta no Railway

1. Acesse: https://railway.app/
2. Clique em **"Login"** 
3. Escolha **"Login with GitHub"**
4. Autorize o Railway

### PASSO 2: Fazer Deploy

1. No Railway, clique em **"New Project"**
2. Escolha **"Deploy from GitHub repo"**
3. Conecte sua conta do GitHub (se não conectou)
4. Selecione o repositório: **novo-site-de-hamburgueria**
5. Clique em **"Deploy Now"**

### PASSO 3: Configurar Variáveis

1. Clique na aba **"Variables"**
2. Adicione:
   - `PORT` = (deixe vazio, Railway configura automaticamente)

### PASSO 4: Pegar o Link

1. Vá na aba **"Settings"**
2. Role até **"Domains"**
3. Clique em **"Generate Domain"**
4. Copie o link (ex: `seu-projeto.up.railway.app`)

### ✅ PRONTO! Seu site está no ar!

**Acesse:**
- Site: `https://seu-projeto.up.railway.app/index.html`
- Admin: `https://seu-projeto.up.railway.app/admin.html`

---

## 📦 OPÇÃO 2: RENDER (ALTERNATIVA)

### PASSO 1: Criar conta

1. Acesse: https://render.com/
2. Clique em **"Get Started"**
3. Faça login com GitHub

### PASSO 2: Fazer Deploy

1. Clique em **"New +"**
2. Escolha **"Web Service"**
3. Conecte seu repositório do GitHub
4. Configure:
   - **Name:** hamburgueria
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** FREE

5. Clique em **"Create Web Service"**

### PASSO 3: Aguardar

- Deploy demora 2-5 minutos
- Acompanhe os logs

### ✅ PRONTO!

**Link:** `https://hamburgueria.onrender.com`

⚠️ **ATENÇÃO:** No plano grátis, o site "dorme" após 15 min sem uso e demora 30s para "acordar" no primeiro acesso.

---

## 📦 OPÇÃO 3: CYCLIC (BOA ALTERNATIVA)

### PASSO 1: Criar conta

1. Acesse: https://cyclic.sh/
2. Clique em **"Login with GitHub"**

### PASSO 2: Deploy

1. Clique em **"Link Your Own"**
2. Selecione seu repositório
3. Clique em **"Connect"**
4. Aguarde o deploy (2-3 minutos)

### ✅ PRONTO!

**Link:** `https://seu-projeto.cyclic.app`

---

## 🔥 DOMÍNIO PERSONALIZADO (OPCIONAL)

Quer usar domínio próprio tipo `minhahamburgueria.com.br`?

### Registrar Domínio:
- **Registro.br** - R$ 40/ano (.com.br)
- **Hostinger** - R$ 40/ano (.com)

### Configurar:
1. No Railway/Render, vá em **"Custom Domain"**
2. Adicione seu domínio
3. Configure DNS conforme instruções

**COBRE DO CLIENTE:** R$ 200-300 extra + R$ 40/ano

---

## 💰 ESTRATÉGIA DE VENDA

### PLANO BÁSICO (R$ 800)
- Sistema local
- Precisa deixar PC ligado

### PLANO PREMIUM (R$ 2.500)
- Sistema na nuvem 24/7
- Não precisa PC ligado
- Acesso de qualquer lugar
- Link profissional

### PLANO EMPRESARIAL (R$ 3.500)
- Tudo do Premium
- + Domínio personalizado (.com.br)
- + 3 meses de suporte grátis

**Mensalidade:** R$ 80-150/mês (manutenção)

---

## 🆘 PROBLEMAS COMUNS

### "Build Failed"
**Solução:**
- Verifique se `package.json` está correto
- Veja os logs de erro
- Certifique-se que commitou tudo no GitHub

### "Application Error"
**Solução:**
- Verifique variável `PORT` no servidor
- Veja logs no painel do Railway/Render

### "Site está lento"
**Solução:**
- Normal no plano grátis do Render (primeiro acesso demora)
- Use Railway ou Cyclic para melhor performance grátis

---

## 📊 COMPARAÇÃO

| Plataforma | Grátis? | Performance | Limites |
|------------|---------|-------------|---------|
| **Railway** ⭐ | Sim ($5 crédito/mês) | Excelente | Generoso |
| **Render** | Sim | Boa (dorme 15min) | 750h/mês |
| **Cyclic** | Sim | Muito Boa | Generoso |
| **Vercel** | Só front-end | Excelente | Ilimitado |

---

## 🎓 PRÓXIMOS PASSOS

1. **Teste local** - Certifique-se que está funcionando
2. **Commit no GitHub** - Suba todas as alterações
3. **Escolha plataforma** - Railway (recomendado)
4. **Faça deploy** - Siga os passos acima
5. **Teste online** - Acesse o link e teste tudo
6. **Compartilhe** - Envie o link pro cliente

---

## ✅ CHECKLIST DE DEPLOY

- [ ] Código funcionando localmente
- [ ] Tudo commitado no GitHub
- [ ] Conta criada no Railway/Render
- [ ] Deploy feito
- [ ] Link funcionando
- [ ] Testado fazer pedido
- [ ] Testado painel admin
- [ ] Link enviado ao cliente

---

**Sucesso! Agora você tem um sistema profissional rodando na nuvem de GRAÇA!** 🎉

**Cobra R$ 2.500 do cliente e lucra 100%!** 💰
