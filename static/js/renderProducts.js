
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-products]")) {
            e.preventDefault();
            getProducts();
        }
    });

});
getProducts();
async function getProducts(){
    const response = await fetch('./server/get_products.php');
    const productsArray = await response.json();
    renderProducts(productsArray);
}

function renderProducts(productsArray){
    productsArray.forEach(function(item){
        if(item.type == 1){type = "Картридж";}if(item.type == 2){type = "Узел проявки";}if(item.type == 3){type = "Фотобарабан";}if(item.type == 4){type = "Термоблок";}
        if(item.company == 1){company = "Kyocera";}
        if(item.color == 1){color = "Черный";}if(item.color == 2){color = "Голубой";}if(item.color == 3){color = "Пурпурный";}if(item.color == 4){color = "Желтый";}
        const productsTableHTML = `<div class="item__row">
        <div class="item__column">${type}</div>
        <div class="item__column">${item.name}</div>
        <div class="item__column">${company}</div>
        <div class="item__column">${color}</div>
        <div class="item__column">${item.resource}</div>
        <div class="item__column">${item.price}</div>
        <div class="item__column">${item.comp}</div>
        <div class="item__column">Количество</div>
        </div>`;

        $('#products-table').append(productsTableHTML);
    });
}