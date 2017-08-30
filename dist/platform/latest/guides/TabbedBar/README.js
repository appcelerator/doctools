Ext.data.JsonP['TabbedBar']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>TabbedBar</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845775\" class=\"content\">\n                        <h1>TabbedBar</h1>\n    <p>Demonstrates basic use of TabbedBar control.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/tabbedbar</strong>    </p>\n    </div>\n        <p>A <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.TabbedBar\">TabbedBar</a> is a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.TabbedBar\">ButtonBar</a> that maintains its state, selected or unselected See <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ButtonBar\">ButtonBar</a> for information on styling both tabbed bars and buttons bars.    </p>\n    <p>    <img src=\"images/download/attachments/41845775/ios.png\" alt=\"images/download/attachments/41845775/ios.png\" class=\"confluence-embedded-image\" width=\"250\">\n        </img></p>\n    <p>The main index.xml view defines a TabbedBar that contains five &lt;Label/&gt; elements.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TabbedBar platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;sayHi&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- These get added to the TabbedBar </code><code class=\"string\">&quot;labels&quot;</code><code class=\"plain\"> array --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- Specify text with node text or </code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> attribute. --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label id=</code><code class=\"string\">&quot;label1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label title=</code><code class=\"string\">&quot;tab 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label&gt;tab </code><code class=\"value\">3</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- uses images and/or widths --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label width=</code><code class=\"string\">&quot;40&quot;</code><code class=\"plain\"> image=</code><code class=\"string\">&quot;/KS_nav_ui.png&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- set as disabled --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label enabled=</code><code class=\"string\">&quot;false&quot;</code><code class=\"plain\">&gt;disabled&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- empty labels will print a warning (no properties) --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- &lt;Label/&gt; --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!--</code></div>\n<div class=\"line\"><code class=\"plain\">                additional views get added as normal, over the labels, as</code></div>\n<div class=\"line\"><code class=\"plain\">                per the documentation of the add() function.</code></div>\n<div class=\"line\"><code class=\"plain\">             --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;!-- &lt;View opacity=</code><code class=\"string\">&quot;0.25&quot;</code><code class=\"plain\"> backgroundColor=</code><code class=\"string\">&quot;#a00&quot;</code><code class=\"plain\"> width=</code><code class=\"string\">&quot;50%&quot;</code><code class=\"plain\">/&gt; --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/TabbedBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label platform=</code><code class=\"string\">&quot;!ios&quot;</code><code class=\"plain\">&gt;Ti.UI.iOS.Toolbar only supported on iOS&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view-controller displays an alert dialog that indicates the index of the item that was clicked in the TabbedBar.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function sayHi(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">&apos;Hello from tab a index &apos;</code><code class=\"plain\"> + e.index + </code><code class=\"string\">&apos;!&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845775_TabbedBar-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.TabbedBar\">Titanium.UI.iOS.TabbedBar</a> API reference    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ButtonBar\">Titanium.UI.ButtonBar</a> API reference    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845775\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"TabbedBar"});