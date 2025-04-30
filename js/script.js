// لو عندنا يوزر يبق اظهر اسمه والكارت والحاجات دي 
// مفيش يوز يبق خليك ف تسجيل الدخول

// ف صفحة تسجيل الدخول لو اسمك والباسورد صح ادخل

// لو مش عندك اكونت روح لتسجيل الدخول

// ركز الاول ع تسجيل الدخول والرجستر وبعدين بق جزء الكارد


let logInLogOut = document.querySelector('.login-logout')
let logOutCart = document.querySelector('.logout-cart')
let headerUserName = document.querySelector('.header-user-name')


if(localStorage.getItem('userFirstName')){
    logInLogOut.remove()
    logOutCart.style.display = 'flex'
    headerUserName.innerHTML = localStorage.getItem('userFirstName')
}


let logOutLink = document.querySelector('.logout-Link')
logOutLink.addEventListener('click', ()=> {
    localStorage.clear()
    setTimeout(()=>{
        window.location = 'register.html'
    })
})

///////////////////////////////////////////

// save date
// generate data js
// interactive

let allProducts = document.querySelector('.products')

let products = [
    {
        id: 1,
        image: 'img/Nike Air Max 90.jpeg',
        title: 'Nike Air Max 90',
        price: '150$',
        category: 'fashion'
    },
    {
        id: 2,
        image: 'img/Under Armour Hoodie.jpeg',
        title: 'Under Armour Hoodie',
        price: '75$',
        category: 'fashion'
    },
    {
        id: 3,
        image: 'img/Puma Running Shoes.jpeg',
        title: 'Puma Running Shoes',
        price: '120$',
        category: 'fashion'
    },
    {
        id: 4,
        image: 'img/Levi’s Denim Jacket.jpeg',
        title: 'Levi’s Denim Jacket',
        price: '95$',
        category: 'fashion'
    },
    {
        id: 5,
        image: 'img/Ray-Ban Aviators.jpeg',
        title: 'Ray-Ban Aviators',
        price: '180$',
        category: 'fashion'
    },
    {
        id: 6,
        image: 'img/Timberland Boots.jpeg',
        title: 'Timberland Boots',
        price: '200$',
        category: 'fashion'
    },
    {
        id: 7,
        image: 'img/Adidas Soccer Ball.jpeg',
        title: 'Adidas Soccer Ball',
        price: '35$',
        category: 'sports'
    },
    {
        id: 8,
        image: 'img/Wilson Tennis Racket.jpeg',
        title: 'Wilson Tennis Racket',
        price: '110$',
        category: 'sports'
    },
    {
        id: 9,
        image: 'img/Nike Basketball.jpeg',
        title: 'Nike Basketball',
        price: '60$',
        category: 'sports'
    },
    {
        id: 10,
        image: 'img/Reebok Fitness Mat.jpg',
        title: 'Reebok Fitness Mat',
        price: '40$',
        category: 'sports'
    },
    {
        id: 11,
        image: 'img/Fossil Leather Wallet.jpeg',
        title: 'Fossil Leather Wallet',
        price: '45$',
        category: 'men accessories'
    },
    {
        id: 12,
        image: 'img/Tommy Hilfiger Belt.jpeg',
        title: 'Tommy Hilfiger Belt',
        price: '50$',
        category: 'men accessories'
    },
    {
        id: 13,
        image: 'img/Casio Wristwatch.jpeg',
        title: 'Casio Wristwatch',
        price: '90$',
        category: 'men accessories'
    },
    {
        id: 14,
        image: 'img/Herschel Backpack.jpeg',
        title: 'Herschel Backpack',
        price: '80$',
        category: 'men accessories'
    },
    {
        id: 15,
        image: 'img/Apple AirPods.jpeg',
        title: 'Apple AirPods',
        price: '199$',
        category: 'phone accessories'
    },
    {
        id: 16,
        image: 'img/Samsung Wireless Charger.jpeg',
        title: 'Samsung Wireless Charger',
        price: '60$',
        category: 'phone accessories'
    },
    {
        id: 17,
        image: 'img/Anker Power Bank.jpeg',
        title: 'Anker Power Bank',
        price: '45$',
        category: 'phone accessories'
    },
    {
        id: 18,
        image: 'img/OtterBox Phone Case.jpeg',
        title: 'OtterBox Phone Case',
        price: '35$',
        category: 'phone accessories'
    },
    {
        id: 19,
        image: 'img/Beats Headphones.jpeg',
        title: 'Beats Headphones',
        price: '250$',
        category: 'phone accessories'
    },
    {
        id: 20,
        image: 'img/Sony Xperia 1 II.jpeg',
        title: 'Sony Xperia 1 II',
        price: '950$',
        category: 'phone accessories'
    }
];



function drawItems() {
    let productsHTML = products.map((item) => {
        return `
            <div class="product">
                <img src="${item.image}" alt="img-product">
                <p>Product: ${item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Category: ${item.category}</p>
                <div class="btn-icon">
                    <button onclick='addToCart(${item.id})'>Add to Cart</button>
                    <i class="fa-solid fa-heart js-heart" onclick='addToFavorites(${item.id}, this)'></i>
                </div>
            </div>
        `;
    });
    allProducts.innerHTML = productsHTML.join(' ');
}
drawItems();


//////////////////////////////// 

// انت عايز تعمل اي كدا؟
//

let selectedProduct = document.querySelector('.selected-product')
let cartCounter = document.querySelector('.js-counter')

//////////////////////////

let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')): [] 
if(addedItem){
    addedItem.map((item)=>{
        selectedProduct.innerHTML += `<div class = 'flex'> <span>${item.title}</span> <i class="fa-solid fa-plus js-plus"></i> <i class="fa-solid fa-minus js-minus"></i> </div>`
    })
    // badge.style.display = 'block'
    cartCounter.innerHTML = addedItem.length
}



if(localStorage.getItem('userFirstName')){
    function addToCart(id){
        let chossenItem = products.find((item) => item.id === id)
        // console.log(item)
        selectedProduct.innerHTML += `<div class = 'flex'> <span> ${chossenItem.title} </span> <i class="fa-solid fa-plus js-plus"></i> <i class="fa-solid fa-minus js-minus"></i> </div> `


        // عايز تنقل بيانات او تعرضها لصحة تانيه دا بيكون عن طريق لوكل استورتج رايق وجامد يا حبيبي قلبي 
        addedItem = [...addedItem, chossenItem]
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))

        
        let cartProductsLenght = document.querySelectorAll('.selected-product span')
        cartCounter.innerHTML = cartProductsLenght.length

        let plus = document.querySelector('.js-plus')
        plus.addEventListener('click', ()=>{
            cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1
        })
        let minus = document.querySelector('.js-minus')
        minus.addEventListener('click', ()=>{
            cartCounter.innerHTML--
        })
    }

}else{
    window.location = 'register.html'
}


////////////////////////////////////// Add to love Here
const favorites = document.querySelector('.favorites')

if(localStorage.getItem('userFirstName')){
    function addToFavorites(id, heartIconElement) {
        // Find the selected product by ID
        let selectedProduct = products.find(item => item.id === id);
    
        if (selectedProduct) {
            // Retrieve the existing favorites from localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
            // Check if the product is already in the favorites list
            if (!favorites.some(item => item.id === id)) {
                // Add the selected product to the favorites array
                favorites.push(selectedProduct);
    
                // Save the updated favorites array back to localStorage
                localStorage.setItem('favorites', JSON.stringify(favorites));
                const heartIconElement = document.querySelector('.js-heart')
                // Change the heart icon color to red
                heartIconElement.style.color = 'red';
    
                // Optionally, provide feedback to the user
                alert('Product added to favorites!');
            } else {
                alert('Product is already in your favorites!');
            }
        }
    }
    
}else{
    window.location = 'register.html'
}

//////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if there are any favorites to display
    if (favorites.length > 0) {
        let favoritesHTML = favorites.map(item => {
            return `

                <div class="favorite-product" data-id="${item.id}">
                    <div>
                        <img src="${item.image}" alt="img-product" width="100px">
                    </div>
                    <p>Product: ${item.title}</p>
                    <div class = 'category-heart'>
                        <p>Category: ${item.category}</p>
                        <i class="fa-solid fa-heart js-heart"></i>
                    </div>
                    
                </div>

            `;
        });

        // Append the favorite products to the "favorites" div
        document.querySelector('.favorites').innerHTML += favoritesHTML.join('');
    } else {
        document.querySelector('.favorites').innerHTML = '<p>No favorite products yet.</p>';
    }
});

//////////////////////// 

let cart = document.querySelector('.js-cart')
// let cart = document.querySelector('.js-popup')

cart.addEventListener('click' , opencart)

function opencart(){
    if(selectedProduct.innerHTML != ''){
        if(selectedProduct.style.display === 'block'){
            selectedProduct.style.display = 'none'
        }else{
            selectedProduct.style.display = 'block'
        }
    }
}


///////////////////////////////////////// 

document.addEventListener('DOMContentLoaded', () => {
    const searchType = document.getElementById('search-type');
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const selectedType = searchType.value;
        
        const filteredProducts = products.filter(product => {
            if (selectedType === 'name') {
                return product.title.toLowerCase().includes(searchValue);
            } else if (selectedType === 'category') {
                return product.category.toLowerCase().includes(searchValue);
            }
            return false;
        });

        drawItems(filteredProducts);
    });

    function drawItems(items) {
        let productsHTML = items.map(item => {
            return `
                <div class="product">
                    <img src="${item.image}" alt="img-product">
                    <p>Product: ${item.title}</p>
                    <p>Price: ${item.price}</p>
                    <p>Category: ${item.category}</p>
                    <div class="btn-icon">
                        <button onclick='addToCart(${item.id})'>Add to Cart</button>
                        <i class="fa-solid fa-heart" onclick = 'addToFavorites(${item.id})'></i>
                    </div>
                </div>
            `;
        });

        allProducts.innerHTML = productsHTML.join(' ');
    }

    // Initial draw of all products
    drawItems(products);
});
