/*
window.onload = function() {
    displayCart();

    // Verknüpfung der Bezahl-Buttons mit der handlePayment-Funktion
    document.getElementById('paypal-button').addEventListener('click', handlePayment);
    document.getElementById('sofort-button').addEventListener('click', handlePayment);
    document.getElementById('creditcard-button').addEventListener('click', handlePayment);
};

// Funktion zum Anzeigen des Warenkorbs
function displayCart() {
    var cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = ""; // Leere den aktuellen Warenkorb-Inhalt

    // Holt den aktuellen Warenkorb aus dem localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Fügt jeden Artikel im Warenkorb der Anzeige hinzu
    cart.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item.name + " - Preis: " + item.price + " €";
        cartItemsElement.appendChild(li);
    });
}
// Funktion zum Leeren des Warenkorbs
function clearCart() {
    localStorage.removeItem("cart");
}

// Funktion zum Handhaben der Zahlung
function handlePayment(event) {
    // Warenkorb leeren
    clearCart();

    // Weiterleitung zur Zahlungsbestätigung
    window.location.href = 'Zahlungsbestätigung.html';
} */

// Funktion zum Anzeigen des Warenkorbs
function displayCart() {
    var cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = ""; // Leere den aktuellen Warenkorb-Inhalt

    // Holt den aktuellen Warenkorb aus dem localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Fügt jeden Artikel im Warenkorb der Anzeige hinzu
    cart.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item.name + " - Preis: " + item.price + " €";
        cartItemsElement.appendChild(li);
    });
}

// Funktion zum Leeren des Warenkorbs
function clearCart() {
    localStorage.removeItem("cart");
    displayCart(); // Aktualisiert die Anzeige des Warenkorbs
}

// Funktion zum Handhaben der Zahlung
function handlePayment(event) {
    // Warenkorb leeren
    clearCart();

    // Weiterleitung zur Zahlungsbestätigung
    window.location.href = 'Zahlungsbestätigung.html';
}