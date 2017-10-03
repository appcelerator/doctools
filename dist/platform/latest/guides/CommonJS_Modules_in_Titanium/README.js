Ext.data.JsonP['CommonJS_Modules_in_Titanium']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>CommonJS Modules in Titanium</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004791\" class=\"content\">\n                        <h1>CommonJS Modules in Titanium</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-src-29004791_safe-id-Q29tbW9uSlNNb2R1bGVzaW5UaXRhbml1bS1OYXRpdmUvQ29tcGlsZWRNb2R1bGVz\">Native/Compiled Modules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-src-29004791_CommonJSModulesinTitanium-JavaScriptModules\">JavaScript Modules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-src-29004791_CommonJSModulesinTitanium-AntipatternsandUnsupportedBehavior\">Antipatterns and Unsupported Behavior</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-src-29004791_CommonJSModulesinTitanium-StatefulModules\">Stateful Modules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/CommonJS_Modules_in_Titanium-section-src-29004791_CommonJSModulesinTitanium-GlobalVariables\">Global Variables</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004791_CommonJSModulesinTitanium-Synopsis\">\n        <h2 class=\"heading \"><span>Synopsis</span></h2>\n    <p>Titanium Mobile is moving toward the adoption of the CommonJS module specification as the way in which end users of the platform structure their JavaScript code. While CommonJS Modules are a &quot;standard&quot; <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">specification</a>, there are differences in implementation across multiple technology stacks. The aim of this specification is to delineate what is and is not supported by the Titanium Mobile implementation of this spec, starting in 1.8 and moving forward.    </p>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-Definitions\">\n        <h3 class=\"heading \"><span>Definitions</span></h3>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Module</strong> - Any CommonJS-compliant module which will be consumed in a Titanium Mobile application. This can be a JavaScript file included with an application, or a native extension to Titanium which exposes a JavaScript API.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Resources</strong> - The Resources directory of a Titanium application, where the user&apos;s source code lives before any processing by our build system.    </p>\n</li><li class=\" \">    <p><tt class=\" \">exports</tt> - a free variable within a module, to which multiple properties may be added to create a public interface    </p>\n</li><li class=\" \">    <p><tt class=\" \">module.exports</tt> - an object within a module, which may be REPLACED by an object representing the public interface to the module    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004791_CommonJSModulesinTitanium-CommonJSModuleSpecImplementation\">\n        <h2 class=\"heading \"><span>CommonJS Module Spec Implementation</span></h2>\n    <p>Our specific implementation of the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module Specification</a> is based on (and the early implementation on Android taken directly from) that of <a class=\"external-link external-link\" href=\"http://nodejs.org/docs/v0.6.0/api/modules.html\" target=\"_blank\">Node.js</a>. While we should not consider our implementation a direct clone of node, we should favor node conventions where possible to foster reuse of modules across both environments.    </p>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-SimpleUsage\">\n        <h3 class=\"heading \"><span>Simple Usage</span></h3>\n    <p>In order to use a module within Titanium, you must use the <tt class=\" \">require</tt> function, which is built in to the global scope in every JavaScript context.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">&apos;MyModule&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>The string passed to <tt class=\" \">require</tt> must be resolvable to either a native/compiled module that Titanium Mobile has access to, or a JavaScript module provided in the Resources directory of the Titanium Mobile application. The <tt class=\" \">require</tt> function returns an JavaScript object, with properties, functions, and other data assigned to it which form the public interface to the module. If the module we loaded into the application above exposed a function <tt class=\" \">sayHello</tt>, which would print a name and a welcome message to the console, it would be accessed in this way:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">&apos;MyModule&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">myModule.sayHello(</code><code class=\"string\">&apos;Kevin&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">//console output is &quot;Hello Kevin!&quot;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_safe-id-Q29tbW9uSlNNb2R1bGVzaW5UaXRhbml1bS1OYXRpdmUvQ29tcGlsZWR2ZXJzdXNKYXZhU2NyaXB0TW9kdWxlcw\">\n        <h3 class=\"heading \"><span>Native/Compiled versus JavaScript Modules</span></h3>\n    <p>When a module is required, Titanium must first determine whether or not to load a native/compiled module or a JavaScript module shipped within the Resources directory of a Titanium Mobile application. Titanium will prefer to load a native module first. The deployment and processing of native modules is beyond the scope of this specification, but at the time of this writing, native modules can be deployed globally on a developer machine, or inside a <strong class=\" \">modules</strong> directory in the top-level Titanium Mobile project directory.    </p>\n    <div class=\"section section-4 \" id=\"src-29004791_safe-id-Q29tbW9uSlNNb2R1bGVzaW5UaXRhbml1bS1OYXRpdmUvQ29tcGlsZWRNb2R1bGVz\">\n        <h4 class=\"heading \"><span>Native/Compiled Modules</span></h4>\n    <p>Native/compiled modules are identified by a single string, specified within the global app configuration in tiapp.xml. Given the following configuration for a native/compiled module in tiapp.xml:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;modules&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">   &lt;module version=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\">&gt;ti.paypal&lt;/module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/modules&gt;</code></div>\n</div>\n    </div>\n    <p>and the following code within a Titanium Mobile application:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var paypal = require(</code><code class=\"string\">&apos;ti.paypal&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>Titanium will load the <tt class=\" \">ti.paypal</tt> native module, and will NOT attempt to look for or load a module from Resources. If a native module is not found for the string passed to <tt class=\" \">require</tt>, Titanium will look for a JavaScript module in the Resources.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004791_CommonJSModulesinTitanium-JavaScriptModules\">\n        <h4 class=\"heading \"><span>JavaScript Modules</span></h4>\n    <p>Modules may also be loaded as JavaScript files from the Resources directory of the application. In Titanium Mobile, a JavaScript module is associated with a single JavaScript file. When the module is loaded, the JavaScript file will be evaluated and the public interface of the module will be populated.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-JavaScriptModulePathResolution\">\n        <h3 class=\"heading \"><span>JavaScript Module Path Resolution</span></h3>\n    <p>When dealing with JavaScript modules from Resources, the string passed to <tt class=\" \">require</tt> is considered to be a path to the JavaScript file, minus the &quot;.js&quot; extension. If the path string is not prefixed by a <tt class=\" \">./</tt>, <tt class=\" \">../</tt>, or similar, it is assumed that the module is being referenced relative to the Resources directory. In a Titanium project with a CommonJS module file located in <tt class=\" \">Resources/app/lib/myModule.js</tt>, that module could be loaded as such: <tt class=\" \">var myModule = require(&apos;app/lib/myModule&apos;);</tt>.    </p>\n    <p>Similarly, if the path is prefixed with a <tt class=\" \">/</tt>, the module path is also resolved relative to the Resources directory. For the module above, another valid loading syntax would be <tt class=\" \">var myModule = require(&apos;/app/lib/myModule&apos;);</tt>.    </p>\n    <p>Relative paths may be specified as well. Assume we have modules located in the following locations:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">Resources/app/ui/SomeCustomView.js</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">Resources/app/ui/widgets/SomeOtherCustomView.js</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">Resources/app/lib/myModule.js</tt>    </p>\n</li></ul>    <p>Now assume we are writing code inside the <tt class=\" \">SomeCustomView.js</tt> module file. The following are valid <tt class=\" \">require</tt> statements:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">SomeCustomView.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"SomeCustomView.js\">\n<div class=\"line\"><code class=\"plain\">var myModule = require(</code><code class=\"string\">&apos;../lib/myModule&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var SomeOtherCustomView = require(</code><code class=\"string\">&apos;./widgets/SomeOtherCustomView&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-JavaScriptModuleComposition\">\n        <h3 class=\"heading \"><span>JavaScript Module Composition</span></h3>\n    <p>As in the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module specification</a>, inside the module JavaScript file, there will be a special variable called <tt class=\" \">exports</tt> to which properties may be added for the public interface of the module.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">exports.sayHello = function(name) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&apos;Hello &apos;</code><code class=\"plain\">+name+</code><code class=\"string\">&apos;!&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.version = </code><code class=\"value\">1.4</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.author = </code><code class=\"string\">&apos;Don Thorp&apos;</code><code class=\"plain\">;</code></div>\n</div>\n    </div>\n    <p>As many properties as desired can be added to the exports object.    </p>\n    <p>Alternately, if the module author wishes to make the exported value from the module an object of their own design and choosing, there is a non-standard (but common, as with Node.js) extension to the Module specification which allows for this. The <tt class=\" \">module.exports</tt> object is available within the module file, and may be assigned any value which the developer would like to return from the <tt class=\" \">require</tt> function for their module. This is most commonly used for functions which act as object constructors. The following would be a typical use case for this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Person.prototype.fullName = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName+</code><code class=\"string\">&apos; &apos;</code><code class=\"plain\">+</code><code class=\"keyword\">this</code><code class=\"plain\">.lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person;</code></div>\n</div>\n    </div>\n    <p>Usage:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Resources/app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Resources/app.js\">\n<div class=\"line\"><code class=\"plain\">var Person = require(</code><code class=\"string\">&apos;Person&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var don = </code><code class=\"keyword\">new</code><code class=\"plain\"> Person(</code><code class=\"string\">&apos;Don&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;Thorp&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var donsName = don.fullName(); </code><code class=\"comments\">// &quot;Don Thorp&quot;</code></div>\n</div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004791_CommonJSModulesinTitanium-AntipatternsandUnsupportedBehavior\">\n        <h4 class=\"heading \"><span>Antipatterns and Unsupported Behavior</span></h4>\n    <p>No direct assignments may be made to the exports object:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports = Person; </code><code class=\"comments\">//THIS IS NOT OK AND PROBABLY WON&apos;T WORK</code></div>\n</div>\n    </div>\n    <p>Similarly, you should not mix and match usage of <tt class=\" \">module.exports</tt> and <tt class=\" \">exports.*</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person; </code><code class=\"comments\">//This is okay, but...</code></div>\n<div class=\"line\"><code class=\"plain\">exports.foo = </code><code class=\"string\">&apos;bar&apos;</code><code class=\"plain\">; </code><code class=\"comments\">//This is discouraged - use one or the other</code></div>\n</div>\n    </div>\n    <p>Also, it is recommended that you not mix and match assignments to <tt class=\" \">module.exports</tt> and <tt class=\" \">exports</tt> - use one or the other:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">exports.foo = </code><code class=\"string\">&apos;bar&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">module.exports.fooToo = </code><code class=\"string\">&apos;something else&apos;</code><code class=\"plain\">; </code><code class=\"comments\">// Not good style - use one or the other.</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-Caching\">\n        <h3 class=\"heading \"><span>Caching</span></h3>\n    <p>When a JavaScript module is loaded, the object returned by <tt class=\" \">require</tt> should be cached by Titanium and provided again to consumers without evaluating the module&apos;s JavaScript code multiple times. If a developer thinks they want their module code evaluated multiple times, they should really be creating a module with a function that can be called multiple times. There&apos;s no valid use case for re-evaluating JavaScript in a module over and over.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-SecurityandSandboxing\">\n        <h3 class=\"heading \"><span>Security and Sandboxing</span></h3>\n    <p>As in the <a class=\"external-link external-link\" href=\"http://wiki.commonjs.org/wiki/Modules/1.1\" target=\"_blank\">CommonJS Module specification</a>, all modules have their own private scope. Variables declared within the module file are private - anything that needs to be made public should be added to the exports object. For more information on sandboxing, refer to the CommonJS module spec.    </p>\n    <div class=\"section section-4 \" id=\"src-29004791_CommonJSModulesinTitanium-StatefulModules\">\n        <h4 class=\"heading \"><span>Stateful Modules</span></h4>\n    <p>All modules in Titanium are created once, and then passed by reference on subsequent occasions when the module is required. Because of this, modules themselves may have state variables, which are properties of the &quot;singleton&quot; object represented by the module.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app.js\">\n<div class=\"line\"><code class=\"plain\">var stateful = require(</code><code class=\"string\">&apos;statefulModule&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var score = require(</code><code class=\"string\">&apos;scoreModule&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var window = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">  backgroundColor:</code><code class=\"string\">&apos;white&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  fullscreen:</code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  title:</code><code class=\"string\">&apos;Click window to score&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">window.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;The latest score is &quot;</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;Adding &quot;</code><code class=\"plain\"> + stateful.getPointStep() + </code><code class=\"string\">&quot; points to score...&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    score.pointsWon();</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;The latest score is &quot;</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;Setting points per win to 10&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    stateful.setPointStep(</code><code class=\"value\">10</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;Adding &quot;</code><code class=\"plain\"> + stateful.getPointStep() + </code><code class=\"string\">&quot; points to score...&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    score.pointsWon();</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;The latest score is &quot;</code><code class=\"plain\"> + score.latestScore());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;---------- Info ----------&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;stateful.getPointStep() returns: &quot;</code><code class=\"plain\"> + stateful.getPointStep());</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;stateful.stepVal value is: &quot;</code><code class=\"plain\"> + stateful.stepVal); </code><code class=\"comments\">// will always return default of 5</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">&quot;**************************&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">  } </code><code class=\"keyword\">catch</code><code class=\"plain\">(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">&quot;An error has occurred: &quot;</code><code class=\"plain\"> + e);</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">window.open();</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">scoreModule.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"scoreModule.js\">\n<div class=\"line\"><code class=\"plain\">var appStateful = require(</code><code class=\"string\">&apos;statefulModule&apos;</code><code class=\"plain\">); </code><code class=\"comments\">// a reference to the &quot;stateful&quot; variable in app.js that contains the stateful module</code></div>\n<div class=\"line\"><code class=\"plain\">var _score = </code><code class=\"value\">0</code><code class=\"plain\">; </code><code class=\"comments\">// default</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.pointsWon = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  _score += appStateful.getPointStep();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.pointsLost = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  _score -= appStateful.getPointStep();</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.latestScore = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">return</code><code class=\"plain\"> _score;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">statefulModule.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"statefulModule.js\">\n<div class=\"line\"><code class=\"plain\">var _stepVal = </code><code class=\"value\">5</code><code class=\"plain\">; </code><code class=\"comments\">// default</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.setPointStep = function(value) {</code></div>\n<div class=\"line\"><code class=\"plain\">  _stepVal = value;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.getPointStep = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"keyword\">return</code><code class=\"plain\"> _stepVal;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.stepVal = _stepVal;</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">NOTE:</strong> A module is created once per Titanium JavaScript context, so if additional contexts are created, new module objects will be created. For more on JavaScript contexts, <a class=\"document-link \" href=\"#!/guide/Coding_Strategies-section-src-29004891_CodingStrategies-Executioncontexts\">see here</a>.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004791_CommonJSModulesinTitanium-GlobalVariables\">\n        <h4 class=\"heading \"><span>Global Variables</span></h4>\n    <p>There shall not be ANY global variables in a Titanium application shared across all modules. Any data a module or any objects exposed by a module require should be passed in during construction or initialization.    </p>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004791_CommonJSModulesinTitanium-JavaScriptModuleExamples\">\n        <h2 class=\"heading \"><span>JavaScript Module Examples</span></h2>\n    <p>Here are some examples of modules we expect developers to implement:    </p>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-UtilityLibraries\">\n        <h3 class=\"heading \"><span>Utility Libraries</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">logger.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"logger.js\">\n<div class=\"line\"><code class=\"plain\">exports.info = function(str) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Titanium.API.info(</code><code class=\"keyword\">new</code><code class=\"plain\"> Date()+</code><code class=\"string\">&apos;: &apos;</code><code class=\"plain\">+str);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">exports.debug = function(str) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Titanium.API.debug(</code><code class=\"keyword\">new</code><code class=\"plain\"> Date()+</code><code class=\"string\">&apos;: &apos;</code><code class=\"plain\">+str);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <p>Usage:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var logger = require(</code><code class=\"string\">&apos;logger&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">logger.info(</code><code class=\"string\">&apos;some log statement I wanted with a timestamp&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-PackagesofRelatedFunctionality\">\n        <h3 class=\"heading \"><span>Packages of Related Functionality</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">geo.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"geo.js\">\n<div class=\"line\"><code class=\"plain\">function Point(x,y) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.x = x;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.y = y;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">function Line(start,end) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.start = start;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.end = end;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Line.prototype.slope = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> (</code><code class=\"keyword\">this</code><code class=\"plain\">.end.y - </code><code class=\"keyword\">this</code><code class=\"plain\">.start.y) / (</code><code class=\"keyword\">this</code><code class=\"plain\">.end.x - </code><code class=\"keyword\">this</code><code class=\"plain\">.start.x);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Line.prototype.yIntercept = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.start.y - (</code><code class=\"keyword\">this</code><code class=\"plain\">.slope()*</code><code class=\"keyword\">this</code><code class=\"plain\">.start.x);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">//create public interface</code></div>\n<div class=\"line\"><code class=\"plain\">exports.Point = Point;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.Line = Line;</code></div>\n</div>\n    </div>\n    <p>Usage:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var geo = require(</code><code class=\"string\">&apos;lib/geo&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var startPoint = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Point(</code><code class=\"value\">1</code><code class=\"plain\">,-</code><code class=\"value\">5</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var endPoint = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Point(</code><code class=\"value\">10</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var line = </code><code class=\"keyword\">new</code><code class=\"plain\"> geo.Line(startPoint,endPoint);</code></div>\n<div class=\"line\"><code class=\"plain\">var slopeValue = line.slope();</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004791_CommonJSModulesinTitanium-InstantiableObjects\">\n        <h3 class=\"heading \"><span>Instantiable Objects</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Person.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Person.js\">\n<div class=\"line\"><code class=\"plain\">function Person(firstName,lastName) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName = firstName;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.lastName = lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Person.prototype.fullName = function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">this</code><code class=\"plain\">.firstName+</code><code class=\"string\">&apos; &apos;</code><code class=\"plain\">+</code><code class=\"keyword\">this</code><code class=\"plain\">.lastName;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">module.exports = Person;</code></div>\n</div>\n    </div>\n    <p>Usage:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var Person = require(</code><code class=\"string\">&apos;Person&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var don = </code><code class=\"keyword\">new</code><code class=\"plain\"> Person(</code><code class=\"string\">&apos;Don&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;Thorp&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var donsName = don.fullName(); </code><code class=\"comments\">// &quot;Don Thorp&quot;</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004791\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"CommonJS Modules in Titanium"});