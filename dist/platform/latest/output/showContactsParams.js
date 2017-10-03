Ext.data.JsonP['showContactsParams']({"tagname":"class","name":"showContactsParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Contacts/Contacts.yml"},"private":null,"id":"class-showContactsParams","members":{"cfg":[],"property":[{"name":"animated","tagname":"property","owner":"showContactsParams","meta":{},"id":"property-animated"},{"name":"cancel","tagname":"property","owner":"showContactsParams","meta":{},"id":"property-cancel"},{"name":"fields","tagname":"property","owner":"showContactsParams","meta":{},"id":"property-fields"},{"name":"selectedPerson","tagname":"property","owner":"showContactsParams","meta":{},"id":"property-selectedPerson"},{"name":"selectedProperty","tagname":"property","owner":"showContactsParams","meta":{"platform":["iphone 0.8","ipad 0.8"]},"id":"property-selectedProperty"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":80655,"files":[{"filename":"titanium.js","href":"titanium.html#showContactsParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary of options for the <a href=\"#!/api/Titanium.Contacts-method-showContacts\" rel=\"Titanium.Contacts-method-showContacts\" class=\"docClass\">Titanium.Contacts.showContacts</a> method.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animated' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='showContactsParams'>showContactsParams</span></div><a href='#!/api/showContactsParams-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether to animate the show/hide of the contacts picker (iPhone, iPad only.) ...</div><div class='long'><p>Determines whether to animate the show/hide of the contacts picker (iPhone, iPad only.)</p>\n\n<p>Default: true</p></div></div></div><div id='property-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='showContactsParams'>showContactsParams</span></div><a href='#!/api/showContactsParams-property-cancel' class='name not-expandable'>cancel</a><span> : Callback&lt;Object&gt;</span></div><div class='description'><div class='short'><p>Function to call when selection is canceled.</p>\n\n</div><div class='long'><p>Function to call when selection is canceled.</p>\n\n</div></div></div><div id='property-fields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='showContactsParams'>showContactsParams</span></div><a href='#!/api/showContactsParams-property-fields' class='name expandable'>fields</a><span> : String[]</span></div><div class='description'><div class='short'>Field names to show when selecting properties. ...</div><div class='long'><p>Field names to show when selecting properties. By default, shows all available.</p>\n\n</div></div></div><div id='property-selectedPerson' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='showContactsParams'>showContactsParams</span></div><a href='#!/api/showContactsParams-property-selectedPerson' class='name expandable'>selectedPerson</a><span> : Callback&lt;Object&gt;</span></div><div class='description'><div class='short'>Function to call when a person is selected. ...</div><div class='long'><p>Function to call when a person is selected. Must not be used with <code>selectedProperty</code> property.</p>\n\n</div></div></div><div id='property-selectedProperty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='showContactsParams'>showContactsParams</span></div><a href='#!/api/showContactsParams-property-selectedProperty' class='name expandable'>selectedProperty</a><span> : Callback&lt;Object&gt;</span></div><div class='description'><div class='short'>Function to call when a property is selected. ...</div><div class='long'><p>Function to call when a property is selected. Must not be used with <code>selectedPerson</code> \nproperty.\nNote: If ringtone or texttone is selected, null values are returned, since these are unsupported\nby Apple.\nSince iOS 9.0, there is a native apple issue whereby it may return null if the birthday property \nis selected on certain device models.\nThe callback contains the selected property and a 'person' object of type <a href=\"#!/api/Titanium.Contacts.Person\" rel=\"Titanium.Contacts.Person\" class=\"docClass\">Titanium.Contacts.Person</a>.\nSince iOS 9.0, apple only returns the person object with partial information. Currently it is known to \nat least contain the selected property and fullName. </p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div></div></div></div></div>"});