for (let product of products) {
    let card = /*html*/ `
    <div class="card">
      <div class="image-container">
        <img src="${products.image}" /> 
      </div> 
      <div class="container">
        <div class="info">
          <h5>${products.name}</h5> 
          <h6>Price: $${products.prize}</h6>
        </div>
        <button onclick="handleAddToCartClicked(${products.id})">Add to cart</button>
      </div>
    </div>
    `;
  
    document.getElementById("products").innerHTML += card;
  }
  const handleAddToCartClicked = (productId) => {
    if (!localStorage.getItem("currentUser")) {
      alert("Please log in");
    } else {
      addToCart(productId);
    }
  };
  
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    location.reload();
  };
  