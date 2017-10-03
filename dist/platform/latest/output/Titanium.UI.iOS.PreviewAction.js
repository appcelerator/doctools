Ext.data.JsonP['Titanium_UI_iOS_PreviewAction']({"tagname":"class","name":"Titanium.UI.iOS.PreviewAction","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iOS/PreviewAction.yml","description":["<p>The PreviewAction is created by the {@link Titanium.UI.iOS#method-createPreviewAction} method. Set the\n<code>title</code> property when creating a PreviewAction object.</p>\n\n<p>Use this class to configure preview actions used in the {@link Titanium.UI.iOS.PreviewContext}. The actions\ncan also be part of the {@link Titanium.UI.iOS.PreviewActionGroup#property-actions} property.</p>\n\n<p>For an example, see {@link Titanium.UI.iOS.PreviewContext}.</p>\n\n<p>See also:</p>\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/3DTouchAPIs.html\">iOS Developer Library: Adopting 3D Touch on iPhone</a></li>\n</ul>"]},"private":null,"id":"class-Titanium.UI.iOS.PreviewAction","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"style","tagname":"property","owner":"Titanium.UI.iOS.PreviewAction","meta":{},"id":"property-style"},{"name":"title","tagname":"property","owner":"Titanium.UI.iOS.PreviewAction","meta":{"description":["<p>Provides a title to be shown when \"peeking\" a view referenced in the {@link Titanium.UI.iOS.PreviewContext}.</p>"]},"id":"property-title"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getStyle","tagname":"method","owner":"Titanium.UI.iOS.PreviewAction","meta":{},"id":"method-getStyle"},{"name":"getTitle","tagname":"method","owner":"Titanium.UI.iOS.PreviewAction","meta":{},"id":"method-getTitle"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"setStyle","tagname":"method","owner":"Titanium.UI.iOS.PreviewAction","meta":{},"id":"method-setStyle"},{"name":"setTitle","tagname":"method","owner":"Titanium.UI.iOS.PreviewAction","meta":{},"id":"method-setTitle"}],"event":[{"name":"click","tagname":"event","owner":"Titanium.UI.iOS.PreviewAction","meta":{"description":["<p>This event provides different properties depending on the view the {@link Titanium.UI.iOS.PreviewContext}\nis assigned to. Every event has the <code>index</code> property to identify the clicked action. If the {@link Titanium.UI.iOS.PreviewContext}\nis assigned to a {@link Titanium.UI.ListView}, the event provides the additional properties <code>itemIndex</code>, <code>sectionIndex</code> \nand <code>itemId</code> to identify the previewed row and section, respectively.</p>"]},"id":"event-click"}],"css_var":[],"css_mixin":[]},"linenr":225742,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-UI-iOS-PreviewAction"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.1.0</li></ul>","editurl":null,"description":"<p><p>The PreviewAction is created by the <a href=\"#!/api/Titanium.UI.iOS-method-createPreviewAction\" rel=\"Titanium.UI.iOS-method-createPreviewAction\" class=\"docClass\">Titanium.UI.iOS.createPreviewAction</a> method. Set the\n<code>title</code> property when creating a PreviewAction object.</p>\n\n\n\n\n<p>Use this class to configure preview actions used in the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>. The actions\ncan also be part of the <a href=\"#!/api/Titanium.UI.iOS.PreviewActionGroup-property-actions\" rel=\"Titanium.UI.iOS.PreviewActionGroup-property-actions\" class=\"docClass\">Titanium.UI.iOS.PreviewActionGroup.actions</a> property.</p>\n\n\n\n\n<p>For an example, see <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>.</p>\n\n\n\n\n<p>See also:</p>\n\n\n\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/3DTouchAPIs.html\">iOS Developer Library: Adopting 3D Touch on iPhone</a></li>\n</ul>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.UI.iOS.PreviewAction"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.1.0'>iPhone 5.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.UI.iOS.PreviewAction</strong></div></div></div><div class='doc-contents'><p>A PreviewAction provides options to configure actions used by the iOS 9 3D-Touch \"Peek and Pop\"\nfeature.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 9.0 and later \n</p>\n\n<p><p>The PreviewAction is created by the <a href=\"#!/api/Titanium.UI.iOS-method-createPreviewAction\" rel=\"Titanium.UI.iOS-method-createPreviewAction\" class=\"docClass\">Titanium.UI.iOS.createPreviewAction</a> method. Set the\n<code>title</code> property when creating a PreviewAction object.</p>\n\n\n\n\n<p>Use this class to configure preview actions used in the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>. The actions\ncan also be part of the <a href=\"#!/api/Titanium.UI.iOS.PreviewActionGroup-property-actions\" rel=\"Titanium.UI.iOS.PreviewActionGroup-property-actions\" class=\"docClass\">Titanium.UI.iOS.PreviewActionGroup.actions</a> property.</p>\n\n\n\n\n<p>For an example, see <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>.</p>\n\n\n\n\n<p>See also:</p>\n\n\n\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/3DTouchAPIs.html\">iOS Developer Library: Adopting 3D Touch on iPhone</a></li>\n</ul>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-style' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-property-style' class='name expandable'>style</a><span> : Number</span></div><div class='description'><div class='short'>The style of the action. ...</div><div class='long'><p>The style of the action.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DEFAULT\" rel=\"Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DEFAULT\" class=\"docClass\">Titanium.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_SELECTED\" rel=\"Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_SELECTED\" class=\"docClass\">Titanium.UI.iOS.PREVIEW_ACTION_STYLE_SELECTED</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DESTRUCTIVE\" rel=\"Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DESTRUCTIVE\" class=\"docClass\">Titanium.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE</a>\n</li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DEFAULT\" rel=\"Titanium.UI.iOS-property-PREVIEW_ACTION_STYLE_DEFAULT\" class=\"docClass\">Titanium.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT</a></p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-property-title' class='name not-expandable'>title</a><span> : String</span></div><div class='description'><div class='short'><p>The title of the action.</p>\n\n</div><div class='long'><p>The title of the action.</p>\n\n<p><p>Provides a title to be shown when \"peeking\" a view referenced in the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>.</p>\n\n</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-method-getStyle' class='name expandable'>getStyle</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the style property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.UI.iOS.PreviewAction-property-style\" rel=\"Titanium.UI.iOS.PreviewAction-property-style\" class=\"docClass\">style</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the title property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.UI.iOS.PreviewAction-property-title\" rel=\"Titanium.UI.iOS.PreviewAction-property-title\" class=\"docClass\">title</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-method-setStyle' class='name expandable'>setStyle</a>( <span class='pre'>style</span> )</div><div class='description'><div class='short'>Sets the value of the style property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.UI.iOS.PreviewAction-property-style\" rel=\"Titanium.UI.iOS.PreviewAction-property-style\" class=\"docClass\">style</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>style</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )</div><div class='description'><div class='short'>Sets the value of the title property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.UI.iOS.PreviewAction-property-title\" rel=\"Titanium.UI.iOS.PreviewAction-property-title\" class=\"docClass\">title</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-click' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.iOS.PreviewAction'>Titanium.UI.iOS.PreviewAction</span></div><a href='#!/api/Titanium.UI.iOS.PreviewAction-event-click' class='name expandable'>click</a></div><div class='description'><div class='short'>Fired when the device detects a click against a preview action. ...</div><div class='long'><p>Fired when the device detects a click against a preview action.</p>\n\n<p><p>This event provides different properties depending on the view the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>\nis assigned to. Every event has the <code>index</code> property to identify the clicked action. If the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>\nis assigned to a <a href=\"#!/api/Titanium.UI.ListView\" rel=\"Titanium.UI.ListView\" class=\"docClass\">Titanium.UI.ListView</a>, the event provides the additional properties <code>itemIndex</code>, <code>sectionIndex</code> \nand <code>itemId</code> to identify the previewed row and section, respectively.</p>\n\n</p><h3 class=\"pa\">Properties</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of the clicked action.</p>\n\n</div></li><li><span class='pre'>itemIndex</span> : Number<div class='sub-desc'><p>The index of the clicked row, if the <code>previewContext</code> property of the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>\nis a <a href=\"#!/api/Titanium.UI.ListView\" rel=\"Titanium.UI.ListView\" class=\"docClass\">Titanium.UI.ListView</a>.</p>\n\n</div></li><li><span class='pre'>sectionIndex</span> : Number<div class='sub-desc'><p>The index of the clicked section, if the <code>previewContext</code> property of the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>\nis a <a href=\"#!/api/Titanium.UI.ListView\" rel=\"Titanium.UI.ListView\" class=\"docClass\">Titanium.UI.ListView</a>.</p>\n\n</div></li><li><span class='pre'>itemId</span> : String<div class='sub-desc'><p>The item ID of cell, if the <code>previewContext</code> property of the <a href=\"#!/api/Titanium.UI.iOS.PreviewContext\" rel=\"Titanium.UI.iOS.PreviewContext\" class=\"docClass\">Titanium.UI.iOS.PreviewContext</a>\nis a <a href=\"#!/api/Titanium.UI.ListView\" rel=\"Titanium.UI.ListView\" class=\"docClass\">Titanium.UI.ListView</a>.</p>\n\n</div></li><li><span class='pre'>bubbles</span> : Boolean<div class='sub-desc'><p>True if the event will try to bubble up if possible.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>cancelBubble</span> : Boolean<div class='sub-desc'><p>Set to true to stop the event from bubbling.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>source</span> : Object<div class='sub-desc'><p>Source object that fired the event.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Name of the event fired.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li></ul></div></div></div></div></div></div></div>"});