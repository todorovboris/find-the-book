import page from '../node_modules/page/page.mjs';

import navigationMiddleware from './middlewares/navigation.js';
import homeView from './views/home.js';

page(navigationMiddleware);

page('/', homeView);

page();
