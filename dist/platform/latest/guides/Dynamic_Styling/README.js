Ext.data.JsonP['Dynamic_Styling']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Dynamic Styling</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845657\" class=\"content\">\n                        <h1>Dynamic Styling</h1>\n    <p>Demonstrates different approaches to <a class=\"external-link external-link\" href=\"#!/guide/Dynamic_Styles\">changing styles at runtime</a> in Alloy. The sample application displays a menu of options that discuss or demonstrate the different approaches and techniques for dynamic styling. See each section below for a discussion of each approach.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App folder location</div>\n            <p><i class=\" \">alloy</i>/test/apps/<strong class=\" \">advanced/dynamic_styling</strong>    </p>\n    </div>\n        <p>    </p>\n    <p>    <img src=\"images/download/attachments/41845657/dynamic_styling.png\" alt=\"images/download/attachments/41845657/dynamic_styling.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-RawStyleModules\">Raw Style Modules</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-CreatingandUsingStyleObjects\">Creating and Using Style Objects</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-CreatingStyledTitaniumProxies\">Creating Styled Titanium Proxies</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-AddingandRemovingTSSClasses\">Adding and Removing TSS Classes</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-AutostyleProperty\">Autostyle Property</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-RawStyleModules\">\n        <h2 class=\"heading \"><span>Raw Style Modules</span></h2>\n    <p>    <span style=\"color: #222222;\">\nAlthough not often needed, you can access the raw style data used in the Alloy project, you can     </span>\n<tt class=\" \">require()</tt>    <span style=\"color: #222222;\">\n the styles, as shown below:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/features/rawStyle.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/features/rawStyle.js\">\n<div class=\"line\"><code class=\"plain\">var rawStyles = JSON.stringify(require(</code><code class=\"string\">&apos;alloy/styles/features/rawStyle&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">console.log(rawStyles);</code></div>\n<div class=\"line\"><code class=\"comments\">// output</code></div>\n<div class=\"line\"><code class=\"plain\">[</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isApi&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">1000.0001</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Window&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;backgroundColor&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#efefef&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;fullscreen&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;navBarHidden&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isApi&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">1000.0002</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Label&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#181818&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;height&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;SIZE&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;textAlign&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;left&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isApi&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">1000.0028</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;WebView&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;width&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;100%&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;top&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;10dp&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0003</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;top&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;50dp&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;bottom&quot;</code><code class=\"plain\">: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;right&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;10dp&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;left&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;10dp&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0004</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;blue&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#00f&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0005</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;shadow&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;shadowColor&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#88f&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;shadowOffset&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;x&quot;</code><code class=\"plain\">: </code><code class=\"value\">1</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;y&quot;</code><code class=\"plain\">: </code><code class=\"value\">3</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0006</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;dark&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;backgroundColor&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#888&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;color&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;#003&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0007</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;large&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;font&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontSize&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;32dp&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontWeight&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;bold&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0008</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;huge&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;font&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontSize&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;64dp&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontWeight&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;bold&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">      }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.0029</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;content&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;font&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontSize&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;16dp&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;fontWeight&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;normal&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">      },</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;height&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;SIZE&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;top&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;10dp&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  },</code></div>\n<div class=\"line\"><code class=\"plain\">  {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;isClass&quot;</code><code class=\"plain\">: </code><code class=\"keyword\">true</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;priority&quot;</code><code class=\"plain\">: </code><code class=\"value\">10000.003</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;key&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"string\">&quot;style&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">&quot;layout&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;vertical&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">]</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-CreatingandUsingStyleObjects\">\n        <h2 class=\"heading \"><span>Creating and Using Style Objects</span></h2>\n    <p>    <span style=\"color: #222222;\">\nThis section uses an Alloy view-controller&apos;s <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-createStyle\">createStyle()</a> method to create a new style object, which is then passed as a parameter to the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI-method-createLabel\">Ti.UI.createLabel()</a> method.     </span>\nThe following code is representative of that used in the sample app.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/features/createStyle.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/features/createStyle.js\">\n<div class=\"line\"><code class=\"plain\">var styleArgs = {</code></div>\n<div class=\"line\"><code class=\"plain\">    apiName: </code><code class=\"string\">&apos;Ti.UI.Label&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    classes: [</code><code class=\"string\">&apos;blue&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;shadow&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;large&apos;</code><code class=\"plain\">],</code></div>\n<div class=\"line\"><code class=\"plain\">    id: </code><code class=\"string\">&apos;tester&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderWidth: </code><code class=\"value\">2</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderRadius: </code><code class=\"value\">16</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderColor: </code><code class=\"string\">&apos;#000&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">var styleObject = $.createStyle(styleArgs);</code></div>\n<div class=\"line\"><code class=\"plain\">testLabel = Ti.UI.createLabel(styleObject);</code></div>\n<div class=\"line\"><code class=\"plain\">testLabel.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, changeStyle);</code></div>\n<div class=\"line\"><code class=\"plain\">$.container.add(testLabel);</code></div>\n</div>\n    </div>\n    <p>The &quot;blue&quot;, &quot;shadow&quot;, and &quot;large&quot; styles are defined in the project&apos;s global TSS file.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/app.tss</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/app.tss\">\n<div class=\"line\"><code class=\"string\">&apos;.blue&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    color: </code><code class=\"string\">&apos;#00f&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&apos;.shadow&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    shadowColor: </code><code class=\"string\">&apos;#88f&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    shadowOffset: {x:</code><code class=\"value\">1</code><code class=\"plain\">,y:</code><code class=\"value\">3</code><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"string\">&apos;.large&apos;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">    font: {</code></div>\n<div class=\"line\"><code class=\"plain\">        fontSize: </code><code class=\"string\">&apos;32dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        fontWeight: </code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <p>In the sample view, click the label to cycle through a variety of styles applied in this manner.    </p>\n    <p>    <img src=\"images/download/attachments/41845657/create_style.png\" alt=\"images/download/attachments/41845657/create_style.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-CreatingStyledTitaniumProxies\">\n        <h2 class=\"heading \"><span>Creating Styled Titanium Proxies</span></h2>\n    <p>This sample view is functionally identical to the previous &quot;Creating Style Objects&quot; sample (click the label to cycle it through a series of different styles). The difference is that it uses the <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller.UI-method-create\">Alloy.Controller.UI.create()</a> method to create and style the Label object in a single method call, rather than making <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-createStyle\">createStyle()</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI-method-createLabel\">Ti.UI.createLabel()</a> calls. The <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller.UI-method-create\">create()</a> method takes as its first parameter the API name of the object to create, which can either be the full class name (&quot;Titanium.UI.Button&quot;) or the Alloy XML element name (&quot;Button&quot;). It&apos;s second parameter is a object hash whose fields specify the styles to apply to the new object.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controller/createStyle.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controller/createStyle.js\">\n<div class=\"line\"><code class=\"plain\">var styleArgs = {</code></div>\n<div class=\"line\"><code class=\"plain\">    classes: [</code><code class=\"string\">&apos;blue&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;shadow&apos;</code><code class=\"plain\">,</code><code class=\"string\">&apos;large&apos;</code><code class=\"plain\">],</code></div>\n<div class=\"line\"><code class=\"plain\">    id: </code><code class=\"string\">&apos;tester&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderWidth: </code><code class=\"value\">2</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderRadius: </code><code class=\"value\">16</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    borderColor: </code><code class=\"string\">&apos;#000&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">testLabel = $.UI.create(</code><code class=\"string\">&apos;Label&apos;</code><code class=\"plain\">, styleArgs);</code></div>\n<div class=\"line\"><code class=\"plain\">testLabel.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, changeStyle);</code></div>\n<div class=\"line\"><code class=\"plain\">$.container.add(testLabel);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-AddingandRemovingTSSClasses\">\n        <h2 class=\"heading \"><span>Adding and Removing TSS Classes</span></h2>\n    <p>The &quot;Add/Remove Classes&quot; sample app section demonstrates using <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-addClass\">addClass()</a>, <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-removeClass\">removeClass()</a> and <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-resetClass\">resetClass()</a> methods to style objects that have already been created, either from an XML view, or by calling <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller.UI-method-create\">Alloy.Controller.UI.create()</a> or one of the Ti.UI.create* methods, such as as <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI-method-createLabel\">Titanium.UI.createLabel()</a>. This sample also demonstrates Alloy&apos;s &quot;auto-styling&quot; feature, which is also demonstrated in the <a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-AutostyleProperty\">Autostyle Property</a> section below.    </p>\n    <p>This affects the result of adding and removing TSS classes at runtime, as shown below. The two Label elements are both styled with same classes (&quot;medium shadow&quot;) but the top Label element has <tt class=\" \">autoStyle</tt> set to <tt class=\" \">true</tt>, while the bottom Label element does not.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/classes.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/classes.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Label id=</code><code class=\"string\">&quot;label1&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;medium shadow&quot;</code><code class=\"plain\">&gt;autoStyle=</code><code class=\"string\">&quot;true&quot;</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Label id=</code><code class=\"string\">&quot;label2&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;medium shadow&quot;</code><code class=\"plain\"> autoStyle=</code><code class=\"string\">&quot;false&quot;</code><code class=\"plain\">&gt;autoStyle=</code><code class=\"string\">&quot;false&quot;</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n</div>\n    </div>\n    <p>The blue button acts as a toggle that calls <tt class=\" \">addClass()</tt> and <tt class=\" \">removeClass()</tt> on both Labels to add and remove the &quot;redbg bigger&quot; classes from each Label. Initially, they both look identical, and also when the &quot;Add classes&quot; toggle is pressed. However, when those styles are removed, the auto-styled Label returns to its original state (&quot;medium shadow&quot; styles applied); the Label which is not auto-styled is set to its default styled state.    </p>\n    <p>    <img src=\"images/download/attachments/41845657/add-remove-1.png\" alt=\"images/download/attachments/41845657/add-remove-1.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-AutostyleProperty\">\n        <h2 class=\"heading \"><span>Autostyle Property</span></h2>\n    <p>    <span style=\"color: #222222;\">\nA XML view component whose     </span>\n<tt class=\" \">autostyle</tt>    <span style=\"color: #222222;\">\n attribute is set to <tt class=\" \">true</tt> has its assigned classes stored to it&apos;s runtime proxy object, making them available This can observed by viewing the console output when you run the Autostyle sample, in which only &quot;label2&quot; has auto-styling enabled. The sample     </span>\nprints the <tt class=\" \">id</tt>, <tt class=\" \">classes</tt>, and <tt class=\" \">apiName</tt> of all UI components created from XML to the console.    </p>\n    <p>    <span style=\"color: #222222;\">\nAs shown below, only the output for <tt class=\" \">label2</tt> includes a <tt class=\" \">classes</tt> field, since it&apos;s the only element with auto-styling enabled.     </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">Console output</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"Console output\">\n<div class=\"line\"><code class=\"plain\">[INFO]  ******** label1 ********</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  {</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    </code><code class=\"string\">&quot;apiName&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Ti.UI.Label&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;label1&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  }</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]   </code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  ******** label2 ********</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  {</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    </code><code class=\"string\">&quot;apiName&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;Ti.UI.Label&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    </code><code class=\"string\">&quot;classes&quot;</code><code class=\"plain\">: [</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]      </code><code class=\"string\">&quot;blue&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]      </code><code class=\"string\">&quot;huge&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]      </code><code class=\"string\">&quot;shadow&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    ]</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]    </code><code class=\"string\">&quot;id&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;label2&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">[INFO]  }</code></div>\n</div>\n    </div>\n    <p>    <span style=\"color: #222222;\">\nAutostyle is necessary to take full advantage of the <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-addClass\">addClass()</a>, <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-removeClass\">removeClass()</a> and <a class=\"external-link external-link\" href=\"#!/api/Alloy.Controller-method-resetClass\">resetClass()</a> methods    </span>\n    <span style=\"color: #222222;\">\n to properly update the view as classes are removed and added.     </span>\n    <span style=\"color: #222222;\">\nFor a better demonstration of the benefits of enabling auto-styling, see the discussion above for     </span>\n<a class=\"document-link \" href=\"#!/guide/Dynamic_Styling-section-src-41845657_DynamicStyling-AddingandRemovingTSSClasses\">Adding and Removing TSS Classes</a>    <span style=\"color: #222222;\">\n.     </span>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>There is a small performance overhead associated with enabling auto-styling on components, which is why <tt class=\" \">autoStyle</tt> is not disabled for all components by default. You should use <tt class=\" \">autoStyle</tt> only on elements that will actually use the ability to add/remove classes at runtime.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-41845657_DynamicStyling-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/guide/Dynamic_Styles\">Dynamic Styles</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845657\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Dynamic Styling"});