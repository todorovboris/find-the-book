import page from '../node_modules/page/page.mjs';

import navigationMiddleware from './middlewares/navigation.js';

page(navigationMiddleware);

page();
