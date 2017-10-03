Ext.data.JsonP['Source_Code_Conventions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Source Code Conventions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083149\" class=\"content\">\n                        <h1>Source Code Conventions</h1>\n    <p>For those contributing to the Aptana source code base, we follow a few conventions.    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-CodeSubmissionChecklist\">Code Submission Checklist</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-BasicCodingGuidelines\">Basic Coding Guidelines</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-NamingConventions\">Naming Conventions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-License\">License</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-GPL\">GPL</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-EPL\">EPL</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-PrivateCode\">Private Code</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-PMD\">PMD</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-JavaFormatting\">Java Formatting</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-ExternalizedStrings\">Externalized Strings</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Source_Code_Conventions-section-src-30083149_SourceCodeConventions-UnitTesting\">Unit Testing</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-CodeSubmissionChecklist\">\n        <h2 class=\"heading \"><span>Code Submission Checklist</span></h2>\n<ul class=\" \"><li class=\" \">    <p>License header at top of file    </p>\n</li><li class=\" \">    <p>Code passes all Checkstyle checks    </p>\n</li><li class=\" \">    <p>Code passes all PMD tests    </p>\n</li><li class=\" \">    <p>Code is formatted according to Aptana conventions    </p>\n</li><li class=\" \">    <p>Strings are externalized    </p>\n</li><li class=\" \">    <p>Code is spell-checked    </p>\n</li><li class=\" \">    <p>Code has class/method and field-level Java Docs for public and protected members    </p>\n</li><li class=\" \">    <p>There is at least one unit test for the checked-in code, preferably that does not need to run as a plugin.. Comments should be <i class=\" \">relevant</i>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-BasicCodingGuidelines\">\n        <h2 class=\"heading \"><span>Basic Coding Guidelines</span></h2>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>    </p>\n    <p>Above all, the code should be <strong class=\" \">elegant</strong>. It should be well-spaced and easy to follow.    </p>\n    </div>\n    <ul class=\" \"><li class=\" \">    <p>There are no empty try/catch blocks    </p>\n</li><li class=\" \">    <p>Don&apos;t call abstract methods in constructors (See here for an explanation: <a class=\"external-link external-link\" href=\"http://www.artima.com/forums/flat.jsp?forum=226&amp;thread=113723\" target=\"_blank\">http://www.artima.com/forums/flat.jsp?forum=226&amp;amp;thread=113723</a>)    </p>\n</li><li class=\" \">    <p>Many of these rules are encapsulated by PMD tests    </p>\n</li><li class=\" \">    <p>Private variables may begin with an underscore, but we specifically do not follow the Eclipse &apos;f&apos; prefix convention. You should be consistent within your class.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-NamingConventions\">\n        <h2 class=\"heading \"><span>Naming Conventions</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Interfaces begin with &apos;I&apos;    </p>\n</li><li class=\" \">    <p>Plugin Activator names are derived from the plugin package name.    </p>\n<ol class=\" \"><li class=\" \">    <p>Strip the first two segments from the plugin (generally &quot;com.aptana&quot; or &quot;com.appcelerator&quot; assuming a reverse domain name naming system)    </p>\n</li><li class=\" \">    <p>Initial case the rest of the segments    </p>\n</li><li class=\" \">    <p>Strip the periods    </p>\n</li><li class=\" \">    <p>Add the word &quot;Plugin&quot; at the end. Some examples:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">com.aptana.scripting</strong> -&gt; ScriptingPlugin    </p>\n</li><li class=\" \">    <p><strong class=\" \">com.appcelerator.titanium.branding</strong> -&gt; TitaniumBrandingPlugin    </p>\n</li></ul></li></ol></li><li class=\" \">    <p>Plugin-specific classes (like I*SystemProperties, I*DebugScopes, I*PreferenceConstants) also follow the same convention for the creation of the * section as plugin activators    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">com.appcelerator.titanium.core</strong> -&gt; ITitaniumCoreSystemProperties    </p>\n</li><li class=\" \">    <p><strong class=\" \">com.aptana.editor.epl</strong> -&gt; IEditorEplDebugScopes    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-License\">\n        <h2 class=\"heading \"><span>License</span></h2>\n    <p>Please ensure that the following header is at the top of each Studio file, or at least an equivalent header. We must have code which is EPL-compatible for the EPL plugins, and GPL compatable for all other Aptana plugins:    </p>\n    <div class=\"section section-3 \" id=\"src-30083149_SourceCodeConventions-GPL\">\n        <h3 class=\"heading \"><span>GPL</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\"> </code><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Aptana Studio</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Licensed under the terms of the GNU Public License (GPL) v3 (with exceptions).</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Please see the license.html included with this distribution for details.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Any modifications to this file must keep this entire header intact.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083149_SourceCodeConventions-EPL\">\n        <h3 class=\"heading \"><span>EPL</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Copyright (c) 2005-2011 by Appcelerator, Inc. All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Licensed under the terms of the Eclipse Public License (EPL).</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Please see the license.txt included with this distribution for details.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Any modifications to this file must keep this entire header intact.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083149_SourceCodeConventions-PrivateCode\">\n        <h3 class=\"heading \"><span>Private Code</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Appcelerator Titanium Studio</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Copyright (c) 2011 by Appcelerator, Inc. All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * Proprietary and Confidential - This source code is not for redistribution</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-PMD\">\n        <h2 class=\"heading \"><span>PMD</span></h2>\n    <p>We use PMD to check code consistency.    </p>\n<ol class=\" \"><li class=\" \">    <p>Within Eclipse go to  Help-&gt;Software Updates-&gt;Find and Install    </p>\n</li><li class=\" \">    <p>Choose Search for new features to install and press Next    </p>\n</li><li class=\" \">    <p>Create a New Remote Site...    </p>\n</li><li class=\" \">    <p>Input a name to your liking (for instance PMD Plug-in) and input the following URL: <a class=\"external-link external-link\" href=\"http://pmd.sf.net/eclipse\" target=\"_blank\">http://pmd.sf.net/eclipse</a>    </p>\n</li><li class=\" \">    <p>Click your way through the following pages to install the plug-in.    </p>\n</li></ol>    <p>For those interested, our PMD file is located at: <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_pmd_rules.xml\" target=\"_blank\">https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_pmd_rules.xml</a>    </p>\n    <p>You will need to download that file, set PMD preferences, clear out the existing rule set, and import the new one from this file. You can then manually run PMD on a file or package from the right-click menu.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-JavaFormatting\">\n        <h2 class=\"heading \"><span>Java Formatting</span></h2>\n    <p>Our Java formatting conventions are relatively easy going, though we do add braces, always.    </p>\n<ol class=\" \"><li class=\" \">    <p>Download the file from <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_java_formatter_preferences.xml\" target=\"_blank\">https://github.com/aptana/studio3-sdk/blob/master/tools/eclipse/aptana_java_formatter_preferences.xml</a>    </p>\n</li><li class=\" \">    <p>Within Eclipse go to Window-&gt;Preferences-&gt;Java-&gt;Code Style-&gt;Formatter    </p>\n</li><li class=\" \">    <p>Click on &quot;Import...&quot; and choose the file you just downloaded    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-ExternalizedStrings\">\n        <h2 class=\"heading \"><span>Externalized Strings</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Right-click on a file, choose &quot;Source&quot;, &quot;Externalize Strings&quot;. Make sure the &quot;Use Eclipse&apos;s String Mechanism&quot; is checked. (See how this has been done this elsewhere, with a Messages class and a messages.properties file)    </p>\n<ol class=\" \"><li class=\" \">    <p>This will require you to change the &quot;Common Prefix&quot;. Just replace the &apos;.&apos; with a &apos;<i class=\" \">&apos;. i.e. FileExplorerView. becomes FileExplorerView</i>    </p>\n</li><li class=\" \">    <p>You will need to manually rename the keys that are to be externalized from the auto-numbers it creates. Just type something useful, like a pascal-cased shorthand for the original string: &quot;ThisIsAnErrorMessage&quot;.    </p>\n</li></ol></li><li class=\" \">    <p>Do the externalization per-package, not per-plugin.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Important: make sure you add the messages.properties file to the build.properties file.</strong> You want to make sure that message.properties file is included in the binary build.    </p>\n</li><li class=\" \">    <p>Exclude <i class=\" \">all</i> strings in any unit testing plugins, or any case where it does not make sense to translate that piece of text.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Important: Use StringUtils.format() instead of &quot;string &quot; + variable.</strong> Again, take  a look at how we use this elsewhere. The easiest way to do this is to try and run the externalization wizard. Notice where you have &quot;constructed&quot; strings. Cancel out of the wizard, and then fix them. Then run the wizard again.    </p>\n</li><li class=\" \">    <p>Make sure you add the messages.properties file to source control    </p>\n</li><li class=\" \">    <p>Also ensure that you comment all the methods in the messages file to remove any generated warnings    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083149_SourceCodeConventions-UnitTesting\">\n        <h2 class=\"heading \"><span>Unit Testing</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Ensure that the current set of unit tests run before submitting your code, especially if it is a high-risk addition    </p>\n</li><li class=\" \">    <p>Make sure you&apos;ve added new unit tests for the new items you&apos;ve added. If you can&apos;t unit test it, write a unit test for something else.    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083149\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Source Code Conventions"});