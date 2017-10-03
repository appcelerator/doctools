Ext.data.JsonP['Popover']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Popover</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845765\" class=\"content\">\n                        <h1>Popover</h1>\n    <p>Demonstrates how to use a PopOver control iPad devices to present temporary information.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">ui/popover</strong>    </p>\n    </div>\n        <p>    <span style=\"color: #484848;\">\n    <img src=\"images/download/attachments/41845765/popover.gif\" alt=\"images/download/attachments/41845765/popover.gif\" class=\"confluence-embedded-image\" width=\"500\">\n<br>    </br></img></span>\n    </p>\n    <p>    <span style=\"color: #484848;\">\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iPad.Popover\">Popovers</a> are used to present temporary information in a non-modal manner. The popover remains visible until the user taps outside of the popover window, or it is explicitly dismissed. The main index.xml view presents two buttons, &quot;Popover&quot; and &quot;Popover with content view&quot; that call the view-controller&apos;s <tt class=\" \">openPopover()</tt> and    </span>\n <tt class=\" \">openPopoverWithContentView()</tt>, respectively, when clicked.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/index.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/index.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window layout=</code><code class=\"string\">&quot;vertical&quot;</code><code class=\"plain\"> backgroundColor=</code><code class=\"string\">&quot;white&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;button1&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;openPopover&quot;</code><code class=\"plain\"> top=</code><code class=\"string\">&quot;20&quot;</code><code class=\"plain\">&gt;popover&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button id=</code><code class=\"string\">&quot;button2&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;openPopoverWithContentView&quot;</code><code class=\"plain\">&gt;popover with content view&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #484848;\">\nThe popover.xml and popover_with_window.xml views each declare a &lt;Popover&gt; element that, in turn, contains a &lt;ContentView&gt; element. The &lt;ContentView&gt; element contains the actual content that is displayed by the popup.<br>    </br></span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/popover.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/popover.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Popover title=</code><code class=\"string\">&quot;popover&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;300&quot;</code><code class=\"plain\"> width=</code><code class=\"string\">&quot;250&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ContentView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;NavigationWindow id=</code><code class=\"string\">&quot;navWindow&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Button onClick=</code><code class=\"string\">&quot;showAlert&quot;</code><code class=\"plain\">&gt;left&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;/LeftNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Button onClick=</code><code class=\"string\">&quot;showAlert&quot;</code><code class=\"plain\">&gt;right&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;/RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;Label&gt;I&apos;m a popover&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/NavigationWindow&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ContentView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Popover&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/popover_with_window.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/popover_with_window.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;Popover title=</code><code class=\"string\">&quot;popover&quot;</code><code class=\"plain\"> height=</code><code class=\"string\">&quot;300&quot;</code><code class=\"plain\"> width=</code><code class=\"string\">&quot;250&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;ContentView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;NavigationWindow id=</code><code class=\"string\">&quot;navWindow&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Button title=</code><code class=\"string\">&quot;Open Window&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;open_window&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;/RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;Label&gt;This is a window in a popover&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/NavigationWindow&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/ContentView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/Popover&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #484848;\">\nWhen a button on the main view is clicked, the main view-controller gets a reference to a popover XML view, and calls its show() method, passing it a <a class=\"external-link external-link\" href=\"#!/api/PopoverParams\">PopoverParams</a> object whose <tt class=\" \">view</tt> property that specifies the view to which the popover should be anchored.<br>    </br></span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"plain\">function openPopover() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.Platform.osname === </code><code class=\"string\">&apos;ipad&apos;</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var popover = Alloy.createController(</code><code class=\"string\">&apos;popover&apos;</code><code class=\"plain\">).getView();</code></div>\n<div class=\"line\"><code class=\"plain\">        popover.show({view:$.button1});</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Popover only supported on iPad&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function openPopoverWithContentView() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (Ti.Platform.osname === </code><code class=\"string\">&apos;ipad&apos;</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var popover = Alloy.createController(</code><code class=\"string\">&apos;popover_with_window&apos;</code><code class=\"plain\">).getView();</code></div>\n<div class=\"line\"><code class=\"plain\">        popover.show({view:$.button2});</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Popover only supported on iPad&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845765_Popover-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.iPad.Popover\">Titanium.UI.iPad.Popover</a> API reference    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/PopoverParams\">PopoverParams (abstract type</a>) API reference    </p>\n</li></ul>    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845765\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Popover"});