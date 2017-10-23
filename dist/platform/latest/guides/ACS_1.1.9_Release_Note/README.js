Ext.data.JsonP['ACS_1.1.9_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ACS 1.1.9 - 05 March 2015</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-50725317\" class=\"content\">\n                        <h1>ACS 1.1.9 - 05 March 2015</h1>\n    <div class=\"section section-2 \" id=\"src-50725317_safe-id-QUNTMS4xLjlSZWxlYXNlTm90ZS1OZXdmZWF0dXJlcyxpbXByb3ZlbWVudHNhbmRjaGFuZ2Vz\">\n        <h2 class=\"heading \"><span>New features, improvements and changes</span></h2>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">ACL queries</strong> &#x2014; In prior ACS releases, any user could query ACLs created by another user. In applications created with ACS 1.1.9 and later, a user can only query ACLs they create, while an application admin can query ACLs for any arbitrary user by specifying the <tt class=\" \">user_id</tt> field.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Send push notifications to multiple push channels</strong> &#x2014; The Push Notifications API now supports sending push notifications to multiple push channels. Simply comma-separate the list of channels you want to send the notification to. Due to this change, push channel names cannot contain a comma.    </p>\n</li><li class=\" \">    <p><strong class=\" \"><tt class=\" \">user_id</tt> field renamed to <tt class=\" \">sudo_id</tt> for admin operations</strong> &#x2014; The <tt class=\" \">user_id</tt> field, which was used to indicate the user that an application administrator could perform an ACS API call on behalf of, was renamed to the <tt class=\" \">sudo_id</tt> field. For details, see <a class=\"document-link \" href=\"#!/guide/Admin_Access\">Admin Access-Perform ACS API Calls on Behalf of Another User</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725317_ACS1.1.9ReleaseNote-Bugfix\">\n        <h2 class=\"heading \"><span>Bug fix</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Fixed an issue where a delayed job, such as exporting a large data set, would exit silently    </p>\n</li><li class=\" \">    <p>Fixed pagination on push channel queries. Previously, push channel query results would not be correctly paginated    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725317\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ACS 1.1.9 Release Note"});