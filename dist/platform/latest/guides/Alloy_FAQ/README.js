Ext.data.JsonP['Alloy_FAQ']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy FAQ</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p>\n\t\t</div>\n        <div class=\"header\"/>\n\n        <div id=\"src-51252319\" class=\"content\">\n                        <h1>Alloy FAQ</h1>\n    <div class=\"section section-2 \" id=\"src-51252319_safe-id-QWxsb3lGQVEtQ2FuSXVzZWFmb2xkZXJhc2Ftb2R1bGU_\">\n        <h2 class=\"heading \"><span>Can I use a folder as a module?</span></h2>\n    <p>Alloy do not support the Node.js concept of &quot;folders as modules&quot;. That is, requiring a folder name does not automatically load the index.js or index.json file inside the folder, or use the package.json file to locate the main entry point. You need to explicitly require the file that serves as the main entry point to the library.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-51252319_safe-id-QWxsb3lGQVEtQ2FuSXVzZUV2ZW50bWV0aG9kc2xpc3RlblRvYW5kc3RvcExpc3RlbmluZ3dpdGhhbkFsbG95YXBwPw\">\n        <h2 class=\"heading \"><span>Can I use Event methods  listenTo  and  stopListening  with an Alloy app?</span></h2>\n    <p>The Event methods <tt class=\" \">listenTo</tt> and <tt class=\" \">stopListening</tt> is meant for Backbone View objects to listen to Model and Collection events. These APIs will not work with an Alloy application.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-51252319_safe-id-QWxsb3lGQVEtQ2FuSXNlbGVjdGFjaGlsZGVsZW1lbnRpblRpdGFuaXVtc3R5bGVzaGVldHM_\">\n        <h2 class=\"heading \"><span>Can I select a child element in Titanium style sheets?</span></h2>\n    <p>Alloy does not support the CSS concept of child or descendent selectors.Specifying and applying styles is based on the tag hierarchy.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=51252319\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy FAQ"});