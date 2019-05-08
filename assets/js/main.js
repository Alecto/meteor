$(document).ready(function () {
  /* работа с подменю */
  let $dropdown = $('.header-menu__item.dropdown');
  let pointer = null;

  $dropdown.on('click', function () {
    if (pointer && pointer !== this && $(pointer).hasClass('dropdown-toggled')) {
      $(pointer).removeClass('dropdown-toggled').children('ul').hide();
    }

    $(this).toggleClass('dropdown-toggled').children('ul').slideToggle(500);
    pointer = this;
  })
  /* работа с подменю */
});
