Ext.data.JsonP['Software_Locations_and_Environment_Variables']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Software Locations and Environment Variables</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004844\" class=\"content\">\n                        <h1>Software Locations and Environment Variables</h1>\n    <div class=\"section section-2 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-Overview\">Overview</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-Configuration\">Configuration</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-macOS\">macOS</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-macOSSoftwareLocations\">macOS Software Locations</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-Windows\">Windows</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-WindowsSoftwareLocations\">Windows Software Locations</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-ConfiguringEnvironmentVariablesonWindows\">Configuring Environment Variables on Windows</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-Ubuntu\">Ubuntu</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-src-29004844_SoftwareLocationsandEnvironmentVariables-UbuntuSoftwareLocations\">Ubuntu Software Locations</a>    </p>\n</li></ul></li></ul></li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>The following will explain where all the software is located on a typical Titanium system and how to configure the associated environment variables for each Operating System.    </p>\n    <div class=\"section section-3 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-Configuration\">\n        <h3 class=\"heading \"><span>Configuration</span></h3>\n    <div class=\"section section-4 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-macOS\">\n        <h4 class=\"heading \"><span>macOS</span></h4>\n    <div class=\"section section-5 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-macOSSoftwareLocations\">\n        <h5 class=\"heading \"><span>macOS Software Locations</span></h5>\n    <p>    </p>\n    <p>The paths shown are the locations on our running systems. As these configurations are tried and tested with Titanium, try to keep yours as similar as possible to this.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Package    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Environment Variable    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Local Path    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Notes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ANDROID_SDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/android-sdk</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/android-sdk/tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Platform Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/android-sdk/platform-tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">adb</tt> (Android Debug Bridge) executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>git    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of git executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>npm    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/local/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of npm executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Oracle JDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Java executables, <tt class=\" \">java</tt> and <tt class=\" \">javac</tt> (automatically symlinked)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>python    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of python executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/Library/Application Support/Titanium</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Mobile and Desktop SDKs (containing <tt class=\" \">mobilesdk</tt>, <tt class=\" \">modules</tt>, <tt class=\" \">runtime</tt> &amp; <tt class=\" \">sdk</tt> directories), automatically managed by Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/Applications/Appcelerator Studio</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Settings    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/.eclipse</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Workspace    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/Documents/Appcelerator_Studio_Workspace</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Titanium projects    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-Windows\">\n        <h4 class=\"heading \"><span>Windows</span></h4>\n    <div class=\"section section-5 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-WindowsSoftwareLocations\">\n        <h5 class=\"heading \"><span>Windows Software Locations</span></h5>\n    <p>    </p>\n    <p>The paths shown are the locations on our running systems. As these configurations are tried and tested with Titanium, try to keep yours as similar as possible to this.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>Paths to these tools and project files should not contain spaces or special characters, such as dollar signs, ampersands, etc.  Some of the development tools do not support having spaces in the path, such as scons if you want to build the Titainum SDK from source.    </p>\n    </div>\n        <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Package    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Environment Variable    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Local Path    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Notes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\android-sdk</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\android-sdk\\tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Platform Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\android-sdk\\platform-tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">adb</tt> (Android Debug Bridge) executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>git    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%\\Git\\bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of git executable (default installation path by Studio)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>npm    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%\\nodejs</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of npm executable (default installation path by Studio)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Oracle JDK (Binaries)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%\\Java\\jdk&lt;version&gt;\\bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Java executables, <tt class=\" \">java</tt> and <tt class=\" \">javac</tt> (default installation path by Studio)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Oracle JDK (Home)    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>JAVA_HOME    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%\\Java\\jdk&lt;version&gt;</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of the JDK (default installation path by Studio)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>python    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\Python27</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of python executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMDATA%\\Titanium</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Mobile and Desktop SDKs (containing <tt class=\" \">mobilesdk</tt>, <tt class=\" \">modules</tt>, <tt class=\" \">runtime</tt> &amp; <tt class=\" \">sdk</tt> directories), automatically managed by Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%USERPROFILE%\\Roaming\\Appcelerator\\Appcelerator Studio</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Settings    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%USERPROFILE%\\.eclipse</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Workspace    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%USERPROFILE%\\Documents\\Appcelerator_Studio_Workspace</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Titanium projects    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>Be aware of the following environment variables that exist by default on Windows 7 systems, which can be used when configuring the environment variables above:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"sectionMacro\">\n                    <colgroup>\n                                    <col width=\"70%\">\n                                    <col width=\"30%\">\n                            </col></col></colgroup>\n        <tbody class=\" \">    <tr class=\"sectionMacroRow\">\n            <td class=\"columnMacro\" rowspan=\"1\" colspan=\"1\">\n        <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Environment Variable    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Value    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Notes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%SystemRoot%</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>C:\\Windows    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\Program Files (x86)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Windows 64-bit systems    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMFILES%</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\Program Files</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Windows 32-bit systems    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%PROGRAMDATA%</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">C:\\ProgramData</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">%USERPROFILE%</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Path to the current user profile    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n            </td>\n                <td class=\"columnMacro\" rowspan=\"1\" colspan=\"1\">\n                </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>Bear in mind the following caveats:    </p>\n<ul class=\" \"><li class=\" \">    <p>All Windows systems must have the following paths <strong class=\" \">at the beginning</strong> of their <tt class=\" \">PATH</tt> environment variable to function properly:    </p>\n<pre class=\"theme: Default; brush: plain; gutter: false \">%SystemRoot%\\system32;%SystemRoot%;%SystemRoot%\\System32\\Wbem;</pre></li><li class=\" \">    <p>Installing Appcelerator Studio to a common system location, such as <tt class=\" \">%PROGRAMFILES%</tt>, is not currently recommended, due to <a class=\"external-link external-link\" href=\"https://bugs.eclipse.org/bugs/show_bug.cgi?id=249133\" target=\"_blank\">Eclipse Bug 249133</a> and the complications it causes with updates.    </p>\n</li></ul>    </div>\n        </div>\n    <div class=\"section section-5 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-ConfiguringEnvironmentVariablesonWindows\">\n        <h5 class=\"heading \"><span>Configuring Environment Variables on Windows</span></h5>\n    <p>Configure system variables using the Control Panel    </p>\n<ul class=\" \"><li class=\" \">    <p>Open the Windows Control Panel and search for &apos;environment&apos;.    </p>\n</li><li class=\" \">    <p>Click <strong class=\" \">Edit the system environment variables</strong>. The <i class=\" \">System Properties</i> dialog appears displaying the <strong class=\" \">Advanced</strong> tab.    </p>\n    <img src=\"images/download/attachments/29004844/WindowsControlPanel.png\" alt=\"images/download/attachments/29004844/WindowsControlPanel.png\" class=\"confluence-embedded-image\">\n    </img></li></ul><ul class=\" \"><li class=\" \">    <p>Click the <strong class=\" \">Environment Variables</strong> button.    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/29004844/preinstallation-screenshot_03.png\" alt=\"images/download/attachments/29004844/preinstallation-screenshot_03.png\" class=\"confluence-embedded-image\">\n        </img></p>\n<ul class=\" \"><li class=\" \">    <p>Use the <strong class=\" \">New</strong> or <strong class=\" \">Edit</strong> buttons at the bottom of the dialog to add or change system variables.    </p>\n</li></ul>    <p>    <img src=\"images/download/attachments/29004844/preinstallation-screenshot_04.png\" alt=\"images/download/attachments/29004844/preinstallation-screenshot_04.png\" class=\"confluence-embedded-image\">\n        </img></p>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-Ubuntu\">\n        <h4 class=\"heading \"><span>Ubuntu</span></h4>\n    <div class=\"section section-5 \" id=\"src-29004844_SoftwareLocationsandEnvironmentVariables-UbuntuSoftwareLocations\">\n        <h5 class=\"heading \"><span>Ubuntu Software Locations</span></h5>\n    <p>    </p>\n    <p>Below is a summary of where Titanium-related components are typically stored and the system variables that should be configured.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>    </p>\n    <p>The paths shown are the locations on our running systems. As these configurations are tried and tested with Titanium, try to keep yours as similar as possible to this.    </p>\n    </div>\n        <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Package    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Environment Variable    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Local Path    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Notes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>ANDROID_SDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/opt/android-sdk-linux_86</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/opt/android-sdk-linux_86/tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">android</tt> (Android SDK Manager) and <tt class=\" \">ddms</tt> (debug tool) executables    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Android Platform Tools    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/opt/android-sdk-linux_86/platform-tools</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of <tt class=\" \">adb</tt> (Android Debug Bridge) executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>git    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of git executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>npm    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/local/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of npm executable    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Oracle JDK    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Java executables, <tt class=\" \">java</tt> and <tt class=\" \">javac</tt> (symlinked using <tt class=\" \">update-alternatives</tt>)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>python    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">/usr/bin</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of python executable (automatically symlinked)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/Titanium_Studio</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Titanium SDK Home    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/.titanium</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Mobile and Desktop SDKs (containing <tt class=\" \">mobilesdk</tt>, <tt class=\" \">modules</tt>, <tt class=\" \">runtime</tt> &amp; <tt class=\" \">sdk</tt> directories), automatically managed by Appcelerator Studio    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Settings    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/.eclipse</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>&#xA0;    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Appcelerator Studio Workspace    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>N/A    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">~/Documents/Appcelerator_Studio_Workspace</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>Location of Titanium projects    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>    </p>\n    <p>    </p>\n    <p>    </p>\n    </div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004844\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Software Locations and Environment Variables"});