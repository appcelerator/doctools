Ext.data.JsonP['Integrating_Test_with_Jenkins']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Integrating Test with Jenkins</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298703\" class=\"content\">\n                        <h1>Integrating Test with Jenkins</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Enterprise Subscription Required!</div>\n            <p>This AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services feature requires an Enterprise Subscription.    </p>\n    </div>\n        <p>    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-IntegrationOverview\">Integration Overview</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-CreateanApplicationwithAppceleratorTestEnabled\">Create an Application with Appcelerator Test Enabled</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-SetupaDeviceFarm\">Setup a Device Farm</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-SetuptheTestComposition\">Setup the Test Composition</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-SetupJenkinstoUseAppceleratorTest\">Setup Jenkins to Use Appcelerator Test</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-TitaniumPrerequisites\">Titanium Prerequisites</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-InstallandConfiguretheSOASTAPlugin\">Install and Configure the SOASTA Plugin</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-InstalltheiOSAppInstallerUtility\">Install the iOS App Installer Utility</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-InstallthescommandUtility\">Install the scommand Utility</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-SetuptheContinuousIntegrationJob\">Setup the Continuous Integration Job</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-ExampleiOSDeviceShellScript\">Example iOS Device Shell Script</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-ExampleiOSSimulatorShellScript\">Example iOS Simulator Shell Script</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-ExampleAndroidDeviceShellScript\">Example Android Device Shell Script</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-ExampleAndroidEmulatorShellScript\">Example Android Emulator Shell Script</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-ViewTestResults\">View Test Results</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703_IntegratingTestwithJenkins-References\">References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43298703_IntegratingTestwithJenkins-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>This guide walks through the steps of integrating Appcelerator Test with the Jenkins continuous integration tool.  The primary focus of this document is to integrate Appcelerator Test with Jenkins and briefly discusses how to setup Jenkins to build a Titanium application and assumes you have a working Jenkins setup.  These directions assume the same computer builds the application, installs it to a mobile device and runs the Jenkins tool.    </p>\n    <p>For information on getting started with Appcelerator Test, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a>.    </p>\n    <p>For information on getting started with Jenkins, see <a class=\"external-link external-link\" href=\"https://wiki.jenkins-ci.org/display/JENKINS/Use+Jenkins\" target=\"_blank\">Use Jenkins</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298703_IntegratingTestwithJenkins-IntegrationOverview\">\n        <h2 class=\"heading \"><span>Integration Overview</span></h2>\n    <p>The following steps outline how to integrate Appcelerator Test with Jenkins with details discussed further in the sections below.    </p>\n<ol class=\" \"><li class=\" \">    <p>Create an Application with Appcelerator Test Enabled    </p>\n</li><li class=\" \">    <p>Setup a Device Farm (or use the Android Emulator and iOS Simulator)    </p>\n<ol class=\" \"><li class=\" \">    <p>Register devices (see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a> for more information)    </p>\n</li><li class=\" \">    <p>Connect devices to the farm server via USB    </p>\n</li><li class=\" \">    <p>Connect devices to Appcelerator Test (see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a> for more information)    </p>\n</li><li class=\" \">    <p>Verify the devices do not fall asleep (auto-lock off for iOS devices)    </p>\n</li></ol></li><li class=\" \">    <p>Setup the Test Composition (see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test\">Appcelerator Test</a> for more information)    </p>\n</li><li class=\" \">    <p>Setup the Jenkins Server to Use Appcelerator Test    </p>\n<ol class=\" \"><li class=\" \">    <p>Install and Configure the SOASTA plugin    </p>\n</li><li class=\" \">    <p>Install the iOS App Installer (for testing on iOS devices)    </p>\n</li><li class=\" \">    <p>Install the scommand Utiliy    </p>\n</li></ol></li><li class=\" \">    <p>Setup the CI Job    </p>\n</li></ol>    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-CreateanApplicationwithAppceleratorTestEnabled\">\n        <h3 class=\"heading \"><span>Create an Application with Appcelerator Test Enabled</span></h3>\n    <p>The Appcelerator Test service needs to be always enabled for your project in order to use it.  If you are using a version control system, such as Git or CVS, to make it easier to perform continuous builds, save the Appcelerator Test modules and <tt class=\" \">tiapp.xml</tt> file modifications to your project as part of your codebase.  Save the following directories and the <tt class=\" \">tiapp.xml</tt> file to your project:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">modules/android/com.soasta.touchtest</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">modules/iphone/com.soasta.touchtest</tt>    </p>\n</li><li class=\" \">    <p><tt class=\" \">plugins/com.soasta.touchtest.android</tt>    </p>\n</li></ul>    <p>If you do not want to save these files as part of your project, you can copy in the Appcelerator Test modules and modify the <tt class=\" \">tiapp.xml</tt> file to enable Appcelerator Test.  This requires that the application was created with Appcelerator Studio to generate a Test project with GUIDs in the Appcelerator Test dashboard.  This GUID needs to be added to the <tt class=\" \">tiapp.xml</tt> file to connect it with Appcelerator Test.  For details about the <tt class=\" \">tiapp.xml</tt> modifications, see <a class=\"document-link \" href=\"#!/guide/Platform_Services\">Platform Services</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-SetupaDeviceFarm\">\n        <h3 class=\"heading \"><span>Setup a Device Farm</span></h3>\n    <p>To setup a device farm, you need to register each device with Appcelerator Test and connect them to a server using an USB connection.  You need an USB connection to install the application to the device using the Android Debug Bridge or iOS App Installer utilities.  For iOS testing, the server needs to be running Mac OS X.  For information on registering devices with Appcelerator Test, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Test-section-src-43298697_AppceleratorTest-RegisteraDeviceorSimulator\">Test: Register a Device or Simulator</a>.    </p>\n    <p>Each device needs to have a WiFi or data connection enabled to connect to Appcelerator Test:    </p>\n<ul class=\" \"><li class=\" \">    <p>For Android devices, launch the TouchTest Agent.    </p>\n</li><li class=\" \">    <p>For iOS devices, launch Safari and log in to <a class=\"external-link external-link\" href=\"http://appctest-2.appcelerator.com/concerto/touchtest.\" target=\"_blank\">http://appctest-2.appcelerator.com/concerto/touchtest</a>.    </p>\n</li></ul>    <p>Verify the devices do not fall asleep:    </p>\n<ul class=\" \"><li class=\" \">    <p>For Android devices, as long as the device is plugged in (charging) and the TouchTest Agent is on screen, the device does not fall asleep.    </p>\n</li><li class=\" \">    <p>For iOS devices, verify that auto-lock is off.  In <strong class=\" \">Settings</strong>, navigate to <strong class=\" \">General</strong> &gt; <strong class=\" \">Auto-Lock</strong> and select <strong class=\" \">Never</strong>.    </p>\n</li></ul>    <p>You need a list of serial numbers for each Android device and UUIDs or device name for each iOS device.  To retrieve a list:    </p>\n<ul class=\" \"><li class=\" \">    <p>For Android devices, use the <tt class=\" \">adb devices</tt> command to output a list of all connected devices with their serial numbers in the terminal.    </p>\n</li><li class=\" \">    <p>For iOS devices, use the Xcode Organizer and click on each individual device to get the <strong class=\" \">Identifier</strong>.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>Rather than using a device, you can use the Android emulator and iOS simulator, which can be launched by the build server. Remember to register them with Appcelerator Test.    </p>\n    </div>\n        </div>\n    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-SetuptheTestComposition\">\n        <h3 class=\"heading \"><span>Setup the Test Composition</span></h3>\n    <p>For each device in your test farm, you need to create a test composition that runs on that device. Note that to select a device for a composition it needs to be connected to Appcelerator Test.    </p>\n    <p>Before creating a test composition, you need to create a test clip for each device type, that is, Android, iPhone and iPad.  For information on creating a test composition, see <a class=\"document-link unresolved\" href=\"#!/guide/Integrating_Test_with_Jenkins-section-src-43298703\">Test</a>.    </p>\n    <p>Remember the name of the test composition and the device used to run the test composition.  You need this information for the build script.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-SetupJenkinstoUseAppceleratorTest\">\n        <h3 class=\"heading \"><span>Setup Jenkins to Use Appcelerator Test</span></h3>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-TitaniumPrerequisites\">\n        <h4 class=\"heading \"><span>Titanium Prerequisites</span></h4>\n    <p>To build the application, the user account that builds the application needs permission to:    </p>\n<ul class=\" \"><li class=\" \">    <p>Run Titanium CLI commands    </p>\n</li><li class=\" \">    <p>Access the Titanium SDK and third-party SDK tools (Xcode and Android SDK)    </p>\n</li><li class=\" \">    <p>Access the keychain with an Apple Development Certificate and Profile to build for an iOS device    </p>\n</li></ul>    <p>Log in to the user account and verify you can build an Android and iOS application for a device with the Titanium CLI.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>For easier troubleshooting, set the CLI log level to trace to output more debug information: <tt class=\" \">titanium config logLevel trace</tt>    </p>\n    <p>To see this information, click <strong class=\" \">Console Output</strong> when viewing a specific Jenkins build.    </p>\n    </div>\n        </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-InstallandConfiguretheSOASTAPlugin\">\n        <h4 class=\"heading \"><span>Install and Configure the SOASTA Plugin</span></h4>\n<ol class=\" \"><li class=\" \">    <p>From the Jenkins start page, click <strong class=\" \">Manage Jenkins.</strong>    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Manage Plugin</strong><strong class=\" \">s</strong>.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Available</strong> tab.    </p>\n</li><li class=\" \">    <p>Search for <strong class=\" \">SOASTA CloudTest Plugin</strong> and enable it for installation.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Install without Restart</strong>.    </p>\n</li><li class=\" \">    <p>After the plugin has been installed, from the Jenkins start page, click <strong class=\" \">Manage Jenkins.</strong>    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Configure System.</strong>    </p>\n</li><li class=\" \">    <p>Under the <strong class=\" \">CloudTest Servers</strong> section, in the <strong class=\" \">CloudTest URL</strong> textbox, enter &quot;http://appctest-2.appcelerator.com/concerto/&quot;.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">User Name</strong> and <strong class=\" \">Password</strong> textboxes, enter your Appcelerator Test credentials.    </p>\n</li><li class=\" \">    <p>Click the<strong class=\" \"> Test Connect</strong> button to verify that the connection to Appcelerator Test works.    </p>\n</li></ol>    <p>If the test connection passes, you are done with this section.  If not, reenter your Appcelerator Test credential and retest the connection.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>If you do not see the SOASTA CloudTest Plugin in the list of available plugins:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the Appclerator Dashboard.    </p>\n</li><li class=\" \">    <p>Download the Jenkins plugin from <a class=\"external-link external-link\" href=\"http://appctest-2.appcelerator.com/concerto/downloads/jenkinsplugin/cloudtest.hpi\" target=\"_blank\">http://appctest-2.appcelerator.com/concerto/downloads/jenkinsplugin/cloudtest.hpi</a>.    </p>\n</li><li class=\" \">    <p>In the Jenkins Manage Plugin page, under the <strong class=\" \">Update Plugin</strong> section, click <strong class=\" \">Choose File</strong>. A dialog appears.    </p>\n</li><li class=\" \">    <p>In the dialog, navigate to and select the <strong class=\" \">cloudtest.hpi</strong> file and click <strong class=\" \">OK.</strong>    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Upload</strong> button to start the installation process.    </p>\n</li></ol>    <p>After the installation successfully completes, continue the directions above at step #6.    </p>\n    </div>\n        </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-InstalltheiOSAppInstallerUtility\">\n        <h4 class=\"heading \"><span>Install the iOS App Installer Utility</span></h4>\n    <p>To install your application to iOS devices, you need to install the iOS App Installer utility to the node that has your iOS devices connected to it.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the Appcelerator Dashboard.    </p>\n</li><li class=\" \">    <p>Download the iOS App Installer utility from <a class=\"external-link external-link\" href=\"http://appctest-2.appcelerator.com/concerto/downloads/mobile/iOSAppInstaller.zip\" target=\"_blank\">http://appctest-2.appcelerator.com/concerto/downloads/mobile/iOSAppInstaller.zip</a>.    </p>\n</li><li class=\" \">    <p>Unzip and copy the contents of the archive where it can be accessed by a user to install the application to device, for example, <tt class=\" \">/opt/share</tt>.    </p>\n</li></ol>    <p>Run the command with the user account that is going to install the application to the device to verify it works.  Make a note of the installation path.  You need this information for the build script.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-InstallthescommandUtility\">\n        <h4 class=\"heading \"><span>Install the scommand Utility</span></h4>\n    <p>The scommand utility contacts Appcelerator Test to start the test composition or run other test commands.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to the Appcelerator Dashboard.    </p>\n</li><li class=\" \">    <p>Download the utility from <a class=\"external-link external-link\" href=\"http://appctest-2.appcelerator.com/concerto/downloads/scommand/scommand.zip\" target=\"_blank\">http://appctest-2.appcelerator.com/concerto/downloads/scommand/scommand.zip</a>.    </p>\n</li><li class=\" \">    <p>Unzip and copy the contents of the archive where it can be accessed by a user to initiate the test, for example, <tt class=\" \">/opt/share</tt>.    </p>\n</li></ol>    <p>Run the command with the user account that is going to initiate the test to verify it works.  Make a note of the installation path.  You need this information for the build script.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-SetuptheContinuousIntegrationJob\">\n        <h3 class=\"heading \"><span>Setup the Continuous Integration Job</span></h3>\n    <p>Finally, create a CI job that calls a script to run your test composition after it has been successfully built and installed to device.  The sample scripts below shows how to build the application, install it to an Android or iOS device, then call Appcelerator Test to execute the test composition.  The script creates an XML file with the results of the command.  This script assumes that the application is built and installed to the device on the same node.    </p>\n<ol class=\" \"><li class=\" \">    <p>From the Jenkins start page, click <strong class=\" \">New Job</strong>.    </p>\n</li><li class=\" \">    <p>Enter a name for your job in the <strong class=\" \">Job name</strong> textbox.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Build a free-style software project</strong><strong class=\" \"> </strong>from the list of job options.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK.</strong>    </p>\n</li><li class=\" \">    <p>Enter a description for your job and configure the <strong class=\" \">Source Code Management</strong> and <strong class=\" \">Build Trigger</strong> sections for your setup and tools.    </p>\n</li><li class=\" \">    <p>Under the <strong class=\" \">Build</strong> section, click the <strong class=\" \">Add build step</strong> drop-down and select <strong class=\" \">Execute shell</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Command</strong> textfield, copy and paste one of the example scripts below, then modify it for your setup.    </p>\n</li><li class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled \">    <p>Under <strong class=\" \">Post-build Actions</strong> section, click the <strong class=\" \">Add post-build action</strong> drop-down and select <strong class=\" \">Publish JUnit test result report</strong>.    </p>\n</li><li class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled \">    <p>In the <strong class=\" \">Test report XMLs</strong> textbox, enter the path to the result files.  For the example scripts, enter &quot;testresults/*.xml&quot;.    </p>\n</li><li class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled \">    <p>Enable <strong class=\" \">Include links to SOASTA CloudTest dashboards</strong>. The <strong class=\" \">CloudTest URL</strong> textbox appears below.    </p>\n</li><li class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled \">    <p>In the <strong class=\" \">CloudTest URL</strong> textbox, enter &quot;http://appctest-2.appcelerator.com/concerto/&quot;.    </p>\n</li><li class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled \">    <p>Click <strong class=\" \">Save</strong>.    </p>\n</li></ol>    <p class=\"yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled\">Manually start a build to test the CI job.  If the test passes, you have successfully integrated Appcelerator Test with Jenkins.  If not, review the console logs to troubleshoot the issue and run a build again.    </p>\n    <div class=\"section section-4 yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled\" id=\"src-43298703_IntegratingTestwithJenkins-ExampleiOSDeviceShellScript\">\n        <h4 class=\"heading yuimenuitem yui-button-selectedmenuitem yuimenuitem-disabled\"><span>Example iOS Device Shell Script</span></h4>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">## Clean the previous build</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium clean --project-dir $WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">## Build </code><code class=\"keyword\">for</code><code class=\"plain\"> an iOS device (mininum command-line options specified)</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium build --platform ios --target device --developer-name </code><code class=\"string\">&apos;Joe User (AAA00AA0AA)&apos;</code><code class=\"plain\"> --pp-uuid </code><code class=\"string\">&apos;&lt;UUID&gt;&apos;</code><code class=\"plain\"> --project-dir $WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">## Install to Device using the iOS App Installer</code></div>\n<div class=\"line\"><code class=\"plain\">## By </code><code class=\"keyword\">default</code><code class=\"plain\">, </code><code class=\"keyword\">this</code><code class=\"plain\"> command deploys to all connected devices</code></div>\n<div class=\"line\"><code class=\"plain\">## Specify --udid &lt;device_id&gt; or --device &lt;device_name&gt; to deploy to a specific device</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/iOSAppInstaller/bin/ios_app_installer --ipa $WORKSPACE/build/iphone/build/Debug-iphoneos/TestSoasta.ipa</code></div>\n<div class=\"line\"><code class=\"plain\">mkdir -p testresults</code></div>\n<div class=\"line\"><code class=\"plain\">## Run the Test Composition called /DataTest/TestiOSDevice</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/scommand/bin/scommand cmd=play url=http:</code><code class=\"comments\">//appctest-2.appcelerator.com/concerto username=juser@appcelerator.com password=&lt;password&gt; type=composition name=&apos;/DataTest/TestiOSDevice&apos; wait format=junitxml &gt; testresults/$BUILD_NUMBER.xml</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-ExampleiOSSimulatorShellScript\">\n        <h4 class=\"heading \"><span>Example iOS Simulator Shell Script</span></h4>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">## Clean the previous build</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium clean --project-dir $WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">## Build</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium build --platform ios --project-dir $WORKSPACE --build-only</code></div>\n<div class=\"line\"><code class=\"plain\">## Install to Simulator using the xcrun simctl part of Xcode command-line tools</code></div>\n<div class=\"line\"><code class=\"plain\">## Use the </code><code class=\"string\">&apos;xcrun simctrl list&apos;</code><code class=\"plain\"> command to get the simulator ID</code></div>\n<div class=\"line\"><code class=\"plain\">xcrun simctl boot &lt;SIMULATOR_ID&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">xcrun simctl install booted $WORKSPACE/build/iphone/build/Debug-iphonesimulator/TestSoasta.app</code></div>\n<div class=\"line\"><code class=\"plain\">xcrun simctl shutdown &lt;SIMULATOR_ID&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">## Launch the Simulator</code></div>\n<div class=\"line\"><code class=\"plain\">open -a </code><code class=\"string\">&quot;iOS Simulator&quot;</code><code class=\"plain\"> --args -CurrentDeviceUDID &lt;SIMULATOR_ID&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">mkdir -p testresults</code></div>\n<div class=\"line\"><code class=\"plain\">## Run the Test Composition called /DataTest/TestiOSEmulator</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/scommand/bin/scommand cmd=play url=http:</code><code class=\"comments\">//appctest-2.appcelerator.com/concerto username=juser@appcelerator.com password=&lt;password&gt; type=composition name=&apos;/DataTest/TestiOSEmulator&apos; wait format=junitxml &gt; testresults/$BUILD_NUMBER.xml</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-ExampleAndroidDeviceShellScript\">\n        <h4 class=\"heading \"><span>Example Android Device Shell Script</span></h4>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">## Clean the previous build </code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium clean --project-dir $WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">## Build </code><code class=\"keyword\">for</code><code class=\"plain\"> an Android device (mininum command-line options specified)</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium build --platform android --target device --project-dir $WORKSPACE --build-only</code></div>\n<div class=\"line\"><code class=\"plain\">## Install to Device using the Android Debug Bridge</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/android-sdk-macosx/platform-tools/adb -s &lt;device_serial_number&gt; install -r $WORKSPACE/build/android/bin/app.apk</code></div>\n<div class=\"line\"><code class=\"plain\">mkdir -p testresults</code></div>\n<div class=\"line\"><code class=\"plain\">## Run the Test Composition called /DataTest/TestAndroidDevice</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/scommand/bin/scommand cmd=play url=http:</code><code class=\"comments\">//appctest-2.appcelerator.com/concerto username=juser@appcelerator.com password=&lt;password&gt; type=composition name=&apos;/DataTest/TestAndroidDevice&apos; wait format=junitxml &gt; testresults/$BUILD_NUMBER.xml</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-43298703_IntegratingTestwithJenkins-ExampleAndroidEmulatorShellScript\">\n        <h4 class=\"heading \"><span>Example Android Emulator Shell Script</span></h4>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">## Launch the Android emulator</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/android-sdk-macosx/tools/emulator -avd &lt;emulator_name&gt; &amp;</code></div>\n<div class=\"line\"><code class=\"plain\">## Clean the previous build </code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium clean --project-dir $WORKSPACE</code></div>\n<div class=\"line\"><code class=\"plain\">## Build </code><code class=\"keyword\">for</code><code class=\"plain\"> Android emulator</code></div>\n<div class=\"line\"><code class=\"plain\">/usr/local/bin/titanium build --platform android --project-dir $WORKSPACE --build-only</code></div>\n<div class=\"line\"><code class=\"plain\">## Install to Emulator using the Android Debug Bridge</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/android-sdk-macosx/platform-tools/adb -s emulator-</code><code class=\"value\">5554</code><code class=\"plain\"> install -r build/android/bin/app.apk </code></div>\n<div class=\"line\"><code class=\"plain\">mkdir -p testresults</code></div>\n<div class=\"line\"><code class=\"plain\">## Run the Test Composition called /DataTest/TestAndroidEmulator</code></div>\n<div class=\"line\"><code class=\"plain\">/opt/share/scommand/bin/scommand cmd=play url=http:</code><code class=\"comments\">//appctest-2.appcelerator.com/concerto username=juser@appcelerator.com password=&lt;password&gt; type=composition name=&apos;/DataTest/TestAndroidEmulator&apos; wait format=junitxml &gt; testresults/$BUILD_NUMBER.xml</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298703_IntegratingTestwithJenkins-ViewTestResults\">\n        <h3 class=\"heading \"><span>View Test Results</span></h3>\n    <p>After a build, you can view the test results and report.    </p>\n<ol class=\" \"><li class=\" \">    <p>When viewing a specific Jenkins build, click <strong class=\" \">Test Result</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">All Test</strong> table, click on <strong class=\" \">(root)</strong> and drill down to the name of the test composition.  For example, if your test composition is called <strong class=\" \">/DataTest/TestAndroidDevice</strong>, you would need to click <strong class=\" \">(root)</strong>, then <strong class=\" \">DataTest</strong> and finally <strong class=\" \">TestAndroidDevice</strong> to get to the results page.    </p>\n</li><li class=\" \">    <p>The test results display a status title,such as &quot;Passed&quot;, &quot;Fixed, &quot;Regression&quot; or &quot;Failed&quot;.    </p>\n</li><li class=\" \">    <p>Below the status, click the <strong class=\" \">Click here to see the SOASTA CloudTest dashboard for this test</strong> link to show a frame that contains the report of the test.  You many be prompted to login before viewing the report.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298703_IntegratingTestwithJenkins-References\">\n        <h2 class=\"heading \"><span>References</span></h2>\n    <p><a class=\"external-link external-link\" href=\"http://cdn.soasta.com/productresource/download/SOASTA_TouchTest_Jenkins_Tutorial.pdf\" target=\"_blank\">SOASTA Appcelerator TouchTest Jenkins Tutorial</a>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298703\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Integrating Test with Jenkins"});