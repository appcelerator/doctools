Ext.data.JsonP['Project_Template_Actions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Project Template Actions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083158\" class=\"content\">\n                        <h1>Project Template Actions</h1>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Project_Template_Actions-section-src-30083158_ProjectTemplateActions-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Project_Template_Actions-section-src-30083158_ProjectTemplateActions-Invocation\">Invocation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Project_Template_Actions-section-src-30083158_ProjectTemplateActions-GetProjectTemplateTypes\">Get Project Template Types</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Project_Template_Actions-section-src-30083158_ProjectTemplateActions-GetProjectTemplates\">Get Project Templates</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Project_Template_Actions-section-src-30083158_ProjectTemplateActions-ListeningtoTemplateChanges\">Listening to Template Changes</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>The examples in this page use the <strong class=\" \"><i class=\" \">Prototype</i></strong> library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-Invocation\">\n        <h2 class=\"heading \"><span>Invocation</span></h2>\n    <p>This command is executed immediately in a synchronous way.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-GetProjectTemplateTypes\">\n        <h2 class=\"heading \"><span>Get Project Template Types</span></h2>\n    <p>Gets the different types of project templates available, dispatch this call:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcontroller: </code><code class=\"string\">&apos;portal.project.templates&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\taction: </code><code class=\"string\">&apos;getTemplateTypes&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON()).evalJSON();</code></div>\n</div>\n    </div>\n    <p>Returns:<br>An array of strings    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-GetProjectTemplates\">\n        <h2 class=\"heading \"><span>Get Project Templates</span></h2>\n    <p>Gets the project templates that matches the project template types, dispatch this call:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">\tcontroller: </code><code class=\"string\">&apos;portal.project.templates&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\taction: </code><code class=\"string\">&apos;getTemplates&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\targs: </code><code class=\"string\">&apos;[&quot;WEB&quot;,&quot;TITANIUM_MOBILE&quot;]&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON()).evalJSON();</code></div>\n</div>\n    </div>\n    <p>Arguments:<br>List of project template types. If no arguments are specified, all project templates will be returned    </br></p>\n    <p>Returns:<br>An array of Project Templates. Each template has the following attributes: &quot;name&quot;, &quot;id&quot;, &quot;description&quot;, &quot;type&quot;    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083158_ProjectTemplateActions-ListeningtoTemplateChanges\">\n        <h2 class=\"heading \"><span>Listening to Template Changes</span></h2>\n    <p>Some of the templates may be loaded or removed after the portal is opened. In this case, the Studio fires events that indicate a Template addition or removal.<br>Here is a sample of a way you can listen to such events (based on the <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk\" target=\"_blank\">studio3-sdk</a> sample):    </br></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">eventsDispatcher.addObserver(</code><code class=\"string\">&apos;templates&apos;</code><code class=\"plain\">, function(e) { portal.templates.update(e); });</code></div>\n</div>\n    </div>\n    <p>The <i class=\" \">update</i> call receives an event object that holds the following information, and can be used to update the UI:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>value    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>event    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The event identifier (in this case, always &apos;templates&apos;)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>eventType    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&apos;added&apos; or &apos;deleted&apos;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>data    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A JSON representation of the Template-Info (as described above)    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083158\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Project Template Actions"});