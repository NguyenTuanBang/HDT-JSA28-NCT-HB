let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}
for(let items of products.data){
    // tạo tags với JS
    let card= document.createElement("div");
    card.classList.add("card");

    let imgContainer=document.createElement("div")
    imgContainer.classList.add("img-container");

    let image=document.createElement("img");
    image.setAttribute("src", items.image);

    // đặt qh cha con
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    // vị trí tên sản phẩm
    let container=document.createElement("div");
    container.classList.add("container");
    let name=document.createElement("h5");
    name.classList.add("products-name");
    name.innerText = items.name.toUpperCase();

    container.appendChild(name)
    
    // vị trí giá sản phẩm
    let price=document.createElement("h6");
    price.classList.add("products-price");
    price.innerHTML = `<b>Price:</b> ${items.price}`  ///chuyền biến
    container.appendChild(price)

    let btn = document.createElement("button");
    btn.setAttribute("onclick","addToCart()");
    // button có thuộc tính onclick = addToCart()
    btn.innerHTML="thêm vào giỏ hàng"
    container.appendChild(btn);
    card.appendChild(container);
    document.getElementById("products").appendChild(card)
}





















































































































