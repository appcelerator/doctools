Ext.data.JsonP['Add_a_Connector']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Add a Connector</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49153269\" class=\"content\">\n                        <h1>Add a Connector</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Searchforconnectors\">Search for connectors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Installaconnector\">Install a connector</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Configuretheconnector\">Configure the connector</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-DisableAPIendpoints\">Disable API endpoints</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Usetheconnector\">Use the connector</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Add_a_Connector-section-src-49153269_AddaConnector-Removeaconnector\">Remove a connector</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Connectors give your applications the ability to access external data from different sources, such as from a database or in the cloud. To add a Connector:    </p>\n<ol class=\" \"><li class=\" \">    <p>Install the Connector.    </p>\n</li><li class=\" \">    <p>Configure the Connector.    </p>\n</li><li class=\" \">    <p>Use the Connector.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Searchforconnectors\">\n        <h2 class=\"heading \"><span>Search for connectors</span></h2>\n    <p>To see an available list of Connectors, either use the <tt class=\" \">appc search</tt> command or go to the <a class=\"external-link external-link\" href=\"https://software.appcelerator.com/\" target=\"_blank\">Appcelerator Marketplace</a> to search for connectors.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ appc search connector</code></div>\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version </code><code class=\"value\">0.2</code><code class=\"plain\">.</code><code class=\"value\">230</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2014</code><code class=\"plain\">-</code><code class=\"value\">2015</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">NAME                      VERSION  DESCRIPTION                            </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.arrowdb    </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">64</code><code class=\"plain\">   ArrowDB connector                      </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.azure      </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">11</code><code class=\"plain\">   Provides access to Azure Storage Tables</code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.composite  </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">29</code><code class=\"plain\">   Composite connector                    </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.dashboard  </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">7</code><code class=\"plain\">    Connect to Appcelerator Dashboard      </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.jwplayer   </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">5</code><code class=\"plain\">    JWPlayer connector                     </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.mongo      </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">37</code><code class=\"plain\">   MongoDB connector                      </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.mssql      </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">33</code><code class=\"plain\">   MSSQL connector                        </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.mysql      </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">43</code><code class=\"plain\">   MySQL connector                        </code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.salesforce </code><code class=\"value\">1.0</code><code class=\"plain\">.</code><code class=\"value\">37</code><code class=\"plain\">   Salesforce connector</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Installaconnector\">\n        <h2 class=\"heading \"><span>Install a connector</span></h2>\n    <p>To install a connector, execute the <tt class=\" \">appc install connector/&lt;CONNECTOR_NAME&gt;</tt> command from the project&apos;s directory. The command downloads and installs the connector to the <tt class=\" \">node_modules/connector</tt> directory, updates the <tt class=\" \">appc.json</tt> file, and creates a connector configuration file in the project&apos;s <tt class=\" \">conf</tt> directory.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ appc install connector/appc.mysql</code></div>\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version </code><code class=\"value\">0.2</code><code class=\"plain\">.</code><code class=\"value\">230</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2014</code><code class=\"plain\">-</code><code class=\"value\">2015</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Installing dependencies... &lt;APIBuilderProject&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">Checking </code><code class=\"keyword\">for</code><code class=\"plain\"> </code><code class=\"value\">1</code><code class=\"plain\"> module: connector/appc.mysql</code></div>\n<div class=\"line\"><code class=\"plain\">Fetching connector/appc.mysql</code><code class=\"color1\">@1</code><code class=\"plain\">.0.</code><code class=\"value\">43</code></div>\n<div class=\"line\"><code class=\"plain\">Installed </code><code class=\"value\">1</code><code class=\"plain\"> module</code></div>\n<div class=\"line\"><code class=\"plain\">connector/appc.mysql provided a </code><code class=\"keyword\">default</code><code class=\"plain\"> configuration example which was written to conf/appc.mysql.</code><code class=\"keyword\">default</code><code class=\"plain\">.js</code></div>\n<div class=\"line\"><code class=\"plain\">You must update the config file located in ./&lt;APIBuilderProject&gt;/conf/appc.mysql.</code><code class=\"keyword\">default</code><code class=\"plain\">.js before you can use it!</code></div>\n<div class=\"line\"><code class=\"plain\">Installed:  connector/appc.mysql</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Configuretheconnector\">\n        <h2 class=\"heading \"><span>Configure the connector</span></h2>\n    <p>Depending on the connector you installed, you may need to modify the configuration settings of the connector. Open the project&apos;s <tt class=\" \">conf/&lt;CONNECTOR_NAME&gt;.js</tt> file to modify its settings. Some connectors have multiple files for different deployment environments, such as the <tt class=\" \">appc.arrowdb</tt> connector. For example, the MySQL connector&apos;s configuration file contains keys for you to define the database host URL, port number, admin user, admin password, and database name as well as additional database access settings.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">conf/appc.mysql.default.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"conf/appc.mysql.default.js\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    connectors: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;appc.mysql&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            connectionPooling: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            connectionLimit: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            database: </code><code class=\"string\">&apos;test&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            user: </code><code class=\"string\">&apos;root&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            password: </code><code class=\"string\">&apos;&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            host: </code><code class=\"string\">&apos;localhost&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            port: </code><code class=\"value\">3306</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            generateModelsFromSchema: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            modelAutogen: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153269_AddaConnector-DisableAPIendpoints\">\n        <h3 class=\"heading \"><span>Disable API endpoints</span></h3>\n    <p>By default, when you install a connector, it will add its API endpoints to the application, for example, <tt class=\" \">api/myconnector/model</tt>. If you do not want to generate these API endpoints, set the <tt class=\" \">modelAutogen</tt> key to <tt class=\" \">false</tt> in the connector&apos;s configuration file in the project.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">conf/myconnector.default.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"conf/myconnector.default.js\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    connectors: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&apos;connector.name&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            setting1: </code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            setting2: </code><code class=\"string\">&apos;bar&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            setting3: </code><code class=\"string\">&apos;baz&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            modelAutogen: </code><code class=\"keyword\">false</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Usetheconnector\">\n        <h2 class=\"heading \"><span>Use the connector</span></h2>\n    <p>To use the connector, simply assign the <tt class=\" \">connector</tt> key in a Model file to the name of the connector. For example, the model file below is using the <tt class=\" \">employee</tt> table (or model) accessed by the MySQL connector.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">models/employee.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"models/employee.js\">\n<div class=\"line\"><code class=\"plain\">var Arrow = require(</code><code class=\"string\">&apos;arrow&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var employee = Arrow.Model.reduce(</code><code class=\"string\">&apos;appc.mysql/employee&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;employee&apos;</code><code class=\"plain\">,{</code></div>\n<div class=\"line\"><code class=\"plain\">    fields: {</code></div>\n<div class=\"line\"><code class=\"plain\">        first_name: {type: String, description: </code><code class=\"string\">&apos;Give name&apos;</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">        last_name: {type: String, description: </code><code class=\"string\">&apos;Family name&apos;</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    connector: </code><code class=\"string\">&apos;appc.mysql&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">module.exports = employee;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153269_AddaConnector-Removeaconnector\">\n        <h2 class=\"heading \"><span>Remove a connector</span></h2>\n    <p>To remove a connector from your project, you need to manually update the <tt class=\" \">appc.json</tt> file and remove some files.    </p>\n<ol class=\" \"><li class=\" \">    <p>Open the <tt class=\" \">appc.json</tt> file and delete the connector you want to remove from the <tt class=\" \">dependencies</tt> object. For example, if you want to remove the MySQL connector, remove the <tt class=\" \">&quot;connector/appc.mysql&quot;: &quot;^1.0.34&quot;</tt>. Note that you will need to remove the trailing comma at the end of the <tt class=\" \">arrowdb</tt> line.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;api&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;group&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;arrow&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;dependencies&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;connector/appc.arrowdb&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;^1.0.52&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;connector/appc.mysql&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;^1.0.34&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Delete the connector&apos;s configuration file(s) from the project <tt class=\" \">conf</tt> directory.  The file(s) will contain the name of the connector.    </p>\n</li><li class=\" \">    <p>Delete the connector&apos;s directory in the <tt class=\" \">node_modules/connectors/</tt> directory.  The directory will contain the name of the connector.    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153269\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Add a Connector"});