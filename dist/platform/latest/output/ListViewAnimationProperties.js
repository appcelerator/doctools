Ext.data.JsonP['ListViewAnimationProperties']({"tagname":"class","name":"ListViewAnimationProperties","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ListView.yml","description":["<p>These properties are only used on iOS. Not all properties apply to all methods.\n<code>animationStyle</code> does not apply to the <code>scrollToItem</code> method.\n<code>positon</code> only applies to the <code>scrollToItem</code> method.\nSince Release 3.3.0 of the Titanium SDK, Android supports the <code>animated</code> property and is applicable only to <code>scrollToItem</code></p>"]},"private":null,"id":"class-ListViewAnimationProperties","members":{"cfg":[],"property":[{"name":"animated","tagname":"property","owner":"ListViewAnimationProperties","meta":{},"id":"property-animated"},{"name":"animationStyle","tagname":"property","owner":"ListViewAnimationProperties","meta":{},"id":"property-animationStyle"},{"name":"position","tagname":"property","owner":"ListViewAnimationProperties","meta":{},"id":"property-position"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":159741,"files":[{"filename":"titanium.js","href":"titanium.html#ListViewAnimationProperties"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>These properties are only used on iOS. Not all properties apply to all methods.\n<code>animationStyle</code> does not apply to the <code>scrollToItem</code> method.\n<code>positon</code> only applies to the <code>scrollToItem</code> method.\nSince Release 3.3.0 of the Titanium SDK, Android supports the <code>animated</code> property and is applicable only to <code>scrollToItem</code></p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.1.0'>Android 3.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.1.0'>iPhone 3.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.1.0'>iPad 3.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>A simple object for specifying the animation properties to use when inserting or deleting\nsections or cells, or scrolling the list.</p>\n\n<p><p>These properties are only used on iOS. Not all properties apply to all methods.\n<code>animationStyle</code> does not apply to the <code>scrollToItem</code> method.\n<code>positon</code> only applies to the <code>scrollToItem</code> method.\nSince Release 3.3.0 of the Titanium SDK, Android supports the <code>animated</code> property and is applicable only to <code>scrollToItem</code></p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animated' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ListViewAnimationProperties'>ListViewAnimationProperties</span></div><a href='#!/api/ListViewAnimationProperties-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether this list change should be animated. ...</div><div class='long'><p>Whether this list change should be animated. Ignored if any <code>animationStyle</code> value is specified.</p>\n\n<p>Default: true</p></div></div></div><div id='property-animationStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ListViewAnimationProperties'>ListViewAnimationProperties</span></div><a href='#!/api/ListViewAnimationProperties-property-animationStyle' class='name expandable'>animationStyle</a><span> : Number</span></div><div class='description'><div class='short'>Type of animation to use for cell insertions and deletions. ...</div><div class='long'><p>Type of animation to use for cell insertions and deletions.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-BOTTOM\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-BOTTOM\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.BOTTOM</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-FADE\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-FADE\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.FADE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-LEFT\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-LEFT\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.LEFT</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-NONE\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-NONE\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.NONE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-RIGHT\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-RIGHT\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.RIGHT</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-TOP\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-TOP\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.TOP</a>\n</li></li></li></li></li></li></ul></p>\n\n<p>Default: If `animated` is `true` but no `animationStyle` is specified, the style defaults to \n[FADE](<a href=\"#!/api/Titanium.UI.iOS.RowAnimationStyle-property-FADE\" rel=\"Titanium.UI.iOS.RowAnimationStyle-property-FADE\" class=\"docClass\">Titanium.UI.iOS.RowAnimationStyle.FADE</a>).\n</p></div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ListViewAnimationProperties'>ListViewAnimationProperties</span></div><a href='#!/api/ListViewAnimationProperties-property-position' class='name expandable'>position</a><span> : Number</span></div><div class='description'><div class='short'>Specifies what position to scroll the selected cell to. ...</div><div class='long'><p>Specifies what position to scroll the selected cell to.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iOS.ListViewScrollPosition-property-BOTTOM\" rel=\"Titanium.UI.iOS.ListViewScrollPosition-property-BOTTOM\" class=\"docClass\">Titanium.UI.iOS.ListViewScrollPosition.BOTTOM</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.ListViewScrollPosition-property-MIDDLE\" rel=\"Titanium.UI.iOS.ListViewScrollPosition-property-MIDDLE\" class=\"docClass\">Titanium.UI.iOS.ListViewScrollPosition.MIDDLE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.ListViewScrollPosition-property-NONE\" rel=\"Titanium.UI.iOS.ListViewScrollPosition-property-NONE\" class=\"docClass\">Titanium.UI.iOS.ListViewScrollPosition.NONE</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS.ListViewScrollPosition-property-TOP\" rel=\"Titanium.UI.iOS.ListViewScrollPosition-property-TOP\" class=\"docClass\">Titanium.UI.iOS.ListViewScrollPosition.TOP</a>\n</li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iOS.ListViewScrollPosition-property-NONE\" rel=\"Titanium.UI.iOS.ListViewScrollPosition-property-NONE\" class=\"docClass\">Titanium.UI.iOS.ListViewScrollPosition.NONE</a></p></div></div></div></div></div></div></div>"});