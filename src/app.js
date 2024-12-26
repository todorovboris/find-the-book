import page from '../node_modules/page/page.mjs';

import navigationMiddleware from './middlewares/navigation.js';
import authorsView from './views/authors.js';
import booksView from './views/books.js';
import detailsView from './views/details.js';
import homeView from './views/home.js';
import searchView from './views/search.js';

page(navigationMiddleware);

page('/', homeView);
page('/search', searchView);
page('/books', booksView);
page('/books/:bookId/details', detailsView);
page('/authors', authorsView);

page();
