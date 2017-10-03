Ext.data.JsonP['Complex_Styling']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Complex Styling</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845650\" class=\"content\">\n                        <h1>Complex Styling</h1>\n    <p>Demonstrates how Alloy combines several TSS styles based on their priority.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App folder location</div>\n            <p><i class=\" \">alloy</i>/test/apps/advanced/complex_styling    </p>\n    </div>\n        <p><a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes\">Styles</a> can be defined on Alloy elements in variety of places: the global style sheet (app/app.tss), a view-controller&apos;s styles sheet (app/styles/index.tss, for example), or as attributes on an XML element, to name a few. In addition, styles can be applied conditionally based on the target platform or device form factor. Alloy defines a priority for each type of style, and styles are combined and mixed according to these priorities, as the sample app demonstrates. See <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-StylePriorities\">Style Priorities</a> for details.    </p>\n    <p>    <img src=\"images/download/attachments/41845650/styles.png\" alt=\"images/download/attachments/41845650/styles.png\" class=\"confluence-embedded-image\" width=\"500\">\nt    </img></p>\n    <p>The main index.xml view declares a several different UI elements some with defined IDs, some with specified <tt class=\" \">class</tt> attributes, some that are specific to certain platforms or device form factors. In addional, some views are required from external XML files that define their own TSS styles.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ScrollView </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;scroll&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;sv&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl1&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">1</code><code class=\"plain\">. Platform attribute in XML sets to green on Android from platform specific TSS ID style, font size&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl1&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;ios&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">1</code><code class=\"plain\">. Platform attribute in XML sets to blue from generic TSS ID style, font size from index.tss&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl1&quot;</code><code class=\"plain\"> platform=</code><code class=\"string\">&quot;mobileweb&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">1</code><code class=\"plain\">. Platform attribute in XML sets to blue from generic TSS ID style, font size from index.tss&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl2&quot;</code><code class=\"plain\">&gt;&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require src=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl4&quot;</code><code class=\"plain\"> color=</code><code class=\"string\">&quot;blue&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">4</code><code class=\"plain\">. Text alignment and font size set in index.tss, XML color attribute overrides TSS&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require src=</code><code class=\"string\">&quot;anotherlabel&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl6&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">6</code><code class=\"plain\">. Bold, large, custom font, font properties mixed from various stylesheets&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl7&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">7</code><code class=\"plain\">. Theme controls color: iOS=blue, Android=green, MobileWeb=red, generic=black, font size from main index.tss&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require src=</code><code class=\"string\">&quot;requiredlabel&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl9&quot;</code><code class=\"plain\"> formFactor=</code><code class=\"string\">&quot;handheld&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">9</code><code class=\"plain\">. Device query in XML and TSS to set text and color (green on handheld)&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;lbl9&quot;</code><code class=\"plain\"> formFactor=</code><code class=\"string\">&quot;tablet&quot;</code><code class=\"plain\">&gt;</code><code class=\"value\">9</code><code class=\"plain\">. Device query in XML and TSS to set text and color (purple on tablet)&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\">&gt;Window background yellow by </code><code class=\"keyword\">default</code><code class=\"plain\">, overridden to white by theme&apos;s app.tss&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;lbl&quot;</code><code class=\"plain\">&gt;ScrollView&apos;s top accounts </code><code class=\"keyword\">for</code><code class=\"plain\"> iOS7 through Alloy.Globals value and index.tss property&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nThe app.tss file defines global styles; each view-controller defines its own TSS file (anotherLabel.tss or index.tss, for example); a number of themes define their own styles and controller styles; finally, the XML views define styles as attributes on various XML elements.    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">App Folder Structure</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"App Folder Structure\">\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500; app</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; anotherlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; index.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; ios</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;   &#x2514;&#x2500;&#x2500; anotherlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2514;&#x2500;&#x2500; label.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x251C;&#x2500;&#x2500;themes</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; android</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;   &#x2514;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x2514;&#x2500;&#x2500; requiredlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; </code><code class=\"keyword\">default</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;   &#x2514;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x2514;&#x2500;&#x2500; requiredlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x251C;&#x2500;&#x2500; ios</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;   &#x2514;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2502;       &#x2514;&#x2500;&#x2500; requiredlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;  &#x2514;&#x2500;&#x2500; mobileweb</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;      &#x2514;&#x2500;&#x2500; styles</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;          &#x251C;&#x2500;&#x2500; app.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2502;          &#x2514;&#x2500;&#x2500; requiredlabel.tss</code></div>\n<div class=\"line\"><code class=\"plain\">    &#x2514;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x251C;&#x2500;&#x2500; anotherlabel.xml</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x251C;&#x2500;&#x2500; index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x251C;&#x2500;&#x2500; label.xml</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x251C;&#x2500;&#x2500; mobileweb</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x2502;   &#x2514;&#x2500;&#x2500; label.xml</code></div>\n<div class=\"line\"><code class=\"plain\">       &#x2514;&#x2500;&#x2500; requiredlabel.xml</code></div>\n</div>\n    </div>\n    <p>As an example, the app.tss file defines the following global styles:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/styles/app.tss</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/styles/app.tss\">\n<div class=\"line\"><code class=\"string\">&quot;Window&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;yellow&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl6&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontWeight: </code><code class=\"string\">&apos;bold&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        fontSize: </code><code class=\"string\">&apos;32dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Label&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    left: </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>However, styles defined by the index.tss style file have a higher precedence than global styles, and so override them.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&apos;Window[platform=android]&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    exitOnClose: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#sv&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    layout: </code><code class=\"string\">&apos;vertical&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    top: Alloy.Globals.scrollTop,</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Label&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;black&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    width: Ti.UI.FILL,</code></div>\n<div class=\"line\"><code class=\"plain\">    height: Ti.UI.SIZE</code></div>\n<div class=\"line\"><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"string\">&quot;.lbl&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontSize: </code><code class=\"string\">&apos;12dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;.lbl[platform=android]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontSize: </code><code class=\"string\">&apos;16dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl1&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;blue&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl1[platform=android]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;green&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl2&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    text: </code><code class=\"string\">&quot;2. Text set in TSS, ID selector&apos;s left property overrides app.tss&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    left: </code><code class=\"string\">&apos;20dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl4&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;orange&apos;</code><code class=\"plain\">, </code><code class=\"comments\">/* overridden in XML */</code></div>\n<div class=\"line\"><code class=\"plain\">    textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl5&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;purple&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    text: </code><code class=\"string\">&apos;This text is purple&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl6&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontFamily: </code><code class=\"string\">&apos;Zapfino&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl6[platform=android]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontFamily: </code><code class=\"string\">&apos;FirecatMedium&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl9[formFactor=handheld]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;green&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#lbl9[formFactor=tablet]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;purple&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>    <span style=\"color: #000000;\">\nSee Also    </span>\n    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-src-35621526_AlloyStylesandThemes-StylePriorities\">Style Priorities</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Custom_TSS_Queries\">Custom TSS Queries</a> demo app    </p>\n</li></ul>        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845650\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Complex Styling"});