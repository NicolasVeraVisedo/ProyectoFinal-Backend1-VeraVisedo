const productId = productId; // ID del producto que el usuario desea agregar
const cartId = cartId; // ID del carrito donde agregar el producto

fetch(`/api/carts/${cartId}/products/${productId}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    quantity: 1, // Agregar la cantidad si es necesario
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Producto agregado al carrito:", data))
  .catch((error) => console.log("Error al agregar al carrito:", error));
