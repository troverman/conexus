angular.module('templates-app', ['about/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'login/index.tpl.html', 'member/index.tpl.html', 'post/index.tpl.html', 'project/index.tpl.html', 'projects/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div style=\"margin-left:20%;margin-right:20%\">\n" +
    "\n" +
    "	<h2>connect, collab, create</h2>\n" +
    "	<br>\n" +
    "	<p>connect with collaborators, create awesome things</p>\n" +
    "	<p>crowd-owned organizations</p>\n" +
    "	<p>a community of collaborators</p>\n" +
    "	<p>transparent contrubition, equatable representation</p>\n" +
    "\n" +
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
    "\n" +
    "          <a class=\"navbar-brand\" href=\"/\">\n" +
    "            <!--<img style=\"height:20px;float:left\" src=\"/images/loading.gif\"/> -->\n" +
    "            conexus\n" +
    "          </a>\n" +
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
    "<div style=\"height:48px\"></div>\n" +
    "<div ng-show=\"currentUser\">\n" +
    "\n" +
    "	projects\n" +
    "	following\n" +
    "\n" +
    "</div>\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "\n" +
    "	<div style=\"text-align:center;\">\n" +
    "		<h1>connect, collab, create</h1>\n" +
    "\n" +
    "		<p class=\"lead\">a transparent + opensource network</p>\n" +
    "		<p class=\"lead\">working together toward a common goal</p>\n" +
    "\n" +
    "		<img src=\"/images/loading.gif\"/>\n" +
    "\n" +
    "		<br><br><br>\n" +
    "		<p class=\"lead\">governed through transparent community driven directon</p>\n" +
    "		<div style=\"height:100px\"></div>\n" +
    "		<div id=\"project-container\">\n" +
    "			<div ng-repeat=\"project in projects\">\n" +
    "				<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div style=\"height:100px\"></div>\n" +
    "		<div id=\"stream-container\">\n" +
    "			<div ng-repeat=\"project in projects\">\n" +
    "				<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div style=\"height:100px\"></div>\n" +
    "		<div id=\"task-container\">\n" +
    "			<div ng-repeat=\"project in projects\">\n" +
    "				<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div style=\"height:100px\"></div>\n" +
    "		<div id=\"member-container\">\n" +
    "			<div ng-repeat=\"member in members\">\n" +
    "				<a href=\"/member/{{member.username}}\">{{member.username}}</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div style=\"height:150px\"></div>\n" +
    "\n" +
    "		<!--register-->\n" +
    "		<div class=\"row\">\n" +
    "		    <div class=\"col-md-6 col-md-offset-3\">\n" +
    "		        <h3>Sign Up</h3>\n" +
    "		        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local/register\" method=\"post\">\n" +
    "		            <div class=\"form-group\">\n" +
    "		                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "		                <div class=\"col-sm-10\">\n" +
    "		                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "					<div class=\"form-group\">\n" +
    "		                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "		                <div class=\"col-sm-10\">\n" +
    "		                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		            <div class=\"form-group\">\n" +
    "		                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\">First Name</label>\n" +
    "		                <div class=\"col-sm-10\">\n" +
    "		                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		            <div class=\"form-group\">\n" +
    "		                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "		                <div class=\"col-sm-10\">\n" +
    "		                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		            <div class=\"form-group\">\n" +
    "		                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "		                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div style=\"height:100px\"></div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
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
    "<style>\n" +
    "\n" +
    "  #header-section{background-color:#445065;height:20%;text-align:center;}\n" +
    "  #header-section img{height:200px;}\n" +
    "  #section1{height:100%;background-color:#687A94;padding-left:15%;padding-right:15%;}\n" +
    "  #footer{background-color:#445065;padding-left:15%;padding-right:15%;min-height:100px;}\n" +
    "  #timeline-item{background-color:rgb(255,255,255);padding:30px;}\n" +
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
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">follow ({{followers.length}})</button>\n" +
    "  </form>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"section1\">\n" +
    "\n" +
    "\n" +
    "  <a>filter</a>\n" +
    "  <a>time</a>\n" +
    "\n" +
    "\n" +
    "  <div ng-repeat=\"follower in followers\">\n" +
    "    <div id=\"timeline-item\">\n" +
    "      {{follower}}\n" +
    "    </div>\n" +
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
    "<div style=\"margin-left:15%;margin-right:15%;\">\n" +
    "  <h3>new post</h3>\n" +
    "\n" +
    "  <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <label for=\"postTitle\">Post Title</label>\n" +
    "      <input type=\"text\" ng-model=\"newPost.title\" class=\"form-control\" id=\"postTitle\" ng-disabled=\"!currentUser\">\n" +
    "      <label for=\"postTitle\">Post Content</label>\n" +
    "      <input type=\"text\" ng-model=\"newPost.post_content\" class=\"form-control\" id=\"postContent\" ng-disabled=\"!currentUser\">\n" +
    "      <label for=\"postTitle\">Post URL</label>\n" +
    "      <input type=\"text\" ng-model=\"newPost.url_title\" class=\"form-control\" id=\"postURL\" ng-disabled=\"!currentUser\">\n" +
    "\n" +
    "    </div>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">Submit</button>\n" +
    "  </form>\n" +
    "\n" +
    "  <br><br>\n" +
    "\n" +
    "  <div>\n" +
    "    <div ng-repeat=\"post in posts\">\n" +
    "      <a href=\"/post/{{post.url_title}}\">{{post.title}}</a>\n" +
    "      <b>by</b> {{post.user.username}}, <span am-time-ago=\"post.updatedAt\"></span> \n" +
    "      {{post.post_content}}\n" +
    "      <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyPost(post)\" ng-show=\"currentUser.id === post.user.id.toString()\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "\n" +
    "      <form role=\"form\" ng-submit=\"createVote(post, newPostVote)\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" ng-model=\"newPostVote.vote\" class=\"form-control\" id=\"postVote\" ng-disabled=\"!currentUser\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">Submit</button>\n" +
    "      </form>\n" +
    "\n" +
    "      <div ng-repeat=\"postvote in postvotes\">\n" +
    "        <div ng-if=\"postvote.post == post.id\">\n" +
    "          {{postvote.vote}}\n" +
    "          {{postvote.user}}\n" +
    "          <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyVote(postvote)\" ng-show=\"currentUser.id === post.user.id.toString()\"><i class=\"fa fa-trash-o\"></i></button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div ui-view=\"project\">\n" +
    "    <div id=\"sidebar-wrapper\">\n" +
    "        <ul class=\"sidebar-nav\">\n" +
    "            <br>\n" +
    "            <li>\n" +
    "                <a href=\"/\">{{project.title}}</a>\n" +
    "            </li>\n" +
    "            <hr>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">channels</a></li>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">events</a></li>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">members</a></li>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">streams</a></li>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">tasks</a></li>\n" +
    "            <li><a href=\"/project/{{project.title}}/tasks\">tools</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"main-container\">\n" +
    "\n" +
    "        <div id=\"streams\">\n" +
    "            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/i4IXhceMWCU\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/sIbmtDplXA0\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "        </div>\n" +
    "\n" +
    "        <div id=\"tasks\">\n" +
    "            <br><br>\n" +
    "            <p>task</p>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--\n" +
    "        <div id=\"html-edit\">\n" +
    "            <h4>edit html tool</h4>\n" +
    "            <textarea style=\"width:50%\" ng-model=\"post.post_content\" class=\"form-control\"></textarea>\n" +
    "            <hr>\n" +
    "            <div ng-bind-html=\"renderHtml(post.post_content)\"></div>\n" +
    "            <div style=\"height:100px;\"></div>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "    	<div ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "\n" +
    "    		<a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>, <span am-time-ago=\"message.updatedAt\"></span>\n" +
    "            <p style=\"margin-left:15px;\">{{message.title}}</p>\n" +
    "    		<button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\">\n" +
    "    			<i class=\"fa fa-trash-o\"></i>\n" +
    "    		</button>\n" +
    "\n" +
    "    	</div>\n" +
    "\n" +
    "    	<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "    		<div class=\"form-group\">\n" +
    "    			<input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "    		</div>\n" +
    "    		<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "    	</form>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<!--if logged in-->\n" +
    "<div ng-show=\"currentUser\">\n" +
    "  <button class=\"btn btn-primary blog-button\" ng-click=\"newProjectToggle()\">+ project</button>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "<div ng-show=\"currentUser\">\n" +
    "  <div ng-show=\"newProjectToggleVar\">\n" +
    "    <div>\n" +
    "      <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject(newProject)\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" placeholder= \"project title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "          <input type=\"text\" placeholder= \"post url\" ng-model=\"newProject.urlTitle\" class=\"form-control\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<!--/if logged in-->\n" +
    "\n" +
    "<div class=\"project-list-container\">\n" +
    "  <br><br>\n" +
    "  <div class=\"post-container\" ng-repeat=\"project in projects | orderBy:'-createdAt'\">\n" +
    "    <h1 class=\"title\"><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h1>\n" +
    "  </div>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "<div style=\"height:100px;\"></div>");
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
    "<div ng-repeat=\"searchresult in searchResults\">\n" +
    "	<h2>{{searchresult}}</h2>\n" +
    "</div>");
}]);
