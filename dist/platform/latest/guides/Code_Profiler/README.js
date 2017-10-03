Ext.data.JsonP['Code_Profiler']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Code Profiler</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-43298671\" class=\"content\">\n                        <h1>Code Profiler</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-ProfilinganApplication\">Profiling an Application</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-InitiateaProfilerSession\">Initiate a Profiler Session</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-CaptureaPerformanceSnapshot\">Capture a Performance Snapshot</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-DisplayaPerformanceSnapshot\">Display a Performance Snapshot</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-SaveaPerformanceSnapshot\">Save a Performance Snapshot</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-LoadaPerformanceSnapshot\">Load a Performance Snapshot</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-TerminateaProfilerSession\">Terminate a Profiler Session</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-AppceleratorProfilingPerspective\">Appcelerator Profiling Perspective</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-ProfileView\">Profile View</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-PerformanceProfileView\">Performance Profile View</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-ImprovingProfilerResults\">Improving Profiler Results</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-NameAnonymousFunctions\">Name Anonymous Functions</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-MissingMethodCallsonAndroid\">Missing Method Calls on Android</a>    </p>\n</li></ul></li></ul>    <p>This page describes how to use the Appcelerator Studio Code Profiler to profile the performance of your applications on simulators and devices.    </p>\n    <div class=\"section section-2 \" id=\"src-43298671_CodeProfiler-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>The Appcelerator Studio Code Profiler collects detailed performance data of your application.  As you interact with your application, the profiler records each method called and how long it took to execute.  Use this performance data to identify performance bottlenecks in your application.    </p>\n    <p>The profiler works with classic mobile and Alloy projects only on the Android and iOS platforms.  For Alloy projects, the profiler reports the methods from the generated Titanium files (inside the <tt class=\" \">Resources</tt> directory), then maps them to the Alloy files (inside the <tt class=\" \">app</tt> directory).  You may see results for files not in the <tt class=\" \">app</tt> directory.    </p>\n    <p>Note: Code Profiler is an Enterprise feature. See <a class=\"external-link external-link\" href=\"http://www.appcelerator.com/pricing/\" target=\"_blank\">http://www.appcelerator.com/pricing/</a> for pricing details.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298671_CodeProfiler-ProfilinganApplication\">\n        <h2 class=\"heading \"><span>Profiling an Application</span></h2>\n    <p>To use the Code Profiler, first initiate a profiler session, and once the session starts, use the profiler to collect and display performance snapshot data.  You may also save performance snapshots and load them later to inspect.    </p>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-InitiateaProfilerSession\">\n        <h3 class=\"heading \"><span>Initiate a Profiler Session</span></h3>\n    <p>To start a profiler session on an existing project, first make sure your project is using Titanium SDK 3.1 or later. If not, update the SDK version in your <tt class=\" \">tiapp.xml </tt>file.    </p>\n<ol class=\" \"><li class=\" \">    <p>In the <strong class=\" \">Project Explorer</strong> view, select your project.    </p>\n</li><li class=\" \">    <p>In the global tool bar, select <strong class=\" \">Profile</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list and select an Android or iOS target (emulator, simulator or device) from the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>If the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the device is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n</li></ol>    <p>After the build process starts, a dialog appears asking you to change your perspective.  Click the <strong class=\" \">Yes</strong> button to change to the <strong class=\" \">Appcelerator Profiler</strong> perspective. Select the <strong class=\" \">Remember my decision </strong>checkbox if you do not want to be prompted to change the perspective in the future.    </p>\n    <p>When profiling on device, a dialog appears showing the progress of the build.  After the application is installed on device, a dialog appears prompting you to launch the application.  The application must be launched in order to start profiling and your device must also be plugged into your host machine to profile.    </p>\n    <p>After the application launches on the simulator or device, a connection is established between the application and Studio to start a profiler session.  A dialog appears asking you to start recording a performance snapshot, which pauses the application.  Click the <strong class=\" \">Yes</strong> button to start a snapshot session and to resume the application.  If you choose not to start a snapshot session, you can start one later.  Select the <strong class=\" \">Do not show this message again</strong> checkbox if you do not want to be prompted for this choice in the future.    </p>\n    <p>In the <strong class=\" \">Profile<i class=\" \"> </i></strong>view, you should see an item called <strong class=\" \">JS Profiler</strong> under your application profile, indicating your profiler session has been established.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-CaptureaPerformanceSnapshot\">\n        <h3 class=\"heading \"><span>Capture a Performance Snapshot</span></h3>\n    <p>The Code Profiler does not capture data in real time.  You need to capture snapshots of application activity in order to collect performance data.    </p>\n    <p>To capture a performance snapshot, select your application in the <strong class=\" \">Profile<i class=\" \"> </i></strong>view, then click the <strong class=\" \">Capture Performance Profile</strong> button     <img src=\"images/download/attachments/43298671/StartProfiler.png\" alt=\"images/download/attachments/43298671/StartProfiler.png\" class=\"confluence-embedded-image\">\n to start a profiling session.  Make sure before you click the <strong class=\" \">Capture Performance Profile </strong>button to start a profiling session, there is a green play button displayed next to it.  If there is a red stop button, then the profiler is already capturing data.  Interact with your application and trigger any part that is potentially causing a bottleneck in performance.  When you are done, click the <strong class=\" \">Capture Performance Profile</strong> button     <img src=\"images/download/attachments/43298671/StopProfiler.png\" alt=\"images/download/attachments/43298671/StopProfiler.png\" class=\"confluence-embedded-image\">\n to stop the profiling session.  A performance snapshot is created, added as an item under <strong class=\" \">JS Profile</strong> item in the <strong class=\" \">Profile</strong> view, and a <strong class=\" \">Performance Profile<i class=\" \"> </i></strong>view is automatically opened, displaying the performance data.    </img></img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-DisplayaPerformanceSnapshot\">\n        <h3 class=\"heading \"><span>Display a Performance Snapshot</span></h3>\n    <p>Studio provides a <strong class=\" \">Performance Profile</strong> view that allows you to inspect the data captured by a profiling session.  To open the view, double-click any of the performance snapshots in the <strong class=\" \">Profile</strong> view.  Refer to the <a class=\"document-link \" href=\"#!/guide/Code_Profiler-section-src-43298671_CodeProfiler-PerformanceProfileView\">Performance Profile View</a> section below for an explanation of the displayed data.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-SaveaPerformanceSnapshot\">\n        <h3 class=\"heading \"><span>Save a Performance Snapshot</span></h3>\n    <p>To save a performance snapshot, select the snapshot you want to save in the <strong class=\" \">Performance Profile<i class=\" \"> </i></strong>view and click the <strong class=\" \">Save Performance Snapshot<i class=\" \"> </i> </strong>button     <img src=\"images/download/attachments/43298671/SaveSnapshot.png\" alt=\"images/download/attachments/43298671/SaveSnapshot.png\" class=\"confluence-embedded-image\">\n.  A dialog appears.  Navigate to the location you want to save the data to, enter a filename, then click the <strong class=\" \">Save</strong> button.    </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-LoadaPerformanceSnapshot\">\n        <h3 class=\"heading \"><span>Load a Performance Snapshot</span></h3>\n    <p>To open a previously saved performance snapshot, click the <strong class=\" \">Load Snapshot</strong> button     <img src=\"images/download/attachments/43298671/LoadSnapshot.png\" alt=\"images/download/attachments/43298671/LoadSnapshot.png\" class=\"confluence-embedded-image\">\n in the <strong class=\" \">Profile<i class=\" \"> </i></strong>view.  A dialog appears.  Navigate to the the file you want to load and click the <strong class=\" \">Open</strong> button.  The performance snapshot data displays in the <strong class=\" \">Performance Profile</strong> view.    </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-TerminateaProfilerSession\">\n        <h3 class=\"heading \"><span>Terminate a Profiler Session</span></h3>\n    <p>To stop the profiler, select it in the <strong class=\" \">Profile</strong> view and click the <strong class=\" \">Terminate</strong> button.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298671_CodeProfiler-AppceleratorProfilingPerspective\">\n        <h2 class=\"heading \"><span>Appcelerator Profiling Perspective</span></h2>\n    <p>In Appcelerator Studio, switch to the <strong class=\" \">Appcelerator Profiling</strong> perspective when you are using the Code Profiler.  The <strong class=\" \">Appcelerator Profiling</strong> perspective contains two profiler-specific views:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Profile View</strong> &#x2013; Used to control the Code Profiler, start and stop capturing performance data, and to load previously saved performance snapshots.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Performance Profile View</strong> &#x2013; Used to display or save performance snapshots.    </p>\n</li></ul>    <p>For more details about using these views, see the sections below.    </p>\n    <p>In addition to these specific views, the <strong class=\" \">Editor </strong>is displayed to show source code for a particular method call as well as the <strong class=\" \">Console View</strong> to display the log output from the debugger.    </p>\n    <p>    <img src=\"images/download/attachments/43298671/PerformancePerspective.png\" alt=\"images/download/attachments/43298671/PerformancePerspective.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-ProfileView\">\n        <h3 class=\"heading \"><span>Profile View</span></h3>\n    <p>The <strong class=\" \">Profile<i class=\" \"> </i></strong>view is used to control the profiler, start and stop capturing performance data and load previously saved performance snapshots.    </p>\n    <p>The main pane lists the currently active and terminated applications.  In the example below, the Kitchen Sink application is running on the iOS simulator.  When this item is expanded, it shows that the JS Profiler is currently running.  (The other state is suspended.) When the profiler item is expanded, it lists the performance snapshots captured by the profiler.  In the example below, the profiler has captured two performance snapshots.  To view a snapshot, double-click the snapshot to open the <strong class=\" \">Performance Profile</strong> view.    </p>\n    <p>The <strong class=\" \">Profile<i class=\" \"> </i></strong>view contains a row of icon buttons in the top-right corner.  From left to right, starting with the disabled button of two x&apos;s:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Remove All Terminated Launches<i class=\" \"> </i> </strong>&#x2013; Removes any terminated profiler sessions from the main pane.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Resume</strong> &#x2013; Resumes the profiler if it was previously suspended.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Suspend</strong> &#x2013; Suspends the profiler.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Terminate</strong> &#x2013; Terminates the profiler.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Disconnect </strong>&#x2013; Disconnects the profiler from the application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Run Garbage Collector</strong> &#x2013; Runs the JavaScript garbage collector.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Capture Performance Profiler</strong> &#x2013; Starts (if there is a green play icon) or stops (if there is a red stop icon) capturing performance data.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Load Snapshot</strong> &#x2013; Loads a previously saved performance snapshot.    </p>\n</li><li class=\" \">    <p><strong class=\" \">View Menu</strong> <strong class=\" \"> &#x2013; </strong>Change the layout of this view.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Minimize &#x2013; </strong>Minimize this view.<strong class=\" \"> <br> </br></strong>    </p>\n</li><li class=\" \">    <p><strong class=\" \">Maximize &#x2013; </strong>Maximize this view.    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/43298671/ProfileView.png\" alt=\"images/download/attachments/43298671/ProfileView.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-PerformanceProfileView\">\n        <h3 class=\"heading \"><span>Performance Profile View</span></h3>\n    <p>The <strong class=\" \">Performance Profile<i class=\" \"> </i></strong>view is used to display the data captured by a profiling session.  The performance profile displays the information in two different forms:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Call Hierarchy</strong> <strong class=\" \"> </strong>- Displays the method calls in an hierarchical form, making it easy to follow method callers and callees. It displays the calls self-time and a cumulative time where possible.  You can sort this view by one of the time columns to track the most expensive methods.  This form displays the following fields:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Method</strong> - Name of the method being called.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Self Time</strong> - Total amount of time, in milliseconds, that all calls to this method took to execute during the interaction period. Does not include calls to other methods inside this method.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Cumulative Time</strong> - Total amount of time, in milliseconds, that all calls to this method, and all calls to methods inside this method, took to execute during the interaction period.    </p>\n</li><li class=\" \">    <p><strong class=\" \">File</strong> - File location and line number of the method.    </p>\n</li></ul></li><li class=\" \">    <p><strong class=\" \">Hotspots</strong> - Displays a flat view of the methods that were involved in the profiling session. The self-time of the methods display in this view is aggregated to include all the occurrences of a method in the Call Hierarchy. You can also sort this view.  This form displays the same fields as the Call Hierarchy form except cumulative time.    </p>\n</li></ul>    <p>Whenever possible, double-clicking a row in this view opens up the file source in the <strong class=\" \">Editor</strong> and scrolls to the line number that is specified for that call.    </p>\n    <p>The <strong class=\" \">Performance Profile<i class=\" \"> </i></strong>view contains a row of icon buttons in the top-right corner.  From left to right, starting with the floppy disk icon:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Save Performance Snapshot</strong> &#x2013; Saves a performance snapshot.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Show Percents</strong> <strong class=\" \"> &#x2013; </strong>Toggles showing percentage statistics.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Minimize &#x2013; </strong>Minimize this view.<strong class=\" \"> <br> </br></strong>    </p>\n</li><li class=\" \">    <p><strong class=\" \">Maximize &#x2013; </strong>Maximize this view.    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/43298671/PerformanceProfileView.png\" alt=\"images/download/attachments/43298671/PerformanceProfileView.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>On the Android platform, especially when profiling on device, you may not see all of your method calls. The profiler uses V8&apos;s built-in CPU sample profiler to monitor the stack frames over a small threshold of time.  The interval for sampling is around 5 ms on Android devices, so methods that do not use too many CPU cycles may not show up in the results.  However, the profiler is able to capture and identify CPU-intensive methods.    </p>\n    <p>On the iOS platform, the profilers uses the instrumentation method and is able to directly intercept the calls, allowing it to log all method calls.    </p>\n    </div>\n        </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-43298671_CodeProfiler-ImprovingProfilerResults\">\n        <h2 class=\"heading \"><span>Improving Profiler Results</span></h2>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-NameAnonymousFunctions\">\n        <h3 class=\"heading \"><span>Name Anonymous Functions</span></h3>\n    <p>As seen in the screen shots of the Appcelerator Profiling Perspective, many of the methods are labeled as &quot;anonymous function&quot;.  To make it easier to identify functions in the profiler results, assign them with an identifier when declaring them.    </p>\n    <p>For example, if you declare functions in your JavaScript code using the methods below, the profiler reports the &quot;anonymous function&quot; results.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(e.source);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">/* Or this</code></div>\n<div class=\"line\"><code class=\"comments\">var doClick = function(e) {</code></div>\n<div class=\"line\"><code class=\"comments\">    Ti.API.info(e.source);</code></div>\n<div class=\"line\"><code class=\"comments\">}</code></div>\n<div class=\"line\"><code class=\"comments\">button.addEventListener(&apos;click&apos;, doClick);</code></div>\n<div class=\"line\"><code class=\"comments\">*/</code></div>\n</div>\n    </div>\n    <p>Instead, declare your functions using the method below, which will report the results as the function name.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">function doClick (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(e.source);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, doClick);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-43298671_CodeProfiler-MissingMethodCallsonAndroid\">\n        <h3 class=\"heading \"><span>Missing Method Calls on Android</span></h3>\n    <p>On the Android platform, especially when profiling on device, you may not see all of your method calls. The profiler uses V8&apos;s built-in CPU sample profiler to monitor the stack frames over a small threshold of time.  The interval for sampling is around 5 ms on Android devices, so methods that do not use too many CPU cycles may not show up in the results.  However, the profiler is able to capture and identify CPU-intensive methods. For example, run the following code with the profiler and hit the button several times.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var win = Titanium.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundColor : </code><code class=\"string\">&apos;#fff&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">    title : </code><code class=\"string\">&apos;click&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">&apos;click&apos;</code><code class=\"plain\">, loopManyTimes);</code></div>\n<div class=\"line\"><code class=\"plain\">function loopManyTimes() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">for</code><code class=\"plain\"> (var i = </code><code class=\"value\">0</code><code class=\"plain\">; i &lt; </code><code class=\"value\">10000</code><code class=\"plain\">; i++) {</code></div>\n<div class=\"line\"><code class=\"plain\">        Ti.API.info(</code><code class=\"string\">&apos;-------------&apos;</code><code class=\"plain\"> + i);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">win.add(button); </code></div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n    </div>\n    <p>    </p>\n    <p>    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298671\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Code Profiler"});