

// انا عايز اضيف المنتجات اللي اختارتها ف صفحة جديده


// let logInLogOut = document.querySelector('.login-logout')
// let logOutCart = document.querySelector('.logout-cart')
// let headerUserName = document.querySelector('.header-user-name')


// if(localStorage.getItem('userFirstName')){
//     logInLogOut.remove()
//     logOutCart.style.display = 'flex'
//     headerUserName.innerHTML = localStorage.getItem('userFirstName')
// }

//////////////////////////////////////////////// 

let ProductsInCart = localStorage.getItem("productsInCart")
if(ProductsInCart){
    let item = JSON.parse(ProductsInCart) ;
    drawCartProducts(item);

}
function drawCartProducts(products) {
    let totalPrice = 0; // Initialize total price

    let productsHTML = products.map((item) => {
        totalPrice += parseFloat(item.price.replace('$', ''));
        return `
            <div class="product-cart" data-id="${item.id}">
                <div>
                    <img src="${item.image}" alt="img-product" width="100px">
                </div>
                <div>
                    <p>Product: ${item.title}</p>
                    <p>Category: ${item.category}</p>
                    <p>Price: ${item.price}</p>
                    <div class="btn-icon-cart">
                        <span>3</span>
                        <i class="fa-solid fa-plus"></i>
                        <i class="fa-solid fa-minus"></i>
                        <button style = 'color: white;' onclick='removeFromCart(${item.id})'>Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('.js-total-price').innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
    allProducts.innerHTML = productsHTML.join('');
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removeFromCart(id) {
    // Remove product from the DOM
    const productElement = document.querySelector(`.product-cart[data-id="${id}"]`);
    if (productElement) {
        productElement.remove();
    }

    // Remove product from localStorage cart
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || [];
    cartItems = cartItems.filter(item => item.id !== id);
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

    // Decrease the cart counter
    let cartCounter = document.querySelector('.js-counter');
    cartCounter.innerHTML = parseInt(cartCounter.innerHTML) - 1;

    window.location.reload();
    console.log('Product ID removed:', id);

}
