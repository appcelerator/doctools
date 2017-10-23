Ext.data.JsonP['Non-Persistent_Model_Bindings']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Non-Persistent Model Bindings</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-41845708\" class=\"content\">\n                        <h1>Non-Persistent Model Bindings</h1>\n    <p>Demonstrates using a static, non-persistent data collection.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/binding_no_persistence</strong>    </p>\n    </div>\n        <p>In the sample application, clicking the <tt class=\" \">&lt;Label&gt;</tt> or <tt class=\" \">&lt;TableView&gt;</tt> UI element causes the application to make trivial changes to the underlying model or collection data. To update the UI with the new model or collections data, it then calls the <tt class=\" \">trigger()</tt> method on both model and collection objects. One difference between using a persistent and non-persistent model or collection is that you can&apos;t call the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Model-fetch\" target=\"_blank\">model</a> or <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Collection-fetch\" target=\"_blank\">collection</a>&apos;s <tt class=\" \">fetch()</tt> method on a non-persistent collection, as this generates a runtime error. Instead, call the <tt class=\" \">trigger()</tt> method on the model or collection, as demonstrated.    </p>\n    <p>    <img src=\"images/download/attachments/41845708/no_persist.png\" alt=\"images/download/attachments/41845708/no_persist.png\" class=\"confluence-embedded-image\" width=\"400\">\n        </img></p>\n    <p>The <strong class=\" \">appState</strong> model models the application state with a counter and hexadecimal color value, and the <strong class=\" \">heroes</strong> collection contains a list of super heroes. The sample uses the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Model\" target=\"_blank\">Backbone.Model()</a> and <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Collection\" target=\"_blank\">Backbone.Collection()</a> methods to create the model and collection directly, instead of the <a class=\"external-link external-link\" href=\"#!/api/Alloy-method-createModel\">Alloy.createModel(</a>) and <a class=\"external-link external-link\" href=\"#!/api/Alloy-method-createCollection\">Alloy.createCollection()</a> methods.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/alloy.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/alloy.js\">\n<div class=\"line\"><code class=\"plain\">Alloy.Models.appState = </code><code class=\"keyword\">new</code><code class=\"plain\"> Backbone.Model({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcounter: </code><code class=\"value\">1</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor: </code><code class=\"string\">&apos;#00f&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.heroes = </code><code class=\"keyword\">new</code><code class=\"plain\"> Backbone.Collection();</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.heroes.reset([</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Ironman&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Superman&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Thor&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Captain America&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Hulk&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Green Lantern&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Punisher&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Spiderman&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Wolverine&apos;</code><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ name: </code><code class=\"string\">&apos;Cyclops&apos;</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n</div>\n    </div>\n    <p>The model data is updated by the <tt class=\" \">modifyHero()</tt> and <tt class=\" \">updateState()</tt> functions, called when the user clicks the Label or TableView elements on their respective tabs.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"comments\">// Contrived update function to modify the model</code></div>\n<div class=\"line\"><code class=\"comments\">// associated with the clicked row</code></div>\n<div class=\"line\"><code class=\"plain\">function modifyHero(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar model = heroes.at(e.index);</code></div>\n<div class=\"line\"><code class=\"plain\">\tmodel.set(</code><code class=\"string\">&apos;name&apos;</code><code class=\"plain\">, model.get(</code><code class=\"string\">&apos;name&apos;</code><code class=\"plain\">) + </code><code class=\"string\">&apos;+&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Update the model&apos;s counter and color, which in turn</code></div>\n<div class=\"line\"><code class=\"comments\">// updates the UI via model binding</code></div>\n<div class=\"line\"><code class=\"plain\">function updateState() {</code></div>\n<div class=\"line\"><code class=\"plain\">\tappState.set({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tcounter: appState.get(</code><code class=\"string\">&apos;counter&apos;</code><code class=\"plain\">)+</code><code class=\"value\">1</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tcolor: generateRandomColor()</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Simulate a change in our model to trigger UI binding.</code></div>\n<div class=\"line\"><code class=\"comments\">// Remember, don&apos;t use fetch() when using a model with</code></div>\n<div class=\"line\"><code class=\"comments\">// no persistence, it will generate an error.</code></div>\n<div class=\"line\"><code class=\"plain\">appState.trigger(</code><code class=\"string\">&apos;change&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">heroes.trigger(</code><code class=\"string\">&apos;change&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845708_Non-PersistentModelBindings-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/guide/Backbone_Objects_without_Alloy\">Backbone Objects without Alloy</a>    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845708\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Non-Persistent Model Bindings"});