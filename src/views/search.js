import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/books.js';

const template = (onSearch, results, hasSearched) => html`<section id="search-section">
    <form @submit=${onSearch}>
        <p id="search-question">Търсите ли нещо?</p>
        <div class="search-container">
            <input type="text" name="search" id="search-field" placeholder="Потърси книга или автор..." />
            <input type="submit" id="search-button" value="Търси" />
        </div>
    </form>
    ${hasSearched
        ? html`<section id="results-section">
              ${results && results.length > 0
                  ? html` <ul id="results-list">
                        ${results.map((result) => html`<li>${result.name} от ${result.author}</li>`)}
                    </ul>`
                  : html`<p>Няма намерени резултати.</p>`}
          </section>`
        : ''}
</section> `;

let currentResults = [];
let hasSearched = false;

export default async function searchView(ctx) {
    hasSearched = false;
    render(template(searchSubmitHandler, currentResults, hasSearched), document.querySelector('#wrapper main'));
}

async function searchSubmitHandler(e) {
    e.preventDefault();

    const searchInput = document.querySelector('#search-field').value;
    const bookToFind = searchInput.toLowerCase();

    if (searchInput === '') return;

    const books = await getAllBooks();
    currentResults = books.filter((book) => book.name.toLowerCase().includes(bookToFind) || book.author.toLowerCase().includes(bookToFind));

    hasSearched = true;

    render(template(searchSubmitHandler, currentResults, hasSearched), document.querySelector('#wrapper main'));
    // document.querySelector('#search-field').value = '';
}
