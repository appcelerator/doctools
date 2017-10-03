Ext.data.JsonP['Managing_Non-Titanium_Client_Applications_in_Dashboard']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Managing Non-Titanium Client Applications in Dashboard</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298776\" class=\"content\">\n                        <h1>Managing Non-Titanium Client Applications in Dashboard</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Non-Titanium_Client_Applications_in_Dashboard-section-src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-RegisteranApplicationinDashboard\">Register an Application in Dashboard</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Non-Titanium_Client_Applications_in_Dashboard-section-src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-EnablePlatformServices\">Enable Platform Services</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Non-Titanium_Client_Applications_in_Dashboard-section-src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-ViewApplicationInformation\">View Application Information</a>    </p>\n</li></ul>    <p>To use AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services in your Android and iOS applications built with Java or Objective-C, you need to first register an application to Appcelerator Dashboard. This defines the name, platform, and other metadata about the application. Once you&apos;ve registered the application in Dashboard, you can download the libraries and frameworks to integrate AMPLIFY Appcelerator Services into your application. Dashboard also generates a new Mobile Backend Services datasource and the application keys required to enable the services in your app.    </p>\n    <div class=\"section section-2 \" id=\"src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-RegisteranApplicationinDashboard\">\n        <h2 class=\"heading \"><span>Register an Application in Dashboard</span></h2>\n    <p><strong class=\" \">To register an Android Java, or iOS Objective-C or Swift application in Dashboard:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\" \">    <p>Click the Add menu (<strong class=\" \">+</strong>) and select <strong class=\" \">Register App for Services</strong> to open the <strong class=\" \">Register App for Services</strong> form.    </p>\n    <img src=\"images/download/attachments/43298776/RegisterAppForService.png\" alt=\"images/download/attachments/43298776/RegisterAppForService.png\" class=\"confluence-embedded-image\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>In the Register App for Services form, enter an application <strong class=\" \">Name</strong>, and select a <strong class=\" \">Platform</strong> and <strong class=\" \">Category</strong>. Optionally, you can provide a custom icon to display in Dashboard for your application, and a description. To add application team members from the organization, click the add (+) button in the Members form at right.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK.</strong>    </p>\n</li></ol>    <p>Dashboard displays the  <strong class=\" \">Platform Services</strong>  tab for your application. Follow the directions to enable Platform Services.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-EnablePlatformServices\">\n        <h2 class=\"heading \"><span>Enable Platform Services</span></h2>\n    <p>After you have created your client application, Dashboard directs you to the <strong class=\" \">Platform Services</strong> tab for the application. When the client application is first created, the Cloud, Performance and Analytics services are automatically enabled, and the Test service is disabled. Follow the directions in the tab to integrate Platform Services in to your application.    </p>\n<ol class=\" \"><li class=\" \">    <p>To integrate the Cloud, Performance and Analytics services with your application:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click on the<strong class=\" \"> Cloud / Performance Analytics</strong> tab if it is not already selected.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Download</strong>  button to download the APS SDK, unpack it and add the library to your project.    </p>\n</li><li class=\" \">    <p>Copy the code snippets to your application as instructed to enable the services. Note before copying and pasting the last code snippet, use the <strong class=\" \">Environment</strong> drop-down list to select the environment you want to deploy your application to.    </p>\n</li></ol></li><li class=\" \">    <p>To enable the Test service:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">Test</strong> tab.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Download</strong> button to download the Appcelerator Test utility and unpack it.    </p>\n</li><li class=\" \">    <p>Copy and paste the command to your terminal, and modify it for your project.    </p>\n</li><li class=\" \">    <p>Build your project to enable the Test service.    </p>\n</li></ol></li></ol>    <p>For more detailed instructions, see the <a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_Android_APS_SDK\">Quick Start Guide for Android APS SDK</a> and <a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK\">Quick Start Guide for iOS APS SDK</a> guides.    </p>\n    <p>    <img src=\"images/download/attachments/43298776/PlatformServicesInstructions.png\" alt=\"images/download/attachments/43298776/PlatformServicesInstructions.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"600\" height=\"310\">\n        </img></p>\n    <p>If you need to later return to these Enable Platform Services instructions, do the following:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">Apps</strong> menu and select the application. Dashboard displays the <strong class=\" \">Overview</strong> tab of the application.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Services</strong> button.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">     <span style=\"color: #222222;\">\nAdd Platform Services to your app    </span>\n </strong>     <span style=\"color: #222222;\">\n to     </span>\ndisplay the <strong class=\" \">Platform Services</strong> tab for the application.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-43298776_ManagingNon-TitaniumClientApplicationsinDashboard-ViewApplicationInformation\">\n        <h2 class=\"heading \"><span>View Application Information</span></h2>\n    <p>The <strong class=\" \">Overview</strong> tab for Android and iOS applications differs slightly from Titanium applications. The <strong class=\" \">Overview</strong> tab contains two buttons at the top of the <strong class=\" \">Overview</strong> page: <strong class=\" \">App Info</strong> and <strong class=\" \">Services</strong>.    </p>\n    <p>The <strong class=\" \">App Info</strong> section provides the same basic information, such as the application creator, version number, etc., as a Titanium application. The <strong class=\" \">Services</strong> section contains:    </p>\n<ul class=\" \"><li class=\" \">    <p>Details on which Platform Services are enabled for the project    </p>\n</li><li class=\" \">    <p>Application keys to enable Platform Services for your application    </p>\n</li><li class=\" \">    <p>Link to instructions for enabling Platform Services    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/43298776/NativeAppDetail.png\" alt=\"images/download/attachments/43298776/NativeAppDetail.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"800\" height=\"221\">\n        </img></p>\n    <p><strong class=\" \">To retrieve the application keys</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">Apps</strong> menu and select the application. Dashboard displays the <strong class=\" \">Overview</strong> tab of the application.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Services</strong> button.    </p>\n</li><li class=\" \">    <p>Click  <strong class=\" \">Show Key</strong>  to display the application key for the services. For Cloud, Performance and Analytics,  make sure the correct deployment environment is selected from the  <strong class=\" \">Environment</strong>  drop-down list before copying the key.    </p>\n</li></ol>    <p>Use the keys to enable AMPLIFY Appcelerator Services for your project.    </p>\n    <p>For directions on how to enable Platform Services, click the <strong class=\" \"> Add Platform Services to your app </strong> link at the bottom of the <strong class=\" \">Services</strong> section.    </p>\n    <p>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298776\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Managing Non-Titanium Client Applications in Dashboard"});