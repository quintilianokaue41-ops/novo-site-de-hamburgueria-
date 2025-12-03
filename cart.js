let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        cartTotal.textContent = 'R$ 0,00';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')}</p>
            </div>
            <div class="cart-item-actions">
                <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Item adicionado ao carrinho!');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Item removido do carrinho');
}

function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }
}

function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    } else {
        removeFromCart(id);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function openCheckout() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('checkout-items').innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.quantity}x ${item.name}</span>
            <span>R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
        </div>
    `).join('');
    
    document.getElementById('checkout-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    closeCart();
    document.getElementById('checkout-modal').classList.add('show');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('show');
    document.getElementById('checkout-form').reset();
}

async function submitOrder(e) {
    e.preventDefault();

    const orderType = document.querySelector('input[name="order-type"]:checked').value;
    const customerData = {
        name: document.getElementById('customer-name').value,
        phone: document.getElementById('customer-phone').value,
        orderType: orderType,
        paymentMethod: document.getElementById('payment-method').value,
        notes: document.getElementById('order-notes').value
    };

    if (orderType === 'delivery') {
        customerData.address = document.getElementById('customer-address').value;
        customerData.neighborhood = document.getElementById('customer-neighborhood').value;
        customerData.complement = document.getElementById('customer-complement').value;
    }

    if (customerData.paymentMethod === 'cash') {
        customerData.changeFor = document.getElementById('change-for').value;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderData = {
        items: cart,
        total: total,
        customer: customerData,
        date: new Date().toISOString()
    };

    const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api/orders'
        : `http://${window.location.hostname}:3000/api/orders`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            const result = await response.json();
            showNotification('Pedido realizado com sucesso!');
            
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            closeCheckout();

            setTimeout(() => {
                alert(`Pedido #${result.orderId} confirmado!\n\nOlá ${customerData.name}!\n\nSeu pedido foi recebido com sucesso.\n${orderType === 'delivery' ? 'Entrega' : 'Retirada'}\nTotal: R$ ${total.toFixed(2).replace('.', ',')}\n\nEntraremos em contato pelo WhatsApp em breve!`);
            }, 500);
        } else {
            showNotification('Erro ao processar pedido. Tente novamente.');
        }
    } catch (error) {
        console.error('Erro:', error);
        showNotification('Erro ao conectar com o servidor. Usando WhatsApp como alternativa.');
        
        setTimeout(() => {
            let message = `Olá! Gostaria de fazer um pedido:\n\n`;
            message += `*Nome:* ${customerData.name}\n`;
            message += `*Telefone:* ${customerData.phone}\n`;
            message += `*Tipo:* ${orderType === 'delivery' ? 'Entrega' : 'Retirada'}\n`;
            
            if (orderType === 'delivery') {
                message += `*Endereço:* ${customerData.address}, ${customerData.neighborhood}\n`;
                if (customerData.complement) message += `*Complemento:* ${customerData.complement}\n`;
            }
            
            message += `*Pagamento:* ${customerData.paymentMethod}\n\n`;
            message += `*Pedido:*\n${cart.map(item => 
                `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}`
            ).join('\n')}\n\n`;
            message += `*Total: R$ ${total.toFixed(2)}*`;
            
            if (customerData.notes) {
                message += `\n\n*Obs:* ${customerData.notes}`;
            }
            
            window.open(`https://w.app/hf6lgm?text=${encodeURIComponent(message)}`, '_blank');
            closeCheckout();
        }, 1000);
    }
}

function openCart() {
    document.getElementById('cart-modal').classList.add('show');
}

function closeCart() {
    document.getElementById('cart-modal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            const id = parseInt(menuItem.dataset.id);
            const name = menuItem.dataset.name;
            const price = parseFloat(menuItem.dataset.price);
            
            addToCart(id, name, price);
        });
    });

    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('checkout-btn').addEventListener('click', openCheckout);
    document.getElementById('close-checkout').addEventListener('click', closeCheckout);

    document.getElementById('cart-modal').addEventListener('click', (e) => {
        if (e.target.id === 'cart-modal') {
            closeCart();
        }
    });

    document.getElementById('checkout-modal').addEventListener('click', (e) => {
        if (e.target.id === 'checkout-modal') {
            closeCheckout();
        }
    });

    document.getElementById('checkout-form').addEventListener('submit', submitOrder);

    document.querySelectorAll('input[name="order-type"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const deliveryFields = document.getElementById('delivery-fields');
            if (e.target.value === 'delivery') {
                deliveryFields.style.display = 'block';
                document.getElementById('customer-address').required = true;
                document.getElementById('customer-neighborhood').required = true;
            } else {
                deliveryFields.style.display = 'none';
                document.getElementById('customer-address').required = false;
                document.getElementById('customer-neighborhood').required = false;
            }
        });
    });

    document.getElementById('payment-method').addEventListener('change', (e) => {
        const changeField = document.getElementById('change-field');
        if (e.target.value === 'cash') {
            changeField.style.display = 'block';
        } else {
            changeField.style.display = 'none';
        }
    });
});
