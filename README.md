# dsf-design-system
Gov.cy DSF design system code and documentation

This is the readme for the dsf-design-system repository. We are testing out branching strategies.
Demo: https://gov-cy.github.io/dsf-design-system

## Updating Documentation

The documentation site resides in the `docs` folder and is controlled by the `data\pages.json` and markdown files contained in the `content` folder.  

### pages.json

Check below a sample structure of the file with comments to help identify what is each element

```json
{
    "defaultPage" : "index", //defines the default page if no page id is defined in url
    "templates": { //contains the template HTML to be referenced in the `pages` section
        "3_3" : "<div id='main'></div>"
        ,"1_3_sidemenu" : "<div class='row'><div class='col-md-9 order-md-last' id='main'></div><div class='col-md-3 order-md-first'><nav class='nav flex-column' id='sideMenu'></nav></div></div>"
    },
    "header" : { //the header HTML for each language. Use the appropriate language code. This is global for all pages 
        "en": "<div>Header</div>"
        ,"el" : "<div>Τίτλος</div>"
    },
    "footer" : { //the footer HTML for each language. Use the appropriate language code. This is global for all pages
        "en": "<div>Footer</div>"
        ,"el" : "<div>Φούτερ</div>"
    },
    "topMenus" : //define the top menus here to be referenced in the `pages` section
        {   //can define different menus. In this example there is only one
            "general": [ //the menu items. Always define label in all languages and appropriate url. URL is `#p/{page.id}`
                {"id" :"styles", "label":{"en":"Styles","el": "Style EL"}, "url" :"#p/styles"}
                ,{"id" :"components", "label":{"en":"Components","el":"Components"}, "url" :"#"}
                ,{"id" :"patterns", "label":{"en":"Patterns","el":"Patterns"}, "url" :"#"}
            ]
        },
    "sideMenus": //define the side menus here to be referenced in the `pages` section. Same apply as with `topMenus`
        {
            "styles" : [
                {"id" :"styles.layout", "label":{"en":"Layout","el":"Layout EL"}, "url" :"#p/styles.layout"}
                ,{"id" :"styles.page.layout", "label":{"en":"Page layout","el":"Page layout"}, "url" :"#"}
                ,{"id" :"styles.colour", "label":{"en":"Colour","el":"Colour"}, "url" :"#"}
            ]
        }
    ,
    "pages" : {// define the pages 
        "index":{ //index must be the same as id 
            "id":"index", //page id
            "topMenu" : "general", // top menu reference. False if none
            "sideMenu" : false, //side menu reference. False if none
            "template" : "3_3", // template reference
            "MDFile" : {"en":"content/index-en.MD","el":"content/index-el.MD"} //markdown path reference for all languages
        },
        "styles":{
            "id":"styles",
            "topMenu" : "general",
            "sideMenu" : "styles",
            "template" : "1_3_sidemenu",
            "MDFile" : {"en" : "content/styles-en.MD", "el": "content/styles-el.MD"}
        },
        "styles.layout":{
            "id":"styles.layout",
            "topMenu" : "general",
            "sideMenu" : "styles",
            "template" : "1_3_sidemenu",
            "MDFile" :{"en" : "content/styles.layout-en.MD", "el" : "content/styles.layout-en.MD"}
        }
    }
}
```
### How to add a documentation page?

1. Create a markdown file with documentation and/or HTML. If you need to create in multiple languages create one file for each language. 
2. Update `pages.json` file with details under `pages`.
3. If you need to add it to a menu, make sure to update the `topMenus` or `sideMenus` as needed. 