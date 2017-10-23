Ext.data.JsonP['Authentication_Schemes']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Authentication Schemes</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-43302486\" class=\"content\">\n                        <h1>Authentication Schemes</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication_Schemes-section-src-43302486_AuthenticationSchemes-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication_Schemes-section-src-43302486_AuthenticationSchemes-HTTPbasicauthentication\">HTTP basic authentication</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication_Schemes-section-src-43302486_AuthenticationSchemes-HTTPheaderauthentication\">HTTP header authentication</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication_Schemes-section-src-43302486_AuthenticationSchemes-LDAP\">LDAP</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Authentication_Schemes-section-src-43302486_AuthenticationSchemes-Customauthentication\">Custom authentication</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43302486_AuthenticationSchemes-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>An API Builder project provides different types of security mechanisms to authenticate requests. Typically, you want to restrict which client applications have access to your APIs, and you want the client to prove it has permission to access your API Builder application&apos;s APIs.    </p>\n    <p>By default, a new API Builder project uses HTTP basic authentication, where the client must pass the API key in the Authorization header for each request. A new API Builder project contains two generated API keys, <tt class=\" \">apikey_development</tt> and <tt class=\" \">apikey_production</tt>, located in the <tt class=\" \">conf/default.js</tt> file. The <tt class=\" \">apikey_development</tt> key contains the key used to test your project locally, while <tt class=\" \">apikey_production</tt> is used to make requests to your project when it is published. You may change the values for these keys but make sure you generate a sufficiently unique value and do not share these keys with other API projects as they control access to your APIs. These keys should only be used by one API Builder project.    </p>\n    <p>To change the authentication mechanism, open the <tt class=\" \">conf/default.js</tt> file and change the <tt class=\" \">APIKeyAuthType</tt> key to one of the following:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \"><tt class=\" \">none</tt></strong>: No authentication. The client does not need any authentication to access these APIs. In this case, all client requests are accepted without any security. Use the value <tt class=\" \">none</tt> for the key <tt class=\" \">APIKeyAuthType</tt>.    </p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">basic</tt></strong>: Use HTTP basic authentication (default). The client uses the HTTP <tt class=\" \">Authorization</tt> header to send an encoded version of the API Key using the <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Basic_access_authentication\" target=\"_blank\">HTTP Basic Authentication</a> standard. The username part is the value of the API Key and the password part should be blank (empty string). Use the value <tt class=\" \">basic</tt> for the key <tt class=\" \">APIKeyAuthType</tt>.    </p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">apikey</tt></strong>: Use HTTP header authentication.The client sets the HTTP <tt class=\" \">APIKey</tt> header to the value of the API Key. In this scenario, the server must only support HTTPS only endpoints so the key is not passed in plain text. Use the value <tt class=\" \">apikey</tt> for the key <tt class=\" \">APIKeyAuthType</tt>.    </p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">ldap</tt></strong> (since API Builder (Arrow) 1.2.x): Use LDAP plugin for authentication. You must also set the <tt class=\" \">ldap</tt> key to an object containing settings for the LDAP configuration. The client uses the HTTP <tt class=\" \">Authorization</tt> header to send an encoded version of the API Key using the <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Basic_access_authentication\" target=\"_blank\">HTTP Basic Authentication</a> standard. The username and password will be sent to the configured LDAP server for authentication. Use the value <tt class=\" \">ldap</tt> for the key <tt class=\" \">APIKeyAuthType</tt>.    </p>\n</li><li class=\" \">    <p><strong class=\" \">plugin</strong>: Use a custom or third-party authentication mechanism. Using the plugin strategy, you can extend the authentication to use any third-party or custom API authentication. To build your own plugin, set the value <tt class=\" \">plugin</tt> for the key <tt class=\" \">APIKeyAuthType</tt> to use this strategy and then set the key <tt class=\" \">APIKeyAuthPlugin</tt> to the location of your plugin. The location can be a file path (relative to the current work directory of your server project directory) or the name of the module package available in the standard <tt class=\" \">node_modules</tt> location.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Separate API keys are configured for each environment. For example, separate API keys are configured for the development environment and for the production environment. The API key for the current environment must be used for <tt class=\" \">basic</tt> and <tt class=\" \">apikey</tt> authentication. The development API key must be used for authentication in the development environment and the production API key must be used for authentication in the production environment.    </p>\n    </div>\n        <p>The following describes the authentication mechanisms.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43302486_AuthenticationSchemes-HTTPbasicauthentication\">\n        <h2 class=\"heading \"><span>HTTP basic authentication</span></h2>\n    <p>In HTTP basic access authentication, the client needs to send a username and password, sent as a base64-encoded string &quot;<tt class=\" \">&lt;username&gt;:&lt;password&gt;</tt>&quot;, in the Authorization header of the HTTP request, for example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">GET api/model HTTP/</code><code class=\"value\">1.0</code></div>\n<div class=\"line\"><code class=\"plain\">Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code></div>\n</div>\n    </div>\n    <p>For API Builder applications, the user name is the API key and the password field is left blank. For a Titanium application, you can construct the header and request as follows:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function onLoad() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Loaded: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    onerror: function onError() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Error: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&quot;GET&quot;</code><code class=\"plain\">, REQUEST_URL);</code></div>\n<div class=\"line\"><code class=\"plain\">var authstr = </code><code class=\"string\">&apos;Basic &apos;</code><code class=\"plain\"> + Ti.Utils.base64encode(API_KEY + </code><code class=\"string\">&apos;:&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.setRequestHeader(</code><code class=\"string\">&quot;Authorization&quot;</code><code class=\"plain\">, authstr);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43302486_AuthenticationSchemes-HTTPheaderauthentication\">\n        <h2 class=\"heading \"><span>HTTP header authentication</span></h2>\n    <p>In HTTP header authentication, the client sends the API key in a custom APIKey header. The server must only support HTTPS requests, so the key is not sent as plain text (unencrypted).    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function onLoad() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Loaded: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    onerror: function onError() {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&quot;Error: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.status + </code><code class=\"string\">&quot;: &quot;</code><code class=\"plain\"> + </code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&quot;GET&quot;</code><code class=\"plain\">, REQUEST_URL);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.setRequestHeader(</code><code class=\"string\">&quot;APIKey&quot;</code><code class=\"plain\">, API_KEY);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send();</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43302486_AuthenticationSchemes-LDAP\">\n        <h2 class=\"heading \"><span>LDAP</span></h2>\n    <p>Starting with API Builder 1.2.x, you may use the LDAP plugin to authenticate requests. The client application will need to use HTTP basic authentication to send the username and password in the HTTP authorization header to the API Builder application.    </p>\n    <p>To use the plugin, you need to pass your LDAP settings to the <tt class=\" \">ldap</tt> object in the <tt class=\" \">conf/default.js</tt> file. Define the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Optional    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>url    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>No    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>LDAP URL to connect to.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">adminDn</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>No    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Distinguished name (DN) of the user that is allowed to connect to the LDAP database and read user and group data.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">adminPassword</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Password for the directory administrator.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">searchBase</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>No    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The base DN to search for users.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">searchFilter</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>No    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>LDAP search filter to find a user.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">groupSearchBase</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The base DN to search for groups.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">groupSearchFilter</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>LDAP search filter to find a group.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">cache</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set to true to cache up to 100 sessions for five minutes. Default is false.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">tlsOptions</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Additional options to pass to the <a class=\"external-link external-link\" href=\"https://nodejs.org/api/tls.html#tls_tls_connect_options_callback\" target=\"_blank\">Node.js tls.connect() callback</a>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p><strong class=\" \">Example:</strong>    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">conf/default.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"conf/default.js\">\n<div class=\"line\"><code class=\"plain\">&#xA0;module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthType: </code><code class=\"string\">&apos;ldap&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    ldap: {</code></div>\n<div class=\"line\"><code class=\"plain\">        url: </code><code class=\"string\">&apos;ldap://ldap.foo.com:389&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        adminDn: </code><code class=\"string\">&apos;cn=read-only-admin,dc=example,dc=com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        adminPassword: </code><code class=\"string\">&apos;password&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        searchBase: </code><code class=\"string\">&apos;dc=example,dc=com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        searchFilter: </code><code class=\"string\">&apos;(uid={{username}})&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43302486_AuthenticationSchemes-Customauthentication\">\n        <h2 class=\"heading \"><span>Custom authentication</span></h2>\n    <p>To use a custom authentication mechanism, you need to create a CommonJS module that exposes a plugin class and implements the following methods. All methods are optional, but to validate requests, you need to implement the <tt class=\" \">validateRequest</tt> method, either the synchronous version or asynchronous version.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Method Signature    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Plugin(server)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Constructor. Passed the server instance. The passed server instance has not registered any models or connectors, and has not been started.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.matchURL(request): Boolean</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Determines if the URL should be authenticated by the plugin. Return true if the plugin should handle the validation else return false.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.validateRequest(request, response): Boolean</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Validates the request synchronously. Return a Boolean value indicating if the request passed validation (true) or not (false). Do not implement if you implemented the asynchronous version of this method.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.validateRequest(request, response, callback): void</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Validates the request asynchronously. Pass the callback an Error as its first argument (or null if successful) and a Boolean indicating if validation was a successful or not as its second argument. Do not implement if you implemented the synchronous version of this method.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.applyCredentialsForTest(options): void</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Used by the API Doc tab in the API Builder Console to allow the plugin to apply any authentication headers to the request before it is made. The <tt class=\" \">options</tt> object is the same <tt class=\" \">options</tt> object passed to the <a class=\"external-link external-link\" href=\"https://www.npmjs.com/package/request\" target=\"_blank\">request library</a>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <pre class=\"highlight javascript \">Plugin.prototype.applyRequestsForTest(response, body): Object</pre>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">Used by the API Doc tab in the API Builder Console to allow the plugin to modify the authentication response headers, body, etc.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">Plugin.prototype.getSwaggerSecurity</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Used by Swagger generation to describe the <a class=\"external-link external-link\" href=\"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-definitions-object\" target=\"_blank\">Swagger Definitions Object</a> and the <a class=\"external-link external-link\" href=\"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#security-requirement-object\" target=\"_blank\">Swagger Requirement Object</a> authentication mechanism.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>In the <tt class=\" \">conf/default.js</tt> file, set the     <span style=\"color: #343438;\">\n<tt class=\" \">APIKeyAuthPlugin</tt> key to the location of the plugin file or to the name of the node module if you specify it as a dependency in the <tt class=\" \">package.json</tt> file.    </span>\n    </p>\n    <p>For example, if your client applications send a custom header, called <tt class=\" \">X-Secret</tt>, for each request and you want to check the value sent with the request against one stored in your configuration file, you can use the plugin below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">conf/default.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"conf/default.js\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthType: </code><code class=\"string\">&apos;plugin&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthPlugin: </code><code class=\"string\">&apos;./lib/plugin.js&apos;</code><code class=\"plain\">,    </code></div>\n<div class=\"line\"><code class=\"plain\">    secret: </code><code class=\"string\">&apos;secret&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">lib/plugin.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"lib/plugin.js\">\n<div class=\"line\"><code class=\"comments\">// Constructor to get a reference to the config object</code></div>\n<div class=\"line\"><code class=\"plain\">function Plugin(server) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.config = server.config || {secret: </code><code class=\"keyword\">null</code><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Only validate requests to /api/foo</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.matchURL = function(request) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> request.url.indexOf(</code><code class=\"string\">&apos;/api/foo&apos;</code><code class=\"plain\">) !== </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Check if the request has the X-Secret header and its value matches the config file</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.validateRequest = function(request, response) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (request.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] &amp;&amp; request.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] === </code><code class=\"keyword\">this</code><code class=\"plain\">.config.secret) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Add the X-Secret header for internal requests</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.applyCredentialsForTest = function(options) {</code></div>\n<div class=\"line\"><code class=\"plain\">    options.headers[</code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">] = </code><code class=\"keyword\">this</code><code class=\"plain\">.config.secret;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Do not process the response</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.applyResponseForTest = function(response, body) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> body;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Describe the x-security header for the Swagger 2.0 feed</code></div>\n<div class=\"line\"><code class=\"plain\">Plugin.prototype.getSwaggerSecurity = function () {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">return</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tsecurityDefinitions: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tapp_auth: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\ttype: </code><code class=\"string\">&apos;apiKey&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tname: </code><code class=\"string\">&apos;x-secret&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tin: </code><code class=\"string\">&apos;header&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tdescription: </code><code class=\"string\">&apos;Require authorized access to API&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tsecurity: [{</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tapp_auth: []</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}]</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">module.exports = Plugin;</code></div>\n</div>\n    </div>\n    <p>To test the plugin, add the <tt class=\" \">-H &apos;X-Secret: secret&apos;</tt> command-line option to the cURL request.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl </code><code class=\"string\">&quot;http://127.0.0.1:8080/api/foo&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;com.appcelerator.api.unauthorized&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;message&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;Unauthorized&quot;</code><code class=\"plain\">,</code><code class=\"string\">&quot;success&quot;</code><code class=\"plain\">:</code><code class=\"keyword\">false</code><code class=\"plain\">} </code></div>\n<div class=\"line\"><code class=\"plain\">$ curl </code><code class=\"string\">&quot;http://127.0.0.1:8080/api/foo&quot;</code><code class=\"plain\"> -H </code><code class=\"string\">&apos;X-Secret: secret&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code><code class=\"string\">&quot;success&quot;</code><code class=\"plain\">:</code><code class=\"keyword\">true</code><code class=\"plain\">,</code><code class=\"string\">&quot;request-id&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;0d2141f7-57ea-4c78-82cf-b6fa9497c16a&quot;</code><code class=\"plain\">, </code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;bar&quot;</code><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43302486\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Authentication Schemes"});