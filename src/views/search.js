import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html`<section id="search-section">
    <form>
        <p id="search-question">Търсите ли нещо?</p>
        <input type="text" name="search" id="search-field" placeholder="Потърси книга или автор..." />
    </form>
</section>`;

export default async function searchView(ctx) {
    render(template(), document.querySelector('#wrapper main'));
}
