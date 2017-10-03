Ext.data.JsonP['Flows']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Flows</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-49158398\" class=\"content\">\n                        <h1>Flows</h1>\n    <p>    </p>\n    <p>    <span style=\"color: #000000;\">\nFlows are acyclic directed graphs of operational nodes which are composed of inputs, logic, and outputs. They are used by Endpoints, which require them for their runtime functionality of taking inputs and turning them into responses when an Endpoint is hit. Flows should be written as <tt class=\" \">.json</tt>    </span>\n    <span style=\"color: #000000;\">\n files and located within the    </span>\n    <span style=\"color: #000000;\">\n <tt class=\" \">/flows</tt>    </span>\n    <span style=\"color: #000000;\">\n directory of your app.    </span>\n<br>    <span style=\"color: #000000;\">\nFlows have a runtime context which can be written to and read from by individual nodes. This is how data is passed around in the flow. When running a flow via an endpoint, the data passed to the endpoint will propagate to the flow.    </span>\n    </br></p>\n    <div class=\"section section-2 \" id=\"src-49158398_Flows-Flowcontext\">\n        <h2 class=\"heading \"><span>Flow context</span></h2>\n    <p>    <span style=\"color: #000000;\">\nThe <strong class=\" \">Flow context</strong> is where data is temporarily stored at runtime while a Flow is being executed. This allows Flow Nodes to share information, by reading data from the context before execution using their parameters and writing data to the context after execution using <a class=\"document-link \" href=\"#!/guide/JSONPath\">JSONPath</a> selectors. If a flow is used by an endpoint which has certain parameters defined, these will also be accessible to Nodes from the flow context    </span>\n    <span style=\"color: #000000;\">\n.    </span>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-49158398_Flows-Flowinput\">\n        <h2 class=\"heading \"><span>Flow input</span></h2>\n    <p>    <span style=\"color: #000000;\">\nIf a flow is executed from an endpoint, any parameters defined by the endpoint and correctly passed to the endpoint upon execution will be accessible from the flow context from the JSONPath selector:     </span>\n<tt class=\" \">$.params</tt><br>    <span style=\"color: #000000;\">\nFor example, a header parameter called <tt class=\" \">enabled</tt> would be accessible from     </span>\n<tt class=\" \">$.params.enabled.</tt>    <span style=\"color: #000000;\">\n If a request is made with a parameter which is not defined in the endpoint&#x2019;s swagger, it will     </span>\n    <span style=\"color: #000000;\">\nnot     </span>\n    <span style=\"color: #000000;\">\nbe accessible from the flow.    </span>\n    </br></p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=49158398\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Flows"});