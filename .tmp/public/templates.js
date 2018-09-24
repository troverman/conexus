angular.module("templates-app", ["about/index.tpl.html", "account/index.tpl.html", "discover/index.tpl.html", "footer/index.tpl.html", "home/index.tpl.html", "intro/index.tpl.html", "login/index.tpl.html", "market/index.tpl.html", "marketPair/index.tpl.html", "markets/index.tpl.html", "member/index.tpl.html", "member/templates/activity.tpl.html", "member/templates/content.tpl.html", "member/templates/followers.tpl.html", "member/templates/following.tpl.html", "member/templates/ledger.tpl.html", "member/templates/positions.tpl.html", "nav/index.tpl.html", "order/index.tpl.html", "post/index.tpl.html", "post/post.tpl.html", "project/index.tpl.html", "project/templates/activity.tpl.html", "project/templates/channels.tpl.html", "project/templates/charter.tpl.html", "project/templates/content.tpl.html", "project/templates/ledger.tpl.html", "project/templates/members.tpl.html", "project/templates/positions.tpl.html", "project/templates/projects.tpl.html", "project/templates/tasks.tpl.html", "projects/index.tpl.html", "register/index.tpl.html", "search/index.tpl.html", "stream/index.tpl.html", "task/index.tpl.html", "tasks/index.tpl.html", "transaction/index.tpl.html", "transparency/index.tpl.html", "work/index.tpl.html"]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<style>\n" +
    "#title-container{\n" +
    "	color:white;\n" +
    "	background-color:black;\n" +
    "}\n" +
    "#about-section1{\n" +
    "	background-color:white\n" +
    "}\n" +
    "#about-section2{\n" +
    "	color:white;\n" +
    "	background-color:black;\n" +
    "}\n" +
    "#about-section3{\n" +
    "	color:white;\n" +
    "	background-color:black;\n" +
    "}\n" +
    "#about-section4{\n" +
    "	background-color:white\n" +
    "}\n" +
    "#about-section5{\n" +
    "	background-color:white\n" +
    "}\n" +
    "</style>\n" +
    "\n" +
    "<!--<div id=\"logo-container\" style=\"text-align:center;background:black\">\n" +
    "	<img style=\"max-height:400px\" src=\"/images/loading.gif\">\n" +
    "</div>-->\n" +
    "\n" +
    "<div id=\"title-container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<!--<h1>conex.us | CRE8.XYZ</h1>-->\n" +
    "		<h1>CRE8.XYZ</h1>\n" +
    "		<h4>Creating the Next Wave of Public Organizations</h4>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>A Transparent & Collaborative Network</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Connect with new collaborators and create awesome things</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<h4>Create the Next Wave</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A 24/7 continual hackathon</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/discover\">Discover</a>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<div class=\"card\">\n" +
    "				    <div style=\"padding:16px;\">\n" +
    "						<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "						<h3><a href=\"https://www.youtube.com/embed/jUQ_3kCcG_U\">open eye</a></h3>\n" +
    "						<p><a href=\"member/troverman\">\n" +
    "							<img class=\"card-avatar\" ng-src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" err-src=\"images/avatar.png\">\n" +
    "							troverman\n" +
    "						</a> | <span am-time-ago=\"\">30 Minutes Ago</span></p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>Collaborative Governance</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Reputation Protocols | Working together toward a common goal</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section3\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>MultiDimensional Token Market</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create dimensional liquidity for transparent and reputationally validated work</p> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>Complete Transparency</h3>\n" +
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
    "\n" +
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
    "	                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "	                    </div>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	            <div class=\"selfClear\"></div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-4\">\n" +
    "			<div class=\"member-card\">\n" +
    "			    <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "			        <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-info\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\">{{currentUser.status}} online</p>\n" +
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
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "\n" +
    "					<h4>Balance Lookup</h4>\n" +
    "		       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "		            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Asset\">\n" +
    "		            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			                <a href=\"#\">\n" +
    "			                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			                </a>\n" +
    "						</div>\n" +
    "		        	</form>\n" +
    "\n" +
    "		        	<h4>Reputation Lookup</h4>\n" +
    "		       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "		            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Asset\">\n" +
    "		            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			                <a href=\"#\">\n" +
    "			                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			                </a>\n" +
    "						</div>\n" +
    "		        	</form>\n" +
    "\n" +
    "					<p>Tokens | Peer Contrubution</p>\n" +
    "					<a href=\"#\">\n" +
    "						<div ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "							<h5>Update Avatar</h5>\n" +
    "						</div>\n" +
    "					</a>\n" +
    "					<a href=\"#\">\n" +
    "						<div ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "							<h5>Update Cover</h5>\n" +
    "						</div>\n" +
    "					</a>\n" +
    "					<h4>{{currentUser.email}}</h4>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<h3>Identification Information</h3>\n" +
    "			<p>Human Proof ID | ON</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<h3>Settings</h3>\n" +
    "			<p>GPS Tracking | ON</p>\n" +
    "			<p>Notifications | ON</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<h3>Connected Accounts</h3>\n" +
    "			<button class=\"btn btn-default\"><a href=\"/auth/google\">Google</a></button>\n" +
    "			<button class=\"btn btn-default\"><a href=\"/auth/twitter\">Twitter</a></button>\n" +
    "			<button class=\"btn btn-default\"><a href=\"/auth/facebook\">Facebook</a></button>\n" +
    "			<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">Fitbit</a></button>\n" +
    "			<!--TODO: tokenized apps.. connect in..-->\n" +
    "		</div>\n" +
    "    </div>\n" +
    "\n" +
    "	<button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"\">Edit Account</button>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("discover/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Discover</h1></div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "		<li><a href=\"/discover\">Content</a></li>\n" +
    "		<li><a href=\"/\">Members</a></li>\n" +
    "		<li><a href=\"/market\">Orders</a></li>\n" +
    "		<li><a href=\"/projects\">Projects</a></li>\n" +
    "		<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "		<!--<li><a href=\"/\">Value</a></li>\n" +
    "		<li><a href=\"/\">Work</a></li>-->\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<!--TODO: FILTER / SEARCH -->\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
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
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "		<div class=\"member-card\" style=\"margin-bottom:10px\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "		        <a href=\"member/{{member.username}}\"><img ng-src=\"{{member.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a href=\"member/{{member.username}}\">{{member.username}}</a></h4>\n" +
    "		        <p style=\"color:gray\">{{member.status}} offline</p>\n" +
    "		        <p style=\"color:gray\">total reputation | {{member.totalWork}}</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div ng-repeat=\"project in projects.slice(0,10)\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9 col-xs-10\">\n" +
    "                        <h3 style=\"margin-top:0px\">\n" +
    "                            <a href=\"/project/{{project.urlTitle}}\">\n" +
    "                                {{project.title}}\n" +
    "                            </a>\n" +
    "                        </h3>\n" +
    "	                    <p style=\"color:gray;font-style:italic;\"><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "                        <h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "						<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "						<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<!--TEMP | LOGGED IN / DASH-->\n" +
    "<div class=\"container\" ng-show=\"currentUser\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-4\" style=\"margin-left:-5px;\">\n" +
    "		    <div class=\"member-card\">\n" +
    "			    <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "			        <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-info\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\">{{currentUser.status}} online</p>\n" +
    "			        <p style=\"color:gray\">{{currentUser.totalWork}}</p>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-8\" style=\"margin-right:-5px;\">\n" +
    "			<div class=\"card\" style=\"min-width:100%\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<h4>{{currentUser.email}}</h4>\n" +
    "					<p><a href=\"/projects\">25 Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">23 Followers</a> | <a href=\"/member/{{currentUser.username}}/followers\">22 Following</a>\n" +
    "					<h5>Balance Lookup</h5>\n" +
    "		       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "		            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Asset\">\n" +
    "		            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			                <a href=\"#\">\n" +
    "			                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			                </a>\n" +
    "						</div>\n" +
    "		        	</form>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"false\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "\n" +
    "					<h1>Welcome to CRE8</h1>\n" +
    "		        	<h4>Create Your Value Map</h4>\n" +
    "		        	<h5>Universal Dimension && Universal+{{currentUser.id}} Dimension </h5>\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "\n" +
    "					<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/adb845dc962d237237b1387d4897f507/tumblr_mxk7bsHHpG1r09c0uo1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://78.media.tumblr.com/0ef539e26e60b888d4dcdbc0c349ae95/tumblr_o0j9i3ku5F1r1zjq4o1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://36.media.tumblr.com/990ab509d3d7304a8fc37e15807cd421/tumblr_myk4seJkFn1s7txf7o1_500.png\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://49.media.tumblr.com/9c91bdbba4be7cdf2efbb5e4ec81af3e/tumblr_nzqrn3eP7U1t1ye6to1_540.gif\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://66.media.tumblr.com/15d960a3d67084ca985db456ccef511b/tumblr_o56sb6nLfd1rrwdyco1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://78.media.tumblr.com/4a9e069a6b9e8080a38da7115f0395d9/tumblr_nunzd1Rikc1qb81nio1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/cc357ef5aefb2041b60696faf71b19d4/tumblr_o7fuvtaJbx1rclv0wo1_500.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://78.media.tumblr.com/a8e7e98f8328eb6ddbbb88a73010da06/tumblr_nu2mntog0W1qkbpm3o1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://66.media.tumblr.com/b4ac17c890389077048cd05f00b8b397/tumblr_o5xdhaZpCK1v05rsfo1_1280.jpg\">\n" +
    "		        	<img style=\"max-height:200px\" src=\"http://33.media.tumblr.com/9d90debeda613c297cd7642c14e00d03/tumblr_mf45zsouyw1qatka3o1_500.gif\">\n" +
    "\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<h3>Discover</h3>\n" +
    "							<h4>I believe the following is of value</h4>\n" +
    "							<!--<div ng-repeat=\"item in discover\">\n" +
    "								<div ng-show=\"item.model='ORDER'\">{{item}}</div>\n" +
    "							</div>-->\n" +
    "							<!--<div ng-repeat=\"order in orders\"><a href=\"#\" ng-click=\"addToOrder(order.identiferSet)\">{{order.identiferSet}}</a></div>-->\n" +
    "							<div class=\"row\"><div ng-repeat=\"item in finalArray\"><a style=\"font-weight:800\" class=\"col-xs-3\" href=\"#\" ng-click=\"addToOrder(item.element)\">{{item.element}}</a></div></div>\n" +
    "							<div class=\"spacing-15\"></div>\n" +
    "							<div class=\"\">\n" +
    "								<div class=\"form-group\" style=\"width:33%\">\n" +
    "									<input type=\"text\" class=\"form-control\">\n" +
    "									<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<h4>A Day Of Value</h4>\n" +
    "							<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">REST</span></p>\n" +
    "							<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">WORK</span></p>\n" +
    "							<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">FUN</span></p>\n" +
    "			        		<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/78b2c984797b14adfa8658ae32f2d39d/tumblr_ny5wg8Uo3v1qd8bbxo1_500.gif\">\n" +
    "							<div class=\"spacing-15\"></div>\n" +
    "							<div class=\"form-group\" style=\"width:33%\">\n" +
    "								<input type=\"text\" placeholder=\"Hours\" class=\"form-control\">\n" +
    "								<input type=\"text\" placeholder=\"Activity\" class=\"form-control\">\n" +
    "								<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<h4>Who Are You?</h4>\n" +
    "							<img style=\"max-height:200px\" src=\"http://36.media.tumblr.com/tumblr_md8qu5OBkq1qizi55o1_500.jpg\">\n" +
    "							<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/adb845dc962d237237b1387d4897f507/tumblr_mxk7bsHHpG1r09c0uo1_1280.jpg\">\n" +
    "							<div class=\"spacing-15\"></div>\n" +
    "							<div class=\"form-group\" style=\"width:33%\">\n" +
    "								<input type=\"text\" placeholder=\"Name\" class=\"form-control\">\n" +
    "								<input type=\"text\" placeholder=\"Birthday\" class=\"form-control\">\n" +
    "								<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<h4>Your Positions</h4>\n" +
    "							<p>{{newOrder}}</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">create</button>\n" +
    "\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"false\">\n" +
    "		<div class=\"card\" ng-show=\"true\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	        	<h4>Create Post Content</h4>\n" +
    "	        	<form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "					<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "					<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"\">\n" +
    "		    <div style=\";\">\n" +
    "				<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "					<li class=\"active\"><a href=\"/\">Activity</a></li>\n" +
    "					<li><a href=\"/discover\">Content</a></li>\n" +
    "					<li><a href=\"/market\">Orders</a></li>\n" +
    "					<li><a href=\"/projects\">Projects</a></li>\n" +
    "					<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "					<li><a href=\"/\">Work</a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "	                <a href=\"#\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Filters <i class=\"fa fa-angle-down\"></i></h5>\n" +
    "	                </a>\n" +
    "	                <ul style=\"position:relative\" class=\"dropdown-menu\">\n" +
    "	                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>tag:</h5></a></li>\n" +
    "	                    <hr class=\"sort-hr\">\n" +
    "	                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('memberCount DESC')\"><h5>@:</h5></a></li>\n" +
    "	                    <hr class=\"sort-hr\">\n" +
    "	                    <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>has:</h5></a></li>\n" +
    "	                </ul>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-repeat=\"item in activity\">\n" +
    "			<div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "						<!--TODO: POST PARENT TYPES-->\n" +
    "						<a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "						<a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "						<a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"post/{{item.post}}\">post {{item.post}}</a>\n" +
    "						<a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "						<a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "						<a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "						<a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "\n" +
    "						<a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "						<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "					</div>\n" +
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "					<form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "						<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<!--TODO: FINALIZE-->\n" +
    "			<div class=\"card\" ng-show=\"item.model=='PROJECT'\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "	                <div class=\"row\">\n" +
    "	                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "	                        <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-9 col-xs-10\">\n" +
    "	                        <h3 style=\"margin-top:0px\">\n" +
    "	                            <a href=\"project/{{item.urlTitle}}\">\n" +
    "	                                {{item.title}}\n" +
    "	                            </a>\n" +
    "	                        </h3>\n" +
    "	                        <p style=\"color:gray;font-style:italic;\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "	                        <h4><a href=\"project/{{item.urlTitle}}\">Join</a></h4>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "			<!--TODO: FINALIZE-->\n" +
    "			<div class=\"card\" ng-show=\"item.model=='TASK'\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-sm-10\">\n" +
    "							<h4><a href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "							<p><a href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "							<p><span ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "							<a ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "							<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "						</div>\n" +
    "						<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "							<h4>{{item.completeBountySet}} <a href=\"market/{{item.completeIdentifierSet}}\">{{item.completeIdentifierSet}}</a></h4>\n" +
    "							<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"task/{{item.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "					<a href=\"task/{{item.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        			<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "					<form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "						<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "			<div class=\"card\" ng-show=\"item.model=='WORK'\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "		                <a style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "		                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "						<a style=\"display:inline;font-weight:600\" href=\"work/{{item.id}}\">{{item.amount}}</a>\n" +
    "						<p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "					</div>\n" +
    "        			<p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "        			<!--liqudity lookup-->\n" +
    "	                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "					<form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "						<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "		<div ng-click=\"loadMore()\" style=\"text-align:center\">\n" +
    "			<button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<!--TEMP | LOGGED OUT / SPLASH -->\n" +
    "<div ng-show=\"!currentUser\">\n" +
    "\n" +
    "	<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
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
    "	    <div class=\"row\">\n" +
    "			<div ng-repeat=\"item in activity\">\n" +
    "				<div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "						<div>\n" +
    "							<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "							<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "							<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "							<!--TODO: POST PARENT TYPES-->\n" +
    "							<a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{item.market}}\">market {{item.market}}</a>\n" +
    "							<a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{item.order}}\">order {{item.order}}</a>\n" +
    "							<a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{item.post}}\">post {{item.post}}</a>\n" +
    "							<a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "							<a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "							<a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{item.task}}\">task {{item.task}}</a>\n" +
    "							<a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "							<a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "							<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "						</div>\n" +
    "						<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "						<a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "						<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "						<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "					</div>\n" +
    "					<!--TODO: NESTED -->\n" +
    "					<div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "						<form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "							<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "							<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\" ng-show=\"item.model=='PROJECT'\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "		                <div class=\"row\">\n" +
    "		                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "		                        <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"col-sm-9 col-xs-10\">\n" +
    "		                        <h3 style=\"margin-top:0px\">\n" +
    "		                            <a href=\"project/{{item.urlTitle}}\">\n" +
    "		                                {{item.title}}\n" +
    "		                            </a>\n" +
    "		                        </h3>\n" +
    "	                        	<p style=\"color:gray;font-style:italic;\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "		                        <h4><a href=\"project/{{item.urlTitle}}\">Join</a></h4>\n" +
    "		                    </div>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\" ng-show=\"item.model=='TASK'\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<div class=\"row\">\n" +
    "							<div class=\"col-sm-10\">\n" +
    "								<h4><a href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "								<p><a href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "								<p><span ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "								<a ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "								<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "							</div>\n" +
    "							<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "								<h4>{{item.completeBountySet}} <a href=\"market/{{item.completeIdentifierSet}}\">{{item.completeIdentifierSet}}</a></h4>\n" +
    "								<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a href=\"task/{{item.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "						<a href=\"task/{{item.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "						<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		                <a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "\n" +
    "				<div class=\"card\" ng-show=\"item.model=='WORK'\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "						<div>\n" +
    "							<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "							<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "							<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "			                <a style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "			                <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "							<a style=\"display:inline;font-weight:600\" href=\"work/{{item.id}}\">{{item.amount}}</a>\n" +
    "							<p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "						</div>\n" +
    "		    			<p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "		                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "		            </div>\n" +
    "		            <div class=\"card-footer\">\n" +
    "		                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "		                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "		                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		                <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		            </div>\n" +
    "			    </div>\n" +
    "		    </div>\n" +
    "    	</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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
    "            CRE8 MULTIDIMENSIONAL VALUE\n" +
    "          </text> \n" +
    "        </symbol>       \n" +
    "        <div class=\"intro-shade\"></div>  \n" +
    "      </svg> \n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
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
    "  <!--https://vimeo.com/153676878-->\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <!--<h1>Login</h1>   \n" +
    "                <h3>Welcome back!</h3>--> \n" +
    "                <h2>Login | Welcome back!</h2>\n" +
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
    "                        <a style=\"text-align:center\" href=\"/register\"><h4>Need an Account?</h4></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h1>{{market.title}} MARKETS</h1>\n" +
    "				<p style=\"color:gray\">{{stateParams.id}} | {{market.marketCount}} markets | {{market.circulation}} tokens in circulation </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<highchart config=\"chartMap\"></highchart>\n" +
    "					<!--EXPLORE-->\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"max-height:500px;overflow:scroll\">\n" +
    "			    <div class=\"card\" ng-repeat=\"market in markets\">\n" +
    "			    	<div style=\"padding:16px;\">\n" +
    "						<!--<p style=\"float:right\">{{renderRandom()}}%</p>-->\n" +
    "			    		<a href=\"market/{{stateParams.id}}/{{market}}\"><h4>{{market}}</h4></a>\n" +
    "			    		<p style=\"color:gray\">{{stateParams.id}}/{{market}} markets</p>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\" ng-repeat=\"market in markets\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "		    	<a href=\"market/{{stateParams.id}}/{{market}}\"><h4>{{market}}</h4></a>\n" +
    "		    	<p style=\"color:gray\">{{stateParams.id}}/{{market}} markets</p>\n" +
    "		    </div>\n" +
    "	    </div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Order Book</h2>\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-show=\"newOrderToggleVar\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	            <div ng-show=\"order.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		            <form role=\"form\" ng-submit=\"createPost(order)\">\n" +
    "		                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Trades</h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	            <div ng-show=\"order.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		            <form role=\"form\" ng-submit=\"createPost(order)\">\n" +
    "		                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Transactions</h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	            <div ng-show=\"transaction.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		            <form role=\"form\" ng-submit=\"createPost(order)\">\n" +
    "		                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Content</h2>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"currentUser\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	        	<h4>Create A Post</h4>\n" +
    "                <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-repeat=\"post in posts\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <div>\n" +
    "		            <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "		            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "		        </div> \n" +
    "		        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "		    </div>\n" +
    "		    <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "		    <!--TODO: NESTED -->\n" +
    "		    <div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "		            <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("marketPair/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPair/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div class=\"col-md-10\" style=\"padding:16px;\">\n" +
    "				<h1><a href=\"market/{{market}}\">{{market}}</a> | <a href=\"market/{{market1}}\">{{market1}}</a></h1>\n" +
    "				<p style=\"color:gray\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | {{percentChange.toFixed(2)}}% Daily Change | {{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}} Daily Trade Volume | {{marketDepth.toFixed(2)}} Total Market Depth</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-2\" style=\"padding:16px;text-align:right\">\n" +
    "				<a href=\"market/{{market1}}/{{market}}\"><i class=\"fa fa-refresh\"></i></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Order Book</h2>\n" +
    "				<highchart config=\"bidAskChart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"newOrderToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"createOrder(newTask)\">\n" +
    "\n" +
    "					<div class=\"col-sm-12\" style=\"padding:20px;\">\n" +
    "						<p ng-show=\"!inverted\" style=\"font-weight:800;\">Sell {{market}} for {{market1}} | Buy {{market1}} with {{market}}</p>\n" +
    "						<p ng-show=\"inverted\" style=\"font-weight:800;\">Buy {{market}} with {{market1}} | Sell {{market1}} with {{market}}</p>\n" +
    "					</div>\n" +
    "\n" +
    "					<!--invert | buy-->\n" +
    "					<!--<p style=\"font-weight:800;padding:20px\">Buy {{stateParams.id}} with {{stateParams.id1}}</p>-->\n" +
    "					<!--TODO: actual array-->\n" +
    "					<!--combinatorial market string-->\n" +
    "\n" +
    "					<div class=\"col-sm-6 form-group\"><input placeholder=\"{{market}}\" type=\"text\" ng-disabled=\"true\" ng-model=\"newOrder.identiferSet\" class=\"form-control\"></div>\n" +
    "					<div class=\"col-sm-6 form-group\"><input placeholder=\"{{market}} Amount\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\"></div>\n" +
    "\n" +
    "					<div style=\"text-align:center;margin-bottom:15px\" class=\"col-sm-12\">\n" +
    "						<button ng-click=\"invertMarket()\" style=\"width:100px\" class=\"btn btn-default log-btn\"><i class=\"fa fa-refresh\"></i> Invert</button>\n" +
    "					</div>\n" +
    "\n" +
    "					<div class=\"col-sm-6 form-group\"><input placeholder=\"{{market1}}\" ng-disabled=\"true\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\"></div>\n" +
    "					<div class=\"col-sm-6 form-group\">\n" +
    "						<div class=\"col-sm-6\"><input placeholder=\"{{market1}} Amount\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\"></div>\n" +
    "						<div class=\"col-sm-6\"><input placeholder=\"{{market}} / {{market1}} Price\" type=\"text\" ng-model=\"newOrder.amountSet1Price\" class=\"form-control\"></div>\n" +
    "					</div>\n" +
    "\n" +
    "					<!--option tokens string inferance+time+option-->\n" +
    "					<!--DERIVITATIVES; ON MINT TYPE | IE UNIVERSAL TRADE ON MINT; one way-->\n" +
    "\n" +
    "					<!--\n" +
    "					Market Orders;@ price | fok; ioc; onbook;\n" +
    "					Limit Orders; sell no lower than, buy no higher than price\n" +
    "					-->\n" +
    "\n" +
    "					<!--array based;; so multiD stops.. a gradiation in dimesnions-->\n" +
    "					<div class=\"col-sm-12\" style=\"marking:10px\">\n" +
    "						<!--<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">onBooks</button></div>--><!--on books; partial fill-->\n" +
    "						<!--<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">fillOrKill</button></div>--><!--all or nothing at price-->\n" +
    "						<!--<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">immediateOrCancel</button></div>--><!--partial fill at price-->\n" +
    "						<!--<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">Limit</button></div>--><!--limit; sell no lower than, buy no higher than; up to price-->\n" +
    "						<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">Market onBooks <i class=\"fa fa-question-circle\"></i></button></div>\n" +
    "						<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">Market fill Or Kill <i class=\"fa fa-question-circle\"></i></button></div>\n" +
    "						<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">Immediate or Cancel <i class=\"fa fa-question-circle\"></i></button></div>\n" +
    "						<div class=\"col-sm-3\"><button type=\"submit\" class=\"btn btn-default log-btn\">Limit <i class=\"fa fa-question-circle\"></i></button></div>\n" +
    "					</div>\n" +
    "\n" +
    "					<!--array based; this loops-->\n" +
    "					<div class=\"col-sm-12\" style=\"padding:20px\">\n" +
    "						<p style=\"font-weight:800;\">\n" +
    "							<span>Sell {{newOrder.amountSet}} {{market}} for {{newOrder.amountSet1}} {{market1}} @ {{newOrder.amountSet1 / newOrder.amountSet}} {{market}} / {{market1}}</span>\n" +
    "							<span> | </span>\n" +
    "							<span>Buy {{newOrder.amountSet1}} {{market1}} for {{newOrder.amountSet}} {{market}} @ {{newOrder.amountSet / newOrder.amountSet1}} {{market1}} / {{market}}</span>\n" +
    "					</div>\n" +
    "\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<!--TODO: Partially Filled Orders -->\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<!--<h2>Completed Orders</h2>-->\n" +
    "				<h2>Recent Trades</h2>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "		        <div ng-show=\"order.showReply\" class=\"card-footer\">\n" +
    "	                <form role=\"form\" ng-submit=\"createPost(order)\">\n" +
    "	                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Content</h2>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"currentUser\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	            <div class=\"col-md-12\">\n" +
    "	                <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "	                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "	                </form>\n" +
    "	                <div class=\"spacing-15\"></div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-repeat=\"post in posts\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <div>\n" +
    "		            <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "		            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "		        </div> \n" +
    "		        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "		    </div>\n" +
    "		    <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "		    <!--TODO: NESTED -->\n" +
    "		    <div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "		            <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h1>Markets</h1>\n" +
    "				<p style=\"color:gray\">88674 markets | 833423 tokens in circulation </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div ng-repeat=\"market in markets\" class=\"col-xs-4\" style=\"padding:0px\">\n" +
    "	    	<div class=\"card\">\n" +
    "			    <div style=\"padding:16px;\">\n" +
    "			    	<a style=\"white-space: nowrap;\" href=\"market/{{market}}\"><h4>{{market}}</h4></a>\n" +
    "			    	<p style=\"white-space: nowrap;color:gray\">{{market}} markets</p>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h1>Order Book</h1>\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"newOrderToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-6\">\n" +
    "						<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					</div>\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	            <div ng-show=\"order.showReply\" class=\"card-footer\">\n" +
    "	                <form role=\"form\" ng-submit=\"createPost(order)\">\n" +
    "	                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "	                </form>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h2>Trades</h2>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	    <div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<style>\n" +
    ".profile-header{background-color:white;}\n" +
    "</style>\n" +
    "\n" +
    "<div ui-view=\"member\">\n" +
    "	<div class=\"profile-header\">\n" +
    "		<div style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "			<div class=\"spacing-100\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"pull-left\"><img class=\"avatar\" err-src=\"/images/avatar.png\" ng-src=\"{{member.avatarUrl}}\"/></div>\n" +
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
    "					<!--<li><a href=\"member/{{member.username}}\">Time</a></li>-->\n" +
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
    "		<md-divider style=\"color:gray\"></md-divider>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "				<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "				<h5>@{{member.username}}</h5>\n" +
    "				<p>{{member.totalWork}} | total reputation</p>\n" +
    "			</div>\n" +
    "			<div class=\"pull-right\" style=\"margin-right:15px;margin-top:10px;\">\n" +
    "				<!--<h2>{{member.totalWork}} | total work</h2>-->\n" +
    "				<!--<input type=\"text\" placeholder=\"Reputation\" ng-model=\"reputationLookup\" class=\"form-control\">-->\n" +
    "				<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.username}}\">\n" +
    "				<a style=\"padding:10px 15px;color:rgb(125,125,125)\"class=\"btn btn-default\" href=\"#\" ng-click=\"newTransactionToggle()\">Send Tokens</a>\n" +
    "				<a ng-show=\"member.socialAccounts.facebook.profileUrl\" href=\"{{member.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><span class=\"grey facebook-icon\"><i class=\"fa fa-facebook\"></i> Facebook</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.twitter.profileUrl\" href=\"{{member.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><span class=\"grey twitter-icon\"><i class=\"fa fa-twitter\"></i> Twitter</span></a>\n" +
    "				<a ng-show=\"member.socialAccounts.google.profileUrl\" href=\"{{member.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><span class=\"grey google-icon\"><i class=\"fa fa-google\"></i> Google</span></a>\n" +
    "			</div>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"container\" ng-show=\"newTransactionToggleVar\">\n" +
    "			<div class=\"card\">\n" +
    "			    <div style=\"padding:10px;\">\n" +
    "			    	<h3 style=\"text-align:left;margin-left:15px;margin-bottom:15px;\">Send Tokens</h3>\n" +
    "					<form role=\"form\" ng-submit=\"createTransaction(newTransaction)\">\n" +
    "						<div class=\"form-group col-md-4\">\n" +
    "							<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<div class=\"form-group col-md-4\">\n" +
    "							<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<div class=\"form-group col-md-4\">\n" +
    "							<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						</div>\n" +
    "						<div class=\"form-group col-md-12\">\n" +
    "							<textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "						</div>\n" +
    "						<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "	</div>\n" +
    "	<md-divider style=\"color:gray\"></md-divider>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"container\">\n" +
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

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <h4>Create a Profile Post</h4>\n" +
    "                <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "\n" +
    "                    <!--TODO: POST PARENT TYPES-->\n" +
    "                    <div style=\"display:inline;\" ng-show=\"item.profile != item.user.id && item.profile != member.id\">\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                        <a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                        <a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{item.post}}\">post {{item.post}}</a>\n" +
    "                        <a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{item.profile.username}}\"><span ng-show=\"item.profile.username\">{{item.profile.username}}</span><span ng-show=\"!item.profile.username\">profile {{item.profile}}</span></a>\n" +
    "                        <a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "                        <a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{item.task}}\">task {{item.task}}</a>\n" +
    "                        <a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"/transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "                        <a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "                </div>\n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='ORDER'\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div> \n" +
    "                <div style=\"margin-left:42px\">\n" +
    "                    <p>{{item.amountSet}} <a href=\"#\">{{item.identiferSet}}</a></p>\n" +
    "                    <p>{{item.amountSet1}} <a href=\"#\">{{item.identiferSet1}}</a></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='TRANSACTION'\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <p style=\"font-weight:800\">From: <a href=\"member/{{item.from}}\">{{item.from}}</a> To: <a href=\"member/{{item.to}}\">{{item.to}}</a></p>\n" +
    "                <p style=\"font-weight:800\">{{item.amount}} <a href=\"market/{{item.identifier}}\">{{item.identifier}}</a></p>\n" +
    "                <p><a ng-repeat=\"tag in item.ledger.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                <p>{{item.content}}</p>\n" +
    "                <p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> | {{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "                <a href=\"transaction/{{item.id}}\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='WORK'\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"work/{{item.id}}\">{{item.amount}}</a>\n" +
    "                    <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div>\n" +
    "                <p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("member/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/content.tpl.html",
    "<!--POST MODEL | CONTENT TYPE -->\n" +
    "<!--ATTACHED FILE(S) | VIDEO(S) | TEXT(S) | IMAGE(S) ... -->\n" +
    "<div class=\"row\" ng-show=\"true\">\n" +
    "    <div class=\"\">\n" +
    "    	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    		<li class=\"active\"><a href=\"\">Text</a></li>\n" +
    "    		<li class=\"active\"><a href=\"\">Image</a></li>\n" +
    "    		<li><a href=\"\">Video</a></li>\n" +
    "            <li><a href=\"\">Work</a></li>\n" +
    "    	</ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- POST WITH ATTACHMENT -->\n" +
    "<!-- MASTER POST MODEL FOR CONTENT -->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"\">\n" +
    "        <div style=\"padding:10px;\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"newContentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newContentToggleVar\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                <div class=\"\">\n" +
    "                    <input type=\"text\" placeholder= \"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Parent\" ng-model=\"newContent.parent\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Type\" ng-model=\"newContent.type\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                    <input type=\"text\" placeholder= \"Tags\" ng-model=\"newContent.tags\" class=\"form-control\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <input type=\"text\" placeholder= \"Attachment\" ng-model=\"newContent.attachment\" class=\"form-control\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"\" ng-repeat=\"item in content\">\n" +
    "        <div class=\"card\" style=\"\">\n" +
    "            <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "                <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                <p><a style=\"font-weight:700\"  href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a> | <span am-time-ago=\"item.createdAt\"></span></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/followers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/followers.tpl.html",
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in followers\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.follower.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.follower.username}}\"><img ng-src=\"{{member.follower.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.follower.username}}\">{{member.follower.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.follower.status}} offline</p>\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.follower.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in following\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.followed.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.followed.username}}\"><img ng-src=\"{{member.followed.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.followed.username}}\">{{member.followed.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.followed.status}} offline</p>\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.followed.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/ledger.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"\">\n" +
    "		<div style=\"\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "					<li><a href=\"\">Assets</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "					<li><a href=\"\">Transactions</a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "				<!--<h1>888,888,888 USD</h1>-->\n" +
    "				<!--<h3>{{sumTo[sumTo.length-1]}} CRE8</h3>-->\n" +
    "				<!--<h4>Filter</h4>\n" +
    "				<form style=\"display:flex;flex-direction:row;\">\n" +
    "			    	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Asset\">\n" +
    "			    	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			            <a href=\"#\">\n" +
    "			                <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			            </a>\n" +
    "					</div>\n" +
    "				</form>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "	    <form style=\"display:flex;flex-direction:row;\">\n" +
    "	        <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "	    </form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "					<li class=\"active\"><a href=\"\">Expense</a></li>\n" +
    "					<li><a href=\"\">Revenue</a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "				<form style=\"display:flex;flex-direction:row;\">\n" +
    "			    	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Asset\">\n" +
    "			    	<div style=\"border:0px;width:50%\" class=\"btn btn-default dropdown sort-dropdown noselect\">\n" +
    "			            <a href=\"#\">\n" +
    "			                <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			            </a>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "				<h3>{{sumTo[sumTo.length-1]}} CRE8</h3>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"pie\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"newTransactionToggle()\">+ Transaction</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newTransactionToggleVar\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createTransaction()\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"To\" type=\"text\" ng-model=\"newTransaction.to\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-12\">\n" +
    "					<input placeholder=\"Tags\" type=\"text\" ng-model=\"newTransaction.ledger\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-12\">\n" +
    "					<textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\" ng-repeat=\"transaction in transactions\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<p style=\"font-weight:800\">From: <a href=\"member/{{transaction.from}}\">{{transaction.from}}</a> To: <a href=\"member/{{transaction.to}}\">{{transaction.to}}</a></p>\n" +
    "			<p style=\"font-weight:800\">{{transaction.amount}} <a href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></p>\n" +
    "			<p><a ng-repeat=\"tag in transaction.ledger\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "			<p>{{transaction.content}}</p>\n" +
    "			<p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "			<a href=\"transaction/{{transaction.id}}\"></a>\n" +
    "		</div>\n" +
    "		<div class=\"card-footer\">\n" +
    "			<a href=\"#\" ng-click=\"createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.plusCount}} like </a> \n" +
    "			<a href=\"#\" ng-click=\"createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.minusCount}} dislike </a>\n" +
    "			<a href=\"#\" ng-click=\"reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "			<a class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{transaction.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		</div>\n" +
    "		<div ng-show=\"transaction.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(transaction)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("member/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"member/{{member.username}}/ledger\">Overview</a></li>\n" +
    "			<li><a href=\"\">Assets</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>Create Your Value Map</h1>\n" +
    "			<h4>Our Social Responsibility | Dimensional Vote | Manifest Pluralism</h1>\n" +
    "			<span><a href=\"market/UniversalToken\">Universal Dimension</a> | <a href=\"#\">+ Dimension</a></span><br>\n" +
    "			<span><span ng-repeat=\"dimension in chart.xAxis.categories\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
    "			<a href=\"/discover\">Discover</a>\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>	\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Order</button>\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>			\n" +
    "	\n" +
    "<div class=\"row\" ng-show=\"newOrderToggleVar\">	\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Asset Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Asset Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"order in orders\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "            	<span ng-repeat=\"item in order.amountSet\">\n" +
    "					{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "				</span>\n" +
    "				<span> | </span>\n" +
    "				<span ng-repeat=\"item in order.amountSet1\">\n" +
    "					{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "				</span>\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"order.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "		            <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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

angular.module("order/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "            	<h2><a href=\"market/{{order.identiferSet}}/{{order.identiferSet1}}\">{{order.identiferSet}} | {{order.identiferSet1}}</a></h2>\n" +
    "            	<h4>{{order.amountSet}} {{order.identiferSet}}</h4>\n" +
    "            	<h4>{{order.amountSet1}} {{order.identiferSet1}}</h4>\n" +
    "            	<a href=\"member/{{order.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{order.user.username}}\n" +
    "                </a>\n" +
    "                <h4>{{order.createdAt}}</h4>\n" +
    "            	<h4>onBooks | Filled | Date</h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "                <p><a href=\"market/createOrder\">createOrder</a></p>\n" +
    "                <p><a href=\"market/createOrder+{{order.identiferSet}}\">createOrder+{{order.identiferSet}}</a></p>\n" +
    "                <p><a href=\"market/createOrder+{{order.identiferSet1}}\">createOrder+{{order.identiferSet1}}</a></p>\n" +
    "                <p><a href=\"market/{{order.id}}\">{{order.id}}</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: Partially Filled Orders -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <h2>Trades</h2>\n" +
    "                <h4>Filled | Partially Filled</h4>\n" +
    "                <!--<h5>Trades are a transaction pair. Seller to Buyer; Buyer to Seller</h5>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: -->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <h2>Transactions</h2>\n" +
    "                <!--<h5>Seller to Eskrow, Buyer to Eskrow, Eskrow to Engine, Engine to Seller, Engine to Buyer</h5>-->\n" +
    "                <h5>Seller to Buyer, Buyer to Seller</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "            	<div class=\"col-md-12\">\n" +
    "                    <h4>Create Order Post</h4>\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                        <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-repeat=\"post in posts\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "                </div> \n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"post.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("post/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "		        <p><a href=\"market/createContent\">createContent</a></p>\n" +
    "		        <p><a href=\"market/createContent+{{post.id}}\">createContent+{{post.id}} </a></p>\n" +
    "		        <p><a href=\"market/{{post.id}}\">{{post.id}} </a></p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <h3>{{post.parent}} Parent Information</h3>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<!--CONTENT TYPE-->\n" +
    "		<!--BLEND STREAM PAGE FOR VIDEO TYPE-->\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					<a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a>\n" +
    "				</div>\n" +
    "				<div><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "			<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "					<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div ng-include=\"'post/post.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("post/post.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("post/post.tpl.html",
    "<div class=\"card\" style=\"margin:5px\">\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span class=\"\">{{post.user.username}}</span></a>\n" +
    "        </div>\n" +
    "        <div><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "            <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
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

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<div class=\"imageContainerSmall\">\n" +
    "<!--<div class=\"imageContainerSmall\" style=\"background-image: url('http://bg.siteorigin.com/image/generate?color=%23778a70&pattern=xv&blend=3&intensity=42.00&noise=0')\">-->\n" +
    "    <div class=\"imageContainerSmallDiv\">  \n" +
    "        <h1 style=\"text-align:left;white-space:nowrap\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "            {{project.title}}\n" +
    "            <span ng-show=\"project.parent\"> | \n" +
    "                <a style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a>\n" +
    "            </span> \n" +
    "        </h1>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "    <div class=\"row\">\n" +
    "    	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    		<li><a href=\"/project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "    		<!--<li><a href=\"/project/{{project.urlTitle}}/channels\">Channels</a></li>\n" +
    "            <li><a href=\"/project/{{project.urlTitle}}/charter\">Charter</a></li>-->\n" +
    "            <li><a href=\"/project/{{project.urlTitle}}/content\">Content</a></li>\n" +
    "    		<li><a href=\"/project/{{project.urlTitle}}/ledger\">Ledger</a></li>\n" +
    "            <!--<li><a href=\"/project/{{project.urlTitle}}\">Map</a></li>-->\n" +
    "    		<li><a href=\"/project/{{project.urlTitle}}/members\">{{memberCount}} Members</a></li>\n" +
    "            <li><a href=\"/project/{{project.urlTitle}}/projects\">Projects</a></li>\n" +
    "            <!--<li><a href=\"/project/{{project.urlTitle}}/store\">Store</a></li>-->\n" +
    "    		<!--<li><a href=\"/project/{{project.urlTitle}}/streams\">Streams</a></li>-->\n" +
    "            <li><a href=\"/project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
    "    		<li ng-show=\"currentUser\">\n" +
    "    			<a class=\"btn btn-default\" ng-click=\"toggleEditproject()\">Edit</a>\n" +
    "    		</li>\n" +
    "    		<li ng-show=\"currentUser\">\n" +
    "    			<a class=\"btn btn-default\" ng-click=\"createMember()\">Join</a>\n" +
    "    		</li>\n" +
    "    	</ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<md-divider></md-divider>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\" ng-show=\"editProjectToggle\"><p>edit project form</p></div>\n" +
    "<div class=\"container\">\n" +
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

angular.module("project/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/activity.tpl.html",
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <h4>Create a Post in {{project.title}}</h4>\n" +
    "            <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div>\n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='TASK'\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-10\">\n" +
    "                        <h4><a href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                        <p><a href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "                        <p><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></p>\n" +
    "                        <a ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "                        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "                        <h4>{{item.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{item.completeIdentifierSet}}</a></h4>\n" +
    "                        <p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"task/{{item.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"task/{{item.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"item.model=='WORK'\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"work/{{item.id}}\">{{item.amount}}</a>\n" +
    "                    <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div>\n" +
    "                <p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"work/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("project/templates/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/channels.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-2\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"\" ng-repeat=\"channel in channels\">\n" +
    "                    <h4><a href=\"#\">{{channel.title}}</a></h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-default log-btn\">+ Channel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-10\">\n" +
    "        <div ng-repeat=\"post in posts\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
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
    "                <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                        <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(newMessage)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button style=\"width:100%\" type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">Submit</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("project/templates/charter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/charter.tpl.html",
    "<button class=\"btn btn-default log-btn\" ng-click=\"newMotionToggle()\">+ Motion</button>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"card\" ng-show=\"newMotionToggleVar\">\n" +
    "    <div style=\"padding:16px;\">\n" +
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
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--motion to create order; motion to accept join; motion to 'enact bill' motion 'to vote on bill' | create 'enect bill motion' -->\n" +
    "<!--history of motions.. aka charter-->\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in bills\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "             	<h4><a href=\"https://www.voetr.com/bills\">{{item.title}}</a></h4>\n" +
    "             	<p>admin, engineering</p>\n" +
    "             	<p><span am-time-ago=\"bill.createdAt\"></span>30 seconds ago</p>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"https://www.voetr.com/bills\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<p style=\"text-align:right;font-style:italic\"><a STYLE=\"color:gray\" href=\"https://www.voetr.com\">voetr API</a></p>\n" +
    "");
}]);

angular.module("project/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/content.tpl.html",
    "<!--POST MODEL | CONTENT TYPE -->\n" +
    "<!--ATTACHED FILE(S) | VIDEO(S) | TEXT(S) | IMAGE(S) ... -->\n" +
    "<div class=\"row\">\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li class=\"active\"><a href=\"\">Files</a></li>\n" +
    "        <li class=\"active\"><a href=\"project/{{project.urlTitle}}/charter\">Motions</a></li>\n" +
    "        <li class=\"active\"><a href=\"\">Posts</a></li>\n" +
    "        <li class=\"active\"><a href=\"\">Text</a></li>\n" +
    "        <li><a href=\"\">Videos</a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"\">\n" +
    "        <div style=\"padding:10px\">\n" +
    "           <!-- POST WITH ATTACHMENT -->\n" +
    "           <!-- MASTER POST MODEL FOR CONTENT? YE THINK REDDIT -->\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"newContentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    " \n" +
    "<div class=\"row\" ng-show=\"newContentToggleVar\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                <div class=\"\">\n" +
    "                    <input type=\"text\" placeholder= \"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Parent\" ng-model=\"newContent.parent\" class=\"form-control\">\n" +
    "                    <input type=\"text\" placeholder= \"Type\" ng-model=\"newContent.type\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                    <ul style=\"\" class=\"member-tabs\">\n" +
    "                        <li class=\"active\"><a href=\"\">Image</a></li>\n" +
    "                        <li class=\"active\"><a href=\"\">Post</a></li>\n" +
    "                        <li class=\"active\"><a href=\"\">Link</a></li>\n" +
    "                        <li class=\"active\"><a href=\"\">File</a></li>\n" +
    "                        <li class=\"active\"><a href=\"\">Motion</a></li>\n" +
    "                        <li class=\"active\"><a href=\"\">Text</a></li>\n" +
    "                        <li><a href=\"\">Video</a></li>\n" +
    "                    </ul>\n" +
    "                    <input type=\"text\" placeholder= \"Tags\" ng-model=\"newContent.tags\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <input type=\"text\" placeholder= \"Attachment\" ng-model=\"newContent.attachment\" class=\"form-control\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "            </form>\n" +
    "         </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"\" ng-show=\"content.length == 0\">\n" +
    "    <div style=\"padding:16px;color:gray\">\n" +
    "        There's nothing here..\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in content\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                <div style=\"\">\n" +
    "                    <a style=\"font-weight:700\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"> {{item.user.username}}\n" +
    "                    </a>\n" +
    "                    <span am-time-ago=\"item.createdAt\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:gray\"> • created <span am-time-ago=\"item.createdAt\"></span></a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("project/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/ledger.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"\">\n" +
    "		<div style=\"\">\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "				<li><a href=\"\">Assets</a></li>\n" +
    "				<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "				<li><a href=\"\">Transactions</a></li>\n" +
    "				<!--<li><a href=\"\">Work</a></li>\n" +
    "				<li><a href=\"\">Property</a></li>\n" +
    "				<li><a href=\"\">Liscense</a></li>-->\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "	    <form style=\"display:flex;flex-direction:row;\">\n" +
    "	        <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "	    </form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<ul style=\"\" class=\"member-tabs\">\n" +
    "				<li class=\"active\"><a href=\"\">Overview</a></li>\n" +
    "				<li><a ng-click=\"selectExpense)\" href=\"#\">Expenses</a></li>\n" +
    "				<li><a ng-click=\"selectRevnue()\" href=\"#\">Revenue</a></li>\n" +
    "			</ul>\n" +
    "			<!--children projects..-->\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"pie\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<p><span ng-repeat=\"tag in sortedTransactionTags\"><a href=\"/market/{{tag.element}}\">{{tag.element}} </a></span><p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"newTransactionToggle()\">+ Transaction</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newTransactionToggleVar\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">		\n" +
    "			<form role=\"form\" ng-submit=\"createTransaction(newTransaction)\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"To\" type=\"text\" ng-model=\"newTransaction.to\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-12\">\n" +
    "					<input placeholder=\"Tags\" type=\"text\" ng-model=\"newTransaction.ledger\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-12\">\n" +
    "					<textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\" ng-repeat=\"transaction in transactions\">\n" +
    "		<div style=\"padding:16px\">\n" +
    "			<p style=\"font-weight:800\">From: <a href=\"member/{{transaction.from}}\">{{transaction.from}}</a> To: <a href=\"member/{{transaction.to}}\">{{transaction.to}}</a></p>\n" +
    "			<p style=\"font-weight:800\">{{transaction.amount}} <a href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></p>\n" +
    "			<p><a ng-repeat=\"tag in transaction.ledger\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "			<p>{{transaction.content}}</p>\n" +
    "			<p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "			<a href=\"transaction/{{transaction.id}}\"></a>\n" +
    "		</div>\n" +
    "		<div class=\"card-footer\">\n" +
    "			<a href=\"#\" ng-click=\"createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.plusCount}} like </a> \n" +
    "			<a href=\"#\" ng-click=\"createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.minusCount}} dislike </a>\n" +
    "			<a href=\"#\" ng-click=\"reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "			<a class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{transaction.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		</div>\n" +
    "		<div ng-show=\"transaction.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(transaction)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("project/templates/members.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/members.tpl.html",
    "<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">join</button>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.user.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.user.username}}\"><img ng-src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h4>\n" +
    "	        <!--<p style=\"color:gray\">{{member.status}} offline</p>-->\n" +
    "	        <p style=\"color:gray\">total reputation | {{member.user.totalWork}}</p>\n" +
    "	        <p style=\"color:gray\">{{project.title}} | 888</p>\n" +
    "	    </div>\n" +
    "	    <!--<div class=\"member-card-social\">\n" +
    "	        <a ng-show=\"member.user.socialAccounts.facebook.profileUrl\" href=\"{{member.user.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.user.socialAccounts.twitter.profileUrl\" href=\"{{member.user.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "	        <a ng-show=\"member.user.socialAccounts.google.profileUrl\" href=\"{{member.user.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "	    </div>-->\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"project/{{project.urlTitle}}/ledger\">Overview</a></li>\n" +
    "			<li><a href=\"\">Assets</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>{{project.title}} | Value Map</h1>\n" +
    "			<span><a href=\"market/UniversalToken\">Universal Dimension</a> | <a href=\"#\">+ Dimension</a></span><br>\n" +
    "			<span><span ng-repeat=\"dimension in chart.xAxis.categories\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
    "			<a href=\"/discover\">Discover</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"newOrderToggle()\">+ Motion to Create Order</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>	\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newOrderToggleVar\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Asset Identifer Set 1\" type=\"text\" ng-model=\"newOrder.identiferSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 1\" type=\"text\" ng-model=\"newOrder.amountSet\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Asset Identifer Set 2\" type=\"text\" ng-model=\"newOrder.identiferSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<div class=\"form-group col-sm-6\">\n" +
    "					<input placeholder=\"Order Amount Set 2\" type=\"text\" ng-model=\"newOrder.amountSet1\" class=\"form-control\" id=\"taskTitle\">\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.amountSet\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"order in orders\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <!--<div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{order.user.avatarUrl}}\" src=\"{{order.user.avatarUrl}}\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{order.user.username}}\">{{order.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "                </div>--> \n" +
    "                <!--<div style=\"margin-left:42px\">-->\n" +
    "                	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "                <!--</div>-->\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
    "<div ng-show=\"project.parent\">\n" +
    "	<h3><a href=\"project/{{project.urlTitle}}\"><img style=\"height:32px\" src=\"{{project.parent.avatarUrl}}\"> <a href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h3>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ Project</button><br><br>\n" +
    "        <div ng-show=\"newProjectToggleVar\">\n" +
    "            <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject()\">\n" +
    "                <input type=\"text\" placeholder= \"Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                <text-angular placeholder=\"Description \"ng-model=\"newProject.description\" ta-toolbar=\"''\"></text-angular>\n" +
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
    "					<p style=\"color:gray;font-style:italic;\"><span ng-bind-html=\"renderContent(project.description)\"></span></p></p>\n" +
    "					<!--\n" +
    "					<p>{{project.memeberCount}}</p>\n" +
    "					<p>{{project.taskCount}}</p>\n" +
    "					<p>{{project.totalWork}}</p>\n" +
    "					<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "					-->\n" +
    "				</div>\n" +
    "				<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "					<h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<!--FILTERS AND SEARCH HERE-->\n" +
    "<div class=\"row\">\n" +
    "	<button class=\"btn btn-default log-btn\" ng-click=\"newTaskToggle()\">+ Task</button><br><br>\n" +
    "	<div class=\"card\" ng-show=\"newTaskToggleVar\">\n" +
    "	    <div style=\"padding:10px;\">\n" +
    "			<form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "				<div class=\"form-group\">\n" +
    "					<input placeholder=\"Title\" type=\"text\" ng-model=\"newTask.title\" class=\"form-control\" id=\"taskTitle\">\n" +
    "					<input placeholder=\"Tags\" type=\"text\" ng-model=\"newTask.tags\" class=\"form-control\" id=\"taskTitle\">\n" +
    "	                <text-angular placeholder=\"Content\" ng-model=\"newTask.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "				</div>\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "						<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "	                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "						<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<a href=\"#\" ng-click=\"reply(task)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<div ng-show=\"task.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "	            <form role=\"form\" ng-submit=\"createPost(task)\">\n" +
    "	                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "	            </form>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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
    "                        <input type=\"text\" placeholder= \"Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                        <!--<input type=\"text\" placeholder= \"Tags\" ng-model=\"newProject.tags\" class=\"form-control\">-->\n" +
    "                        <text-angular placeholder= \"Description\" ng-model=\"newProject.description\" ta-toolbar=\"''\"></text-angular>\n" +
    "                        <!--<input type=\"text\" placeholder= \"Project Parent\" ng-model=\"newProject.parent\" class=\"form-control\">-->\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
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
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div ng-repeat=\"project in projects\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-9 col-xs-10\">\n" +
    "                        <h3 style=\"margin-top:0px\">\n" +
    "                            <a href=\"/project/{{project.urlTitle}}\">\n" +
    "                                <!--<img style=\"width:50px;height:50px;margin-right:5px\" src=\"{{project.avatarUrl}}\">-->\n" +
    "                                {{project.title}}\n" +
    "                            </a>\n" +
    "                        </h3>\n" +
    "                        <p style=\"color:gray;font-style:italic;\"><span ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "                        <h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "                        <!--{{project.memberCount}} | {{project.taskCount}} | {{project.workTime}}-->\n" +
    "                        <!--<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div ng-click=\"loadMore()\" class=\"container\" style=\"text-align:center\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <!--<h1>Register</h1>\n" +
    "                <h3>Join Our Community</h3>-->\n" +
    "                <h2>Join Our Community</h2>\n" +
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
    "                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "	<div class=\"page-heading\">\n" +
    "		<div class=\"container\"> \n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<h1><b>{{searchQuery}}</b></h1>\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<form role=\"form\" >\n" +
    "			<div class=\"card\">\n" +
    "				<input type=\"text\" class=\"form-control\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" placeholder=\"{{searchQuery}}\">\n" +
    "			</div>\n" +
    "		</form>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "			<li><a href=\"/discover\">Content</a></li>\n" +
    "			<li><a href=\"/\">Members</a></li>\n" +
    "			<li><a href=\"/market\">Orders</a></li>\n" +
    "			<li><a href=\"/projects\">Projects</a></li>\n" +
    "			<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "			<li><a href=\"/\">Value</a></li>\n" +
    "			<li><a href=\"/\">Work</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div ng-repeat=\"item in searchResults\">\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "		            <div>\n" +
    "		                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "		                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "		                <div style=\"display:inline;\" ng-show=\"item.profile != item.user.id && item.profile != member.id\">\n" +
    "		                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "		                    <a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{item.market}}\">market {{item.market}}</a>\n" +
    "		                    <a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{item.order}}\">order {{item.order}}</a>\n" +
    "		                    <a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"/post/{{item.post}}\">post {{item.post}}</a>\n" +
    "		                    <a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "		                    <a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "		                    <a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{item.task}}\">task {{item.task}}</a>\n" +
    "		                    <a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "		                </div>\n" +
    "		                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "		            </div>\n" +
    "		            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "		        </div>\n" +
    "		        <div class=\"card-footer\">\n" +
    "		            <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "		            <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "		            <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		            <a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		        </div>\n" +
    "		        <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		            <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "						<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "	    	</div>\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='MEMBER'\"></div>\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='ORDER'\"></div>\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='PROJECT'\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div class=\"row\">\n" +
    "	                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "	                        <a href=\"/project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;\" src=\"{{item.avatarUrl}}\"></a>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-9 col-xs-10\">\n" +
    "	                        <h3 style=\"margin-top:0px\">\n" +
    "	                            <a href=\"/project/{{item.urlTitle}}\">\n" +
    "	                                {{item.title}}\n" +
    "	                            </a>\n" +
    "	                        </h3>\n" +
    "                        <p style=\"color:gray;font-style:italic;\"><span ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "	                        <h4><a href=\"project/{{item.urlTitle}}\">Join</a></h4>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='TASK'\"></div>\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"item.model=='WORK'\"></div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("stream/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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

angular.module("task/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <h3>{{task.title}} | <a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></h3>\n" +
    "                <div style=\"font-style:italic;color:gray\">\n" +
    "                    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
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
    "                        <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{verification.user.username}}\n" +
    "                    </a> | {{verification.score}}\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
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
    "    <!--TODO: STREAM-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
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
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-repeat=\"work in work\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{work.user.username}}\">{{work.user.username}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"work/{{work.id}}\">{{work.amount}}</a>\n" +
    "                    <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"work.createdAt\"></p>\n" +
    "                </div>\n" +
    "                <p ng-show=\"work.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                <p style=\"margin-left:42px\" ng-show=\"work.task.completeIdentifierSet\"><a href=\"market/{{work.task.completeIdentifierSet}}\">{{work.task.completeIdentifierSet}}</a> | {{work.task.completeBountySet}}</p>\n" +
    "                <div style=\"margin-left:42px\">\n" +
    "                    {{item.stream}}\n" +
    "                    <!--<p><button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"createVerification(item)\">verify</button></p>-->\n" +
    "                    <span style=\"display:inline\" ng-bind-html=\"renderContent(work.content)\"></span>\n" +
    "                    <span style=\"text-align:right;float:right\"><span style=\"color:gray;font-style:italic\">Verification Score:</span> <a style=\"font-wieght:800\" href=\"#\">{{work.verificationScore}}</a></span>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <h4>Create a Task Post</h4>\n" +
    "                <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                    <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div ng-repeat=\"post in posts\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a style=\"display:inline;font-weight:600\" href=\"/task/{{post.task.id}}\">{{post.task.title}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span></div>\n" +
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
    "                        <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-keyup=\"keyPress(searchQuery)\">\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div ng-repeat=\"task in tasks\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "						<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "						<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "						<!--TODO: DO IT FOR REAL | MARKET LOOKUP-->\n" +
    "						<!--<h4 ng-show=\"!task.completeBountySet\"><a href=\"market/{{task.id}}\">Create Liquidity</a></h4>-->\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "				<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "				<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("transaction/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "    \n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <h2>Transaction {{transaction.id}}</h2>\n" +
    "            <p style=\"font-weight:800\">From: <a href=\"member/{{transaction.from}}\">{{transaction.from}}</a> To: <a href=\"member/{{transaction.to}}\">{{transaction.to}}</a></p>\n" +
    "            <p style=\"font-weight:800\">{{transaction.amount}} <a href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></p>\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "            <p>{{transaction.content}}</p>\n" +
    "            <p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}+{{transaction.id}}\">{{tag.trim()}}+{{transaction.id}} </a></p>\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}+send\">{{tag.trim()}}+send </a></p>\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}+recieve\">{{tag.trim()}}+recieve </a></p>\n" +
    "            <a href=\"market/{{transaction.id}}\">{{transaction.id}}</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "     <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <h4>Create Transaction Post</h4>\n" +
    "            <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\" ng-repeat=\"post in posts\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "            </div> \n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"\" class=\"card-footer\">\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"color:grey\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "                <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("transparency/index.tpl.html", []).run(["$templateCache", function($templateCache) {
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

angular.module("work/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("work/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "\n" +
    "			<div style=\"padding:16px\" class=\"col-md-12\">\n" +
    "				<a style=\"font-weight:700\" href=\"member/{{work.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					{{work.user.username}}\n" +
    "				</a>\n" +
    "				<h3><a href=\"task/{{work.task.id}}\">{{work.task.title}}</a> | {{work.amount}}</h3>\n" +
    "				<p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderMessage(work.content)\"></span></p>\n" +
    "				<span style=\"color:gray\" am-time-ago=\"work.createdAt\"></span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div style=\"padding:16px\" class=\"col-md-12\">\n" +
    "				<!--TODO: GRAULAR VERIFICATION | SCALE 0-1 (INFINITE DECIMAL)-->\n" +
    "				<!--TODO: DIMENSIONALITY-->\n" +
    "				<h4>Dimensional Work Verification Score | {{work.verificationScore}}</h4>\n" +
    "				<button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'plus')\">+</button>\n" +
    "		        <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'minus')\">-</button>\n" +
    "		        <div class=\"spacing-10\"></div>\n" +
    "		   		<div ng-repeat=\"verification in workVerification\">\n" +
    "		            <a href=\"member/{{verification.user.username}}\">\n" +
    "		                <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		                {{verification.user.username}}\n" +
    "		            </a> | {{verification.score}}\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "		        </div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: REAL STREAM-->\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<div ng-bind-html=\"renderStream(work.stream)\">></div>\n" +
    "				<h3><a href=\"stream/{{work.id}}\">{{work.id}} Stream</a></h3>\n" +
    "				<!--<p><a style=\"font-weight:700\" href=\"member/{{work.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "					{{work.user.username}}\n" +
    "				</a> | <span am-time-ago=\"work.createdAt\"></span></p>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<!--TODO: TOKEN CLARITY-->\n" +
    "				<!--TODO: COLLAPSE UI-->\n" +
    "				<!--VERIFICATION BASED TOKEN LIQUIDITY | TAGS, DIMENSIONAL VERIFICATION-->\n" +
    "				<h3>Liquidity | Market Orders | Tokens</h3>\n" +
    "				<h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "				<p><a href=\"market/{{work.id}}+onTime\">onTime+{{work.id}}</a></p>\n" +
    "				<p><a href=\"market/{{work.id}}+onTimeStream\">onTimeStream+{{work.id}}</a></p>\n" +
    "				<!--work.id tokens are given 'bridge' liquidity to work.task.id tokens as verification | you get work.task.id tokens on verification | minting is based on verification protocol-->\n" +
    "				<!--does verification give liquidity to work.id tokens?--> <!--verification as staking?-->\n" +
    "				<p><a href=\"market/{{work.task.id}}+onTime\">onTime+{{work.task.id}}</a></p>\n" +
    "			    <p><a href=\"market/{{work.task.id}}+onTimeStream\">onTimeStream+{{work.task.id}}</a></p>\n" +
    "			    <p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{work.task.id}} </a></p>\n" +
    "			    <p><a href=\"market/general\">general</a></p>\n" +
    "			   	<!--<h4><a href=\"market/{{work.id}}\">Create Liquidity</a></h4>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "	                <h4>Create a Work Post</h4>\n" +
    "			        <form role=\"form\" ng-submit=\"createPost(newPost)\">\n" +
    "                    	<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "			            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "			        </form>\n" +
    "			        <div class=\"spacing-15\"></div>\n" +
    "			    </div>\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div ng-repeat=\"post in posts\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "						<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "					</div>\n" +
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"post/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<!--TODO: NESTED -->\n" +
    "				<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "					<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "						<text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
