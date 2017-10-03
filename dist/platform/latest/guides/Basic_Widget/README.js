Ext.data.JsonP['Basic_Widget']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Basic Widget</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845783\" class=\"content\">\n                        <h1>Basic Widget</h1>\n    <p>Demonstrates how to create and use a basic widget.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">widgets/basic</strong>    </p>\n    </div>\n        <img src=\"images/download/attachments/41845783/widget-basic.png\" alt=\"images/download/attachments/41845783/widget-basic.png\" class=\"confluence-embedded-image\" width=\"250\">\n        <p>Widgets have their own views/, controllers/, models/, styles/ and assets/ folders. These folders are organized in the same way as the top-level app/ directory in the Alloy project. By convention, widgets resides in the app/widgets folder. The sample application includes a widget named <strong class=\" \">com.foo.widget</strong> in the app/widgets/ folder, as shown below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">App and widget folder structure</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"App and widget folder structure\">\n<div class=\"line\"><code class=\"plain\">app</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;config.json</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;controllers</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500;index.js</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x251C;&#x2500;&#x2500;app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500;index.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500;index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500;widgets</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2514;&#x2500;&#x2500;com.foo.widget</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; back.jpg</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;controllers</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; widget.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500; widget.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x251C;&#x2500;&#x2500;image.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;   &#x2514;&#x2500;&#x2500;widget.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2514;&#x2500;&#x2500;widget.json</code></div>\n</div>\n    </div>\n    <p>The Alloy app&apos;s configuration file (config.json) must declare the widget as a dependency:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/config.json</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/config.json\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;dependencies&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;1.0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;sourcemap&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;adapters&quot;</code><code class=\"plain\">: []</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>By convention, a widget&apos;s default view is located at  <strong class=\" \"><i class=\" \">widget_folder</i>/views/widget.xml</strong>, and it&apos;s controller and style files are are <strong class=\" \"><i class=\" \">widget_folder</i>/controllers/widget.js</strong> and <strong class=\" \"><i class=\" \">widget_folder</i>/styles/widget.tss</strong>. To include a widget in the main application, insert a <strong class=\" \">&lt;Widget/&gt;</strong> element and set its <strong class=\" \">src</strong> attribute to the name of the widget folder (&quot;com.foo.widget&quot; in this case). By default, the widget.xml view is included; you can specify a different widget view XML file by specifying its <strong class=\" \">name</strong> attribute.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> name=</code><code class=\"string\">&quot;image&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Widget src=</code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;w&quot;</code><code class=\"plain\">/&gt; </code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n        </img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845783\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Basic Widget"});