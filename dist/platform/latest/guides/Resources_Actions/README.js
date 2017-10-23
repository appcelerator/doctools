Ext.data.JsonP['Resources_Actions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Resources Actions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-31523392\" class=\"content\">\n                        <h1>Resources Actions</h1>\n    <div class=\"section section-2 \" id=\"src-31523392_ResourcesActions-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Resources_Actions-section-src-31523392_ResourcesActions-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Resources_Actions-section-src-31523392_ResourcesActions-Description\">Description</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Resources_Actions-section-src-31523392_ResourcesActions-Invocation\">Invocation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Resources_Actions-section-src-31523392_ResourcesActions-Getallaccessibleprojectnames\">Get all accessible project names</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-31523392_ResourcesActions-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>The examples in this page use the <i class=\" \"><strong class=\" \">Prototype</strong></i> library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523392_ResourcesActions-Description\">\n        <h2 class=\"heading \"><span>Description</span></h2>\n    <p>These set of actions can retrieve various resources information from the Studio. At the moment it&apos;s pretty limited to listing projects, but more will be added in time.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523392_ResourcesActions-Invocation\">\n        <h2 class=\"heading \"><span>Invocation</span></h2>\n    <p>This command is executed immediately in a synchronous way.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-31523392_ResourcesActions-Getallaccessibleprojectnames\">\n        <h2 class=\"heading \"><span>Get all accessible project names</span></h2>\n    <p>The following <i class=\" \">dispatch</i> call will get a names array of all the accessible (open and existing) project names:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var allProjects = dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcontroller: </code><code class=\"string\">&apos;portal.resources&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\taction: </code><code class=\"string\">&quot;getProjects&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON()).evalJSON();</code></div>\n</div>\n    </div>\n    <p>The returned value is an array of strings (names).    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=31523392\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Resources Actions"});