Ext.data.JsonP['Appcelerator_CLI_5.4.0.GA_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI 5.4.0.GA - 10 August 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46255264\" class=\"content\">\n                        <h1>Appcelerator CLI 5.4.0.GA - 10 August 2016</h1>\n    <p>Appcelerator CLI 5.4.0.GA is a minor release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-46255264_AppceleratorCLI5.4.0.GAReleaseNote-ComponentVersions\">\n        <h2 class=\"heading \"><span>Component Versions</span></h2>\n    <p>The following components are shipped with CLI 5.4.0.Beta:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Alloy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.9.1    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Builder    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.8.2    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Cloud CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.2.1    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.9    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46255264_AppceleratorCLI5.4.0.GAReleaseNote-NewFeatures\">\n        <h2 class=\"heading \"><span>New Features</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-875\" target=\"_blank\">CLI-875</a> - appc use command should allow --prerelease option    </p>\n<ul class=\" \"><li class=\" \">    <p>The <tt class=\" \">appc use</tt> command allows you to use prelease versions by using the <tt class=\" \">--prerelease</tt> flag    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46255264_AppceleratorCLI5.4.0.GAReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-741\" target=\"_blank\">CLI-741</a> - Allow for refreshing of session without logging in again explicitly    </p>\n<ul class=\" \"><li class=\" \">    <p>APPC CLI allows for refreshing of a session without having to log in again    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46255264_AppceleratorCLI5.4.0.GAReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-941\" target=\"_blank\">CLI-941</a> - Running appc access get on an unpublished app won&apos;t throw correct error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-955\" target=\"_blank\">CLI-955</a> - CLI should not tell a user to install a pre-release CLI as an update from a GA version    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-988\" target=\"_blank\">CLI-988</a> - &quot;-o&quot; (org-id) is not honored with appc login    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-998\" target=\"_blank\">CLI-998</a> - We are displaying an OEM vendor name in logging and should not    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-999\" target=\"_blank\">CLI-999</a> - &quot;(node:19181) fs: re-evaluating native module sources is not supported.&quot; message appears    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1044\" target=\"_blank\">CLI-1044</a> - CLI 5.4.0-31 can not create apps in EU region    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1066\" target=\"_blank\">CLI-1066</a> - Hyperloop: If you have an older version of Hyperloop in your module global space, you cannot get the newer Hyperloop version    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1067\" target=\"_blank\">CLI-1067</a> - We don&apos;t see &quot;Would you like to enable hyperloop for the app&quot; prompt while enabling services for new app    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-1068\" target=\"_blank\">CLI-1068</a> - Windows: A iPhone module folder is downloaded for Windows OS    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46255264\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI 5.4.0.GA Release Note"});