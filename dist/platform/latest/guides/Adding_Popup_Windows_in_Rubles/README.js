Ext.data.JsonP['Adding_Popup_Windows_in_Rubles']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Adding Popup Windows in Rubles</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083227\" class=\"content\">\n                        <h1>Adding Popup Windows in Rubles</h1>\n    <div class=\"section section-2 \" id=\"src-30083227_AddingPopupWindowsinRubles-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-src-30083227_AddingPopupWindowsinRubles-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-src-30083227_AddingPopupWindowsinRubles-Openingapopupwindowtoselectfromalistofelements\">Opening a popup window to select from a list of elements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-src-30083227_AddingPopupWindowsinRubles-Openingapopupwindowforuserinput\">Opening a popup window for user input</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083227_AddingPopupWindowsinRubles-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>In this recipe we show how a Ruble command can open a popup window for user input.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083227_AddingPopupWindowsinRubles-Openingapopupwindowtoselectfromalistofelements\">\n        <h2 class=\"heading \"><span>Opening a popup window to select from a list of elements</span></h2>\n    <p>Here, we select from a list of projects and use the output of the choice to insert different snippets to the editor.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&quot;Copy Scope&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">&quot;CONTROL+SHIFT+COMMAND+C&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :none</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :insert_as_snippet</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke {</code></div>\n<div class=\"line\"><code class=\"plain\">    choice = Ruble.choose(</code><code class=\"string\">&quot;Projects:&quot;</code><code class=\"plain\">, [</code><code class=\"string\">&quot;project 1&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;project 2&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;project 3&quot;</code><code class=\"plain\">], :title =&gt; </code><code class=\"string\">&quot;Project Selector&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> choice</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">1</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;snippet for project 1&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">2</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;snippet for project 2&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">3</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;snippet for project 3&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    end</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <p>The popup will look like the following:    </p>\n    <p>    <img src=\"images/download/attachments/30083227/project_selection.png\" alt=\"images/download/attachments/30083227/project_selection.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083227_AddingPopupWindowsinRubles-Openingapopupwindowforuserinput\">\n        <h2 class=\"heading \"><span>Opening a popup window for user input</span></h2>\n    <p>Here, we open a pop window to prompt for user input, store the output into a local variable &quot;name&quot; and output it as a snippet.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&quot;Copy Scope&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">&quot;CONTROL+SHIFT+COMMAND+C&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :none</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :insert_as_snippet</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke {</code></div>\n<div class=\"line\"><code class=\"plain\">    name = Ruble::UI.request_string(</code></div>\n<div class=\"line\"><code class=\"plain\">    :title =&gt; </code><code class=\"string\">&quot;User Name&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    :</code><code class=\"keyword\">default</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&quot;guest&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    :prompt =&gt; </code><code class=\"string\">&quot;Please insert user name:&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    )</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    <p>The popup will look like the following:    </p>\n    <p>    <img src=\"images/download/attachments/30083227/username_popup.png\" alt=\"images/download/attachments/30083227/username_popup.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083227\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Adding Popup Windows in Rubles"});