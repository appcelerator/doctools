Ext.data.JsonP['API_Builder_Getting_Started_Guide']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>API Builder Getting Started Guide</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153255\" class=\"content\">\n                        <h1>API Builder Getting Started Guide</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Setup\">Setup</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Createaproject\">Create a project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Runtheproject\">Run the project</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Createanewmodel\">Create a new model</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Accessmodeldata\">Access model data</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-TestotherAPIendpoints\">Test other API endpoints</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Deploytheproject\">Deploy the project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Viewanalytics\">View analytics</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Getting_Started_Guide-section-src-49153255_APIBuilderGettingStartedGuide-Nextsteps\">Next steps</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>    <span style=\"color: #333333;\">\nThis guide walks you through the steps to install and run API Builder.     <span style=\"color: #333333;\">\nAPI Builder allows you to build and deploy API endpoints to the cloud that can be consumed by a client application.<br>    </br></span>\n    </span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Setup\">\n        <h2 class=\"heading \"><span>Setup</span></h2>\n    <p>    <span style=\"color: #333333;\">\nTo run API Builder, you need to install Node.js and Axway Appcelerator CLI.    </span>\n     <span style=\"color: #333333;\">\nIf you are using Axway Appcelerator Studio 4.0 or a later version, you already have Appcelerator CLI automatically installed and can go to step 4.    </span>\n    </p>\n<ol class=\" \"><li class=\" \">    <p>    <span style=\"color: #333333;\">\n     </span>\n    <span style=\"color: #333333;\">\nDownload and install Node.js from <a class=\"external-link external-link\" href=\"https://nodejs.org/en/#download\" target=\"_blank\">https://nodejs.org/en/#download</a>. Note that API Builder has been tested with Node 6.x.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n     </span>\n    <span style=\"color: #1155cc;\">\n    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\nFrom a console window, execute the following command to install the CLI:    </span>\n    </span>\n    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">npm </code><code class=\"functions\">install</code><code class=\"plain\"> appcelerator -g</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\nAfter installation, execute the setup command to install the required components:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc setup</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #333333;\">\nThis installation and setup can take several minutes.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\nOnce the Appcelerator CLI installation and setup is completed, you will be prompted to login. Enter your email and password.    </span>\n    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\nThe CLI will send you an authorization token to your e-mail account (or a text to your mobile phone if provided during account activation). Enter the authorization token. If the authorization fails, a new code will be sent.    </span>\n    </span>\n    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\nOnce you are logged in, you will be queried whether or not you are developing Titanium applications. If you are developing Titanium applications, enter yes. Titanium will be automatically downloaded and installed.    </span>\n    </span>\n    </span>\n    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Createaproject\">\n        <h2 class=\"heading \"><span>Create a project</span></h2>\n    <p>To create a new project:    </p>\n<ol class=\" \"><li class=\" \">    <p>Navigate to your workspace directory and execute the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc new -t arrow</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #333333;\">\nAppcelerator CLI will prompt you for a project name.    </span>\n    </p>\n</li><li class=\" \">    <p>Enter a name for your project. Once you enter a project name, Appcelerator will create a new API Builder project.    <span style=\"color: #333333;\">\n     </span>\n    <span style=\"color: #333333;\">\n     </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\nNavigate to the project directory. For example:     </span>\nprojectname    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"functions\">cd</code><code class=\"plain\"> projectname</code></div>\n</div>\n    </div>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Runtheproject\">\n        <h2 class=\"heading \"><span>Run the project</span></h2>\n    <p>To run the project locally:    </p>\n<ol class=\" \"><li class=\" \">    <p>From the project directory, execute the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #333333;\">\nThe CLI will download and install any dependencies for the project, then start the application. The application will launch a server that you can access from a browser or other clients. As the app is launching, you will see the various services it is starting and the localhost console URL for the application.     </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #333333;\">\n    <span style=\"color: #333333;\">\nOpen a browser and navigate to the Admin Console user interface (UI) of application    </span>\n. Typically, the URL of the Admin Console UI should be <tt class=\" \">http://localhost:8080/console</tt>    </span>\n. Check the console output to verify the URL.    </p>\n</li></ol>    <p>Upon reviewing the left navigation, you can navigate to the following items:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/summary_%281%29.png\" alt=\"images/download/attachments/49153255/summary_%281%29.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Summary</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Your app&apos;s admin home page.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/connectors.png\" alt=\"images/download/attachments/49153255/connectors.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Connectors</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Lists and filters installed connector.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/models.png\" alt=\"images/download/attachments/49153255/models.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Models</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Interface to help you build models. A model represents data stored from another source.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/api.png\" alt=\"images/download/attachments/49153255/api.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">API Doc &amp; Test</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Auto-generated documentation about your API endpoints. Provides help for the client application to access your application.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/configuration.png\" alt=\"images/download/attachments/49153255/configuration.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Configurations</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Lists configuration files that you can modify and save within a browser.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/button-logs.png\" alt=\"images/download/attachments/49153255/button-logs.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Logs</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Lists of access logs, clients trying to access your application.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/View_Documentation.png\" alt=\"images/download/attachments/49153255/View_Documentation.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">View Documentation</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Links to Appcelerator&apos;s documentation site for API Builder&apos;s guide.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/49153255/sidebar_toggle.png\" alt=\"images/download/attachments/49153255/sidebar_toggle.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Sidebar toggle</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Toggles the width of the sidebar.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>You can disable the Admin Console by changing the configuration settings in the <tt class=\" \">conf/default.js</tt> file. For now, let&apos;s explore some of the features of the Admin Console.    </p>\n    <div class=\"section section-3 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Createanewmodel\">\n        <h3 class=\"heading \"><span>Create a new model</span></h3>\n    <p>Let&apos;s create a new model using the Admin Console. In the Admin Console,    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the     <img src=\"images/download/thumbnails/49153255/models.png\" alt=\"images/download/thumbnails/49153255/models.png\" class=\"confluence-embedded-image confluence-thumbnail\" width=\"25\">\n <strong class=\" \">Models</strong> button.    </img></p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">+ Model</strong> button on the right side.    </p>\n</li><li class=\" \">    <p>In the New Model step:    </p>\n    <img src=\"images/download/attachments/49153255/new_model_%281%29.png\" alt=\"images/download/attachments/49153255/new_model_%281%29.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"245\">\n        <p>    </p>\n<ol class=\" \"><li class=\" \">    <p>Enter &quot;simpleuser&quot; in the <strong class=\" \">Model name</strong> field (required). The name must be unique for all of the application&apos;s models.    </p>\n</li><li class=\" \">    <p>Select a <strong class=\" \">Connector</strong> from the drop-down list (required). Connectors are used to persist data to the model.    </p>\n</li><li class=\" \">    <p>Add a description.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong> to move onto the fields step    </p>\n</li></ol></img></li><li class=\" \">    <p>In the Create Model Fields step:    </p>\n    <img src=\"images/download/attachments/49153255/add_fields.png\" alt=\"images/download/attachments/49153255/add_fields.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"251\">\n        <p>    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">+ Field</strong> button.    </p>\n</li><li class=\" \">    <p>Enter &quot;first_name&quot; in the Field name field (required).    </p>\n    <img src=\"images/download/attachments/49153255/edit_fields.png\" alt=\"images/download/attachments/49153255/edit_fields.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"315\">\n    </img></li><li class=\" \">    <p>Set Type to String.    </p>\n</li><li class=\" \">    <p>Leave Default value empty.    </p>\n</li><li class=\" \">    <p>Add a description.    </p>\n</li><li class=\" \">    <p>Check the boxes for Read-only or Required as necessary.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Add field to </strong>model button.    </p>\n</li><li class=\" \">    <p>Repeat step 4 as necessary to add the &quot;last_name&quot; and &quot;email&quot; fields to this model. After you add the fields, you can configure them by changing properties or adding validation or return logic.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong> to move onto the endpoint step.    </p>\n</li></ol></img></li><li class=\" \">    <p>In the API endpoint page:    </p>\n    <img src=\"images/download/attachments/49153255/add_endpoints.png\" alt=\"images/download/attachments/49153255/add_endpoints.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"279\">\n        <p>    </p>\n<ol class=\" \"><li class=\" \">    <p>Make sure the <strong class=\" \">Create</strong>, <strong class=\" \">Retrieve</strong>, and <strong class=\" \">Update</strong> methods are checked. Since the Delete method is not checked, the <tt class=\" \">DELETE api/simpleuser</tt> endpoint will not be generated but all the other default endpoints for this model will be.    </p>\n</li><li class=\" \">    <p>Click Save to commit your new model to the app.    </p>\n</li></ol></img></li></ol>    <p>If you look in your project&apos;s <tt class=\" \">models</tt> folder, notice you have a new file called <tt class=\" \">simpleuser.js</tt>. This file was just created by the Admin Console. Instead of creating a model using the Admin Console, you can define one using JavaScript files in the project&apos;s <tt class=\" \">models</tt> directory.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Accessmodeldata\">\n        <h3 class=\"heading \"><span>Access model data</span></h3>\n    <p>Now that you have created the simpleuser model, let&apos;s try to retrieve the model data from the application. In the Admin Console:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the     <img src=\"images/download/thumbnails/49153255/api.png\" alt=\"images/download/thumbnails/49153255/api.png\" class=\"confluence-embedded-image confluence-thumbnail\" width=\"25\">\n <strong class=\" \">API Docs &amp; Test</strong> tab. This page lists all the API endpoints that you application exposes.    </img></p>\n    <img src=\"images/download/attachments/49153255/API_Doc_n_Test.png\" alt=\"images/download/attachments/49153255/API_Doc_n_Test.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"199\">\n    </img></li><li class=\" \">    <p>Click anywhere on the row of any one of the API endpoints that you recently created. The Admin Console presents all the API endpoints that can be used to access a particular model.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Expand one of the GET methods</strong> in your endpoint. The code sample for curl should be visible. If it&apos;s not, click it now.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Copy a curl command</strong> and <strong class=\" \">run it in a terminal</strong>. Note the message returned by this command.    </p>\n    <img src=\"images/download/attachments/49153255/API_Doc_n_Test_curl.png\" alt=\"images/download/attachments/49153255/API_Doc_n_Test_curl.png\" class=\"confluence-embedded-image\" width=\"500\">\n    </img></li><li class=\" \">    <p>Now let&apos;s take a look at the logs to see if the command registered with the app. Click the     <img src=\"images/download/thumbnails/49153255/button-logs.png\" alt=\"images/download/thumbnails/49153255/button-logs.png\" class=\"confluence-embedded-image confluence-thumbnail\" width=\"25\">\n <strong class=\" \">Logs</strong> tab. You should see all recent requests made to and from your app here.    </img></p>\n</li><li class=\" \">    <p>If the list of events in the logs is rather long, you can filter and/or search for particular events. In the <strong class=\" \">Time</strong> drop-down (by default, it says All Time because the log is reporting back all events), select <strong class=\" \">Past 10 Minutes</strong>. If the list is still long, you can filter by and <strong class=\" \">Status</strong> as well. Once you found your curl call, click it to see the full report of that event.    </p>\n    <img src=\"images/download/attachments/49153255/Log_event_report.png\" alt=\"images/download/attachments/49153255/Log_event_report.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"375\">\n    </img></li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-49153255_APIBuilderGettingStartedGuide-TestotherAPIendpoints\">\n        <h3 class=\"heading \"><span>Test other API endpoints</span></h3>\n    <p>With a new project (by default), you can navigate to the app&apos;s API auto-generated documentation and it&apos;s examples pages by pointing a browser to <tt class=\" \">http://localhost:8080/apidoc</tt> and <tt class=\" \">http://localhost:8080/example</tt> respectively.    </p>\n    <p>The <tt class=\" \">example</tt> URL shows a simple example of an API Builder Web interface. An API Builder Web interface creates an API endpoint with access to a render engine and your Model data that displays HTML content.    </p>\n    <p>After locally testing the application, let&apos;s try it out in the cloud. To stop the server, hit <strong class=\" \">command</strong>/<strong class=\" \">control</strong> + <strong class=\" \">C</strong> in the terminal where you launched the app.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Deploytheproject\">\n        <h2 class=\"heading \"><span>Deploy the project</span></h2>\n    <p>To deploy the project to the cloud:    </p>\n<ol class=\" \"><li class=\" \">    <p>From the project directory, execute the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc publish</code></div>\n</div>\n    </div>\n    <p>It will take a few minutes for your application to be deployed to API Runtime Services. After the command completes, the URL to your application will be displayed in the console.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version 5.5.1</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) 2014-2016, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Publishing application ... this could take several minutes</code></div>\n<div class=\"line\"><code class=\"plain\">Packaging application ... </code></div>\n<div class=\"line\"><code class=\"plain\">Deploying application ... </code></div>\n<div class=\"line\"><code class=\"plain\">Starting application ... </code></div>\n<div class=\"line\"><code class=\"plain\">Application deployed to https:</code><code class=\"plain\">//</code><code class=\"plain\">&lt;SUB_DOMAIN_TOKEN&gt;.cloudapp-enterprise.appcelerator.com</code></div>\n<div class=\"line\"><code class=\"plain\">Published api</code><code class=\"plain\">/QuickStart2</code><code class=\"plain\">@1.0.0</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">Tips:</code></div>\n<div class=\"line\"><code class=\"plain\"> - Run `appc cloud logcat` to view logs.</code></div>\n<div class=\"line\"><code class=\"plain\"> - Run `appc cloud loglist --build_log` to view the build log.</code></div>\n<div class=\"line\"><code class=\"plain\"> - Run `appc cloud usage` </code><code class=\"keyword\">for</code><code class=\"plain\"> performance metrics.</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Let&apos;s quickly test the published application. In your browser, navigate to your published cloud application. You should see the API Builder Logo.    </p>\n</li><li class=\" \">    <p>Next, go to the project&apos;s documentation. Add the <tt class=\" \">/apidoc</tt> path to the end of the URL to retrieve the application documentation and endpoints. Retrieve the curl example of the query endpoint and execute it in the terminal. The command should return the same results when you tested the project locally.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Viewanalytics\">\n        <h2 class=\"heading \"><span>View analytics</span></h2>\n    <p>To view analytics about your project, go to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n<ol class=\" \"><li class=\" \">    <p>In a browser, navigate to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">https://platform.appcelerator.com</a>.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Apps</strong> menu and select <strong class=\" \">All Projects</strong>. You will be presented with a list of all your applications.    </p>\n</li><li class=\" \">    <p>Locate your new application. There will be two entry types for your application: <strong class=\" \">API Builder</strong> and <strong class=\" \">Mobile Backend Services</strong>. The application is the published application that you interact with. The <strong class=\" \">Mobile Backend Services</strong> datasource is essentially cloud storage where all your model data (at least for this example) is stored. The simpleuser model data you entered previously is stored here.    </p>\n</li><li class=\" \">    <p>Click the type of your application. You will be presented with an analytics overview of your application with data about API calls and the server(s) your application is running on.    </p>\n</li><li class=\" \">    <p>Click the tabs in the left navigation panel to view more detailed information about your application.    </p>\n    <img src=\"images/download/attachments/49153255/analyticsover2.png\" alt=\"images/download/attachments/49153255/analyticsover2.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"800\" height=\"264\">\n    </img></li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-49153255_APIBuilderGettingStartedGuide-Nextsteps\">\n        <h2 class=\"heading \"><span>Next steps</span></h2>\n    <p>Review the <a class=\"document-link \" href=\"#!/guide/API_Builder_Project\">API Builder Project</a> page to learn more about API Builder projects, then review the other subtopics in the <a class=\"document-link \" href=\"#!/guide/API_Builder\">API Builder</a> page to learn how to build the components for your project.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153255\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder Getting Started Guide"});