let request;
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-history]")) {
            e.preventDefault();
            GetHistory();
        }
    });

});

function GetHistory(){
    $.ajax({
        type: "POST",
        url: "/server/get_history.php",
        data: {},
        dataType: "json",
        success: function(data){
            // const table = document.querySelector(".table");
            // // JSON.parse(data);

            // table.insertAdjacentHTML('beforeend',JSON.parse(data));
            var newJson = data.filter(function(e){
                $('#table').append('<div class="item__row"><div class="item__column">' + e.date + '</div><div class="item__column">' + e.name + '</div><div class="item__column">' + e.printer_name + '</div><div class="item__column">Таманьнефтегаз</div><div class="item__column">Оченаш С.В.</div><div class="item__column">АБК "Факел"</div><div class="item__column"><img src="images/forward-svgrepo-com.svg" alt=""></div></div>');
        });
    }
        
    });
}