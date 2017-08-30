Ext.data.JsonP['Alloy_1.7.33_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy 1.7.33 - 22 February 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46245345\" class=\"content\">\n                        <h1>Alloy 1.7.33 - 22 February 2016</h1>\n    <p>Alloy 1.7.33 is a patch release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-46245345_Alloy1.7.33ReleaseNote-NewFeatures\">\n        <h2 class=\"heading \"><span>New Features</span></h2>\n    <p>Alloy supports the new Ti.UI.iOS.createPreviewContext. A PreviewContext can be added to most views via the <tt class=\" \">&lt;PreviewContext&gt;</tt> tag. This tag itself supports <tt class=\" \">&lt;Preview&gt;</tt> and <tt class=\" \">&lt;Actions&gt;</tt> tags, which maps to  <tt class=\" \">preview</tt> and <tt class=\" \">actions</tt> properties respectively. The <tt class=\" \">preview</tt> property must be assigned a single view. The <tt class=\" \">actions</tt> property can be used with one or more actions (<tt class=\" \">&lt;Action&gt;</tt>) or action groups (<tt class=\" \">&lt;ActionGroup&gt;</tt>).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46245345_Alloy1.7.33ReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1264\" target=\"_blank\">ALOY-1264</a> - Support New iOS SplitWindow in XML Markup    </p>\n<ul class=\" \"><li class=\" \">    <p>There is a new Ti.UI.iOS.SplitWindow class, which deprecates the old Ti.UI.iPad.SplitWindow class. See <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iOS.SplitWindow\">Titanium.UI.iOS.SplitWindow</a> for more details.    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1321\" target=\"_blank\">ALOY-1321</a> - iOS: packaged app icons for new projects needs to be updated    </p>\n<ul class=\" \"><li class=\" \">    <p>Removed unsupported appicons from project template.    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1341\" target=\"_blank\">ALOY-1341</a> - Add Arabic lang to builtin MomentJS    </p>\n<ul class=\" \"><li class=\" \">    <p>Added most common Arabic format to MomentJS    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1342\" target=\"_blank\">ALOY-1342</a> - Sample Todo App TextField text color to black    </p>\n<ul class=\" \"><li class=\" \">    <p>Added font color of black to <tt class=\" \">#itemField</tt> to alleviate readability problems on Android    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1346\" target=\"_blank\">ALOY-1346</a> - Controller template should no longer declare args variable    </p>\n<ul class=\" \"><li class=\" \">    <p>Arguments passed into the controller can be accessed from $.args    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46245345_Alloy1.7.33ReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1320\" target=\"_blank\">ALOY-1320</a> - Styles not applied when an element uses another namespace    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1322\" target=\"_blank\">ALOY-1322</a> - Blackberry still appears in the assets folder    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1323\" target=\"_blank\">ALOY-1323</a> - Alloy: module-tag in Alloy element effects all controller-views    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1331\" target=\"_blank\">ALOY-1331</a> - Windows: App crashes with &apos;Cannot find variable: OS_BLACKBERRY    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1332\" target=\"_blank\">ALOY-1332</a> - Alloy.version does not match actual version    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1335\" target=\"_blank\">ALOY-1335</a> - Use Alloy&apos;s deepExtend to handle conditional on-device style inheritance    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1340\" target=\"_blank\">ALOY-1340</a> - Alloy selective compilation broken since ALOY-1332    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1345\" target=\"_blank\">ALOY-1345</a> - iOS Attributed Strings are not showing    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46245345\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy 1.7.33 Release Note"});