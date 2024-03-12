/*crear button*/
document.querySelector(".button").addEventListener("click", async () => {
  console.log("Botón clickeado");
  try {
    const respuesta = await fetch("/api/v1/products"); //ask for API
    const inf = await respuesta.json(); //convert to json
    const box = document.querySelector("#button > div"); // where i will show data or inf
    const productHTML = inf
      .map((product) => {
        const disenoProduct = `<p>Product: ${product.name}, Price: $${product.price}</p>`;
        return disenoProduct;
      })
      .join(" ");
    box.innerHTML = productHTML;
  } catch (err) {
    // manejando errores
    console.err("looks like a error feaching data", err);
  }
});
