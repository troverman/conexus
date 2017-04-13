angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'connect/index.tpl.html', 'footer/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'member/index.tpl.html', 'nav/index.tpl.html', 'post/index.tpl.html', 'project/channels.tpl.html', 'project/finance.tpl.html', 'project/home.tpl.html', 'project/index.tpl.html', 'project/members.tpl.html', 'project/streams.tpl.html', 'project/tasks.tpl.html', 'projects/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html', 'stream/index.tpl.html', 'transparency/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<!--this is gonna be infographic like-->\n" +
    "<div>\n" +
    "	<div id=\"logo-container\">\n" +
    "		<img style=\"max-height:400px\" src=\"/images/loading.gif\">\n" +
    "	</div>\n" +
    "	<div id=\"title-container\">\n" +
    "		<!--<h1>connect, collab, create</h1>-->\n" +
    "		<h1>conex.us</h1>\n" +
    "		<p>a transparent network</p>\n" +
    "	</div>\n" +
    "	<div id=\"about-section1\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h3>crowd-sourced, crowd-owned, crowd-operated</h3>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<p>open finance and contribution</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"about-section2\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<p>connect with new collaborators and create awesome things</p>\n" +
    "				<p>a 24/7 continual hackathon</p>\n" +
    "				<p>watch the world create</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"about-section3\">\n" +
    "		<!--<p>crowd-owned organizations</p>-->\n" +
    "		<p>a community of collaborators</p>\n" +
    "		<p>working together toward a common goal</p>\n" +
    "	</div>\n" +
    "	<div id=\"about-section4\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h4>transparency</h4>\n" +
    "				<p>transparent contrubitions and equatable representation</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "				    chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "				    chart-click=\"onClick\">\n" +
    "				</canvas> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("account/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<a href=\"/member/{{currentUser.username}}\"><img class=\"avatar\" src=\"{{currentUser.avatarUrl}}\"/></a>\n" +
    "	<h3><a href=\"/member/{{currentUser.username}}\">{{currentUser.username}}</a></h3>\n" +
    "	<br>\n" +
    "	{{currentUser.email}}\n" +
    "	<br><br>\n" +
    "\n" +
    "	<h3>Update Avatar</h3>\n" +
    "	<div ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "		<div>Drag photos or click here to upload.</div>\n" +
    "		<div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  		\n" +
    "	</div>\n" +
    "	<p ng-show=\"avatarLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "	<div ng-show=\"avatarLoading\" class=\"progress\">\n" +
    "		<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{avatarPercentage}}%;\"></div>\n" +
    "	</div>\n" +
    "	<br><br>\n" +
    "\n" +
    "	<h3>Connected Accounts</h3>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/google\">google</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/twitter\">twitter</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/facebook\">facebook</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">fitbit</a></button>\n" +
    "	<br><br>\n" +
    "	<button class=\"btn btn-default\"><a href=\"#\">btc wallet</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"#\">paypal</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"#\">bank account</a></button>\n" +
    "	<br><br>\n" +
    "\n" +
    "	<h3>Settings</h3>\n" +
    "	<p>gps tracking</p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("connect/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("connect/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "    .angular-google-map-container { height: 250px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }\n" +
    "</style>\n" +
    "<div itemscope itemtype=\"Map\" class=\"map-outter bottom-contact\">\n" +
    "    <div class=\"gmap-container\" id=\"gmap\">\n" +
    "        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "        </ui-gmap-google-map>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"margin-left:20%;margin-right:20%\">\n" +
    "\n" +
    "	<h1>connect</h1><hr>\n" +
    "	<div class=\"spacing-20\"></div>\n" +
    "\n" +
    "	<div ng-repeat=\"user in users\">\n" +
    "		<h4><a href=\"/member/{{user.username}}\">{{user.username}}</a></h4><hr>\n" +
    "	</div>\n" +
    "\n" +
    "	<p>what is this page?</p>\n" +
    "	<p>connect in your gps, bank info, and live stream google glass: +1 crazy</p>\n" +
    "</div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\">\n" +
    "			{{date | date:'yyyy'}}\n" +
    "			<a href=\"/\">conex.us</a>\n" +
    "			<a href=\"/about\">about</a>\n" +
    "			<a href=\"/projects\">projects</a>\n" +
    "			<a href=\"/transparency\">transparency</a>\n" +
    "		</div>\n" +
    "		<img src=\"images/conexus-white.png\">\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div ng-show=\"currentUser\">\n" +
    "	<div class=\"container\">\n" +
    "	  <div class=\"col-md-4\">\n" +
    "			<img class=\"avatar\" style=\"margin-top:0em\" src=\"{{currentUser.avatarUrl}}\"/>\n" +
    "			<h2><a href=\"/member/{{currentUser.username}}\">{{currentUser.username}}</a></h2>\n" +
    "	  </div>\n" +
    "	  <div class=\"col-md-8\">\n" +
    "	    <h3>feed</h3>\n" +
    "	    <md-divider></md-divider>\n" +
    "		<div class='md-padding' layout=\"row\" layout-align=\"center\" layout-wrap>\n" +
    "			<md-card flex=\"30\" ng-repeat=\"project in projects\">\n" +
    "				<md-card-title>\n" +
    "					<md-card-title-text>\n" +
    "						<a href=\"/project/{{project.urlTitle}}/\">\n" +
    "							<span class=\"\">{{project.title}}</span>\n" +
    "						</a>\n" +
    "					</md-card-title-text>\n" +
    "				</md-card-title>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "	<div class=\"header-area container\">\n" +
    "		<!--<h2>crowd-sourced, crowd-owned, crowd-operated</h2>-->\n" +
    "		<h2>the internet is creating</h2>\n" +
    "		<h4>participate in crowd-sourced, transparent projects</h4>\n" +
    "		<h4>connect and collaborate, create projects with memebers you meet</h4>\n" +
    "		<h5>earn though streaming your process - creation is a viral action</h5>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<a class=\"btn btn-primary\" href=\"/about\">tell me more</a>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<!--<div id=\"search-container\">\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"row\">\n" +
    "        		<div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "					<input style=\"width:100%\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\">\n" +
    "					<div ng-repeat=\"searchResult in searchResults.slice(0,8)\">\n" +
    "						<h5><a href=\"/project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a></h5>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "	<!--<div id=\"member-container\">\n" +
    "		<div class=\"container\">\n" +
    "			<h2>connect</h2><hr>\n" +
    "			<div class=\"container\">\n" +
    "			  <div class='md-padding' layout=\"row\" layout-align=\"center\" layout-wrap>\n" +
    "			    <md-card flex=\"30\" ng-repeat=\"member in members\">\n" +
    "			      <md-card-title>\n" +
    "			        <md-card-title-text>\n" +
    "					  <a href=\"/member/{{member.username}}\">\n" +
    "			            <span class=\"\">{{member.username}}</span>\n" +
    "			          </a>\n" +
    "			        </md-card-title-text>\n" +
    "			      </md-card-title>\n" +
    "			    </md-card>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div id=\"project-container\">\n" +
    "		<div class=\"container\">\n" +
    "			<h2>collab</h2><hr>\n" +
    "			<div class=\"container\">\n" +
    "			  <div class='md-padding' layout=\"row\" layout-align=\"center\" layout-wrap>\n" +
    "			    <md-card flex=\"30\" ng-repeat=\"project in projects\">\n" +
    "			      <md-card-title>\n" +
    "			        <md-card-title-text>\n" +
    "			          <a href=\"/project/{{project.urlTitle}}/\">\n" +
    "			            <span class=\"\">{{project.title}}</span>\n" +
    "			          </a>\n" +
    "			        </md-card-title-text>\n" +
    "			      </md-card-title>\n" +
    "			    </md-card>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "	<!--\n" +
    "	<div id=\"task-container\">\n" +
    "		<div ng-repeat=\"project in projects\">\n" +
    "			<a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "	    <div class=\"row\">\n" +
    "	        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "				<h3><b>Create an Account</b></h3><hr>\n" +
    "	            <div class=\"login-form\">\n" +
    "	                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"email\" placeholder=\"email\" title=\"email\" type=\"email\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"username\" placeholder=\"username\" title=\"username\" type=\"text\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group log-status\">\n" +
    "	                        <input class=\"form-control\" name=\"password\" placeholder=\"password\" title=\"password\" type=\"password\"> \n" +
    "	                        <i class=\"fa fa-lock\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"align-right\">\n" +
    "	                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "	                    </div>\n" +
    "	                    <br><br>\n" +
    "	                    <div class=\"social-log\">\n" +
    "	                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n" +
    "	                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n" +
    "	                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><i class=\"fa fa-google\"></i> Google</a>\n" +
    "	                    </div>\n" +
    "						<br><hr>\n" +
    "	                    <div class=\"\">\n" +
    "	                        <a href=\"/login\">Already have an account?</a>\n" +
    "	                    </div>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	            <div class=\"selfClear\"></div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<div id=\"message-container\">\n" +
    "		<div class=\"container\">\n" +
    "			<h3>what's happening</h3>\n" +
    "		    <md-card ng-repeat=\"message in messages.slice(0,5)\">\n" +
    "		      <md-card-title>\n" +
    "		        <md-card-title-text>\n" +
    "					<p>{{message.title}}</p>\n" +
    "					<a href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>\n" +
    "					<a href=\"/project/{{message.project.urlTitle}}\">{{message.project.title}}</a>\n" +
    "		        </md-card-title-text>\n" +
    "		      </md-card-title>\n" +
    "		    </md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("login/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1 class=\"blue-title\">Login</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <h2 class=\"post-title\">\n" +
    "                        Welcome back!\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\" method=\"post\" action=\"/auth/local\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"username\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign in</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a class=\"btn btn-social btn-facebook\" href=\"\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" href=\"\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n" +
    "                        <a class=\"btn btn-social btn-google\" href=\"\"><i class=\"fa fa-google\"></i> Google</a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\">Need an account?</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<div class=\"profile-header\">\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "  <img class=\"avatar\" style=\"border-radius:100px; \"src=\"{{member.avatarUrl}}\"/>\n" +
    "  <h1>{{member.username}}</h1>\n" +
    "  <button ng-click=\"follow()\" class=\"btn btn-primary\" ng-disabled=\"!currentUser\">follow ({{followers.length}})</button>\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"profile-timeline\">\n" +
    "  <div class=\"container\">\n" +
    "    <div ng-repeat=\"follower in followers\">\n" +
    "      <div class=\"timeline-item\">\n" +
    "        <a href=\"/member/{{follower.follower.username}}\">{{follower.follower.username}}</a><hr>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"message in messages\">\n" +
    "      <div class=\"timeline-item\">\n" +
    "        <a href=\"/project/{{message.project.urlTitle}}\">{{message.title}}</a><hr>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<div ng-controller=\"NavCtrl\" class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "      <a class=\"navbar-brand\" href=\"/\">\n" +
    "        <img style=\"height:25px;margin-top:-3px\" src=\"/images/conexus-white.png\"/>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <li ng-show=\"!currentUser\" class=\"nav-links\"><a href=\"/about\"></i>About</a></li>\n" +
    "        <li class=\"nav-links\"><a href=\"/connect\">Connect</a></li>\n" +
    "        <li class=\"nav-links\"><a href=\"/projects\">Projects</a></li>\n" +
    "        <form class=\"navbar-form pull-left\" role=\"search\" action=\"/search/\" onSubmit=\" location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input style=\"margin-top:5px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Search\">\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li class=\"nav-links\" ng-show=\"currentUser\"><a href=\"/account\">{{currentUser.username}}</a></li>\n" +
    "        <li class=\"nav-links\" ng-show=\"currentUser\"><a href=\"/logout\">Logout</a></li>\n" +
    "        <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "        <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "        <li class=\"divider-vertical\"></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <md-progress-linear ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "</div>");
}]);

angular.module("post/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
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

angular.module("project/channels.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/channels.tpl.html",
    "<h1>channels</h1><hr>\n" +
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

angular.module("project/finance.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/finance.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<h1>finance</h1><hr>\n" +
    "<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "    chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "    chart-click=\"onClick\">\n" +
    "</canvas> \n" +
    "<div class=\"\">\n" +
    "	data here\n" +
    "</div>");
}]);

angular.module("project/home.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/home.tpl.html",
    "<div id=\"streams\">\n" +
    "    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I6m999ID280\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "</div>\n" +
    "<!--<div id=\"tasks\">\n" +
    "    <br><br>\n" +
    "    <p>task</p>\n" +
    "</div>-->\n" +
    "<!--<div id=\"html-edit\">\n" +
    "    <h4>edit html tool</h4>\n" +
    "    <textarea style=\"width:50%\" ng-model=\"post.post_content\" class=\"form-control\"></textarea>\n" +
    "    <hr>\n" +
    "    <div ng-bind-html=\"renderHtml(post.post_content)\"></div>\n" +
    "    <div style=\"height:100px;\"></div>\n" +
    "</div>-->\n" +
    "<div ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "	<a href=\"/member/{{message.user.username}}\">\n" +
    "        <img src=\"{{message.user.avatarUrl}}\" err-src=\"/images/avatar.png\" style=\"height:32px;\">\n" +
    "        {{message.user.username}}</a>, <span am-time-ago=\"message.updatedAt\"></span>\n" +
    "    <p style=\"margin-left:15px;\">{{message.title}}</p>\n" +
    "	<!--<button type=\"button\" class=\"btn btn-danger btn-xs\" ng-click=\"destroyMessage(message)\" ng-show=\"currentUser.id === message.user.id\">\n" +
    "		<i class=\"fa fa-trash-o\"></i>\n" +
    "	</button>-->\n" +
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

angular.module("project/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div id=\"sidebar-wrapper\">\n" +
    "    <ul class=\"sidebar-nav\">\n" +
    "        <br>\n" +
    "        <li>\n" +
    "            <a style=\"font-weight:bold\" href=\"/project/{{project.title}}\">{{project.title}}</a>\n" +
    "            <a href=\"/project/{{project.urlTitle}}/edit\" ng-show=\"isProjectCreator()\">edit</a>\n" +
    "        </li>\n" +
    "        <hr>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/channels\">channels</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/finance\">finance</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/members\">members</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/streams\">streams</a></li>\n" +
    "        <li ng-show=\"currentUser\"><a href=\"/project/{{project.urlTitle}}\">settings</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/tasks\">tasks</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}\">tools</a></li>\n" +
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

angular.module("project/members.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/members.tpl.html",
    "<h1>{{members.length}} members</h1><hr>\n" +
    "<button class=\"btn btn-primary\" ng-click=\"createMember()\">join</button>\n" +
    "<div class=\"member-list\" ng-repeat=\"member in members\">\n" +
    "	<h3><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h3>\n" +
    "</div>");
}]);

angular.module("project/streams.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/streams.tpl.html",
    "<h1>streams</h1><hr>\n" +
    "<div id=\"stream-list\" ng-repeat=\"stream in streams\">\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<h3><a href=\"stream/{{stream}}\">stream title {{stream}}</a></h3>\n" +
    "		<p>tags, description</p>\n" +
    "		<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/tasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/tasks.tpl.html",
    "<h1>tasks</h1><hr>\n" +
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

angular.module("projects/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
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
    "<!--\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "  <button class=\"btn btn-primary blog-button\"><a href=\"/login\">+ project</a></button>\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "-->\n" +
    "<div class=\"page-heading\">\n" +
    "  <div class=\"container\"> \n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h1><b>Projects</b></h1>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"post-container col-md-6\" ng-repeat=\"project in projects | orderBy:'-createdAt'\">\n" +
    "      <div class=\"col-md-2\">\n" +
    "        <img src=\"http://www.placehold.it/50x50\">\n" +
    "      </div>\n" +
    "      <div class=\"col-md-10\">\n" +
    "        <h1 class=\"title\"><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h1>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1 class=\"blue-title\">Create an Account</h1>\n" +
    "                    <hr class=\"small\">\n" +
    "                    <h2 class=\"post-title\">\n" +
    "                        Welcome!\n" +
    "                    </h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"email\" placeholder=\"email\" title=\"email\" type=\"email\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"username\" placeholder=\"username\" title=\"username\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" name=\"password\" placeholder=\"password\" title=\"password\" type=\"password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n" +
    "                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><i class=\"fa fa-google\"></i> Google</a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\">Already have an account?</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "	<div class=\"container\">\n" +
    "		<br><br>\n" +
    "		<input ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" placeholder=\"{{searchQuery}}\">\n" +
    "		<hr>\n" +
    "		<div ng-repeat=\"searchResult in searchResults\">\n" +
    "			<a href=\"/project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("stream/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("stream/index.tpl.html",
    "<div id=\"header-section\">\n" +
    "  <br>\n" +
    "  <img style=\"border-radius:100px; \"src=\"/images/mikey.jpg\"/>\n" +
    "  <h4><h1>membertitle</h1></h4>\n" +
    "\n" +
    "  <br><br>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"section1\">\n" +
    "	\n" +
    "     <video id=\"camera-preview\" style=\"border: 1px solid rgb(15, 158, 238)\"></video>\n" +
    "\n" +
    "	<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("transparency/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("transparency/index.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<!--this is gonna be infographic like-->\n" +
    "<div class=\"spacing-100\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<h2><a href=\"project/conexus\">transparency</a></h2>\n" +
    "			<p>transparent contrubition, equatable representation</p>\n" +
    "			<p>give to conex</p>\n" +
    "			<p>open balanace sheet</p>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "			    chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "			    chart-click=\"onClick\">\n" +
    "			</canvas> \n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h3>stats</h3>\n" +
    "			<p>13 companies, 35 collaborators, $8,000,000 monthly revenue</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);
