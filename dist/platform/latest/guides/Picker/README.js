Ext.data.JsonP['Picker']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Picker</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845763\" class=\"content\">\n                        <h1>Picker</h1>\n    <p>Demonstrates basic use of the Picker control to let a user select one or more fixed values.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/picker</strong>    </p>\n    </div>\n        <p>The sample application demonstrates creating single- and multi-column <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker\">Picker</a>, as well as Alloy short-hand for declaring columns and rows. Note that, on Android, the Picker&apos;s <tt class=\" \">useSpinner</tt> property must be set to <tt class=\" \">true</tt> to enable multi-column pickers.    </p>\n    <p>    <img src=\"images/download/attachments/41845763/screenshot.png\" alt=\"images/download/attachments/41845763/screenshot.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>To declare columns and rows you can use <tt class=\" \">&lt;PickerRow/&gt;</tt> and <tt class=\" \">&lt;PickerColumn/&gt;</tt> elements, or the shorthand <tt class=\" \">&lt;Row/&gt;</tt> and <tt class=\" \">&lt;Column/&gt;</tt> elements.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;Single Column&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;Single Column&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerRow title=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerRow title=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerRow title=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerRow title=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Require src=</code><code class=\"string\">&quot;pickerrow&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;Multi-Column&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;Multi-Column&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerColumn&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Require src=</code><code class=\"string\">&quot;pickerrow&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/PickerColumn&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;PickerColumn&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Require src=</code><code class=\"string\">&quot;pickerrow&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 5&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 6&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 7&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;PickerRow title=</code><code class=\"string\">&quot;row 8&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/PickerColumn&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Require src=</code><code class=\"string\">&quot;pickercolumn&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;Shorthand&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;Shorthand&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Column&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 3&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 4&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/Column&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Column&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 5&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 6&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 7&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;Row title=</code><code class=\"string\">&quot;row 8&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/Column&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The index.tss file sets the Picker object&apos;s <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker-property-selectionIndicator\">selectionIndicator</a> property to <tt class=\" \">true</tt>, and sets <tt class=\" \">useSpinner</tt> to true on Android devices.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/styles/index.tss</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/styles/index.tss\">\n<div class=\"line\"><code class=\"string\">&quot;Window&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Label&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor: </code><code class=\"string\">&apos;#000&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize: </code><code class=\"string\">&apos;32dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight: </code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Picker&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tselectionIndicator: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"string\">&quot;Picker[platform=android]&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\tuseSpinner: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845763_Picker-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/Picker-section-src-41845763\">Date/Time Pickers</a> sample application    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker\">Titanium.UI.Picker</a> API reference    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845763\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Picker"});