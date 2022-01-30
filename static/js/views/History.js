import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("History");
    }

    async getHtml() {
        return `
            <div class="header">
                <div class="header-title">История</div>
                <div class="header-link"><a href="" id="add__history" data-add-history>Добавить запись</a></div>
            </div>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            <div class="section">
                
                <div class="table" id="history-table">
                    <div class="item__row">
                        <div class="item__column">Дата</div>
                        <div class="item__column">Название</div>
                        <div class="item__column">Принтер</div>
                        <div class="item__column">Организация</div>
                        <div class="item__column">Ответственный</div>
                        <div class="item__column">Склад</div>
                        <div class="item__column"></div>
                    </div>
                    
                </div>
            </div>
        `;
    }
}