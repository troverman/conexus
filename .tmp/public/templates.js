angular.module('templates-app', ['about/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'member/index.tpl.html', 'messages/index.tpl.html', 'post/index.tpl.html', 'project/index.tpl.html', 'search/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<span class=\"dropdown\" dropdown>\n" +
    "	<a href=\"\" class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "	Click\n" +
    "	</a>\n" +
    "	<ul class=\"dropdown-menu\" dropdown-menu>\n" +
    "	<li> \n" +
    "	<a ng-click=\"action1()\">Action1</a>\n" +
    "	</li>\n" +
    "	<li>\n" +
    "	<a ng-click=\"action2()\">Action2</a>\n" +
    "	</li>\n" +
    "	<li>\n" +
    "	<a ng-click=\"action3()\">Action3</a>\n" +
    "	</li>\n" +
    "	<li>\n" +
    "	<a ng-click=\"action4()\">Action4</a>\n" +
    "	</li>\n" +
    "	<li>\n" +
    "	<a ng-click=\"action5()\">Action5</a>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "\n" +
    "<h1>about</h1>\n" +
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
}]);

angular.module("header/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/index.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"/\">conexus</a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li ng-repeat=\"navItem in navItems\">\n" +
    "                <a href=\"{{navItem.url}}\"><i class=\"{{navItem.cssClass}}\"></i> {{navItem.title}}</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"divider-vertical\"></li>\n" +
    "\n" +
    "            <li ng-if=\"currentUser\" id=\"current-user-dropdown\" class=\"dropdown\">\n" +
    "                <div class=\"btn-group\">\n" +
    "                    <a class=\"btn btn-default btn-sm dropdown-toggle\">\n" +
    "                        <i class=\"fa fa-user\"></i> {{currentUser.email}}    <span class=\"caret\"></span>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"/logout\"><i class=\"fa fa-share\"></i> Logout</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "            \n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<!--<p ng-show=\"!currentUser\"><a href=\"/register/\">Register</a> to post a message!</p>\n" +
    "\n" +
    "<div ng-if=\"currentUser\">\n" +
    "	<p class=\"lead\">welcome {{currentUser.username}}!</p>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div id=\"triangle-area\" style=\"height:400px\">\n" +
    "    <br><br>\n" +
    "    <div style=\"text-align:center\">\n" +
    "        <div style=\"padding:15px;background-color:rgba(0,0,0,0.4);color:white;\">\n" +
    "        <br>\n" +
    "        <p style=\"font-size:48px;color:rgb(240,240,240);text-align:center\">create</p>\n" +
    "        <hr>\n" +
    "        <p style=\"font-size:24px;color:rgb(230,230,230);text-align:center\">a transparent + opensource network</p>\n" +
    "        <br>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br>\n" +
    "\n" +
    "    <div style=\"text-align:center\">\n" +
    "        <div style=\"padding:15px;background-color:rgba(0,0,0,0.4);color:white;display:inline-block;border:1px solid rgb(150,150,150);border-radius:5px;\">\n" +
    "            <div class=\"btn-group\">\n" +
    "                <a href=\"#test\" id=\"testing123\" class=\"scroller\">streams</a>\n" +
    "                <a href=\"/discover/\" id=\"testing123\">projects</a>\n" +
    "                <a href=\"/about/\" id=\"testing123\">events</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <br><br><br>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<p>let's document every piece of information a person puts out and make it social media content that is interactive</p>\n" +
    "\n" +
    "<td><p class=\"lead\" style=\"text-align:left;padding-left:25px;padding-right:25px;\">how can we work together for a common goal?</p></td>\n" +
    "<td><p class=\"lead\" style=\"text-align:left;padding-left:25px;padding-right:25px;\">imagine a 24/7 global hackaton</p></td>\n" +
    "<td><p class=\"lead\" style=\"text-align:left;padding-left:25px;padding-right:25px;\">crowdsourced team building</p></td>\n" +
    "<td><p class=\"lead\" style=\"text-align:left;padding-left:25px;padding-right:25px;\">earn value though working together</p></td>\n" +
    "<td><p class=\"lead\" style=\"text-align:left;padding-left:25px;padding-right:25px;\">when a fire starts to burn, it starts to spread<span style=\"font-size:32px;\" class=\"icon-fire\"></span></p></td>\n" +
    "<br><br>\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "\n" +
    "CONEXUS\n" +
    "\n" +
    "<br><br><br>\n" +
    "\n" +
    "CONNECT, COLLAB, CREATE\n" +
    "\n" +
    "");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<title>conex.us</title>\n" +
    "<style>\n" +
    "\n" +
    "  #header-section{background-color:#445065;height:200px;text-align:center;}\n" +
    "  #header-section img{height:50px;}\n" +
    "  #section1{height:100%;background-color:#687A94;padding-left:15%;padding-right:15%;}\n" +
    "  #footer{background-color:#445065;padding-left:15%;padding-right:15%;min-height:100px;}\n" +
    "  .navbar{margin-bottom:0px;}\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "\n" +
    "<div id=\"header-section\">\n" +
    "  <br>\n" +
    "  <h4><h1>{{member.username}}</h1></h4>\n" +
    "  <img src=\"/images/mikey.jpg\"/>\n" +
    "  <form role=\"form\" ng-submit=\"follow()\">\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">follow</button>\n" +
    "  </form>\n" +
    "  <a href=\"#0\" class=\"cd-read-more\">follow ({{followers.length}})</a>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"section1\">\n" +
    "\n" +
    "  <div ng-repeat=\"follower in followers\">\n" +
    "    {{follower}}\n" +
    "    <br><br><br>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("messages/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("messages/index.tpl.html",
    "<h2>Messages</h2>\n" +
    "{{currentUser}}\n" +
    "<p ng-show=\"!currentUser\"><a href=\"/register\">Register</a> to post a message!</p>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "			<div class=\"form-group\">\n" +
    "			<label for=\"messageTitle\">Your Message</label>\n" +
    "				<input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "				<input type=\"text\" ng-model=\"newMessage.lol\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<h3>All Messages</h3>\n" +
    "		<ul>\n" +
    "\n" +
    "			<li ng-repeat=\"message in messages\">{{message.title}} {{message.lol}}<b>by</b> {{message.user.username}}, <span am-time-ago=\"message.updatedAt\"></span> <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\"><i class=\"fa fa-trash-o\"></i></button></li>\n" +
    "\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/index.tpl.html",
    "<h3>new post</h3>\n" +
    "\n" +
    "<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "  <div class=\"form-group\">\n" +
    "\n" +
    "    <label for=\"postTitle\">Post Title</label>\n" +
    "    <input type=\"text\" ng-model=\"newPost.title\" class=\"form-control\" id=\"postTitle\" ng-disabled=\"!currentUser\">\n" +
    "    <label for=\"postTitle\">Post Content</label>\n" +
    "    <input type=\"text\" ng-model=\"newPost.post_content\" class=\"form-control\" id=\"postContent\" ng-disabled=\"!currentUser\">\n" +
    "    <label for=\"postTitle\">Post URL</label>\n" +
    "    <input type=\"text\" ng-model=\"newPost.url_title\" class=\"form-control\" id=\"postURL\" ng-disabled=\"!currentUser\">\n" +
    "\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">Submit</button>\n" +
    "</form>\n" +
    "\n" +
    "\n" +
    "<pre>form = {{newPost | json}}</pre>\n" +
    "\n" +
    "\n" +
    "<pre>form = {{newVote| json}}</pre>\n" +
    "<div>\n" +
    "  <div ng-repeat=\"post in posts\">\n" +
    "\n" +
    "    <a href=\"/post/{{post.url_title}}\">{{post.title}}</a>\n" +
    "\n" +
    "\n" +
    "    <form role=\"form\" ng-submit=\"createVote(newPostVote, post)\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" ng-model=\"post.vote\" class=\"form-control\" id=\"postVote\" ng-disabled=\"!currentUser\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">Submit</button>\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <b>by</b> {{post.user.username}}, <span am-time-ago=\"post.updatedAt\"></span> \n" +
    "\n" +
    "\n" +
    "    <br><br>\n" +
    "    {{post.post_content}}\n" +
    "\n" +
    "    <br><br>\n" +
    "    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyPost(post)\" ng-show=\"currentUser.id === post.user.id\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"postvote in postvotes\">\n" +
    "\n" +
    "{{postvote.vote}}\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div ng-controller=\"ProjectCtrl\">\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "<h2>Search</h2>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<h3>All Members</h3>\n" +
    "		<ul>\n" +
    "			<li ng-repeat=\"member in members\">\n" +
    "				{{member.title}}\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>");
}]);
