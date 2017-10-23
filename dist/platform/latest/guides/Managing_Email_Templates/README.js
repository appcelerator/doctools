Ext.data.JsonP['Managing_Email_Templates']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Managing Email Templates</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-37548619\" class=\"content\">\n                        <h1>Managing Email Templates</h1>\n    <p>The Email Templates screen lets you create and edit plain text and HTML email templates. The email template&apos;s subject and body can contain  <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-placeholder\">placeholder values</a>  that are dynamically replaced with values you specify when sending the email using the Mobile Backend Services (MBS) <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Emails-method-email_from_template\">email_from_template</a>  REST API, <a class=\"external-link external-link\" href=\"#!/api/Titanium.Cloud.Emails-method-send\">Titanium.Cloud.Emails.send()</a> method or equivalent native <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/ios/Classes/APSEmails.html#//api/name/send:withBlock:\" target=\"_blank\">iOS</a> or <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/android/com/appcelerator/aps/APSEmails.html\" target=\"_blank\">Android</a> method. The email can be sent as plain text, HTML, or multi-part using these methods.    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-Creatinganemailtemplate\">Creating an email template</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-Sendingemailbasedonatemplate\">Sending email based on a template </a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-Usingplaceholderfields\">Using placeholder fields</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-37548619_ManagingEmailTemplates-Creatinganemailtemplate\">\n        <h2 class=\"heading \"><span>Creating an email template</span></h2>\n    <p>An email template specifies the email subject line and body, which may be HTML or plain-text. You specify the template name when calling <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Emails-method-email_from_template\">email_from_template</a>, the recipients, and values for any <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-placeholder\">placeholder values</a>.    </p>\n    <p><strong class=\" \">To create an email template</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>    <span style=\"color: #484848;\">\nIn Dashboard, select the Mobile Backend Services datasource to create the email template for.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nSelect <strong class=\" \">Manage Data</strong>, then click <strong class=\" \">Email Templates</strong>.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nClick <strong class=\" \">Create Email Template</strong>.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nClick the <strong class=\" \">Code </strong>tab, and provide values for the following fields:    </span>\n    </p>\n<ol class=\" \"><li class=\" \">    <p><strong class=\" \">Name</strong>     <span style=\"color: #484848;\">\n &#x2013; Name of the email template. You will specify this name when <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates\">sending</a> the email.    </span>\n    </p>\n</li><li class=\" \">    <p><strong class=\" \">Subject</strong> &#x2013; The email&apos;s subject. The subject can contain <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-placeholder\">placeholder values</a> in double curly brackets.    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\n <strong class=\" \">Body (HTML)</strong> &#x2013; The email&apos;s HTML-formatted body text. The body can contain <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-placeholder\">placeholder values</a> in double curly brackets.    </span>\n    </p>\n</li><li class=\" \">    <p>    <span style=\"color: #484848;\">\n <strong class=\" \">Body (Plain Text)</strong> &#x2013; The emails&apos;s plain text-formatted body text.     <span style=\"color: #484848;\">\nThe body can contain     </span>\n <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-placeholder\">placeholder values</a>     <span style=\"color: #484848;\">\n in double curly brackets.    </span>\n     </span>\n    </p>\n</li></ol></li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nClick     </span>\n <strong class=\" \">Preview</strong>  to view a rendered version of the HTML body text.    </p>\n    <img src=\"images/download/attachments/37548619/email_template.png\" alt=\"images/download/attachments/37548619/email_template.png\" class=\"confluence-embedded-image\">\n        <p>    </p>\n</img></li><li class=\" \">    <p>    <span style=\"color: #484848;\">\nClick <strong class=\" \">Save Changes</strong>.    </span>\n    </p>\n</li></ol>    <p>    <span style=\"color: #484848;\">\nBelow is the sample HTML used in the above screenshot:    </span>\n    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;!DOCTYPE html&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;html lang=</code><code class=\"string\">&quot;en&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;head&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;meta charset=</code><code class=\"string\">&quot;utf-8&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;title&gt;Email Template&lt;/title&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;style&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t    div#box {</code></div>\n<div class=\"line\"><code class=\"plain\">    \t    background: #f5f5f5;</code></div>\n<div class=\"line\"><code class=\"plain\">        \twidth: 400px;</code></div>\n<div class=\"line\"><code class=\"plain\">\t        height: 200px;</code></div>\n<div class=\"line\"><code class=\"plain\">    \t    padding: 10px;</code></div>\n<div class=\"line\"><code class=\"plain\">        \tborder-radius: 10px;</code></div>\n<div class=\"line\"><code class=\"plain\">\t        box-shadow: </code><code class=\"value\">0</code><code class=\"plain\"> </code><code class=\"value\">0</code><code class=\"plain\"> 4px rgba(</code><code class=\"value\">0</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">, .</code><code class=\"value\">5</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    \t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t    span {</code></div>\n<div class=\"line\"><code class=\"plain\">    \t    font: 16px/20px Arial, sans-serif;</code></div>\n<div class=\"line\"><code class=\"plain\">        \tcolor: #1c94c4;</code></div>\n<div class=\"line\"><code class=\"plain\">\t    }</code></div>\n<div class=\"line\"><code class=\"plain\">    \tp {</code></div>\n<div class=\"line\"><code class=\"plain\">        \tfont: 14px/20px Arial, sans-serif;</code></div>\n<div class=\"line\"><code class=\"plain\">\t        color: #</code><code class=\"value\">666</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    \t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t    p.foot {</code></div>\n<div class=\"line\"><code class=\"plain\">    \t    font: 14px/20px Arial, sans-serif;</code></div>\n<div class=\"line\"><code class=\"plain\">        \tcolor: #</code><code class=\"value\">666</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t        text-align: right;</code></div>\n<div class=\"line\"><code class=\"plain\">    \t    margin: </code><code class=\"value\">0</code><code class=\"plain\"> 50px </code><code class=\"value\">0</code><code class=\"plain\"> </code><code class=\"value\">0</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t    }</code></div>\n<div class=\"line\"><code class=\"plain\">    \tspan.green {</code></div>\n<div class=\"line\"><code class=\"plain\">        \tfont: 14px/20px Arial, sans-serif;</code></div>\n<div class=\"line\"><code class=\"plain\">\t        color: #9C9;</code></div>\n<div class=\"line\"><code class=\"plain\">    \t}</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/style&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;body&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;div id=</code><code class=\"string\">&quot;box&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;span&gt;Dear {{first_name}},&lt;/span&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;p&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                Welcome to Appcelerator Cloud Services! Build your mobile app without writing any server code.</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\tUse our REST API and we&apos;ll take care of the rest.</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/p&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;p </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;foot&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                thanks,</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;br /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;span </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;green&quot;</code><code class=\"plain\">&gt;The Appcelerator Cloud Services Team&lt;/span&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/p&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/div&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/body&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/html&gt;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37548619_ManagingEmailTemplates-Sendingemailbasedonatemplate\">\n        <h2 class=\"heading \"><span>Sending email based on a template</span></h2>\n    <p>    <span id=\"src-37548619_ManagingEmailTemplates-send\"><a class=\"confluence-anchor-link\" name=\"src-37548619_ManagingEmailTemplates-send\"/></span>\nTo send an email based on a template, call the <tt class=\" \">email_from_template</tt> MBS method from your own application. For example, the following code example uses the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Cloud.Emails-method-send\">Titianium.Cloud.Emails.send()</a> method to send an email based on the &apos;welcome_template&apos; to a user.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Cloud.Emails.send({</code></div>\n<div class=\"line\"><code class=\"plain\">    template: </code><code class=\"string\">&apos;welcome_template&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    recipients: </code><code class=\"string\">&apos;nobody@appcelerator.com&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Success&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Error:\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-37548619_ManagingEmailTemplates-Usingplaceholderfields\">\n        <h2 class=\"heading \"><span>Using placeholder fields</span></h2>\n    <p>    <span id=\"src-37548619_ManagingEmailTemplates-placeholder\"><a class=\"confluence-anchor-link\" name=\"src-37548619_ManagingEmailTemplates-placeholder\"/></span>\nThe template&apos;s subject and body can contain placeholder fields delineated by double curly brackets (<tt class=\" \">{{}}</tt>). When <a class=\"document-link \" href=\"#!/guide/Managing_Email_Templates-section-src-37548619_ManagingEmailTemplates-se\">sending an email</a>, you include a parameter for each placeholder field that specifies the value to insert. For example, suppose that your email template&apos;s subject field contains <strong class=\" \">Hi {{first_name}}!</strong>. When sending the email you would include a parameter named <tt class=\" \">first_name</tt>, as shown below:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">curl -F </code><code class=\"string\">&quot;recipients=joe@company.com&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;template=welcome&quot;</code><code class=\"plain\"> -F </code><code class=\"string\">&quot;first_name=Joe&quot;</code><code class=\"plain\"> https:</code><code class=\"comments\">//api.cloud.appcelerator.com/v1/custom_mailer/email_from_template.json?key=&lt;YOUR APP APP KEY&gt;</code></div>\n</div>\n    </div>\n    <p>In a Titanium application, you would simply add the placeholder field as another parameter to the <tt class=\" \">send()</tt> method:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">Cloud.Emails.send({</code></div>\n<div class=\"line\"><code class=\"plain\">    template: </code><code class=\"string\">&apos;welcome_template&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    recipients: </code><code class=\"string\">&apos;jim@appcelerator.com&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfirst_name: </code><code class=\"string\">&apos;Jim&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}, function (e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.success) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Success&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">&apos;Error:\\n&apos;</code><code class=\"plain\"> +</code></div>\n<div class=\"line\"><code class=\"plain\">            ((e.error &amp;&amp; e.message) || JSON.stringify(e)));</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=37548619\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Managing Email Templates"});