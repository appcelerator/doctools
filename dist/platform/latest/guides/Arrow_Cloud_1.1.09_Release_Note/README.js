Ext.data.JsonP['Arrow_Cloud_1.1.09_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Cloud 1.1.9 - 05 March 2015</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46239616\" class=\"content\">\n                        <h1>Arrow Cloud 1.1.9 - 05 March 2015</h1>\n    <p>This release of Arrow Cloud includes version 1.0.22 of the CLI and version 1.1.9 of the server.    </p>\n    <div class=\"section section-2 \" id=\"src-46239616_ArrowCloud1.1.09ReleaseNote-CLI1.0.22\">\n        <h2 class=\"heading \"><span>CLI 1.0.22</span></h2>\n    <p><strong class=\" \">Notice of Feature and Behavior Changes</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>The <tt class=\" \">appc cloud cname</tt> command has been deprecated in favor of the <tt class=\" \">appc cloud domain</tt> command, which can bind an application to an A record in addition to a CNAME record.    </p>\n</li><li class=\" \">    <p>The <tt class=\" \">appc cloud config</tt> <tt class=\" \">--autoscale</tt> and <tt class=\" \">--setsize</tt> command options have been removed. To enable auto-scaling, use the <tt class=\" \">--autoscaleup</tt> and <tt class=\" \">--autoscaledown</tt> options. You can no longer set the current number of cloud servers to use with the <tt class=\" \">--setsize</tt> option, instead you can set the minium number with the <tt class=\" \">--minsize </tt>option.    </p>\n</li></ul>    <p><strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>New <tt class=\" \">appc cloud domain</tt> command to bind either a CNAME or A record to an application. This command deprecates the <tt class=\" \">appc cloud cname</tt> command, which can only bind a CNAME record to an application.    </p>\n</li><li class=\" \">    <p>New <tt class=\" \">appc cloud config</tt> <tt class=\" \">--minsize</tt> command option to set the minimum number of cloud servers the application can use.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-46239616_ArrowCloud1.1.09ReleaseNote-Server1.1.9\">\n        <h2 class=\"heading \"><span>Server 1.1.9</span></h2>\n    <p><strong class=\" \">New Features and Improvements</strong>    </p>\n<ul class=\" \"><li class=\" \">    <p>Support for wildcard subdomain routing.    </p>\n</li><li class=\" \">    <p>Support for binding the application to an A record in addition to a CNAME record.    </p>\n</li><li class=\" \">    <p>Add support for <a class=\"external-link external-link\" href=\"https://github.com/expressjs/body-parser\" target=\"_blank\">body-parser middleware</a>, which makes the body of an HTTP request available as <tt class=\" \">req.body</tt> in the controller of an MVC application. To enable the body-parser middleware, add the following line to the <tt class=\" \">package.json</tt> file:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&quot;bodyParser&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code></div>\n</div>\n    </div>\n</li></ul>    <p class=\"prettyprint prettyprinted\">For legacy releases, see <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/guide/node_releasenotes\">http://docs.appcelerator.com/cloud/latest/#!/guide/node_releasenotes</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46239616\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Arrow Cloud 1.1.09 Release Note"});