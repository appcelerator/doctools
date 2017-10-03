Ext.data.JsonP['Arrow_Builder_1.3.13_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Builder 1.3.13</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46239576\" class=\"content\">\n                        <h1>Arrow Builder 1.3.13</h1>\n    <p>Arrow Builder 1.3.13 is a minor release that includes new feature, improvement and bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-46239576_ArrowBuilder1.3.13ReleaseNote-BehaviorChanges\">\n        <h2 class=\"heading \"><span>Behavior Changes</span></h2>\n<ul class=\" \"><li class=\" \">    <p>When using the guided connector development, after adding a new capability, the Arrow application will stop running and output instructions on what to do next.  Previously, the Arrow application would restart, which could cause a crash.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46239576_ArrowBuilder1.3.13ReleaseNote-NewFeaturesandImprovements\">\n        <h2 class=\"heading \"><span>New Features and Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Add ability to set descriptions for auto-generated APIs. For details, see the <i class=\" \">Model Properties</i> section in the Arrow Admin console.    </p>\n</li><li class=\" \">    <p>Allow Arrow client sessions to end when the browser session ends    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46239576_ArrowBuilder1.3.13ReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Fixed an issue where adding &apos;\\n&apos; to the description moves the content out of the table    </p>\n</li><li class=\" \">    <p>Fixed an issue where an bizarre stack trace would outputted after restarting the Arrow project    </p>\n</li><li class=\" \">    <p>Fixed an issue using the Photo sync images parameter with Arrow.  Use the following syntax to pass the parameter:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"string\">&apos;photo_sizes&apos;</code><code class=\"plain\">: {preview: </code><code class=\"string\">&apos;120x120#&apos;</code><code class=\"plain\">},</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"string\">&apos;photo_sync_sizes[]&apos;</code><code class=\"plain\">: </code><code class=\"string\">&apos;preview&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Fixed an issue where the Arrow application now throws a 504 error code if the request takes more than 60 seconds    </p>\n</li><li class=\" \">    <p>Fixed an issue where the MSSQL connector would throw an error on run    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46239576\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Arrow Builder 1.3.13 Release Note"});