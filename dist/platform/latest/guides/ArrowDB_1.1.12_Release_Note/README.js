Ext.data.JsonP['ArrowDB_1.1.12_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ArrowDB 1.1.12 - 05 May 2015</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-50725311\" class=\"content\">\n                        <h1>ArrowDB 1.1.12 - 05 May 2015</h1>\n    <div class=\"section section-2 \" id=\"src-50725311_ArrowDB1.1.12ReleaseNote-Newfeatures\">\n        <h2 class=\"heading \"><span>New features</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Add ability to set private file permission on File objects using the <tt class=\" \">s3_acl</tt> field. When creating or updating a File object, set the <tt class=\" \">s3_acl</tt> field to <tt class=\" \">private</tt> to only allow logged-in users to access the file. The retrieved URL will be temporary and expire, by default, after five minutes. You can adjust the expiration time with the query or show method&apos;s <tt class=\" \">expires</tt> field. Previously, all files without an access control list were public.    </p>\n</li><li class=\" \">    <p>Add ability to update the owner of a Place object using the <tt class=\" \">user_id</tt> field. When using the update method, set the <tt class=\" \">user_id</tt> field to the ID of the new owner.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725311_ArrowDB1.1.12ReleaseNote-Bugfix\">\n        <h2 class=\"heading \"><span>Bug fix</span></h2>\n<ul class=\" \"><li class=\" \">    <p>Fixed an issue where email templates were failing to insert passed parameters    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725311\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ArrowDB 1.1.12 Release Note"});