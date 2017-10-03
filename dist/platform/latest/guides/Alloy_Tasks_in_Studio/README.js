Ext.data.JsonP['Alloy_Tasks_in_Studio']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Tasks in Studio</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-37536787\" class=\"content\">\n                        <h1>Alloy Tasks in Studio</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-CreatinganAlloyProject\">Creating an Alloy Project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-CreatingaController\">Creating a Controller</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-CreatingaModel\">Creating a Model</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-CreatingaMigration\">Creating a Migration</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-CreatingaWidget\">Creating a Widget</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-NavigatingeasilyamongAlloyelementfiles\">Navigating easily among Alloy element files</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-BuildingandRunninganApplication\">Building and Running an Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-UsingContentAssistance\">Using Content Assistance</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Tasks_in_Studio-section-src-37536787_AlloyTasksinStudio-DebuggingAlloyCode\">Debugging Alloy Code</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-37536787_AlloyTasksinStudio-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>You can use Studio 3.0.0 or later to create and manage Alloy projects.    </p>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-CreatinganAlloyProject\">\n        <h3 class=\"heading \"><span>Creating an Alloy Project</span></h3>\n    <p>To create a new Alloy project, start Studio, then    </p>\n<ol class=\" \"><li class=\" \">    <p>From the menu, select <strong class=\" \">File &gt; New &gt; Mobile Project</strong>. The <strong class=\" \">New Mobile Project</strong> wizard appears.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Alloy</strong> in the <strong class=\" \">Available Templates</strong> box, then click the <strong class=\" \">Next</strong> button.    </p>\n</li><li class=\" \">    <p>Complete all of the fields, then click the <strong class=\" \">Finish</strong> button.    </p>\n</li></ol>    <p>A new skeleton Alloy project will be generated. Note that the <tt class=\" \">Resources</tt> folder is hidden from the App and Project Explorer.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-CreatingaController\">\n        <h3 class=\"heading \"><span>Creating a Controller</span></h3>\n    <p>To create a new controller with a view and style,    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on your project in the App or Project Explorer.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">New &gt; Alloy Controller</strong>. The <strong class=\" \">New Controller</strong> dialog box appears.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Controller name</strong> textbox, enter the name of the controller. A warning appears if a duplicate exists.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button.    </p>\n</li></ol>    <p>This creates <tt class=\" \">app/controllers/&lt;name&gt;.js</tt>, <tt class=\" \">app/styles/&lt;name&gt;.tss</tt>, and <tt class=\" \">app/views/&lt;name&gt;.xml</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-CreatingaModel\">\n        <h3 class=\"heading \"><span>Creating a Model</span></h3>\n    <p>To create a new model,    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on your project in the App or Project Explorer.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">New &gt; Alloy Model</strong>. The <strong class=\" \">New Model</strong> dialog box appears.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Model name</strong> textbox, enter the name of the model. A warning appears if a duplicate exists.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Adapter</strong>drop-down box, select the type of storage.    </p>\n<ol class=\" \"><li class=\" \">    <p>For sql, in the <strong class=\" \">Schema</strong> table, enter the names and data types of the database schema.    </p>\n</li></ol></li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button.    </p>\n</li></ol>    <p>This creates <tt class=\" \">app/models/&lt;name&gt;.js</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-CreatingaMigration\">\n        <h3 class=\"heading \"><span>Creating a Migration</span></h3>\n    <p>To generate a standalone migration for a specific model,    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on your project in the App or Project Explorer.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">New &gt; Alloy Migration</strong>. The <strong class=\" \">New Migration</strong> dialog box appears.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Migration name</strong> textbox, enter the name of the model that needs a database migration file.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button.    </p>\n</li></ol>    <p>This creates a timestamp-ordered migration file for the model specified, that is, <tt class=\" \">app/migrations/DATETIME_&lt;name&gt;.js</tt>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-CreatingaWidget\">\n        <h3 class=\"heading \"><span>Creating a Widget</span></h3>\n    <p>To create a basic widget,    </p>\n<ol class=\" \"><li class=\" \">    <p>Right-click on your project in the App or Project Explorer.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">New &gt; Alloy Widget</strong>. The <strong class=\" \">New Widget</strong> dialog box appears.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Widget name</strong> textbox, enter the name of the migration. A warning appears if a duplicate exists.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">OK</strong> button.    </p>\n</li></ol>    <p>This creates a default widget in the projects&apos;s <tt class=\" \">app/widgets</tt> path, generating a configuration file, controller, style and view: <tt class=\" \">app/widgets/&lt;name&gt;/widget.json</tt>, <tt class=\" \">app/widgets/&lt;name&gt;/controllers/widget.js</tt>, <tt class=\" \">app/widgets/&lt;name&gt;/styles/widget.tss</tt>, and <tt class=\" \">app/widgets/&lt;name&gt;/views/widget.xml</tt>. Additionally, the widget is automatically added as a dependency in the Alloy project&apos;s configuration file <tt class=\" \">config.json</tt>.    </p>\n    <p>Starting with Studio 4.1.0, after you create a Widget, you can create additional controllers, styles and views for your widget. Right-click on the widget folder (not the <tt class=\" \">./app/widgets/</tt> folder but its subfolders) and select <strong class=\" \">New</strong>, then choose either <strong class=\" \">Widget Controller</strong>, <strong class=\" \">Widget Style</strong> or <strong class=\" \">Widget View</strong>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-NavigatingeasilyamongAlloyelementfiles\">\n        <h3 class=\"heading \"><span>Navigating easily among Alloy element files</span></h3>\n    <p>When developing an Alloy project you will frequently need to switch between the related controller, view, and style files (<tt class=\" \">foo.js</tt>, <tt class=\" \">foo.xml</tt>, and <tt class=\" \">foo.tss</tt>, for example). Studio provides keyboard shortcuts and menu commands for switching quickly among those files.    </p>\n    <p><strong class=\" \">To navigate Alloy elements using menu commands</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Open an Alloy element file (<tt class=\" \">foo.js</tt>, for example).    </p>\n</li><li class=\" \">    <p>Right-click in the editor window and select <strong class=\" \">Open Alloy Elements.</strong>    </p>\n</li><li class=\" \">    <p>From the context menu, select the related Alloy element file that you want to open: <strong class=\" \">Controller File</strong>, <strong class=\" \">View File</strong>, or <strong class=\" \">Style File</strong>.    </p>\n</li></ol>    <p>Which menu options appear depends on the type of file you&apos;re currently editing. For example, if you&apos;re editing an Alloy view (.xml) file the context menu will contain <strong class=\" \">Controller File</strong>  and <strong class=\" \">Style File</strong> options; if you&apos;re viewing an Alloy style (.tss) file the menu will contain <strong class=\" \">Controller File</strong> and <strong class=\" \">View File</strong> options.    </p>\n    <p>    <img src=\"images/download/attachments/37536787/image2013-10-17_13_32_19.png\" alt=\"images/download/attachments/37536787/image2013-10-17_13_32_19.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>You can also use the following equivalent keyboard shortcuts:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Keyboard shortcut    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Opens    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Cmd+Shift+C</strong> (Mac), <strong class=\" \">Ctrl+Shift+C</strong> (Window)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Controller file    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Cmd+Shift+S</strong> (Mac), <strong class=\" \">Ctrl+Shift+S</strong> (Window)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Style file    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Cmd+Shift+V</strong> (Mac), <strong class=\" \">Ctrl+Shift+V</strong> (Window)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>View file    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-BuildingandRunninganApplication\">\n        <h3 class=\"heading \"><span>Building and Running an Application</span></h3>\n    <p>    <img src=\"images/download/attachments/37523934/LaunchModes.png\" alt=\"images/download/attachments/37523934/LaunchModes.png\" class=\"confluence-embedded-image confluence-external-resource\">\n        </img></p>\n    <p>To launch an Alloy project in run mode, first select the project in the <strong class=\" \">Project Explorer</strong> view, then in the global tool bar, select <strong class=\" \">Run</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list and a device from the <strong class=\" \">Target</strong> drop-down list.  If the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the target is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-UsingContentAssistance\">\n        <h3 class=\"heading \"><span>Using Content Assistance</span></h3>\n    <p>Studio 3.1.0 and later supports content assistance with Alloy files.  Currently, code completion is available for the XML tags and attributes (Titanium properties and events with &quot;on&quot;) with the Alloy View XML files; element, class and ID attributes for TSS files, and for the JavaScript code with Alloy Controllers.  Just start typing a name for an ID, element, class or attribute and a pop-up should appear with suggestions.    </p>\n    <p>For Alloy Controllers, if you type in an element referenced by an id attribute in the associated view file, a pop-up should appear providing assistance for that object.  For example, if you have the following defined in markup:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window id=</code><code class=\"string\">&quot;win&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">&quot;label&quot;</code><code class=\"plain\">&gt;Foo&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>In the associated controller file, if you type <tt class=\" \">$.win.</tt> (with the trailing period), properties and methods for a Ti.UI.Window class pop-up, and if you type <tt class=\" \">$.label.</tt>, properties and methods for a Ti.UI.Label class pop-up.  You need to type the entire name to receive assistance.    </p>\n    <p>For TSS files, if you type in an element referenced by an id or class attribute in the associated view file, a pop-up should appear providing assistance for that object.  For example, using the previous markup example, in the associated TSS file, if you type <tt class=\" \">&quot;.container&quot;:{</tt> , properties for a Ti.UI.Window class pop-up, and if you type <tt class=\" \">&quot;#label&quot;:{</tt>, properties for a Ti.UI.Label class pop-up.  You can also type the element name.  You need to type the entire name of the element, class or ID to receive assistance.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37536787_AlloyTasksinStudio-DebuggingAlloyCode\">\n        <h3 class=\"heading \"><span>Debugging Alloy Code</span></h3>\n    <p>Refer to the <a class=\"document-link \" href=\"#!/guide/Alloy_Debugging_and_Troubleshooting\">Alloy Debugging and Troubleshooting</a> guide.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37536787\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Tasks in Studio"});