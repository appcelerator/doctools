Ext.data.JsonP['Mobile_Web_Platform_Overview']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Mobile Web Platform Overview</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083705\" class=\"content\">\n                        <h1>Mobile Web Platform Overview</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Platform_Overview-section-src-30083705_safe-id-TW9iaWxlV2ViUGxhdGZvcm1PdmVydmlldy1XaGF0aXNhTW9iaWxlV2ViYXBwPw\">What is a Mobile Web app?</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Platform_Overview-section-src-30083705_MobileWebPlatformOverview-WhatMobileWebcando...\">What Mobile Web can do...</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Platform_Overview-section-src-30083705_MobileWebPlatformOverview-WhatMobileWebcannotdo...\">What Mobile Web cannot do...</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Platform_Overview-section-src-30083705_MobileWebPlatformOverview-SupportedBrowsers\">Supported Browsers</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Platform_Overview-section-src-30083705_MobileWebPlatformOverview-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-30083705_MobileWebPlatformOverview-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, you will examine the concepts, features, and components that define Mobile Web apps. We&apos;ll lay out our definitions of Mobile Web and &quot;hybrid&quot; apps and compare them to other terms you might have used. And, we&apos;ll also look at the benefits as well as some of the inherent limitations of HTML/web apps.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083705_MobileWebPlatformOverview-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <div class=\"section section-3 \" id=\"src-30083705_safe-id-TW9iaWxlV2ViUGxhdGZvcm1PdmVydmlldy1XaGF0aXNhTW9iaWxlV2ViYXBwPw\">\n        <h3 class=\"heading \"><span>What is a Mobile Web app?</span></h3>\n    <p>You have probably heard terms like &quot;web app&quot; or &quot;mobile app&quot; used widely and not very precisely. In our case, we use the terms in some specific ways:    </p>\n<ul class=\" \"><li class=\" \">    <p>Native app &#x2013; runs directly on a mobile device and has access to the hardware features of that device. &quot;Regular&quot; Titanium apps are native because our Javascript API translates your code into native API calls for UI, device sensors, data storage, and so forth. Native apps typically excel at performance and platform-specific user experience, plus can be run without a live network connection.    </p>\n</li><li class=\" \">    <p>Web app &#x2013; we use this term to mean mobile-ready web pages accessed from a desktop or mobile browser, and typically formatted specifically to address the screen sizes and user interaction expectations of a mobile device. Web apps excel at platform reach, a &quot;no-download&quot; installation process, and instant application updates for all users. Web apps typically require a constant network connection.    </p>\n</li><li class=\" \">    <p>Hybrid app &#x2013; an application in which some or all of your UI and business logic is written in HTML, CSS, and JavaScript running within a &quot;native wrapper&quot; such as a Titanium WebView or Phonegap container. Hybrid apps have limited access to the device hardware, though such access varies by mobile operating system and development framework. Hybrid apps offer app store distribution and operation without a live network connection.    </p>\n</li></ul>    <p>Keep in mind, that building a native app in Titanium gives you full access to native APIs for UI, device sensors, data storage, and other common mobile APIs. Plus, where it makes sense, you are also able to use platform-specific UI and features like intents on Android or local notifications on iOS. But sometimes a web or hybrid app makes the most sense, and for that, we offer our Mobile Web options.    </p>\n    <p>Titanium is the only platform which enables you to create native, hybrid, or web applications from a single JavaScript codebase. Thanks to Mobile Web, you can build your Titanium application as an HTML app. Then, you can post it to a web server to create a web app. Or, you can wrap it in a WebView for installation onto a handset.    </p>\n    <div class=\"section section-4 \" id=\"src-30083705_MobileWebPlatformOverview-WhatMobileWebcando...\">\n        <h4 class=\"heading \"><span>What Mobile Web can do...</span></h4>\n    <p>The Appcelerator engineers have done a great job implementing Titanium functionality in a web environment. API support includes:    </p>\n<ul class=\" \"><li class=\" \">    <p>Common UI elements (buttons, views, tabs, etc) plus animations and 2D matrix operations. You can even modify the theme or customize the generated CSS to tailor your web UI to your design needs.    </p>\n</li><li class=\" \">    <p>HTTP network access, though some cross-domain scripting restrictions will be enforced by the mobile browser. See the API docs for information about creating cross-domain policies that will work around some of those restrictions.    </p>\n</li><li class=\" \">    <p>Local storage via the mobile browser&apos;s support for offline data storage.    </p>\n</li><li class=\" \">    <p>Support for add-on modules in the form of AMD (asynchronous module definition) and CommonJS (JavaScript) modules.    </p>\n</li><li class=\" \">    <p>Precache resources for faster loading. See <a class=\"document-link \" href=\"#!/guide/tiapp.xml_and_timodule.xml_Reference-section-src-29004921_tiapp.xmlandtimodule.xmlReference-MobileWebspecificsection\">tiapp.xml and timodule.xml Reference Guide</a> for more information.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"src-30083705_MobileWebPlatformOverview-WhatMobileWebcannotdo...\">\n        <h4 class=\"heading \"><span>What Mobile Web cannot do...</span></h4>\n    <p>There are various portions of the Titanium API that cannot be reproduced in the Mobile Web world. These include:    </p>\n<ul class=\" \"><li class=\" \">    <p>Access to platform-specific components, such as Android activities or iOS local notifications. These either do not exist in a web framework or are excluded by vendor restrictions. (Apple restricts use of some services, such as iAd, and we have no control over their choices.) As such, the platform-specific namespaces (e.g. Ti.UI.iPhone) don&apos;t exist for mobile web.    </p>\n</li><li class=\" \">    <p>Universal access to hardware sensors, such as the camera. Support for such device integration is highly dependent on the mobile browser used to access your mobile web site. We strive to offer support whenever possible, though problems will likely always remain.    </p>\n</li><li class=\" \">    <p>Full application operation without a constant network connection. While you can provide some measure of local caching, for the most part, your Mobile Web app will require a constant data connection to operate.    </p>\n</li><li class=\" \">    <p>Native UI controls. While you can use HTML representations of components like pickers and buttons, you cannot access the mobile operating system&apos;s native UI controls. If you need that, you&apos;ll have to build a native app from your Titanium code.    </p>\n</li><li class=\" \">    <p>Access to components, such as Contacts or Calendar, which depend on operating system support. Where the systems permit access, we&apos;ll implement such features. Where they don&apos;t, we won&apos;t.    </p>\n</li><li class=\" \">    <p>Support Titanium+Plus modules for Android and iOS, such as the ones found on the Appcelerator Open Mobile Marketplace. These modules are written in the platform&apos;s native language and cannot run in a browser.    </p>\n</li></ul>    <p>(See <a class=\"document-link \" href=\"#!/guide/Mobile_Web_Limitations\">Mobile Web Limitations</a> for more info on limitations and considerations.)    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083705_MobileWebPlatformOverview-SupportedBrowsers\">\n        <h3 class=\"heading \"><span>Supported Browsers</span></h3>\n    <p>The following browsers have been tested to be compatible with the HTML/CSS/JavaScript created by the Mobile Web build process.    </p>\n    <p>Note that the Mobile Web platform is designed to build applications for mobile browsers, not applications for desktop browsers. Desktop browsers are recommended only for previewing and debugging Mobile Web applications.    </p>\n    <div class=\"section section-4 \" id=\"src-30083705_MobileWebPlatformOverview-RecommendedBrowsers\">\n        <h4 class=\"heading \"><span>Recommended Browsers</span></h4>\n<ul class=\" \"><li class=\" \">    <p>iOS Safari 4.2, 5.0, 6.0    </p>\n</li><li class=\" \">    <p>Android 2.2, 2.3, 3.0, 4.0    </p>\n</li><li class=\" \">    <p>IE 10.0    </p>\n</li><li class=\" \">    <p>IE Mobile 8.0, 8.1    </p>\n</li><li class=\" \">    <p>Firefox 10.0, 11.0    </p>\n</li><li class=\" \">    <p>Chrome 10.0    </p>\n</li><li class=\" \">    <p>Safari 5.0    </p>\n</li><li class=\" \">    <p>Firefox Mobile 7.0, 8.0, 10.0    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"src-30083705_safe-id-TW9iaWxlV2ViUGxhdGZvcm1PdmVydmlldy1MaW1pdGVkRnVuY3Rpb25hbGl0eSxSZXF1aXJlc1dvcmthcm91bmRz\">\n        <h4 class=\"heading \"><span>Limited Functionality, Requires Workarounds</span></h4>\n<ul class=\" \"><li class=\" \">    <p>iOS Safari 3.X    </p>\n</li><li class=\" \">    <p>Android 2.1    </p>\n</li><li class=\" \">    <p>WebOS 3.0    </p>\n</li><li class=\" \">    <p>Safari 4.0    </p>\n</li><li class=\" \">    <p>Chrome 4.0    </p>\n</li><li class=\" \">    <p>Firefox 4.0    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <p>Because your Mobile Web Titanium code runs within the JavaScript environment of a browser, you must not use variable names that exist in that environment. For example, <tt class=\" \">window</tt> is a valid variable name for your app&apos;s window in Titanium compiled to native iOS or Android. However, using <tt class=\" \">window</tt> as a variable name in Mobile Web would fail because there&apos;s a DOM object named window.    </p>\n    </div>\n        </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-30083705_MobileWebPlatformOverview-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Mobile_Web_Limitations\">Mobile Web Limitations</a> - limitations and considerations for the Mobile Web platform.    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/tiapp.xml_and_timodule.xml_Reference-section-src-29004921_tiapp.xmlandtimodule.xmlReference-MobileWebspecificsection\">tiapp.xml and timodule.xml Reference Guide</a> - Mobile Web platform configuration.    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083705_MobileWebPlatformOverview-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned about the concepts, features, and components that define Mobile Web apps. We covered our definitions of Mobile Web and &quot;hybrid&quot; apps and compared them to other terms you might have used. And, we looked at the benefits as well as some of the inherent limitations of HTML/web apps.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083705\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Mobile Web Platform Overview"});