// Funktion zum Anzeigen des Warenkorbs
function displayCart() {
    var cartItemsElement = document.getElementById("cart-items");
    if (cartItemsElement) {
        cartItemsElement.innerHTML = ""; // Leere den aktuellen Warenkorb-Inhalt

        fetch('http://localhost:3000/api/cart')
            .then(response => response.json())
            .then(cart => {
                cart.forEach(function(item) {
                    var li = document.createElement("li");
                    li.textContent = item.name + " - Preis: " + item.price + " €";
                    cartItemsElement.appendChild(li);
                });
            });
    }
}

// Funktion zum Hinzufügen des ausgewählten Smartphones zum Warenkorb
function addToCart(name, price) {
    var item = { name: name, price: price };

    fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(() => {
        alert(name + " wurde zum Warenkorb hinzugefügt!");
        displayCart();
    });
}

// Funktion zum Leeren des Warenkorbs
function clearCart() {
    fetch('http://localhost:3000/api/cart', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
        displayCart();
    });
}

// Funktion zum Handhaben der Zahlung
function handlePayment(event) {
    clearCart();
    window.location.href = 'Zahlungsbestätigung.html';
}

// Fügt Bezeichnungen für jedes Smartphone ein inkl. Bild
window.onload = function() {
    var smartphones = [
        {name: "Apple Iphone 15 128 GB", price: 799, image: "https://cdn.idealo.com/folder/Product/203247/5/203247542/s1_produktbild_mittelgross/apple-iphone-15-128gb-schwarz.jpg" },
        {name: "Apple Iphone 15 Pro 128 GB", price: 899, image: "https://cdn.idealo.com/folder/Product/203248/7/203248713/s1_produktbild_mittelgross/apple-iphone-15-pro-128gb-titan-schwarz.jpg" },
        {name: "Apple Iphone 15 Pro Max 128 GB", price: 1199, image: "https://cdn.idealo.com/folder/Product/203248/6/203248693/s1_produktbild_mittelgross/apple-iphone-15-pro-max-256gb-titan-schwarz.jpg" },
    ];

    var smartphonesDiv = document.getElementById("smartphones");

    if (smartphonesDiv) {
        smartphones.forEach(function(smartphone) {
            var smartphoneElement = document.createElement("div");
            smartphoneElement.innerHTML = "<h3>" + smartphone.name + "</h3><img src='" + smartphone.image + "' alt='" + smartphone.name + "'><p>Preis: " + smartphone.price + " €</p><button onclick='addToCart(\"" + smartphone.name + "\", " + smartphone.price + ")'>In den Warenkorb legen</button>";
            smartphonesDiv.appendChild(smartphoneElement);
        });
    }

    displayCart();

    // Verknüpfung der Bezahl-Buttons mit der handlePayment-Funktion
    document.getElementById('paypal-button').addEventListener('click', handlePayment);
    document.getElementById('sofort-button').addEventListener('click', handlePayment);
    document.getElementById('creditcard-button').addEventListener('click', handlePayment);
};
