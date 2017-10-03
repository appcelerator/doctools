Ext.data.JsonP['Dashboard_Localization']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Dashboard Localization</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083189\" class=\"content\">\n                        <h1>Dashboard Localization</h1>\n    <p>If you want to contribute to Titanium Studio you can create a new Dashboard translation for your native language.    </p>\n    <div class=\"section section-2 \" id=\"src-30083189_DashboardLocalization-Getthesources\">\n        <h2 class=\"heading \"><span>Get the sources</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Fork <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/titanium_studio_dashboard\" target=\"_blank\">https://github.com/appcelerator/titanium_studio_dashboard</a>    </p>\n</li><li class=\" \">    <p>Checkout the forked repository to your computer.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"src-30083189_DashboardLocalization-Determineyourlocalename\">\n        <h2 class=\"heading \"><span>Determine your locale name</span></h2>\n    <p>You will need to determine the correct locale for your language. The locale format is <i class=\" \">languageCode</i>[_<i class=\" \">countryCode</i>]. Language code is <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes\" target=\"_blank\">ISO 639-1 2-letter code</a>. The country code is <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements\" target=\"_blank\">ISO 3166-1 2-letter code</a>    </p>\n    <p>The country part is required only if you want to create translation for country-specific dialect.    </p>\n    <p>Some examples of correct locales:    </p>\n<ul class=\" \"><li class=\" \">    <p>en - English    </p>\n</li><li class=\" \">    <p>en_US - US English (but not British English)    </p>\n</li><li class=\" \">    <p>es_PT - (Spanish in Portugal)    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083189_DashboardLocalization-Createthetranslationfiles\">\n        <h2 class=\"heading \"><span>Create the translation files</span></h2>\n    <p>You will need to translate two files: titanium_studio_dashboard/l10n/en.js and titanium_studio_dashboard/videos/en.json<br>Copy each of them into same dir but name them using you locale. So, for locale &quot;es_PT&quot; you will have titanium_studio_dashboard/l10n/es_PT.js and titanium_studio_dashboard/videos/es_PT.json    </br></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083189_DashboardLocalization-Translating\">\n        <h2 class=\"heading \"><span>Translating</span></h2>\n    <p>Now, you can open newly created file and start translation.    </p>\n<ul class=\" \"><li class=\" \">    <p>Change Javascript function named L10n.instance.localizeDate. It converts the Javascript Date object into human-readable string. Change it to use your language date format and separators.    </p>\n</li><li class=\" \">    <p>Translate message phrases. Dashboard code will substitute %1, %2, etc. with values retrieved from code. Check the current Dashboard to see which message is inserted.    </p>\n</li></ul>    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>Some of the messages contain HTML code - keep it in your translation to preserve proper formatting.    </p>\n    </div>\n        </div>\n    <div class=\"section section-2 \" id=\"src-30083189_DashboardLocalization-Sendyourchanges\">\n        <h2 class=\"heading \"><span>Send your changes</span></h2>\n<ol class=\" \"><li class=\" \">    <p>Commit everything    </p>\n</li><li class=\" \">    <p>Push to github    </p>\n</li><li class=\" \">    <p>Create a pull request to send code to Titanium so we can include it into main repository    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083189\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Dashboard Localization"});