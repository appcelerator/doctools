Ext.data.JsonP['Photo_Uploading_and_Resizing']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Photo Uploading and Resizing</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153851\" class=\"content\">\n                        <h1>Photo Uploading and Resizing</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Photo_Uploading_and_Resizing-section-src-49153851_PhotoUploadingandResizing-Customphotosizes\">Custom photo sizes</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Photo_Uploading_and_Resizing-section-src-49153851_PhotoUploadingandResizing-Synchronousphotouploading\">Synchronous photo uploading</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Photo_Uploading_and_Resizing-section-src-49153851_PhotoUploadingandResizing-Deprecatedbehavior\">Deprecated behavior</a>    </p>\n</li></ul>    <p>Mobile Backend Services provides a great amount of flexibility when creating photo objects, or adding photos to other objects.    </p>\n    <div class=\"section section-2 \" id=\"src-49153851_PhotoUploadingandResizing-Customphotosizes\">\n        <h2 class=\"heading \"><span>Custom photo sizes</span></h2>\n    <p>App developers can specify a custom set of photo sizes by specifying the <tt class=\" \">photo_sizes[&lt;name&gt;]=&lt;width&gt;x&lt;height&gt;</tt> parameter up to five times such as:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">photo_sizes[preview]=100x100</code><code class=\"preprocessor\">#</code></div>\n<div class=\"line\"><code class=\"plain\">photo_sizes[android]=800x480</code></div>\n<div class=\"line\"><code class=\"plain\">photo_sizes[iphone]=960x640</code></div>\n<div class=\"line\"><code class=\"plain\">photo_sizes[ipad]=1024x768</code></div>\n</div>\n    </div>\n    <p>To specify a size that results in a square image, give the same width and height along with a <tt class=\" \">#</tt> immediately after, as shown above.    </p>\n    <p>You may specify the <tt class=\" \">photo_sizes</tt> parameter when creating or updating a Photos object or when adding a photo with the Users or Places create or update method.    </p>\n    <p>The resized images are generated asynchronously, so the API or SDK call returns immediately with a response showing photo metadata:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b cookies.txt -c cookies.txt -F </code><code class=\"string\">&quot;photo=@photo.jpg&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[preview]=100x100#&quot;</code><code class=\"plain\"> -F </code></div>\n<div class=\"line\"><code class=\"string\">&quot;photo_sizes[android]=800x480&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[iphone]=960x640&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[ipad]=1024x768&quot;</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">http:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/photos/create.json?key=gKr9bfv4nOlfKkqyh4UoAxpPvDqBPrSE</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;showPhoto&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;photos&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4edc8af33ae7406bf7000003&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;filename&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;photo.jpg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;size&quot;</code><code class=\"plain\">: 584344,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;md5&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;589b8ad43ed20bf8e622d719642bc939&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:12:19+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:12:25+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;processed&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4ebb22bf3ae740077f000006&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Mike&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Goff&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-11-10T01:02:56+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:10:55+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;mike@appcelerator.com&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;content_type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;image/jpeg&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>Note that in the above response <tt class=\" \">processed=false</tt>. This indicates that the photo is still processing in the background. Once the photo has been processed, the <tt class=\" \">processed</tt> flag will be set to <tt class=\" \">true</tt> and the URLs to access the photo are shown:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b cookies.txt -c cookies.txt </code></div>\n<div class=\"line\"><code class=\"plain\">&quot;http:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/photos/show.json?key=aKgDjsrxM2wqL9fjhS1nnvgvnTlRDdJn&amp;photo_id=</code></div>\n<div class=\"line\"><code class=\"plain\">4edc8af33ae7406bf7000003&quot;  </code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;showPhoto&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;photos&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4eab39f7d3e986d677000001&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;filename&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;photo.jpg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;size&quot;</code><code class=\"plain\">: 584344,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;md5&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;589b8ad43ed20bf8e622d719642bc939&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-10-28T23:25:45+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-10-28T23:26:01+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;processed&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4ea9e22ad3e986ba69000002&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Mike&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Goff&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-10-27T22:58:52+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-10-27T23:15:36+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;mike@appcelerator.com&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;preview&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8af33ae7406bf7000004/photo_preview.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8af33ae7406bf7000004/photo_android.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;iphone&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8af33ae7406bf7000004/photo_iphone.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;ipad&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8af33ae7406bf7000004/photo_ipad.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;original&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8af33ae7406bf7000004/photo_original.jpg&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;content_type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;image/jpeg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153851_PhotoUploadingandResizing-Synchronousphotouploading\">\n        <h2 class=\"heading \"><span>Synchronous photo uploading</span></h2>\n    <p>You can also specify photo sizes to be processed synchronously during the create or update calls for photos and other objects with attached photos. This can be useful for immediately showing a thumbnail of the photo that was just uploaded. Specify <tt class=\" \">photo_sync_sizes[]=&lt;size name&gt;</tt> one or more times in the request. The response will contain URLs for the original photo, plus the size or sizes which were processed synchronously. The property <tt class=\" \">processed</tt> will be <tt class=\" \">false</tt> until all processing has been completed. This feature may be used with either the default photo sizes or custom photo sizes.    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b cookies.txt -c cookies.txt -F </code><code class=\"string\">&quot;photo=@photo.jpg&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[preview]=100x100#&quot;</code><code class=\"plain\"> -F </code></div>\n<div class=\"line\"><code class=\"string\">&quot;photo_sizes[android]=800x480&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[iphone]=960x640&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;photo_sizes[ipad]=1024x768&quot;</code><code class=\"plain\"> -F </code></div>\n<div class=\"line\"><code class=\"string\">&quot;photo_sync_sizes[]=preview&quot;</code><code class=\"plain\"> http:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/photos/</code></div>\n<div class=\"line\"><code class=\"plain\">create.json?key=aKgDjsrxM2wqL9fjhS1nnvgvnTlRDdJn</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;createPhoto&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;photos&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4edc8ff43ae7406bf7000008&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;filename&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;photo.jpg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;size&quot;</code><code class=\"plain\">: 584344,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;md5&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;589b8ad43ed20bf8e622d719642bc939&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:33:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:33:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;processed&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4ebb22bf3ae740077f000006&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Mike&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Goff&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-11-10T01:02:56+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:10:55+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;mike@appcelerator.com&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;preview&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_preview.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;original&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_original.jpg&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;content_type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;image/jpeg&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>After processing, all photo sizes will be available and <tt class=\" \">processed=true</tt> will be set.    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ curl -b cookies.txt -c cookies.txt </code></div>\n<div class=\"line\"><code class=\"plain\">&quot;http:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/photos/</code></div>\n<div class=\"line\"><code class=\"plain\">show.json?key=aKgDjsrxM2wqL9fjhS1nnvgvnTlRDdJn&amp;photo_id=4edc8ff43ae7406bf7000008&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;meta&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;code&quot;</code><code class=\"plain\">: 200,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;status&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;ok&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;method_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;showPhoto&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;photos&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">      {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4edc8ff43ae7406bf7000008&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;filename&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;photo.jpg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;size&quot;</code><code class=\"plain\">: 584344,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;md5&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;589b8ad43ed20bf8e622d719642bc939&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:33:41+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:33:43+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;processed&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;4ebb22bf3ae740077f000006&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;first_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Mike&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;last_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Goff&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;created_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-11-10T01:02:56+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;updated_at&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2011-12-05T09:10:55+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;mike@appcelerator.com&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;urls&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;preview&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_preview.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;android&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_android.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;iphone&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_iphone.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;ipad&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_ipad.jpg&quot;,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;original&quot;</code><code class=\"plain\">: &quot;http:</code><code class=\"comments\">//storage.appcelerator.com/6QoSiKlR7hUjhf4GEOVD1hyPlHxqsiGi/</code></div>\n<div class=\"line\"><code class=\"plain\">          photos/c9/39/4edc8ff53ae7406bf7000009/photo_original.jpg&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;content_type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;image/jpeg&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;exif&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;create_date&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;2010-06-21T02:19:20+0000&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;width&quot;</code><code class=\"plain\">: 1600,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;height&quot;</code><code class=\"plain\">: 1067,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;shutter_speed&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;1/60&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;make&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Canon&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">          </code><code class=\"string\">&quot;model&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Canon EOS 5D Mark II&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153851_PhotoUploadingandResizing-Deprecatedbehavior\">\n        <h2 class=\"heading \"><span>Deprecated behavior</span></h2>\n    <p>ACS applications used to create the following default photo sizes when a photo was created:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Size Name    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Max Width    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Max Height    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Aspect Ratio    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>square_75    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>75    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>75    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>square    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>thumb_100    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>100    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>67    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>original    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>small_240    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>240    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>160    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>original    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>medium_500    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>500    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>333    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>original    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>medium_640    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>640    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>427    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>original    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>large_1024    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>1024    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>683    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>original    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153851\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Photo Uploading and Resizing"});