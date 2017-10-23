Ext.data.JsonP['Authentication']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Authentication</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153754\" class=\"content\">\n                        <h1>Authentication</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication-section-src-49153754_Authentication-ApplicationkeyoverSSL\">Application key over SSL</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication-section-src-49153754_Authentication-2-LeggedOAuth\">2-Legged OAuth</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication-section-src-49153754_Authentication-OAuthexample\">OAuth example</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication-section-src-49153754_safe-id-QXV0aGVudGljYXRpb24tQWNjZXNzQ29udHJvbExpc3RzKEFDTHMp\">Access Control Lists (ACLs)</a>    </p>\n</li></ul>    <p>To keep your application data secure from unauthorized access, your application must prove that it is allowed to communicate with Mobile Backend Services (MBS) in each HTTP request. There are two ways your application can do this:    </p>\n<ul class=\" \"><li class=\" \">    <p>Application key over SSL    </p>\n</li><li class=\" \">    <p>2-Legged OAuth    </p>\n</li></ul>    <p>To authenticate user access to individual MBS data objects within your application, such as <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Photos\">Photos</a> or <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Files\">Files</a>, you can use access control lists (ACLs). See <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/ACLs\">Access Control Lists</a> for more information.    </p>\n    <div class=\"section section-2 \" id=\"src-49153754_Authentication-ApplicationkeyoverSSL\">\n        <h2 class=\"heading \"><span>Application key over SSL</span></h2>\n    <p>The easiest way to authenticate API requests to MBS is to supply an MBS app key with each request as a URL parameter, for example:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">GET https:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/places/search.json?key=&lt;YOUR_APP_KEY&gt;</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>MBS defaults to using application key over SSL.    </p>\n    <p><strong class=\" \">To locate your application key in Dashboard</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a> in your browser and select your MBS application from the App menu. You may need to click <strong class=\" \">All Projects</strong> to find your application.    </p>\n</li><li class=\" \">    <p>From the left-hand navigation, select <strong class=\" \">Configuration</strong>.    </p>\n</li><li class=\" \">    <p>On the <strong class=\" \">Keys</strong> tab, click <strong class=\" \">Show</strong> next to the <strong class=\" \">App Key</strong> label to show your app key.    </p>\n    <img src=\"images/download/attachments/49153754/appkey_new.png\" alt=\"images/download/attachments/49153754/appkey_new.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"600\">\n        <p>    </p>\n</img></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153754_Authentication-2-LeggedOAuth\">\n        <h2 class=\"heading \"><span>2-Legged OAuth</span></h2>\n    <p>If SSL is not available to the client application, MBS also provides secure authentication via 2-Legged OAuth. In this process, an authentication key and secret are used to sign each request made by your application to MBS. When the MBS server receives the request, the secret and the data sent in the request are used to calculate another signature. If the received and calculated signatures match, the request is processed.    </p>\n    <p>Over a non-SSL connection, OAuth is more secure than the application key approach, as the secret used to generate the signature is known only by the app and the MBS server; it is never sent over the network.    </p>\n    <p>Below is an example of an OAuth HTTP header:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Authorization: OAuth oauth_consumer_key=</code><code class=\"string\">&quot;0685bd9184jfhq22&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_token=</code><code class=\"string\">&quot;&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_signature_method=</code><code class=\"string\">&quot;HMAC-SHA1&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_signature=</code><code class=\"string\">&quot;wOJIO9A2W5mFwDgiDvZbTSMK%2FPY%3D&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_timestamp=</code><code class=\"string\">&quot;137131200&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_nonce=</code><code class=\"string\">&quot;4572616e48616d6d65724c61686176&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        oauth_version=</code><code class=\"string\">&quot;1.0&quot;</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p><strong class=\" \">To locate your OAuth consumer key and secret in Dashboard</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a> and select your application from the App menu.    </p>\n</li><li class=\" \">    <p>From the left-hand navigation, select <strong class=\" \">Cloud</strong> &gt;<strong class=\" \"> Configuration</strong>.    </p>\n</li><li class=\" \">    <p>On the <strong class=\" \">Keys</strong> tab, click <strong class=\" \">Show</strong> next to the <strong class=\" \">OAuth Consumer Key</strong> and <strong class=\" \">OAuth Secret</strong> labels.    </p>\n    <img src=\"images/download/attachments/49153754/oauthkeysecret_new.png\" alt=\"images/download/attachments/49153754/oauthkeysecret_new.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"600\">\n    </img></li></ol>    <div class=\"section section-3 \" id=\"src-49153754_Authentication-OAuthexample\">\n        <h3 class=\"heading \"><span>OAuth example</span></h3>\n    <p>Most OAuth libraries that support standard (3-Legged) OAuth&#x2014;such as those used by Facebook, Twitter, and others&#x2014;also supports 2-legged OAuth. The following is an example of making a 2-Legged OAuth request using Ruby. Provide your MBS OAuth consumer key and secret for the <tt class=\" \">consumer_key</tt> and <tt class=\" \">consumer_secret</tt> fields. Use an empty string (&quot;&quot;) as both the Access Token and Secret.    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;rubygems&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;oauth&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\"># make the consumer out of your secret and key</code></div>\n<div class=\"line\"><code class=\"plain\">consumer_key = </code><code class=\"string\">&quot;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">consumer_secret = </code><code class=\"string\">&quot;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">consumer = OAuth::Consumer.</code><code class=\"keyword\">new</code><code class=\"plain\">(consumer_key, consumer_secret, </code><code class=\"color2\">:site</code><code class=\"plain\"> =&gt; </code><code class=\"string\">&quot;http://api.cloud.appcelerator.com&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\"># make the access token from your consumer</code></div>\n<div class=\"line\"><code class=\"plain\">access_token = OAuth::AccessToken.</code><code class=\"keyword\">new</code><code class=\"plain\"> consumer</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\"># make a signed request!</code></div>\n<div class=\"line\"><code class=\"plain\">response = access_token.get(</code><code class=\"string\">&quot;/v1/places/search.json&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\"># show the response</code></div>\n<div class=\"line\"><code class=\"plain\">puts response.body</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153754_safe-id-QXV0aGVudGljYXRpb24tQWNjZXNzQ29udHJvbExpc3RzKEFDTHMp\">\n        <h2 class=\"heading \"><span>Access Control Lists (ACLs)</span></h2>\n    <p>Access Control Lists (ACLs) provide several APIs to implement access control lists for MBS objects. An access control list controls read and write access to MBS objects it&apos;s attached to. Please refer to <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/ACLs\">Access Control Lists</a> for more information.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153754\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Authentication"});