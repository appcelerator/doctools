Ext.data.JsonP['Alloy_Command-Line_Interface_Reference']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Command-Line Interface Reference</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-35620083\" class=\"content\">\n                        <h1>Alloy Command-Line Interface Reference</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Command-LineInterfaceInstallation\">Command-Line Interface Installation</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-ManualInstallation\">Manual Installation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-BleedingEdgeInstallation\">Bleeding Edge Installation</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-New\">New</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Generate\">Generate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Install\">Install</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Compile\">Compile</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Run\">Run</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-i18n-extract\">i18n-extract</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Copy\">Copy</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Move\">Move</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-Remove\">Remove</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions\">Additional Options</a>    </p>\n</li></ul>    <p>The Alloy Command-Line Interface (CLI) is a command-line tool for managing and building Alloy projects.    </p>\n    <div class=\"section section-2 heading\" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Command-LineInterfaceInstallation\">\n        <h2 class=\"heading heading\"><span>Command-Line Interface Installation</span></h2>\n    <p>The Alloy command-line interface and plugin will be automatically installed by Appcelerator Studio or the Appcelerator CLI.    </p>\n    <p>If there were installation problems or if you wish to install the Alloy CLI independent of the other tools, refer to the manual installation instructions below.    </p>\n    <p>    </p>\n    <div class=\"section section-3 heading\" id=\"src-35620083_AlloyCommand-LineInterfaceReference-ManualInstallation\">\n        <h3 class=\"heading heading\"><span>Manual Installation</span></h3>\n    <p>The following steps install the latest released version of Alloy.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Titanium SDK 3.0.x or later, and the Titanium CLI need to be installed and configured before installing the Alloy CLI. See <a class=\"external-link external-link\" href=\"http://localhost/~bhatfield/arrow/platform/latest/#!/guide/Setting_up_the_Titanium_CLI\" target=\"_blank\">Setting up the Titanium CLI</a> for instructions.    </p>\n    </div>\n    <ol class=\" \"><li class=\" \">    <p>Download and install Node.js from <a class=\"external-link external-link external-link\" href=\"http://nodejs.org/#download\" target=\"_blank\">http://nodejs.org/#download</a>, which includes the npm package manager needed to install Alloy.    </p>\n</li><li class=\" \">    <p>From a console window, run the following command to install Alloy:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">sudo npm install -g alloy</code></div>\n</div>\n    </div>\n</li></ol>    <p>By default, these installation directions will install the latest Alloy release. To install a specific released version, use the same directions, except after &apos;alloy&apos;, add the at symbol (&apos;@&apos;) with the version number. For instance, executing sudo npm install -g alloy@1.0.0 will install version 1.0.0.    </p>\n    <p>    </p>\n    </div>\n    <div class=\"section section-3 heading\" id=\"src-35620083_AlloyCommand-LineInterfaceReference-BleedingEdgeInstallation\">\n        <h3 class=\"heading heading\"><span>Bleeding Edge Installation</span></h3>\n    <p>To install the latest development version of Alloy, after installing <a class=\"external-link external-link external-link\" href=\"http://nodejs.org/\" target=\"_blank\">Node.js</a> , clone the Alloy GitHub repository and perform an npm install from the Alloy project&apos;s root directory:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git clone https:</code><code class=\"comments\">//github.com/appcelerator/alloy.git</code></div>\n<div class=\"line\"><code class=\"plain\">cd alloy</code></div>\n<div class=\"line\"><code class=\"plain\">[sudo] npm install -g .</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-New\">\n        <h2 class=\"heading \"><span>New</span></h2>\n    <p>Creates a new Alloy project on top of an existing new Titanium project, that is, create a classic Titanium project first, then run the command from inside the project directory.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy </code><code class=\"keyword\">new</code><code class=\"plain\"> [&lt;project_path&gt;] [&lt;project_template&gt;] [--force] [--no-colors]</code></div>\n</div>\n    </div>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;project_path&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to a skeleton Titanium project, otherwise the current working directory is used.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;project_template&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Selects the template. Choose between <strong class=\" \">default</strong> for a single pane application or <strong class=\" \">two_tabbed</strong> or a tabbed application. Defaults to <strong class=\" \">default</strong>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>--testapp &lt;test_app_path&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Since Appcelerator CLI 5.0.0 or Alloy 1.7.6.</strong> Relative path after the <tt class=\" \">alloy/test/apps/</tt> path to a test application in the Alloy Github repo to use as the new application. For example, if you want to use the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps/ui/picker\" target=\"_blank\">picker test application</a>, run <tt class=\" \">alloy new --testapp ui/picker</tt> from a skeleton Titanium project.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-f, --force    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Forces the command to execute.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-n, --no-colors    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Disables color output.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Generate\">\n        <h2 class=\"heading \"><span>Generate</span></h2>\n    <p>Creates skeleton Alloy components.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy generate &lt;component&gt; [--widgetname &lt;widget_name&gt;] [--outputPath &lt;output_path&gt;] [--platform &lt;platform&gt;] [--force] [--no-colors] </code></div>\n</div>\n    </div>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;component&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Format is component specific.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>controller &lt;name&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Create a skeleton controller, view and style.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>jmk    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates <tt class=\" \">alloy.jmk</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>model &lt;name&gt; &lt;adapter&gt; [schema]    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates a model with the specified <tt class=\" \">name</tt>. See <a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-ModelFormat\">Model Format</a> below.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>migration &lt;model_name&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates a skeleton migration file for the specified model.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>style &lt;&lt;name&gt; | --all&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates a skeleton style file with the specified name.<br>If the name is associated with a view-controller, Alloy uses the id and class names from the markup file to populate the style file.<br>If <tt class=\" \">--all</tt> flag is specified, Alloy generates skeleton style files for all view-controllers.<br>If you add new id or class attributes to the markup file, running this command updates the style file with the new attributes.    </br></br></br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>view &lt;name&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates a skeleton view and style with the specified <tt class=\" \">name</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>widget &lt;name&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Creates a basic widget with the specified <tt class=\" \">name</tt>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>--widgetname &lt;name&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><strong class=\" \">Since Alloy 1.4.0.</strong> Creates a component for the specified widget. Can only be used to create controllers, views or styles.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-o, --outputPath &lt;outputPath&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Output path for generated code. Point to the &apos;app&apos; directory.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>--platform &lt;platform&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Create a platform-specific view or controller component, where &lt;platform&gt; is either android, ios or mobileweb.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-f, --force    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Forces the command to execute.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-n, --no-colors    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Disables color output.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-ModelFormat\">\n        <h3 class=\"heading \"><span>Model Format</span></h3>\n    <p>To generate a model, first select the adapter type:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">sql</tt> for the SQLite database for the Android and iOS platform.    </p>\n</li><li class=\" \">    <p><tt class=\" \">properties</tt> for storing models locally in Titanium SDK context.    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #999999;\">\n<tt class=\" \">localStorage</tt> for HTML5 localStorage for the Mobile Web platform. Deprecated since Alloy 1.5.0.    </span>\n    </p>\n</li></ul>    <p>For the <tt class=\" \">sql</tt> and <tt class=\" \">properties</tt> adapters, you will also need to specify a table schema. The <tt class=\" \">sql</tt> adapter type will also generate a migration file with the model.    </p>\n    <p>The table schema format for generating models is a space-delimited list of the field name, followed by a colon (&apos;:&apos;), followed by the data type. For example, specifying &apos;name:string age:number sex:varchar dob:date&apos; will create a table with four columns: &apos;name&apos; which stores a string, &apos;age&apos; which stores a number, &apos;sex&apos; which stores a character, and &apos;dob&apos; which stores a date.    </p>\n    <p>Actually, in the above example, since both the Android and iOS platforms use SQLite, none of these datatypes are available. Instead, they will be mapped based on the following:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Datatype    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>SQLite Datatype    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>string<br>varchar<br>text    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>TEXT    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>int<br>tinyint<br>smallint<br>bigint<br>integer    </br></br></br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>INTEGER    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>double<br>float<br>real    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>REAL    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>blob    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>BLOB    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>decimal<br>number<br>date<br>datetime<br>boolean    </br></br></br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>NUMERIC    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>null    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>NULL    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>unknown datatype    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>TEXT    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Install\">\n        <h2 class=\"heading \"><span>Install</span></h2>\n    <p>Installs special Alloy project components.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy install &lt;module&gt; [&lt;project_path&gt;]</code></div>\n</div>\n    </div>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;module&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Format is module specific.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>plugin    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Installs the compiler plugin to hook the Alloy project to Studio.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;project_path&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to the Alloy project, otherwise the current working directory is used.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Compile\">\n        <h2 class=\"heading \"><span>Compile</span></h2>\n    <p>Compiles Alloy code to Titanium SDK code.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy compile [&lt;project_path&gt;] [--config &lt;compiler_options&gt;] [--no-colors]</code></div>\n</div>\n    </div>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&lt;project_path&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to the Alloy project, otherwise the current working directory is used.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-c, --config &lt;compiler_options&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Compiler configuration options to use. See <a class=\"document-link \" href=\"#!/guide/Alloy_Command-Line_Interface_Reference-section-src-35620083_AlloyCommand-LineInterfaceReference-CompilerOptions\">Compiler Options</a> below.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-n, --no-colors    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Disables color output.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-CompilerOptions\">\n        <h3 class=\"heading \"><span>Compiler Options</span></h3>\n    <p>The compiler options are a list of comma-delimited assignment statements (variable=value) without any spaces. For example, specifying &quot;beautify=false,deploytype=test&quot; overrides the default compiler behavior to disable beautifying the generated JavaScript files and building the application for the test environment.    </p>\n    <p>Refer to the <tt class=\" \">event.alloyConfig</tt> object in <a class=\"document-link \" href=\"#!/guide/Build_Configuration_File_(alloy.jmk)\">Build Configuration File (alloy.jmk)</a> for a list of settable compiler options.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Run\">\n        <h2 class=\"heading \"><span>Run</span></h2>\n    <p>Use the <tt class=\" \">titanium build</tt> command to run Alloy projects.  See the <a class=\"document-link \" href=\"#!/guide/Titanium_Command-Line_Interface_Reference\">Titanium Command-Line Interface Reference guide</a> for more information.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-i18n-extract\">\n        <h2 class=\"heading \"><span>i18n-extract</span></h2>\n    <p>Inspects your TSS and JS files for instances of Titanium&apos;s localization functions, extracts the i18n key from each function and adds it to the target language&apos;s strings.xml file.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n [&lt;language&gt;] [--apply]</code></div>\n</div>\n    </div>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">&lt;language&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Optional. A two-letter language code that specifies the target language. Default is <strong class=\" \"><tt class=\" \">en</tt></strong> (English).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">--apply</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Optional. If present, the command writes new localization entries to the target language&apos;s strings.xml file. If absent, a preview of the changes are displayed in the terminal window.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>The following localization functions are supported:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Locale-method-getString\">Titanium.Locale.getString()</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Locale-method-getString\">Ti.Locale.getString()</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Global-method-L\">L()</a>    </p>\n</li></ul>    <p>The syntax options for calling <tt class=\" \">alloy extract-i18n</tt> are shown below.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Show a before and after of your i18n </code><code class=\"functions\">file</code><code class=\"plain\">. Does NOT write changes to the </code><code class=\"functions\">file</code><code class=\"plain\">.</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n  </code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Write changes to </code><code class=\"string\">&quot;app/i18n/en/strings.xml&quot;</code><code class=\"plain\"> or (before Alloy 1.8.0) </code><code class=\"string\">&quot;i18n/en/strings.xml&quot;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n --apply   </code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Specify </code><code class=\"string\">&quot;es&quot;</code><code class=\"plain\"> as the language and write the changes to </code><code class=\"string\">&quot;app/i18n/es/strings.xml&quot;</code><code class=\"plain\"> or (before Alloy 1.8.0) </code><code class=\"string\">&quot;i18n/es/strings.xml&quot;</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n es --apply</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">//</code><code class=\"plain\"> Specify a different language (</code><code class=\"string\">&quot;es&quot;</code><code class=\"plain\">) and preview changes:</code></div>\n<div class=\"line\"><code class=\"plain\">alloy extract-i18n es</code></div>\n</div>\n    </div>\n    <p>Also see <a class=\"external-link external-link\" href=\"AlloyTaskswiththeCLI-Extractinglocalizationstrings\">Extracting localization strings</a> in the <a class=\"external-link external-link\" href=\"#!/guide/Alloy_Tasks_with_the_CLI\">Alloy Tasks with the CLI</a> guide.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Copy\">\n        <h2 class=\"heading \"><span>Copy</span></h2>\n    <p><strong class=\" \">Since Alloy 1.7.6 or Appcelerator CLI 5.0.0.</strong> Make a copy of an existing view-controller, which includes the controller, XML and TSS files.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy copy &lt;CONTROLLER_NAME&gt; &lt;COPIED_CONTROLLER_NAME&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Move\">\n        <h2 class=\"heading \"><span>Move</span></h2>\n    <p><strong class=\" \">Since Alloy 1.7.6 or Appcelerator CLI 5.0.0.</strong> Rename a view-controller, which includes the controller, XML and TSS files.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy move &lt;CONTROLLER_NAME&gt; &lt;NEW_CONTROLLER_NAME&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-Remove\">\n        <h2 class=\"heading \"><span>Remove</span></h2>\n    <p><strong class=\" \">Since Alloy 1.7.6 or Appcelerator CLI 5.0.0.</strong>  Removes / Deletes a view-controller, which includes the controller, XML and TSS files.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">alloy remove &lt;CONTROLLER_NAME&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-35620083_AlloyCommand-LineInterfaceReference-AdditionalOptions\">\n        <h2 class=\"heading \"><span>Additional Options</span></h2>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Options    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-h, --help    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Outputs command usage.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>-v, --version    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Outputs the version number.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=35620083\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Alloy Command-Line Interface Reference"});