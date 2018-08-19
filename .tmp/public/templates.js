angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'discover/index.tpl.html', 'footer/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'market/index.tpl.html', 'marketPair/index.tpl.html', 'markets/index.tpl.html', 'member/index.tpl.html', 'member/templates/activity.tpl.html', 'member/templates/content.tpl.html', 'member/templates/followers.tpl.html', 'member/templates/following.tpl.html', 'member/templates/ledger.tpl.html', 'member/templates/positions.tpl.html', 'nav/index.tpl.html', 'order/index.tpl.html', 'post/index.tpl.html', 'post/post.tpl.html', 'project/index.tpl.html', 'project/templates/activity.tpl.html', 'project/templates/channels.tpl.html', 'project/templates/charter.tpl.html', 'project/templates/content.tpl.html', 'project/templates/ledger.tpl.html', 'project/templates/members.tpl.html', 'project/templates/positions.tpl.html', 'project/templates/projects.tpl.html', 'project/templates/tasks.tpl.html', 'projects/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html', 'stream/index.tpl.html', 'task/index.tpl.html', 'tasks/index.tpl.html', 'transparency/index.tpl.html', 'work/index.tpl.html']);

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
    "		<!--<h1>conex.us | CRE8.XYZ</h1>-->\n" +
    "		<h1>CRE8.XYZ</h1>\n" +
    "		<h4>Creating the Next Wave of Public Organizations</h4>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>Discover a Transparent, Creative, and Collaborative Network</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Connect with new collaborators and create awesome things</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<h4>Create the Next Wave</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A 24/7 continual hackathon</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/connect\">Discover</a>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>Governance of Collaborators</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Reputation Protocols | Working together toward a common goal</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section3\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<!--<div class=\"col-md-6\"></div>-->\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>MultiDimensional Token Market</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create dimensional liquidity for transparent and reputationally validated work</p> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>Transparency</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Transparent Contributions and Equitable Representation</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Reputation Systems and Task Verification</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Open Finance and Contribution</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Tokenized & Market Liquid Actions</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	    <div class=\"row\">\n" +
    "	        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "				<h3><b>Join Our Community</b></h3><hr>\n" +
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
    "	                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><h4><i class=\"fa fa-facebook\"></i> Facebook</h4></a>\n" +
    "	                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><h4><i class=\"fa fa-twitter\"></i> Twitter</h4></a>\n" +
    "	                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><h4><i class=\"fa fa-google\"></i> Google</h4></a>\n" +
    "	                    </div>\n" +
    "						<br><hr>\n" +
    "	                    <div class=\"social-log\">\n" +
    "	                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "	                    </div>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	            <div class=\"selfClear\"></div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("account/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-4\">\n" +
    "			<div class=\"member-card\">\n" +
    "			    <div class=\"member-card-image\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "			        <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-info\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\">{{currentUser.status}} live | online | working</p>\n" +
    "			        <p style=\"color:gray\">total reputation | {{currentUser.totalWork}}</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-social\">\n" +
    "			        <a ng-show=\"currentUser.socialAccounts.facebook.profileUrl\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "			        <a ng-show=\"currentUser.socialAccounts.twitter.profileUrl\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "			        <a ng-show=\"currentUser.socialAccounts.google.profileUrl\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-8\">\n" +
    "			<h3>Balances</h3>\n" +
    "			<p>Tokens | Peer Contrubution</p>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "	<h4>{{currentUser.email}}</h4>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<h3>Update Avatar</h3>\n" +
    "	<a href=\"#\">\n" +
    "		<div class=\"well\" ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "			<div>Drag photos or click here to upload.</div>\n" +
    "			<div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  		\n" +
    "		</div>\n" +
    "	</a>\n" +
    "	<p ng-show=\"avatarLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "	<div ng-show=\"avatarLoading\" class=\"progress\">\n" +
    "		<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{avatarPercentage}}%;\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<h3>Settings</h3>\n" +
    "	<p>GPS Tracking</p>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<h3>Connected Accounts</h3>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/google\">Google</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/twitter\">Twitter</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/facebook\">Facebook</a></button>\n" +
    "	<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">Fitbit</a></button>\n" +
    "	<!--TODO: tokenized apps.. connect in..-->\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"\">Edit Account</button>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("discover/index.tpl.html",
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
    "	<div class=\"spacing-10\"></div>\n" +
    "	<h1>Discover</h1>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "		<li><a href=\"\">Content</a></li>\n" +
    "		<li><a href=\"\">Members</a></li>\n" +
    "		<li><a href=\"/projects\">Projects</a></li>\n" +
    "		<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "		<li><a href=\"\">Work</a></li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<!--TODO: FILTER / SEARCH -->\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "            <!--\n" +
    "            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Filters <i class=\"fa fa-angle-down\"></i></h5>\n" +
    "                </a>\n" +
    "                <ul style=\"position:relative\" class=\"dropdown-menu\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>tag:</h5></a></li>\n" +
    "                    <hr class=\"sort-hr\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('memberCount DESC')\"><h5>@:</h5></a></li>\n" +
    "                    <hr class=\"sort-hr\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>has:</h5></a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            -->\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<h1>Value Sets</h1>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<h1>Members</h1>\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "		<div class=\"member-card\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "		        <a href=\"member/{{member.username}}\"><img ng-src=\"{{member.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a href=\"member/{{member.username}}\">{{member.username}}</a></h4>\n" +
    "		        <p style=\"color:gray\">{{member.status}} live | online | working</p>\n" +
    "		        <p style=\"color:gray\">total reputation | {{member.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">dimensional | 888</p>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-social\">\n" +
    "		        <a ng-show=\"member.socialAccounts.facebook.profileUrl\" href=\"{{member.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "		        <a ng-show=\"member.socialAccounts.twitter.profileUrl\" href=\"{{member.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "		        <a ng-show=\"member.socialAccounts.google.profileUrl\" href=\"{{member.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<h1>Streams | Content | Posts</h1>\n" +
    "	<div class=\"col-md-6\" ng-repeat=\"stream in streams\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<div ng-bind-html=\"renderMessage(stream.streamUrl)\">></div>\n" +
    "				<h3><a href=\"stream/{{stream.title}}\">{{stream.title}}</a></h3>\n" +
    "				<p><a href=\"member/{{stream.user}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{stream.user.avatarUrl}}\" src=\"{{stream.user.avatarUrl}}\">\n" +
    "					{{stream.user}}\n" +
    "				</a> | <span am-time-ago=\"stream.createdAt\"></span></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<h1>Projects</h1>\n" +
    "	<div ng-repeat=\"project in projects\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-1\">\n" +
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-9\">\n" +
    "                        <h3 style=\"margin-top:0px\">\n" +
    "                            <a href=\"/project/{{project.urlTitle}}\">\n" +
    "                                <!--<img style=\"width:50px;height:50px;margin-right:5px\" src=\"{{project.avatarUrl}}\">-->\n" +
    "                                {{project.title}}\n" +
    "                            </a>\n" +
    "                        </h3>\n" +
    "                        <p style=\"color:gray;font-style:italic;\">{{project.description}}</p>\n" +
    "                        <!--{{project.memberCount}} | {{project.taskCount}} | {{project.workTime}}-->\n" +
    "                        <!--<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>-->\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-2\" style=\"text-align:right\">\n" +
    "                        <h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "                        <!--<h4>0 <i class=\"fa fa-user\"></i></h4>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<h1>Tasks</h1>\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "						<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "						<p>{{task.content}}</p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<!--<a href=\"task/{{task.id}}\"><button type=\"submit\" class=\"btn btn-default log-btn\">Start Work</button></a>-->\n" +
    "						<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "						<!--TODO: DO IT FOR REAL-->\n" +
    "						<!--<h4 ng-show=\"!task.completeBountySet\"><a href=\"market/{{task.id}}\">Create Liquidity</a></h4>-->\n" +
    "						<!--<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>-->\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<!--TODO: TASK VERIFICATION-->\n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<!--<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>-->\n" +
    "				<!--<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\">\n" +
    "			<a>{{date | date:'yyyy'}}</a>\n" +
    "			<a href=\"/\">conex.us</a>\n" +
    "			<a href=\"/about\">about</a>\n" +
    "			<!--<a href=\"/connect\">discover</a>-->\n" +
    "			<a href=\"/market\">market</a>\n" +
    "			<a href=\"/projects\">projects</a>\n" +
    "			<a href=\"/tasks\">tasks</a>\n" +
    "			<!--<a href=\"/tasks\">work</a>-->\n" +
    "			<!--<a href=\"/transparency\">transparency</a>-->\n" +
    "			<!--<a href=\"/project/conexus/ledger\">transparency</a>-->\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<a href=\"/\"><img src=\"images/conexus-white.png\"></A>\n" +
    "			<!--<br><br><br>\n" +
    "			<a style=\"float:right\" href=\"https://www.instagram.com/conex.us\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "			<a style=\"float:right\" href=\"https://www.twitter.com/conex_us\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "			<a style=\"float:right\" href=\"https://www.voetr.com/committee/conexus\"><i class=\"fa fa-check\"></i></a>-->\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<!--TEMP | LOGGED IN / DASH-->\n" +
    "<div ng-show=\"currentUser\">\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"col-md-3\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "\n" +
    "					<img class=\"avatar\" style=\"margin-top:0em\" ng-src=\"{{currentUser.avatarUrl}}\"/>\n" +
    "					<h2><a href=\"/member/{{currentUser.username}}\">{{currentUser.username}}</a></h2>\n" +
    "					<p>{{member.totalWork}}</p>\n" +
    "					<!--<p>{{member.walletAddress}}</p>-->\n" +
    "					<!--<p>info | wallet</p>-->\n" +
    "\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-9\">\n" +
    "\n" +
    "			<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "				<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "				<li><a href=\"\">Discover</a></li>\n" +
    "				<li><a href=\"\">Posts</a></li>\n" +
    "				<li><a href=\"\">Projects</a></li>\n" +
    "				<li><a href=\"\">Positions</a></li>\n" +
    "				<li><a href=\"\">Notifications</a></li>\n" +
    "				<li><a href=\"\">Tasks</a></li>\n" +
    "				<li><a href=\"\">Work</a></li>\n" +
    "			</ul>\n" +
    "\n" +
    "			<div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "\n" +
    "		        	<h1>Create Your Value Map</h1>\n" +
    "					<h4>Our Social Responsibility | Dimensional Vote | Manifest Pluralism</h1>\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "					<!--<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>-->\n" +
    "\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "\n" +
    "			<!--\n" +
    "			<div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "		        	<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "						<div class=\"form-group\">\n" +
    "							<input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "						</div>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "			-->\n" +
    "\n" +
    "			<!--tasks, work, posts, activity-->\n" +
    "			<!--TODO: ACTIVITY-->\n" +
    "			<div ng-repeat=\"post in posts\">\n" +
    "		        <div class=\"card\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "						<div>\n" +
    "\n" +
    "\n" +
    "							<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "							<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "							<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "							<!--TODO: POST PARENT TYPES-->\n" +
    "							<a ng-show=\"post.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{post.market}}\">market {{post.market}}</a>\n" +
    "							<a ng-show=\"post.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{post.order}}\">order {{post.order}}</a>\n" +
    "							<a ng-show=\"post.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{post.post}}\">post {{post.post}}</a>\n" +
    "							<a ng-show=\"post.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{post.profile}}\">profile {{post.profile}}</a>\n" +
    "							<a ng-show=\"post.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{post.project.urlTitle}}\">{{post.project.title}}</a>\n" +
    "							<a ng-show=\"post.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{post.task}}\">task {{post.task}}</a>\n" +
    "							<a ng-show=\"post.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{post.work}}\">work {{post.work}}</a>\n" +
    "\n" +
    "							<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "\n" +
    "						</div>\n" +
    "						<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "						<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "						<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "						<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "					</div>\n" +
    "					<!--TODO: NESTED -->\n" +
    "					<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "						<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "							</div>\n" +
    "							<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<div ng-click=\"loadMore()\" style=\"text-align:center\">\n" +
    "				<button style=\"width:100%\" class=\"btn btn-default\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--TEMP | LOGGED OUT / SPLASH -->\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	<div class=\"header-area container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>CRE8 MULTIDIMENSIONAL VALUE</h2>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"font-style:italic;margin:0px;color:gray\">Create and participate in transparent, crowdsourced, organizations</p>\n" +
    "				<p style=\"font-style:italic;margin:0px;color:gray\">Create value through tokenized actions</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/about\">learn more</a>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:center\">\n" +
    "				<img style=\"max-height:200px\" src=\"/images/loading.gif\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
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
    "				<div class=\"spacing-50\"></div>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>BUILD THE VALUE MATRIX</h2>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"font-style:italic;margin:0px;color:gray\">Manifest pluralism</p>\n" +
    "				<p style=\"font-style:italic;margin:0px;color:gray\">Vote and map your value respective to a complete set of tokenized potiental</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/market\">explore the market</a>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "	    <div class=\"row\">\n" +
    "	        <div class=\"col-lg-12 col-md-12\">\n" +
    "				<h3><b>Join Our Community</b></h3><hr>\n" +
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
    "	                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><h4><i class=\"fa fa-facebook\"></i> Facebook</h4></a>\n" +
    "	                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><h4><i class=\"fa fa-twitter\"></i> Twitter</h4></a>\n" +
    "	                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><h4><i class=\"fa fa-google\"></i> Google</h4></a>\n" +
    "	                    </div>\n" +
    "						<br><hr>\n" +
    "	                    <div style=\"text-align:center\">\n" +
    "	                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "	                    </div>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	            <div class=\"selfClear\"></div>\n" +
    "	        </div>   \n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "			<li><a href=\"\">Discover</a></li>\n" +
    "			<li><a href=\"\">Posts</a></li>\n" +
    "			<li><a href=\"\">Projects</a></li>\n" +
    "			<li><a href=\"\">Positions</a></li>\n" +
    "			<li><a href=\"\">Tasks</a></li>\n" +
    "			<li><a href=\"\">Time</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- TEMP | WORK -->\n" +
    "	<div class=\"container\">\n" +
    "		<div ng-repeat=\"work in work\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{work.user.username}}\">{{work.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "		                <a style=\"display:inline;font-weight:600\" href=\"task/{{work.task.id}}\">{{work.task.title}}</a>\n" +
    "		                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "						<a style=\"display:inline;font-weight:600\" href=\"work/{{work.id}}\">{{work.amount}}</a>\n" +
    "						<p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "					</div>\n" +
    "        			<p ng-show=\"work.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "	            	<p style=\"margin-left:42px\" ng-show=\"work.task.completeIdentifierSet\"><a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "	                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(work.content)\"></span></div>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- TEMP | POST -->\n" +
    "	<div class=\"container\">\n" +
    "	    <div ng-repeat=\"post in posts\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "						<!--TODO: POST TYPES-->\n" +
    "						<a ng-show=\"post.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{post.market}}\">market {{post.market}}</a>\n" +
    "						<a ng-show=\"post.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{post.order}}\">order {{post.order}}</a>\n" +
    "						<a ng-show=\"post.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{post.post}}\">post {{post.post}}</a>\n" +
    "						<a ng-show=\"post.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{post.profile}}\">profile {{post.profile}}</a>\n" +
    "						<a ng-show=\"post.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{post.project.urlTitle}}\">{{post.project.title}}</a>\n" +
    "						<a ng-show=\"post.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{post.task}}\">task {{post.task}}</a>\n" +
    "						<a ng-show=\"post.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{post.work}}\">work {{post.work}}</a>\n" +
    "\n" +
    "						<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "\n" +
    "					</div>\n" +
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\" style=\"max-height:500px\">\n" +
    "    <div class=\"intro-container\">\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"intro-desktop-text\">\n" +
    "          <text style=\"font-size:32px;\" text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"488\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            CRE8.XYZ\n" +
    "          </text> \n" +
    "          <text style=\"font-size:32px;\" text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"570\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            <!--Connect. Collab. Create.-->\n" +
    "            CRE8 MULTIDIMENSIONAL VALUE\n" +
    "          </text> \n" +
    "        </symbol>\n" +
    "        <!--<div style=\"text-align:center;\">\n" +
    "          <img style=\"position:absolute;top:35%;bottom:0;left:0;right:0;margin:0 auto;height:100px\" src=\"images/conexus-white.png\">\n" +
    "        </div>-->         \n" +
    "        <div class=\"intro-shade\"></div>  \n" +
    "      </svg> \n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <!--<video itemscope itemtype=\"VideoObject\"\n" +
    "              class=\"video\" \n" +
    "              src=\"videos/video.mp4\"\n" +
    "              preload=\"auto\" \n" +
    "              autoplay=\"autoplay\" \n" +
    "              loop=\"loop\" \n" +
    "              muted=\"muted\">\n" +
    "          </video>-->\n" +
    "          <video itemscope itemtype=\"VideoObject\"\n" +
    "              class=\"video\" \n" +
    "              src=\"https://s3-us-west-2.amazonaws.com/voetr/washington.mp4\"\n" +
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
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <h1>Login |  Welcome back!</h1>   \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
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
    "                        <a class=\"btn btn-social btn-facebook\" href=\"\"><h4><i class=\"fa fa-facebook\"></i> Facebook</h4></a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" href=\"\"><h4><i class=\"fa fa-twitter\"></i> Twitter</h4></a>\n" +
    "                        <a class=\"btn btn-social btn-google\" href=\"\"><h4><i class=\"fa fa-google\"></i> Google</h4></a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\"><h4>Need an Account?</h4></a>\n" +
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
    "\n" +
    "\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTime\">onTime</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTimeStream\">onTimeStream</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onReact\">onReact</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onPost\">onPost</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onOrder\">onOrder</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onVote\">onVote</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onView\">onView</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onValidate\">onValidate</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onMine\">onMine</a></td></tr>\n" +
    "\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/CRE8\">CRE8</a></td></tr>\n" +
    "\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTimeStream+5b0b34c1d0f57258271d8b17\">onTimeStream+5b0b34c1d0f57258271d8b17</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTime+5b0b34c1d0f57258271d8b17\">onTime+5b0b34c1d0f57258271d8b17</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTimeStream+5b143af632b5561400b184ec\">onTimeStream+5b143af632b5561400b184ec</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onTimeStream+5b143af632b5561400b184ec\">onTime+5b143af632b5561400b184ec</a></td></tr>\n" +
    "\n" +
    "\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Order Book</h2>\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "	<md-card ng-show=\"newOrderToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "				<th>Order Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
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
    "				<th>Order Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Transactions</h2>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	 <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set</th>\n" +
    "				<th>Value Set</th>\n" +
    "				<th>To</th>\n" +
    "				<th>From</th>\n" +
    "				<th>Transaction Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	</table>\n" +
    "\n" +
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
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" ng-disabled=\"true\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<!--<h4>Bids</h4>-->\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<!--<h4>Asks</h4>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>-->\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h2>Trades</h2>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "				<th>Order Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
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
    "\n" +
    "	<!--TODO: FILTER / SEARCH -->\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead><tr><th>Token</th></tr></thead>\n" +
    "	    <tbody>\n" +
    "\n" +
    "			<tr><td><a href=\"market/onTime\">onTime</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onTimeStream\">onTimeStream</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onReact\">onReact</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onPost\">onPost</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onOrder\">onOrder</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onVote\">onVote</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onView\">onView</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onValidate\">onValidate</a></td></tr>\n" +
    "			<tr><td><a href=\"market/{{stateParams.id}}/onMine\">onMine</a></td></tr>\n" +
    "\n" +
    "			<tr><td><a href=\"market/onTimeStream+5b0b34c1d0f57258271d8b17\">onTimeStream+5b0b34c1d0f57258271d8b17</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onTime+5b0b34c1d0f57258271d8b17\">onTime+5b0b34c1d0f57258271d8b17</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onTimeStream+5b143af632b5561400b184ec\">onTimeStream+5b143af632b5561400b184ec</a></td></tr>\n" +
    "			<tr><td><a href=\"market/onTimeStream+5b143af632b5561400b184ec\">onTime+5b143af632b5561400b184ec</a></td></tr>\n" +
    "\n" +
    "			<tr><td><a href=\"market/CRE8\">CRE8</a></td></tr>\n" +
    "			<tr><td><a href=\"market/NOVO\">NOVO</a></td></tr>\n" +
    "			<tr><td><a href=\"market/CONEX\">CONEX</a></td></tr>\n" +
    "			<tr><td><a href=\"market/DURHAM\">DURHAM</a></td></tr>\n" +
    "			<tr><td><a href=\"market/CHAPEL_HILL\">CHAPEL HILL</a></td></tr>\n" +
    "			<tr><td><a href=\"market/token4\">ALCOA</a></td></tr>\n" +
    "			<tr><td><a href=\"market/OAK_RIDGE\">OAK RIDGE</a></td></tr>\n" +
    "			\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<h1>Order Book</h1>\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "	<md-card ng-show=\"newOrderToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</md-card>\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>Asset Set 1</th>\n" +
    "				<th>Asset Set 2</th>\n" +
    "				<th>Order Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
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
    "				<th>Order Id</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"order in orders\">\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "\n" +
    "				<td>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "				</td>\n" +
    "				<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
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
    "					<li><a href=\"member/{{member.username}}/content\">Content</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/followers\">{{followersCount.length}} Followers</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/following\">{{followingCount.length}} Following</a></li>\n" +
    "					<!--<li><a href=\"member/{{member.username}}\">{{followersCount.length}} Projects</a></li>-->\n" +
    "					<li><a href=\"member/{{member.username}}/ledger\">Ledger</a></li>\n" +
    "					<!--<li><a href=\"member/{{member.username}}\">Map</a></li>-->\n" +
    "					<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}\">Time</a></li>\n" +
    "					<li ng-show=\"currentUser.id != member.id\">\n" +
    "						<a class=\"btn btn-default\" ng-click=\"follow()\">Follow</a>\n" +
    "						<a ng-show=\"isFollowing\" class=\"btn btn-default\" ng-click=\"unfollow()\">UnFollow</a>\n" +
    "					</li>\n" +
    "					<li ng-show=\"currentUser.id == member.id\">\n" +
    "						<a class=\"btn btn-default\" href=\"account\">Edit Profile</a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<md-divider  style=\"color:gray\"></md-divider>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "				<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "				<h5>@{{member.username}}</h5>\n" +
    "				<p>{{member.totalWork}} | total reputation</p>\n" +
    "			</div>\n" +
    "			<div class=\"pull-right\" style=\"margin-right:15px;margin-top:10px;\">\n" +
    "\n" +
    "				<!--<h2>{{member.totalWork}} | total work</h2>-->\n" +
    "				<!--<input type=\"text\" placeholder=\"Reputation\" ng-model=\"reputationLookup\" class=\"form-control\">-->\n" +
    "				<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.username}}\">\n" +
    "				<a style=\"padding:10px 15px;color:rgb(125,125,125)\"class=\"btn btn-default\" href=\"#\" ng-click=\"newTransactionToggle()\">Send Tokens</a>\n" +
    "				<a ng-show=\"member.socialAccounts.facebook.profileUrl\" href=\"{{member.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><span class=\"grey facebook-icon\"><i class=\"fa fa-facebook\"></i> Facebook</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.twitter.profileUrl\" href=\"{{member.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><span class=\"grey twitter-icon\"><i class=\"fa fa-twitter\"></i> Twitter</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.google.profileUrl\" href=\"{{member.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><span class=\"grey google-icon\"><i class=\"fa fa-google\"></i> Google</span></a>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"container\" ng-show=\"newTransactionToggleVar\">\n" +
    "			<div class=\"card\">\n" +
    "			    <div style=\"padding:10px;\">\n" +
    "			    	<h3 style=\"text-align:left;margin-left:15px;margin-bottom:15px;\">Send Tokens</h3>\n" +
    "					<form role=\"form\" ng-submit=\"createTransaction(newTransaction)\">\n" +
    "						<div class=\"form-group col-md-12\">\n" +
    "							<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<div class=\"form-group col-md-6\">\n" +
    "							<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<div class=\"form-group col-md-6\">\n" +
    "							<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<!--<div class=\"form-group col-md-6\">\n" +
    "							<button class=\"btn btn-secondary\">Add Token</button>\n" +
    "						</div>-->\n" +
    "						<div class=\"form-group col-md-12\">\n" +
    "							<textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "						</div>\n" +
    "						<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<md-divider style=\"color:gray\"></md-divider>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"profile-container container\">\n" +
    "		<div ui-view=\"memberActivity\"></div>\n" +
    "		<div ui-view=\"memberContent\"></div>\n" +
    "		<div ui-view=\"memberFollowers\"></div>\n" +
    "		<div ui-view=\"memberFollowing\"></div>\n" +
    "		<div ui-view=\"memberLedger\"></div>\n" +
    "		<div ui-view=\"memberPositions\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"col-md-12\" ng-show=\"currentUser\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "    </form>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\" ng-repeat=\"work in work\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{work.user.username}}\">{{work.user.username}}</a>\n" +
    "                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                <a style=\"display:inline;font-weight:600\" href=\"task/{{work.task.id}}\">{{work.task.title}}</a>\n" +
    "                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                <a style=\"display:inline;font-weight:600\" href=\"work/{{work.id}}\">{{work.amount}}</a>\n" +
    "                <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <p ng-show=\"work.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "            <p style=\"margin-left:42px\" ng-show=\"work.task.completeIdentifierSet\"><a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(work.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "            <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <div ng-show=\"work.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-md-12\" ng-repeat=\"post in posts\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "\n" +
    "                <!--TODO: POST TYPES-->\n" +
    "                <div style=\"display:inline;\" ng-show=\"post.profile != post.user.id && post.profile != member.id\">\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a ng-show=\"post.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{post.market}}\">market {{post.market}}</a>\n" +
    "                    <a ng-show=\"post.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{post.order}}\">order {{post.order}}</a>\n" +
    "                    <a ng-show=\"post.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{post.post}}\">post {{post.post}}</a>\n" +
    "                    <a ng-show=\"post.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{post.profile}}\">profile {{post.profile}}</a>\n" +
    "                    <a ng-show=\"post.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{post.project.urlTitle}}\">{{post.project.title}}</a>\n" +
    "                    <a ng-show=\"post.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{post.task}}\">task {{post.task}}</a>\n" +
    "                    <a ng-show=\"post.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{post.work}}\">work {{post.work}}</a>\n" +
    "                </div>\n" +
    "\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "            <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("member/templates/content.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/content.tpl.html",
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"row\" ng-show=\"true\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "    	<!-- POST WITH ATTACHMENT -->\n" +
    "    	<!-- MASTER POST MODEL FOR CONTENT? YE THINK REDDIT -->\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ Content</button><br><br>\n" +
    "        <div ng-show=\"newProjectToggleVar\">\n" +
    "            <form class=\"blog-input\" role=\"form\" ng-submit=\"createContent()\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Project\" ng-model=\"newContent.project\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Type\" ng-model=\"newContent.type\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                    <input type=\"text\" placeholder= \"Content Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Content\" ng-model=\"newContent.content\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Attachment\" ng-model=\"newContent.attachment\" class=\"form-control\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"card\">\n" +
    "    <form style=\"display:flex;flex-direction:row;\">\n" +
    "        <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "<!--POST MODEL | CONTENT TYPE -->\n" +
    "<!--ATTACHED FILE(S) | VIDEO(S) | TEXT(S) | IMAGE(S) ... -->\n" +
    "<div ng-show=\"false\" class=\"\">\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		<li class=\"active\"><a href=\"\">Files</a></li>\n" +
    "		<li class=\"active\"><a href=\"\">Posts</a></li>\n" +
    "		<li><a href=\"\">Videos</a></li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-6\" ng-repeat=\"video in videos\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
    "			<div ng-bind-html=\"renderMessage(video.streamUrl)\">></div>\n" +
    "			<h3><a href=\"stream/{{video.title}}\">{{video.title}}</a></h3>\n" +
    "			<p><a style=\"font-weight:700\"  href=\"member/{{video.user}}\">\n" +
    "				<img class=\"card-avatar\" ng-src=\"{{video.user.avatarUrl}}\" src=\"{{video.user.avatarUrl}}\">\n" +
    "				{{video.user.username}}\n" +
    "			</a> | <span am-time-ago=\"video.createdAt\"></span></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/followers.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/followers.tpl.html",
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in followers\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "	        <a href=\"member/{{member.follower.username}}\"><img ng-src=\"{{member.follower.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.follower.username}}\">{{member.follower.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.status}} live | online | working</p>\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.follower.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-social\">\n" +
    "	        <a ng-show=\"member.follower.socialAccounts.facebook.profileUrl\" href=\"{{member.follower.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.follower.socialAccounts.twitter.profileUrl\" href=\"{{member.follower.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.follower.socialAccounts.google.profileUrl\" href=\"{{member.follower.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in following\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "	        <a href=\"member/{{member.followed.username}}\"><img ng-src=\"{{member.followed.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.followed.username}}\">{{member.followed.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.followed.status}} live | online | working</p>\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.followed.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-social\">\n" +
    "	        <a ng-show=\"member.followed.socialAccounts.facebook.profileUrl\" href=\"{{member.followed.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.followed.socialAccounts.twitter.profileUrl\" href=\"{{member.followed.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.followed.socialAccounts.google.profileUrl\" href=\"{{member.followed.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/ledger.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/ledger.tpl.html",
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	<li class=\"active\"><a href=\"\">Overview</a></li>\n" +
    "	<li><a href=\"\">Assets</a></li>\n" +
    "	<li><a href=\"\">Expenses</a></li>\n" +
    "	<li><a href=\"\">Liabilities</a></li>\n" +
    "	<li><a href=\"\">Revenue</a></li>\n" +
    "	<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "</ul>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-8\">\n" +
    "		<highchart config=\"chart\"></highchart>\n" +
    "	</div>\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<highchart config=\"pie\"></highchart>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<h1>Transaction History</h1>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newTransactionToggle()\">+ Transaction</button><br><br>\n" +
    "<md-card ng-show=\"newTransactionToggleVar\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "		<form role=\"form\" ng-submit=\"createTransaction()\">\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"To\" type=\"text\" ng-model=\"newTransaction.to\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-12\">\n" +
    "				<input placeholder=\"Tags\" type=\"text\" ng-model=\"newTransaction.ledger\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-12\">\n" +
    "				<textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "\n" +
    "<table class=\"table table-inverse table-hover\">\n" +
    "    <thead>\n" +
    "		<tr>\n" +
    "			<th>To</th>\n" +
    "			<th>From</th>\n" +
    "			<th>Asset Identifier</th>\n" +
    "			<th>Amount</th>\n" +
    "			<th>Ledger</th>\n" +
    "			<th>Content</th>\n" +
    "			<th>Date</th>\n" +
    "		</tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "		<tr ng-repeat=\"transaction in transactions\">\n" +
    "			<td><a href=\"member/{{transaction.to}}\">{{transaction.to}}</a></td>\n" +
    "			<td><a href=\"member/{{transaction.from}}\">{{transaction.from}}</a></td>\n" +
    "			<td><a href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></td>\n" +
    "			<td>{{transaction.amount}}</td>\n" +
    "			<td>{{transaction.ledger}}</td>\n" +
    "			<td>{{transaction.content}}</td>\n" +
    "			<td>{{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</td>\n" +
    "		</tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("member/templates/positions.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/templates/positions.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<h1>Create Your Value Map</h1>\n" +
    "<h4>Our Social Responsibility | Dimensional Vote | Manifest Pluralism</h1>\n" +
    "<p>Browse.., Discover..</p>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<highchart config=\"chart\"></highchart>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "<md-card ng-show=\"newOrderToggleVar\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "		<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Asset Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Asset Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<table class=\"table table-inverse table-hover\">\n" +
    "    <thead>\n" +
    "		<tr>\n" +
    "			<th>Asset Set 1</th>\n" +
    "			<th>Asset Set 2</th>\n" +
    "			<th>Order Id</th>\n" +
    "		</tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "		<tr ng-repeat=\"order in orders\">\n" +
    "			<td>\n" +
    "				<span ng-repeat=\"item in order.amountSet\">\n" +
    "					{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "				</span>\n" +
    "			</td>\n" +
    "\n" +
    "			<td>\n" +
    "				<span ng-repeat=\"item in order.amountSet1\">\n" +
    "					{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "				</span>\n" +
    "			</td>\n" +
    "			<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "		</tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"spacing-10\"></div>\n" +
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
    "        <img ng-show=\"!cre8xyz\" style=\"height:25px;margin-top:-3px\" src=\"/images/conexus-white.png\"/>\n" +
    "        <span ng-show=\"cre8xyz\" style=\"font-weight:bold;color:white\">CRE8.XYZ</span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"collapse navbar-collapse\" style=\"text-align:center\">\n" +
    "      <ul class=\"nav navbar-nav\">\n" +
    "        <form class=\"navbar-form\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "          </div>\n" +
    "        </form>\n" +
    "      </ul>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <!--notifications on username-->\n" +
    "        <li ng-show=\"!currentUser\" class=\"nav-links\"><a href=\"/about\"></i>About</a></li>\n" +
    "        <li class=\"nav-links\"><a href=\"/discover\">Discover</a></li>\n" +
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

angular.module("order/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("order/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "    \n" +
    "    <div>\n" +
    "    	<h2><a href=\"market/{{order.identiferSet}}/{{order.identiferSet1}}\">{{order.identiferSet}} | {{order.identiferSet1}}</a></h2>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "        \n" +
    "    	<h4>{{order.amountSet}} {{order.identiferSet}}</h4>\n" +
    "    	<h4>{{order.amountSet1}} {{order.identiferSet1}}</h4>\n" +
    "    	<a href=\"member/{{order.user.username}}\">\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "            {{order.user.username}}\n" +
    "        </a>\n" +
    "    	<h4>onBooks | Filled | Date</h4>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "	<div class=\"col-md-12\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "        </form>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <md-card ng-repeat=\"post in posts\">\n" +
    "            <md-card-title>\n" +
    "                <md-card-title-text>\n" +
    "                    <div><a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a></div>\n" +
    "                    <div><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "                </md-card-title-text>\n" +
    "            </md-card-title>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <!--TODO: NESTED -->\n" +
    "            <div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </md-card>\n" +
    "    </div>\n" +
    "	\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("post/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("post/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div>\n" +
    "		<div style=\"box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);overflow:hidden;padding:0px;\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "					<a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a>\n" +
    "				</div>\n" +
    "				<div><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "			</div>\n" +
    "			<div style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "			<div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "				<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "				    <div class=\"form-group\">\n" +
    "				        <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "				    </div>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div ng-include=\"'post/post.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("post/post.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("post/post.tpl.html",
    "<div style=\"box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);overflow:hidden;margin:5px\">\n" +
    "    <div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "                <a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a>\n" +
    "            </div>\n" +
    "            <div><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-include=\"'post/post.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div class=\"imageContainerSmall\">\n" +
    "<!--<div class=\"imageContainerSmall\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">-->\n" +
    "    <div class=\"imageContainerSmallDiv\">  \n" +
    "        <h1 style=\"text-align:left\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "        {{project.title}}\n" +
    "        <span ng-show=\"project.parent\"> | \n" +
    "            <a style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a>\n" +
    "        </span> \n" +
    "        </h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"member-tab-container container\">\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "		<!--<li><a href=\"/project/{{project.urlTitle}}/channels\">Channels</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/charter\">Charter</a></li>-->\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/content\">Content</a></li>\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/ledger\">Ledger</a></li>\n" +
    "        <!--<li><a href=\"/project/{{project.urlTitle}}\">Map</a></li>-->\n" +
    "		<li><a href=\"/project/{{project.urlTitle}}/members\">{{memberCount}} Members</a></li>\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/projects\">Projects</a></li>\n" +
    "        <!--<li><a href=\"/project/{{project.urlTitle}}/store\">Store</a></li>-->\n" +
    "		<!--<li><a href=\"/project/{{project.urlTitle}}/streams\">Streams</a></li>-->\n" +
    "        <li><a href=\"/project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
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
    "    <div ui-view=\"content\"></div>\n" +
    "    <div ui-view=\"charter\"></div>\n" +
    "    <div ui-view=\"ledger\"></div>\n" +
    "    <div ui-view=\"members\"></div>\n" +
    "    <div ui-view=\"positions\"></div>\n" +
    "    <div ui-view=\"projects\"></div>\n" +
    "    <div ui-view=\"tasks\"></div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("project/templates/activity.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/activity.tpl.html",
    "<div class=\"spacing-15\"></div>\n" +
    "<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "    </div>\n" +
    "    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "</form>\n" +
    "<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "<!--TODO: UNIFY MODELS -->\n" +
    "<div ng-repeat=\"work in work\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{work.user.username}}\">{{work.user.username}}</a>\n" +
    "                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                <a style=\"display:inline;font-weight:600\" href=\"task/{{work.task.id}}\">{{work.task.title}}</a>\n" +
    "                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                <a style=\"display:inline;font-weight:600\" href=\"work/{{work.id}}\">{{work.amount}}</a>\n" +
    "                <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <p ng-show=\"work.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "            <p style=\"margin-left:42px\" ng-show=\"work.task.completeIdentifierSet\"><a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(work.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "            <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{work.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <div ng-show=\"work.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"post in posts\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "            <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "            <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "    \n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
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
    "        <div ng-repeat=\"post in posts\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <!--TODO: NESTED -->\n" +
    "                <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                        </div>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <form role=\"form\" ng-submit=\"createPost(newMessage)\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "            </div>\n" +
    "            <button style=\"width:100%\" type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">Submit</button>\n" +
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

angular.module("project/templates/content.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/content.tpl.html",
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"false\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "    	<!-- POST WITH ATTACHMENT -->\n" +
    "    	<!-- MASTER POST MODEL FOR CONTENT? YE THINK REDDIT -->\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ Content</button><br><br>\n" +
    "        <div ng-show=\"newProjectToggleVar\">\n" +
    "            <form class=\"blog-input\" role=\"form\" ng-submit=\"createContent()\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Project\" ng-model=\"newContent.project\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Type\" ng-model=\"newContent.type\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                    <input type=\"text\" placeholder= \"Content Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Content\" ng-model=\"newContent.content\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Content Attachment\" ng-model=\"newContent.attachment\" class=\"form-control\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\">\n" +
    "    <form style=\"display:flex;flex-direction:row;\">\n" +
    "        <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "<!--POST MODEL | CONTENT TYPE -->\n" +
    "<!--ATTACHED FILE(S) | VIDEO(S) | TEXT(S) | IMAGE(S) ... -->\n" +
    "<div ng-show=\"false\" class=\"\">\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li class=\"active\"><a href=\"\">Files</a></li>\n" +
    "        <li class=\"active\"><a href=\"\">Posts</a></li>\n" +
    "        <li><a href=\"\">Videos</a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-6\" ng-repeat=\"stream in streams\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
    "			<div ng-bind-html=\"renderMessage(stream.streamUrl)\">></div>\n" +
    "			<h3><a href=\"stream/{{stream.title}}\">{{stream.title}}</a></h3>\n" +
    "			<p><a style=\"font-weight:700\" href=\"member/{{stream.user}}\">\n" +
    "				<img class=\"card-avatar\" ng-src=\"{{stream.user.avatarUrl}}\" src=\"{{stream.user.avatarUrl}}\">\n" +
    "				{{stream.user}}\n" +
    "			</a> | <span am-time-ago=\"stream.createdAt\"></span></p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/ledger.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/ledger.tpl.html",
    "<br>\n" +
    "<div class=\"\">\n" +
    "\n" +
    "	<!--<button class=\"btn btn-default log-btn\" ng-click=\"newLedgerToggle()\">+ LEDGER</button><br><br>-->\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "\n" +
    "		<li class=\"active\"><a href=\"\">Overview</a></li>\n" +
    "		<li><a href=\"\">Assets</a></li>\n" +
    "		<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "		<li><a href=\"\">Transactions</a></li>\n" +
    "\n" +
    "		<!--<li><a href=\"\">Assets</a></li>\n" +
    "		<li><a href=\"\">Expenses</a></li>\n" +
    "		<li><a href=\"\">Liabilities</a></li>\n" +
    "		<li><a href=\"\">Revenue</a></li>\n" +
    "		<li><a href=\"\">Positions</a></li>-->\n" +
    "\n" +
    "		<!--<li><a href=\"\">Work</a></li>\n" +
    "		<li><a href=\"\">Property</a></li>\n" +
    "		<li><a href=\"\">Liscense</a></li>-->\n" +
    "\n" +
    "	</ul>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-8\">\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-4\">\n" +
    "			<highchart config=\"pie\"></highchart>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newTransactionToggle()\">+ Transaction</button><br><br>\n" +
    "	<div class=\"card\" ng-show=\"newTransactionToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createTransaction(newTransaction)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"To\" type=\"text\" ng-model=\"newTransaction.to\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Ledger\" type=\"text\" ng-model=\"newTransaction.ledger\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<table class=\"table table-inverse table-hover\">\n" +
    "	    <thead>\n" +
    "			<tr>\n" +
    "				<th>To</th>\n" +
    "				<th>From</th>\n" +
    "				<th>Asset Identifier</th>\n" +
    "				<th>Amount</th>\n" +
    "				<th>Ledger</th>\n" +
    "				<th>Content</th>\n" +
    "				<th>Date</th>\n" +
    "			</tr>\n" +
    "	    </thead>\n" +
    "	    <tbody>\n" +
    "			<tr ng-repeat=\"transaction in transactions\">\n" +
    "				<td><a href=\"\">{{transaction.to}}</a></td>\n" +
    "				<td><a href=\"\">{{transaction.from}}</a></td>\n" +
    "				<td><a href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></td>\n" +
    "				<td>{{transaction.amount}}</td>\n" +
    "				<td>{{transaction.ledger}}</td>\n" +
    "				<td>{{transaction.content}}</td>\n" +
    "				<td>{{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</td>\n" +
    "			</tr>\n" +
    "	    </tbody>\n" +
    "	</table>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/members.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/members.tpl.html",
    "<br>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">join</button>\n" +
    "<br><br>\n" +
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">\n" +
    "	        <a href=\"member/{{member.user.username}}\"><img ng-src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.status}} live | online | working</p>\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.user.totalWork}}</p>\n" +
    "	        <p style=\"color:gray\">dimensional | 888</p>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-social\">\n" +
    "	        <a ng-show=\"member.user.socialAccounts.facebook.profileUrl\" href=\"{{member.user.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.user.socialAccounts.twitter.profileUrl\" href=\"{{member.user.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.user.socialAccounts.google.profileUrl\" href=\"{{member.user.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/positions.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/positions.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<h1>Create Your Value Map</h1>\n" +
    "<h4>Our Social Responsibility | Dimensional Vote | Manifest Pluralism</h1>\n" +
    "<p>Browse.., Discover..</p>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<highchart config=\"chart\"></highchart>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button><br><br>\n" +
    "<md-card ng-show=\"newOrderToggleVar\">\n" +
    "    <div style=\"padding:10px;\">\n" +
    "		<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Asset Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Asset Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<div class=\"form-group col-sm-6\">\n" +
    "				<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "			</div>\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<table class=\"table table-inverse table-hover\">\n" +
    "    <thead>\n" +
    "		<tr>\n" +
    "			<th>Asset Set 1</th>\n" +
    "			<th>Asset Set 2</th>\n" +
    "			<th>Order Id</th>\n" +
    "		</tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "		<tr ng-repeat=\"order in orders\">\n" +
    "			<td>\n" +
    "				<span ng-repeat=\"item in order.amountSet\">\n" +
    "					{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "				</span>\n" +
    "			</td>\n" +
    "\n" +
    "			<td>\n" +
    "				<span ng-repeat=\"item in order.amountSet1\">\n" +
    "					{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "				</span>\n" +
    "			</td>\n" +
    "			<td><a href=\"order/{{order.id}}\">{{order.id}}</a>\n" +
    "		</tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
    "<div class=\"spacing-10\"></div>\n" +
    "<div ng-show=\"project.parent\">\n" +
    "	<h3><a href=\"project/{{project.urlTitle}}\"><img style=\"height:32px\" src=\"{{project.parent.avatarUrl}}\"> <a href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h3>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ Project</button><br><br>\n" +
    "        <div ng-show=\"newProjectToggleVar\">\n" +
    "            <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject()\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" placeholder= \"Project Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Project Description\" ng-model=\"newProject.description\" class=\"form-control\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-repeat=\"project in projects\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-10\">\n" +
    "					<h4><a href=\"project/{{project.urlTitle}}\"><img style=\"height:24px\" src=\"{{project.avatarUrl}}\"> {{project.title}}</a></h4>\n" +
    "					<p style=\"color:gray\">{{project.description}}</p>\n" +
    "\n" +
    "					<!--\n" +
    "					<p>{{project.memeberCount}}</p>\n" +
    "					<p>{{project.taskCount}}</p>\n" +
    "					<p>{{project.totalWork}}</p>\n" +
    "\n" +
    "					-->\n" +
    "					<!--\n" +
    "					<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "					-->\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "					<!--<h4><a href=\"project/{{project.urlTitle}}\">Request | Join</a></h4>-->\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<br>\n" +
    "<!--FILTERS AND SEARCH HERE-->\n" +
    "\n" +
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
    "			<!--\n" +
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
    "			-->\n" +
    "			<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</md-card>\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"task in tasks\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-10\">\n" +
    "					<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "					<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "					<p>{{task.content}}</p>\n" +
    "					<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "					<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "					<!--<a href=\"task/{{task.id}}\"><button type=\"submit\" class=\"btn btn-default log-btn\">Start Work</button></a>-->\n" +
    "					<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "					<!--<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>-->\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card-footer\">\n" +
    "			<!--TODO: TASK VERIFICATION-->\n" +
    "			<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "			<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "			<!--<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>-->\n" +
    "			<!--<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>-->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!--\n" +
    "<table class=\"table table-striped table-hover\">\n" +
    "  <thead>\n" +
    "        <tr>\n" +
    "      		<th></th>\n" +
    "			<th></th>\n" +
    "			<th></th>\n" +
    "			<th></th>\n" +
    "			<th></th>\n" +
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
    "</table>\n" +
    "-->");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Projects</h1></div>\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                        <h3 style=\"text-align:right\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h3>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "                        <hr class=\"sort-hr\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('memberCount DESC')\"><h5>Member Count</h5></a></li>\n" +
    "                        <hr class=\"sort-hr\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" ng-show=\"currentUser\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ project</button>\n" +
    "            <div ng-show=\"newProjectToggleVar\">\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject(newProject)\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" placeholder= \"Project Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder= \"Project Description\" ng-model=\"newProject.description\" class=\"form-control\">\n" +
    "                        <!--<input type=\"text\" placeholder= \"Project Parent\" ng-model=\"newProject.parent\" class=\"form-control\">-->\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--TODO: FILTER / SEARCH -->\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "            <!--\n" +
    "            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Filters <i class=\"fa fa-angle-down\"></i></h5>\n" +
    "                </a>\n" +
    "                <ul style=\"position:relative\" class=\"dropdown-menu\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>tag:</h5></a></li>\n" +
    "                    <hr class=\"sort-hr\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('memberCount DESC')\"><h5>@:</h5></a></li>\n" +
    "                    <hr class=\"sort-hr\">\n" +
    "                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>has:</h5></a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            -->\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <!--TODO: FINALIZE STRUCTURE.. -->\n" +
    "    <div ng-repeat=\"project in projects\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-1\">\n" +
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-9\">\n" +
    "                        <h3 style=\"margin-top:0px\">\n" +
    "                            <a href=\"/project/{{project.urlTitle}}\">\n" +
    "                                <!--<img style=\"width:50px;height:50px;margin-right:5px\" src=\"{{project.avatarUrl}}\">-->\n" +
    "                                {{project.title}}\n" +
    "                            </a>\n" +
    "                        </h3>\n" +
    "                        <p style=\"color:gray;font-style:italic;\">{{project.description}}</p>\n" +
    "                        <!--{{project.memberCount}} | {{project.taskCount}} | {{project.workTime}}-->\n" +
    "                        <!--<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>-->\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-2\" style=\"text-align:right\">\n" +
    "                        <h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "                        <!--<h4>0 <i class=\"fa fa-user\"></i></h4>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "<div ng-click=\"loadMore()\" class=\"container\" style=\"text-align:center\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <h1>Join Our Community</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
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
    "                        <a class=\"btn btn-social btn-facebook\" ng-click=\"\"><h4><i class=\"fa fa-facebook\"></i> Facebook</h4></a>\n" +
    "                        <a class=\"btn btn-social btn-twitter\" ng-click=\"\"><h4><i class=\"fa fa-twitter\"></i> Twitter</h4></a>\n" +
    "                        <a class=\"btn btn-social btn-google\" ng-click=\"\"><h4><i class=\"fa fa-google\"></i> Google</h4></a>\n" +
    "                    </div>\n" +
    "                    <br><hr>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\"><h4>Already Have an account?</h4></a>\n" +
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
    "			<div class=\"spacing-25\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<form role=\"form\" >\n" +
    "			<div class=\"card\">\n" +
    "				<input type=\"text\" class=\"form-control\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" placeholder=\"{{searchQuery}}\">\n" +
    "			</div>\n" +
    "		</form>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "		<div class=\"card\" ng-repeat=\"searchResult in searchResults\">\n" +
    "			<div style=\"padding:25px;\">\n" +
    "				<a href=\"project/{{searchResult.urlTitle}}\">{{searchResult.title}}</a>\n" +
    "				<br>\n" +
    "				<a href=\"member/{{searchResult.user.username}}\">{{searchResult.user.username}}</a>\n" +
    "				<br>\n" +
    "				<a href=\"project/{{searchResult.project}}\">{{searchResult.project}}</a>\n" +
    "				<br>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
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
    "	<div class=\"spacing-15\"></div>\n" +
    "	<h1>{{stream.title}}</h1>\n" +
    "	<br>\n" +
    "	<div class=\"\">\n" +
    "		<a href=\"member/{{stream.user.username}}\"><img style=\"width:75px;border-radius:100px;float:left\"src=\"{{stream.user.avatarUrl}}\"/></a>\n" +
    "		<div style=\"float:left;margin-left:15px;\">\n" +
    "			<h3 style=\"margin-top:0px;margin-bottom:0px\"><a href=\"member/{{stream.user.username}}\">{{stream.user.username}}</a></h3>\n" +
    "			<p style=\"margin-top:0px;margin-bottom:0px\"><a href=\"project/{{stream.project.title}}\">{{stream.project.title}}</a></p>\n" +
    "			<p style=\"margin-top:0px;margin-bottom:0px\"><a href=\"task/{{stream.task.id}}\">{{stream.task.title}}</a></p>\n" +
    "			<p style=\"margin-top:0px;margin-bottom:0px\">Metrics | viewToken: 123423 | watchTime: 124312 | Live: 0</p>\n" +
    "			<p style=\"margin-top:0px;margin-bottom:0px\">Reactions | Like: 124312 | Dislike: 123</p>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div style=\"clear:both\"></div>\n" +
    "\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "	    <div class=\"form-group\">\n" +
    "	        <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "	    </div>\n" +
    "	    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "	</form>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "	<div ng-repeat=\"post in posts\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "					<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "				</div>\n" +
    "				<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<!--TODO: NESTED -->\n" +
    "			<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "					</div>\n" +
    "					<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "		\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("task/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <h3>{{task.title}} | <a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></h3>\n" +
    "                <div style=\"font-style:italic;color:gray\">\n" +
    "                    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p>{{task.content}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;font-style:italic;color:gray\">\n" +
    "                <h4>Dimensional Task Verification Score | {{task.verificationScore}} </h4>\n" +
    "                <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item, 'plus')\">+</button>\n" +
    "                <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item, 'minus')\">-</button>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div ng-repeat=\"verification in taskVerification\">\n" +
    "                    <a href=\"member/{{verification.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\">\n" +
    "                        {{verification.user.username}}\n" +
    "                    </a> | {{verification.score}}\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <!--TODO: COLLAPSE UI-->\n" +
    "                <!--TOKENS MINTING PER ACTION-->\n" +
    "                <div class=\"col-md-6\" style=\"font-style:italic;color:gray\">\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "                    <p><a href=\"market/{{task.id}}+onTime\">onTime+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onTimeStream\">onTimeStream+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onCompletion\">onCompletion+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onVerification\">onVerification+{{task.id}}</a></p>\n" +
    "                    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{task.id}} </a></p>\n" +
    "                    <p><a href=\"market/{{task.project.urlTitle}}\">{{task.project.title}} (+{{task.project.id}})</a></p>\n" +
    "                    <p><a href=\"market/general\">general</a></p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--MARKET LINKS TO TOKEN LIQUIDITY RE ORDER ON BOOK FOR TASK TOKENS-->\n" +
    "                <div class=\"col-md-6\" style=\"font-style:italic;color:gray\">\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <h4>Token Liquidity</h4>\n" +
    "                    <p>1 <a href=\"market/onTime+{{task.id}}\">onTime+{{task.id}}</a> / {{task.timeBountySet}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/onTime+{{task.id}}/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onTimeStream+{{task.id}}\">onTimeStream+{{task.id}}</a> / {{task.timeBountySet*1.4}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onTimeStream/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onCompletion+{{task.id}}\">onCompletion+{{task.id}}</a> / {{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onCompletion/{{task.completeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onVerification+{{task.id}}\">onVerification+{{task.id}}</a> / {{task.verificationBountySet}} <a href=\"market/{{task.verificationIdentifierSet}}\">{{task.verificationIdentifierSet}}</a> / <a href=\"market/onVerification+{{task.id}}/{{task.verificationIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <!--TODO: STREAM-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-show=\"!working\">\n" +
    "                    <button ng-show=\"!question\" type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"askQuestion()\">Start Work</button>\n" +
    "\n" +
    "                    <div ng-show=\"question && !streaming\">\n" +
    "                        <h3>Streaming?</h3>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startWork()\">No</button>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-show=\"streaming\">\n" +
    "                        <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                        <!--<input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"workContent\" class=\"form-control\">-->\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startWork()\">Start Stream</button>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-show=\"working\">\n" +
    "                    <h3>{{taskTime}}</h3>\n" +
    "                    <div ng-show=\"!streaming\">\n" +
    "                        <!--<input type=\"text\" placeholder=\"Link\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startStream()\">Start Stream</button>-->\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"streaming\"> \n" +
    "                        <div ng-bind-html=\"renderStream(streamUrl)\">></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <input type=\"text\" placeholder=\"Content\" ng-model=\"workContent\" class=\"form-control\">\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">Submit work</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <!--TODO CARD VS TABLE-->\n" +
    "    <div class=\"\">\n" +
    "        <div class=\"\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Time</th>\n" +
    "                            <th>Content</th>\n" +
    "                            <th>Member</th>\n" +
    "                            <th>Stream</th>\n" +
    "                            <th>Date</th>\n" +
    "                            <th>Verification</th>\n" +
    "                            <th>Verify</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"item in work\">\n" +
    "                            <td><a style=\"font-weight:700\" href=\"work/{{item.id}}\">{{item.amount}}</a></td>\n" +
    "                            <td>{{item.content || 'N/A'}}</td>\n" +
    "                            <td><a style=\"font-weight:700\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a></td>\n" +
    "                            <td style=\"max-width:50px\"><a href=\"stream/{{item.stream || 'example'}}\">{{item.stream || 'Not Available'}}</a></td>\n" +
    "                            <td><span am-time-ago=\"item.createdAt\"></span></td>\n" +
    "                            <td>{{item.verificationScore}}</td>\n" +
    "                            <td><button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"createVerification(item)\">verify</button></td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div ng-repeat=\"post in posts\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <astyle=\"display:inline;font-weight:600\" href=\"/task/{{post.task.is}}\">task {{post.task.title}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <!--TODO: NESTED -->\n" +
    "                <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "                        </div>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("tasks/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "	<div class=\"container\"> \n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\"><h1>Tasks</h1></div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "			    <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "			            <h3 style=\"text-align:right\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h3>\n" +
    "			        </a>\n" +
    "			        <ul class=\"dropdown-menu\">\n" +
    "			            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "			            <hr class=\"sort-hr\">\n" +
    "			            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('workCount DESC')\"><h5>Total Work</h5></a></li>\n" +
    "			            <hr class=\"sort-hr\">\n" +
    "			            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "			        </ul>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--TODO: FILTER / SEARCH -->\n" +
    "<!--\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "						<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "						<p>{{task.content}}</p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<!--<a href=\"task/{{task.id}}\"><button type=\"submit\" class=\"btn btn-default log-btn\">Start Work</button></a>-->\n" +
    "						<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "						<!--TODO: DO IT FOR REAL-->\n" +
    "						<!--<h4 ng-show=\"!task.completeBountySet\"><a href=\"market/{{task.id}}\">Create Liquidity</a></h4>-->\n" +
    "						<!--<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>-->\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<!--TODO: TASK VERIFICATION-->\n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<!--<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>-->\n" +
    "				<!--<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--\n" +
    "	<table class=\"table table-striped table-hover\">\n" +
    "		<tbody>\n" +
    "			<tr ng-repeat=\"task in tasks\">\n" +
    "				<td><h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4></td>\n" +
    "				<td>{{task.content}}</td>\n" +
    "                <td><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></td>\n" +
    "				<td>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></td>\n" +
    "				<td><span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span></td>\n" +
    "			</tr>\n" +
    "		</tbody>\n" +
    "	</table>\n" +
    "	-->\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "<div ng-click=\"loadMore()\" class=\"container\" style=\"text-align:center\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
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
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "\n" +
    "		<div style=\"padding:16px\" class=\"col-md-12\">\n" +
    "			<a style=\"font-weight:700\" href=\"member/{{work.user.username}}\">\n" +
    "				<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "				{{work.user.username}}\n" +
    "			</a>\n" +
    "			<h3><a href=\"task/{{work.task.id}}\">{{work.task.title}}</a> | {{work.amount}}</h3>\n" +
    "			<p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "			<p>{{work.content}}</p>\n" +
    "			<span style=\"color:gray\" am-time-ago=\"work.createdAt\"></span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div style=\"padding:16px\" class=\"col-md-12\">\n" +
    "			<!--TODO: GRAULAR VERIFICATION | SCALE 0-1 (INFINITE DECIMAL)-->\n" +
    "			<!--TODO: DIMENSIONALITY-->\n" +
    "			<h4>Dimensional Work Verification Score | {{work.verificationScore}}</h4>\n" +
    "			<button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'plus')\">+</button>\n" +
    "	        <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'minus')\">-</button>\n" +
    "	        <div class=\"spacing-10\"></div>\n" +
    "	   		<div ng-repeat=\"verification in workVerification\">\n" +
    "	            <a href=\"member/{{verification.user.username}}\">\n" +
    "	                <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\">\n" +
    "	                {{verification.user.username}}\n" +
    "	            </a> | {{verification.score}}\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<!--TODO: REAL STREAM-->\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<h3>Stream</h3>\n" +
    "			<h4><a href=\"stream/example\">Example Stream</a></h4>\n" +
    "			<iframe width='560' height='315' src='https://www.cre8bid.io/v/597c55e56833048165c6720c' frameborder='0' allowfullscreen></iframe>\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<!--TODO: TOKEN CLARITY-->\n" +
    "			<!--TODO: COLLAPSE UI-->\n" +
    "			<!--VERIFICATION BASED TOKEN LIQUIDITY | TAGS, DIMENSIONAL VERIFICATION-->\n" +
    "			<h3>Liquidity | Market Orders | Tokens</h3>\n" +
    "			<h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "			<p><a href=\"market/{{work.id}}+onTime\">onTime+{{work.id}}</a></p>\n" +
    "			<p><a href=\"market/{{work.id}}+onTimeStream\">onTimeStream+{{work.id}}</a></p>\n" +
    "			<!--work.id tokens are given 'bridge' liquidity to work.task.id tokens as verification | you get work.task.id tokens on verification | minting is based on verification protocol-->\n" +
    "			<!--does verification give liquidity to work.id tokens?--> <!--verification as staking?-->\n" +
    "			<p><a href=\"market/{{work.task.id}}+onTime\">onTime+{{work.task.id}}</a></p>\n" +
    "		    <p><a href=\"market/{{work.task.id}}+onTimeStream\">onTimeStream+{{work.task.id}}</a></p>\n" +
    "		    <p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{work.task.id}} </a></p>\n" +
    "		    <p><a href=\"market/general\">general</a></p>\n" +
    "		   	<!--<h4><a href=\"market/{{work.id}}\">Create Liquidity</a></h4>-->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "		        <div class=\"spacing-15\"></div>\n" +
    "		        <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "		            <div class=\"form-group\">\n" +
    "		                <input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent\">\n" +
    "		            </div>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		        </form>\n" +
    "		        <div class=\"spacing-15\"></div>\n" +
    "		    </div>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div ng-repeat=\"post in posts\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\">\n" +
    "					<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "				</div>\n" +
    "				<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<!--TODO: NESTED -->\n" +
    "			<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<input type=\"text\" ng-model=\"newPost.content\" class=\"form-control\" id=\"postContent-{{post.id}}\">\n" +
    "					</div>\n" +
    "					<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "   </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);
