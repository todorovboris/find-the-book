import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/books.js';

const template = (books) => html`<!-- Dashboard page -->
    <section id="dashboard">
        ${books.map(
            (book) =>
                html`<div class="book">
                    <img src="${book.img}" alt="example1" />
                    <h3 class="name">${book.name}</h3>
                    <div class="book-info">
                        <p class="author">${book.author}</p>
                    </div>
                    <a class="details-btn" href="/books/${book._id}/details">Информация</a>
                </div>`
        )}
    </section> `;

export default async function booksView(ctx) {
    const books = await getAllBooks();

    render(template(books), document.querySelector('#wrapper main'));
}
