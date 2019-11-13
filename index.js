const toggleMenu = function() {
  $('.menu-dropdown').click(() => {
    $('ul').toggleClass('active');
  });
};
  
const main = function() {
  toggleMenu();
};
  
$(main);
  
  