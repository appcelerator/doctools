Ext.data.JsonP['Global_console']({"tagname":"class","name":"Global.console","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 2.1.0","iphone 2.1.0","ipad 2.1.0","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Global/console/console.yml","description":["<p>The toplevel <code>console</code> support is intended to supplement {@link Titanium.API}\nand make it easier for developers to port existing javascript code\n(especially CommonJS modules) to Titanium.</p>\n\n<p>Note that <code>console</code> does not currently implement the complete\n<a href=\"http://getfirebug.com/wiki/index.php/Console_API\">firebug specification</a>.\nOur support is roughly equivalent to that offered by\n<a href=\"http://nodejs.org/api/stdio.html\">node.js's console</a>.</p>"]},"private":null,"id":"class-Global.console","members":{"cfg":[],"property":[],"method":[{"name":"debug","tagname":"method","owner":"Global.console","meta":{"description":["<p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>"]},"id":"method-debug"},{"name":"error","tagname":"method","owner":"Global.console","meta":{"description":["<p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>"]},"id":"method-error"},{"name":"info","tagname":"method","owner":"Global.console","meta":{"description":["<p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>"]},"id":"method-info"},{"name":"log","tagname":"method","owner":"Global.console","meta":{"description":["<p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n<p>Note that this method has different behavior from {@link Titanium.API#method-log},\nwhich can take multiple arguments, but in doing so interprets the\nfirst argument as a custom log level.</p>"]},"id":"method-log"},{"name":"warn","tagname":"method","owner":"Global.console","meta":{"description":["<p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>"]},"id":"method-warn"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":33612,"files":[{"filename":"titanium.js","href":"titanium.html#Global-console"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>2.1.0</li><li class='platform-iphone'\n        title='iPhone'>2.1.0</li><li class='platform-ipad'\n        title='iPad'>2.1.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null,"description":"<p><p>The toplevel <code>console</code> support is intended to supplement <a href=\"#!/api/Titanium.API\" rel=\"Titanium.API\" class=\"docClass\">Titanium.API</a>\nand make it easier for developers to port existing javascript code\n(especially CommonJS modules) to Titanium.</p>\n\n\n\n\n<p>Note that <code>console</code> does not currently implement the complete\n<a href=\"http://getfirebug.com/wiki/index.php/Console_API\">firebug specification</a>.\nOur support is roughly equivalent to that offered by\n<a href=\"http://nodejs.org/api/stdio.html\">node.js's console</a>.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 2.1.0'>Android 2.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 2.1.0'>iPhone 2.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 2.1.0'>iPad 2.1.0</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Console logging facilities.</p>\n\n<p><p>The toplevel <code>console</code> support is intended to supplement <a href=\"#!/api/Titanium.API\" rel=\"Titanium.API\" class=\"docClass\">Titanium.API</a>\nand make it easier for developers to port existing javascript code\n(especially CommonJS modules) to Titanium.</p>\n\n\n\n\n<p>Note that <code>console</code> does not currently implement the complete\n<a href=\"http://getfirebug.com/wiki/index.php/Console_API\">firebug specification</a>.\nOur support is roughly equivalent to that offered by\n<a href=\"http://nodejs.org/api/stdio.html\">node.js's console</a>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>2.1.0</li><li class='platform-iphone'\n        title='iPhone'>2.1.0</li><li class='platform-ipad'\n        title='iPad'>2.1.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-debug' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.console'>Global.console</span></div><a href='#!/api/Global.console-method-debug' class='name expandable'>debug</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Log a message at the debug level. ...</div><div class='long'><p>Log a message at the <code>debug</code> level.</p>\n\n<p><p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>The message(s) to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.console'>Global.console</span></div><a href='#!/api/Global.console-method-error' class='name expandable'>error</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Log a message at the error level. ...</div><div class='long'><p>Log a message at the <code>error</code> level.</p>\n\n<p><p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>The message(s) to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-info' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.console'>Global.console</span></div><a href='#!/api/Global.console-method-info' class='name expandable'>info</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Log a message at the info level. ...</div><div class='long'><p>Log a message at the <code>info</code> level.</p>\n\n<p><p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>The message(s) to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.console'>Global.console</span></div><a href='#!/api/Global.console-method-log' class='name expandable'>log</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Log a message at the info level. ...</div><div class='long'><p>Log a message at the <code>info</code> level.</p>\n\n<p><p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n\n\n\n<p>Note that this method has different behavior from <a href=\"#!/api/Titanium.API-method-log\" rel=\"Titanium.API-method-log\" class=\"docClass\">Titanium.API.log</a>,\nwhich can take multiple arguments, but in doing so interprets the\nfirst argument as a custom log level.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>The message(s) to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-warn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.console'>Global.console</span></div><a href='#!/api/Global.console-method-warn' class='name expandable'>warn</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Log a message at the warn level. ...</div><div class='long'><p>Log a message at the <code>warn</code> level.</p>\n\n<p><p>The message to log can either be a single argument, or any number\nof arguments, which will be converted to strings and then concatenated\ntogether with a space character.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : Object<div class='sub-desc'><p>The message(s) to log.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});