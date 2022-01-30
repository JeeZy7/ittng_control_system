import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
        <div class="header">
            <div class="header-title">Заявки</div>
            <div class="header-link"><a href=""  data-add-order>Добавить запись</a></div>
        </div>
        Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        <div class="section">
            
            
        </div>
        `;
    }
}