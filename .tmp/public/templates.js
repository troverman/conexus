angular.module("templates-app", ["about/index.tpl.html", "account/index.tpl.html", "association/index.tpl.html", "content/content.tpl.html", "content/index.tpl.html", "contentList/index.tpl.html", "discover/index.tpl.html", "footer/index.tpl.html", "home/index.tpl.html", "home/templates/feed.tpl.html", "home/templates/intro.tpl.html", "intro/index.tpl.html", "item/index.tpl.html", "login/index.tpl.html", "market/index.tpl.html", "market/templates/about.tpl.html", "market/templates/activity.tpl.html", "market/templates/content.tpl.html", "marketPair/index.tpl.html", "marketPlace/index.tpl.html", "markets/index.tpl.html", "member/index.tpl.html", "member/templates/about.tpl.html", "member/templates/activity.tpl.html", "member/templates/assets.tpl.html", "member/templates/content.tpl.html", "member/templates/followers.tpl.html", "member/templates/following.tpl.html", "member/templates/items.tpl.html", "member/templates/ledger.tpl.html", "member/templates/positions.tpl.html", "member/templates/projects.tpl.html", "member/templates/tasks.tpl.html", "member/templates/time.tpl.html", "members/index.tpl.html", "nav/index.tpl.html", "notifications/index.tpl.html", "order/index.tpl.html", "project/index.tpl.html", "project/templates/about.tpl.html", "project/templates/activity.tpl.html", "project/templates/assets.tpl.html", "project/templates/channels.tpl.html", "project/templates/charter.tpl.html", "project/templates/content.tpl.html", "project/templates/items.tpl.html", "project/templates/ledger.tpl.html", "project/templates/members.tpl.html", "project/templates/positions.tpl.html", "project/templates/projects.tpl.html", "project/templates/settings.tpl.html", "project/templates/tasks.tpl.html", "project/templates/time.tpl.html", "projects/index.tpl.html", "reaction/index.tpl.html", "register/index.tpl.html", "search/index.tpl.html", "task/index.tpl.html", "task/templates/activity.tpl.html", "task/templates/content.tpl.html", "task/templates/time.tpl.html", "tasks/index.tpl.html", "time/index.tpl.html", "token/index.tpl.html", "transaction/index.tpl.html", "transparency/index.tpl.html", "validation/index.tpl.html", "view/index.tpl.html"]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
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
    "				<h3>CONNECT. COLLAB. CREATE.</h3>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
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
    "			<div class=\"col-md-6 col-xs-12\">\n" +
    "				<div class=\"card\">\n" +
    "				    <div style=\"padding:16px;\">\n" +
    "						<h3>TRANSPARENCY MAXIMALISM</h3>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Live Streaming and Complete Inclusivity create more connected paradigms.</p>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Sharing Creates Abundance.</p>\n" +
    "					</div>\n" +
    "					<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jUQ_3kCcG_U\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h3><a href=\"https://www.youtube.com/embed/jUQ_3kCcG_U\">open eye</a></h3>\n" +
    "						<p>\n" +
    "							<a href=\"member/troverman\">\n" +
    "								<img class=\"card-avatar\" ng-src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" src=\"https://conexus8.s3.amazonaws.com/ee70ffa4-03b9-4637-b160-c0131e4f880b.jpg\" err-src=\"images/avatar.png\">\n" +
    "								<b>troverman</b>\n" +
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
    "\n" +
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
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value; create depth in the market</p>\n" +
    "				<p>Create intertwined Nets of value</p>\n" +
    "\n" +
    "				<!--<p style=\"font-style:italic;color:gray;margin:0px\">Market Order types; onMint Postions; Trade Postions; Futures Postions; Derivative Positions</p> -->\n" +
    "\n" +
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
    "				<p>The mechanism of value gets its start from consensus on agreed up and shared value</p>\n" +
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
    "\n" +
    "			    <a href=\"#\" style=\"float:right\">\n" +
    "					<div ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "						<p>Update Cover <i class=\"fa fa-upload\"></i></p>\n" +
    "					</div>\n" +
    "				</a>\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "\n" +
    "			    <div class=\"member-card-info\" style=\"height:auto\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\">{{currentUser.status}} online</p>\n" +
    "			        <p style=\"color:gray\">total reputation | {{currentUser.totalWork}}</p>\n" +
    "\n" +
    "			        <br><br>\n" +
    "			        <a href=\"#\">\n" +
    "						<div ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"uploadAvatar($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "							<p>Update Avatar  <i class=\"fa fa-upload\"></i></p>\n" +
    "						</div>\n" +
    "					</a>\n" +
    "\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-social\">\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-8\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "\n" +
    "					<span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">0x{{currentUser.id}}</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></a></span>\n" +
    "					<h4>{{currentUser.email}}</h4>\n" +
    "                    <p><a href=\"/member/{{currentUser.username}}/projects\">{{currentUser.projectCount || 0}} Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">{{currentUser.followerCount || 0}} Followers</a> | <a href=\"/member/{{currentUser.username}}/following\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-sm-6\">\n" +
    "							<h5>Balance Lookup <span style=\"font-size:11px;color:gray\">0x8f50FB12E80E788cC0141b06e84a4a02357431d0</span></h5>\n" +
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
    "				        <div class=\"col-sm-6\">\n" +
    "							<h5>Reputation Lookup <span style=\"font-size:11px;color:gray\">0x90C11Cd017582766A89155B7b90f11aF67fD2A2A</span> </h5>\n" +
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
    "\n" +
    "					<!--TODO-->\n" +
    "					<h5>Peer Contrubution</h5>\n" +
    "					<p style=\"font-size:11px\">MacBook Pro OSX | 2.3 GHz Intel Core i7, 8 GB 1600 MHz DDR3, Intel HD Graphics 4000 1536 MB | 22min @ 11.36PM</p>\n" +
    "					<p style=\"font-size:11px\">iPhone 8 | A11 Bionic chip with 64-bit architecture, M11 motion coprocessor, 2 GB RAM | 17min @ 2.15PM</p>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: ACCOUNT HISTORY | LIKE LOGINS ALL POSTS | DETAILED AUDIT OF ACCOUNT EVENTS -->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h3>Information</h3>\n" +
    "				<h4>{{currentUser.email}}</h4>\n" +
    "				<p>Human Proof ID | ON</p>\n" +
    "				<p>Verification | Goverment ID | Social Accounts | BioMetric Data</p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "	        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "	    </div>\n" +
    "   	</div>-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"\">\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"editAccountToggle()\">Edit Account</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"editAccountToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "					<h5>Username</h5>\n" +
    "					<input placeholder=\"Username\" type=\"text\" ng-model=\"newAccountInformation.username\" class=\"form-control\">\n" +
    "					<h5>Email</h5>\n" +
    "					<input placeholder=\"Email\" type=\"text\" ng-model=\"newAccountInformation.email\" class=\"form-control\">\n" +
    "					<h5>First Name</h5>\n" +
    "					<input placeholder=\"First Name\" type=\"text\"  ng-model=\"newAccountInformation.firstName\" class=\"form-control\">\n" +
    "					<h5>Last Name</h5>\n" +
    "					<input placeholder=\"Last Name\" type=\"text\" ng-model=\"newAccountInformation.lastName\" class=\"form-control\">\n" +
    "					<h5>Address</h5>\n" +
    "					<input placeholder=\"Address\" type=\"text\" ng-model=\"newAccountInformation.address\" class=\"form-control\">\n" +
    "					<h5>Date of Birth</h5>\n" +
    "					<input placeholder=\"Date of Birth\" type=\"date\" ng-model=\"newAccountInformation.dob\" class=\"form-control\">\n" +
    "					<h5>Sex</h5>\n" +
    "					<input placeholder=\"Sex\" type=\"text\" ng-model=\"newAccountInformation.sex\" class=\"form-control\">\n" +
    "					<h5>Height</h5>\n" +
    "					<input placeholder=\"Height\" type=\"text\" ng-model=\"newAccountInformation.height\" class=\"form-control\">\n" +
    "					<h5>Eye Color</h5>\n" +
    "					<input placeholder=\"Eye Color\" type=\"text\" ng-model=\"newAccountInformation.eyecolor\" class=\"form-control\">\n" +
    "					<h5>23&Me</h5>\n" +
    "					<input placeholder=\"23&Me\" type=\"text\" ng-model=\"newAccountInformation.geneticsequence\" class=\"form-control\">\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\">Save</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h3>Settings</h3>\n" +
    "				<!--SETTING DESCRIP-->\n" +
    "				<p>Record Attention <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Attention Tokenization</span><md-switch ng-model=\"recordAttention\" aria-label=\"Record Attention\"></md-switch></p>\n" +
    "				<!--<p>GPS Tracking <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Required for Location Tokenization</span><md-switch ng-model=\"gpsTracking\" aria-label=\"GPS Tracking\"></md-switch></p>-->\n" +
    "				<p>Client Mining <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><br><span style=\"font-size:10px\">Runs a CRE8 node that powers the network. Machine attention is tokenized.</span><md-switch ng-model=\"browserMining\" aria-label=\"Browser Mining\"></md-switch></p>\n" +
    "\n" +
    "				<p>Notifications <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a><md-switch ng-model=\"notifications\" aria-label=\"Notifications\"></md-switch></p>\n" +
    "\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<!--TODO: tokenized apps.. connect in..-->\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h3>Connected Accounts & Wallets</h3>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/google\">Google</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/twitter\">Twitter</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/facebook\">Facebook</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/fitbit\">Fitbit</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/steemit\">Steemit</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/steemit\">BTC</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/steemit\">ETH</a></button>\n" +
    "				<button class=\"btn btn-default\"><a href=\"/auth/steemit\">LTC</a></button>\n" +
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
    "        <h5 style=\"text-align:right;float:right\" ng-click=\"tokenToggle(content)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
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
    "<div ng-if=\"content.title && content.type!='video'\" class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <h1>{{content.title}}</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "		    <div style=\"padding:16px;background-color:white\">\n" +
    "\n" +
    "				<div>\n" +
    "\n" +
    "					<div style=\"float:right;text-align:right\">\n" +
    "\n" +
    "						<h5 ng-click=\"tokensToggle(content)\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "						<h5 ng-click=\"renderValidationToggle(content)\"><a href=\"#\">Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "						\n" +
    "						<!--\n" +
    "						TODO: NAV\n" +
    "						<p>{{viewTime}} View+{{currentUser.id}}, {{viewTime}} View+[Tags]</p>\n" +
    "						-->\n" +
    "\n" +
    "					</div>\n" +
    "\n" +
    "					<!--<h3 ng-show=\"content.title\">{{content.title}}</h3>-->\n" +
    "					\n" +
    "					<p ng-show=\"content.tags\"><a style=\"color:gray;\" ng-repeat=\"tag in content.tags.split(',')\" href=\"content\">{{tag}} </a></p>\n" +
    "\n" +
    "					<div>\n" +
    "						<a style=\"display:inline\" href=\"member/{{content.user.username}}\">\n" +
    "							<img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "							<span style=\"font-weight:800\">{{content.user.username}}</span>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "\n" +
    "					<br>\n" +
    "\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "\n" +
    "					<!--\n" +
    "					<span ng-repeat=\"association in content.associatedModels\">\n" +
    "						<a href=\"{{association.address}}\">{{association.address}}</a>\n" +
    "					</span>\n" +
    "					-->\n" +
    "\n" +
    "					<!--\n" +
    "					<span ng-repeat=\"reaction in reactions\"><br><a href=\"reaction/{{reaction.id}}\">{{reaction.user.username}}, {{reaction.type}},{{reaction.amount}} </a>, </span>\n" +
    "					-->\n" +
    "\n" +
    "					<div style=\"clear:both\"></div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<div style=\"max-height:5000px;overflow:scroll\" ng-show=\"content.type!='video'\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "				</div>\n" +
    "				\n" +
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
    "\n" +
    "		    	MOTION VALIDATION\n" +
    "		    	<div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                   	<div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{member.totalWork || 0}}</span></div>\n" +
    "                </div>\n" +
    "                <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "				<button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TRAVERSAL PARAMETERS-->\n" +
    "	<!--COMBINITRONICS-->\n" +
    "	<!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\" ng-show=\"content.type!='video'\">\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "	        <div style=\"padding:16px;background-color:white\">\n" +
    "\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					<a style=\"display:inline\" href=\"/member/{{content.user.username}}\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "				</div>\n" +
    "				<br>\n" +
    "				<div style=\"max-height:500px;overflow:scroll\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{content.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{content.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(content)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{content.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "			<div ng-show=\"content.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createContent(content)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "	\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("contentList/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contentList/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Content <span ng-show=\"selectedTag!=''\"> | {{selectedTag}}</span></h1></div>\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                        <h4 style=\"text-align:right;margin-top:20px\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h5>Trending</h5></a></li>\n" +
    "                        <hr class=\"sort-hr\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Created</h5></a></li>\n" +
    "                        <hr class=\"sort-hr\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('plusCount DESC')\"><h5>Rating</h5></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    \n" +
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
    "    \n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            </ul>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "\n" +
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
    "\n" +
    "            <div class=\"card\">\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-repeat=\"item in contentList\">\n" +
    "                <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <!--\n" +
    "                        <div style=\"float:right;padding-left:5px;\">\n" +
    "                            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><i class=\"fa fa-ellipsis-v\"></i></a>\n" +
    "                        </div>\n" +
    "                        -->\n" +
    "                        <div style=\"float:right\">\n" +
    "                            <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                            <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        </div>\n" +
    "                        <h4 ng-show=\"item.title\"><a href=\"content/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                        <p style=\"margin-top:0px;margin-bottom:0px;\"><a style=\"color:gray;\" ng-repeat=\"tag in item.tags\" href=\"#\"  ng-click=\"filterContent(tag)\">{{tag}} </a></p>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div>\n" +
    "                            <a style=\"display:inline\" href=\"member/{{item.user.username}}\">\n" +
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
    "                        <a class=\"pull-right\" style=\"padding:0px;\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-click=\"$event.stopPropagation();\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("discover/index.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height:300px;}</style>\n" +
    "\n" +
    "<div class=\"page-heading\" style=\"background-image: url('https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')\">\n" +
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
    "	<div class=\"row\">\n" +
    "\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "		<!--<div class=\"spacing-10\"></div>\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"#\">Activity</a></li>\n" +
    "			<li><a href=\"/content\">Content</a></li>\n" +
    "			<li><a href=\"/marketplace\">Items</a></li>\n" +
    "			<li><a href=\"/members\">Members</a></li>\n" +
    "			<li><a href=\"/market\">Orders</a></li>\n" +
    "			<li><a href=\"/projects\">Projects</a></li>\n" +
    "			<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "		</ul>-->\n" +
    "\n" +
    "	    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "		    <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\"><a  href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a></div>\n" +
    "            </form>\n" +
    "	    </div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "    	<div class=\"col-md-6\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "\n" +
    "			<div class=\"card\">\n" +
    "		        <!--<div style=\"padding:16px;\">\n" +
    "		            <span><b>Models</b></span>\n" +
    "				    <b><a href=\"/content\">Content</a></b>\n" +
    "					<b><a href=\"/marketplace\">Items</a></b>\n" +
    "					<b><a href=\"/members\">Members</a></b>\n" +
    "					<b><a href=\"/market\">Orders</a></b>\n" +
    "					<b><a href=\"/projects\">Projects</a></b>\n" +
    "					<b><a href=\"/tasks\">Tasks</a></b>\n" +
    "		        </div>-->\n" +
    "		        <ul style=\"padding:16px;\" class=\"member-tabs\">\n" +
    "					<li><a href=\"/content\">Content</a></li>\n" +
    "					<li><a href=\"/marketplace\">Items</a></li>\n" +
    "					<li><a href=\"/members\">Members</a></li>\n" +
    "					<li><a href=\"/market\">Orders</a></li>\n" +
    "					<li><a href=\"/projects\">Projects</a></li>\n" +
    "					<!--<li><a href=\"/projects\">Reactions</a></li>-->\n" +
    "					<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "					<li><a href=\"/tasks\">Time</a></li>\n" +
    "					<li><a href=\"/projects\">Transactions</a></li>\n" +
    "				</ul>\n" +
    "\n" +
    "		    </div>\n" +
    "\n" +
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
    "\n" +
    "		</div>\n" +
    "		\n" +
    "    	<div class=\"col-md-6\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div ng-repeat=\"item in tasks.slice(0,10)\">\n" +
    "				<div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<div style=\"float:right;text-align:right\">\n" +
    "		                    <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "							<h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "		                </div>\n" +
    "\n" +
    "						<h4><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "						<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "		            	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "\n" +
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
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	        <div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart1\"></highchart>\n" +
    "			</div>\n" +
    "			<h1>Tokens</h1>\n" +
    "			<p>Lorem Ipsum</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div class=\"container\">\n" +
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
    "</div>-->\n" +
    "\n" +
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
    "\n" +
    "\n" +
    "			<p>Think about how we can do anything together. Think about our community. Think about our shared identitiy. Think about food and water.</p>\n" +
    "\n" +
    "			<p>the human story;</p>\n" +
    "			<div class=\"row\">\n" +
    "		        <div class=\"col-md-6\">\n" +
    "		        	<p><b>Title</b></p>\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "\n" +
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
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "    	<div style=\"max-height:200px;overflow:hidden\">\n" +
    "    		<img src=\"https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80\">\n" +
    "    	</div>\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>Projects</h1>\n" +
    "			<p>Globally Present. The CRE8 Netowrk spans. Coordinating Around All Types. Get Involved.</p>\n" +
    "			\n" +
    "			<div class=\"row\">\n" +
    "		        <div class=\"col-md-6\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<highchart config=\"chart1\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div ng-repeat=\"item in projects.slice(0,10)\">\n" +
    "			        <div class=\"card\" ng-click=\"\">\n" +
    "			            <div style=\"padding:16px;\">\n" +
    "			                <div class=\"row\">\n" +
    "			                    <div class=\"col-sm-1 col-xs-2\"><a href=\"/project/{{item.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{item.avatarUrl}}\"></a></div>\n" +
    "			                    <div class=\"col-sm-11 col-xs-10\">\n" +
    "			                        <h3 style=\"margin-top:0px\"><a href=\"/project/{{item.urlTitle}}\">{{item.title}}</a></h3>\n" +
    "			                        <div style=\"max-height:500px;overflow:scroll\"><span ng-bind-html=\"renderContent(item.description)\"></span></div>\n" +
    "			                    </div>\n" +
    "			                </div>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "    </div>\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "    	<div style=\"max-height:200px;overflow:hidden\">\n" +
    "    		<img src=\"https://images.unsplash.com/photo-1481732582370-0445455c5ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=80\">\n" +
    "    	</div>\n" +
    "		<div style=\"padding:16px;\">\n" +
    "\n" +
    "			<h1>Tasks</h1>\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "		        <div class=\"col-md-6\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<highchart config=\"chart1\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "				<div ng-repeat=\"item in tasks.slice(0,5)\">\n" +
    "					<div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<div style=\"float:right;text-align:right\">\n" +
    "			                    <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "								<h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "			                </div>\n" +
    "\n" +
    "							<h4><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "							<p><a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "							<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "			            	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "							<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "\n" +
    "						</div>\n" +
    "						<div class=\"card-footer\">\n" +
    "							<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "							<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "							<a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "							<a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "    </div>\n" +
    "    <!--\n" +
    "    <div class=\"card\" ng-click=\"\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	        <div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart1\"></highchart>\n" +
    "			</div>\n" +
    "			<h1>Time</h1>\n" +
    "			<p>Lorem Ipsum</p>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "	-->\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div style=\"padding-left:0px;padding-right:0px;\" class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\" style=\"padding:3px;float:none\">\n" +
    "			<div style=\"float:right\"><a href=\"/\"><img src=\"images/hyper.gif\"></a></div>\n" +
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
    "<style type=\"text/css\">.angular-google-map-container{height: 400px;}</style>\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"isTutorial\">\n" +
    "        \n" +
    "        <div ng-show=\"showProjects\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                <div style=\"color:white;padding:15px;\">\n" +
    "                    <h1>Projects</h1>\n" +
    "                    <p>Globally Present. The CRE8 Netowrk spans. Coordinating Around All Types. Get Involved.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                \n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                    <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "\n" +
    "                        <!--ACTIVE FILTERS-->\n" +
    "                        <div class=\"card\">\n" +
    "                            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card\">\n" +
    "                            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\">{{marker.content}}</a></div>\n" +
    "                                    </ui-gmap-window>\n" +
    "                                </ui-gmap-marker>\n" +
    "                            </ui-gmap-google-map>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card\">\n" +
    "                            <highchart config=\"chart\"></highchart>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\" style=\"max-height:100vh;overflow:scroll\">\n" +
    "                        <div ng-repeat=\"item in projects.slice(0,10)\">\n" +
    "                            <div class=\"card\" ng-click=\"\">\n" +
    "                                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                                        <div style=\"float:right\">\n" +
    "                                            <button class=\"btn btn-default\" ng-click=\"join(item);\">Join</button>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                        <a href=\"/project/{{item.urlTitle}}\">\n" +
    "                                            <img style=\"height:64px\" src=\"{{item.avatarUrl}}\">\n" +
    "                                            <h3 style=\"margin-top:0px\">{{item.title}}</h3>\n" +
    "                                        </a>\n" +
    "\n" +
    "                                        <div style=\"max-height:500px;overflow:scroll\"><span ng-bind-html=\"renderContent(item.description)\"></span></div>\n" +
    "                                        \n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showTasks\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1481732582370-0445455c5ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2271&q=80');\">\n" +
    "                <div style=\"color:white;padding:15px;\">\n" +
    "                    <h1>Tasks</h1>\n" +
    "                    <p>Globally Present. The CRE8 Netowrk spans. Coordinating Around All Types. Get Involved.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                    <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        \n" +
    "                        <div class=\"card\">\n" +
    "                            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                        <div style=\"font-size: 15px;\"><a href=\"task/{{marker.url}}\">{{marker.content}}</a></div>\n" +
    "                                    </ui-gmap-window>\n" +
    "                                </ui-gmap-marker>\n" +
    "                            </ui-gmap-google-map>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"card\">\n" +
    "                            <highchart config=\"chart\"></highchart>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\" style=\"max-height:100vh;overflow:scroll\">\n" +
    "                        <div ng-repeat=\"item in tasks.slice(0,5)\">\n" +
    "                            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                                <div style=\"padding:16px;\">\n" +
    "                                    <div style=\"float:right;text-align:right\">\n" +
    "                                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                                        <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <h4><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                                    <p><a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "                                    <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                                    <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "\n" +
    "                                </div>\n" +
    "                                <div class=\"card-footer\">\n" +
    "                                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                                    <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                                    <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showMembers\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1532620161677-a1ca7d5d530f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');\">\n" +
    "                <div style=\"color:white;padding:15px;\">\n" +
    "                    <h1>Membes</h1>  \n" +
    "                    <p>CRE8's Community encompasses a wide breadth of skill, interests, and <a>codified beliefs</a>.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\" style=\"max-height:100vh;overflow:scroll\">\n" +
    "                <div class=\"col-sm-6\" ng-repeat=\"item in members.slice(0,10)\">\n" +
    "                    <div class=\"member-card\" style=\"margin-bottom:10px\" ng-click=\"renderReputationToggle(item)\">\n" +
    "                        <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.username}}\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                        </div>\n" +
    "                        <div class=\"member-card-info\">\n" +
    "                            <button class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(item);\">Follow</button>\n" +
    "                            <h4><a href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "                            <p style=\"color:gray\">Total Reputation | {{item.totalWork}}</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showValue\" class=\"card\" ng-click=\"\">\n" +
    "            <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1532620161677-a1ca7d5d530f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');\">\n" +
    "                <div style=\"color:white;padding:15px;\">\n" +
    "                    <h1>Update Value Map</h1>  \n" +
    "                    <p>Now that we know more about you, want to update?</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <highchart config=\"chart\"></highchart>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"change()\" style=\"text-align:center\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">CONTINUE</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"skip()\" style=\"text-align:center\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">SKIP</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"!isTutorial\">\n" +
    "        <div class=\"col-md-3 col-sm-12 col-xs-12\">\n" +
    "            <div class=\"member-card\" style=\"margin-left:-5px;margin-right:-10px;margin-bottom:0px\">\n" +
    "                <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "                    <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                </div>\n" +
    "                <div class=\"member-card-info\">\n" +
    "                    <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "                    <p style=\"color:gray\">{{currentUser.status}} Online</p>\n" +
    "                    <p style=\"color:gray\">{{currentUser.totalWork}}</p>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6 col-sm-12 col-xs-12\" style=\"padding-left:0px;margin-right:-5px\">\n" +
    "            <div class=\"card\" style=\"min-width:100%;margin-top:0px\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">0x{{member.id}}</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\"></a></span>\n" +
    "                    <h4>{{currentUser.email}}</h4>\n" +
    "                    <p style=\"font-size:13px;\"><a href=\"/member/{{currentUser.username}}/projects\">{{currentUser.projectCount || 0}} Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">{{currentUser.followerCount || 0}} Followers</a> | <a href=\"/member/{{currentUser.username}}/following\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <h5>Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "                            <form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                                <input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "                                <div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                                    <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "\n" +
    "                            <div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "                                <h5><a href=\"market/{{balanceLook}}\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <h5>Reputation Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "                            <form ng-click=\"lookupReputation()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                                <input ng-model=\"reputationLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Dimension\">\n" +
    "                                <div ng-click=\"lookupReputation()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                                    <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                                </div>\n" +
    "                            </form>\n" +
    "                            <div ng-show=\"reputationLookupValue !== undefined\">\n" +
    "                                <h5><a href=\"reputation/{{reputationLook}}\">{{reputationLook}}</a> | {{reputationLookupValue}}</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-3 col-sm-12 col-xs-12\" style=\"margin-bottom:0px;padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\" style=\"margin-top:0px\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ CONTENT</button>\n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle()\">SEND TOKENS</button>\n" +
    "                    <a href=\"notifications\"><button class=\"btn btn-default log-btn\" ng-click=\"\">NOTIFICATIONS</button>\n" +
    "                    <a href=\"account\"><button class=\"btn btn-default log-btn\" ng-click=\"\">SETTINGS</button></a>\n" +
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
    "        <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--\n" +
    "            <div class=\"card\">\n" +
    "                <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "            </div>\n" +
    "            -->\n" +
    "\n" +
    "            <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "                        <div>\n" +
    "                            <img ng-click=\"$event.stopPropagation()\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
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
    "                            <a ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\" ng-click=\"$event.stopPropagation()\" >time {{item.time}}</a>\n" +
    "                            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                            <p ng-click=\"tokensToggle(item);$event.stopPropagation()\" style=\"display:inline;float:right\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--TODO: FINALIZE-->\n" +
    "                <div class=\"card\" ng-if=\"item.model=='PROJECT'\" ng-click=\"\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1 col-xs-2\">\n" +
    "                                <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-11 col-xs-10\">\n" +
    "                                <h3 style=\"margin-top:0px\">\n" +
    "                                    <a href=\"project/{{item.urlTitle}}\">\n" +
    "                                        {{item.title}}\n" +
    "                                    </a>\n" +
    "                                </h3>\n" +
    "                                <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <h5 ng-click=\"$event.stopPropagation();tokensToggle(item);\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                            <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item);\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        </div>\n" +
    "                        <h4><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                        <!--<p><a ng-click=\"$event.stopPropagation()\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>-->\n" +
    "                        <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                        <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
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
    "                <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <div>\n" +
    "\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                            <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "                            <p style=\"display:inline;float:right\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();tokensToggle(item)\">Tokens <i class=\"fa fa-question-circle\"></i></a>\n" +
    "                                <!--<br>\n" +
    "                                <a ng-click=\"renderValidationToggle(item)\">Associations <i class=\"fa fa-question-circle\"></i></a>-->\n" +
    "                            </p>\n" +
    "                            \n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "                        </div>\n" +
    "\n" +
    "                        <p ng-show=\"item.task.tags > 0\" style=\"margin-left:42px\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.task.tags\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a>\n" +
    "                        </p>\n" +
    "                        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
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
    "            <div class=\"card\" ng-click=\"loadMore()\" style=\"text-align:center\">\n" +
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
    "<div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <!--INTO-->\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <!--<h3>CRE8 MULTIDIMENSIONAL VALUE</h3>-->\n" +
    "                <h3>EVERYTHING IS VALUABLE</h3>\n" +
    "                <!--\n" +
    "                CREATE IS EMPOWERMENT\n" +
    "                CREATE IS INCLUSIVITY\n" +
    "                CREATE IS UNITY\n" +
    "                -->\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">From time and intention to work and organization, information is income.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Sharing creates abundance. With inclusivity maximalism, you get what you give.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Share with us.</p>\n" +
    "                <!--<p style=\"font-style:italic;margin:0px;color:gray\">Sharing creates abundance; you get what you give. Consentually share with us.</p>-->\n" +
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
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Everything has value. Show us your worth. Create.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Share with us, what do you think is valuable?</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/register\">Join Our Community</a>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3>COORDINATE INTENTIONALLY</h3>\n" +
    "                <h5>Motions, Voting, and Governance alongside Peer based decision mechanisms</h5>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Human Validated Proof of Work; Reputation Weighted Voting Mechanism</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Validation Mechanisms assert earned reputation; group organization naturally flourishes.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3>WE CREATE THE FUTURE TODAY</h3>\n" +
    "                <!--<h4>WHERE WE WILL GO & WHAT WE WILL CREATE</h4>-->\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Worldwide and always expanding, our shared vision is the future we create today.</p>\n" +
    "                <h5><a href=\"https://www.github.com/troverman/conexus\">Developer Documentation</a></h5>\n" +
    "                <h5><a href=\"https://www.github.com/troverman/conexus\">App Ecosystem</a></h5>\n" +
    "                <h5><a href=\"https://www.github.com/troverman/conexus\">APIs</a></h5>\n" +
    "\n" +
    "                <!--Inspiring Tasks and Projects-->\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <!--<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    \n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <!--THE FUTURE-->\n" +
    "                <h3>ARTIFICAL INTELLIGENCE & TRANSPARENCY</h3>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Transparency Ethos and Consensus on Context-specific Time, Intent, and Creation.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Inclusivity as income.</p>\n" +
    "                <!--<img style=\"height:50px;\" src=\"images/hyper.gif\">-->\n" +
    "                <!---->\n" +
    "                <!--inclusivity as income-->\n" +
    "                <!--<p>The next wave of -->\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <!--<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--PEERS; NOVEL MOBILE CONNECTION ; THE NETWORK IS YOU-->\n" +
    "        <!--WHO WE ARE; WHAT WE DO; WHAT WE CREATE-->\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    <div ng-show=\"false\" class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-12 col-md-12\">\n" +
    "                <h3><b>Join Our Community</b></h3><hr>\n" +
    "                <div class=\"login-form\">\n" +
    "                    <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "                            <i class=\"fa fa-user\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "                            <i class=\"fa fa-user\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group log-status\">\n" +
    "                            <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "                            <i class=\"fa fa-lock\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"align-right\">\n" +
    "                            <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "                        </div>\n" +
    "                        <br><br>\n" +
    "                        <div style=\"text-align:center\">\n" +
    "                            <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "                <div class=\"selfClear\"></div>\n" +
    "            </div>   \n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "<!--<div ng-include=\"'register/index.tpl.html'\"></div>-->\n" +
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
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                <li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "                        <div>\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "                            <!--TODO: POST PARENT TYPES-->\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.contentModel\" style=\"display:inline;font-weight:600\" href=\"content/{{item.contentModel}}\">content {{item.contentModel}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.time\" style=\"display:inline;font-weight:600\" href=\"time/{{item.time}}\">time {{item.time}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "                            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                            \n" +
    "                            <p ng-click=\"tokensToggle(item);$event.stopPropagation()\" style=\"display:inline;float:right\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
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
    "                <div class=\"card\" ng-if=\"item.model=='PROJECT'\" ng-click=\"\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-sm-1 col-xs-2\">\n" +
    "                                <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-11 col-xs-10\">\n" +
    "                                <h3 style=\"margin-top:0px\">\n" +
    "                                    <a href=\"project/{{item.urlTitle}}\">\n" +
    "                                        {{item.title}}\n" +
    "                                    </a>\n" +
    "                                </h3>\n" +
    "                                <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">                            \n" +
    "                        <div style=\"float:right;text-align:right\">\n" +
    "                            <h5 ng-click=\"$event.stopPropagation();tokensToggle(item);\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                            <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item);\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        </div>\n" +
    "                        <h4 ng-click=\"$event.stopPropagation()\"><a href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                        <p ng-click=\"$event.stopPropagation()\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                        <p ng-click=\"$event.stopPropagation()\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                        <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"renderToggle(item)\">\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <div>\n" +
    "\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                            <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "                            <p style=\"display:inline;float:right;text-align:right\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();tokensToggle(item)\">Tokens <i class=\"fa fa-question-circle\"></i></a>\n" +
    "                                <!--<br>\n" +
    "                                <a ng-click=\"$event.stopPropagation();renderValidationToggle(item)\">Associations <i class=\"fa fa-question-circle\"></i></a>-->\n" +
    "                            </p>\n" +
    "\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "\n" +
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
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"true\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
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

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\" style=\"max-height:500px\">\n" +
    "\n" +
    "    <div class=\"intro-container\">\n" +
    "\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <!--<text style=\"font-size:28px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">CRE8 MULTIDIMENSIONAL VALUE</text>-->\n" +
    "                <text style=\"font-size:28px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">WE CRE8 MULTIDIMENSIONAL VALUE</text>\n" +
    "            </symbol>  \n" +
    "\n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "\n" +
    "        </svg> \n" +
    "\n" +
    "        <div class=\"box-with-text\">\n" +
    "\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://s3-us-west-2.amazonaws.com/voetr/washington.mp4\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\"></video>\n" +
    "            </div>\n" +
    "\n" +
    "            <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "                <rect width=\"100%\" height=\"100%\" mask=\"url(#intro-desktop-mask)\" class=\"shape--fill\"/>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "            </svg> \n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"intro-mobile\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("item/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <h1>{{item.title}}</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <h5 ng-click=\"tokensToggle(item)\"><a href=\"\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <h5 ng-click=\"renderValidationToggle(item)\"><a href=\"#\">Associations & Validations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--\n" +
    "                <h1>{{item.title}}</h1>\n" +
    "                -->\n" +
    "\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline\" href=\"member/{{item.user.username}}\"><span style=\"font-weight:800\">{{item.user.username}}</span></a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "		        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<h4>{{item.amountSet}} <a href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h4>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "		</div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "	\n" +
    "    <div style=\"row\">\n" +
    "        <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "            <li><a href=\"#\">Reactions</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-if=\"item.identiferSet\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"\">\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"purchaseToggle()\">Purchase</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"purchaseToggleVar\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <h3 style=\"text-align:left;margin-left:15px;margin-bottom:15px;\">Purchase {{item.title}}</h3>\n" +
    "                <form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input placeholder=\"Name\" type=\"text\" ng-model=\"newPurchase.name\" class=\"form-control\" id=\"taskTitle\">\n" +
    "                        <input placeholder=\"Address\" type=\"text\" ng-model=\"newPurchase.address\" class=\"form-control\" id=\"taskTitle\">\n" +
    "                        <text-angular placeholder=\"Content\" ng-model=\"newPurchase.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--MARKET | TRAVERSAL-->\n" +
    "    <div class=\"row\" ng-if=\"item.identiferSet\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"\">\n" +
    "                \n" +
    "                    <div ng-repeat=\"input in inputVector\">\n" +
    "                        <div layout=\"\">\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{input.text}}</span></div>\n" +
    "                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"inputVectorWeight[$index]\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"{{input}}\"></md-slider>\n" +
    "                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{inputVectorWeight}}</span></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <h5>InputVector: <span ng-repeat=\"input in inputVector\"><a href=\"market/{{input}}\">{{input.text}}</a> </span>\n" +
    "                    <h5>Dimensional Object</h5>\n" +
    "                    <h5>OutputVector: {{item.amountSet}} <span ng-repeat=\"output in outputVector\"><a href=\"market/{{output}}\">{{output.text}}</a> </span>\n" +
    "\n" +
    "                    <form ng-submit=\"marketTraverse(tokens, outputVector)\">\n" +
    "                        \n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Input Vector\" ng-model=\"inputVector\"></tags-input>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Output Vector\" ng-model=\"outputVector\"></tags-input>\n" +
    "\n" +
    "                    </form>\n" +
    "\n" +
    "                    <!--TRAVERSAL PARAMETERS-->\n" +
    "                    <p ng-repeat=\"result in marketOutput\" style=\"color:gray;font-style:italic;font-size:10px\">\n" +
    "                        <span>[tokens] = {{result[0]}} <a href=\"market/{{result[1]}}\">{{result[1]}}</a></span>\n" +
    "                        <!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "                    </p>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "	<!--Delivery | Fuilfillment-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Item Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--LIST REACTIONS-->\n" +
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
    "\n" +
    "</div>");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1\">\n" +
    "                <h1>Login | Welcome back!</h1>\n" +
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
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\"> \n" +
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
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "				<h1>{{token.string}}</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "    	<!--MANIFOLD FILTER-->\n" +
    "		<!--MANIFOLD SORTING-->\n" +
    "		<div class=\"card\">\n" +
    "			<form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "		    	<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		        <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\"><a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "		        </div>\n" +
    "		    </form>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "	    </div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "    	<div class=\"col-sm-6\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<!--PLURALIST POSTIONS ON A 'SINGLE' ASSET | [a, a+future+time, a+etc]-->\n" +
    "\n" +
    "		    <div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "		    		\n" +
    "		    		<!--TOOD: MARKET: {{token.string}}-->\n" +
    "\n" +
    "		    		<p><b>Tokens</b></p>\n" +
    "					<!--NG REPEAT-->\n" +
    "		    		<h4><a href=\"token/{{token.spring}}\">{{token.string}}</a></h4>	\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "					<p><b>Information <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "					<p>AssociatedModels: <a href=\"time/id\">TIME</a></p>\n" +
    "					<p>In Circulation: {{token.information.inCirculation}}</p>\n" +
    "					<p>Markets: {{markets.length}}</p>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "					<!--FUTURES, OPTIONS, PROJECT, WORK, CONTENT, ETC-->\n" +
    "		    		<p><b>Protocols <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<p>\n" +
    "		    			<span ng-repeat=\"protocol in token.protocols\"><a href=\"protocol/{{protocol}}\">{{protocol}}</a>,</span>\n" +
    "\n" +
    "						<a href=\"protocol/manifold\">MANIFOLD</a>,\n" +
    "						<a href=\"protocol/manifold\">SPONSOR</a>,\n" +
    "		    			<a href=\"protocol/future\">FUTURE</a>,\n" +
    "						<a href=\"protocol/option\">OPTION</a>\n" +
    "\n" +
    "		    		</p>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "					<!--FUNCTIONS TO ACT ON THE TOKEN BALANCE-->\n" +
    "		    		<p><b>Logic <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<p>Transferrable: {{token.logic.transferrable}}</p>\n" +
    "		    		<p>Mint: {{token.logic.mint}}</p>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "		    		<p><b>Manifold Actions <a ng-click=\"informationToggle()\" href=\"\"><i class=\"fa fa-question-circle\"></i></a></b></p>\n" +
    "		    		<p>+SPONSOR</p>\n" +
    "		    		<p>+FUTURE+TIME</p>\n" +
    "		    		<p>+OPTION+TIME</p>\n" +
    "\n" +
    "\n" +
    "	    		</div>\n" +
    "	    	</div>\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<h4>Value Vector</h4>\n" +
    "					<highchart config=\"chartMap\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "					<h4>Market Analysis</h4>\n" +
    "					<p>Rank: {{stateParams.id.split(',').length}}\n" +
    "					<p>Highest Dimension: 7</p>\n" +
    "					<p>Nodes: {{graphDataPower.nodes.length}}, Connections: {{graphDataPower.links.length}}</p>\n" +
    "					<nvd3 options=\"graphOptions\" data=\"graphDataPower\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "\n" +
    "		    		<p>Lattice Analysis</p>\n" +
    "		    		<p>Computed Lattice Neighborhood</p>\n" +
    "\n" +
    "		    		<!--COMBINITORIALS SERVED FIRST-->\n" +
    "		    		<!--DEPTH OF THE COMBINITORIAL SPACES-->\n" +
    "		    		<!--COMBINITORIAL & MANIFOLD MAPPING SPACE(S)-->\n" +
    "					<!--VALUE VECTOR-->\n" +
    "					<!--1ST DEGREE-->\n" +
    "				    <!--VALUE MATRIX-->\n" +
    "					<!--VALUE TENSOR-->\n" +
    "					<!--VALUE TENSOR NETWORK-->\n" +
    "\n" +
    "	    		</div>\n" +
    "	    	</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-md-6\" style=\"max-height:100vh;overflow:scroll;padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "			<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "	            <li><a href=\"#\">Content</a></li>\n" +
    "				<li><a href=\"#\">Markets</a></li>\n" +
    "	            <li><a href=\"#\">Manifold Actions</a></li>\n" +
    "	            <!--<li><a href=\"#\">Trade Postions</a></li>-->\n" +
    "	        </ul>\n" +
    "			<div class=\"card\">\n" +
    "		        <button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Market Order</button>\n" +
    "		    </div>\n" +
    "		    <div class=\"card\" ng-repeat=\"market in markets\">\n" +
    "		    	<div style=\"padding:16px;\">\n" +
    "					<div class=\"row\">\n" +
    "			    		<div class=\"col-sm-6\">\n" +
    "			    			<a href=\"market/{{stateParams.id}}/{{market}}\">\n" +
    "			    				<h5>{{market}}</h5>\n" +
    "			    			</a>\n" +
    "			    		</div>\n" +
    "						<div class=\"col-sm-6\" style=\"text-align:right\">\n" +
    "							<span style=\"text-align:right;float:right\">0.21 {{stateParams.id}}</span>\n" +
    "			    		</div>\n" +
    "					</div>\n" +
    "					<div class=\"row\">\n" +
    "			    		<div class=\"col-sm-12\">\n" +
    "							<highchart config=\"bidAskChart\"></highchart>\n" +
    "			    			<p style=\"color:gray;font-size:10px\">%-0.32 24/hr Change</p>\n" +
    "							<p style=\"color:gray;font-size:10px\">4423 {{stateParams.id}} Depth</p>\n" +
    "						</div>\n" +
    "			    	</div>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "	    </div>\n" +
    "\n" +
    "		\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "	<!--TRANSACTIONS, TRADES-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <div>\n" +
    "		            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "		            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "		        </div> \n" +
    "		        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "		    </div>\n" +
    "		    <div class=\"\" class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.,inus}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "		    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "		            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("market/templates/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/about.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Motion to Edit</button>\n" +
    "    </div>\n" +
    "    \n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "            <p>Members: {{project.memberCount}} | Tasks: {{project.taskCount}} | Time: {{project.timeCount}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("market/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div ng-show=\"activity.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Project Content</button>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div ng-show=\"activity.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "    -->\n" +
    "\n" +
    "    <div ng-show=\"activity.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
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
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Project Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"$event.stopPropagation();renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item);\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                   \n" +
    "                    <h4><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                    <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                        \n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div>\n" +
    "                        <img ng-click=\"$event.stopPropagation();\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                        <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p ng-click=\"$event.stopPropagation();\" ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\">\n" +
    "                        <a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a>\n" +
    "                    </p>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TRANSACTION'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"font-weight:800\">From: <a ng-click=\"$event.stopPropagation();\" href=\"\">{{item.from}}</a> To: <a href=\"\">{{item.to}}</a></p>\n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
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
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("market/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/content.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Motion to Edit</button>\n" +
    "    </div>\n" +
    "    \n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "            <p>Members: {{project.memberCount}} | Tasks: {{project.taskCount}} | Time: {{project.timeCount}}</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("marketPair/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPair/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-10\">\n" +
    "            	<h1><a style=\"color:white\" href=\"market/{{market}}\">{{market}}</a> | <a style=\"color:white\"  href=\"market/{{market1}}\">{{market1}}</a></h1>\n" +
    "				<p style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | {{percentChange.toFixed(2)}}% Daily Change | {{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}} Daily Trade Volume | {{marketDepth.toFixed(2)}} Total Market Depth</p>\n" +
    "				<p style=\"color:white\">Last Trade Price: {{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | Highest Bid {{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}} | Lowest Ask {{bidAskChart.series[1].data[0][0].toFixed(2)}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2\" style=\"padding:16px;text-align:right\">\n" +
    "				<a style=\"color:white\" href=\"market/{{market1}}/{{market}}\"><i class=\"fa fa-refresh\"></i></a>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "            <li><a href=\"#\">Manifold Actions</a></li>\n" +
    "            <li><a href=\"#\">Trade Postions</a></li>\n" +
    "        </ul>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-show=\"pluralistic\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Pluralistic Market</h2>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Order Book</h2>\n" +
    "				<highchart config=\"bidAskChart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: ARRAY-->\n" +
    "	<!--combinatorial market string-->\n" +
    "	<!--MANIFOLDS ARE NESTED. . . -> INSTRUMENTS IN PROTOCOL.. SPONSOR, DERIVITATIVES-->\n" +
    "	<!--option tokens string inferance+time+option-->\n" +
    "\n" +
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
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "	        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ {{market}} | {{market1}} Content</button>\n" +
    "	    </div>\n" +
    "		<div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <div>\n" +
    "		            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "		            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "		        </div> \n" +
    "		        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "		    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "		        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "		            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
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
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Marketplace <span ng-show=\"selectedTag!=''\"> | {{selectedTag}}</span></h1></div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<!--FILTER BY CURRENCIES / PRICES I WANT TO PAY BASED ON MM.. RECURSIVE LIQUIDITY TRACE-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			\n" +
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
    "\n" +
    "			<!--\n" +
    "			TODO: Better Form.. add [] + \n" +
    "			<input placeholder=\"identiferSet\" type=\"text\" ng-model=\"newItem.ArrayManifolds\" class=\"form-control\"> [] ill talk this or this or this and this\n" +
    "			[], [], [[],[]]\n" +
    "			-->\n" +
    "			\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER',filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER',filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
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
    "		            <div style=\"padding:16px\">\n" +
    "	                	<a href=\"item/{{item.id}}\"><h4>{{item.title}}</h4></a>\n" +
    "						<p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "	                	<div style=\"max-height:500px;overflow:scroll\">\n" +
    "							<span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
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
    "	<!--REACT 5 Star verified purchase-->\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "            	<h1>Markets</h1>\n" +
    "				<p style=\"color:white\">833423 tokens in circulation </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<li ng-click=\"expandSort()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Connection <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "\n" +
    "	    <div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5></a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "\n" +
    "	    <div class=\"card\">\n" +
    "			<nvd3 options=\"graphOptions\" data=\"graphDataPower\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "	    </div>\n" +
    "\n" +
    "	    <div ng-repeat=\"token in tokens track by $index\" style=\"padding:0px\">\n" +
    "	    	<div class=\"card\" ng-click=\"\">\n" +
    "			    <div style=\"padding:16px;\">\n" +
    "			    	<a style=\"white-space: nowrap;\" href=\"market/{{token.string}}\"><h4>{{token.string}}</h4></a>\n" +
    "			    	<p style=\"white-space: nowrap;color:gray\">{{token.string}} markets</p>\n" +
    "\n" +
    "			    	<!--\n" +
    "			    	<a style=\"white-space: nowrap;\" href=\"market/{{market.string}}\"><h4>{{market.string}}</h4></a>\n" +
    "			    	<p style=\"white-space: nowrap;color:gray\">{{market.string}} markets</p>\n" +
    "			    	-->\n" +
    "\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "\n" +
    "	    <div ng-show=\"true\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "	        <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "	    </div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
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
    "					<ul class=\"member-tabs subNav\">\n" +
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
    "					<div class=\"nav-toggle\">\n" +
    "						<a style=\"color:black\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<md-divider style=\"color:gray\"></md-divider>\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"\">\n" +
    "					<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "\n" +
    "						<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "						<h5><a ng-click=\"$event.stopPropagation()\" href=\"member/{{member.username}}\">@{{member.username}}</a></h5>\n" +
    "						<p>{{member.totalWork}} | Total Reputation</p>\n" +
    "						\n" +
    "					</div>\n" +
    "\n" +
    "					<!--TODO-->\n" +
    "					<div class=\"pull-right\" style=\"margin-right:15px;margin-top:10px;\">\n" +
    "						<span style=\"color:gray;font-size:10px;float:right\">0x{{member.id}}</span>\n" +
    "						<br>\n" +
    "						<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\">\n" +
    "						<a style=\"padding:10px 15px;color:rgb(125,125,125)\"class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Send Tokens</a>\n" +
    "					</div>\n" +
    "					\n" +
    "				</div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "			<!--\n" +
    "			<div class=\"container\">\n" +
    "				<form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "		            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\">\n" +
    "		            <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "		                <a href=\"#\" role=\"button\">\n" +
    "		                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		                </a>\n" +
    "		            </div>\n" +
    "		        </form>\n" +
    "			</div>\n" +
    "			-->\n" +
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
    "<div class=\"row\" ng-if=\"member.description\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "			<div ng-bind-html=\"renderContent(member.description)\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "     <div class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <!--\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
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
    "        -->\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Profile Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div>\n" +
    "\n" +
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
    "\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                        \n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='ORDER'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-click=\"$event.stopPropagation()\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div> \n" +
    "\n" +
    "                    <div style=\"margin-left:42px\">\n" +
    "                        <p>{{item.amountSet}} <a>{{item.identiferSet}}</a></p>\n" +
    "                        <p>{{item.amountSet1}} <a>{{item.identiferSet1}}</a></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TRANSACTION'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <p style=\"font-weight:800\">From: <a ng-click=\"$event.stopPropagation()\" href=\"\">{{item.from}}</a> To: <a ng-click=\"$event.stopPropagation()\" href=\"\">{{item.to}}</a></p>\n" +
    "\n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                    \n" +
    "                    <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "\n" +
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
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
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
    "<div class=\"row\" ng-show=\"contentList.length == 0\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"row\" ng-show=\"contentList.length > 0\">\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"contentList.length > 0\">\n" +
    "\n" +
    "    <div ng-show=\"sortedTagArray.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Locations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
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
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"newContentToggleVar\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                    <div class=\"\">\n" +
    "                        <input type=\"text\" placeholder= \"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder= \"Associations\" ng-model=\"newContent.parent\" class=\"form-control\">\n" +
    "                        <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                            <li ng-class=\"{active: selectedType=='FILE'}\" ng-click=\"selectType('FILE')\"><a href=\"#\">File</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a href=\"#\">Image</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='LINK'}\" ng-click=\"selectType('LINK')\"><a href=\"#\">Link</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='MOTION'}\" ng-click=\"selectType('MOTION')\"><a href=\"#\">Motion</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='POST'}\" ng-click=\"selectType('POST')\"><a href=\"#\">Post</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='TASK'}\" ng-click=\"selectType('TASK')\"><a href=\"#\">Task</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='TIME'}\" ng-click=\"selectType('TIME')\"><a href=\"#\">Time</a></li>\n" +
    "                            <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Video</a></li>\n" +
    "                        </ul>\n" +
    "                        <tags-input ng-model=\"newContent.tags\" placeholder=\"Tags\"></tags-input>\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
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
    "                    \n" +
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
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div ng-show=\"sortedTagArray.length > 0\" class=\"col-sm-2\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Locations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    -->\n" +
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
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.follower.username}}\">{{member.follower.username}}</a></h4>\n" +
    "		        <p style=\"color:gray\">{{member.follower.status}} offline</p>\n" +
    "		        <p style=\"color:gray\">Total Reputation | {{member.follower.totalWork}}</p>\n" +
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
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.followed.username}}\">{{member.followed.username}}</a></h4>\n" +
    "		        <p style=\"color:gray\">{{member.followed.status}} offline</p>\n" +
    "		        <p style=\"color:gray\">Total Reputation | {{member.followed.totalWork}}</p>\n" +
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
    "        <div class=\"card\" ng-show=\"currentUser.id == member.id\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Item</button>\n" +
    "        </div>\n" +
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
    "        <div ng-repeat=\"item in items\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" href=\"item/{{item.id}}\"><h4>{{item.title}}</h4></a>\n" +
    "\n" +
    "                    <p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "\n" +
    "                    <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                        <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                    </div>  \n" +
    "\n" +
    "                    <h5>{{item.amountSet}} <a ng-click=\"$event.stopPropagation()\" href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h5>\n" +
    "\n" +
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
    "				<span><b>Identifiers</b></span>\n" +
    "	            <div ng-repeat=\"asset in sortedTransactionAssets\">\n" +
    "                    <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
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
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<span><b>Associations</b></span>\n" +
    "                <div ng-repeat=\"tag in sortedTransactionTags\">\n" +
    "                    <a href=\"#\" ng-click=\"selectAssociation(tag.element)\">{{tag.element}}</a>\n" +
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
    "\n" +
    "\n" +
    "					<!--TODO-->\n" +
    "					<div style=\"text-align:right;\" class=\"col-xs-6\">\n" +
    "						<h5>{{sumTransactions[sumTransactions.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Balance</h5>\n" +
    "						<h5>{{sumTo[sumTo.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Revenue</h5>\n" +
    "						<h5>{{sumFrom[sumFrom.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Expense</h5>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
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
    "			<button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle()\">+ Transaction</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\" ng-repeat=\"transaction in transactions\" ng-click=\"renderToggle(transaction)\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<p style=\"font-weight:800\">From: <a ng-click=\"$event.stopPropagation()\" href=\"\">{{transaction.from}}</a> To: <a ng-click=\"$event.stopPropagation()\" href=\"\">{{transaction.to}}</a></p>\n" +
    "				<span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation()\"  href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "				<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in transaction.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "				<p>{{transaction.content}}</p>\n" +
    "				<p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "				<a ng-click=\"$event.stopPropagation()\" href=\"transaction/{{transaction.id}}\"></a>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.reactions.plus}} like </a> \n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.reactions.minus}} dislike </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{transaction.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "			<div ng-click=\"$event.stopPropagation()\" ng-show=\"transaction.showReply\" class=\"card-footer\">\n" +
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

angular.module("member/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
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
    "\n" +
    "	<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
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
    "\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Order</button>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "				<h3>Value Map</h3>\n" +
    "				\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "\n" +
    "	    <div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\" ng-click=\"renderToggle(order)\">\n" +
    "	        	\n" +
    "	            <div style=\"padding:16px\">\n" +
    "\n" +
    "	            	<span ng-repeat=\"item in order.amountSet track by $index\">\n" +
    "						{{order.amountSet[$index]}} <a ng-click=\"$event.stopPropagation()\" href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1 track by $index\">\n" +
    "						{{order.amountSet1[$index]}} <a ng-click=\"$event.stopPropagation()\" href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
    "\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "	            </div>\n" +
    "	            <div class=\"card-footer\">\n" +
    "	                <a ng-click=\"$event.stopPropagation();createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.reactions.plus}} like </a> \n" +
    "	                <a ng-click=\"$event.stopPropagation();createReaction(order, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{order.reactions.minus}} dislike </a>\n" +
    "	                <a ng-click=\"$event.stopPropagation();reply(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "	                <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{order.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "	            </div>\n" +
    "\n" +
    "	            <div ng-click=\"$event.stopPropagation()\" ng-show=\"order.showReply\" class=\"card-footer\">\n" +
    "			        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "			            <text-angular ng-model=\"newPost.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "			            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "			        </form>\n" +
    "			    </div>\n" +
    "\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
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
    "	        <button class=\"btn btn-default log-btn\" ng-click=\"newTaskToggle()\">+ Task</button>\n" +
    "	    </div>\n" +
    "		<div class=\"card\" ng-show=\"newTaskToggleVar\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"createTask(newTask)\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<input placeholder=\"Title\" type=\"text\" ng-model=\"newTask.title\" class=\"form-control\" id=\"taskTitle\">\n" +
    "						<tags-input placeholder=\"Tags\" ng-model=\"newTask.tags\"></tags-input>\n" +
    "		                <text-angular placeholder=\"Content\" ng-model=\"newTask.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "					</div>\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-repeat=\"task in tasks\">\n" +
    "			<div class=\"card\" ng-click=\"renderToggle(task)\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div style=\"float:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(task)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "					<h4 ng-click=\"$event.stopPropagation()\"><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "					<p ng-click=\"$event.stopPropagation()\"><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "					<a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "					<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{task.reactions.plus}} like </a> \n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{task.reactions.minus}} dislike </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();reply(task)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-click=\"$event.stopPropagation();\" ng-show=\"task.showReply\" class=\"card-footer\">\n" +
    "		            <form role=\"form\" ng-submit=\"createContent(task)\">\n" +
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
    "    <div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"timeToggle()\">+ Time</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div class=\"card\">\n" +
    "        <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "    </div>\n" +
    "    -->\n" +
    "\n" +
    "    <div ng-repeat=\"item in time\">\n" +
    "        <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "				<h4>{{item.startTime | date:\"h:mma | MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma | MM/dd/yyyy\"}}</h4>\n" +
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
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Members</h1></div>\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                        <h4 style=\"text-align:right;margin-top:20px\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
    "                    </a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('totalWork DESC')\"><h5>Total Reputation</h5></a></li>\n" +
    "                        <hr class=\"sort-hr\">\n" +
    "                        <li><a href=\"#\" class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h5>Date Joined</h5></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"card\">\n" +
    "        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\">\n" +
    "            <!--<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>-->\n" +
    "            <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                <a  href=\"#\" role=\"button\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "        <div class=\"member-card\" style=\"margin-bottom:10px\" ng-click=\"renderReputationToggle(member)\">\n" +
    "            <div class=\"member-card-image\" style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.username}}\"><img ng-src=\"{{member.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"member-card-info\">\n" +
    "                <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.username}}\">{{member.username}}</a></h4>\n" +
    "                <p style=\"color:gray\">{{member.status}} offline</p>\n" +
    "                <p style=\"color:gray\">Total Reputation | {{member.totalWork}}</p>\n" +
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

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<div ng-controller=\"NavCtrl\">\n" +
    "\n" +
    "    <!--TODO: NG-IF-->\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"content\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newContent\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Content</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
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
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"filter\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>Filter</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
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
    "                    <p><b>Tags</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"searchQuery.tags\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.tags.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Associations</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"searchQuery.associations\">\n" +
    "                        <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.associations.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAssociation(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Locations</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Locations\" ng-model=\"searchQuery.locations\">\n" +
    "                        <auto-complete source=\"loadLocation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.locations.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectLocation(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Distance (km)</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{locationFilter.distance}}</span></div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                        <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
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
    "                    <div ng-repeat=\"asset in item.assets.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAsset(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <!--RELATED-->\n" +
    "                    <p><b>Tags</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"selectedTags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.tags.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p><b>Associations</b></p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"selectedAssociations\">\n" +
    "                        <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"asset in item.associations.slice(0,10)\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(asset.element)\">{{asset.element}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--MARKET-->\n" +
    "                <div ng-if=\"type=='MARKET'\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    <!--\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    -->\n" +
    "\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Asset\" ng-model=\"markets\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
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
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"item\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newItem\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Item</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Items connect with Token Protocols and 2nd Stage delivery applications. <a ng-click=\"informationToggle('CREATEITEM')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createItem()\">\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Title\" ng-model=\"newItem.title\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newItem.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newItem.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Location</h5>\n" +
    "                    <input placeholder=\"IdentiferSet\" type=\"text\" ng-model=\"newItem.location\" class=\"form-control\">\n" +
    "                    <h5>Tradable</h5>\n" +
    "                    <md-switch ng-model=\"tradable\" aria-label=\"GPS Tracking\"></md-switch>\n" +
    "                    <h5>Identifer Set <a ng-click=\"informationToggle('IDENTIFERSET')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <input placeholder=\"IdentiferSet\" type=\"text\" ng-model=\"newItem.identiferSet\" class=\"form-control\">\n" +
    "                    <h5>Amount Set <a ng-click=\"informationToggle('AMOUNTSET')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <input placeholder=\"Amount Set\" type=\"text\" ng-model=\"newItem.amountSet\" class=\"form-control\">\n" +
    "                    <h5>Delivery Protocol <a ng-click=\"informationToggle('DELIVERYPROTOCOL')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <text-angular ng-model=\"newItem.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
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
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-10 col-xs-offset-1\">\n" +
    "                            <h1>Login | Welcome back!</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-10 col-xs-offset-1\">\n" +
    "                    <div class=\"login-form\">\n" +
    "                        <form role=\"form\" method=\"post\" action=\"/auth/local\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\"> \n" +
    "                                <i class=\"fa fa-user\"></i>\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group log-status\">\n" +
    "                                <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\"> \n" +
    "                                <i class=\"fa fa-lock\"></i>\n" +
    "                            </div>\n" +
    "                            <div class=\"align-right\">\n" +
    "                                <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign in</button>\n" +
    "                            </div>\n" +
    "                            <br><br>\n" +
    "                            <div class=\"social-log\">\n" +
    "                                <a style=\"text-align:center\" href=\"/register\"><h4>Need an Account?</h4></a>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"nav\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div style=\"text-align:center\">\n" +
    "                <!--<i ng-click=\"sideNavToggle()\" class=\"fa fa-cross\"></i>-->\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <form style=\"padding:15px;\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/about\">About</a></h2>\n" +
    "                <h2 class=\"nav-links\" ng-show=\"currentUser\" style=\"padding:16px;\"><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h2>\n" +
    "                <!--<h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/content\">Content</a></h2>-->\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/discover\">Discover</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/market\">Market</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/marketplace\">Marketplace</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/projects\">Projects</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/tasks\">Tasks</a></h2>\n" +
    "                <!--<h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/transparency\">Transparency</a></h2>-->\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/notifications\">Notifications</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/account\">Settings</a></h2>\n" +
    "                <!--<h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/\">Vote</a></h2>-->\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/logout\">Logout</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/login\">Login</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\"class=\"nav-links\" style=\"padding:16px;\"><a href=\"/register\">Register</a></h2>\n" +
    "                <a href=\"/\"><img style=\"width:200px\" src=\"images/hyper.gif\"></a>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"order\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newOrder\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Order</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">An Order creates a position in our Value Matrix (MultiDimensional Token Market) <a ng-click=\"informationToggle('CREATEORDER')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "               \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "                    <div class=\"row\">\n" +
    "\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <h5>\n" +
    "                                <span ng-show=\"!identiferSetAlpha\">Asset Identifer Set α</span>\n" +
    "                                <span ng-repeat=\"market in identiferSetAlpha\">{{market.text}} </span> \n" +
    "                                <a ng-click=\"informationToggle('IDENTIFERSETALPHA')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a>\n" +
    "                            </h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set α\" ng-model=\"identiferSetAlpha\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <div ng-repeat=\"market in identiferSetAlpha\">\n" +
    "\n" +
    "                                <div class=\"col-sm-12\">\n" +
    "                                    <h5>{{market.text}} Amount | Available {{balance[market.text] || 0}}</h5>\n" +
    "                                    <input placeholder=\"{{market.text}} Amount\" type=\"number\" ng-model=\"newOrder.setAlpha[market.text]\" class=\"form-control\">\n" +
    "                                </div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div style=\"text-align:left;margin-bottom:15px\" class=\"col-sm-12\">\n" +
    "                            <a ng-click=\"invertMarket()\" style=\"width:100px\" class=\"btn btn-default log-btn\"><i class=\"fa fa-refresh\"></i> Invert</a>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <h5>\n" +
    "                                <span ng-show=\"!identiferSetBeta\">Asset Identifer Set β</span>\n" +
    "                                <span ng-repeat=\"market in identiferSetBeta\">{{market.text}} </span> \n" +
    "                                <a ng-click=\"informationToggle('IDENTIFERSETBETA')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a>\n" +
    "                            </h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set β\" ng-model=\"identiferSetBeta\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6 form-group\">\n" +
    "                            <div ng-repeat=\"market in identiferSetBeta\">\n" +
    "\n" +
    "                                <div class=\"col-sm-12\"><h5>{{market.text}} Amount</h5><input placeholder=\"{{market.text}} Amount\" type=\"number\" ng-model=\"newOrder.setBeta[[market.text]]\" class=\"form-control\"></div>\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
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
    "\n" +
    "                        <div class=\"col-sm-12\" style=\"marking:10px\">\n" +
    "                            <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='ONBOOKS'}\" ng-click=\"selectOrderType('ONBOOKS')\"><a href=\"#\">Market onBooks <i ng-click=\"informationToggle('ONBOOKSORDER')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='FILLORKILL'}\" ng-click=\"selectOrderType('FILLORKILL')\"><a href=\"#\">Market Fill Or Kill <i ng-click=\"informationToggle('FILLORKILL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='IMMEDIATEORCANCEL'}\" ng-click=\"selectOrderType('IMMEDIATEORCANCEL')\"><a href=\"#\">Immediate or Cancel <i ng-click=\"informationToggle('IMMEDIATEORCANCEL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                                <li ng-class=\"{active: selectedOrderType=='LIMIT'}\" ng-click=\"selectOrderType('LIMIT')\"><a href=\"#\"> Limit <i ng-click=\"informationToggle('LIMIT')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <!--\n" +
    "                        <div class=\"col-sm-12\" style=\"padding:20px\">\n" +
    "                            <p style=\"font-weight:800;\">\n" +
    "                                <span>\n" +
    "                                    Sell <span ng-repeat=\"market in identiferSet\">{{newOrder.amountSet[market.text]}} {{market.text}}, </span> \n" +
    "                                    for <span ng-repeat=\"market in identiferSet1\"> {{newOrder.amountSetBeta[market.text]}} {{market.text}}, </span> \n" +
    "\n" +
    "                                    Create a matrix\n" +
    "                                    @ {{newOrder.amountSetBeta / newOrder.amountSet}} <span ng-repeat=\"market in identiferSet\">{{market.text}}, </span>  / <span ng-repeat=\"market in identiferSet1\">{{market.text}}</span>\n" +
    "\n" +
    "                                </span>\n" +
    "                                <span> | </span>\n" +
    "                                <span>\n" +
    "                                    Buy <span ng-repeat=\"market in identiferSet1\">{{newOrder.amountSetBeta[market.text]}} {{market.text}}, </span> \n" +
    "                                    with <span ng-repeat=\"market in identiferSet\">{{newOrder.amountSet[market.text]}} {{market.text}}, </span> \n" +
    "\n" +
    "                                    Create a matrix\n" +
    "                                    @ {{newOrder.amountSet / newOrder.amountSetBeta}} <span ng-repeat=\"market in identiferSet1\">{{market.text}}</span> / <span ng-repeat=\"market in identiferSet\">{{market.text}}</span>\n" +
    "\n" +
    "                                </span>\n" +
    "                            </p>\n" +
    "                        </div>\n" +
    "                        -->\n" +
    "\n" +
    "\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.setAlpha\">create</button>\n" +
    "                        \n" +
    "                    </div>\n" +
    "\n" +
    "                </form>\n" +
    "                    \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"project\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div ng-if=\"newProject\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Project</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
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
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <div style=\"text-align:right;float:right\">\n" +
    "                    <p ng-click=\"$event.stopPropagation();tokensToggle(item);\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                    <p ng-click=\"$event.stopPropagation();renderValidationToggle(item);\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--TITLE-->\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'CONTENT'\">\n" +
    "                    <h2><a href=\"content/{{item.id}}\">{{item.title}}</a></h2>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'ITEM'\">\n" +
    "                    <h2><a href=\"content/{{item.id}}\">{{item.title}}</a></h2>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'ORDER'\">\n" +
    "                    <h1>ORDER</h1>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TASK'\">\n" +
    "                    <h2><a href=\"task/{{item.id}}\">{{item.title}}</a></h2>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TIME'\">\n" +
    "                    <h2><a href=\"time/{{item.id}}\">{{item.amount}}</a></h2>\n" +
    "                    <h4 ng-if=\"item.task.title\"><a href=\"task/{{item.task.id}}\">{{item.task.title}}</a></h4>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TRANSACTION'\">\n" +
    "                    <h1>TRANSACTION</h1>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--TAGS-->\n" +
    "                <p ng-if=\"item.tags\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "\n" +
    "                <p ng-if=\"item.task.tags\"><a ng-repeat=\"tag in item.task.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "\n" +
    "                <!--LOCATION-->\n" +
    "                <p ng-if=\"item.location\"><a>{{item.location}}</a></p>\n" +
    "\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "                \n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <span ng-if=\"item.content\" style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"background-color:#f9f9f9;min-height:70%\">\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\"><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(validation)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-if=\"item.model == 'TASK'|| item.model == 'TIME'\" href=\"#\" ng-click=\"validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card-footer\" ng-show=\"item.showReply\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
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
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderReputation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:90%;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>Reputation</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <h3>{{item.project.title}}</h3>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                \n" +
    "                <!--<tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Manifold Filter\" ng-model=\"reputationFilter\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>-->\n" +
    "\n" +
    "                <highchart config=\"chart\"></highchart>\n" +
    "                \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderValidation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:80%;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>Associations & Validations</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "\n" +
    "                <div>\n" +
    "                        \n" +
    "                    <div ng-if=\"item.model=='TIME'\">\n" +
    "\n" +
    "                        <h3>{{item.amount}} <a ng-click=\"informationToggle('VALIDATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h3>\n" +
    "                        <h3><a href=\"task/{{item.task.id}}\">{{item.task.title}}</a></h3>\n" +
    "\n" +
    "                        <!--WIP-->\n" +
    "                        <h4>\n" +
    "                            {{item.amount}}\n" +
    "                            <i class=\"fa fa-angle-double-left\"></i>\n" +
    "                            {{validationSumObj.general/validations.length}}\n" +
    "                            <i class=\"fa fa-angle-double-right\"></i>\n" +
    "                            {{item.task.title.toUpperCase()}}\n" +
    "                        </h4>\n" +
    "\n" +
    "                        <h4>\n" +
    "                            {{item.task.title.toUpperCase()}} \n" +
    "                            <i class=\"fa fa-arrows-h\"></i> \n" +
    "                            <a href=\"project/{{item.task.id}}\">{{item.project.title.toUpperCase()}}</a>\n" +
    "                        </h4>\n" +
    "\n" +
    "                        <h4>\n" +
    "                            {{item.amount}} \n" +
    "                            <i class=\"fa fa-arrows-h\"></i> \n" +
    "                            {{item.project.title}}\n" +
    "                        </h4>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"item.model=='TASK'\">\n" +
    "                        <h3>{{item.title}} <a ng-click=\"informationToggle('VALIDATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h3>\n" +
    "                        <h4>\n" +
    "                            {{item.title.toUpperCase()}} \n" +
    "                            <i class=\"fa fa-arrows-h\"></i> \n" +
    "                            <a href=\"project/{{item.project.urlTitle}}\">{{item.project.title.toUpperCase()}}</a>\n" +
    "                        </h4>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!--SET-->\n" +
    "                    <h5 ng-repeat=\"model in item.associatedModels\">{{model.type}}, {{model.address}}</h5>\n" +
    "\n" +
    "                    <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                    <nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div>\n" +
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
    "                                <!--<td>{{item.task.title.toUpperCase()}} <i class=\"fa fa-arrows-h\"></i>{{item.project.title.toUpperCase()}}</td>-->\n" +
    "                                <td>{{validation.associatedModels[0].address}} <i class=\"fa fa-arrows-h\"></i>{{validation.associatedModels[1].address}}</td>\n" +
    "                                <td>General</td>\n" +
    "                                <td>{{validation.validation.general}}</td>\n" +
    "                                <td><a href=\"validation/{{validation.id}}\">{{validation.id}}</a></td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "                    <highchart config=\"validationColumnRender\"></highchart>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
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
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/settings\">Settings</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></h4>\n" +
    "                    <h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/time\">Time</a></h4>\n" +
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
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Task</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
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
    "           \n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Time</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Time & Intention unite. Token Protocols propogate value interactions. <a ng-click=\"informationToggle('CREATETIME')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createTime()\">\n" +
    "\n" +
    "                    <h5>Amount</h5>\n" +
    "                    <input type=\"number\" step=\"1\" placeholder=\"Amount\" ng-model=\"newTime.amount\" class=\"form-control\">\n" +
    "                    <h5>Start Time</h5>\n" +
    "                    <input type=\"datetime-local\" step=\"1\" placeholder=\"Start Time\" ng-model=\"newTime.startTime\" class=\"form-control\">\n" +
    "                    <h5>Tags</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"newTime.tags\">\n" +
    "                        <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <h5>Associations (Task) <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTime.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTime.amount\">create</button>\n" +
    "\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"tokens\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "        <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>Tokens</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
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
    "                <!--<ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                    <li ng-class=\"{active: selectedType=='AUDIO'}\" ng-click=\"selectType('AUDIO')\"><a href=\"#\">Content</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a href=\"#\">Task</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='LINK'}\" ng-click=\"selectType('LINK')\"><a href=\"#\">Time</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='MOTION'}\" ng-click=\"selectType('MOTION')\"><a href=\"#\">Validation</a></li>\n" +
    "                </ul>-->\n" +
    "\n" +
    "\n" +
    "                <!--Token Space-->\n" +
    "                <tags-input min-length=\"1\" ng-model=\"tokenFilter\" placeholder=\"Token Manifold\"></tags-input>\n" +
    "\n" +
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
    "                <div class=\"spacing-10\"></div>\n" +
    "               \n" +
    "                <h3 style=\"\">Tokens Earned</h3>\n" +
    "                <!--<highchart config=\"tokensEarned\"></highchart>-->\n" +
    "\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h3 style=\"\">Market Liquidity and Equality Traverse</h3>\n" +
    "                <p>Enter your desired output for tokens based on liquidy <!--/ various order types-->in the MultiMarket. The CRE8 network will perform matching operations and create a series of orders which fulfill the token conversion. The perspective we look at the multimarket gives us traversing rules and computationally efficient conversion paths. Through the assistance of tensor-based neural networks we create a hyper-vector perspective formed though relations of the aggregate of our value maps. </p>\n" +
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
    "                    <table class=\"table table-striped table-hover\">\n" +
    "                        <tbody>\n" +
    "                            <tr ng-repeat=\"token in inputVector\">\n" +
    "                                <td><a href=\"market/{{token.text}}\">{{token.text}}</a></td>\n" +
    "                            </tr>\n" +
    "                        </tbody>\n" +
    "                    </table>\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                    <div style=\"text-align:center\"><img src=\"https://i.stack.imgur.com/PnXIo.png\"/></div>\n" +
    "\n" +
    "                    <div class=\"spacing-15\"></div>-->\n" +
    "\n" +
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
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"transaction\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:50%;max-width:100%\">\n" +
    "        <div ng-if=\"newTransaction\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "            \n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Transaction</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
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
    "                    <h5>Tags</h5>\n" +
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
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <h1>+ Validation</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TASK'\">\n" +
    "                    <h5>\n" +
    "                        <i class=\"fa fa-check\"></i> Validate {{item.title}} \n" +
    "                        <i class=\"fa fa-arrows-h\"></i> \n" +
    "                        {{newValidation.associatedModel[0].text}}\n" +
    "                    </h5>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'TIME'\">\n" +
    "                    <h5>\n" +
    "                        <i class=\"fa fa-check\"></i> Validate {{item.amount}} Time \n" +
    "                        <i class=\"fa fa-arrows-h\"></i> \n" +
    "                        {{newValidation.associatedModel[0].model.title}}\n" +
    "                    </h5>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"item.model == 'VALIDATION'\">\n" +
    "                    <h5>\n" +
    "                        Validate Validation <i class=\"fa fa-check\"></i>\n" +
    "                    </h5>\n" +
    "                </div>\n" +
    "\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newValidation.associatedModel\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <!--<div class=\"spacing-15\"></div>\n" +
    "                <div style=\"text-align:center\"><img src=\"https://i.stack.imgur.com/PnXIo.png\"/></div>\n" +
    "                <div class=\"spacing-15\"></div>-->\n" +
    "\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">General</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation.general\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation.general}} | {{memberValidate.totalWork}}</span></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-repeat=\"tag in tags\">\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{tag.text}}</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newValidation.validation[tag.text]\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{newValidation.validation[tag.text]}} | {{reputation[tag.text] || 0}}</span></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"tags\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <!--TODO: RENDER GRAPH? ;; VALUE MAP GRAPH;; SPIDER/RADIAL-->\n" +
    "\n" +
    "                <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "                <button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
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
    "                    <p>Tags: {{confirm.tags}}</p>\n" +
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
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"page-heading\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <div class=\"container\">\n" +
    "                    <h1>Information</h1>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'CREATECONTENT'\">\n" +
    "                    CREATE CONTENT\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATEITEM'\">\n" +
    "                    CREATE ITEM\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATEORDER'\">\n" +
    "                    CREATE ORDER\n" +
    "                    Orders create the core of realational value. The are the linkages between assets which are weighted by the OrderBook i.e. Prices at which people are willing to by and sell respectively.\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATEPROJECT'\">\n" +
    "                    CREATE PROJECT\n" +
    "\n" +
    "                    Projects are Organization. They are the mechanism by which we are able to coordinate as a group around shared goals. Projects can own assests and are consequently shared by their members. Decision making is disintermediated democratically though wieghted voting though motions. Projects connect to Tasks and to Time.\n" +
    "\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATETASK'\">\n" +
    "                    CREATE TASK\n" +
    "                    Tasks act as a 'Bridge,' provide context to time, and shape broader the objectives of projects through the clear statement of responsibility. \n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATETIME'\">\n" +
    "                    CREATE TIME\n" +
    "                    Time is a core unit of value. Within the template of scarcity, time as intention manifests as value. Albeit not necessarily finanite, linearly it's tells a compelling narrative. Information on how we spend our time intuitivly creates shared value. Information as income.\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATETRANSACTION'\">\n" +
    "                    CREATE TRANSACTION\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'CREATEVALIDATION'\">\n" +
    "                    CREATE VALIDATION\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'TOKEN'\">\n" +
    "                    <p>The UniversalToken onMint Market Postion Signifies that the creator of the instrument will transfer UniversalToken onMint of the specified asset.</p>\n" +
    "                    <p>PROTOCOL SPECIFICATION</p>\n" +
    "                    <p>Each Memeber is given 1 Universal Token per second</p>\n" +
    "                </div>  \n" +
    "\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERSET'\">\n" +
    "                    IDENTIFER SET\n" +
    "                </div>\n" +
    "\n" +
    "                <!--DEP-->\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERALPHA'\">\n" +
    "                    IDENTIFER SET ALPHA\n" +
    "                </div>\n" +
    "                <div ng-if=\"informationType == 'IDENTIFERSETBETA'\">\n" +
    "                    IDENTIFER SET BETA\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'ASSOCIATIONS'\">\n" +
    "                    ASSOCIATIONS\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'PROTOCOLS'\">\n" +
    "                    PROTOCOL\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'VALUEMAP'\">\n" +
    "                    <p>Value Map Controls</p>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"informationType == 'VALIDATION'\">\n" +
    "                    VALIDATION\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <!--TODO: UNIFY MOBILE AND NON; TODO; TIME CTRL-->\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "\n" +
    "                <!--TODO: NOTIFICATIONS-->\n" +
    "                <button class=\"navbar-toggle\" type=\"button\" ng-click=\"sideNavToggle()\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "\n" +
    "                <!--TODO: CREATE TIME TO ENGINEER; CONTEXT; TASK; PAUSE; MULTID; CONTROLLER..-->\n" +
    "                <div ng-show=\"true\" class=\"nav-links\" style=\"float:left;margin-top:13px;margin-right:10px;font-size:18px\">\n" +
    "                    <a ng-show=\"taskTime == 0\" href=\"#\"><i style=\"color:red\" class=\"fa fa-circle\"></i></a>\n" +
    "                    <a ng-show=\"taskTime > 0\" href=\"#\"><i style=\"color:red\" class=\"fa fa-pause\"></i></a>\n" +
    "                    <a ng-show=\"taskTime > 0\" href=\"#\">{{taskTime}}</a>\n" +
    "                </div>\n" +
    "\n" +
    "                <a class=\"navbar-brand\" href=\"/\"><span style=\"font-weight:bold;color:white\">CRE8.XYZ</span></a>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <!--TODO: DEPRECIATE-->\n" +
    "            <div class=\"collapse navbar-collapse\" style=\"text-align:center\">\n" +
    "\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <form class=\"navbar-form\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link1').value; return false;\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link1\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </ul>\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "                    <li class=\"nav-links\" ng-show=\"!currentUser\"><a ng-click=\"loginToggle()\" href=\"#\">Login</a></li>\n" +
    "                    <li ng-click=\"sideNavToggle()\">\n" +
    "                        <!--TODO: NOTIFICATIONS-->\n" +
    "                        <button class=\"navIcon\" type=\"button\" style=\"margin-top:4px;\">\n" +
    "                            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                        </button>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            \n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("notifications/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h1>Notifications</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"notifications.length == 0\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	\n" +
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
    "            <div style=\"padding:16px\">\n" +
    "\n" +
    "                <div style=\"float:right\">\n" +
    "                    <h5 ng-click=\"tokensToggle()\"><a href=\"\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                </div>\n" +
    "\n" +
    "            	<h4><a href=\"market/{{order.identiferSet}}/{{order.identiferSet1}}\">{{order.identiferSet}} | {{order.identiferSet1}}</a></h4>\n" +
    "\n" +
    "            	<!--\n" +
    "                <h4>{{order.amountSet}} {{order.identiferSet}}</h4>\n" +
    "            	<h4>{{order.amountSet1}} {{order.identiferSet1}}</h4>\n" +
    "                -->\n" +
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
    "                <h4>{{order.createdAt}}</h4>\n" +
    "                <h4>{{order.type}}</h4>\n" +
    "\n" +
    "                <!--<h4>Filled | Partially Filled | Date</h4>-->\n" +
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
    "\n" +
    "\n" +
    "                <h1 style=\"text-align:left;\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "                    {{project.title}}\n" +
    "                    <span ng-show=\"project.parent\"> | \n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a>\n" +
    "                    </span> \n" +
    "                    <span ng-show=\"projectNavigation\" style=\"color:white;text-transform:capitalize;\"> | \n" +
    "                       {{projectNavigation}}\n" +
    "                    </span> \n" +
    "                </h1>\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"project.location\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div>\n" +
    "                            <div style=\"font-size: 15px;\"><a ng-click=\"$event.stopPropagation();\" href=\"#\">{{marker.content}}</a></div>\n" +
    "                        </div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:left\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs subNav\">\n" +
    "                        <!--<li ng-click=\"$event.stopPropagation();filterToggle('DISCOVER');\" style=\"float:left;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-filter\"></i></a></li>-->\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/content\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/ledger\">Ledger</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/members\">Members</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/projects\">Projects</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/time\">Time</a></li>\n" +
    "                        <li style=\"\"><a class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Send Tokens</a></li>\n" +
    "                        <li style=\"\"><a class=\"btn btn-default\" ng-show=\"$event.stopPropagation();isProjectCreator()\" ng-click=\"editProjectToggle()\">Edit</a></li>\n" +
    "                        <li style=\"\"><a class=\"btn btn-default\" ng-click=\"$event.stopPropagation();createMember()\">Join</a></li>\n" +
    "                        <li style=\"float:right;margin-top:5px\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"nav-toggle\" style=\"padding:0px\">\n" +
    "                <ul style=\"padding:10px 5px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:right;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();filterToggle('DISCOVER');\" style=\"float:left;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-filter\"></i></a></li>\n" +
    "                    <li>\n" +
    "                        <form ng-click=\"$event.stopPropagation();\" style=\"display:flex;flex-direction:row;float:left;width:80%\">\n" +
    "                            <tags-input style=\"border:0px;flex-grow:2;height:40px;margin-top: -7px;margin-bottom: 3px;\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                        </form>\n" +
    "                    </li>\n" +
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
    "			<p><b>Description</b></p>\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "            <p><b>Address</b>: {{project.id}}</p>\n" +
    "            <p><b>Location</b>: <b>Address</b>: {{project.location.address}}, <b>Latitude</b>: {{project.location.lat}}, <b>Longitude</b>: {{project.location.lng}}</p>\n" +
    "            <p><b>Members</b>: {{project.memberCount}} | <b>Tasks</b>: {{project.taskCount}} | <b>Time</b>: {{project.timeCount}}</p>\n" +
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
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Project Content</button>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div ng-show=\"activity.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "    -->\n" +
    "\n" +
    "    <div ng-show=\"activity.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
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
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Project Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "            <div class=\"card\" ng-if=\"item.model=='CONTENT'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TASK'\" ng-click=\"$event.stopPropagation();renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item);\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                   \n" +
    "                    <h4><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                    <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "                        \n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TIME'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div>\n" +
    "                        <img ng-click=\"$event.stopPropagation();\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                        <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p ng-click=\"$event.stopPropagation();\" ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\">\n" +
    "                        <a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a>\n" +
    "                    </p>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
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
    "            <div class=\"card\" ng-if=\"item.model=='TRANSACTION'\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"font-weight:800\">From: <a ng-click=\"$event.stopPropagation();\" href=\"\">{{item.from}}</a> To: <a href=\"\">{{item.to}}</a></p>\n" +
    "                    <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "                    <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
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
    "        </div>\n" +
    "        \n" +
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
    "\n" +
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
    "\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-6\">\n" +
    "					<h5>Asset Balance Lookup <span style=\"font-size:11px;color:gray\">0x8f50FB12E80E788cC0141b06e84a4a02357431d0</span></h5>\n" +
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
    "					<h5>Project Reputation Lookup <span style=\"font-size:11px;color:gray\">0x90C11Cd017582766A89155B7b90f11aF67fD2A2A</span> </h5>\n" +
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
    "\n" +
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
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span><b>Tags</b></span>\n" +
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
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokenToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\" style=\"font-weight:700\" href=\"member/{{item.user.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"> {{item.user.username}}\n" +
    "                        </a>\n" +
    "                        <span am-time-ago=\"item.createdAt\"></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-bind-html=\"renderContent(item.content)\"></div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
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
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
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
    "\n" +
    "            <div class=\"card\">\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Item</button>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--\n" +
    "            <div class=\"card\">\n" +
    "                <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "            </div>\n" +
    "            -->\n" +
    "\n" +
    "            <div ng-repeat=\"item in items\">\n" +
    "                <div class=\"card\" style=\"\">\n" +
    "                    <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "\n" +
    "                        <div style=\"float:right\">\n" +
    "                            <h5 style=\"text-align:right\" ng-click=\"tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <a href=\"item/{{item.id}}\"><h4>{{item.title}}</h4></a>\n" +
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
    "			<button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle()\">+ Transaction</button>\n" +
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
    "		<div class=\"card\" ng-repeat=\"transaction in transactions\" ng-click=\"renderToggle(transaction)\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<p style=\"font-weight:800\">From: <a ng-click=\"$event.stopPropagation();\" href=\"\">{{transaction.from}}</a> To: <a ng-click=\"$event.stopPropagation();\" href=\"\">{{transaction.to}}</a></p>\n" +
    "				<span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "				<p style=\"font-weight:800\">{{transaction.amount}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{transaction.identifier}}\">{{transaction.identifier}}</a></p>\n" +
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
    "		<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">join</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\">\n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.user.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation()\" href=\"member/{{member.user.username}}\"><img ng-src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h4>\n" +
    "		        <!--<p style=\"color:gray\">{{member.status}} offline</p>-->\n" +
    "		        <p style=\"color:gray\">Total Reputation | {{member.user.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">{{project.title}} | {{member.user.reputation[project.title] || 0}}</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
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
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "				<!--<div style=\"float:right\">\n" +
    "					<a href=\"#\" ng-click=\"filterToggle()\"><span ng-repeat=\"dimension in baseMarkets\">{{dimension.text}}, </span><i class=\"fa fa-question-circle\"></i></a>\n" +
    "				</div>-->\n" +
    "\n" +
    "				<h3>Value Map</h3>\n" +
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
    "		<div ng-repeat=\"order in orders\">\n" +
    "	        <div class=\"card\">\n" +
    "	            <div style=\"padding:16px\">\n" +
    "	            	<span ng-repeat=\"item in order.amountSet\">\n" +
    "						{{order.amountSet[$index]}} <a href=\"market/{{order.identiferSet[$index]}}\">{{order.identiferSet[$index]}}</a> \n" +
    "					</span>\n" +
    "					<span> | </span>\n" +
    "					<span ng-repeat=\"item in order.amountSet1\">\n" +
    "						{{order.amountSet1[$index]}} <a href=\"market/{{order.identiferSet1[$index]}}\">{{order.identiferSet1[$index]}}</a> \n" +
    "					</span>\n" +
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
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "	");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
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
    "<div class=\"row\">\n" +
    "	<div ng-repeat=\"project in projects\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "                    <div class=\"col-sm-1 col-xs-2\"><a href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a></div>\n" +
    "                    <div class=\"col-sm-11 col-xs-10\">\n" +
    "                        <h3 style=\"margin-top:0px\"><a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a></h3>\n" +
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
    "			<p>{{project.description}}</p>\n" +
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
    "	<div ng-show=\"tasks.length == 0\">\n" +
    "       <div class=\"card\">\n" +
    "		    <button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button>\n" +
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
    "		<div ng-repeat=\"task in tasks\">\n" +
    "			<div class=\"card\" ng-click=\"renderToggle(task)\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div style=\"float:right;text-align:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokensToggle(task)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "						<h5 ng-click=\"$event.stopPropagation();renderValidationToggle(task)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "					<h4 ng-click=\"$event.stopPropagation()\"><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "					<!--<p ng-click=\"$event.stopPropagation()\"><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>-->\n" +
    "					<p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in task.tags\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "					<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{task.reactions.plus}} like </a> \n" +
    "					<a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{task.reactions.minus}} dislike </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();reply(task)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "					<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{task.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "				</div>\n" +
    "				<div ng-click=\"$event.stopPropagation();\" ng-show=\"task.showReply\" class=\"card-footer\">\n" +
    "		            <form role=\"form\" ng-submit=\"createContent(task)\">\n" +
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
    "\n" +
    "    <div ng-show=\"time.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-show=\"time.length > 0\" class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "\n" +
    "    <div ng-show=\"time.length > 0\" class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
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
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"timeToggle()\">+ Time</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"card\">\n" +
    "                <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <div ng-repeat=\"item in time\">\n" +
    "            <div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <div style=\"float:right\">\n" +
    "                        <h5 ng-click=\"$event.stopPropagation();tokenToggle(task)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "    				<h4>{{item.startTime | date:\"h:mma | MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma | MM/dd/yyyy\"}}</h4>\n" +
    "    				<span><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a> | <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a></span>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "                <div ng-click=\"$event.stopPropagation()\" ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "    		        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "    		            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "    		            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "    		        </form>\n" +
    "    		    </div>\n" +
    "            </div>\n" +
    "    	</div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <h2>Projects</h2>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-6\">\n" +
    "                <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                        <h4 style=\"text-align:right;margin-top:20px\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
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
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
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
    "            <div class=\"card\" ng-click=\"\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-1 col-xs-2\">\n" +
    "                            <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-11 col-xs-10\">\n" +
    "\n" +
    "                            <p style=\"float:right;text-align:right\">\n" +
    "                                <span ng-if=\"project.location\">{{project.location.address}} <i class=\"fa fa-map-marker\"></i></span>\n" +
    "                                <!--<br>\n" +
    "                                <span ng-repeat=\"tag in project.tags\">{{tag}} </span> <i class=\"fa fa-tags\"></i>-->\n" +
    "                            </p>\n" +
    "\n" +
    "                            <h3 style=\"float:left;margin-top:0px\">\n" +
    "                                <a href=\"/project/{{project.urlTitle}}\">{{project.title}}</a>\n" +
    "                            </h3>\n" +
    "\n" +
    "                            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "                            <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                                <span ng-bind-html=\"renderContent(project.description)\"></span>\n" +
    "                            </div>\n" +
    "\n" +
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
    "<div class=\"page-heading\" style=\"background-image: url('https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <h1>Join Our Community</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div ng-show=\"!showFinal\" style=\"float:right\">\n" +
    "            <br>\n" +
    "            <span ng-click=\"informationToggle('TOKEN','VALUEMAP')\"><a>UNIVERSAL <i class=\"fa fa-question-circle\"></i></a></span>\n" +
    "            <br>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "\n" +
    "        <div ng-show=\"showIntro\">\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                    <div style=\"color:white;padding:15px;\">\n" +
    "                        <h1>Create Your Value Map</h1>\n" +
    "                        <p>Participate in creating the mechanism of value.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <p style=\"font-style:italic;color:gray;margin:0px\">The more complete and intentional your dimensional vote the better.</p>\n" +
    "                    \n" +
    "                    <highchart config=\"chartMapTotal\"></highchart>\n" +
    "\n" +
    "                    <button type=\"submit\" style=\"width:100%\" ng-click=\"continue(1)\" class=\"btn btn-default log-btn\">Continue</button>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showValue\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                    <div style=\"color:white;padding:15px;\">\n" +
    "                        <h1>Your Personal Value</h1>\n" +
    "                        <p>Select what you believe is worthwile. What is valuable?</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">Striving for completness, the more intentional your dimensional vote the stronger the effect.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <form style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQueryArray\"></tags-input>\n" +
    "                    <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-2\" style=\"max-height:50vh;overflow:scroll\">\n" +
    "                            <div style=\"font-size:14px;font-weight:bold\" ng-repeat=\"item in sortedTagArray track by $index\">\n" +
    "                                <button ng-click=\"createPosition(item.element)\" class=\"btn btn-default\"><a href=\"#\">{{item.element}}</a></button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col-md-10\">\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-12\">\n" +
    "                                    <div ng-repeat=\"item in newOrder\">\n" +
    "                                        <div layout=\"\">\n" +
    "                                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item[1].identifier.split('+')[0]}}</span></div>\n" +
    "                                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item[0].amount\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"Amount\"></md-slider>\n" +
    "                                            <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item[0].amount || 0}}</span></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <highchart config=\"pieTotal\"></highchart>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\"><b>What is all of this?</b></p>\n" +
    "                            <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">Tutorial -- ethos area</p>\n" +
    "                            <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">What are projects, what are tasks, what is content, what are protocols, what is the token language</p>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <button type=\"submit\" style=\"width:100%\" ng-click=\"continue(2)\" class=\"btn btn-default log-btn\">Continue</button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showDaily\">\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                    <div style=\"color:white;padding:15px;\">\n" +
    "                        <h1>A Valuable Day</h1>\n" +
    "                        <p>How would an ideal day look to you?</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">Striving for universal adapation and reflectivity, your dimensional vote can be incompassing of all aspects of the human experience.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1531502774286-5e4e8e94879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1468322638156-074863f9362e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                    <img style=\"max-height:200px\" src=\"https://images.unsplash.com/photo-1504246979673-176ed6740840?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"dailyTimeValue\"></tags-input>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        \n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <div ng-repeat=\"item in dailyTimeValue\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item.text}}</span></div>\n" +
    "                                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item.percentage\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"{{tag.text}}\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{item.percentage.toFixed(3) || 0}}%</span></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <highchart config=\"chartMapTime\"></highchart>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">What is all of this? what is time? </p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <button type=\"submit\" style=\"width:100%\" ng-click=\"continue(3)\" class=\"btn btn-default log-btn\">Continue</button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showPersonal\">\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                    <div style=\"color:white;padding:15px;\">\n" +
    "                        <h1>Personal Information</h1>\n" +
    "                        <p>What would you like us all to know about you?</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">Transparency as a principle -- Give as much information as you would like.</p>\n" +
    "                    <img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/4dde88fc96aa2bdda54559c36e5ad870/tumblr_ng5jy9JzPn1s5h88so1_1280.jpg\">\n" +
    "                    <img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/9daaa4e19ea6660b429d64c0ae417418/tumblr_n7dp7oF5DC1r1arpmo1_r1_1280.png\">\n" +
    "                    <img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/bcce94fa8d074789e52ac8c177120683/tumblr_oldnu3SSfR1r1arpmo1_1280.png\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-6\"><h5>First Name</h5><input type=\"text\" ng-model=\"newMember.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-6\"><h5>Last Name</h5><input type=\"text\" ng-model=\"newMember.lastName\" placeholder=\"Last Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-model=\"newMember.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Height</h5><input type=\"text\" ng-model=\"newMember.Height\" placeholder=\"Height\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Eye Color</h5><input type=\"text\" ng-model=\"newMember.eyeColor\" placeholder=\"Eye Color\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Address</h5><input type=\"text\" ng-model=\"newMember.address\" placeholder=\"Address\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>DNA</h5><input type=\"text\" ng-model=\"newMember.dna\" placeholder=\"DNA UPLOAD\" class=\"form-control\"></div>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <button type=\"submit\" style=\"width:100%\" ng-click=\"continue(4)\" class=\"btn btn-default log-btn\">Continue</button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"showFinal\">\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"max-height:200px;overflow:hidden;background:url('https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1852&q=80');\">\n" +
    "                    <div style=\"color:white;padding:15px;\">\n" +
    "                        <h1>Let's Go!</h1>\n" +
    "                        <p>It's time to create a more egalitarian world.</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <p style=\"color:gray;font-size:12px;font-style:italic\">We Are Excited to have you as a memeber</p>\n" +
    "                    \n" +
    "                    <h3>Information</h3>\n" +
    "                    <img style=\"height:64px;width:64px\" class=\"card-avatar\" src=\"images/avatar.png\">\n" +
    "                    <h4 ng-show=\"newMember.firstName\">First Name: {{newMember.firstName}}</h4>\n" +
    "                    <h4 ng-show=\"newMember.lastName\">Last Name: {{newMember.lastName}}</h4>\n" +
    "                    <h5 ng-show=\"newMember.address\">Address: {{newMember.address}}</h5>\n" +
    "                    <h5 ng-show=\"newMember.dateOfBirth\">Date Of Birth: {{newMember.dateOfBirth}}</h5>\n" +
    "                    <h5 ng-show=\"newMember.height\">Height: {{newMember.height}}</h5>\n" +
    "                    <h5 ng-show=\"newMember.eyeColor\">Eye Color: {{newMember.eyeColor}}</h5>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <h3>Value Map</h3>\n" +
    "                    <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    \n" +
    "                    <div class=\"\" ng-repeat=\"order in newOrder\">\n" +
    "                        <span style=\"color:gray\">{{order[0].amount}} <a href=\"/market/{{order[0].identifier}}\">{{order[0].identifier}}</a> | <a href=\"/market/{{order[1].identifier}}\">{{order[1].identifier}}</a> | <a href=\"/market/{{order[0].identifier}}/{{order[1].identifier}}\">MarketPair</a></span>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <button type=\"submit\" style=\"width:100%\" ng-click=\"continue(2)\" class=\"btn btn-default log-btn\">Keep Going?</button>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "                            <input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "                            <input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "                            <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"newOrder.length > 0 && !showFinal\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <h3>Value Map</h3>\n" +
    "                <div class=\"\" ng-repeat=\"order in newOrder\">\n" +
    "                    <span style=\"color:gray\">{{order[0].amount}} <a href=\"/market/{{order[0].identifier}}\">{{order[0].identifier}}</a> | <a href=\"/market/{{order[1].identifier}}\">{{order[1].identifier}}</a> | <a href=\"/market/{{order[0].identifier}}/{{order[1].identifier}}\">MarketPair</a></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" ng-show=\"!showFinal\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
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
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "	<div class=\"page-heading\">\n" +
    "		<div class=\"container\"> \n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<h1>{{searchQuery.search}}</h1>\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--MODEL FILTERS-->\n" +
    "	<div ng-if=\"searchResults.length > 0\" class=\"container\">\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "				<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "				<li><a href=\"/content\">Content</a></li>\n" +
    "				<li><a href=\"/marketplace\">Items</a></li>\n" +
    "				<li><a href=\"/members\">Members</a></li>\n" +
    "				<li><a href=\"/market\">Orders</a></li>\n" +
    "				<li><a href=\"/projects\">Projects</a></li>\n" +
    "				<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
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
    "		        <div class=\"card\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "						<span><b>Tags</b></span>\n" +
    "		                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "			    <div class=\"card\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "		                <span><b>Associations</b></span>\n" +
    "		                <div ng-repeat=\"association in sortedAssociationArray\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{association.element}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		        <div class=\"card\">\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "		                <span><b>Locations</b></span>\n" +
    "		                <div ng-repeat=\"location in locations\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{location}}</a>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "\n" +
    "\n" +
    "			<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "	                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "					<li style=\"float:right;font-size:14px\"><a>Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	            </ul>\n" +
    "	            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "		            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\">\n" +
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
    "				        <div style=\"padding:16px;\">\n" +
    "				            <div>\n" +
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
    "								\n" +
    "								<p ng-click=\"tokensToggle(item);$event.stopPropagation()\" style=\"display:inline;float:right\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "				            </div>\n" +
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
    "								    <div class=\"member-card-info\">\n" +
    "								        <h4><a ng-click=\"$event.stopPropagation();\" href=\"member/{{item.username}}\">{{item.username}}</a></h4>\n" +
    "								        <p style=\"color:gray\">{{item.status}} offline</p>\n" +
    "								        <p style=\"color:gray\">Total Reputation | {{item.totalWork}}</p>\n" +
    "								    </div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='ORDER'\" class=\"card\" ng-click=\"renderToggle(item)\"></div>\n" +
    "\n" +
    "					<div ng-if=\"item.model=='PROJECT'\" class=\"card\" ng-click=\"\">\n" +
    "			            <div style=\"padding:16px;\">\n" +
    "			                <div class=\"row\">\n" +
    "			                    <div class=\"col-sm-1 col-xs-2\">\n" +
    "		                        	<a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			                    </div>\n" +
    "			                    <div class=\"col-sm-11 col-xs-10\">\n" +
    "			                        <h3 style=\"margin-top:0px\">\n" +
    "			                            <a href=\"/project/{{item.urlTitle}}\">\n" +
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
    "						<div style=\"padding:16px;\">\n" +
    "							<div class=\"row\">\n" +
    "								<div class=\"col-sm-10\">\n" +
    "									<h4><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "									<p><a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>\n" +
    "									<p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "									<p><span ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "									<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "								</div>\n" +
    "								<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "									<p ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a >Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "								</div>\n" +
    "							</div>\n" +
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
    "<style>\n" +
    ".toast-success {\n" +
    "  background-color: #002c54;\n" +
    "}\n" +
    "</style>\n" +
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
    "        <div class=\"card\" ng-click=\"\">\n" +
    "            <div class=\"padding:16px\">\n" +
    "                <div class=\"col-sm-12\" style=\"padding:16px\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <h5 ng-click=\"tokensToggle(task)\"><a href=\"\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <h5 ng-click=\"renderValidationToggle(task)\"><a href=\"#\">Associations & Validations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    </div>\n" +
    "                    <h3>{{task.title}}</h3>\n" +
    "\n" +
    "                    <!--<button ng-click=\"pop()\">test</button>-->\n" +
    "\n" +
    "                    <!--ASSOCIATION && VALIDATION-->\n" +
    "                    <!--TAGS & SHARED ASSOCIATION CONTEXT-->\n" +
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
    "    <!--TODO: VALIDATION RENDER-->\n" +
    "\n" +
    "    <!--TODO: STREAM | IFPS-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div ng-show=\"!working\">\n" +
    "                    <button ng-show=\"!question\" type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"askQuestion()\">Start Work</button>\n" +
    "                    <div ng-show=\"question && !streaming\">\n" +
    "                        <h3>Streaming?</h3>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</button>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startWork()\">No</button>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"streaming\">\n" +
    "                        <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                        <!--\n" +
    "                        <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        -->\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startWork()\">Start Stream</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div ng-show=\"working\">\n" +
    "                    <h3>{{taskTime}}</h3>\n" +
    "                    <div ng-show=\"!streaming\">\n" +
    "                        <!--\n" +
    "                        <input type=\"text\" placeholder=\"Link\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                        <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startStream()\">Start Stream</button>\n" +
    "                        -->\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"streaming\"> <div ng-bind-html=\"renderStream(streamUrl)\">></div></div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <tags-input ng-model=\"timeTags\" placeholder=\"Tags\"></tags-input>\n" +
    "                    <text-angular ng-model=\"timeContent\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">Submit work</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <div style=\"row\">\n" +
    "        <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "            <li><a href=\"#\">Content</a></li>\n" +
    "            <li><a href=\"#\">Time</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--RESTYLE-->\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-repeat=\"item in time\" ng-click=\"\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                    <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                    <a style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\">{{item.amount}}</a>\n" +
    "                    <p style=\"display:inline;color:gray;font-size:10px;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    <span style=\"text-align:right;float:right\">\n" +
    "                        <a ng-click=\"tokensToggle(item)\" href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a>\n" +
    "                        <br>\n" +
    "                        <a ng-click=\"renderValidationToggle(item)\" href=\"#\">Associations <i class=\"fa fa-question-circle\"></i></a>\n" +
    "                    </span>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "                <p ng-show=\"item.task.tags.split(',') > 0\" style=\"margin-left:42px\"><a ng-repeat=\"tag in item.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}} </a></p>\n" +
    "                <div style=\"margin-left:42px\">\n" +
    "                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a  ng-click=\"validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                    <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Task Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--TODO: NESTED RENDER -->\n" +
    "    <div class=\"row\">\n" +
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
    "                <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                    <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("task/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/activity.tpl.html",
    "");
}]);

angular.module("task/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/content.tpl.html",
    "");
}]);

angular.module("task/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/time.tpl.html",
    "");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.angular-google-map-container{height: 200px;}\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"page-heading\">\n" +
    "	<div class=\"container\"> \n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-6\"><h1>Tasks <span ng-show=\"selectedTag!=''\"> | {{selectedTag}}</span></h1></div>\n" +
    "			<div class=\"col-xs-6\">\n" +
    "			    <div class=\"dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                    <a href=\"#\" style=\"color:white\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "			            <h4 style=\"text-align:right;margin-top:20px;\" class=\"noselect\">{{sortText[selectedSort]}} <i class=\"fa fa-angle-down\"></i></h4>\n" +
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
    "		    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "            </ul>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "\n" +
    "            <!--\n" +
    "            <div class=\"card\">\n" +
    "                <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                    <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                        <a  href=\"#\" role=\"button\">\n" +
    "                            <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        	-->\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "				<tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQuery\"></tags-input>\n" +
    "			</div>\n" +
    "\n" +
    "	        <div class=\"card\">\n" +
    "				<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\"></ui-gmap-google-map>\n" +
    "			</div>\n" +
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
    "				<div class=\"card\" ng-click=\"renderToggle(item)\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "\n" +
    "						<div style=\"float:right;text-align:right\">\n" +
    "		                    <h5 ng-click=\"$event.stopPropagation();tokensToggle(item)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "							<h5 ng-click=\"$event.stopPropagation();renderValidationToggle(item)\"><a>Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "		                </div>\n" +
    "\n" +
    "						<h4><a ng-click=\"$event.stopPropagation();\" href=\"task/{{item.id}}\">{{item.title}}</a></h4>\n" +
    "\n" +
    "						<!--<p><a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a></p>-->\n" +
    "						\n" +
    "						<p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "						<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "							\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "						<a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "						<a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
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
    "<div style=\"background:black\" ng-show=\"time.stream\">\n" +
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
    "        <div class=\"card\" ng-click=\"\">\n" +
    "			<div style=\"padding:16px\" class=\"col-sm-12\">\n" +
    "				<div style=\"float:right;text-align:right\">\n" +
    "					<h5 ng-click=\"tokensToggle(time)\"><a href=\"\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "					<h5 ng-click=\"renderValidationToggle(time)\"><a href=\"#\">Validations & Associations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "				</div>\n" +
    "\n" +
    "				<!--<h3>Associations</h3>\n" +
    "				<h3><a href=\"task/{{time.task.id}}\">{{time.task.title}}</a></h3>-->\n" +
    "\n" +
    "				<h4>{{time.amount}}, <span style=\"font-size:10px;color:gray\">{{(time.amount/60).toFixed(2)}} minutes, <span style=\"font-size:10px;color:gray\">{{(time.amount/3600).toFixed(2)}} hours</span></h4>\n" +
    "                \n" +
    "                <p><a ng-repeat=\"tag in time.task.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}}<span ng-show=\"!$last\">,</span> </a></p>\n" +
    "\n" +
    "				<p><a ng-repeat=\"tag in time.tags track by $index\" href=\"market/{{tag.trim()}}\">{{tag.trim()}}<span ng-show=\"!$last\">,</span> </a></p>\n" +
    "\n" +
    "				<a style=\"font-weight:700\" href=\"member/{{time.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{time.user.avatarUrl}}\" src=\"{{time.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					{{time.user.username}}\n" +
    "				</a>\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"time.createdAt\"></p>\n" +
    "				<div>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "	                <span style=\"display:inline\" ng-bind-html=\"renderContent(time.content)\"></span>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div style=\"clear:both\"></div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"createReaction(time, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{time.reactions.plus}} like </a> \n" +
    "				<a ng-click=\"createReaction(time, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{time.reactions.minus}} dislike </a>\n" +
    "				<a ng-click=\"reply(time)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		       	<a ng-click=\"validationToggle(time)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "			</div>\n" +
    "			<div ng-show=\"time.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"newContent(item)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "					<button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Time Content</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "	-->\n" +
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
    "	<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("token/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("token/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "				<h1>{{token.string}}</h1>\n" +
    "				<p style=\"color:white\">{{token.string}} | {{token.information.markets}} markets | {{token.information.inCirculation}} tokens in circulation </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
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
    "        <div style=\"padding:16px\">\n" +
    "\n" +
    "            <div style=\"float:right\">\n" +
    "                <h5 style=\"text-align:right\" ng-click=\"$event.stopPropagation();tokensToggle(transaction)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "            </div>\n" +
    "\n" +
    "            <h2>Transaction {{transaction.id}}</h2>\n" +
    "            \n" +
    "            <p style=\"font-weight:800\">From: <a href=\"member/{{transaction.from}}\">{{transaction.from}}</a> To: <a href=\"member/{{transaction.to}}\">{{transaction.to}}</a></p>\n" +
    "                        \n" +
    "            <span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "\n" +
    "            <p><a ng-repeat=\"tag in transaction.ledger.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "            <p>{{transaction.content}}</p>\n" +
    "            <p style=\"color:gray\"><span style=\"color:gray\" am-time-ago=\"transaction.createdAt\"></span> | {{transaction.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</p>\n" +
    "       \n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{transaction.reactions.plus}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{transaction.reactions.minus}} dislike </a>\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(transaction)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
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
    "    <div class=\"card\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Transaction Content</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "        <div style=\"padding:16px\" ng-click=\"\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "            </div> \n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "            <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "        <!--TODO: NESTED -->\n" +
    "        <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "            <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
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
    "<div class=\"page-heading\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <h1>THE CRE8 NETWORK</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<!--\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<p>information</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		-->\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "					\n" +
    "					<h3>Peer Network</h3>\n" +
    "					<p style=\"color:gray;font-style:italic;\">{{peers.length}} Peers</p>\n" +
    "					<p style=\"color:gray;font-style:italic;\">{{transactionVelocity}} Txs per second</p>\n" +
    "\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "					<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "					    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "					        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "					            <div><div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div></div>\n" +
    "					        </ui-gmap-window>\n" +
    "					    </ui-gmap-marker>\n" +
    "					</ui-gmap-google-map>\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "\n" +
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
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "					<h3>Stats</h3>\n" +
    "					<p style=\"color:gray;font-style:italic;\">\n" +
    "						{{chart.series[0].data[chart.series[0].data.length-1][1]}} Projects, \n" +
    "						{{chart.series[1].data[chart.series[1].data.length-1][1]}} Members, \n" +
    "						{{chart.series[3].data[chart.series[3].data.length-1][1]}} Daily Transactions, \n" +
    "						{{chart.series[4].data[chart.series[4].data.length-1][1]}} Assets\n" +
    "					</p>\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2><a href=\"project/conexus\">Meta</a></h2>\n" +
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

angular.module("validation/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "\n" +
    "				<div style=\"float:right\">\n" +
    "					<h5 style=\"text-align:right\" ng-click=\"tokensToggle(validation)\"><a>Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "					<h5 style=\"text-align:right\" ng-click=\"renderValidationToggle(validation)\"><a>Associations & Validations <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "				</div>\n" +
    "\n" +
    "				<h3> MODEL A <i class=\"fa fa-arrows-h\"></i> MODEL B</h3>\n" +
    "\n" +
    "				<a href=\"member/{{validation.user.username}}\">\n" +
    "					<img class=\"card-avatar\" src=\"{{validation.user.avatarUrl}}\"/>\n" +
    "					{{validation.user.username}}\n" +
    "				</a>\n" +
    "\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"validation.createdAt\"></p>\n" +
    "\n" +
    "				<!--TODO: ABSTRACT MODEL | POPULATE VALIDATIONS-->\n" +
    "				<!--ERR-->\n" +
    "				<p ng-repeat=\"model in validation.associatedModels\">\n" +
    "					<a href=\"{{model.type.toLowerCase()}}/{{model.address}}\">{{model.type}} | {{model.address}}</a>\n" +
    "				</p>\n" +
    "				\n" +
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
    "\n" +
    "				<!--ASSOCIATION.. -->\n" +
    "				<!--TODO: MANIFOLD-->\n" +
    "				<!--MANIFOLD-->\n" +
    "				<!--<p>Manifold | Project+</p>-->\n" +
    "\n" +
    "				<span ng-bind-html=\"renderContent(validation.content)\"></span>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<table class=\"table table-striped table-hover\">\n" +
    "					<thead>\n" +
    "						<tr>\n" +
    "							<th>Dimension</th>\n" +
    "							<th>Validation Score</th>\n" +
    "							<th>Reputation</th>\n" +
    "							<th>Reputation Weighted Validation Score <a ng-click=\"tokenToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></th>\n" +
    "						</tr>\n" +
    "					</thead>\n" +
    "					<tbody>\n" +
    "						<tr ng-repeat=\"validation in validationList track by $index\">\n" +
    "							<td>{{validation[0]}}</td>\n" +
    "							<td>{{validationList[$index][1]}}</td>\n" +
    "							<td>{{reputationList[$index][1]}}</td>\n" +
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
    "        <div class=\"card\">\n" +
    "            <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Validation Content</button>\n" +
    "        </div>\n" +
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
