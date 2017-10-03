Ext.data.JsonP['CoverFlow_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>CoverFlow Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41846559\" class=\"content\">\n                        <h1>CoverFlow Binding</h1>\n    <p>Demonstrates data binding with a CoverFlowView control, which presents images in carousel-like view.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_coverflow</strong>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/41846559/image.png\" alt=\"images/download/attachments/41846559/image.png\" class=\"confluence-embedded-image\" width=\"200\">\n    </img></p>\n    <p>A <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.CoverFlowView\">CoverFlowView</a> element&apos;s <tt class=\" \">images</tt> property is an array of images to display in the carousel. In Alloy, this property is represented by an <tt class=\" \">&lt;Images/&gt;</tt> element, which contains a single &lt;Image/&gt; element. The &lt;Images/&gt; element&apos;s <tt class=\" \">dataCollection</tt> attribute is set to &quot;images&quot;, the name of the Alloy collection that contains the actual images to display. When the &quot;images&quot; collection is updated, the images displayed by the CoverFlowView update accordingly.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;CoverFlowView id=</code><code class=\"string\">&quot;coverflow&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- data-bound collection of images --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Images dataCollection=</code><code class=\"string\">&quot;images&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Image image=</code><code class=\"string\">&quot;{url}&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;{height}&quot;</code><code class=\"plain\"> width=</code><code class=\"string\">&quot;{width}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Images&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- additional views </code><code class=\"keyword\">for</code><code class=\"plain\"> the CoverFlowView --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label id=</code><code class=\"string\">&quot;apilabel&quot;</code><code class=\"plain\">&gt;Ti.UI.iOS.CoverFlowView&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/CoverFlowView&gt;</code></div>\n</div>\n    </div>\n    <p>The alloy.js file create the <tt class=\" \">images</tt> collection. Each member of the collection specifies the URL of the image to display, as well as optional <tt class=\" \">width</tt> and <tt class=\" \">height</tt> properties. These properties are referenced by the &lt;Image/&gt; element in the index.xml view.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"plain\">var Image = Backbone.Model.extend();</code></div>\n<div class=\"line\"><code class=\"plain\">var Images = Backbone.Collection.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">    model: Image</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.images = </code><code class=\"keyword\">new</code><code class=\"plain\"> Images();</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.images.reset([</code></div>\n<div class=\"line\"><code class=\"plain\">    { url: </code><code class=\"string\">&apos;/appc1.png&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">    { url: </code><code class=\"string\">&apos;/appc2.png&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">    { url: </code><code class=\"string\">&apos;/appc3.png&apos;</code><code class=\"plain\">, width: </code><code class=\"value\">100</code><code class=\"plain\">, height: </code><code class=\"value\">100</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">    { url: </code><code class=\"string\">&apos;/appc4.png&apos;</code><code class=\"plain\">, width: </code><code class=\"value\">50</code><code class=\"plain\">, height: </code><code class=\"value\">50</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41846559_CoverFlowBinding-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.CoverFlowView\">Titanium.UI.iOS.CoverFlowView</a> API reference    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41846559\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"CoverFlow Binding"});