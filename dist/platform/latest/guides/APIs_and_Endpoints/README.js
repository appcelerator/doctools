Ext.data.JsonP['APIs_and_Endpoints']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>APIs and Endpoints</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49158864\" class=\"content\">\n                        <h1>APIs and Endpoints</h1>\n    <p>    <span style=\"color: #000000;\">\nAPIs are defined as <a class=\"external-link external-link\" href=\"http://swagger.io/specification/\" target=\"_blank\">    <span style=\"color: #1155cc;\">\nSwagger 2.0    </span>\n</a> documents which can contain one or more Endpoint definitions. The API swagger document must be formatted as JSON and contained within the <tt class=\" \">/endpoints</tt> directory of your app.     </span>\n    </p>\n    <p>    <span style=\"color: #000000;\">\nWhen API Builder reads these API swagger definitions, it will create the specified routes for each Endpoint. The implementation of the business logic for each Endpoint is handled by the Flow associated with that Endpoint.    </span>\n    <span style=\"color: #000000;\">\n This is delegated to Flows which are specified on a per-Endpoint level.    </span>\n    </p>\n    <p>    <span style=\"color: #000000;\">\nAPIs have the following extensions to the swagger specification:    </span>\n    </p>\n    <p>    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nProperty    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nDescription    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nRequired    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nType    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nDefault    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nExample    </span>\n    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nx-enabled    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nIf the API should be bound to the app on load.    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nNo    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nobject    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">{ &quot;enabled&quot;: true }</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">{ &quot;enabled&quot;: false }</tt>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nx-flow    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nThe name of the Flow to be executed when the endpoint is hit.     </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nYes    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <span style=\"color: #000000;\">\nstring    </span>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">&quot;greetflow&quot;</tt><tt class=\" \"/>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-2 \" id=\"src-49158864_APIsandEndpoints-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <p>    <span style=\"color: #000000;\">\nThis example API below is similar to the one that comes with every API Builder Project. It contains an Endpoint which takes a username, invokes the flow called &#x201C;greetflow&#x201D;, and returns a greeting. However, since it has an x-enabled flag set, the Endpoint will be disabled, and no requests will be able to be made to it.    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;swagger&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2.0&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;info&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Greeting functions&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;version&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;1.0.0&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;title&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Greeting API&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;x-enabled&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;enabled&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;paths&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;/greet&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;get&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;x-flow&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;greetflow&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;consumes&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;application/json&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">         ],</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;operationId&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Greet&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;parameters&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">           {</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;The username&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;in&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;query&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;required&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;string&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">           }</code></div>\n<div class=\"line\"><code class=\"plain\">         ],</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;produces&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;application/json&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">         ],</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;responses&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;200&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;greeting&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;schema&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">               </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;string&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">             }</code></div>\n<div class=\"line\"><code class=\"plain\">           },</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;400&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;description&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;bad request&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">             </code><code class=\"string\">&quot;schema&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">               </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;string&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">             }</code></div>\n<div class=\"line\"><code class=\"plain\">           }</code></div>\n<div class=\"line\"><code class=\"plain\">         },</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;summary&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Greet a user&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">         </code><code class=\"string\">&quot;tags&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;helloworld&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">         ]</code></div>\n<div class=\"line\"><code class=\"plain\">       }</code></div>\n<div class=\"line\"><code class=\"plain\">     }</code></div>\n<div class=\"line\"><code class=\"plain\">   }   </code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49158864\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"APIs and Endpoints"});