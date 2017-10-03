Ext.data.JsonP['ACS_2013_10_June_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>ACS 2013 10 June Release Note</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-50725350\" class=\"content\">\n                        <h1>ACS 2013 10 June Release Note</h1>\n    <div class=\"section section-2 \" id=\"src-50725350_ACS201310JuneReleaseNote-Fixedissuesandenhancements\">\n        <h2 class=\"heading \"><span>Fixed issues and enhancements</span></h2>\n    <p>This update includes the following bug fixes and enhancements:    </p>\n<ul class=\" \"><li class=\" \">    <p>Removed dependency between push notifications, and device and user registrations. Users are no longer required to have an ACS account to receive push notifications.    </p>\n</li><li class=\" \">    <p>Fixed an issue where using special characters cause the query to fail    </p>\n</li><li class=\" \">    <p>Website: Fixed an issue viewing relational field objects. Relational field objects were being displayed as objects and not ID strings.    </p>\n</li><li class=\" \">    <p>Website: Fixed an issue viewing custom objects. Some custom objects could not be viewed in the web interface.    </p>\n</li><li class=\" \">    <p>Website: Fixed an issue with SMTP settings. If a TLS value was specified, it was not properly checked.    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-50725350_ACS201310JuneReleaseNote-Futurebehaviorchanges\">\n        <h2 class=\"heading \"><span>Future behavior changes</span></h2>\n    <p>In a future release, currently scheduled in a few months, the following changes are being made to user sessions and geo query.    </p>\n    <div class=\"section section-3 \" id=\"src-50725350_ACS201310JuneReleaseNote-Applicationusersessionexpiration\">\n        <h3 class=\"heading \"><span>Application user session expiration</span></h3>\n    <p>An application user session never expires today. We are introducing a policy of expiring and removing sessions that have been inactive for six months.    </p>\n    <p>If your application logins a user and saves the <tt class=\" \">session_id</tt>, normally stored in a cookie, every time it makes a REST call to ACS using the same <tt class=\" \">session_id</tt>, the expiry clock is reset and the user gets another six months. As long as the ACS user is active using the same <tt class=\" \">session_id</tt> within six months, there is no impact on your application and currently logged in user. If an application user is completely inactive for six months or more, this user session is removed and any subsequent ACS call that requires user login such as <tt class=\" \">create.json</tt>, <tt class=\" \">update.json</tt> and <tt class=\" \">remove.json</tt> will get a 404 error. We recommend your application to handle an invalid user session error and prompt a login screen to the user to login again.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-50725350_ACS201310JuneReleaseNote-Geoquery\">\n        <h3 class=\"heading \"><span>Geo query</span></h3>\n    <p>ACS currently supports MongoDB&#x2019;s <a class=\"external-link external-link\" href=\"http://docs.mongodb.org/manual/reference/operator/nearSphere/\" target=\"_blank\">$nearSphere</a> geo query. Geo query requires a field to be indexed with a geo index. The ACS fields you can perform <tt class=\" \">$nearSphere</tt> on are <tt class=\" \">lnglat</tt> (pre-defined location data and only available in <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Places\">Places</a> and <a class=\"external-link external-link\" href=\"/arrowdb/latest/#!/api/Places\">Events</a>) and <tt class=\" \">coordinates</tt> (list of custom defined location data and available in all objects). It implies that Places and Events have two geo indexes in the same collection and that prevents us from supporting the <a class=\"external-link external-link\" href=\"http://docs.mongodb.org/manual/reference/command/geoNear/\" target=\"_blank\">$geoNear</a> operation that is more powerful than<tt class=\" \">$nearSphere</tt>. We will consolidate the <tt class=\" \">lnglat</tt> value with the <tt class=\" \">coordinates</tt> values and remove geo index on the <tt class=\" \">lnglat</tt> field.    </p>\n    <p>For Events and Places, even if you never explicitly copied the <tt class=\" \">lnglat</tt> value to <tt class=\" \">coordinates</tt>, <tt class=\" \">lnglat</tt> appears as the first element of <tt class=\" \">coordinates</tt>. Performing <tt class=\" \">$nearSphere</tt> on the <tt class=\" \">coordinates</tt> field returns a match if it matches the <tt class=\" \">lnglat</tt> value. <tt class=\" \">$nearSphere</tt>query on <tt class=\" \">lnglat</tt> or <tt class=\" \">coordinates</tt> continues to work as before.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=50725350\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"ACS 2013 10 June Release Note"});