const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const ordersFile = path.join(__dirname, 'orders.json');

if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, JSON.stringify([], null, 2));
}

function loadOrders() {
    try {
        const data = fs.readFileSync(ordersFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function saveOrders(orders) {
    fs.writeFileSync(ordersFile, JSON.stringify(orders, null, 2));
}

app.post('/api/orders', (req, res) => {
    try {
        const { items, total, date, customer } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Carrinho vazio ou inválido' });
        }

        const orders = loadOrders();
        
        const newOrder = {
            orderId: Date.now(),
            items,
            total,
            customer: customer || null,
            date: date || new Date().toISOString(),
            status: 'pending'
        };

        orders.push(newOrder);
        saveOrders(orders);

        console.log(`Novo pedido recebido: #${newOrder.orderId}`);
        if (customer) {
            console.log(`Cliente: ${customer.name} - ${customer.phone}`);
            console.log(`Tipo: ${customer.orderType === 'delivery' ? 'Entrega' : 'Retirada'}`);
            if (customer.orderType === 'delivery') {
                console.log(`Endereço: ${customer.address}, ${customer.neighborhood}`);
            }
        }
        console.log(`Total: R$ ${total.toFixed(2)}`);
        console.log(`Itens: ${items.map(item => `${item.quantity}x ${item.name}`).join(', ')}`);

        res.status(201).json({
            success: true,
            orderId: newOrder.orderId,
            message: 'Pedido realizado com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao processar pedido:', error);
        res.status(500).json({ error: 'Erro ao processar pedido' });
    }
});

app.get('/api/orders', (req, res) => {
    try {
        const orders = loadOrders();
        res.json(orders);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
});

app.get('/api/orders/:id', (req, res) => {
    try {
        const orders = loadOrders();
        const order = orders.find(o => o.orderId === parseInt(req.params.id));
        
        if (!order) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        
        res.json(order);
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).json({ error: 'Erro ao buscar pedido' });
    }
});

app.put('/api/orders/:id', (req, res) => {
    try {
        const orders = loadOrders();
        const orderIndex = orders.findIndex(o => o.orderId === parseInt(req.params.id));
        
        if (orderIndex === -1) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        
        orders[orderIndex] = { ...orders[orderIndex], ...req.body };
        saveOrders(orders);
        
        res.json({
            success: true,
            order: orders[orderIndex]
        });
    } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        res.status(500).json({ error: 'Erro ao atualizar pedido' });
    }
});

app.delete('/api/orders/:id', (req, res) => {
    try {
        let orders = loadOrders();
        const orderIndex = orders.findIndex(o => o.orderId === parseInt(req.params.id));
        
        if (orderIndex === -1) {
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        
        orders = orders.filter(o => o.orderId !== parseInt(req.params.id));
        saveOrders(orders);
        
        res.json({
            success: true,
            message: 'Pedido excluído com sucesso'
        });
    } catch (error) {
        console.error('Erro ao excluir pedido:', error);
        res.status(500).json({ error: 'Erro ao excluir pedido' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`========================================`);
    console.log(`🍔 Servidor da Hamburgueria rodando!`);
    console.log(`🌐 Local: http://localhost:${PORT}`);
    console.log(`📱 Mobile: http://192.168.0.5:${PORT}`);
    console.log(`📡 API: http://192.168.0.5:${PORT}/api/orders`);
    console.log(`========================================`);
});
