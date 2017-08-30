Ext.data.JsonP['ListView_Binding']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ListView Binding</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845706\" class=\"content\">\n                        <h1>ListView Binding</h1>\n    <p>Demonstrates using binding a data collection to a ListView and applying different list item templates to each list item using a data transformer.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_listview</strong>    </p>\n    </div>\n        <p>The application defines three list item templates: one with just a title, one with a title and subtitle, and one with a title, subtitle and image.    </p>\n    <p>    <img src=\"images/download/attachments/41845706/screenshot.png\" alt=\"images/download/attachments/41845706/screenshot.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"240\">\n        </img></p>\n    <p>The main index.xml view defines three <tt class=\" \">&lt;ItemTemplate/&gt;</tt> elements &#x2013; &quot;fullItem&quot;, &quot;titleAndSub&quot;, and &quot;title&quot; &#x2013; that define the various UI elements. The <tt class=\" \">bindId</tt> attribute assigned to each UI element specifies the name used to assign data to it at runtime. The <tt class=\" \">&lt;ListSection/&gt;</tt> element contains a single <tt class=\" \">&lt;ListItem/&gt;</tt> element whose <tt class=\" \">template</tt> attribute is set to the value &quot;{{<tt class=\" \">template</tt>}}&quot;. It includes attributes whose names correspond to the three possible template UI elements: &quot;title&quot;, &quot;subtitle&quot; and &quot;image&quot;. The <tt class=\" \">ListSection</tt> element is bound to the <tt class=\" \">info</tt> collection and specifies a <tt class=\" \">dataTransform</tt> function named <tt class=\" \">doTransform()</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;ListView id=</code><code class=\"string\">&quot;list&quot;</code><code class=\"plain\"> defaultItemTemplate=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Templates&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ItemTemplate name=</code><code class=\"string\">&quot;fullItem&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;70&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;ImageView bindId=</code><code class=\"string\">&quot;image&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;image&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label bindId=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;title text-and-image&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label bindId=</code><code class=\"string\">&quot;subtitle&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;subtitle text-and-image&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ItemTemplate&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ItemTemplate name=</code><code class=\"string\">&quot;titleAndSub&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;70&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label bindId=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label bindId=</code><code class=\"string\">&quot;subtitle&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;subtitle&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ItemTemplate&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ItemTemplate name=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;50&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label bindId=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ItemTemplate&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Templates&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ListSection id=</code><code class=\"string\">&quot;section&quot;</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">&quot;info&quot;</code><code class=\"plain\"> dataTransform=</code><code class=\"string\">&quot;doTransform&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ListItem template=</code><code class=\"string\">&quot;{template}&quot;</code><code class=\"plain\"> title:text=</code><code class=\"string\">&quot;{title}&quot;</code><code class=\"plain\"> subtitle:text=</code><code class=\"string\">&quot;{subtitle}&quot;</code><code class=\"plain\"> image:image=</code><code class=\"string\">&quot;{image}&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ListSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ListView&gt;</code></div>\n</div>\n    </div>\n    <p>When the user clicks a toolbar button, the <tt class=\" \">doButtonClick()</tt> is called, which adds a new model to the info collection, and persists it to the SQLite database. The model is initialized with a unique data object, depending on which button was clicked. The <tt class=\" \">doTransform()</tt> then assigns the correct template to the model depending on its data structure, and returns the updated model for display.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"comments\">// assign a ListItem template based on the contents of the model</code></div>\n<div class=\"line\"><code class=\"plain\">function doTransform(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var o = model.toJSON();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (o.subtitle) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (o.image) {</code></div>\n<div class=\"line\"><code class=\"plain\">            o.template = </code><code class=\"string\">&apos;fullItem&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            o.template = </code><code class=\"string\">&apos;titleAndSub&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        o.template = </code><code class=\"string\">&apos;title&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> o;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Handle the buttonClick event triggered from the button controller.</code></div>\n<div class=\"line\"><code class=\"comments\">// Notice that we will be updating the ListView UI without referring</code></div>\n<div class=\"line\"><code class=\"comments\">// directly to the ListView itself, only by modifying its data model.</code></div>\n<div class=\"line\"><code class=\"plain\">function doButtonClick(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(e);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (_.isEmpty(e.modelObj)) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// use a custom query to quickly empty the SQLite store</code></div>\n<div class=\"line\"><code class=\"plain\">        var db = Ti.Database.open(</code><code class=\"string\">&apos;_alloy_&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        db.execute(</code><code class=\"string\">&apos;DELETE FROM info;&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        db.close();</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// refresh the collection to reflect this in the UI</code></div>\n<div class=\"line\"><code class=\"plain\">        info.fetch();</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// create a model for the listitem</code></div>\n<div class=\"line\"><code class=\"plain\">        var model = Alloy.createModel(</code><code class=\"string\">&apos;info&apos;</code><code class=\"plain\">, e.modelObj);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// add model to collection which will in turn update the UI</code></div>\n<div class=\"line\"><code class=\"plain\">        info.add(model);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// save the model to SQLite</code></div>\n<div class=\"line\"><code class=\"plain\">        model.save();</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>The application models/info.js defines a a data model with four fields: id, title, subtitle, and image. It also specifies SQL as the persistence adaptor, and the collection name as &quot;info&quot;.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/models/info.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/models/info.js\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        columns: {</code></div>\n<div class=\"line\"><code class=\"plain\">            id: &apos;INTEGER PRIMARY KEY AUTOINCREMENT&apos;,</code></div>\n<div class=\"line\"><code class=\"plain\">            title: &apos;TEXT&apos;,</code></div>\n<div class=\"line\"><code class=\"plain\">            subtitle: &apos;TEXT&apos;,</code></div>\n<div class=\"line\"><code class=\"plain\">            image: &apos;TEXT&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        adapter: {</code></div>\n<div class=\"line\"><code class=\"plain\">            type: &apos;sql&apos;,</code></div>\n<div class=\"line\"><code class=\"plain\">            collection_name: &apos;info&apos;,</code></div>\n<div class=\"line\"><code class=\"plain\">            idAttribute: &apos;id&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845706_ListViewBinding-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link unresolved\" href=\"#!/guide/ListView_Binding-section-src-41845706\">Alloy ListView Guide</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ListView\">Titanium.UI.ListView API reference</a>    </p>\n</li></ul>    <p>    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845706\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ListView Binding"});