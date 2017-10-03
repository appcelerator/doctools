Ext.data.JsonP['SQL_ID_Attribute']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>SQL ID Attribute</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845723\" class=\"content\">\n                        <h1>SQL ID Attribute</h1>\n    <p>    <span style=\"color: #000000;\">\nThis example demonstrates how you can use a custom model identifier with the     </span>\n<tt class=\" \">idAttribute</tt>    <span style=\"color: #000000;\">\n field in the model definition file.    </span>\n    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/sql_idAttribute</strong>    </p>\n    </div>\n        <p>    <span style=\"color: #000000;\">\n<br>    </br></span>\n    <img src=\"images/download/attachments/41845723/screenshot.png\" alt=\"images/download/attachments/41845723/screenshot.png\" class=\"confluence-embedded-image\" width=\"200\">\n    </img></p>\n    <p>By default, a    <span style=\"color: #000000;\">\n Alloy model&apos;s unique identifier is stored under the     </span>\nalloy_id    <span style=\"color: #000000;\">\n attribute. To use a custom identifier, in the model configuration file, add the custom field to the &quot;columns&quot; object and also, in the &quot;adaptor&quot; object, set the <tt class=\" \">idAttribute</tt> field to the name of the custom field. The example&apos;s fighters.js model configuration file demonstrates this.     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/models/fighters.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/models/fighters.js\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">\tconfig: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"string\">&quot;columns&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tname: </code><code class=\"string\">&apos;TEXT&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tnickname: </code><code class=\"string\">&apos;TEXT&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tfighterId: </code><code class=\"string\">&apos;TEXT PRIMARY KEY&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"string\">&quot;adapter&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;sql&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;collection_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;fighters&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;idAttribute&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;fighterId&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>The alloy.js file populates the <tt class=\" \">fighters</tt> collection with models that use the custom ID:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"alloy.js\">\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.fighters = Alloy.createCollection(</code><code class=\"string\">&apos;fighters&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var fighters = [</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Wanderlei Silva&apos;</code><code class=\"plain\">, nickname: </code><code class=\"string\">&apos;The Axe Murderer&apos;</code><code class=\"plain\">, fighterId: </code><code class=\"string\">&apos;wandy&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Manny Pacquiao&apos;</code><code class=\"plain\">, nickname: </code><code class=\"string\">&apos;Pac-Man&apos;</code><code class=\"plain\">, fighterId: </code><code class=\"string\">&apos;manny&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Muhammad Ali&apos;</code><code class=\"plain\">, nickname: </code><code class=\"string\">&apos;The Greatest&apos;</code><code class=\"plain\">, fighterId: </code><code class=\"string\">&apos;ali&apos;</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">_.each(fighters, function(fighter) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar model = Alloy.createModel(</code><code class=\"string\">&apos;fighters&apos;</code><code class=\"plain\">, fighter);</code></div>\n<div class=\"line\"><code class=\"plain\">\tmodel.save();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>Selecting an row in the table displays a JSON representation of the associated model, as shown in the screenshot above.    </p>\n    <div class=\"section section-2 \" id=\"src-41845723_SQLIDAttribute-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/SQL_ID_Attribute-section-src-41845723\">Alloy Migrations</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845723\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"SQL ID Attribute"});