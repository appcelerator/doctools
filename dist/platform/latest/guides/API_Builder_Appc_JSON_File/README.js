Ext.data.JsonP['API_Builder_Appc_JSON_File']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>API Builder Appc JSON File</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153259\" class=\"content\">\n                        <h1>API Builder Appc JSON File</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The content on page is for the beta release of API Builder 1.10.0. You may find some information is either missing, incomplete or in general draft state.    </p>\n    </div>\n        <p>By default, each project includes a configuration file, in JSON format, called <tt class=\" \">appc.json</tt> located in the project&apos;s top-level folder. The settings in the file tell the Appcelerator CLI and API Runtime Services the nature of the project, which components are required by the project, and any special deployment settings.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">appc.json</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"appc.json\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;api&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;group&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;arrow&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;dependencies&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;connector/appc.arrowdb&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;*&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;connector/appc.composite&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;*&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;cloud&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Dev&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;minimum&quot;</code><code class=\"plain\">: 1,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;maximum&quot;</code><code class=\"plain\">: 1,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;maxqueuesize&quot;</code><code class=\"plain\">: 50,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;environment&quot;</code><code class=\"plain\">: {},</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;cname&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">null</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;certificate&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">null</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153259_APIBuilderAppcJSONFile-Cloud\">\n        <h2 class=\"heading \"><span>Cloud</span></h2>\n    <p>The cloud object contains key-value pairs to configure API Runtime Services deployment settings. Instead of running a sequence of <tt class=\" \">appc cloud</tt> commands, define the following keys:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Key    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>certificate    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Specify the path to the custom SSL certificate to use for HTTPS requests.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>container    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sets the container size to use. Value can either be <tt class=\" \">Dev</tt>, <tt class=\" \">Small</tt>, <tt class=\" \">Medium</tt>, <tt class=\" \">Large</tt> or <tt class=\" \">Xlarge</tt>. The default value is <tt class=\" \">Dev</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>domain    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Set domain binding for the application to the specified domain name. A domain record must exist for the specified domain name, pointing to the application&apos;s `cloud.appcelerator.com` URL. Do not specify the protocol, that is, do not add `http://` or `https://`, when setting this parameter.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>domainPath    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Specifies a URL path for routing. Use this parameter when setting more than one application to the same domain name. You must also set the domain key.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>environment    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Object containing key-value pairs of environment variables to set for the application, where the key is the variable name and the value is the value to set.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>maximum    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sets the maximum number of server containers that can be used when scaling the application. The default value is <tt class=\" \">1</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>maxqueuesize    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sets the maximum number of queued requests for autoscaling to occur. API Runtime Services will increase the number of containers if the queue is too high for at least one minute. The default value is <tt class=\" \">50</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>minimum    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Sets the minimum number of server containers to use. The default value is <tt class=\" \">1</tt>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153259_APIBuilderAppcJSONFile-Dependencies\">\n        <h2 class=\"heading \"><span>Dependencies</span></h2>\n    <p>The dependencies object contains key-value pairs of components required by the project. The key is the name of the component and the value is the version of the component. By default, API Builder automatically adds the dependencies. You should not need to change the value unless you are removing a component from the project.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153259_APIBuilderAppcJSONFile-Type\">\n        <h2 class=\"heading \"><span>Type</span></h2>\n    <p>The type key is the project type. Values can be <tt class=\" \">api</tt>, <tt class=\" \">block</tt>, <tt class=\" \">connector</tt>, or <tt class=\" \">model</tt>. By default, API Builder sets this property when you generate a new project. You should not need to change the value.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153259\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder Appc JSON File"});