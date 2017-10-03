Ext.data.JsonP['Project_Configuration_File_(config.json)']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Project Configuration File (config.json)</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-35620077\" class=\"content\">\n                        <h1>Project Configuration File (config.json)</h1>\n    <p>Alloy uses the <tt class=\" \">config.json</tt> file, located in the project&apos;s <tt class=\" \">app</tt> directory, to specify global values, conditional environment and platform values, and widget dependencies. The configuration file contains the following objects:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Object    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>global    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for all environments and platforms.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>env:development    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for development, running in either the simulator or emulator.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>env:test    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for testing on a device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>env:production    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for production, running after a package installation.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>os:android    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for Android.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>os:ios    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for iOS.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>os:mobileweb    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for Mobile Web.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>os:windows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs present for targets built for Windows Phone (since Appcelerator CLI 4.0.0/Alloy 1.6.0).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>dependencies    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Contains key-value pairs for widget dependencies, where the key is the widget name and the value is the version number of the widget.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>autoStyle    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Enables the autostyle feature for the entire Alloy project (since Alloy 1.2.0). See <a class=\"document-link \" href=\"#!/guide/Dynamic_Styles-section-src-37530415_DynamicStyles-Autostyle\">Dynamic Styles: Autostyle</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>backbone    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Select the Backbone.js library to use for Alloy Model and Collection objects (since Appcelerator CLI 4.0.0/Alloy 1.6.0). Set to either <tt class=\" \">0.9.2</tt> (current default) or <tt class=\" \">1.1.2</tt>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>When mixed together, &apos;os&apos; values override &apos;env&apos; values, which override &apos;global&apos; values. If you want to specify both a platform and environment-specific configuation, combine the &apos;os&apos; and &apos;env&apos; values together into one string with the values space separated.  These values are accessible during runtime by prefixing the key with <tt class=\" \">Alloy.CFG</tt>.    </p>\n    <p>Example of a configuration file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;global&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">1</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;env:development&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">2</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;env:test&quot;</code><code class=\"plain\">:{</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">3</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;env:production&quot;</code><code class=\"plain\">:{</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">4</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os:ios env:production&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">5</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os:ios env:development&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">6</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os:ios env:test&quot;</code><code class=\"plain\">: {</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">7</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os:android&quot;</code><code class=\"plain\">:{</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">8</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;os:mobileweb&quot;</code><code class=\"plain\">:{</code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"value\">9</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;dependencies&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;com.foo.widget&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;1.0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">} </code></div>\n</div>\n    </div>\n    <p>In the above example, if the application is ran on the iPhone simulator and prints out &apos;foo&apos; using <tt class=\" \">Ti.API.info(Alloy.CFG.foo)</tt>, it will return &apos;6.&apos;    </p>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35620077\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Project Configuration File (config.json)"});