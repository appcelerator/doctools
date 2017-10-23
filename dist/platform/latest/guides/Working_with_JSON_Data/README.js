Ext.data.JsonP['Working_with_JSON_Data']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Working with JSON Data</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004905\" class=\"content\">\n                        <h1>Working with JSON Data</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-Built-inJSONfunctions\">Built-in JSON functions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-Methodscannotbestringified\">Methods cannot be stringified</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-ReceivingandparsingJSONdata\">Receiving and parsing JSON data</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-SendingJSONdata\">Sending JSON data</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-Hands-onPractice\">Hands-on Practice</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Working_with_JSON_Data-section-src-29004905_WorkingwithJSONData-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004905_WorkingwithJSONData-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this chapter, you will learn how to send and receive JSON data from a remote data source via the HTTPClient object.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004905_WorkingwithJSONData-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>The best data transport format for use with JavaScript (and hence Titanium) is JavaScript Object Notation, or <a class=\"external-link external-link\" href=\"http://json.org\" target=\"_blank\">JSON</a>. JSON is a great fit for JavaScript applications since it can very easily be serialized into and out of JavaScript Objects. Moreover, since JSON is such a terse transport format, it takes less less time and less bandwidth to transfer over the air, which can become important on low-speed data networks. For more on JSON, <a class=\"external-link external-link\" href=\"http://json.org\" target=\"_blank\">check out the official website</a>.    </p>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-Built-inJSONfunctions\">\n        <h3 class=\"heading \"><span>Built-in JSON functions</span></h3>\n    <p>Titanium has built-in support for JSON serialization in the <tt class=\" \">JSON</tt> namespace. The two functions provided in this namespace are:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">JSON.stringify()</tt> which takes a JavaScript object and converts it to a string.    </p>\n</li><li class=\" \">    <p><tt class=\" \">JSON.parse()</tt> which takes a JSON-formatted string and converts it to a JavaScript object    </p>\n</li></ul>    <p>(Remember that in JavaScript, arrays are objects. So these methods work with both arrays and objects.)    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var myObject = {</code></div>\n<div class=\"line\"><code class=\"plain\">\tfoo: </code><code class=\"string\">&apos;bar&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tstuff: [</code><code class=\"value\">1</code><code class=\"plain\">,</code><code class=\"value\">2</code><code class=\"plain\">,</code><code class=\"value\">3</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">//serialize</code></div>\n<div class=\"line\"><code class=\"plain\">var myObjectString = JSON.stringify(myObject);</code></div>\n<div class=\"line\"><code class=\"comments\">// returns &apos;{&quot;foo&quot;: &quot;bar&quot;,&quot;stuff&quot;: [1,2,3]}&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">//deserialize...</code></div>\n<div class=\"line\"><code class=\"plain\">var myNewObject = JSON.parse(myObjectString);</code></div>\n<div class=\"line\"><code class=\"comments\">// myNewObject.stuff[1] === 2</code></div>\n</div>\n    </div>\n    <p>If you have a server-side resource (web service) that has a JSON response format, you can very easily serialize that response inside HTTPClient&apos;s <tt class=\" \">onload</tt> function. The data returned from your web service will be stored as a property of the HTTPClient <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\">object</a>, so it is accessed and parsed like so:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">xhr.onload = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar myData = JSON.parse(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-Methodscannotbestringified\">\n        <h3 class=\"heading \"><span>Methods cannot be stringified</span></h3>\n    <p>JSON cannot represent methods. So, the <tt class=\" \">stringify()</tt> method will not support converting an object with methods to a JSON string. If you attempt to stringify an object that has methods, the function will return an empty string. Keep in mind that most native Titanium objects have methods. Attempting to stringify any of them will return an empty representation.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-ReceivingandparsingJSONdata\">\n        <h3 class=\"heading \"><span>Receiving and parsing JSON data</span></h3>\n    <p>You retrieve JSON data using the HTTPClient object. Within the <tt class=\" \">onload</tt> callback, <tt class=\" \">this.responseText</tt> contains the raw text response from the target URL. It is the property you should use when processing JSON or other plain text data.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var url = </code><code class=\"string\">&quot;http://example.com/json.txt&quot;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var json;</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">    onload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// parse the retrieved data, turning it into a JavaScript object</code></div>\n<div class=\"line\"><code class=\"plain\">    \tjson = JSON.parse(</code><code class=\"keyword\">this</code><code class=\"plain\">.responseText);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// ...</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-SendingJSONdata\">\n        <h3 class=\"heading \"><span>Sending JSON data</span></h3>\n    <p>The HTTPClient&apos;s <tt class=\" \">send()</tt> method automatically stringifies data for you. So, you don&apos;t need to explicitly take this action before submitting data in a POST payload. Then again, since <tt class=\" \">send()</tt> accepts null, dictionary, string, File object or Blob data, there&apos;s no harm in calling <tt class=\" \">JSON.stringify()</tt> on the data first. Should you need to send object data in a GET querystring, you will need to stringify data first. You&apos;ll probably need to URL encode the resulting string to safely pass it as a querystring parameter. Use the JavaScript <tt class=\" \">encodeURIComponent()</tt> function to do that.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var blogPost = {</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">&apos;My awesome blog&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbody: </code><code class=\"string\">&apos;Today I met Susy at the laundromat. Best day EVAR\\!&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">var xhr = Ti.Network.createHTTPClient({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonload: function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// handle the response</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">xhr.open(</code><code class=\"string\">&apos;POST&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;http://www.myblog.com/post.php&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// optional:</code></div>\n<div class=\"line\"><code class=\"comments\">// blogPost = JSON.stringify(blogPost);</code></div>\n<div class=\"line\"><code class=\"plain\">xhr.send(blogPost);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-Hands-onPractice\">\n        <h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n    <div class=\"section section-4 \" id=\"src-29004905_WorkingwithJSONData-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>In this activity, you will retrieve and parse JSON data and display the information in a TableView    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004905_WorkingwithJSONData-Resources\">\n        <h4 class=\"heading \"><span>Resources</span></h4>\n    <p>In this activity, you will retrieve a JSON-formatted file from <a class=\"external-link external-link\" href=\"https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt\" target=\"_blank\">https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt</a>. That file contains data formatted like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;fighters&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Muhammad Ali&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;nickname&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;The Greatest&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Chuck Liddell&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;nickname&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;The Iceman&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"comments\">// etc. </code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004905_WorkingwithJSONData-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>Create a new Titanium Mobile project.    </p>\n</li><li class=\" \">    <p>Replace the code in app.js with code that defines a single window containing a TableView.    </p>\n</li><li class=\" \">    <p>Add the code to retrieve the JSON data from the URL given above. When the data is successfully retrieved, parse it and populate the table. For each row:    </p>\n<ul class=\" \"><li class=\" \">    <p>Add a label with large, bold text listing the fighter&apos;s name. Position it at the top-left of the row.    </p>\n</li><li class=\" \">    <p>Add a label with smaller, normal text listing the fighter&apos;s nickname. Position it below the first label.    </p>\n</li><li class=\" \">    <p>Set the resulting data as the TableView&apos;s data to populate the table.    </p>\n</li></ul></li><li class=\" \">    <p>Add the code to handle a network error. Log the HTTP status code, the text retrieved, and any error message. Alert a simple message to the user.    </p>\n</li><li class=\" \">    <p>Set the timeout to 5 seconds.    </p>\n</li><li class=\" \">    <p>Build and test your app in the simulator/emulator.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004905_WorkingwithJSONData-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.HTTPClient\">Ti.Network.HTTPClient object</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004905_WorkingwithJSONData-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned how to send and receive JSON data from a remote data source via the HTTPClient object.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004905\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Working with JSON Data"});