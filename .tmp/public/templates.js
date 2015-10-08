angular.module('templates-app', ['about/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'login/index.tpl.html', 'member/index.tpl.html', 'post/index.tpl.html', 'project/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div style=\"margin-left:20%;margin-right:20%\">\n" +
    "	<h1>about</h1>\n" +
    "	<h2>connect, collab, create</h2>\n" +
    "	<br>\n" +
    "	<p>crowd-owned organization</p>\n" +
    "	<p>let's work together</p>\n" +
    "</div>");
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
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<h1>connect, collab, create</h1>\n" +
    "\n" +
    "<p class=\"lead\">a transparent + opensource network</p>\n" +
    "<p class=\"lead\">how can we work together for a common goal?</p>\n" +
    "\n" +
    "<img src=\"/images/loading.gif\"/>\n" +
    "\n" +
    "<div style=\"height:400px;background-color:rgb(255,255,255)\"></div>\n" +
    "\n" +
    "equity. transparent work. so, based on what youve done and what alue you are bringing... determines equity, job position, and 'vote clout'\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<!--login-->\n" +
    "<div class=\"form-wrapper\">\n" +
    "    <div class=\"form-container\">\n" +
    "        <h1>Welcome Back!</h1>\n" +
    "        <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local\" method=\"post\" _lpchecked=\"1\">\n" +
    "            <label for=\"inputUsername3\"></label>\n" +
    "            <input type=\"text\" placeholder=\"Username\" id=\"inputUsername3\" name=\"identifier\">\n" +
    "            <label for=\"inputPassword3\"></label>\n" +
    "            <input type=\"password\" placeholder=\"Password\" id=\"inputPassword3\" name=\"password\">\n" +
    "            <button type=\"submit\" id=\"login-button\">Login</button>\n" +
    "        </form>\n" +
    "        <a href=\"/register\"><h1>register</h1></a>\n" +
    "\n" +
    "    </div>\n" +
    "    <ul class=\"bg-bubbles\">\n" +
    "        <li><img width=\"10px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"20px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"30px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"40px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"50px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"90px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"100px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"120px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"140px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"160px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"10px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"20px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"30px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"40px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"50px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"90px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"100px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"120px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"140px\" src=\"images/conex.png\"></li>\n" +
    "        <li><img width=\"160px\" src=\"images/conex.png\"></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
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
    "<br><br>\n" +
    "\n" +
    "<pre>form = {{newPost | json}}</pre>\n" +
    "\n" +
    "<div>\n" +
    "  <div ng-repeat=\"post in posts\">\n" +
    "    <a href=\"/post/{{post.url_title}}\">{{post.title}}</a>\n" +
    "    <b>by</b> {{post.user.username}}, <span am-time-ago=\"post.updatedAt\"></span> \n" +
    "    {{post.post_content}}\n" +
    "    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyPost(post)\" ng-show=\"currentUser.id === post.user.id.toString()\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "\n" +
    "    <form role=\"form\" ng-submit=\"createVote(post, newPostVote)\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input type=\"text\" ng-model=\"newPostVote.vote\" class=\"form-control\" id=\"postVote\" ng-disabled=\"!currentUser\">\n" +
    "      </div>\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">Submit</button>\n" +
    "    </form>\n" +
    "\n" +
    "    <div ng-repeat=\"postvote in postvotes\">\n" +
    "      <div ng-if=\"postvote.post == post.id\">\n" +
    "        {{postvote.vote}}\n" +
    "        {{postvote.user}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<style>\n" +
    "\n" +
    "/* Toggle Styles */\n" +
    "\n" +
    "#wrapper {\n" +
    "    padding-left: 0;\n" +
    "    -webkit-transition: all 0.5s ease;\n" +
    "    -moz-transition: all 0.5s ease;\n" +
    "    -o-transition: all 0.5s ease;\n" +
    "    transition: all 0.5s ease;\n" +
    "}\n" +
    "\n" +
    "#wrapper.toggled {\n" +
    "    padding-left: 250px;\n" +
    "}\n" +
    "\n" +
    "#sidebar-wrapper {\n" +
    "    z-index: 1000;\n" +
    "    position: fixed;\n" +
    "    left: 250px;\n" +
    "    width: 0;\n" +
    "    height: 100%;\n" +
    "    margin-left: -250px;\n" +
    "    overflow-y: auto;\n" +
    "    background: #000;\n" +
    "    -webkit-transition: all 0.5s ease;\n" +
    "    -moz-transition: all 0.5s ease;\n" +
    "    -o-transition: all 0.5s ease;\n" +
    "    transition: all 0.5s ease;\n" +
    "}\n" +
    "\n" +
    "#wrapper.toggled #sidebar-wrapper {\n" +
    "    width: 250px;\n" +
    "}\n" +
    "\n" +
    "#page-content-wrapper {\n" +
    "    width: 100%;\n" +
    "    position: absolute;\n" +
    "    padding: 15px;\n" +
    "}\n" +
    "\n" +
    "#wrapper.toggled #page-content-wrapper {\n" +
    "    position: absolute;\n" +
    "    margin-right: -250px;\n" +
    "}\n" +
    "\n" +
    "/* Sidebar Styles */\n" +
    "\n" +
    ".sidebar-nav {\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    width: 250px;\n" +
    "    margin: 0;\n" +
    "    padding: 0;\n" +
    "    list-style: none;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav li {\n" +
    "    text-indent: 20px;\n" +
    "    line-height: 40px;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav li a {\n" +
    "    display: block;\n" +
    "    text-decoration: none;\n" +
    "    color: #999999;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav li a:hover {\n" +
    "    text-decoration: none;\n" +
    "    color: #fff;\n" +
    "    background: rgba(255,255,255,0.2);\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav li a:active,\n" +
    ".sidebar-nav li a:focus {\n" +
    "    text-decoration: none;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav > .sidebar-brand {\n" +
    "    height: 65px;\n" +
    "    font-size: 18px;\n" +
    "    line-height: 60px;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav > .sidebar-brand a {\n" +
    "    color: #999999;\n" +
    "}\n" +
    "\n" +
    ".sidebar-nav > .sidebar-brand a:hover {\n" +
    "    color: #fff;\n" +
    "    background: none;\n" +
    "}\n" +
    "\n" +
    "@media(min-width:768px) {\n" +
    "    #wrapper {\n" +
    "        padding-left: 250px;\n" +
    "    }\n" +
    "\n" +
    "    #wrapper.toggled {\n" +
    "        padding-left: 0;\n" +
    "    }\n" +
    "\n" +
    "    #sidebar-wrapper {\n" +
    "        width: 250px;\n" +
    "    }\n" +
    "\n" +
    "    #wrapper.toggled #sidebar-wrapper {\n" +
    "        width: 0;\n" +
    "    }\n" +
    "\n" +
    "    #page-content-wrapper {\n" +
    "        padding: 20px;\n" +
    "        position: relative;\n" +
    "    }\n" +
    "\n" +
    "    #wrapper.toggled #page-content-wrapper {\n" +
    "        position: relative;\n" +
    "        margin-right: 0;\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "#main-container{margin-left:250px;}\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div id=\"sidebar-wrapper\">\n" +
    "    <ul class=\"sidebar-nav\">\n" +
    "        <li>\n" +
    "            <a href=\"#\">member-name</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <a href=\"#\">members</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <a href=\"#\">chatrooms</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <a href=\"#\">tasks</a>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "            <a href=\"#\">events</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"main-container\">\n" +
    "\n" +
    "	<h1>project</h1>\n" +
    "	<div ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "		{{message.title}} - <a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>,\n" +
    "		<span am-time-ago=\"message.updatedAt\"></span>\n" +
    "		<button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\">\n" +
    "			<i class=\"fa fa-trash-o\"></i>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "\n" +
    "	<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "		<div class=\"form-group\">\n" +
    "			<input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "		</div>\n" +
    "		<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "	</form>\n" +
    "\n" +
    "	<p>tasklist</p>\n" +
    "	<hr>\n" +
    "	<p>task</p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<!--register-->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h3>Create an Account</h3>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local/register\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\">First Name</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<a href=\"/login\">already have an account?</a>");
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
