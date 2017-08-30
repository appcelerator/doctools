Ext.data.JsonP['Lists_and_Tables,_Proxy_Properties']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Lists and Tables, Proxy Properties</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845748\" class=\"content\">\n                        <h1>Lists and Tables, Proxy Properties</h1>\n    <p>Demonstrates use of Alloy elements to proxy ListView and TableView controls and their properties.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/lists_proxy_properties</strong>    </p>\n    </div>\n        <img src=\"images/download/attachments/41845748/screenshot.png\" alt=\"images/download/attachments/41845748/screenshot.png\" class=\"confluence-embedded-image\" width=\"500\">\n        <p>    <span style=\"color: #222222;\">\nFor properties that are assigned Titanium proxies, such as Views or Buttons, you can declare these properties as XML markup.     </span>\nFor example, the &lt;HeaderView/&gt; element is used to proxy the headerView property for a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListSection\">ListSection</a> or <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableViewSection\">TableViewSection</a> object. This sample demonstrates use of the following proxies:    </p>\n<ul class=\" \"><li class=\" \">    <p>&lt;ListView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView\">Titanium.UI.ListView</a>    </p>\n<ul class=\" \"><li class=\" \">    <p>&lt;FooterView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView-property-footerView\">Titanium.UI.ListView.footerView</a>    </p>\n</li><li class=\" \">    <p>&lt;HeaderView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView-property-headerView\">Titanium.UI.ListView.headerView</a>    </p>\n</li><li class=\" \">    <p>&lt;PullView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView-property-pullView\">Titanium.UI.ListView.pullView</a>    </p>\n</li><li class=\" \">    <p>&lt;SearchBar&gt; or &lt;SearchView platform=&quot;android&quot;&gt; &#x2013;  <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView-property-searchView\">Titanium.UI.ListView.searchView</a>    </p>\n</li></ul></li><li class=\" \">    <p>&lt;ListSection&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListSection\">Titanium.UI.ListSection</a>    </p>\n<ul class=\" \"><li class=\" \">    <p>&lt;FooterView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListSection-property-footerView\">Titanium.UI.ListSection.footerView</a>    </p>\n</li><li class=\" \">    <p>&lt;HeaderView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListSection-property-headerView\">Titanium.UI.ListSection.headerView</a>    </p>\n</li></ul></li><li class=\" \">    <p>&lt;TableView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableView\">Titanium.UI.TableView</a>    </p>\n<ul class=\" \"><li class=\" \">    <p>&lt;FooterView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableView-property-footerView\">Titanium.UI.TableView.footerView</a>    </p>\n</li><li class=\" \">    <p>&lt;HeaderPullView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableView-property-headerPullView\">Titanium.UI.TableView.headerPullView</a>    </p>\n</li><li class=\" \">    <p>&lt;HeaderView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableView-property-headerView\">Titanium.UI.TableView.headerView</a>    </p>\n</li><li class=\" \">    <p>&lt;Search&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableView-property-search\">Titanium.UI.TableView.search</a>    </p>\n</li></ul></li><li class=\" \">    <p>&lt;TableViewSection&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableViewSection\">Titanium.UI.TableViewSection</a>    </p>\n<ul class=\" \"><li class=\" \">    <p>&lt;FooterView&gt; &#x2013; <a class=\"document-link unresolved\" href=\"#!/guide/Lists_and_Tables,_Proxy_Properties-section-src-41845748\">Titanium.UI.TableViewSection.footerView</a>    </p>\n</li><li class=\" \">    <p>&lt;HeaderView&gt; &#x2013; <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TableViewSection-property-headerView\">Titanium.UI.TableViewSection.headerView</a>    </p>\n</li></ul></li></ul>    <p>The main application view, lists.xml, is loaded programmatically by the index.js view-controller.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">var major = parseInt(Ti.Platform.version.split(</code><code class=\"string\">&quot;.&quot;</code><code class=\"plain\">)[</code><code class=\"value\">0</code><code class=\"plain\">], </code><code class=\"value\">10</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (OS_IOS || (OS_ANDROID &amp;&amp; major &gt;= </code><code class=\"value\">3</code><code class=\"plain\">)) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.Globals.top = OS_IOS &amp;&amp; major &gt;= </code><code class=\"value\">7</code><code class=\"plain\"> ? </code><code class=\"value\">20</code><code class=\"plain\"> : </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(</code><code class=\"string\">&apos;lists&apos;</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(</code><code class=\"string\">&apos;not_supported&apos;</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/lists.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/lists.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;tableview&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TitleControl&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;titleControl&quot;</code><code class=\"plain\">&gt;TableView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/TitleControl&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- header and footer views --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Require src=</code><code class=\"string\">&quot;wrapper&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- TIMOB-</code><code class=\"value\">11994</code><code class=\"plain\"> prevents the searchbar from showing on iOS --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- search, shorthand with Ti.UI.SearchBar --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;SearchBar </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;search&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- search, shorthand with Ti.UI.Android.SearchView --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;SearchView ns=</code><code class=\"string\">&quot;Ti.UI.Android&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;search&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- headerPullView --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;HeaderPullView platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;pull&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;Label color=</code><code class=\"string\">&quot;#F2F4F4&quot;</code><code class=\"plain\"> bottom=</code><code class=\"string\">&quot;25dp&quot;</code><code class=\"plain\">&gt;headerPullView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/HeaderPullView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewRow title=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewRow title=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewRow title=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewRow title=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- table section --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;!-- header and footer views --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Require src=</code><code class=\"string\">&quot;wrapper&quot;</code><code class=\"plain\"> isSection=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;row 1.1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;row 1.2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;row 1.3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;row 1.4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;listview&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TitleControl&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;titleControl&quot;</code><code class=\"plain\">&gt;ListView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/TitleControl&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ListView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- header and footer views --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Require src=</code><code class=\"string\">&quot;wrapper&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- search, shorthand with Ti.UI.SearchBar --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;SearchBar </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;search&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- search, shorthand with Ti.UI.Android.SearchView --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;SearchView ns=</code><code class=\"string\">&quot;Ti.UI.Android&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;search&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- pullView --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PullView platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;pull&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;Label color=</code><code class=\"string\">&quot;#F2F4F4&quot;</code><code class=\"plain\"> bottom=</code><code class=\"string\">&quot;25dp&quot;</code><code class=\"plain\">&gt;pullView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/PullView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;!-- plain section --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;ListSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/ListSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;ListSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;!-- header and footer views --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Require src=</code><code class=\"string\">&quot;wrapper&quot;</code><code class=\"plain\"> isSection=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 1.1&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 1.1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 1.2&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 1.2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 1.3&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 1.3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;ListItem title=</code><code class=\"string\">&quot;row 1.4&quot;</code><code class=\"plain\"> searchableText=</code><code class=\"string\">&quot;row 1.4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/ListSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/ListView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845748_safe-id-TGlzdHNhbmRUYWJsZXMsUHJveHlQcm9wZXJ0aWVzLVNlZUFsc28\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/Lists_and_Tables,_Proxy_Properties-section-src-41845748\">Proxy Properties</a> in the Alloy developer guide.    </p>\n</li><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/Lists_and_Tables,_Proxy_Properties-section-src-41845748\">Alloy ListView Guide</a>    </p>\n</li></ul>    </div>\n        </img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845748\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Lists and Tables, Proxy Properties"});