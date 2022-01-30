
// ****************************************************************** Открытие модального окна
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // ****************************************************************** Открытие модального окна
        if (e.target.matches("[data-add-order]")) {
            e.preventDefault();
            printPopup();
            createItemsPopup();
        }
        // ****************************************************************** Закрытие модального окна
        if (e.target.matches("[data-popup]")) {
            e.preventDefault();
            removePopup();
            removeItemsPopup();
        }
        if (e.target.matches("[data-add-order-items]")) {
            e.preventDefault();
            showItemsPopup();
            
        }
        // ****************************************************************** Закрытие модального окна с товарами
        if (e.target.matches("[data-popup-items]")) {
            e.preventDefault();
            updateOrderList();
            hideItemsPopup();
        }
        // ****************************************************************** сохранение списка выбранных товаров
        if (e.target.matches("[data-btn-items-save]")) {
            e.preventDefault();
            updateOrderList();
            hideItemsPopup();
        }
        // e.target.
        if (e.target.matches("[data-popup-item]")) {
            e.preventDefault();
            var tag = e.target;
            if( tag.class == "popup-item" ) {
                tag.remove();
            } 
        }
        if (e.target.matches("[data-popup-save]")) {
            e.preventDefault();
            orderSave();
        }
    });

});

// ****************************************************************** функция сохранения заявки
function orderSave(){
    var increment;
    var orderProvider = $("#order__provider").val();
    var orderOwner = $("#order__owner").val();
    var orderItems = [];
    $.each($(".popup-item"), function(){            
        orderItems.push($(this).text());
    });
    if(orderItems.length == 0){
        increment = true;
    }
    if(!increment && orderProvider != "" && orderOwner != ""){
        $("#popup-notice").text("Запись успешно добавлена!");
        $("#popup-notice").css('visibility', 'inherit').css("background-color","#47e197").css("color","white");
        console.log(new Date(), increment, orderProvider, orderOwner, orderItems); 
    }else{
        $("#popup-notice").text("Проверьте правильность заполнение формы!");
        $("#popup-notice").css('visibility', 'inherit').css("background-color","#f43643").css("color","white");
    }
}
// ****************************************************************** Загрузка тела popup
function printPopup(){
    $('body').prepend('<div class="popup" data-popup id="add__order_popup"></div>');
    $('#add__order_popup').append('<div class="popup-content"></div>');
    $('.popup-content').append('<div class="popup-header"><div class="popup-title"><img src="images/clipboard-svgrepo-com.svg" alt="">Создание новой заявки</div><div class="popup-close"><img src="images/cross-svgrepo-com.svg" alt="" data-popup></div></div>');
    $('.popup-content').append('<div class="popup-block"><div class="popup-block-container">Укажите компанию/поставщика</div><div class="popup-block-container"><input type="text" id="order__provider" value=""></div></div>')
    $('.popup-content').append('<div class="popup-block"><div class="popup-block-container">Кто принял поставку</div><div class="popup-block-container"><input type="text" id="order__owner" value=""></div></div>');
    $('.popup-content').append('<div class="popup-block"><div class="popup-block-container">Выберите какие расходные материалы поступили</div><div class="popup-block-container"><div class="popup-items" id="order__item_list"><div class="popup-item-add" data-add-order-items>Добавить новый</div></div></div>');
    $('.popup-content').append('<div class="popup-block"><div class="popup-block-container"><div class="popup-bttns"><div class="popup-notice" id="popup-notice">Сохранить</div><div class="popup-btn-save" id="popup-btn-save" data-popup-save>Сохранить</div></div></div></div>');
    $('.popup').css('display', 'flex');
}
// ****************************************************************** Удаление тела popup
function removePopup(){
    $('#add__order_popup').detach();
}
// ****************************************************************** Отрисовка тела popup items
function createItemsPopup(){
    $('#add__order_popup').prepend('<div class="popup__items_block"></div>');
    $('.popup__items_block').append('<div class="popup-header"><div class="popup-title"><img src="images/cube-svgrepo-com.svg" alt="">Список товаров</div><div class="popup-close"><img src="images/cross-svgrepo-com.svg" alt="" data-popup-items></div></div>');
    $('.popup__items_block').append('<div class="popup-block"><div class="popup-block-container">Выберите один или несколько товаров</div><div class="popup-block-container"><div class="popup__items_block-items" id="popup-block-container-items"></div></div></div>');
    $('.popup__items_block').append('<div class="popup-block"><div class="popup-block-container"><div class="popup-bttns" id="popup__items_bttn"><div class="popup-notice"></div><div class="popup-btn-save" id="popup-btn-items-save" data-btn-items-save>Ок</div></div></div></div>');
    getProducts();

    $('.popup__items_block').css('display', 'none');
}
// ****************************************************************** Показ тела popup items
function showItemsPopup(){
    $('.popup__items_block').css('display', 'block');
}
// ****************************************************************** Скрытие тела popup items
function hideItemsPopup(){
    $('.popup__items_block').css('display', 'none');
}
// ****************************************************************** Удаление тела popup items
function removeItemsPopup(){
    $('.popup__items_block').css('display', 'none');
}

function updateOrderList(){
    $('#order__item_list').html('<div class="popup-item-add" data-add-order-items>Добавить новый</div>');
    CheckItems();
}

// ****************************************************************** Получение списка товара с сервера
async function getProducts(){
    const response = await fetch('./server/get_products.php');
    const productsArray = await response.json();
    renderProducts(productsArray);
}
// ****************************************************************** Отрисовка списка товара с сервера
var globalCheckboxSelect;
function renderProducts(productsArray){
    productsArray.forEach(function(item){
        const productsTableHTML = `
        <div class="popup__items_block-item" id="popup__items_block_list">
            <input type="checkbox" class="item-chechbox" id="${item.id}" value="${item.name}">
            <label class="popup__items_block-item" for="${item.id}">${item.name}</label>
        </div>`;

        $('#popup-block-container-items').append(productsTableHTML);
    });
}

function CheckItems(){
    var checkboxes = $('.item-chechbox');
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value);
            
            $('#order__item_list').append('<div class="popup-item" data-popup-item>' + checkboxes[index].value + '</div>');
        }

    }
    globalCheckboxSelect = checkboxesChecked;
    console.log(globalCheckboxSelect);
}