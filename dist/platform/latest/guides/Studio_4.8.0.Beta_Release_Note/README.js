Ext.data.JsonP['Studio_4.8.0.Beta_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Studio 4.8.0.Beta - 18 October 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-48431462\" class=\"content\">\n                        <h1>Studio 4.8.0.Beta - 18 October 2016</h1>\n    <p>Studio 4.8.0.Beta is a minor release that includes new features, improvements and bug fixes. See the .    </p>\n    <div class=\"section section-2 \" id=\"src-48431462_Studio4.8.0.BetaReleaseNote-Newfeatures\">\n        <h2 class=\"heading \"><span>New features</span></h2>\n    <p>App Designer remembers the state of which platform and device was last selected and the zoom level (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-202\" target=\"_blank\">GB-202</a>).    </p>\n    <p>    <img src=\"images/download/attachments/48431462/switch_organization.png\" alt=\"images/download/attachments/48431462/switch_organization.png\" class=\"confluence-embedded-image image-right\" width=\"300\">\n        </img></p>\n    <p>Users no longer have to log in and out of Studio to switch organizations. With Studio 4.8.0 (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIDOC-2559\" target=\"_blank\">TIDOC-2559</a> and <a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7504\" target=\"_blank\">TISTUD-7504</a>), users can switch organizations via the File menu (File &gt; Switch Organizations) or by clicking on the organization icon in the status region (lower right corner). Either way, a dialogue window will pop up and you select which organization you wish to switch into via a drop-down list. Switching organizations takes a few seconds to process so you will see a &quot;switching organization progress&quot; indicator. Users will then be prompted of the successful organization change.    </p>\n    <p>This version of Studio adds support to create, build, and test Windows modules (<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8519\" target=\"_blank\">TISTUD-8519</a>). See the guide called <a class=\"document-link \" href=\"#!/guide/Windows_Module_Quick_Start\">Windows Module Quick Start</a> for information.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-48431462_Studio4.8.0.BetaReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-201\" target=\"_blank\">GB-201</a> - Default Screen Resolution    </p>\n<ul class=\" \"><li class=\" \">    <p>When opening App Designer, the default resolution will be selected based on the platform    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-515\" target=\"_blank\">GB-515</a> - Close Properties View and Elements View when App Designer editor is closed    </p>\n<ul class=\" \"><li class=\" \">    <p>Properties and Element Views close when App Designer is closed    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-518\" target=\"_blank\">GB-518</a> - Set default zoom level based the device resolution for android and iOS    </p>\n<ul class=\" \"><li class=\" \">    <p>App Designer sets the default zoom level based on the device resolution. See the table below for the default zoom levels:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Device    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Zoom Level    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">iOS</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>640x960 - iPhone 4, 4s    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>60%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>640x1136 - iPhone 5    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>60%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>750x1334 - iPhone 6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>60%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1080x1920 - iPhone 6+    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1536x2048 - iPad Air, iPad 3, iPad Min Retina    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>50%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2732x2048 - iPad Pro    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>50%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Android</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>768x1280 - Nexus 4    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>50%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1080x1920 - Nexus 5    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1440x2560 - Nexus 6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>30%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1200x1920 - Nexus 7    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1536x2048 - Nexus 9    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1600x2560 - Nexus 10    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sony Xperia SP    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>50%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Samsung Galaxy S6    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>30%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Samsung Galaxy S5, S4    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1080x1920 HTC One    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2560x1600 Amazon Kindle Fire HDX    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>30%    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1920x1280 Barnes &amp; Noble Nook    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>40%    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7506\" target=\"_blank\">TISTUD-7506</a> - Add logout menu option in the studio    </p>\n<ul class=\" \"><li class=\" \">    <p>You can now log out of Studio from the File menu. Click on File &gt; Log Out Appcelerator Studio and confirm the logout request by clicking on Yes.    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8509\" target=\"_blank\">TISTUD-8509</a> - Set Node 4.X as minimum supported version    </p>\n<ul class=\" \"><li class=\" \">    <p>Set Node 4.2.0 as minimum supported version. Studio will automatically install Node 4.6.0 by default. Users can install higher versions of Node but anything beyond 4.6.0 is not supported.    </p>\n</li><li class=\" \">    <p>See <a class=\"document-link \" href=\"#!/guide/Installing_Node\">Installing Node</a> for supported versions of Node.    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8524\" target=\"_blank\">TISTUD-8524</a> - Show Appcelerator Studio version number on startup splash screen    </p>\n<ul class=\" \"><li class=\" \">    <p>Added the version number on the startup splash screen    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8530\" target=\"_blank\">TISTUD-8530</a> - Windows tag support in timodule.xml    </p>\n<ul class=\" \"><li class=\" \">    <p>Added support for the <tt class=\" \">windows</tt> tag in the <tt class=\" \">timodule.xml</tt> file    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8536\" target=\"_blank\">TISTUD-8536</a> - Support per-platform moduleAPIVersions    </p>\n<ul class=\" \"><li class=\" \">    <p>Added support on a per-platform list of valid modules for a given SDK    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8544\" target=\"_blank\">TISTUD-8544</a> - Update node installer links to 4.2.0    </p>\n<ul class=\" \"><li class=\" \">    <p>Updated Node install to use Node 4.2.0 as the minimum but will default to 4.6.0    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8547\" target=\"_blank\">TISTUD-8547</a> - Update Hyperloop from the studio    </p>\n<ul class=\" \"><li class=\" \">    <p>Added capability to update Hyperloop from within Studio    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-48431462_Studio4.8.0.BetaReleaseNote-Fixedissues\">\n        <h2 class=\"heading \"><span>Fixed issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/DASH-20\" target=\"_blank\">DASH-20</a> - Remove &apos;More&apos; link from the studio dashboard samples area    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/DASH-21\" target=\"_blank\">DASH-21</a> - Videos no longer shown on frontpage    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/GB-519\" target=\"_blank\">GB-519</a> - iPad Air/iPad 3/iPad Mini Retina device screen resolutions are not reflecting in App designer editor    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-5557\" target=\"_blank\">TISTUD-5557</a> - Error in Studio log on &quot;cannot find templates/release_notes.html&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7212\" target=\"_blank\">TISTUD-7212</a> - Remove shield icon from the bottom toolbar    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7800\" target=\"_blank\">TISTUD-7800</a> - Creating a controller in a folder doesn&apos;t work    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7855\" target=\"_blank\">TISTUD-7855</a> - Studio: Install Android SDK dialog doesn&apos;t resize large enough to hold entries    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-7972\" target=\"_blank\">TISTUD-7972</a> - If you run Test on a non-enabled-service app, then Studio will become unresponsive and crash    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8015\" target=\"_blank\">TISTUD-8015</a> - &quot;Missing icon&quot; in TiApp Editor when using DefaultIcon.png    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8451\" target=\"_blank\">TISTUD-8451</a> - No console logs displayed when packaging Android &amp; IOS modules with studio 4.6.0.201604041329    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8462\" target=\"_blank\">TISTUD-8462</a> - Sending Analytics Ping error    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8472\" target=\"_blank\">TISTUD-8472</a> - Android: Building the app for genymotion emulator gives alert &quot;The launch requires 2.3.3 SDK or higher&quot;    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8523\" target=\"_blank\">TISTUD-8523</a> - Error reporting: Location to be watched doesn&apos;t exist    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8526\" target=\"_blank\">TISTUD-8526</a> - Android NDK Version not shown in the studio diagnostic log with android NDK11    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8527\" target=\"_blank\">TISTUD-8527</a> - Norton Security deems Appc Studio unsafe, and Symantec Endpoint Protection think the install is untrustworthy    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8540\" target=\"_blank\">TISTUD-8540</a> - Installation error while opening studio in the offline mode    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8541\" target=\"_blank\">TISTUD-8541</a> - NPE while checking for &quot;Install Appcelerator SDK&quot; from studio help menu    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8569\" target=\"_blank\">TISTUD-8569</a> - Error Reporting:Widget is disposed error during the studio logout    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8572\" target=\"_blank\">TISTUD-8572</a> - Error Reporting: NPE while launching mobile app project creation wizard    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8573\" target=\"_blank\">TISTUD-8573</a> - Error reporting:Unable to evaluate expression using this context    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8576\" target=\"_blank\">TISTUD-8576</a> - Error Reporting: Unable to retrieve user downloads error in offline mode    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8577\" target=\"_blank\">TISTUD-8577</a> - Error Reporting: java.lang.IllegalArgumentException: Argument not valid    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8594\" target=\"_blank\">TISTUD-8594</a> - Manually checking for appcelerator updates for studio 4.8.0.201609061702 fails due to java.lang.NullPointerException    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8597\" target=\"_blank\">TISTUD-8597</a> - Studio: unable to create mobile apps from ruble    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-48431462_Studio4.8.0.BetaReleaseNote-Knownissues\">\n        <h2 class=\"heading \"><span>Known issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TIDOC-2553\" target=\"_blank\">TIDOC-2553</a> - Studio Troubleshooting: Launch issue in Windows 64-bit machines    </p>\n<ul class=\" \"><li class=\" \">    <p>Studio requires a 32-bit Java run-time environment in order to launch on either 32 or 64-bit operating systems. During installation, Studio will detect and install a 32-bit JDK if it is not found on your system. However, Studio won&apos;t default that Java environment. If you are unable to launch Studio on a Windows 64-bit OS, Studio wasn&apos;t able to find the 32-bit JDK. You will see an error similar to this:<br><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/secure/attachment/60015/60015_Studio_launch_issue.png\" target=\"_blank\">    <img src=\"images/jira.appcelerator.org/secure/thumbnail/60015/_thumb_60015.png\" alt=\"images/jira.appcelerator.org/secure/thumbnail/60015/_thumb_60015.png\" class=\"confluence-embedded-image confluence-external-resource\">\n</img></a>    </br></p>\n</li><li class=\" \">    <p>If your default Java environment is set to 64-bit, then you need to add the following argument in the <tt class=\" \">Appcelerator.ini</tt> file (found in the installation directory):    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">C:\\Program Files(x86)\\Java\\jdk1.</code><code class=\"value\">7</code><code class=\"plain\">.0_71\\bin\\javaw.exe</code></div>\n</div>\n    </div>\n</li></ul></li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/TISTUD-8613\" target=\"_blank\">TISTUD-8613</a> - iOS Debugger: Breakpoint is not hit for the first time for a clean alloy project    </p>\n<ul class=\" \"><li class=\" \">    <p>When a clean Alloy project is debugged on iOS, the breakpoint is not hit. However when the same project is debugged again without cleaning the previous project build, the breakpoint does hit successfully.    </p>\n</li></ul></li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=48431462\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Studio 4.8.0.Beta Release Note"});