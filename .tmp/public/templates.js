angular.module("templates-app", ["about/index.tpl.html", "account/index.tpl.html", "apps/index.tpl.html", "association/index.tpl.html", "block/index.tpl.html", "content/content.tpl.html", "content/index.tpl.html", "contentList/index.tpl.html", "developers/index.tpl.html", "discover/index.tpl.html", "footer/index.tpl.html", "home/index.tpl.html", "home/templates/feed.tpl.html", "home/templates/intro.tpl.html", "item/index.tpl.html", "login/index.tpl.html", "market/index.tpl.html", "marketPair/index.tpl.html", "marketPlace/index.tpl.html", "markets/index.tpl.html", "member/index.tpl.html", "member/templates/about.tpl.html", "member/templates/actions.tpl.html", "member/templates/activity.tpl.html", "member/templates/assets.tpl.html", "member/templates/content.tpl.html", "member/templates/followers.tpl.html", "member/templates/following.tpl.html", "member/templates/items.tpl.html", "member/templates/ledger.tpl.html", "member/templates/positions.tpl.html", "member/templates/projects.tpl.html", "member/templates/tasks.tpl.html", "member/templates/time.tpl.html", "members/index.tpl.html", "nav/index.tpl.html", "notifications/index.tpl.html", "order/index.tpl.html", "project/index.tpl.html", "project/templates/about.tpl.html", "project/templates/activity.tpl.html", "project/templates/assets.tpl.html", "project/templates/channels.tpl.html", "project/templates/charter.tpl.html", "project/templates/content.tpl.html", "project/templates/items.tpl.html", "project/templates/ledger.tpl.html", "project/templates/members.tpl.html", "project/templates/positions.tpl.html", "project/templates/projects.tpl.html", "project/templates/settings.tpl.html", "project/templates/tasks.tpl.html", "project/templates/time.tpl.html", "projects/index.tpl.html", "reaction/index.tpl.html", "register/index.tpl.html", "search/index.tpl.html", "task/index.tpl.html", "tasks/index.tpl.html", "time/index.tpl.html", "token/index.tpl.html", "transaction/index.tpl.html", "transparency/index.tpl.html", "tx/index.tpl.html", "validation/index.tpl.html", "view/index.tpl.html"]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<!--<div class=\"intro\" style=\"max-height:720px\">-->\n" +
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <!--HIGHER DIMENSIONAL PERSPECTIVES-->\n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">CREATING NEW VALUE\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"{{selectedVideo}}\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-sm-7\">\n" +
    "				<!--SHIFT FROM FUTURE TO NOW-->\n" +
    "				<!--<h3>THE NEXT WAVE</h3>-->\n" +
    "				<h3>DIGITAL VALUE WE CRE8</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Share with us and create value.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Creation never stops. Watch the World Create.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Explore the diversity of the network.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-5\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-7\">\n" +
    "				<h3>A SHARED WORLD</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">From sharing items to space and time, sharing networks reflect our commitment.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">CRE8 is supporative of sharing culture.</p>\n" +
    "				<p><a href=\"/marketplace\">Marketplace</a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-5\" style=\"text-align:right\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-7\">\n" +
    "				<h3>CREATING INTENTIONAL COMMUNITY</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Coordinating around all goals, together we create a shared reality. Organized though intentionality that is context specific, participants create reputation - though the interaction with token protocols. </p>\n" +
    "				<p><a href=\"/projects\">Projects</a></p>\n" +
    "				<p><a href=\"/projects\">Tasks</a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-5\" style=\"text-align:right\">\n" +
    "				<img style=\"max-height:200px\" src=\"images/space.jpg\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6 col-xs-12\">\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "					    <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "					        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "					        	<div class=\"container\">\n" +
    "					            	<h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">TRANSPARENCY MAXIMALISM</h1>\n" +
    "					            </div>\n" +
    "					        </div>\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "				    <div style=\"padding:16px;\">\n" +
    "						<!--<h3>TRANSPARENCY MAXIMALISM</h3>-->\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Live Streaming & Complete Inclusivity create more connected paradigms.</p>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Transparency through Sharing Creates Abundance.</p>\n" +
    "					</div>\n" +
    "					<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uB4rItpM6k0\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<h2>Collaborative Governance</h2>\n" +
    "				<p style=\"color:#a8a8a8;font-style:italic;margin:0px\">Context Specific Reputation Protocols give us a fair shot at accountable representation.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hyper.gif\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>We CRE8</h3>\n" +
    "				<p style=\"color:#a8a8a8;font-style:italic;\">Our mechanism of value is created from consensus upon the relation of shared value</p>\n" +
    "				<!--SELECT PROJECTS-->\n" +
    "				<!--\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"card col-sm-4\" ng-repeat=\"project in projects\">\n" +
    "						<div class=\"padding:16px\">\n" +
    "							<h5><a href=\"project/{{project.urlTitle}}\">{{project.title}}</a></h5>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				-->\n" +
    "				<!--<h5>Human Validated Proof of Work</h5>-->\n" +
    "				<h5>Interoperable Governance Mechanisms</h5>\n" +
    "				<h5>Group Coordination and the designation of interrelated token networking.</h5>\n" +
    "				<h5>Token Market Traversal</h5>\n" +
    "\n" +
    "			</div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "                <img style=\"height:200px;\" src=\"images/dna.gif\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>The Peer Network</h3>\n" +
    "				<p style=\"color:#a8a8a8;font-style:italic;\">Our Value Infrastructure</p>\n" +
    "				<p style=\"color:#a8a8a8;font-style:italic;\"><a href=\"/transarency\">Transparency in action</a></p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "				<h2>Information as Income</h2>\n" +
    "				<h5 style=\"font-style:italic;color:gray;margin:0px\">Universal Information as Universal Income</h5>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "				<h3>Complete Transparency</h3>\n" +
    "				<!--<p style=\"font-style:italic;color:gray;margin:0px\">Transparent Contributions and Equitable Representation</p>-->\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Open Financal Systems and Ledgers</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Tokenized & Market Liquid Actions</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "				<h3>Complete Tokenization</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Interoperable protocols allow <a href=\"/developers\">developer</a> creativity, the CRE8 <a href=\"/apps\">Application Ecosystem</a> facilitates progression towards complete cryptoeconomic tokenization.</p>\n" +
    "				<!--<p style=\"font-style:italic;color:gray;margin:0px\">Meta Data imbued in the tokenization layer</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Information to a Balance Mapping.</p>-->\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<h2>Information as Income</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hypercube.gif\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-5 col-sm-5\">\n" +
    "                <img src=\"images/app.gif\">\n" +
    "            </div>\n" +
    "			<div class=\"col-xs-12 col-sm-7\">\n" +
    "\n" +
    "				<h3>The Application Ecosystem</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Mapping address to data to balance. An infinite token playground.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Protocols act as plugins to the string space.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Apps are a bundle of protocols. App design is modular.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Protocol Design, <a href=\"/developers\">Developer Documentation</a></p>\n" +
    "				\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/apps\">learn more</a>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "			\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<h2><a style=\"color:white;margin:0px\" href=\"/market\">MultiDimensional Value Exchange</a></h2>\n" +
    "				<!--<h2><a style=\"color:white;margin:0px\" href=\"/market\">MultiDimensional Token Market</a></h2>-->\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">The Moment of Liquidity is Combinatorial.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hyper.gif\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<h3>Your Dimensional Vote</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create relationships in the multidimensional token market. Transparent and reputationally validated work is one application in CRE8's ecosystem.</p> \n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "			</div>\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<h3>Create Value Relationships</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value. This process creates intention in the market.</p>\n" +
    "				<h5>Create Connected Networks of Value</h5>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Through a variety of intentional techniques we can establish <i>more</i> true value intent</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Market Order types; Manifold Actions; onMint Postions; Trade Postions; Futures Postions; Derivative Positions</p>\n" +
    "			</div>\n" +
    "            <div class=\"col-md-4 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12 col-sm-9 col-md-7\">\n" +
    "				\n" +
    "				<h2>Value Mapping</h2>\n" +
    "				<h5>Your Dimensional Vote</h5>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<h4>It starts with you.</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">It is our responsibility to create an awakening of depth in collective value.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">The source of our value mechanism is intentional. It is sourced from stating what we believe is valuable.</p>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<h4>An empowering call to action.</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px;\">Create Empowerment by clearly and distinctly elucidating your value map.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Register to vote, map your value, and give rise to an emergent gestalt.</p>\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-sm-3 col-md-5\" style=\"text-align:center\">\n" +
    "				<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'register/index.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Account Settings</h1>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-4 col-xs-12\" style=\"padding-right:5px;padding-left:10px\">\n" +
    "			<div class=\"member-card\">\n" +
    "			    <div ng-click=\"editAccountToggle()\" class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "			        <a href=\"#\">\n" +
    "			        	<img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "			        </a>\n" +
    "			    </div>\n" +
    "			    <a ng-click=\"editAccountToggle()\" href=\"#\" style=\"float:right;padding-right:5px;\">\n" +
    "		        	<p><i class=\"fa fa-upload\"></i></p>\n" +
    "				</a>\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "			    <div class=\"member-card-info\" style=\"height:auto;padding-left:0%\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\"> <i style=\"color:#30b257\" class=\"fa fa-circle\"></i> {{currentUser.status}} Editing Account</p>\n" +
    "			        <p style=\"color:gray\"><b>Total Reputation</b>: {{currentUser.totalWork}}</p>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-social\">\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-8 col-xs-12\" style=\"padding-left:5px;padding-right:0px\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "					<span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">8x{{currentUser.id}}</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></a></span>\n" +
    "					<h4>{{currentUser.username}}</h4>\n" +
    "                    <p><a href=\"/member/{{currentUser.username}}/projects\">{{currentUser.projectCount || 0}} Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">{{currentUser.followerCount || 0}} Followers</a> | <a href=\"/member/{{currentUser.username}}/following\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-xs-6\">\n" +
    "							<h5>Balance Lookup <span style=\"font-size:11px;color:gray\"></span></h5>\n" +
    "				       		<form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "					        	<input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "					        	<div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "					                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "								</div>\n" +
    "					    	</form>\n" +
    "\n" +
    "					    	<div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "					    		<h5><a href=\"market/{{balanceLook}}\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "					    	</div>\n" +
    "\n" +
    "				        </div>\n" +
    "				        <div class=\"col-xs-6\">\n" +
    "							<h5>Reputation Lookup <span style=\"font-size:11px;color:gray\"></span> </h5>\n" +
    "				       		<form ng-click=\"lookupReputation()\" style=\"display:flex;flex-direction:row;\">\n" +
    "					        	<input ng-model=\"reputationLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "					        	<div ng-click=\"lookupReputation()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "					                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "								</div>\n" +
    "					    	</form>\n" +
    "\n" +
    "					    	<div ng-show=\"reputationLookupValue !== undefined\">\n" +
    "					    		<h5><a href=\"market/{{reputationLook}}\">{{reputationLook}}</a> | {{reputationLookupValue}}</h5>\n" +
    "					    	</div>\n" +
    "				        </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    " 	<div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"editAccountToggle()\">Edit Account</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"editAccountToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-12\"><h5>Avatar Url</h5><input type=\"text\" ng-model=\"newAccountInformation.avatarUrl\" placeholder=\"Avatar Url\" class=\"form-control\"></div>\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-12\"><h5>Cover Url</h5><input type=\"text\" ng-model=\"newAccountInformation.coverUrl\" placeholder=\"Cover Url\" class=\"form-control\"></div>\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-12\"><h5>Username</h5><input type=\"text\" ng-model=\"newAccountInformation.username\" placeholder=\"Username\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Email</h5><input type=\"text\" ng-model=\"newAccountInformation.email\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Phone Number</h5><input type=\"text\" ng-model=\"newAccountInformation.phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\"></div>\n" +
    "					<div style=\"padding:0px\" class=\"col-xs-4\"><h5>First Name</h5><input type=\"text\" ng-model=\"newAccountInformation.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "					<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Last Name</h5><input type=\"text\" ng-model=\"newAccountInformation.lastName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                   	<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-model=\"newAccountInformation.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Description</h5><text-angular ng-model=\"newAccountInformation.description\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular></div>\n" +
    "\n" +
    "                	<!--\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-3\"><h5>Height</h5><input type=\"text\" ng-model=\"newAccountInformation.height\" placeholder=\"Height\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-3\"><h5>Eye Color</h5><input type=\"text\" ng-model=\"newAccountInformation.eyeColor\" placeholder=\"Eye Color\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-3\"><h5>Sex</h5><input type=\"text\" ng-model=\"newAccountInformation.sex\" placeholder=\"Sex\" class=\"form-control\"></div>\n" +
    "                	\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-4\"><h5>DNA</h5><input type=\"upload\" ng-model=\"newAccountInformation.dna\" placeholder=\"DNA\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Iris</h5><input type=\"upload\" ng-model=\"newAccountInformation.iris\" placeholder=\"Iris\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Finger Print</h5><input type=\"upload\" ng-model=\"newAccountInformation.dna\" placeholder=\"Finger Print\" class=\"form-control\"></div>\n" +
    "                	-->\n" +
    "\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\">Save</button>\n" +
    "	                <div style=\"clear:both\"></div>\n" +
    "\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry,information,passport')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Information</h1>\n" +
    "				            <h5 style=\"color:white\">Authentication & Verification</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-passport\"></i></span>\n" +
    "				</div>\n" +
    "				<h4 style=\"color:gray;\">{{currentUser.firstName}} {{currentUser.lastName}}</h4>\n" +
    "				<h5 style=\"color:gray;\">{{currentUser.email}}</h4>\n" +
    "\n" +
    "				<p style=\"color:gray;font-size:12px;\">Phone Number: Two-Factor-Authentication <i style=\"color:#b23030\" class=\"fa fa-circle\"></i></p>\n" +
    "				<p style=\"color:gray;font-size:12px;\">Authenticator App: <i style=\"color:#b23030\" class=\"fa fa-circle\"></i></p>\n" +
    "				<p style=\"color:gray;font-size:12px;\">Human Proof ID: <i style=\"color:#b23030\" class=\"fa fa-circle\"></i></p>\n" +
    "				<p style=\"color:gray;font-size:12px;\">Verification: <a href=\"#\">Goverment ID</a> | <a href=\"#\">Social Accounts</a> | <a href=\"#\">BioMetric Data</a></p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<!--TODO: APPS; PASSPORTS; WALLETS; UNIFIY-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('APPS')\">Apps</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('HISTORY')\">History</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('MINING')\">Mining</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('PASSPORTS')\">Passports</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('PRIVACY')\">Privacy</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('WALLETS')\">Wallets</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: tokenized apps.. connect in..-->\n" +
    "	<div class=\"row\" ng-show=\"selectedTab=='APPS'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?applications,programming,idea')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Connected Applications</h1>\n" +
    "				            <h5 style=\"color:white\">Applications in the CRE8 ecosystem</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-universal-access\"></i></span>\n" +
    "				</div>\n" +
    "				<p>CRE8 <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\"></span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "				<p>BTC <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">340109239490g9</span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "				<p>ETH <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">24930291094951</span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"selectedTab=='HISTORY'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?history,code,logs')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Account History</h1>\n" +
    "				            <h5 style=\"color:white\">Logs of all your account's actions on the CRE8 network with detailed information.</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-history\"></i></span>\n" +
    "				</div>\n" +
    "				<p style=\"font-size:11px\">MacBook Pro OSX | 2.3 GHz Intel Core i7, 8 GB 1600 MHz DDR3, Intel HD Graphics 4000 1536 MB | 22min @ 11.36PM</p>\n" +
    "				<p style=\"font-size:11px\">iPhone 8 | A11 Bionic chip with 64-bit architecture, M11 motion coprocessor, 2 GB RAM | 17min @ 2.15PM</p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "  	<div class=\"row\" ng-show=\"selectedTab=='MINING'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry,network,data')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer Network Contribution</h1>\n" +
    "				            <h5 style=\"color:white\">Mining & Machine Attention</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-seedling\"></i></span>\n" +
    "				</div>\n" +
    "				<p>Client Mining <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Runs a CRE8 node that powers the network. Machine attention is tokenized.</span><md-switch ng-model=\"browserMining\" aria-label=\"Browser Mining\"></md-switch></p>\n" +
    "				<p style=\"font-size:11px\">MacBook Pro OSX | 2.3 GHz Intel Core i7, 8 GB 1600 MHz DDR3, Intel HD Graphics 4000 1536 MB | 22min @ 11.36PM</p>\n" +
    "				<p style=\"font-size:11px\">iPhone 8 | A11 Bionic chip with 64-bit architecture, M11 motion coprocessor, 2 GB RAM | 17min @ 2.15PM</p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"selectedTab=='PRIVACY'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?camera,privacy,watching,tracking,information')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Privacy</h1>\n" +
    "				            <h5 style=\"color:white\">Information Tracking & Notifications</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-eye\"></i></span>\n" +
    "				</div>\n" +
    "\n" +
    "				<p>Record Attention <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Attention Tokenization</span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "				<p>Location Tracking <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Location Tokenization</span><md-switch ng-model=\"gpsTracking\" aria-label=\"GPS Tracking\"></md-switch></p>\n" +
    "				<p>Notifications <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><md-switch ng-model=\"notifications\" aria-label=\"Notifications\"></md-switch></p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"selectedTab=='WALLETS' || selectedTab=='PASSPORTS'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?passport,airport,travel,account,wallet')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Connected Accounts, Passports, & Wallets</h1>\n" +
    "				            <h5 style=\"color:white\">Connections</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"float:right\">\n" +
    "					<span style=\"font-size:24px;\"><i class=\"fas fa-passport\"></i></span>\n" +
    "				</div>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/google\">Google</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/twitter\">Twitter</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/facebook\">Facebook</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">Fitbit</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/steemit\">Steemit</a></button>\n" +
    "				<br>\n" +
    "\n" +
    "				<!--AS AN APP?-->\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/btc\">BTC</a></button>\n" +
    "				<!--WALLET INPUT.. ; ADDRESS; -->\n" +
    "				<input placeholder=\"Address\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "				<input placeholder=\"Secret\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/eth\">ETH</a></button>\n" +
    "				<input placeholder=\"Address\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "				<input placeholder=\"Secret\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/ltc\">LTC</a></button>\n" +
    "				<input placeholder=\"Address\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "				<input placeholder=\"Secret\" type=\"text\"  ng-model=\"walletAddress\" class=\"form-control\">\n" +
    "\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("apps/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("apps/index.tpl.html",
    "<!--<div class=\"intro\" style=\"max-height:720px\">-->\n" +
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">APPLICATION ECOSYSTEM\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://www.bidio.co/videos/energy.mp4\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "<div id=\"about-section1\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-7\">\n" +
    "                <h3>APPS</h3>\n" +
    "                <h5>Apps and Token Protocols</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Apps are plugins to the string space and add to the domain of tokenized systems of intention; how can we create an eglatarian world through tokenization?</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">By openeing up the intention of system design, we capture a larger design space.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Apps are a bundle of protocols. App design is modular.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">See the <a href=\"/developers\">documentation</a> to learn more.</p>\n" +
    "                <!--<a class=\"btn btn-default log-btn\" href=\"/developers\">documentation</a>-->\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-5 col-sm-5\">\n" +
    "                <img src=\"images/app.gif\">\n" +
    "                <!--<img src=\"images/app2.gif\">\n" +
    "                <img src=\"images/app4.gif\">-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a  href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"projectToggle()\">+ App</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-4 col-sm-6\" ng-repeat=\"app in apps\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(app)\" style=\"height:150px\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <i ng-click=\"cardDetailToggle()\" class=\"fa fa-ellipsis-v\"></i>\n" +
    "                    </div>\n" +
    "                    <h4><a ng-click=\"$event.stopPropagation();\" href=\"https://www.github.com/troverman/conexus\">{{app.title}}</a></h4>\n" +
    "                    <p style=\"color:gray\">{{app.description}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("association/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/index.tpl.html",
    "<div class=\"intro\" style=\"max-height:720px\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">CREATING THE NEXT WAVE OF PUBLIC INCLUSIVITY\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://s3-us-west-2.amazonaws.com/voetr/washington.mp4\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-sm-6\">\n" +
    "				<h3>CREATE THE NEXT WAVE</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Share with us and Create the Future.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Our Culture Begets a 24/7 continual hackathon.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Connect with new collaborators and build together.</p>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-6\"></div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-sm-6\"></div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h3>CREATE A SHARED WORLD</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Watch the World Create.</p>\n" +
    "				<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\" style=\"width:641px\">\n" +
    "				<div class=\"card\">\n" +
    "				    <div style=\"padding:16px;\">\n" +
    "						<h3>TRANSPARENCY MAXIMALISM</h3>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Live Streaming and Complete Inclusivity create more connected paradigms.</p>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Sharing Creates Abundance.</p>\n" +
    "\n" +
    "						<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "						<h3><a href=\"https://www.youtube.com/embed/jUQ_3kCcG_U\">open eye</a></h3>\n" +
    "						<p>\n" +
    "							<a href=\"member/troverman\">\n" +
    "								<img class=\"card-avatar\" ng-src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" err-src=\"images/avatar.png\">\n" +
    "								troverman\n" +
    "							</a>\n" +
    "							<span am-time-ago=\"\" style=\"color:gray\"> • 30 Minutes Ago</span>\n" +
    "						</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<h2>Collaborative Governance</h2>\n" +
    "				<p style=\"color:#a8a8a8;font-style:italic;margin:0px\">Context Specific Reputation Protocols give us a fair shot at accountable representation.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hyper.gif\"></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<h2>MultiDimensional Tokenization</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity</p>\n" +
    "				<h5>Content Tokenization | Time Tokenization | Reaction Tokenization | Order Tokenization | Transaction Tokenization</h5>\n" +
    "				<h5>\n" +
    "					<a href=\"https://www.github.com/troverman/conexus\">Developers</a> | \n" +
    "					<a href=\"https://www.github.com/troverman/conexus\">Documentation</a> | \n" +
    "					<a href=\"https://www.github.com/troverman/conexus\">APIs</a> | \n" +
    "					<a href=\"https://www.github.com/troverman/conexus\">App Ecosystem</a> | \n" +
    "					<a href=\"https://www.github.com/troverman/conexus\"><i class=\"fa fa-github\"></i></a>\n" +
    "				</h5>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h2><a href=\"/market\">MultiDimensional Token Market</a></h2>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chartMap\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<h3>Your Dimensional Vote</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create dimensional liquidity for transparent and reputationally validated work.</p> \n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "				<h3>Create Value Relationships</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value; create depth in the market</h4>\n" +
    "				<!--<p style=\"font-style:italic;color:gray;margin:0px\">Market Order types; onMint Postions; Trade Postions; Futures Postions; Derivative Positions</p> -->\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<h3>What We're Building</h3>\n" +
    "\n" +
    "				<!--SELECT PROJECTS-->\n" +
    "				<!--\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"card col-sm-4\" ng-repeat=\"project in projects\">\n" +
    "						<div class=\"padding:16px\">\n" +
    "							<h3><a href=\"project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				-->\n" +
    "\n" +
    "				<h5>Human Validated Proof of Work</h5>\n" +
    "				<!--VALIDATION MECHANISM-->\n" +
    "\n" +
    "				<p>Our Value Infrastructure</p>\n" +
    "				<h5><a href=\"/transparency\">The Peer Network</a></h5>\n" +
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
    "				<highchart config=\"create\"></highchart>\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "				<h2>Information as Income</h2>\n" +
    "				<h5 style=\"font-style:italic;color:gray;margin:0px\">Universal Information as Universal Income</h5>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "				<h3>Complete Transparency</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Transparent Contributions and Equitable Representation</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Reputation Systems and Task Verification</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Open Finance and Contribution</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Tokenized & Market Liquid Actions</p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "				<h3>Complete Tokenization</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Meta Data imbued in the tokenization layer</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A crypto-economic data structre and means of account.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Information to a Balance Mapping.</p>\n" +
    "\n" +
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
    "			<div class=\"col-xs-12\">\n" +
    "\n" +
    "				<h2>Value Mapping and Dimensional Voting</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">It is our responsibility to create an awakening of depth in collective value. It starts with you.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">The source of our intentional value mechanism comes from stating what we believe is valuable. An empowering call to action.</p>\n" +
    "				<br>\n" +
    "\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create Empowerment by clearly and distinctly elucidating your value map.</p>\n" +
    "				<br>\n" +
    "\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Everything has Value. Let's come to consensus and create an emergent gestalt.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Register to vote, map your value, and give dimensional value to sets of actions.</p>\n" +
    "				<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'register/index.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("block/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Block</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "				        	<div class=\"container\">\n" +
    "				            	<h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Summary</h1>\n" +
    "				            </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Number Of Transactions 2930</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Height 564366 (Mainchain)</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Block Reward	12.5 BTC</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Timestamp Feb 23, 2019 4:38:23 PM</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Mined by	</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Merkle Root b2b5ba7db4ecbec6c69df58982bc76f8b0bb745a838ddcc3dfec67022b83519c</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Previous Block <a href=\"block/564365\">564365</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Bits	172e6f88</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Size (bytes)	904469</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Version 536870912</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Nonce 1221514036</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Next Block <a href=\"block/564367\">564367</a></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,explore,code,chain,nature,blockchian,programming,finance')\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "				        	<div class=\"container\">\n" +
    "				            	<h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Transactions</h1>\n" +
    "				            </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<table class=\"table table-striped table-hover\">\n" +
    "		                <thead>\n" +
    "		                    <tr>\n" +
    "		                    	<th>ID</th>\n" +
    "								<th>Data</th>\n" +
    "		                    	<th>Address</th>\n" +
    "		                    	<th>Address</th>\n" +
    "							</tr>\n" +
    "		                </thead>\n" +
    "		                <tbody>\n" +
    "		                    <tr ng-repeat=\"tx in transactions\">\n" +
    "		                        <td><a href=\"tx/{{tx.id}}\">{{tx.id}}</a></td>\n" +
    "								<td>{{tx.data}}</td>\n" +
    "		                        <td><a href=\"tx/{{tx.id}}\">{{tx.id}}</a></td>\n" +
    "		                        <td><a href=\"tx/{{tx.id}}\">{{tx.id}}</a></td>\n" +
    "		                    </tr>\n" +
    "		                </tbody>\n" +
    "		            </table>\n" +
    "		        </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("content/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/content.tpl.html",
    "<style>\n" +
    ".threadline{\n" +
    "    height:100%;\n" +
    "    border-left:solid #002c54 3px;\n" +
    "    margin-bottom: -100000px;\n" +
    "    padding-bottom: 100000px;\n" +
    "    float: left;\n" +
    "}\n" +
    ".threadline:hover{border-left:solid #000 4px;}\n" +
    "\n" +
    "</style>\n" +
    "<!--<div style=\"height:100%;border-left:solid #002c54 4px;\"></div>-->\n" +
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9\" ng-show=\"!content.showThread\" ng-click=\"\">\n" +
    "\n" +
    "    <div ng-click=\"toggleThread(content)\" class=\"threadline\"></div>\n" +
    "\n" +
    "    <div style=\"padding:16px;background-color:white\">\n" +
    "\n" +
    "        <div style=\"float:right;text-align:right\">\n" +
    "            <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(content);\" class=\"fa fa-ellipsis-v\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline\" href=\"/member/{{content.user.username}}\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "        </div>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "            <span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{content.reactions.plus}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{content.reactions.minus}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"reply(content)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey;\" class=\"pull-right\" href=\"content/{{content.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"content.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createContent(content)\">\n" +
    "            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "    <!--<button ng-click=\"loadMore(content)\" class=\"btn btn-primary\">LOAD MORE</button>-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9;\" ng-show=\"content.showThread\">\n" +
    "    <div style=\"padding:16px;background-color:white;\">\n" +
    "        <i ng-click=\"toggleThread(content)\" class=\"fa fa-plus\"></i>\n" +
    "        <a style=\"display:inline;padding-left:5px\" href=\"/member/{{content.user.username}}\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\">{{content.reactions.plus-content.reactions.minus}}</p>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("content/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/index.tpl.html",
    "<!--CONTENT TYPE-->\n" +
    "<!--FACTOR-->\n" +
    "<div style=\"background:black\" ng-show=\"content.type=='video'\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "    <div style=\"text-align:center\">\n" +
    "		<span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"content.title && content.type!='video'\" style=\"background:url('https://source.unsplash.com/1600x900/?{{content.tags}}')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{content.title}}</h1>\n" +
    "	            <h5 style=\"color:white\" ng-if=\"selectedTag!=''\">{{selectedTag}}</h5>\n" +
    "	            <!--<h5>viewTime: {{tokenFilter}}</h4>-->\n" +
    "				<!--<p>{{viewTime}} View+{{currentUser.id}}, {{viewTime}} View+[Tags]</p>-->\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "		    <div style=\"padding:16px;background-color:white\">\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(content);\" class=\"fa fa-ellipsis-v\"></i>\n" +
    "				</div>\n" +
    "				<p ng-show=\"content.tags\"><a style=\"color:gray;\" ng-repeat=\"tag in content.tags.split(',')\" href=\"content\">{{tag}} </a></p>\n" +
    "				<div>\n" +
    "					<a style=\"display:inline\" href=\"member/{{content.user.username}}\">\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<span style=\"font-weight:800\">{{content.user.username}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "				<!--\n" +
    "				<span ng-repeat=\"association in content.associatedModels\">\n" +
    "					<a href=\"{{association.address}}\">{{association.address}}</a>\n" +
    "				</span>\n" +
    "				-->\n" +
    "				<!--\n" +
    "				<span ng-repeat=\"reaction in reactions\"><br><a href=\"reaction/{{reaction.id}}\">{{reaction.user.username}}, {{reaction.type}},{{reaction.amount}} </a>, </span>\n" +
    "				-->\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<div style=\"max-height:5000px;overflow:scroll\" ng-show=\"content.type!='video'\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{content.reactions.plus}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{content.reactions.minus}} dislike </a>\n" +
    "		       	<a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(content)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"color:grey\" class=\"pull-right\" href=\"content/{{content.id}}\">Tokens: {{tokenFilter}}CRE8 | watchTime: {{viewTime*content.reactions.plus+1+33121}} | viewTime: {{viewTime}} | Live: {{content.reactions.plus+1}}</a>\n" +
    "		    </div>\n" +
    "		    <div ng-show=\"content.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createContent(content)\">\n" +
    "					<!--TODO: TAGS-->\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<!--<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>-->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: MOTION VALIDATION-->\n" +
    "	<div class=\"row\" ng-show=\"content.type == 'MOTION'\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		    	MOTION VALIDATION\n" +
    "		    	<div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                   	<div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{member.totalWork || 0}}</span></div>\n" +
    "                </div>\n" +
    "                <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "				<button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TRAVERSAL PARAMETERS-->\n" +
    "	<!--COMBINITRONICS-->\n" +
    "	<!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "	<div class=\"row\">\n" +
    "		<ul ng-show=\"content.children.length > 0\" style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li style=\"float:right;font-size:14px\"><a>Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "		<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("contentList/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contentList/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <h1>Content</h1>\n" +
    "                        <h5 style=\"color:white\" ng-if=\"selectedTag!=''\">{{selectedTag}}</h5>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                            <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                                <h4 style=\"text-align:right;margin-top:20px;\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "                            </a>\n" +
    "                            <ul class=\"dropdown-menu\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "                                <hr class=\"sort-hr\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <!--TODO FILTER BUTTON-->\n" +
    "        <div ng-show=\"sortedTagArray.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Tags</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Associations</b></span>\n" +
    "                    <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Locations</b></span>\n" +
    "                    <div ng-repeat=\"location in sortedLocationArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>   \n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "                <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                    <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\">\n" +
    "                    <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                        <a  href=\"#\" role=\"button\">\n" +
    "                            <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "            </div>\n" +
    "            <div ng-repeat=\"item in contentList\">\n" +
    "                <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div> \n" +
    "                        <p style=\"margin-top:0px;margin-bottom:0px;\"><a style=\"color:gray;\" ng-repeat=\"tag in item.tags\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag}} </a></p>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div>\n" +
    "                            <a ng-click=\"$event.stopPropagation();renderReputationToggle(item)\" style=\"display:inline\"><!-- href=\"member/{{item.user.username}}\">-->\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                <span style=\"font-weight:800\">{{item.user.username}}</span>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                            <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                        </div>\n" +
    "                        <div style=\"clear:both\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a><p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p></a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("developers/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("developers/index.tpl.html",
    "<style>\n" +
    "    body {overflow-x:hidden}\n" +
    "    pre{padding:0px;background-color:#282c34;border:0px;padding-bottom:15px;margin:0px;border-radius:0px;}\n" +
    "    .bootstrapHack {\n" +
    "        z-index: 3;\n" +
    "        border: 0px;\n" +
    "        background: #282c34;\n" +
    "        position: relative;\n" +
    "        ..min-height:100vh;\n" +
    "    }\n" +
    "    .bootstrapHack:after {\n" +
    "        content: '';\n" +
    "        position: absolute;\n" +
    "        top: 0;\n" +
    "        bottom: 0;\n" +
    "        left:80%;\n" +
    "        right:-3000px;\n" +
    "        background: #282c34;\n" +
    "        z-index: -1;\n" +
    "    }\n" +
    "    .modelList p {margin:0px;font-weight:700;}\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"intro\" style=\"\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">DEVELOPERS\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://www.bidio.co/videos/cube.mp4\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"DEVELOPERS\" style=\"background-color:white;min-height:70vh\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <h2>Developers</h2>\n" +
    "                <p style=\"color:gray;font-style:italic\">Building Applications that further the promise of shared prosperity is a great public service.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Create the universe of tokenization. Build New Value & Change the world. Participate in the development of tokenization protocols & applications.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-5\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"DOCUMENTATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Documentation</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Information about CRE8, decentralized computation, multidimensionality and pluralism, governance and coordination, and interoperable modular protocols. Token string language is explored.</p>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <p><b><a href=\"#CRE8VM\" du-smooth-scroll>The CRE8 Decentralized Peer Network & Virtual Machine</a></b></p>\n" +
    "                <p><b><a href=\"#APPDESIGN\" du-smooth-scroll>Interoperable Protocol & Application Design Architecture</a></b></p>\n" +
    "                <p><b><a href=\"#CRE8\" du-smooth-scroll>CRE8 CORE Protocols</a></b></p>\n" +
    "                <p><b><a href=\"#CONEXAPI\" du-smooth-scroll>Conex API: Models & Endpoints</a></b></p>\n" +
    "                <p><b><a href=\"#TOKENIZATION\" du-smooth-scroll>Tokenization Principles & String Interpolation</a></b></p>\n" +
    "                <p><b><a href=\"#MULTIMARKET\" du-smooth-scroll>MultiMarket Exploration & Traversal</a></b></p>\n" +
    "                <p><b><a href=\"#VALIDATIONTRAVERSAL\" du-smooth-scroll>Validation & Association Traversals</a></b></p>\n" +
    "                <p><b><a href=\"#GROUPINTENTION\" du-smooth-scroll>Project Charters and Group Coordination</a></b></p>\n" +
    "                <p><b><a href=\"#SYNTHETICTOKENIZATION\" du-smooth-scroll>Tokenization & Pattern Recognition</a></b></p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"CRE8VM\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?virtual,network')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">The Decentralized CRE8 Virtual Machine</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">The CRE8 VM is the decenetralized state machiene and peer network</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Peer code compiles to WebAssembly to run inbrowser natively</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Virtual Machiene vs Assembly</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>The State Machine</h5>\n" +
    "                <p><a href=\"#PEERMODEL\" du-smooth-scroll>Peers</a>, <a href=\"#TX\" du-smooth-scroll>Txs</a>, and <a href=\"#BLOCK\" du-smooth-scroll>Blocks</a></p>\n" +
    "\n" +
    "                <!--WEBASM -> BYTECODE (OF COMP)-->\n" +
    "                <!--MECHIENE HAS OP CODES.. DECENTRALIZED MACHINE CAN ONLY RUN OPCODES: MORE OPINIATED-->\n" +
    "                <!--ASSEMBLY CONVERTS TO BYTECODE-->\n" +
    "                <!--VM IS VERY SPECIFIC -> CONTRACT COMPILES TO BYTECODE (OF VM) -->\n" +
    "                <!--VM TRANSLATES BYTE CODE (RUN ON A DECENTRALIZED MACHINE)-->\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Data Storage & High-bandwith delivery</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">InterPlanetary File System Protocol</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Live Peer Based Transcoding Services</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--FRONT END CLIENTS... ANGULAR 1.5, VUE, REACT -->\n" +
    "                <!--PEER CLIENTS.. WEBASSEMBLY (RUST), SWIFT, JAVA, PYTHON, GO .. -->\n" +
    "                <div>\n" +
    "                    <p><b>Front End Clients</b></p>\n" +
    "                    <p><a href=\"https://www.github.com/troverman/conexus\">Angular 1.X (1.7.8), <a href=\"#\">Vue (v2.6.1), <a href=\"#\">React (16.8)</a></p>\n" +
    "                    <p><b>Peer Clients</b></p>\n" +
    "                    <p><a href=\"#\">In-Browser WebAssembly (RUST)</a>, <a href=\"#\">Python</a>, <a href=\"#\">Go</a></p>\n" +
    "                    <!--<p>Native Applications</p>\n" +
    "                    <p><a href=\"#\">Android</a>, <a href=\"#\">iOS</a>, <a href=\"#\">In-Browser</a></p>-->\n" +
    "                    <a class=\"btn btn-default log-btn\" href=\"https://www.github.com/troverman/conexus\">Github Peer Client</a>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <img src=\"images/ifps.svg\">\n" +
    "                <img style=\"width:49%\"  src=\"images/hashtree.png\">\n" +
    "                <img style=\"width:49%\"  src=\"images/mining.jpg\">\n" +
    "                <p><b>Information in a Patricia Tree</b></p>\n" +
    "                <img style=\"width:49%\" src=\"images/patricia-trie.png\">\n" +
    "                <img style=\"width:49%\" src=\"images/patricia-trie-insert.png\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"PEER\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?nodes,peer,analysis,code')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">The Peer Network & Transparency</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">  \n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">The CRE8 Peer Network creates a decenetralized state machiene, and coordinates though peer connection.</p>\n" +
    "                \n" +
    "                <p><b>Networking Protocols</b></p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Block Chain Principles</p>\n" +
    "                <p><a href=\"#PEERMODEL\" du-smooth-scroll>Peers</a>, <a href=\"#TX\" du-smooth-scroll>Txs</a>, and <a href=\"#BLOCK\" du-smooth-scroll>Blocks</a></p>\n" +
    "\n" +
    "                <p>Running a Peer</p>\n" +
    "                <p>What is WebAssembly?</p>\n" +
    "\n" +
    "                <a class=\"btn btn-default log-btn\" href=\"/transparency\">Peers</a>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"APPDESIGN\" style=\"background-color:white\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <!--Interoperable Protocols-->\n" +
    "                    <!--Application Design Architecture-->\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Application Design</h1>\n" +
    "                    <h5 style=\"color:white\">Interoperable Protocol Architecture</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\" style=\"padding-left:0px;max-width: none;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6 col-xs-12\">  \n" +
    "                \n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">Information mapping to a balance; Tokens are data ‘imbued’ as tradable assets</p>\n" +
    "\n" +
    "                <!--<div hljs hljs-language=\"php\">mapping (address = mapping (string = uint)) balances;</div>\n" +
    "                <div hljs hljs-language=\"javascript\">contract Protocol {}</div>-->\n" +
    "                <!--DEFINE & REFINE MORE & MORE; DEFINE FUNCTIONSAL INPUT-->\n" +
    "                <!--<div hljs hljs-language=\"javascript\"  hljs-source=\"humanReadableValidationNFTModel\"></div>-->\n" +
    "                <!--<p>Mapping <b>balanceOf</b>:</p>-->\n" +
    "                \n" +
    "                <a class=\"btn btn-default log-btn\" href=\"/apps\">Application Ecosystem</a>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6 col-xs-12\">\n" +
    "                <div class=\"bootstrapHack\">\n" +
    "                    <div style=\"margin-left:15px;\">\n" +
    "                        <div class=\"spacing-15\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\">mapping (address = mapping (string = uint)) balances;</div>\n" +
    "                        <div hljs hljs-language=\"javascript\">contract Protocol {}</div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"humanReadableValidationNFTModel\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"CRE8\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?creative,protocol,code,programming')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">CRE8 Core Protocols</h1>\n" +
    "                    <h5 style=\"color:white\">Layered Adaptability</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Protocols define logic and create 'logic manifolds' nested within a token strucutre.</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `TOKEN_alpha+TOKEN_beta+TOKEN_gamma+cdots`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--TOKENS-->\n" +
    "                <div id=\"STRUCTURE\">\n" +
    "                    <h4><b>STRUCTURE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Defining operations such as transferrable, the ability to create: meta defination. Effecient and congruent mappings for core data organization.</p>\n" +
    "\n" +
    "                    `oplus, otimes, odot, triangle, RR`\n" +
    "\n" +
    "                    <!--<p>transfer:</p>-->\n" +
    "                    <!--CRE8; RECIEVE; PROJECT.. USER--> \n" +
    "\n" +
    "                    <!--VERB+MODEL+..+-->\n" +
    "                    <!--CRE8+CONTENT+VIDEO-->\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"LANUGAGE\">\n" +
    "                    <h4><b>LANUGAGE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Vital to navigation of the token domain are language protocols and operators that define logic and interpretation</p>\n" +
    "\n" +
    "                    `oplus, otimes, odot, triangle, RR`\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"CONGRUENCE\">\n" +
    "                    <h4><b>CONGRUENCE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Rotational Equalities via language interperlation & algebra(s) | a+b+c is congruent `cong` to c+b+a is congruent `cong` to b+c+a)</p>\n" +
    "                    `delta, nabla`\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"MANIFOLD\">\n" +
    "                    <h4><b>MANIFOLD</b></h4>\n" +
    "                    `B^n = {(x_1,x_2,cdots,x_n) in RR^n | x_1^2+x_2^2+cdots+x_n^2 lt 1}`\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">The manifold property, combined with LANGUAGE string interpolation, defines compound token-strings. Recursive in nature, manifolds provide deep intentionality.</p>\n" +
    "                    `nabla,partial,therefore,because,infty,emptyset`\n" +
    "                    `{emptyset,infty}`\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Core CRE8 Manifolds</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Defining Verbs in a string space; application(s)</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"#\">MEMBER</a>, <a href=\"#\">PROJECT</a>, <a href=\"#\">TASK</a>, <a href=\"#\">TIME</a>, <a href=\"#\">VALIDATION</a>, <a href=\"#\">ORDER</a></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Order Book String Mapping; Mapping of all positions</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">BALANCE AND REPUTATION</p>\n" +
    "                    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>+CREDIT</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+CREDIT+[INTEREST] SPACE</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+CREDIT+[ISSUE]+[TIMEDOMAIN]+[INTERESTASSETSET]+[INTERESTSET] SPACE</p>\n" +
    "                    <p><b>+FUTURE</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+FUTURE+[DATE] SPACE</p>\n" +
    "                    <p><b>+OPTION</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+OPTION+[ASSETSET]+[PRICESET]+[TIMEALPHA]+[TIMEBETA] SPACE</p>\n" +
    "                    <p><b>+SPONSOR</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+SPONSOR+[ADDRESS] SPACE</p>\n" +
    "                    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Application Specific Manifolds</b></p>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    \n" +
    "                    <p><b>+APP.. +DATA..</b></p>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"CONNECTION\">\n" +
    "                    <h4><b>CONNECTION</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Traversals and Token Action Potientals; long form token string</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">a+b+c+d+.....+n+i+....</p>\n" +
    "                    `TOKEN_alpha+TOKEN_beta+TOKEN_gamma+cdots+TOKEN_omega+cdots`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"protocolStructureModel\"></div>\n" +
    "         \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Action Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"actionTokenization\"></div>\n" +
    "\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of an <a href=\"#ACTION\" du-smooth-scroll>action</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Manifold Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newToken){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Association Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Content Tokenization Protocol</h4>\n" +
    "               <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newContent){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> \n" +
    "                <span style=\"color:gray;font-style:italic\">The operations and permission structure around the creation on <a href=\"#CONTENT\" du-smooth-scroll>content</a> (and its applications on cre8's api) (edit rep and balance manifolds etc)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Follow Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newFollow){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of <a href=\"#FOLLOWER\" du-smooth-scroll>followers</a> (and its applications on cre8's api)</p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Item Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newItem){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of an <a href=\"#ITEM\" du-smooth-scroll>Item</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Location Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newLocation){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Member Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newMember){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#MEMBER\" du-smooth-scroll>Member</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Order Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newOrder){\n" +
    "    //BUILD ORDER BOOK\n" +
    "},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of an <a href=\"#ORDER\" du-smooth-scroll>Order</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Project Tokenization Protocol</h4>\n" +
    "                <!--<p>Perform Association walk</p>-->\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newProject){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#PROJECT\" du-smooth-scroll>Project</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Project Charter Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newProjectCharter){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#PROJECTCHARTER\" du-smooth-scroll>Project Charter</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Reaction Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newReaction){\n" +
    "    \n" +
    "    //GENERALIZE ... REPUTATION AS IMMUTATBLE MAPPING IN GREATER MAPPING \n" +
    "    wallet[newReaction.creator]['CRE8+REACTION']++\n" +
    "    wallet[newReaction.creator]['CRE8+REACTION'+newReaction.id]++\n" +
    "    wallet[newReaction.creator]['CRE8+REACTION'+newReaction.type]++\n" +
    "\n" +
    "    wallet[newReaction.associatedModels[0].creator]['RECIEVE+REACTION']++\n" +
    "    wallet[newReaction.associatedModels[0].creator]['RECIEVE+REACTION'+newReaction.id]]++\n" +
    "    wallet[newReaction.associatedModels[0].creator]['RECIEVE+REACTION'+newReaction.type]]++\n" +
    "\n" +
    "},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#REACTION\" du-smooth-scroll>Reaction</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Task Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newTask){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#TASK\" du-smooth-scroll>Task</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Time Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newTime){\n" +
    "    wallet[newReaction.creator]['CRE8+TIME'] += newTime.amount\n" +
    "    wallet[newReaction.creator]['CRE8+TIME'+newTime.id] += newTime.amount\n" +
    "    for (x in newTime.tags){\n" +
    "        wallet[newReaction.creator][newTime.tags[x]] += newTime.amount\n" +
    "    }\n" +
    "},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of <a href=\"#TIME\" du-smooth-scroll>Time</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Transaction Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newTransaction){\n" +
    "    \n" +
    "    //CREATE PROTOCOL ... WIKI\n" +
    "    wallet[newTransaction.from]['CRE8+TRANSACTION']++\n" +
    "    wallet[newTransaction.from]['CRE8+TRANSACTION'+newTransaction.id]++\n" +
    "\n" +
    "    wallet[newTransaction.to]['RECIEVE+TRANSACTION']++\n" +
    "    wallet[newTransaction.to]['RECIEVE+TRANSACTION'+newTransaction.id]++\n" +
    "\n" +
    "    //TRANSFER THE TOKENS\n" +
    "    for (x in newTransaction.assetSet){\n" +
    "        wallet[newTransaction.from][newTransaction.assetSet[x].name]-=newTransaction.assetSet[x].amount\n" +
    "        wallet[newTransaction.to][newTransaction.assetSet[x].name]+=newTransaction.assetSet[x].amount\n" +
    "    }\n" +
    "\n" +
    "    //Create Data \n" +
    "    Data.create(newTransaction)\n" +
    "\n" +
    "},\n" +
    "\n" +
    "getSome:function(newQuery){\n" +
    "\n" +
    "    //DATA AS TOKENS? .. LOOK VIA MANIFOLDS .. DATA+FILTER+.. (INFO MAPPING TO INFO) \n" +
    "    return Data.find(newQuery)\n" +
    "\n" +
    "}</div>\n" +
    "                <p><b>create:function()</b> \n" +
    "                <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#TRANSACTION\" du-smooth-scroll>Transaction</a> (and its applications on cre8's api)</span>\n" +
    "                </p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>View Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newView){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#VIEW\" du-smooth-scroll>View</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Validation Tokenization Protocol</h4>\n" +
    "                <div hljs hljs-language=\"javascript\">\n" +
    "create:function(newValidation){},\n" +
    "getSome:function(newQuery){}</div>\n" +
    "                <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#VALIDATION\" du-smooth-scroll>Validation</a> (and its applications on cre8's api)</span></p>\n" +
    "                <p><b>getSome:function()</b></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <!--<div class=\"bootstrapHack\">\n" +
    "                </div>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"CONEXAPI\" style=\"background-color:white;\">\n" +
    "\n" +
    "    <div id=\"CONEXAPIHEADER\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div class=\"container\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Conex API</h1>\n" +
    "                        <h5 style=\"color:white\">CRE8 CORE Peer Models</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-1\">\n" +
    "                    <div class=\"modelList\">\n" +
    "                        <p><a href=\"#ACTION\" du-smooth-scroll>Action</a></p>\n" +
    "                        <!--<p><a href=\"#ATTENTION\" du-smooth-scroll>Attention</a></p>-->\n" +
    "                        <p><a href=\"#APP\" du-smooth-scroll>App</a></p>\n" +
    "                        <p><a href=\"#ASSOCIATION\" du-smooth-scroll>Assoication</a></p>\n" +
    "                        <p><a href=\"#BLOCK\" du-smooth-scroll>Block</a></p>\n" +
    "                        <p><a href=\"#CONTENT\" du-smooth-scroll>Content</a></p>\n" +
    "                        <p><a href=\"#DATA\" du-smooth-scroll>Data</a></p>\n" +
    "                        <p><a href=\"#EVENT\" du-smooth-scroll>Event</a></p>\n" +
    "                        <p><a href=\"#FOLLOWER\" du-smooth-scroll>Follower</a></p>\n" +
    "                        <p><a href=\"#ITEM\" du-smooth-scroll>Item</a></p>\n" +
    "                        <p><a href=\"#LOCATION\" du-smooth-scroll>Location</a></p>\n" +
    "                        <p><a href=\"#MEMBER\" du-smooth-scroll>Member</a></p>\n" +
    "                        <p><a href=\"#MOTION\" du-smooth-scroll>Motion</a></p>\n" +
    "                        <p><a href=\"#NOTIFICATION\" du-smooth-scroll>Notification</a></p>\n" +
    "                        <p><a href=\"#ORDER\" du-smooth-scroll>Order</a></p>\n" +
    "                        <p><a href=\"#PASSPORT\" du-smooth-scroll>Passport</a></p>\n" +
    "                        <p><a href=\"#PROJECT\" du-smooth-scroll>Project</a></p>\n" +
    "                        <p><a href=\"#PROJECTCHARTER\" du-smooth-scroll>ProjectCharter</a></p>\n" +
    "                        <p><a href=\"#PROJECTMEMBER\" du-smooth-scroll>ProjectMember</a></p>\n" +
    "                        <p><a href=\"#PROTOCOL\" du-smooth-scroll>Protocol</a></p>\n" +
    "                        <p><a href=\"#REACTION\" du-smooth-scroll>Reaction</a></p>\n" +
    "                        <p><a href=\"#SEARCH\" du-smooth-scroll>Search</a></p>\n" +
    "                        <p><a href=\"#TASK\" du-smooth-scroll>Task</a></p>\n" +
    "                        <p><a href=\"#TIME\" du-smooth-scroll>Time</a></p>\n" +
    "                        <p><a href=\"#TRANSACTION\" du-smooth-scroll>Transaction</a></p>\n" +
    "                        <p><a href=\"#TX\" du-smooth-scroll>Tx</a></p>\n" +
    "                        <p><a href=\"#VALIDATION\" du-smooth-scroll>Validation</a></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-5\">\n" +
    "                    <div>\n" +
    "                        <h5>Filter & Search Parameters</h5>\n" +
    "                        <p style=\"color:gray;font-style:italic\">Every model can be filtered & sorted by each model param: {DESC, ASC}</p>\n" +
    "                        <!--META MODEL.. ID, AssociatedModels, ([Content], Location, Tags), Creator .. etc -->\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-50\"></div>\n" +
    "                    <!--\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Models & Endpoints</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-50\"></div>\n" +
    "                    -->\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"metaModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"ACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <!--\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Action</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                -->\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Action</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>             \n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <h4><b>Action</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Action Model. Similar to an Event, similar to a Tx. Agnositic Data Model. Supplies Model Inheritance.</p>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">Permissions.. Authentatication.. etc</p>\n" +
    "                    <div class=\"spacing-50\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"actionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/action</b></p>\n" +
    "                    <p><b>getSome</b></p>\n" +
    "                    <p><b>post /api/action</b></p>\n" +
    "                    <p><b>create</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"APP\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                 <!--<div class=\"col-sm-12\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,application,grow,nature,technology')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">App</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>-->\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,application,grow,nature,technology')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">App</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Apps are bundles of protocols that follow modular design patterns. Apps work within an APP+ Token Manifold.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"associationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/app</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"ASSOCIATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?connection,code,association,symbiotic')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Association</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Associations map the relationships between model types in the CRE8 ecosystem. Associations are of particular value in governance relating the model relationships of Projects, Tasks, & Time</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Project`hArr`Task`hArr`Time\n" +
    "                    <p style=\"color:gray;font-style:italic\">Associations are computed though <a href=\"#VALIDATION\" du-smooth-scroll>validation traversal</a> and provide a dimensional context of connection.</p>\n" +
    "\n" +
    "                    <p>\n" +
    "                        <span style=\"color:gray;font-style:italic\">Associations are functions of peer validation & Assocation Governace Rules.</span> \n" +
    "                        `f(V_D, CC_C)` \n" +
    "                    </p>\n" +
    "\n" +
    "                    <p>`f(V_D, CC_C, RR_D)`</p>\n" +
    "                    <p>`CC_c=f(V_D,RR_D)`</p>\n" +
    "\n" +
    "                    <!--\n" +
    "                    Undirected multigraph (edges with own identity)\n" +
    "                    A multigraph G is an ordered triple G:=(V, E, r) with\n" +
    "\n" +
    "                    V a set of vertices or nodes,\n" +
    "                    E a set of edges or lines,\n" +
    "                    r : E → {{x,y} : x, y ∈ V}, assigning to each edge an unordered pair of endpoint nodes.\n" +
    "                    -->\n" +
    "                    \n" +
    "\n" +
    "                    <!--Degree\n" +
    "                    In a non-interconnected multidimensional network, where interlayer links are absent, the degree of a node is represented by a vector of length {\\displaystyle |D|:\\mathbf {k} =(k_{i}^{1},\\dots k_{i}^{|D|})} {\\displaystyle |D|:\\mathbf {k} =(k_{i}^{1},\\dots k_{i}^{|D|})}. Here {\\displaystyle |D|} |D| is an alternative way to denote the number of layers {\\displaystyle L} L in multilayer networks. However, for some computations it may be more useful to simply sum the number of links adjacent to a node across all dimensions.[2][38] This is the overlapping degree:[3] {\\displaystyle \\sum _{\\alpha =1}^{|D|}k_{i}^{\\alpha }} \\sum _{\\alpha =1}^{|D|}k_{i}^{\\alpha }. As with unidimensional networks, distinction may similarly be drawn between incoming links and outgoing links. If interlayer links are present, the above definition must be adapted to account for them, and the multilayer degree is given by\n" +
    "\n" +
    "                    {\\displaystyle k^{i}=M_{j\\beta }^{i\\alpha }U_{\\alpha }^{\\beta }u^{j}=\\sum _{\\alpha ,\\beta =1}^{L}\\sum _{j=1}^{N}M_{j\\beta }^{i\\alpha }} {\\displaystyle k^{i}=M_{j\\beta }^{i\\alpha }U_{\\alpha }^{\\beta }u^{j}=\\sum _{\\alpha ,\\beta =1}^{L}\\sum _{j=1}^{N}M_{j\\beta }^{i\\alpha }}\n" +
    "\n" +
    "                    where the tensors {\\displaystyle U_{\\alpha }^{\\beta }} {\\displaystyle U_{\\alpha }^{\\beta }} and {\\displaystyle u^{j}} {\\displaystyle u^{j}} have all components equal to 1. The heterogeneity in the number of connections of a node across the different layers can be taken into account through the participation coefficient.\n" +
    "                    -->\n" +
    "\n" +
    "                    <!--VALIDATION WITH RESPECT TO TAGS & THE IDEA OF CONTEXT--> \n" +
    "                    <!--<p style=\"color:gray;font-style:italic\">A = V1[a1-aN]~SumV(V*[a1-aN], ..-V**n,..), V2[a1-aN]~..., V3[a1-aN], V4[a1-aN], V5[a1-aN], ...</p>-->\n" +
    "                    <p>`A = sum_(i=0)^n sum_(i=0)^n V_{i_{a-z}`</p>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"associationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/assoication</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"BLOCK\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?blockchain,technology,network,code,information,data')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Block</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Blocks are machine verified bundles of <a href=\"#TX\" du-smooth-scroll>txs</a>. All data for the decentralized <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 VM</a> is stored as sequential validated blocks of information. Consensus on block information is obtained through <a href=\"#\">Peer Coordination</a>.</p>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>BLOCK HEADERS</b></p>\n" +
    "                    \n" +
    "                    <img style=\"\" src=\"images/block-header-temp.jpg\">\n" +
    "                    <img style=\"height:200px;\" style=\"\" src=\"images/blockheader.png\">\n" +
    "                    <img style=\"height:200px;\" src=\"images/blockchain.png\">\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <div class=\"\">\n" +
    "\n" +
    "                        <p><b>parentHash</b></p>\n" +
    "                        <p><b>ommersHash</b></p>\n" +
    "                        <p><b>beneficiary</b></p>\n" +
    "                        <p><b>stateRoot</b></p>\n" +
    "                        <p><b>transactionsRoot</b></p>\n" +
    "                        <p>Hash of the root node of the transactions trie. This trie contains all transactions in the block body.</p>\n" +
    "                        <p><b>receiptsRoot</b></p>\n" +
    "                        <p>A transaction receipt contains information about transaction execution. This field is the hash of the root node of the transactions receipt trie.</p>\n" +
    "                        <p><b>logsBloom</b></p>\n" +
    "                        <p><b>difficulty</b></p>\n" +
    "                        <p><b>number</b></p>\n" +
    "                        <p><b>peerAttention</b></p>\n" +
    "                        <p><b>timestamp</b></p>\n" +
    "                        <p><b>extraData</b></p>\n" +
    "                        <p><b>mixHash</b></p>\n" +
    "                        <p><b>nonce</b></p>\n" +
    "\n" +
    "                        <!--\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <p><b>txCount:</b> 'integer' the number of transactions in the block</p> \n" +
    "                        <p><b>height:</b> 'integer' </p> \n" +
    "                        <p><b>minedBy:</b> 'address' the address of the peers who contributed in consensus in a block || TBD</p> \n" +
    "                        <p><b>timeStamp:</b> 'integer' datetime when a block is created</p> \n" +
    "                        <p><b>merkleRoot:</b> 'integer' TBD</p> \n" +
    "                        <p><b>previousBlock:</b> 'integer' the number of the next previous in the chain</p> \n" +
    "                        <p><b>nextBlock:</b> 'integer' the number of the next block in the chain</p> \n" +
    "                        <p><b>size:</b> 'integer' the data size of the block</p>\n" +
    "                        -->\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!--\n" +
    "                    <div class=\"\">\n" +
    "                        <p>parentHash: {type: 'string'},</p>\n" +
    "                        <p>ommersHash: {type: 'string'},</p>\n" +
    "                        <p>beneficiary: {type: 'string'},</p>\n" +
    "                        <p>stateRoot: {type: 'string'},</p>\n" +
    "                        <p>transactionsRoot: {type: 'string'},</p>\n" +
    "                        <p>receiptsRoot: {type: 'string'},</p>\n" +
    "                        <p>difficulty: {type: 'string'},</p>\n" +
    "                        <p>number: {type: 'string'},</p>\n" +
    "                        <p>timestamp: {type: 'string'},</p>\n" +
    "                        <p>extraData: {type: 'string'},</p>\n" +
    "                        <p>mixHash: {type: 'string'},</p>\n" +
    "                        <p>nonce: {type: 'string'}</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    -->\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"blockModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/block</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"CONTENT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?creative,paint,splash,technology,code,content,music')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Content</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Content is information. (with context)</p>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> Title of Content is a String</p>\n" +
    "                        <p><b>Content:</b> Content is a minified string of parsable markup language such as <i>sanatized</i> html, markdown, or bbcode, .. etc,</p>\n" +
    "                        <p><b>Tags:</b> Tags provide informational context, they are both a computed property via validation traversal and created by the content creator.</p>\n" +
    "                        <p><b>Type:</b> Type of Content is: 'AUDIO, IMAGE, LINK, MOTION, POST, VIDEO'</p>\n" +
    "                        <p><b>Location:</b> Location is a JSON obj with respective location information such as lat,lng and address.</p>\n" +
    "                        <p><b>Associated Models:</b> Computed via Association Traversal</p>\n" +
    "                        <p><b>Reactions:</b> TBD </p>\n" +
    "                        <p><b>Creator:</b> Address, Member or Project, who created Content</p>\n" +
    "                        <p><b>CreatedAt:</b> Timestamp of Creation</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"contentModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <p style=\"color:gray;font-style:italic\">Creating a Content Query</p>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"contentQuery\"></div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/content</b></p>\n" +
    "                        <p>curl https://www.cre8.xyz/api/content?limit=1&skip=0</p>\n" +
    "                        <!--http://localhost:1337/api/content?query=[{limit:10,skip:10},{limit:10,skip:10}]-->\n" +
    "                        <form role=\"form\" ng-show=\"false\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input class=\"form-control\" ng-model=\"newQuery.filter\" placeholder=\"Filter\" type=\"text\"> \n" +
    "                                <input class=\"form-control\" ng-model=\"newQuery.limit\" placeholder=\"Limit\" type=\"number\"> \n" +
    "                                <input class=\"form-control\" ng-model=\"newQuery.skip\" placeholder=\"Skip\" type=\"number\"> \n" +
    "                                <input class=\"form-control\" ng-model=\"newQuery.sort\" placeholder=\"Sort\" type=\"text\"> \n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                        <button ng-click=\"apiCall({model:'CONTENT',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Content</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div style=\"max-height:100vh;overflow:scroll\" hljs hljs-language=\"javascript\" hljs-source=\"results.content\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"DATA\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,information,data')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Data</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Data is information. Data and Events information to information mapping.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\">var dataModel = {id:'string', data:'binary'};</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/data</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"EVENT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?event,information,data')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Event</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Event Model</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\">var eventModel = {};</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/event</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"FOLLOWER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?realationship,follower,community')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Follower</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Followers are .. </p>\n" +
    "                    <div>\n" +
    "                        <p><b>Followed:</b> TBD</p> \n" +
    "                        <p><b>Follower:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"followerModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/follower</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"ITEM\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?item,inventory,stuff,things')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Item</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Items .. provide depth to the capibilities of string based tokenization </p>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> TBD</p> \n" +
    "                        <p><b>associatedModels:</b> TBD <!--When the item string token is sent in a transaction, item ownership is transferred.--></p> \n" +
    "                        <p><b>compontentItems:</b> Recursive nesting structure. Useful for transparent supply chains.</p> \n" +
    "                        <p><b>Tags:</b> Computed from associated Models and self Associated Context.</p> \n" +
    "                        <p><b>Content:</b> Associated Content -- Item Description. Same as content (attention protocol)</p> \n" +
    "                        <p><b>Location:</b> Associated Item Location</p> \n" +
    "                        <p><b>Info:</b> TBD -- For Sale? Physical? Delivery? .. ETC</p> \n" +
    "                            <p><b>Status:</b> Status Linkage to Action (CONSUMED.. TRANSFORMED.. CLEAN.. ETC)</p> \n" +
    "                            <p><b>isGenerator:</b>If an item is a generator, on purchase or transfer, a new item is created. Useful for Inventory.</p> \n" +
    "                    \n" +
    "                        <p><b>Creator:</b> The Creator of the item. Can be Generated.</p> \n" +
    "                        <p><b>Owner:</b> The Owner of the item. Can be franctional.</p> \n" +
    "                        <!--ASSOCIATED MODELS && CONTENT; TRANFERRANCE OF ITEMS-->\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Relationship with <a href=\"#ACTION\" du-smooth-scroll>Actions</a>; You can act upon an item via a verb / action type;<br> Consume Water, Wear Shirt, ...,  Actions are a vector with Type and Quantity</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"itemModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/item</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"LOCATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?map,globe,spacetime,location')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Location</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Location Model</p>\n" +
    "                    <p>Location Tokenization via Lat Lng Member Sharing --> Suggested Tasks to tokenize.. 'experience tasks' .. some protocol.. geobounded Proj, Task.., Validation... </p>\n" +
    "                    <p>Hanging at the Park; shaing location.. space and time --> Auto Task --> Time (--> Proj) with Task Location..</p>\n" +
    "                    <p>`(\\l\\a\\t,\\l\\n\\g) mapsto Task` : `(\\l\\a\\t,\\l\\n\\g) mapsto Project` </p>\n" +
    "                    <p>Location Context of Time</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"locationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/location</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"MEMBER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?human,person,member,community')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Member</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Member Model</p>\n" +
    "                    <div>\n" +
    "                        <p><b>avatarUrl:</b> TBD</p> \n" +
    "                        <p><b>coverUrl:</b> TBD</p> \n" +
    "                        <p><b>Username:</b> TBD</p> \n" +
    "                        <p><b>Status:</b> TBD</p> \n" +
    "                        <p><b>Information:</b> TBD</p> \n" +
    "                        <p><b>Balance:</b> TBD</p> \n" +
    "                        <p><b>Reputation:</b> TBD</p> \n" +
    "                        <p><b>Location:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"memberModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/member</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"MARKET\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?node,market,connection,community,value')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Market</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">A market is a computed immutable structure based on filtered orders. Markets represent a combinatorial space of <a href=\"#TOKEN\" du-smooth-scroll>tokens</a>.</p>\n" +
    "                    <a href=\"#MULTIMARKET\">MultiMarket</a>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\">var marketModel = {tokens:[],info:{}};</div>        \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/market</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"MOTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?government,parliment,decision,creation')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Motion</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">A motion is an action linked to a consensus mechanism useful in group organization. A Containerized Action. A Motion is a Nested Validation .. in creating a motion one is validating an action. On Validation of a Motion (Nested Validation) an Action is created.</p>\n" +
    "                    <!--COMBINE MOTION AND VALIDATION..-->\n" +
    "                    <!--VALIDATE YOUR SELF AS A MEMBER .. OTHER MEMBERS VALIDATION THE VALIDATION-->\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\">var motionModel = {};</div>        \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get,post] /api/motion</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"NOTIFICATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?notification,attention,hi,awesome')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Notification</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Notification Model. Notifications have privacy permission qualifiers.</p>\n" +
    "                    <p><b>get /api/notification</b></p>\n" +
    "                    <div>\n" +
    "                        <p><b>Priority:</b> TBD</p> \n" +
    "                        <p><b>Type:</b> TBD</p> \n" +
    "                        <p><b>Content:</b> TBD</p> \n" +
    "                        <p><b>isRead:</b> TBD</p> \n" +
    "                        <p><b>User:</b> TBD</p> \n" +
    "                    </div>  \n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"notificationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/notification</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"ORDER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?marketplace,order,finace,bid,ask')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Order</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Order is a position in the Multidimensional Token Market. Establises connections between tokens relationally and with manifold logic based on protocol.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">The Anatomy of an Order</p>\n" +
    "                    <div>\n" +
    "                        <p><b>setAlpha</b>: [{assetIdentifier: amount}, ...]</p>\n" +
    "                        <p><b>setBeta</b>: [{assetIdentifier: amount}, ...]</p>\n" +
    "                        <p><b>Status</b>: <b>PENDING</b>,<b>CONTINUAL</b>,<b>COMPLETE</b></p>\n" +
    "                        <p><b>Type</b>: <b>FoK</b>: Fill or Kill, <b>onBooks</b>: On the Books, <b>Limit</b>: Limit Order</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-15\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"orderModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/order</b></p>\n" +
    "                    <p>curl https://www.cre8.xyz/api/order?limit=1&skip=0</p>\n" +
    "                    <div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"orderQuery\"></div>\n" +
    "                        <button ng-click=\"apiCall({model:'ORDER',limit:1,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Order</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\" hljs-source=\"results.order\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PASSPORT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?passport,validate,auth,authentication,conenesus,connection')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Passport</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Passport Model. Passports are modular access points to executing requests on behalf of a member. </p>\n" +
    "                    <p>2FA authentication protocols etc</p>\n" +
    "                    <a href=\"#IDENTITY\" du-smooth-scroll>Identity management</a>\n" +
    "                    <div>\n" +
    "                        <p><b>protocol:</b> TBD</p> \n" +
    "                        <p><b>password:</b> TBD</p> \n" +
    "                        <p><b>provider:</b> TBD</p> \n" +
    "                        <p><b>identifier:</b> TBD</p> \n" +
    "                        <p><b>tokens:</b> TBD</p> \n" +
    "                        <p><b>user:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"passportModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/passport</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PEERMODEL\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?community,peer,member,network,conenesus,decentralized,mesh')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Peers are ..</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\">var peerModel = {\"url\":\"string\", \"ip\":\"string\", \"network\":\"string\", \"info\":\"json\"};</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/peer</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PROJECT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?project,group,community,connenction,conenesus,coordination,voting,government')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Project</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Projects are organized groups of members with self governing principles; a charter.</p>\n" +
    "                    <div>\n" +
    "                         <p><b>create:function()</b> <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#PROJECT\" du-smooth-scroll>Project</a> (and its applications on cre8's api)</span></p>\n" +
    "                        <p><b>getSome:function()</b></p>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <p><b>title:</b> TBD</p> \n" +
    "                        <p><b>description:</b> TBD</p> \n" +
    "                        <p><b>avatarUrl:</b> TBD</p> \n" +
    "                        <p><b>urlTitle:</b> TBD</p> \n" +
    "                        <p><b>stringManifold:</b> TBD</p> \n" +
    "                        <p><b>tags:</b> TBD</p> \n" +
    "                        <p><b>location:</b> TBD</p> \n" +
    "                        <p><b>associatedModels:</b> TBD</p> \n" +
    "                        <p><b>user:</b> TBD</p> \n" +
    "                        <p><b>info:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/project</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PROJECTCHARTER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?vote,validate,create,government,conenesus,charter,constution,rules,code')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Project Charter</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">ProjectCharters are .. modular adaptions with governance and decision making. Specific protocols that dynamically adjust project configurations. from initial conditions to reputationatation decay.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Reputation & Verification Dimensions</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Validation Types</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Member Types</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectCharterModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/projectcharter</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PROJECTMEMBER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?project,community,validate,connenction,member,group,intentional')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Project Member</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">ProjectMember is .. a Computed Validation interaction with a Project Charter</p>             \n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectMemberModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/projectmember</b></p>   \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"PROTOCOL\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Protocol</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Protocol is .. a contract - a piece of code - that transacts with information in Txs on the CRE8 VM. In creating layered and interoperable protocols, application architecture adopts core principles - which espouse a meta consensus mechanism. The CRE8 governing body defines the core.</p>\n" +
    "                    <p>immutable structure; json; smart contract language</p>\n" +
    "                    <p>Abstraction of {Language Abstraction} working with the <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 virtual machine</a></p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"protocolModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/protocol</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"REACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?like,dislike,react,love,create,action,reaction')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Reaction</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Reaction is .. </p>\n" +
    "                    <div>\n" +
    "                        <p><b>amount:</b> TBD</p> \n" +
    "                        <p><b>type:</b> TBD</p> \n" +
    "                        <p><b>user:</b> TBD</p> \n" +
    "                        <p><b>associatedModels:</b> TBD</p> \n" +
    "                        <p><b>reactions:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"reactionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/reaction</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"SEARCH\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?search,filter,find,code,discover,order,crystal,connection,lattice')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Search</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Search is .. model agnostic query endpoint... unify with examples? .. unify with query</p>\n" +
    "                    <div>\n" +
    "                        <p>CONTENT ABOUT COMPLEX SEARCH QUERIES.. IE FINISH FILTER & DOCUMENT</p>\n" +
    "                        <p><b>Filter</b>: Obj Types -- TAGS;QUERY;LOCATION;MODEL;TYPE;ASSETINPUT;ASSETOUTPUT;ASSOCIATIONS...</p>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <p>QUERY BUILDER</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"queryModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>get /api/search</b></p>\n" +
    "                    <p>curl https://www.cre8.xyz/api/search?limit=1&skip=0&Model='TRANSACTION'&...</p>\n" +
    "\n" +
    "                    <button ng-click=\"apiCall({model:'SEARCH',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get</button>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <div style=\"max-height:100vh;overflow:scroll\" hljs hljs-language=\"javascript\" hljs-source=\"results.search\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"TASK\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?time,intention,responsibility,planning,calendar,coordination,shared,goals')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Task</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Tasks are a relay of context. Layers of validation intention create association. The principles of responsibility sets. Shared crystalized responsibility; validated intention of time.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Crystalized responsibility; tasks with high connectivity and associativity via associatedModels</p>\n" +
    "                    <div>\n" +
    "                        <p><b>title:</b> TBD</p> \n" +
    "                        <p><b>content:</b> TBD</p> \n" +
    "                        <p><b>location:</b> TBD</p> \n" +
    "                        <p><b>tags:</b> TBD</p> \n" +
    "                        <p><b>user:</b> TBD</p> \n" +
    "                        <p><b>associatedModels:</b> TBD</p> \n" +
    "                        <p><b>reactions:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"taskModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/task</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"TIME\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?clock,time,spacetime,physics,universe,mystery,intention')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Time</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Time & intention is the foundation of energy. Time is the base of CRE8.</p>\n" +
    "                    <div>\n" +
    "                        <p><b>amount:</b> TBD</p> \n" +
    "                        <p><b>startTime:</b> TBD</p> \n" +
    "                        <p><b>content:</b> TBD</p> \n" +
    "                        <p><b>tags:</b> TBD</p> \n" +
    "                        <p><b>associatedModels:</b> TBD</p> \n" +
    "                        <p><b>location:</b> TBD</p> \n" +
    "                        <p><b>reactions:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"timeModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/time</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"TOKEN\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?value,validate,token,conenesus,money,cash')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Token</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">A token is a discrete piece of information with the following properties:</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"tokenModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/token</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"TRANSACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,send,money,value,conenesus')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Transaction</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Transactions are core to transferable value. Contains a sender and reciever address, as well as an asset weighted struct.</p>\n" +
    "                    <div>\n" +
    "                        <p><b>to:</b> TBD</p> \n" +
    "                        <p><b>from:</b> TBD</p> \n" +
    "                        <p><b>amountSet:</b> Set Transactions</p> \n" +
    "                        <p><b>tags:</b> TBD</p> \n" +
    "                        <p><b>content:</b> TBD</p> \n" +
    "                        <p><b>location:</b> TBD</p> \n" +
    "                        <p><b>reactions:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"transactionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/transaction</b></p>\n" +
    "                    <p>curl https://www.cre8.xyz/api/transaction?limit=1&skip=0</p>\n" +
    "                    <div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"transactionQuery\"></div>\n" +
    "                        <button ng-click=\"apiCall({model:'TRANSACTION',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Transaction</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\" hljs-source=\"results.transaction\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"TX\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?block,transaction,data,code,discrete,blockchain')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tx</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Every state update in the <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 virtual machine</a> is represented by a transaction or tx. <a href=\"#BLOCK\" du-smooth-scroll>Blocks</a> are machine verified bundles of txs.</p>\n" +
    "                    <!--<p>VERY IMPORTANT</p>\n" +
    "                    <p>CREATE VM HERE.. THE STATE IS KEPT BY DATA IN TX.. (TX - BLOCK)</p>-->\n" +
    "                    <div>\n" +
    "                        <p><b>addressFrom:</b> TBD</p> \n" +
    "                        <p><b>addressTo:</b> TBD</p> \n" +
    "                        <p><b>Data:</b> TBD</p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"txModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/tx</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div id=\"VALIDATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?vote,validate,create,connenction,conenesus')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Validation</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Like Votes, the building block for group agreement - consensus and decision making. \n" +
    "                    <p style=\"color:gray;font-style:italic\">The Anatomy of a Validation</p>\n" +
    "                    <div>\n" +
    "                        <p><b>Reputation:</b> {context:reputationInt}, Reputation is used as a multiplier for association computation via the Project Charter</p>\n" +
    "                        <p><b>Validation:</b> {context:validationInt}</p>\n" +
    "                        <p><b>Type:</b> Human (CRE8), Machine (CRE8), APP</p>\n" +
    "                        <p><b>Associated Models:</b> TODO: REPLACE CONTENT.. SHARED DATA ATTRIBUTE.. </p>\n" +
    "                        <p><b>Validation Models:</b> Binary relation of Two Models to be associated.</p>\n" +
    "                        <p><b>Creator:</b> Address of Member who created Validation</p>\n" +
    "                    </div>\n" +
    "                    <p>Reputation & Validation</p>\n" +
    "                    <p>Interoperable Validation Types</p>\n" +
    "                    <p>Composite Validation (CRE8), Human Validated Proof of Work, Machine Validation, and App Specific Validation</p>\n" +
    "                    <!--CONTEXT-SPECIFIC x-->\n" +
    "                    <p>Association Space</p>\n" +
    "                    <nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "                    <p>`Validation | {V_N} = sum_(i=0)^n {V_{V_i}}_[a-z]`</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Layered / Nested Recursion (Validation-Validation)</p>\n" +
    "                    <p>VALIDATION `hArr_D` VALIDATION</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>DISCRETE</b></p>\n" +
    "                    <p>Project Charter Protocols</p>\n" +
    "                    <p>PROJECT `hArr` ITEM</p>\n" +
    "                    <p>PROJECT `hArr` MEMBER</p>\n" +
    "                    <p>PROJECT `hArr` ORDER</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>SMOOTH</b></p>\n" +
    "                    <p>PROJECT `hArr_D` ITEM</p>\n" +
    "                    <p>PROJECT `hArr_D` CONTENT</p>\n" +
    "                    <p>PROJECT `hArr_D` TASK</p>\n" +
    "                    <p>PROJECT `hArr_D` TASK `hArr_D` TIME</p>\n" +
    "                    <p>VALIDATION `hArr_D` VALIDATION</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    `hArr_D` \n" +
    "                    <p>Dimensional Validations are Tags<p> \n" +
    "                    `Tag = V_D`\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"validationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/validation</b></p>\n" +
    "                    <p>curl https://www.cre8.xyz/api/validation?limit=1&skip=0</p>\n" +
    "                    <div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"validationQuery\"></div>\n" +
    "                        <button ng-click=\"apiCall({model:'VALIDATION',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Validation</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\" hljs-source=\"results.validation\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-100\"></div> \n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"TOKENIZATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?token,code')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokenization</h1>\n" +
    "                    <h5 style=\"color:white\">Tokenization from protocols.</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <p style=\"color:gray;font-style:italic\">Tokenization from protocols.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Token Language & <b>String Interpolation</b></p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Action Potiental From Protocol.</p>\n" +
    "\n" +
    "                `oplus, otimes, odot, triangle, RR`\n" +
    "                <p> Algebras </p>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <img style=\"height:200px;\" src=\"images/dna.png\">\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"IDENTITY\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?identity,connection')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Identity & Interoperability</h1>\n" +
    "                    <h5 style=\"color:white\">Protocols to manage user operations</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">  \n" +
    "                <p style=\"color:gray;font-style:italic\">This is the Passport Model. Passports are modular access points to executing requests on behalf of a member. </p>\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"passportModel\"></div>\n" +
    "                <p><b>[get, post] /api/passport</b></p>\n" +
    "                <p>Facebook, Youtube, Google , Twitter, STEEM, ...</p>\n" +
    "                <p>Biometric Authentication -- CRE8 Reccomends</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"VALIDATIONTRAVERSAL\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,validate')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Association Exploration & Traversal</h1>\n" +
    "                    <h5 style=\"color:white\">The Organizational Complex</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <!--MULTI ORG LATTICE-->\n" +
    "                <h4>Validation Traversal</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">From a Set of Validations Compute the Association `A_{D_{1-n}` </p>\n" +
    "                <!--<p>A = V1[a1-aN]~SumV(V*[a1-aN], ..-V**n,..), V2[a1-aN]~..., V3[a1-aN], V4[a1-aN], V5[a1-aN], ...</p>-->\n" +
    "                <p>`Association | A = sum_(i=0)^n {V_N}_[a-z]`</p>\n" +
    "                <p>`Validation | {V_N} = sum_(i=0)^n {V_{V_i}}_[a-z]`</p>\n" +
    "                <p>`Association | A = sum_(i=0)^n sum_(i=0)^n V_[a-z]`</p>\n" +
    "\n" +
    "                <h5>Topology</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">An Immutable Object Structure; RECURISIVE.. TOPOLOGY MAP OF VALIDATIONS (HIGHER ORDER)</p>\n" +
    "\n" +
    "                <h5>Token Action Potientals & Protocols</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">COMMUNITY PLANNING AROUND THE ORGANIZATION OF LOCALIZED RESPONSIBILITY SETS</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"MULTIMARKET\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?market,graph,liquidity')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <!--<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Multidimensional Token Market Exploration & Traversal</h1>-->\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">MultiMarket Exploration & Traversal</h1>\n" +
    "                    <h5 style=\"color:white\">The Multidimensional Token Market</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "\n" +
    "                <!--VALUE MAP STRUCUTRE-->\n" +
    "                <p style=\"color:gray;font-style:italic\">Discrete Order Structure / Value Map</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Sets Equalities & Statements of Exchange</p>\n" +
    "                \n" +
    "                <p>The Anatomy of an <a href=\"#ORDER\" du-smooth-scroll>Order</a></p>\n" +
    "                <!--SET VS DISCRETE; VS TYPES; VS CONTINUOUS ETC-->\n" +
    "\n" +
    "                <!-- AUTOMATICALLY SELL ONMANIFOLD TOKENS -->\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"newOrderModel\"></div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4><b>Matching Engine</b></h4>\n" +
    "                <p>An Immutable Object Structure</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Given a set of equations, we formalize an immutable Structure to define a Multidimensional order book</p>\n" +
    "                <p>Discussion of market types</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Commentary on binary books --> to multi books; logic encoded</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Priority of Prefrence for Higher Dimensional Orders; types</p>\n" +
    "                <p>The rank of connection n by size of the market m -- degress of connection -- the moment of liquidity is combinatorial</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "                <!--BINARY-->\n" +
    "                <!--`{(alpha_1A,=,beta_1B),(alpha_2A, =, beta_2B),(vdots,,),(delta_nA,=,epsilon_nB):}`-->\n" +
    "\n" +
    "\n" +
    "                <!--just questioning the +--> \n" +
    "                `{({}_1, =, alpha_1A,+,beta_1B,=,gamma_1C),({}_2, =, alpha_2A,+,beta_2B,=,gamma_2C),(vdots,,,,,,),({}_n, =, delta_nA,+,epsilon_nB,=,zeta_nC):}`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `sum_({}_1)^n `\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `alpha_1 = ((beta_1),(vdots),(beta_n)) circ [[a_11,cdots,a_m1],[vdots, ddots, vdots],[a_1n,cdots,a_mn]]`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--ELEMENT ORDER IN TENSOR ANALYSIS.. MAY BE IMPROTANT.. :/-->\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"orderBookTensor\"></div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">Tensor Structure of Assets; Layering and Braiding</p>\n" +
    "                \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p>Tensor Product, Tensor Permuting, Assets as tensors, Layered Tensors as encoded traversals</p>\n" +
    "\n" +
    "                <!-- in building out the tensor braid.. powerset-->\n" +
    "\n" +
    "                `oplus, otimes, odot, triangle, RR`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `((a_(11), cdots , a_(1n)),(vdots, ddots, vdots),(a_(m1), cdots , a_(mn)))`\n" +
    "\n" +
    "                <a href=\"/content/5c438e2090a86f150004ebda\">INFO</a>\n" +
    "                \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Market Objects and their Traversal Character</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">For every n-object there exists nCm objects of rank m</p>\n" +
    "                \n" +
    "                `((n),(m)) = (n!)/(m!(n-m)!)`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p>Connection Lattice and the Traversal Facet (inverted Facet)</p>\n" +
    "\n" +
    "\n" +
    "                <p><b>Combinatorial 3</b></p>\n" +
    "                <p>A fully Connected 3-3-Combinatorial-Market</p>\n" +
    "                <!--6 nodes-->\n" +
    "                <!--15 edges; links-->\n" +
    "\n" +
    "                <span>Figure A</span>\n" +
    "                <img style=\"height:150px;\" src=\"images/comb3.png\">\n" +
    "\n" +
    "                <span>Figure B</span>\n" +
    "                <img style=\"height:150px;\" src=\"images/comb3a.png\">\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Combinatorial 4</b></p>\n" +
    "                <p>4 Asset MultiMarket Connection Lattice(s)﻿</p>\n" +
    "                <!--16 nodes-->\n" +
    "                <!---->\n" +
    "                <img style=\"height:150px;\" src=\"images/comb4.png\">\n" +
    "                <img style=\"height:150px;\" src=\"images/comb4a.png\">\n" +
    "                <img style=\"height:150px;\" src=\"images/comb4b.png\">\n" +
    "                <img style=\"height:150px;\" src=\"images/comb4c.png\">\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--<p><b>Combinatorial 5</b></p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>-->\n" +
    "\n" +
    "                <!--MAP COMP 5 -> COMP 7-->\n" +
    "                <!--EXPLORE MORE-->\n" +
    "\n" +
    "                <p><b>Combinatorial N</b></p>\n" +
    "                <p>Higher Dimensional Combinatorials</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <a href=\"#\">Explorer</a>\n" +
    "                <!--MARKET TRAVERSE-->\n" +
    "                <nvd3 options=\"graphOptions\" data=\"graphExploreData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Group Theoretic Properties</h4>\n" +
    "                <p>A group G is a finite or infinite set of elements together with a binary operation (called the group operation) that together satisfy the four fundamental properties of closure, associativity, the identity property, and the inverse property. The operation with respect to which a group is defined is often called the \"group operation,\" and a set is said to be a group \"under\" this operation.</p>\n" +
    "                <p>A permutation group is a finite group `G` whose elements are permutations of a given set and whose group operation is composition of permutations in `G`. Permutation groups have orders dividing `n!`.</p>\n" +
    "                <p>A `Lie` group is a smooth manifold obeying the group properties and that satisfies the additional condition that the group operations are differentiable.</p>\n" +
    "\n" +
    "                <p><b>Substitution</b></p>\n" +
    "                `f(MARKET) = G(zeta) | alpha = beta_1+beta_2+ ... `\n" +
    "                <br>\n" +
    "                `f(ABCD) = ... | ABC = (A=BC-B=AC-C=AB)`\n" +
    "                <br>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Combination</b></p>\n" +
    "                `G(ABC+DFG)`\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Reduction</b></p>\n" +
    "                `SIMPLIFICATION`\n" +
    "                `f(g(x))`\n" +
    "                `(f o g)(x)`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <h5>Layered Deep Learning</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Computed Higher Dimensional Combinatorials</p>\n" +
    "\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "\n" +
    "                <!--TODO..-->\n" +
    "\n" +
    "                <!--<p><b>Investment and Generalized Portfolio Allocation</b></p>\n" +
    "                <p>Capital Asset Pricing Model..</p>\n" +
    "                `E(R_i)=R_f+beta_i(E(R_m)-R_f)`-->\n" +
    "\n" +
    "                <!--PROBABILITY DENSITY ANALYSIS-->\n" +
    "                \n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <a href=\"https://www.cre8.capital/api/data/marketImage\">Market Image</a>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"GROUPINTENTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?community,planning,coordination')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Project Charters and Group Coordination</h1>\n" +
    "                    <h5 style=\"color:white\">The Token Action Potientals</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <p style=\"color:gray;font-style:italic\">COMMUNITY PLANNING AROUND THE ORGANIZATION OF LOCALIZED RESPONSIBILITY SETS</p>\n" +
    "                <a href=\"#PROJECTCHARTER\" du-smooth-scroll>Project Charter</a>\n" +
    "                <p style=\"color:gray;font-style:italic\">Action Potiental From Protocol.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"SYNTHETICTOKENIZATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?artifical,intelligence,ai,robot')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokenization and Pattern Recognition</h1>\n" +
    "                    <h5 style=\"color:white\">Modular Validation</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <p style=\"color:gray;font-style:italic\">Deep Learning and video feeds to discreetly tokenize time</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tokenization with a high degree of consensus on context through multidimensional validation</p>\n" +
    "                <p>\n" +
    "                <p style=\"color:gray;font-style:italic\">TOKENIZING PUBLIC SPACES THOUGH AI</p>\n" +
    "                <img src=\"images/aitoken.gif\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("discover/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.angular-google-map-container{height:300px;}\n" +
    "</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Discover</h1>\n" +
    "            	<h5 ng-if=\"false\" style=\"color:white\"></h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "	    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "		    <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "		<div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\"><a  href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a></div>\n" +
    "            </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "    	<div class=\"col-md-5\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"card\">\n" +
    "				<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "				    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "				        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "				            <div>\n" +
    "				                <div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div>\n" +
    "				            </div>\n" +
    "				        </ui-gmap-window>\n" +
    "				    </ui-gmap-marker>\n" +
    "				</ui-gmap-google-map>\n" +
    "			</div>\n" +
    "			<div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "				    <b><a href=\"/content\">Content</a></b>\n" +
    "					<b><a href=\"/marketplace\">Items</a></b>\n" +
    "					<b><a href=\"/members\">Members</a></b>\n" +
    "					<b><a href=\"/market\">Orders</a></b>\n" +
    "					<b><a href=\"/projects\">Projects</a></b>\n" +
    "					<!--\n" +
    "					<li><a href=\"\">Reactions</a></li>\n" +
    "					<li><a href=\"\">Time</a></li>\n" +
    "					<li><a href=\"\">Transactions</a></li>\n" +
    "					-->\n" +
    "					<b><a href=\"/tasks\">Tasks</a></b>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "			<div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "		            <span><b>Tags</b></span>\n" +
    "	                <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	                </form>\n" +
    "		            <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "		                <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "		            <span><b>Associations</b></span>\n" +
    "		            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	                </form>\n" +
    "		            <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "		                <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card\">\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "		            <span><b>Locations</b></span>\n" +
    "		            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	                </form>\n" +
    "		            <div ng-repeat=\"location in sortedLocationArray\">\n" +
    "		                <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "		            </div>\n" +
    "			        <div layout=\"\">\n" +
    "	                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">Distance (km)</span></div>\n" +
    "	                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "	                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}}</span></div>\n" +
    "	                </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "    	<div class=\"col-md-7\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div ng-repeat=\"item in tasks.slice(0,10)\">\n" +
    "				<div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "					<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "	                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                            <div class=\"container\">\n" +
    "	                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.title}}</h1>\n" +
    "	                            </div>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "					<div style=\"padding:16px;\">\n" +
    "		                <div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "		                </div>\n" +
    "						<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "		            	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "						<a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "						<a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	        <div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart1\"></highchart>\n" +
    "			</div>\n" +
    "			<h1>Tokens / Market / Value Maps</h1>\n" +
    "			<p>Lorem Ipsum</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	        <div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart1\"></highchart>\n" +
    "			</div>\n" +
    "			<h1>Association Relationship Browser</h1>\n" +
    "			<p>Lorem Ipsum</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "    	<div style=\"max-height:200px;overflow:hidden\">\n" +
    "    		<img src=\"https://images.unsplash.com/photo-1532620161677-a1ca7d5d530f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80\">\n" +
    "    	</div>\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>Members</h1>\n" +
    "			<p>CRE8's Community encompasses a wide breadth of skill, interests, and <a>codified beliefs</a>.</p>\n" +
    "			<p>222 Members span 432 coutries and 3241 self organized desiplines.</p>\n" +
    "			<p>CRE8's Commmunity has participated in 2013 organizing events and is emdeded in local governments globally.</p>\n" +
    "			<p>Think about how we can do anything together. Think about our community. Think about our shared identitiy. Think about food and water.</p>\n" +
    "			<p>the human story;</p>\n" +
    "			<div class=\"row\">\n" +
    "		        <div class=\"col-md-6\">\n" +
    "		        	<p><b>Title</b></p>\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<p><b>Title</b></p>\n" +
    "					<highchart config=\"chart1\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-6\" ng-repeat=\"item in members.slice(0,10)\">\n" +
    "				<div class=\"member-card\" style=\"margin-bottom:10px\" ng-click=\"renderReputationToggle(item)\">\n" +
    "				    <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "				        <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.username}}\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "				    </div>\n" +
    "				    <div class=\"member-card-info\">\n" +
    "				        <h4><a href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "				        <p style=\"color:gray\">{{item.status}} offline</p>\n" +
    "				        <p style=\"color:gray\">Total Reputation | {{item.totalWork}}</p>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div style=\"padding-left:0px;padding-right:0px;\" class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\" style=\"padding:3px;float:none\">\n" +
    "			<div style=\"float:right\"><a href=\"/\"><img src=\"images/hyper.gif\"></a></div>\n" +
    "			<!--<div style=\"float:right\"><a href=\"/\"><img src=\"https://media1.tenor.com/images/d74ec678a0777a81e1374577e969d906/tenor.gif?itemid=12984711\"></a></div>-->\n" +
    "			<a style=\"font-weight:bold;font-size:15px;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" href=\"/\">CRE8.XYZ</a>\n" +
    "			<br>\n" +
    "			<a href=\"/about\">about</a>\n" +
    "			<a href=\"/discover\">discover</a>\n" +
    "			<a href=\"/market\">market</a>\n" +
    "			<a href=\"/projects\">projects</a>\n" +
    "			<a href=\"/tasks\">tasks</a>\n" +
    "			<a href=\"/transparency\">transparency</a>\n" +
    "		</div>\n" +
    "		<!--\n" +
    "		<div class=\"sub-footer\">\n" +
    "			Terms Privacy Social etc\n" +
    "		</div>\n" +
    "		-->\n" +
    "	</div>	\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div ui-view=\"homeIntro\"></div>\n" +
    "<div ui-view=\"homeFeed\"></div> \n" +
    "");
}]);

angular.module("home/templates/feed.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/templates/feed.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 350px;}</style>\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"row\" ng-if=\"isTutorial\">\n" +
    "\n" +
    "        <div ng-show=\"pageNumber == 0\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?settings')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Information & Settings</h1>\n" +
    "                        <p style=\"color:white;\">About your experience.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <p style=\"color:gray;font-style:italic\">All information given to the CRE8 NETWORK comes from a place of mutual consent. <b>I agree.</b> <md-switch style=\"float:right;height:auto;margin:0px\" ng-model=\"consentAgreement\" aria-label=\"Consent Agreement\"></md-switch></p>\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-5 col-xs-12\" style=\"padding-right:5px;padding-left:10px\">\n" +
    "                        <div class=\"member-card\" ng-click=\"renderReputationToggle(currentUser)\">\n" +
    "                            <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "                                <a href=\"#\">\n" +
    "                                    <img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                </a>\n" +
    "                            </div>\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "                            <div class=\"member-card-info\" style=\"height:auto;padding-left:0%\">\n" +
    "                                <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "                                <p style=\"color:gray\"><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> {{currentUser.status}} Creating Account</p>\n" +
    "                                <p style=\"color:gray\"><b>Total Reputation</b>: {{currentUser.totalWork}}</p>\n" +
    "                                <p style=\"color:gray\">{{currentUser.id}}<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></p>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"false\" class=\"member-card-social\">\n" +
    "                                <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "                                <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "                                <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "                                <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <p><a style=\"color:gray\" href=\"/account\"><i class=\"fas fa-passport\"></i> Account Settings</a></p>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-7 col-xs-12\" style=\"padding-right:5px;padding-left:10px\">\n" +
    "                        <div class=\"card\" style=\"margin-top:0px;\">\n" +
    "                            <div style=\"padding:16px;\">\n" +
    "                                <form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Avatar Url</h5><input type=\"text\" ng-model=\"newAccountInformation.avatarUrl\" placeholder=\"Avatar Url\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Cover Url</h5><input type=\"text\" ng-model=\"newAccountInformation.coverUrl\" placeholder=\"Cover Url\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Username</h5><input type=\"text\" ng-model=\"newAccountInformation.username\" placeholder=\"Username\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-6\"><h5>Email</h5><input type=\"text\" ng-model=\"newAccountInformation.email\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-6\"><h5>Phone Number</h5><input type=\"text\" ng-model=\"newAccountInformation.phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>First Name</h5><input type=\"text\" ng-model=\"newAccountInformation.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Last Name</h5><input type=\"text\" ng-model=\"newAccountInformation.lastName\" placeholder=\"Last Name\" class=\"form-control\"></div>\n" +
    "                                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-model=\"newAccountInformation.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                                    <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!consentAgreement\">Save</button>\n" +
    "                                    <div style=\"clear:both\"></div>\n" +
    "                                </form>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <!--<p>Record Attention <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Attention Tokenization</span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "                        <p>Location Tracking <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Location Tokenization</span><md-switch ng-model=\"gpsTracking\" aria-label=\"GPS Tracking\"></md-switch></p>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--IF NO ORDERS | VALUE MAP-->\n" +
    "        <div ng-if=\"showOrders && positions.length == 0\" class=\"card\" ng-click=\"\">\n" +
    "            <!--TODO!-->\n" +
    "        </div>\n" +
    "        \n" +
    "        <div ng-if=\"pageNumber == 1\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?coordination,cities,city,community,work')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Projects</h1>\n" +
    "                        <p style=\"color:white;\">The CRE8 Network is globally present. Our members coordinate around all types of shared initiatives. Get Involved.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <ul style=\"padding:0px;margin-bottom:0px\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getLatLng()\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                    <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "                <div class=\"card\">\n" +
    "                    <tags-input class=\"\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                </div>\n" +
    "                <!--ACTIVE FILTERS-->\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\" style=\"padding:0px\">\n" +
    "                        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                            <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                    <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\">{{marker.content}}</a></div>\n" +
    "                                </ui-gmap-window>\n" +
    "                            </ui-gmap-marker>\n" +
    "                        </ui-gmap-google-map>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\">\n" +
    "                    <div ng-repeat=\"item in projects\">\n" +
    "                        <div class=\"card\" ng-click=\"cardDetailToggle()\">\n" +
    "                            <div style=\"padding:16px;\">\n" +
    "                                <div ng-click=\"$event.stopPropagation()\"style=\"float:right\">\n" +
    "                                    <button ng-click=\"$event.stopPropagation()\" ng-if=\"(item.isMember != 'PENDING' || item.isMember == false) && item.isMember != true\" class=\"btn btn-default\" ng-click=\"join(item);\">Join</button>\n" +
    "                                    <button ng-click=\"$event.stopPropagation()\" ng-if=\"item.isMember == 'PENDING'\" class=\"btn btn-default\" ng-click=\"join(item);\">Cancel Request</button>\n" +
    "                                    <button ng-click=\"$event.stopPropagation()\" ng-if=\"item.isMember == true\" class=\"btn btn-default\" ng-click=\"join(item);\">Leave</button>\n" +
    "                                </div>\n" +
    "                                <a ng-click=\"$event.stopPropagation()\"  href=\"/project/{{item.urlTitle}}\">\n" +
    "                                    <img ng-click=\"$event.stopPropagation()\" style=\"height:64px;float:left;margin-right:10px;\" src=\"{{item.avatarUrl}}\">\n" +
    "                                    <h3 ng-click=\"$event.stopPropagation()\" style=\"margin-top:0px\">{{item.title}}</h3>\n" +
    "                                </a>\n" +
    "                                <div style=\"overflow:scroll\"><span ng-bind-html=\"renderContent(item.description)\"></span></div>\n" +
    "                                <div style=\"clear:both\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"pageNumber == 2\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?business,service,civic,create,art,movies,action')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tasks</h1>\n" +
    "                        <p style=\"color:white;\">Coordinate with Intention. Get Involved.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "                <div class=\"card\">\n" +
    "                    <tags-input class=\"\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                </div>\n" +
    "                <!--ACTIVE FILTERS-->\n" +
    "                <div class=\"row\" style=\"margin:0px\">\n" +
    "                    <div ng-repeat=\"item in tasks\" class=\"col-md-12 col-sm-12 col-xs-12\" style=\"padding:0px\">\n" +
    "                        <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "\n" +
    "                            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                        <div class=\"container\">\n" +
    "                                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\" style=\"color:white\">{{item.title}}</a></h1>\n" +
    "                                            <h5><a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.project.urlTitle}}\" style=\"color:white\">{{item.project.title}}</a></h5>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div style=\"padding:16px;\">\n" +
    "                                <div style=\"float:right;text-align:right\">\n" +
    "                                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                                </div>  \n" +
    "                                <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                                <p><button ng-if=\"true\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();interested(item)\"><i class=\"fa fa-check\"></i> Interested</button></p>\n" +
    "                                <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                            </div>\n" +
    "                            <div class=\"card-footer\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                                <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                                <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"pageNumber == 3\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?friendship,skills,engineering,code,computer,technology,value,fintech')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Members</h1>\n" +
    "                        <p style=\"color:white;\">CRE8's Community encompasses a wide breadth of skill, interests, and known intention.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "                <div class=\"card\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                </div>\n" +
    "                <highchart config=\"totalMap\"></highchart>\n" +
    "                <div class=\"col-sm-6\" ng-repeat=\"item in members.slice(0,10)\">\n" +
    "                    <div class=\"member-card\" style=\"margin-bottom:10px\" ng-click=\"renderReputationToggle(item)\">\n" +
    "                        <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.username}}\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                        </div>\n" +
    "                        <div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "                            <h4><a href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "                            <p style=\"font-size:13px;\"><a href=\"/member/{{item.username}}/projects\">{{item.projectCount || 0}} Projects</a> | <a href=\"/member/{{item.username}}/followers\">{{item.followerCount || 0}} Followers</a> | <a href=\"/member/{{item.username}}/following\">{{item.followingCount || 0}} Following</a>\n" +
    "                            <p style=\"color:gray\">Total Reputation | {{item.totalWork}}</p>\n" +
    "                            <p style=\"color:gray\">{{currentUser.status}} Offline</p>\n" +
    "                            <button ng-show=\"!item.isFollowing\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(item);\">Follow</button>\n" +
    "                            <button ng-show=\"item.isFollowing\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(item);\">Unfollow</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"pageNumber == 4\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?math,geometry,fractal,data,finance')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Update Value Map</h1>\n" +
    "                        <p style=\"color:white;\">Now that we know more about you, let's update.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <p><b>My Current Positions & Value Map</b></p>\n" +
    "\n" +
    "                <!--\n" +
    "                <table>\n" +
    "                    <thead>\n" +
    "                        <th>Set Alpha</th>\n" +
    "                        <th>Set Beta</th>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"position in positions\">\n" +
    "                            <td>{{position.setAlpha}}</td>\n" +
    "                            <td>{{position.setBeta}}</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                -->\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--\n" +
    "                <p><b>Suggestions and Information</b></p>\n" +
    "                <p>Looking at Followers, Projects, Tags, Reputation, Skills..</p>\n" +
    "\n" +
    "                {{followers}}\n" +
    "                {{memberProjects}}\n" +
    "                -->\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-3\" style=\"max-height:50vh;overflow:scroll\">\n" +
    "                        <div style=\"font-size:14px;font-weight:bold\" ng-repeat=\"item in sortedsuggestedTokenTags track by $index\">\n" +
    "                            <button ng-click=\"createPosition(item.element)\" class=\"btn btn-default log-btn\">{{item.element}}</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-9\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <div ng-repeat=\"item in newOrder\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                                <highchart config=\"chart\"></highchart>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-6\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"pageNumber == 5\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?business,service,civic,create,art,movies,action')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div class=\"container\" style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Let's Create!</h1>\n" +
    "                        <p style=\"color:white;\">My First Post</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"card\">\n" +
    "                    <button ng-click=\"contentToggle()\" style=\"width:100%\" class=\"btn btn-default log-btn\">+ CONTENT</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"\">\n" +
    "            <div class=\"col-xs-9\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "                <div class=\"card\" ng-click=\"changePage()\" style=\"text-align:center\">\n" +
    "                    <button ng-disabled=\"!consentAgreement\" style=\"width:100%\" class=\"btn btn-default log-btn\">CONTINUE <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-3\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "                <div class=\"card\" ng-click=\"changePage(-1)\" style=\"text-align:center\">\n" +
    "                    <button ng-disabled=\"!consentAgreement\" style=\"width:100%\" class=\"btn btn-default log-btn\">SKIP <i class=\"fa fa-angle-double-right\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div class=\"row\" ng-if=\"!isTutorial\">\n" +
    "        <div class=\"col-md-4 col-sm-12 col-xs-12\">\n" +
    "            <div class=\"member-card\" style=\"margin-left:-5px;margin-right:-10px;margin-bottom:0px\" ng-click=\"renderReputationToggle(currentUser)\">\n" +
    "                <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "                    <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"member-card-info\">\n" +
    "                    <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "                    <p style=\"color:gray\">{{currentUser.status}} <i style=\"color:#30b257\" class=\"fa fa-circle\"></i></i> Online</p>\n" +
    "                    <p style=\"color:gray\"><b>Total Reputation</b></p>\n" +
    "                    <p style=\"color:gray;font-size:11px\">{{currentUser.totalWork}}</p>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8 col-sm-12 col-xs-12\" style=\"padding-left:0px;margin-right:-5px\">\n" +
    "            <div class=\"card\" style=\"min-width:100%;margin-top:0px\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">0x{{currentUser.id}}</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></a></span>\n" +
    "                    <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "                    <p style=\"font-size:13px;\"><a href=\"/member/{{currentUser.username}}/projects\">{{currentUser.projectCount || 0}} Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">{{currentUser.followerCount || 0}} Followers</a> | <a href=\"/member/{{currentUser.username}}/following\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-6\">\n" +
    "                            <h5>Balance Lookup <br><span style=\"font-size:11px;color:gray\">0x{{currentUser.id}}</span></h5>\n" +
    "                            <form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                                <input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "                                <div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                                    <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "                                <h5><a href=\"market/{{balanceLook}}\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-6\">\n" +
    "                            <h5>Reputation Lookup <br><span style=\"font-size:11px;color:gray\">0x{{currentUser.id}}</span></h5>\n" +
    "                            <form ng-click=\"lookupReputation()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                                <input ng-model=\"reputationLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "                                <div ng-click=\"lookupReputation()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                                    <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <div ng-show=\"reputationLookupValue !== undefined\">\n" +
    "                                <h5><a href=\"market/{{reputationLook}}\">{{reputationLook}}</a> | {{reputationLookupValue}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <!--TODO: MOBILE FILTER-->\n" +
    "    <div class=\"row\" ng-show=\"!isTutorial\">\n" +
    "        <div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Tags</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\" ng-if=\"sortedAssociationArray.length > 0\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Associations</b></span>\n" +
    "                    <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\" ng-if=\"locations.length > 0\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Locations</b></span>\n" +
    "                    <div ng-repeat=\"location in locations\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" style=\"margin-top:0px;\">\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"cre8Toggle()\">CRE8</button>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-show=\"activity.length == 0\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span style=\"color:gray\" >There's nothing here..</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;overflow:scroll;\">\n" +
    "                        <div>\n" +
    "                            <img ng-click=\"$event.stopPropagation()\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "\n" +
    "                            <!--TODO: DEPRECIATE-->\n" +
    "                            <!--ASSOCIATIONS-->\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.contentModel\" style=\"display:inline;font-weight:600\" href=\"content/{{item.contentModel}}\">content {{item.contentModel}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "                            <!--TODO-->\n" +
    "\n" +
    "\n" +
    "                            <a ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\" ng-click=\"$event.stopPropagation()\" >time {{item.time}}</a>\n" +
    "                            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "\n" +
    "                            <!--TODO: TOGGLE MENU-->\n" +
    "                            <div style=\"float:right;text-align:right\">\n" +
    "                                <!--<i class=\"fa fa-angle-down\"></i>-->\n" +
    "                                <!--<a>Tokens <i class=\"fa fa-qrcode\"></i></a>-->\n" +
    "                                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div style=\"margin-left:42px\">\n" +
    "                            <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <textarea froala=\"toolBarSettings\" ng-model=\"newContent.content\"></textarea>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='PROJECT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1 col-xs-2\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-11 col-xs-10\">\n" +
    "                                <p style=\"float:right;text-align:right\">\n" +
    "                                    <a  style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                                    <span ng-if=\"item.location\" style=\"color:gray\"></span>\n" +
    "                                </p>\n" +
    "                                <h3 style=\"margin-top:0px\"><a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.urlTitle}}\">{{item.title}}</a></h3>\n" +
    "                                <div style=\"overflow:scroll\">\n" +
    "                                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" ng-click=\"$event.stopPropagation()\"href=\"task/{{item.id}}\">{{item.title}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div>\n" +
    "                        <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                        <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div>\n" +
    "                            <div style=\"float:right;text-align:right\">\n" +
    "                                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                            </div>\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                            <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                        </div>\n" +
    "                        <p ng-show=\"item.task.tags > 0\" style=\"margin-left:42px\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.task.tags\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a>\n" +
    "                        </p>\n" +
    "                        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"createContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!createContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"false\" ng-if=\"activity.length > 0\" class=\"card\" ng-click=\"loadMore()\" style=\"text-align:center\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/templates/intro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/templates/intro.tpl.html",
    "<div class=\"intro\" style=\"\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-weight:bold;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">{{selectedIntro.title}}</text>\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video id=\"introVideo\" itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://s3-us-west-2.amazonaws.com/voetr/washington.mp4\" preload=\"auto\" autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <!--INTO-->\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <!--<h3>WE ARE ALL VALUABLE</h3>-->\n" +
    "                <h3>INFORMATION IS VALUABLE</h3>\n" +
    "                <!--SHARING CREATES VALUE-->\n" +
    "                <!--SHARING IS VALUABLE-->\n" +
    "                <!--\n" +
    "                CREATE IS EMPOWERMENT\n" +
    "                CREATE IS INCLUSIVITY\n" +
    "                CREATE IS UNITY\n" +
    "                -->\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">From imagination and intention to work and organization, sharing creates value.</p><!--sharing creates income; information is income.. -->\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Sharing reflects abundance. With inclusivity maximalism, you get what you give.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">We all benefit when you share with us.</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/about\">learn more</a>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"max-height:200px\" src=\"/images/loading.gif\">\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50 mobileHide\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div class=\"block\">\n" +
    "                    <div class=\"shape\">\n" +
    "                        <div class=\"cube outer\">\n" +
    "                            <div class=\"side left\"></div>\n" +
    "                            <div class=\"side right\"></div>\n" +
    "                            <div class=\"side top\"></div>\n" +
    "                            <div class=\"side bottom\"></div>\n" +
    "                            <div class=\"side front\"></div>\n" +
    "                            <div class=\"side back\"></div>\n" +
    "                            <div class=\"cube\">\n" +
    "                                <div class=\"side left\"></div>\n" +
    "                                <div class=\"side right\"></div>\n" +
    "                                <div class=\"side top\"></div>\n" +
    "                                <div class=\"side bottom\"></div>\n" +
    "                                <div class=\"side front\"></div>\n" +
    "                                <div class=\"side back\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3>BUILD AN EGALITARIAN WORLD</h3>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <!--EGLATARIAN TO US MEANS YOUR VOICE IS HEARD-->\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Everything has value. <!--Show us your worth.--> Tell us your Story, Create.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Share with us, what do you believe is valuable?</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/register\">Join Our Community</a>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <!--<h3>COORDINATE INTENTIONALLY</h3>\n" +
    "                <h5>Decentralized Peer Governance</h5>-->\n" +
    "\n" +
    "                <h3>INTENTIONALITY</h3>\n" +
    "                <h5>Coordination through Decentralized Peer Governance</h5>\n" +
    "\n" +
    "                <!--<p style=\"font-style:italic;margin:0px;color:gray\">Validation asserts earned reputation with group organization naturally flourishing.</p>-->\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Validation asserts earned reputation which naturally organizes group dynamics. Interoperable Organization Protocols give rise to diverse operant frameworks.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Human Validated Proof of Work is a voting mechanism weighted by context-specific reputation.</p>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div> \n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <h3>MULTIDIMENSIONALITY</h3>\n" +
    "                <!--<h5>Value is ranked by its dimension of connectivity. The Moment of Liquidity is Combinatorial.</h5>-->\n" +
    "                <h5>The Moment of Liquidity is Combinatorial</h5>\n" +
    "\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Multidimensionality & Gestalt Princples</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Tokenization & Pluralism in a Market Space</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Token Language Defined by An Interoperable Application Ecosystem</p>\n" +
    "                <!--<div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/market\">EXPLORE THE MARKET</a>-->\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3>TRANSPARENCY</h3>\n" +
    "                <h5>The Creation of Emergent Intelligence</h5>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">App specific interoperable validation protocols allow for value validation though Machiene Learning & Artificial Intelligence. Information and Intention create emergent intelligence in programatic value.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">The <a href=\"/transparency\">Decentralized Network</a> is you. Mobile peers support the network - striving to find congruence with human and machine consensus.</p>\n" +
    "                <!--<div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/transparency\">THE NETWORK</a>-->\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                \n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "                <img style=\"height:200px;\" src=\"images/dna.gif\">\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3>WE CREATE THE FUTURE TODAY</h3>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Worldwide and always expanding, help cocreate our shared vision.</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <h5><a href=\"/apps\">Application Ecosystem</a></h5>\n" +
    "                <h5><a href=\"/developers\">Developer Documentation</a></h5>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    <div ng-show=\"true\" class=\"container\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12\">\n" +
    "                <h3><b>Join Our Community</b></h3><hr>\n" +
    "                <div class=\"login-form\">\n" +
    "                    <form role=\"form\">\n" +
    "                        <div class=\"form-group\"><input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"><i class=\"fa fa-envelope\"></i></div>\n" +
    "                        <div class=\"form-group\"><input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\"><i class=\"fa fa-user\"></i></div>\n" +
    "                        <div class=\"form-group\"><input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\"><i class=\"fa fa-lock\"></i></div>\n" +
    "                        <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                        <br><br>\n" +
    "                        <div class=\"social-log\">\n" +
    "                            <a href=\"/login\"><h5 style=\"color: gray;font-style: italic;\">Already A Member?</h5></a>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"selfClear\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div ng-if=\"false\" class=\"row\">\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "            <div class=\"spacing-50\"></div>\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <h3>CRE8</h3>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">WHO WE ARE; WHAT WE DO; WHAT WE CREATE</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Inspiring Tasks, Member, & Projects</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Wanna Collab? Get Involved in your Local Community.</p>\n" +
    "                <div ng-if=\"false\" ng-repeat=\"item in projects.slice(0,5)\">\n" +
    "                    <div class=\"card col-md-6\" ng-click=\"\">\n" +
    "                        <div style=\"padding:16px;\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-1 col-xs-2\"><a href=\"/project/{{item.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{item.avatarUrl}}\"></a></div>\n" +
    "                                <div class=\"col-sm-11 col-xs-10\">\n" +
    "                                    <h3 style=\"margin-top:0px\"><a href=\"/project/{{item.urlTitle}}\">{{item.title}}</a></h3>\n" +
    "                                    <div style=\"overflow:scroll\"><span ng-bind-html=\"renderContent(item.description)\"></span></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div ng-show=\"false\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Tags</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Associations</b></span>\n" +
    "                    <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Locations</b></span>\n" +
    "                    <div ng-repeat=\"location in locations\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getLatLng()\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\">\n" +
    "                    <a ng-click=\"expandSort()\" href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a>\n" +
    "                    <div ng-if=\"sorting\" class=\"dropdown sort-dropdown\" style=\"float:right\">\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "                            <hr class=\"sort-hr\">\n" +
    "                            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;overflow:scroll\">\n" +
    "                        <div>\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                            <!--TODO: .. ASSOCIATIONS-->\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.contentModel\" style=\"display:inline;font-weight:600\" href=\"content/{{item.contentModel}}\">content {{item.contentModel}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\">time {{item.time}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                        \n" +
    "                            <div style=\"float:right;text-align:right\">\n" +
    "                                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "                        </div>\n" +
    "                        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <!--TODO: NESTED -->\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='PROJECT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1 col-xs-2\">\n" +
    "                                <a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-11 col-xs-10\">\n" +
    "                                <p style=\"float:right;text-align:right\">\n" +
    "                                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                                    <span ng-if=\"item.location\" style=\"color:gray\"><!--{{item.location.address}} <i class=\"fa fa-map-marker\"></i>--></span>\n" +
    "                                </p>\n" +
    "                                <h3 style=\"margin-top:0px\"><a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.urlTitle}}\">{{item.title}}</a></h3>\n" +
    "                                <div style=\"overflow:scroll\">\n" +
    "                                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" ng-click=\"$event.stopPropagation()\"href=\"task/{{item.id}}\">{{item.title}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\"> \n" +
    "\n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <p ng-click=\"$event.stopPropagation()\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                        <p ng-click=\"$event.stopPropagation()\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                        <a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <div>\n" +
    "\n" +
    "                            <div style=\"float:right;text-align:right\">\n" +
    "                                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                            <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                            \n" +
    "                        </div>\n" +
    "\n" +
    "                        <p ng-click=\"$event.stopPropagation()\" ng-show=\"item.task.tags > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"false\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("item/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.title}}</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();tokensToggle(item);\" class=\"fa fa-qrcode\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();actionToggle(item);\" class=\"fa fa-eye\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();tokensToggle(item);\" class=\"fa fa-tags\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();orderToggle(item);\" class=\"fas fa-heart\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();orderToggle(item);\" class=\"fa fa-shopping-cart\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();orderToggle(item);\" class=\"fas fa-share-alt\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();renderValidationToggle(item);\" class=\"fas fa-bezier-curve\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();tokensToggle(item);\" class=\"fas fa-coins\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();tokensToggle(item);\" class=\"fa fa-ellipsis-v\"></i>\n" +
    "                </div>\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline\" href=\"member/{{item.user.username}}\"><span style=\"font-weight:800\">{{item.user.username}}</span></a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <!--TODO: EMBEDED CONTENT-ASSOCIATED MODEL-->\n" +
    "                <!--TODO: VT PLUGIN..-->\n" +
    "		        <div><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<h4>{{item.amountSet}} <a href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h4>\n" +
    "			</div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            </div>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div style=\"row\">\n" +
    "        <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "            <li><a href=\"#\">Orders</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    \n" +
    "    <!--CONNECT PURCHASE TO ORDER FUILFUILMENT AND CONNECTIONG PROTOS > > >-->\n" +
    "    <!--IF LIQDUID OR NOT .. AKA IF SELL ORDER FOR TOKEN NFT ..-->\n" +
    "    <!--ORDER FUILFILMENT COMES FROM LINKED INFO IN ORDER-->\n" +
    "    <!--ADDRESS.. NAME PARAM-->\n" +
    "    <!--URCHASE NEEDS TO BE VERY.. EASY..-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Order</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--MARKET | TRAVERSAL-->\n" +
    "    <div class=\"row\" ng-if=\"item.identiferSet\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"\">\n" +
    "                    <h3>Liquidity</h3>\n" +
    "                    <div ng-repeat=\"input in inputVector\">\n" +
    "                        <div layout=\"\">\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{input.text}}</span></div>\n" +
    "                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"inputVectorWeight[$index]\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"{{input}}\"></md-slider>\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{inputVectorWeight}}</span></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h5>InputVector: <span ng-repeat=\"input in inputVector\"><a href=\"market/{{input}}\">{{input.text}}</a> </span>\n" +
    "                    <h5>Multidimensional Relation Object</h5>\n" +
    "                    <!--NEED TO DO HIGH DIMENSIONAL TRANING.. LEARNING SETS ARE REAL TRAVERSALS.. JUST DO INPUT OUTPUT VECTORS: BULK TRAIN--> \n" +
    "                    <h5>OutputVector: {{item.amountSet}} <span ng-repeat=\"output in outputVector\"><a href=\"market/{{output}}\">{{output.text}}</a> </span>\n" +
    "                    <form ng-submit=\"marketTraverse(tokens, outputVector)\">\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Input Vector\" ng-model=\"inputVector\"></tags-input>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Output Vector\" ng-model=\"outputVector\"></tags-input>\n" +
    "                    </form>\n" +
    "                    <!--TRAVERSAL PARAMETERS-->\n" +
    "                    <p ng-repeat=\"result in marketOutput\" style=\"color:gray;font-style:italic;font-size:10px\">\n" +
    "                        <span>[tokens] = {{result[0]}} <a href=\"market/{{result[1]}}\">{{result[1]}}</a></span>\n" +
    "                        <!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "                    </p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: LIST REACTIONS.. IE RATINGS IF GENERATOR-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-if=\"contentList.length == 0\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <p style=\"color:gray;font-style:italic\">There is nothing here...</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div> \n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Login</h1>\n" +
    "                <h5 style=\"color:white\">Welcome back!</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\" ng-model=\"newLogin.identifier\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\" ng-model=\"newLogin.password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" ng-click=\"login()\">Sign in</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\"><h5 style=\"color:gray;font-style:italic\">Not A Member Yet?</h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?,geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{token.string}}</h1>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "		<div class=\"card\">\n" +
    "			<form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "		    	<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		        <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\"><a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "		        </div>\n" +
    "		    </form>\n" +
    "		</div>\n" +
    "		<div ng-if=\"false\" class=\"card\">\n" +
    "			<nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "    	<div class=\"col-sm-4\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<!--PLURALIST POSTIONS ON A 'SINGLE' ASSET | [a, a+future+time, a+etc]-->\n" +
    "\n" +
    "		    <div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "\n" +
    "					<!--NG REPEAT | MULTIPLE CARDS-->\n" +
    "		    		<p><b><a href=\"token/{{token.string}}\">{{token.string}}</a></b></p>	\n" +
    "\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		    		<!--<p><b>Action</b></p>\n" +
    "		    		<p><a href=\"{{modelToken.model.toLowerCase()}}/{{modelToken.id}}\">{{modelToken.model.toUpperCase()}}</a></p>\n" +
    "					<div class=\"spacing-5\"></div>-->\n" +
    "\n" +
    "					<p><b>Information</b></p>\n" +
    "\n" +
    "					<p style=\"font-style:italic;color:gray\">Associated Action: <a href=\"{{modelToken.model.toLowerCase()}}/{{modelToken.id}}\">{{modelToken.model}}</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray\">In Circulation: {{token.information.inCirculation}}</p>\n" +
    "					<p style=\"font-style:italic;color:gray\">Markets: {{markets.length}}</p>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "					<!--FUTURES, OPTIONS, PROJECT, WORK, CONTENT, ETC-->\n" +
    "		    		<p><b>Protocols <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<p style=\"font-style:italic;color:gray\">{{markets.protocols}}</p>\n" +
    "		    		<!--<p>\n" +
    "		    			<span ng-repeat=\"protocol in token.protocols\"><a href=\"protocol/{{protocol}}\">{{protocol}}</a>,</span>\n" +
    "						<a href=\"protocol/manifold\">MANIFOLD</a>,\n" +
    "						<a href=\"protocol/manifold\">SPONSOR</a>,\n" +
    "		    			<a href=\"protocol/future\">FUTURE</a>,\n" +
    "						<a href=\"protocol/option\">OPTION</a>\n" +
    "		    		</p>\n" +
    "		    		-->\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "					<!--FUNCTIONS TO ACT ON THE TOKEN BALANCE-->\n" +
    "		    		<p><b>Logic <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<p style=\"font-style:italic;color:gray\">Transferrable: {{token.logic.transferrable}}</p>\n" +
    "		    		<p style=\"font-style:italic;color:gray\">Mint: {{token.logic.mint}}</p>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		    		<p><b>Manifold Actions <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<!--<p style=\"font-style:italic;color:gray\">+SPONSOR</p>\n" +
    "		    		<p style=\"font-style:italic;color:gray\">+FUTURE+TIME</p>\n" +
    "		    		<p style=\"font-style:italic;color:gray\">+OPTION+TIME</p>-->\n" +
    "\n" +
    "	    		</div>\n" +
    "	    	</div>	\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-md-8\" style=\"max-height:110vh;overflow:scroll;padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "			<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "	            <!--<li><a href=\"#\" ng-click=\"selectTab('CONTENT')\">Content</a></li>-->\n" +
    "				<li><a href=\"#\" ng-click=\"selectTab('MARKET')\">Markets</a></li>\n" +
    "	            <li><a href=\"#\" ng-click=\"selectTab('MANIFOLD')\">Manifold Actions</a></li>\n" +
    "	            <li><a href=\"#\" ng-click=\"selectTab('ANALYSIS')\">Market Analysis</a></li>\n" +
    "	        </ul>\n" +
    "			\n" +
    "			<!--MARKETS-->\n" +
    "			<div ng-show=\"selectedTab=='MARKET'\">\n" +
    "		        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Market Order</button></div>\n" +
    "			    <div class=\"card\" ng-repeat=\"market in markets\" ng-click=\"renderToggle(market)\">\n" +
    "			    	<div style=\"padding:16px;\">\n" +
    "						<div class=\"row\">\n" +
    "				    		<div class=\"col-sm-6\">\n" +
    "				    			<a ng-click=\"$event.stopPropagation();\" href=\"market/{{stateParams.id}}/{{market.string}}\">\n" +
    "				    				<h4>{{market.string}}</h4>\n" +
    "				    			</a>\n" +
    "				    		</div>\n" +
    "							<div class=\"col-sm-6\" style=\"text-align:right\">\n" +
    "								<span style=\"text-align:right;\">{{market.info.rate}}</span>\n" +
    "				    		</div>\n" +
    "						</div>\n" +
    "						<div class=\"row\">\n" +
    "				    		<div class=\"col-sm-12\">\n" +
    "				    			<p style=\"color:gray;font-size:10px\">{{market.info.dailyChange}} 24/hr Change</p>\n" +
    "								<p style=\"color:gray;font-size:10px\">{{market.info.marketDepth}} {{stateParams.id}} Depth</p>\n" +
    "							</div>\n" +
    "				    	</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--CONTENT-->\n" +
    "			<div ng-show=\"selectedTab=='CONTENT'\">\n" +
    "		        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Market Content</button></div>\n" +
    "				<div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "				    <div style=\"padding:16px\">\n" +
    "				        <div>\n" +
    "				            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "				            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "				            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "				        </div> \n" +
    "				        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "				    </div>\n" +
    "				    <div class=\"\" class=\"card-footer\">\n" +
    "				        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "				        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.,inus}} dislike </a>\n" +
    "				        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				    </div>\n" +
    "				    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "				        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "				            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				        </form>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--MANIFOLD-->\n" +
    "			<div ng-show=\"selectedTab=='MANIFOLD'\">\n" +
    "				<div class=\"card\" ng-repeat=\"item in manifolds\">\n" +
    "				    <div style=\"padding:16px\">\n" +
    "				    	<h4>{{item.title}}</h4>\n" +
    "				    	<p>{{item.manifolds}}</p>\n" +
    "				    </div> \n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--ANALYSIS-->\n" +
    "			<div ng-show=\"selectedTab=='ANALYSIS'\">\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px\">\n" +
    "						<h4>Market Analysis</h4>\n" +
    "						<p>Size: {{markets.length}}</p>\n" +
    "						<p>Rank: {{stateParams.id.split(',').length}}\n" +
    "						<p>Highest Dimension: 7</p>\n" +
    "						<p>Nodes: {{graphDataPower.nodes.length}}, Connections: {{graphDataPower.links.length}}</p>\n" +
    "						<nvd3 options=\"graphOptions\" data=\"graphDataPower\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "		    		</div>\n" +
    "		    	</div>\n" +
    "		    	<div class=\"card\">\n" +
    "					<div style=\"padding:16px\">\n" +
    "						<h4>Lattice Analysis</h4>\n" +
    "			    		<p>Computed Lattice Neighborhood</p>\n" +
    "			    		<!--COMBINITORIALS SERVED FIRST-->\n" +
    "			    		<!--DEPTH OF THE COMBINITORIAL SPACES-->\n" +
    "			    		<!--COMBINITORIAL & MANIFOLD MAPPING SPACE(S)-->\n" +
    "						<!--VALUE VECTOR-->\n" +
    "						<!--1ST DEGREE-->\n" +
    "					    <!--VALUE MATRIX-->\n" +
    "						<!--VALUE TENSOR-->\n" +
    "						<!--VALUE TENSOR NETWORK-->\n" +
    "					</div>\n" +
    "		    	</div>\n" +
    "			    <!--<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h4>Value Vector</h4>\n" +
    "						<highchart config=\"chartMap\"></highchart>\n" +
    "					</div>\n" +
    "				</div>-->\n" +
    "			</div>\n" +
    "\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("marketPair/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPair/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?scenic')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	        	<div class=\"row\">\n" +
    "	            	<div class=\"col-xs-10\">\n" +
    "			            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"market/{{market}}\">{{market}}</a> | <a style=\"color:white\"  href=\"market/{{market1}}\">{{market1}}</a></h1>\n" +
    "			        	<h5 style=\"color:white\">\n" +
    "			        		<span style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "			        		<span style=\"color:green\">{{percentChange.toFixed(2)}}%</span> Daily Change | \n" +
    "			        		<span style=\"color:red\">{{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}}</span> Daily Trade Volume | \n" +
    "			        		<span>{{marketDepth.toFixed(2)}}</span> Total Market Depth\n" +
    "			        	</h5>\n" +
    "			            <h5 style=\"color:white\">\n" +
    "			            	Last Trade Price: <span style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "			            	Highest Bid <span style=\"color:white\">{{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}}</span> | \n" +
    "			            	Lowest Ask <span style=\"color:white\">{{bidAskChart.series[1].data[0][0].toFixed(2)}}</span>\n" +
    "			            </h5>\n" +
    "				    </div>\n" +
    "					<div class=\"col-xs-2\" style=\"padding:16px;text-align:right\">\n" +
    "						<a style=\"color:white\" href=\"market/{{market1}}/{{market}}\"><i class=\"fa fa-refresh\"></i></a>\n" +
    "					</div>\n" +
    "	        	</div>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li ng-click=\"\"><a href=\"#\">Manifold Actions</a></li>\n" +
    "            <li ng-click=\"\"><a href=\"#\">Trade Postions</a></li>\n" +
    "        </ul>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-show=\"pluralistic\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Pluralistic Market</h2>\n" +
    "				<h4>Value Vector x Value Vector</h5>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Order Book</h2>\n" +
    "				<!--<h5>Order Paths and connections between the two markets. Computed Immutable Strucutre. Lattice / Graph.</h5>-->\n" +
    "				<highchart config=\"bidAskChart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: ARRAY-->\n" +
    "	<!--combinatorial market string-->\n" +
    "	<!--MANIFOLDS ARE NESTED. . . -> INSTRUMENTS IN PROTOCOL.. SPONSOR, DERIVITATIVES-->\n" +
    "	<!--option tokens string inferance+time+option-->\n" +
    "	<!--\n" +
    "	Market Orders;@ price | fok; ioc; onbook;\n" +
    "	Limit Orders; sell no lower than, buy no higher than price\n" +
    "	array based; so multiD stops.. a gradiation in dimesnions\n" +
    "	-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Market Order</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--TODO: Partially Filled Orders | TRADES-->\n" +
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "					<!--<p>Type</p>-->\n" +
    "	            	<div class=\"row\">\n" +
    "		            	<div class=\"col-md-2\">\n" +
    "		            		<a style=\"font-weight:bold\" href=\"market/{{order.identiferSet.join(',')}}\">{{order.identiferSet.join(',')}}</a><br><br>\n" +
    "		                	<span style=\"\" ng-repeat=\"item in order.amountSet track by $index\">\n" +
    "								{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a><br>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "		            	<div class=\"col-md-1\"><i class=\"fa fa-exchange\"></i></div>\n" +
    "						<!--<span> | </span>-->\n" +
    "		            	<div class=\"col-md-2\">\n" +
    "							<a style=\"font-weight:bold\" href=\"market/{{order.identiferSet1.join(',')}}\">{{order.identiferSet1.join(',')}}</a><br><br>\n" +
    "							<span style=\"\" ng-repeat=\"item in order.amountSet1 track by $index\">\n" +
    "								{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a><br>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.reactions.plus}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.reactions.minus}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("marketPlace/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPlace/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.angular-google-map-container{height: 200px;}\n" +
    "	.card tags-input .tags.focused{box-shadow:0 0 0px 0px rgba(255, 255, 255, 0);-webkit-box-shadow:0 0 0px 0px rgba(255, 255, 255, 0);}\n" +
    "	.card tags-input .host{margin:0px;border:0px;}\n" +
    "</style>\n" +
    "\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?{{searchQueryString}}')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Marketplace</h1>\n" +
    "	            <h5 style=\"color:white\" ng-if=\"selectedTag!=''\">{{selectedTag}}</h5>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<!--FILTER BY CURRENCIES / PRICES I WANT TO PAY BASED ON MM.. RECURSIVE LIQUIDITY TRACE-->\n" +
    "	<!--\n" +
    "	TODO: Better Form.. add [] + \n" +
    "	<input placeholder=\"identiferSet\" type=\"text\" ng-model=\"newItem.ArrayManifolds\" class=\"form-control\"> [] ill talk this or this or this and this\n" +
    "	[], [], [[],[]]\n" +
    "	-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			 <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<span><b>Tags</b></span>\n" +
    "	                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		    <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <span><b>Associations</b></span>\n" +
    "	                <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(association.element)\">{{association.element}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <span><b>Locations</b></span>\n" +
    "	                <div ng-repeat=\"location in locations\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(location)\">{{location}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <span><b>Assets</b></span>\n" +
    "	                <div ng-repeat=\"asset in sortedAssetArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(asset.element)\">{{asset.element}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER',filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "\n" +
    "		    <div class=\"card\">\n" +
    "		        <form style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "		                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "		                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		                </a>\n" +
    "		            </div>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "\n" +
    "			<div class=\"card\">\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"itemToggle()\">+ Item</button>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-repeat=\"item in items\">\n" +
    "		        <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "		        	<div ng-click=\"$event.stopPropagation();cardDetailToggle(item)\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "		                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "		                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "		                        <div class=\"container\">\n" +
    "		                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"item/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "		                        </div>\n" +
    "		                    </div>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		            <div style=\"padding:16px\">\n" +
    "\n" +
    "                        <div style=\"float:right;padding-left:5px;\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div>\n" +
    "\n" +
    "						<p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "	                	<div style=\"\">\n" +
    "							<span style=\"display:inline;height:100%\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "						</div>\n" +
    "                    	<h5>{{item.amountSet}} <span ng-repeat=\"asset in item.identiferSet\"><a ng-click=\"$event.stopPropagation();\" href=\"market/{{asset}}\">{{asset}}</a></h5>\n" +
    "		            </div>\n" +
    "		            <div class=\"card-footer\">\n" +
    "		                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "		                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "		                <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		                <a class=\"pull-right\" style=\"padding:0px;\" href=\"item/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		            </div>\n" +
    "		            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "			            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "			                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "			                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "			            </form>\n" +
    "			        </div>\n" +
    "		        </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-show=\"true\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?,geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Markets</h1>\n" +
    "	            <h5 style=\"color:white\">{{tokensInCirculation}} tokens in circulation </h5>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Connection <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "	    <div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	    <div class=\"card\" ng-if=\"false\">\n" +
    "			<nvd3 options=\"graphOptions\" data=\"graphDataPower\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "	    </div>\n" +
    "	    <div ng-repeat=\"token in tokens track by $index\" style=\"padding:0px\">\n" +
    "	    	<div class=\"card\" ng-click=\"cardDetailToggle(token)\">\n" +
    "			    <div style=\"padding:16px;\">\n" +
    "			    	<a ng-click=\"$event.stopPropagation();\" style=\"white-space: nowrap;\" href=\"market/{{token.string}}\"><h4>{{token.string}}</h4></a>\n" +
    "			    	<p style=\"white-space: nowrap;color:gray\">{{token.string}} markets</p>\n" +
    "			    	<!--\n" +
    "			    	<a style=\"white-space: nowrap;\" href=\"market/{{market.string}}\"><h4>{{market.string}}</h4></a>\n" +
    "			    	<p style=\"white-space: nowrap;color:gray\">{{market.string}} markets</p>\n" +
    "			    	-->\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	    <div ng-show=\"true\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "	        <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<style>\n" +
    "	.avatar{border-radius: 10em}\n" +
    "</style>\n" +
    "\n" +
    "<div ui-view=\"member\">\n" +
    "	<div class=\"container\" style=\"padding:0px\">\n" +
    "		<div class=\"card\" ng-click=\"subNavToggle()\">\n" +
    "			<div style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "				<div class=\"spacing-100\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"pull-left\"><a ng-click=\"$event.stopPropagation()\" href=\"member/{{member.username}}\"><img class=\"avatar\" err-src=\"/images/avatar.png\" ng-src=\"{{member.avatarUrl}}\"/></a></div>\n" +
    "				<div style=\"text-align:right\" class=\"member-tab-container\">\n" +
    "					<ul class=\"member-tabs\">\n" +
    "						<!--\n" +
    "						<li>\n" +
    "							<form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "				                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "				                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "				                    <a href=\"#\" role=\"button\">\n" +
    "				                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "				                    </a>\n" +
    "				                </div>\n" +
    "				            </form>\n" +
    "			        	</li>\n" +
    "			        	-->\n" +
    "						<li ng-show=\"currentUser.id != member.id\">\n" +
    "							<a ng-show=\"!isFollowing\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow()\">Follow</a>\n" +
    "							<a ng-show=\"isFollowing\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();unfollow()\">UnFollow</a>\n" +
    "						</li>\n" +
    "						<li ng-show=\"currentUser.id == member.id\"><a class=\"btn btn-default\" href=\"account\">Edit Profile</a></li>\n" +
    "						<li><a style=\"color:black\" href=\"#\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<md-divider style=\"color:gray\"></md-divider>\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"\">\n" +
    "					<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "						<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "						<h5><a ng-click=\"$event.stopPropagation()\" href=\"member/{{member.username}}\">@{{member.username}}</a></h5>\n" +
    "						<p><b>Total Reputation</b>: {{member.totalWork}}</p>\n" +
    "					</div>\n" +
    "					<!--TODO-->\n" +
    "					<div class=\"pull-right\" style=\"margin-right:15px;margin-top:10px;\">\n" +
    "						<span style=\"color:gray;font-size:10px;float:right\">0x{{member.id}}</span>\n" +
    "						<br>\n" +
    "						<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\">\n" +
    "						<a style=\"padding:10px 15px;color:rgb(125,125,125)\"class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle(member)\">Send Tokens</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container\">\n" +
    "		<div ui-view=\"memberAbout\"></div>\n" +
    "		<div ui-view=\"memberActions\"></div>\n" +
    "		<div ui-view=\"memberActivity\"></div>\n" +
    "		<div ui-view=\"memberAssets\"></div>\n" +
    "		<div ui-view=\"memberContent\"></div>\n" +
    "		<div ui-view=\"memberItems\"></div>\n" +
    "		<div ui-view=\"memberFollowers\"></div>\n" +
    "		<div ui-view=\"memberFollowing\"></div>\n" +
    "		<div ui-view=\"memberLedger\"></div>\n" +
    "		<div ui-view=\"memberPositions\"></div>\n" +
    "		<div ui-view=\"memberProjects\"></div>\n" +
    "		<div ui-view=\"memberTasks\"></div>\n" +
    "		<div ui-view=\"memberTime\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("member/templates/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/about.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "			\n" +
    "			<div ng-bind-html=\"renderContent(member.description)\"></div>\n" +
    "           	\n" +
    "           	<!--<div>\n" +
    "				<p><b>Avatar</b></p>\n" +
    "	            <img style=\"height:50px;width:50px\" src=\"{{member.avatarUrl}}\">\n" +
    "	            <p>{{member.avatarUrl}}</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <div>\n" +
    "	            <p><b>Email</b></p>\n" +
    "	            <p>{{member.email}}</p>\n" +
    "	            <p><b>First Name</b></p>\n" +
    "	            <p>{{member.firstName}}</p>\n" +
    "	            <p><b>Last Name</b></p>\n" +
    "	            <p>{{member.lastName}}</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <div>\n" +
    "	            <p><b>Wallet Address</b></p>\n" +
    "	            <p><a ng-click=\"transactionToggle()\"><img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\"> {{member.id}}</a></p>\n" +
    "            </div>\n" +
    "\n" +
    "	        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <div>\n" +
    "                <p><b>Location</b></p>\n" +
    "                <p><b>Latitude</b>: {{project.location.lat}}, <b>Longitude</b>: {{project.location.lng}}</p>\n" +
    "                <p><b>Address</b>: {{project.location.address}}</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <div>\n" +
    "            	<p><b>Manifolds</b></p> \n" +
    "            	<p>'<a href=\"market/project/project.urlTitle.toUpperCase()\">{{member.username.toUpperCase()}}+</a>, <a href=\"market/project/project.urlTitle.toUpperCase()+TASK+\">{{member.username.toUpperCase()}}+TASK+</a>, <a href=\"market/project/project.urlTitle.toUpperCase()+TIME+\">{{member.username.toUpperCase()}}+TIME+</a>'</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>-->\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("member/templates/actions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/actions.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"actionToggle()\">+ Action</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <!--CONSUMPTION; human tasks.. -->\n" +
    "        <!--VERBS-->\n" +
    "        <!--CREATION, REACTION, VALIDATION, JOIN?, -->\n" +
    "        <!--LOCATION IS ON TIME-->\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "            <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "\n" +
    "                <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "\n" +
    "                        <!--TODO: PARENT TYPES-->\n" +
    "                        <!--DEPRECIATE-->\n" +
    "                        <div ng-click=\"$event.stopPropagation()\" style=\"display:inline;\" ng-show=\"item.profile != item.user.id && item.profile != member.id\">\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                            <a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                            <a ng-show=\"item.contentModel\" style=\"display:inline;font-weight:600\" href=\"content/{{item.contentModel}}\">content {{item.contentModel}}</a>\n" +
    "                            <a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile.username}}\"><span ng-show=\"item.profile.username\">{{item.profile.username}}</span><span ng-show=\"!item.profile.username\">profile {{item.profile}}</span></a>\n" +
    "                            <a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "                            <a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "                            <a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "                            <a ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\">time {{item.time}}</a>\n" +
    "                        </div>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"margin-left:42px\">\n" +
    "                        <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"newContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='ORDER'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                                    <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "                                </span>\n" +
    "                                <br>\n" +
    "                                <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                                    <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "                                </span>\n" +
    "                                <h5 style=\"color:white\"><span style=\"font-size:10px\">{{item.type}}</span></h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>  \n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-2\">\n" +
    "                            <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                                <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-1\"><i class=\"fa fa-exchange\"></i></div>\n" +
    "                        <div class=\"col-xs-2\">\n" +
    "                            <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                                <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "                            </span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>        \n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                    <div ng-click=\"$event.stopPropagation()\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                        <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p ng-click=\"$event.stopPropagation()\" ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                    \n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"newContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TRANSACTION'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.from.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.from.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                        <i class=\"fa fa-arrow-right\"></i>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.to.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.to.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    \n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                    \n" +
    "                    <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "\n" +
    "                    <p>{{item.content}}</p>\n" +
    "                    <p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> | {{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "                    <a href=\"transaction/{{item.id}}\"></a>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>");
}]);

angular.module("member/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/assets.tpl.html",
    "<!--\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li><a href=\"member/{{member.username}}/assets\">Assets</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
    "	</div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "     <div class=\"card\">\n" +
    "        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                <a href=\"#\" role=\"button\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-6\">\n" +
    "					<h5>Asset Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "			   		<form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "			        	<input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "			        	<div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "			                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "						</div>\n" +
    "			    	</form>\n" +
    "			    	<div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "			    		<h5><a href=\"market/{{balanceLook}}\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "			    	</div>\n" +
    "			    </div>\n" +
    "			    <div class=\"col-sm-6\">\n" +
    "					<h5>Reputation Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span> </h5>\n" +
    "			   		<form ng-click=\"lookupReputation()\" style=\"display:flex;flex-direction:row;\">\n" +
    "			        	<input ng-model=\"reputationLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "			        	<div ng-click=\"lookupReputation()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "			                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "						</div>\n" +
    "			    	</form>\n" +
    "			    	<div ng-show=\"reputationLookupValue !== undefined\">\n" +
    "			    		<h5><a href=\"market/{{reputationLook}}\">{{reputationLook}}</a> | {{reputationLookupValue}}</h5>\n" +
    "			    	</div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	   	</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h5>Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "	   		<form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	        	<input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "	        	<div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "				</div>\n" +
    "	    	</form>\n" +
    "	    	<div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "	    		<h5><a href=\"market/{{balanceLook}}\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "	    		<!--FOUND TOKEN MODEL.. INFORMATION IE REP OR-->\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "\n" +
    "			<!--\n" +
    "			<div>\n" +
    "				<h3>Reputation</h3>\n" +
    "				<highchart config=\"reputationColumn\"></highchart>\n" +
    "			</div>\n" +
    "			-->\n" +
    "\n" +
    "			<div>\n" +
    "				<h3>Balance</h3>\n" +
    "				<highchart config=\"balanceColumn\"></highchart>\n" +
    "				<highchart config=\"balancePie\"></highchart>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>	\n" +
    "");
}]);

angular.module("member/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/content.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"contentList.length == 0\">\n" +
    "        <!--IF MEMBER-->\n" +
    "        <!--<div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>-->\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Locations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--IF MEMBER-->\n" +
    "        <!--<div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>-->\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"display:inline;\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <a style=\"font-weight:700\"  href=\"member/{{item.user.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.user.username}}\n" +
    "                        </a>\n" +
    "                    </p>\n" +
    "\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form style=\"cursor:text;\" role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <div style=\"\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/templates/followers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/followers.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in followers\">\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.follower.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.follower.username}}\"><img ng-src=\"{{member.follower.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "		        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.follower.username}}\">{{member.follower.username}}</a></h4>\n" +
    "		        <p style=\"font-size:13px;\"><a href=\"/member/{{member.follower.username}}/projects\">{{member.follower.projectCount || 0}} Projects</a> | <a href=\"/member/{{member.follower.username}}/followers\">{{member.follower.followerCount || 0}} Followers</a> | <a href=\"/member/{{member.follower.username}}/following\">{{member.follower.followingCount || 0}} Following</a>\n" +
    "		        <p style=\"color:gray\">Total Reputation | {{member.followed.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">{{member.followed.status}} Offline</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in following\">\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.followed.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.followed.username}}\"><img ng-src=\"{{member.followed.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "		        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.followed.username}}\">{{member.followed.username}}</a></h4>\n" +
    "		        <p style=\"font-size:13px;\"><a href=\"/member/{{member.followed.username}}/projects\">{{member.followed.projectCount || 0}} Projects</a> | <a href=\"/member/{{member.followed.username}}/followers\">{{member.followed.followerCount || 0}} Followers</a> | <a href=\"/member/{{member.followed.username}}/following\">{{member.followed.followingCount || 0}} Following</a>\n" +
    "		        <p style=\"color:gray\">Total Reputation | {{member.followed.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">{{member.followed.status}} Offline</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/items.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/items.tpl.html",
    "<div class=\"row\" ng-show=\"items.length == 0\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"items.length > 0\">\n" +
    "\n" +
    "    <div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedAssociationArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Locations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedLocationsArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"currentUser.id == member.id\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"itemToggle()\">+ Item</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in items\">\n" +
    "            <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.title}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "                    <p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "                    <div>\n" +
    "                        <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                    </div>  \n" +
    "                    <h5>{{item.amountSet}} <a ng-click=\"$event.stopPropagation()\" href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h5>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a class=\"pull-right\" style=\"padding:0px;\" href=\"item/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" clas=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/ledger.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Assets</b></span>\n" +
    "	            <div ng-repeat=\"asset in sortedTransactionAssets\">\n" +
    "                    <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"association in sortedTransactionAssociations\">\n" +
    "                    <a href=\"#\" ng-click=\"selectAssociation(association.element)\">{{association.obj.username || association.obj.title}}</a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTransactionTags\">\n" +
    "                    <a href=\"#\" ng-click=\"selectTag(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "		<!--\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li><a href=\"member/{{member.username}}/assets\">Assets</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"member/{{member.username}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
    "\n" +
    "	    <div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "		-->\n" +
    "\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li ng-click=\"selectOverview()\"><a href=\"\">Overview</a></li>\n" +
    "			<li ng-click=\"selectExpense()\"><a href=\"\">Expense</a></li>\n" +
    "			<li ng-click=\"selectRevenue()\"><a href=\"\">Revenue</a></li>\n" +
    "\n" +
    "			<!--TODO-->\n" +
    "			<li style=\"float:right\">\n" +
    "				<a ng-click=\"filterToggle('LEDGER')\" href=\"#\">\n" +
    "					{{assetSet[0].element}}\n" +
    "					<!--<span ng-repeat=\"asset in assetSet\">{{asset.element}}</span>-->\n" +
    "					<i class=\"fa fa-question-circle\"></i>\n" +
    "				</a>\n" +
    "			</li>\n" +
    "\n" +
    "		</ul>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				\n" +
    "				<div class=\"row\">\n" +
    "					<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-xs-6\">\n" +
    "						<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker style=\"display:inline\" ng-model=\"startDate\" md-placeholder=\"Start date\"></md-datepicker></div>\n" +
    "	      				<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\"></md-datepicker></div>\n" +
    "					</div>\n" +
    "\n" +
    "					<!--TODO-->\n" +
    "					<div style=\"text-align:right;\" class=\"col-xs-6\">\n" +
    "						<h5>{{sumTransactions[sumTransactions.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Balance</h5>\n" +
    "						<h5>{{sumTo[sumTo.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Revenue</h5>\n" +
    "						<h5>{{sumFrom[sumFrom.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Expense</h5>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div ng-if=\"selectedState == 'OVERVIEW'\"><highchart config=\"chart\"></highchart></div>\n" +
    "					<div ng-if=\"selectedState == 'EXPENSE' || selectedState == 'REVENUE'\"><highchart config=\"tagChart\"></highchart></div>\n" +
    "					<div ng-if=\"selectedState == 'EXPENSE' || selectedState == 'REVENUE'\"><highchart config=\"assetChart\"></highchart></div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"pie\"></highchart>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "				<!--TODO-->\n" +
    "				<!--\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div style=\"text-align:right;\" class=\"col-xs-6\">\n" +
    "						<h5>{{sumTransactions[sumTransactions.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Balance</h5>\n" +
    "						<h5>{{sumTo[sumTo.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Revenue</h5>\n" +
    "						<h5>{{sumFrom[sumFrom.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Expense</h5>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				-->\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle(member)\">+ Transaction</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\" ng-repeat=\"item in transactions\" ng-click=\"cardDetailToggle(item)\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                </div>  \n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"item.from.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.from.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"item.from.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.from.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                    <i class=\"fa fa-arrow-right\"></i>\n" +
    "                </div>\n" +
    "				<div style=\"display:inline\">\n" +
    "                    <span ng-if=\"item.to.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.to.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"item.to.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.to.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "\n" +
    "				<span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation()\"  href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "				<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "				<p>{{item.content}}</p>\n" +
    "				<p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> | {{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "				<a ng-click=\"$event.stopPropagation()\" href=\"transaction/{{item.id}}\"></a>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "	            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "	                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "	            </form>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Base Markets</b></span>\n" +
    "	            <div ng-repeat=\"market in baseMarkets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\">{{market.text}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Markets</b></span>\n" +
    "	            <div ng-repeat=\"market in markets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\">{{market.text}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "		    <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "		    	<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		        <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "		            <a href=\"#\" role=\"button\">\n" +
    "		                <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		            </a>\n" +
    "		        </div>\n" +
    "		    </form>\n" +
    "		</div>\n" +
    "		<div ng-if=\"currentUser.id == member.id\" class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Order</button>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "		 	<div style=\"background:url('https://source.unsplash.com/1600x900/?code,finance')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Value Map</h1>\n" +
    "                        <p style=\"color:white;\">Your Personal Value</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">				\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "	    <div ng-repeat=\"item in orders\">\n" +
    "	        <div class=\"card\" ng-click=\"renderCardDetail(item)\">\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?')\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div class=\"container\">\n" +
    "	                            <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "	                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "	                            </span>\n" +
    "	                            <br>\n" +
    "	                            <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "	                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "	                            </span>\n" +
    "	                            <h5 style=\"color:white\"><span style=\"font-size:10px\">{{item.type}}</span></h5>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	            <div style=\"padding:16px\">\n" +
    "	            	<div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>  \n" +
    "                    <div class=\"row\">\n" +
    "	                    <div class=\"col-xs-2\">\n" +
    "	                        <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "	                            <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "	                        </span>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-xs-1\"><i class=\"fa fa-exchange\"></i></div>\n" +
    "	                    <div class=\"col-xs-2\">\n" +
    "	                        <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "	                            <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "	                        </span>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "	                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "	                <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>	");
}]);

angular.module("member/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/projects.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"project in projects\">\n" +
    "		<div class=\"member-card\" ng-click=\"\">\n" +
    "			<div class=\"member-card-image\" style=\"background-color:black\">\n" +
    "		        <a href=\"project/{{project.project.title}}\"><img ng-src=\"{{project.project.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a href=\"project/{{project.project.urlTitle}}\">{{project.project.title}}</a></h4>\n" +
    "		        <p style=\"color:gray\">Member | {{project.user.reputation[project.project.title] || 0}}</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/tasks.tpl.html",
    "<div class=\"row\" ng-show=\"tasks.length == 0\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"tasks.length > 0\">\n" +
    "\n" +
    "	<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "    	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "	    <div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "		<div class=\"card\">\n" +
    "	        <button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button>\n" +
    "	    </div>\n" +
    "		<div ng-repeat=\"item in tasks\">\n" +
    "			<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.title}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><span style=\"color:gray\"></span><i class=\"fas fa-bezier-curve\"></i></a>\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>  \n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "					<a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "					<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"item/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "		                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/time.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"card\" ng-if=\"currentUser.id == member.id\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"timeToggle()\">+ Time</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\" ng-if=\"time.length == 0\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <p style=\"color:gray\">There's nothing here...</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\" ng-if=\"time.length > 0\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"item in time\" ng-if=\"time.length > 0\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.amount}}</h1>\n" +
    "                            <h5 style=\"text-align:left;color:rgba(255,255,255,0.9);\">{{item.startTime | date:\"h:mma | MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma | MM/dd/yyyy\"}}</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                </div>  \n" +
    "				<a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		        <form style=\"cursor:text;\" role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "		            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("members/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("members/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6\"><h1>Members</h1></div>\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                            <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                                <h4 style=\"text-align:right;margin-top:20px\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "                            </a>\n" +
    "                            <ul class=\"dropdown-menu\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('totalWork DESC')\"><h5>Total Reputation</h5></a></li>\n" +
    "                                <hr class=\"sort-hr\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Joined</h5></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a  href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <highchart config=\"totalMap\"></highchart>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-lg-4 col-sm-6\" ng-repeat=\"item in members\" style=\"padding-left:10px;padding-right:10px;\">\n" +
    "\n" +
    "            <div class=\"member-card\" style=\"margin-bottom:10px\" ng-click=\"renderReputationToggle(item)\">\n" +
    "                <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.username}}\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "                    \n" +
    "                    <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "                    \n" +
    "                    <p style=\"font-size:11px;\" ng-click=\"$event.stopPropagation()\"><a href=\"/member/{{item.username}}/projects\">{{item.projectCount || 0}} Projects</a> | <a href=\"/member/{{item.username}}/followers\">{{item.followerCount || 0}} Followers</a> | <a href=\"/member/{{item.username}}/following\">{{item.followingCount || 0}} Following</a>\n" +
    "                    \n" +
    "                    <p style=\"color:gray\">Total Reputation | {{item.totalWork || 0}}</p>\n" +
    "                    <p style=\"color:gray\">{{currentUser.status}} <i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Offline</p>\n" +
    "                    \n" +
    "                    <a ng-show=\"!item.isFollowing\" style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(item)\">Follow</button></a>\n" +
    "                    <a ng-show=\"item.isFollowing\" style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(item)\">Unfollow</button></a>\n" +
    "                    <a style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle(item)\">Send Tokens</a>\n" +
    "                    <img ng-click=\"$event.stopPropagation();transactionToggle(item)\" style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{item.id}}\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div ng-click=\"loadMore()\" class=\"container\" style=\"text-align:center\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<!--BOTTOM SHEET EXPLORE ESP MOBILE... card detail.. etc - share. ux pattern-->\n" +
    "<style>\n" +
    ".bottom{\n" +
    "    //top: auto;\n" +
    "    //left: 0;\n" +
    "    //right: 0;\n" +
    "    //bottom: 0;\n" +
    "    //transform: translate3d(0,100%,0);\n" +
    "}\n" +
    "</style>\n" +
    "<div ng-controller=\"NavCtrl\">\n" +
    "\n" +
    "    <!--TODO: NG-IF-->\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"action\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newContent\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Action</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Create action.. <a ng-click=\"informationToggle('CREATECONTENT')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                    <h5>Action</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Action\" ng-model=\"newContent.action\" class=\"form-control\">\n" +
    "                    <h5>Amount</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Amount\" ng-model=\"newContent.amount\" class=\"form-control\">\n" +
    "                    <h5>Accociated Models (Item)</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Item\" ng-model=\"newContent.tags\">\n" +
    "                        <auto-complete source=\"loadItems($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <!--contentDetail, memberDetail, orderDetail, itemDetail, ... --> \n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"cardDetail\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Detail</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <h4 ng-click=\"renderToggle(item)\" class=\"nav-links\"><a>Information <i style=\"float:right\" class=\"fas fa-info\"></i></a></h4>\n" +
    "                <h4 ng-if=\"item.model=='PROJECT'\" ng-click=\"\" class=\"nav-links\"><a>Request To Join <i style=\"float:right\" class=\"fas fa-users\"></i></a></h4>\n" +
    "                <h4 ng-click=\"renderValidationToggle(item)\" class=\"nav-links\"><a>Associations <i style=\"float:right\" class=\"fas fa-bezier-curve\"></i></a></h4>\n" +
    "                <h4 ng-click=\"statsToggle(item)\" class=\"nav-links\"><a>Stats <i style=\"float:right\" class=\"fa fa-eye\"></i></a></h4>\n" +
    "                <h4 ng-click=\"tokensToggle(item)\" class=\"nav-links\"><a>Tokens <i style=\"float:right\" class=\"fas fa-coins\"></i></a></h4>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"content\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newContent\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?create,code,paint')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Content</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Create content. Well developed content earns more tokens. <a ng-click=\"informationToggle('CREATECONTENT')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newContent.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newContent.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                        <li ng-class=\"{active: selectedType=='AUDIO'}\" ng-click=\"selectType('AUDIO')\"><a href=\"#\">Audio</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a href=\"#\">Image</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='LINK'}\" ng-click=\"selectType('LINK')\"><a href=\"#\">Link</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='MOTION'}\" ng-click=\"selectType('MOTION')\"><a href=\"#\">Motion</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='POST'}\" ng-click=\"selectType('POST')\"><a href=\"#\">Post</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Video</a></li>\n" +
    "                    </ul>\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"cre8\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">CRE8</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <h2 ng-click=\"actionToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Action</a></h2>\n" +
    "                <h2 ng-click=\"contentToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Content</a></h2>\n" +
    "                <h2 ng-click=\"itemToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Item</a></h2>\n" +
    "                <h2 ng-click=\"orderToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Order</a></h2>\n" +
    "                <h2 ng-click=\"projectToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Project</a></h2>\n" +
    "                <h2 ng-click=\"taskToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Task</a></h2>\n" +
    "                <h2 ng-click=\"timeToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Time</a></h2>\n" +
    "                <h2 ng-click=\"transactionToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Transaction</a></h2>\n" +
    "                <h2 ng-click=\"validationToggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>+ Validation</a></h2>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"filter\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            \n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?sort,code,filter,paint')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Filter</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <!--DISCOVER-->\n" +
    "                <div ng-if=\"type=='DISCOVER'\">\n" +
    "\n" +
    "                    <!--\n" +
    "                    <p><b>Model</b></p>\n" +
    "                    <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                        <li ng-class=\"{active: selectedType=='AUDIO'}\" ng-click=\"selectType('AUDIO')\"><a href=\"#\">Content</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Items</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Orders</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a href=\"#\">Project</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='LINK'}\" ng-click=\"selectType('LINK')\"><a href=\"#\">Task</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='MOTION'}\" ng-click=\"selectType('MOTION')\"><a href=\"#\">Time</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='POST'}\" ng-click=\"selectType('POST')\"><a href=\"#\">Transaction</a></li>\n" +
    "                    </ul>\n" +
    "                    -->\n" +
    "\n" +
    "                    <!--\n" +
    "                    <p><b>Asset Set</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset Set\" ng-model=\"selectedAssets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.assets.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    -->\n" +
    "\n" +
    "                    <p><b>Tags</b> <i style=\"float:right\" class=\"fa fa-tags\"></i></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"searchQueryNav.tags\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.tags.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(item.element)\">{{item.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Associations</b> <i style=\"float:right\" class=\"fas fa-bezier-curve\"></i></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"searchQueryNav.associations\">\n" +
    "                        <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.associations.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAssociation(item.element)\">{{item.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Locations</b> <i style=\"float:right\" class=\"fa fa-map-marker\"></i> </p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Locations\" ng-model=\"searchQueryNav.locations\">\n" +
    "                        <auto-complete source=\"loadLocation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.locations.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectLocation(item.element)\">{{item.element.address}}</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Distance (km)</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{locationFilter.distance}}</span></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                        <ui-gmap-marker ng-repeat=\"marker in markers track by $index\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                            <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                <div>\n" +
    "                                    <div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div>\n" +
    "                                </div>\n" +
    "                            </ui-gmap-window>\n" +
    "                        </ui-gmap-marker>\n" +
    "                    </ui-gmap-google-map>\n" +
    "                </div>\n" +
    "            \n" +
    "                <!--LEDGER-->\n" +
    "                <div ng-if=\"type=='LEDGER'\">\n" +
    "\n" +
    "                    <p><b>Asset Set</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset Set\" ng-model=\"selectedAssets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.assets.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <!--RELATED-->\n" +
    "                    <p><b>Tags</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"selectedTags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.tags.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Associations</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"selectedAssociations\">\n" +
    "                        <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.associations.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--MARKET-->\n" +
    "                <div ng-if=\"type=='MARKET'\">\n" +
    "\n" +
    "                    <!--\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    -->\n" +
    "\n" +
    "                    <p><b>Models</b></p>\n" +
    "                    <p ng-repeat=\"manifold in manifolds\">\n" +
    "                        <a ng-click=\"\">{{manifold}}</a>\n" +
    "                    </p>\n" +
    "\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset\" ng-model=\"markets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <!--IDK-->\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Volume</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\"></span></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!--IDK-->\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Combinitorial</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\"></span></div>\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"type=='NOTIFICATION'\">\n" +
    "\n" +
    "                    <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                        <li ng-class=\"{active: selectedType=='ALL'}\" ng-click=\"selectType('ALL')\"><a href=\"#\">All</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='READ'}\" ng-click=\"selectType('READ')\"><a href=\"#\">Read</a></li>\n" +
    "                        <li ng-class=\"{active: selectedType=='UNREAD'}\" ng-click=\"selectType('UNREAD')\"><a href=\"#\">Unread</a></li>\n" +
    "                    </ul>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Tags</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"searchQueryNav.tags\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.tags.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(item)\">{{item}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Type</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Type\" ng-model=\"searchQueryNav.type\">\n" +
    "                        <auto-complete source=\"loadType($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.type.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTypeFilter(item)\">{{item}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Priority</b></p>\n" +
    "                    <div layout=\"\">\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"priorityFilter.priority\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <!--POSTIONS | MAP-->\n" +
    "                <div ng-if=\"type=='POSITIONS'\">\n" +
    "                    <p><b>Positions</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset\" ng-model=\"markets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"type=='VALUEMAP'\">\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"item\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newItem\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            \n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern,scrap,assortment,clothes')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Item</h1>\n" +
    "                            <h5 style=\"color:white\">Sharing Creates Abundance</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Items connect Token Protocols with information and applications logic such as 2nd Stage delivery consumption. Items can be acted upon. <a ng-click=\"informationToggle('CREATEITEM')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createItem()\">\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Title\" ng-model=\"newItem.title\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newItem.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Location</h5>\n" +
    "                    <input placeholder=\"Location\" type=\"text\" ng-model=\"newItem.location\" class=\"form-control\">\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newItem.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Is Tradable?</h5>\n" +
    "                    <md-switch ng-model=\"tradable\" aria-label=\"tradable\"></md-switch>\n" +
    "                    \n" +
    "                    <div ng-if=\"tradable\">\n" +
    "                        <!--ORDER MODEL-->\n" +
    "                        <h5>Is Generator? <a ng-click=\"informationToggle('ITEMGENERATOR')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <md-switch ng-model=\"generator\" aria-label=\"generator\"></md-switch>\n" +
    "                        <h5>Identifier <a ng-click=\"informationToggle('IDENTIFERSET')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <input placeholder=\"IdentiferSet\" type=\"text\" ng-model=\"newItem.identiferSet\" class=\"form-control\">\n" +
    "                        <h5>Delivery Protocol <a ng-click=\"informationToggle('DELIVERYPROTOCOL')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <input type=\"text\" placeholder=\"Title\" ng-model=\"newItem.delivery\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "\n" +
    "                    <text-angular ng-model=\"newItem.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newItem.title\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"login\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"!currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            \n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Login</h1>\n" +
    "                            <h5 style=\"color:white\">Welcome back!</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"login-form\">\n" +
    "                    <form role=\"form\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\" ng-model=\"newLogin.identifier\"> \n" +
    "                            <i class=\"fa fa-user\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group log-status\">\n" +
    "                            <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\" ng-model=\"newLogin.password\"> \n" +
    "                            <i class=\"fa fa-lock\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"align-right\">\n" +
    "                            <button class=\"btn btn-default log-btn\" ng-click=\"login()\">Sign in</button>\n" +
    "                        </div>\n" +
    "                        <br><br>\n" +
    "                        <div class=\"social-log\">\n" +
    "                            <a style=\"text-align:center\" href=\"/register\"><h5 style=\"color:gray;font-style:italic\">Not A Member Yet?</h5></a>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"nav\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div style=\"text-align:center\">\n" +
    "                <!--<i ng-click=\"sideNavToggle()\" class=\"fa fa-cross\"></i>-->\n" +
    "                \n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <div ng-show=\"currentUser\" ng-if=\"false\">\n" +
    "                    <div class=\"spacing-25\"></div>\n" +
    "                    <img style=\"height:75px;width:75px;border-radius:100%\" ng-src=\"{{currentUser.avatarUrl}}\">\n" +
    "                    <h3 class=\"nav-links\" ng-show=\"currentUser\" style=\"padding:16px;\"><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h3>\n" +
    "                </div>\n" +
    "\n" +
    "                <form style=\"padding:15px;\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "\n" +
    "                <h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/about\">About</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" ng-click=\"cre8Toggle()\" class=\"nav-links\" style=\"padding:12px;\"><a>CRE8</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:12px;\"><a href=\"/discover\">Discover</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:12px;\"><a href=\"/market\">Market</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:12px;\"><a href=\"/marketplace\">Marketplace</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:12px;\"><a href=\"/projects\">Projects</a></h2>\n" +
    "                <!--<h2 class=\"nav-links\" style=\"padding:12px;\"><a href=\"/tasks\">Tasks</a></h2>-->\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:12px;\"><a href=\"/notifications\"><span ng-if=\"notificationCount > 0\" class=\"label label-danger\">{{notificationCount}}</span> Notifications</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:12px;\"><a href=\"/account\">Settings</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:12px;\"><a href=\"/logout\">Logout</a></h2>\n" +
    "                <h2 ng-click=\"loginToggle()\" ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:12px;\"><a>Login</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\"class=\"nav-links\" style=\"padding:12px;\"><a href=\"/register\">Register</a></h2>\n" +
    "                <a href=\"/\"><img style=\"width:200px\" src=\"images/hyper.gif\"></a>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"order\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newOrder\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?connections,network,pattern')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Order</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">An Order creates a position in our Value Matrix (MultiDimensional Token Market) <a ng-click=\"informationToggle('CREATEORDER')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <h5>\n" +
    "                                <span ng-show=\"!identiferSetAlpha\">Asset Identifer Set α</span>\n" +
    "                                <span ng-repeat=\"market in identiferSetAlpha track by $index\">{{market.text}} </span> \n" +
    "                                <a ng-click=\"informationToggle('IDENTIFERSETALPHA')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a>\n" +
    "                            </h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set α\" ng-model=\"identiferSetAlpha\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <div ng-repeat=\"market in identiferSetAlpha track by $index\">\n" +
    "                                <div class=\"col-sm-12\">\n" +
    "                                    <h5>{{market.text}} Amount | Available {{balance[market.text] || 0}}</h5>\n" +
    "                                    <input placeholder=\"{{market.text}} Amount\" type=\"number\" ng-model=\"newOrder.setAlpha[market.text]\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div style=\"text-align:left;margin-bottom:15px\" class=\"col-sm-12\">\n" +
    "                            <a ng-click=\"invertMarket()\" style=\"width:100px\" class=\"btn btn-default log-btn\"><i class=\"fa fa-refresh\"></i> Invert</a>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <h5>\n" +
    "                                <span ng-show=\"!identiferSetBeta\">Asset Identifer Set β</span>\n" +
    "                                <span ng-repeat=\"market in identiferSetBeta track by $index\">{{market.text}} </span> \n" +
    "                                <a ng-click=\"informationToggle('IDENTIFERSETBETA')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a>\n" +
    "                            </h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set β\" ng-model=\"identiferSetBeta\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <div ng-repeat=\"market in identiferSetBeta track by $index\">\n" +
    "                                <div class=\"col-sm-12\"><h5>{{market.text}} Amount</h5><input placeholder=\"{{market.text}} Amount\" type=\"number\" ng-model=\"newOrder.setBeta[[market.text]]\" class=\"form-control\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-12\" style=\"padding:20px;\">\n" +
    "                            <p ng-show=\"!inverted\" style=\"font-weight:800;\">\n" +
    "                                Sell <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span> \n" +
    "                                for <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> | \n" +
    "                                Buy <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> \n" +
    "                                with <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span>\n" +
    "                            </p>\n" +
    "                            <p ng-show=\"inverted\" style=\"font-weight:800;\">\n" +
    "                                Buy <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span> \n" +
    "                                with <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> | \n" +
    "                                Sell <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> \n" +
    "                                for <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-12\" style=\"marking:10px\">\n" +
    "                            <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='ONBOOKS'}\" ng-click=\"selectOrderType('ONBOOKS')\"><a href=\"#\">Market onBooks <i ng-click=\"informationToggle('ONBOOKSORDER')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='FILLORKILL'}\" ng-click=\"selectOrderType('FILLORKILL')\"><a href=\"#\">Market Fill Or Kill <i ng-click=\"informationToggle('FILLORKILL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='IMMEDIATEORCANCEL'}\" ng-click=\"selectOrderType('IMMEDIATEORCANCEL')\"><a href=\"#\">Immediate or Cancel <i ng-click=\"informationToggle('IMMEDIATEORCANCEL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='LIMIT'}\" ng-click=\"selectOrderType('LIMIT')\"><a href=\"#\"> Limit <i ng-click=\"informationToggle('LIMIT')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.setAlpha\">create</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"project\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newProject\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,coordination,government')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Project</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">A Project is a Self-Governing collective of individuals. <a ng-click=\"informationToggle('CREATEPROJECT')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <form role=\"form\" ng-submit=\"createProject()\">\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder= \"Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newProject.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newProject.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Location</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Location\" ng-model=\"newProject.location\" class=\"form-control\">\n" +
    "                    <h5>Description</h5>\n" +
    "                    <text-angular placeholder= \"Description\" ng-model=\"newProject.description\" ta-toolbar=\"''\"></text-angular>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newProject.title\">create</button>\n" +
    "                </form>\n" +
    "                    \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"render\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            \n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div ng-hide=\"item.model == 'CONTENT' && !item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                                <a ng-if=\"item.model == 'CONTENT'\" href=\"content/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                                <a ng-if=\"item.model == 'ITEM'\" href=\"item/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                                <a ng-if=\"item.model == 'MARKET'\" href=\"market/{{item.string}}\" style=\"color:white\">{{item.string}}</a>\n" +
    "                                <a ng-if=\"item.model == 'ORDER'\" href=\"order/{{item.id}} style=\"color:white\"\">{{item.title}}</a>\n" +
    "                                <a ng-if=\"item.model == 'PROJECT'\" href=\"project/{{item.urlTitle}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                                <a ng-if=\"item.model == 'TASK'\" href=\"task/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                                <a ng-if=\"item.model == 'TIME'\" href=\"time/{{item.id}}\" style=\"color:white\">{{item.amount}}</a>\n" +
    "                                <a ng-if=\"item.model == 'TRANSACTION'\" href=\"transaction/{{item.id}}\" style=\"color:white\">{{item.id}}</a>\n" +
    "                            </h1>\n" +
    "                            <h5 style=\"color:white\"><span am-time-ago=\"item.createdAt\"></span></h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div style=\"text-align:right;float:right\">\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();\" class=\"fa fa-eye\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();renderValidationToggle(item);\" class=\"fas fa-bezier-curve\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();tokensToggle(item);\" class=\"fas fa-coins\"></i>\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(item);\" class=\"fa fa-ellipsis-v\"></i>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'CONTENT'\">\n" +
    "                    <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'ITEM'\">\n" +
    "                    <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'MARKET'\">\n" +
    "                    <highchart config=\"bidAskChart\"></highchart>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'ORDER'\">\n" +
    "                    <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TASK'\">\n" +
    "                    <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TIME'\">\n" +
    "                    <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TRANSACTION'\">\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.from.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.from.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                        <i class=\"fa fa-arrow-right\"></i>\n" +
    "                    </div>\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.to.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.to.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet track by $index\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                </div>\n" +
    "                <!--TAGS-->\n" +
    "                <p ng-if=\"item.tags\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "                <p ng-if=\"item.task.tags\"><a ng-repeat=\"tag in item.task.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <!--LOCATION-->\n" +
    "                <p ng-if=\"item.location\"><a>{{item.location.address}}, {{item.location.lat}}, {{item.location.lng}}</a></p> \n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <span ng-if=\"item.content\" style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"background-color:#f9f9f9;height:100%\">\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\"><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(validation)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-if=\"item.model == 'TASK'|| item.model == 'TIME'\" href=\"#\" ng-click=\"validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card-footer\" ng-show=\"item.showReply\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                        <textarea froala=\"toolBarSettings\" ng-model=\"newContent.content\"></textarea>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--RENDER ASSOCIATED TIME-->\n" +
    "                <!--RENDER ASSOCIATED CONTENT-->\n" +
    "                <div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <!--RENDER MEMBER...-->\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderReputation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "            <div style=\"background: url('{{item.user.coverUrl}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1>\n" +
    "                                <a style=\"display:inline;font-weight:600;margin-left:5px;color:white\" href=\"member/{{item.user.username}}\">\n" +
    "                                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                    {{item.user.username}}\n" +
    "                               </a>\n" +
    "                            </h1>\n" +
    "                            <h5 style=\"color:white\">\n" +
    "                                <span style=\"color:gray;font-size:10px;\">0x{{item.user.id}}</span>\n" +
    "                                <span ng-if=\"item.project\" style=\"color:gray;font-size:10px;\">, 0x{{item.id}}</span>\n" +
    "                            </h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <p style=\"font-size:13px;\"><a href=\"/member/{{item.user.username}}/projects\">{{item.user.projectCount || 0}} Projects</a> | <a href=\"/member/{{item.user.username}}/followers\">{{item.user.followerCount || 0}} Followers</a> | <a href=\"/member/{{item.user.username}}/following\">{{item.user.followingCount || 0}} Following</a>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <div ng-if=\"currentUser.id != item.user.id\">\n" +
    "                    <img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{item.user.id}}\">\n" +
    "                    <a style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Send Tokens</a>\n" +
    "                    <a style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Follow</button></a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <h3>Reputation</h3>\n" +
    "                <h4>{{item.project.title}}</h4>\n" +
    "                <!--<tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Manifold Filter\" ng-model=\"reputationFilter\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>-->\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                \n" +
    "                <highchart config=\"chart\"></highchart>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderValidation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%;overflow-x:hidden\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations & Validations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">Validations create value linkages. They form the mechanisms by which data is associated & given relation. <a ng-click=\"informationToggle('VALIDATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "               \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div>\n" +
    "\n" +
    "                    <h5>Filter</h5>\n" +
    "                    <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                   <!--DEPRECIATE TASK TITLE-->\n" +
    "                    <div ng-if=\"item.model=='TIME'\">\n" +
    "                        <h4>\n" +
    "                            {{item.amount}}\n" +
    "                            <i class=\"fa fa-arrows-h\"></i>\n" +
    "                            <a href=\"task/{{item.task.id}}\">{{item.task.title.toUpperCase()}}</a>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"item.model=='TASK'\">\n" +
    "                        <h4>\n" +
    "                            {{item.title.toUpperCase()}} \n" +
    "                            <i class=\"fa fa-arrows-h\"></i> \n" +
    "                            <a href=\"project/{{item.project.urlTitle}}\">{{item.project.title.toUpperCase()}}</a>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!--<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    {{item.associatedModels}}\n" +
    "                    <h5 ng-repeat=\"model in item.associatedModels\">{{model.type}}, {{model.address}}</h5>-->\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <highchart config=\"validationColumnRender\"></highchart>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div>\n" +
    "                    <!--TODO MOBILE-->\n" +
    "                    <table class=\"table table-striped table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Member</th>\n" +
    "                                <th>Models</th>\n" +
    "                                <th>Dimension</th>\n" +
    "                                <th>Validation Score</th>\n" +
    "                                <th>Id</th>\n" +
    "                            </tr>\n" +
    "                        <thead>\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"validation in validations\">\n" +
    "                                <td>\n" +
    "                                    <a href=\"member/{{validation.user.username}}\">\n" +
    "                                        <img class=\"card-avatar\" ng-src=\"{{validation.user.avatarUrl}}\" src=\"{{validation.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                        <span style=\"font-weight:700\">{{validation.user.username}}</span>\n" +
    "                                    </a>\n" +
    "                                </td>\n" +
    "\n" +
    "                                <td>\n" +
    "\n" +
    "                                    <span ng-if=\"validation.associatedModels[0].type=='PROJECT'\"><a href=\"project/{{validation.associatedModels[0].info.urlTitle}}\">{{validation.associatedModels[0].info.title}}</a></span>\n" +
    "                                    <span ng-if=\"validation.associatedModels[0].type=='TASK'\"><a href=\"task/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.title}}</a></span>\n" +
    "                                    <span ng-if=\"validation.associatedModels[0].type=='TIME'\"><a href=\"time/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.amount}}</a></span>\n" +
    "\n" +
    "                                    <i class=\"fa fa-arrows-h\"></i> \n" +
    "\n" +
    "                                    <span ng-if=\"validation.associatedModels[1].type=='PROJECT'\"><a href=\"project/{{validation.associatedModels[0].info.urlTitle}}\">{{validation.associatedModels[1].info.title}}</a></span>\n" +
    "                                    <span ng-if=\"validation.associatedModels[1].type=='TASK'\"><a href=\"task/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[1].info.title}}</a></span>\n" +
    "                                    <span ng-if=\"validation.associatedModels[1].type=='TIME'\"><a href=\"time/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[1].info.amount}}</a></span>\n" +
    "\n" +
    "                                </td>\n" +
    "\n" +
    "                                <td>General</td>\n" +
    "                                <td>{{validation.validation.general}}</td>\n" +
    "                                <td><a href=\"validation/{{validation.id}}\">{{validation.id}}</a></td>\n" +
    "\n" +
    "\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"stats\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "                            <h5 style=\"color:white\">Item Information</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <highchart config=\"chart\"></highchart>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"subNav\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div style=\"text-align:center;\">\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "                <div ng-if=\"project\">\n" +
    "                    <h1 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}\">{{project.title}}</a></h1>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/about\">About</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/assets\">Assets</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/content\">Content</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/items\">Items</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/ledger\">Ledger</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/members\">{{project.memberCount}} Members</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/charter\">Motions</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/projects\">Projects</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/time\">Time</a></h4>\n" +
    "                    <!--<h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/charter\">Validations</a></h4>-->\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"member\">\n" +
    "                    <h1 class=\"nav-links\"><a href=\"member/{{member.username}}\">{{member.username}}</a></h1>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/about\">About</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/actions\">Actions</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/assets\">Assets</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/content\">Content</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/followers\">{{member.followerCount}} Followers</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/following\">{{member.followingCount}} Following</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/items\">Items</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/ledger\">Ledger</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/positions\">Positions</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/projects\">{{member.projectCount}} Projects</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/tasks\">Tasks</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"member/{{member.username}}/time\">Time</a></h4>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"task\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newTask\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Task</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tasks are an abstraction of intentional time, they create linkages between Time & Token Protocols. <a ng-click=\"informationToggle('CREATETASK')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createTask()\">\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Title\" ng-model=\"newTask.title\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newTask.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTask.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Location</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Location\" ng-model=\"newTask.location\" class=\"form-control\">\n" +
    "                    <text-angular ng-model=\"newTask.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"time\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newTime\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?time')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Time</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Time & Intention unite. Token Protocols propogate value interactions. <a ng-click=\"informationToggle('CREATETIME')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createTime()\">\n" +
    "\n" +
    "                    <!--SELF CONTEXT-->\n" +
    "                    <!--IMPLICIT VALIDATION W CONTEXT FOR TAGS-->\n" +
    "                    <h5>Associations (Task) <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTime.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociationsTask($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <div ng-if=\"!newTime.associatedModels.length\">\n" +
    "                        <h5>Context (Tags)</h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newTime.tags\">\n" +
    "                            <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "                    \n" +
    "\n" +
    "                    <!--TODO-->\n" +
    "                    <!--FOR X IN TAGS-->\n" +
    "                    <div ng-repeat=\"model in newTime.associatedModels\">\n" +
    "                        <div class=\"col-sm-12\">\n" +
    "\n" +
    "                            <h5>Context (Tags)</h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newTime.tags\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "\n" +
    "                            <!--<a href=\"#\"><b>Validation(s)</b></a>-->\n" +
    "\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                            <!--\n" +
    "                            <div layout=\"\">\n" +
    "                                <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                                <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                                <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{memberValidate.totalWork}}</span></div>\n" +
    "                            </div>\n" +
    "                            -->\n" +
    "\n" +
    "                            <div ng-repeat=\"tag in newTime.tags track by $index\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{tag.text}}</span></div>\n" +
    "                                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation[tag.text]\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation[tag.text]}} | {{reputation[tag.text] || 0}}</span></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                        <li ng-class=\"{active: newTime.type=='RETROACTIVE'}\" ng-click=\"selectTypeTime('RETROACTIVE')\"><a href=\"#\">RETROACTIVE OR PLANNED</a></li>\n" +
    "                        <li ng-class=\"{active: newTime.type=='LIVE'}\" ng-click=\"selectTypeTime('LIVE')\"><a href=\"#\">LIVE</a></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                    <div ng-if=\"newTime.type == 'LIVE'\">\n" +
    "\n" +
    "                        <div ng-show=\"!recordingTime\">\n" +
    "                            <div ng-show=\"!streaming\">\n" +
    "                                <h3>Streaming?</h3>\n" +
    "                                <a class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</a>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <a class=\"btn btn-default log-btn\" ng-click=\"startTime()\">No</a>\n" +
    "                            </div>\n" +
    "                            <div ng-show=\"streaming\">\n" +
    "                                <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                                <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                                <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                                <a style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startTime()\">Start Stream</a>\n" +
    "                                <a style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"cancelStreaming()\">Back</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"recordingTime\">\n" +
    "                            <h3>{{taskTime}}</h3>\n" +
    "                            <div ng-show=\"streaming\"> <div ng-bind-html=\"renderStream(streamUrl)\"></div></div>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <a ng-click=\"submit()\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</a>\n" +
    "                        </div>            \n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"newTime.type == 'RETROACTIVE'\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <h5>Start Time</h5>\n" +
    "                                <input type=\"datetime-local\" step=\"1\" placeholder=\"Start Time\" ng-model=\"newTime.startTime\" class=\"form-control\">\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-6\">     \n" +
    "                                <h5>End Time</h5>\n" +
    "                                <input type=\"datetime-local\" step=\"1\" placeholder=\"Start Time\" ng-model=\"newTime.endTime\" class=\"form-control\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <h5>Amount</h5>\n" +
    "                        <input type=\"number\" step=\"1\" placeholder=\"Amount\" ng-model=\"newTime.amount\" class=\"form-control\">\n" +
    "                        \n" +
    "                        <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTime.amount\">create</button>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"timer\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newTime\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?time')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Timer</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Multi-D Time</p>\n" +
    "                <p>Here is what you are doing now</p>\n" +
    "                <p>Watching -- Spending Time / attention</p>\n" +
    "                <p>Working on CONTEXT; TASK</p>\n" +
    "                <h4>{{taskTime}}</h4>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"tokens\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%;overflow-x:hidden\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            \n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <h4 style=\"\">Protocols <a ng-click=\"informationToggle('PROTOCOLS', 'GENERAL', item)\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "\n" +
    "                <!--REPEAT IN item.protocols-->\n" +
    "                <p>\n" +
    "                    <!--<a ng-repeat=\"protocol in item.protocols\" href=\"#\"></a>-->\n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Content Protocol</a>, \n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Data Protocol</a>,\n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Project Protocol</a>, \n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Reaction Protocol</a>,\n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Task Protocol</a>, \n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Time Protocol</a>, \n" +
    "                    <a ng-click=\"informationToggle('PROTOCOLS')\" href=\"#\">Validation Protocol</a>\n" +
    "                </p>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <!--Token Space-->\n" +
    "                <tags-input min-length=\"1\" ng-model=\"tokenFilter\" placeholder=\"Token Manifold\"></tags-input>\n" +
    "\n" +
    "                <!--TODO: MOBILE-->\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <!--<thead>\n" +
    "                        <tr><th>Manifold and Action Table</th></tr>\n" +
    "                    </thead>-->\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"token in tokens\">\n" +
    "                            <td><a href=\"market/{{token}}\">{{token}}</a></td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "                <!--<div class=\"spacing-10\"></div>\n" +
    "                <h3 style=\"\">Tokens Earned</h3>-->\n" +
    "                <!--<highchart config=\"tokensEarned\"></highchart>-->\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h3 style=\"\">Market Liquidity and Equality Traverse</h3>\n" +
    "                <p style=\"color:gray;font-style:italic\">Enter your desired output for tokens based on liquidy <!--/ various order types-->in the MultiMarket. The CRE8 network will perform matching operations and create a series of orders which fulfill the token conversion. The perspective we look at the multimarket gives us traversing rules and computationally efficient conversion paths. Through the assistance of tensor-based neural networks we create a hyper-vector perspective formed though relations of the aggregate of our value maps.</p>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <!--TODO: WEIGHT THE INPUT (SLIDER) ; absolute || % -->\n" +
    "\n" +
    "                <h4>Asset Input</h4>\n" +
    "                <tags-input min-length=\"1\" ng-model=\"inputVector\" placeholder=\"Input\"></tags-input>\n" +
    "               \n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <h4>Desired Output</h4>\n" +
    "                <tags-input min-length=\"1\" ng-model=\"outputVector\" placeholder=\"Output\"></tags-input>\n" +
    "                \n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <button ng-click=\"marketTraverse();\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">+ Lookup</button>\n" +
    "                \n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <div ng-show=\"outputMatix.length > 0\" >\n" +
    "\n" +
    "\n" +
    "                    <!--TRAVERSAL GRAPH?-->\n" +
    "                    <!--TODO MOBILE-->\n" +
    "                    <table class=\"table table-striped table-hover\">\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"token in inputVector track by $index\">\n" +
    "                                <td><a href=\"market/{{token.text}}\">{{token.text}}</a></td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                    <div style=\"text-align:center\"><img src=\"https://i.stack.imgur.com/PnXIo.png\"/></div>\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                    <!--TODO MOBILE-->\n" +
    "                    <table class=\"table table-striped table-hover\">\n" +
    "                        <thead>\n" +
    "                            <tr>\n" +
    "                                <th>Identifer</th>\n" +
    "                                <th>Value</th>\n" +
    "                            </tr>\n" +
    "                        </thead>\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"assetVector in outputMatix track by $index\">\n" +
    "                                <td><a href=\"market/{{assetVector.identifer}}\">{{assetVector.identifer}}</a></td>\n" +
    "                                <td>{{assetVector.value}}</td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"transaction\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newTransaction\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,trade')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Transaction</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Send tokens to any address; double check that the information is correct before sending. All transactions are final. <a ng-click=\"informationToggle('CREATETRANSACTION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createTransaction()\">\n" +
    "\n" +
    "                    <h5>Address From</h5>\n" +
    "                    <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"From\" ng-model=\"newTransaction.from\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadAddress($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Address To</h5>\n" +
    "                    <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"To\" ng-model=\"newTransaction.to\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadAddress($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Asset</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset Identifier\" ng-model=\"newTransaction.identifierSet\">\n" +
    "                        <auto-complete min-length=\"1\" source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <div class=\"\">\n" +
    "                        <div class=\"col-sm-12\" ng-repeat=\"asset in newTransaction.identifierSet\">\n" +
    "                            <h5>{{asset.text}} Amount | Available {{balance[asset.text] || 0}} <span style=\"text-align:right;float:right\"><a ng-click=\"informationToggle('IDENTIFERSET')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></span></h5>\n" +
    "                            <input placeholder=\"{{asset.text}} Amount\" type=\"number\" step=\"any\" ng-model=\"newTransaction.amountSet[asset.text]\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div style=\"clear:both\"></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <h5>Tags</h5> <!--VECTOR.. ie... tags -->\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newTransaction.tags\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Description</h5>\n" +
    "                    <textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\"></textarea>\n" +
    "\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.amountSet\">create</button>\n" +
    "\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"validation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newValidation\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,consensus')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">+ Validation</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                \n" +
    "                <p style=\"color:gray;font-style:italic\">Validations create value linkages. They form the mechanisms by which data is associated & given relation. <a ng-click=\"informationToggle('VALIDATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Connection</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newValidation.associatedModel\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TASK'\">\n" +
    "                    <h4>\n" +
    "                        <i class=\"fa fa-check\"></i> Validate {{item.title}} \n" +
    "                        <i class=\"fa fa-arrows-h\"></i> \n" +
    "                        {{newValidation.associatedModel[0].text}}\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TIME'\">\n" +
    "                    <h4>\n" +
    "                        <i class=\"fa fa-check\"></i> Validate {{item.amount}} Time \n" +
    "                        <i class=\"fa fa-arrows-h\"></i> \n" +
    "                        {{newValidation.associatedModel[0].model.title}}\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'VALIDATION'\">\n" +
    "                    <h4>\n" +
    "                        Validate Validation <i class=\"fa fa-check\"></i>\n" +
    "                    </h4>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Context</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"tags\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <!--THINK ABOUT THIS MATHMATICALLY-->\n" +
    "                <!--\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{memberValidate.totalWork}}</span></div>\n" +
    "                </div>\n" +
    "                -->\n" +
    "\n" +
    "                <div ng-repeat=\"tag in tags track by $index\">\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{tag.text}}</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation[tag.text]\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation[tag.text]}} | {{reputation[tag.text] || 0}}</span></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Content</h5>\n" +
    "                <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "\n" +
    "    <!--TODO!!-->\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"confirm\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div mg-if=\"confirm\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div class=\"container\">\n" +
    "                    <h1>Success!</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div ng-if=\"confirm.model == 'CONTENT'\">\n" +
    "                    <h3>Title: {{confirm.title}}</h3>\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Tags: {{confirm.tags}}</p>\n" +
    "                    <p>Associations: {{confirm.associatedModels}}</p>\n" +
    "                    <p>Type: {{confirm.type}}</p>\n" +
    "                    <p>Content: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'FOLLOW'\">\n" +
    "                    <p>Follower: {{confirm.follower}}</p>\n" +
    "                    <p>Following: {{confirm.following}}</p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'ITEM'\">\n" +
    "                    <h3>Title: {{confirm.title}}</h3>\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Tags: {{confirm.tags}}</p>\n" +
    "                    <p>Associations: {{confirm.associatedModels}}</p>\n" +
    "                    <p>Location: {{confirm.location}}</p>\n" +
    "                    <p>Amount Set: {{confirm.amountSet}}</p>\n" +
    "                    <p>Identifier Set: {{confirm.identifierSet}}</p>\n" +
    "                    <p>Content: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'ORDER'\">\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Amount Set Alpha: {{confirm.amountSetAlpha}}</p>\n" +
    "                    <p>Identifier Set Alpha: {{confirm.identifierSetAlpha}}</p>\n" +
    "                    <p>Amount Set Beta: {{confirm.amountSetBeta}}</p>\n" +
    "                    <p>Identifier Set Beta: {{confirm.identifierSetBeta}}</p>\n" +
    "                    <p>Type: {{confirm.tags}}</p>\n" +
    "                    <p>Status: {{confirm.status}}</p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'PROJECT'\">\n" +
    "                    <h3>Title: {{confirm.title}}</h3>\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <!--<p>Tags: {{confirm.tags}}</p>-->\n" +
    "                    <p>Associations: {{confirm.associatedModels}}</p>\n" +
    "                    <p>Location: {{confirm.location}}</p>\n" +
    "                    <p>Description: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.description)\"></span></p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'PROJECTMEMBER'\">\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Project: {{confirm.project}}</p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'TASK'\">\n" +
    "                    <h3>Title: {{confirm.title}}</h3>\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Tags: {{confirm.tags}}</p>\n" +
    "                    <p>Associations: {{confirm.associatedModels}}</p>\n" +
    "                    <p>Location: {{confirm.location}}</p>\n" +
    "                    <p>Content: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'TIME'\">\n" +
    "                    <p>Amount: {{confirm.amount}}</p>\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Tags: {{confirm.tags}}</p>\n" +
    "                    <p>Type: {{confirm.type}}</p>\n" +
    "                    <p>Associations: {{confirm.associatedModels}}</p>\n" +
    "                    <p>Content: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "                <div ng-if=\"confirm.model == 'TRANSACTION'\">\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>To: {{confirm.to}}</p>\n" +
    "                    <p>From: {{confirm.from}}</p>\n" +
    "                    <p>{{confirm.tags}}</p>\n" +
    "\n" +
    "                    <span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"confirm.model == 'VALIDATION'\">\n" +
    "                    <p>User: {{confirm.user}}</p>\n" +
    "                    <p>Content: <span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <!--TODO: PROPER COLLAPSE ORDER-->\n" +
    "    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"information\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;max-width:100%;\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Information</h1>\n" +
    "                            <h5 style=\"color:white\">{{informationType}}</h5>\n" +
    "\n" +
    "                            <!--<h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>\n" +
    "                            <h5 ng-if=\"informationType == 'CREATECONTENT'\" style=\"color:white\"></h5>-->\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATECONTENT'\">\n" +
    "\n" +
    "                    <p>Content is art; content can funnel attention, energy, and value. You can CREATE content. Content can be associated recursivly. Triggering Motions to validate where appropiate.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATEITEM'\">\n" +
    "\n" +
    "                    <p>Items are moments of information. They convey complex information, transend the string domain, and carry within them the ability of application input. Providing more functionality and carrying with them additional ancillar protocol inputs. Creating rich ownership of (items as) assets and liabilities[defined by protocol]. The Marketplace is supported by Deventalized Physically Validated Delivery (PVD) Protocols.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATEORDER'\">\n" +
    "\n" +
    "                    <p>Orders create the core of realational value. The are the linkages between assets which are weighted by the OrderBook i.e. Prices at which people are willing to by and sell respectively.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATEPROJECT'\">\n" +
    "\n" +
    "                    <p>Projects are Organization. They are the mechanism by which we are able to coordinate as a group around shared goals. Projects can own assests and are consequently shared by their members. Decision making is disintermediated democratically though wieghted voting though motions. Projects connect to Tasks and to Time.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATETASK'\">\n" +
    "\n" +
    "                    <p>Tasks act as a 'Bridge,' provide context to time, and shape broader the objectives of projects through the clear statement of responsibility.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATETIME'\">\n" +
    "\n" +
    "                    <p>Time is a core unit of value. Within the template of scarcity, time as intention manifests as value. Albeit not necessarily finanite, linearly it's tells a compelling narrative. Information on how we spend our time intuitivly creates shared value. Information as income.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATETRANSACTION'\">\n" +
    "\n" +
    "                    <p>Transactions allow for the exchange and transfer of tokens. They contain tags, content, and and amountSet. Transaction logic is governed by the TRANSACTION protocol.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATEVALIDATION'\">\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'TOKEN'\">\n" +
    "\n" +
    "                    <p>The UniversalToken onMint Market Postion Signifies that the creator of the instrument will transfer UniversalToken onMint of the specified asset.</p>\n" +
    "                    <p>Each Memeber is given 1 Universal Token per second</p>\n" +
    "\n" +
    "                </div>  \n" +
    "\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERSET'\">\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <!--DEP-->\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERALPHA'\">\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERSETBETA'\">\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'ASSOCIATIONS'\">\n" +
    "\n" +
    "                    <p>Associations are computed though validation traversal.</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'PROTOCOLS'\">\n" +
    "\n" +
    "                    <p>Protocols create plugins to the string space; they create token action potientals though the interplay and interaction of data.</p>\n" +
    "                    <p>A bundle of protocols create an Application.</p>\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'VALUEMAP'\">\n" +
    "\n" +
    "                    <p>Value Map Controls</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'VALIDATION'\">\n" +
    "\n" +
    "                    <p>Validations create linkages within the CRE8 ecosystem. Validations allow for context-specific consensus. CRE8 supports multiple validation types including human validated proof of work (HVpoW), probabilistic trained validation (PtV), and modular app-specific validation. The connections and validation intention within CRE8 is rich. Validations allow for recursive layering.</p>\n" +
    "                    <!--VALIDATION IMAGE-->\n" +
    "                    <p>Associations are computed though validation traversal.</p>\n" +
    "\n" +
    "                    <p>`A = sum_(i=0)^n sum_(i=0)^n V_{i_{a-z}`</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "            <span style=\"float:right;margin-top:3px;margin-left:-6px;\" ng-if=\"notificationCount > 0\"><span class=\"label label-danger\">{{notificationCount}}</span></span>\n" +
    "            <button style=\"padding-right:0px;margin-right:0px;border:0px solid transparent;\" class=\"navIcon\" type=\"button\" ng-click=\"sideNavToggle()\">\n" +
    "                <span class=\"sr-only\">Toggle navigation``</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "\n" +
    "            <div ng-if=\"recordActions\" style=\"float:left;margin-top:13px;margin-right:30px;font-size:18px\">\n" +
    "                <i style=\"color:white\" ng-click=\"$event.stopPropagation();actionToggle(item);\" class=\"fa fa-eye\"></i>\n" +
    "            </div>\n" +
    "            <!--TODO: CREATE TIME TO ENGINEER; CONTEXT; TASK; PAUSE; MULTID; CONTROLLER..-->\n" +
    "            <div ng-click=\"timerToggle()\" ng-if=\"taskTime\" class=\"nav-links\" style=\"float:left;margin-top:13px;margin-right:30px;font-size:18px\">\n" +
    "                <a ng-show=\"taskTime == 0\" href=\"#\"><i style=\"color:red\" class=\"fa fa-circle\"></i></a>\n" +
    "                <a ng-show=\"taskTime > 0\" href=\"#\"><i style=\"color:red\" class=\"fa fa-pause\"></i></a>\n" +
    "                <a ng-show=\"taskTime > 0\" href=\"#\">{{taskTime}}</a>\n" +
    "            </div>\n" +
    "            <a style=\"padding-left:0px\" class=\"navbar-brand\" href=\"/\"><span style=\"font-weight:bold;color:white\">CRE8.XYZ</span></a>\n" +
    "        </div>\n" +
    "        <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("notifications/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Notifications <span style=\"float:right\">{{notificationCount}}</span></h1>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"notifications.length == 0\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"notifications.length > 0\">\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<!--\n" +
    "			<li><a href=\"/content\">Read</a></li>\n" +
    "			-->\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('NOTIFICATION', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<!--<li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>-->\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "		</ul>\n" +
    "\n" +
    "\n" +
    "		<!--\n" +
    "		<h4>x Unread</h4>\n" +
    "		<h4>Today</h4>\n" +
    "		<h4>Yesterday</h4>\n" +
    "		<h4>This Week</h4>\n" +
    "		<h4>Earlier</h4>\n" +
    "		-->\n" +
    "\n" +
    "		<!--if unread; read flag etc-->\n" +
    "		<div ng-repeat=\"notification in notifications\" class=\"card\" ng-click=\"\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "\n" +
    "	        	<div style=\"float:right;text-align:center\">\n" +
    "		            <!--<i style=\"float:right\" ng-click=\"$event.stopPropagation();tokensToggle(notification);\" class=\"fa fa-ellipsis-v\"></i>-->\n" +
    "		            <span ng-if=\"notification.isRead\">\n" +
    "		            	<button class=\"btn btn-default\" ng-click=\"markRead(notification, false)\"><i class=\"fa fa-envelope-o\"></i></button>\n" +
    "						<br><span style=\"color:gray;font-size:10px;\">Read</span>\n" +
    "		            </span>\n" +
    "    		        <span ng-if=\"!notification.isRead\">\n" +
    "						<button ng-if=\"!notification.isRead\" class=\"btn btn-default\" ng-click=\"markRead(notification, true)\"><i style=\"color:red\" class=\"fa fa-envelope-o\"></i></button>\n" +
    "						<br><span style=\"color:gray;font-size:10px;\">Unread</span>\n" +
    "		            </span>\n" +
    "	        	</div>\n" +
    "\n" +
    "	        	<h5>{{notification.title}}</h5>\n" +
    "\n" +
    "	            <!--if type is new follower; follow btn; embeded function-->\n" +
    "	            <div ng-if=\"notification.type=='FOLLOW'\">\n" +
    "		          	<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "	            	<a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{notification.info.username}}\">\n" +
    "	                	<img class=\"card-avatar\" ng-src=\"{{notification.info.avatarUrl}}\" src=\"{{notification.info.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "	                	{{notification.info.username}}\n" +
    "	                </a>\n" +
    "	            	<button ng-if=\"!notification.isFollowing\" ng-click=\"follow(notification)\" class=\"btn btn-default\">Follow</button>\n" +
    "	            	<button ng-if=\"notification.isFollowing\" ng-click=\"follow(notification)\" class=\"btn btn-default\">Unfollow</button>\n" +
    "\n" +
    "	            </div>\n" +
    "\n" +
    "	            <div ng-if=\"notification.type=='REACTION'\">\n" +
    "	            	<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "	            	<a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{notification.info.user.username}}\">\n" +
    "	                	<img class=\"card-avatar\" ng-src=\"{{notification.info.user.avatarUrl}}\" src=\"{{notification.info.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "	                	{{notification.info.user.username}}\n" +
    "	                </a>\n" +
    "\n" +
    "	                <!--ASSOCIATED MODELS.. LOL-->\n" +
    "                	<p>{{notification.info.type}} <a href=\"content/{{notification.info.content.id}}\">{{notification.info.content.title}}:{{notification.info.content.id}}</a></p>\n" +
    "\n" +
    "	            </div>\n" +
    "\n" +
    "	            <div ng-if=\"notification.type=='TRANSACTION'\">\n" +
    "	            	<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "					<span ng-repeat=\"(key, value) in notification.info.transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation()\"  href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "	            </div>\n" +
    "\n" +
    "	            <div ng-if=\"notification.type=='VALIDATION'\">\n" +
    "	            	<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "		            <div layout=\"\">\n" +
    "	                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "	                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "	                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{memberValidate.totalWork}}</span></div>\n" +
    "	                </div>\n" +
    "	                <div class=\"spacing-10\"></div>\n" +
    "	                <h5>Content</h5>\n" +
    "	                <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "	                <div class=\"spacing-10\"></div>\n" +
    "	                <button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "	            </div>\n" +
    "\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"notification.createdAt\"></p>\n" +
    "\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("order/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Order</h1>\n" +
    "                            <span ng-repeat=\"(key, value) in order.setAlpha\">\n" +
    "                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "                            </span>\n" +
    "                            <br>\n" +
    "                            <span ng-repeat=\"(key, value) in order.setBeta\">\n" +
    "                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "                            </span>\n" +
    "                            <h5 style=\"color:white\"><span style=\"font-size:10px\">{{order.type}}</span></h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(order)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "\n" +
    "                    <div class=\"col-xs-2\">\n" +
    "                        <span ng-repeat=\"(key, value) in order.setAlpha\">\n" +
    "                            <p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"col-xs-1\"><i class=\"fa fa-exchange\"></i></div>\n" +
    "\n" +
    "                    <div class=\"col-xs-2\">\n" +
    "                        <span ng-repeat=\"(key, value) in order.setBeta\">\n" +
    "                            <p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            	<a href=\"member/{{order.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{order.user.avatarUrl}}\" src=\"{{order.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{order.user.username}}\n" +
    "                </a>\n" +
    "\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"createReaction(order, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{order.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            </div>\n" +
    "            <div ng-click=\"$event.stopPropagation();\" ng-show=\"order.showReply\" class=\"card-footer\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(order)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "            <li><a href=\"#\">Trades</a></li>\n" +
    "            <li><a href=\"#\">Transactions</a></li>\n" +
    "            <!--\n" +
    "            <h5>Seller to Eskrow, Buyer to Eskrow, Eskrow to Engine, Engine to Seller, Engine to Buyer</h5>\n" +
    "            <h5>Seller to Buyer, Buyer to Seller</h5>\n" +
    "            -->\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: Partially Filled Orders -->\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <!--JUST A TEST-->\n" +
    "        <!--ORDER->ORDER ASSOCIATION; IE SUB ORDER; IE TAKER TRADE-->\n" +
    "        <div class=\"card\" ng-repeat=\"item in order.tokens\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <h4>{{order.amountSet}} {{order.identiferSet}}</h4>\n" +
    "                <h4>{{order.amountSet1}} {{order.identiferSet1}}</h4>\n" +
    "                <a href=\"member/{{order.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{order.user.avatarUrl}}\" src=\"{{order.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{order.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"createReaction(order, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{order.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Order Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                </div> \n" +
    "                <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            </div>\n" +
    "            <div class=\"\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<style>.angular-google-map-container { height: 200px;} </style>\n" +
    "\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"subNavToggle()\">\n" +
    "        <div class=\"imageContainerSmall\">\n" +
    "            <div class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div class=\"container\">\n" +
    "                        <h1 style=\"text-align:left;\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "                            {{project.title}}\n" +
    "                        </h1>\n" +
    "                        <h5 ng-show=\"project.parent\"><a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h5>\n" +
    "                        <!--<h5 ng-show=\"projectNavigation\"><span ng-show=\"projectNavigation\" style=\"color:white;text-transform:capitalize;\">{{projectNavigation}}</span></h5>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"markers.length>0\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div>\n" +
    "                            <div style=\"font-size: 15px;\"><a ng-click=\"$event.stopPropagation();\" href=\"project/{{market.urlTitle}}\">{{marker.content}}</a></div>\n" +
    "                        </div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:left\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs subNav\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/content\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/ledger\">Ledger</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/members\">Members</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/projects\">Projects</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/time\">Time</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();transactionToggle(project)\" class=\"btn btn-default\">Send Tokens</a></li>\n" +
    "                        <li style=\"float:right;margin-top:5px\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"nav-toggle\" style=\"padding:0px\">\n" +
    "                <ul style=\"padding:10px 5px;margin-bottom:0px\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:right;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();filterToggle('DISCOVER');\" style=\"float:left;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-filter\"></i></a></li>\n" +
    "                    <li>\n" +
    "                        <form ng-click=\"$event.stopPropagation();\" style=\"display:flex;flex-direction:row;float:left;width:80%\">\n" +
    "                            <tags-input style=\"border:0px;flex-grow:2;height:40px;margin-top: -7px;margin-bottom: 3px;\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                        </form>\n" +
    "                    </li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div ui-view=\"projectAbout\"></div>\n" +
    "    <div ui-view=\"projectActivity\"></div>\n" +
    "    <div ui-view=\"projectAssets\"></div>\n" +
    "    <div ui-view=\"projectChannels\"></div>\n" +
    "    <div ui-view=\"projectContent\"></div>\n" +
    "    <div ui-view=\"projectCharter\"></div>\n" +
    "    <div ui-view=\"projectItems\"></div>\n" +
    "    <div ui-view=\"projectLedger\"></div>\n" +
    "    <div ui-view=\"projectMembers\"></div>\n" +
    "    <div ui-view=\"projectPositions\"></div>\n" +
    "    <div ui-view=\"projectProjects\"></div>\n" +
    "    <div ui-view=\"projectSettings\"></div>\n" +
    "    <div ui-view=\"projectTasks\"></div>\n" +
    "    <div ui-view=\"projectTime\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>");
}]);

angular.module("project/templates/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/about.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Motion to Edit</button>\n" +
    "    </div>\n" +
    "    \n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "\n" +
    "            <p><b>Avatar</b></p>\n" +
    "            <img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\">\n" +
    "            <p>{{project.avatarUrl}}</p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <p><b>Title</b></p>\n" +
    "            <p>{{project.title}}</p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "			\n" +
    "            <p><b>Description</b></p>\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <p><b>Wallet Address</b></p>\n" +
    "            <p><a ng-click=\"transactionToggle()\"><img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{project.id}}\"> {{project.id}}</a></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <div ng-if=\"project.location\">\n" +
    "                <p><b>Location</b></p>\n" +
    "                <p><b>Latitude</b>: {{project.location.lat}}, <b>Longitude</b>: {{project.location.lng}}</p>\n" +
    "                <p><b>Address</b>: {{project.location.address}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <p><b>Associations</b></p>\n" +
    "            <p><b>Members</b>: <a>{{project.memberCount || 0}}</a> | <b>Tasks</b>: <a>{{project.taskCount || 0}}</a> | <b>Time</b>: <a>{{project.timeCount||0 }}</a></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <!--TODO-->\n" +
    "            <p><b>Project Charter</b></p>\n" +
    "            <p>Reputation & Verification Dimensions</p>\n" +
    "            <p>Validation Types</p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <p><b>Manifolds</b></p> \n" +
    "            <p>'<a href=\"market/project/project.urlTitle.toUpperCase()\">{{project.urlTitle.toUpperCase()}}+</a>, <a href=\"market/project/project.urlTitle.toUpperCase()+TASK+\">{{project.urlTitle.toUpperCase()}}+TASK+</a>, <a href=\"market/project/project.urlTitle.toUpperCase()+TIME+\">{{project.urlTitle.toUpperCase()}}+TIME+</a>'</p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div ng-show=\"activity.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"activity.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li class=\"mobileFix\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card mobileFix\">\n" +
    "            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>    \n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <p style=\"text-align:right\">\n" +
    "                            <a style=\"color:gray\" ng-click=\"$event.stopPropagation();cardDetailToggle(item);\"><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation()\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"task/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <p style=\"text-align:right\">\n" +
    "                            <a style=\"color:gray\" ng-click=\"$event.stopPropagation();cardDetailToggle(item);\"><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                    <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>     \n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <p style=\"text-align:right\">\n" +
    "                            <a style=\"color:gray\" ng-click=\"$event.stopPropagation();cardDetailToggle(item);\"><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <img ng-click=\"$event.stopPropagation();\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                        <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <p ng-click=\"$event.stopPropagation();\" ng-show=\"item.task.tags > 0\" style=\"margin-left:42px\">\n" +
    "                        <a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag}} </a>\n" +
    "                    </p>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TRANSACTION'\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <p style=\"text-align:right\">\n" +
    "                            <a style=\"color:gray\" ng-click=\"$event.stopPropagation();cardDetailToggle(item);\"><i class=\"fa fa-ellipsis-v\"></i>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.from.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.from.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.from.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "                    <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                        <i class=\"fa fa-arrow-right\"></i>\n" +
    "                    </div>\n" +
    "                    <div style=\"display:inline\">\n" +
    "                        <span ng-if=\"item.to.username\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.username}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"item.to.title\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.to.title}}\n" +
    "                            </a>\n" +
    "                        </span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p>{{item.content}}</p>\n" +
    "                    <p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> | {{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "                    <a ng-click=\"$event.stopPropagation();\" href=\"transaction/{{item.id}}\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"transaction/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>  \n" +
    "           \n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("project/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/assets.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"card mobileFix\">\n" +
    "        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                <a href=\"#\" role=\"button\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-6\">\n" +
    "					<h5>Asset Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{project.id}}</span></h5>\n" +
    "			   		<form style=\"display:flex;flex-direction:row;\">\n" +
    "			        	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "			        	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			                <a href=\"#\">\n" +
    "			                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			                </a>\n" +
    "						</div>\n" +
    "			    	</form>\n" +
    "			    </div>\n" +
    "			    <div class=\"col-sm-6\">\n" +
    "					<h5>Project Reputation Lookup <span style=\"font-size:11px;color:gray\">0x{{project.id}}</span> </h5>\n" +
    "			   		<form style=\"display:flex;flex-direction:row;\">\n" +
    "			        	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "			        	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "			                <a href=\"#\">\n" +
    "			                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "			                </a>\n" +
    "						</div>\n" +
    "			    	</form>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	   	</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/channels.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-2\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"\" ng-repeat=\"channel in channels\">\n" +
    "                    <h4><a href=\"#\">{{channel.title}}</a></h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button ng-click=\"contentToggle()\" class=\"btn btn-default log-btn\">+ Channel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"contentToggle()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">+ Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/charter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/charter.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "         <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Status</b></span>\n" +
    "                <div ng-repeat=\"status in status\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{status}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Types</b></span>\n" +
    "                <div ng-repeat=\"type in types\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{type}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"type in types\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{type}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Motion</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in enactedMotions\">\n" +
    "            <div class=\"card\" ng-click=\"\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <h4><a href=\"content/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                    <p><a>{{item.type}}</a></p>\n" +
    "                    <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                    <p><span am-time-ago=\"item.createdAt\"></span></p>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a href=\"#\" ng-click=\"validationToggle(time)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                        <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in motions\">\n" +
    "            <div class=\"card\" ng-click=\"\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                    </div>\n" +
    "\n" +
    "                 	<h4><a href=\"content/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                    <p><a>{{item.type}}</a></p>\n" +
    "                    <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                 	<p><span am-time-ago=\"item.createdAt\"></span></p>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a href=\"#\" ng-click=\"validationToggle(time)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "                    <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                        <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<p style=\"text-align:right;font-style:italic\"><a style=\"color:gray\" href=\"https://www.voetr.com\">voetr API</a></p>\n" +
    "");
}]);

angular.module("project/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/content.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"contentList.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0:=\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card mobileFix\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--TODO-->\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "\n" +
    "                <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div style=\"\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"font-weight:700\" href=\"member/{{item.user.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"> {{item.user.username}}\n" +
    "                        </a>\n" +
    "                        <span am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"margin-top:0px;margin-bottom:10px;\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"#\"  ng-click=\"filterContent(tag)\">{{tag}} </a></p>\n" +
    "\n" +
    "                    <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"color:gray\"> • created <span am-time-ago=\"item.createdAt\"></span></a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/items.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/items.tpl.html",
    "<div class=\"row\" >\n" +
    "\n" +
    "    <div ng-show=\"items.length == 0\"> \n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Item</button>\n" +
    "        </div>\n" +
    "\n" +
    "         <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"items.length > 0\">\n" +
    "\n" +
    "        <div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Tags</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Associations</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span><b>Locations</b></span>\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "   \n" +
    "        <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            \n" +
    "            <div class=\"card mobileFix\">\n" +
    "                <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                    <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                        <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-repeat=\"item in items\">\n" +
    "                <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.title}}</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div>  \n" +
    "\n" +
    "                        <p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "\n" +
    "                        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                            <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                        </div>  \n" +
    "\n" +
    "                        <!--[] + [] -->\n" +
    "                        <!--IF SALE-->\n" +
    "                        <h5>{{item.amountSet}} <a href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h5>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a class=\"pull-right\" style=\"padding:0px;\" href=\"item/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" clas=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "                <div style=\"\">\n" +
    "                    <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("project/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/ledger.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Assets</b></span>\n" +
    "	            <div ng-repeat=\"asset in sortedTransactionAssets\">\n" +
    "	                <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Tags</b></span>\n" +
    "	            <div ng-repeat=\"tag in sortedTransactionTags\">\n" +
    "	                <a href=\"#\" ng-click=\"selectTag(tag.element)\">{{tag.element}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Associations</b></span>\n" +
    "	            <div ng-repeat=\"tag in sortedTransactionTags\">\n" +
    "	                <a href=\"#\" ng-click=\"selectTag(tag.element)\">{{tag.element}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li ng-click=\"selectOverview()\"><a href=\"\">Overview</a></li>\n" +
    "			<li ng-click=\"selectExpense()\"><a href=\"\">Expense</a></li>\n" +
    "			<li ng-click=\"selectRevenue()\"><a href=\"\">Revenue</a></li>\n" +
    "\n" +
    "			<!--TODO-->\n" +
    "			<li style=\"float:right\">\n" +
    "				<a ng-click=\"filterToggle('LEDGER', filterSet)\" href=\"#\">\n" +
    "					{{assetSet[0].element}}\n" +
    "					<!--<span ng-repeat=\"asset in assetSet\">{{asset.element}}</span>-->\n" +
    "					<i class=\"fa fa-question-circle\"></i>\n" +
    "				</a>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "\n" +
    "		<div class=\"card mobileFix\">\n" +
    "		    <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "		        <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		        <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "		            <a href=\"#\" role=\"button\">\n" +
    "		                <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		            </a>\n" +
    "		        </div>\n" +
    "		    </form>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle(project)\">+ Transaction</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "				<div class=\"row\">\n" +
    "					<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-xs-6\">\n" +
    "\n" +
    "						<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker style=\"display:inline\" ng-model=\"startDate\" md-placeholder=\"Start date\"></md-datepicker></div>\n" +
    "	      				<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\"></md-datepicker></div>\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					<!--TODO-->\n" +
    "					<div style=\"text-align:right;\" class=\"col-xs-6\">\n" +
    "						<h5>{{sumTransactions[sumTransactions.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Balance</h5>\n" +
    "						<h5>{{sumTo[sumTo.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Revenue</h5>\n" +
    "						<h5>{{sumFrom[sumFrom.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Expense</h5>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "				<!--children projects..-->\n" +
    "\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"pie\"></highchart>\n" +
    "				</div>\n" +
    "\n" +
    "				<!--TODO TABLE-->\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\" ng-repeat=\"transaction in transactions\" ng-click=\"cardDetailToggle(transaction)\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "                	<a ng-click=\"$event.stopPropagation();tokensToggle(task)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                </div>\n" +
    "		\n" +
    "				\n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"transaction.from.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.from.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.from.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"transaction.from.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.from.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.from.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                    <i class=\"fa fa-arrow-right\"></i>\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"transaction.to.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.to.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.to.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"transaction.to.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.to.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.to.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                \n" +
    "				<span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "				<p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in transaction.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "				<p>{{transaction.content}}</p>\n" +
    "				<p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "				<a ng-click=\"$event.stopPropagation();\" href=\"transaction/{{transaction.id}}\"></a>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.reactions.plus}} like </a> \n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.reactions.minus}} dislike </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{transaction.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<div ng-click=\"$event.stopPropagation();\" ng-show=\"transaction.showReply\" class=\"card-footer\">\n" +
    "	            <form role=\"form\" ng-submit=\"createContent(transaction)\">\n" +
    "	                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "	                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "	            </form>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/members.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/members.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "		<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">+ motion to join</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\" style=\"padding-left:10px;padding-right:10px;\">\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\" style=\"margin-bottom:10px\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.user.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation()\" href=\"member/{{member.user.username}}\"><img ng-src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "		        <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h4>\n" +
    "		        <p style=\"font-size:13px;\"><a href=\"/member/{{member.user.username}}/projects\">{{member.user.projectCount || 0}} Projects</a> | <a href=\"/member/{{member.user.username}}/followers\">{{member.user.followerCount || 0}} Followers</a> | <a href=\"/member/{{member.user.username}}/following\">{{member.user.followingCount || 0}} Following</a>\n" +
    "\n" +
    "		       	<p style=\"color:gray\">Total Reputation | {{member.user.totalWork || 0}}</p>\n" +
    "		        <p style=\"color:gray\">{{project.title}} | {{member.user.reputation[project.title] || 0}}</p>\n" +
    "                <p style=\"color:gray\">{{member.user.status}} Offline</p>\n" +
    "\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "                \n" +
    "                \n" +
    "              ");
}]);

angular.module("project/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Base Assets</b></span>\n" +
    "	            <div ng-repeat=\"market in baseMarkets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\">{{market.text}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Assets</b></span>\n" +
    "	            <div ng-repeat=\"market in markets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\">{{market.text}}</a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Motion to Create Order</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?code,finance')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Value Map</h1>\n" +
    "                        <p style=\"color:white;\">Our Shared Value</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "				<!--<div style=\"float:right\">\n" +
    "					<a href=\"#\" ng-click=\"filterToggle()\"><span ng-repeat=\"dimension in baseMarkets\">{{dimension.text}}, </span><i class=\"fa fa-question-circle\"></i></a>\n" +
    "				</div>-->\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<!--<div style=\"\">\n" +
    "					<a href=\"#\" ng-click=\"filterToggle()\"><span ng-repeat=\"dimension in markets\">{{dimension.text}}, </span><i class=\"fa fa-question-circle\"></i></a>\n" +
    "				</div>-->\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--ACTUAL ORDERS && MOTIONS-->\n" +
    "\n" +
    "		<div ng-repeat=\"item in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?')\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div class=\"container\">\n" +
    "	                            <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "	                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "	                            </span>\n" +
    "	                            <br>\n" +
    "	                            <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "	                                <a style=\"color:white\" href=\"market/{{key}}\">{{key}}</a>\n" +
    "	                            </span>\n" +
    "	                            <h5 style=\"color:white\"><span style=\"font-size:10px\">{{item.type}}</span></h5>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "\n" +
    "\n" +
    "	            <div style=\"padding:16px\">\n" +
    "	            	<div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div> \n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "	                    <div class=\"col-xs-2\">\n" +
    "	                        <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "	                            <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "	                        </span>\n" +
    "	                    </div>\n" +
    "\n" +
    "	                    <div class=\"col-xs-1\"><i class=\"fa fa-exchange\"></i></div>\n" +
    "\n" +
    "	                    <div class=\"col-xs-2\">\n" +
    "	                        <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "	                            <p style=\"font-weight:400\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p>\n" +
    "	                        </span>\n" +
    "	                    </div>\n" +
    "                    </div>\n" +
    "                    \n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "	                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "	                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "	");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
    "<!--GRAPH REPRESENTATION IN THE COMPUTERD ASSOCIATION NETWORK..-->\n" +
    "<div ng-show=\"project.parent\">\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "	<h3><a href=\"project/{{project.urlTitle}}\"><img style=\"height:32px\" src=\"{{project.parent.avatarUrl}}\"> <a href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h3>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "    	<button class=\"btn btn-default log-btn\" ng-click=\"projectToggle()\">+ Project</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--ASSOCIATIONS FOR TRAVERSAL-->\n" +
    "<div class=\"row\">\n" +
    "	<div ng-repeat=\"project in projects\" ng-click=\"cardDetailToggle(project)\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "                    <div class=\"col-sm-1 col-xs-2\"><a ng-click=\"$event.stopPropagation();\" href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a></div>\n" +
    "                    <div class=\"col-sm-11 col-xs-10\">\n" +
    "                        <h3 style=\"margin-top:0px\"><a ng-click=\"$event.stopPropagation();\" href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
    "                        <div style=\"max-height:500px;overflow:scroll\"><span ng-bind-html=\"renderContent(project.description)\"></span></div>\n" +
    "                    </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/settings.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Motion to Edit</button>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "\n" +
    "            <h1>Settings</h1>\n" +
    "\n" +
    "            <h3>{{project.title}}</h3>\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "			<p>Protocols</p>\n" +
    "\n" +
    "			<p>Manifolds</p>\n" +
    "            <p>Token Manifolds: '{{project.title}}+'</p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div ng-show=\"items.length == 0\">\n" +
    "       <div class=\"card\">\n" +
    "		    <button class=\"btn btn-default log-btn\" ng-click=\"itemToggle()\">+ Task</button>\n" +
    "		</div>\n" +
    "	    <div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div ng-show=\"tasks.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "				<span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"tasks.length > 0\" class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "    	<ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "	    <div class=\"card mobileFix\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "\n" +
    "	    <div class=\"card\">\n" +
    "	        <button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button>\n" +
    "	    </div>\n" +
    "	\n" +
    "		<div ng-repeat=\"item in tasks\">\n" +
    "			<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 ng-click=\"$event.stopPropagation()\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"task/{{item.id}}\">{{item.title}}</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div style=\"float:right;text-align:right\">\n" +
    "                    	<a ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-ellipsis-v\"></i></span></a>\n" +
    "                    </div>\n" +
    "					<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "					<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "		                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		            </form>\n" +
    "		        </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/time.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"time.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!--HMMM...-->\n" +
    "    <div ng-show=\"false\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"time.length > 0\" class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card mobileFix\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"timeToggle()\">+ Time</button>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in time\" ng-if=\"time.length > 0\">\n" +
    "            <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.amount}}</h1>\n" +
    "                                <h5 style=\"text-align:left;color:rgba(255,255,255,0.9);\">{{item.startTime | date:\"h:mma | MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma | MM/dd/yyyy\"}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>  \n" +
    "                    <a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"font-weight:700\" href=\"member/{{item.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"> {{item.user.username}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <h1>Projects</h1>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-6\">\n" +
    "                        <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                            <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                                <h4 style=\"text-align:right;margin-top:20px\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "                            </a>\n" +
    "                            <ul class=\"dropdown-menu\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "                                <hr class=\"sort-hr\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('memberCount DESC')\"><h5>Member Count</h5></a></li>\n" +
    "                                <hr class=\"sort-hr\">\n" +
    "                                <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getLatLng()\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "            <li ng-if=\"currentUser\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getMyProjects()\"><i class=\"fas fa-project-diagram\"></i> My Projects</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a  href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\">{{marker.content}}</a></div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"projectToggle()\">+ project</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"project in projects\">\n" +
    "            <div class=\"card\" ng-click=\"cardDetailToggle(project)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-1 col-xs-2\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-11 col-xs-10\">\n" +
    "                            <p style=\"float:right;text-align:right\">\n" +
    "                                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(project)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                                <span style=\"color:gray\" ng-if=\"project.location\"><!--{{project.location.address}} <i class=\"fa fa-map-marker\"></i>--></span>\n" +
    "                            </p>\n" +
    "                            <h3 style=\"float:left;margin-top:0px\"><a ng-click=\"$event.stopPropagation()\" href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "                            <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                                <span ng-bind-html=\"renderContent(project.description)\"></span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"projects.length > 0\" ng-click=\"loadMore()\" class=\"card\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("reaction/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reaction/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div style=\"float:right\">\n" +
    "                    <h5 ng-click=\"tokensToggle(reaction)\"><a href=\"\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                </div>\n" +
    "\n" +
    "                {{reaction}}\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 class=\"imageContainerSmallDivH1\">Join Our Community</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" ng-if=\"showMap\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div ng-show=\"pageNumber == 0\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?creative,geometry,technology,rockets')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Create Your Value Map</h1>\n" +
    "                            <p style=\"color:white;\">Participate in creating a mechanism of value.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"font-style:italic;color:gray;margin:0px\">The more complete and intentional your dimensional vote the better.</p>\n" +
    "                    <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                    <!--\n" +
    "                    <p style=\"color:gray;font-style:italic\">\n" +
    "                        <span>All information given to the CRE8 NETWORK comes from a place of mutual consent. <b>I agree.</b></span>\n" +
    "                        <md-switch style=\"float:right;height:auto;margin:0px\" ng-model=\"consentAgreement\" aria-label=\"Consent Agreement\"></md-switch>\n" +
    "                    </p>\n" +
    "                    -->\n" +
    "                    <button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('FORWARD')\" class=\"btn btn-default log-btn\">Continue <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"pageNumber == 1\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Your Personal Value</h1>\n" +
    "                            <p style=\"color:white;\">What do you believe is valuable?</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">Select what you believe is worthwile.</p>\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">The more detailed your dimensional vote the stronger the effect.</p>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?value,finance,vote\"></div>\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?humananity,city,community\"></div>\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?code,love,joy\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fa fa-eye\"></i> UNIVERSALTOKEN</a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "                <form style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQueryArray\"></tags-input>\n" +
    "                    <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-3 col-xs-12\" style=\"max-height:50vh;overflow:scroll\">\n" +
    "                            <div style=\"font-size:14px;font-weight:bold\" ng-repeat=\"item in sortedTagArray track by $index\">\n" +
    "                                <button ng-click=\"createPosition(item.element)\" class=\"btn btn-default log-btn\">{{item.element}}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-9 col-xs-12\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <div ng-show=\"false\">\n" +
    "                                        <p style=\"color:gray;margin:0px;font-size:12px\"><b>What is this?</b></p>\n" +
    "                                        <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">We start defining your value map though understanding statements of preference. This is used to coordinate orders on CRE8's Multi Dimensional Token Market.</p>\n" +
    "                                        <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">We present a context of discovery for tokenization actions. Actions are manifest though projects, tasks, time, content, and a variety of other protocol actions are represented on CRE8's network.</p>\n" +
    "                                    </div>\n" +
    "                                    <div ng-repeat=\"item in newOrder\">\n" +
    "                                        <div layout=\"\">\n" +
    "                                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item[1].identifier.split('+')[2]}}</span></div>\n" +
    "                                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item[0].amount\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"Amount\"></md-slider>\n" +
    "                                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item[0].amount || 0}}</span></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                                    <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                                    <highchart config=\"pieTotal\"></highchart>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('FORWARD')\" class=\"btn btn-default log-btn\">Continue <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"false\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?rest,exercise,work,play')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">A Valuable Day</h1>\n" +
    "                            <p style=\"color:white;\">How would an ideal day look to you?</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">A day well spent. Striving for universal adaptation and reflectivity, your dimensional vote can be encompassing of all aspects of the human experience.</p>\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1468322638156-074863f9362e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1504246979673-176ed6740840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"dailyTimeValue\"></tags-input>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <div ng-show=\"false\">\n" +
    "                                <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">Thinking about an archetypal idealized day - a discrete universe of time. Tell us how a human would thirve. All Intentional Time is a Tokenized Event.</p>\n" +
    "                            </div>\n" +
    "                            <div ng-repeat=\"item in dailyTimeValue\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item.text}}</span></div>\n" +
    "                                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item.percentage\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item.percentage.toFixed(3) || 0}}%</span></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <highchart config=\"chartMapTime\"></highchart>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('FORWARD')\" class=\"btn btn-default log-btn\">Continue <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"pageNumber == 2\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?information,genetics,dna,human,personal,passport,identity')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Personal Information & Settings</h1>\n" +
    "                            <p style=\"color:white;\">What would you like us all to know about you?</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">We Promote Consentual Sharing. Give as much information as you would like.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">All information given to the CRE8 NETWORK comes from a place of mutual consent. <b>I agree.</b> <md-switch style=\"float:right;height:auto;margin:0px\" ng-model=\"consentAgreement\" aria-label=\"Consent Agreement\"></md-switch></p>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?personal\"></div>\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?human\"></div>\n" +
    "                        <div class=\"col-xs-4\"><img src=\"https://source.unsplash.com/900x900/?joy\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <!--\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Avatar Url</h5><input type=\"text\" ng-model=\"newMember.avatarUrl\" placeholder=\"Avatar Url\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Cover Url</h5><input type=\"text\" ng-model=\"newMember.coverUrl\" placeholder=\"Cover Url\" class=\"form-control\"></div>\n" +
    "                    -->\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>First Name</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Last Name</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.lastName\" placeholder=\"Last Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Username</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.email\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Email</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.email\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Phone Number</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Description</h5><text-angular ng-disabled=\"!consentAgreement\" ng-model=\"newMember.description\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular></div>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div class=\"col-md-2 col-sm-2 col-xs-3\"  style=\"padding:0px\"><button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('BACK')\" class=\"btn btn-default log-btn\"><i class=\"fa fa-arrow-left\"></i> Back</button></div>\n" +
    "                <div class=\"col-md-10 col-sm-10 col-xs-9\" style=\"padding:0px\"><button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('FORWARD')\" class=\"btn btn-default log-btn\">Continue <i class=\"fa fa-arrow-right\"></i></button></div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"pageNumber == 3\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?egalitarian,sharing,love,creative,world,community,awesome')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Let's Go!</h1>\n" +
    "                            <p style=\"color:white;\">It's time to create a more egalitarian world.</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">   \n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-12 col-sm-6 col-md-6\" style=\"padding-right:5px;padding-left:10px\">\n" +
    "                            <div class=\"member-card\">\n" +
    "                                <div class=\"member-card-image\" style=\"background-image: url('https://source.unsplash.com/1600x900/?sharing,love,creative,world,community')\">\n" +
    "                                    <a href=\"#\"><img ng-src=\"{{newMember.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                                </div>\n" +
    "                                <div style=\"clear:both\"></div>\n" +
    "                                <div class=\"member-card-info\" style=\"height:auto;padding-left:0%\">\n" +
    "                                    <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{newMember.username}}\">{{newMember.username}}</a></h4>\n" +
    "                                    <p style=\"color:gray\"><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Creating Account</p>     \n" +
    "                                    <h4 ng-show=\"newMember.firstName\">{{newMember.firstName}} {{newMember.lastName}}</h4>\n" +
    "                                    <h5 ng-show=\"newMember.dateOfBirth\">{{newMember.dateOfBirth}}</h5>\n" +
    "                                    <h5 ng-show=\"newMember.email\"><i class=\"fas fa-envelope\"></i> {{newMember.email}}</h5>\n" +
    "                                    <h5 ng-show=\"newMember.phoneNumber\"><i class=\"fas fa-phone\"></i> {{newMember.phoneNumber}}</h5>\n" +
    "                                    <!--\n" +
    "                                    <p style=\"color:gray\">{{currentUser.id}}<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></p>\n" +
    "                                    -->\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"false\" class=\"member-card-social\">\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n" +
    "                            <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12\">\n" +
    "                            <div>\n" +
    "                                <h3>Value Map</h3>\n" +
    "                                <p style=\"color:gray;font-size:12px;font-style:italic\">Do you want to keep working on your value map?</p>\n" +
    "                                <a ng-click=\"changePage(1)\" class=\"btn btn-default\"><b>Keep Creating?</b></a>\n" +
    "                                <div class=\"\" ng-repeat=\"order in newOrderNEW\">\n" +
    "                                    <span style=\"color:gray\" ng-repeat=\"(asset, value) in order.setAlpha\">{{value}} <a href=\"market/{{asset}}\">{{asset}}</a>, </span> | \n" +
    "                                    <span style=\"color:gray\" ng-repeat=\"(asset, value) in order.setBeta\">{{value}} <a href=\"market/{{asset}}\">{{asset}}</a>, </span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "                    <input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "                    <input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\"><h5 style=\"color: gray;font-style: italic;\">Already A Member?</h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?{{searchQueryString}}')\" class=\"imageContainerSmall\">\n" +
    "	    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	        	<div class=\"container\">\n" +
    "	            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{searchQueryString}}</h1>\n" +
    "	        	</div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<!--LOCATION FILTERS-->\n" +
    "	<!--SEARCH FILTERS-->\n" +
    "\n" +
    "	<!--TAG FILTERS-->\n" +
    "	<!--{{tags}}-->\n" +
    "	\n" +
    "	<!--TOKEN FILTERS-->\n" +
    "	<!--Protocol | Context-->\n" +
    "	<!--Market Discoverability-->\n" +
    "	<!--Orders-->\n" +
    "\n" +
    "	<!--RESULTS-->\n" +
    "\n" +
    "	<!--SORT-->\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "\n" +
    "			<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "				<!--TODO: MOBILE-->\n" +
    "				<!--TODO: URL-->\n" +
    "				<!--TODO: FILTER RENDER-->\n" +
    "		        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "						<span><b>Tags</b></span>\n" +
    "		                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "			    <div class=\"card\" ng-if=\"sortedAssociationArray.length > 0\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "		                <span><b>Associations</b></span>\n" +
    "		                <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		        <div class=\"card\" ng-if=\"locations.length > 0\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "		                <span><b>Locations</b></span>\n" +
    "		                <div ng-repeat=\"location in locations\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "\n" +
    "			<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "				<!--MODEL FILTERS-->\n" +
    "				<div ng-if=\"searchResults.length > 0\" class=\"container\">\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "					<div class=\"row\">\n" +
    "						<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "							<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "							<li><a href=\"/content\">Content</a></li>\n" +
    "							<li><a href=\"/marketplace\">Items</a></li>\n" +
    "							<li><a href=\"/members\">Members</a></li>\n" +
    "							<li><a href=\"/market\">Orders</a></li>\n" +
    "							<li><a href=\"/projects\">Projects</a></li>\n" +
    "							<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "				</div>\n" +
    "\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "	                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "					<li style=\"float:right;font-size:14px\"><a>Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	            </ul>\n" +
    "	            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "	                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "			    </div>\n" +
    "\n" +
    "				<div ng-if=\"searchResults.length > 0\" class=\"card\">\n" +
    "			        <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "			        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "			    </div>\n" +
    "\n" +
    "				<div ng-if=\"searchResults.length == 0\" class=\"card\">\n" +
    "			        <div style=\"padding:16px;\">\n" +
    "			            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "\n" +
    "				<div ng-if=\"searchResults.length > 0\" ng-repeat=\"item in searchResults\">\n" +
    "\n" +
    "					<div ng-if=\"item.model=='CONTENT'\" class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "						<div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "		                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "		                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "		                            <div class=\"container\">\n" +
    "		                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"content/{{item.id}}\">{{item.title}}</h1>\n" +
    "		                            </div>\n" +
    "		                        </div>\n" +
    "		                    </div>\n" +
    "		                </div>\n" +
    "				        <div style=\"padding:16px;\">\n" +
    "				            <div>\n" +
    "\n" +
    "					        	<div style=\"float:right;text-align:right\">\n" +
    "		                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "				                </div>\n" +
    "\n" +
    "				                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "				                <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "				                <div style=\"display:inline;\" ng-show=\"item.profile != item.user.id && item.profile != member.id\">\n" +
    "				                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.contentModel\" style=\"display:inline;font-weight:600\" href=\"content/{{item.contentModel}}\">content {{item.contentModel}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "				                    <a ng-click=\"$event.stopPropagation();\" ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\">time {{item.time}}</a>\n" +
    "				                </div>\n" +
    "				                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "				                \n" +
    "				            </div>\n" +
    "\n" +
    "				            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "				        </div>\n" +
    "				        <div class=\"card-footer\">\n" +
    "				            <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "							<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "				            <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				            <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				        </div>\n" +
    "				        <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "				            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "								<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				            </form>\n" +
    "				        </div>\n" +
    "			    	</div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='MEMBER'\">\n" +
    "						<div class=\"row\" style=\"margin:0px\">\n" +
    "							<div class=\"col-xs-12\" style=\"padding:0px\">\n" +
    "								<div class=\"member-card card\" style=\"margin-bottom:0px\" ng-click=\"renderReputationToggle(item)\">\n" +
    "								    <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "								        <a ng-click=\"$event.stopPropagation();\" href=\"member/{{item.username}}\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "								    </div>\n" +
    "            						<div class=\"member-card-info\" style=\"padding:16px;height:auto\">\n" +
    "								        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "		        						<p style=\"font-size:13px;\"><a href=\"/member/{item.username}}/projects\">{{item.projectCount || 0}} Projects</a> | <a href=\"/member/{{item.username}}/followers\">{{item.followerCount || 0}} Followers</a> | <a href=\"/member/{{item.username}}/following\">{{item.followingCount || 0}} Following</a>\n" +
    "								        <p style=\"color:gray\">Total Reputation | {{item.totalWork}}</p>\n" +
    "								        <p style=\"color:gray\">{{item.status}} Offline</p>\n" +
    "								    </div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='ORDER'\" class=\"card\" ng-click=\"renderToggle(item)\"></div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='PROJECT'\" class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "			            <div style=\"padding:16px;\">\n" +
    "			                <div class=\"row\">\n" +
    "			                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "		                        	<a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			                    </div>\n" +
    "			                    <div class=\"col-sm-11 col-xs-10\">\n" +
    "			                        <h3 style=\"margin-top:0px\">\n" +
    "			                            <a ng-click=\"$event.stopPropagation();\" href=\"/project/{{item.urlTitle}}\">\n" +
    "			                                {{item.title}}\n" +
    "			                            </a>\n" +
    "			                        </h3>\n" +
    "		                        	<p style=\"color:gray;font-style:italic;\"><span ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "			                    </div>\n" +
    "			                \n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='TASK'\" class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "						<div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "		                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "		                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "		                            <div class=\"container\">\n" +
    "		                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"task/{{item.id}}\"><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\" style=\"color:white\">{{item.title}}</h1>\n" +
    "		                            </div>\n" +
    "		                        </div>\n" +
    "		                    </div>\n" +
    "		                </div>\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<div style=\"float:right;text-align:right\">\n" +
    "	                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "			                </div>\n" +
    "							<h4><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "							<p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "	                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "							<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "						</div>\n" +
    "						<div class=\"card-footer\">\n" +
    "							<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "							<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "							<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        			<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "						</div>\n" +
    "						<div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "							<form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "								<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "								<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "							</form>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<!--TODO-->\n" +
    "					<div ng-if=\"item.model=='TIME'\" class=\"card\"></div>\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "				<div ng-if=\"searchResults.length > 0\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "	                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "	            </div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("task/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<style>.toast-success {background-color: #002c54;}</style>\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <!--TODO: ASSOCIATION-->\n" +
    "    <!--TODO: NEW VALIDATION DIMENSION / TAG SUGGESTION -->\n" +
    "\n" +
    "    <!--TODO: STREAM | IFPS-->\n" +
    "    <!--TODO: VALIDATION RENDER-->\n" +
    "    <!--TODO: NESTED RENDER -->\n" +
    "\n" +
    "    <!--TOKENS MINTING PER ACTION-->\n" +
    "    <!--TOKENS MINTED TOTAL-->\n" +
    "\n" +
    "    <!--ASSOCIATION SORTED BY MOST VALIDATIONS.. AKA CANT SCALE BY LISTING THEM ALL-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <!--TODO:..motion to edit..?-->\n" +
    "        <div style=\"row\" ng-if=\"currentUser.id == task.user\">\n" +
    "            <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "                <li><a ng-click=\"\" href=\"#\">Current</a></li>\n" +
    "                <li><a ng-click=\"\" href=\"#\">History</a></li>\n" +
    "                <li><a ng-click=\"\" href=\"#\">Motions</a></li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{task.title}}</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"padding:16px\">\n" +
    "                <div class=\"col-sm-12\" style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(task)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p><a ng-repeat=\"tag in task.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "                    <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"task.createdAt\"></p>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{task.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(task, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{task.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"reply(task)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a ng-click=\"validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"task.showReply\" class=\"card-footer\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(task)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div style=\"row\">\n" +
    "        <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li><a ng-click=\"showContentToggle()\" href=\"#\">Content</a></li>\n" +
    "            <li><a ng-click=\"showTimeToggle()\" href=\"#\">Time</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"showTime\">\n" +
    "\n" +
    "        <!--TODO: STREAM | IFPS-->\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div ng-show=\"!working\">\n" +
    "                    <button ng-show=\"!question\" type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"askQuestion()\">Create Time</button>\n" +
    "                    <div ng-show=\"question && !streaming\">\n" +
    "                        <h3>Streaming?</h3>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startTime()\">No</button>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"streaming\">\n" +
    "                        <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                        <input ng-show=\"false\" type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input ng-show=\"false\" type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startWork()\">Start Stream</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"working\">\n" +
    "\n" +
    "                    <h3>{{taskTime}}</h3>\n" +
    "\n" +
    "                    <!--IF NOT STREAM AND YA WANT TO STREAM-->\n" +
    "                    <!--<div ng-show=\"!streaming\">-->\n" +
    "                    <div ng-show=\"false\">\n" +
    "                        <input type=\"text\" placeholder=\"Link\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startStream()\">Start Stream</button>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-show=\"streaming\"> <div ng-bind-html=\"renderStream(streamUrl)\">></div></div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <tags-input ng-model=\"timeTags\" placeholder=\"Tags\"></tags-input>\n" +
    "\n" +
    "                    \n" +
    "                    <!--REALLY NEED TO DO ASSOCIATION COMPUTATION AND APPROPITAE QUERY-->\n" +
    "\n" +
    "                    <!--IF MULTIPLE??-->\n" +
    "                    <div ng-if=\"false\">\n" +
    "                        <h5>Selected Projects</h5>\n" +
    "                        <tags-input ng-model=\"selectedProjects\" placeholder=\"Selected Projects\"></tags-input>\n" +
    "                        <div ng-repeat=\"model in task.associatedModels\">\n" +
    "                            <p><a href=\"#\" ng-click=\"selectProject(model.address)\">Select {{model}}</a></p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <a ng-click=\"showValidationImplicitToggle()\" href=\"#\"><b>Task Validation</b></a>\n" +
    "\n" +
    "                    <!--PRE POPULATE YA MEMBERSHIP ETC.. IF ZEROd OUT SMART UX-->\n" +
    "                    <!--HAVE THE DOUBLE LOOP IF YOU WANT.. IE SUBMIT TASK-> PROJ CONTEXT..?-->\n" +
    "                    <!--UNIVERSAL UX FOR THIS IS IN NAV-->\n" +
    "                    <!--STARTS THE TIMER MODE || ALLOWANCE FOR MULTI -->\n" +
    "                    <!--DEPRECIATE AND MOVE TO NAV-->\n" +
    "\n" +
    "                    <div ng-show=\"showValidationImplicitToggleVar\">\n" +
    "\n" +
    "                        <!--{{task.associatedModels}}-->\n" +
    "                        <!--div ng-repeat=\"association in associatedModels\"></div>-->\n" +
    "                        <!--ALL 100-->\n" +
    "                        <!--ALL ASSOCIATIONS? -->\n" +
    "\n" +
    "                        <div layout=\"\">\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{memberValidate.totalWork}}</span></div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div ng-repeat=\"tag in timeTags track by $index\">\n" +
    "                            <div layout=\"\">\n" +
    "                                <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{tag.text}}</span></div>\n" +
    "                                <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation[tag.text]\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                                <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation[tag.text]}} | {{reputation[tag.text] || 0}}</span></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <text-angular ng-model=\"timeContent\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">Submit Time</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-repeat=\"item in time\" ng-click=\"renderToggle(item)\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(time)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation();\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                    <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "                <p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                <div style=\"margin-left:42px\">\n" +
    "                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: NESTED RENDER -->\n" +
    "    <div class=\"row\" ng-show=\"showContent\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Task Content</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in contentList\"  ng-click=\"\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a style=\"display:inline;font-weight:600\" href=\"/task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.angular-google-map-container{height: 200px;}\n" +
    "</style>\n" +
    "\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "		        <div class=\"row\">\n" +
    "					<div class=\"col-xs-6\">\n" +
    "						<h1>Tasks</h1>\n" +
    "			            <h5 style=\"color:white\" ng-if=\"selectedTag!=''\">{{selectedTag}}</h5>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-6\">\n" +
    "					    <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "		                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "					            <h4 style=\"text-align:right;margin-top:20px;\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "					        </a>\n" +
    "					        <ul class=\"dropdown-menu\">\n" +
    "					            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "					            <hr class=\"sort-hr\">\n" +
    "					            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('workCount DESC')\"><h5>Total Work</h5></a></li>\n" +
    "					            <hr class=\"sort-hr\">\n" +
    "					            <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "					        </ul>\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<!--TODO: TOKEN OUPUT FILTERS-->\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<!--TODO: MOBILE-->\n" +
    "			<!--TODO: URL-->\n" +
    "			<!--TODO: FILTER RENDER-->\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<span><b>Tags</b></span>\n" +
    "	                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		    <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <span><b>Associations</b></span>\n" +
    "	                <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(association.element)\">{{association.element}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <span><b>Locations</b></span>\n" +
    "	                <div ng-repeat=\"location in sortedLocationsArray\">\n" +
    "	                    <a href=\"#\" ng-click=\"filterContent(location.element)\">{{location}}</a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "\n" +
    "	    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "	    	<!--STATIC BUTTON FOR CURRENT LOCATION FILTER-->\n" +
    "		    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <!--<li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>-->\n" +
    "            </ul>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "				<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "			</div>\n" +
    "\n" +
    "	        <!--\n" +
    "	        <div class=\"card\">\n" +
    "				<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "			</div>\n" +
    "			-->\n" +
    "\n" +
    "			<div class=\"card\">\n" +
    "		        <button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button>\n" +
    "		    </div>\n" +
    "\n" +
    "\n" +
    "			<!--TODO: MARKET LOOKUP-->\n" +
    "			<!--TODO: ASSOCIATIONS-->\n" +
    "			<!--TODO: COMMENT-->\n" +
    "			<div ng-repeat=\"item in tasks\">\n" +
    "				<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "					<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "	                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                            <div class=\"container\">\n" +
    "	                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"task/{{item.id}}\">{{item.title}}</a></h1>\n" +
    "	                            </div>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<div style=\"float:right;text-align:right\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "		                </div>\n" +
    "						<p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "						<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "						<a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "						<a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "					</div>\n" +
    "					<div ng-show=\"task.showReply\" class=\"card-footer\">\n" +
    "		                <form role=\"form\" ng-submit=\"createContent(task)\">\n" +
    "		                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		                </form>\n" +
    "		            </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-show=\"tasks.length > 0\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("time/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("time/index.tpl.html",
    "<div ng-if=\"false\" style=\"background:black\" ng-show=\"time.stream\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "    <div style=\"text-align:center\">\n" +
    "		<span style=\"display:inline\" ng-bind-html=\"renderContent(time.stream.content)\"></span>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"!time.stream\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "		    	<h4>No Stream</h4>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: TIME CREATION &+ VALIDATION INFORMATION TYPES..  RETORACTIVE | TIMER | STREAM | API DATA.. ETC -->\n" +
    "	<!--TODO: BASED MANIFOLD FILTER | IE MULTIPLE TASKS | PARENTS -->\n" +
    "	<!--TODO: BASED MANIFOLD FILTER | IE MULTIPLE TASKS | PROJECTS | CONTENT | VALIDATIONS | PARENTS -->\n" +
    "	<!--TODO: NESTED RENDER-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"tokensToggle(time)\">\n" +
    "        	<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "			            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{time.amount}} Seconds</h1>\n" +
    "			            	<h5 style=\"color:white\"><span style=\"font-size:10px;color:white\">{{(time.amount/60).toFixed(2)}} minutes, <span style=\"font-size:10px;color:white\">{{(time.amount/3600).toFixed(2)}} hours</span></h5>\n" +
    "			            	<!--<h5 style=\"color:white\"><span style=\"\" am-time-ago=\"time.createdAt\"></span></h5>-->\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\" class=\"col-sm-12\">\n" +
    "\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(time)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                </div>\n" +
    "\n" +
    "				<a style=\"font-weight:700\" href=\"member/{{time.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{time.user.avatarUrl}}\" src=\"{{time.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					{{time.user.username}}\n" +
    "				</a>\n" +
    "                \n" +
    "                <!--TODO-->\n" +
    "                <p><a ng-repeat=\"tag in time.task.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}}<span ng-show=\"!$last\">,</span> </a></p>\n" +
    "				<p><a ng-repeat=\"tag in time.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}}<span ng-show=\"!$last\">,</span> </a></p>\n" +
    "\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"time.createdAt\"></p>\n" +
    "\n" +
    "				<!--TODO: CONTENT UNITY // EMBED // ASSOCIATED CONTENT-->\n" +
    "\n" +
    "				<div style=\"text-align:center;\" ng-if=\"false\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(time.stream.content)\"></span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "	                <span style=\"display:inline\" ng-bind-html=\"renderContent(time.content)\"></span>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<div style=\"clear:both\"></div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(time, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{time.reactions.plus}} like </a> \n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(time, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{time.reactions.minus}} dislike </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();reply(time)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		       	<a ng-click=\"$event.stopPropagation();validationToggle(time)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "			</div>\n" +
    "			<div ng-click=\"$event.stopPropagation();\" ng-show=\"time.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"newContent(item)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "					<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: NESTED RENDER-->\n" +
    "	<div class=\"row\">\n" +
    "	    <div ng-repeat=\"item in contentList\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "						<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "					</div>\n" +
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "					<form role=\"form\" ng-submit=\"newContent(item)\">\n" +
    "						<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "						<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "					</form>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("token/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("token/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?,geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{token.string}}</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div style=\"row\">\n" +
    "        <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li class=\"active\"><a href=\"#\">Activity</a></li>\n" +
    "            <li><a href=\"#\">Trade Postions</a></li>\n" +
    "            <li><a href=\"#\">onMint Actions</a></li>\n" +
    "            <li><a href=\"#\">Information</a></li>\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "	    		<p>String: {{token.string}}</p>\n" +
    "				<p>Information: In Circulation: {{token.information.inCirculation}}</p>\n" +
    "	    		<p>Protocols: {{token.protocols}}</p>\n" +
    "	    		<p>Logic: Transferrable: {{token.logic.transferrable}} Mint: {{token.logic.mint}}</p>\n" +
    "    		</div>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("transaction/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "    \n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{transaction.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div class=\"container\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Transaction {{transaction.id}}</h1>\n" +
    "                        <h5 style=\"color:white\"><span am-time-ago=\"transaction.createdAt\"></span> • {{transaction.createdAt}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px\">\n" +
    "            \n" +
    "            <div style=\"float:right;text-align:right\">\n" +
    "                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();renderValidationToggle(transaction)\"><span style=\"color:gray\"></span><i class=\"fas fa-bezier-curve\"></i></a>\n" +
    "                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(transaction)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"display:inline\">\n" +
    "                <span ng-if=\"transaction.from.username\">\n" +
    "                    <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.from.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{transaction.from.username}}\n" +
    "                    </a>\n" +
    "                </span>\n" +
    "                <span ng-if=\"transaction.from.title\">\n" +
    "                    <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.from.urlTitle}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{transaction.from.title}}\n" +
    "                    </a>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                <i class=\"fa fa-arrow-right\"></i>\n" +
    "            </div>\n" +
    "            <div style=\"display:inline\">\n" +
    "                <span ng-if=\"transaction.to.username\">\n" +
    "                    <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.to.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{transaction.to.username}}\n" +
    "                    </a>\n" +
    "                </span>\n" +
    "                <span ng-if=\"transaction.to.title\">\n" +
    "                    <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.to.urlTitle}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{transaction.to.title}}\n" +
    "                    </a>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "                        \n" +
    "            <span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "            <p>{{transaction.content}}</p>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.reactions.plus}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.reactions.minus}} dislike </a>\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"contentToggle(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"transaction.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createContent(transaction)\">\n" +
    "                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    " \n" +
    "    <div class=\"card\" ng-repeat=\"transaction in contentList\">\n" +
    "        <div style=\"padding:16px\" ng-click=\"\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{transaction.user.avatarUrl}}\" src=\"{{transaction.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.user.username}}\">{{transaction.user.username}}</a>\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"transaction.createdAt\"></p>\n" +
    "            </div> \n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(transaction.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.reactions.plus}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.reactions.minus}} dislike </a>\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{transaction.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"transaction.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createContent(transaction)\">\n" +
    "                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
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
    "<style type=\"text/css\">\n" +
    "    .angular-google-map-container { height: 400px; box-shadow: 0 0 10px rgba(0,0,0,0.5); }\n" +
    "</style>\n" +
    "\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">THE CRE8 NETWORK</h1>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"font-size:14px\"><a ng-click=\"selectTab('METAGOVERNANCE')\" href=\"#\">Meta Governance</a></li>\n" +
    "            <li style=\"font-size:14px\"><a ng-click=\"selectTab('PEERNETWORK')\" href=\"#\">Peer Network</a></li>\n" +
    "            <li style=\"font-size:14px\"><a ng-click=\"selectTab('STATS')\" href=\"#\">Stats</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-if=\"selectedTab == 'METAGOVERNANCE'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Meta Governance</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h5><a href=\"project/conexus\">Conexus Project</a></h5>\n" +
    "				<p style=\"color:gray;\">Conex API v0.001a</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-if=\"selectedTab == 'PEERNETWORK'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer Network</h1>\n" +
    "				            <h5 style=\"color:white\">3423 Live Peers</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "					<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "					    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "					        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "					            <div><div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div></div>\n" +
    "					        </ui-gmap-window>\n" +
    "					    </ui-gmap-marker>\n" +
    "					</ui-gmap-google-map>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "					<table class=\"table table-striped table-hover\">\n" +
    "		                <thead>\n" +
    "		                    <tr>\n" +
    "		                    	<th>Peer</th>\n" +
    "								<th>Location</th>\n" +
    "								<th>Device</th>\n" +
    "								<th>PoET</th>\n" +
    "							</tr>\n" +
    "		                </thead>\n" +
    "		                <tbody>\n" +
    "		                    <tr ng-repeat=\"peer in peers\">\n" +
    "		                        <td><a href=\"member/{{peer.user.username}}\">{{peer.title}} <!--| {{peer.user.username}}--></a></td>\n" +
    "								<td><b>lat:</b> {{peer.location.lat}}, <b>lng:</b> {{peer.location.lng}}</td>\n" +
    "								<td>{{peer.device.title}}, {{peer.device.processor}}</td>\n" +
    "								<td>{{peer.poet}}</td>\n" +
    "		                    </tr>\n" +
    "		                </tbody>\n" +
    "		            </table>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-if=\"selectedTab == 'STATS'\">\n" +
    "		<div class=\"card\">\n" +
    "\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "				            <h5 style=\"color:white\">\n" +
    "						        {{chart.series[0].data[chart.series[0].data.length-1][1]}} Peers, \n" +
    "								{{chart.series[0].data[chart.series[0].data.length-1][1]}} Projects, \n" +
    "								{{chart.series[1].data[chart.series[1].data.length-1][1]}} Members, \n" +
    "								{{chart.series[3].data[chart.series[3].data.length-1][1]}} Transactions Velocity, \n" +
    "								{{chart.series[4].data[chart.series[4].data.length-1][1]}} Assets\n" +
    "							</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("tx/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tx/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tx</h1>\n" +
    "            	<h5 style=\"color:white\">764a1522cb582c42a5af644ab</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,explore,code,chain,nature,blockchian,programming,finance')\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "				        	<div class=\"container\">\n" +
    "				            	<h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Summary</h1>\n" +
    "				            </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Chain ID:</b> <a>1</a>(Main Chain)</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Block Height:</b> 564366</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Block Number:</b> <a href=\"block/564365\">564365</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Address:</b> <a href=\"\">caf644ab582c42a56759764a15226ed2a1fa</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Verification Type:</b> <a href=\"\">Proof Of Work</a> (PoeT 141.112)</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Peer(s):</b> <a href=\"member/troverman\">caf644ab582c42a56759764a15226ed2a1fa</a></p>\n" +
    "\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">\n" +
    "						<b>Data</b> <br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "						000000000000000000000000caf644ab582c42a56759764a15226ed2a1fa<br>\n" +
    "					</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Function Calls, State Modification</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("validation/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"\">\n" +
    "\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "        					<!--TODO-->\n" +
    "			            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "								<span><a style=\"color:white\" href=\"{{validation.associatedModels[0].type.toLowerCase()}}/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.task.title}}</a></span> \n" +
    "								<i class=\"fa fa-arrows-h\"></i> \n" +
    "								<span><a style=\"color:white\" href=\"{{validation.associatedModels[1].type.toLowerCase()}}/{{validation.associatedModels[1].info.project.urlTitle}}\">{{validation.associatedModels[1].info.project.title}}</a></span>\n" +
    "			            	</h1>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div style=\"padding:16px\">\n" +
    "\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "	                <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(validation)\"><span style=\"color:gray\"></span><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "	            </div>\n" +
    "\n" +
    "				<!--TODO-->\n" +
    "				<!--\n" +
    "				<h3> \n" +
    "					<span><a href=\"{{validation.associatedModels[0].type.toLowerCase()}}/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.task.title}}</a></span> \n" +
    "					<i class=\"fa fa-arrows-h\"></i> \n" +
    "					<span><a href=\"{{validation.associatedModels[1].type.toLowerCase()}}/{{validation.associatedModels[1].info.project.urlTitle}}\">{{validation.associatedModels[1].info.project.title}}</a></span>\n" +
    "				</h3>\n" +
    "				-->\n" +
    "\n" +
    "				<a href=\"member/{{validation.user.username}}\">\n" +
    "					<img class=\"card-avatar\" src=\"{{validation.user.avatarUrl}}\"/>\n" +
    "					<b>{{validation.user.username}}</b>\n" +
    "				</a>\n" +
    "\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"validation.createdAt\"></p>\n" +
    "\n" +
    "				<!--TODO: ABSTRACT MODEL | POPULATE VALIDATIONS-->\n" +
    "				<!--ERR-->\n" +
    "				<!--\n" +
    "				<p ng-repeat=\"model in validation.associatedModels\">\n" +
    "					<a href=\"{{model.type.toLowerCase()}}/{{model.address}}\">\n" +
    "						{{model.type}} | {{model.address}}\n" +
    "					</a>\n" +
    "				</p>\n" +
    "				-->\n" +
    "				<!--TAGS ARE ASSOCIATIONS. . -->\n" +
    "				<!--\n" +
    "				<p>time | <a href=\"time/{{validation.time}}\">{{validation.time}}</a></p>\n" +
    "				<p>task | <a href=\"time/{{validation.task}}\">{{validation.task}}</a></p>\n" +
    "				<p>project |</p>\n" +
    "				<p>member | </p>\n" +
    "				<p>item | </p>\n" +
    "				<p>order | </p>\n" +
    "				<p>transaction | </p>\n" +
    "				<p>content | </p>\n" +
    "				<p>validation | </p>\n" +
    "				<p>validation (recursion) </p>\n" +
    "				-->\n" +
    "				<!--ASSOCIATION.. -->\n" +
    "				<!--TODO: MANIFOLD-->\n" +
    "				<!--MANIFOLD-->\n" +
    "				<!--<p>Manifold | Project+</p>-->\n" +
    "\n" +
    "				<span ng-bind-html=\"renderContent(validation.content)\"></span>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<p>Project Charter | <a ng-click=\"informationToggle()\">Multipliticative Reputation Weight</a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<table class=\"table table-striped table-hover\">\n" +
    "					<thead>\n" +
    "						<tr>\n" +
    "							<th>Dimension</th>\n" +
    "							<th>Validation Score</th>\n" +
    "							<th>Reputation</th>\n" +
    "							<th>Project Charter <a ng-click=\"informationToggle()\"><i class=\"fa fa-question-circle\"></i></a></th>\n" +
    "							<th>Reputation Weighted Validation Score <a ng-click=\"informationToggle()\"><i class=\"fa fa-question-circle\"></i></a></th>\n" +
    "						</tr>\n" +
    "					</thead>\n" +
    "					<tbody>\n" +
    "						<tr ng-repeat=\"validation in validationList track by $index\">\n" +
    "							<td>{{validation[0]}}</td>\n" +
    "							<td>{{validationList[$index][1]}}</td>\n" +
    "							<td>{{reputationList[$index][1]}}</td>\n" +
    "							<td><a ng-click=\"informationToggle()\">Multipliticative </a></td>\n" +
    "							<td>{{reputationWeightedList[$index][1]}}</td>\n" +
    "						</tr>\n" +
    "					</tbody>\n" +
    "				</table>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<highchart config=\"validationColumn\"></highchart>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"createReaction(validation, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{validation.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"createReaction(validation, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{validation.reactions.minus}} dislike </a>\n" +
    "		       	<a style=\"padding:5px;color:grey\" ng-click=\"reply(validation)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		       	<a style=\"padding:5px;color:grey\" ng-click=\"validationToggle(validation)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
    "		    <div ng-show=\"validation.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createContent(validation)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "		\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("view/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("view/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				{{view}}\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
