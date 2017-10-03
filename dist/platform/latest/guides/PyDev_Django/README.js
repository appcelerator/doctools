Ext.data.JsonP['PyDev_Django']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Django</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083077\" class=\"content\">\n                        <h1>PyDev Django</h1>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-Django\">\n        <h2 class=\"heading \"><span>Django</span></h2>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-Pre-requisites\">\n        <h2 class=\"heading \"><span>Pre-requisites</span></h2>\n    <p>To get started with Django in PyDev, the pre-requisite is that Django is installed in the Python/Jython/IronPython interpreter you want to use (so, &quot;import django&quot; must properly work).    </p>\n    <p>If you don&apos;t have Django installed, follow the steps from <a class=\"external-link external-link\" href=\"http://www.djangoproject.com/\" target=\"_blank\">http://www.djangoproject.com/</a>.    </p>\n    <p>Note that this tutorial won&apos;t teach you Django, only how the Django integration is available in PyDev, so, if you&apos;re not familiar with Django, it&apos;s useful to learn a bit about how it works and then use this help to know how the PyDev Django integration can help you.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-Abitoninternals\">\n        <h2 class=\"heading \"><span>A bit on internals</span></h2>\n    <p>The Django integration in PyDev works through 3 main configurations:    </p>\n    <p>1. The project must be marked as a Django project inside of PyDev.    </p>\n    <p>2. A &apos;DJANGO_MANAGE_LOCATION&apos; string substitution variable must point to the project-relative location of manage.py.    </p>\n    <p>3. A &apos;DJANGO_SETTINGS_MODULE&apos; string substitution variable must contain the name of the settings module in that project.    </p>\n    <p>And that&apos;s it, with those properly configured, all the Django-related actions should work (and the steps below will explain how those can be configured).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-Creatinganewproject\">\n        <h2 class=\"heading \"><span>Creating a new project</span></h2>\n    <p>Use the new project wizard through <strong class=\" \">Ctrl+N &gt; PyDev Django Project</strong> to create a new Django based project.    </p>\n    <p>    <img src=\"images/pydev.org/images/django/pydev_django_project.png\" alt=\"images/pydev.org/images/django/pydev_django_project.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>That wizard will use <strong class=\" \">django-admin.py startproject</strong> to create the project and will properly set the string substitution variables used inside of PyDev so that <strong class=\" \">DJANGO_MANAGE_LOCATION</strong> points to the created manage.py location and the <strong class=\" \">DJANGO_SETTINGS_MODULE</strong> points to the settings module.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-UsingtheDjangointegrationinanexistingproject\">\n        <h2 class=\"heading \"><span>Using the Django integration in an existing project</span></h2>\n    <p>For an existing project, just right click it and choose &apos;PyDev &gt; Set as Django project&apos;.    </p>\n    <p>    <img src=\"images/pydev.org/images/django/set_as_pydev_django_project.png\" alt=\"images/pydev.org/images/django/set_as_pydev_django_project.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>Note that the <strong class=\" \">DJANGO_MANAGE_LOCATION</strong> and <strong class=\" \">DJANGO_SETTINGS_MODULE</strong> will not be set at this time, but when executing an action that needs it, PyDev will ask about it.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-Djangoactions\">\n        <h2 class=\"heading \"><span>Django actions</span></h2>\n    <p>Django actions can be accessed right clicking a project with the Django configuration and choosing Django &gt; action.    </p>\n    <p>    <img src=\"images/pydev.org/images/django/django_actions.png\" alt=\"images/pydev.org/images/django/django_actions.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>Another option is using (with focus on a PyDev editor):    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">ctrl+2+dj &lt;enter&gt;</strong> to open a dialog with the history of entered actions    </p>\n</li><li class=\" \">    <p><strong class=\" \">ctrl+2+dj action_to_execute &lt;enter&gt;</strong> to already pass the action to be executed (e.g.: ctrl+2+dj help &lt;enter&gt;)    </p>\n</li></ul>    <p>    <img src=\"images/pydev.org/images/django/django_ctrl_2.png\" alt=\"images/pydev.org/images/django/django_ctrl_2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_PyDevDjango-InteractiveshellwithDjango\">\n        <h2 class=\"heading \"><span>Interactive shell with Django</span></h2>\n    <p>Note that the <strong class=\" \">Shell with django environment</strong> action will create a shell properly configured with your settings, providing the default features from the PyDev shell, such as code completion, history, context assistants (ctrl+1), making an execfile of the editor, etc (see: <a class=\"document-link \" href=\"#!/guide/PyDev_Interactive_Console\">Interactive Console</a> for more details).    </p>\n    <p>It can be activated through <strong class=\" \">ctrl+2+dj shell</strong> (if on a PyDev Editor) or right-clicking the project &gt; <strong class=\" \">Django &gt; Shell with django environment</strong>.    </p>\n    <p>    <img src=\"images/pydev.org/images/django/django_shell.png\" alt=\"images/pydev.org/images/django/django_shell.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_safe-id-UHlEZXZEamFuZ28tUnVuL0RlYnVnYXNEamFuZ28\">\n        <h2 class=\"heading \"><span>Run/Debug as Django</span></h2>\n    <p>Run as Django/Debug as Django are available (note that they set the --noreload by default).    </p>\n    <p>    <img src=\"images/pydev.org/images/django/run_as_django.png\" alt=\"images/pydev.org/images/django/run_as_django.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\">\n        </img></p>\n    <p>This will create a default Run configuration, so, you may edit it later through run &gt; run configurations (or debug &gt; debug configurations) if you want to change a parameter.    </p>\n    <p>Note: to know how to rerun the last launch see: Rerun Last Launch on Launching_    </p>\n    <p>Note 2: if the --noreload is not passed, only the parent process will be killed from Eclipse and the others will only be killed when they&apos;d be reloaded (i.e.: on a code-change).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083077_safe-id-UHlEZXZEamFuZ28tUnVuL0RlYnVnYXNEamFuZ293aXRoYXV0b3JlbG9hZA\">\n        <h2 class=\"heading \"><span>Run/Debug as Django with autoreload</span></h2>\n    <p>If you don&apos;t want to se the --noreload flag, please take a look at the <a class=\"document-link \" href=\"#!/guide/PyDev_Remote_Debugger\">Remote Debugger</a> for instructions on how to make the debugging work properly with the auto reload feature.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083077\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Django"});