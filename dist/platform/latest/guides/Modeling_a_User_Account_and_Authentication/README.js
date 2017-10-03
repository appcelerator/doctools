Ext.data.JsonP['Modeling_a_User_Account_and_Authentication']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Modeling a User Account and Authentication</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-41845719\" class=\"content\">\n                        <h1>Modeling a User Account and Authentication</h1>\n    <p>Demonstrates creating a user login and authentication flow using a data model.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n            <p>alloy/test/apps/<strong class=\" \">models/login</strong>    </p>\n    </div>\n        <p>The application initially presents a login form (username is <strong class=\" \">user</strong> and password is <strong class=\" \">password</strong>). Upon successful login, the application presents three tabs: Profile, About Us, and Settings. The first two tabs display information about the user persisted to a SQL database. The Settings tab lets the user change their email address, and set the application&apos;s background color and image.    </p>\n    <p>    <img src=\"images/download/attachments/41845719/screenshot.png\" alt=\"images/download/attachments/41845719/screenshot.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"200\">\n    <img src=\"images/download/attachments/41845719/screenshot2.png\" alt=\"images/download/attachments/41845719/screenshot2.png\" class=\"confluence-embedded-image\" width=\"200\">\n    </img></img></p>\n    <p>The main index.js view-controller uses the <a class=\"external-link external-link\" href=\"#!/api/Alloy-method-createController\">Alloy.createController()</a> method to conditionally display the app/views/login.xml or app/views/home.xml view depending on whether the model&apos;s <tt class=\" \">validateAuth()</tt> method returns &quot;true&quot; or &quot;false&quot;.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/controllers/index.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/controllers/index.js\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (OS_IOS) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// If the user is already logged in, show the home view. If</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// the user is not yet login, show the login view.</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(Alloy.Models.user.validateAuth() ? </code><code class=\"string\">&apos;home&apos;</code><code class=\"plain\"> : </code><code class=\"string\">&apos;login&apos;</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    $.index.open();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>The sample&apos;s UI was designed for iOS devices only, but can easily be adapted to Android or other platforms.    </p>\n    </div>\n        <p>The home.xml view defines a TabGroup with the three tabs, &quot;Profile&quot;, &quot;About Us&quot; and &quot;Settings&quot;. Each tab contains UI elements that are bound to the user model data &#x2013; for example, <tt class=\" \">&lt;Label text=&quot;{user.realname}&quot; top=&quot;10&quot;/&gt;</tt> or <tt class=\" \">&lt;Window title=&quot;Settings&quot; barColor=&quot;{user.themeBGColor}&quot;&gt;</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/home.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/home.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;Profile&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;Profile&quot;</code><code class=\"plain\"> barColor=</code><code class=\"string\">&quot;{user.themeBGColor}&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;RightNavButton&gt;&lt;Button </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\">/&gt;&lt;/RightNavButton&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label text=</code><code class=\"string\">&quot;{user.realname}&quot;</code><code class=\"plain\"> top=</code><code class=\"string\">&quot;10&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label text=</code><code class=\"string\">&quot;{user.email}&quot;</code><code class=\"plain\"> top=</code><code class=\"string\">&quot;40&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ImageView width=</code><code class=\"string\">&quot;100%&quot;</code><code class=\"plain\"> image=</code><code class=\"string\">&quot;{user.themeImage}&quot;</code><code class=\"plain\"> bottom=</code><code class=\"string\">&quot;0&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;About Us&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;About Us&quot;</code><code class=\"plain\"> barColor=</code><code class=\"string\">&quot;{user.themeBGColor}&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- &lt;RightNavButton&gt;&lt;Button </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\">/&gt;&lt;/RightNavButton&gt; --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;WebView url=</code><code class=\"string\">&quot;http://en.wikipedia.org/wiki/Arrested_Development_(TV_series)&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Tab title=</code><code class=\"string\">&quot;Settings&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Window title=</code><code class=\"string\">&quot;Settings&quot;</code><code class=\"plain\"> barColor=</code><code class=\"string\">&quot;{user.themeBGColor}&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;!-- &lt;RightNavButton&gt;&lt;Button </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;logout&quot;</code><code class=\"plain\">/&gt;&lt;/RightNavButton&gt; --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TableView id=</code><code class=\"string\">&quot;themes&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;setTheme&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewSection headerTitle=</code><code class=\"string\">&quot;Email&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                            &lt;TextField id=</code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\"> value=</code><code class=\"string\">&quot;{user.email}&quot;</code><code class=\"plain\"> onBlur=</code><code class=\"string\">&quot;setEmail&quot;</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;/TableViewRow&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;TableViewSection headerTitle=</code><code class=\"string\">&quot;Themes&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;Default&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;theme0&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;Banana Stand&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;theme1&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                        &lt;TableViewRow title=</code><code class=\"string\">&quot;Never-Nude Blue Man&quot;</code><code class=\"plain\"> id=</code><code class=\"string\">&quot;theme2&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;/TableViewSection&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Tab&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/TabGroup&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/views/login.xml</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/views/login.xml\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">&quot;container&quot;</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ImageView id=</code><code class=\"string\">&quot;logo&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TextField id=</code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\"> onReturn=</code><code class=\"string\">&quot;focusPassword&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;TextField id=</code><code class=\"string\">&quot;password&quot;</code><code class=\"plain\"> onReturn=</code><code class=\"string\">&quot;login&quot;</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Button id=</code><code class=\"string\">&quot;loginButton&quot;</code><code class=\"plain\"> onClick=</code><code class=\"string\">&quot;login&quot;</code><code class=\"plain\">&gt;Login&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Label id=</code><code class=\"string\">&quot;motto&quot;</code><code class=\"plain\">&gt;</code><code class=\"string\">&quot;There&apos;s always money in the banana stand.&quot;</code><code class=\"plain\">&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n    </div>\n    <p>The user.js model file defines the data schema used to represent the <tt class=\" \">user</tt> model, and defines model fields for the username, email and theme. These fields are bound to UI elements in the home.xml view. The <tt class=\" \">user</tt> model is also extended with custom functions that are used to log the user in and out, and to validate the user&apos;s session (the function used to determine what view to display initially).    </p>\n    <p>The model&apos;s <tt class=\" \">transform()</tt> function appends the <tt class=\" \">themeBGColor</tt> and <tt class=\" \">themeColor</tt> properties to the model data before it&apos;s sent to the view for rendering, based on the value of the <tt class=\" \">theme</tt> model property.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <p>For purposes of demonstration, the authentication key, username and password are hard-coded into the application.    </p>\n    </div>\n        <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                    <div class=\"title\">app/models/user.js</div>\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\" data-title=\"app/models/user.js\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> moment = require(</code><code class=\"string\">&apos;alloy/moment&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> USERNAME = </code><code class=\"string\">&apos;user&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    PASSWORD = </code><code class=\"string\">&apos;password&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    AUTHKEY = </code><code class=\"string\">&apos;somelongauthkeyforvalidation&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">\tconfig: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"string\">&quot;columns&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;username&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;text primary key&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;realname&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;text&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;email&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;text&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;loggedIn&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;integer&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;loggedInSince&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;text&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;authKey&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;text&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;theme&quot;</code><code class=\"plain\">:</code><code class=\"string\">&quot;integer&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"string\">&quot;adapter&quot;</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;type&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;sql&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">&quot;collection_name&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;user&quot;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">&quot;idAttribute&quot;</code><code class=\"plain\">: </code><code class=\"string\">&quot;username&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t},</code></div>\n<div class=\"line\"><code class=\"plain\">\textendModel : </code><code class=\"keyword\">function</code><code class=\"plain\">(Model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        _.extend(Model.prototype, {</code></div>\n<div class=\"line\"><code class=\"plain\">            login: </code><code class=\"keyword\">function</code><code class=\"plain\">(username, password) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t</code><code class=\"comments\">// Fake login used for demonstration. Don&apos;t do this.</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">if</code><code class=\"plain\"> (username === USERNAME &amp;&amp; password === PASSWORD) {</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">this</code><code class=\"plain\">.set({</code></div>\n<div class=\"line\"><code class=\"plain\">                        loggedIn: 1,</code></div>\n<div class=\"line\"><code class=\"plain\">                        loggedInSince: moment().format(</code><code class=\"string\">&apos;YYYY-MM-DD HH:mm:ss.SSS&apos;</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">                        authKey: AUTHKEY</code></div>\n<div class=\"line\"><code class=\"plain\">                    });</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">this</code><code class=\"plain\">.save();</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                }</code></div>\n<div class=\"line\"><code class=\"plain\">            },</code></div>\n<div class=\"line\"><code class=\"plain\">            logout: </code><code class=\"keyword\">function</code><code class=\"plain\">() {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">this</code><code class=\"plain\">.set({</code></div>\n<div class=\"line\"><code class=\"plain\">                    loggedIn: 0,</code></div>\n<div class=\"line\"><code class=\"plain\">                    loggedInSince: </code><code class=\"string\">&apos;&apos;</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">                    authKey: </code><code class=\"string\">&apos;&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">                });</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">this</code><code class=\"plain\">.save();</code></div>\n<div class=\"line\"><code class=\"plain\">            },</code></div>\n<div class=\"line\"><code class=\"plain\">            validateAuth: </code><code class=\"keyword\">function</code><code class=\"plain\">() {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">if</code><code class=\"plain\"> (</code><code class=\"keyword\">this</code><code class=\"plain\">.get(</code><code class=\"string\">&apos;loggedIn&apos;</code><code class=\"plain\">) === 1 &amp;&amp; </code><code class=\"keyword\">this</code><code class=\"plain\">.get(</code><code class=\"string\">&apos;authKey&apos;</code><code class=\"plain\">) === AUTHKEY) {</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                } </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                }</code></div>\n<div class=\"line\"><code class=\"plain\">            },</code></div>\n<div class=\"line\"><code class=\"plain\">            transform: </code><code class=\"keyword\">function</code><code class=\"plain\">() {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">var</code><code class=\"plain\"> t = </code><code class=\"keyword\">this</code><code class=\"plain\">.toJSON();</code></div>\n<div class=\"line\"><code class=\"plain\">                t.themeBGColor = t.theme === 2 ? </code><code class=\"string\">&apos;#00f&apos;</code><code class=\"plain\"> : t.theme === 1 ? </code><code class=\"string\">&apos;#ff0&apos;</code><code class=\"plain\"> : </code><code class=\"string\">&apos;#963&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                t.themeImage = t.theme === 2 ? </code><code class=\"string\">&apos;/jeans.png&apos;</code><code class=\"plain\"> : t.theme === 1 ? </code><code class=\"string\">&apos;/banana.jpg&apos;</code><code class=\"plain\"> : </code><code class=\"string\">&apos;/family.jpg&apos;</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">return</code><code class=\"plain\"> t;</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> Model;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845719\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Modeling a User Account and Authentication"});