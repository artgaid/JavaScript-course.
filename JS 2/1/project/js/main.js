const products = [
    { id: 1, title: 'Notebook', price: 1000 },
    { id: 2, title: 'Mouse', price: 100 },
    { id: 3, title: 'Keyboard', price: 250 },
    { id: 4, title: 'Gamepad', price: 150 },
];

const renderProduct = (title, price, img = 'http://placehold.it/200x150/') => `<div class="product-item">
                <img src="${img}" alt="Some img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;

const renderProducts = (list) => {
    const productList = list.map((product) => {
        return renderProduct(product.title, product.price);
    });

    //console.log(productList);
    document.querySelector('.products').innerHTML = productList.join("");
}

renderProducts(products);
