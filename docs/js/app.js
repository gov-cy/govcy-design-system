/**
 * On window load
 */
 $(window).on('load', function() { 
            
  //get data from json
  $.getJSON( "data/pages.json", function( data ) {
      //set data to model
      appModel.siteOptions = data;
      //language code
      if ((!localStorage.DDSlanguageCode) || (localStorage.DDSlanguageCode == 'undefined')) {
          localStorage.DDSlanguageCode = "el";
      }
      //initialize router
      appRouter.init();    
  });

});


/**
* Router class
*/
var appRouter = {
  /**
   * Initializes the router
   */
  init : function() {
      //use sammy for hasged urls
      Sammy(function () {
          var app = this;
          //-------------#home----------------------------
          this.get('#home', function () {
              appView.renderPage(appModel.siteOptions.defaultPage);
          });
          //------------#p-Pages---------------------------
          $.each(appModel.siteOptions["pages"], function (i, route_args) {
              app.get('#p/' + route_args.id, function () {
                  appView.renderPage(route_args.id);
              });
          });
          //-------------/----------------------------
          //default
          this.get('', function () { this.app.runRoute('get', '#home') });
      }).run();
  }
}

/**
* The model class
*/
var appModel = {
  /** The site options object as loaded from the server */
  siteOptions: null,
  /** The current pages form id */
  currentPageId : null,
  /** The current submit id */
  currentSubmitId : null,
  /** The current form object */
  currentFormObj : null,
  /** The current route */
  currentRoute: null,
  /** The count of the fetch requests */
  fetchCount : 0
};

/**
* The view class
**/

var appView = {
  /**
   * Render site stuff like menus header and footer
   **/
  renderSiteStuff : function(){
      //render template
      $('#mainContainer').html(appModel.siteOptions.templates[appModel.siteOptions.pages[appModel.currentPageId].template]);
      //render top menu
      if (appModel.siteOptions.pages[appModel.currentPageId].sideMenu) appView.showMenu(appModel.siteOptions.sideMenus[appModel.siteOptions.pages[appModel.currentPageId].sideMenu],'sideMenu');
      //render side menu
      if (appModel.siteOptions.pages[appModel.currentPageId].topMenu) appView.showMenu(appModel.siteOptions.topMenus[appModel.siteOptions.pages[appModel.currentPageId].topMenu],'topMenu');
      //render header footer
      if (appModel.siteOptions.header) $('#headerContainer').html(appModel.siteOptions.header[localStorage.DDSlanguageCode]);
      if (appModel.siteOptions.footer) $('#footerContainer').html(appModel.siteOptions.footer[localStorage.DDSlanguageCode]);
  },
  /**
   * Clears the screen
   **/
  clearScreen: function() {
      $('#mainContainer').html("");
      $('#headerContainer').html("");
      $('#footerContainer').html("");
      $('#sideMenu').html("");
      $('#topMenu').html("");
      $('#main').html("");
  },
  /**
   * Renders the page 
   * 
   * @param {string} pageId the id of the page to be rendered
   */
  renderPage:function(pageId) {
      //set current values
      appModel.currentPageId = pageId;
      //clear everything
      appView.clearScreen();
      //render site stuff
      appView.renderSiteStuff();
      //page bindings
      appView.globalBindings();
      //Markdown with Pagedown		
      // create a pagedown converter - regular and sanitized versions are both supported
      //var converter = new Markdown.getSanitizingConverter();
      var converter = new Markdown.Converter();
      // tell the converter to use Markdown Extra
      Markdown.Extra.init(converter, {highlighter: "highlight"});
      //get markdown .MD
      $.get(appModel.siteOptions.pages[pageId].MDFile[localStorage.DDSlanguageCode], function(textData, status) { 
          //render markdown
          $("#main").html(converter.makeHtml(textData ));
          
          hljs.highlightAll(); 
      });
      
      //highlight hack to display html highlighter
      document.querySelectorAll("code").forEach(function(element) {
          element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      });
  },
  /**
   * Show the  menu according to the data 
   **/ 
  showMenu: function  (menuData,menuElementId) {
      var mainNavItems ="";
      $.each( menuData, function( index, value ){
          var classHTML = (value.id==appModel.currentPageId?'class="nav-link active" aria-current="page"':'class="nav-link"')
          mainNavItems += '<a '+classHTML+' href="'+value.url+'">'+value.label[localStorage.DDSlanguageCode]+'</a></li>';
          });
      $('#'+menuElementId).html(mainNavItems);
  }, 
  /**
   * Handles global bindings such as change language
   */
  globalBindings:function() {
      //bindings change language
      $('#changeLangSel').on('change', function() {
          //change language id
          localStorage.DDSlanguageCode = this.value;
          // re render 
          appView.renderPage(appModel.currentPageId);
      });
  }
};