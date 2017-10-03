Ext.data.JsonP['Arrow_Cloud_1.3.0_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Cloud 1.3.0 - 17 September 2015</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46239604\" class=\"content\">\n                        <h1>Arrow Cloud 1.3.0 - 17 September 2015</h1>\n    <p>This release of Arrow Cloud includes version 1.0.27 of the CLI and 1.3.0 of the server, and includes behavior changes.    </p>\n    <p><strong class=\" \">Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>The scripts specified by the <tt class=\" \">scripts.preinstall</tt> and <tt class=\" \">scripts.postinstall</tt> fields in the <tt class=\" \">package.json</tt> file no longer support installing custom binaries outside the project directory.  Instead, create a script called <tt class=\" \">install.sh</tt> located at the root level of the project folder to install the custom binaries.  You can still use the <tt class=\" \">scripts.preinstall</tt> and <tt class=\" \">scripts.postinstall</tt> scripts to install binaries inside the project folder.    </p>\n</li></ul>    <p><strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Build logs</strong>: To view the application build logs, pass the <tt class=\" \">--build_log</tt> flag to the <a class=\"document-link \" href=\"#!/guide/API_Runtime_Services_Command-Line_Interface_Reference-section-src-43299782_APIRuntimeServicesCommand-LineInterfaceReference-loglist\"><tt class=\" \">loglist</tt> command</a>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Install custom binaries</strong>: To install custom binaries, create a script called <tt class=\" \">install.sh</tt> located at the root level of the project to install the custom binaries. See <a class=\"document-link unresolved\" href=\"#!/guide/Arrow_Cloud_1.3.0_Release_Note-section-src-46239604\">Arrow Project: Install Custom Binaries</a>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Restart command</strong>: To restart a server, pass the <tt class=\" \">--restart &lt;SERVER_ID&gt;</tt> option to the <a class=\"document-link \" href=\"#!/guide/API_Runtime_Services_Command-Line_Interface_Reference-section-src-43299782_APIRuntimeServicesCommand-LineInterfaceReference-server\"><tt class=\" \">server</tt> command</a>.  You many want to restart the server if the memory or CPU usage becomes too high.  To get the server ID the application is running on, use the <tt class=\" \">list</tt> command.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Timestamps</strong>: The <tt class=\" \">loglist</tt> and <tt class=\" \">logcat</tt> commands now display a timestamp next to the log output.    </p>\n</li></ul>        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46239604\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Arrow Cloud 1.3.0 Release Note"});