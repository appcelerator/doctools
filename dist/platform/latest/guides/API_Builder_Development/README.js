Ext.data.JsonP['API_Builder_Development']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>API Builder Development</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43304385\" class=\"content\">\n                        <h1>API Builder Development</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-CreateaNewProject\">Create a New Project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-ImportanExistingProject\">Import an Existing Project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-TesttheApplicationLocally\">Test the Application Locally</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-PublishtheApplication\">Publish the Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-UnpublishtheApplication\">Unpublish the Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/API_Builder_Development-section-src-43304385_APIBuilderDevelopment-ViewApplicationRuntimeLogs\">View Application Runtime Logs</a>    </p>\n</li></ul>    <p>You can use Appcelerator Studio to manage your API Builder projects.  In Studio, you can create a new project, code your service and API endpoints, then test your project locally. Once you are done testing your project, you can publish it to the cloud, where it can be accessed by multiple client applications.  For all other tasks, you will need to use the Appcelerator CLI (see <a class=\"document-link \" href=\"#!/guide/API_Builder_Project\">API Builder Project</a>).    </p>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-CreateaNewProject\">\n        <h2 class=\"heading \"><span>Create a New Project</span></h2>\n<ol class=\" \"><li class=\" \">    <p>    <span style=\"color: #222222;\">\nIn the menu bar, select <strong class=\" \">File &gt; New &gt; API Builder Project</strong>, which opens the <i class=\" \">New API Builder Project</i> dialog.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #222222;\">\nEnter a name for your application, then click <strong class=\" \">Finish</strong>.<br>    <img src=\"images/download/attachments/43304385/CreateProject.png\" alt=\"images/download/attachments/43304385/CreateProject.png\" class=\"confluence-embedded-image\" width=\"500\">\n<br>    </br></img></br></span>\n    </p>\n</li></ol>    <p>    <span style=\"color: #222222;\">\n Studio will generate a new skeleton API Builder project.  This may take a few minutes.    </span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-ImportanExistingProject\">\n        <h2 class=\"heading \"><span>Import an Existing Project</span></h2>\n    <p>    <span style=\"color: #222222;\">\nTo import an existing API Builder project, see <a class=\"document-link \" href=\"#!/guide/Importing_an_Existing_Project\">Importing an Existing Project</a>.    </span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-TesttheApplicationLocally\">\n        <h2 class=\"heading \"><span>Test the Application Locally</span></h2>\n    <p>Once you have developed your API Builder project, you can test it locally from Studio.    </p>\n<ol class=\" \"><li class=\" \">    <p>Select your project in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Run</strong> from the <strong class=\" \">Launch Modes</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>Make sure <strong class=\" \">Local API Builder Server</strong> is selected in the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Launch</strong> button.    </p>\n</li><li class=\" \">    <p>Once the server starts, Studio will launch the Admin console in a new view.    </p>\n    <img src=\"images/download/attachments/43304385/TestApplicationLocally.png\" alt=\"images/download/attachments/43304385/TestApplicationLocally.png\" class=\"confluence-embedded-image\" width=\"500\">\n        <p>    </p>\n</img></li></ol>    <p>The local port number assigned to the server is displayed in the <strong class=\" \">Console</strong> view.  Use your computer&apos;s IP address or <a class=\"external-link external-link\" href=\"http://localhost/\" target=\"_blank\">http://localhost</a>, with the port number to access the running application with a browser or console command, such as <tt class=\" \">curl</tt> or <tt class=\" \">wget</tt>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-PublishtheApplication\">\n        <h2 class=\"heading \"><span>Publish the Application</span></h2>\n    <p>Once you are done testing your project, you can publish to API Runtime Services using Studio.    </p>\n<ol class=\" \"><li class=\" \">    <p>Select your project in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Package</strong> from the <strong class=\" \">Launch Modes</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>Make sure API Builder<strong class=\" \"> App</strong> is selected in the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Launch</strong> button.    </p>\n    <img src=\"images/download/attachments/43304385/PublishTheApplication.png\" alt=\"images/download/attachments/43304385/PublishTheApplication.png\" class=\"confluence-embedded-image\" width=\"500\">\n        <p>    </p>\n</img></li></ol>    <p>Once your application is deployed, a dialog appears providing you information about the endpoint URL for the application.<br>    <img src=\"images/download/attachments/43304385/PublishAck.png\" alt=\"images/download/attachments/43304385/PublishAck.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></br></p>\n    <p>By default, the service URL will be <tt class=\" \">http://&lt;SUBDOMAIN_TOKEN&gt;</tt><tt class=\" \">.cloudapp-enterprise.appcelerator.com</tt>. It may take a few minutes for the application to be available.    </p>\n    <p>To retrieve the service URL later, in the <strong class=\" \">Project Explorer</strong> view, right-click your project and select <strong class=\" \">API Builder &gt; View API Builder Service</strong>, which opens the application in your default web browser.    </p>\n    <p>    <img src=\"images/download/attachments/43304385/UnpublishAPIBuilderService.png\" alt=\"images/download/attachments/43304385/UnpublishAPIBuilderService.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-UnpublishtheApplication\">\n        <h2 class=\"heading \"><span>Unpublish the Application</span></h2>\n    <p>To unpublish a specific version of the application, right-click the project in the <strong class=\" \">Project Explorer</strong> view, then select <strong class=\" \">API Builder &gt; Unpublish API Builder Service</strong>.    </p>\n    <p>    <img src=\"images/download/attachments/43304385/UnpublishAPIBuilderService.png\" alt=\"images/download/attachments/43304385/UnpublishAPIBuilderService.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    <p>This process may take a few minutes.  Once the operation completes, a toast notification appears.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43304385_APIBuilderDevelopment-ViewApplicationRuntimeLogs\">\n        <h2 class=\"heading \"><span>View Application Runtime Logs</span></h2>\n    <p>Once your application is published, you can access the runtime logs.    </p>\n    <p>In the <strong class=\" \">Project Explorer</strong> view, right-click on the project and choose <strong class=\" \">API Builder</strong> <strong class=\" \">&gt; Tail Logs</strong>.<br>    <img src=\"images/download/attachments/43304385/ViewApplicationRuntimeLogs.png\" alt=\"images/download/attachments/43304385/ViewApplicationRuntimeLogs.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></br></p>\n    <p>A new console view opens with your runtime logs, which will be continuously updated.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43304385\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"API Builder Development"});