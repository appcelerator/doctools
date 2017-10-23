Ext.data.JsonP['Configuring_push_services']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Configuring push services</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-37551713\" class=\"content\">\n                        <h1>Configuring push services</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-ConfiguringpushservicesforiOSdevices\">Configuring push services for iOS devices</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-CreateandUploadaPushNotificationCertificate\">Create and Upload a Push Notification Certificate</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-RegisteranAppID\">Register an App ID</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-GenerateanApplePushNotificationCertificate\">Generate an Apple Push Notification Certificate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-ExporttheCertificate\">Export the Certificate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-UploadcertificatetoDashboard\">Upload certificate to Dashboard</a>    </p>\n</li></ul></li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-ConfiguringpushservicesforAndroiddevices\">Configuring push services for Android devices</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-CreatingaGoogleAPIConsoleprojectandclientID\">Creating a Google API Console project and client ID</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Configuring_push_services-section-src-37551713_Configuringpushservices-ConfiguringAPIBuilderapplicationforGCMservice\">Configuring API Builder application for GCM service</a>    </p>\n</li></ul></li></ul>    <p>To send push notifications, Mobile Backend Services (MBS) relies on the Google Cloud Messaging (GCM) for Android applications, and the Apple Push Notification (APN) service for iOS applications. To use these services in your Titanium application, you first need to enable GCM or APN for your application, and then configure MBS with information about your push service. This guide walks you through the process of creating and configuring push services for your application.    </p>\n    <div class=\"section section-2 \" id=\"src-37551713_Configuringpushservices-ConfiguringpushservicesforiOSdevices\">\n        <h2 class=\"heading \"><span>Configuring push services for iOS devices</span></h2>\n    <p>To enable Apple Push Notification service for your application, you need to create an Apple Push Notification certificate and upload the certificate to the MBS server. Note that iOS simulators cannot receive Apple push notifications.    </p>\n    <div class=\"section section-3 \" id=\"src-37551713_Configuringpushservices-CreateandUploadaPushNotificationCertificate\">\n        <h3 class=\"heading \"><span>Create and Upload a Push Notification Certificate</span></h3>\n    <p>To create an Apple Push Notification certificate, you need to first create an Explicit App ID. The App ID identifies where to send the push notification, which is tied to the certificate when you create it. After you create the certificate, export the certificate to PKCS #12 format and upload it to the MBS server. This certificate allows the MBS server to communicate with the Apple Push Notification server.    </p>\n    <div class=\"section section-4 \" id=\"src-37551713_Configuringpushservices-RegisteranAppID\">\n        <h4 class=\"heading \"><span>Register an App ID</span></h4>\n    <p>You first need to register an App ID for your application.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Agent or Admin.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Identifiers</strong>, then click the add (<strong class=\" \">+</strong>) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>Under <strong class=\" \">App ID Description</strong>, enter a value in the <strong class=\" \">Name</strong> field.    </p>\n</li><li class=\" \">    <p>Select the <strong class=\" \">App ID Prefix</strong> to use. (You cannot use a Wildcard App ID for an application with push notifications.)    </p>\n</li><li class=\" \">    <p>In the the <strong class=\" \">App ID Suffix</strong> section, select <strong class=\" \">Explicit App ID</strong> and enter your application&apos;s ID.    </p>\n    <div class=\"confbox admonition admonition-tip aui-message success shadowed information-macro\">\n            <p>This is the value of the <tt class=\" \">&lt;id&gt;</tt> element in your project&apos;s <strong class=\" \">tiapp.xml</strong> file.    </p>\n    </div>\n    </li><li class=\" \">    <p>Under <strong class=\" \">App Services</strong>, check the <strong class=\" \">Push Notifications</strong> checkbox.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Continue</strong>, <strong class=\" \">Submit</strong>, and <strong class=\" \">Done</strong> to complete the process.    </p>\n</li></ol>    <p>The next step is to generate a certificate that approves your application for the Apple Push Notification service.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-37551713_Configuringpushservices-GenerateanApplePushNotificationCertificate\">\n        <h4 class=\"heading \"><span>Generate an Apple Push Notification Certificate</span></h4>\n    <p>These directions cover how to generate an Apple Push Notification certificate for both testing (Development) and production (Distribution). Only step #4 differs based on which certificate you create.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Agent or Admin.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Certificates</strong>, then click the add (<strong class=\" \">+</strong>) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>For application in development, select <strong class=\" \">Apple Push Notification service SSL (Sandbox)</strong>. For production applications,  select <strong class=\" \">Apple Push Notification service SSL (Production)</strong>, then click <strong class=\" \">Continue</strong>.    </p>\n</li><li class=\" \">    <p>Select the App ID that you created previously from the drop-down list, then click <strong class=\" \">Continue</strong>.    </p>\n</li><li class=\" \">    <p>Follow the instructions provided for creating a Certificate Signing Request (CSR). Click <strong class=\" \">Continue</strong> once you&apos;ve created the CSR.    </p>\n</li><li class=\" \">    <p>Locate the CSR you created and click <strong class=\" \">Generate</strong>.  You are returned to the Certificates page with the status listed as Pending. Wait a moment then  refresh the page in your browser. If asked to approve the request, click <strong class=\" \">Approve</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Download</strong> to download the certificate (.cer) file to your computer.    </p>\n</li><li class=\" \">    <p>Double-click the file to install it into your keychain.    </p>\n</li></ol>    <p>Now that you&apos;ve created the push notification certificate, you need to export it in a format that you provide API Builder.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-37551713_Configuringpushservices-ExporttheCertificate\">\n        <h4 class=\"heading \"><span>Export the Certificate</span></h4>\n    <p>Once you&apos;ve created the certificate, you need to export it in a format that you can provide to API Builder.    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <strong class=\" \">Keychain Access</strong> (Applications &gt; Utilities &gt; Keychain Access).    </p>\n</li><li class=\" \">    <p>Under <strong class=\" \">Categories</strong> in the the left side navigation, click <strong class=\" \">My Certificates</strong>.    </p>\n</li><li class=\" \">    <p>Select the certificate you installed previously and select <strong class=\" \">File &gt; Export Items...</strong>.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Personal Information Exchange (.p12)</strong> from the File Format menu and click  <strong class=\" \">Save</strong>.    </p>\n</li><li class=\" \">    <p>Enter a password for the certificate, then click <strong class=\" \">Save</strong>.    </p>\n</li></ol>    <p>Keychain exports your certificate as a PKCS #12 file that you upload to MBS to enable Apple Push Notification for your application.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-37551713_Configuringpushservices-UploadcertificatetoDashboard\">\n        <h4 class=\"heading \"><span>Upload certificate to Dashboard</span></h4>\n    <p>You use <a class=\"external-link external-link\" href=\"http://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a> to upload the .p12 certificate file to API Builder and enable notifications within your application.    </p>\n    <p><strong class=\" \">To upload the certificate using Dashboard:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a> and select your MBS application from the <strong class=\" \">Apps</strong> drop-down menu.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Push Notifications</strong> on the left-side navigation.    </p>\n</li><li class=\" \">    <p>Select the <strong class=\" \">iOS Push</strong> tab.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Choose File</strong>,  locate the .p12 file you exported previously, and click <strong class=\" \">Open</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Certificate Password</strong> field enter the password you selected when you generated the certificate.    </p>\n    <img src=\"images/download/attachments/37551713/ios_cert_enterprise.png\" alt=\"images/download/attachments/37551713/ios_cert_enterprise.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"214\">\n    </img></li><li class=\" \">    <p>Click <strong class=\" \">Save Changes</strong>. If the password you entered was incorrect, an error dialog will alert you.    </p>\n</li></ol>    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37551713_Configuringpushservices-ConfiguringpushservicesforAndroiddevices\">\n        <h2 class=\"heading \"><span>Configuring push services for Android devices</span></h2>\n    <p>To enable push services for your Android application, you need to create a Google API project and enable its GSM service, and obtain a send    </p>\n    <div class=\"section section-3 \" id=\"src-37551713_Configuringpushservices-CreatingaGoogleAPIConsoleprojectandclientID\">\n        <h3 class=\"heading \"><span>Creating a Google API Console project and client ID</span></h3>\n    <p>Before you can integrate Google Sign-In into your website, you must have a Google API Console project. In the project, you create a client ID, which you need to call the sign-in API.    </p>\n    <p>To create a Google API Console project and client ID, follow these steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Go to the <a class=\"external-link external-link\" href=\"https://console.developers.google.com/project/_/apiui/apis/library\" target=\"_blank\">Google API Console</a>.    </p>\n</li><li class=\" \">    <p>From the project drop-down, select an existing <a class=\"external-link external-link\" href=\"https://support.google.com/cloud/answer/6158853\" target=\"_blank\">project</a>, or create a new one by selecting <strong class=\" \">Create a new project</strong>.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Use a single project to hold all platform instances of your app (Android, iOS, web, etc.), each with a different Client ID.    </p>\n    </div>\n    </li><li class=\" \">    <p>In the sidebar under &quot;API Manager&quot;, select <strong class=\" \">Credentials</strong>, then select the <strong class=\" \">OAuth consent screen</strong> tab.    </p>\n<ol class=\" \"><li class=\" \">    <p>Choose an <strong class=\" \">Email Address</strong>, specify a <strong class=\" \">Product Name</strong>, and press <strong class=\" \">Save</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>In the <strong class=\" \">Credentials</strong> tab, select the <strong class=\" \">New credentials</strong> drop-down list, and choose <strong class=\" \">OAuth client ID</strong>.    </p>\n</li><li class=\" \">    <p>Under <strong class=\"uitext \">Application type</strong>, select <strong class=\" \">Web application</strong>. Register the origins from which your app is allowed to access the Google APIs, as follows. An origin is a unique combination of protocol, hostname, and port.    </p>\n<ol class=\" \"><li class=\" \">    <p>In the <strong class=\"uitext \">Authorized JavaScript origins</strong> field, enter the origin for your app. You can enter multiple origins to allow for your app to run on different protocols, domains, or subdomains. You cannot use wildcards. In the example below, the second URL could be a production URL.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">http:</code><code class=\"comments\">//localhost:8080</code></div>\n<div class=\"line\"><code class=\"plain\">https:</code><code class=\"comments\">//myproductionurl.example.com</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>The <strong class=\"uitext \">Authorized redirect URI</strong> field does not require a value. Redirect URIs are not used with JavaScript APIs.    </p>\n</li><li class=\" \">    <p>Press the <strong class=\" \">Create</strong> button.    </p>\n</li></ol></li><li class=\" \">    <p>From the resulting <strong class=\"uitext \">OAuth client dialog box</strong>, copy the <strong class=\"uitext \">Client ID</strong> . The Client ID lets your app access enabled Google APIs.    </p>\n</li></ol>    <p>Source: <a class=\"external-link external-link\" href=\"https://developers.google.com/identity/sign-in/web/devconsole-project\" target=\"_blank\">https://developers.google.com/identity/sign-in/web/devconsole-project</a>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37551713_Configuringpushservices-ConfiguringAPIBuilderapplicationforGCMservice\">\n        <h3 class=\"heading \"><span>Configuring API Builder application for GCM service</span></h3>\n    <p>Once you&apos;ve created a Google API project with GCM enabled, you need to update your application&apos;s settings page in <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Dashboard</a> with the API key and sender ID you generated.    </p>\n    <p><strong class=\" \">To configure API Builder for push notifications using Dashboard:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>Open <a class=\"external-link external-link\" href=\"https://dashboard.appcelerator.com/\" target=\"_blank\">Dashboard</a> and select your application from the <strong class=\" \">Apps</strong> drop-down menu.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Push Notifications</strong> on the left-side navigation.    </p>\n</li><li class=\" \">    <p>Select the <strong class=\" \">Android Cloud Messaging</strong> tab.    </p>\n</li><li class=\" \">    <p>Enter the server key in the <strong class=\" \">Server Key</strong> field and the sender ID in the<strong class=\" \"> Sender ID</strong> field. To find your Server Key and Sender ID, go to <a class=\"external-link external-link\" href=\"https://firebase.google.com/\" target=\"_blank\">Firebase</a>. From there, click on <strong class=\" \">Settings</strong> (cog) &gt; <strong class=\" \">Cloud Messaging</strong>. This page will show your Sender ID (should be the same as your project number) and your Server Key.    </p>\n    <img src=\"images/download/attachments/37551713/push-notifications.png\" alt=\"images/download/attachments/37551713/push-notifications.png\" class=\"confluence-embedded-image\" width=\"500\">\n    </img></li><li class=\" \">    <p>Click <strong class=\" \">Save Changes</strong>.    </p>\n</li></ol>    <p><strong class=\" \">Note</strong>: If you are still seeing the following error message when pushing a notification, uninstall the app and rebuild it:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Exception Type: GCM; Error Code: </code><code class=\"value\">3006</code><code class=\"plain\">; Error Message: The sender_id contained in the registration_id does not match the sender_id used to register with the GCM servers</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37551713\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Configuring push services"});