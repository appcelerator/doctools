Ext.data.JsonP['Complex_Widget']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Complex Widget</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845785\" class=\"content\">\n                        <h1>Complex Widget</h1>\n    <p>Demonstrates a widget using another widget.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">widgets/complex</strong>    </p>\n    </div>\n        <img src=\"images/download/attachments/41845785/search.png\" alt=\"images/download/attachments/41845785/search.png\" class=\"confluence-embedded-image\">\n        <p>The application defines two widgets: <strong class=\" \">com.testing.searchForBooks</strong> and <strong class=\" \">com.appcelerator.loading</strong>. As their names imply, the first widget provides UI and logic to search for books by title (using the <a class=\"external-link external-link\" href=\"https://developers.google.com/books/docs/v1/using#PerformingSearch\" target=\"_blank\">Google Books API</a>) , while the second widget displays a loading indicator while the search is in progress.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">App directory structure</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"App directory structure\">\n<div class=\"line\"><code class=\"plain\">app</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;config.json</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x251C;&#x2500;&#x2500;app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x251C;&#x2500;&#x2500;index.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x2514;&#x2500;&#x2500;row.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x251C;&#x2500;&#x2500;index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x2514;&#x2500;&#x2500;row.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500;widgets</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x251C;&#x2500;&#x2500;com.appcelerator.loading</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x251C;&#x2500;&#x2500;controllers</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x2502;  &#x2514;&#x2500;&#x2500;widget.js</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x2502;  &#x2514;&#x2500;&#x2500;widget.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x2502;  &#x2514;&#x2500;&#x2500;widget.xml</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;   &#x2514;&#x2500;&#x2500;widget.json</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2514;&#x2500;&#x2500; com.testing.searchForBooks</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;ic_search.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;controllers</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2514;&#x2500;&#x2500;widget.json</code></div>\n</div>\n    </div>\n    <p>The application&apos;s main index.xml view includes the <strong class=\" \">searchForBooks</strong> widget and a &lt;Table/&gt; element to display search results.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.ml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.ml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window id=</code><code class=\"string\">&quot;win&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget src=</code><code class=\"string\">&quot;com.testing.searchForBooks&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;sfb&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableView id=</code><code class=\"string\">&quot;table&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The searchForBooks widget includes a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.TextField\">TextField</a> where the user enters the search term, an <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ImageView\">ImageView</a> that displays a search icon, and a &lt;Require/&gt; element that includes the <strong class=\" \">loading</strong> widget.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/widgets/com.testing.searchForBooks/views/widget.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/widgets/com.testing.searchForBooks/views/widget.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;View id=</code><code class=\"string\">&quot;bar&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TextField id=</code><code class=\"string\">&quot;text&quot;</code><code class=\"plain\"> onReturn=</code><code class=\"string\">&quot;searchForBooks&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;divider&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;View id=</code><code class=\"string\">&quot;searchView&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;searchForBooks&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;ImageView id=</code><code class=\"string\">&quot;search&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require type=</code><code class=\"string\">&quot;widget&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;com.appcelerator.loading&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;loading&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;&#xA0;</code></div>\n</div>\n    </div>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>A <tt class=\" \">&lt;Require/&gt;</tt> element whose <tt class=\" \">type</tt> attribute is set to &quot;widget&quot;, as above, is equivalent to a <tt class=\" \">&lt;Widget/&gt;</tt> element.    </p>\n    </div>\n        <p>The <strong class=\" \">loading</strong> widget contains an ImageView whose <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ImageView-property-images\">images</a> property is set to an <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps/widgets/complex/widgets/com.appcelerator.loading/assets/images\" target=\"_blank\">array of images</a> in the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/c742939f3b6d6054ab19fad87622b2daa7d048e3/widgets/com.appcelerator.loading/styles/widget.tss\" target=\"_blank\">widget&apos;s TSS file</a>. Initially, the loading widget&apos;s <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.View-property-opacity\">opacity</a> property is set to 0 by the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/widgets/complex/widgets/com.testing.searchForBooks/styles/widget.tss#L58\" target=\"_blank\">loading widget&apos;s TSS file</a> so that it&apos;s not visible. Once the user initiates the search, the search icon&apos;s opacity is set to 0, and the loading widget&apos;s opacity is set to 1, making it visible.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ImageView id=</code><code class=\"string\">&quot;loading&quot;</code><code class=\"plain\">&gt;&lt;/ImageView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n        </img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845785\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Complex Widget"});