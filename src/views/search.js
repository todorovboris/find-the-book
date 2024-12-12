import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html`<section id="search-section">
    <form>
        <p id="search-question">Are you interested in something?</p>
        <input type="text" name="search" id="search-field" placeholder="Search for books or authors..." />
    </form>
</section>`;

export default async function searchView(ctx) {
    render(template(), document.querySelector('#wrapper main'));
}
