// Lista de productos organizados por categorías
const products = {
    salados: [
        { id: 1, name: 'Club Social', price: 1000, stock: 10, image: 'CLUBSOCIAL.jpg', category: 'salados' },
        { id: 2, name: 'Galletas de Soda', price: 1000, stock: 15, image: 'soda.jpg', category: 'salados' },
        { id: 3, name: 'Platanitos Caseros', price: 1200, stock: 15, image: 'platanitos.jpeg', category: 'salados' },
        { id: 4, name: 'MANI', price: 1200, stock: 8, image: 'mani.jpeg', category: 'salados' },
        { id: 5, name: 'Ritz Queso', price: 1800, stock: 15, image: 'Ritz.jpg', category: 'salados' },
        { id: 6, name: 'Rosquitas', price: 1800, stock: 15, image: 'rosquitas.jpg', category: 'salados' }
    ],
    mecatos: [
        { id: 7, name: 'Detodito Picante', price: 3500, stock: 20, image: 'detodito.jpg', category: 'mecatos' },
        { id: 8, name: 'Doritos', price: 2500, stock: 15, image: 'dorito.jpg', category: 'mecatos' },
        { id: 9, name: 'Cheetos', price: 2400, stock: 12, image: 'cheto.jpeg', category: 'mecatos' },
        { id: 9, name: 'Cheetos Pequeños', price: 1200, stock: 12, image: 'cheto.jpeg', category: 'mecatos' },
        { id: 10, name: 'Cheesetres', price: 2300, stock: 15, image: 'ch.jpg', category: 'mecatos' },
        { id: 11, name: 'Boliqueso', price: 2000, stock: 15, image: 'boli.jpeg', category: 'mecatos' },
        { id: 12, name: 'Papas fr', price: 2500, stock: 15, image: 'pn.jpg', category: 'mecatos' },
        { id: 13, name: 'Papas Mayonesa', price: 2500, stock: 15, image: 'pm.jpg', category: 'mecatos' },
        { id: 14, name: 'Papas Limon', price: 2500, stock: 15, image: 'pl.jpg', category: 'mecatos' },
        { id: 15, name: 'Papas Picante', price: 2500, stock: 15, image: 'pp.jpg', category: 'mecatos' },
        { id: 16, name: 'Bocadillo Combinado', price: 2500, stock: 15, image: 'bocad.jpg', category: 'mecatos' },
        { id: 17, name: 'Bocadillo de Hoja', price: 2500, stock: 15, image: 'bb.jpeg', category: 'mecatos' },
        { id: 18, name: 'Chicharon', price: 2500, stock: 15, image: 'chi.jpg', category: 'mecatos' },
        { id: 19, name: 'Bom Bom Bum', price: 800, stock: 15, image: 'bon.jpg', category: 'mecatos' },
        { id: 20, name: 'Bom Bom Kick', price: 1000, stock: 15, image: 'kic.jpg', category: 'mecatos' },
        { id: 21, name: 'BuBaloo', price: 300, stock: 15, image: 'bu.jpg', category: 'mecatos' },
        { id: 22, name: 'Chocolatina Nucita', price: 2000, stock: 15, image: 'nu.jpg', category: 'mecatos' },
        { id: 23, name: 'Chocolatina Jet', price: 1400, stock: 15, image: 'jet.jpg', category: 'mecatos' },
        { id: 24, name: 'BurbuJet', price: 1800, stock: 15, image: 'bur.jpeg', category: 'mecatos' },
        { id: 25, name: 'Chocobreack', price: 300, stock: 15, image: 'cho.jpeg', category: 'mecatos' },
        { id: 26, name: 'Jumbo Mani', price: 2100, stock: 15, image: 'ju.jpeg', category: 'mecatos' },
        { id: 27, name: 'Galleta festival', price: 1800, stock: 15, image: 'fe.jpg', category: 'mecatos' },
        { id: 28, name: 'Mini Chips', price: 2200, stock: 15, image: 'mi.jpg', category: 'mecatos' },
        { id: 29, name: 'Mini Brounie', price: 2000, stock: 15, image: 'c.jpeg', category: 'mecatos' },
        { id: 30, name: 'Clachis', price: 400, stock: 15, image: 'h.jpg', category: 'mecatos' },
        { id: 31, name: 'Arequipito', price: 2800, stock: 15, image: 'Are.jpg', category: 'mecatos' },
        { id: 32, name: 'Candysanch', price: 700, stock: 15, image: 'ca.jpeg', category: 'mecatos' },
        { id: 33, name: 'Quipito', price: 1000, stock: 15, image: 'qui.jpg', category: 'mecatos' },
        { id: 34, name: 'Snaki', price: 900, stock: 15, image: 'es.jpeg', category: 'mecatos' }


    ],
    drogueria: [
        { id: 35, name: 'Dororsifem', price: 2500, stock: 30, image: 'aspirina.jpg', category: 'drogueria' },
        { id: 36, name: 'Dolex Gripa', price: 2200, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Sevedol', price: 2000, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Advil Ultra', price: 2500, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Pax Dia', price: 3000, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Curitas', price: 200, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Naproxeno', price: 800, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Loratadina', price: 500, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 36, name: 'Mieltertox', price: 2500, stock: 25, image: 'alcohol.jpg', category: 'drogueria' },
        { id: 37, name: 'Trimebutina', price: 800, stock: 40, image: 'vendas.jpg', category: 'drogueria' }
    ],
    Bebidas: [
        { id: 38, name: 'Coca cola', price: 3500, stock: 30, image: 'co.jpeg', category: 'Bebidas' },
        { id: 39, name: 'Pony Grande', price: 3200, stock: 25, image: 'po.jpg', category: 'Bebidas' },
        { id: 40, name: 'jugo Hit', price: 3200, stock: 40, image: 'hit.jpg', category: 'Bebidas' },
        { id: 41, name: 'Pony Pequeña', price: 2200, stock: 25, image: 'po.jpg', category: 'Bebidas' },
        { id: 42, name: 'Agua de Manzana', price: 1700, stock: 25, image: 'ag.jpg', category: 'Bebidas' },
        { id: 43, name: 'Postobon Grande', price: 3200, stock: 25, image: 'pos.jpg', category: 'Bebidas' }
    ]
};

const cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    // Crear sección para cada categoría
    for (const [category, items] of Object.entries(products)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        // Título de la categoría
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Grid de productos
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';

        items.forEach(product => {
            productsGrid.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Precio: $${product.price.toLocaleString()}</p>
                    <p>Stock: ${product.stock}</p>
                    <input type="number" id="qty-${product.id}" min="1" max="${product.stock}" placeholder="0">
                    <button onclick="addToCart(${product.id}, '${product.category}')">Añadir al carrito</button>
                </div>
            `;
        });

        categorySection.appendChild(categoryTitle);
        categorySection.appendChild(productsGrid);
        productList.appendChild(categorySection);
    }
}

function addToCart(productId, category) {
    const product = products[category].find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`qty-${product.id}`).value);

    if (isNaN(quantity) || quantity <= 0 || quantity > product.stock) {
        alert('Por favor, ingresa una cantidad válida');
        return;
    }

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity,
            category
        });
    }

    product.stock -= quantity;
    renderProducts();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    let total = 0;
    cartItems.innerHTML = '<h4>Productos seleccionados:</h4>';

    // Agrupar por categoría
    const groupedItems = cart.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    // Mostrar items por categoría
    for (const [category, items] of Object.entries(groupedItems)) {
        cartItems.innerHTML += `<h5>${category.charAt(0).toUpperCase() + category.slice(1)}:</h5>`;
        
        items.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} x${item.quantity}</span>
                    <span>$${subtotal.toLocaleString()}</span>
                </div>
            `;
        });
    }

    cartItems.innerHTML += `
        <div class="cart-total">
            Total a pagar: $${total.toLocaleString()}
        </div>
    `;
}

function sendOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (!name || !address || cart.length === 0) {
        alert('Por favor, completa todos los campos y añade productos al carrito.');
        return;
    }

    let message = `¡Hola! Quiero realizar el siguiente pedido:\n\n`;
    message += `Nombre: ${name}\n`;
    message += `Dirección: ${address}\n\n`;
    message += `Productos:\n`;

    let total = 0;
    const groupedItems = cart.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    for (const [category, items] of Object.entries(groupedItems)) {
        message += `\n${category.toUpperCase()}:\n`;
        items.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            message += `- ${item.name} x${item.quantity} = $${subtotal.toLocaleString()}\n`;
        });
    }

    message += `\nTotal a pagar: $${total.toLocaleString()}`;

    const whatsappUrl = `https://wa.me/+573013720468?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Inicializar la tienda
renderProducts();
