Ext.data.JsonP['EjsRendererEngine']({"tagname":"class","name":"EjsRendererEngine","extends":"ArrowRendererEngine","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"pseudo":[null]},"private":null,"id":"class-EjsRendererEngine","members":{"cfg":[],"property":[{"name":"ejs","tagname":"property","owner":"EjsRendererEngine","meta":{},"id":"property-ejs"},{"name":"extension","tagname":"property","owner":"ArrowRendererEngine","meta":{},"id":"property-extension"}],"method":[{"name":"createRenderer","tagname":"method","owner":"ArrowRendererEngine","meta":{},"id":"method-createRenderer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":2,"files":[{"filename":"ejs.js","href":"ejs.html#EjsRendererEngine"}],"html_meta":{"pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["ArrowRendererEngine","EjsRendererEngine"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/ArrowRendererEngine' rel='ArrowRendererEngine' class='docClass'>ArrowRendererEngine</a></div><div class='subclass'> &gt; <strong>EjsRendererEngine</strong></div></div></div><div class='doc-contents'><p>Renderer engine for EJS templates.</p>\n<p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ejs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EjsRendererEngine'>EjsRendererEngine</span></div><a href='#!/api/EjsRendererEngine-property-ejs' class='name not-expandable'>ejs</a><span> : Object</span></div><div class='description'><div class='short'><p>ejs module instance to access its APIs.</p>\n</div><div class='long'><p>ejs module instance to access its APIs.</p>\n</div></div></div><div id='property-extension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/ArrowRendererEngine' rel='ArrowRendererEngine' class='defined-in docClass'>ArrowRendererEngine</a></div><a href='#!/api/ArrowRendererEngine-property-extension' class='name not-expandable'>extension</a><span> : String</span></div><div class='description'><div class='short'><p>File extension the renderer engine will handle.</p>\n</div><div class='long'><p>File extension the renderer engine will handle.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createRenderer' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/ArrowRendererEngine' rel='ArrowRendererEngine' class='defined-in docClass'>ArrowRendererEngine</a></div><a href='#!/api/ArrowRendererEngine-method-createRenderer' class='name expandable'>createRenderer</a>( <span class='pre'>content, filename, app</span> ) : Function</div><div class='description'><div class='short'>Returns a function to generate the HTML. ...</div><div class='long'><p>Returns a function to generate the HTML. Pass the returned function the path of the template file,\na context object (data to pass to the template), and a callback passed an Error object\n(or null if successful) and the HTML to render.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>content</span> : String<div class='sub-desc'><p>Template string to compile and render. Set to <code>null</code> if <code>skipread</code> is <code>true</code>.</p>\n</div></li><li><span class='pre'>filename</span> : String<div class='sub-desc'><p>Path of the template file.</p>\n</div></li><li><span class='pre'>app</span> : Object<div class='sub-desc'><p>Express app instance.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});