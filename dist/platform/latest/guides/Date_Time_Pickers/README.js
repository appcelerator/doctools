Ext.data.JsonP['Date_Time_Pickers']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Date Time Pickers</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845745\" class=\"content\">\n                        <h1>Date Time Pickers</h1>\n    <p>Demonstrates how to create a date/time picker using the Picker control.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/ui/datetime_picker    </p>\n    </div>\n        <p>    <span style=\"color: #333333;\">\nThe Picker control is     <span style=\"color: #222222;\">\nused to let a user select one or more fixed values. You can set the <tt class=\" \">type</tt> property of a Picker to display different types of information including <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI-property-PICKER_TYPE_DATE_AND_TIME\">PICKER_TYPE_DATE_AND_TIME</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI-property-PICKER_TYPE_DATE\">PICKER_TYPE_DATE</a>.     </span>\n    </span>\n    <span style=\"color: #333333;\">\nSet the     </span>\n<tt class=\" \">type</tt>    <span style=\"color: #333333;\">\n attribute to one of the date/time picker types. Then, supply the date in the XML or TSS as a string that can be parsed by the moment.js library.    </span>\n    </p>\n    <p>    <img src=\"images/download/attachments/41845745/screenshot.png\" alt=\"images/download/attachments/41845745/screenshot.png\" class=\"confluence-embedded-image\" width=\"400\">\n        </img></p>\n    <p>The main index.xml view in the sample application sets the Picker element&apos;s <tt class=\" \">type</tt> property to &quot;Ti.UI.PICKER_TYPE_DATE&quot;, and sets the minimum and maximum dates the control will display.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!--</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tThe text field is included to show that its value attribute</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\twill not be parsed as a date, which is how the Picker&apos;s value</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tattribute will be treated.</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t--&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;TextField id=</code><code class=\"string\">&quot;txt&quot;</code><code class=\"plain\"> value=</code><code class=\"string\">&quot;July 4, 2014&quot;</code><code class=\"plain\"> top=</code><code class=\"string\">&quot;20&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Picker id=</code><code class=\"string\">&quot;picker&quot;</code><code class=\"plain\"> top=</code><code class=\"string\">&quot;50&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\ttype=</code><code class=\"string\">&quot;Ti.UI.PICKER_TYPE_DATE&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tminDate= </code><code class=\"string\">&quot;2013-02-08 09:30:26 Z&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tmaxDate=</code><code class=\"string\">&quot;2015,11,17&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;!-- the value (selected date) is being set in the TSS --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/Picker&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The initial time displayed by the Picker control is set in the main view&apos;s TSS file. A Picker&apos;s <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker-property-value\">value</a> property can be any string that can parsed as a date by the <a class=\"external-link external-link\" href=\"http://momentjs.com/docs/\" target=\"_blank\">Moment.js</a> library included with Alloy projects.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&apos;#index&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;#fff&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    fullscreen: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    exitOnClose: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&quot;#picker&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    value: </code><code class=\"string\">&quot;December 17, 2013&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&apos;#index[platform=android]&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor: </code><code class=\"string\">&apos;#000&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845745_DateTimePickers-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker\">Titanium.UI.Picker API reference</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Picker-property-type\">Titanium.UI.Picker.type property API reference</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://momentjs.com/docs/\" target=\"_blank\">Moment.js</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845745\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Date Time Pickers"});