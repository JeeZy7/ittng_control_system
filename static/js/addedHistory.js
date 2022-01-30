
// ****************************************************************** Открытие модального окна
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-add-history]")) {
            e.preventDefault();
            $('.popup').css('display', 'flex');
        }
    });

});
// ****************************************************************** Закрытие модального окна
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-popup]")) {
            e.preventDefault();
            $("#order__provider").val('');
            $("#order__owner").val('');
            $("#popup-notice").css('visibility', 'collapse');
            $('.popup').css('display', 'none');
        }
    });

});

// ****************************************************************** Открытие списка товаров
$(".popup-item-add").click(function(){ 
    
    getProducts();
});
// ****************************************************************** Сохранение записи
$("#popup-btn-save").click(function(){ 
    
    orderSave();
});

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
        console.log(increment, orderProvider, orderOwner, orderItems); 
    }else{
        $("#popup-notice").text("Проверьте правильность заполнение формы!");
        $("#popup-notice").css('visibility', 'inherit').css("background-color","#f43643").css("color","white");
    }
}

function getProducts(){
    
}
