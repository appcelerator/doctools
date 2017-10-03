Ext.data.JsonP['Creating_a_New_Snippet']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Creating a New Snippet</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083259\" class=\"content\">\n                        <h1>Creating a New Snippet</h1>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Creatinganewsnippet\">Creating a new snippet</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-SpecialCharacters\">Special Characters</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Executingshellcommands\">Executing shell commands</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Addingtabstops\">Adding tab stops</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Mirroring\">Mirroring</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Restrictingthescopeofasnippet\">Restricting the scope of a snippet</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Addingasnippettoamenu\">Adding a snippet to a menu</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-AddingaSnippetCategory\">Adding a Snippet Category</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Creating_a_New_Snippet-section-src-30083259_CreatingaNewSnippet-Addingadditionalinformationaboutasnippet\">Adding additional information about a snippet</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>Users can create new templates or modify existing snippets in order to allow easy creation of default content.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>We assume you&apos;ve <a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble\">created a new Ruble</a> as a placeholder for the following content    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Creatinganewsnippet\">\n        <h2 class=\"heading \"><span>Creating a new snippet</span></h2>\n    <p>Snippets are templates that show up in content assist and the Snippets View    </p>\n    <p>    <img src=\"images/download/attachments/30083259/Screen_shot_2011-04-13_at_3.08.29_AM.png\" alt=\"images/download/attachments/30083259/Screen_shot_2011-04-13_at_3.08.29_AM.png\" class=\"confluence-embedded-image\">\n        </img></p>\n<ol class=\" \"><li class=\" \">    <p>Open the existing bundle.rb file    </p>\n</li><li class=\" \">    <p>Add the following content to the bottom of the file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |snip|</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.expansion = </code><code class=\"string\">&quot;my_super_snippet&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Save and close bundle.rb    </p>\n</li></ol>    <p>If you now open a new file (for example a .js file) and type &quot;fo&quot;, you should see you snippet show up in the list. Selecting it will insert &quot;my_super_snippet&quot; into the document    </p>\n    <p>Instead, if you type &quot;foo&quot; + the Tab key, the phrase &quot;my_super_snippet&quot; will automatically be inserted.    </p>\n    <div class=\"section section-3 \" id=\"src-30083259_CreatingaNewSnippet-SpecialCharacters\">\n        <h3 class=\"heading \"><span>Special Characters</span></h3>\n    <p>Snippets, like other ruble elements, are written using ruby. As a result you should familiarize yourself with ruby syntax as a base. Some characters have special meanings inside double-quoted strings: <a class=\"external-link external-link\" href=\"http://ruby.runpaint.org/strings#interpolation\" target=\"_blank\">http://ruby.runpaint.org/strings#interpolation</a>    </p>\n    <p>The basics are that ruby code surrounded with #{} is interpreted and inserted into the string. References to globals, i.e. <tt class=\" \">$my_global</tt>, will be interpreted even if not surrounded by #{}. You should escape $ like so:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">s.expansion = </code><code class=\"string\">&quot;\\\\$global = 123;&quot;</code></div>\n</div>\n    </div>\n    <p>This will end up inserting <tt class=\" \">&quot;$global = 123;&quot;</tt>, whereas if the dollar was not escaped, the $global reference would be interpreted (and would typically produce an empty string replacement).<br>Dollar signs are also significant in tabstops (see below). Backticks, `,` are used for executing shell commands (described below).    </br></p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Executingshellcommands\">\n        <h2 class=\"heading \"><span>Executing shell commands</span></h2>\n    <p>You can use backticks to have shell code executed when the snippet is inserted. The result from running the code gets inserted into the snippet, though with the last newline in the result removed (if present). So for example to create a snippet that inserts a datestamp in an HTML comment, we can do:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- File created on: `date` --&gt;</code></div>\n</div>\n    </div>\n    <p>Inside shell code, the only character you need to escape is the backtick.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Addingtabstops\">\n        <h2 class=\"heading \"><span>Adding tab stops</span></h2>\n    <p>Tab stops allow you to easily modify a snippet once it&apos;s been inserted.    </p>\n<ol class=\" \"><li class=\" \">    <p>Re-open bundle.rb    </p>\n</li><li class=\" \">    <p>Add the following content to the bottom of the file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My Second Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |s|</code></div>\n<div class=\"line\"><code class=\"plain\">  s.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  s.expansion = </code><code class=\"string\">&quot;${1:method_name}: function(${2:attribute}){}&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>The ${X:Y} indicates a tab stop. X indicates the order of the tab stop, and Y indicates the default content that will be placed there.    </p>\n</li><li class=\" \">    <p>Save and close bundle.rb    </p>\n</li></ol>    <p>Now attempt to complete the snippet as before. If you type &quot;foo&quot; + Tab, you will get a list showing the two snippets you&apos;ve created. Selecting the &quot;My Second Snippet&quot; will insert the snippet and allow you to tab through the two variables listed as $1 and $2 above, where you can replace the default content just by typing. Pressing Tab enough times will exit the snippet.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083259_CreatingaNewSnippet-Mirroring\">\n        <h2 class=\"heading \"><span>Mirroring</span></h2>\n    <p>Mirroring means that you can have the same content appear update in multiple places    </p>\n<ol class=\" \"><li class=\" \">    <p>Re-open bundle.rb    </p>\n</li><li class=\" \">    <p>Update the the content to add a second $2 item:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My Second Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |s|</code></div>\n<div class=\"line\"><code class=\"plain\">  s.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  s.expansion = </code><code class=\"string\">&quot;${1:method_name}: function(${2:attribute}){${2:attribute}}&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Repeating a tab stop means that the content will be mirrored. if you update the value of one tab stop, the other identically numbered one will also update simultaneously.    </p>\n</li><li class=\" \">    <p>Save and close bundle.rb    </p>\n</li></ol>    <p>Attempt to complete the snippet as before. Note that when you start typing for tab stop #2, both items labelled #2 will update.    </p>\n    <div class=\"section section-3 \" id=\"src-30083259_CreatingaNewSnippet-Restrictingthescopeofasnippet\">\n        <h3 class=\"heading \"><span>Restricting the scope of a snippet</span></h3>\n    <p>Adding a scope means that the snippet will only show up in certain editors or languages    </p>\n<ol class=\" \"><li class=\" \">    <p>Re-open bundle.rb    </p>\n</li><li class=\" \">    <p>Add this to the bottom of the file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My JavaScript Snippet 2&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |s|</code></div>\n<div class=\"line\"><code class=\"plain\">  s.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  s.scope = </code><code class=\"string\">&quot;source.js&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  s.expansion = </code><code class=\"string\">&quot;function($1) {};&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Save and close bundle.rb    </p>\n</li></ol>    <p>Note that this snippet is now only available in JavaScript files. A list of scopes is available here: <a class=\"document-link \" href=\"#!/guide/Current_Theme_Scopes\">Current Theme Scopes</a>    </p>\n    <p>The <a class=\"document-link \" href=\"#!/guide/Ruble_Specification\">Ruble Specification</a> gives a complete discussion on the new Ruble scripting system in Studio.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083259_CreatingaNewSnippet-Addingasnippettoamenu\">\n        <h3 class=\"heading \"><span>Adding a snippet to a menu</span></h3>\n    <p>Adding a snippet to a menu is identical to adding a command. You add a menu entry with the same name as the snippet:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">bundle </code><code class=\"keyword\">do</code><code class=\"plain\"> |bundle|</code></div>\n<div class=\"line\"><code class=\"plain\">  bundle.display_name = </code><code class=\"string\">&apos;My Ruble&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">  bundle.menu </code><code class=\"string\">&apos;My Ruble&apos;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |menu|</code></div>\n<div class=\"line\"><code class=\"plain\">    menu.command </code><code class=\"string\">&apos;My Snippet&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |snip|</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.expansion = </code><code class=\"string\">&quot;my_super_snippet&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083259_CreatingaNewSnippet-AddingaSnippetCategory\">\n        <h3 class=\"heading \"><span>Adding a Snippet Category</span></h3>\n    <p>Having categories allows snippets to be grouped with similar snippets, making it easier to find and discover snippets. To add a snippet category, create a snippet_category entry and update any corresponding snippets to have the category:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">snippet_category </code><code class=\"string\">&quot;my_category&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |category|</code></div>\n<div class=\"line\"><code class=\"plain\">  category.icon_path = </code><code class=\"string\">&quot;icons/my_category.png&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |snip|</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.expansion = </code><code class=\"string\">&quot;my_categorized_snippet&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.category = </code><code class=\"string\">&quot;my_category&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083259_CreatingaNewSnippet-Addingadditionalinformationaboutasnippet\">\n        <h3 class=\"heading \"><span>Adding additional information about a snippet</span></h3>\n    <p>This provides context and discoverability of snippets. The Snippets View uses this information to group and filter snippets    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">snippet </code><code class=\"string\">&quot;My create map Snippet&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |snip|</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.trigger = </code><code class=\"string\">&quot;foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.expansion = </code><code class=\"string\">&quot;my_map_snippet&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.description = </code><code class=\"string\">&quot;Creates a map object and adds the following annotations: current location, paris, and ontario&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.tags = [</code><code class=\"string\">&apos;UI&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;map&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;annotation&apos;</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.category = </code><code class=\"string\">&quot;Maps and Annotations&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  snip.icon_path = </code><code class=\"string\">&quot;icons/my_map_icon.png&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083259\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Creating a New Snippet"});