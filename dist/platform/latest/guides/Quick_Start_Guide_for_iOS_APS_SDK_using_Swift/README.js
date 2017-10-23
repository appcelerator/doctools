Ext.data.JsonP['Quick_Start_Guide_for_iOS_APS_SDK_using_Swift']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Quick Start Guide for iOS APS SDK using Swift</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-43298728\" class=\"content\">\n                        <h1>Quick Start Guide for iOS APS SDK using Swift</h1>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Pro or Enterprise Subscription Required</div>\n            <p>This AMPLIFY(<sup class=\" \">TM</sup>) Appcelerator Services feature requires a Pro or Enterprise Subscription.    </p>\n    </div>\n        <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Setup\">Setup</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-QuickTutorial\">Quick Tutorial</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-ModifytheApplication\">Modify the Application</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-SendanAnalyticsFeatureEvent\">Send an Analytics Feature Event</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-QueryCloudUsers\">Query Cloud Users</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-LogintoaCloudAccount\">Login to a Cloud Account</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-SetaUsernameforCrashLogs\">Set a Username for Crash Logs</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-TestingtheTutorialSample\">Testing the Tutorial Sample</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK_using_Swift-section-src-43298728_safe-id-UXVpY2tTdGFydEd1aWRlZm9yaU9TQVBTU0RLdXNpbmdTd2lmdC1OZXh0U3RlcHNmb3JBcHBjZWxlcmF0b3JBbmFseXRpY3MsQ2xvdWRhbmRQZXJmb3JtYW5jZQ\">Next Steps for Appcelerator Analytics, Cloud and Performance</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>This guide walks through the setup of the AMPLIFY Appcelerator Services for iOS applications.  The AMPLIFY Appcelerator Services SDK gives you access to the Appcelerator Analytics, Cloud and Performance services.  Note that the Appcelerator Test service does not currently work with Swift projects.    </p>\n    <div class=\"confbox panel panel\">\n            <div class=\"title\">Not developing a native iOS application with Swift?</div>\n        <p>See the following topics to use the AMPLIFY Appcelerator Services on other platforms:    </p>\n    <p>    <img src=\"images/download/attachments/43298732/android_icon.png\" alt=\"images/download/attachments/43298732/android_icon.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>For native Android applications built with Java, see <a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_Android_APS_SDK\">Quick Start Guide for Android APS SDK</a>.    </p>\n    <p>    <img src=\"images/download/attachments/43298720/ios_icon.png\" alt=\"images/download/attachments/43298720/ios_icon.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>For native iOS applications built with Objective-C, see <a class=\"document-link \" href=\"#!/guide/Quick_Start_Guide_for_iOS_APS_SDK\">Quick Start Guide for iOS APS SDK</a>.    </p>\n    <p>    <img src=\"images/download/attachments/43298732/titanium_icon.png\" alt=\"images/download/attachments/43298732/titanium_icon.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>For Titanium Applications, see <a class=\"document-link \" href=\"#!/guide/Quick_Start\">Quick Start</a>.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>You should be familiar with developing native iOS applications using Xcode and Swift.  The SDKs supports the following base SDK and target iOS versions:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Maximum SDK version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Minimum SDK version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Maximum target iOS version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Minimum target iOS version    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>9.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>8.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>9.0.x    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>7.1.x    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-Setup\">\n        <h2 class=\"heading \"><span>Setup</span></h2>\n    <p>Before you can use Appcelerator Services in your application you need to:    </p>\n<ul class=\" \"><li class=\" \">    <p>Create an application in Dashboard    </p>\n</li><li class=\" \">    <p>Download the SDK    </p>\n</li><li class=\" \">    <p>Get the APS application key    </p>\n</li></ul>    <p><strong class=\" \">To register an Android Java, or iOS Objective-C or Swift application in Dashboard:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\" \">    <p>Click the Add menu (<strong class=\" \">+</strong>) and select <strong class=\" \">Register App for Services</strong> to open the <strong class=\" \">Register App for Services</strong> form.    </p>\n    <img src=\"images/download/attachments/43298776/RegisterAppForService.png\" alt=\"images/download/attachments/43298776/RegisterAppForService.png\" class=\"confluence-embedded-image\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>In the Register App for Services form, enter an application <strong class=\" \">Name</strong>, and select a <strong class=\" \">Platform</strong> and <strong class=\" \">Category</strong>. Optionally, you can provide a custom icon to display in Dashboard for your application, and a description. To add application team members from the organization, click the add (+) button in the Members form at right.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">OK.</strong>    </p>\n</li></ol>    <p>Dashboard displays the <strong class=\" \">Platform Services</strong> tab for your application. In the tab, you can download the APS SDK, and get code snippets to copy and paste into your application.    </p>\n    <p>For more information, refer to <a class=\"document-link \" href=\"#!/guide/Managing_Non-Titanium_Client_Applications_in_Dashboard\">Managing Non-Titanium Client Applications in Dashboard</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-QuickTutorial\">\n        <h2 class=\"heading \"><span>Quick Tutorial</span></h2>\n    <p>The following tutorial demonstrates basic setup and usage of Analytics, Cloud, and Performance libraries in a Swift Xcode project. To complete the tutorial you will need your APS application key for the Cloud, Analytics, and Performance services.  <a class=\"external-link external-link\" href=\"https://github.com/appcelerator-developer-relations/APSiOSSwift\" target=\"_blank\">Download</a> a complete version of the project.    </p>\n    <p><strong class=\" \">To create a basic application using APS</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>In Xcode, create a new iOS Project (Single View Application). When prompted for options, select <strong class=\" \">Swift</strong> in the <strong class=\" \">Language</strong> drop-down.    </p>\n</li><li class=\" \">    <p>Create a Header File and name it <tt class=\" \">&lt;PROJECT_NAME&gt;-Bridging-Header.h</tt>.  Make sure the main project&apos;s application target folder is selected, then from the menu, select <strong class=\" \">File</strong> &gt; <strong class=\" \">New</strong> &gt; <strong class=\" \">File...</strong> or drag a <strong class=\" \">Header File</strong> from the <strong class=\" \">File Template</strong> library to the application target folder.  The application target folder is a folder under the root project folder and will be named the same as the project if the name has not been changed.<br>    <img src=\"images/download/attachments/43298728/BridgeHeadingFile.png\" alt=\"images/download/attachments/43298728/BridgeHeadingFile.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></br></p>\n</li><li class=\" \">    <p>Unzip <tt class=\" \">appcelerator-sdk-ios-&lt;VERSION&gt;.zip</tt> file and drag the <tt class=\" \">Appcelerator.framework</tt> folder into the root project folder.    </p>\n</li><li class=\" \">    <p>Select <strong class=\" \">Copy items into destination&#x2026;</strong> and click <strong class=\" \">Finish</strong>.    </p>\n</li><li class=\" \">    <p>Select your project in the Project navigator and click the <strong class=\" \">Build Phases</strong> tab.    </p>\n</li><li class=\" \">    <p>Expand the <strong class=\" \">Link Binary With Libraries</strong> section and add the <tt class=\" \">libsqlite3.tbd</tt> and <tt class=\" \">libz.tbd</tt> frameworks. Prior to Xcode 7, the framework extension is <tt class=\" \">dylib</tt> rather than <tt class=\" \">tbd</tt>.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">Build Settings</strong> tab, then click the <strong class=\" \">All</strong> button in the top-left corner of the tab.    </p>\n</li><li class=\" \">    <p>If you are using Xcode 7, you will need to disable bitcode since some third-party libraries do not have bitcode enabled. Expand the <strong class=\" \">Build Options</strong> section and set <strong class=\" \">Enable Bitcode</strong> to <strong class=\" \">No</strong>.    </p>\n</li><li class=\" \">    <p>Expand the <strong class=\" \">Linking</strong> section and add <tt class=\" \">-ObjC</tt>  to <strong class=\" \">Other Linker Flags</strong>  .    </p>\n</li><li class=\" \">    <p>Expand the <strong class=\" \">Swift Compiler - Code Generation</strong> section (near the bottom) and add the bridging header file (with the relative path from the root folder) to <strong class=\" \">Objective-C Bridging Header</strong>, for example, &lt;<tt class=\" \">PROJECT_NAME</tt>&gt;/<tt class=\" \">&lt;PROJECT_NAME&gt;-Bridging-Header.h</tt>.<br>    <img src=\"images/download/attachments/43298728/SwiftCompiler.png\" alt=\"images/download/attachments/43298728/SwiftCompiler.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        </img></br></p>\n</li><li class=\" \">    <p>Open the bridging header file and add the following import statement:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">#</code><code class=\"keyword\">import</code><code class=\"plain\"> &lt;Appcelerator/Appcelerator.h&gt;</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Open the application delegate file (<tt class=\" \">AppDelegate.swift</tt>) and add the following initialization code to the <tt class=\" \">application()</tt> method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">APSServiceManager.sharedInstance().enableWithAppKey(</code><code class=\"string\">&quot;APS_APP_KEY&quot;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>The iOS application is now ready to make method calls using the APS SDK APIs.    </p>\n</li></ol>    <p>    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <p>If the application attempts to make APS SDK API calls without first setting the application key, the application will raise an exception and crash.    </p>\n    </div>\n        <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">Bridging Header File</div>\n            <p>Alternatively, to have Xcode automatically create a bridging header file and add the build flag:    </p>\n<ol class=\" \"><li class=\" \">    <p>Skip steps 2 and 9 in the previous directions.    </p>\n</li><li class=\" \">    <p>After step 8, create an Objective-C file. (From the menu, select <strong class=\" \">File</strong> &gt; <strong class=\" \">New</strong> &gt; <strong class=\" \">File...</strong> or drag an Objective-C file from the <strong class=\" \">File Template</strong> library to the application target folder.)    </p>\n</li><li class=\" \">    <p>After creating the file, a dialog appears with the message &quot;Would you like to configure an Objective-C bridging header?&quot; Click <strong class=\" \">Yes</strong>.    </p>\n</li><li class=\" \">    <p>Xcode creates the header file and adds it to the build flag. Delete the Objective-C file you just created.    </p>\n</li><li class=\" \">    <p>Follow steps 10 and 11.    </p>\n</li></ol>    </div>\n        <p>    </p>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-ModifytheApplication\">\n        <h3 class=\"heading \"><span>Modify the Application</span></h3>\n    <p>Customize the application&apos;s UI to display a picker, text field and button, and add some logic to respond to user interaction.  The picker will display a list of available user accounts.  The user can enter their password in the text field, then click the button to log in.    </p>\n<ol class=\" \"><li class=\" \">    <p>Open your project&apos;s <tt class=\" \">Main.storyboard</tt> file.    </p>\n</li><li class=\" \">    <p>Drag a Picker View, Text Field and Button from the Object library to the view.    </p>\n</li><li class=\" \">    <p>Open the <strong class=\" \">Assistant Editor</strong>. (From the menu, select <strong class=\" \">View</strong> &gt; <strong class=\" \">Assistant Editor </strong>&gt; <strong class=\" \">Show Assistant Editor</strong> or click the <strong class=\" \">Assistant Editor</strong> button in the top-right corner.)    </p>\n</li><li class=\" \">    <p>In the right pane, display the <tt class=\" \">ViewController.swift</tt> file.    </p>\n</li><li class=\" \">    <p>Control-drag the Picker View to the <strong class=\" \">View Controller</strong> icon at the top of the view.  Select <strong class=\" \">dataSource</strong>.  Repeat for the <strong class=\" \">delegate</strong> option.    </p>\n    <img src=\"images/download/attachments/43298728/ViewController.png\" alt=\"images/download/attachments/43298728/ViewController.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>Drag the Picker View to the header file to create an IBOutlet.  Name the outlet <tt class=\" \">picker</tt> and click <strong class=\" \">Connect</strong>.  Repeat the same procedure for the Text Field and name it <tt class=\" \">textField</tt>.    </p>\n    <img src=\"images/download/attachments/43298728/OutletCollection.png\" alt=\"images/download/attachments/43298728/OutletCollection.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>In the <tt class=\" \">ViewController.swift</tt> file:    </p>\n<ol class=\" \"><li class=\" \">    <p>Declare the View Controller to implement the <tt class=\" \">UIPickerViewDelegate</tt>, <tt class=\" \">UIPickerViewDataSource</tt>, and <tt class=\" \">UITextFieldDelegate</tt> protocols.    </p>\n</li><li class=\" \">    <p>Add a Dictionary array called <tt class=\" \">usernames</tt> to keep track of the Picker View&apos;s data source and a String variable called <tt class=\" \">username</tt> to reference the current selection.    </p>\n</li><li class=\" \">    <p>Create an IBAction callback for the button named <tt class=\" \">doClick</tt>.  In the following sections, you will add code to this handler that calls Cloud, Analytics and Performance services.    </p>\n</li><li class=\" \">    <p>Implement the methods of <tt class=\" \">UIPickerViewDelegate</tt>, <tt class=\" \">UIPickerViewDataSource</tt> and<tt class=\" \"> UITextFieldDelegate</tt> protocols.  Add the following code to the file:    </p>\n</li></ol>    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ViewController.swift</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ViewController.swift\">\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> UIKit</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"keyword\">class</code><code class=\"plain\"> ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource, UITextFieldDelegate {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"color1\">@IBOutlet</code><code class=\"plain\"> weak var textField: UITextField!</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"color1\">@IBOutlet</code><code class=\"plain\"> weak var picker: UIPickerView!</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Add these variables</code></div>\n<div class=\"line\"><code class=\"plain\">    var username: String = </code><code class=\"string\">&quot;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    var usernames: [Dictionary&lt;String,AnyObject&gt;] = []</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    override func viewDidLoad() {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">super</code><code class=\"plain\">.viewDidLoad()</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Add these statements to dismiss the keyboard</code></div>\n<div class=\"line\"><code class=\"plain\">        self.textField.delegate = self</code></div>\n<div class=\"line\"><code class=\"plain\">        self.textField.resignFirstResponder()</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    override func didReceiveMemoryWarning() {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">super</code><code class=\"plain\">.didReceiveMemoryWarning()</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Add these methods</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"color1\">@IBAction</code><code class=\"plain\"> func onClick(sender: UIButton) {</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// MARK: Picker DataSource/Delegate</code></div>\n<div class=\"line\"><code class=\"plain\">    func numberOfComponentsInPickerView(pickerView: UIPickerView) -&gt; Int {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"value\">1</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    func pickerView(pickerView: UIPickerView, numberOfRowsInComponent component: Int) -&gt; Int {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> self.usernames.count</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">   </code></div>\n<div class=\"line\"><code class=\"plain\">    func pickerView(pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -&gt; String! {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> self.usernames[row][</code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">] as String</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">   </code></div>\n<div class=\"line\"><code class=\"plain\">    func pickerView(pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {</code></div>\n<div class=\"line\"><code class=\"plain\">        self.username = self.usernames[row][</code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">] as String</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// MARK: TextField Delegate</code></div>\n<div class=\"line\"><code class=\"plain\">    func textFieldShouldBeginEditing(textField: UITextField) -&gt; Bool {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    func textFieldShouldReturn(textField: UITextField) -&gt; Bool {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Control-drag the Button to the <tt class=\" \">onClick()</tt> method to create an action connection.    </p>\n    <img src=\"images/download/attachments/43298728/ConnectAction.png\" alt=\"images/download/attachments/43298728/ConnectAction.png\" class=\"confluence-embedded-image confluence-content-image-border\">\n    </img></li></ol>    </div>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-SendanAnalyticsFeatureEvent\">\n        <h3 class=\"heading \"><span>Send an Analytics Feature Event</span></h3>\n    <p>The Analytics library automatically captures and sends application life-cycle events to the backend Analytics service. You can also send custom analytics events, as shown in this example. There are two types of custom events: feature events and navigation events.    </p>\n    <p>In the  <tt class=\" \">doClick</tt> method, add a  <tt class=\" \">APSAnalytics.sharedInstance().sendAppFeatureEvent()</tt> method call to send a feature event with the string &quot;sample.feature.login&quot;. The optional <tt class=\" \">payload</tt> parameter is set to <tt class=\" \">nil</tt> for this example, but it lets you send additional data along with the event.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ViewController.swift</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ViewController.swift\">\n<div class=\"line\"><code class=\"plain\">APSAnalytics.sharedInstance().sendAppFeatureEvent(</code><code class=\"string\">&quot;sample.feature.login&quot;</code><code class=\"plain\">, payload: nil)</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-QueryCloudUsers\">\n        <h3 class=\"heading \"><span>Query Cloud Users</span></h3>\n    <p>To use the APS Cloud component, most of the methods require a user to be logged in.  This sample uses the Picker View to select a Cloud user account.  To populate the Picker View values, the application needs to retrieve a list of users. Call the <tt class=\" \">APSUsers.query()</tt> method to retrieve a list of user accounts from inside the <tt class=\" \">viewDidLoad()</tt> method.    </p>\n    <p>Every APS Cloud method includes a <tt class=\" \">withBlock</tt> parameter that specifies the callback to handle the server response. The callback is passed an <tt class=\" \">APSResponse</tt> object that contains response metadata (such as success or failure) and the response payload.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ViewController.swift</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ViewController.swift\">\n<div class=\"line\"><code class=\"plain\">APSUsers.query(nil, {(e: APSResponse!) -&gt; Void in</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        self.usernames = e.valueForKey(</code><code class=\"string\">&quot;response&quot;</code><code class=\"plain\">)?.valueForKey(</code><code class=\"string\">&quot;users&quot;</code><code class=\"plain\">) as [Dictionary&lt;String,AnyObject&gt;]</code></div>\n<div class=\"line\"><code class=\"plain\">        self.picker.reloadAllComponents()</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        var alert: UIAlertView = UIAlertView(title: </code><code class=\"string\">&quot;Error&quot;</code><code class=\"plain\">, message: </code><code class=\"string\">&quot;Unable to retrieve user accounts!&quot;</code><code class=\"plain\">, delegate: nil, cancelButtonTitle: </code><code class=\"string\">&quot;OK&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        alert.show()</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">})</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-LogintoaCloudAccount\">\n        <h3 class=\"heading \"><span>Login to a Cloud Account</span></h3>\n    <p>To login to a Cloud account, you need the username and password.  Since the application was modified to get all available user accounts and populate the Picker View, the application needs to get the current value of the picker and the text entered in the Text Field.  These values are passed to the <tt class=\" \">APSUsers.login()</tt> method.  Modify the <tt class=\" \">doClick</tt> method to login to a Cloud user account.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ViewController.swift</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ViewController.swift\">\n<div class=\"line\"><code class=\"color1\">@IBAction</code><code class=\"plain\"> func onClick(sender: UIButton) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Send analytics feature event</code></div>\n<div class=\"line\"><code class=\"plain\">    APSAnalytics.sharedInstance().sendAppFeatureEvent(</code><code class=\"string\">&quot;sample.feature.login&quot;</code><code class=\"plain\">, payload: nil)</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Login to a Cloud account</code></div>\n<div class=\"line\"><code class=\"plain\">    var params = [</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;login&quot;</code><code class=\"plain\"> : self.username,</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">&quot;password&quot;</code><code class=\"plain\"> : self.textField.text</code></div>\n<div class=\"line\"><code class=\"plain\">    ]</code></div>\n<div class=\"line\"><code class=\"plain\">    APSUsers.login(params, { (e: APSResponse!) -&gt; Void in</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">            NSLog(</code><code class=\"string\">&quot;Successfully logged in as %@&quot;</code><code class=\"plain\">, self.username)</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            NSLog(</code><code class=\"string\">&quot;ERROR: Failed to log in!&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    })</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-SetaUsernameforCrashLogs\">\n        <h3 class=\"heading \"><span>Set a Username for Crash Logs</span></h3>\n    <p>To help differentiate crash logs, use the u<tt class=\" \">sername</tt> property.  When the application successfully logs in to the Cloud user account, the application sets the u<tt class=\" \">sername</tt> property.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">ViewController.swift</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"ViewController.swift\">\n<div class=\"line\"><code class=\"color1\">@IBAction</code><code class=\"plain\"> func onClick(sender: UIButton) {</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">    APSUsers.login(params, { (e: APSResponse!) -&gt; Void in</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">            NSLog(</code><code class=\"string\">&quot;Successfully logged in as %@&quot;</code><code class=\"plain\">, self.username)</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"comments\">// Add this Performance call</code></div>\n<div class=\"line\"><code class=\"plain\">            APSPerformance.sharedInstance().username = self.username</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">            NSLog(</code><code class=\"string\">&quot;ERROR: Failed to log in!&quot;</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    })</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298728_QuickStartGuideforiOSAPSSDKusingSwift-TestingtheTutorialSample\">\n        <h3 class=\"heading \"><span>Testing the Tutorial Sample</span></h3>\n    <p>Before testing the sample, you need to create user accounts for the application to query.  To create Cloud user accounts:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\" \">    <p>In Dashboard, select your application from the <strong class=\" \">APIs</strong> menu in the upper-left corner.    </p>\n</li><li class=\" \">    <p>In the left navigation bar, click <strong class=\" \">Manage</strong> <strong class=\" \">Data</strong>.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Users</strong>, then the <strong class=\" \">Create User</strong> button.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Username</strong> field enter the user&apos;s username.    </p>\n</li><li class=\" \">    <p>In the <strong class=\" \">Password</strong> field enter the new user&apos;s password (four-character minimum).    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Save Changes</strong>.    </p>\n</li></ol>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>To create a Cloud user account, you only need a username or e-mail address, and a password.    </p>\n    <p>For more information about managing Cloud user accounts, see <a class=\"document-link \" href=\"#!/guide/Managing_Organizations\">Managing Organizations</a>.    </p>\n    </div>\n        <p>After you have created a few Cloud user accounts, build the sample and launch it on either a device or emulator.    </p>\n    <p>Once the application launches:    </p>\n<ol class=\" \"><li class=\" \">    <p>Click on the Picker.  You should see a list of all the Cloud user accounts you added.    </p>\n</li><li class=\" \">    <p>Select a user account from the Picker and enter that user&apos;s password.  Click the Button.  In the log output, you should see an info log that login command was successful or not.    </p>\n</li><li class=\" \">    <p>Go back to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\" \">    <p>In Dashboard, select your application from the <strong class=\" \">Apps</strong> menu in the upper-left corner.    </p>\n</li><li class=\" \">    <p>In the left navbar, select <strong class=\" \">Analytics</strong>.    </p>\n</li><li class=\" \">    <p>In the Real Time view, you should see at least one active session.    </p>\n</li><li class=\" \">    <p>In the left navbar, click <strong class=\" \">Events</strong>.  You should see the &quot;sample.feature.login&quot; feature event.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298728_safe-id-UXVpY2tTdGFydEd1aWRlZm9yaU9TQVBTU0RLdXNpbmdTd2lmdC1OZXh0U3RlcHNmb3JBcHBjZWxlcmF0b3JBbmFseXRpY3MsQ2xvdWRhbmRQZXJmb3JtYW5jZQ\">\n        <h2 class=\"heading \"><span>Next Steps for Appcelerator Analytics, Cloud and Performance</span></h2>\n    <p>This tutorial only covers a small portion of what the Analytics, Cloud and Performance services can provide.  For more in-depth information about these features, see the following topics. Note that these guides were written for Objective-C projects.  You will need to adapt the API calls for Swift.    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/APS_Analytics_for_iOS\">APS Analytics for iOS</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/guide/ios\">APS Cloud for iOS</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/APS_Performance_for_iOS\">APS Performance for iOS</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298728\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Quick Start Guide for iOS APS SDK using Swift"});