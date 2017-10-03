Ext.data.JsonP['Pull_Request_Guide']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Pull Request Guide</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-29004753\" class=\"content\">\n                        <h1>Pull Request Guide</h1>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-Prerequisites\">Prerequisites</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-PullRequestProcess\">Pull Request Process</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS0xLlJldmlld2FuZHNpZ250aGVDb250cmlidXRvcnNMaWNlbnNlQWdyZWVtZW50KENMQSku\">1. Review and sign the Contributors License Agreement (CLA).</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-2.FindorcreateaJiratickettoassociatewithyourpullrequest.\">2. Find or create a Jira ticket to associate with your pull request.</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-3.ForktheTitaniumSDKRepositoryonGithub.\">3. Fork the Titanium SDK Repository on Github.</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS00LkNsb25lLHNldHVwcmVtb3RlcyxhbmRicmFuY2gu\">4. Clone, setup remotes, and branch.</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-5.Makeyourchangestothedevelopmentbranch.\">5. Make your changes to the development branch.</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-6.Compileandtestthemodifiedtitanium_mobileproject.\">6. Compile and test the modified titanium_mobile project.</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS03LkFkZG9ybW9kaWZ5dGhlQVBJZG9jcyhpZm5lY2Vzc2FyeSku\">7. Add or modify the API docs (if necessary).</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS04LlJlYmFzZXlvdXJkZXZlbG9wbWVudGJyYW5jaHdpdGhtYXN0ZXIob3B0aW9uYWwpLg\">8. Rebase your development branch with master (optional).</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-9.SubmitpullrequestinGithub.\">9. Submit pull request in Github.</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-FrequentlyAskedQuestions\">Frequently Asked Questions</a>    </p>\n</li></ul>    <p>So you want to make a contribution to the <strong class=\" \">Titanium SDK</strong>? Got a bug you want to fix, or a feature you want to add? This is the guide that will help you do so. It&apos;ll walk you through all the necessary steps for creating a successful pull request against the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile\" target=\"_blank\">titanium_mobile github repository</a>.    </p>\n    <p>Aside from functioning in an educational capacity, this guide also serves to make the process of integrating your pull requests a more uniform task for our platform engineers. Observing the steps in this guide for each pull request will:    </p>\n<ul class=\" \"><li class=\" \">    <p>Make pull requests that are easier to integrate    </p>\n</li><li class=\" \">    <p>Define the expectations on those submitting pull requests    </p>\n</li><li class=\" \">    <p>Give you an opportunity to expedite the acceptance of your own pull requests. <strong class=\" \">Complete, high quality pull requests will receive priority</strong>.    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004753_PullRequestGuide-Prerequisites\">\n        <h2 class=\"heading \"><span>Prerequisites</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Familiarity with the open source <a class=\"external-link external-link\" href=\"http://www.apache.org/licenses/LICENSE-2.0.html\" target=\"_blank\">Apache 2.0 license</a>, the license that governs the Titanium Mobile SDK.    </p>\n</li><li class=\" \">    <p>A working knowledge of <a class=\"document-link \" href=\"#!/guide/Git_and_Github\">Git and Github</a>    </p>\n</li><li class=\" \">    <p>A <a class=\"external-link external-link\" href=\"https://github.com/signup/free\" target=\"_blank\">github.com account</a>    </p>\n</li></ul>    <p>You must also have all of the software required to build the Titanium SDK from source. For details, see <a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source\">Building the Titanium SDK From Source</a>.    </p>\n    <p>There are a number of GUI interfaces for git. This guide provides instructions for using git from the command line, but these can easily be adapted to other tools.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004753_PullRequestGuide-PullRequestProcess\">\n        <h2 class=\"heading \"><span>Pull Request Process</span></h2>\n    <p><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS0xLlJldmlld2FuZHNpZ250aGVDb250cmlidXRvcnNMaWNlbnNlQWdyZWVtZW50KENMQSku\">#1. Review and sign the Contributors License Agreement (CLA).</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-2.FindorcreateaJiratickettoassociatewithyourpullrequest.\">#2. Find or create a Jira ticket to associate with your pull request.</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-3.ForktheTitaniumSDKRepositoryonGithub.\">#3. Fork the Titanium SDK Repository on Github.</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS00LkNsb25lLHNldHVwcmVtb3RlcyxhbmRicmFuY2gu\">#4. Clone, setup remotes, and branch.</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-5.Makeyourchangestothedevelopmentbranch.\">#5. Make your changes to the development branch.</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-6.Compileandtestthemodifiedtitanium_mobileproject.\">#6. Compile and test the modified titanium_mobile project.</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS03LkFkZG9ybW9kaWZ5dGhlQVBJZG9jcyhpZm5lY2Vzc2FyeSku\">#7. Add or modify the API docs (if necessary).</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS04LlJlYmFzZXlvdXJkZXZlbG9wbWVudGJyYW5jaHdpdGh0aGVtYXN0ZXIob3B0aW9uYWwpLg\">#8. Rebase your development branch with the master (optional).</a><br><a class=\"document-link \" href=\"#!/guide/Pull_Request_Guide-section-src-29004753_PullRequestGuide-9.SubmitpullrequestinGithub.\">#9. Submit pull request in Github.</a>    </br></br></br></br></br></br></br></br></p>\n    <div class=\"section section-3 \" id=\"src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS0xLlJldmlld2FuZHNpZ250aGVDb250cmlidXRvcnNMaWNlbnNlQWdyZWVtZW50KENMQSku\">\n        <h3 class=\"heading \"><span>1. Review and sign the Contributors License Agreement (CLA).</span></h3>\n    <p>To contribute to any of Appcelerator&apos;s open source projects, such as Titanium or Alloy, you must sign a standard Open Source Contributors License Agreement (CLA). As with most open source projects, legal issues regarding intellectual property rights require us to protect ourselves, our contributors and our users from any future ownership claims from third-parties.    </p>\n    <p>The CLA is a simple form you can sign electronically by visiting the following URL:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://cla.appcelerator.com\" target=\"_blank\">https://cla.appcelerator.com</a>    </p>\n</li></ul>    <p>You must first electronically sign the before you can contribute code, documentation or any other materials to the project. <strong class=\" \">You are only required to do this once</strong>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_PullRequestGuide-2.FindorcreateaJiratickettoassociatewithyourpullrequest.\">\n        <h3 class=\"heading \"><span>2. Find or create a Jira ticket to associate with your pull request.</span></h3>\n    <p>All pull requests that get integrated into the Titanium SDK have an associated Jira ticket. To make sure that your pull request gets accepted, you also need to have an associated ticket. Community members cannot submit tickets directly to the Titanium Mobile (TIMOB) Jira project, so you have 2 options:    </p>\n<ol class=\" \"><li class=\" \">    <p>Find an existing Titanium Mobile (TIMOB) ticket with which to associate your ticket. You can search the TIMOB project for an existing feature request or bug with the following link: <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org/secure/IssueNavigator.jspa\" target=\"_blank\">Titanium Mobile (TIMOB) Jira project</a>    </p>\n</li><li class=\" \">    <p>Find or create a new ticket in the Titanium Community (TC) Jira project. Community members have the ability to create new tickets here, unlike the TIMOB project. If you want to add a feature or fix a bug that has not yet been logged in either Jira project, you can do so at the following link: <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org/browse/TC\" target=\"_blank\">Titanium Community (TC) Jira project</a>    </p>\n</li></ol>    <p>Once you have created/found the Jira ticket that you would like to address with your pull request, remember it. The ticket number will be used to identify your development branch in a later step. In addition, code for testing your pull request should be included in the Jira ticket.    </p>\n    <p>For comprehensive instructions on everything associated with submitting Jira tickets, see <a class=\"document-link \" href=\"#!/guide/How_to_Report_a_Bug_or_Make_a_Feature_Request\">How to Report a Bug or Make a Feature Request</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_PullRequestGuide-3.ForktheTitaniumSDKRepositoryonGithub.\">\n        <h3 class=\"heading \"><span>3. Fork the Titanium SDK Repository on Github.</span></h3>\n    <p>To be able to submit changes to the Titanium Mobile SDK, you first need your own forked copy of the <tt class=\" \">titanium_mobile</tt> project available on Github. You&apos;ll need a Github account of your own to be able to do so. To create your own fork of titanium_mobile, you simple need to:    </p>\n<ol class=\" \"><li class=\" \">    <p>Log in to your Github account.    </p>\n</li><li class=\" \">    <p>Go to the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile\" target=\"_blank\">appcelerator/titanium_mobile</a> project on Github.    </p>\n</li><li class=\" \">    <p>Click the &quot;Fork&quot; button at the top of the screen.    </p>\n    <img src=\"images/download/attachments/27164686/github-fork-repo.png\" alt=\"images/download/attachments/27164686/github-fork-repo.png\" class=\"confluence-embedded-image confluence-external-resource\">\n    </img></li></ol>    <p>That&apos;s it. You will now have a forked copy of the <tt class=\" \">appcelerator/titanium_mobile</tt> repository under your Github account. Instead of being called <tt class=\" \">appcelerator/titanium_mobile</tt>, though, it will now be called <tt class=\" \">YOUR_ACCOUNT/titanium_mobile</tt>, where <tt class=\" \">YOUR_ACCOUNT</tt> is your Github account name.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS00LkNsb25lLHNldHVwcmVtb3RlcyxhbmRicmFuY2gu\">\n        <h3 class=\"heading \"><span>4. Clone, setup remotes, and branch.</span></h3>\n    <p>To work on your project, you need to do    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git clone git</code><code class=\"color1\">@github</code><code class=\"plain\">.com:YOUR_ACCOUNT/titanium_mobile.git   # YOUR_ACCOUNT is your Github account name </code></div>\n<div class=\"line\"><code class=\"plain\">cd titanium_mobile</code></div>\n<div class=\"line\"><code class=\"plain\">git remote add appcelerator git:</code><code class=\"comments\">//github.com/appcelerator/titanium_mobile.git </code></div>\n<div class=\"line\"><code class=\"plain\">git checkout master</code></div>\n<div class=\"line\"><code class=\"plain\">git checkout -b PROJECT-NUMBER   # PROJECT-NUMBER is from step </code><code class=\"value\">2</code><code class=\"plain\">. For example, TIMOB-</code><code class=\"value\">1234</code><code class=\"plain\"> or TC-</code><code class=\"value\">432</code></div>\n</div>\n    </div>\n    <p>It is assumed that if you are planning to develop against the <tt class=\" \">titanium_mobile</tt> project, you already have <tt class=\" \">git</tt> installed for your system. If you do not, please use our guide for getting set up: <a class=\"document-link \" href=\"#!/guide/Installing_Git\">Installing Git</a>    </p>\n    <p>In the commands above, we are performing 3 distinct <tt class=\" \">git</tt> operations to prepare for developing against the titanium_mobile project.    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \"><tt class=\" \">git clone</tt></strong><br>Given a remote repository, <tt class=\" \">clone</tt> will create a local copy of the recently forked repository that you can modify. As noted above, you need to replace <strong class=\" \"><tt class=\" \">YOUR_ACCOUNT</tt></strong> with your Github account name    </br></p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">git remote add</tt></strong><br>This command adds the original <tt class=\" \">appcelerator/titanium_mobile</tt> repository as a remote source for your local repository. This allows you to update your local repository with any changes that are made to the main <tt class=\" \">appcelerator/titanium_mobile</tt> repository.    </br></p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">git checkout</tt></strong><br>This command, when given the <tt class=\" \">-b</tt> option, creates a local development branch by the name <tt class=\" \">PROJECT-NAME</tt>. As mentioned above, the name should correspond to the Jira ticket that you identified in step 2. So if you are planning to address ticket number 1234 in the TIMOB project, your full command would look like this:    </br></p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git checkout -b TIMOB-</code><code class=\"value\">1234</code></div>\n</div>\n    </div>\n</li></ul>    <p>You only need to clone your Github repo and set up the remote repository once. For any subsequent pull requests, you&apos;d do the following:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git checkout master              # </code><code class=\"keyword\">return</code><code class=\"plain\"> to the master branch</code></div>\n<div class=\"line\"><code class=\"plain\">git pull appcelerator master     # update the master branch with the latest code from the main repo</code></div>\n<div class=\"line\"><code class=\"plain\">git checkout -b PROJECT-NUMBER  # create a </code><code class=\"keyword\">new</code><code class=\"plain\"> branch based on the current state of the master branch</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_PullRequestGuide-5.Makeyourchangestothedevelopmentbranch.\">\n        <h3 class=\"heading \"><span>5. Make your changes to the development branch.</span></h3>\n    <p>This is where you will make your changes to the Titanium SDK. There&apos;s a few things to consider when doing so:    </p>\n<ul class=\" \"><li class=\" \">    <p>Follow the Titanium coding standards: <a class=\"document-link \" href=\"#!/guide/Coding_Standards\">Coding Standards</a>.    </p>\n</li><li class=\" \">    <p>Functionality added in a pull request must work on all supported versions of our platform. For example, any pull request submitted for both Android and iOS must support Android 2.2+ and iOS 4.0+ as of Titanium Mobile 1.8.    </p>\n</li><li class=\" \">    <p>Parity between platforms must be preserved when adding functionality, where possible. To achieve this, you have 2 options    </p>\n<ul class=\" \"><li class=\" \">    <p>Submit any pull requests for both Android and iOS    </p>\n</li><li class=\" \">    <p>Submit your pull request for one platform, then submit a &quot;parity&quot; Jira ticket for the unsupported platform.    </p>\n</li></ul></li></ul>    <p>For example, let&apos;s assume you submitted a new feature on Android that has a corresponding feature on iOS, but you did not implement it on iOS. What you would do it submit the Android-only pull request, then create a <a class=\"external-link external-link\" href=\"http://jira.appcelerator.org/browse/TC\" target=\"_blank\">Titanium Community</a> Jira ticket indicating that your pull request is not implemented in iOS. That way our platform engineers, as well as other community members, will have an opportunity to resolve the parity issue.    </p>\n    <p>It takes the burden of implementing on multiple platforms out of your hands, but it is in turn likely that your pull request will take longer to accept as the parity issues are resolved.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_PullRequestGuide-6.Compileandtestthemodifiedtitanium_mobileproject.\">\n        <h3 class=\"heading \"><span>6. Compile and test the modified titanium_mobile project.</span></h3>\n    <p>For now, compiling and testing your modified SDK is a very basic process.    </p>\n<ol class=\" \"><li class=\" \">    <p>Compile with <tt class=\" \">scons</tt>    </p>\n</li><li class=\" \">    <p>Copy the generated SDK ZIP from the <tt class=\" \">titanium_mobile/dist</tt> directory to your system&apos;s Titanium directory (In the case of Mac OSX. <tt class=\" \">~/Library/Application\\ Support/Titanium</tt>).    </p>\n</li><li class=\" \">    <p>Extract the ZIP file, overwriting any prior changes.    </p>\n</li><li class=\" \">    <p>Run a test program in Titanium Studio against your newly installed SDK.    </p>\n</li></ol>    <p>See <a class=\"document-link \" href=\"#!/guide/Building_the_Titanium_SDK_From_Source\">Building the Titanium SDK From Source</a> for detailed instructions for building the SDK.    </p>\n    <p>As stated in step #2, code that you use to test your pull request should be included in the associated Jira ticket. This test case will be part of the validation process.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS03LkFkZG9ybW9kaWZ5dGhlQVBJZG9jcyhpZm5lY2Vzc2FyeSku\">\n        <h3 class=\"heading \"><span>7. Add or modify the API docs (if necessary).</span></h3>\n    <p>If the changes you&apos;ve made to <tt class=\" \">titanium_mobile</tt> have added to or changed the public Javascript API in any way, you need to change the API docs to reflect that. Let&apos;s assume you have added a property named <strong class=\" \"><tt class=\" \">myNewProperty</tt></strong> to <strong class=\" \"><tt class=\" \">Titanium.UI.View</tt></strong>. Let&apos;s tak a look at how we would modify the API docs to document the new property.    </p>\n    <p>The API docs are part of the <tt class=\" \">titanium_mobile</tt> project and can be found at:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">/path/to/titanium_mobile/apidoc</code></div>\n</div>\n    </div>\n    <p>The directory structure inside <tt class=\" \">titanium_mobile/apidoc</tt> is organized by namespace, just as the API docs are in the Developer Center. In our case, we are looking for <tt class=\" \">Titanium.UI.View</tt>, so we go to the following directory:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">/path/to/titanium_mobile/apidoc/Titanium/UI</code></div>\n</div>\n    </div>\n    <p>and then we open the <strong class=\" \"><tt class=\" \">View.yml</tt></strong> file in our favorite editor. We would then scroll down to the <strong class=\" \"><tt class=\" \">properties</tt></strong> section of the YML document and find where we would put our new property, alphabetically. In our case, <tt class=\" \">myNewProperty</tt> would be between the existing <tt class=\" \">layout</tt> and <tt class=\" \">opacity</tt> properties. The updated documentation would look something like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// layout documentation</code></div>\n<div class=\"line\"><code class=\"plain\">  - name: myNewProperty</code></div>\n<div class=\"line\"><code class=\"plain\">    summary: Useful </code><code class=\"keyword\">new</code><code class=\"plain\"> property </code><code class=\"keyword\">for</code><code class=\"plain\"> keeping track of stuff.</code></div>\n<div class=\"line\"><code class=\"plain\">    description: |</code></div>\n<div class=\"line\"><code class=\"plain\">        This property is added as an example of how to add/modify existing </code></div>\n<div class=\"line\"><code class=\"plain\">        API docs documentation. The description here is a more comprehensive </code></div>\n<div class=\"line\"><code class=\"plain\">        overview of the property which can include information regarding</code></div>\n<div class=\"line\"><code class=\"plain\">        its functionality, usage, and limitations.</code></div>\n<div class=\"line\"><code class=\"plain\">    type: String</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">default</code><code class=\"plain\">: </code><code class=\"string\">&apos;stuff&apos;</code></div>\n<div class=\"line\"><code class=\"comments\">// opacity documentation</code></div>\n</div>\n    </div>\n    <p>When you are done making your modifications, be sure to build and validate the new API docs. You can do that with the following commands.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">cd /path/to/titanium_mobile/apidoc</code></div>\n<div class=\"line\"><code class=\"plain\">python ./docgen.py                 # generate the API docs in /path/to/titanium_mobile/dist/apidoc/</code></div>\n<div class=\"line\"><code class=\"plain\">python ./validate.py               # validates the generates API docs</code></div>\n</div>\n    </div>\n    <p>For a more detailed account of this process, see:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Contributing_API_Documentation\">Contributing API Documentation</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Titanium_API_Doc_Style_Guide\">Titanium API Doc Style Guide</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_safe-id-UHVsbFJlcXVlc3RHdWlkZS04LlJlYmFzZXlvdXJkZXZlbG9wbWVudGJyYW5jaHdpdGhtYXN0ZXIob3B0aW9uYWwpLg\">\n        <h3 class=\"heading \"><span>8. Rebase your development branch with master (optional).</span></h3>\n    <p>If you have made a number of commits related to your fix over time, you may want to rebase your changes on the master titanium branch. This step is optional.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git commit ...                           # commit code changes as usual</code></div>\n<div class=\"line\"><code class=\"plain\">git checkout master                      # go back to the master branch</code></div>\n<div class=\"line\"><code class=\"plain\">git pull appcelerator master                 # make sure the master is up to date</code></div>\n<div class=\"line\"><code class=\"plain\">git checkout PROJECT-NUMBER              # go back to your development branch</code></div>\n<div class=\"line\"><code class=\"plain\">git rebase master                        # rebase your development branch as the master  </code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004753_PullRequestGuide-9.SubmitpullrequestinGithub.\">\n        <h3 class=\"heading \"><span>9. Submit pull request in Github.</span></h3>\n    <p>To raise a Github pull request, follow these steps:    </p>\n<ol class=\" \"><li class=\" \">    <p>Push your changes to your Github fork.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">git push origin PROJECT-NUMBER </code></div>\n</div>\n    </div>\n</li><li class=\" \">    <p>Open your Github <tt class=\" \">titanium_mobile</tt> repository in a web browser, select the development branch that you have pushed using the branch selector on the left.    </p>\n</li><li class=\" \">    <p>Confirm that your last commit is displayed beneath.    </p>\n</li><li class=\" \">    <p>Click the &quot;Pull Request&quot; button.    </p>\n    <img src=\"images/download/attachments/27164686/github-pull-request.png\" alt=\"images/download/attachments/27164686/github-pull-request.png\" class=\"confluence-embedded-image confluence-external-resource\">\n        <p>Add a message using the form on the following page, and click the &quot;Send Pull Request&quot; button to submit it. Some guidelines:    </p>\n<ol class=\" \"><li class=\" \">    <p>Put the JIRA ticket first, in brackets: <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile/pull/5361\" target=\"_blank\">[TIDOC-1487] Implement APIs to create Native Windows Phone components</a>    </p>\n</li><li class=\" \">    <p>If you have multiple JIRA tickets, list them. You should only have 1 ticket per PR: <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile/pull/5039\" target=\"_blank\">[TIMOB-10350] [TIMOB-9558] Anvil test case for xml test suite</a>    </p>\n</li><li class=\" \">    <p>If you are doing a back port, put the branch name after the JIRA number in parenthesis. Use the ACTUAL name of the branch: <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_mobile/pull/5359\" target=\"_blank\">[TIMOB-15889] (3_2_X) iOS: Clear out listItem when cell deallocates</a>    </p>\n</li><li class=\" \">    <p>Use the title of the JIRA ticket (or a close approximation) for titling the PR.    </p>\n</li><li class=\" \">    <p>Add a link to the JIRA ticket in the description of the PR.    </p>\n</li></ol></img></li></ol>    <p>At this point, your request is ready for review. In most cases a member of the Titanium core team should review your request within a week. Reviews may take longer if there is a large volume of pull requests outstanding.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>A pull request is a request for the HEAD of the branch. Any commits that you push to your branch, up until the moment the pull request is merged, will be merged into the master branch.    </p>\n    </div>\n        </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004753_PullRequestGuide-FrequentlyAskedQuestions\">\n        <h2 class=\"heading \"><span>Frequently Asked Questions</span></h2>\n    <p>Q. What does it mean if my PR is rejected? Does <strong class=\" \">Rejected</strong> in bold mean they really don&apos;t like it?    </p>\n    <p>A. It&apos;s common for a PR to be rejected when it is first made. This could be because it fails functional testing, needs changes to the code style, or because the description of the issue and/or solution is not clear enough for the reviewer to test the change. In this case, the reviewer should give clear guidance about what needs to be fixed for the PR to be processed.    </p>\n    <p>A PR can also be rejected if the feature is determined to be a bad fit for the project &#x2013; for example, something that would be better implemented as a module.    </p>\n    <p>And many reviewers use bold for <strong class=\" \">Accepted</strong> or <strong class=\" \">Rejected</strong> so they stand out from the rest of the text. It&apos;s not personal &#x2013; really.    </p>\n    <p>Q. What happens if I need to make changes to my pull request? Do I need to submit a new one?    </p>\n    <p>A. If your PR hasn&apos;t been merged, simply pushing new changes to your Github branch will update the pull request. If the reviewer requests changes to your PR, simply add a new commit on the branch and push it to Github.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004753\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Pull Request Guide"});