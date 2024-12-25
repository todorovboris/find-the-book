import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html`<section id="search-section">
    <form>
        <p id="search-question">Търсите ли нещо?</p>
        <div class="search-container">
            <input type="text" name="search" id="search-field" placeholder="Потърси книга или автор..." />
            <input type="submit" id="search-button" />
        </div>
    </form>
</section> `;

export default async function searchView(ctx) {
    render(template(), document.querySelector('#wrapper main'));
}
