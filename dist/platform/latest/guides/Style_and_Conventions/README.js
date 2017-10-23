Ext.data.JsonP['Style_and_Conventions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Style and Conventions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30082366\" class=\"content\">\n                        <h1>Style and Conventions</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-LanguageRules\">Language Rules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-CodingStyleBest-Practices\">Coding Style Best-Practices</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-NamingConventions\">Naming Conventions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-Indentation\">Indentation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-PrimitiveTypes\">Primitive Types</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-ControlStatements\">Control Statements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-CommentsandDocumentation\">Comments and Documentation</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <p>In this section, we&apos;ll examine the Appcelerator recommended best-practices for coding style, including naming conventions, code formatting, and commenting.    </p>\n    <div class=\"section section-2 \" id=\"src-30082366_StyleandConventions-LanguageRules\">\n        <h2 class=\"heading \"><span>Language Rules</span></h2>\n    <p>Many references exist that describe JavaScript language rules to follow. We&apos;ll lay out a few of the most important here, then direct you to the <a class=\"document-link \" href=\"#!/guide/Style_and_Conventions-section-src-30082366_StyleandConventions-references\">References</a> section below.    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">var</tt> &#x2013; All variables should be explicitly declared using the <tt class=\" \">var</tt> keyword. Omitting <tt class=\" \">var</tt> places the variable in the global scope. <a class=\"external-link external-link\" href=\"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=var#var\" target=\"_blank\">Read more</a>    </p>\n</li><li class=\" \">    <p>Semicolons &#x2013; Always use semicolons to terminate statements. <a class=\"external-link external-link\" href=\"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=Semicolons#Semicolons\" target=\"_blank\">Read more</a>    </p>\n</li><li class=\" \">    <p>Use <tt class=\" \">this</tt> with extreme care, as it sometimes doesn&apos;t refer to the object you expect. <a class=\"external-link external-link\" href=\"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml?showone=this#this\" target=\"_blank\">Read more</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30082366_StyleandConventions-CodingStyleBest-Practices\">\n        <h2 class=\"heading \"><span>Coding Style Best-Practices</span></h2>\n    <div class=\"confbox panel panel\">\n        <p>    </p><h5 id=\"src-30082366_StyleandConventions-NamingConventions\" class=\"heading \"><span>Naming Conventions</span></h5>\n    <h6 id=\"src-30082366_StyleandConventions-VariableandFunctionNames\" class=\"heading \"><span>Variable and Function Names</span></h6>\n    <p/>\n    <p>    <span style=\"color: #000000;\">\nVariable names start with a category noun (lowercase) so that they are easier to categorize and associate with related variables.    </span>\n    </p>\n    <p><strong class=\" \">Variable Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>personName, personAddress    </p>\n</li><li class=\" \">    <p>personNameLast, personNameFirst    </p>\n</li></ul>    <p>    <span style=\"color: #000000;\">\nFunction names follow a similar convention, though we start with a category verb (lowercase) and are often followed by an associated variable name (if any).    </span>\n    </p>\n    <p><strong class=\" \">Function Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>getPersonName, setPersonAddress    </p>\n</li><li class=\" \">    <p>driveCarBlue, stopCarRed    </p>\n</li></ul>    <p>    <span style=\"color: #000000;\">\nBoth variables and functions (or properties and methods, respectively) start with a lowercase word so that they are easier to differentiate from major namespace objects or &apos;classes&apos;.    </span>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Appcelerator does not support the use of Hungarian Notation.    </p>\n    </div>\n        <h6 id=\"src-30082366_safe-id-U3R5bGVhbmRDb252ZW50aW9ucy1PYmplY3RhbmQnQ2xhc3MnTmFtZXM\" class=\"heading \"><span>Object and &apos;Class&apos; Names</span></h6>\n    <p>Major objects and class-like functions (constructors) follow a standard pattern of capitalized words. Though not necessarily a naming convention, &apos;class&apos; names that end up rather large is an indicator that the &apos;class&apos; is most likely designed to do too much. &apos;Class&apos; names may also start with an abbreviation of a library.    </p>\n    <p><strong class=\" \">Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>Car, GarbageCollector    </p>\n</li><li class=\" \">    <p>IKSystem, MCStyle    </p>\n</li></ul>    <h6 id=\"src-30082366_StyleandConventions-Namespace\" class=\"heading \"><span>Namespace</span></h6>\n    <p>Here, convention is similar to &apos;class&apos; naming.    </p>\n    <p><strong class=\" \">Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>App.UI.Widget    </p>\n</li><li class=\" \">    <p>App.Network.Request    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>&apos;app.ui&apos; should be &apos;App.UI&apos;    </p>\n    </div>\n        <h6 id=\"src-30082366_StyleandConventions-Factories\" class=\"heading \"><span>Factories</span></h6>\n    <p>Factory functions are located within a major namespace object, start with &apos;create&apos; and return an object.    </p>\n    <p><strong class=\" \">Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>createPhotoGallery    </p>\n</li><li class=\" \">    <p>App.UI.createWidget    </p>\n</li><li class=\" \">    <p>App.Network.createRequest    </p>\n</li></ul>    <h6 id=\"src-30082366_StyleandConventions-Operators\" class=\"heading \"><span>Operators</span></h6>\n    <p>Type data and operators should always be separated by a single space.    </p>\n    <p><strong class=\" \">Examples</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>var nameFull = nameFirst + nameLast;    </p>\n</li><li class=\" \">    <p>for (var i = 0, cl = content.length; i &lt; cl; i++) {}    </p>\n</li></ul>    </div>\n    <div class=\"confbox panel panel\">\n        <h5 id=\"src-30082366_StyleandConventions-Indentation\" class=\"heading \"><span>Indentation</span></h5>\n    <p>Both K&amp;R/1TBS and Allman styles are acceptable. <strong class=\" \"><i class=\" \">Consistency is most important and a combination is not to be used on the same project. Clean indentation is required.</i></strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// K&amp;R/1TBS Style</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (x &lt; </code><code class=\"value\">10</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">if</code><code class=\"plain\"> (y &gt; </code><code class=\"value\">10</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// do this</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// do this</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Allman Style</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (x &lt; </code><code class=\"value\">10</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">if</code><code class=\"plain\"> (y &gt; </code><code class=\"value\">10</code><code class=\"plain\">)&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">\t{</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// do this</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">else</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// do this</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// but never do this within a function:</code></div>\n<div class=\"line\"><code class=\"keyword\">return</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\tfoo: </code><code class=\"string\">&apos;bar&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>As noted, you should never put <tt class=\" \">return</tt> on its own line followed by an object literal definition. Doing so will return an <tt class=\" \">undefined</tt> value rather than the object. See <a class=\"external-link external-link\" href=\"http://encosia.com/in-javascript-curly-brace-placement-matters-an-example/\" target=\"_blank\">this blog post</a> or <a class=\"external-link external-link\" href=\"http://www.amazon.com/dp/0596517742/?tag=stackoverfl08-20\" target=\"_blank\">Crockford&apos;s JavaScript: The Good Parts</a> for more info.    </p>\n    </div>\n    <div class=\"confbox panel panel\">\n        <h5 id=\"src-30082366_StyleandConventions-PrimitiveTypes\" class=\"heading \"><span>Primitive Types</span></h5>\n    <p><strong class=\" \">Concatenation</strong><br>Strings concatenated using the + operator must always use a space be added before and after the + operator to improve readability:    </br></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var someString = </code><code class=\"string\">&apos;My name is &apos;</code><code class=\"plain\"> + firstName + </code><code class=\"string\">&apos;and I am a developer&apos;</code><code class=\"plain\">;</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">Primitive Type Construction</strong><br>Do not use the primitive type object constructors unless you have a very clear reason for doing so.    </br></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Don&apos;t do this</code></div>\n<div class=\"line\"><code class=\"plain\">var test = </code><code class=\"keyword\">new</code><code class=\"plain\"> String(</code><code class=\"string\">&apos;My String&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"confbox panel panel\">\n        <h5 id=\"src-30082366_StyleandConventions-ControlStatements\" class=\"heading \"><span>Control Statements</span></h5>\n    <p>Switch statements have a single space before the opening parenthesis of the conditional statement and also a single space after the closing parenthesis. Switch statement content is indented with one tab. Content in each case is indented one tab as well:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"keyword\">switch</code><code class=\"plain\"> (someTest) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"value\">1</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"value\">2</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">default</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"confbox panel panel\">\n        <h5 id=\"src-30082366_StyleandConventions-CommentsandDocumentation\" class=\"heading \"><span>Comments and Documentation</span></h5>\n    <p>Single-line comments are required to reduce programmer error. However, specialized block commenting is preferred when documenting functions. Inline statement comments should be used at a minimum or not at all.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Calculate position using initial&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// and offset x coordinates.</code></div>\n<div class=\"line\"><code class=\"plain\">var finalPos = initPosX + offsetPosX;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * @param {String} customerName Customer&apos;s full name.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n<div class=\"line\"><code class=\"plain\">function getCustomer(customerName) {}</code></div>\n</div>\n    </div>\n    </div>\n    <p>    <span id=\"src-30082366_StyleandConventions-references\"><a class=\"confluence-anchor-link\" name=\"src-30082366_StyleandConventions-references\"/></span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30082366_StyleandConventions-ReferencesandFurtherReading\">\n        <h2 class=\"heading \"><span>References and Further Reading</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://javascript.crockford.com/code.html\" target=\"_blank\">Douglas Crockford&apos;s JavaScript Code Conventions</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml\" target=\"_blank\">Google&apos;s JavaScript Style Guide</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30082366_StyleandConventions-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned the Appcelerator recommended best-practices for coding style, including naming conventions, code formatting, and commenting.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30082366\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Style and Conventions"});