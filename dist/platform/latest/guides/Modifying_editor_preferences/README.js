Ext.data.JsonP['Modifying_editor_preferences']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Modifying editor preferences</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083267\" class=\"content\">\n                        <h1>Modifying editor preferences</h1>\n    <div class=\"section section-2 \" id=\"src-30083267_Modifyingeditorpreferences-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This page describes how to modify or customize some editor settings in Studio. Some editor settings can be modified in preferences, and can be further modified by editing a Ruble. Follow the directions below to further customize settings.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083267_Modifyingeditorpreferences-SmartTypingPairs\">\n        <h2 class=\"heading \"><span>Smart Typing Pairs</span></h2>\n    <p>Smart typing pairs is when you type a character such as &apos; or (, and it auto-inserts the matching &apos; or ).    </p>\n    <div class=\"section section-3 \" id=\"src-30083267_Modifyingeditorpreferences-ModifyingtheBuilt-InBundles\">\n        <h3 class=\"heading \"><span>Modifying the Built-In Bundles</span></h3>\n<ol class=\" \"><li class=\" \">    <p>Find the bundle that represents the editor you are interested in. If it&apos;s a HTML-based editor (like PHP), you&apos;ll want to edit the HTML ruble.    </p>\n</li><li class=\" \">    <p>Select the menu item <strong class=\" \">Commands &gt; Bundle Name &gt; Edit this Bundle</strong>. It will create a project in your workspace with the contents of that bundle.    </p>\n</li><li class=\" \">    <p>Open up the bundle project, and find the <strong class=\" \">bundle.rb</strong> file.    </p>\n</li><li class=\" \">    <p>Edit (or add) the <strong class=\" \">smart_typing_pairs</strong> section.    </p>\n</li><li class=\" \">    <p>Save the file. Your new settings should be in effect.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-30083267_Modifyingeditorpreferences-Example\">\n        <h3 class=\"heading \"><span>Example</span></h3>\n    <p>As an example, we remove the auto-character insertion of quotes inb the HTML/PHP editors, but leave parens and braces alone.    </p>\n<ol class=\" \"><li class=\" \">    <p>Select menu &quot;Commands &gt; HTML &gt; Edit this bundle.&quot;    </p>\n</li><li class=\" \">    <p>Open the file HTML / bundle.rb. searching for the following:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">   smart_typing_pairs[</code><code class=\"string\">&quot;text.html meta.tag - punctuation.definition.tag.begin&quot;</code><code class=\"plain\">] = [</code><code class=\"string\">&apos;&quot;&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;&quot;&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;(&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;)&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;{&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;}&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;[&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;]&apos;</code><code class=\"plain\">, </code><code class=\"string\">&quot;&apos;&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;&apos;&quot;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">   ...</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Edit the smart_typing_pairs property to use the new key command to the following:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">   smart_typing_pairs[</code><code class=\"string\">&quot;text.html meta.tag - punctuation.definition.tag.begin&quot;</code><code class=\"plain\">] = [</code><code class=\"string\">&apos;(&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;)&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;{&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;}&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;[&apos;</code><code class=\"plain\">, </code><code class=\"string\">&apos;]&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">   ...</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Save the file. The update should work as expected.    </p>\n</li></ol>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083267\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Modifying editor preferences"});