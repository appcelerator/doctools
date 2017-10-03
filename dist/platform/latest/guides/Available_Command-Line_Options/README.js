Ext.data.JsonP['Available_Command-Line_Options']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Available Command-Line Options</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083263\" class=\"content\">\n                        <h1>Available Command-Line Options</h1>\n    <div class=\"section section-2 \" id=\"src-30083263_AvailableCommand-LineOptions-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>If you wish a user to have additional control over their environment, you can implement properties to modify the application&apos;s behavior from the command line or configuration files.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083263_AvailableCommand-LineOptions-SettingProperties\">\n        <h2 class=\"heading \"><span>Setting Properties</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Reference <a class=\"document-link \" href=\"#!/guide/Adding_Command-Line_Options\">Adding Command-Line Options</a>. These are all considered VM arguments.    </p>\n</li><li class=\" \">    <p>A full list of default Eclipse properties may be found <a class=\"external-link external-link\" href=\"http://help.eclipse.org/indigo/index.jsp?topic=/org.eclipse.platform.doc.isv/reference/misc/runtime-options.html\" target=\"_blank\">here</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083263_AvailableCommand-LineOptions-CurrentlyAvailableProperties\">\n        <h2 class=\"heading \"><span>Currently Available Properties</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Property</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Allowable Values (default in bold)</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Description</strong>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Start Page</strong>    </p>\n            </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.portalBrowser    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>swt/<strong class=\" \">chromium</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Use specific browser component    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Editing</strong>    </p>\n            </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.disableBackgroundReconciler    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>true/<strong class=\" \">false</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Disables the background presentation reconciler    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.reconcilerIterationPartitionLimit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>10000    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Upper limit on the number of partitions to colorize    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.reconcilerBackgroundDelay    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1000    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Time (in milliseconds) for how long to wait before running the reconciler    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.reconcilerIterationDelay    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>50    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Time (in milliseconds) for how long to wait between running iterations of the reconciler    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.reconcilerMinimalVisibleLength    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>20000    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Number of lines (from the beginning of the document) to colorize by default    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Scripting</strong>    </p>\n            </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n                <td rowspan=\"1\" colspan=\"1\">\n                </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>studio.rubleUserLocation    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>path on disk    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Override the default location to load Rubles from disk    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083263\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Available Command-Line Options"});