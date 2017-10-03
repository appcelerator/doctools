Ext.data.JsonP['ScrollableView']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ScrollableView</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845769\" class=\"content\">\n                        <h1>ScrollableView</h1>\n    <p>Demonstrates basic use of ScrollableView control to present a horizontally-scrolling set of child views, called <i class=\" \">pages.</i>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/scrollableview</strong>    </p>\n    </div>\n        <p><i class=\" \"><br/></i>A <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ScrollableView\">ScrollableView</a> encapsulates a horizontally-scrolling set of child views, known as pages, navigable using its built-in horizontal swipe gestures.    </p>\n    <p>    <img src=\"images/download/attachments/41845769/scrollable.gif\" alt=\"images/download/attachments/41845769/scrollable.gif\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>The main index.xml view declares a &lt;ScrollableView/&gt; named <tt class=\" \">scroller</tt> that contains three &lt;View/&gt; elements. Clicking the label on the first view creates a new View object and appends it to the ScrollableView object&apos;s <tt class=\" \">views</tt> array property.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ScrollableView id=</code><code class=\"string\">&quot;scroller&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;View backgroundColor=</code><code class=\"string\">&quot;#a00&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label onClick=</code><code class=\"string\">&quot;addView&quot;</code><code class=\"plain\">&gt;View </code><code class=\"value\">1</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;View backgroundColor=</code><code class=\"string\">&quot;#0a0&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;View </code><code class=\"value\">2</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;View backgroundColor=</code><code class=\"string\">&quot;#00a&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label&gt;View </code><code class=\"value\">3</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ScrollableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function addView() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.scroller.views = $.scroller.views.concat(Ti.UI.createView({</code></div>\n<div class=\"line\"><code class=\"plain\">        backgroundColor: </code><code class=\"string\">&apos;#ff0&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }));</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845769_ScrollableView-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ScrollableView\">Titanium.UI.ScrollableView</a> API reference    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845769\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ScrollableView"});