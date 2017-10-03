Ext.data.JsonP['Preventing_Man-in-the-middle_Attacks_for_API_Runtime_Services_API_Calls']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Preventing Man-in-the-middle Attacks for API Runtime Services API Calls</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-46256121\" class=\"content\">\n                        <h1>Preventing Man-in-the-middle Attacks for API Runtime Services API Calls</h1>\n    <p>This info only applies to users who intend to do API calls to API Runtime Services while using the https module.    </p>\n    <p>You only need to generate your own certificate if you are using the https module and NOT the ti.cloud modules.    </p>\n    <p>Note: you will need https module and ti.cloud module to test this sample app:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var Cloud = require(</code><code class=\"string\">&apos;ti.cloud&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor: </code><code class=\"string\">&apos;white&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Cloud.createX509CertificatePinningSecurityManager([</code></div>\n<div class=\"line\"><code class=\"plain\">    {</code></div>\n<div class=\"line\"><code class=\"plain\">        url: </code><code class=\"string\">&quot;https://api.cloud.appcelerator.com&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        serverCertificate: </code><code class=\"string\">&quot;api.cloud.appcelerator.com.der&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">]);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var btn = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">&apos;Login User in Ti.Cloud&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop: </code><code class=\"string\">&apos;50%&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">btn.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"comments\">//any Cloud calls here will do</code></div>\n<div class=\"line\"><code class=\"plain\">\tCloud.Users.login({</code></div>\n<div class=\"line\"><code class=\"plain\">\t    login: </code><code class=\"string\">&apos;test@mycompany.com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t    password: </code><code class=\"string\">&apos;test_password&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t}, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t        var user = e.users[</code><code class=\"value\">0</code><code class=\"plain\">];</code></div>\n<div class=\"line\"><code class=\"plain\">\t        alert(</code><code class=\"string\">&apos;Success:\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">\t            </code><code class=\"string\">&apos;id: &apos;</code><code class=\"plain\"> + user.id + </code><code class=\"string\">&apos;\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">\t            </code><code class=\"string\">&apos;sessionId: &apos;</code><code class=\"plain\"> + Cloud.sessionId + </code><code class=\"string\">&apos;\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">\t            </code><code class=\"string\">&apos;first name: &apos;</code><code class=\"plain\"> + user.first_name + </code><code class=\"string\">&apos;\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">\t            </code><code class=\"string\">&apos;last name: &apos;</code><code class=\"plain\"> + user.last_name);</code></div>\n<div class=\"line\"><code class=\"plain\">\t    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t        alert(</code><code class=\"string\">&apos;Error:\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">\t            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));</code></div>\n<div class=\"line\"><code class=\"plain\">\t    }</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(btn);</code></div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-46256121_PreventingMan-in-the-middleAttacksforAPIRuntimeServicesAPICalls-Stepstotest\">\n        <h2 class=\"heading \"><span>Steps to test</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Create a <strong class=\" \">new Classic app</strong>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Enable cloud services</strong> and include both <strong class=\" \">ti.cloud</strong> and <strong class=\" \">https modules</strong>.    </p>\n</li><li class=\" \">    <p>Include attached <a class=\"attachment-link \" href=\"./attachments_46728449_1_api.cloud.appcelerator.com.der\">.der certificate</a> in the <strong class=\" \">Resources</strong> directory.    </p>\n</li><li class=\" \">    <p>Build and run.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">btn</strong>.    </p>\n</li></ol>    <p>When testing the http client connecting to the https site at this point, you should get an error message saying that no user or password was found which is what is expected to report if everything was set up properly.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46256121\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Preventing Man-in-the-middle Attacks for API Runtime Services API Calls"});