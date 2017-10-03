Ext.data.JsonP['Job_Class']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Job Class</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083248\" class=\"content\">\n                        <h1>Job Class</h1>\n    <p>The Job class contains methods and properties for interacting with the Jobs inside Studio    </p>\n    <div class=\"section section-2 \" id=\"src-30083248_JobClass-Usage\">\n        <h2 class=\"heading \"><span>Usage</span></h2>\n    <p>Examples of how you might interact with methods of the Job class.    </p>\n    <div class=\"section section-3 \" id=\"src-30083248_safe-id-Sm9iQ2xhc3MtU3RhdGljOg\">\n        <h3 class=\"heading \"><span>Static:</span></h3>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">job = Ruble::Job.</code><code class=\"keyword\">new</code><code class=\"plain\">(</code><code class=\"string\">&quot;Speaking...&quot;</code><code class=\"plain\">){ `</code><code class=\"string\">&quot;#{say_command}&quot;</code><code class=\"plain\">` }</code></div>\n<div class=\"line\"><code class=\"plain\">job.schedule</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083248_JobClass-JobMethods\">\n        <h2 class=\"heading \"><span>Job Methods</span></h2>\n    <p>Job objects have the following static method:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Property    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>Description    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p><tt class=\" \">new(name)</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>The name of the job, followed by the items to run    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083248_JobClass-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n    <div class=\"section section-3 \" id=\"src-30083248_JobClass-Performajobandwaitforresultstoreturn\">\n        <h3 class=\"heading \"><span>Perform a job and wait for results to return</span></h3>\n    <p>Here we do something similar to the existing command, but instead, we perform the processing inside a job, and assign the results to a variable. We wait for the job to finish before returning.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">&apos;ruble&apos;</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">&quot;Execute Selection/Line Inserting Results&quot;</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">&quot;CTRL+R&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :insert_as_text</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = [ :selection, :line ] </code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    result = </code><code class=\"string\">&quot;&quot;</code></div>\n<div class=\"line\"><code class=\"plain\">    job = Ruble::Job.</code><code class=\"keyword\">new</code><code class=\"plain\">(</code><code class=\"string\">&quot;Running...&quot;</code><code class=\"plain\">) { result += IO.popen(STDIN.read, </code><code class=\"string\">&apos;r&apos;</code><code class=\"plain\">) {|io| io.read } }</code></div>\n<div class=\"line\"><code class=\"plain\">    job.schedule # start the job</code></div>\n<div class=\"line\"><code class=\"plain\">    job.join # wait </code><code class=\"keyword\">for</code><code class=\"plain\"> it to finish</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> result</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083248\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Job Class"});