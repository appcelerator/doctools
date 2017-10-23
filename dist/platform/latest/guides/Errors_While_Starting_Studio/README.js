Ext.data.JsonP['Errors_While_Starting_Studio']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Errors While Starting Studio</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-30083290\" class=\"content\">\n                        <h1>Errors While Starting Studio</h1>\n    <div class=\"section section-2 \" id=\"src-30083290_ErrorsWhileStartingStudio-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_ErrorsWhileStartingStudio-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_safe-id-RXJyb3JzV2hpbGVTdGFydGluZ1N0dWRpby1Xb3Jrc3BhY2VpbnVzZW9yY2Fubm90YmVjcmVhdGVkLGNob29zZWFkaWZmZXJlbnRvbmU\">Workspace in use or cannot be created, choose a different one</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_ErrorsWhileStartingStudio-AnErrorHasOccurred\">An Error Has Occurred</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_safe-id-RXJyb3JzV2hpbGVTdGFydGluZ1N0dWRpby1TZWV0aGVsb2dmaWxlL1VzZXJzLy4uLi4\">See the log file /Users/....</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_ErrorsWhileStartingStudio-LaunchingtheStudiowith-clean\">Launching the Studio with -clean</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Errors_While_Starting_Studio-section-src-30083290_ErrorsWhileStartingStudio-HowtostopStudiofromloadingaproblemfile\">How to stop Studio from loading a problem file</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083290_ErrorsWhileStartingStudio-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>Occasionally you may experience errors starting Studio. Here are some suggested solutions.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>See <a class=\"document-link \" href=\"#!/guide/Switching_your_Workspace\">Switching your Workspace</a> to help find your current workspace location    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-30083290_safe-id-RXJyb3JzV2hpbGVTdGFydGluZ1N0dWRpby1Xb3Jrc3BhY2VpbnVzZW9yY2Fubm90YmVjcmVhdGVkLGNob29zZWFkaWZmZXJlbnRvbmU\">\n        <h2 class=\"heading \"><span>Workspace in use or cannot be created, choose a different one</span></h2>\n    <p>This can happen as a result of an improper shutdown of Studio. To resolve the issue, you need to delete a .lock file.    </p>\n<ol class=\" \"><li class=\" \">    <p>Delete the file %WORKSPACE_PATH%/.metadata/.lock, and restart Studio    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083290_ErrorsWhileStartingStudio-AnErrorHasOccurred\">\n        <h2 class=\"heading \"><span>An Error Has Occurred</span></h2>\n    <p>These are errors pop up a dialog box, asking you to look at a log file    </p>\n    <div class=\"section section-3 \" id=\"src-30083290_safe-id-RXJyb3JzV2hpbGVTdGFydGluZ1N0dWRpby1TZWV0aGVsb2dmaWxlL1VzZXJzLy4uLi4\">\n        <h3 class=\"heading \"><span>See the log file /Users/....</span></h3>\n    <p>Open the log file at the specified location. If you see messages like:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">org.osgi.framework.BundleException: Exception in org.eclipse.core.resources.ResourcesPlugin.start() of bundle org.eclipse.core.resources.</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">Caused by: org.eclipse.core.internal.dtree.ObjectNotFoundException: Tree element </code><code class=\"string\">&apos;XXX&apos;</code><code class=\"plain\"> not found.</code></div>\n</div>\n    </div>\n    <p>It is caused by <a class=\"external-link external-link\" href=\"https://bugs.eclipse.org/bugs/show_bug.cgi?id=149121\" target=\"_blank\">this</a> bug in Eclipse, most likely due to a case where Studio quit or was closed unexpectedly, corrupting a particular file.    </p>\n    <p>Steps to fix:    </p>\n<ol class=\" \"><li class=\" \">    <p>Copy your whole workspace first, so that you are not risking your original files when you attempt these steps    </p>\n</li><li class=\" \">    <p>Delete the file %WORKSPACE_PATH%/.metadata/.plugins/org.eclipse.core.resources/.snap, and restart Studio    </p>\n</li></ol>    <p>This will start Studio, but your workspace will most likely be missing your projects. This is okay--you can quickly reimport them    </p>\n<ol class=\" \"><li class=\" \">    <p>File &gt; Import &gt; Existing Projects....    </p>\n</li><li class=\" \">    <p>Select the workspace directory from above, and finish the wizard    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083290_ErrorsWhileStartingStudio-LaunchingtheStudiowith-clean\">\n        <h2 class=\"heading \"><span>Launching the Studio with -clean</span></h2>\n    <p>If Studio does not appear to work properly, you can try and launch it with a -clean option.    </p>\n<ol class=\" \"><li class=\" \">    <p>Follow the instructions <a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options\">here</a> for adding a launcher argument.    </p>\n</li><li class=\" \">    <p>Add <strong class=\" \">-clean</strong> to the launch arguments for Studio or Eclipse.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083290_ErrorsWhileStartingStudio-HowtostopStudiofromloadingaproblemfile\">\n        <h2 class=\"heading \"><span>How to stop Studio from loading a problem file</span></h2>\n    <p>A file might be causing trouble when Studio is restarted because it is very large or in some way corrupted. There are a couple of ways you could prevent Studio from loading the file.    </p>\n<ul class=\" \"><li class=\" \">    <p>Rename the problem file. This means Studio can no longer find it and so will ignore the file on restart.    </p>\n</li><li class=\" \">    <p>Delete the &lt;studio_workspace&gt;\\.metadata\\.plugins\\org.eclipse.ui.workbench\\workbench.xml file, where the state of workbench when exiting is saved. This means Studio will not preload any files that were open on the last exit.    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083290\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Errors While Starting Studio"});