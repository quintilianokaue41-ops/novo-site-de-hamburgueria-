# 📖 MANUAL DE USO - SISTEMA DE HAMBURGUERIA

## 🎯 O QUE VOCÊ RECEBEU

Um sistema completo de pedidos online para sua hamburgueria contendo:
- Site com cardápio
- Carrinho de compras
- Sistema de pedidos
- Painel administrativo para gerenciar pedidos

---

## 🚀 COMO USAR O SISTEMA

### PASSO 1: INSTALAR O NODE.JS

1. Baixe o Node.js em: https://nodejs.org/
2. Instale (clique em "Next" até finalizar)
3. Reinicie o computador

### PASSO 2: PREPARAR O SISTEMA

1. Extraia a pasta `Nova pasta` para o Desktop
2. Abra o terminal/prompt de comando na pasta
3. Execute o comando:
```
npm install
```

### PASSO 3: INICIAR O SERVIDOR

**OPÇÃO A - Duplo clique:**
- Dê dois cliques no arquivo `start.bat`

**OPÇÃO B - Por comando:**
```
node server.js
```

**IMPORTANTE:** Deixe essa janela aberta enquanto estiver usando o sistema!

---

## 💻 ACESSAR O SISTEMA

### NO SEU COMPUTADOR:

- **Site dos clientes:** http://localhost:3000/index.html
- **Painel Admin (SEU):** http://localhost:3000/admin.html

### EM CELULARES/TABLETS (mesma rede Wi-Fi):

1. Descubra o IP do seu computador:
   - Abra o Prompt de Comando
   - Digite: `ipconfig`
   - Procure por "Endereço IPv4" (exemplo: 192.168.0.5)

2. No celular, acesse:
   - **Site dos clientes:** http://SEU_IP:3000/index.html
   - **Painel Admin:** http://SEU_IP:3000/admin.html

---

## 👨‍💼 PAINEL ADMINISTRATIVO

### O que você pode fazer:

✅ Ver todos os pedidos em tempo real
✅ Ver informações completas dos clientes:
   - Nome
   - Telefone
   - Endereço (se for entrega)
   - Forma de pagamento
   - Observações

✅ Marcar pedidos como concluídos
✅ Clicar no botão WhatsApp para falar com o cliente
✅ Ver estatísticas:
   - Total de pedidos
   - Pedidos pendentes
   - Faturamento total

### Como acessar:
1. Com o servidor rodando
2. Abra o navegador
3. Acesse: http://localhost:3000/admin.html

---

## 📱 COMO OS CLIENTES FAZEM PEDIDOS

1. Cliente acessa o site pelo celular/computador
2. Navega pelo cardápio
3. Clica em "Adicionar ao Carrinho"
4. Clica no ícone do carrinho
5. Revisa os itens
6. Clica em "Finalizar Pedido"
7. Preenche os dados:
   - Nome
   - Telefone
   - Escolhe: Entrega ou Retirada
   - Se entrega: preenche endereço
   - Escolhe forma de pagamento
8. Confirma o pedido

**O pedido aparece AUTOMATICAMENTE no seu painel admin!**

---

## 🍔 COMO EDITAR O CARDÁPIO

Para adicionar, remover ou editar produtos:

1. Abra o arquivo `index.html` em um editor de texto
2. Procure pela seção `<ul class="menu-grid">`
3. Cada produto está assim:

```html
<li class="menu-item" data-id="1" data-name="Burger Clássico" data-price="29.90">
    <img src="URL_DA_IMAGEM">
    <span class="badge">Mais vendido</span>
    <h3>Burger Clássico</h3>
    <p>Descrição do produto</p>
    <strong>R$ 29,90</strong>
    <button class="btn add-to-cart">Adicionar ao Carrinho</button>
</li>
```

**Para editar:**
- `data-id`: número único do produto (1, 2, 3...)
- `data-name`: nome do produto
- `data-price`: preço (use ponto, exemplo: 29.90)
- `<h3>`: título que aparece
- `<p>`: descrição
- `<strong>`: preço visual

4. Salve o arquivo
5. Atualize a página no navegador

---

## 📞 CONFIGURAR SEU WHATSAPP

Para receber pedidos pelo WhatsApp (caso o servidor esteja offline):

1. Abra o arquivo `cart.js`
2. Procure por: `https://w.app/hf6lgm`
3. Substitua por seu link do WhatsApp:
   - Se tiver link personalizado: `https://w.app/SEU_LINK`
   - Ou use: `https://wa.me/5517997790727` (coloque seu número com DDI + DDD)

---

## ❌ PARAR O SERVIDOR

Quando não estiver usando o sistema:
- Feche a janela do terminal onde está rodando
- Ou pressione `Ctrl + C`

---

## 📊 ONDE FICAM OS PEDIDOS?

Todos os pedidos são salvos no arquivo `orders.json` na mesma pasta.
Você pode abrir esse arquivo para ver todos os dados dos pedidos.

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### Erro "Cannot find module 'express'"
- Execute: `npm install` na pasta do projeto

### Erro "Port 3000 already in use"
- Feche outros servidores rodando
- Ou reinicie o computador

### Site não abre em outros dispositivos
- Verifique se estão na mesma rede Wi-Fi
- Verifique o Firewall do Windows
- Confira se usou o IP correto

### Pedidos não aparecem no admin
- Verifique se o servidor está rodando
- Atualize a página do admin
- Verifique se o arquivo `orders.json` foi criado

---

## 🆘 SUPORTE

Se precisar de ajuda:
1. Verifique este manual primeiro
2. Procure o erro no Google
3. Entre em contato com o desenvolvedor

---

## 📝 DICAS IMPORTANTES

✅ Sempre mantenha o servidor rodando durante o horário de funcionamento
✅ Faça backup do arquivo `orders.json` regularmente
✅ Teste o sistema antes de divulgar aos clientes
✅ Configure o WhatsApp corretamente
✅ Personalize o cardápio com suas fotos e preços
✅ Não compartilhe o link do painel admin com clientes

---

## 🎨 PERSONALIZAÇÃO

### Mudar as cores:
- Abra `styles.css`
- Procure por `:root {`
- Edite a variável `--primary: #ff6b35;` com sua cor preferida

### Mudar textos:
- Abra `index.html`
- Edite os textos diretamente

### Mudar imagens:
- Substitua as URLs das imagens nos produtos

---

**Sistema desenvolvido com ❤️ para sua hamburgueria crescer!**

Boas vendas! 🍔🚀
