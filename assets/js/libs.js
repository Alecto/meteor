export let menu = {

  hostElem: '.header-menu__list',
  itemElem: '.header-menu__item',
  dropdownClassName: 'dropdown',
  showClassName: 'show',
  pointer: null,

  menuTrigger (elem) {

    if ($(elem).hasClass(this.dropdownClassName)) {

      if (this.pointer !== elem) {
        $(this.pointer).removeClass(this.showClassName).children('ul').hide();
        this.show = false;
      }

      $(elem).toggleClass(this.showClassName).children('ul').slideToggle(500);
      this.show = !this.show;
      this.pointer = elem;

    } else if (this.show) {

      $(this.hostElem).children('.' + this.showClassName).removeClass(this.showClassName).children('ul').hide();
      this.show = false;

    }

  }
};
