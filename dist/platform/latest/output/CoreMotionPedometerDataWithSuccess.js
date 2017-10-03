Ext.data.JsonP['CoreMotionPedometerDataWithSuccess']({"tagname":"class","name":"CoreMotionPedometerDataWithSuccess","extends":"CoreMotionDeviceMotionData","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.2.0","ipad 5.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/apidoc/CoreMotion.yml"},"private":null,"id":"class-CoreMotionPedometerDataWithSuccess","members":{"cfg":[],"property":[{"name":"attitude","tagname":"property","owner":"CoreMotionDeviceMotionData","meta":{"readonly":true},"id":"property-attitude"},{"name":"code","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true,"description":["<p>See <code>ERROR</code> constants for possible values.</p>"]},"id":"property-code"},{"name":"currentCadence","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-currentCadence"},{"name":"currentPace","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-currentPace"},{"name":"distance","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-distance"},{"name":"endDate","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-endDate"},{"name":"error","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-error"},{"name":"floorsAscended","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-floorsAscended"},{"name":"floorsDescended","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-floorsDescended"},{"name":"gravity","tagname":"property","owner":"CoreMotionDeviceMotionData","meta":{"readonly":true},"id":"property-gravity"},{"name":"magneticField","tagname":"property","owner":"CoreMotionDeviceMotionData","meta":{"readonly":true},"id":"property-magneticField"},{"name":"numberOfSteps","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-numberOfSteps"},{"name":"rotationRate","tagname":"property","owner":"CoreMotionDeviceMotionData","meta":{"readonly":true},"id":"property-rotationRate"},{"name":"startDate","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-startDate"},{"name":"success","tagname":"property","owner":"CoreMotionPedometerDataWithSuccess","meta":{"readonly":true},"id":"property-success"},{"name":"timestamp","tagname":"property","owner":"CoreMotionLogItem","meta":{"readonly":true,"description":["<p>The time stamp is the amount of time in milliseconds since the phone booted.</p>"]},"id":"property-timestamp"},{"name":"userAcceleration","tagname":"property","owner":"CoreMotionDeviceMotionData","meta":{"readonly":true},"id":"property-userAcceleration"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":26891,"files":[{"filename":"titanium.js","href":"titanium.html#CoreMotionPedometerDataWithSuccess"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["CoreMotionLogItem","CoreMotionDeviceMotionData","CoreMotionPedometerDataWithSuccess"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.2.0'>iPhone 5.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 5.2.0'>iPad 5.2.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/CoreMotionLogItem' rel='CoreMotionLogItem' class='docClass'>CoreMotionLogItem</a></div><div class='subclass'> &gt; <a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='docClass'>CoreMotionDeviceMotionData</a></div><div class='subclass'> &gt; <strong>CoreMotionPedometerDataWithSuccess</strong></div></div></div><div class='doc-contents'><p>Dictionary passed to the callback of the\n<a href=\"Modules.CoreMotion.Pedometer.startDeviceMotionUpdates\">Pedometer.startPedometerUpdates()</a> and\n<a href=\"#!/api/Modules.CoreMotion.Pedometer-method-queryPedometerData\" rel=\"Modules.CoreMotion.Pedometer-method-queryPedometerData\" class=\"docClass\">Pedometer.queryPedometerData()</a> methods.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-attitude' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='defined-in docClass'>CoreMotionDeviceMotionData</a></div><a href='#!/api/CoreMotionDeviceMotionData-property-attitude' class='name not-expandable'>attitude</a><span> : <a href=\"#!/api/CoreMotionAttitude\" rel=\"CoreMotionAttitude\" class=\"docClass\">CoreMotionAttitude</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The attitude of the device.</p>\n\n</div><div class='long'><p>The attitude of the device.</p>\n\n</div></div></div><div id='property-code' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-code' class='name not-expandable'>code</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An error code describing the error if there was one.</p>\n\n</div><div class='long'><p>An error code describing the error if there was one.</p>\n\n<p><p>See <code>ERROR</code> constants for possible values.</p>\n\n</p></div></div></div><div id='property-currentCadence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-currentCadence' class='name expandable'>currentCadence</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>The rate at which steps are taken, measured in steps per second. ...</div><div class='long'><p>The rate at which steps are taken, measured in steps per second.\nNote: This property is only available on iOS 9 and later.</p>\n\n</div></div></div><div id='property-currentPace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-currentPace' class='name expandable'>currentPace</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>The current pace of the user, measured in seconds per meter. ...</div><div class='long'><p>The current pace of the user, measured in seconds per meter.\nNote: This property is only available on iOS 9 and later.</p>\n\n</div></div></div><div id='property-distance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-distance' class='name not-expandable'>distance</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The estimated distance (in meters) traveled by the user.</p>\n\n</div><div class='long'><p>The estimated distance (in meters) traveled by the user.</p>\n\n</div></div></div><div id='property-endDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-endDate' class='name not-expandable'>endDate</a><span> : Date</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The end time for the pedometer data.</p>\n\n</div><div class='long'><p>The end time for the pedometer data.</p>\n\n</div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-error' class='name not-expandable'>error</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An error message describing the error if there was one.</p>\n\n</div><div class='long'><p>An error message describing the error if there was one.</p>\n\n</div></div></div><div id='property-floorsAscended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-floorsAscended' class='name not-expandable'>floorsAscended</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The approximate number of floors ascended by walking.</p>\n\n</div><div class='long'><p>The approximate number of floors ascended by walking.</p>\n\n</div></div></div><div id='property-floorsDescended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-floorsDescended' class='name not-expandable'>floorsDescended</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The approximate number of floors descended by walking.</p>\n\n</div><div class='long'><p>The approximate number of floors descended by walking.</p>\n\n</div></div></div><div id='property-gravity' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='defined-in docClass'>CoreMotionDeviceMotionData</a></div><a href='#!/api/CoreMotionDeviceMotionData-property-gravity' class='name not-expandable'>gravity</a><span> : <a href=\"#!/api/CoreMotionAcceleration\" rel=\"CoreMotionAcceleration\" class=\"docClass\">CoreMotionAcceleration</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The gravity acceleration vector expressed in the device's reference frame.</p>\n\n</div><div class='long'><p>The gravity acceleration vector expressed in the device's reference frame.</p>\n\n</div></div></div><div id='property-magneticField' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='defined-in docClass'>CoreMotionDeviceMotionData</a></div><a href='#!/api/CoreMotionDeviceMotionData-property-magneticField' class='name not-expandable'>magneticField</a><span> : <a href=\"#!/api/CoreMotionCalibratedMagneticField\" rel=\"CoreMotionCalibratedMagneticField\" class=\"docClass\">CoreMotionCalibratedMagneticField</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Returns the magnetic field vector with respect to the device.</p>\n\n</div><div class='long'><p>Returns the magnetic field vector with respect to the device.</p>\n\n</div></div></div><div id='property-numberOfSteps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-numberOfSteps' class='name not-expandable'>numberOfSteps</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The number of steps taken by the user.</p>\n\n</div><div class='long'><p>The number of steps taken by the user.</p>\n\n</div></div></div><div id='property-rotationRate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='defined-in docClass'>CoreMotionDeviceMotionData</a></div><a href='#!/api/CoreMotionDeviceMotionData-property-rotationRate' class='name not-expandable'>rotationRate</a><span> : <a href=\"#!/api/CoreMotionRotationRate\" rel=\"CoreMotionRotationRate\" class=\"docClass\">CoreMotionRotationRate</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The roation rate of the device.</p>\n\n</div><div class='long'><p>The roation rate of the device.</p>\n\n</div></div></div><div id='property-startDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-startDate' class='name not-expandable'>startDate</a><span> : Date</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The start time for the pedometer data.</p>\n\n</div><div class='long'><p>The start time for the pedometer data.</p>\n\n</div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionPedometerDataWithSuccess'>CoreMotionPedometerDataWithSuccess</span></div><a href='#!/api/CoreMotionPedometerDataWithSuccess-property-success' class='name not-expandable'>success</a><span> : Boolean</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>A Boolean indicating if the operation was successful or not.</p>\n\n</div><div class='long'><p>A Boolean indicating if the operation was successful or not.</p>\n\n</div></div></div><div id='property-timestamp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionLogItem' rel='CoreMotionLogItem' class='defined-in docClass'>CoreMotionLogItem</a></div><a href='#!/api/CoreMotionLogItem-property-timestamp' class='name not-expandable'>timestamp</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The time when the logged item is valid.</p>\n\n</div><div class='long'><p>The time when the logged item is valid.</p>\n\n<p><p>The time stamp is the amount of time in milliseconds since the phone booted.</p>\n\n</p></div></div></div><div id='property-userAcceleration' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionDeviceMotionData' rel='CoreMotionDeviceMotionData' class='defined-in docClass'>CoreMotionDeviceMotionData</a></div><a href='#!/api/CoreMotionDeviceMotionData-property-userAcceleration' class='name not-expandable'>userAcceleration</a><span> : <a href=\"#!/api/CoreMotionAcceleration\" rel=\"CoreMotionAcceleration\" class=\"docClass\">CoreMotionAcceleration</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The acceleration that the user is giving to the device.</p>\n\n</div><div class='long'><p>The acceleration that the user is giving to the device.</p>\n\n</div></div></div></div></div></div></div>"});