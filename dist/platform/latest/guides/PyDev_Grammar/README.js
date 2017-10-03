Ext.data.JsonP['PyDev_Grammar']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Grammar</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n\t\t<div id=\"banner\" class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n\t\t\t<p>You can now find Appcelerator documentation at <a href=\"https://docs.axway.com/\" target=\"_blank\">https://docs.axway.com/</a>. This site will be taken down in the near future.</p></div>\n        <div class=\"header\"/>\n\n        <div id=\"src-30083083\" class=\"content\">\n                        <h1>PyDev Grammar</h1>\n    <p>This page shows the steps needed for modifying and creating a new grammar.    </p>\n    <div class=\"section section-2 \" id=\"src-30083083_safe-id-UHlEZXZHcmFtbWFyLVdoZXJldG9zdGFydD8\">\n        <h2 class=\"heading \"><span>Where to start?</span></h2>\n    <p>The org.python.pyev.parser plugin contains all the grammars supported by PyDev. JavaCC knowledge is needed to edit those files (most notably the python.jjt_template files -- python.jjt files should not be directly edited).    </p>\n    <p>The most relevant packages are:    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083083_PyDevGrammar-org.python.pydev.parser.jython.ast\">\n        <h2 class=\"heading \"><span>org.python.pydev.parser.jython.ast</span></h2>\n    <p>This package contains the AST (Abstract Syntax Tree) structure used by PyDev. It implements a visitor pattern so that clients can traverse the structure.    </p>\n    <p>All the grammars generate the same AST. This means it must remain compatible with all versions of Python -- that isn&apos;t much a problem as new features arrive, as it&apos;d be just a matter of creating new AST nodes which will only exist on certain versions and not others or simply creating new fields in the nodes.    </p>\n    <p>E.g.: The &apos;with&apos; construct was introduced on Python 2.5, so, there is a &apos;With&apos; AST node but the Python 2.4 grammar doesn&apos;t generate it.    </p>\n    <p>To change this structure, the file to be changed is Python.asdl and adsl_java.py should be run after it&apos;s changed (with the Python.asdl file as a parameter) so that the nodes are regenerated (and the asdl_java.py is also the place to be edited if more features are needed in the nodes structure).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083083_PyDevGrammar-org.python.pydev.parser.grammarXX\">\n        <h2 class=\"heading \"><span>org.python.pydev.parser.grammarXX</span></h2>\n    <p>Each of the grammar packages provides the specific implementation for a grammar. Note that the PythonGrammarXXXXX classes are all automatically generated.    </p>\n    <p>The TreeBuilder class is responsible for actually generating the nodes and there&apos;s a base class to reuse code among many tree builders.    </p>\n    <p>The python.jjt file is also automatically generated from the python.jjt_template file. To generate it, run the make_replace.py file at the org.python.pydev.parser.grammarcommon package.    </p>\n    <p>If you want to generate the files only for this grammar (usually  while testing), the ant build.xml can be used. To regenerate for all the grammars at the same time, use the ant build_all.xml (at the  org.python.pydev.parser.grammarcommon package).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083083_PyDevGrammar-org.python.pydev.parser.grammarcommon\">\n        <h2 class=\"heading \"><span>org.python.pydev.parser.grammarcommon</span></h2>\n    <p>This package contains the classes that are common among all the grammars and provides a make_replace.py to generate the python.jjt files and an ant build_all.xml to regenerate all the PythonGrammar classes (note that ant build_all.xml doesn&apos;t call the make_replace.py)    </p>\n    <p>The make_replace.py can be edited to provide constructs that are common among more than 1 grammar.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083083_PyDevGrammar-Important\">\n        <h2 class=\"heading \"><span>Important</span></h2>\n    <p>One thing essential for code to get into PyDev is that it has to be properly tested. For examples on tests for the grammar see the PyParserXXTest classes under tests/org.python.pydev.parser.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-30083083_PyDevGrammar-Notes\">\n        <h2 class=\"heading \"><span>Notes</span></h2>\n    <p>Note that the grammar is a fork of the Jython structure, but it has a number of changes to support the features needed in PyDev:    </p>\n    <p>Major:    </p>\n<ul class=\" \"><li class=\" \">    <p>Provides a way to get comments and other tokens (specialsBefore and specialsAfter in SimpleNode, containing comments and other syntax tokens such as &apos;if&apos;, &apos;with&apos;, etc... which are needed for a more accurate pretty-printing process)    </p>\n</li><li class=\" \">    <p>Faster (there were lots of optimizations in this area, such as a faster char stream, use of FastStringBuffer instead of StringBuffer, declaration of some classes as final, no creation of intermediary nodes, less memory use using a pool of strings during the parse, etc).    </p>\n</li><li class=\" \">    <p>Structure changed so that multiple grammars can reuse the code that creates the tree structure and the grammar itself    </p>\n</li><li class=\" \">    <p>Error handling is done in the grammar so that an AST can be properly generated even in the face of errors (although it&apos;s not 100% fail-proof).    </p>\n</li></ul>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083083\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"PyDev Grammar"});