import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/books.js';
import page from '../../node_modules/page/page.mjs';

const template = (authorsAndBooks) => html`
    <section id="authors-section">
        <h1>Автори и техните книги</h1>
        ${authorsAndBooks.length > 0
            ? html`<ul id="authors-list">
                  ${authorsAndBooks.map(
                      (author) => html`<li>
                          <h2>${author.name}</h2>
                          <ul>
                              ${author.books.map((book) => html`<li @click=${() => onBookClick(book.id)}>${book.name}</li>`)}
                          </ul>
                      </li>`
                  )}
              </ul>`
            : html`<p>Няма намерени автори или книги.</p>`}
    </section>
`;

async function fetchAuthorsAndBooks() {
    const books = await getAllBooks();

    const authorsMap = new Map();

    books.forEach((book) => {
        if (!authorsMap.has(book.author)) {
            authorsMap.set(book.author, []);
        }
        authorsMap.get(book.author).push({ name: book.name, id: book._id });
    });

    return Array.from(authorsMap, ([name, books]) => ({ name, books })).sort((a, b) => a.name.localeCompare(b.name));
}

function onBookClick(bookId) {
    page.redirect(`/books/${bookId}`);
}

export default async function authorsView(ctx) {
    const authorsAndBooks = await fetchAuthorsAndBooks();

    render(template(authorsAndBooks), document.querySelector('#wrapper main'));
}
