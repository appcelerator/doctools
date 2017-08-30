Ext.data.JsonP['Appcelerator_CLI_5.2.1_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI 5.2.1 - 24 March 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-46247113\" class=\"content\">\n                        <h1>Appcelerator CLI 5.2.1 - 24 March 2016</h1>\n    <p>Appcelerator CLI 5.2.1 is a patch release that includes a few improvements and several bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-46247113_AppceleratorCLI5.2.1ReleaseNote-ComponentVersions\">\n        <h2 class=\"heading \"><span>Component Versions</span></h2>\n    <p>The following components are shipped with CLI 5.2.1:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Version    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Alloy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.8.2    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Builder    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.7.29    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Arrow Cloud CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1.2.0    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>5.0.6    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46247113_AppceleratorCLI5.2.1ReleaseNote-FixedIssues\">\n        <h2 class=\"heading \"><span>Fixed Issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-928\" target=\"_blank\">CLI-928</a> - 9.2.1 iPhone crashes when jailbreak-detect is enabled    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-943\" target=\"_blank\">CLI-943</a> - Core 5.2.0 displays incorrect/confusing warning if NPM is still &lt; 4.2.3    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-949\" target=\"_blank\">CLI-949</a> - Windows: config files are written to different drive than process.env.HOME    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-950\" target=\"_blank\">CLI-950</a> - Process doesn&apos;t cleanup children in certain scenarios    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-957\" target=\"_blank\">CLI-957</a> - Unable to build modules from Appc CLI    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-967\" target=\"_blank\">CLI-967</a> - iOS: Arguments to path.join must be strings    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-973\" target=\"_blank\">CLI-973</a> - Update Alloy version to 1.8.0    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46247113_AppceleratorCLI5.2.1ReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n    <p>CLI 5.2.1 now supports the creation of test applications without the need to create a classic project (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-687\" target=\"_blank\">CLI-687</a>). You can now use the <tt class=\" \">--testapp</tt> flag with <tt class=\" \">appc new</tt> to do the same thing in one step. Previously, you had to run the following steps:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium --classic -i com.appc.picker -n AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">cd AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">appc alloy </code><code class=\"keyword\">new</code><code class=\"plain\"> --testapp ui/picker</code></div>\n</div>\n    </div>\n    <p>With this version, you can use this one command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium -i com.appc.picker -n AlloyPicker --testapp ui/picker</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46247113\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI 5.2.1 Release Note"});