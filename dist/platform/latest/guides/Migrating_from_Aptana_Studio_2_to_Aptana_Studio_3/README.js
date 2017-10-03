Ext.data.JsonP['Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Migrating from Aptana Studio 2 to Aptana Studio 3</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083277\" class=\"content\">\n                        <h1>Migrating from Aptana Studio 2 to Aptana Studio 3</h1>\n    <p>This document contains information on how to migrate Aptana Studio 2 to version 3.    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-MigratingProjects\">Migrating Projects</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-TomigrateyourprojectsfromStudio2toStudio3\">To migrate your projects from Studio 2 to Studio 3</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtTWlncmF0aW5nV2ViLFBIUGFuZFJhaWxzcHJvamVjdHM\">Migrating Web, PHP and Rails projects</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtRmlsZVZpZXcvUmVtb3RlQ29ubmVjdGlvbnM\">File View/Remote Connections</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-ContentAssist\">Content Assist</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-PHP\">PHP</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-Rails\">Rails</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtQ3VzdG9taXphdGlvbi9QcmVmZXJlbmNlcw\">Customization/Preferences</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-Scripting\">Scripting</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtUHJldmlld2luZ0ZpbGVzL1J1bi9MYXVuY2hDb25maWd1cmF0aW9ucw\">Previewing Files/Run/Launch Configurations</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtQ29sb3JpemF0aW9uL1RoZW1lcw\">Colorization/Themes</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-DifferencesbetweenAptanaStudio2and3\">Differences between Aptana Studio 2 and 3</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-CodeFormatter\">Code Formatter</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-NewFeatures\">New Features</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-HTML\">HTML</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-XML\">XML</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Migrating_from_Aptana_Studio_2_to_Aptana_Studio_3-section-src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-JavaScript\">JavaScript</a>    </p>\n</li></ul></li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-MigratingProjects\">\n        <h2 class=\"heading \"><span>Migrating Projects</span></h2>\n    <p>Aptana Studio 2 and Aptana Studio 3 have different workspaces, so you can use the two products simultaneously. In order to work with a project in Aptana Studio 3, you will want to import your project from one workspace to the other.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>It is not recommended to edit a project in both Studio 2 and Studio 3. Once you import a project, it is suggested you stick with Studio 3 for editing.    </p>\n    </div>\n        <div class=\"section section-3 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-TomigrateyourprojectsfromStudio2toStudio3\">\n        <h3 class=\"heading \"><span>To migrate your projects from Studio 2 to Studio 3</span></h3>\n<ol class=\" \"><li class=\" \">    <p>From the <strong class=\" \">File</strong> menu, select <strong class=\" \">Import</strong> to open a &quot;Import&quot; pop-up window.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">General &gt; Existing Projects into Workspace</strong>    </p>\n</li><li class=\" \">    <p>Browse to your Aptana Studio 2 workspace folder by clicking on the top <strong class=\" \">Browse...</strong> button. Click <strong class=\" \">Open</strong>    </p>\n</li><li class=\" \">    <p>The &quot;Projects&quot; list will contain a list of all of the projects it has found. Uncheck the ones you do not wish to import.    </p>\n</li><li class=\" \">    <p>A checkbox will ask you if you wish to copy the projects into your workspace. Generally the answer is &quot;yes,&quot; but note that that leaves a copy in the Aptana Studio 2 workspace, and a separate copy in Aptana Studio 3.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Finish</strong> button.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtTWlncmF0aW5nV2ViLFBIUGFuZFJhaWxzcHJvamVjdHM\">\n        <h3 class=\"heading \"><span>Migrating Web, PHP and Rails projects</span></h3>\n    <p>Studio 3 changed a few things underneath the hood regarding how projects are processed. We&apos;ve attempted to automate the migration process for you as you move from one environment to the other, but it&apos;s possible this process may not work in every possible circumstance. You would notice it most specifically with regards to missing content assist. In order to fix this, you&apos;ll need to reset the &quot;Natures&quot; on a project.    </p>\n    <p>As a first step, you can try just restarting Aptana Studio. If that doesn&apos;t work, try modifying the project natures (bottom of the page here): <a class=\"document-link \" href=\"#!/guide/Importing_an_Existing_Project\">Importing an Existing Project</a>    </p>\n    <p>Importing connections is a separate step:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select <strong class=\" \">File &gt; Import &gt; Studio/Connections</strong>    </p>\n</li><li class=\" \">    <p>Make sure the &quot;Workspace&quot; radio button is selected, and browse to your Aptana Studio 2 workspace    </p>\n</li><li class=\" \">    <p>Click Finish. Your connections will show up in the Remote Connections view, and attached to projects.    </p>\n</li></ol>    <p>    <img src=\"images/download/attachments/30083277/Screen_shot_2011-04-20_at_12.51.09_PM.png\" alt=\"images/download/attachments/30083277/Screen_shot_2011-04-20_at_12.51.09_PM.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>You can repeat this process multiple times and it will not re-import duplicates.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtRmlsZVZpZXcvUmVtb3RlQ29ubmVjdGlvbnM\">\n        <h2 class=\"heading \"><span>File View/Remote Connections</span></h2>\n    <p>File View has been replaced by a &quot;Local Filesystem&quot; node in the Project Explorer view. The &quot;Connections&quot; note is now visible from the &quot;Remote&quot; view, available in <strong class=\" \">Window &gt; Show View &gt; Remote</strong>    </p>\n    <p>Another change is that &quot;Untitled Files&quot; of various types (i.e. Untitled HTML File, Untitled CSS File) are no longer supported in the new file wizard. While a useful feature, it led to a great deal of hacked-together workarounds in the underlying code base. We are looking at how we may be able to bring this feature back in a future release.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-ContentAssist\">\n        <h2 class=\"heading \"><span>Content Assist</span></h2>\n    <p>Studio 3 simplified greatly the concept of adding JavaScript content assist. Rather than a references view that needed to be constantly updated, we&apos;ve instead allowed the user to drop content assist files into an existing project to get good code assist that way. We&apos;ve ported over all of the libraries we can from Studio 2, but some work needs to be done in getting content assist files for additional libraries like MootTools and Node.js. If you are interested in helping, please let us know.    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Using_JavaScript_Libraries\">Using JavaScript Libraries</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support\">JavaScript Library Support</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-PHP\">\n        <h2 class=\"heading \"><span>PHP</span></h2>\n    <p>Studio 2 utilized the Eclipse PHP Development Tools for PHP support. Studio 3 introduces a separate PHP plugin so that we better integrate PHP support throughout the product, and to reduce the overall install footprint. For those who prefer the PDT editors, you can either install the existing PDT all-in-one distro, and add Aptana Studio, or install PDT into Aptana Studio 3.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-Rails\">\n        <h2 class=\"heading \"><span>Rails</span></h2>\n    <p>Aptana Studio 3 includes RadRails, so no separate download is required. We&apos;ve removed some of the helper views from before, as most rails developers are familiar with how to do many of the tasks on the command line that those views facilitated. For more information, see <a class=\"document-link \" href=\"#!/guide/Rails_Development\">Rails Development</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtQ3VzdG9taXphdGlvbi9QcmVmZXJlbmNlcw\">\n        <h2 class=\"heading \"><span>Customization/Preferences</span></h2>\n    <p>Formatting preferences are the most notable change, but in general, the defaults should be relatively similar. See below for more details.    </p>\n    <div class=\"section section-3 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-Scripting\">\n        <h3 class=\"heading \"><span>Scripting</span></h3>\n    <p>Aptana Studio 3 introduced the concept of Rubles, Ruby-based scripting bundles based on Textmate bundles. A number of these bundles have been ported already, and a <a class=\"document-link \" href=\"#!/guide/Rubles\">rich SDK</a> exists for users who want to create or extend existing bundles. If you were using Eclipse Monkey, we are investigating adding JavaScript scripting support as another mechanism for Scripting Studio, but there is no firm ETA on that yet. However, everything that could be done in Eclipse Monkey can be done with Rubles, and the documentation and existing Rubles should give plenty of examples.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtUHJldmlld2luZ0ZpbGVzL1J1bi9MYXVuY2hDb25maWd1cmF0aW9ucw\">\n        <h3 class=\"heading \"><span>Previewing Files/Run/Launch Configurations</span></h3>\n    <p>Studio 2 relied on an internal browser preview utilizing the native platform browser. Studio 3 instead relies on Chromium for previewing, a WebKit-based browser. You can find out more about previewing files here: <a class=\"document-link \" href=\"#!/guide/Previewing\">Previewing</a>.    </p>\n    <p>Launch configurations may be exported and imported using the standard Eclipse export/import mechanism. See here: <a class=\"document-link \" href=\"#!/guide/Exporting_and_importing_preferences\">Exporting and importing preferences</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083277_safe-id-TWlncmF0aW5nZnJvbUFwdGFuYVN0dWRpbzJ0b0FwdGFuYVN0dWRpbzMtQ29sb3JpemF0aW9uL1RoZW1lcw\">\n        <h3 class=\"heading \"><span>Colorization/Themes</span></h3>\n    <p>Aptana Studio 3 uses a different mechanism for colorizing files than Aptana Studio 2 did. There is no converter yet, but you can use any existing Textmate theme you like. If you&apos;d like to create your own theme, you can <a class=\"document-link \" href=\"#!/guide/Themes\">read more about it</a>.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-DifferencesbetweenAptanaStudio2and3\">\n        <h2 class=\"heading \"><span>Differences between Aptana Studio 2 and 3</span></h2>\n    <p>Aptana Studio 3 is a complete rewrite of the Aptana code base, and as such, there are some differences in implementations between the two versions. Notable differences are highlighted below.    </p>\n    <div class=\"section section-3 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-CodeFormatter\">\n        <h3 class=\"heading \"><span>Code Formatter</span></h3>\n    <p>There are no PHP, Ruby, ERB and JSON formatters in Studio 2, so Studio 3 formatters can are brand new for these languages. In all of our formatters, we now set the &#x2018;Tab Policy&#x2019; to be whatever is set for the editor. In Studio2 the defaults were always set to &#x2018;Spaces Only&#x2019; with an indentation and tab size of 4 characters.    </p>\n    <div class=\"section section-4 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-NewFeatures\">\n        <h4 class=\"heading \"><span>New Features</span></h4>\n<ul class=\" \"><li class=\" \">    <p>A single page for accessing, importing and exporting formatter preferences    </p>\n</li><li class=\" \">    <p>PHP, JS, Ruby, CSS and HTML all support wrapping comments to a specified length    </p>\n</li></ul>    <p>The remaining differences are a result of us simplifying and removing code which appeared little used. If a beloved option has disappeared from the preferences, please let us know by filing a Lighthouse ticket.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-HTML\">\n        <h4 class=\"heading \"><span>HTML</span></h4>\n<ul class=\" \"><li class=\" \">    <p>The HTML elements list that &quot;should not take new lines&quot; is a bit different in Studio 3. Studio 3 adds the &apos;TD&apos; and &apos;TH&apos; elements to that list.    </p>\n</li><li class=\" \">    <p>The &apos;Force Wrap&apos; section no longer exists in Studio 3. Instead, we have only a &apos;Comments&apos; tab that allow wrapping settings for comments only.    </p>\n</li><li class=\" \">    <p>The indentation settings were changed as well. Studio 2 did not have any item in its exclusion list, while Studio 3 defines 22 elements that will not cause an increase of indentation.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-XML\">\n        <h4 class=\"heading \"><span>XML</span></h4>\n<ul class=\" \"><li class=\" \">    <p>The &apos;Spaces before attributes on multi-line tags&apos; setting was removed.    </p>\n</li><li class=\" \">    <p>Force wrap was removed.    </p>\n</li><li class=\" \">    <p>&apos;Preserve whitespace in CDATA sections&apos; was removed &#x2013; We do not change the spacing for the moment.    </p>\n</li><li class=\" \">    <p>&apos;Preserve extra carriage returns&apos; was substituted with a set of &apos;Blank Lines&apos; settings.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"src-30083277_MigratingfromAptanaStudio2toAptanaStudio3-JavaScript\">\n        <h4 class=\"heading \"><span>JavaScript</span></h4>\n<ul class=\" \"><li class=\" \">    <p>&quot;Insert new line before &apos;if&apos; statement&quot; was removed &#x2013; We always insert one now.    </p>\n</li><li class=\" \">    <p>&quot;Insert new line before &apos;return&apos; statement&quot; was removed &#x2013; We always insert one now.    </p>\n</li><li class=\" \">    <p>The &apos;if else&apos; group settings in the &apos;Control Statement&apos; is not supported in Studio 3. Many of those settings are actually controlled by the &apos;New Lines&apos; general settings.    </p>\n</li></ul>    <p>The two items that are removed from the Studio 3 formatter are: &quot;Keep &apos;then&apos; statement on same line&quot; and &quot;Keep &apos;return&apos; or &apos;throw&apos; clause on one line&quot;.    </p>\n<ul class=\" \"><li class=\" \">    <p>&quot;&apos;break&apos; statements&quot; indentation control was removed.    </p>\n</li><li class=\" \">    <p>&quot;Preserve extra carriage returns&quot; was substituted with a set of &apos;Blank Lines&apos; settings.    </p>\n</li><li class=\" \">    <p>&quot;Add space after closing paren in function declaration&quot; was removed.    </p>\n</li><li class=\" \">    <p>&quot;Object initializer&quot; braces location is now controlled by the &quot;Blocks&quot; braces location.    </p>\n</li></ul>    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083277\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Migrating from Aptana Studio 2 to Aptana Studio 3"});