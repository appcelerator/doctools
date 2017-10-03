Ext.data.JsonP['PushSchedulePayload']({"tagname":"class","name":"PushSchedulePayload","alternateClassNames":[],"mixins":[],"meta":{"pseudo":true},"aliases":{},"files":[{"filename":"PushSchedulePayload.yml","href":"/Users/bimmel/Documents/Repositories/cloud_docs/apidoc/PushSchedules/PushSchedulePayload.yml"}],"members":{"cfg":[],"property":[{"name":"name","tagname":"property","owner":"PushSchedulePayload","meta":{"[:hide]":false},"id":"property-name"},{"name":"push_notification","tagname":"property","owner":"PushSchedulePayload","meta":{"[:hide]":false},"id":"property-push_notification"},{"name":"recurrence","tagname":"property","owner":"PushSchedulePayload","meta":{"[:hide]":false},"id":"property-recurrence"},{"name":"start_time","tagname":"property","owner":"PushSchedulePayload","meta":{"[:hide]":false},"id":"property-start_time"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html_meta":{"pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>The data type to pass to either the <a href=\"#!/api/PushSchedules-method-create\" rel=\"PushSchedules-method-create\" class=\"docClass\">PushSchedules.create</a> or\n<a href=\"#!/api/PushSchedules-method-update\" rel=\"PushSchedules-method-update\" class=\"docClass\">PushSchedules.update</a> method.</p>\n<p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Fields</h3><div class='subsection'><div id='property-name' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushSchedulePayload'>PushSchedulePayload</span></div><a href='#!/api/PushSchedulePayload-property-name' class='name not-expandable'>name</a><span> : String</span></div><div class='description'><div class='short'><p>Arbitray name to give to the scheduled push notification.</p>\n</div><div class='long'><p>Arbitray name to give to the scheduled push notification.</p>\n</div></div></div><div id='property-push_notification' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushSchedulePayload'>PushSchedulePayload</span></div><a href='#!/api/PushSchedulePayload-property-push_notification' class='name expandable'>push_notification</a><span> : Hash</span></div><div class='description'><div class='short'>Push notification to send. ...</div><div class='long'><p>Push notification to send.</p>\n\n<ul>\n<li><em>channel</em> (String): Name of the channel to send the push notification to.\nThe name of the push channel cannot start with a hash symbol ('#') or contain a comma (',').</li>\n<li><em>payload</em> (<a href=\"#!/api/PushPayload\" rel=\"PushPayload\" class=\"docClass\">PushPayload</a>): Payload to send to the device. (<strong>required</strong>).</li>\n<li><em>to_ids</em> (Array<String>/String): Array or comma-separated list of IDs to send push notifications to.</String></li>\n<li><p><em>options</em> (Hash): Dictionary to specify additional options:</p>\n\n<ul>\n<li><em>expire_after_seconds</em> (Number): Expiration time in seconds of when to stop\nsending the push notification based on the start date. For example, if the push\nnotification is scheduled to be sent in a week and the expiration time is for a\nday.  The push expires in eight days and will not be sent if the user's device\nhas been off before the send day and after the end of the expiration period.</li>\n</ul>\n</li>\n</ul>\n\n</div></div></div><div id='property-recurrence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushSchedulePayload'>PushSchedulePayload</span></div><a href='#!/api/PushSchedulePayload-property-recurrence' class='name expandable'>recurrence</a><span> : Hash</span></div><div class='description'><div class='short'>Schedules the recurrence of the push notification. ...</div><div class='long'><p>Schedules the recurrence of the push notification.</p>\n\n<ul>\n<li><em>interval</em> (String): Set to either <code>daily</code>, <code>weekly</code> or <code>monthly</code>.</li>\n<li><em>end_time</em> (Date): Datetime to end the push notifications in ISO 8601 format.\nMust occur after <em>start_time</em>.</li>\n</ul>\n\n</div></div></div><div id='property-start_time' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='PushSchedulePayload'>PushSchedulePayload</span></div><a href='#!/api/PushSchedulePayload-property-start_time' class='name not-expandable'>start_time</a><span> : Date</span></div><div class='description'><div class='short'><p>Datetime to start the push notifications in ISO 8601 format</p>\n</div><div class='long'><p>Datetime to start the push notifications in ISO 8601 format</p>\n</div></div></div></div></div></div></div>"});