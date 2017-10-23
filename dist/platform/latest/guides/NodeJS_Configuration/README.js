Ext.data.JsonP['NodeJS_Configuration']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>NodeJS Configuration</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-49157246\" class=\"content\">\n                        <h1>NodeJS Configuration</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Dependencies\">Dependencies</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Engines\">Engines</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Healthcheck\">Health check</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Main\">Main</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Name\">Name</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-npmAuthentication\">npmAuthentication</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-npmRegistry\">npmRegistry</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Scripts\">Scripts</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Preinstallandpostinstall\">Preinstall and postinstall</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Start\">Start</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/NodeJS_Configuration-section-src-49157246_NodeJSConfiguration-Version\">Version</a>    </p>\n</li></ul>    <p>An API Builder application contains a file called <tt class=\" \">package.json</tt> located in the root directory of the project. API Runtime Services uses the <tt class=\" \">package.json</tt> file to configure settings and install dependencies for the application.    </p>\n    <p>Important fields for API Builder applications are defined below and may be different from the <a class=\"external-link external-link\" href=\"https://www.npmjs.org/doc/files/package.json.html\" target=\"_blank\">npm version</a>.    </p>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Dependencies\">\n        <h2 class=\"heading \"><span>Dependencies</span></h2>\n    <p>The application can import any third-party modules that are supported by standard Node.js applications. Before publishing the app to the cloud, make sure all dependencies are listed in the <tt class=\" \">dependencies</tt> field in the application&apos;s <tt class=\" \">package.json</tt> file. For example, to add support for MongoDB 1.2.0 or greater:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;dependencies&quot;</code><code class=\"plain\">:{ </code><code class=\"string\">&quot;mongodb&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;&gt;1.2.0&quot;</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Engines\">\n        <h2 class=\"heading \"><span>Engines</span></h2>\n    <p>You can specify which version of Node.js to run your application on. Use the <tt class=\" \">engines</tt> field in <tt class=\" \">package.json</tt> to specify engine versions. To specify the Node.js version, set the <tt class=\" \">node</tt> key in the <tt class=\" \">engines</tt> dictionary to a specific version of Node.js to use. For example, to specify to use version 0.10.22:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;engines&quot;</code><code class=\"plain\"> : { </code><code class=\"string\">&quot;node&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;0.10.22&quot;</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>You may specify any version of Node. Node 0.8.26, 0.10.22 and 0.12.4 are built in, but other versions will be downloaded from <a class=\"external-link external-link\" href=\"https://nodejs.org/\" target=\"_blank\">https://nodejs.org/</a> when the application is built prior to running <tt class=\" \">npm install</tt>.  If you do not specify a Node version, the application will use 0.12.4 by default.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">Deprecated Behavior</div>\n            <p>Prior to API Runtime Services 1.2.0, if this field is undefined when you publish your application, the application will use 0.10.22 by default.    </p>\n    <p>If this field is undefined when you republish your application and the latest supported Node.js version changed on the API Runtime Services servers, you will receive an error message when trying to publish your application. You must set the Node.js version to republish your application.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Healthcheck\">\n        <h2 class=\"heading \"><span>Health check</span></h2>\n    <p>Starting with API Runtime Services 1.2.0, you may define a health-check endpoint called <tt class=\" \">arrowPing.json</tt> that returns a 200 HTTP code. To let API Runtime Services know you defined the health-check endpoint, set the <tt class=\" \">healthCheck</tt> field to <tt class=\" \">true</tt>.  For an example, see <a class=\"document-link unresolved\" href=\"#!/guide/NodeJS_Configuration-section-src-49157246\">API Builder Tools Project: Optional Health Check</a>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  healthCheck: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>By default, the health check starts after a two minute wait period. If your application normally takes longer than two minutes to start up, you should set the <tt class=\" \">start_period</tt> environment variable to an appropriate start up time (in minutes) to avoid having the docker swarm restart your application before it is online.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Main\">\n        <h2 class=\"heading \"><span>Main</span></h2>\n    <p>API Runtime Services uses the <tt class=\" \">main</tt> field in <tt class=\" \">package.json</tt> to determine the application&apos;s main entry point. Set this field to a JavaScript file. API Runtime Services loads and runs this file first.    </p>\n    <p>By default, the <tt class=\" \">main</tt> field is set to the <tt class=\" \">app.js</tt> file located in the project&apos;s root folder:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;main&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;app.js&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>You can load a module by leaving this field blank and specifying the <tt class=\" \">scripts</tt> field.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Name\">\n        <h2 class=\"heading \"><span>Name</span></h2>\n    <p>Use the <tt class=\" \">name</tt> field to specify the name of the application. An app&apos;s name must be unique across all apps of a user or organization. It will be used to ID the app when publishing/unpublishing to the cloud or setting up the app through CLI commands.    </p>\n    <p>By default, this field is set to the name of the project when it was created.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;MyArrowApp&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-npmAuthentication\">\n        <h2 class=\"heading \"><span>npmAuthentication</span></h2>\n    <p>To enable authenticated package installs from a private npm registry specified by <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/guide/node_config-section-npmregistry\">npmRegistry</a>, add the <tt class=\" \">npmAuthentication</tt> field in your application&apos;s package.json file and set it to <tt class=\" \">true</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;npmAuthentication&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nWhen enabled, you must provide login credentials for the npm registry when calling     </span>\n <tt class=\" \">acs publish</tt>     <span style=\"color: #222222;\">\n. You can provide the credentials on the command line when calling the     </span>\n <tt class=\" \">publish</tt>     <span style=\"color: #222222;\">\n command:     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ appc cloud publish myuser mypwd</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\n        </span>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>If <tt class=\" \">acs cli</tt> complains that npm is not found even though npm is in the path, ensure that the directory containing npm is in the <tt class=\" \">NODE_PATH</tt> (e.g. <tt class=\" \">NODE_PATH=/usr/lib/node_modules</tt>).    </p>\n    </div>\n        <p>    </p>\n    <p>    <span style=\"color: #222222;\">\nIf no credentials are provided on the command line, t    </span>\nhe Appcelerator CLI will attempt to read the credentials from <tt class=\" \">~/.npmrc</tt>. If no <tt class=\" \">~/.npmrc</tt> file is found, or it does not contain any credentials, you are prompted for the npm username and password:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ appc cloud publish</code></div>\n<div class=\"line\"><code class=\"plain\">npm username: admin</code></div>\n<div class=\"line\"><code class=\"plain\">npm password: ***********</code></div>\n<div class=\"line\"><code class=\"plain\">Preparing application </code><code class=\"keyword\">for</code><code class=\"plain\"> publish... done</code></div>\n</div>\n    </div>\n    <p><strong class=\" \">Note</strong>: If you use a private npm registry hosted by Nodejitsu, you must first synchronize your public npm user account with the private npm, otherwise you will get &quot;unauthorized&quot; error. To do this, enter the following <tt class=\" \">npm</tt> commands:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">$ npm config set strict-ssl </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">$ npm config set ca </code><code class=\"string\">&quot;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">$ npm config set registry https:</code><code class=\"comments\">//&lt;your-subdomain&gt;.registry.nodejitsu.com</code></div>\n<div class=\"line\"><code class=\"plain\">$ npm login </code></div>\n</div>\n    </div>\n    <p>See <a class=\"external-link external-link\" href=\"https://www.nodejitsu.com/documentation/npm/cli/\" target=\"_blank\">https://www.nodejitsu.com/documentation/npm/cli/</a> for more information.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-npmRegistry\">\n        <h2 class=\"heading \"><span>npmRegistry</span></h2>\n    <p>If you want to use a different npm registry besides the official public npm registry to install dependencies, add the <tt class=\" \">npmRegistry</tt> field to the <tt class=\" \">package.json</tt> and set the value to the registry URL you want to use. For example, the entry below uses a European npm mirror:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;npmRegistry&quot;</code><code class=\"plain\"> : </code><code class=\"string\">&quot;http://registry.npmjs.eu/&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>To require authentication for npm installs, add the <tt class=\" \">npmAuthentication</tt> field to your <tt class=\" \">package.json</tt> file.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Scripts\">\n        <h2 class=\"heading \"><span>Scripts</span></h2>\n    <div class=\"section section-3 \" id=\"src-49157246_NodeJSConfiguration-Preinstallandpostinstall\">\n        <h3 class=\"heading \"><span>Preinstall and postinstall</span></h3>\n    <p>Specifies a path to a script to execute before or after the application is built.  You can use the script to install custom binaries in the project folder.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  scripts: {</code></div>\n<div class=\"line\"><code class=\"plain\">    preinstall: </code><code class=\"string\">&apos;scripts/pre.sh&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    postinstall: </code><code class=\"string\">&apos;scripts/post.sh&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>Prior to API Runtime Services 1.3.0, you could also use the script to install custom binaries outside the project directory.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Do not name the script <tt class=\" \">install.sh</tt>, located in the root folder of the project. The name is reserved to specify a script to install binaries to the container.    </p>\n    </div>\n        </div>\n    <div class=\"section section-3 \" id=\"src-49157246_NodeJSConfiguration-Start\">\n        <h3 class=\"heading \"><span>Start</span></h3>\n    <p>If your application&apos;s <tt class=\" \">package.json</tt> file does not specify a <tt class=\" \">main</tt> field, Appcelerator Cloud will now look at the <tt class=\" \">scripts.start</tt> field in <tt class=\" \">package.json</tt> to determine the main module to launch. Appcelerator Cloud will execute the start script using <tt class=\" \">npm start</tt>.    </p>\n    <p>See the <a class=\"external-link external-link\" href=\"https://www.npmjs.org/doc/misc/npm-scripts.html\" target=\"_blank\">NPM documentation</a> on the &quot;scripts&quot; <tt class=\" \">package.json</tt> field.    </p>\n    <p>For example, to launch the foo module:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;scripts&quot;</code><code class=\"plain\">: { </code><code class=\"string\">&quot;start&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;foo&quot;</code><code class=\"plain\"> }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49157246_NodeJSConfiguration-Version\">\n        <h2 class=\"heading \"><span>Version</span></h2>\n    <p>The version of the application. Used to version the application.    </p>\n    <p>By default, this field is set to <tt class=\" \">1.0.0</tt>:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">  </code><code class=\"string\">&quot;version&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;1.0.0&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49157246\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"NodeJS Configuration"});