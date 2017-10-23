Ext.data.JsonP['Filesystem_Access_and_Storage']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Filesystem Access and Storage</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\">\n\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\">\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\">\n</link></link></link></meta></meta></head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"src-29004902\" class=\"content\">\n                        <h1>Filesystem Access and Storage</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Storagelocations\">Storage locations</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Fileoperations\">File operations</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Gettingafilehandle\">Getting a file handle</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Reading\">Reading</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Writing\">Writing</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Appending\">Appending</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Creatingandcopying\">Creating and copying</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Renamingfiles\">Renaming files</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Deletingfiles\">Deleting files</a>    </p>\n</li></ul></li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Directories\">Directories</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-CaseSensitivityNote\">Case Sensitivity Note</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-MobileWebNotes\">Mobile Web Notes</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-Hands-onPractice\">Hands-on Practice</a>    </p>\n</li><li class=\" \">    <p><a class=\"document-link \" href=\"#!/guide/Filesystem_Access_and_Storage-section-src-29004902_FilesystemAccessandStorage-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"src-29004902_FilesystemAccessandStorage-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>In this chapter, you will learn how to manipulate files and directories by using the <tt class=\" \">Titanium.Filesystem</tt> module.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004902_FilesystemAccessandStorage-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>Depending on your app&apos;s needs, storing data as a file might make more sense than storing the information in the database or in a property. Got a few details to store? Put them in the app&apos;s properties. Got a lot of structured, related data? That&apos;s what a database is for. But if you&apos;re storing binary data, such as images, we recommend you store it in files. Fortunately, Titanium makes it simple to perform basic filesystem <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Create,_read,_update_and_delete\" target=\"_blank\">CRUD</a> operations.    </p>\n    <p>Let&apos;s start by examining the modules available to you:    </p>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Filesystem\">Titanium.Filesystem</a> is the top level Filesystem module. You use it to create files and directories, and to get handles to existing files (which you&apos;ll then use to read from or write to those files). This module also contains methods that let you determine if storage space is available or if external (SD card) storage is present. With <tt class=\" \">Ti.Filesystem</tt>, you can also obtain handles to the various directories accessible by your application.    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Filesystem.File\">Titanium.Filesystem.File</a> is the file-level object, which includes properties and methods that support common filesystem based operations such as reading, writing, and more.    </p>\n</li></ul>    <p>A few of the ways you might use the filesystem include:    </p>\n<ul class=\" \"><li class=\" \">    <p>Accessing files that ship with your application    </p>\n</li><li class=\" \">    <p>Saving data your app downloads from a web service    </p>\n</li><li class=\" \">    <p>Saving data generated by the user to a file, which you might access later or upload to a service    </p>\n</li><li class=\" \">    <p>And novel uses, such as saving the contents and state of a view as a blob in a file    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-Storagelocations\">\n        <h3 class=\"heading \"><span>Storage locations</span></h3>\n    <p>Before we get into the mechanics of accessing the file system, let&apos;s talk about where on the device you can access files. The following locations are potentially accessible:    </p>\n<ul class=\" \"><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.applicationDataDirectory</strong>: A read/write directory accessible by your app. Place your application-specific files in this directory. The contents of this directory persist until you remove the files or until the user uninstalls the application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.resourcesDirectory</strong>: A read-only directory where your application resources are located; this directory corresponds to the <i class=\" \">project</i>/Resources directory in Studio. The contents of this directory persist until the user uninstalls the application.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.tempDirectory</strong>: A read-write directory where your application can place temporary files. The contents of this directory persist until your application fully closes, at which time the operating system could delete your files.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.externalStorageDirectory</strong>: A read-write directory on the external storage device (SD card) accessible by your app, if such a location exists. Check first with <tt class=\" \">Ti.Filesystem.isExternalStoragePresent()</tt> (which returns a Boolean).  Available only for the Android platform.    </p>\n</li><li class=\" \">    <p><strong class=\" \">Ti.Filesystem.applicationCacheDirectory</strong>: A read-write directory where your application can cache data.  The contents of this directory persist after your application fully closes but at the discretion of the operating system.  For the Android platform, the cache is limited to 25 MB and the files remain for the lifetime of the application.  For the iOS platform, there is no size limit but the data only remains there until iOS cleans the directory if it requires the disk space.    </p>\n</li></ul>    <p>    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <p>The <tt class=\" \">Ti.Filesystem.resourcesDirectory</tt> is read-only on a device, but is read/write in the simulator/emulator.    </p>\n    </div>\n        </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-Fileoperations\">\n        <h3 class=\"heading \"><span>File operations</span></h3>\n    <p>In the upcoming sections, we&apos;ll look at the various ways you can interact with files. We&apos;ll start with the most basic, which is simply getting a reference to the file. Then we&apos;ll move on to reading, writing, and &apos;rithmetic, er, other operations.    </p>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Gettingafilehandle\">\n        <h4 class=\"heading \"><span>Getting a file handle</span></h4>\n    <p>To work with a file, you need a reference to it, otherwise known as a handle. You do this with the Ti.Filesystem.getFile() method, passing to it the path to and name of the file. What you get back is an instance of the Ti.Filesystem.File object. For example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;yourfile.txt&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Reading\">\n        <h4 class=\"heading \"><span>Reading</span></h4>\n    <p>Reading from a file is simple enough: get a handle then call the <tt class=\" \">read()</tt> method. Keep in mind that the <tt class=\" \">read()</tt> method returns the contents of the file as a blob. That&apos;s great if your file contains binary data. But if you&apos;re working with a text file, grab the <tt class=\" \">text</tt> property of that blob to get the plain text contents of the file. Or, you can use the <tt class=\" \">mimeType</tt> property to determine the file&apos;s <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/MIME_type\" target=\"_blank\">MIME type</a>. Like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;yourfile.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var contents = f.read();</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Output as a blob: &apos;</code><code class=\"plain\"> + contents); </code><code class=\"comments\">// useful if contents are binary</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Output text of the file: &apos;</code><code class=\"plain\"> + contents.text);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Output the file\\&apos;s MIME type: &apos;</code><code class=\"plain\"> + contents.mimeType); </code><code class=\"comments\">// e.g. text/plain</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Writing\">\n        <h4 class=\"heading \"><span>Writing</span></h4>\n    <p>Again, writing to files is straightforward. Get a handle, call <tt class=\" \">write()</tt>. Depending on your app, what comes before that call that might be a bit more involved. For example, when saving the state of a JavaScript object, you&apos;ll call <tt class=\" \">JSON.stringify()</tt> first. Later, you can read in the file and rehydrate the object with <tt class=\" \">JSON.parse()</tt>.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, </code><code class=\"string\">&apos;emptyfile.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;The file is no longer empty!&apos;</code><code class=\"plain\">); </code><code class=\"comments\">// write to the file</code></div>\n</div>\n    </div>\n    <p>    <img src=\"images/download/attachments/29004902/Screen_shot_2012-01-04_at_10.33.34_AM.png\" alt=\"images/download/attachments/29004902/Screen_shot_2012-01-04_at_10.33.34_AM.png\" class=\"confluence-embedded-image confluence-content-image-border image-right\" height=\"200\">\n        </img></p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Appending\">\n        <h4 class=\"heading \"><span>Appending</span></h4>\n    <p>There is no distinct (cross-platform) append method, but you can use <tt class=\" \">write()</tt> to append to a file. In your statement, pass <tt class=\" \">true</tt> as the second argument, as shown in the following code. The results of which are shown in the graphic to the right.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var log = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, </code><code class=\"string\">&apos;logfile.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">log.write(</code><code class=\"string\">&apos;My log file\\n&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">for</code><code class=\"plain\"> (var i = </code><code class=\"value\">0</code><code class=\"plain\">; i &lt; </code><code class=\"value\">10</code><code class=\"plain\">; i++) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tlog.write(i + </code><code class=\"string\">&apos;: new log statement\\n&apos;</code><code class=\"plain\">, </code><code class=\"keyword\">true</code><code class=\"plain\">); </code><code class=\"comments\">// Boolean argument causes write() to append</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">alert(log.read().text);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Creatingandcopying\">\n        <h4 class=\"heading \"><span>Creating and copying</span></h4>\n    <p>Titanium makes it pretty easy to create a file. Grab a file handle, then write to the file. If it doesn&apos;t already exist, Titanium will create it for you. There are some specific methods you can use if you want to explicitly create the files. But you don&apos;t need to.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;nonexistent_file.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (f.exists() === </code><code class=\"keyword\">false</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// you don&apos;t need to do this, but you could...</code></div>\n<div class=\"line\"><code class=\"plain\">\tf.createFile();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;writing to the file would be enough to create it&apos;</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    <p>Titanium doesn&apos;t include a specific copy() method. Instead, you copy a file by combining reading and writing, like this:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var oldfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;old.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">var newfile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, </code><code class=\"string\">&apos;new.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">newfile.write(oldfile.read()); </code><code class=\"comments\">// both old.txt and new.txt exist now</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Renamingfiles\">\n        <h4 class=\"heading \"><span>Renaming files</span></h4>\n    <p>Renaming files follows the same format as above: get a handle, do the operation. But, we need to keep in mind how the file handles are, er, handled. After renaming the file, our file handle will still point to the old name. If you expect it to be automatically updated to point to the new file name, you could be in for some unexpected To demonstrate <tt class=\" \">rename()</tt> and this file handle behavior, the following code example previews directories and how you can output a directory listing.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// get a handle to the directory</code></div>\n<div class=\"line\"><code class=\"plain\">var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);</code></div>\n<div class=\"line\"><code class=\"comments\">// create our starting file</code></div>\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;original_name.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// rename the file</code></div>\n<div class=\"line\"><code class=\"plain\">var success = f.rename(</code><code class=\"string\">&apos;fluffernutter.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (success == </code><code class=\"keyword\">true</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info(</code><code class=\"string\">&apos;File has been renamed&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info(</code><code class=\"string\">&apos;File has NOT been renamed&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// output a directory listing</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Dir list after rename = &apos;</code><code class=\"plain\"> + dir.getDirectoryListing());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// But f still points to the old, now non-existent file</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;f.name = &apos;</code><code class=\"plain\"> + f.name); </code><code class=\"comments\">// = &apos;original_name.txt&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;new information&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;f contains: &apos;</code><code class=\"plain\"> + f.read());</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Dir list after writing to f again = &apos;</code><code class=\"plain\"> + dir.getDirectoryListing());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// grab a handle to the copy</code></div>\n<div class=\"line\"><code class=\"plain\">var newf = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;fluffernutter.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;The copy is named &apos;</code><code class=\"plain\"> + newf.name); </code><code class=\"comments\">// = &apos;fluffernutter.txt&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(newf.read()); </code><code class=\"comments\">// = &apos;foo&apos;</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Deletingfiles\">\n        <h4 class=\"heading \"><span>Deleting files</span></h4>\n    <p>We&apos;ll end our discussion of file with a look at deleting files. As before, grab a handle and do the operation. The <tt class=\" \">deleteFile()</tt> returns a Boolean value indicating whether the operation succeed. This means it won&apos;t throw an error if the file doesn&apos;t exist or is read-only. You&apos;ll just get <tt class=\" \">false</tt> back.    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;delete_me.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">); </code><code class=\"comments\">// make sure there&apos;s content there so we&apos;re sure the file exists</code></div>\n<div class=\"line\"><code class=\"comments\">// Before deleting, maybe we could confirm the file exists and is writable</code></div>\n<div class=\"line\"><code class=\"comments\">// but we don&apos;t really need to as deleteFile() would just return false if it failed</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (f.exists() &amp;&amp; f.writeable) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar success = f.deleteFile();</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info((success==</code><code class=\"keyword\">true</code><code class=\"plain\">) ? </code><code class=\"string\">&apos;success&apos;</code><code class=\"plain\"> : </code><code class=\"string\">&apos;fail&apos;</code><code class=\"plain\">); </code><code class=\"comments\">// outputs &apos;success&apos;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n    </div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-Directories\">\n        <h3 class=\"heading \"><span>Directories</span></h3>\n    <p>We looked at how to list the files in a directory in the preceding section on renaming files. In this section, we&apos;ll look at how to create directories, delete directories, and move files into directories. Since the operations are pretty straightforward at this point, we&apos;ll do it all in one example:    </p>\n    <div class=\"confbox programlisting defaultnew syntaxhighlighter scroll-html-formatted-code\">\n                <div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"defaultnew syntaxhighlighter scroll-html-formatted-code\">\n<div class=\"line\"><code class=\"comments\">// create our starting file</code></div>\n<div class=\"line\"><code class=\"plain\">var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;myfile.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">f.write(</code><code class=\"string\">&apos;foo&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// get a handle to the as-yet non-existent directory</code></div>\n<div class=\"line\"><code class=\"plain\">var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,</code><code class=\"string\">&apos;mysubdir&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">dir.createDirectory(); </code><code class=\"comments\">// this creates the directory</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Directory list to start: &apos;</code><code class=\"plain\"> + dir.getDirectoryListing()); </code><code class=\"comments\">// it&apos;s empty</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// let&apos;s move myfile.txt to our directory</code></div>\n<div class=\"line\"><code class=\"plain\">f.move(</code><code class=\"string\">&apos;mysubdir/myfile.txt&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// output a directory listing</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Dir list after move: &apos;</code><code class=\"plain\"> + dir.getDirectoryListing());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"comments\">// delete the directory</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\">(dir.deleteDirectory()==</code><code class=\"keyword\">false</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tTi.API.info(</code><code class=\"string\">&apos;You cannot delete a directory containing files&apos;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\tdir.deleteDirectory(</code><code class=\"keyword\">true</code><code class=\"plain\">); </code><code class=\"comments\">// force a recursive directory, which will delete contents</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// if we try to list the directory, the output is null because the directory doesn&apos;t exist</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(</code><code class=\"string\">&apos;Dir list after deleteDirectory(): &apos;</code><code class=\"plain\"> + dir.getDirectoryListing());</code></div>\n<div class=\"line\">&#xA0;</div>\n<div class=\"line\"><code class=\"plain\">&#xA0;</code></div>\n<div class=\"line\"><code class=\"comments\">// clean the cache directory</code></div>\n<div class=\"line\"><code class=\"plain\">var cacheDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, </code><code class=\"string\">&quot;/&quot;</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">cacheDir.deleteDirectory(</code><code class=\"keyword\">true</code><code class=\"plain\">);</code></div>\n</div>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-CaseSensitivityNote\">\n        <h3 class=\"heading \"><span>Case Sensitivity Note</span></h3>\n    <p>Transitioning from case-insensitive filesystems, such as FAT32, NTFS and HFS+, to case-sensitive filesystems on Android and Mobile Web devices means that a file name referenced in the source code may not match the case of the file on the device&apos;s filesystem. For example, an application may work on the Android emulator but may not work on an Android device, throwing a runtime error or not displaying an image. It is recommended to lowercase all file names. If you change the name of a file, clean your project&apos;s build directory before building the application.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-MobileWebNotes\">\n        <h3 class=\"heading \"><span>Mobile Web Notes</span></h3>\n    <p>Mobile Web supports file storage, though is subject to limitations placed by the device operating systems. In many cases, Mobile Web apps are limited to 5 MB of total storage for local files imposed by the browser framework.    </p>\n    <p>The Resources directory serves as the &quot;web root&quot; folder for a Mobile Web application. Ti.Filesystem can see all files in the Resources directory except the index.html and titanium/filesystem.registry files. If Ti.Filesystem.getFile() is called with a relative path (i.e. &quot;myimage.jpg&quot;), the Resource directory is automatically prepended to the path.    </p>\n    <p>Files with a MIME type of <tt class=\" \">application/*</tt>, <tt class=\" \">image/*</tt>, <tt class=\" \">audio/*</tt>, or <tt class=\" \">video/*</tt> are automatically handled as &quot;binary&quot; where the data internally is stored Base64-encoded.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-Hands-onPractice\">\n        <h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>In this activity, you will update the local data sample app you worked on in the 5.2 and 5.3 tutorials to save the weather icons to the local filesystem.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Resources\">\n        <h4 class=\"heading \"><span>Resources</span></h4>\n    <p>This activity builds upon the app you wrote in sections 5.2 and 5.3. If you don&apos;t have a working version of the localdata app representing the end-state of the 5.3 activity, grab <a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/5.3_localdata.zip\" target=\"_blank\">this starting point code</a>.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"src-29004902_FilesystemAccessandStorage-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>If necessary, download the starting point code, extract the zip, and import the project.    </p>\n</li><li class=\" \">    <p>In app.js, add the filesystem code necessary to create an &apos;icons&apos; directory within the app&apos;s data directory. You should check that the directory exists and create it only if necessary. You&apos;ll store cached icon image files in this directory.    </p>\n</li><li class=\" \">    <p>Add a <tt class=\" \">myapp.getImage()</tt>function that accepts the icon&apos;s name as a string. This function will return either a cached image file from the filesystem or load the image from the remote URL and cache it for future use. Your function should implement this general logic:    </p>\n<ul class=\" \"><li class=\" \">    <p>Add liberal logging statements with <tt class=\" \">Ti.API.info()</tt> so that you can monitor the actions of your function.    </p>\n</li><li class=\" \">    <p>Declare a file handle that points to the icon file in the icons directory.    </p>\n</li><li class=\" \">    <p>If the cached image file exists, return its native path.    </p>\n</li><li class=\" \">    <p>Otherwise, cache the image but return the icon&apos;s absolute URL by implementing this logic:    </p>\n<ul class=\" \"><li class=\" \">    <p>Create an ImageView that loads the image from the remote URL, which would be <a class=\"external-link external-link\" href=\"http://www.worldweather.org/img_cartoon/\" target=\"_blank\">http://www.worldweather.org/img_cartoon/</a> plus the icon&apos;s name.    </p>\n</li><li class=\" \">    <p>Because it will take a few seconds to download that image, use <tt class=\" \">setTimeout()</tt> to wait 5 seconds. Then, write the results of <i class=\" \">imageView</i><tt class=\" \">.toImage()</tt> to the file. A successfully retrieved image will be 35 pixels wide. Any other width indicates an error. Cache only successfully retrieved files.    </p>\n</li><li class=\" \">    <p>To account for the delay in loading and caching, return the icon&apos;s absolute URL so that an image is displayed the first time the app is run.    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>Update the image object in the table so that its <tt class=\" \">image</tt> property is set to the return value of your <tt class=\" \">getImage()</tt> function.    </p>\n</li><li class=\" \">    <p>Build and test the app. Check the logs to confirm that the function loads images from the cache (assuming you logged out appropriate info).    </p>\n</li></ol>    <p>You should notice a momentary pause the first time you run the app. That&apos;s because the icon is being loaded from the remote URL. Close the simulator/emulator, launch it again and open your app. The icons should be displayed immediately because they are read from the filesystem this time. If you&apos;re testing in the iOS simulator, you can view the icons directory by opening this path: <i class=\" \">yourHomeDirectory</i>/Library/Application Support/iPhoneSimulator/<i class=\" \">version</i>/Applications/<i class=\" \">guid</i>/Documents/icons. You can determine that <i class=\" \">guid</i> by logging out the <i class=\" \">iconsfolder</i><tt class=\" \">.nativePath</tt>.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"src-29004902_FilesystemAccessandStorage-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.Filesystem\">API docs: Ti.Filesystem</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.ImageView-method-toImage\">API docs - imageView.toImage()</a>    </p>\n</li><li class=\" \">    <p><a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/5.4_localdata.zip\" target=\"_blank\">Finished code</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"src-29004902_FilesystemAccessandStorage-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>In this chapter, you learned how to manipulate files and directories by using the <tt class=\" \">Titanium.Filesystem</tt> module. You put that knowledge to work by implementing image caching in an app through which remote images are saved to the filesystem for later retrieval.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004902\"><span>Edit</span></a>\n    \n        \n    </div>\n</body>\n</html>\n","title":"Filesystem Access and Storage"});