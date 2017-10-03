Ext.data.JsonP['Installing_the_Android_Development_Tools']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Installing the Android Development Tools</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083134\" class=\"content\">\n                        <h1>Installing the Android Development Tools</h1>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-InstalltheEclipseJavaDevelopmentToolsplugin\">Install the Eclipse Java Development Tools plugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-InstalltheADTplugin\">Install the ADT plugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-ConfigureStudiotousetheSDKs\">Configure Studio to use the SDKs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-Launchtheemulatorandapp\">Launch the emulator and app</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-AddtheDDMSperspectivebutton\">Add the DDMS perspective button</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Installing_the_Android_Development_Tools-section-src-30083134_InstallingtheAndroidDevelopmentTools-Usethetools\">Use the tools</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This guide explains how to install Android Development Tools (ADT) to Studio.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-InstalltheEclipseJavaDevelopmentToolsplugin\">\n        <h2 class=\"heading \"><span>Install the Eclipse Java Development Tools plugin</span></h2>\n    <p>If you do not currently have Java tooling enabled, see the reference in <a class=\"document-link \" href=\"#!/guide/Installing_the_Java_Development_Tools\">Installing the Java Development Tools</a> for this step.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-InstalltheADTplugin\">\n        <h2 class=\"heading \"><span>Install the ADT plugin</span></h2>\n<ul class=\" \"><li class=\" \">    <p>On Google&apos;s official Android Developers website, under the section <a class=\"external-link external-link\" href=\"http://developer.android.com/sdk/installing/installing-adt.html\" target=\"_blank\">Downloading the ADT Plugin</a>, copy the update URL to the clipboard    </p>\n</li><li class=\" \">    <p>From the Studio menu bar, select <strong class=\" \">Help &gt; Install New Software...</strong>    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Add</strong> button, to add the Google ADT Plugin update site    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_08.png\" alt=\"images/download/attachments/30083134/ADT_install_08.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Name</strong> field, enter something descriptive, such as <strong class=\" \">Google ADT</strong>    </p>\n</li><li class=\" \">    <p>Paste the Google ADT update site URL, copied to the clipboard in the previous step, into the <strong class=\" \">Location</strong> field    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_09.png\" alt=\"images/download/attachments/30083134/ADT_install_09.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Using the <strong class=\" \">Work with</strong> drop-down menu, select the <strong class=\" \">Google ADT</strong> entry that you added in the previous step    </p>\n</li><li class=\" \">    <p>Wait for the package list to be populated    </p>\n</li><li class=\" \">    <p>Select all the resulting ADT packages    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next</strong> button    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Next</strong> button on the <strong class=\" \">Install Details</strong> screen that follows    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_10.png\" alt=\"images/download/attachments/30083134/ADT_install_10.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Select each package in turn from the left-hand pane and accept the respective license agreement    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Finish</strong> button    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_11.png\" alt=\"images/download/attachments/30083134/ADT_install_11.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Once the installation is complete, click the <strong class=\" \">Restart Now</strong> button    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_12.png\" alt=\"images/download/attachments/30083134/ADT_install_12.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-ConfigureStudiotousetheSDKs\">\n        <h2 class=\"heading \"><span>Configure Studio to use the SDKs</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Using the perspective icon(s) in the top-right hand corner, select the one titled <strong class=\" \">Web</strong>    </p>\n</li><li class=\" \">    <p>Using the <strong class=\" \">Project Explorer</strong> tab in the left-hand pane, right-click an existing project and select <strong class=\" \">Open Project</strong>    </p>\n</li><li class=\" \">    <p>Browse the resulting project file list, right-click <tt class=\" \">tiapp.xml</tt> in the root of the project, select <strong class=\" \">Open With &gt; TiApp Editor</strong>    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_13.png\" alt=\"images/download/attachments/30083134/ADT_install_13.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Choose your preferred Titanium SDK version from the <strong class=\" \">SDK Version</strong> drop-down list    </p>\n</li><li class=\" \">    <p>Check the <a class=\"document-link \" href=\"#!/guide/Titanium_Compatibility_Matrix-section-src-29004837_safe-id-VGl0YW5pdW1Db21wYXRpYmlsaXR5TWF0cml4LUFuZHJvaWRTREsvVGFyZ2V0QW5kcm9pZFBsYXRmb3Jt\">Android SDK / Target Android Platform</a> section of the Titanium Compatibility Matrix, to determine which Android versions are compatible with your chosen Titanium SDK. For example, Titanium SDK 1.6.X is compatible with Android versions 1.6 to 2.3. This information will be needed for the configuration in the following steps    </p>\n</li><li class=\" \">    <p>Close <tt class=\" \">tiapp.xml</tt>    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_14.png\" alt=\"images/download/attachments/30083134/ADT_install_14.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>From the Studio menu, select <strong class=\" \">Window &gt; Preferences</strong> or <strong class=\" \">Studio &gt; </strong><strong class=\" \">Preference</strong> for Mac OS X<strong class=\" \"> </strong>to open the <strong class=\" \">Preferences</strong> dialog    </p>\n</li><li class=\" \">    <p>Navigate to <strong class=\" \">Android</strong>    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Browse...</strong> button to configure the Android <strong class=\" \">SDK Location</strong>    </p>\n</li><li class=\" \">    <p>Select a target Android SDK from the list, ensuring that its version is within the range compatible with the Titanium SDK you have chosen, as discovered in the previous step    </p>\n</li><li class=\" \">    <p>Navigate to <strong class=\" \">Studio &gt; Platforms &gt;</strong><strong class=\" \"> Android</strong>    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Browse...</strong> button to configure the <strong class=\" \">Android</strong> <strong class=\" \">SDK Home</strong>    </p>\n</li><li class=\" \">    <p>Select a target Android SDK from the <strong class=\" \">Default</strong> <strong class=\" \">Android SDK</strong> drop-down list, ensuring that its version is within the range compatible with the Titanium SDK you have chosen, as discovered in the previous step    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK</strong> to save preference changes    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>As explained in the <a class=\"document-link \" href=\"#!/guide/Titanium_Compatibility_Matrix-section-src-29004837_safe-id-VGl0YW5pdW1Db21wYXRpYmlsaXR5TWF0cml4LUFuZHJvaWRTREsvVGFyZ2V0QW5kcm9pZFBsYXRmb3Jt\">Android SDK / Target Android Platform</a>, if you require advanced Android features, such Maps, remember to choose a target that includes the enhanced Google APIs, listed as <strong class=\" \">Google APIs</strong> in the <strong class=\" \">Default Android SDK </strong>list    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-Launchtheemulatorandapp\">\n        <h2 class=\"heading \"><span>Launch the emulator and app</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Using the <strong class=\" \">Project Explorer</strong>, select the project that was opened earlier    </p>\n</li><li class=\" \">    <p>Using the <strong class=\" \">Launch</strong> toolbar button, located between the <strong class=\" \">Project Explorer</strong> tab and its file list, select <strong class=\" \">Android Emulator</strong> to launch the project app    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-AddtheDDMSperspectivebutton\">\n        <h2 class=\"heading \"><span>Add the DDMS perspective button</span></h2>\n<ul class=\" \"><li class=\" \">    <p>While the emulator boots, open the ADT perspective.  From the Studio menu bar, select the <strong class=\" \">Window &gt; Open Perspective &gt; Other...</strong>    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_19.png\" alt=\"images/download/attachments/30083134/ADT_install_19.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Select <strong class=\" \">DDMS</strong> (which stands for, Dalvik Debug Monitor Server) from the list of available perspectives    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_20.png\" alt=\"images/download/attachments/30083134/ADT_install_20.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>To ensure that the perspective is in its default state, select the <strong class=\" \">Window &gt; Reset Perspective...</strong> menu    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button, when the resulting <i class=\" \">Do you want to reset the current DDMS perspective to its defaults?</i> dialog displays    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_21.png\" alt=\"images/download/attachments/30083134/ADT_install_21.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083134_InstallingtheAndroidDevelopmentTools-Usethetools\">\n        <h2 class=\"heading \"><span>Use the tools</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">LogCat</strong> viewer tab above the bottom pane, to watch the console output while the emulator boots    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_22.png\" alt=\"images/download/attachments/30083134/ADT_install_22.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>If you wish, you may relocate this tab to the main pane, next to the <strong class=\" \">File Explorer</strong> tab, using a simple drag and drop gesture    </p>\n</li><li class=\" \">    <p>To show only <tt class=\" \">Ti.API</tt> log messages, create a logcat filter using the green <i class=\" \">plus</i> icon in the logcat toolbar and set the <tt class=\" \">by Log Tag</tt> field to &quot;TiAPI&quot;. See <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/developing/debugging/debugging-log.html\" target=\"_blank\">Reading and Writing Logs</a> for more information about logcat filters.    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_logcat_filter.png\" alt=\"images/download/attachments/30083134/ADT_install_logcat_filter.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Once booted, unlock the emulator and wait for the app to launch    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_23.png\" alt=\"images/download/attachments/30083134/ADT_install_23.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Now that the emulator is running, select it from the list of devices in the left-hand pane, and inspect it using the tools    </p>\n</li><li class=\" \">    <p>For example, select the <strong class=\" \">File Explorer</strong> tab, and navigate to the directory <tt class=\" \">/data/data/yourAppId</tt>    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/30083134/ADT_install_24.png\" alt=\"images/download/attachments/30083134/ADT_install_24.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    <p>    <img src=\"images/download/attachments/30083134/ADT_install_25.png\" alt=\"images/download/attachments/30083134/ADT_install_25.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>the <tt class=\" \">/data/data/yourAppId</tt> directory is equivalent to <a class=\"external-link external-link\" href=\"#!/api/Titanium.Filesystem\">Titanium.Filesystem.applicationDataDirectory</a>    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/30083134/ADT_install_26.png\" alt=\"images/download/attachments/30083134/ADT_install_26.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p><tt class=\" \">yourAppId</tt> was defined when the project was created, as shown in the <strong class=\" \">TiApp Editor</strong> (see below)    </p>\n    </div>\n        <p>    <img src=\"images/download/attachments/30083134/ADT_install_29.png\" alt=\"images/download/attachments/30083134/ADT_install_29.png\" class=\"confluence-embedded-image\" width=\"600\">\n        </img></p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083134\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Installing the Android Development Tools"});