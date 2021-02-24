$(document).ready(function(){
    let link = $('.menu-link');
    let link_active = $('.menu-link__active');
    let menu = $('.menu');
    let nav_link = $('.menu a');
  
    link.click(function(){
      link.toggleClass('menu-link__active');
      menu.toggleClass('menu__active');
    });
    nav_link.click(function(){
      link.toggleClass('menu-link__active');
      menu.toggleClass('menu__active');
    });
  
  });