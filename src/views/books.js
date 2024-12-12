import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getAllBooks } from '../api/books.js';

const template = (books) => html`<!-- Dashboard page -->
    <section id="dashboard">
        <div class="book">
            <img
                src="https://www.ciela.com/media/catalog/product/cache/32bb0748c82325b02c55df3c2a9a9856/p/o/pod-igoto-softpres-9786191516636.jpg"
                alt="example1"
            />
            <h3 class="name">Под Игото</h3>
            <div class="book-info">
                <p class="author">Иван Вазов</p>
            </div>
            <a class="details-btn" href="#">Details</a>
        </div>
    </section> `;

export default async function booksView(ctx) {
    const books = await getAllBooks();

    render(template(books), document.querySelector('#wrapper main'));
}
