Ext.data.JsonP['Nodes_-_Model_Delete']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Nodes - Model Delete</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49158436\" class=\"content\">\n                        <h1>Nodes - Model Delete</h1>\n    <p>This document describes model delete and provides instance configuration and parameters information.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ModelDelete    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A Model specific node. Invokes the Delete API on a specified model and returns the response.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>    </p>\n    <div class=\"section section-2 \" id=\"src-49158436_Nodes-ModelDelete-Instanceconfiguration\">\n        <h2 class=\"heading \"><span>Instance configuration</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Property    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Required    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Type    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>model    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The name of the model of which to invoke the Delete API.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>yes    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49158436_Nodes-ModelDelete-Instanceparameters\">\n        <h2 class=\"heading \"><span>Instance parameters</span></h2>\n    <p>These are all specified by the chosen model.    </p>\n    <div class=\"section section-3 \" id=\"src-49158436_Nodes-ModelDelete-Example\">\n        <h3 class=\"heading \"><span>Example</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&#xA0;</code><code class=\"string\">&quot;model.delete&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ModelDelete&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;config&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;model&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;appc.arrowdb/acl&quot;</code></div>\n<div class=\"line\"><code class=\"plain\"> },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;parameters&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">   {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;value&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$.params.id|0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   }</code></div>\n<div class=\"line\"><code class=\"plain\"> ],</code></div>\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;context&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">     </code><code class=\"string\">&quot;$|0&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;model&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">   },</code></div>\n<div class=\"line\"><code class=\"plain\">   </code><code class=\"string\">&quot;routes&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">     {</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;conditions&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">         {</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$._deleted|0&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">           </code><code class=\"string\">&quot;eq&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">         }</code></div>\n<div class=\"line\"><code class=\"plain\">       ],</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;next&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;response.success&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">     },</code></div>\n<div class=\"line\"><code class=\"plain\">     {</code></div>\n<div class=\"line\"><code class=\"plain\">       </code><code class=\"string\">&quot;next&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;response.error.notfound&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">     }</code></div>\n<div class=\"line\"><code class=\"plain\">   ]</code></div>\n<div class=\"line\"><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49158436\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Nodes - Model Delete"});