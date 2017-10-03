Ext.data.JsonP['Rails_Development']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Rails Development</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083026\" class=\"content\">\n                        <h1>Rails Development</h1>\n    <div class=\"section section-2 \" id=\"src-30083026_RailsDevelopment-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-RailsSupport\">Rails Support</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-GettingStarted\">Getting Started</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-Windows\">Windows</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_safe-id-UmFpbHNEZXZlbG9wbWVudC1DcmVhdGluZy9JbXBvcnRpbmdhUmFpbHNQcm9qZWN0\">Creating/Importing a Rails Project</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-Creatingaprojectusingthenew-projectwizard\">Creating a project using the new-project wizard</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-ImportingaRailsProject\">Importing a Rails Project</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_RailsDevelopment-Editing\">Editing</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Rails_Development-section-src-30083026_safe-id-UmFpbHNEZXZlbG9wbWVudC1EZXByZWNhdGVkVmlld3MtU2VydmVycyxQbHVnaW5zLEdlbXMsR2VuZXJhdG9ycw\">Deprecated Views - Servers, Plugins, Gems, Generators</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083026_RailsDevelopment-RelatedTopics\">\n        <h2 class=\"heading \"><span>Related Topics</span></h2>\n<ul class=\"childpages-macro \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/RHTML_Editor\">RHTML Editor</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083026_RailsDevelopment-RailsSupport\">\n        <h2 class=\"heading \"><span>Rails Support</span></h2>\n    <p>Studio is shipped with a built-in support for Rails editing. This is additional support beyond that described in <a class=\"document-link \" href=\"#!/guide/Ruby_Development\">Ruby Development</a>, <a class=\"document-link \" href=\"#!/guide/HTML_Development\">HTML Development</a>, <a class=\"document-link \" href=\"#!/guide/CSS_Development\">CSS Development</a>, and <a class=\"document-link \" href=\"#!/guide/JavaScript_Development\">Javascript Development</a>.    </p>\n    <p>It should be noted that Studio relies on developers to be familiar with the standard Rails command line tools, generators and tasks. RadRails used to provide UI view front-ends to the generators, servers, etc. In Studio, we embed a Terminal view and expect users to be familiar with Rails enough to be able to generate models, controllers, etc and run servers from the command line.    </p>\n    <p>If you&apos;re unfamiliar with Rails development, a good starting place is <a class=\"external-link external-link\" href=\"http://guides.rubyonrails.org/\" target=\"_blank\">http://guides.rubyonrails.org/</a>.    </p>\n    <div class=\"section section-3 \" id=\"src-30083026_RailsDevelopment-GettingStarted\">\n        <h3 class=\"heading \"><span>Getting Started</span></h3>\n    <p>We expect that users already have their ruby, rails and gems installed to use our tooling. Ruby is pre-installed on Mac OS X, but it is recommended you upgrade the pre-installed Rails to the latest version.    </p>\n    <div class=\"section section-4 \" id=\"src-30083026_RailsDevelopment-Windows\">\n        <h4 class=\"heading \"><span>Windows</span></h4>\n    <p>We highly recommend that users install Rails via <a class=\"external-link external-link\" href=\"http://railsinstaller.org/\" target=\"_blank\">Rails Installer</a>. It will properly install a compatible PortableGit that works with our git support, as well as Ruby, Rails and DevKit so that native gem installation works properly.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083026_safe-id-UmFpbHNEZXZlbG9wbWVudC1DcmVhdGluZy9JbXBvcnRpbmdhUmFpbHNQcm9qZWN0\">\n        <h3 class=\"heading \"><span>Creating/Importing a Rails Project</span></h3>\n    <div class=\"section section-4 \" id=\"src-30083026_RailsDevelopment-Creatingaprojectusingthenew-projectwizard\">\n        <h4 class=\"heading \"><span>Creating a project using the new-project wizard</span></h4>\n    <p>The Rails project wizard can be accessed through multiple locations in the workspace.<br>A project can be created through the File-&gt;New-&gt;Rails Project, or by right-clicking the &apos;Project Explorer&apos; or the &apos;App Explorer&apos; and select New-&gt;Rails Project.    </br></p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/30083026/rails_project_wizard.png\" alt=\"images/download/attachments/30083026/rails_project_wizard.png\" class=\"confluence-embedded-image image-center\">\n        </img></p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-30083026_RailsDevelopment-ImportingaRailsProject\">\n        <h4 class=\"heading \"><span>Importing a Rails Project</span></h4>\n    <p>To import a rails project (whether created inside the IDE previously, or outside the IDE on the command line), you can use the Rails Project Wizard as outlined above - but simply point it at the existing rails project root. It will detect that files exist and will not run the rails generator over top the existing files. You can also explicitly state that the generator not be run in case that detection fails.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083026_RailsDevelopment-Editing\">\n        <h3 class=\"heading \"><span>Editing</span></h3>\n    <p>In addition to our HTML/CSS/JS/Ruby support, we also support editing HTML.ERB/RHTML, HAML, SASS and YAML files.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083026_safe-id-UmFpbHNEZXZlbG9wbWVudC1EZXByZWNhdGVkVmlld3MtU2VydmVycyxQbHVnaW5zLEdlbXMsR2VuZXJhdG9ycw\">\n        <h3 class=\"heading \"><span>Deprecated Views - Servers, Plugins, Gems, Generators</span></h3>\n    <p>RadRails 2.x used to provide UI front-ends to the generator, server, plugin and gems for your project. Often this UI was difficult to keep working across multiple rails versions and tended to offer little advantage to just using the command line to achieve your goal.    </p>\n    <p>If you strongly miss one of these views, please voice your request to bring it back in our bug tracker.    </p>\n    <p>For Servers, you can launch a server via the command line or the gear menu of the App Explorer. To kill/stop the server, give the Terminal running the server process/command focus and then hit Ctrl+C.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083026\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Rails Development"});