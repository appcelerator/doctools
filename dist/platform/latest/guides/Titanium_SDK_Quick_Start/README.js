Ext.data.JsonP['Titanium_SDK_Quick_Start']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium SDK Quick Start</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-37538717\" class=\"content\">\n                        <h1>Titanium SDK Quick Start</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Systemrequirements\">System requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-DownloadandinstallStudio\">Download and install Studio</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-FirstLaunch\">First Launch</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-InstallingtheplatformSDKs\">Installing the platform SDKs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-CheckingforStudioandSDKupdates\">Checking for Studio and SDK updates</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-HelloTitaniumapp\">Hello Titanium app</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Createaproject\">Create a project</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Runningtheapplication\">Running the application</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Troubleshooting\">Troubleshooting</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_SDK_Quick_Start-section-src-37538717_TitaniumSDKQuickStart-Nextsteps\">Next steps</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>This guide walks through the steps of installing and configuring Studio and third-party SDKs and tools required to develop native mobile applications with Studio. If you prefer to use your own editor or IDE, you can integrate the Titanium command-line tools into your environment (see <a class=\"document-link \" href=\"#!/guide/Setting_up_the_Titanium_CLI\">Setting up the Titanium CLI</a> for instructions).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-Systemrequirements\">\n        <h2 class=\"heading \"><span>System requirements</span></h2>\n    <p>Your system environment must meet the following requirements to run Studio:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Operating System:</strong> A recent version of Windows, OS X or Ubuntu    </p>\n</li><li class=\" \">    <p><strong class=\" \">Memory:</strong> 8 GB RAM minimum system memory (2 GB RAM available memory). 16 GB RAM recommended.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Java Runtime:</strong> Oracle JDK (no other brand of Java is suitable)    </p>\n</li><li class=\" \">    <p><strong class=\" \">Node.js:</strong> required for the Titanium command-line tools like the CLI, Alloy and API Runtime Services.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>For Windows, the 32-bit version of Java JDK is required regardless of whether Titanium is running on a 32-bit or 64-bit system.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-DownloadandinstallStudio\">\n        <h2 class=\"heading \"><span>Download and install Studio</span></h2>\n    <p>To download Studio you must have an AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services account. Visit our <a class=\"external-link external-link\" href=\"http://www.appcelerator.com/signup/\" target=\"_blank\">sign up</a> page to create an account.    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">https://platform.appcelerator.com/</a>.    </p>\n</li><li class=\" \">    <p>Expand the Appcelerator menu     <img src=\"images/download/thumbnails/37538717/image2016-5-27_10-15-36.png\" alt=\"images/download/thumbnails/37538717/image2016-5-27_10-15-36.png\" class=\"confluence-embedded-image confluence-thumbnail\" width=\"40\">\n and clicked on <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/#/product/studio\" target=\"_blank\">Studio</a>.    </img></p>\n</li><li class=\" \">    <p>Download the installer or ZIP file for your operating system.    </p>\n</li><li class=\" \">    <p>Launch the downloaded installer.    </p>\n</li><li class=\" \">    <p>Download the installation file for the version of your operating system.    </p>\n<ul class=\" \"><li class=\" \">    <p>For Mac OS X and Windows systems, run the installer program.    </p>\n</li></ul></li></ol>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            </div>\n        <p>For detailed install instructions, see <a class=\"document-link \" href=\"#!/guide/Axway_Appcelerator_Studio_Getting_Started\">Axway Appcelerator Studio Getting Started</a>.    </p>\n    <div class=\"section section-3 \" id=\"src-37538717_TitaniumSDKQuickStart-FirstLaunch\">\n        <h3 class=\"heading \"><span>First Launch</span></h3>\n    <p>The first time you launch Studio you need to select a workspace, or folder where Titanium stores your project files and IDE preferences.    </p>\n    <p>    <img src=\"images/download/attachments/37538717/image2013-11-26_13_34_46.png\" alt=\"images/download/attachments/37538717/image2013-11-26_13_34_46.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>By default, upon each launch, Studio asks you to select a workspace. To hide this dialog on subsequent launches, select the <strong class=\" \">Use this as the default and do not ask again </strong>option.    </p>\n    </div>\n        <p>On the Studio launch screen, enter your AMPLIFY Appcelerator Services account credentials and click <strong class=\" \">Login</strong>. Studio remembers your login credentials until you sign out of Studio.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>Studio requires an internet connection to authenticate the user to the Appcelerator cloud. If you are behind a proxy, click <strong class=\" \">Proxy Setup...</strong> to configure your proxy settings.    </p>\n    </div>\n        </div>\n    <div class=\"section section-3 \" id=\"src-37538717_TitaniumSDKQuickStart-InstallingtheplatformSDKs\">\n        <h3 class=\"heading \"><span>Installing the platform SDKs</span></h3>\n    <p>    <span style=\"color: #484848;\">\nTo develop native applications with Titanium you need the SDKs and tools for those native platforms installed on your system. For example, to develop Android applications you need the Android SDK and toolchain installed.    </span>\n    </p>\n    <p>The first time you launch Studio     <span style=\"color: #484848;\">\nthe <strong class=\" \">Platform Configuration</strong> dialog opens. This dialog indicates    </span>\n     <span style=\"color: #484848;\">\nwhich platform SDKs are installed and which are not, and lets you easily install individual SDKs. In the following screenshot, the system has none of the native SDKs installed.    </span>\n    </p>\n    <p><strong class=\" \">To install the platform SDKs</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the platforms you want to install.    </p>\n</li><li class=\" \">    <p>Optionally click <strong class=\" \">Settings</strong> next to each platform to customize the installation configuration.  For more details, see <a class=\"document-link \" href=\"#!/guide/Installing_Platform_SDKs\">Installing Platform SDKs</a>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Configure</strong> to start the installation process.    </p>\n</li></ol>    <p>Studio begins downloading and installing each SDK you selected, according to the settings you specified. In the case of iOS, Studio launches the App Store application installed on your Mac to the XCode download page.    </p>\n    <p>    <img src=\"images/download/attachments/37540095/PlatformConfigDialog.png\" alt=\"images/download/attachments/37540095/PlatformConfigDialog.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\" height=\"242\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-37538717_TitaniumSDKQuickStart-CheckingforStudioandSDKupdates\">\n        <h3 class=\"heading \"><span>Checking for Studio and SDK updates</span></h3>\n    <p>When Studio launches for the first time, it automatically downloads and installs the latest Titanium SDKs and additional command-line tools. Once complete, confirm that no further updates are pending and that Studio is at the latest version.    </p>\n    <p>From the menu bar, select <strong class=\" \">Help &gt; Check for Appcelerator Updates</strong>  to verify that all the official Titanium components are installed and repeat this step until there are no more updates available.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-HelloTitaniumapp\">\n        <h2 class=\"heading \"><span>Hello Titanium app</span></h2>\n    <p>Now that you&apos;ve installed Studio and at least one of the native platform SDKs, you&apos;re ready to create and run an application on a device or simulator.    </p>\n    <div class=\"section section-3 \" id=\"src-37538717_TitaniumSDKQuickStart-Createaproject\">\n        <h3 class=\"heading \"><span>Create a project</span></h3>\n    <p>The first step is to create a new Mobile App Project and select a starting template. The Titanium SDK supports two project types: Alloy and Classic. <a class=\"external-link external-link\" href=\"#!/guide/Alloy_Framework\">Alloy</a> is an MVC framework that lets you develop applications in less time and with less code than is possible in a Classic project. In general, it&apos;s recommended you use Alloy for your projects.    </p>\n    <p><strong class=\" \">To create a new project:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>In Studio, either:    </p>\n<ol class=\" \"><li class=\" \">    <p>Press <strong class=\" \">&#x2318;+N</strong> (Mac) or <strong class=\" \">Ctrl+N</strong> (Window) to open the project wizard dialog.    </p>\n</li><li class=\" \">    <p>or from the menu bar, select <strong class=\" \">File</strong> &gt; <strong class=\" \">New</strong> &gt; <strong class=\" \">Mobile App Project</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>Select <strong class=\" \">Mobile App Project</strong> as the wizard type and click <strong class=\" \">Next</strong>.    </p>\n    <img src=\"images/download/attachments/37538717/select-wizar.png\" alt=\"images/download/attachments/37538717/select-wizar.png\" class=\"confluence-embedded-image\" width=\"500\">\n    </img></li><li class=\" \">    <p>On the <strong class=\" \">Project Template</strong> page, select <strong class=\" \">Default Alloy Project</strong> as the template type. Click <strong class=\" \">Next</strong>.    </p>\n    <p>    <img src=\"images/db63569add31ad378c7a0aac84edf40bbf479fb1549144cd1750bcc8aca35963.png\" alt=\"images/db63569add31ad378c7a0aac84edf40bbf479fb1549144cd1750bcc8aca35963.png\" class=\"confluence-embedded-image\" width=\"500\">\n        </img></p>\n</li><li class=\" \">    <p>On the <strong class=\" \">Project Location</strong> page, enter the following information:    </p>\n<ul class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Project Name</strong> field, enter <strong class=\" \">Hello</strong>.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">App ID</strong> field, enter <strong class=\" \">com.example.hello</strong>. This format is called reverse domain notation. You must use your own domain before publishing your application to market, but for testing purposes a temporary domain is fine.    </p>\n</li><li class=\" \">    <p>Select one or more <strong class=\" \">Deployment Targets</strong>. By default, Studio selects all available targets platforms that you have installed.    </p>\n    <p>    <img src=\"images/download/attachments/37538717/new_project.png\" alt=\"images/download/attachments/37538717/new_project.png\" class=\"confluence-embedded-image\">\n        </img></p>\n</li></ul></li><li class=\" \">    <p>Click <strong class=\" \">Finish</strong> to create the project. By default, the application&apos;s configuration file called <tt class=\" \">tiapp.xml</tt> opens. You can close that file.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Project Explorer</strong> view, open <strong class=\" \">index.xml</strong> located in the <strong class=\" \">app/views</strong> folder.    </p>\n    <p>    <img src=\"images/download/attachments/37538717/project1.png\" alt=\"images/download/attachments/37538717/project1.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>When developing an app in Alloy, you create your UI declaratively using XML elements that, during compilations, are mapped to standard Titanium SDK objects. For instance, the default Alloy template includes a <tt class=\" \">&lt;Label&gt;</tt> element that corresponds to a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Label\">Label</a> object.    </p>\n</li><li class=\" \">    <p>In <tt class=\" \">index.xml</tt>, change the text inside the <tt class=\" \">&lt;Label&gt;</tt> element from <strong class=\" \">Hello, World</strong> to <strong class=\" \">Hello, Titanium</strong>.    </p>\n</li><li class=\" \">    <p>Save your changes. Now we&apos;re ready to run the application.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-37538717_TitaniumSDKQuickStart-Runningtheapplication\">\n        <h3 class=\"heading \"><span>Running the application</span></h3>\n    <p>To run the application you select a target simulator, emulator, or device, and click <strong class=\" \">Run</strong>. The targets available for you to test with depends on which native SDKs you previously installed. For this example, it&apos;s assumed you&apos;ve installed XCode and are targeting an iOS simulator. If you are targeting Android, select an appropriate simulator, emulator or device from the <strong class=\" \">Target</strong> menu.    </p>\n<ol class=\" \"><li class=\" \">    <p>Select the project in Project Explorer.    </p>\n</li><li class=\" \">    <p>Make sure <strong class=\" \">Run </strong>is selected in the <strong class=\" \">Launch Mode</strong> drop-down.    </p>\n</li><li class=\" \">    <p>From the <strong class=\" \">Target </strong>drop-down, select an iOS simulator.    </p>\n    <p>    <img src=\"images/download/attachments/37538717/select-simulator.png\" alt=\"images/download/attachments/37538717/select-simulator.png\" class=\"confluence-embedded-image\">\n        </img></p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Run</strong>. Your application is compiled and launched in the iOS Simulator. Click the <strong class=\" \">Hello, Titanium </strong>label text. An alert dialog appears.    </p>\n    <p>    <img src=\"images/download/attachments/37538717/ios-simulator.png\" alt=\"images/download/attachments/37538717/ios-simulator.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"300\" height=\"553\">\n     <img src=\"images/download/attachments/37538717/image2013-11-18_17_34_30.png\" alt=\"images/download/attachments/37538717/image2013-11-18_17_34_30.png\" class=\"confluence-embedded-image\" width=\"300\">\n<br>If you run into problems running your application, see <a class=\"document-link \" href=\"#!/guide/Studio_Troubleshooting\">Studio Troubleshooting</a>.    </br></img></img></p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-Troubleshooting\">\n        <h2 class=\"heading \"><span>Troubleshooting</span></h2>\n    <p>If you are experiencing problems after following these setup instructions, please follow the more detailed <a class=\"document-link \" href=\"#!/guide/Setting_up_Studio\">Setting up Studio</a> guide.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37538717_TitaniumSDKQuickStart-Nextsteps\">\n        <h2 class=\"heading \"><span>Next steps</span></h2>\n    <p>You can learn more about Titanium by opening the Studio Dashboard, then    </p>\n<ul class=\" \"><li class=\" \">    <p>Watching the Appcelerator University videos    </p>\n</li><li class=\" \">    <p>Importing one of the other sample projects as explained in <a class=\"document-link \" href=\"#!/guide/Titanium_Samples\">Titanium Samples</a>    </p>\n</li><li class=\" \">    <p>Follow <a class=\"document-link \" href=\"#!/guide/Creating_Your_First_Titanium_App\">Creating Your First Titanium App</a> to build your first Alloy application    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37538717\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Titanium SDK Quick Start"});