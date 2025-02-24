hiimport React from 'react';
import ImageGallery from './ImageGallery';


const NewComponent = () => {
    return (
        <div>
            <h2>Nuevo Componente</h2>
            <p>Este es un nuevo componente.</p>
          
        </div>
    );
};

const MyPage = () => {
    return (
        <div>
            <h1>UBUNTU </h1>
            <p>conversa sabrosa<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Control App</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .section { display: none; }
        .active { display: block; }
        .tab { padding: 10px; background: #f1f1f1; cursor: pointer; display: inline-block; }
        .tab.active { background: #ddd; }
        .category { margin: 10px 0; }
        .item { margin: 5px 0; }
        button { padding: 5px 10px; }
        #musicPlayer { margin-top: 10px; }
    </style>
</head>
<body>
    <div>
        <span class="tab" onclick="showSection('products')">Products</span>
        <span class="tab" onclick="showSection('pedidos')">Pedidos</span>
        <span class="tab" onclick="showSection('tables')">Tables</span>
    </div>

    <!-- Products Section -->
    <div id="products" class="section">
        <h2>Manage Products & Music</h2>
        <div class="category">
            <h3>Food</h3>
            <input type="text" id="foodInput" placeholder="Add food item">
            <button onclick="addItem('food')">Add</button>
            <ul id="foodList"></ul>
        </div>
        <div class="category">
            <h3>Drinks</h3>
            <input type="text" id="drinkInput" placeholder="Add drink item">
            <button onclick="addItem('drink')">Add</button>
            <ul id="drinkList"></ul>
        </div>
        <div>
            <h3>Music</h3>
            <input type="text" id="songInput" placeholder="Song URL (e.g., YouTube)">
            <button onclick="playSong()">Play</button>
            <audio id="musicPlayer" controls></audio>
        </div>
    </div>

    <!-- Pedidos (Orders) Section -->
    <div id="pedidos" class="section">
        <h2>Orders</h2>
        <div>
            <h3>Take Order</h3>
            <select id="tableSelect"></select>
            <div id="orderFoodList"></div>
            <div id="orderDrinkList"></div>
            <button onclick="sendOrder()">Send Order</button>
        </div>
        <div>
            <h3>Order Status</h3>
            <ul id="orderStatus"></ul>
        </div>
    </div>

    <!-- Tables Section -->
    <div id="tables" class="section">
        <h2>Manage Tables</h2>
        <input type="number" id="tableCount" min="1" placeholder="Number of tables">
        <button onclick="setTables()">Set Tables</button>
        <ul id="tableList"></ul>
    </div>

    <script>
        let foodItems = [];
        let drinkItems = [];
        let orders = [];
        let tables = [];

        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
            if (sectionId === 'pedidos') updateOrderForm();
        }

        function addItem(type) {
            const input = document.getElementById(type === 'food' ? 'foodInput' : 'drinkInput');
            const list = document.getElementById(type === 'food' ? 'foodList' : 'drinkList');
            const item = input.value.trim();
            if (item) {
                (type === 'food' ? foodItems : drinkItems).push(item);
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
                input.value = '';
            }
        }

        function playSong() {
            const url = document.getElementById('songInput').value;
            const player = document.getElementById('musicPlayer');
            player.src = url;
            player.play();
        }

        function setTables() {
            const count = parseInt(document.getElementById('tableCount').value) || 0;
            tables = Array.from({ length: count }, (_, i) => ({ id: i + 1, status: 'empty' }));
            updateTableList();
            updateTableSelect();
        }

        function updateTableList() {
            const list = document.getElementById('tableList');
            list.innerHTML = '';
            tables.forEach(t => {
                const li = document.createElement('li');
                li.textContent = `Table ${t.id}: ${t.status}`;
                list.appendChild(li);
            });
        }

        function updateTableSelect() {
            const select = document.getElementById('tableSelect');
            select.innerHTML = '<option value="">Select Table</option>';
            tables.forEach(t => {
                const option = document.createElement('option');
                option.value = t.id;
                option.textContent = `Table ${t.id}`;
                select.appendChild(option);
            });
        }

        function updateOrderForm() {
            const foodDiv = document.getElementById('orderFoodList');
            const drinkDiv = document.getElementById('orderDrinkList');
            foodDiv.innerHTML = '<h4>Food</h4>' + foodItems.map(item => 
                `<label><input type="checkbox" value="${item}"> ${item}</label><br>`).join('');
            drinkDiv.innerHTML = '<h4>Drinks</h4>' + drinkItems.map(item => 
                `<label><input type="checkbox" value="${item}"> ${item}</label><br>`).join('');
        }

        function sendOrder() {
            const tableId = document.getElementById('tableSelect').value;
            if (!tableId) return alert('Select a table!');
            const selectedItems = [
                ...document.querySelectorAll('#orderFoodList input:checked'),
                ...document.querySelectorAll('#orderDrinkList input:checked')
            ].map(input => input.value);
            if (selectedItems.length === 0) return alert('Select some items!');
            
            const order = { table: tableId, items: selectedItems, status: 'preparation' };
            orders.push(order);
            tables.find(t => t.id == tableId).status = 'occupied';
            updateOrderStatus();
            updateTableList();
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        }

        function updateOrderStatus() {
            const list = document.getElementById('orderStatus');
            list.innerHTML = '';
            orders.forEach((order, index) => {
                const li = document.createElement('li');
                li.innerHTML = `Table ${order.table}: ${order.items.join(', ')} - ${order.status} 
                    <button onclick="updateStatus(${index}, 'ready')">Ready</button>
                    <button onclick="updateStatus(${index}, 'served')">Served</button>`;
                list.appendChild(li);
            });
        }

        function updateStatus(index, newStatus) {
            orders[index].status = newStatus;
            if (newStatus === 'served') {
                tables.find(t => t.id == orders[index].table).status = 'empty';
                orders.splice(index, 1);
            }
            updateOrderStatus();
            updateTableList();
        }

        // Show Products section by default
        showSection('products');
    </script>
</body>
</html></p>
            <p>PRODUCTOS</p>
            {/* Inclusión del nuevo componente */}
            <NewComponent />
            <ImageGallery />
        </div>
    );
};

export default MyPage;