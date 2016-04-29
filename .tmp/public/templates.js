angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'connect/index.tpl.html', 'footer/index.tpl.html', 'header/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'member/index.tpl.html', 'post/index.tpl.html', 'project/channels.tpl.html', 'project/finance.tpl.html', 'project/home.tpl.html', 'project/index.tpl.html', 'project/members.tpl.html', 'project/streams.tpl.html', 'project/tasks.tpl.html', 'projects/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div style=\"margin-left:20%;margin-right:20%\">\n" +
    "\n" +
    "	<h2>connect, collab, create</h2>\n" +
    "	<br>\n" +
    "	<p>crowd-sourced, crowd-owned, crowd-operated</p>\n" +
    "	<p>connect with collaborators, create awesome things</p>\n" +
    "	<p>crowd-owned organizations</p>\n" +
    "	<p>a community of collaborators</p>\n" +
    "	<p>transparent contrubition, equatable representation</p>\n" +
    "\n" +
    "	<img src=\"/images/loading.gif\">\n" +
    "\n" +
    "</div>\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/index.tpl.html",
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

angular.module("connect/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connect/index.tpl.html",
    "<div style=\"margin-left:20%;margin-right:20%\">\n" +
    "\n" +
    "	<h2>connect</h2>\n" +
    "\n" +
    "	<div ng-repeat=\"user in users\">\n" +
    "		<a href=\"/member/{{user.username}}\">{{user.username}}</a>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	{{date | date:'yyyy'}} <a href=\"/\">conex.us</a>\n" +
    "	<a href=\"/about\">about</a>\n" +
    "	<a href=\"/projects\">projects</a>\n" +
    "	<a href=\"/\">stats</a>\n" +
    "	<a href=\"/\">transparency</a>\n" +
    "</div>");
}]);

angular.module("header/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("header/index.tpl.html",
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "  <div class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"/\" style=\"margin-left:15px\">\n" +
    "          <img style=\"height:25px;margin-top:-3px\" src=\"/images/conexus-white.png\"/>\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "          <li class=\"nav-links\"><a href=\"/about\"></i>About</a></li>\n" +
    "          <li class=\"nav-links\"><a href=\"/connect\">Connect</a></li>\n" +
    "          <li class=\"nav-links\"><a href=\"/projects\">Projects</a></li>\n" +
    "          <form class=\"navbar-form pull-left\" role=\"search\" action=\"/search/\" onSubmit=\" location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "            <div class=\"form-group\">\n" +
    "              <input ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Search\"\n" +
    "                     style=\"margin-top: 5px;border-radius: 5px;color:#101010\">\n" +
    "            </div>\n" +
    "          </form>\n" +
    "          <li class=\"nav-links\" ng-show=\"currentUser\"><a href=\"/account\">Account</a></li>\n" +
    "          <li class=\"nav-links\" ng-show=\"currentUser\"><a href=\"/logout\">Logout</a></li>\n" +
    "          <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "          <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "          <li class=\"divider-vertical\"></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div ng-show=\"currentUser\">\n" +
    "\n" +
    "	projects\n" +
    "	following\n" +
    "\n" +
    "</div>\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "	<div style=\"text-align:center;\">\n" +
    "\n" +
    "		<div class=\"header-area\">\n" +
    "			<h3>crowd-sourced, crowd-owned, crowd-operated</h3>\n" +
    "			<p>watch the world cre8</p>\n" +
    "			<p>participate in crowd-sourced, transparent projects</p>\n" +
    "			<p>collabor8</p>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "		<div class=\"dynamic-data\" style=\"padding-top:100px;padding-bottom:100px;\">\n" +
    "			<input ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\">\n" +
    "			<div ng-repeat=\"searchResult in searchResults\">\n" +
    "				<a href=\"/project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a>\n" +
    "			</div>\n" +
    "			<h4>projects</h4>\n" +
    "			<div id=\"project-container\">\n" +
    "				<div ng-repeat=\"project in projects\">\n" +
    "					<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			\n" +
    "			<!--<div id=\"stream-container\">\n" +
    "				<div ng-repeat=\"project in projects\">\n" +
    "					<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div id=\"task-container\">\n" +
    "				<div ng-repeat=\"project in projects\">\n" +
    "					<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "				</div>\n" +
    "			</div>-->\n" +
    "\n" +
    "			<h4>members</h4>\n" +
    "			<div id=\"member-container\">\n" +
    "				<div ng-repeat=\"member in members\">\n" +
    "					<a href=\"/member/{{member.username}}\">{{member.username}}</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<h4>messages</h4>\n" +
    "			<div id=\"member-container\">\n" +
    "				<div ng-repeat=\"message in messages\">\n" +
    "					<p>{{message.title}}</p>\n" +
    "					<a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>\n" +
    "					<a href=\"/project/{{message.project.urlTitle}}\">{{message.project.title}}</a><hr>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "		<!--register-->\n" +
    "		<div class=\"register-form\">\n" +
    "			<div class=\"row\" style=\"background-color:#D8D8D8\">\n" +
    "			    <div class=\"col-md-6 col-md-offset-3\">\n" +
    "			        <h3>Sign Up</h3>\n" +
    "			        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local/register\" method=\"post\">\n" +
    "			            <div class=\"form-group\">\n" +
    "			                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "			                <div class=\"col-sm-10\">\n" +
    "			                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "						<div class=\"form-group\">\n" +
    "			                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "			                <div class=\"col-sm-10\">\n" +
    "			                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "			            <div class=\"form-group\">\n" +
    "			                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\">First Name</label>\n" +
    "			                <div class=\"col-sm-10\">\n" +
    "			                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "			            <div class=\"form-group\">\n" +
    "			                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "			                <div class=\"col-sm-10\">\n" +
    "			                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "			            <div class=\"form-group\">\n" +
    "			                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "			                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "			        </form>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"height:200px\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\" style=\"max-height:700px\">\n" +
    "    <div class=\"intro-container\">\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"intro-desktop-text\">\n" +
    "          <text style=\"font-size:32px;\" text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"570\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            Connect. Collab. Create.\n" +
    "          </text> \n" +
    "        </symbol>\n" +
    "        <div style=\"text-align:center;\">\n" +
    "          <img style=\"position:absolute;top:35%;bottom:0;left:0;right:0;margin:0 auto;height:100px\" src=\"images/conexus-white.png\">\n" +
    "        </div>         \n" +
    "        <div class=\"intro-shade\"></div>  \n" +
    "      </svg> \n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <video itemscope itemtype=\"VideoObject\"\n" +
    "              class=\"video\" \n" +
    "              src=\"videos/video.mp4\"\n" +
    "              preload=\"auto\" \n" +
    "              autoplay=\"autoplay\" \n" +
    "              loop=\"loop\" \n" +
    "              muted=\"muted\">\n" +
    "          </video>\n" +
    "        </div>\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <rect\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#intro-desktop-mask)\"\n" +
    "            class=\"shape--fill\"/>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "        </svg> \n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
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
    "<div id=\"header-section\">\n" +
    "  <br>\n" +
    "  <img style=\"border-radius:100px; \"src=\"/images/mikey.jpg\"/>\n" +
    "  <h4><h1>{{member.username}}</h1></h4>\n" +
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
    "      <a href=\"/member/{{follower.follower.username}}\">{{follower.follower.username}}</a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-repeat=\"message in messages\">\n" +
    "    <div id=\"timeline-item\">\n" +
    "      <a href=\"/project/{{message.project.urlTitle}}\">{{message.title}}</a>\n" +
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

angular.module("project/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/channels.tpl.html",
    "<h1>channels</h1>\n" +
    "<div ng-repeat=\"channel in channels\">\n" +
    "	<h3>channel {{channel}}</h3>\n" +
    "</div>\n" +
    "\n" +
    "<h5>chat</h5>\n" +
    "<div ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "    <a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>, <span am-time-ago=\"message.updatedAt\"></span>\n" +
    "    <p style=\"margin-left:15px;\">{{message.title}}</p>\n" +
    "    <button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\">\n" +
    "        <i class=\"fa fa-trash-o\"></i>\n" +
    "    </button>\n" +
    "</div>\n" +
    "<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "    </div>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "</form>\n" +
    "");
}]);

angular.module("project/finance.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/finance.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<h1>finance</h1>\n" +
    "<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "    chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "    chart-click=\"onClick\">\n" +
    "</canvas> ");
}]);

angular.module("project/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/home.tpl.html",
    "<!--<div id=\"streams\">\n" +
    "    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I6m999ID280\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "</div>\n" +
    "<div id=\"tasks\">\n" +
    "    <br><br>\n" +
    "    <p>task</p>\n" +
    "</div>-->\n" +
    "<!--\n" +
    "<div id=\"html-edit\">\n" +
    "    <h4>edit html tool</h4>\n" +
    "    <textarea style=\"width:50%\" ng-model=\"post.post_content\" class=\"form-control\"></textarea>\n" +
    "    <hr>\n" +
    "    <div ng-bind-html=\"renderHtml(post.post_content)\"></div>\n" +
    "    <div style=\"height:100px;\"></div>\n" +
    "</div>\n" +
    "-->\n" +
    "<div ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "	<a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>, <span am-time-ago=\"message.updatedAt\"></span>\n" +
    "    <p style=\"margin-left:15px;\">{{message.title}}</p>\n" +
    "	<button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\">\n" +
    "		<i class=\"fa fa-trash-o\"></i>\n" +
    "	</button>\n" +
    "</div>\n" +
    "<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "	<div class=\"form-group\">\n" +
    "		<input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\" ng-disabled=\"!currentUser\">\n" +
    "	</div>\n" +
    "	<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newMessage.title\">Submit</button>\n" +
    "</form>\n" +
    "\n" +
    "");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div id=\"sidebar-wrapper\">\n" +
    "    <ul class=\"sidebar-nav\">\n" +
    "        <br>\n" +
    "        <li><a style=\"font-weight:bold\" href=\"/project/{{project.title}}\">{{project.title}}</a></li>\n" +
    "        <hr>\n" +
    "        <li><a href=\"/project/{{project.title}}/channels\">channels</a></li>\n" +
    "        <li><a href=\"/project/{{project.title}}/finance\">finance</a></li>\n" +
    "        <li><a href=\"/project/{{project.title}}/members\">members</a></li>\n" +
    "        <li><a href=\"/project/{{project.title}}/streams\">streams</a></li>\n" +
    "        <li ng-show=\"currentUser\"><a href=\"/project/{{project.title}}\">settings</a></li>\n" +
    "        <li><a href=\"/project/{{project.title}}/tasks\">tasks</a></li>\n" +
    "        <li><a href=\"/project/{{project.title}}\">tools</a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div id=\"main-container\">\n" +
    "    <div ui-view=\"home\"></div>\n" +
    "    <div ui-view=\"channels\"></div>\n" +
    "    <div ui-view=\"finance\"></div>\n" +
    "    <div ui-view=\"members\"></div>\n" +
    "    <div ui-view=\"tasks\"></div>\n" +
    "    <div ui-view=\"streams\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("project/members.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/members.tpl.html",
    "<h1>members</h1>\n" +
    "<button ng-click=\"createMember()\">join!</button>\n" +
    "<div class=\"member-list\" ng-repeat=\"member in members\">\n" +
    "	<h3>member {{member}}</h3>\n" +
    "</div>");
}]);

angular.module("project/streams.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/streams.tpl.html",
    "<h1>streams</h1>\n" +
    "<div id=\"stream-list\" ng-repeat=\"stream in streams\">\n" +
    "	<h3>stream title {{stream}}</h3>\n" +
    "	<p>tags, description</p>\n" +
    "  <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/tasks.tpl.html",
    "<h1>tasks</h1>\n" +
    "<form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "	<div class=\"form-group\">\n" +
    "		<input placeholder=\"task title\" type=\"text\" ng-model=\"newTask.title\" class=\"form-control\" id=\"taskTitle\" ng-disabled=\"!currentUser\">\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input placeholder=\"task content\" type=\"text\" ng-model=\"newTask.taskContent\" class=\"form-control\" id=\"taskTitle\" ng-disabled=\"!currentUser\">\n" +
    "	</div>\n" +
    "	<div class=\"form-group\">\n" +
    "		<input placeholder=\"task value\" type=\"text\" ng-model=\"newTask.taskValue\" class=\"form-control\" id=\"taskTitle\" ng-disabled=\"!currentUser\">\n" +
    "	</div>\n" +
    "	<button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"!currentUser || !newTask.title\">Submit</button>\n" +
    "</form>\n" +
    "\n" +
    "<div id=\"task-list\" ng-repeat=\"task in tasks\">\n" +
    "	<h3>{{task.title}}</h3>\n" +
    "	<p>{{task.taskValue}}</p>\n" +
    "	<p>{{task.taskContent}}</p>\n" +
    "\n" +
    "</div>");
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
    "<div style=\"height:200px;text-align:center;background-color:rgb(240,240,240)\">\n" +
    "  <br><br>\n" +
    "  <h1>projects</h1>\n" +
    "</div>\n" +
    "<div class=\"project-list-container\">\n" +
    "  <div class=\"post-container\" ng-repeat=\"project in projects | orderBy:'-createdAt'\">\n" +
    "    <h1 class=\"title\"><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h1>\n" +
    "  </div>\n" +
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
    "<a href=\"/login\">already have an account?</a>\n" +
    "\n" +
    "<!--<div class=\"row\">\n" +
    "    <div class=\"form-wrapper\">\n" +
    "        <div class=\"form-container\">\n" +
    "            <h1>Welcome to Bidio!</h1>\n" +
    "            <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local/register\" method=\"post\" _lpchecked=\"1\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "                <button type=\"submit\" id=\"login-button\">Sign Up</button>\n" +
    "            </form>\n" +
    "            <a href=\"/login\"><h3>Already Have An Account?</h3></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>-->");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "	<h1>{{searchQuery}}</h1>\n" +
    "	<div>\n" +
    "		<input ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\">\n" +
    "		<div ng-repeat=\"searchResult in searchResults\">\n" +
    "			<a href=\"/project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a>\n" +
    "		</div>\n" +
    "		<div style=\"height:30px\"></div>\n" +
    "		SEARCH\n" +
    "		<div ng-repeat=\"searchResult in searchResults\">\n" +
    "			<br><br>\n" +
    "			<h2>{{searchResult}}</h2>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);
