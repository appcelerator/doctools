Ext.data.JsonP['Distributing_Android_apps']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Distributing Android apps</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004925\" class=\"content\">\n                        <h1>Distributing Android apps</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-RegisterwithGooglePlay\">Register with Google Play</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-Generateakeypairandcertificate\">Generate a keypair and certificate</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-Verifyyourkeystore\">Verify your keystore</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-Buildandsignyourapp\">Build and sign your app</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-BuildandsignyourappusingtheCLI\">Build and sign your app using the CLI</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-Verifyyourappissignedcorrectlyandreadytobeuploaded\">Verify your app is signed correctly and ready to be uploaded</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-UploadtheappandpublishittoGooglePlay\">Upload the app and publish it to Google Play</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-CapturingscreenshotswithDDMS\">Capturing screenshots with DDMS</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Distributing_Android_apps-section-src-29004925_DistributingAndroidapps-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004925_DistributingAndroidapps-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this section, you will learn about the Google Play program requirements and the steps you must take to publish an app to Google Play.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004925_DistributingAndroidapps-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>The diagram below illustrates the steps involved in publishing to Google Play. Though, if you look carefully you&apos;ll see that two of the steps verify the work you do in other steps. The steps are:    </p>\n<ol class=\" \"><li class=\" \">    <p>Register with Google Play    </p>\n</li><li class=\" \">    <p>Generate a keypair and certificate    </p>\n</li><li class=\" \">    <p>Verify your keystore    </p>\n</li><li class=\" \">    <p>Build and sign your app    </p>\n</li><li class=\" \">    <p>Verify your app is signed correctly and ready to be uploaded    </p>\n</li><li class=\" \">    <p>Upload the app and publish it to Google Play    </p>\n</li></ol>    <p>    <img src=\"images/download/attachments/29004925/android_publish_process.png\" alt=\"images/download/attachments/29004925/android_publish_process.png\" class=\"confluence-embedded-image\" width=\"300\">\n        </img></p>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-RegisterwithGooglePlay\">\n        <h3 class=\"heading \"><span>Register with Google Play</span></h3>\n    <p>To publish apps in Google Play, you will need a Google account. This could be your personal Gmail account or you could register a new account for your company. Then, you must sign up for the Android developer program by visiting <a class=\"external-link external-link\" href=\"https://play.google.com/apps/publish/signup\" target=\"_blank\">play.google.com</a>. Google charges a one-time $25 fee, which in their words, &quot;encourage[s] higher quality products on the market (e.g. less spammy products).&quot;    </p>\n    <p>To sell apps (charge, not give them for free), you&apos;ll need to register for a Google Checkout account as well. Visit <a class=\"external-link external-link\" href=\"https://play.google.com/apps/publish\" target=\"_blank\">https://play.google.com/apps/publish</a>, click on Edit profile, and then click &quot;Setup a Merchant Account at Google Checkout.&quot; You&apos;ll need to supply various bits of business information, including banking and legal details. Setup and approval is relatively quick. Once you&apos;re registered, you&apos;ll be able to set prices for your app in various currencies and participate in Google&apos;s In-App Billing program.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-Generateakeypairandcertificate\">\n        <h3 class=\"heading \"><span>Generate a keypair and certificate</span></h3>\n    <p>You&apos;ll need to digitally sign your app before uploading it to Google Play. To do this, you&apos;ll need to generate a keypair and certificate. You&apos;ll do this once for each app you publish by using the <tt class=\" \">keytool</tt> command, which is supplied with the Java SDK. In generic form, the syntax is:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">keytool -genkeypair -v -keystore path/file_name -alias alias_name -keyalg RSA -sigalg SHA1withRSA -validity </code><code class=\"value\">10000</code></div>\n</div>\n    </div>\n    <p>There are two bits in that you&apos;ll need to supply. The first is the <tt class=\" \">path/file_name</tt> which you use to specify the keystore in which your keypair and certificate will be stored. Each keystore file can store many unrelated certificates. So typically, you&apos;d put the keystore file in your home (your user) directory so that it&apos;s reasonably secure and backed up with the rest of your data. The <tt class=\" \">alias_name</tt> is the label that identifies which keys you&apos;re storing (and which you&apos;ll be retrieving later). Set that something specific to your app.    </p>\n    <p>For example, if you were to execute the <tt class=\" \">keytool</tt> command from your home directory for an app named HelloWorld, you might enter:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">keytool -genkeypair -v -keystore android.keystore -alias helloworld -keyalg RSA -sigalg SHA1withRSA -validity </code><code class=\"value\">10000</code></div>\n</div>\n    </div>\n    <p>The key algorithm (<tt class=\" \">keyalg</tt>) must be RSA for Google Play and the validity period must be 10000 (days) or longer. That works out to 25 years or so, which is the validity period that Google Play system requires. They want to make sure you can provide upgrades to your app for a very long time.    </p>\n    <p>The self-signed certificate algorithm (<tt class=\" \">sigalg</tt>) must be SHA-1 (<tt class=\" \">SHA1withRSA)</tt> if you are running your application on devices running Android 4.3.x and prior. Android 4.4 and later supports both SHA-1 (<tt class=\" \">SHA1withRSA)</tt> and SHA-256 (<tt class=\" \">SHA256withRSA)</tt>. If you do not supply the <tt class=\" \">sigalg</tt> option, the default value varies with the JDK version you are using.  For JDK 1.6, the default algorithm is SHA-1 (<tt class=\" \">SHA1withRSA</tt>), and for JDK 1.7, the default algorithm is SHA-256 (<tt class=\" \">SHA256withRSA</tt>).    </p>\n    <p>You will be prompted for your name, company name, and locality information, which is used to build the certificate. You&apos;ll also be prompted for a password. Make sure you record or remember that password! You&apos;ll need to use this same certificate to sign your code each time you update your app. If you don&apos;t have that password, you won&apos;t be able to release an update. Check out Google Play sometime. You&apos;re sure to find &quot;new&quot; apps that should have been upgrades. In many cases, those are from developers who forgot their keystore passwords and had to release a whole new version. In doing so, their old users never get update notifications and the app probably loses some of its userbase.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-Verifyyourkeystore\">\n        <h3 class=\"heading \"><span>Verify your keystore</span></h3>\n    <p>Because the certificate is so crucial to publishing (and later updating) your app, we teach &quot;verification&quot; as a separate step. Once you&apos;ve generated your keypair and certificate, you should verify your keystore to ensure that the algorithm is correct, validity period is sufficient, and that you remember your alias and password correctly. Again, you&apos;ll do so with the <tt class=\" \">keytool</tt> command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">keytool -list -v -keystore path/file_name</code></div>\n</div>\n    </div>\n    <p>You&apos;ll be prompted for your password. The command will list each of the aliases contained in the file and its associated certificate information. Make sure that contact info is correct and make sure the certificate is valid for 25 years or more from the date it was created.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-Buildandsignyourapp\">\n        <h3 class=\"heading \"><span>Build and sign your app</span></h3>\n    <p>    <img src=\"images/download/attachments/29004925/PackageAndroid.png\" alt=\"images/download/attachments/29004925/PackageAndroid.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>Once you&apos;ve generated your certificate, you can build and sign your app. To package your application for distribution, first select the project in the <strong class=\" \">Project Explorer</strong> view, then in the global tool bar, select <strong class=\" \">Publish</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list and <strong class=\" \">Android App Store</strong> from the <strong class=\" \">Target</strong> drop-down list. If the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the device is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n    <p>The <strong class=\" \">Distribute</strong> wizard appears asking you to fill in key pieces of information:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Distribution Location</strong><strong class=\" \">: </strong>Path where the Android application package (APK) file will be copied to.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Location</strong>: Path to your keystore file that is used to sign your application.  Click the <strong class=\" \">New</strong> button to create a new keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Keystore Password</strong><strong class=\" \">: </strong>Password to your keystore.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Key Alias</strong>: Alias associated with your application&apos;s certificate.    </p>\n</li></ul>    <p>Click the <strong class=\" \">Publish</strong> button once you have entered all of the above information.  Studio builds your application and generates an APK file in the specified location.    </p>\n    <p>After you publish an application for the first time, the next subsequent invocation of the <strong class=\" \">Distribute</strong> wizard may not ask you for the same exact information and uses your previous settings.    </p>\n    <p><strong class=\" \">Prior to Studio 3.2.0:</strong>    </p>\n    <p>From the menu as shown, choose <strong class=\" \">Distribute - Android</strong> to bring up the dialog box shown in the second screenshot.  In this dialog, you enter the path to where you want the final APK file stores, the path to your keystore file, the keystore password, and the alias associated with your app&apos;s certificate. Click Finish and Studio will build your app and sign it with your certificate (rather than the development certificate used during testing).    </p>\n    <p>    <img src=\"images/download/attachments/29004925/android_publish_menu.png\" alt=\"images/download/attachments/29004925/android_publish_menu.png\" class=\"confluence-embedded-image image-left\" width=\"259\" height=\"117\">\n     <img src=\"images/download/attachments/29004925/android_publish.png\" alt=\"images/download/attachments/29004925/android_publish.png\" class=\"confluence-embedded-image\">\n    </img></img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-BuildandsignyourappusingtheCLI\">\n        <h3 class=\"heading \"><span>Build and sign your app using the CLI</span></h3>\n    <p>To use the Titanium CLI to package your Android application, after you have created your keystore, run the following command:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">appc run -p android -T dist-playstore [-K &lt;KEYSTORE_FILE&gt; -P &lt;KEYSTORE_PASSWORD&gt; -L &lt;KEYSTORE_ALIAS&gt; -O &lt;OUTPUT_DIRECTORY&gt;]</code></div>\n</div>\n    </div>\n    <p>If you omit any of the optional parameters, you will be prompted by the CLI to enter these values.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-Verifyyourappissignedcorrectlyandreadytobeuploaded\">\n        <h3 class=\"heading \"><span>Verify your app is signed correctly and ready to be uploaded</span></h3>\n    <p>Before uploading, you should verify that the APK file was created and signed correctly. You&apos;ll do so with another Android SDK command-line tool. At the command prompt, enter:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">jarsigner -verify -verbose path/yourapp.apk</code></div>\n</div>\n    </div>\n    <p>where <tt class=\" \">path/yourapp.apk</tt> is the path and file name associated with your app&apos;s APK file. You should see the &quot;jar verified&quot; message at the end of a long list of APK file contents. Now you&apos;re ready to publish your app.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-UploadtheappandpublishittoGooglePlay\">\n        <h3 class=\"heading \"><span>Upload the app and publish it to Google Play</span></h3>\n    <p>Visit <a class=\"external-link external-link\" href=\"https://play.google.com/apps/publish\" target=\"_blank\">https://play.google.com/apps/publish</a> and log onto your Google Play account. Click Upload Application to begin the publishing process. Be prepared with the following required assets:    </p>\n<ul class=\" \"><li class=\" \">    <p>Minimum of two (2) screenshots of your app    </p>\n<ul class=\" \"><li class=\" \">    <p>In one of these sizes: 320 x 480, 480 x 800, or 480 x 854    </p>\n</li><li class=\" \">    <p>24-bit PNG or JPEG (no alpha)    </p>\n</li><li class=\" \">    <p>Full bleed, no border in art    </p>\n</li><li class=\" \">    <p>You may upload screenshots in landscape orientation. The thumbnails will appear to be rotated, but the actual images and their orientations will be preserved.    </p>\n</li></ul></li><li class=\" \">    <p>One (1) high resolution app icon &#x2013; 512 x 512, 32-bit PNG or JPEG    </p>\n</li><li class=\" \">    <p>Title (your app&apos;s name)    </p>\n</li><li class=\" \">    <p>Description, 4000 characters max. Make this &quot;SEO friendly&quot; as it will help drive downloads of your app.    </p>\n</li><li class=\" \">    <p>Promo text, 80 characters max. This is the brief summary that appears in some listings pages. Be as SEO friendly as you can in the space permitted.    </p>\n</li><li class=\" \">    <p>Application Type and Category, which you&apos;ll choose from Google Plays&apos;s predefined lists.    </p>\n</li><li class=\" \">    <p>Content Rating &#x2013; you&apos;ll choose from High, Medium, Low, and Everyone. This rating helps filter inappropriate apps from those who don&apos;t want to see such content.    </p>\n</li><li class=\" \">    <p>Contact information &#x2013; you&apos;ll need to provide some way for customers to reach you. This information will be shown to potential buyers.    </p>\n</li></ul>    <p>You should read, and then you&apos;ll have to check the boxes indicating you agree to the Google Play&apos;s terms and conditions. There are many additional assets you could provide, such as videos and larger promotional graphics. You can set a price and currency options for your app if you&apos;ve set up a Google Checkout account.    </p>\n    <div class=\"section section-4 \" id=\"src-29004925_DistributingAndroidapps-CapturingscreenshotswithDDMS\">\n        <h4 class=\"heading \"><span>Capturing screenshots with DDMS</span></h4>\n    <p>As noted above, you&apos;ll need at least two screenshots to publish your app. You can grab those with DDMS. With your Android device connected or emulator running, open ddms and select your device in the top-left pane. Choose Device, Screen Capture. Save two representative screenshots to your desktop or home directory. Close ddms. Disconnect your device following your operating system&#x2019;s procedure for safely removing USB devices.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004925_DistributingAndroidapps-References\">\n        <h3 class=\"heading \"><span>References</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://play.google.com/about/developer-content-policy.html#showlanguages\" target=\"_blank\">Google Play Developer Program Policies</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://support.google.com/googleplay/android-developer/bin/answer.py?hl=en&amp;answer=1078870\" target=\"_blank\">Google Play for Developers: Graphic Assets for your Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://play.google.com/apps/publish\" target=\"_blank\">Google Play</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004925_DistributingAndroidapps-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this section, you learned how to publish your Android app. You learned how to generate the keypair and certificate required to sign your app. You saw how to build and sign your distribution-ready APK file. And finally, you examined Google Play requirements and learned how you&apos;d upload and publish your app.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004925\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Distributing Android apps"});