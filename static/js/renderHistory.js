
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-history]")) {
            e.preventDefault();
            getHistory();
        }
    });

});
getHistory();
async function getHistory(){
    const response = await fetch('./server/get_history.php');
    const historyArray = await response.json();
    renderHistory(historyArray);
}

function renderHistory(historyArray){
    historyArray.forEach(function(item){
        const historyTableHTML = `<div class="item__row">
        <div class="item__column">${item.date}</div>
        <div class="item__column">${item.name}</div>
        <div class="item__column">${item.printer_name}</div>
        <div class="item__column">Таманьнефтегаз</div>
        <div class="item__column">Оченаш С.В.</div>
        <div class="item__column">АБК "Факел"</div>
        <div class="item__column"><img src="images/forward-svgrepo-com.svg" alt=""></div>
        </div>`;

        $('#history-table').append(historyTableHTML);
    });
}