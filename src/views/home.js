import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html``;

export default function homeView() {
    render(template(), document.querySelector('#wrapper'));
}
