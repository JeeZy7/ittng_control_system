import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Принтеры");
    }

    async getHtml() {
        return `
            <h1>Принтеры</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}