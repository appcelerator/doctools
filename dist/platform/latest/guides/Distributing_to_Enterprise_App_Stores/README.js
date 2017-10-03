Ext.data.JsonP['Distributing_to_Enterprise_App_Stores']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Distributing to Enterprise App Stores</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298667\" class=\"content\">\n                        <h1>Distributing to Enterprise App Stores</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n            <p>This AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services feature requires an Enterprise Subscription.    </p>\n    </div>\n        <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-AirWatchPlatform\">AirWatch Platform</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-InstalltheAirWatchPlugin\">Install the AirWatch Plugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-ObtaintheHostURLandAPIKey\">Obtain the Host URL and API Key</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-PublishtoAirWatch\">Publish to AirWatch</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-MobileIronPlatform\">MobileIron Platform</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-InstalltheMobileIronPlugin\">Install the MobileIron Plugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_to_Enterprise_App_Stores-section-src-43298667_DistributingtoEnterpriseAppStores-PublishtoMobileIron\">Publish to MobileIron</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>Enterprise app stores are private app stores where access to applications is controlled by the company.  Employees must be authenticated to download and install internally developed applications.  Appcelerator Studio allows you to package Android and iOS applications and upload them to a Mobile Application Management platform that can be published to an enterprise app store.  You can publish your application to AirWatch&apos;s or MobileIron&apos;s platform.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-AirWatchPlatform\">\n        <h2 class=\"heading \"><span>AirWatch Platform</span></h2>\n    <p>Before publishing to AirWatch, you need install the AirWatch plugin on Appcelerator Studio.  After the plugin is installed, start the publishing process from the right-click context menu.  You need to create an AirWatch publish target. A publish target consists of a host URL, username, password and API key associated with an alias. You can create one during the <strong class=\" \">Target</strong> step of the <strong class=\" \">Publish to AirWatch</strong> wizard.    </p>\n    <p>You also need the following items to package an application:    </p>\n<ul class=\" \"><li class=\" \">    <p>For Android applications, generate a keypair and certificate to sign your applications. For help, see <a class=\"external-link external-link\" href=\"#!/guide/Distributing_Android_apps-section-29004925_DistributingAndroidapps-Generateakeypairandcertificate\">Distributing Android apps: Generate keypair and certificate</a>.    </p>\n</li><li class=\" \">    <p>For iOS applications, create a distribution certificate and provisioning profile to sign your application.  For help, see <a class=\"external-link external-link\" href=\"#!/guide/Distributing_iOS_apps\">Distributing iOS apps</a>.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-InstalltheAirWatchPlugin\">\n        <h3 class=\"heading \"><span>Install the AirWatch Plugin</span></h3>\n    <p>Appcelerator Studio requires AirWatch integration to be installed as a separate plugin.  To install the plugin:    </p>\n<ol class=\" \"><li class=\" \">    <p>Launch Appcelerator Studio.    </p>\n</li><li class=\" \">    <p>From the menu bar, select <strong class=\" \">Help &gt; Install New Software...</strong> The <strong class=\" \">Install </strong>wizard appears.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Add</strong>. A dialog appears asking for the name and location of the update site.    </p>\n<ol class=\" \"><li class=\" \">    <p>For <strong class=\" \">Name</strong>, enter &apos;AirWatch&apos; or something similar.    </p>\n</li><li class=\" \">    <p>For <strong class=\" \">Location</strong>, copy and paste one of the the following URLs:    </p>\n<ol class=\" \"><li class=\" \">    <p>Release Candidate Build: <a class=\"external-link external-link\" href=\"http://preview.appcelerator.com/appcelerator/studio/airwatch/update/rc/\" target=\"_blank\">http://preview.appcelerator.com/appcelerator/studio/airwatch/update/rc/</a>    </p>\n</li></ol></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>An item called <strong class=\" \">AirWatch Integration</strong> should appear. Select to install it, that is, make sure the box is checked, then click <strong class=\" \">Finish</strong><strong class=\" \">.</strong>    </p>\n</li><li class=\" \">    <p>Follow the rest of the wizard directions to install it.  When prompted, restart Studio.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-ObtaintheHostURLandAPIKey\">\n        <h3 class=\"heading \"><span>Obtain the Host URL and API Key</span></h3>\n    <p>In order to publish to AirWatch, you need to obtain a REST API key and endpoint.  Retrieve both pieces of information from the AirWatch Web Console.    </p>\n<ol class=\" \"><li class=\" \">    <p>Login to the <a class=\"external-link external-link\" href=\"https://apidev.awmdm.com/AirWatch\" target=\"_blank\">AirWatch Web Console</a>.    </p>\n</li><li class=\" \">    <p>In the left navigation bar, click <strong class=\" \">Groups &amp; Settings</strong> and select<strong class=\" \"> All Settings</strong> to open the<strong class=\" \"> Settings</strong> dialog<strong class=\" \">.</strong>    </p>\n</li><li class=\" \">    <p>Under the <strong class=\" \">System</strong> section, click <strong class=\" \">Advanced</strong>, then select <strong class=\" \">API &gt; REST</strong>.    </p>\n</li><li class=\" \">    <p>Make sure <strong class=\" \">Enable API Access</strong> is checked if it is not already enabled. Copy the API Key field.  You need to paste the value to the API Key field when registering an AirWatch target.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Site URLs</strong> in the left navigation bar under the <strong class=\" \">System</strong> section.    </p>\n</li><li class=\" \">    <p>Copy the host name of the REST URL field (without the protocol and any paths).  You need to paste the value to the Host URL field when registering an AirWatch target. By default, the hostname is <tt class=\" \">apidev-as.awmdm.com</tt>.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-PublishtoAirWatch\">\n        <h3 class=\"heading \"><span>Publish to AirWatch</span></h3>\n    <p>To publish an application to <strong class=\" \">AirWatch</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Project Explorer</strong> view, right-click the project to package.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Publish</strong> &gt; <strong class=\" \">AirWatch</strong> &gt; <strong class=\" \">Publish...</strong>. to open the <strong class=\" \">Publish to AirWatch</strong> wizard.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Target</strong> step:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the platform to deploy to, either Android or iOS.    </p>\n</li><li class=\" \">    <p>Select a Publish Target.  If you have not created a publish target, click <strong class=\" \">Register Existing</strong><strong class=\" \">...</strong> to open the <strong class=\" \">Register AirWatch target</strong> dialog to enter your AirWatch information.  Click <strong class=\" \">OK</strong> when you are finished.    </p>\n    <img src=\"images/download/attachments/43298667/AirWatchTarget.png\" alt=\"images/download/attachments/43298667/AirWatchTarget.png\" class=\"confluence-embedded-image\">\n    </img></li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Configuration</strong> step, enter a name, version number and description for your application, then click <strong class=\" \">Next</strong>.  Some of these fields will be auto-populated by existing information from the <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Platform</strong> step:    </p>\n<ol class=\" \"><li class=\" \">    <p>For Android applications, enter the following information:    </p>\n<ol class=\" \"><li class=\" \">    <p><strong class=\" \">Android SDK Version</strong>: Select the version of the tools to build your application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Distribution Location</strong><strong class=\" \">: </strong>Path where the Android application package (APK) file will be copied to.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Location</strong>: Path to your keystore file that is used to sign your application.  Click the <strong class=\" \">New</strong> button to create a new keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Password</strong><strong class=\" \">: </strong>Password to your keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keypair password</strong>: Password for the keystore private key.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Key Alias</strong>: Alias associated with your application&apos;s certificate.    </p>\n</li></ol></li><li class=\" \">    <p>For iOS applications, select the Distribution Certificate, Keychain, Provision Profile and SDK Version to use.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Summary </strong>step, review the information you entered.  To restart the wizard after you start the publishing process, check <strong class=\" \">Restart</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Publish</strong>.    </p>\n</li></ol>    <p>After Appcelerator Studio finishes uploading your application, Studio opens the AirWatch Web Console in your default browser.  Use the web console to manage the distribution of your application, then users can use the AirWatch application to download it.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-MobileIronPlatform\">\n        <h2 class=\"heading \"><span>MobileIron Platform</span></h2>\n    <p>Before publishing to MobileIron, you need install the MobileIron plugin on Appcelerator Studio.  After the plugin is installed, start the publishing process from the right-click context menu.  You need to create an MobileIron publish target. A publish target consists of a host URL, username and password with an alias. You can create one during the <strong class=\" \">Target</strong> step of the <strong class=\" \">Publish to MobileIron</strong> wizard.    </p>\n    <p>You also need the following items to package an application:    </p>\n<ul class=\" \"><li class=\" \">    <p>For Android applications, generate a keypair and certificate to sign your applications. For help, see <a class=\"external-link external-link\" href=\"#!/guide/Distributing_Android_apps-section-29004925_DistributingAndroidapps-Generateakeypairandcertificate\">Distributing Android apps: Generate keypair and certificate</a>.    </p>\n</li><li class=\" \">    <p>For iOS applications, create a distribution certificate and provisioning profile to sign your application.  For help, see <a class=\"external-link external-link\" href=\"#!/guide/Distributing_iOS_apps\">Distributing iOS apps</a>.    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-InstalltheMobileIronPlugin\">\n        <h3 class=\"heading \"><span>Install the MobileIron Plugin</span></h3>\n    <p>Appcelerator Studio requires MobileIron integration to be installed as a separate plugin.  To install the plugin:    </p>\n<ol class=\" \"><li class=\" \">    <p>Launch Appcelerator Studio.    </p>\n</li><li class=\" \">    <p>From the menu bar, select <strong class=\" \">Help &gt; Install New Software...</strong> The <strong class=\" \">Install </strong>wizard appears.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Add</strong>. A dialog appears asking for the name and location of the update site.    </p>\n<ol class=\" \"><li class=\" \">    <p>For <strong class=\" \">Name</strong>, enter &apos;MobileIron&apos; or something similar.    </p>\n</li><li class=\" \">    <p>For <strong class=\" \">Location</strong>, copy and paste one of the the following URLs:    </p>\n<ol class=\" \"><li class=\" \">    <p>Release Candidate Build: <a class=\"external-link external-link\" href=\"http://preview.appcelerator.com/appcelerator/studio/mobileiron/update/rc/\" target=\"_blank\">http://preview.appcelerator.com/appcelerator/studio/mobileiron/update/rc/</a>    </p>\n</li></ol></li><li class=\" \">    <p>Click <strong class=\" \">OK</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>An item called <strong class=\" \">MobileIron Integration</strong> should appear. Select to install it, that is, make sure the box is checkmarked, then click <strong class=\" \">Finish</strong><strong class=\" \">.</strong>    </p>\n</li><li class=\" \">    <p>Follow the rest of the wizard directions to install it.  When prompted, restart Studio.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43298667_DistributingtoEnterpriseAppStores-PublishtoMobileIron\">\n        <h3 class=\"heading \"><span>Publish to MobileIron</span></h3>\n    <p>To publish an application to <strong class=\" \">MobileIron&apos;s Enterprise App Storefront</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Project Explorer</strong> view, right-click the project to package.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Publish</strong> &gt; <strong class=\" \">Mobile</strong><strong class=\" \">Iron</strong> &gt; <strong class=\" \">Publish...</strong>. to open the <strong class=\" \">Publish to Mobile Iron</strong> wizard.    </p>\n    <img src=\"images/download/attachments/43298667/MobileIronRightContextMenu.png\" alt=\"images/download/attachments/43298667/MobileIronRightContextMenu.png\" class=\"confluence-embedded-image\">\n    </img></li><li class=\" \">    <p>In the <strong class=\" \">Target</strong> step:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the platform to deploy to, either Android or iOS.    </p>\n</li><li class=\" \">    <p>Select a Publish Target.  If you have not created a publish target, click <strong class=\" \">Register Existing</strong><strong class=\" \">...</strong> to open the <strong class=\" \">Register MobileIron target</strong> dialog to enter your MobileIron information.  Click <strong class=\" \">OK</strong> when you are finished.    </p>\n    <img src=\"images/download/attachments/43298667/MobileIronTarget.png\" alt=\"images/download/attachments/43298667/MobileIronTarget.png\" class=\"confluence-embedded-image\">\n    </img></li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Configuration</strong> step:    </p>\n<ol class=\" \"><li class=\" \">    <p>Enter a name, version number and description for your application.  Some of these fields will be auto-populated by existing information from the <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>To remove the application if a policy is broken or a device is signed out in multi-user mode, check <strong class=\" \">Quarantinable</strong>.    </p>\n</li><li class=\" \">    <p>To highlight the app in the featured list, check <strong class=\" \">Featured</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>.    </p>\n    <img src=\"images/download/attachments/43298667/ConfigurationStep.png\" alt=\"images/download/attachments/43298667/ConfigurationStep.png\" class=\"confluence-embedded-image\">\n    </img></li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Platform</strong> step:    </p>\n<ol class=\" \"><li class=\" \">    <p>For Android applications, enter the following information:    </p>\n<ol class=\" \"><li class=\" \">    <p><strong class=\" \">Android SDK Version</strong>: Select the version of the tools to build your application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Distribution Location</strong><strong class=\" \">: </strong>Path where the Android application package (APK) file will be copied to.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Location</strong>: Path to your keystore file that is used to sign your application.  Click the <strong class=\" \">New</strong> button to create a new keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Password</strong><strong class=\" \">: </strong>Password to your keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keypair password</strong>: Password for the keystore private key.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Key Alias</strong>: Alias associated with your application&apos;s certificate.    </p>\n</li></ol></li><li class=\" \">    <p>For iOS applications, select the Distribution Certificate, Keychain, Provision Profile and SDK Version to use.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Next</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Summary </strong>step, review the information you entered.  To restart the wizard after you start the publishing process, check <strong class=\" \">Restart</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Publish</strong>.    </p>\n</li></ol>    <p>After Appcelerator Studio finishes uploading your application, Studio opens the MobileIron Admin portal in your default browser.  Use the portal to manage the distribution of your application, then users can use the MobileIron application to download it.    </p>\n    <p>    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298667\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Distributing to Enterprise App Stores"});