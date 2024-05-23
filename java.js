window.onload = function() {
    var smartphones = [
        {name: "Apple Iphone 15 128 GB", price: 799, image: "https://cdn.idealo.com/folder/Product/203247/5/203247542/s1_produktbild_mittelgross/apple-iphone-15-128gb-schwarz.jpg" },
        {name: "Apple Iphone 15 Pro 128 GB", price: 899, image: "https://cdn.idealo.com/folder/Product/203248/7/203248713/s1_produktbild_mittelgross/apple-iphone-15-pro-128gb-titan-schwarz.jpg" },
        {name: "Apple Iphone 15 Pro Max 128 GB", price: 1199, image: "https://cdn.idealo.com/folder/Product/203248/6/203248693/s1_produktbild_mittelgross/apple-iphone-15-pro-max-256gb-titan-schwarz.jpg" },
    ];

    var smartphonesDiv = document.getElementById("smartphones");

    // Fügt jedes Smartphone in das Div ein
    smartphones.forEach(function(smartphone) {
        var smartphoneElement = document.createElement("div");
        smartphoneElement.innerHTML = "<h3>" + smartphone.name + "</h3><img src='" + smartphone.image + "' alt='" + smartphone.name + "'><p>Preis: " + smartphone.price + " €</p><button onclick='addToCart(\"" + smartphone.name + "\", " + smartphone.price + ")'>In den Warenkorb legen</button>";
        smartphonesDiv.appendChild(smartphoneElement);
    });
};

// Funktion zum Hinzufügen des ausgewählten Smartphones zum Warenkorb
function addToCart(name, price) {
    // Holt den aktuellen Warenkorb oder erstellt einen neuen, wenn keiner vorhanden ist
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    alert(name + " wurde zum Warenkorb hinzugefügt!");

    // Fügt das ausgewählte Smartphone zum Warenkorb hinzu
    var item = { name: name, price: price };
    cart.push(item);

    // Speichert den aktualisierten Warenkorb im localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}
