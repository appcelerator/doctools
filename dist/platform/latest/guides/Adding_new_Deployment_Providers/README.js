Ext.data.JsonP['Adding_new_Deployment_Providers']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Adding new Deployment Providers</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083180\" class=\"content\">\n                        <h1>Adding new Deployment Providers</h1>\n    <p>There are two relevant extension points that related to deployment, both living on the com.aptana.deploy namespace (though one resides in that plugin and the other in the com.aptana.deploy.epl fragment due to licensing issues).    </p>\n    <div class=\"section section-2 \" id=\"src-30083180_AddingnewDeploymentProviders-DeployWizard\">\n        <h2 class=\"heading \"><span>Deploy Wizard</span></h2>\n    <p>The <i class=\" \">com.aptana.deploy.deployWizards</i> extension point allows plugins to register a deployment wizard which will step a user through configuring a project to be deployed using the chosen method. If this uses a 3rd-party service like Heroku or Engine Yard this involves stepping the user through registering an account, installing necessary gems, logging into the account (and saving their credentials in secure storage) and then finally running any initial setup for the project and storing this deployment method as the chosen one for this project (by setting a persistent property on the project pointing at the relevant <strong class=\" \">IDeployProvider</strong>&apos;s id). There are numerous examples available for capistrano, FTP, engine yard, heroku. This extension point is meant to be very similar to registering a <i class=\" \">newWizard</i>, <i class=\" \">importWizard</i> or <i class=\" \">exportWizard</i>. Please keep in mind that this is for deploying an existing project, not for generating a new project at the same time, ala Red Hat. To do that, you should provide a <i class=\" \">newWizard</i> extension.    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3/blob/development/plugins/com.aptana.deploy.epl/schema/deployWizards.exsd\" target=\"_blank\">Extension Point</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3/blob/development/plugins/com.aptana.deploy.heroku/src/com/aptana/deploy/heroku/ui/wizard/HerokuDeployWizard.java\" target=\"_blank\">Heroku Implementation</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-30083180_AddingnewDeploymentProviders-DeployProvider\">\n        <h2 class=\"heading \"><span>Deploy Provider</span></h2>\n    <p>The <i class=\" \">com.aptana.deploy.deployProviders</i> extension point allows plugins to register an implementation of an <strong class=\" \">IDeploymentProvider</strong>. The two methods we&apos;re concerned about are <strong class=\" \">deploy</strong> and <strong class=\" \">handles</strong>. The <strong class=\" \">deploy</strong> method is the meat of the provider. It gets passed an IProject that we&apos;re deploying and an IProgressMonitor to report progress. This method is typically going to be called wrapped in a Job. This method simply takes a project that has been configured for this deployment type and runs the repeated deployment actions (for example, for Heroku it will run &apos;git push heroku master&apos;, for FTP it will run a sync operation).    </p>\n    <p>The <strong class=\" \">handles</strong> method is actually used as a fallback mechanism for choosing a deploy provider to implicitly use when no explicit provider was set up via a <i class=\" \">deployWizard</i>. This can happen for projects that may have been configured to use a provider outside the IDE, or prior to being imported. Typically we&apos;d check for some files or git state to determine For Heroku, we check that the project has a git repo and has a remote named &apos;heroku&apos; or has a remote with a heroku.com URI. For Capistrano we check for a config/deploy.rb file. For EngineYard we check for an ey.yml file. For FTP we check if there&apos;s already a single remote connection set up for this project.    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3/blob/development/plugins/com.aptana.deploy/schema/deployProviders.exsd\" target=\"_blank\">Extension Point</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3/blob/development/plugins/com.aptana.deploy/src/com/aptana/deploy/IDeployProvider.java\" target=\"_blank\">Interface</a>    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083180\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Adding new Deployment Providers"});