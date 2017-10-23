Ext.data.JsonP['Destroying_Data_Bindings']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Destroying Data Bindings</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41846652\" class=\"content\">\n                        <h1>Destroying Data Bindings</h1>\n    <p>Demonstrates best practices for data binding memory management.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_destroy</strong>    </p>\n    </div>\n        <img src=\"images/download/attachments/41846652/destroy.png\" alt=\"images/download/attachments/41846652/destroy.png\" class=\"confluence-embedded-image\" width=\"400\">\n        <p>To prevent memory leaks and ensure that bindings are properly released, you should always call <tt class=\" \">destroy()</tt> on a controller that references a global data collection when you are done with that controller. Calling this method f    <span style=\"color: #222222;\">\nrees binding resources associated with this controller and its UI components.     </span>\nThe sample app&apos;s main <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/models/binding_destroy/views/index.xml\" target=\"_blank\">index.xml</a> view, shown below, declares global references to the <tt class=\" \">movies</tt> collection and <tt class=\" \">info</tt> model.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- global reference to info model --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Model src=</code><code class=\"string\">&quot;info&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- global reference to movies collection --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Collection src=</code><code class=\"string\">&quot;movies&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- ...abbreviated </code><code class=\"keyword\">for</code><code class=\"plain\"> clarity... --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>This info model and movies collection are bound to the info.xml and movies.xml views, respectively.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/info.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/info.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window layout=</code><code class=\"string\">&quot;vertical&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label text=</code><code class=\"string\">&quot;{info.name}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label text=</code><code class=\"string\">&quot;{info.email}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label text=</code><code class=\"string\">&quot;{info.twitter}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/movie.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/movie.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableView dataCollection=</code><code class=\"string\">&quot;movies&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;TableViewRow title=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view-controllers for the movies and info views call <tt class=\" \">$.destroy()</tt> from their <tt class=\" \">close</tt> event handlers to properly dispose of allocated memory.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/info.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/info.js\">\n<div class=\"line\"><code class=\"plain\">$.info.addEventListener(</code><code class=\"string\">&apos;close&apos;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.destroy();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/movies.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/movies.js\">\n<div class=\"line\"><code class=\"plain\">$.movies.addEventListener(</code><code class=\"string\">&apos;close&apos;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.destroy();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41846652_DestroyingDataBindings-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Data_Binding\">Alloy Data Binding</a>    </p>\n</li></ul>    <p>    </p>\n    <p>    </p>\n    </div>\n        </img></div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41846652\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Destroying Data Bindings"});