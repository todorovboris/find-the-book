import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = (onSearch) => html`<section id="search-section">
    <form @submit=${onSearch}>
        <p id="search-question">Търсите ли нещо?</p>
        <div class="search-container">
            <input type="text" name="search" id="search-field" placeholder="Потърси книга или автор..." />
            <input type="submit" id="search-button" value="Търси" />
        </div>
    </form>
</section> `;

export default async function searchView(ctx) {
    render(template(searchSubmitHandler), document.querySelector('#wrapper main'));
}

async function searchSubmitHandler(e) {
    e.preventDefault();

    const searchInput = document.querySelector('#search-field').value;
    const bookToFind = searchInput.toLowerCase();
}
