Ext.data.JsonP['Android_Intents']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Android Intents</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43287298\" class=\"content\">\n                        <h1>Android Intents</h1>\n    <p>    <span style=\"color: #2b4771;\">\n    </span>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-IntentTypes\">Intent Types</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-CreateanIntent\">Create an Intent</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-CreateanExplicitIntent\">Create an Explicit Intent</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-AddExtraData\">Add Extra Data</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-AddaCategory\">Add a Category</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-StartanActivitywithanIntent\">Start an Activity with an Intent</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-ForceanIntentChooser\">Force an Intent Chooser</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-Example\">Example</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-CompleteCode\">Complete Code</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Android_Intents-section-src-43287298_AndroidIntents-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>In Android, applications and application components cannot directly communicate with each other.  In order to communicate with another application, create an intent and start a new activity with the intent.  An <i class=\" \">intent</i> is a message sent to the Android OS.  Android directs the message to an application or application component based on the intent&apos;s settings.    </p>\n    <p>Intents can be used to start an activity, start a service or start a broadcast.  This document discusses how to use an intent to start an activity.    </p>\n<ul class=\" \"><li class=\" \">    <p>To use an intent to start a service, see <a class=\"document-link \" href=\"#!/guide/Android_Services\">Android Services</a>.    </p>\n</li><li class=\" \">    <p>To use an intent to start a broadcast or to create a broadcast receiver, see <a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers\">Android Broadcast Intents and Receivers</a>.    </p>\n</li><li class=\" \">    <p>To receive intents from other applications, see <a class=\"document-link \" href=\"#!/guide/Android_Intent_Filters\">Android Intent Filters</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-IntentTypes\">\n        <h2 class=\"heading \"><span>Intent Types</span></h2>\n    <p>There are two kinds of intents:    </p>\n<ul class=\" \"><li class=\" \">    <p><i class=\" \">Explicit intents</i> specify the application to start.  When creating the intent, specify the application&apos;s package name and class when creating the intent.  Explicit intents are normally used to start components within your own application.    </p>\n</li><li class=\" \">    <p><i class=\" \">Implicit intents</i> do <strong class=\" \">NOT</strong> specify the application to start.  Instead, they declare a general action.  The user can decide which application to start if multiple applications can handle the action or a default application has not been selected by the user.  For example, if a user opens their browser and highlights some text, the user can share that text with other Android apps, such as an e-mail application, SMS application or a social networking application.    </p>\n</li></ul>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The user highlights the text and<br>clicks the <strong class=\" \">Share</strong> button.    </br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The <strong class=\" \">Share</strong> dialog appears and<br>the user can select the application<br>to send the text to, such as...    </br></br></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>...an e-mail application,    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>...an SMS application    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>...or a social networking<br>application like Google+.    </br></p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/HighlightText.png\" alt=\"images/download/attachments/43287298/HighlightText.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/ShareDialog.png\" alt=\"images/download/attachments/43287298/ShareDialog.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/EmailClient.png\" alt=\"images/download/attachments/43287298/EmailClient.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/SmsClient.png\" alt=\"images/download/attachments/43287298/SmsClient.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/GooglePlusShare.png\" alt=\"images/download/attachments/43287298/GooglePlusShare.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <p>    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-CreateanIntent\">\n        <h2 class=\"heading \"><span>Create an Intent</span></h2>\n    <p>To create an intent, use the <tt class=\" \">Titanium.Android.createIntent()</tt> method to create an Intent object.  Pass the method a dictionary with the following properties:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">action</tt>: Action to associate with the intent.  Specify one of the <tt class=\" \">Titanium.Android.ACTION_*</tt> constants.  The most commonly used actions are:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">Titanium.Android.ACTION_SEND</tt>: Send data to an application.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.ACTION_VIEW</tt>: View data in an application.    </p>\n</li></ul></li><li class=\" \">    <p><tt class=\" \">flags</tt>: Optional flags to set to modify the behavior of the intent.  Bitwise-OR the <tt class=\" \">Titanium.Android.FLAG_*</tt> constants with the <tt class=\" \">Intent</tt> object&apos;s <tt class=\" \">flag</tt> property rather than specifying them during creation.    </p>\n</li><li class=\" \">    <p><tt class=\" \">data</tt>: Optional data URI to pass to an application&apos;s activity.    </p>\n</li><li class=\" \">    <p><tt class=\" \">type</tt>: Optional MIME type for the intent.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>For the action, you can also define your own custom action name. Use a reverse domain scheme to name the action to avoid potential conflicts, for example, <tt class=\" \">com.appcelerator.action.LINT</tt>. Custom actions are only useful to communicate between your applications and application activities using intents.    </p>\n    </div>\n        <p>The following example creates an intent to view the data URI:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_VIEW,</code></div>\n<div class=\"line\"><code class=\"plain\">    data: </code><code class=\"string\">&apos;http://maps.google.com/maps?q=loc:37.3906238,-122.0499305,19&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43287298_AndroidIntents-CreateanExplicitIntent\">\n        <h3 class=\"heading \"><span>Create an Explicit Intent</span></h3>\n    <p>To create an explicit intent, in addition to the previously mentioned intent properties, you need to also set the <tt class=\" \">packageName</tt> and <tt class=\" \">className</tt> properties, or the <tt class=\" \">url</tt> property, but not both.    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">className</tt>:  Name of the class.  For the main activity of a Titanium project, this is the name of the activity prefixed with project&apos;s application ID (or <tt class=\" \">packageName</tt>).  The name of the main activity is the name of the application/project with only the first letter capitalized and <tt class=\" \">Activity</tt> appended to the end of it.  For example, if the name of the project is <tt class=\" \">MyApp</tt> and the application ID is <tt class=\" \">com.appcelerator.testapp</tt>, the class name will be <tt class=\" \">com.appcelerator.testapp.MyappActivity</tt>.  You can also find the name of the main activity in the <tt class=\" \">build/android/AndroidManifest.xml</tt> file after you build your application.    </p>\n</li><li class=\" \">    <p><tt class=\" \">packageName</tt>: Package name of the application.  For Titanium project&apos;s, this is the project&apos;s application ID located in the <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p><tt class=\" \">url</tt>: URL of the JavaScript activity file to launch.    </p>\n</li></ul>    <p>The following example creates an intent to launch the main activity of the MyApp application:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_MAIN,</code></div>\n<div class=\"line\"><code class=\"plain\">    className: </code><code class=\"string\">&apos;com.appcelerator.testapp.MyappActivity&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    packageName: </code><code class=\"string\">&apos;com.appcelerator.testapp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Tells the OS to reset the activity if needed or launch the application if it has not already been launched</code></div>\n<div class=\"line\"><code class=\"plain\">intent.flags |= Ti.Android.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED | Ti.Android.FLAG_ACTIVITY_SINGLE_TOP;</code></div>\n</div>\n    </div>\n    <p>If the application uses a JavaScript activity, add the activity to the <tt class=\" \">tiapp.xml</tt> file in order to define the activity as part of the application.  Create an <tt class=\" \">&lt;activities&gt;</tt> element as a child of the <tt class=\" \">&lt;android&gt;</tt> element, then create an <tt class=\" \">&lt;activity&gt;</tt> element, as a child of the <tt class=\" \">&lt;activities&gt;</tt> element, and assign the <tt class=\" \">url</tt> attribute to the URL of the JavaScript file to define it as an Android activity.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">tiapp.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"tiapp.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">ti</code><code class=\"plain\">:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;</code><code class=\"keyword\">android</code><code class=\"plain\"> </code><code class=\"color1\">xmlns:android</code><code class=\"plain\">=</code><code class=\"string\">&quot;http://schemas.android.com/apk/res/android&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">activities</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;</code><code class=\"keyword\">activity</code><code class=\"plain\"> </code><code class=\"color1\">url</code><code class=\"plain\">=</code><code class=\"string\">&quot;activity.js&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/</code><code class=\"keyword\">activities</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/</code><code class=\"keyword\">android</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">ti</code><code class=\"plain\">:app&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43287298_AndroidIntents-AddExtraData\">\n        <h3 class=\"heading \"><span>Add Extra Data</span></h3>\n    <p>To send extra data with the intent, which can be used by the activity, use the Intent&apos;s <tt class=\" \">putExtra()</tt> method.  Pass the method the name of the data as the first parameter and the data to add as the second parameter.  The application can also specify one of the <tt class=\" \">Titanium.Android.EXTRA_*</tt> constants to use one of the Android-defined extra data fields.    </p>\n    <p>The following example adds a custom field called &quot;timestamp&quot; to the intent and the Android-defined <tt class=\" \">EXTRA_TEXT</tt> data:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">intent.putExtra(</code><code class=\"string\">&apos;timestamp&apos;</code><code class=\"plain\">, </code><code class=\"keyword\">new</code><code class=\"plain\"> Date());</code></div>\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">&apos;Some text that we want to share&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43287298_AndroidIntents-AddaCategory\">\n        <h3 class=\"heading \"><span>Add a Category</span></h3>\n    <p>To add a category to an intent, use the Intent&apos;s <tt class=\" \">addCategory()</tt> method.  A category provides additional details about the purpose of the intent.  Note that most categories are only useful for intent filters.  Pass the method one of the following <tt class=\" \">Titanium.Android.CATEGORY_*</tt> constants:    </p>\n<ul class=\" \"><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_DEFAULT</tt>: Do not use category filtering.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_BROWSABLE</tt>: Activity can be opened by a browser when clicking a link.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_TAB</tt>: Activity should be opened in a tab.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_ALTERNATIVE</tt>: Activity should be considered as an alternative option, usually displayed in the options menu.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_SELECTED_ALTERNATIVE</tt>: Activity should be considered as an alternative option, usually displayed in a dialog.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_LAUNCHER</tt>: Activity is the application&apos;s initial activity and is listed in the OS&apos;s application launcher.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_INFO</tt>: Provides information about the application package.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_HOME</tt>: Home activity.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_PREFERENCE</tt>: Activity is a preference panel.    </p>\n</li><li class=\" \">    <p><tt class=\" \">Titanium.Android.CATEGORY_TEST</tt>: Activity is for testing purposes.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>For categories, you can also define your own custom category name. Use a reverse domain scheme to name the category to avoid potential conflicts, for example, <tt class=\" \">org.foo.category.SUPER</tt>. Custom categories are only useful to communicate between your applications and application activities using intents.    </p>\n    </div>\n        </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-StartanActivitywithanIntent\">\n        <h2 class=\"heading \"><span>Start an Activity with an Intent</span></h2>\n    <p>To start an activity (application or application component), call the application&apos;s current Activity&apos;s <tt class=\" \">startActivity()</tt> or <tt class=\" \">startActivityForResult()</tt> method.  To get the current activity, use the <tt class=\" \">activity</tt> property of either the currently opened Window or TabGroup, or if the activity does not have an open Window or TabGroup, use the <tt class=\" \">Titanium.Android.currentActivity</tt> property.    </p>\n<ul class=\" \"><li class=\" \">    <p>The <tt class=\" \">startActivity()</tt> method starts an Activity by passing it only an intent object.    </p>\n</li><li class=\" \">    <p>The <tt class=\" \">startActivityForResult()</tt> method starts an Activity by passing it an intent object and a callback function to handle the response returned by the activity when it finishes.  Use this method if the application wants to communicate between two activities.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>Wait for the TabGroup or Window to open before invoking any methods on its activity.    </p>\n    </div>\n        <p>The following example starts an activity (another application) to view the data URI:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_VIEW,</code></div>\n<div class=\"line\"><code class=\"plain\">    data: </code><code class=\"string\">&apos;http://maps.google.com/maps?q=loc:37.3906238,-122.0499305,19&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.activity.startActivity(intent);</code></div>\n</div>\n    </div>\n    <p>The following example starts an activity to let the user choose a contact.  After the user successfully selects a contact and the activity completes, a new intent is created to view the contact using the result of the first activity.  Note that the URI returned by first intent is a content provider URI (<tt class=\" \">content://</tt>) and the contact information cannot be directly accessed by a Titanium application using the URI.  If the application needs to retrieve and manipulate the data, you need to create a native Android module to handle content provider URIs, or in this case, the application can use the <tt class=\" \">Titanium.Contacts</tt> API to directly retrieve the contact data.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Create an intent to choose a contact</code></div>\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_GET_CONTENT,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: </code><code class=\"string\">&apos;vnd.android.cursor.item/contact&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// Start an activity and execute the callback when the result returns</code></div>\n<div class=\"line\"><code class=\"plain\">win.activity.startActivityForResult(intent, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// If successful, open the selected contact</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">if</code><code class=\"plain\"> (e.resultCode == Ti.Android.RESULT_OK &amp;&amp; e.intent.data) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tvar newIntent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\taction: Ti.Android.ACTION_VIEW,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tdata: e.intent.data</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\t\twin.activity.startActivity(newIntent);</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-ForceanIntentChooser\">\n        <h2 class=\"heading \"><span>Force an Intent Chooser</span></h2>\n    <p>If the user selects a default application to handle a specific action, the <strong class=\" \">Share</strong> dialog will not appear.  If the application needs to explicitly show a dialog to the user to allow them to choose from a list of applications, create an intent chooser using the <tt class=\" \">Titanium.Android.createIntentChooser()</tt> method.  Pass the method the <tt class=\" \">Intent</tt> object the application would use to start an activity as the first parameter.  Pass a string to display as the title of the dialog as the second parameter.  Both parameters are required.  This method returns an <tt class=\" \">Intent</tt> object, which is used to start an activity.    </p>\n    <p>The following example creates an intent chooser that displays &quot;Send Message&quot; as the title of the dialog.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var chooser = Ti.Android.createIntentChooser(intent, </code><code class=\"string\">&quot;Send Message&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">win.activity.startActivity(chooser);</code></div>\n</div>\n    </div>\n    <p>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <p>This example shows a very common and effective use of Intents. This examples uses an Android Intent to share text with any apps on the Android device that accept text intents.    </p>\n    <p>First, create an implicit intent that sends text data.  When creating the intent, set the <tt class=\" \">action</tt> property to the <tt class=\" \">Ti.Android.ACTION_SEND</tt> constant and the <tt class=\" \">type</tt> property to the <tt class=\" \">text/plain</tt> MIME type.  The following intent tells Android the application wants to send plain text data.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: Ti.Android.ACTION_SEND,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: </code><code class=\"string\">&quot;text/plain&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Next, the application needs to send the text data with the intent.  Use the intent&apos;s <tt class=\" \">putExtra</tt> method to send extra data with the intent.  Pass the method the <tt class=\" \">Ti.Android.EXTRA_TEXT</tt> constant as the first parameter and the string to share as the second parameter.  The <tt class=\" \">EXTRA_TEXT</tt> constant signifies the intent is passing a standardized Android format with the intent.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">&apos;Some text that we want to share&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Use the intent&apos;s <tt class=\" \">addCategory</tt> method to specify the <tt class=\" \">Ti.Android.CATEGORY_DEFAULT</tt> category, which indicates not to use any category filtering.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">intent.addCategory(Ti.Android.CATEGORY_DEFAULT);</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>Finally, pass the intent to the application&apos;s current Activity&apos;s <tt class=\" \">startActivity()</tt> method.  The application can use the <tt class=\" \">activity</tt> property of either a Window or TabGroup object.  Note that to invoke any methods on an activity, the application needs to wait until the Window or TabGroup is open.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// Wait for the Window or TabGroup to open before invoking any methods on the activity</code></div>\n<div class=\"line\"><code class=\"plain\">win.activity.startActivity(intent);</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>When the intent is sent, the OS should display a list of applications to launch if it has multiple applications that can receive text intents.  If there are not many applications installed on the device or if the user selected a default application to handle text, the default application will be launched.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/AppUI.png\" alt=\"images/download/attachments/43287298/AppUI.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/ShareDialog2.png\" alt=\"images/download/attachments/43287298/ShareDialog2.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>    <img src=\"images/download/attachments/43287298/EmailClient2.png\" alt=\"images/download/attachments/43287298/EmailClient2.png\" class=\"confluence-embedded-image\">\n        </img></p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"src-43287298_AndroidIntents-CompleteCode\">\n        <h3 class=\"heading \"><span>Complete Code</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">var label = Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">&apos;Say Something!&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tcolor:</code><code class=\"string\">&apos;white&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize:</code><code class=\"string\">&apos;20dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontWeight:</code><code class=\"string\">&apos;bold&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\theight:</code><code class=\"string\">&apos;Ti.UI.SIZE&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"string\">&apos;5dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var textarea = Ti.UI.createTextArea({</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth:</code><code class=\"string\">&apos;90%&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"string\">&apos;44dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbottom: </code><code class=\"string\">&apos;70dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tleft:</code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tright:</code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle:</code><code class=\"string\">&apos;Share&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfont: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tfontSize:</code><code class=\"string\">&apos;24dp&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\tbottom:</code><code class=\"string\">&apos;10dp&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tright:</code><code class=\"value\">10</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\taction: Ti.Android.ACTION_SEND,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttype: </code><code class=\"string\">&quot;text/plain&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">\tintent.putExtra(Ti.Android.EXTRA_TEXT, textarea.value);</code></div>\n<div class=\"line\"><code class=\"plain\">\tintent.addCategory(Ti.Android.CATEGORY_DEFAULT);</code></div>\n<div class=\"line\"><code class=\"plain\">\twin.activity.startActivity(intent);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">win.add(label);</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(textarea);</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(button);</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43287298_AndroidIntents-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API Reference</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://developer.android.com/guide/components/intents-filters.html\" target=\"_blank\">Android Developers: Intent and Intent Filters</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43287298\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Android Intents"});