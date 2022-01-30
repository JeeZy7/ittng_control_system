import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <div class="header">
        <div class="header-title">Склад</div>
        <div class="header-link"><a href="" id="add__product" data-node>Добавить запись</a></div>
    </div>
    Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    <div class="section">
        
        <div class="table" id="products-table">
            <div class="item__row">
                <div class="item__column">Тип</div>
                <div class="item__column">Название</div>
                <div class="item__column">Производитель</div>
                <div class="item__column">Цвет</div>
                <div class="item__column">Ресурс</div>
                <div class="item__column">Цена</div>
                <div class="item__column">Совместимость</div>
                <div class="item__column">Количество</div>
            </div>
            
        </div>
    </div>
        `;
    }
}