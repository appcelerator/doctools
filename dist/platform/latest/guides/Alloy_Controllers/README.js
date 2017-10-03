Ext.data.JsonP['Alloy_Controllers']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Controllers</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-34636384\" class=\"content\">\n                        <h1>Alloy Controllers</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-Controllers\">Controllers</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-Events\">Events</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-Inheritance\">Inheritance</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-ConditionalCode\">Conditional Code</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-PassingArguments\">Passing Arguments</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-GlobalNamespace\">Global Namespace</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1Jbml0aWFsaXplckZpbGUoYWxsb3kuanMp\">Initializer File (alloy.js)</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-LibraryCodeandCommonJSModules\">Library Code and CommonJS Modules</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-SpecsFolder\">Specs Folder</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_AlloyControllers-Platform-specificLibraryFolders\">Platform-specific Library Folders</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1FeHRlbmRpbmdBbGxveSxVbmRlcnNjb3JlLmpzYW5kQmFja2JvbmUuanM\">Extending Alloy, Underscore.js and Backbone.js</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-34636384_AlloyControllers-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This topic covers how to write controller code as well as other JavaScript files excluding models. Some traditional Titanium development is required, since Alloy controllers make direct calls to the Titanium SDK API to manipulate UI objects and access non-UI APIs. Refer to the <a class=\"external-link external-link\" href=\"#!/api\">Titanium API Guides</a> for more information.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-34636384_AlloyControllers-Controllers\">\n        <h2 class=\"heading \"><span>Controllers</span></h2>\n    <p>In Alloy, controllers contain the application logic used to control the UI and communicate with the model. The following code contains the presentation logic (<tt class=\" \">index.js</tt>) associated with the view (<tt class=\" \">index.xml</tt>).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function doClick(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert($.label.text);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;doClick&quot;</code><code class=\"plain\">&gt;Hello, World&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>All UI elements which have an <tt class=\" \">id</tt> attribute in a view are automatically defined and available as a property prefixed by the special variable <tt class=\" \">$</tt> in the controller. The <tt class=\" \">$</tt> is a reference to the controller. For example, the <tt class=\" \">$.label</tt> prefix in the controller is used to access the <tt class=\" \">Ti.UI.Label</tt> object instance in the view. This reference is used to directly access properties or methods of this object. For example, calling <tt class=\" \">$.label.hide()</tt> hides the label from the view or you can change the label text with <tt class=\" \">$.label.text</tt>.    </p>\n    <p>To access external controllers and views, use the <tt class=\" \">Alloy.createController</tt> and <tt class=\" \">Controller.getView</tt> methods, respectively. See the <a class=\"external-link external-link\" href=\"#!/api/Alloy\">Alloy API documentation</a> for more details.    </p>\n    <p>If the top-level UI object does not have an ID defined, reference it using the name of the controller prefixed by the <tt class=\" \">$</tt>. Since the Window object in the view does not contain an ID, the controller uses <tt class=\" \">$.index</tt> to grab the top-level UI object from the view. However, if an <tt class=\" \">id</tt> attribute was defined, for example, <tt class=\" \">&lt;Window id=&apos;window&apos;&gt;</tt>, the controller needs to use <tt class=\" \">$.window</tt> to gain access to the Window object; <tt class=\" \">$.index</tt> will be undefined and the application will throw an error when calling <tt class=\" \">$.index.open()</tt>.    </p>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-Events\">\n        <h3 class=\"heading \"><span>Events</span></h3>\n    <p>Controllers extend <tt class=\" \">BackBone.Events</tt> and as such can dispatch events.    </p>\n    <p>For example, our index view could also require another controller to deliver the label and listen to an event:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Require id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\"> src=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\"> onNotify=</code><code class=\"string\">&quot;doSomething&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The view of the required label-controller would listen to the <tt class=\" \">click</tt> event of the label itself:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/label.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/label.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;passClick&quot;</code><code class=\"plain\">&gt;Hello, World&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>And that label-controller would in turn fire the notify event on itself so the index controller will receive it:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/label.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/label.js\">\n<div class=\"line\"><code class=\"plain\">function passClick(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.trigger(</code><code class=\"string\">&apos;notify&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-Inheritance\">\n        <h3 class=\"heading \"><span>Inheritance</span></h3>\n    <p>Controllers can inherit from other controllers by assigning it a base (parent) controller: <tt class=\" \">exports.baseController = &apos;baseControllerName&apos;</tt>. As in the CommonJS model, the controller inherits any exported functions from the base controller. These functions can also be overwritten.    </p>\n    <p>For example, the animal view-controller defines a label object with a speak method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/animal.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/animal.js\">\n<div class=\"line\"><code class=\"plain\">exports.speak = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">&quot;Yelp!&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/animal.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/animal.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Label id=</code><code class=\"string\">&quot;animalLabel&quot;</code><code class=\"plain\">&gt;Animal&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Then, the following code inherits from the animal view-controller and override the speak method and label text property to customize it for a dog controller.    </p>\n    <p>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/dog.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/dog.js\">\n<div class=\"line\"><code class=\"plain\">exports.baseController = </code><code class=\"string\">&quot;animal&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">$.animalLabel.text = </code><code class=\"string\">&quot;Dog&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.speak = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">&quot;Bark!&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-ConditionalCode\">\n        <h3 class=\"heading \"><span>Conditional Code</span></h3>\n    <p>Alloy introduces a set of special variables that act like compiler directives. Using these compiler constants optimizes the code at generation/compilation and any non-reachable code is removed.    </p>\n    <p>The following are the constants defined by Alloy for use in the controller code:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">OS_ANDROID</tt> : true if the current compiler target is Android    </p>\n</li><li class=\" \">    <p><tt class=\" \">OS_IOS</tt> : true if the current compiler target is iOS    </p>\n</li><li class=\" \">    <p><tt class=\" \">OS_MOBILEWEB</tt>  : true if the current compiler target is Mobile Web    </p>\n</li><li class=\" \">    <p><tt class=\" \">OS_WINDOWS</tt> (<strong class=\" \">since Appcelerator CLI 4.0.0/Alloy 1.6.0</strong>): true if the current compiler target is Windows Phone    </p>\n</li><li class=\" \">    <p><tt class=\" \">ENV_DEV</tt> : true if the current compiler target is built for development (running in the simulator or emulator)    </p>\n</li><li class=\" \">    <p><tt class=\" \">ENV_TEST</tt> : true if the current compiler target is built for testing on a device    </p>\n</li><li class=\" \">    <p><tt class=\" \">ENV_PRODUCTION</tt> : true if the current compiler target is built for production (running after a packaged installation)    </p>\n</li><li class=\" \">    <p><tt class=\" \">DIST_ADHOC</tt> (<strong class=\" \">since Alloy 1.4.0</strong>) : true if the current compiler target is built for iOS Ad Hoc distribution, for example, if you set the <tt class=\" \">-T dist-adhoc</tt> option when building with the Titanium CLI. Note that the <tt class=\" \">ENV_PRODUCTION</tt> constant will be true too since this deployment is only for production builds.    </p>\n</li><li class=\" \">    <p><tt class=\" \">DIST_STORE</tt> (<strong class=\" \">since Alloy 1.4.0</strong>) : true if the current compiler target is built for deployment to the Google Play Store or iTunes App Store, for example, if you set the <tt class=\" \">-T dist-store</tt> option when building the Titanium CLI. Note that the <tt class=\" \">ENV_PRODUCTION</tt> constant will be true too since this deployment is only for production builds.    </p>\n</li></ul>    <p>For example, since iOS devices do not include a back button, the application can conditionally add one to a window controller:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (OS_IOS) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar closeButton = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">        title: </code><code class=\"string\">&apos;Close&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        style: Ti.UI.iPhone.SystemButtonStyle.PLAIN</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    closeButton.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(){</code></div>\n<div class=\"line\"><code class=\"plain\">        $.window.close();</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    $.window.leftNavButton = closeButton;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-PassingArguments\">\n        <h3 class=\"heading \"><span>Passing Arguments</span></h3>\n    <p>When initializing an external controller, you can pass arguments to customize it, for instance, <tt class=\" \">var controller = Alloy.createController(&apos;controller&apos;, {args1: &apos;foo&apos;})</tt>. In the external controller, the special variable <tt class=\" \">$.args</tt> is used to receive the arguments. Prior to Alloy 1.6, you needed to use <tt class=\" \">arguments[0]</tt>. For example, suppose you want to add multiple TableViewRow objects to a TableView object.    </p>\n    <p>For the TableViewRow object, called &apos;row&apos;, the view contains only the object, and the controller contains only a few lines of code to parse the arguments:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/row.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/row.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TableViewRow id=</code><code class=\"string\">&quot;rowView&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/row.js (Alloy 1.6+)</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/row.js (Alloy 1.6+)\">\n<div class=\"line\"><code class=\"plain\">$.rowView.title = $.args.title || </code><code class=\"string\">&apos;&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">$.rowView.url = $.args.url || </code><code class=\"string\">&apos;&apos;</code><code class=\"plain\">;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/row.js (Alloy &lt;1.6)</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/row.js (Alloy &lt;1.6)\">\n<div class=\"line\"><code class=\"plain\">var args = arguments[</code><code class=\"value\">0</code><code class=\"plain\">] || {};</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>In a separate controller containing the TableView object, called &apos;tableView&apos;, the code is cycling through an array of data and creating new instances of &apos;row&apos; to supply it to &apos;tableView.&apos;    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">var data[];</code></div>\n<div class=\"line\"><code class=\"keyword\">for</code><code class=\"plain\"> (var i=</code><code class=\"value\">0</code><code class=\"plain\">; i&lt;source.length; i++) {    </code></div>\n<div class=\"line\"><code class=\"plain\">    var arg = {</code></div>\n<div class=\"line\"><code class=\"plain\">        title: source[i].postTitle,</code></div>\n<div class=\"line\"><code class=\"plain\">        url: source[i].postLink</code></div>\n<div class=\"line\"><code class=\"plain\">    };</code></div>\n<div class=\"line\"><code class=\"plain\">    data.push(Alloy.createController(</code><code class=\"string\">&apos;row&apos;</code><code class=\"plain\">, arg).getView());</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">$.tableView.setData(data);</code></div>\n</div>\n    </div>\n    <p>As seen in the example above, the controller is passing different arguments to the &apos;row&apos; controller, creating unique instances of &apos;row&apos;.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-GlobalNamespace\">\n        <h3 class=\"heading \"><span>Global Namespace</span></h3>\n    <p>Controllers can store and access global variables using the <tt class=\" \">Alloy.Globals</tt> namespace. For example, you can store an instance of a parent window in Globals and access it in another window.    </p>\n    <p>Store the parent window:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$.index.open();</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.parent = $.index;</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Access the parent window in another controller:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var parent = Alloy.Globals.parent;</code></div>\n<div class=\"line\"><code class=\"plain\">parent.close();</code></div>\n</div>\n    </div>\n    <p>Other non-controller JavaScript code can access the globals variable but need to require the Alloy module. See <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1FeHRlbmRpbmdBbGxveSxVbmRlcnNjb3JlLmpzYW5kQmFja2JvbmUuanM\">Extending Alloy</a> below.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1Jbml0aWFsaXplckZpbGUoYWxsb3kuanMp\">\n        <h2 class=\"heading \"><span>Initializer File (alloy.js)</span></h2>\n    <p>The initializer file <tt class=\" \">app/alloy.js</tt> can be used to execute some code near the beginning of the application&apos;s lifecycle. The contents of this file will be executed right before the initial <tt class=\" \">index.js</tt> controller is loaded, allowing you to execute code before any UI components are loaded and to override builtin Alloy functions before they are executed. The code in this file also has access to the <tt class=\" \">Alloy</tt> namespace.    </p>\n    <p>For instance, the default <tt class=\" \">isTablet</tt> method returns true if it is identified as an iPad, an Android device in the large or extra large group, or if either dimension exceeds 400 dp for Mobile Web application. To override that behavior, you can add the following code to <tt class=\" \">alloy.js</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Alloy.isTablet = function(){</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> !(Math.min(Ti.Platform.displayCaps.platformHeight, Ti.Platform.displayCaps.platformWidth) &lt; </code><code class=\"value\">600</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-34636384_AlloyControllers-LibraryCodeandCommonJSModules\">\n        <h2 class=\"heading \"><span>Library Code and CommonJS Modules</span></h2>\n    <p>Some JavaScript code might not be suitable as controller code, since it does not have an associated view, or you want to separate it from the MVC framework for easier reusability. Create a folder called <tt class=\" \">lib</tt> in the <tt class=\" \">app</tt> directory of your Alloy project. Add your CommonJS modules or JavaScript code using the CommonJS format into the <tt class=\" \">lib</tt> folder. These files are copied to the <tt class=\" \">Resources</tt> folder, when compiling your Alloy project.    </p>\n    <p>To use the library or CommonJS module, require it with the library name or module name without the &apos;app/lib&apos; path and &apos;.js&apos; extension:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var lib = require(</code><code class=\"string\">&apos;library_name&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">lib.foo();</code></div>\n</div>\n    </div>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Titanium and Alloy do not support the Node.js concept of &quot;folders as modules&quot;. That is, requiring a folder name does not automatically load the index.js or index.json file inside the folder, or use the package.json file to locate the main entry point. You need to explicitly require the file that serves as the main entry point to the library.    </p>\n    </div>\n        <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-SpecsFolder\">\n        <h3 class=\"heading \"><span>Specs Folder</span></h3>\n    <p>Starting with <u class=\" \"> <strong class=\" \">Alloy 1.2.0</strong> </u>, you can add the <tt class=\" \">specs</tt> folder to your project.  Like the <tt class=\" \">lib</tt> folder, use the <tt class=\" \">specs</tt> folder to add files to your project, except the files are only used when the deployment type is <strong class=\" \">not</strong> production.    </p>\n    <p>Create a folder called <tt class=\" \">specs</tt> in the <tt class=\" \">app</tt> directory of your Alloy project. Add your files to the specs folder. These files are copied to the <tt class=\" \">Resources</tt> folder, when compiling your Alloy project if the deployment type is <strong class=\" \">not </strong>production.    </p>\n    <p>Use the <tt class=\" \">ENV_PROD</tt> variable to check if the application is running as a production target or not, before using the files in the <tt class=\" \">specs</tt> folder.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (!ENV_PROD) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Executes the fooFunction from the foo module</code></div>\n<div class=\"line\"><code class=\"plain\">\trequire(</code><code class=\"string\">&apos;specs/foo&apos;</code><code class=\"plain\">).fooFuntion();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_AlloyControllers-Platform-specificLibraryFolders\">\n        <h3 class=\"heading \"><span>Platform-specific Library Folders</span></h3>\n    <p>Starting with Alloy 1.5.0, you can also create platform-specific subfolders in the <tt class=\" \">lib</tt> directory.     <span style=\"color: #484848;\">\nJust add a folder named     </span>\n <strong class=\" \">android</strong>    <span style=\"color: #484848;\">\n<strong class=\" \">,</strong>     </span>\n <strong class=\" \">ios</strong>    <span style=\"color: #484848;\">\n<strong class=\" \">,</strong>     </span>\n<strong class=\" \">mobileweb</strong> or <strong class=\" \">windows</strong>    <span style=\"color: #484848;\">\n under the component folder and add your platform-specific files for Android, iOS or Mobile Web into the folder, respectively. Do not include the platform-specific folder name when referencing the file.     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">app/</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;lib</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x251C;&#x2500;&#x2500;ios</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x2502;   &#x2514;&#x2500;&#x2500; library_name.js</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2502;  &#x2514;&#x2500;&#x2500; library_name.js</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;models</code></div>\n<div class=\"line\"><code class=\"plain\">&#x251C;&#x2500;&#x2500;styles</code></div>\n<div class=\"line\"><code class=\"plain\">&#x2514;&#x2500;&#x2500;views</code></div>\n<div class=\"line\"><code class=\"plain\">   &#x2514;&#x2500;&#x2500; index.xml</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-34636384_safe-id-QWxsb3lDb250cm9sbGVycy1FeHRlbmRpbmdBbGxveSxVbmRlcnNjb3JlLmpzYW5kQmFja2JvbmUuanM\">\n        <h3 class=\"heading \"><span>Extending Alloy, Underscore.js and Backbone.js</span></h3>\n    <p>To access the Alloy API methods, such as <tt class=\" \">createController</tt> and <tt class=\" \">createModel</tt>, as well as Underscore.js and Backbone.js in CommonJS modules and JavaScript files in <tt class=\" \">app/lib</tt>, you need to load those modules in to the library:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var Alloy = require(</code><code class=\"string\">&apos;alloy&apos;</code><code class=\"plain\">), _ = require(</code><code class=\"string\">&quot;alloy/underscore&quot;</code><code class=\"plain\">)._, Backbone = require(</code><code class=\"string\">&quot;alloy/backbone&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Alloy extended</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.createController(</code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Underscore extended</code></div>\n<div class=\"line\"><code class=\"plain\">var even = _.find([</code><code class=\"value\">1</code><code class=\"plain\">, </code><code class=\"value\">2</code><code class=\"plain\">, </code><code class=\"value\">3</code><code class=\"plain\">, </code><code class=\"value\">4</code><code class=\"plain\">, </code><code class=\"value\">5</code><code class=\"plain\">, </code><code class=\"value\">6</code><code class=\"plain\">], function(num){ </code><code class=\"keyword\">return</code><code class=\"plain\"> num % </code><code class=\"value\">2</code><code class=\"plain\"> == </code><code class=\"value\">0</code><code class=\"plain\">; });</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(even);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Backbone extended</code></div>\n<div class=\"line\"><code class=\"plain\">var Book = Backbone.Model.extend();</code></div>\n<div class=\"line\"><code class=\"plain\">var book = </code><code class=\"keyword\">new</code><code class=\"plain\"> Book({title: </code><code class=\"string\">&apos;Ulysses&apos;</code><code class=\"plain\">, author: </code><code class=\"string\">&apos;James Joyce&apos;</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(JSON.stringify(book));</code></div>\n</div>\n    </div>\n    <p>Currently, these modules are automatically available in the global scope and these APIs can be used without loading the modules. Referencing these modules without loading them first with the <tt class=\" \">require</tt> method is discouraged and this behavior may be deprecated in the future. To ensure compatibility with future releases, always use the <tt class=\" \">require</tt> method to load and use these modules.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=34636384\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Controllers"});