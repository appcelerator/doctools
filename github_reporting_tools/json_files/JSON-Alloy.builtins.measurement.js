{"tagname":"class","name":"Alloy.builtins.measurement","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/Alloy/builtins/measurement.js"},"private":null,"id":"class-Alloy.builtins.measurement","members":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":28,"files":[{"filename":"alloy.js","href":"alloy2.html#Alloy-builtins-measurement"},{"filename":"measurement.js","href":"measurement.html#Alloy-builtins-measurement"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>A collection of utilities for converting between different display units.\nThese functions are only useful on the Android platform to support devices with different\nscreen densities and resolutions.</p>\n\n<p>To use the measurement builtin library,\nrequire it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>\n\n<pre><code>var measurement = require('alloy/measurement');\nconsole.log('----- iOS -----');\nTi.API.info('Ti.Platform.displayCaps.density: ' + Ti.Platform.displayCaps.density);\nTi.API.info('Ti.Platform.displayCaps.dpi: ' + Ti.Platform.displayCaps.dpi);\nTi.API.info('Ti.Platform.displayCaps.platformHeight: ' + Ti.Platform.displayCaps.platformHeight);\nTi.API.info('Ti.Platform.displayCaps.platformWidth: ' + Ti.Platform.displayCaps.platformWidth);\nif (Ti.Platform.osname === 'android'){\n    Ti.API.info('Ti.Platform.displayCaps.xdpi: ' + Ti.Platform.displayCaps.xdpi);\n    Ti.API.info('Ti.Platform.displayCaps.ydpi: ' + Ti.Platform.displayCaps.ydpi);\n    Ti.API.info('Ti.Platform.displayCaps.logicalDensityFactor: ' + Ti.Platform.displayCaps.logicalDensityFactor);\n}\nconsole.log('dpToPX: ' + measurement.dpToPX(130));\nconsole.log('dpToSystem: ' + measurement.dpToSystem(130));\nconsole.log('pxToDP: ' + measurement.pxToDP(130));\nconsole.log('pxToSystem: ' + measurement.pxToSystem(130));\nconsole.log('systemToPX: ' + measurement.systemToPX(130));\nconsole.log('systemToDP: ' + measurement.systemToDP(130));\nconsole.log('convertUnitToPX: ' + measurement.convertUnitToPX('130dp'));\nconsole.log('convertUnitToDP: ' + measurement.convertUnitToDP('130dp'));\nconsole.log('convertUnitToSystem: ' + measurement.convertUnitToSystem('130dp'));\nconsole.log('-----');\n</code></pre>\n\n<p>result sample:</p>\n\n<pre><code>[INFO] :   ----- iPhone OS -----\n[INFO] :   Ti.Platform.displayCaps.density: high\n[INFO] :   Ti.Platform.displayCaps.dpi: 320\n[INFO] :   Ti.Platform.displayCaps.platformHeight: 568\n[INFO] :   Ti.Platform.displayCaps.platformWidth: 320\n[INFO] :   dpToPX: 260\n[INFO] :   dpToSystem: 130\n[INFO] :   pxToDP: 65\n[INFO] :   pxToSystem: 65\n[INFO] :   systemToPX: 260\n[INFO] :   systemToDP: 130\n[INFO] :   convertUnitToPX: 260\n[INFO] :   convertUnitToDP: 130\n[INFO] :   convertUnitToSystem: 130\n[INFO] :   -----\n[INFO] :   ----- android -----\n[INFO] :   Ti.Platform.displayCaps.density: xhigh\n[INFO] :   Ti.Platform.displayCaps.dpi: 320\n[INFO] :   Ti.Platform.displayCaps.platformHeight: 1280\n[INFO] :   Ti.Platform.displayCaps.platformWidth: 720\n[INFO] :   Ti.Platform.displayCaps.xdpi: 345.0566101074219\n[INFO] :   Ti.Platform.displayCaps.ydpi: 342.2315673828125\n[INFO] :   Ti.Platform.displayCaps.logicalDensityFactor: 2\n[INFO] :   dpToPX: 260\n[INFO] :   dpToSystem: 260\n[INFO] :   pxToDP: 65\n[INFO] :   pxToSystem: 130\n[INFO] :   systemToPX: 130\n[INFO] :   systemToDP: 65\n[INFO] :   convertUnitToPX: 260\n[INFO] :   convertUnitToDP: 130\n[INFO] :   convertUnitToSystem: 260\n[INFO] :   -----\n</code></pre>\n</div><div class='members'></div></div>"}