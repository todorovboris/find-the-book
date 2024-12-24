import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getOneBook } from '../api/books.js';

const template = (book) => html`<section id="book-details">
    <div id="book-container">
        <div>
            <img id="details-img" src="${book.img}" alt="${book.name}" class="book-cover" />
        </div>
        <div id="book-info">
            <p class="details-section">Секция: ${book.section}</p>
            <p class="details-row">Ред: ${book.row}</p>
            <p class="details-origin">Националност: ${book.origin}</p>
            <p class="details-author">Автор: ${book.author}</p>
            <p class="details-genre">Жанр: ${book.genre}</p>
            <p class="details-genre">Описание: ${book.description}</p>
        </div>
        <div>
            <a href="/books" class="back-btn">Назад към библиотеката</a>
        </div>
    </div>
</section>`;

export default async function detailsView(ctx) {
    const bookId = ctx.params.bookId;
    const book = await getOneBook(bookId);

    console.log(book);

    render(template(book), document.querySelector('#wrapper main'));
}
