angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'connect/index.tpl.html', 'footer/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'market/index.tpl.html', 'marketPair/index.tpl.html', 'markets/index.tpl.html', 'member/index.old.tpl.html', 'member/index.tpl.html', 'member/templates/activity.tpl.html', 'member/templates/followers.tpl.html', 'member/templates/following.tpl.html', 'member/templates/wallet.tpl.html', 'nav/index.tpl.html', 'post/index.tpl.html', 'project/index.tpl.html', 'project/templates/activity.tpl.html', 'project/templates/channels.tpl.html', 'project/templates/charter.tpl.html', 'project/templates/finance.tpl.html', 'project/templates/members.tpl.html', 'project/templates/projects.tpl.html', 'project/templates/streams.tpl.html', 'project/templates/tasks.tpl.html', 'projects/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html', 'stream/index.tpl.html', 'task/index.tpl.html', 'tasks/index.tpl.html', 'transparency/index.tpl.html', 'work/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<!--this is gonna be infographic like-->\n" +
    "<div id=\"logo-container\" style=\"text-align:center;background:black\">\n" +
    "	<img style=\"max-height:400px\" src=\"/images/loading.gif\">\n" +
    "</div>\n" +
    "<div id=\"title-container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<h1>conex.us</h1>\n" +
    "		<p>open & transparent organizations</p>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<p>connect with new collaborators and create awesome things</p>\n" +
    "				<p>a 24/7 continual hackathon</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<h4>create the next wave</h4>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<h4>governance of collaborators</h4>\n" +
    "		<p>working together toward a common goal</p>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section3\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h4>transparency</h4>\n" +
    "				<p>transparent contrubitions and equatable representation</p>\n" +
    "				<p>reputation systems and task verification</p>\n" +
    "				<p>open finance and contribution</p>\n" +
    "				<p>tokenized & market liquid organizational actions</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
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
    "	                    <div class=\"social-log\">\n" +
    "	                        <a href=\"/login\">Already have an account?</a>\n" +
    "	                    </div>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	            <div class=\"selfClear\"></div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
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
    "	<h3>Balances</h3>\n" +
    "	<p>Tokens</p>\n" +
    "\n" +
    "	<!--<h3>Peer Contrubution</h3>-->\n" +
    "\n" +
    "	<h3>Connected Accounts</h3>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/google\">google</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/twitter\">twitter</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/facebook\">facebook</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">fitbit</a></button>\n" +
    "	<!--tokenized apps.. connect in..-->\n" +
    "	<br><br>\n" +
    "\n" +
    "	<h3>Settings</h3>\n" +
    "	<p>gps tracking</p>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
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
    "<div class=\"container\">\n" +
    "\n" +
    "	<h1>connect</h1>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<!--<input style=\"margin-top:5px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"\">-->\n" +
    "	\n" +
    "	<div ng-repeat=\"user in users\">\n" +
    "		<h3><a href=\"/member/{{user.username}}\">{{user.username}}</a></h3>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--<h1>live</h1>\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"col-sm-6\"><iframe width='560' height='315' src='https://www.cre8bid.io/v/597c55e56833048165c6720c' frameborder='0' allowfullscreen></iframe></div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<h1>organizations</h1>\n" +
    "	<div ng-repeat=\"project in projects\">\n" +
    "		<h3><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
    "	</div>\n" +
    "\n" +
    "	<h1>tasks</h1>\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<h3><a href=\"/task/{{task.id}}\">{{task.title}}</a></h3>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--<p>what is this page?</p>\n" +
    "	<p>connect in your gps, wallet info, and live stream google glass</p>-->\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\">\n" +
    "			{{date | date:'yyyy'}}\n" +
    "			<a href=\"/\">conex.us</a>\n" +
    "			<a href=\"/about\">about</a>\n" +
    "			<a href=\"/projects\">organizations</a>\n" +
    "			<a href=\"/tasks\">tasks</a>\n" +
    "			<a href=\"/transparency\">transparency</a>\n" +
    "		</div>\n" +
    "		<img src=\"images/conexus-white.png\">\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div ng-show=\"currentUser\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"container\">\n" +
    "	  <div class=\"col-md-3\">\n" +
    "	  		<md-card style=\"padding:15px;\">\n" +
    "				<img class=\"avatar\" style=\"margin-top:0em\" src=\"{{currentUser.avatarUrl}}\"/>\n" +
    "				<h2><a href=\"/member/{{currentUser.username}}\">{{currentUser.username}}</a></h2>\n" +
    "				<p>{{member.totalWork}}</p>\n" +
    "				<!--<p>{{member.walletAddress}}</p>-->\n" +
    "				<!--<p>info | wallet</p>-->\n" +
    "			</md-card>\n" +
    "			<md-card>\n" +
    "				<md-card-title>\n" +
    "					<h5>Organizations</h5>\n" +
    "				</md-card-title>\n" +
    "			</md-card>\n" +
    "			<md-card ng-repeat=\"project in projects\">\n" +
    "				<md-card-title>\n" +
    "					<a href=\"/project/{{project.urlTitle}}/\"><span class=\"\">{{project.title}}</span></a>\n" +
    "				</md-card-title>\n" +
    "			</md-card>\n" +
    "	  </div>\n" +
    "	  <div class=\"col-md-9\">\n" +
    "	    <!--tasks, work, posts, activity-->\n" +
    "	    <!--TODO: ACTIVITY-->\n" +
    "	    <md-card ng-repeat=\"post in messages\">\n" +
    "			<md-card-title>\n" +
    "				<md-card-title-text>\n" +
    "					<div>\n" +
    "						<a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "						<a style=\"display:inline\" href=\"/project/{{post.project.urlTitle}}\"><span class=\"\">{{post.project.title}}</span></a>\n" +
    "					</div>\n" +
    "					<div>\n" +
    "						<span style=\"display:inline\" ng-bind-html=\"renderMessage(post.title)\"></span>\n" +
    "	    			</div>\n" +
    "				</md-card-title-text>\n" +
    "			</md-card-title>\n" +
    "			<div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "		</md-card>\n" +
    "		<md-card ng-repeat=\"task in tasks\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<a href=\"/task/{{task.id}}\"><span class=\"\">{{task.title}}</span></a>\n" +
    "				<br>\n" +
    "				<a href=\"/project/{{task.project.urlTitle}}\"><span class=\"\">{{task.project}}</span></a>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" style=\"width:100%\">create</button>\n" +
    "			</div>\n" +
    "			<div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"task/{{task.id}}\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "		</md-card>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	<div class=\"header-area container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>Create the next wave</h2>\n" +
    "				<p>Create and participate in transparent, crowd-sourced, organizations</p>\n" +
    "				<p>Earn value though tokenized, market liquid, organizational actions</p>\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/about\">learn more</a>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "				<img style=\"max-height:200px\" src=\"/images/loading.gif\">\n" +
    "				<!--\n" +
    "				<div class=\"block\">\n" +
    "					<div class=\"shape\">\n" +
    "						<div class=\"cube outer\">\n" +
    "							<div class=\"side left\"></div>\n" +
    "							<div class=\"side right\"></div>\n" +
    "							<div class=\"side top\"></div>\n" +
    "							<div class=\"side bottom\"></div>\n" +
    "							<div class=\"side front\"></div>\n" +
    "							<div class=\"side back\"></div>\n" +
    "							<div class=\"cube\">\n" +
    "								<div class=\"side left\"></div>\n" +
    "								<div class=\"side right\"></div>\n" +
    "								<div class=\"side top\"></div>\n" +
    "								<div class=\"side bottom\"></div>\n" +
    "								<div class=\"side front\"></div>\n" +
    "								<div class=\"side back\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<!--\n" +
    "	<div id=\"search-container\">\n" +
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
    "	</div>\n" +
    "	<div id=\"member-container\">\n" +
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
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "\n" +
    "	<div style=\"background-color:black\">\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"row\">\n" +
    "		    	<div class=\"col-md-6\">\n" +
    "\n" +
    "		        </div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "\n" +
    "		        </div>\n" +
    "	    	</div>\n" +
    "			<div style=\"height:300px\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "	    <div class=\"row\">\n" +
    "	    	<div class=\"col-lg-6 col-md-6\" style=\"text-align:right\">\n" +
    "				<!--<img style=\"max-height:400px\" src=\"/images/loading.gif\">-->\n" +
    "	        </div>\n" +
    "	        <div class=\"col-lg-6 col-md-6\">\n" +
    "				<h3><b>Join the community</b></h3><hr>\n" +
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
    "	       \n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	\n" +
    "	<!--TEMP-->\n" +
    "	<div class=\"container\">\n" +
    "		<div ng-repeat=\"work in work\">\n" +
    "	        <div style=\"box-shadow: 2px 2px 10px #999;overflow:hidden;margin:10px;\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<a style=\"display:inline\" href=\"/member/{{work.user.username}}\">{{work.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "		                <a style=\"display:inline\" href=\"task/{{work.task.id}}\">{{work.task.title}}</a>\n" +
    "					</div>\n" +
    "        			<p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "	            	<p>{{work.amount}}, <a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "	                <p>{{work.content}}</p>\n" +
    "	                <p style=\"color:gray;font-size:10px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "	                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "	                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "	                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "	                <a style=\"color:grey\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "    <!--TEMP-->\n" +
    "\n" +
    "	<div>\n" +
    "		<div class=\"container\">\n" +
    "		    <md-card ng-repeat=\"message in messages.slice(0,15)\">\n" +
    "		      <md-card-title>\n" +
    "		        <md-card-title-text>\n" +
    "		        	<div>\n" +
    "						<a style=\"display:inline\" href=\"/member/{{message.user.username}}\">{{message.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "						<a style=\"display:inline\" href=\"/project/{{message.project.urlTitle}}\">{{message.project.title}}</a>\n" +
    "					</div>\n" +
    "					<p style=\"font-size:10px;color:gray\" am-time-ago=\"message.createdAt\"></p>\n" +
    "					<div>\n" +
    "						<span style=\"display:inline\" ng-bind-html=\"renderMessage(message.title)\"></span>\n" +
    "        			</div>\n" +
    "		        </md-card-title-text>\n" +
    "		      </md-card-title>\n" +
    "		      <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{message.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "              </div>\n" +
    "		    </md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
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
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
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
    "                    <div class=\"social-log\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\">Need an account?</a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<div id=\"logo-container\" style=\"text-align:center;background:black\">\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h1>{{stateParams.id}} MARKETS</h1>\n" +
    "	<p>token info | n markets | n tokens in circulation </p>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Markets</h2>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td><a href=\"/market/{{stateParams.id}}/NOVO\">NOVO</a></td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td><a href=\"/market/{{stateParams.id}}/OAK RIDGE\">OAK RIDGE</a></td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td><a href=\"/market/{{stateParams.id}}/CONEX\">CONEX</a></td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td><a href=\"/market/{{stateParams.id}}/CRE8\">CRE8</a></td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Order Book</h2>\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "	<md-card ng-show=\"newOrderToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.orderIdentiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.orderAmountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.orderIdentiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.orderAmountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.orderAmountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX,NOVO\">NOVO</a>, 3 <a href=\"/market/CONEX,NOVO\">CONEX</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/ALCOA\">ALCOA</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/OAK RIDGE\">OAK RIDGE</a>]</td>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX,CHAPEL HILL\">CONEX</a>, 1 <a href=\"/market/CONEX,CHAPEL HILL\">CHAPEL HILL</a>]</td>\n" +
    "				<td>[5 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[1 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/CHAPEL HILL COUNCIL,DURHAM\">CHAPEL HILL COUNCIL</a>, 1 <a href=\"/market/CHAPEL HILL COUNCIL,DURHAM\">DURHAM</a>]</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Trades</h2>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>, 3 <a href=\"/market/CONEX\">CONEX</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/ALCOA\">ALCOA</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/OAK RIDGE\">OAK RIDGE</a>]</td>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX\">CONEX</a>, 1 <a href=\"/market/CHAPEL HILL\">CHAPEL HILL</a>]</td>\n" +
    "				<td>[5 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[1 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/CHAPEL HILL COUNCIL\">CHAPEL HILL COUNCIL</a>, 1 <a href=\"/market/DURHAM\">DURHAM</a>]</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("marketPair/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("marketPair/index.tpl.html",
    "<div id=\"logo-container\" style=\"text-align:center;background:black\">\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h1><a href=\"market/{{stateParams.id}}\">{{stateParams.id}}</a> | <a href=\"market/{{stateParams.id1}}\">{{stateParams.id1}}</a></h1>\n" +
    "	<p> n tokens in circulation | n token volume | information </p>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<highchart config=\"chart\"></highchart>\n" +
    "	<h2>Order Book</h2>\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "	<md-card ng-show=\"newOrderToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.orderIdentiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.orderAmountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" ng-disabled=\"true\" type=\"text\" ng-model=\"newOrder.orderIdentiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.orderAmountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.orderAmountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>, 3 <a href=\"/market/CONEX\">CONEX</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/ALCOA\">ALCOA</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/OAK RIDGE\">OAK RIDGE</a>]</td>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX\">CONEX</a>, 1 <a href=\"/market/CHAPEL HILL\">CHAPEL HILL</a>]</td>\n" +
    "				<td>[5 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[1 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/CHAPEL HILL COUNCIL\">CHAPEL HILL COUNCIL</a>, 1 <a href=\"/market/DURHAM\">DURHAM</a>]</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Trades</h2>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>, 3 <a href=\"/market/CONEX\">CONEX</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/ALCOA\">ALCOA</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/OAK RIDGE\">OAK RIDGE</a>]</td>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX\">CONEX</a>, 1 <a href=\"/market/CHAPEL HILL\">CHAPEL HILL</a>]</td>\n" +
    "				<td>[5 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[1 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/CHAPEL HILL COUNCIL\">CHAPEL HILL COUNCIL</a>, 1 <a href=\"/market/DURHAM\">DURHAM</a>]</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<div id=\"logo-container\" style=\"text-align:center;background:black\">\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h1>Markets</h1>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead><tr><th>Token</th></tr></thead>\n" +
    "	    <tbody>\n" +
    "			<tr><td><a href=\"market/NOVO\">NOVO</a></td></tr>\n" +
    "			<tr><td><a href=\"market/CONEX\">CONEX</a></td></tr>\n" +
    "			<tr><td><a href=\"market/DURHAM\">DURHAM</a></td></tr>\n" +
    "			<tr><td><a href=\"market/CHAPEL_HILL\">CHAPEL HILL</a></td></tr>\n" +
    "			<tr><td><a href=\"market/token4\">ALCOA</a></td></tr>\n" +
    "			<tr><td><a href=\"market/OAK_RIDGE\">OAK RIDGE</a></td></tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h1>Order Book</h1>\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "	<md-card ng-show=\"newOrderToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-model=\"newOrder.orderIdentiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.orderAmountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.orderIdentiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.orderAmountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.orderAmountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>, 3 <a href=\"/market/CONEX\">CONEX</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/ALCOA\">ALCOA</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/OAK RIDGE\">OAK RIDGE</a>]</td>\n" +
    "				<td>[2 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[2 <a href=\"/market/CONEX\">CONEX</a>, 1 <a href=\"/market/CHAPEL HILL\">CHAPEL HILL</a>]</td>\n" +
    "				<td>[5 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<td>[1 <a href=\"/market/NOVO\">NOVO</a>]</td>\n" +
    "				<td>[1 <a href=\"/market/CHAPEL HILL COUNCIL\">CHAPEL HILL COUNCIL</a>, 1 <a href=\"/market/DURHAM\">DURHAM</a>]</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("member/index.old.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/index.old.tpl.html",
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

angular.module("member/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<style>\n" +
    ".avatar {\n" +
    "    position:absolute;\n" +
    "    top:6.4em;\n" +
    "    margin: 0 auto;\n" +
    "    background: #fff;\n" +
    "    max-width: 15em;\n" +
    "    height: 15em;\n" +
    "    padding: 0.25em;\n" +
    "    border-radius: .7em;\n" +
    "    //box-shadow: 0 0 .1em rgba(0, 0, 0, 0.15);\n" +
    "}\n" +
    "\n" +
    ".member-cover{\n" +
    "    height:17em;\n" +
    "    width: 100%;\n" +
    "    overflow: hidden;\n" +
    "}\n" +
    ".member-cover img{\n" +
    "    width: 100%;\n" +
    "    margin-top: -10%\n" +
    "}\n" +
    "\n" +
    ".member-tabs li{\n" +
    "    display: inline;\n" +
    "    font-size: 20px;\n" +
    "    font-family:'Titillium Web',sans-serif;\n" +
    "}\n" +
    "\n" +
    ".member-tabs > li > a{\n" +
    "    padding:10px 15px;\n" +
    "    color:rgb(125,125,125);\n" +
    "}\n" +
    "\n" +
    ".member-tabs > li > a:hover{\n" +
    "    background-color: #eee;\n" +
    "    border-radius:3px;\n" +
    "}\n" +
    "\n" +
    ".member-tab-container ul{\n" +
    "    margin:10px 15px;\n" +
    "}\n" +
    "\n" +
    ".profile-header{background-color:white;}\n" +
    "</style>\n" +
    "\n" +
    "<div ui-view=\"member\">\n" +
    "	<div class=\"profile-header\">\n" +
    "		<div style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "			<img ng-src=\"{{member.coverUrl}}\" err-src=\"/images/avatar.png\" />\n" +
    "		</div>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"pull-left\"><img class=\"avatar\" ng-src=\"{{member.avatarUrl}}\"/></div>\n" +
    "			<div class=\"pull-right member-tab-container\">\n" +
    "				<ul class=\"member-tabs\">\n" +
    "					<li><a href=\"member/{{member.username}}\">Activity</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/followers\">{{followersCount.length}} Followers</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/following\">{{followingCount.length}} Following</a></li>\n" +
    "					<!--<li><a href=\"member/{{member.username}}\">{{followersCount.length}} Organizations</a></li>-->\n" +
    "					<li><a href=\"member/{{member.username}}\">{{followersCount.length}} Streams</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}\">{{followersCount.length}} Tasks</a></li>\n" +
    "					<!--<li><a href=\"member/{{member.username}}\">Work</a></li>-->\n" +
    "					<li><a href=\"member/{{member.username}}/wallet\">Wallet</a></li>\n" +
    "\n" +
    "					<li ng-show=\"currentUser.id != member.id\">\n" +
    "						<a class=\"btn btn-default\" ng-click=\"\">Follow</a>\n" +
    "						<a ng-show=\"isFollowing\" class=\"btn btn-default\" ng-click=\"\">UnFollow</a>\n" +
    "					</li>\n" +
    "					<li ng-show=\"currentUser.id == member.id\">\n" +
    "						<a class=\"btn btn-default\" href=\"account\">Edit Profile</a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<md-divider></md-divider>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "				<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "				<h5>@{{member.username}}</h5>\n" +
    "				<p>{{member.totalWork}} | total reputation</p>\n" +
    "			</div>\n" +
    "			<div class=\"pull-right\">\n" +
    "\n" +
    "				<!--<h2>{{member.totalWork}} | total work</h2>-->\n" +
    "				<!--<input type=\"text\" placeholder=\"Reputation\" ng-model=\"reputationLookup\" class=\"form-control\">-->\n" +
    "\n" +
    "				<a ng-show=\"member.socialAccounts.facebook.profileUrl\" href=\"{{member.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><span class=\"grey facebook-icon\"><i class=\"fa fa-facebook\"></i> Facebook</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.twitter.profileUrl\" href=\"{{member.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><span class=\"grey twitter-icon\"><i class=\"fa fa-twitter\"></i> Twitter</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.google.profileUrl\" href=\"{{member.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><span class=\"grey google-icon\"><i class=\"fa fa-google\"></i> Google</span></a>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<md-divider></md-divider>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"profile-container\">\n" +
    "		<div ui-view=\"memberActivity\"></div>\n" +
    "		<div ui-view=\"memberFollowers\"></div>\n" +
    "		<div ui-view=\"memberFollowing\"></div>\n" +
    "		<div ui-view=\"memberWallet\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"col-md-12\" ng-repeat=\"work in work\">\n" +
    "        <div style=\"box-shadow: 2px 2px 10px #999;overflow:hidden;margin:10px;\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <p><a href=\"task/{{work.task.id}}\">{{work.task.title}}</a></p>\n" +
    "                <p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "            	<p>{{work.amount}}, <a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "                <p>{{work.content}}</p>\n" +
    "                <p style=\"color:gray;font-size:10px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12\" ng-repeat=\"message in messages\">\n" +
    "        <div style=\"box-shadow: 2px 2px 10px #999;overflow:hidden;margin:10px;\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "    			<a href=\"/project/{{message.project.urlTitle}}\">{{message.project.title}}</a>\n" +
    "    			<p>{{message.title}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{message.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/followers.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/followers.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"follower in followers\">\n" +
    "		<div style=\"margin:10px; box-shadow: 2px 2px 10px #999;overflow:hidden\">\n" +
    "			<img src=\"{{follower.follower.avatarUrl}}\" style=\"max-height:250px;\">\n" +
    "        	<h4><a href=\"/member/{{follower.follower.username}}\">{{follower.follower.username}}</a></h4>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"follower in following\">\n" +
    "		<div style=\"margin:10px; box-shadow: 2px 2px 10px #999;overflow:hidden\">\n" +
    "			<img src=\"{{follower.follower.avatarUrl}}\" style=\"max-height:250px;\">\n" +
    "        	<h4><a href=\"/member/{{follower.follower.username}}\">{{follower.follower.username}}</a></h4>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/wallet.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/wallet.tpl.html",
    "<div class=\"container\">\n" +
    "	<img src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.username}}\">\n" +
    "	<h1>Transaction History</h1>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
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
    "        <form class=\"navbar-form pull-left\" role=\"search\" action=\"/search/\" onSubmit=\" location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input style=\"margin-top:5px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <!--notifications on username-->\n" +
    "        <li ng-show=\"!currentUser\" class=\"nav-links\"><a href=\"/about\"></i>About</a></li>\n" +
    "        <li class=\"nav-links\"><a href=\"/connect\">Discover</a></li>\n" +
    "        <li class=\"nav-links\"><a href=\"/market\">Market</a></li>\n" +
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

angular.module("project/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<style>\n" +
    ".avatar {\n" +
    "    position:absolute;\n" +
    "    top:6.4em;\n" +
    "    margin: 0 auto;\n" +
    "    background: #fff;\n" +
    "    max-width: 15em;\n" +
    "    height: 15em;\n" +
    "    padding: 0.25em;\n" +
    "    border-radius: .7em;\n" +
    "    //box-shadow: 0 0 .1em rgba(0, 0, 0, 0.15);\n" +
    "}\n" +
    ".member-cover{\n" +
    "    height:17em;\n" +
    "    width: 100%;\n" +
    "    overflow: hidden;\n" +
    "}\n" +
    ".member-cover img{\n" +
    "    width: 100%;\n" +
    "    margin-top: -10%\n" +
    "}\n" +
    ".member-tabs li{\n" +
    "    display: inline;\n" +
    "    font-size: 20px;\n" +
    "    font-family:'Titillium Web',sans-serif;\n" +
    "}\n" +
    ".member-tabs > li > a{\n" +
    "    padding:10px 15px;\n" +
    "    color:rgb(125,125,125);\n" +
    "}\n" +
    ".member-tabs > li > a:hover{\n" +
    "    background-color: #eee;\n" +
    "    border-radius:3px;\n" +
    "}\n" +
    ".member-tab-container ul{\n" +
    "    margin:10px 15px;\n" +
    "}\n" +
    ".imageContainer {\n" +
    "  background:rgba(22,22,22,0.75);\n" +
    "  overflow:hidden;\n" +
    "  min-height: 500px;\n" +
    "  font-family: 'Titillium Web',sans-serif;\n" +
    "  margin:0;padding:0;border:0 none;position: relative;\n" +
    "}\n" +
    ".imageContainerDiv {\n" +
    "  width:100%;\n" +
    "  height: 35em;\n" +
    "  display: flex;\n" +
    "  flex-direction: column;\n" +
    "}\n" +
    ".imageContainerDiv h1 {\n" +
    "  color: rgba(255,255,255,0.9);\n" +
    "  font-size: 50px;\n" +
    "  font-weight: 400;\n" +
    "  margin-top:auto;\n" +
    "  margin-bottom:auto;\n" +
    "}\n" +
    ".imageContainerSmall {\n" +
    "  background:rgba(22,22,22,0.75);\n" +
    "  overflow:hidden;\n" +
    "  min-height: 200px;\n" +
    "  font-family: 'Titillium Web',sans-serif;\n" +
    "  margin:0;padding:0;border:0 none;position: relative;\n" +
    "}\n" +
    ".imageContainerSmallDiv {\n" +
    "  width:100%;\n" +
    "  height: 200px;\n" +
    "  display: flex;\n" +
    "  flex-direction: column;\n" +
    "}\n" +
    ".imageContainerSmallDiv h1 {\n" +
    "  color: rgba(255,255,255,0.9);\n" +
    "  font-size: 50px;\n" +
    "  font-weight: 400;\n" +
    "  margin-top:auto;\n" +
    "  margin-bottom:auto;\n" +
    "}\n" +
    "</style>\n" +
    "<div class=\"imageContainerSmall\">\n" +
    "<!--<div class=\"imageContainerSmall\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">-->\n" +
    "    <div class=\"imageContainerSmallDiv\">  \n" +
    "        <h1 style=\"text-align:left\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "          {{project.title}}\n" +
    "          <span ng-show=\"project.parent\"> | \n" +
    "            <a style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a>\n" +
    "          </span> \n" +
    "        </h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"member-tab-container container\">\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/channels\">Channels</a></li>\n" +
    "    <!--<li><a href=\"/project/{{project.urlTitle}}/charter\">Charter</a></li>-->\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/finance\">Ledger</a></li>\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/members\">{{memberCount}} Members</a></li>\n" +
    "    <li><a href=\"/project/{{project.urlTitle}}/projects\">Organizations</a></li>\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/streams\">Streams</a></li>\n" +
    "    <li><a href=\"/project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
    "		<li ng-show=\"currentUser\">\n" +
    "			<a class=\"btn btn-default\" ng-click=\"toggleEditproject()\">Edit</a>\n" +
    "		</li>\n" +
    "		<li ng-show=\"currentUser\">\n" +
    "			<a class=\"btn btn-default\" ng-click=\"createMember()\">Join</a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "<md-divider></md-divider>\n" +
    "<div class=\"container\" ng-show=\"editProjectToggle\"><p>edit project form</p></div>\n" +
    "<div class=\"project-container container\">\n" +
    "    <div ui-view=\"activity\"></div>\n" +
    "    <div ui-view=\"channels\"></div>\n" +
    "    <div ui-view=\"finance\"></div>\n" +
    "    <div ui-view=\"members\"></div>\n" +
    "    <div ui-view=\"tasks\"></div>\n" +
    "    <div ui-view=\"streams\"></div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("project/templates/activity.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/activity.tpl.html",
    "<style>\n" +
    "</style>\n" +
    "<md-card ng-repeat=\"work in work\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "        <a href=\"/member/{{work.user.username}}\">\n" +
    "            <img src=\"{{work.user.avatarUrl}}\" err-src=\"/images/avatar.png\" style=\"height:32px;\">\n" +
    "            {{work.user.username}}\n" +
    "        </a>\n" +
    "        <p style=\"color:gray;font-size:10px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "        <p><a href=\"task/{{work.task.id}}\">{{work.task.title}}</a></p>\n" +
    "        <td><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></td>\n" +
    "        <p>{{work.amount}}, <a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "        <p>{{work.content}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "\n" +
    "<md-card ng-repeat=\"post in messages.slice().reverse()\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "        <a href=\"/member/{{post.user.username}}\">\n" +
    "            <img src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\" style=\"height:32px;radius:3px\">\n" +
    "            {{post.user.username}}\n" +
    "        </a>\n" +
    "        <br>\n" +
    "        <p style=\"color:gray;font-size:10px\" am-time-ago=\"post.updatedAt\"></p>\n" +
    "        <span ng-bind-html=\"renderMessage(post.title)\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</md-card>\n" +
    "\n" +
    "\n" +
    "<!--<md-card ng-repeat=\"post in messages.slice().reverse()\">\n" +
    "    <div class=\"card-container\">\n" +
    "        <div>\n" +
    "            <a href=\"/member/{{post.user.username}}\">\n" +
    "                <img class=\"post-img\" ng-src=\"{{post.user.avatarUrl}}\" class=\"md-card-image\" alt=\"{{post.user.username}}\">\n" +
    "                <h4 class=\"post-name\">{{post.user.username}}</h4>\n" +
    "            </a>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <span class=\"grey\" am-time-ago=\"post.updatedAt\"></span>\n" +
    "                <div style=\"display:inline\" uib-dropdown is-open=\"status.isopen\">\n" +
    "                    <a uib-dropdown-toggle ng-disabled=\"disabled\" href=\"#\" ng-click=\"\"><i class=\"fa fa-angle-down grey\"></i></a> \n" +
    "                    <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\">\n" +
    "                        <li role=\"menuitem\"><a href=\"#\">Share</a></li>\n" +
    "                        <li role=\"menuitem\"><a href=\"#\">Delete</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"post-container\">\n" +
    "            <p>{{post.title}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "        <a style=\"padding:5px\" href=\"#\" ng-click=\"createReaction(post, 'like', 'post')\" class=\"grey\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px\" href=\"#\" ng-click=\"createReaction(post, 'dislike', 'post')\" class=\"grey\"><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a> \n" +
    "        <a style=\"padding:5px\" href=\"#\" class=\"grey\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"padding:5px\" href=\"#\" class=\"grey\"><i class=\"fa fa-share\"></i> share </a>\n" +
    "        <a style=\"\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</md-card>-->\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-15\"></div>\n" +
    "<form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\">\n" +
    "    </div>\n" +
    "    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newMessage.title\">create</button>\n" +
    "</form>");
}]);

angular.module("project/templates/channels.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/channels.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-2\">\n" +
    "        <md-card ng-repeat=\"channel in channels\" class=\"\">\n" +
    "        	 <div style=\"padding:10px;\">\n" +
    "                <h4><a href=\"#\">{{channel.title}}</a></h3>\n" +
    "            </div>\n" +
    "        </md-card>\n" +
    "        <button class=\"btn btn-default log-btn\">+ Channel</button>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-10\">\n" +
    "        <md-card ng-repeat=\"message in messages.slice().reverse()\">\n" +
    "            <div style=\"padding:10px;\">\n" +
    "                <a href=\"/member/{{message.user.username}}\">\n" +
    "                    <img src=\"{{message.user.avatarUrl}}\" err-src=\"/images/avatar.png\" style=\"height:32px;\">\n" +
    "                    {{message.user.username}}\n" +
    "                </a>\n" +
    "                <br>\n" +
    "                <p style=\"color:gray;font-size:10px\" am-time-ago=\"message.updatedAt\"></p>\n" +
    "                <p>{{message.title}}</p>\n" +
    "            </div>\n" +
    "        </md-card>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <form role=\"form\" ng-submit=\"createMessage(newMessage)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" ng-model=\"newMessage.title\" class=\"form-control\" id=\"messageTitle\">\n" +
    "            </div>\n" +
    "            <button style=\"width:100%\" type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newMessage.title\">Submit</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("project/templates/charter.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/charter.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<br>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newMotionToggle()\">+ Motion</button><br><br>\n" +
    "<md-card ng-show=\"newMotionToggleVar\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "		<form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Motion Title\" type=\"text\" ng-model=\"newBill.title\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Motion Content\" type=\"text\" ng-model=\"newTask.content\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Motion Task Basket\" type=\"text\" ng-model=\"newTask.basket\" class=\"form-control\" id=\"taskBasket\">\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "<table class=\"table table-striped table-hover\">\n" +
    "  <thead>\n" +
    "        <tr>\n" +
    "      		<th>Title</th>\n" +
    "			<th>Organizational Dimensions</th>\n" +
    "			<th>Date</th>\n" +
    "			<th>Vote</th>\n" +
    "			<th></th>\n" +
    "        </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "		<tr ng-repeat=\"bill in bills\">\n" +
    "			<td><h5><a href=\"https://www.voetr.com/bills\">{{bill.title}}</a></h5></td>\n" +
    "			<td>admin, engineering</td>\n" +
    "			<td><span am-time-ago=\"bill.createdAt\"></span>30 seconds ago</td>\n" +
    "			<td><a href=\"https://www.voetr.com/bills\"><button type=\"submit\" class=\"btn btn-default log-btn\">Vote Yes</button></a></td>\n" +
    "			<td><a href=\"tasks\"><button type=\"submit\" class=\"btn btn-default log-btn\">Vote No</button></a></td>\n" +
    "		</tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "<p style=\"text-align:right;font-style:italic\"><a STYLE=\"color:gray\" href=\"https://www.voetr.com\">voetr API</a></p>\n" +
    "");
}]);

angular.module("project/templates/finance.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/finance.tpl.html",
    "<br>\n" +
    "<!--<button class=\"btn btn-default log-btn\" ng-click=\"newLedgerToggle()\">+ LEDGER</button><br><br>-->\n" +
    "<!--<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	<li><a href=\"\">Total</a></li>\n" +
    "	<li><a href=\"\">Assets</a></li>\n" +
    "	<li><a href=\"\">Liabilities</a></li>\n" +
    "	<li><a href=\"\">Work</a></li>-->\n" +
    "	<!--abstract gov responsibilities-->\n" +
    "	<!--<li><a href=\"\">Property</a></li>\n" +
    "	<li><a href=\"\">Liscense</a></li>-->\n" +
    "<!--</ul>-->\n" +
    "<br>\n" +
    "<div class=\"\">\n" +
    "\n" +
    "	<highchart config=\"chart\"></highchart>\n" +
    "\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newEntryToggle()\">+ Entry</button><br><br>\n" +
    "	<md-card ng-show=\"newEntryToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createEntry(newEntry)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"task title\" type=\"text\" ng-model=\"newEntry.title\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"task content\" type=\"text\" ng-model=\"newEntry.taskContent\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"task value\" type=\"text\" ng-model=\"newEntry.value\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newEntry.title\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Description</th>\n" +
    "				<th>Type</th>\n" +
    "				<th>Identifier</th>\n" +
    "				<th>Amount</th>\n" +
    "				<th>Date</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"entry in entries\">\n" +
    "				<td>{{entry.description}}</td>\n" +
    "				<td>{{entry.type}}</td>\n" +
    "				<td>{{entry.identifier}}</td>\n" +
    "				<td>{{entry.amount}}</td>\n" +
    "				<td>{{entry.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/members.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/members.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<br>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">join</button>\n" +
    "<br><br>\n" +
    "<md-card ng-repeat=\"member in members\" class=\"col-md-3\">\n" +
    "	<div style=\"padding:10px;\">\n" +
    "		<img src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\" style=\"height:128px;\">\n" +
    "		<h3><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h3>\n" +
    "		<p style=\"color:gray\">creator</p>\n" +
    "		<p style=\"color:gray\">total time: {{member.user.totalWork}}</p>\n" +
    "		<p style=\"color:gray\">dimensional reputation: 888</p>\n" +
    "	</div>\n" +
    "</md-card>");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
    "<div class=\"container\">\n" +
    "	<h3><a href=\"project/{{project.urlTitle}}\"><img style=\"height:32px\" src=\"{{project.parent.avatarUrl}}\"> <a href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h3>\n" +
    "	<table ng-show=\"projects.length != 0\" class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Title</th>\n" +
    "				<th>Tasks</th>\n" +
    "				<th>Members</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody ng-show=\"projects.length != 0\">\n" +
    "			<tr ng-repeat=\"project in projects\">\n" +
    "				<td><a href=\"project/{{project.urlTitle}}\"><img style=\"height:24px\" src=\"{{project.avatarUrl}}\"> {{project.title}}</a></td>\n" +
    "				<td>{{project.memeberCount}}</td>\n" +
    "				<td>{{project.taskCount}}</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "</div>");
}]);

angular.module("project/templates/streams.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/streams.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<md-card ng-repeat=\"stream in streams\" class=\"col-md-6\">\n" +
    "	<div style=\"padding:10px;\">\n" +
    "		<div ng-bind-html=\"renderMessage(stream.streamUrl)\">></div>\n" +
    "		<h3><a href=\"stream/{{stream.title}}\">{{stream.title}}</a></h3>\n" +
    "		<p><a href=\"member/{{stream.user}}\">{{stream.user}}</a> | <span am-time-ago=\"stream.createdAt\"></span></p>\n" +
    "	</div>\n" +
    "</md-card>");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<br>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newTaskToggle()\">+ Task</button><br><br>\n" +
    "<md-card ng-show=\"newTaskToggleVar\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "		<form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Title\" type=\"text\" ng-model=\"newTask.title\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Content\" type=\"text\" ng-model=\"newTask.content\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Tags\" type=\"text\" ng-model=\"newTask.tags\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Complete Identifier Set\" type=\"text\" ng-model=\"newTask.completeIdentifierSet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Complete Bounty Set\" type=\"text\" ng-model=\"newTask.completeBountySet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Time Identifier Set\" type=\"text\" ng-model=\"newTask.timeIdentifierSet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Time Bounty Set\" type=\"text\" ng-model=\"newTask.timeBountySet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Verification Identifier Set\" type=\"text\" ng-model=\"newTask.verificationIdentifierSet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<div class=\"form-group\">\n" +
    "				<input placeholder=\"Task Verification Bounty Set\" type=\"text\" ng-model=\"newTask.verificationBountySet\" class=\"form-control\" id=\"taskTitle\" >\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "\n" +
    "<table class=\"table table-striped table-hover\">\n" +
    "  <thead>\n" +
    "        <tr>\n" +
    "      		<th>Title</th>\n" +
    "			<th>Content</th>\n" +
    "			<th>Tags</th>\n" +
    "			<th>Bounty</th>\n" +
    "			<th>Date</th>\n" +
    "			<th></th>\n" +
    "        </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "		<tr ng-repeat=\"task in tasks\">\n" +
    "			<td><h5><a href=\"task/{{task.id}}\">{{task.title}}</a></h5></td>\n" +
    "			<td>{{task.content}}</td>\n" +
    "            <td><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></td>\n" +
    "			<td>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></td>\n" +
    "			<td><span  am-time-ago=\"task.createdAt\"></span></td>\n" +
    "			<td><a href=\"task/{{task.id}}\"><button type=\"submit\" class=\"btn btn-default log-btn\">Start Work</button></a></td>\n" +
    "		</tr>\n" +
    "  </tbody>\n" +
    "</table>");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "  <div class=\"container\"> \n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h1><b>Projects</b></h1>\n" +
    "    <div ng-show=\"currentUser\">\n" +
    "      <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ project</button><br><br>\n" +
    "      <div ng-show=\"newProjectToggleVar\">\n" +
    "        <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject(newProject)\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input type=\"text\" placeholder= \"Project Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "            <input type=\"text\" placeholder= \"Project Description\" ng-model=\"newProject.description\" class=\"form-control\">\n" +
    "            <input type=\"text\" placeholder= \"Project Parent\" ng-model=\"newProject.parent\" class=\"form-control\">\n" +
    "          </div>\n" +
    "          <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "        </form>\n" +
    "      </div>\n" +
    "      <br><br>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"post-container col-md-12\" ng-repeat=\"project in projects\">\n" +
    "      <div class=\"col-xs-1\">\n" +
    "        <img style=\"width:50px;height:50px;\" src=\"{{project.avatarUrl}}\">\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-11\">\n" +
    "        <h3><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"intro-header\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <div class=\"site-heading\">\n" +
    "                    <h1 class=\"blue-title\">Create an Account</h1>\n" +
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
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
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
    "	<div class=\"page-heading\">\n" +
    "		<div class=\"container\"> \n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<h1><b>{{searchQuery}}</b></h1>\n" +
    "			<input ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" placeholder=\"{{searchQuery}}\">\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container\">\n" +
    "		<md-card ng-repeat=\"searchResult in searchResults\">\n" +
    "			<div style=\"padding:25px;\">\n" +
    "				<a href=\"project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a>\n" +
    "				<br>\n" +
    "				<a href=\"member/{{searchResult.user.username}}\">{{searchResult.user.username}}</a>\n" +
    "				<br>\n" +
    "				<a href=\"project/{{searchResult.project}}\">{{searchResult.project}}</a>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "		</md-card>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("stream/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("stream/index.tpl.html",
    "<div style=\"background:black\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "	<!--if streaming user-->\n" +
    "    <!--<video id=\"camera-preview\"></video>-->\n" +
    "    <div style=\"text-align:center\">\n" +
    "		<iframe width='560' height='315' src='https://www.cre8bid.io/v/597c55e56833048165c6720c' frameborder='0' allowfullscreen></iframe>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2><a href=\"stream/{{stream.title}}\">{{stream.title}}</a></h2>\n" +
    "	<p>plays, views, live</p>\n" +
    "	<div class=\"\">\n" +
    "		<img style=\"width:75px;border-radius:100px; \"src=\"{{stream.user.avatarUrl}}\"/>\n" +
    "	</div>\n" +
    "	<div class=\"\">\n" +
    "		<p><a href=\"member/{{stream.user.username}}\">{{stream.user.username}}</a></p>\n" +
    "		<p><a href=\"project/{{stream.project.title}}\">{{stream.project.title}}</a></p>\n" +
    "		<p><a href=\"task/{{stream.task.id}}\">{{stream.task.title}}</a></p>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--chat-->\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("task/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<div class=\"container\">\n" +
    "  <h3>{{task.title}}</h3>\n" +
    "  <div style=\"font-style:italic;color:gray\">\n" +
    "    \n" +
    "    <p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "    <p>{{task.content}}</p>\n" +
    "    <p>{{task.status}}</p>\n" +
    "    <p>Dimensional Task Verification Score: 1 </p>\n" +
    "    <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item)\">+</button>\n" +
    "    <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item)\">-</button>\n" +
    "\n" +
    "    <br><br>\n" +
    "    <p>onTime: {{task.timeBountySet}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a></p>\n" +
    "    <p>onTimeStream: {{task.timeBountySet*1.4}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a></p>\n" +
    "    <p>onCompletion: {{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></p>\n" +
    "    <p>onVerification: {{task.verificationBountySet}} <a href=\"market/{{task.verificationIdentifierSet}}\">{{task.verificationIdentifierSet}}</a></p>\n" +
    "\n" +
    "    <!--MARKET LINKS TO TOKEN LIQUIDITY RE ORDER ON BOOK FOR TASK TOKENS-->\n" +
    "    <!--TOKENS MINTING PER ACTION-->\n" +
    "\n" +
    "    <br>\n" +
    "    <p>Tokens</p>\n" +
    "    <p><a href=\"market/{{task.id}}+onTime\">onTime+{{task.id}}</a></p>\n" +
    "    <p><a href=\"market/{{task.id}}+onTimeStream\">onTimeStream+{{task.id}}</a></p>\n" +
    "    <p><a href=\"market/{{task.id}}+onCompletion\">onCompletion+{{task.id}}</a></p>\n" +
    "    <p><a href=\"market/{{task.id}}+onVerification\">onVerification+{{task.id}}</a></p>\n" +
    "    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{task.id}} </a></p>\n" +
    "    <p><a href=\"market/{{task.project.urlTitle}}\">{{task.project.title}} (+{{task.id}})</a></p>\n" +
    "    <p><a href=\"market/general\">general</a></p>\n" +
    "\n" +
    "    <br>\n" +
    "    <p>Token Liquidity</p>\n" +
    "    <p><a href=\"market/onTime+{{task.id}}\">onTime+{{task.id}}</a> / {{task.timeBountySet}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/onTime+{{task.id}}/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "    <p><a href=\"market/onTimeStream+{{task.id}}\">onTimeStream+{{task.id}}</a> / {{task.timeBountySet*1.4}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onTimeStream/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "    <p><a href=\"market/onCompletion+{{task.id}}\">onCompletion+{{task.id}}</a> / {{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onCompletion/{{task.completeIdentifierSet}}\">MARKET</a></p>\n" +
    "    <p><a href=\"market/onVerification+{{task.id}}\">onVerification+{{task.id}}</a> / {{task.verificationBountySet}} <a href=\"market/{{task.verificationIdentifierSet}}\">{{task.verificationIdentifierSet}}</a> / <a href=\"market/onVerification+{{task.id}}/{{task.verificationIdentifierSet}}\">MARKET</a></p>\n" +
    "\n" +
    "    <br>\n" +
    "  </div>\n" +
    "\n" +
    "  <div>\n" +
    "    <h3>{{taskTime}}</h3>\n" +
    "    <p>{{(taskTime / totalTime)*task.timeBountySet}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a></p>\n" +
    "\n" +
    "    <!--\n" +
    "    <iframe width='560' height='315' src='https://www.bidio.co/v/57954ce9dea046030031007a' frameborder='0' allowfullscreen></iframe>\n" +
    "    <button style=\"width:100%%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">start stream</button>\n" +
    "    -->\n" +
    "\n" +
    "    <button ng-show=\"!working\" type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"start()\">Start Work</button>\n" +
    "    <!--form-->\n" +
    "    <input ng-show=\"working\" type=\"text\" placeholder=\"Content\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "    <button ng-show=\"working\" style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">Submit work</button>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "  <table class=\"table table-striped table-hover\">\n" +
    "      <thead>\n" +
    "          <tr>\n" +
    "              <th>Time</th>\n" +
    "              <th>Content</th>\n" +
    "              <th>Member</th>\n" +
    "              <th>Stream</th>\n" +
    "              <th>Date</th>\n" +
    "              <th>Verification</th>\n" +
    "              <th>Verify</th>\n" +
    "          </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "          <tr ng-repeat=\"item in work\">\n" +
    "              <td><a href=\"work/{{item.id}}\">{{item.amount}}</a></td>\n" +
    "              <td>{{item.content || 'N/A'}}</td>\n" +
    "              <td><a href=\"member/{{item.user.username}}\">{{item.user.username}}</a></td>\n" +
    "              <td><a href=\"stream/{{item.stream || '1'}}\">{{item.stream || 'Not Available'}}</a></td>\n" +
    "              <td><span am-time-ago=\"item.createdAt\"></span></td>\n" +
    "              <td>{{item.verificationScore}}</td>\n" +
    "              <td><button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"verify(item)\">verify</button></td>\n" +
    "          </tr>\n" +
    "      </tbody>\n" +
    "  </table>\n" +
    "\n" +
    "  <!--\n" +
    "  <md-card ng-repeat=\"item in work\" class=\"col-md-6\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "      <h4><a href=\"stream/{{item}}\">{{item}}</a></h4>\n" +
    "      <h4><a href=\"member/troverman\">troverman</a></h4>\n" +
    "      <iframe width='510' height='265' src='https://www.cre8bid.io/v/597c55e56833048165c6720c' frameborder='0' allowfullscreen></iframe>\n" +
    "      <button type=\"submit\" class=\"btn btn-default log-btn\">Validate Work</button>\n" +
    "    </div>\n" +
    "  </md-card>\n" +
    "  -->\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing:50px;\"></div>\n" +
    "");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("tasks/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "	<div class=\"container\"> \n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\"><h1>Tasks</h1></div>\n" +
    "			<div class=\"col-xs-6\"><h3 style=\"text-align:right\"><i class=\"fa fa-angle-down\"></i></h3></div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<table class=\"table table-striped table-hover\">\n" +
    "		<thead>\n" +
    "		    <tr>\n" +
    "		  		<th>Title</th>\n" +
    "				<th>Content</th>\n" +
    "				<th>Tags</th>\n" +
    "				<th>Bounty</th>\n" +
    "				<th>Date</th>\n" +
    "				<th></th>\n" +
    "		    </tr>\n" +
    "		</thead>\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"task in tasks\">\n" +
    "				<td><h5><a href=\"task/{{task.id}}\">{{task.title}}</a></h5></td>\n" +
    "				<td>{{task.content}}</td>\n" +
    "                <td><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></td>\n" +
    "				<td>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></td>\n" +
    "				<td><span  am-time-ago=\"task.createdAt\"></span></td>\n" +
    "				<td><a href=\"task/{{task.id}}\"><button type=\"submit\" class=\"btn btn-default log-btn\">Start Work</button></a></td>\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("transparency/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("transparency/index.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<!--this is gonna be infographic like-->\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<h2><a href=\"project/conexus\">Transparency</a></h2>\n" +
    "			<p>transparent contrubition, equatable representation</p>\n" +
    "			<h3>open balanace sheet</h3>\n" +
    "			<table class=\"table table-inverse table-hover\">\n" +
    "			    <thead>\n" +
    "					<tr>\n" +
    "						<th>Description</th>\n" +
    "						<th>Type</th>\n" +
    "						<th>Identifier</th>\n" +
    "						<th>Amount</th>\n" +
    "						<th>Date</th>\n" +
    "					</tr>\n" +
    "			    </thead>\n" +
    "			    <tbody>\n" +
    "					<tr>\n" +
    "						<td>DNS HOSTING</td>\n" +
    "						<td>PAYMENT</td>\n" +
    "						<td>CRE8</td>\n" +
    "						<td>12.29</td>\n" +
    "						<td>23 seconds ago</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td>AMAZON S3</td>\n" +
    "						<td>PAYMENT</td>\n" +
    "						<td>CONEX</td>\n" +
    "						<td>223.8</td>\n" +
    "						<td>3 minutes ago</td>\n" +
    "					</tr>\n" +
    "					<tr>\n" +
    "						<td>CONEX TASK</td>\n" +
    "						<td>PAYMENT</td>\n" +
    "						<td>CONEX</td>\n" +
    "						<td>345</td>\n" +
    "						<td>1 hour ago</td>\n" +
    "					</tr>\n" +
    "			    </tbody>\n" +
    "			</table>\n" +
    "			<button class=\"btn btn-default log-btn\">give to conex</button>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h3>Stats</h3>\n" +
    "			<p>13 companies, 35 collaborators, $8,000,000 monthly revenue</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("work/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("work/index.tpl.html",
    "<style>md-card{margin:0px; overflow:hidden;}</style>\n" +
    "<div class=\"container\">\n" +
    "  <h3>{{work}}</h3>\n" +
    "  <h3>{{work.user}}</h3>\n" +
    "  <h3>{{work.task}}</h3>\n" +
    "  <h3>{{work.project}}</h3>\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);
