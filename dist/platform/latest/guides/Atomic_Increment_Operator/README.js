Ext.data.JsonP['Atomic_Increment_Operator']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Atomic Increment Operator</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153858\" class=\"content\">\n                        <h1>Atomic Increment Operator</h1>\n    <p>Mobile Backend Services supports the Mongo <tt class=\" \">$inc</tt> atomic increment operator.    </p>\n    <div class=\"section section-2 \" id=\"src-49153858_safe-id-QXRvbWljSW5jcmVtZW50T3BlcmF0b3ItJGluYw\">\n        <h2 class=\"heading \"><span>$inc</span></h2>\n    <p>You can use <tt class=\" \">$inc</tt> to increment (or decrement) a <a class=\"document-link \" href=\"#!/guide/Custom_Objects_and_Fields\">custom field</a> by a specified value in a single update operation.    </p>\n<ul class=\" \"><li class=\" \">    <p>The operator accepts positive and negative increment amounts    </p>\n</li><li class=\" \">    <p>It can only be applied to a single field per method call.    </p>\n</li></ul>    <p><tt class=\" \">$inc</tt> is specified with the following form, where <tt class=\" \">fieldName</tt> is the name of the field to update and <tt class=\" \">value</tt> is a positive (or negative) number to increment (or decrement) <tt class=\" \">fieldName</tt> by:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"string\">&quot;fieldName&quot;</code><code class=\"plain\">: { </code><code class=\"string\">&quot;$inc:&quot;</code><code class=\"plain\"> value}</code></div>\n</div>\n    </div>\n    <p>The operator must be enclosed quotes, as shown above. The following methods support the <tt class=\" \">$inc</tt> operator:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Checkins-method-update\">Checkins.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/CustomObjects-method-update\">CustomObjects.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Events-method-update\">Events.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Files-method-update\">Files.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/PhotoCollections-method-update\">PhotoCollections.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Photos-method-update\">Photos.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Places-method-update\">Places.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Posts-method-update\">Posts.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Reviews-method-update\">Reviews.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Users-method-update\">Users.update</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Statuses-method-update\">Statuses.update</a>    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-49153858_AtomicIncrementOperator-Examples\">\n        <h3 class=\"heading \"><span>Examples</span></h3>\n    <p>The following example increments the <tt class=\" \">score</tt> custom field by 10 in a <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/CustomObjects\">CustomObjects</a> update to a custom object called <tt class=\" \">family</tt>:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b c.txt -c c.txt -X PUT -F </code><code class=\"string\">&quot;id=511117915554f74313000009&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;fields={&quot;</code><code class=\"plain\">favorite</code><code class=\"string\">&quot;:&quot;</code><code class=\"plain\">play xbox 360&quot;, </code></div>\n<div class=\"line\"><code class=\"string\">&quot;pet&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;shark&quot;</code><code class=\"plain\"> ,</code><code class=\"string\">&quot;score&quot;</code><code class=\"plain\">:{</code><code class=\"string\">&apos;$inc&apos;</code><code class=\"plain\">:10}}&quot; </code></div>\n<div class=\"line\"><code class=\"string\">&quot;https://api.cloud.appcelerator.com/v1/objects/family/update.json?key=TENIhpXtjFbkBbztvfZMwnciOjE9aHjd&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;updateCustomObject&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;family&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;family_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ACS&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;score&quot;</code><code class=\"plain\">: 10,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;age&quot;</code><code class=\"plain\">: 40,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;cars&quot;</code><code class=\"plain\">: 1,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;favorite&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;play xbox 360&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;pet&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;shark&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511117915554f74313000009&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:30:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:30:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511117905554f74313000003&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Gal&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:30:40+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:30:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;external_accounts&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">          ],</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;confirmed_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:30:40+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice@gal.com&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;admin&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>The following example decrements the <tt class=\" \">score</tt> custom field by 20 in a <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Checkins\">Checkins</a> update:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b c.txt -c c.txt -X PUT -F </code><code class=\"string\">&quot;checkin_id=511111945554f742d300000b&quot;</code><code class=\"plain\"> -F </code></div>\n<div class=\"line\"><code class=\"string\">&quot;custom_fields={&quot;</code><code class=\"plain\">favorite</code><code class=\"string\">&quot;:&quot;</code><code class=\"plain\">play xbox 360</code><code class=\"string\">&quot;, &quot;</code><code class=\"plain\">pet</code><code class=\"string\">&quot;:&quot;</code><code class=\"plain\">shark</code><code class=\"string\">&quot; ,&quot;</code><code class=\"plain\">score</code><code class=\"string\">&quot;:{&apos;$inc&apos;:-20}}&quot;</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"string\">&quot;https://api.cloud.appcelerator.com/v1/checkins/update.json?key=TENIhpXtjFbkBbztvfZMwnciOjE9aHjd&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;updateCheckin&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;checkins&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511111945554f742d300000b&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:08+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:08+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;place&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511111935554f742d3000009&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Maya Restaurant&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:07+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:07+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;address&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;303 2nd Street&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;city&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;San Francisco&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;state&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;CA&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;country&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;United States&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;phone_number&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;(415) 543-2928&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;latitude&quot;</code><code class=\"plain\">: 37.784732,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;longitude&quot;</code><code class=\"plain\">: -122.395441,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;google_cid&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;7106049823222705125&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511111925554f742d3000003&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Gal&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:06+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:08+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;external_accounts&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">            ],</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;confirmed_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:06+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice@gal.com&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;admin&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">          }</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;511111925554f742d3000003&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Gal&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:06+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:08+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;external_accounts&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">          ],</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;confirmed_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2013-02-05T14:05:06+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;alice@gal.com&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;admin&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;false&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;custom_fields&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;family_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ACS&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;score&quot;</code><code class=\"plain\">: 15,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;age&quot;</code><code class=\"plain\">: 40,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;cars&quot;</code><code class=\"plain\">: 1,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;favorite&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;play xbox 360&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;pet&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;shark&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>If you apply $inc to multiple fields in one Update call, you will get an error:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b c.txt -c c.txt -X PUT -F </code><code class=\"string\">&quot;checkin_id=511111945554f742d300000b&quot;</code><code class=\"plain\"> -F </code></div>\n<div class=\"line\"><code class=\"string\">&quot;custom_fields={&quot;</code><code class=\"plain\">favorite</code><code class=\"string\">&quot;:&quot;</code><code class=\"plain\">play xbox 360</code><code class=\"string\">&quot;, &quot;</code><code class=\"plain\">pet</code><code class=\"string\">&quot;:&quot;</code><code class=\"plain\">shark</code><code class=\"string\">&quot; ,&quot;</code><code class=\"plain\">score</code><code class=\"string\">&quot;:{$inc:10}, &quot;</code><code class=\"plain\">age</code><code class=\"string\">&quot;:{$inc:10}}&quot;</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"string\">&quot;http://api.cloud.appcelerator.com/v1/checkins/update.json?key=HSejkGE9ghavAelMJv7bZYNM5HyMhqYq&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;fail&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 400,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;message&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;$inc operation only support to increase one field once.&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;updateCheckin&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153858\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Atomic Increment Operator"});