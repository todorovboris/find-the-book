import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html`<section id="hero">
    <div id="home-header">
        <h1>Welcome to BookFinder!</h1>
        <p>Your ultimate tool for locating books in bookstores and libraries</p>
        <a href="/search" class="cta-button">Search for a Book Now</a>
    </div>
    <div id="home-main">
        <h2>Discover books faster and easier</h2>
        <p>
            - <strong>Search</strong> by title or author<br />
            - <strong>Navigate</strong> with our interactive map to find exact book locations.<br />
            - <strong>Save time</strong> and effort with a streamlined, user-friendly experience.
        </p>
    </div>
</section>`;

export default function homeView() {
    render(template(), document.querySelector('#wrapper main'));
}
