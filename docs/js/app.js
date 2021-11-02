/**
 * On window load
 */
 $(window).on('load', function() { 
  //get data from json
  $.getJSON( "data/site.json", function( data ) {
    //alert(data.pages[DSFpageId].topMenu);
    if (data.pages[DSFpageId].sideMenu) _showMenu(data.sideMenus[data.pages[DSFpageId].sideMenu],'sideMenu');
    if (data.pages[DSFpageId].topMenu) _showMenu(data.topMenus[data.pages[DSFpageId].topMenu],'topMenu');
    if (data.header) $('#headerContainer').html(data.header);
    if (data.footer) $('#footerContainer').html(data.footer);
  });

 });

 /**
  * Show the  menu according to the data 
  **/ 
 function _showMenu (menuData,menuElementId) {
  var mainNavItems ="";
  $.each( menuData, function( index, value ){
      var classHTML = (value.id==DSFpageId?'class="nav-link active" aria-current="page"':'class="nav-link"')
      mainNavItems += '<a '+classHTML+' href="'+value.url+'">'+value.label+'</a></li>';
      });
  $('#'+menuElementId).html(mainNavItems);
 }

 //highlight
document.querySelectorAll("code").forEach(function(element) {
    element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
});