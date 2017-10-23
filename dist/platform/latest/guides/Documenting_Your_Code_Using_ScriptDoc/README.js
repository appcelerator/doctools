Ext.data.JsonP['Documenting_Your_Code_Using_ScriptDoc']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Documenting Your Code Using ScriptDoc</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083118\" class=\"content\">\n                        <h1>Documenting Your Code Using ScriptDoc</h1>\n    <p>Using Studio&apos;s ScriptDoc system to document your code enables Content Assist to work for your own code in addition to built-in support the core JavaScript language. This page gives some of the guidelines to think about when adding ScriptDoc blocks to your code.    </p>\n    <p>Peter Geil has posted a <a class=\"external-link external-link\" href=\"http://www.scribd.com/doc/10040039/ScriptDoc-Cheatsheet-v01\" target=\"_blank\">nice one page cheat sheet</a> for ScriptDoc on Scribd.    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Documenting_Your_Code_Using_ScriptDoc-section-src-30083118_DocumentingYourCodeUsingScriptDoc-BasicInstructions\">Basic Instructions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Documenting_Your_Code_Using_ScriptDoc-section-src-30083118_safe-id-RG9jdW1lbnRpbmdZb3VyQ29kZVVzaW5nU2NyaXB0RG9jLUV4YW1wbGU6QWJhc2ljZG9jdW1lbnRhdGlvbmJsb2NrZm9yYWdldEZvbygpZnVuY3Rpb24\">Example: A basic documentation block for a getFoo() function</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Documenting_Your_Code_Using_ScriptDoc-section-src-30083118_DocumentingYourCodeUsingScriptDoc-Orderingyourtags\">Ordering your tags</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Documenting_Your_Code_Using_ScriptDoc-section-src-30083118_DocumentingYourCodeUsingScriptDoc-Guidelinesfororderingmultipleversionsofthesametag\">Guidelines for ordering multiple versions of the same tag</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Documenting_Your_Code_Using_ScriptDoc-section-src-30083118_DocumentingYourCodeUsingScriptDoc-RelatedTopics\">Related Topics</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083118_DocumentingYourCodeUsingScriptDoc-BasicInstructions\">\n        <h2 class=\"heading \"><span>Basic Instructions</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Add a documentation block immediately before each function or class. The ScriptDoc parser automatically associates the documentation block with the function or class following it.    </p>\n</li><li class=\" \">    <p>Enclose each documentation block within a slash-asterisk-asterisk    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>(/**)</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083118\"><span>Edit</span></a>\n    </div>\n    <p>and asterisk-slash    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>(*/)</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083118\"><span>Edit</span></a>\n    </div>\n    <p>comment set.    </p>\n</li><li class=\" \">    <p>The first line in the block, except for file overviews, should be a short description of the function or class.    </p>\n</li><li class=\" \">    <p>After the description add <a class=\"document-link \" href=\"#!/guide/ScriptDoc_(SDOC)_2.0_Specification\">tags</a> that explain the function, including a description, what parameters it takes and its return type. You can also use the <a class=\"document-link \" href=\"#!/guide/ScriptDoc_tag_quick_reference\">ScriptDoc tag quick reference</a> to quickly look up a tag once you are familiar with the syntax for each tag.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083118_safe-id-RG9jdW1lbnRpbmdZb3VyQ29kZVVzaW5nU2NyaXB0RG9jLUV4YW1wbGU6QWJhc2ljZG9jdW1lbnRhdGlvbmJsb2NrZm9yYWdldEZvbygpZnVuY3Rpb24\">\n        <h2 class=\"heading \"><span>Example: A basic documentation block for a getFoo() function</span></h2>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"preprocessor\">/** </code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Gets the current foo </code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * @param {String} fooId\tThe unique identifier for the foo.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * @return {Object}\t        Returns the current foo.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n<div class=\"line\"><code class=\"plain\"> function getFoo(fooID){</code></div>\n<div class=\"line\"><code class=\"plain\"> }</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083118_DocumentingYourCodeUsingScriptDoc-Orderingyourtags\">\n        <h2 class=\"heading \"><span>Ordering your tags</span></h2>\n    <p>Add your tags in the following order, as appropriate:    </p>\n<ul class=\" \"><li class=\" \">    <p>@classDescription (constructors only)    </p>\n</li><li class=\" \">    <p>@param (classes, interfaces, functions and constructors only)    </p>\n</li><li class=\" \">    <p>@return (functions only)    </p>\n</li><li class=\" \">    <p>@type (functions only)    </p>\n</li><li class=\" \">    <p>@author (classes and interfaces only, required)    </p>\n</li><li class=\" \">    <p>@version (classes and interfaces only, required)    </p>\n</li><li class=\" \">    <p>@see    </p>\n</li><li class=\" \">    <p>@since    </p>\n</li><li class=\" \">    <p>@deprecated    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083118_DocumentingYourCodeUsingScriptDoc-Guidelinesfororderingmultipleversionsofthesametag\">\n        <h2 class=\"heading \"><span>Guidelines for ordering multiple versions of the same tag</span></h2>\n<ul class=\" \"><li class=\" \">    <p>@author - List @author tags chronologically, starting with the author who created the file or function.    </p>\n</li><li class=\" \">    <p>@param - List @param tags in argument declaration order.    </p>\n</li><li class=\" \">    <p>@see - List @see tags from nearest to furthest access, shown below:    </p>\n</li></ul>    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> #Constructor(Type, Type...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> #Constructor(Type id, Type id...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> #method(Type, Type,...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> #method(Type id, Type, id...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class#field</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class#Constructor(Type, Type...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class#Constructor(Type id, Type id)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class#method(Type, Type,...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> Class#method(Type id, Type id,...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class#field</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class#Constructor(Type, Type...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class#Constructor(Type id, Type id)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class#method(Type, Type,...)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code><code class=\"plain\">.Class#method(Type id, Type, id)</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"color1\">@see</code><code class=\"plain\"> </code><code class=\"keyword\">package</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083118_DocumentingYourCodeUsingScriptDoc-RelatedTopics\">\n        <h2 class=\"heading \"><span>Related Topics</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/About_Content_Assist\">About Content Assist</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/ScriptDoc_(SDOC)_2.0_Specification\">ScriptDoc (SDOC) 2.0 Specification</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/ScriptDoc_tag_quick_reference\">ScriptDoc tag quick reference</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083118\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Documenting Your Code Using ScriptDoc"});