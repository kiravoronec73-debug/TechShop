
console.log("JavaScript подключён!");


document.querySelector("#buy").addEventListener("click", function () {
    document.querySelector("#message").textContent = "Товар добавлен в корзину!";
});

document.querySelector("#details").addEventListener("click", function () {
    document.querySelector("#info").textContent = "Беспроводные наушники: Bluetooth 5.0, встроенный микрофон, время работы — 20 часов.";
});


document.querySelector("#delivery").addEventListener("click", function () {
    document.querySelector("#delivery-info").textContent = "Доставка по городу — 300 ₽";
});

document.querySelector("#clear").addEventListener("click", function () {
    document.querySelector("#message").textContent = "";
});