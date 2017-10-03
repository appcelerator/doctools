Ext.data.JsonP['Theming_Widgets']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Theming Widgets</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845679\" class=\"content\">\n                        <h1>Theming Widgets</h1>\n    <p>Demonstrates how to apply themes to widgets. Theme settings override default styles and assets defined within the widget itself.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">advanced/theming_widgets</strong>    </p>\n    </div>\n        <p>To create a widget them, inside your Alloy project&apos;s themes/ folder create a new folder named &quot;widgets&quot;. With that folder, create a new folder whose name matches the widget ID, such as com.somecompany.widgetname. Within that folder, create assets/ and styles/ folders that contain assets and TSS files, as usual. The contents of these folder override the assets and styles declared by the original widget.    </p>\n    <p>    <img src=\"images/download/attachments/41845679/theme_widgets.png\" alt=\"images/download/attachments/41845679/theme_widgets.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>For example, the sample application defines a widget named &quot;starrating&quot; whose and assets and styles are overridden by those found in the app/themes/widgets/assets and app/themes/widgets/assets folders, respectively. The sample also specifies a theme named &quot;plusminus&quot; that is specified as the global style by the application&apos;s config.json file. The global styles, theme styles, and widget styles are combined during compilation according to well-defined style priorities (see <a class=\"document-link unresolved\" href=\"#!/guide/Theming_Widgets-section-src-41845679\">Style Priorities</a>).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">App folder structure</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"App folder structure\">\n<div class=\"line\"><code class=\"plain\">app</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;config.json</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x251C;&#x2500;&#x2500;app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x2514;&#x2500;&#x2500;index.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;themes</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500;plusminus</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x2502;  &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x2502;  &#x2514;&#x2500;&#x2500; index.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;       &#x2514;&#x2500;&#x2500;widgets</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;           &#x2514;&#x2500;&#x2500;starrating</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;  &#x251C;&#x2500;&#x2500;foo.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;  &#x251C;&#x2500;&#x2500;ios</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;  &#x2502;  &#x2514;&#x2500;&#x2500; star_half.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;  &#x251C;&#x2500;&#x2500;star.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2502;  &#x2514;&#x2500;&#x2500;star_off.png</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;               &#x2514;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x251C;&#x2500;&#x2500;ios</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x2502;   &#x2514;&#x2500;&#x2500; star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;                   &#x2514;&#x2500;&#x2500;star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; views</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x251C;&#x2500;&#x2500;index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;   &#x2514;&#x2500;&#x2500;row.xml</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500; widgets</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2514;&#x2500;&#x2500;starrating</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;assets</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;ios</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2502;  &#x2514;&#x2500;&#x2500; star.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;star.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;star_half.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;star_off.png</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;controllers</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;star.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.js</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;star.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.tss</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x251C;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x251C;&#x2500;&#x2500;star.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2502;  &#x2514;&#x2500;&#x2500;widget.xml</code></div>\n<div class=\"line\"><code class=\"plain\">        &#x2514;&#x2500;&#x2500;widget.json</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>Platform-specific assets and style selectors in the widget override non-platform-specific assets and styles in your theme. See <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-StylePriorities\">Style Priorities</a> for details.    </p>\n    </div>\n        <div class=\"section section-2 \" id=\"src-41845679_ThemingWidgets-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/Theming_Widgets-section-src-41845679\">Themes (Alloy Widgets guide)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-StylePriorities\">Style Priorities</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845679\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Theming Widgets"});