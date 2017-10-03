Ext.data.JsonP['Titanium_Android_PendingIntent']({"tagname":"class","name":"Titanium.Android.PendingIntent","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.5"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/PendingIntent.yml","description":["<p>Use the {@link Titanium.Android#method-createPendingIntent} method to create a pending intent.</p>\n\n<p>The type of <code>Intent</code> you pass to <code>createPendingIntent</code>  determines what kind of \n<code>PendingIntent</code> is created.  Each type corresponds directly with a get method on \nAndroid's PendingIntent:</p>\n\n<ul>\n<li><p>To create a <code>PendingIntent</code> that starts an activity, pass in an activity intent, \ncreated with {@link Titanium.Android#method-createIntent createIntent}. This is equivalent to\ncalling the native Android <code>PendingIntent.getActivity</code> method. See\n<a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getActivity%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getActivity in the Android API Reference</a></p></li>\n<li><p>To create a <code>PendingIntent</code> that starts a service, pass in a service intent,\ncreated with {@link Titanium.Android#method-createServiceIntent createServiceIntent}. This is \n equivalent to calling the native Android <code>PendingIntent.getService</code> method. See \n <a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getService%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getService in the Android API Reference</a>.</p></li>\n</ul>\n\n<p>The <code>PendingIntent</code> is always associated with the activity that was the current activity\nwhen the intent was created.</p>\n\n<p>Note that this <code>PendingIntent</code> is designed primarily to be used with the \n{@link Titanium.Android.Notification Notification} object. It does not support all features \nof the native Android <code>PendingIntent</code> -- in particular, \nbroadcast pending intents are not supported.</p>\n\n<p>See also: </p>\n\n<ul>\n<li><a href=\"http://developer.android.com/reference/android/app/PendingIntent.html\">PendingIntent in the Android API Reference</a></li>\n</ul>"]},"private":null,"id":"class-Titanium.Android.PendingIntent","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"flags","tagname":"property","owner":"Titanium.Android.PendingIntent","meta":{"creationOnly":[null]},"id":"property-flags"},{"name":"intent","tagname":"property","owner":"Titanium.Android.PendingIntent","meta":{"creationOnly":[null]},"id":"property-intent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"updateCurrentIntent","tagname":"property","owner":"Titanium.Android.PendingIntent","meta":{"creationOnly":[null]},"id":"property-updateCurrentIntent"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getFlags","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-getFlags"},{"name":"getIntent","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-getIntent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getUpdateCurrentIntent","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-getUpdateCurrentIntent"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setFlags","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-setFlags"},{"name":"setIntent","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-setIntent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"setUpdateCurrentIntent","tagname":"method","owner":"Titanium.Android.PendingIntent","meta":{},"id":"method-setUpdateCurrentIntent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":58766,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Android-PendingIntent"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li></ul>","editurl":null,"description":"<p><p>Use the <a href=\"#!/api/Titanium.Android-method-createPendingIntent\" rel=\"Titanium.Android-method-createPendingIntent\" class=\"docClass\">Titanium.Android.createPendingIntent</a> method to create a pending intent.</p>\n\n\n\n\n<p>The type of <code>Intent</code> you pass to <code>createPendingIntent</code>  determines what kind of \n<code>PendingIntent</code> is created.  Each type corresponds directly with a get method on \nAndroid's PendingIntent:</p>\n\n\n\n\n<ul>\n<li><p>To create a <code>PendingIntent</code> that starts an activity, pass in an activity intent, \ncreated with <a href=\"#!/api/Titanium.Android-method-createIntent\" rel=\"Titanium.Android-method-createIntent\" class=\"docClass\">createIntent</a>. This is equivalent to\ncalling the native Android <code>PendingIntent.getActivity</code> method. See\n<a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getActivity%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getActivity in the Android API Reference</a></p></li>\n<li><p>To create a <code>PendingIntent</code> that starts a service, pass in a service intent,\ncreated with <a href=\"#!/api/Titanium.Android-method-createServiceIntent\" rel=\"Titanium.Android-method-createServiceIntent\" class=\"docClass\">createServiceIntent</a>. This is \n equivalent to calling the native Android <code>PendingIntent.getService</code> method. See \n <a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getService%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getService in the Android API Reference</a>.</p></li>\n</ul>\n\n\n\n\n<p>The <code>PendingIntent</code> is always associated with the activity that was the current activity\nwhen the intent was created.</p>\n\n\n\n\n<p>Note that this <code>PendingIntent</code> is designed primarily to be used with the \n<a href=\"#!/api/Titanium.Android.Notification\" rel=\"Titanium.Android.Notification\" class=\"docClass\">Notification</a> object. It does not support all features \nof the native Android <code>PendingIntent</code> -- in particular, \nbroadcast pending intents are not supported.</p>\n\n\n\n\n<p>See also: </p>\n\n\n\n\n<ul>\n<li><a href=\"http://developer.android.com/reference/android/app/PendingIntent.html\">PendingIntent in the Android API Reference</a></li>\n</ul>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Android.PendingIntent"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.5'>Android 1.5</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.Android.PendingIntent</strong></div></div></div><div class='doc-contents'><p>The Titanium binding of an Android <code>PendingIntent</code>.</p>\n\n<p><p>Use the <a href=\"#!/api/Titanium.Android-method-createPendingIntent\" rel=\"Titanium.Android-method-createPendingIntent\" class=\"docClass\">Titanium.Android.createPendingIntent</a> method to create a pending intent.</p>\n\n\n\n\n<p>The type of <code>Intent</code> you pass to <code>createPendingIntent</code>  determines what kind of \n<code>PendingIntent</code> is created.  Each type corresponds directly with a get method on \nAndroid's PendingIntent:</p>\n\n\n\n\n<ul>\n<li><p>To create a <code>PendingIntent</code> that starts an activity, pass in an activity intent, \ncreated with <a href=\"#!/api/Titanium.Android-method-createIntent\" rel=\"Titanium.Android-method-createIntent\" class=\"docClass\">createIntent</a>. This is equivalent to\ncalling the native Android <code>PendingIntent.getActivity</code> method. See\n<a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getActivity%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getActivity in the Android API Reference</a></p></li>\n<li><p>To create a <code>PendingIntent</code> that starts a service, pass in a service intent,\ncreated with <a href=\"#!/api/Titanium.Android-method-createServiceIntent\" rel=\"Titanium.Android-method-createServiceIntent\" class=\"docClass\">createServiceIntent</a>. This is \n equivalent to calling the native Android <code>PendingIntent.getService</code> method. See \n <a href=\"http://developer.android.com/reference/android/app/PendingIntent.html#getService%28android.content.Context, int, android.content.Intent, int%29\">PendingIntent.getService in the Android API Reference</a>.</p></li>\n</ul>\n\n\n\n\n<p>The <code>PendingIntent</code> is always associated with the activity that was the current activity\nwhen the intent was created.</p>\n\n\n\n\n<p>Note that this <code>PendingIntent</code> is designed primarily to be used with the \n<a href=\"#!/api/Titanium.Android.Notification\" rel=\"Titanium.Android.Notification\" class=\"docClass\">Notification</a> object. It does not support all features \nof the native Android <code>PendingIntent</code> -- in particular, \nbroadcast pending intents are not supported.</p>\n\n\n\n\n<p>See also: </p>\n\n\n\n\n<ul>\n<li><a href=\"http://developer.android.com/reference/android/app/PendingIntent.html\">PendingIntent in the Android API Reference</a></li>\n</ul>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-flags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-property-flags' class='name expandable'>flags</a><span> : Number</span><strong class='creationOnly signature' >Creation-Only</strong></div><div class='description'><div class='short'>Flags used for creating the Pending Intent. ...</div><div class='long'><p>Flags used for creating the Pending Intent.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Android-property-FLAG_CANCEL_CURRENT\" rel=\"Titanium.Android-property-FLAG_CANCEL_CURRENT\" class=\"docClass\">Titanium.Android.FLAG_CANCEL_CURRENT</a>\n <li> <a href=\"#!/api/Titanium.Android-property-FLAG_NO_CREATE\" rel=\"Titanium.Android-property-FLAG_NO_CREATE\" class=\"docClass\">Titanium.Android.FLAG_NO_CREATE</a>\n <li> <a href=\"#!/api/Titanium.Android-property-FLAG_ONE_SHOT\" rel=\"Titanium.Android-property-FLAG_ONE_SHOT\" class=\"docClass\">Titanium.Android.FLAG_ONE_SHOT</a>\n <li> <a href=\"#!/api/Titanium.Android-property-FLAG_UPDATE_CURRENT\" rel=\"Titanium.Android-property-FLAG_UPDATE_CURRENT\" class=\"docClass\">Titanium.Android.FLAG_UPDATE_CURRENT</a>\n</li></li></li></li></ul></p>\n\n</div></div></div><div id='property-intent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-property-intent' class='name not-expandable'>intent</a><span> : <a href=\"#!/api/Titanium.Android.Intent\" rel=\"Titanium.Android.Intent\" class=\"docClass\">Titanium.Android.Intent</a></span><strong class='creationOnly signature' >Creation-Only</strong></div><div class='description'><div class='short'><p>The intent data to pass to the <a href=\"#!/api/Titanium.Android.Activity\" rel=\"Titanium.Android.Activity\" class=\"docClass\">Activity</a> launched by this <code>PendingIntent</code>.</p>\n\n</div><div class='long'><p>The intent data to pass to the <a href=\"#!/api/Titanium.Android.Activity\" rel=\"Titanium.Android.Activity\" class=\"docClass\">Activity</a> launched by this <code>PendingIntent</code>.</p>\n\n</div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-updateCurrentIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-property-updateCurrentIntent' class='name expandable'>updateCurrentIntent</a><span> : Boolean</span><strong class='creationOnly signature' >Creation-Only</strong></div><div class='description'><div class='short'>If this property is true, flag Titanium.Android.FLAG_UPDATE_CURRENT will be\nappended to flags automatically. ...</div><div class='long'><p>If this property is true, flag <a href=\"#!/api/Titanium.Android-property-FLAG_UPDATE_CURRENT\" rel=\"Titanium.Android-property-FLAG_UPDATE_CURRENT\" class=\"docClass\">Titanium.Android.FLAG_UPDATE_CURRENT</a> will be\nappended to <code>flags</code> automatically. Default value is true.</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFlags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-getFlags' class='name expandable'>getFlags</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the flags property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-flags\" rel=\"Titanium.Android.PendingIntent-property-flags\" class=\"docClass\">flags</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-getIntent' class='name expandable'>getIntent</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.Android.Intent\" rel=\"Titanium.Android.Intent\" class=\"docClass\">Titanium.Android.Intent</a></div><div class='description'><div class='short'>Gets the value of the intent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-intent\" rel=\"Titanium.Android.PendingIntent-property-intent\" class=\"docClass\">intent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.Android.Intent\" rel=\"Titanium.Android.Intent\" class=\"docClass\">Titanium.Android.Intent</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUpdateCurrentIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-getUpdateCurrentIntent' class='name expandable'>getUpdateCurrentIntent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the updateCurrentIntent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-updateCurrentIntent\" rel=\"Titanium.Android.PendingIntent-property-updateCurrentIntent\" class=\"docClass\">updateCurrentIntent</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the\n<code>callback</code> parameter is used to determine which listener to remove.</p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setFlags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-setFlags' class='name expandable'>setFlags</a>( <span class='pre'>flags</span> )</div><div class='description'><div class='short'>Sets the value of the flags property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-flags\" rel=\"Titanium.Android.PendingIntent-property-flags\" class=\"docClass\">flags</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>flags</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-setIntent' class='name expandable'>setIntent</a>( <span class='pre'>intent</span> )</div><div class='description'><div class='short'>Sets the value of the intent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-intent\" rel=\"Titanium.Android.PendingIntent-property-intent\" class=\"docClass\">intent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>intent</span> : <a href=\"#!/api/Titanium.Android.Intent\" rel=\"Titanium.Android.Intent\" class=\"docClass\">Titanium.Android.Intent</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setUpdateCurrentIntent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Android.PendingIntent'>Titanium.Android.PendingIntent</span></div><a href='#!/api/Titanium.Android.PendingIntent-method-setUpdateCurrentIntent' class='name expandable'>setUpdateCurrentIntent</a>( <span class='pre'>updateCurrentIntent</span> )</div><div class='description'><div class='short'>Sets the value of the updateCurrentIntent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Android.PendingIntent-property-updateCurrentIntent\" rel=\"Titanium.Android.PendingIntent-property-updateCurrentIntent\" class=\"docClass\">updateCurrentIntent</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>updateCurrentIntent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});