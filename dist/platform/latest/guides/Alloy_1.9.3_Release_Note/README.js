Ext.data.JsonP['Alloy_1.9.3_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy 1.9.3 - 8 October 2016</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49155548\" class=\"content\">\n                        <h1>Alloy 1.9.3 - 8 October 2016</h1>\n    <p>Alloy 1.9.3 is a patch release that includes new features, improvements and bug fixes.    </p>\n    <div class=\"section section-2 \" id=\"src-49155548_Alloy1.9.3ReleaseNote-Newfeatures\">\n        <h2 class=\"heading \"><span>New features</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1493\" target=\"_blank\">ALOY-1493</a> - [Alloy] Alloy sql adapter db_file to be function    </p>\n<ul class=\" \"><li class=\" \">    <p>The db_file not accepts function    </p>\n</li><li class=\" \">    <p>Example:    </p>\n    <p>    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\"js plain \">exports.definition = {</tt><tt class=\"js spaces \">    </tt><tt class=\"js plain \">config: {</tt><tt class=\"js spaces \">        </tt><tt class=\"js plain \">columns: {},</tt><tt class=\"js spaces \">        </tt><tt class=\"js plain \">adapter: {</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">type: </tt><tt class=\"js string \">&quot;sql&quot;</tt><tt class=\"js plain \">,</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">collection_name: </tt><tt class=\"js string \">&quot;mytable&quot;</tt><tt class=\"js plain \">,</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">db_file: </tt><tt class=\"js keyword \">function</tt><tt class=\"js plain \">() {</tt><tt class=\"js spaces \">                </tt><tt class=\"js keyword \">var</tt> <tt class=\"js plain \">myFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, </tt><tt class=\"js string \">&apos;file1.sql&apos;</tt><tt class=\"js plain \">);</tt><tt class=\"js spaces \">                </tt><tt class=\"js keyword \">return</tt> <tt class=\"js plain \">myFile.exists() ? myFile.nativePath : Titanium.Filesystem.applicationDataDirectory + </tt><tt class=\"js string \">&apos;file2.sql&apos;</tt><tt class=\"js plain \">;</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">},</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">db_name: </tt><tt class=\"js string \">&quot;projectsDB&quot;</tt><tt class=\"js plain \">,</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">idAttribute: </tt><tt class=\"js string \">&quot;UserID&quot;</tt><tt class=\"js plain \">,</tt><tt class=\"js spaces \">            </tt><tt class=\"js plain \">remoteBackup: </tt><tt class=\"js keyword \">false</tt><tt class=\"js spaces \">        </tt><tt class=\"js plain \">}</tt><tt class=\"js spaces \">    </tt><tt class=\"js plain \">}</tt><tt class=\"js plain \">};</tt>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49155548_Alloy1.9.3ReleaseNote-Improvements\">\n        <h2 class=\"heading \"><span>Improvements</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1519\" target=\"_blank\">ALOY-1519</a> - Alloy: Support iOS 10 &lt;RefreshControl&gt; tag in Ti.UI.ScrollView    </p>\n<ul class=\" \"><li class=\" \">    <p>Added support for iOS 10&apos;s <tt class=\" \">&lt;RefreshControl&gt;</tt> element in <tt class=\" \">Ti.UI.ScrollView</tt>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-49155548_Alloy1.9.3ReleaseNote-Fixedissues\">\n        <h2 class=\"heading \"><span>Fixed issues</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/ALOY-1520\" target=\"_blank\">ALOY-1520</a> - Replace Ti.Ui.iPhone with Ti.Ui.iOS in Alloy    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49155548\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy 1.9.3 Release Note"});