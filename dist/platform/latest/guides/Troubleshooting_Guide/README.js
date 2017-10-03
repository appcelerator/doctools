Ext.data.JsonP['Troubleshooting_Guide']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Troubleshooting Guide</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49153865\" class=\"content\">\n                        <h1>Troubleshooting Guide</h1>\n    <p>This document provides information on troubleshooting Titanium SDK and Studio and information about push notification error messages.    </p>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_Guide-section-src-49153865_TroubleshootingGuide-TitaniumSDKandStudio\">Titanium SDK and Studio</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_Guide-section-src-49153865_TroubleshootingGuide-ErrorenablingCloudserviceforproject\">Error enabling Cloud service for project</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_Guide-section-src-49153865_TroubleshootingGuide-Pushnotificationerrormessages\">Push notification error messages</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_Guide-section-src-49153865_safe-id-VHJvdWJsZXNob290aW5nR3VpZGUtQXBwbGVQdXNoTm90aWZpY2F0aW9uU2VydmVyKEFQTlMpZXJyb3Jz\">Apple Push Notification Server (APNS) errors</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Troubleshooting_Guide-section-src-49153865_safe-id-VHJvdWJsZXNob290aW5nR3VpZGUtR29vZ2xlQ2xvdWRNZXNzYWdpbmcoR0NNKWVycm9ycw\">Google Cloud Messaging (GCM) errors</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"src-49153865_TroubleshootingGuide-TitaniumSDKandStudio\">\n        <h2 class=\"heading \"><span>Titanium SDK and Studio</span></h2>\n    <div class=\"section section-3 \" id=\"src-49153865_TroubleshootingGuide-ErrorenablingCloudserviceforproject\">\n        <h3 class=\"heading \"><span>Error enabling Cloud service for project</span></h3>\n    <p>If you receive a message similar to &quot;Error enabling Cloud service for project&quot; in Studio when trying to enable Cloud services for your project, the Mobile Backend Services (MBS) server may be down or Studio is unable to connect to the MBS server. Try to enable Cloud services later.<br>If you are still receiving this error when trying to enable Cloud services, check to see if your application was created in <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">https://platform.appcelerator.com/</a>.    </br></p>\n    <p>If the application was created, check to see if MBS keys were created for the application. To find your MBS keys, go to <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">https://platform.appcelerator.com/</a>, select your application from the <strong class=\" \">Apps</strong> drop-down list, then click <strong class=\" \">Configuration</strong>. You should see items for <strong class=\" \">App Key</strong>, <strong class=\" \">OAuth Consumer Key</strong> and <strong class=\" \">OAuth Secret</strong>. Click the <strong class=\" \">Show</strong> link to expand these items. Note that you need both the Development and Production version of these items. You can switch between the two by clicking the drop-down box in the top-right corner that displays either <strong class=\" \">Development</strong> or <strong class=\" \">Production</strong>.    </p>\n    <p>If you do <i class=\" \">not</i> have MBS keys, try to enable Cloud services again at a later time.    </p>\n    <p>If you do have MBS keys, manually enter the MBS key information in the <tt class=\" \">tiapp.xml</tt> file. To manually enter this information:    </p>\n<ol class=\" \"><li class=\" \">    <p>Double-click your <tt class=\" \">tiapp.xml</tt> file to open it in the <strong class=\" \">Editor</strong>.    </p>\n</li><li class=\" \">    <p>Click the <strong class=\" \">tiapp.xml</strong> tab in the lower-left corner of the <strong class=\" \">Editor</strong>.    </p>\n</li><li class=\" \">    <p>Insert the following MBS property keys as children of the <tt class=\" \">ti:app</tt> parent tag and replace with the application&apos;s MBS keys found earlier:    </p>\n    <div class=\"tablewrap\">\n        <table>\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td rowspan=\"1\" colspan=\"1\">\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">&lt;?</code><code class=\"keyword\">xml</code><code class=\"plain\"> </code><code class=\"color1\">version</code><code class=\"plain\">=</code><code class=\"string\">&quot;1.0&quot;</code><code class=\"plain\"> </code><code class=\"color1\">encoding</code><code class=\"plain\">=</code><code class=\"string\">&quot;UTF-8&quot;</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;</code><code class=\"keyword\">ti</code><code class=\"plain\">:app </code><code class=\"color1\">xmlns:ti</code><code class=\"plain\">=</code><code class=\"string\">&quot;http://ti.appcelerator.org&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Add these six tags and replace with your application&apos;s ArrowDB keys --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-oauth-secret-development&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;OAUTH_CONSUMER_SECRET_DEV&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-oauth-key-development&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;OAUTH_CONSUMER_KEY_DEV&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-api-key-development&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;APP_KEY_DEV&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-oauth-secret-production&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;OAUTH_CONSUMER_SECRET_PROD&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-oauth-key-production&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;OAUTH_CONSUMER_KEY_PROD&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-api-key-production&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;APP_KEY_PROD&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Add these two tags if you are using Appcelerator Studio --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-authbase-url&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;</code><code class=\"comments\">https://secure-identity.cloud.appcelerator.com</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;</code><code class=\"keyword\">property</code><code class=\"plain\"> </code><code class=\"color1\">name</code><code class=\"plain\">=</code><code class=\"string\">&quot;acs-base-url&quot;</code><code class=\"plain\"> </code><code class=\"color1\">type</code><code class=\"plain\">=</code><code class=\"string\">&quot;string&quot;</code><code class=\"plain\">&gt;</code><code class=\"comments\">https://api.cloud.appcelerator.com</code><code class=\"plain\">&lt;/</code><code class=\"keyword\">property</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    ...</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/</code><code class=\"keyword\">ti</code><code class=\"plain\">:app&gt;</code></div>\n</div>\n    </div>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n</li><li class=\" \">    <p>Save and close your <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>Reopen your <tt class=\" \">tiapp.xml</tt> file. In the <strong class=\" \">Overview</strong> tab, it should show that Cloud services is enabled.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49153865_TroubleshootingGuide-Pushnotificationerrormessages\">\n        <h2 class=\"heading \"><span>Push notification error messages</span></h2>\n    <p>The following table lists error messages reported by the MBS push notification dispatcher, which is responsible for sending push notifications to the Apple Push Notification Service (APNS) and Google Cloud Messaging (GCM).    </p>\n    <div class=\"section section-3 \" id=\"src-49153865_safe-id-VHJvdWJsZXNob290aW5nR3VpZGUtQXBwbGVQdXNoTm90aWZpY2F0aW9uU2VydmVyKEFQTlMpZXJyb3Jz\">\n        <h3 class=\"heading \"><span>Apple Push Notification Server (APNS) errors</span></h3>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Code    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Message    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2001    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>There was a problem loading or reading the keystore.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>There was a problem loading the keystore (APNS certificate). Try <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">re-creating</a> and uploading your keystore.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2002    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>There was a network problem communicating with APNS, such as an SSL or socket error.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Network communication between the MBS push notification dispatcher and APNS was interrupted for some reason.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2003    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate does not exist.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The specified <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">APNS push certificate</a> does not exist.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2004    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate is disabled.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The specified <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">APNS push certificate</a> is disabled.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2005    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Payload is invalid.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The <a class=\"document-link \" href=\"#!/guide/Sending_and_Scheduling_Push_Notifications\">JSON payload</a> is invalid.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2006    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Payload is longer than 2048 bytes.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The JSON payload is longer than 2048 bytes. You need to make the payload smaller.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2007    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate is revoked.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The specified <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">APNS push certificate</a> has been revoked. You need to generate a new certificate.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2008    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate is expired.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The specified <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">APNS push certificate</a> has expired. You need to generate a new certificate.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2009    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Certificate is invalid.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The specified <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">APNS push certificate</a> is invalid. You need to generate a new certificate.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>2010    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Socket is closed.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The socket connection between the Mobile Backend Services push dispatcher and APNS was closed.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-49153865_safe-id-VHJvdWJsZXNob290aW5nR3VpZGUtR29vZ2xlQ2xvdWRNZXNzYWdpbmcoR0NNKWVycm9ycw\">\n        <h3 class=\"heading \"><span>Google Cloud Messaging (GCM) errors</span></h3>\n    <p>Error codes in the 3000-3099 range are <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/com/google/android/gcm/server/Constants.html\" target=\"_blank\">GCM error codes</a>. Error codes above 3100 are for custom MBS push dispatcher errors.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Code    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Message    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3001    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Too many messages were sent to a specific device. Retry sending after a while.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GCM limits the number of push messages that can be sent to a particular device over a period. Increase the period between notifications for this device.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3002    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A particular message could not be sent because the GCM servers encountered an error.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GCM servers encountered an error.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3003    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Bad registration_id. Sender should remove this registration_id.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The GCM client sent a bad <a class=\"external-link external-link\" href=\"https://developer.android.com/google/gcm/client.html#sample-register\" target=\"_blank\">registration ID</a> and should re-register with GCM to obtain a new ID. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3004    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Time-to-live value provided is less than zero, or more than the allowed maximum.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The message&apos;s <a class=\"external-link external-link\" href=\"http://developer.android.com/google/gcm/adv.html#ttl\" target=\"_blank\">Time to Live</a> (expiration date) value is invalid. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3005    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Payload is longer than maximum allowed size of 4096 bytes.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GCM limits push notification payload size to 4096 bytes; try reducing the JSON message size and sending again.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3006    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The sender_id contained in the registration_id does not match the sender_id used to register with the GCM servers.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The <a class=\"external-link external-link\" href=\"https://developer.android.com/google/gcm/client.html\" target=\"_blank\">GCM client</a> did not use the proper sender_id. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3007    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Collapse key is required. Include collapse key in the request.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>If you are using a custom GCM client you need to include a <a class=\"external-link external-link\" href=\"http://developer.android.com/google/gcm/adv.html\" target=\"_blank\">collapse key</a> in the request. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3008    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The request was missing a registration_id; registration_id is required with every request.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The GCM client did not include a <a class=\"external-link external-link\" href=\"https://developer.android.com/google/gcm/client.html#sample-register\" target=\"_blank\">registration ID</a> in its request. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3009    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The user has uninstalled the application or turned off notifications. Sender should stop sending messages to this device and delete the registration_id. The client needs to re-register with the GCM servers to receive notifications again.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3010    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Too many messages sent by the sender. Retry after a while.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GCM limits the number of push notifications that can be sent by a particular sender over a given period. Increase the period between push notification send requests.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3011    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>A particular message could not be sent because the GCM servers were not available.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The GCM server was not available for an unknown reason. Try again later.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3101    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>No result retrieved from GCM Server.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The GCM server did not return a response from the push notification request.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3102    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>gcm_apiKey is null.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Make sure you&apos;ve <a class=\"document-link \" href=\"#!/guide/Configuring_push_services\">configured Mobile Backend Services push notifications</a> with your API key.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3103    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>RegistrationId(s) is null or empty.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The GCM client provided a null or empty <a class=\"external-link external-link\" href=\"https://developer.android.com/google/gcm/client.html#sample-register\" target=\"_blank\">registration ID</a>. This error is uncommon if you are using the <a class=\"external-link external-link\" href=\"#!/api/Modules.CloudPush\">Modules.CloudPush</a> module.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3104    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>GCM internal error.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>An internal error occurred with GCM. Check GCM status.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>3105    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Message could not be sent, or there was a JSON parsing error.    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Make sure that the notification <a class=\"document-link \" href=\"#!/guide/Sending_and_Scheduling_Push_Notifications\">JSON payload</a> is properly formatted.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49153865\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Troubleshooting Guide"});