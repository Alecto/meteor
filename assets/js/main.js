import { menu } from './libs.min.js';

$(menu.hostElem).on(
    'click', menu.itemElem,
    (e) => menu.menuTrigger(e.currentTarget));
