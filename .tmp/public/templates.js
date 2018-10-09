angular.module("templates-app", ["about/index.tpl.html", "account/index.tpl.html", "content/content.tpl.html", "content/index.tpl.html", "contentList/index.tpl.html", "discover/index.tpl.html", "footer/index.tpl.html", "home/index.tpl.html", "intro/index.tpl.html", "item/index.tpl.html", "login/index.tpl.html", "market/index.tpl.html", "marketPair/index.tpl.html", "marketPlace/index.tpl.html", "markets/index.tpl.html", "member/index.tpl.html", "member/templates/activity.tpl.html", "member/templates/assets.tpl.html", "member/templates/content.tpl.html", "member/templates/followers.tpl.html", "member/templates/following.tpl.html", "member/templates/ledger.tpl.html", "member/templates/positions.tpl.html", "member/templates/time.tpl.html", "members/index.tpl.html", "nav/index.tpl.html", "order/index.tpl.html", "project/index.tpl.html", "project/templates/activity.tpl.html", "project/templates/assets.tpl.html", "project/templates/channels.tpl.html", "project/templates/charter.tpl.html", "project/templates/content.tpl.html", "project/templates/ledger.tpl.html", "project/templates/members.tpl.html", "project/templates/positions.tpl.html", "project/templates/projects.tpl.html", "project/templates/tasks.tpl.html", "projects/index.tpl.html", "reaction/index.tpl.html", "register/index.tpl.html", "search/index.tpl.html", "task/index.tpl.html", "tasks/index.tpl.html", "transaction/index.tpl.html", "transparency/index.tpl.html", "work/index.tpl.html"]);

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
    "\n" +
    "<div id=\"title-container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
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
    "				<h3>Transparency Maximalism</h3>\n" +
    "				<h4>Create the Next Wave</h4>\n" +
    "				<h5>A Collaborative Network</h5>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A 24/7 continual hackathon</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Connect with new collaborators and build together</p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<h4>Share with us and Create the Future</h4>\n" +
    "				<h5>Watch the World Create</h5>\n" +
    "				<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "\n" +
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
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\" style=\"max-height:450px;overflow:scroll\">\n" +
    "\n" +
    "				<!--TODO-->\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/discover\">Discover</a>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "					<li class=\"active\"><a href=\"/content\">Content</a></li>\n" +
    "					<li><a href=\"/marketplace\">Items</a></li>\n" +
    "					<li><a href=\"/members\">Members</a></li>\n" +
    "					<li><a href=\"/market\">Orders</a></li>\n" +
    "					<li><a href=\"/projects\">Projects</a></li>\n" +
    "					<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "					<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "				</ul>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "			        <form style=\"display:flex;flex-direction:row;\">\n" +
    "			            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "			            <div ng-click=\"keyPress(searchQuery)\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "							<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "			            </div>\n" +
    "			        </form>\n" +
    "				</div>\n" +
    "\n" +
    "				<div ng-repeat=\"task in tasks\">\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<div class=\"row\">\n" +
    "								<div class=\"col-sm-10\">\n" +
    "									<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "									<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "			                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "									<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "									<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "								</div>\n" +
    "								<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "									<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "									<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"card-footer\">\n" +
    "							<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "							<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>Collaborative Governance</h2>\n" +
    "				<p style=\"font-style:italic;margin:0px\">Reputation Protocols | Working together toward a common goal</p>\n" +
    "				<p style=\"font-style:italic;margin:0px\">Coordinating Around Shared Goals</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hyper.gif\"></a>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<h2>MultiDimensional Token Protocols</h2>\n" +
    "				<h4>Content Tokenization | Time Tokenization | Reaction Tokenization | Order Tokenization | Transaction Tokenization</h4>\n" +
    "				<h5><a>Developers</a> | <a>Documentation</a> | <a>APIs</a> | <a>App Ecosystem</a> | <a href=\"https://www.github.com/troverman/conexus\"><i class=\"fa fa-github\"></i></a></h4>\n" +
    "				<!--<pre>CODE</pre>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2><a href=\"/market\">MultiDimensional Token Market</a></h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create dimensional liquidity for transparent and reputationally validated work</p> \n" +
    "		        <!--<span><a href=\"market/universalToken\">UniversalToken</a> | {}</span>-->\n" +
    "\n" +
    "		        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "				<highchart config=\"chartMap\"></highchart>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<!--<highchart config=\"chart\"></highchart>-->\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div class=\"spacing-100\"></div>\n" +
    "				<h3>Create Value Relationships</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value; create depth in the market</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Market Order types; onMint Postions; Trade Postions; Futures Postions; Derivative Positions</p> \n" +
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
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A crypto economic data structre and means of account</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "\n" +
    "				<h2>Value Mapping and Dimensional Voting</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create A Pluralist Means of Value</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Continually state and update what valuable to you, dimensionally.</p>\n" +
    "				<br>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">It is our responsibility to create an awakening of depth in collective value. It starts with you.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">The source of our intentional value mechanism comes from simply stating what we believe is valuable. An empowering call to action.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Empower youself and our collective by clearly and distinctly defining your value map -- relational to a set of validated action sets.</p>\n" +
    "				<br>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">What do we know is valuable? Let us come to consensus; to create a 'gestalt.'</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Register to vote, map your value, and give dimensional value to sets of actions</p>\n" +
    "				<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- CALL TO ACTION HERE-->\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\" ng-show=\"true\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div class=\"card\">\n" +
    "			        <div style=\"padding:16px;\">\n" +
    "\n" +
    "						<h1>CRE8</h1>\n" +
    "						<h3><b>Join Our Community</b></h3>\n" +
    "			        	<h4>Create Your Value Map</h4>\n" +
    "			        	<p style=\"font-style:italic;color:gray;margin:0px\">The more complete the better, the more intentional your dimensional vote the better.</p>\n" +
    "			        	<p style=\"font-style:italic;color:gray;margin:0px\">*Creating Orders on the Multi Dimensional Token Market.</p>\n" +
    "			        	<br>\n" +
    "						<span><a href=\"market/universalToken\">UniversalToken onMint Market Postion <i class=\"fa fa-question-circle\"></i></a></span>\n" +
    "						<!--<br>\n" +
    "			        	<span><a href=\"market/universalToken\">UniversalToken</a></span>-->\n" +
    "			        	<br>\n" +
    "						<span>\n" +
    "							<span ng-repeat=\"dimension in markets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span>\n" +
    "							<a href=\"#\">+ Dimension</a>\n" +
    "							<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input ng-model=\"newMarket.market\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\">\n" +
    "				            	<div ng-click=\"addMarket('market')\" style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "						</span>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "						<!--THIS WILL BUILD AS YOU CREATE-->\n" +
    "						<highchart config=\"chartMap\"></highchart>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://78.media.tumblr.com/a8e7e98f8328eb6ddbbb88a73010da06/tumblr_nu2mntog0W1qkbpm3o1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://66.media.tumblr.com/b4ac17c890389077048cd05f00b8b397/tumblr_o5xdhaZpCK1v05rsfo1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://33.media.tumblr.com/9d90debeda613c297cd7642c14e00d03/tumblr_mf45zsouyw1qatka3o1_500.gif\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h3>What is Valuable to you?</h3>\n" +
    "						<h4>I believe the following concepts and specific tasks are valuable.</h4>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "						<div class=\"card\">\n" +
    "					        <form style=\"display:flex;flex-direction:row;\">\n" +
    "					            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "					            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "									<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "					            </div>\n" +
    "					        </form>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "						<div style=\"padding:16px;\"><p style=\"font-weight:800\"><span ng-repeat=\"dimension in markets\"><a href=\"#\">{{dimension}}, </a></span></p></div>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "					\n" +
    "						<div style=\"max-height:200px;overflow:scroll\">\n" +
    "							<div ng-repeat=\"task in tasks\">\n" +
    "								<div class=\"card\">\n" +
    "									<div style=\"padding:16px;\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-sm-10\">\n" +
    "												<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "												<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "						                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "												<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "												<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "											</div>\n" +
    "											<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "												<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "												<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									<div class=\"card-footer\">\n" +
    "										<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "										<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<input type=\"text\" class=\"form-control\">\n" +
    "								<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "\n" +
    "\n" +
    "						<h4>A Valuable Day</h4>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">REST</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">WORK</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">FUN</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">2</span> hours of <span style=\"font-weight:800\">Learning</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">1</span> hours of <span style=\"font-weight:800\">Exercise</span></p>\n" +
    "\n" +
    "						<div class=\"spacing-15\"></div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<div class=\"col-md-6\"><input type=\"text\" placeholder=\"Hours\" class=\"form-control\"></div>\n" +
    "							<div class=\"col-md-6\"><input type=\"text\" placeholder=\"Activity\" class=\"form-control\"></div>\n" +
    "							<div class=\"col-md-12\"><button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button></div>\n" +
    "						</div>\n" +
    "						<div style=\"clear:both\"></div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h2>Personal Information</h4>\n" +
    "						<h4>Who Are You?</h4>\n" +
    "						<div class=\"spacing-15\"></div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<input type=\"text\" placeholder=\"First Name\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Last Name\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Date of Birth\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Address\" class=\"form-control\">\n" +
    "\n" +
    "							<!--<input type=\"text\" placeholder=\"Height\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Eye Color\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"DNA UPLOAD\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Picture\" class=\"form-control\">-->\n" +
    "\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h3><b>Join Our Community</b></h3><hr>\n" +
    "						<form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "							<div class=\"form-group\">\n" +
    "		                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "		                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "		                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "		                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "		                        <br><br>\n" +
    "			                    <div class=\"social-log\">\n" +
    "			                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "			                    </div>\n" +
    "							</div>\n" +
    "	                	</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	    <div class=\"row\">\n" +
    "	    	<div class=\"col-xs-12\" style=\"text-align:center;font-size:18px\">\n" +
    "	    		<h3>Our Extended Community</h3>\n" +
    "	    		<a href=\"https://www.instagram.com/cre8community\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "	    		<a href=\"https://www.twitter.com/cre8city\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "	    		<a href=\"https://www.github.com/troverman/conexus\"><i class=\"fa fa-github\"></i></a>\n" +
    "	    		<a href=\"https://cre8xyz.slack.com\"><i class=\"fa fa-slack\"></i></a>\n" +
    "	    		<!--<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-google\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-app-store\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-google-play\"></i></a>-->\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "	    <div class=\"row\">\n" +
    "	    	<div class=\"col-xs-12\" style=\"text-align:center;font-size:18px\">\n" +
    "	    		<h3>Our Partners</h3>\n" +
    "	    		<a href=\"https://www.cre8.capital\"><img style=\"height:25px;\" src=\"https://www.cre8.capital/images/tesseract.png\"></a>\n" +
    "	    		<a href=\"https://www.experiencenovo.io\"><img style=\"height:25px;\" src=\"https://www.experiencenovo.io/images/novo/tri.png\"></a>\n" +
    "	    		<a href=\"https://www.cre8bid.io\"><img style=\"height:25px;\" src=\"https://www.cre8bid.io/images/bidio_logo.png\"></a>\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	    <div class=\"row\">\n" +
    "	        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "				<h3><b>Join Our Community</b></h3><hr>\n" +
    "	            <div class=\"login-form\">\n" +
    "	                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group log-status\">\n" +
    "	                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
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
    "</div>-->\n" +
    "\n" +
    "\n" +
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
    "					<span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">0x8f50FB12E80E788cC0141b06e84a4a02358431d0</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.username}}\"></a></span>\n" +
    "					<h4>{{currentUser.email}}</h4>\n" +
    "					<p><a href=\"/projects\">25 Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">23 Followers</a> | <a href=\"/member/{{currentUser.username}}/followers\">22 Following</a>\n" +
    "\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-sm-6\">\n" +
    "							<h5>Balance Lookup <span style=\"font-size:11px;color:gray\">0x8f50FB12E80E788cC0141b06e84a4a02357431d0</span></h5>\n" +
    "				       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "				            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "				        </div>\n" +
    "				        <div class=\"col-sm-6\">\n" +
    "							<h5>Reputation Lookup <span style=\"font-size:11px;color:gray\">0x90C11Cd017582766A89155B7b90f11aF67fD2A2A</span> </h5>\n" +
    "				       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "				            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "				        </div>\n" +
    "					</div>\n" +
    "\n" +
    "					<h5>Peer Contrubution</h5>\n" +
    "					<p style=\"font-size:11px\">MacBook Pro OSX | 2.3 GHz Intel Core i7, 8 GB 1600 MHz DDR3, Intel HD Graphics 4000 1536 MB | 22min @ 11.36PM</p>\n" +
    "					<p style=\"font-size:11px\">iPhone 8 | A11 Bionic chip with 64-bit architecture, M11 motion coprocessor, 2 GB RAM | 17min @ 2.15PM</p>\n" +
    "\n" +
    "			\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h3>Information</h3>\n" +
    "				<h4>{{currentUser.email}}</h4>\n" +
    "				<p>Human Proof ID | ON</p>\n" +
    "				<p>Verification | Goverment ID | Social Accounts | BioMetric Data</p>\n" +
    "				<!--ssn is id and secret - dum-->\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"editAccountToggle()\">Edit Account</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"editAccountToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "					<input placeholder=\"Username\" type=\"text\" ng-model=\"newAccountInformation.username\" class=\"form-control\">\n" +
    "					<input placeholder=\"Email\" type=\"text\" ng-model=\"newAccountInformation.email\" class=\"form-control\">\n" +
    "					<input placeholder=\"First Name\" type=\"text\"  ng-model=\"newAccountInformation.firstName\" class=\"form-control\">\n" +
    "					<input placeholder=\"Last Name\" type=\"text\" ng-model=\"newAccountInformation.lastName\" class=\"form-control\">\n" +
    "					<input placeholder=\"Address\" type=\"text\" ng-model=\"newAccountInformation.address\" class=\"form-control\">\n" +
    "					<input placeholder=\"Date of Birth\" type=\"text\" ng-model=\"newAccountInformation.dob\" class=\"form-control\">\n" +
    "					\n" +
    "					<input placeholder=\"Sex\" type=\"text\" ng-model=\"newAccountInformation.sex\" class=\"form-control\">\n" +
    "					<input placeholder=\"Height\" type=\"text\" ng-model=\"newAccountInformation.height\" class=\"form-control\">\n" +
    "					<input placeholder=\"Eye Color\" type=\"text\" ng-model=\"newAccountInformation.eyecolor\" class=\"form-control\">\n" +
    "					<input placeholder=\"23&Me\" type=\"text\" ng-model=\"newAccountInformation.geneticsequence\" class=\"form-control\">\n" +
    "\n" +
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
    "				<p>GPS Tracking | <md-switch ng-model=\"gpsTracking\" aria-label=\"GPS Tracking\"> {{gpsTracking}}</md-switch></p>\n" +
    "				<p>Notifications | <md-switch ng-model=\"notifications\" aria-label=\"Notifications\"> {{notifications}}</md-switch></p>\n" +
    "				<p>Browser Mining | <md-switch ng-model=\"browserMining\" aria-label=\"Browser Mining\"> {{browserMining}}</md-switch></p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "\n" +
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
    "				<!--TODO: tokenized apps.. connect in..-->\n" +
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
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9\" ng-show=\"!post.showThread\">\n" +
    "\n" +
    "    <div ng-click=\"toggleThread(post)\" class=\"threadline\"></div>\n" +
    "\n" +
    "    <div style=\"padding:16px;background-color:white\">\n" +
    "\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span style=\"font-weight:800\">{{post.user.username}}</span></a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "        </div>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "            <span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey;\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "    <!--<button ng-click=\"loadMore(post)\" class=\"btn btn-primary\">LOAD MORE</button>-->\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9\" ng-show=\"post.showThread\">\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <i ng-click=\"toggleThread(post)\" class=\"fa fa-plus\"></i>\n" +
    "        <a style=\"display:inline;padding-left:5px\" href=\"/member/{{post.user.username}}\"><span style=\"font-weight:800\">{{post.user.username}}</span></a>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\">{{post.plusCount-post.minusCount}}</p>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("content/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/index.tpl.html",
    "<!--CONTENT TYPE-->\n" +
    "<!--FACTOR-->\n" +
    "<div style=\"background:black\" ng-show=\"post.type=='video'\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "    <div style=\"text-align:center\">\n" +
    "		<span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div class=\"container\">\n" +
    "	<div class=\"row\" ng-show=\"post.type!='video'\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "				<div style=\"max-height:500px;overflow:scroll\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		    	<h3 ng-show=\"post.title\">{{post.title}}</h3>\n" +
    "				<a href=\"member/{{post.user.username}}\"><img style=\"width:75px;height:75px;border-radius:100vh;float:left\" src=\"{{post.user.avatarUrl}}\"/></a>\n" +
    "				<div style=\"float:left;margin-left:15px\">\n" +
    "\n" +
    "					<h4 style=\"margin-top:0px;margin-bottom:0px\"><a href=\"member/{{post.user.username}}\">{{post.user.username}}</a></h4>\n" +
    "					<h5 style=\"margin-top:0px;margin-bottom:0px\"><a ng-repeat=\"tag in post.tags.split(',')\" href=\"#\">{{tag}}, </a></h5>\n" +
    "\n" +
    "					<h5 style=\"margin-top:0px;margin-bottom:0px\">Metrics | viewToken: 123423 | watchTime: 124312 | Live: 0</h5>\n" +
    "					<h5 style=\"margin-top:0px;margin-bottom:0px\">Reactions | Like: 124312 | Dislike: 123</h5>\n" +
    "					<!--<span ng-repeat=\"reaction in reactions\"><br><a href=\"reaction/{{reaction.id}}\">{{reaction.user.username}}, {{reaction.type}},{{reaction.amount}} </a>, </span>-->\n" +
    "\n" +
    "				</div>\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		        <h3>{{post.parent}} Parent Information</h3>\n" +
    "		        <!--REFACTOR-->\n" +
    "				<h3>\n" +
    "					<a href=\"market/{{post.market}}\">{{post.market}}</a>\n" +
    "					<a href=\"order/{{post.order}}\">{{post.order}}</a>\n" +
    "					<a href=\"content/{{post.post}}\">{{post.post}}</a>\n" +
    "					<a href=\"project/{{post.project.urlTitle}}\">{{post.project.title}}</a>\n" +
    "					<a href=\"member/{{post.profile}}\">{{post.profile}}</a>\n" +
    "					<a href=\"task/{{post.task}}\">{{post.task.title}}</a>\n" +
    "					<a href=\"task/{{post.transaction}}\">{{post.transaction}}</a>\n" +
    "					<a href=\"work/{{post.work.id}}\">{{post.work.amount}} {{post.work.content}}</a>\n" +
    "				</h3>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px\">\n" +
    "		    	<div class=\"row\">\n" +
    "\n" +
    "					<div class=\"col-md-7\">\n" +
    "				    	<h4>Protocols [viewToken, contentToken, reactionToken]</h4>\n" +
    "				    	<p style=\"color:gray;font-style:italic;font-size:12px\">[viewToken, contentToken, reactionToken] manifold minting logic <a href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "				        <h5><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "				        <p>\n" +
    "							<a ng-repeat=\"token in tokens\" href=\"market/{{token}}\">{{token}} </a>,\n" +
    "				    	</p>\n" +
    "			    	</div>\n" +
    "\n" +
    "					<div class=\"col-md-5\">\n" +
    "\n" +
    "\n" +
    "				        <h4>Liquidity | onMint</h4>\n" +
    "						<h5>Filters | <span ng-repeat=\"input in outputVector.split(',')\"><a href=\"market/{{input}}\">{{input}}</a> | </span>\n" +
    "						<h5>Input Vectors | Scale of Output</h5>\n" +
    "						<p style=\"color:gray;font-style:italic;font-size:12px\">Search for Output liquidity path | [] = []</p>\n" +
    "						<form ng-submit=\"marketTraverse(tokens, outputVector)\">\n" +
    "							<input type=\"text\" placeholder=\"Input Dimensions\" ng-model=\"tokens\" class=\"form-control\">\n" +
    "							<!--SUBMIT-->\n" +
    "						</form>\n" +
    "						<form ng-submit=\"marketTraverse(tokens, outputVector)\">\n" +
    "							<input type=\"text\" placeholder=\"Output Dimensions\" ng-model=\"outputVector\" class=\"form-control\">\n" +
    "							<!--SUBMIT-->\n" +
    "						</form>\n" +
    "\n" +
    "						<p style=\"color:gray;font-style:italic;font-size:10px\">CREATE ORDER [TOKENS] = [0.000312CRE8, 0.00002BTC, 0.0002ETH]</p>\n" +
    "						<p style=\"color:gray;font-style:italic;font-size:10px\">onMint sponsorship [TOKENS] = [0.000312 CRE8, 0.00021UniversalToken, ...]</p>\n" +
    "\n" +
    "						<!--TRAVERSAL PARAMETERS-->\n" +
    "\n" +
    "						<p ng-repeat=\"result in marketOutput\" style=\"color:gray;font-style:italic;font-size:10px\">\n" +
    "\n" +
    "							<span>[tokens] = {{result[0]}} <a href=\"market/{{result[1]}}\">{{result[1]}}</a></span>\n" +
    "\n" +
    "							<!--COMBINITRONICS-->\n" +
    "							<!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "\n" +
    "						</p>\n" +
    "\n" +
    "\n" +
    "			    	</div>\n" +
    "		    	</div>\n" +
    "\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--REFACTOR-->\n" +
    "	<div class=\"row\" ng-show=\"post.type=='video'\">\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "	        <div style=\"padding:16px;background-color:white\">\n" +
    "	        	<h3>Comment</h3>\n" +
    "	        	<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "	<div class=\"row\" ng-show=\"post.type=='video'\">\n" +
    "		<div ng-include=\"'content/post.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"post.type!='video'\">\n" +
    "\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "	        <div style=\"padding:16px;background-color:white\">\n" +
    "\n" +
    "				<div>\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{post.user.avatarUrl}}\" src=\"{{post.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					<a style=\"display:inline\" href=\"/member/{{post.user.username}}\"><span style=\"font-weight:800\">{{post.user.username}}</span></a>\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "				</div>\n" +
    "\n" +
    "				<br>\n" +
    "\n" +
    "				<div style=\"max-height:500px;overflow:scroll\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "		        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		    </div>\n" +
    "			<div ng-show=\"post.showReply\" class=\"card-footer\">\n" +
    "				<form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "					<text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "				    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"post in post.children track by post.id\"></div>\n" +
    "		</div>\n" +
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

angular.module("contentList/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contentList/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Content</h1></div>\n" +
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
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:10px;\">\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"newContentToggle()\">+ Content</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\" ng-show=\"newContentToggleVar\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "                    <div class=\"\">\n" +
    "                        <input type=\"text\" placeholder= \"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder= \"Parent\" ng-model=\"newContent.parent\" class=\"form-control\">\n" +
    "                        <input type=\"text\" placeholder= \"Type\" ng-model=\"newContent.type\" class=\"form-control\"> <!-- VIDEO | FILE... ? -->\n" +
    "                        <input type=\"text\" placeholder= \"Tags\" ng-model=\"newContent.tags\" class=\"form-control\">\n" +
    "                        <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                        <input type=\"text\" placeholder= \"Attachment\" ng-model=\"newContent.attachment\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <form style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"{{searchQuery}}\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "                <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-2\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <form style=\"display:flex;flex-direction:row;\">\n" +
    "                    <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"{{searchQuery}}\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "                    <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                        <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "                            <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-repeat=\"item in contentList\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"padding:16px\">\n" +
    "\n" +
    "                        <a href=\"content/{{item.id}}\"><h4>{{item.title}}</h4></a>\n" +
    "                        <h5 style=\"margin-top:0px;margin-bottom:0px\"><a ng-repeat=\"tag in item.tags\" href=\"#\"  ng-click=\"filterContent(tag)\">{{tag}}, </a></h5>\n" +
    "                        <br>\n" +
    "                        <p><a style=\"font-weight:700\"  href=\"member/{{item.user.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.user.username}}\n" +
    "                        </a> | <span am-time-ago=\"item.createdAt\"></span></p>\n" +
    "                        \n" +
    "                        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "                            <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"card-footer\">\n" +
    "                        <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                        <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                        <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                        <a class=\"pull-right\" style=\"padding:0px;\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "                        <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "                            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "                            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "     <div class=\"row\"><div class=\"col-sm-offset-2 col-sm-10\"><button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button></div></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
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
    "		<li class=\"active\"><a href=\"#\">Activity</a></li>\n" +
    "		<li><a href=\"/content\">Content</a></li>\n" +
    "		<li><a href=\"/marketplace\">Items</a></li>\n" +
    "		<li><a href=\"/members\">Members</a></li>\n" +
    "		<li><a href=\"/market\">Orders</a></li>\n" +
    "		<li><a href=\"/projects\">Projects</a></li>\n" +
    "		<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "		<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<!--TODO: FILTER / SEARCH -->\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
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
    "		        <p style=\"color:gray\">Total Reputation | {{member.totalWork}}</p>\n" +
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
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a>\n" +
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
    "			<!--<a href=\"/\">conex.us</a>-->\n" +
    "			<a href=\"/\">CRE8.XYZ</a>\n" +
    "			<!--<a href=\"/about\">about</a>-->\n" +
    "			<a href=\"/discover\">discover</a>\n" +
    "			<a href=\"/market\">market</a>\n" +
    "			<a href=\"/projects\">projects</a>\n" +
    "			<a href=\"/tasks\">tasks</a>\n" +
    "			<!--<a href=\"/transparency\">transparency</a>-->\n" +
    "			<!--<a href=\"/project/conexus/ledger\">transparency</a>-->\n" +
    "		</div>\n" +
    "		<div>\n" +
    "			<a href=\"/\"><img src=\"images/hyper.gif\"></a>\n" +
    "			<!--<a href=\"/\"><img src=\"images/conexus-white.png\"></a>-->\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<style>\n" +
    ".card:hover{\n" +
    "	box-shadow: 0 1px 3px 0 rgba(0,0,0,.6), 0 1px 1px 0 rgba(0,0,0,.42), 0 2px 1px -1px rgba(0,0,0,.36)\n" +
    "}\n" +
    "</style>\n" +
    "<!--TEMP | LOGGED IN / DASH-->\n" +
    "<div class=\"container\" ng-show=\"currentUser\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-4 col-sm-12 col-xs-12\" style=\"\">\n" +
    "		    <div class=\"member-card\" style=\"margin-left:-5px;margin-right:-10px\">\n" +
    "			    <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "			        <a href=\"member/{{currentUser.username}}\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "			    </div>\n" +
    "			    <div class=\"member-card-info\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\">{{currentUser.username}}</a></h4>\n" +
    "			        <p style=\"color:gray\">{{currentUser.status}} Online</p>\n" +
    "			        <p style=\"color:gray\">{{currentUser.totalWork}}</p>\n" +
    "			    </div> \n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-8 col-sm-12 col-xs-12\" style=\"padding-left:0px;;margin-right:-5px\">\n" +
    "			<div class=\"card\" style=\"min-width:100%;margin-top:0px\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<span style=\"text-align:left;float:right\"><a href=\"#\"><span style=\"font-size:11px;color:gray\">0x{{member.id}}</span><img style=\"height:50px;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\"></a></span>\n" +
    "					<h4>{{currentUser.email}}</h4>\n" +
    "					<p><a href=\"/projects\">25 Projects</a> | <a href=\"/member/{{currentUser.username}}/followers\">23 Followers</a> | <a href=\"/member/{{currentUser.username}}/followers\">22 Following</a>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-sm-6\">\n" +
    "							<h5>Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "				       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "				            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "				        </div>\n" +
    "				        <div class=\"col-sm-6\">\n" +
    "							<h5>Reputation Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
    "				       		<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Dimension\">\n" +
    "				            	<div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "				        </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-15\"></div>\n" +
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
    "					<li><a href=\"/content\">Content</a></li>\n" +
    "					<li><a href=\"/marketplace\">Items</a></li>\n" +
    "					<li><a href=\"/market\">Orders</a></li>\n" +
    "					<li><a href=\"/projects\">Projects</a></li>\n" +
    "					<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "\n" +
    "					<!--<li style=\"float:right\"><a href=\"#\">Trending</li>\n" +
    "					<li style=\"float:right\"><a href=\"#\">New</li>-->\n" +
    "\n" +
    "					<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-repeat=\"item in activity\"> <!--ng-click=\"\"-->\n" +
    "			<div class=\"card\" ng-show=\"item.model=='CONTENT'\">\n" +
    "		        <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "					<div>\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "						<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "						<!--TODO: POST PARENT TYPES-->\n" +
    "						<a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "						<a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "						<a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"content/{{item.post}}\">post {{item.post}}</a>\n" +
    "						<a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "						<a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "						<a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "						<a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "\n" +
    "						<a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "						<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "						<p style=\"display:inline;float:right\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "						<div style=\"clear:both\"></div>\n" +
    "\n" +
    "					</div>\n" +
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "                    	<div class=\"col-sm-1 col-xs-2\">\n" +
    "	                        <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-10 col-xs-10\">\n" +
    "	                        <h3 style=\"margin-top:0px\">\n" +
    "	                            <a href=\"project/{{item.urlTitle}}\">\n" +
    "	                                {{item.title}}\n" +
    "	                            </a>\n" +
    "	                        </h3>\n" +
    "	                        <p style=\"color:gray;font-style:italic;\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"col-sm-1\" style=\"text-align:right\">\n" +
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
    "\n" +
    "						<p style=\"display:inline;float:right\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "						<div style=\"clear:both\"></div>\n" +
    "\n" +
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
    "	<div style=\"background-color:white\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"container\">\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<h3>CRE8 MULTIDIMENSIONAL VALUE</h3>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "					<p style=\"font-style:italic;margin:0px;color:gray\">Create and participate in transparent, crowdsourced, organizations.</p>\n" +
    "					<p style=\"font-style:italic;margin:0px;color:gray\">Create value through tokenized actions.</p>\n" +
    "					<div class=\"spacing-15\"></div>\n" +
    "					<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/about\">learn more</a>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\" style=\"text-align:center\">\n" +
    "					<img style=\"max-height:200px\" src=\"/images/loading.gif\">\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<div class=\"block\">\n" +
    "						<div class=\"shape\">\n" +
    "							<div class=\"cube outer\">\n" +
    "								<div class=\"side left\"></div>\n" +
    "								<div class=\"side right\"></div>\n" +
    "								<div class=\"side top\"></div>\n" +
    "								<div class=\"side bottom\"></div>\n" +
    "								<div class=\"side front\"></div>\n" +
    "								<div class=\"side back\"></div>\n" +
    "								<div class=\"cube\">\n" +
    "									<div class=\"side left\"></div>\n" +
    "									<div class=\"side right\"></div>\n" +
    "									<div class=\"side top\"></div>\n" +
    "									<div class=\"side bottom\"></div>\n" +
    "									<div class=\"side front\"></div>\n" +
    "									<div class=\"side back\"></div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<h3>BUILD THE VALUE MATRIX</h3>\n" +
    "					<div class=\"spacing-5\"></div>\n" +
    "					<p style=\"font-style:italic;margin:0px;color:gray\">Manifest pluralism.</p>\n" +
    "					<p style=\"font-style:italic;margin:0px;color:gray\">Create your Dimensional Vote; Relationally map your value to a set of tokenized potiental.</p>\n" +
    "					<div class=\"spacing-15\"></div>\n" +
    "					<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/market\">explore the market</a>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<!--STORY ABOUT VALUE MAPPING HERE!!-->\n" +
    "		<!--FILL OUT THE VALUE FORM-->\n" +
    "\n" +
    "		<div class=\"container\">\n" +
    "		    <div class=\"row\">\n" +
    "		        <div class=\"col-lg-12 col-md-12\">\n" +
    "					<h3><b>Join Our Community</b></h3><hr>\n" +
    "		            <div class=\"login-form\">\n" +
    "		                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "		                    <div class=\"form-group\">\n" +
    "		                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "		                        <i class=\"fa fa-user\"></i>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"form-group\">\n" +
    "		                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "		                        <i class=\"fa fa-user\"></i>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"form-group log-status\">\n" +
    "		                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "		                        <i class=\"fa fa-lock\"></i>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"align-right\">\n" +
    "		                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "		                    </div>\n" +
    "		                    <br><br>\n" +
    "		                    <div style=\"text-align:center\">\n" +
    "		                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "		                    </div>\n" +
    "		                </form>\n" +
    "		            </div>\n" +
    "		            <div class=\"selfClear\"></div>\n" +
    "		        </div>   \n" +
    "		    </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"\">\n" +
    "			    <div style=\";\">\n" +
    "					<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "						<li class=\"active\"><a href=\"/\">Activity</a></li>\n" +
    "						<li><a href=\"/content\">Content</a></li>\n" +
    "						<li><a href=\"/marketplace\">Items</a></li>\n" +
    "						<li><a href=\"/market\">Orders</a></li>\n" +
    "						<li><a href=\"/projects\">Projects</a></li>\n" +
    "						<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "						<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"card\">\n" +
    "		        <form style=\"display:flex;flex-direction:row;\">\n" +
    "		            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "		            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "		            	<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		            </div>\n" +
    "		        </form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	    <div class=\"row\">\n" +
    "			<div ng-repeat=\"item in activity\"><!--ng-click=\"\"-->\n" +
    "				<div class=\"card\" ng-show=\"item.model=='CONTENT'\" >\n" +
    "		            <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "						<div>\n" +
    "							<img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "							<a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "							<p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "\n" +
    "							<!--TODO: POST PARENT TYPES-->\n" +
    "							<a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{item.market}}\">market {{item.market}}</a>\n" +
    "							<a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{item.order}}\">order {{item.order}}</a>\n" +
    "							<a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"/content/{{item.post}}\">post {{item.post}}</a>\n" +
    "							<a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"/member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "							<a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"/project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "							<a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"/task/{{item.task}}\">task {{item.task}}</a>\n" +
    "							<a ng-show=\"item.transaction\" style=\"display:inline;font-weight:600\" href=\"transaction/{{item.transaction}}\">transaction {{item.transaction}}</a>\n" +
    "							<a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"/work/{{item.work}}\">work {{item.work}}</a>\n" +
    "							<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "							\n" +
    "							<p style=\"display:inline;float:right\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "						</div>\n" +
    "						<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "					</div>\n" +
    "					<div class=\"card-footer\">\n" +
    "						<a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "						<a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "						<a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "						<a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "		                        <a href=\"project/{{item.urlTitle}}\"><img style=\"width:50px;height:50px;max-width:1000%\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"col-sm-10 col-xs-10\">\n" +
    "		                        <h3 style=\"margin-top:0px\">\n" +
    "		                            <a href=\"project/{{item.urlTitle}}\">\n" +
    "		                                {{item.title}}\n" +
    "		                            </a>\n" +
    "		                        </h3>\n" +
    "	                        	<p style=\"color:gray;font-style:italic;\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "		                    </div>\n" +
    "		                    <div class=\"col-sm-1\" style=\"text-align:right\">\n" +
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
    "\n" +
    "							<p style=\"display:inline;float:right\"><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "							<div style=\"clear:both\"></div>\n" +
    "\n" +
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

angular.module("item/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "\n" +
    "				<h1>{{item.title}}</h1>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "		        <div style=\"max-height:500px;overflow:scroll\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<h4>{{item.amountSet}} <a href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h4>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "    </div>\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "				<button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"purchaseToggle()\">Purchase</button>\n" +
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
    "	<!--Delivery | Fuilfillment-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "            	<div class=\"col-md-12\">\n" +
    "                    <h4>Create Item Post</h4>\n" +
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
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "				<h1>{{market.title}} Markets</h1>\n" +
    "				<p style=\"color:white\">{{stateParams.id}} | {{market.marketCount}} markets | {{market.circulation}} tokens in circulation </p>\n" +
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
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h1>{{market.title}} MARKETS</h1>\n" +
    "				<p style=\"color:gray\">{{stateParams.id}} | {{market.marketCount}} markets | {{market.circulation}} tokens in circulation </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-8\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "\n" +
    "						<span>\n" +
    "							<span ng-repeat=\"dimension in baseMarkets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span>\n" +
    "							<a href=\"#\">+ Dimension</a>\n" +
    "\n" +
    "							<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input ng-model=\"newMarket.baseMarket\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\">\n" +
    "				            	<div ng-click=\"addMarket('baseMarket')\" style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "\n" +
    "						</span>\n" +
    "\n" +
    "						<br>\n" +
    "\n" +
    "						<highchart config=\"chartMap\"></highchart>\n" +
    "\n" +
    "						<br>\n" +
    "\n" +
    "						<span>\n" +
    "							<span ng-repeat=\"dimension in markets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span>\n" +
    "							<a href=\"#\">+ Dimension</a>\n" +
    "\n" +
    "							<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input ng-model=\"newMarket.market\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\">\n" +
    "				            	<div ng-click=\"addMarket('market')\" style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "\n" +
    "						</span>\n" +
    "\n" +
    "						<br>\n" +
    "						<h5>Explore</h5>\n" +
    "						<span ng-repeat=\"market in markets\"><a href=\"market/{{market}}\">{{market}} </a></span>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4\" style=\"max-height:750px;overflow:scroll\">\n" +
    "				    <div class=\"card\" ng-repeat=\"market in markets\">\n" +
    "				    	<div style=\"padding:16px;\">\n" +
    "							<div class=\"row\">\n" +
    "					    		<div class=\"col-sm-6\">\n" +
    "					    			<a href=\"market/{{stateParams.id}}/{{market}}\">\n" +
    "										<img style=\"height:50px\" src=\"images/loading.gif\">\n" +
    "					    				<h4>{{market}}</h4>\n" +
    "					    			</a>\n" +
    "					    		</div>\n" +
    "								<div class=\"col-sm-6\" style=\"text-align:right\">\n" +
    "									<p style=\"color:gray;font-size:10px\">0.2042 {{stateParams.id}}/{{market}}</p>\n" +
    "									<p style=\"color:gray;font-size:10px\">8% 24HR Change</p>\n" +
    "									<p style=\"color:gray;font-size:10px\">2031{{stateParams.id}} 24HR Volume</p>\n" +
    "									<p style=\"color:gray;font-size:10px\">21231{{stateParams.id}} Depth</p>\n" +
    "					    		</div>\n" +
    "							</div>\n" +
    "\n" +
    "							<!--<button class=\"btn btn-default log-btn\">+ Dimension</button>-->\n" +
    "\n" +
    "						</div>\n" +
    "				    </div>\n" +
    "					<button class=\"btn btn-default log-btn\">More <i></i></button>\n" +
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
    "				<h2>onMint Actions</h2>\n" +
    "		    </div>\n" +
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
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "<!--<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "            	<h1><a href=\"market/{{market}}\">{{market}}</a> | <a href=\"market/{{market1}}\">{{market1}}</a></h1>\n" +
    "				<p style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | {{percentChange.toFixed(2)}}% Daily Change | {{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}} Daily Trade Volume | {{marketDepth.toFixed(2)}} Total Market Depth</p>\n" +
    "				<p style=\"color:white\">Last Trade Price: {{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | Highest Bid {{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}} | Lowest Ask {{bidAskChart.series[1].data[0][0].toFixed(2)}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div class=\"col-md-10\" style=\"padding:16px;\">\n" +
    "				<h1><a href=\"market/{{market}}\">{{market}}</a> | <a href=\"market/{{market1}}\">{{market1}}</a></h1>\n" +
    "				<p style=\"color:gray\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | {{percentChange.toFixed(2)}}% Daily Change | {{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}} Daily Trade Volume | {{marketDepth.toFixed(2)}} Total Market Depth</p>\n" +
    "				<p style=\"color:gray\">Last Trade Price: {{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}} | Highest Bid {{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}} | Lowest Ask {{bidAskChart.series[1].data[0][0].toFixed(2)}}</p>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"col-md-2\" style=\"padding:16px;text-align:right\">\n" +
    "				<a href=\"market/{{market1}}/{{market}}\"><i class=\"fa fa-refresh\"></i></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"!pluralistic\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"pluralistic\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Pluralistic Market</h2>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "				<div class=\"col-md-6\"><highchart config=\"chartMap\"></highchart></div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>Order Book</h2>\n" +
    "				<highchart config=\"bidAskChart\"></highchart>\n" +
    "				<!--<div class=\"row\" style=\"max-height:250px;overflow:scroll\">\n" +
    "					<div class=\"col-sm-6\"><table class=\"\"><tr ng-repeat=\"data in bidAskChart.series[0].data.slice(0,100)\"><td>{{data[0]}} | </td><td>{{data[1]}}</td></tr></table></div>\n" +
    "					<div class=\"col-sm-6\"><table><tr ng-repeat=\"data in bidAskChart.series[1].data.slice(0,100)\"><td>{{data[0]}} | </td><td>{{data[1]}}</td></tr></table></div>\n" +
    "				</div>-->\n" +
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
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h2>onMint Dimensions</h2>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
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
    "		        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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

angular.module("marketPlace/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPlace/index.tpl.html",
    "<div class=\"page-heading\">\n" +
    "    <div class=\"container\"> \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-6\"><h1>Marketplace</h1></div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<h1>MARKET PLACE</h1>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<button class=\"btn btn-default log-btn\" ng-click=\"newItemToggle()\">+ Item</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-show=\"newItemToggleVar\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"createItem(newItem)\">\n" +
    "					<div class=\"form-group col-sm-12\">\n" +
    "						<input placeholder=\"Title\" type=\"text\" ng-model=\"newItem.title\" class=\"form-control\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-12\">\n" +
    "						<input placeholder=\"Tags\" type=\"text\" ng-model=\"newItem.tags\" class=\"form-control\">\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-12\">\n" +
    "                    	<text-angular placeholder=\"Content\" ng-model=\"newItem.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "					</div>\n" +
    "					<div class=\"form-group col-sm-12\">\n" +
    "						<h4>Price</h4>\n" +
    "						<!--TODO: Better Form.. add [] + -->\n" +
    "						<input placeholder=\"IdentiferSet\" type=\"text\" ng-model=\"newItem.identiferSet\" class=\"form-control\">\n" +
    "						<input placeholder=\"Amount Set\" type=\"text\" ng-model=\"newItem.amountSet\" class=\"form-control\">\n" +
    "						<!--<input placeholder=\"identiferSet\" type=\"text\" ng-model=\"newItem.ArrayManifolds\" class=\"form-control\"> [] ill talk this or this or this and this-->\n" +
    "						<!--[], [], [[],[]]-->\n" +
    "\n" +
    "					</div>\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newItem.amountSet\">create</button>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--FILTER BY CURRENCIES / PRICES I WANT TO PAY BASED ON MM.. RECURSIVE LIQUIDITY TRACE-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-2\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div ng-repeat=\"tag in sortedTagArray\">\n" +
    "                        <a href=\"#\" ng-click=\"filterContent(tag.element)\">{{tag.element}}</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-10\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div ng-repeat=\"item in items\">\n" +
    "		        <div class=\"card\">\n" +
    "		            <div style=\"padding:16px\">\n" +
    "		            	\n" +
    "	                	<a href=\"item/{{item.id}}\"><h4>{{item.title}}</h4></a>\n" +
    "\n" +
    "						<h5 style=\"margin-top:0px;margin-bottom:0px\"><a ng-repeat=\"tag in item.tags\" href=\"#\"  ng-click=\"filterContent(tag)\">{{tag}}, </a></h5>\n" +
    "\n" +
    "	                	<div style=\"max-height:500px;overflow:scroll\">\n" +
    "							<span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "						</div>\n" +
    "\n" +
    "						<!--[] + [] -->\n" +
    "						<h5>{{item.amountSet}} <a href=\"market/{{item.identiferSet}}\">{{item.identiferSet}}</a></h5>\n" +
    "		            </div>\n" +
    "		            <div class=\"card-footer\">\n" +
    "		                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "		                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "		                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		                <a class=\"pull-right\" style=\"padding:0px;\" href=\"item/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "		            </div>\n" +
    "		            <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "			            <form role=\"form\" ng-submit=\"createPost(item)\">\n" +
    "			                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "			                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newPost.content\">create</button>\n" +
    "			            </form>\n" +
    "			        </div>\n" +
    "		        </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--REACT 5 Star verified purchase-->\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div class=\"container\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "     <div class=\"row\"><div class=\"col-sm-offset-2 col-sm-10\"><button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button></div></div>\n" +
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
    "				<p style=\"color:white\">88674 markets | 833423 tokens in circulation </p>\n" +
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
    "	<!--<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h1>Markets</h1>\n" +
    "				<p style=\"color:gray\">88674 markets | 833423 tokens in circulation </p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"card\">\n" +
    "	        <form style=\"display:flex;flex-direction:row;\">\n" +
    "	            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "	            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "	                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "	                </a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "	    <div ng-repeat=\"market in markets\" style=\"padding:0px\">\n" +
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
    "	<div ng-click=\"loadMore()\" style=\"text-align:center\">\n" +
    "		<button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<style>\n" +
    "	.avatar{border-radius: 10em}\n" +
    "	@media (max-width: 991px) {.member-tabs{display:none;}.nav-toggle{display:block;padding:20px;}}\n" +
    "	@media (min-width: 991px) {.member-tabs{display:block;}.nav-toggle{display:none;}}\n" +
    "</style>\n" +
    "\n" +
    "<div ui-view=\"member\">\n" +
    "	<div class=\"container\" style=\"padding:0px\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "				<div class=\"spacing-100\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"pull-left\"><img class=\"avatar\" err-src=\"/images/avatar.png\" ng-src=\"{{member.avatarUrl}}\"/></div>\n" +
    "				<div class=\"pull-right member-tab-container\">\n" +
    "					<ul class=\"member-tabs\">\n" +
    "						<li><a href=\"member/{{member.username}}\">Activity</a></li>\n" +
    "						<li><a href=\"member/{{member.username}}/content\">Content</a></li>\n" +
    "						<li><a href=\"member/{{member.username}}/followers\">{{followersCount.length}} Followers</a></li>\n" +
    "						<li><a href=\"member/{{member.username}}/following\">{{followingCount.length}} Following</a></li>\n" +
    "						<!--<li><a href=\"member/{{member.username}}\">{{followersCount.length}} Projects</a></li>-->\n" +
    "						<li><a href=\"member/{{member.username}}/ledger\">Ledger</a></li>\n" +
    "						<!--<li><a href=\"member/{{member.username}}\">Map</a></li>-->\n" +
    "						<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "						<li><a href=\"member/{{member.username}}/time\">Time</a></li>\n" +
    "						<li ng-show=\"currentUser.id != member.id\">\n" +
    "							<a class=\"btn btn-default\" ng-click=\"follow()\">Follow</a>\n" +
    "							<a ng-show=\"isFollowing\" class=\"btn btn-default\" ng-click=\"unfollow()\">UnFollow</a>\n" +
    "						</li>\n" +
    "						<li ng-show=\"currentUser.id == member.id\">\n" +
    "							<a class=\"btn btn-default\" href=\"account\">Edit Profile</a>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "					<div class=\"nav-toggle\" ng-click=\"tabsToggle()\">\n" +
    "						<a href=\"#\"><i class=\"fa fa-bars\"></i></a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-show=\"tabsToggleVar\" style=\"text-align:center\">\n" +
    "				<md-divider style=\"color:gray\"></md-divider>\n" +
    "				<div class=\"container\">\n" +
    "					<!--SEARCH-->\n" +
    "					<br>\n" +
    "					<h4><a href=\"member/{{member.username}}\">Activity</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/content\">Content</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/followers\">{{followersCount.length}} Followers</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/following\">{{followingCount.length}} Following</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/ledger\">Ledger</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/positions\">Positions</a></h4>\n" +
    "					<h4><a href=\"member/{{member.username}}/time\">Time</a></h4>\n" +
    "					<br>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<md-divider style=\"color:gray\"></md-divider>\n" +
    "			<div class=\"container\">\n" +
    "				<div class=\"pull-left\" style=\"text-align:left\">\n" +
    "					<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "					<h5>@{{member.username}}</h5>\n" +
    "					<p>{{member.totalWork}} | Total Reputation</p>\n" +
    "				</div>\n" +
    "				<div class=\"pull-right\" style=\"margin-right:15px;margin-top:10px;\">\n" +
    "					<!--<h2>{{member.totalWork}} | total work</h2>-->\n" +
    "					<!--<input type=\"text\" placeholder=\"Reputation\" ng-model=\"reputationLookup\" class=\"form-control\">-->\n" +
    "					<span style=\"color:gray;font-size:10px;float:right\">0x{{member.id}}</span>\n" +
    "					<br>\n" +
    "					<img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\">\n" +
    "					<a style=\"padding:10px 15px;color:rgb(125,125,125)\"class=\"btn btn-default\" href=\"#\" ng-click=\"newTransactionToggle()\">Send Tokens</a>\n" +
    "					<a ng-show=\"member.socialAccounts.facebook.profileUrl\" href=\"{{member.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><span class=\"grey facebook-icon\"><i class=\"fa fa-facebook\"></i> Facebook</span></a>\n" +
    "					<a ng-show=\"member.socialAccounts.twitter.profileUrl\" href=\"{{member.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><span class=\"grey twitter-icon\"><i class=\"fa fa-twitter\"></i> Twitter</span></a>\n" +
    "					<a ng-show=\"member.socialAccounts.google.profileUrl\" href=\"{{member.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><span class=\"grey google-icon\"><i class=\"fa fa-google\"></i> Google</span></a>\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container\" ng-show=\"newTransactionToggleVar\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"card\">\n" +
    "			    <div style=\"padding:16px;\">\n" +
    "			    	<h3 style=\"text-align:left;margin-left:15px;margin-bottom:15px;\">Send Tokens to 0x{{member.id}}</h3>\n" +
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
    "	</div>\n" +
    "	<div class=\"container\">\n" +
    "		<div ui-view=\"memberActivity\"></div>\n" +
    "		<div ui-view=\"memberAssets\"></div>\n" +
    "		<div ui-view=\"memberContent\"></div>\n" +
    "		<div ui-view=\"memberFollowers\"></div>\n" +
    "		<div ui-view=\"memberFollowing\"></div>\n" +
    "		<div ui-view=\"memberLedger\"></div>\n" +
    "		<div ui-view=\"memberPositions\"></div>\n" +
    "		<div ui-view=\"memberTime\"></div>\n" +
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
    "            <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
    "                <div>\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"/member/{{item.user.username}}\">{{item.user.username}}</a>\n" +
    "\n" +
    "                    <!--TODO: POST PARENT TYPES-->\n" +
    "                    <div style=\"display:inline;\" ng-show=\"item.profile != item.user.id && item.profile != member.id\">\n" +
    "                        <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "                        <a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"/market/{{item.market}}\">market {{item.market}}</a>\n" +
    "                        <a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"/order/{{item.order}}\">order {{item.order}}</a>\n" +
    "                        <a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"/content/{{item.post}}\">post {{item.post}}</a>\n" +
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
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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

angular.module("member/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/assets.tpl.html",
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
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-sm-6\">\n" +
    "					<h5>Asset Balance Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span></h5>\n" +
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
    "					<h5>Project Reputation Lookup <span style=\"font-size:11px;color:gray\">0x{{member.id}}</span> </h5>\n" +
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

angular.module("member/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/content.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
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
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in followers\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.follower.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.follower.username}}\"><img ng-src=\"{{member.follower.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.follower.username}}\">{{member.follower.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.follower.status}} offline</p>\n" +
    "	        <p style=\"color:gray\">Total Reputation | {{member.follower.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in following\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.followed.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.followed.username}}\"><img ng-src=\"{{member.followed.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.followed.username}}\">{{member.followed.username}}</a></h4>\n" +
    "	        <p style=\"color:gray\">{{member.followed.status}} offline</p>\n" +
    "	        <p style=\"color:gray\">Total Reputation | {{member.followed.totalWork}}</p>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/ledger.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"\">\n" +
    "		<div style=\"\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "					<li><a href=\"member/{{member.username}}/assets\">Assets</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/positions\">Positions</a></li>\n" +
    "					<li><a href=\"member/{{member.username}}/ledger\">Transactions</a></li>\n" +
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
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>Create Your Value Map</h1>\n" +
    "			<h4>Our Social Responsibility | Dimensional Vote | Manifest Pluralism</h1>\n" +
    "			<span><span ng-repeat=\"dimension in baseMarkets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<br><br>\n" +
    "			<span><span ng-repeat=\"dimension in markets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
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

angular.module("member/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/time.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in work\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "				<h4>{{item.startTime | date:\"h:mma | MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma | MM/dd/yyyy\"}}</h4>\n" +
    "				<a>Working | {{item.task.title}}</a>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a class=\"pull-right\" style=\"padding:0px;\" href=\"work/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "            <div ng-show=\"item.showReply\" style=\"padding: 8px 16px 8px;background-color: #f9f9f9\">\n" +
    "		        <form role=\"form\" ng-submit=\"createPost(post)\">\n" +
    "		            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
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
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "        <div class=\"member-card\" style=\"margin-bottom:10px\">\n" +
    "            <div class=\"member-card-image\" style=\"background-image: url('{{member.coverUrl}}')\">\n" +
    "                <a href=\"member/{{member.username}}\"><img ng-src=\"{{member.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "            </div>\n" +
    "            <div class=\"member-card-info\">\n" +
    "                <h4><a href=\"member/{{member.username}}\">{{member.username}}</a></h4>\n" +
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
    "<style>\n" +
    ".navbar-inverse .navbar-toggle{border-color:#000;}\n" +
    ".navbar-inverse .navbar-brand:focus{color:#000}\n" +
    ".navbar-inverse .navbar-brand:active{color:#000}\n" +
    ".navbar-inverse .navbar-brand:hover{color:#000}\n" +
    ".navbar-toggle{border-radius:0px;}\n" +
    "</style>\n" +
    "<div ng-controller=\"NavCtrl\">\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"right\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
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
    "                <h2 class=\"nav-links\" ng-show=\"currentUser\">\n" +
    "                    <a href=\"member/{{currentUser.username}}\">\n" +
    "                        <img style=\"height:32px;width:32px;border-radius:3px\" src=\"{{currentUser.avatarUrl}}\"/> {{currentUser.username}}\n" +
    "                    </a>\n" +
    "                </h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/discover\">Discover</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/market\">Market</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/marketplace\">Marketplace</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/projects\">Projects</a></h2>\n" +
    "                <h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/tasks\">Tasks</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/transparency\">Transparency</a></h2>\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/account\">Settings</a></h2>\n" +
    "                <!--<h2 class=\"nav-links\" style=\"padding:16px;\"><a href=\"/\">Vote</a></h2>-->\n" +
    "                <h2 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/logout\">Logout</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:16px;\"><a href=\"/login\">Login</a></h2>\n" +
    "                <h2 ng-show=\"!currentUser\"class=\"nav-links\" style=\"padding:16px;\"><a href=\"/register\">Register</a></h2>\n" +
    "                <!--LINKS-->\n" +
    "                <a href=\"/\"><img style=\"width:200px\" src=\"images/hyper.gif\"></a>\n" +
    "\n" +
    "                <!--<br>\n" +
    "                <span>\n" +
    "                    <a style=\"color:white\" href=\"https://www.instagram.com/conex.us\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "                    <a style=\"color:white\" href=\"https://www.instagram.com/conex.us\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "                <span>-->\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <button type=\"button\" class=\"navbar-toggle\" ng-click=\"sideNavToggle()\">\n" +
    "                    <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                    <span class=\"icon-bar\"></span>\n" +
    "                </button>\n" +
    "                <a class=\"navbar-brand\" href=\"/\">\n" +
    "                    <img ng-show=\"!cre8xyz\" style=\"height:25px;margin-top:-3px\" src=\"/images/conexus-white.png\"/>\n" +
    "                    <span ng-show=\"cre8xyz\" style=\"font-weight:bold;color:white\">CRE8.XYZ</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"collapse navbar-collapse\" style=\"text-align:center\">\n" +
    "                <ul class=\"nav navbar-nav\">\n" +
    "                    <form class=\"navbar-form\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link1').value; return false;\">\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <input style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link1\" size=\"40\" type=\"text\" placeholder=\"\">\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </ul>\n" +
    "                <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                    <li ng-show=\"!currentUser\" class=\"nav-links\"><a href=\"/about\"></i>About</a></li>\n" +
    "                    <li class=\"nav-links\"><a href=\"/discover\">Discover</a></li>\n" +
    "                    <li class=\"nav-links\"><a href=\"/market\">Market</a></li>\n" +
    "                    <li class=\"dropdown nav-links\" ng-show=\"currentUser\">\n" +
    "                        <!--notifications on username-->\n" +
    "                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                            {{currentUser.username}} <span class=\"fa fa-angle-down\"></span>\n" +
    "                        </a>\n" +
    "                        <ul class=\"dropdown-menu\">\n" +
    "                            <li>\n" +
    "                                <a style=\"color:black!important\" href=\"/member/{{currentUser.username}}\">\n" +
    "                                    <img style=\"height:32px;width:32px;border-radius:3px\" src=\"{{currentUser.avatarUrl}}\"/> {{currentUser.username}}\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li><a style=\"color:black!important\" href=\"/account\">account</a></li>\n" +
    "                            <li><a style=\"color:black!important\" href=\"#\">0 notifications</a></li>\n" +
    "                            <li role=\"separator\" class=\"divider\"></li>\n" +
    "                            <li><a style=\"color:black!important\" href=\"/logout\">log out</a></li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "                    <li class=\"nav-links\" ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <md-progress-linear ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "    </div>\n" +
    "\n" +
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
    "                <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<style>\n" +
    "    @media (max-width: 991px) {.member-tabs{display:none;}.nav-toggle{display:block;padding:20px;}}\n" +
    "    @media (min-width: 991px) {.member-tabs{display:block;}.nav-toggle{display:none;}}\n" +
    "    .imageContainerSmallDiv h1 {font-size:2.8em;}\n" +
    "</style>\n" +
    "\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\">\n" +
    "        <div class=\"imageContainerSmall\">\n" +
    "            <div class=\"imageContainerSmallDiv\">  \n" +
    "                <h1 style=\"text-align:left;\" class=\"container\"><img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\"/>\n" +
    "                    {{project.title}}\n" +
    "                    <span ng-show=\"project.parent\"> | \n" +
    "                        <a style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a>\n" +
    "                    </span> \n" +
    "                </h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div class=\"row\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}\">Activity</a></li>\n" +
    "                        <!--<li><a href=\"/project/{{project.urlTitle}}/channels\">Channels</a></li>\n" +
    "                        <li><a href=\"/project/{{project.urlTitle}}/charter\">Charter</a></li>-->\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}/content\">Content</a></li>\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}/ledger\">Ledger</a></li>\n" +
    "                        <!--<li><a href=\"/project/{{project.urlTitle}}\">Map</a></li>-->\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}/members\">{{memberCount}} Members</a></li>\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}/projects\">Projects</a></li>\n" +
    "                        <!--<li><a href=\"/project/{{project.urlTitle}}/store\">Store</a></li>-->\n" +
    "                        <li><a href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></li>\n" +
    "                        <li>\n" +
    "                            <a class=\"btn btn-default\" ng-click=\"newTransactionToggle()\">Send Tokens</a>\n" +
    "                        </li>\n" +
    "\n" +
    "                        <li ng-show=\"true\">\n" +
    "                            <a class=\"btn btn-default\" ng-show=\"isProjectCreator()\" ng-click=\"editProjectToggle()\">Edit</a>\n" +
    "                        </li>\n" +
    "                        <li ng-show=\"true\">\n" +
    "                            <a class=\"btn btn-default\" ng-click=\"createMember()\">Join</a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"nav-toggle\">\n" +
    "                <a href=\"#\" ng-click=\"tabsToggle()\"><i class=\"fa fa-bars\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"tabsToggleVar\" style=\"text-align:center\">\n" +
    "            <md-divider style=\"color:gray\"></md-divider>\n" +
    "            <div class=\"\">\n" +
    "                <!--SEARCH-->\n" +
    "                <br>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}\">Activity</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/content\">Content</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/ledger\">Ledger</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/members\">{{memberCount}} Members</a></h4>\n" +
    "                \n" +
    "                <!--<h4><a href=\"project/{{project.urlTitle}}/charter\">Market</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/charter\">Marketplace</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/charter\">Motions</a></h4>-->\n" +
    "\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/projects\">Projects</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/tasks\">Tasks</a></h4>\n" +
    "                <h4><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></h4>\n" +
    "                <br>\n" +
    "                <button class=\"btn btn-default log-btn\" ng-click=\"newTransactionToggle()\">Send Tokens</button>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"padding:0px\" ng-show=\"newTransactionToggleVar\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <h3 style=\"text-align:left;margin-left:15px;margin-bottom:15px;\">Send Tokens to 0x{{project.id}}</h3>\n" +
    "            <form role=\"form\" ng-submit=\"createTransaction(newTransaction)\">\n" +
    "                <div class=\"form-group col-md-4\">\n" +
    "                    <input placeholder=\"From\" type=\"text\" ng-model=\"newTransaction.from\" class=\"form-control\" id=\"taskTitle\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group col-md-4\">\n" +
    "                    <input placeholder=\"Asset Identifier\" type=\"text\" ng-model=\"newTransaction.identifier\" class=\"form-control\" id=\"taskTitle\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group col-md-4\">\n" +
    "                    <input placeholder=\"Amount\" type=\"text\" ng-model=\"newTransaction.amount\" class=\"form-control\" id=\"taskTitle\">\n" +
    "                </div>\n" +
    "                <div class=\"form-group col-md-12\">\n" +
    "                    <textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\" id=\"taskTitle\"></textarea>\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.identifier\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" ng-show=\"editProjectToggleVar\"><p>edit project form</p></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div ui-view=\"activity\"></div>\n" +
    "    <div ui-view=\"assets\"></div>\n" +
    "    <div ui-view=\"channels\"></div>\n" +
    "    <div ui-view=\"content\"></div>\n" +
    "    <div ui-view=\"charter\"></div>\n" +
    "    <div ui-view=\"ledger\"></div>\n" +
    "    <div ui-view=\"members\"></div>\n" +
    "    <div ui-view=\"positions\"></div>\n" +
    "    <div ui-view=\"projects\"></div>\n" +
    "    <div ui-view=\"tasks\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "<div ng-include=\"'footer/index.tpl.html'\"></div>\n" +
    "\n" +
    "");
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
    "            <div style=\"padding:16px;overflow:scroll;max-height:500px\">\n" +
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
    "                <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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

angular.module("project/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/assets.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/assets\">Assets</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
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
    "<div class=\"row\">\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
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
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{post.user.username}}\">{{post.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"post.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(post.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newMotionToggle()\">+ Motion</button>\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<div style=\"\">\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "				<li><a href=\"project/{{project.urlTitle}}/assets\">Assets</a></li>\n" +
    "				<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "				<li><a href=\"project/{{project.urlTitle}}/ledger\">Transactions</a></li>\n" +
    "				<!--\n" +
    "				<li><a href=\"\">Work</a></li>\n" +
    "				<li><a href=\"\">Property</a></li>\n" +
    "				<li><a href=\"\">Liscense</a></li>\n" +
    "				-->\n" +
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
    "\n" +
    "\n" +
    "			<div class=\"row\">\n" +
    "\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<ul style=\"\" class=\"member-tabs\">\n" +
    "						<li class=\"active\"><a href=\"\">Overview</a></li>\n" +
    "						<li><a ng-click=\"selectExpense)\" href=\"#\">Expenses</a></li>\n" +
    "						<li><a ng-click=\"selectRevnue()\" href=\"#\">Revenue</a></li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<div style=\"text-align:right\">\n" +
    "						<form style=\"display:flex;flex-direction:row;\">\n" +
    "					    	<input ng-mode=\"assetFilter\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Asset\">\n" +
    "					    	<div style=\"border:0px;width:50%\" class=\"btn btn-default dropdown sort-dropdown noselect\">\n" +
    "					            <a href=\"#\">\n" +
    "					                <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i> Search</h5>\n" +
    "					            </a>\n" +
    "							</div>\n" +
    "						</form>\n" +
    "\n" +
    "						<h3>{{sumTo[sumTo.length-1]}} USD REVENUE</h3>\n" +
    "						<h3>{{sumFrom[sumFrom.length-1]}} USD EXPENSE</h3>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "			<!--children projects..-->\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<highchart config=\"pie\"></highchart>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<p><span ng-repeat=\"tag in sortedTransactionTags\"><a href=\"/market/{{tag.element}}\">{{tag.element}} </a></span><p>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"createMember()\">join</button>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"member in members\">\n" +
    "	<div class=\"member-card\">\n" +
    "	    <div class=\"member-card-image\" style=\"background-image: url('{{member.user.coverUrl}}')\">\n" +
    "	        <a href=\"member/{{member.user.username}}\"><img ng-src=\"{{member.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "	    </div>\n" +
    "	    <div class=\"member-card-info\">\n" +
    "	        <h4><a href=\"member/{{member.user.username}}\">{{member.user.username}}</a></h4>\n" +
    "	        <!--<p style=\"color:gray\">{{member.status}} offline</p>-->\n" +
    "	        <p style=\"color:gray\">Total Reputation | {{member.user.totalWork}}</p>\n" +
    "	        <p style=\"color:gray\">{{project.title}} | 888</p>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/positions.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-md-6\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/assets\">Assets</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/positions\">Positions</a></li>\n" +
    "			<li><a href=\"project/{{project.urlTitle}}/ledger\">Transactions</a></li>\n" +
    "		</ul>\n" +
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
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "			<h1>{{project.title}} | Value Map</h1>\n" +
    "			<span><span ng-repeat=\"dimension in baseMarkets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<br><br>\n" +
    "			<span><span ng-repeat=\"dimension in markets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span> <a href=\"#\">+ Dimension</a></span>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<highchart config=\"chart\"></highchart>\n" +
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
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div ng-show=\"project.parent\">\n" +
    "	<h3><a href=\"project/{{project.urlTitle}}\"><img style=\"height:32px\" src=\"{{project.parent.avatarUrl}}\"> <a href=\"project/{{project.parent.urlTitle}}\">{{project.parent.title}}</a></h3>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"currentUser\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button class=\"btn btn-default log-btn\" ng-click=\"newProjectToggle()\">+ Project</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newProjectToggleVar\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"padding:16px;\">\n" +
    "            <form class=\"blog-input\" role=\"form\" ng-submit=\"createProject()\">\n" +
    "                <input type=\"text\" placeholder= \"Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "                <text-angular placeholder=\"Description \"ng-model=\"newProject.description\" ta-toolbar=\"''\"></text-angular>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\">create</button>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div ng-repeat=\"project in projects\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-sm-10\">\n" +
    "						<h4><a href=\"project/{{project.urlTitle}}\"><img style=\"height:24px\" src=\"{{project.avatarUrl}}\"> {{project.title}}</a></h4>\n" +
    "						<p style=\"color:gray;font-style:italic;\"><span ng-bind-html=\"renderContent(project.description)\"></span></p></p>\n" +
    "						<!--\n" +
    "						<p>{{project.memeberCount}}</p>\n" +
    "						<p>{{project.taskCount}}</p>\n" +
    "						<p>{{project.totalWork}}</p>\n" +
    "						<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "						-->\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "						<h4><a href=\"project/{{project.urlTitle}}\">Join</a></h4>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<!--FILTERS AND SEARCH HERE-->\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<button class=\"btn btn-default log-btn\" ng-click=\"newTaskToggle()\">+ Task</button>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"newTaskToggleVar\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:16px;\">\n" +
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
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
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
    "                        <a href=\"/project/{{project.urlTitle}}\"><img style=\"width:100%;height:100%\" src=\"{{project.avatarUrl}}\"></a>\n" +
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

angular.module("reaction/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reaction/index.tpl.html",
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
    "\n" +
    "<div id=\"title-container\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
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
    "				<h3>Transparency Maximalism</h3>\n" +
    "				<h4>Create the Next Wave</h4>\n" +
    "				<h5>A Collaborative Network</h5>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A 24/7 continual hackathon</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Connect with new collaborators and build together</p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<h4>Share with us and Create the Future</h4>\n" +
    "				<h5>Watch the World Create</h5>\n" +
    "				<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "\n" +
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
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\" style=\"max-height:450px;overflow:scroll\">\n" +
    "\n" +
    "				<!--TODO-->\n" +
    "				<a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/discover\">Discover</a>\n" +
    "\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "					<li class=\"active\"><a href=\"/content\">Content</a></li>\n" +
    "					<li><a href=\"/marketplace\">Items</a></li>\n" +
    "					<li><a href=\"/members\">Members</a></li>\n" +
    "					<li><a href=\"/market\">Orders</a></li>\n" +
    "					<li><a href=\"/projects\">Projects</a></li>\n" +
    "					<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "					<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "				</ul>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "			        <form style=\"display:flex;flex-direction:row;\">\n" +
    "			            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "			            <div ng-click=\"keyPress(searchQuery)\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "							<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "			            </div>\n" +
    "			        </form>\n" +
    "				</div>\n" +
    "\n" +
    "				<div ng-repeat=\"task in tasks\">\n" +
    "					<div class=\"card\">\n" +
    "						<div style=\"padding:16px;\">\n" +
    "							<div class=\"row\">\n" +
    "								<div class=\"col-sm-10\">\n" +
    "									<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "									<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "			                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "									<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "									<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "								</div>\n" +
    "								<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "									<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "									<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"card-footer\">\n" +
    "							<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "							<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section2\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2>Collaborative Governance</h2>\n" +
    "				<p style=\"font-style:italic;margin:0px\">Reputation Protocols | Working together toward a common goal</p>\n" +
    "				<p style=\"font-style:italic;margin:0px\">Coordinating Around Shared Goals</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<a href=\"/\"><img style=\"height:88px;float:right\" src=\"images/hyper.gif\"></a>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section1\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<h2>MultiDimensional Token Protocols</h2>\n" +
    "				<h4>Content Tokenization | Time Tokenization | Reaction Tokenization | Order Tokenization | Transaction Tokenization</h4>\n" +
    "				<h5><a>Developers</a> | <a>Documentation</a> | <a>APIs</a> | <a>App Ecosystem</a> | <a href=\"https://www.github.com/troverman/conexus\"><i class=\"fa fa-github\"></i></a></h4>\n" +
    "				<!--<pre>CODE</pre>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<h2><a href=\"/market\">MultiDimensional Token Market</a></h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Turn your creative effort into dimensional tokens with market liquidity</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create dimensional liquidity for transparent and reputationally validated work</p> \n" +
    "		        <!--<span><a href=\"market/universalToken\">UniversalToken</a> | {}</span>-->\n" +
    "\n" +
    "		        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "				<highchart config=\"chartMap\"></highchart>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<!--<highchart config=\"chart\"></highchart>-->\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div class=\"spacing-100\"></div>\n" +
    "				<h3>Create Value Relationships</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value; create depth in the market</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Market Order types; onMint Postions; Trade Postions; Futures Postions; Derivative Positions</p> \n" +
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
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A crypto economic data structre and means of account</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section4\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "\n" +
    "				<h2>Value Mapping and Dimensional Voting</h2>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create A Pluralist Means of Value</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Continually state and update what valuable to you, dimensionally.</p>\n" +
    "				<br>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">It is our responsibility to create an awakening of depth in collective value. It starts with you.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">The source of our intentional value mechanism comes from simply stating what we believe is valuable. An empowering call to action.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Empower youself and our collective by clearly and distinctly defining your value map -- relational to a set of validated action sets.</p>\n" +
    "				<br>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">What do we know is valuable? Let us come to consensus; to create a 'gestalt.'</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Register to vote, map your value, and give dimensional value to sets of actions</p>\n" +
    "				<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- CALL TO ACTION HERE-->\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\" ng-show=\"true\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div class=\"card\">\n" +
    "			        <div style=\"padding:16px;\">\n" +
    "\n" +
    "						<h1>CRE8</h1>\n" +
    "						<h3><b>Join Our Community</b></h3>\n" +
    "			        	<h4>Create Your Value Map</h4>\n" +
    "			        	<p style=\"font-style:italic;color:gray;margin:0px\">The more complete the better, the more intentional your dimensional vote the better.</p>\n" +
    "			        	<p style=\"font-style:italic;color:gray;margin:0px\">*Creating Orders on the Multi Dimensional Token Market.</p>\n" +
    "			        	<br>\n" +
    "						<span><a href=\"market/universalToken\">UniversalToken onMint Market Postion <i class=\"fa fa-question-circle\"></i></a></span>\n" +
    "						<!--<br>\n" +
    "			        	<span><a href=\"market/universalToken\">UniversalToken</a></span>-->\n" +
    "			        	<br>\n" +
    "						<span>\n" +
    "							<span ng-repeat=\"dimension in markets\"><a href=\"market/{{dimension}}\">{{dimension}}</a> | </span>\n" +
    "							<a href=\"#\">+ Dimension</a>\n" +
    "							<form style=\"display:flex;flex-direction:row;\">\n" +
    "				            	<input ng-model=\"newMarket.market\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\">\n" +
    "				            	<div ng-click=\"addMarket('market')\" style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "					                <a href=\"#\">\n" +
    "					                    <h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5>\n" +
    "					                </a>\n" +
    "								</div>\n" +
    "				        	</form>\n" +
    "						</span>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "						<!--THIS WILL BUILD AS YOU CREATE-->\n" +
    "						<highchart config=\"chartMap\"></highchart>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://68.media.tumblr.com/76cbc26d8010ca3faad8428891aba21d/tumblr_ohzc3fnNUL1qg20oho1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://78.media.tumblr.com/a8e7e98f8328eb6ddbbb88a73010da06/tumblr_nu2mntog0W1qkbpm3o1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://66.media.tumblr.com/b4ac17c890389077048cd05f00b8b397/tumblr_o5xdhaZpCK1v05rsfo1_1280.jpg\">\n" +
    "			        	<img style=\"max-height:200px\" src=\"http://33.media.tumblr.com/9d90debeda613c297cd7642c14e00d03/tumblr_mf45zsouyw1qatka3o1_500.gif\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h3>What is Valuable to you?</h3>\n" +
    "						<h4>I believe the following concepts and specific tasks are valuable.</h4>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "						<div class=\"card\">\n" +
    "					        <form style=\"display:flex;flex-direction:row;\">\n" +
    "					            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "					            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "									<h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "					            </div>\n" +
    "					        </form>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "						<div style=\"padding:16px;\"><p style=\"font-weight:800\"><span ng-repeat=\"dimension in markets\"><a href=\"#\">{{dimension}}, </a></span></p></div>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "					\n" +
    "						<div style=\"max-height:200px;overflow:scroll\">\n" +
    "							<div ng-repeat=\"task in tasks\">\n" +
    "								<div class=\"card\">\n" +
    "									<div style=\"padding:16px;\">\n" +
    "										<div class=\"row\">\n" +
    "											<div class=\"col-sm-10\">\n" +
    "												<h4><a href=\"task/{{task.id}}\">{{task.title}}</a></h4>\n" +
    "												<p><a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></p>\n" +
    "						                    	<p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "												<a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a>\n" +
    "												<span style=\"color:gray\" am-time-ago=\"task.createdAt\"></span>\n" +
    "											</div>\n" +
    "											<div class=\"col-sm-2\" style=\"text-align:right\">\n" +
    "												<h4>{{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a></h4>\n" +
    "												<p><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									<div class=\"card-footer\">\n" +
    "										<a href=\"task/{{task.id}}\" ng-click=\"\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "										<a href=\"task/{{task.id}}\" ng-click=\"\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<input type=\"text\" class=\"form-control\">\n" +
    "								<button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "\n" +
    "\n" +
    "						<h4>A Valuable Day</h4>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">REST</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">WORK</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">8</span> hours of <span style=\"font-weight:800\">FUN</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">2</span> hours of <span style=\"font-weight:800\">Learning</span></p>\n" +
    "						<p>An ideal day contains <span style=\"font-weight:800\">1</span> hours of <span style=\"font-weight:800\">Exercise</span></p>\n" +
    "\n" +
    "						<div class=\"spacing-15\"></div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<div class=\"col-md-6\"><input type=\"text\" placeholder=\"Hours\" class=\"form-control\"></div>\n" +
    "							<div class=\"col-md-6\"><input type=\"text\" placeholder=\"Activity\" class=\"form-control\"></div>\n" +
    "							<div class=\"col-md-12\"><button type=\"submit\" style=\"width:100%\" ng-click=\"createOrder()\" class=\"btn btn-default log-btn\">Add</button></div>\n" +
    "						</div>\n" +
    "						<div style=\"clear:both\"></div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h2>Personal Information</h4>\n" +
    "						<h4>Who Are You?</h4>\n" +
    "						<div class=\"spacing-15\"></div>\n" +
    "						<div class=\"form-group\">\n" +
    "							<input type=\"text\" placeholder=\"First Name\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Last Name\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Date of Birth\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Address\" class=\"form-control\">\n" +
    "\n" +
    "							<!--<input type=\"text\" placeholder=\"Height\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Eye Color\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"DNA UPLOAD\" class=\"form-control\">\n" +
    "							<input type=\"text\" placeholder=\"Picture\" class=\"form-control\">-->\n" +
    "\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"card\">\n" +
    "					<div style=\"padding:16px;\">\n" +
    "						<h3><b>Join Our Community</b></h3><hr>\n" +
    "						<form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "							<div class=\"form-group\">\n" +
    "		                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "		                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "		                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
    "		                        <button class=\"btn btn-default log-btn\" type=\"submit\" value=\"submit\">Sign up</button>\n" +
    "		                        <br><br>\n" +
    "			                    <div class=\"social-log\">\n" +
    "			                        <a href=\"/login\"><h4>Already Have an Account?</h4></a>\n" +
    "			                    </div>\n" +
    "							</div>\n" +
    "	                	</form>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	    <div class=\"row\">\n" +
    "	    	<div class=\"col-xs-12\" style=\"text-align:center;font-size:18px\">\n" +
    "	    		<h3>Our Extended Community</h3>\n" +
    "	    		<a href=\"https://www.instagram.com/cre8community\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "	    		<a href=\"https://www.twitter.com/cre8city\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "	    		<a href=\"https://www.github.com/troverman/conexus\"><i class=\"fa fa-github\"></i></a>\n" +
    "	    		<a href=\"https://cre8xyz.slack.com\"><i class=\"fa fa-slack\"></i></a>\n" +
    "	    		<!--<a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-google\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-app-store\"></i></a>\n" +
    "	    		<a href=\"#\"><i class=\"fa fa-google-play\"></i></a>-->\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "	    <div class=\"row\">\n" +
    "	    	<div class=\"col-xs-12\" style=\"text-align:center;font-size:18px\">\n" +
    "	    		<h3>Our Partners</h3>\n" +
    "	    		<a href=\"https://www.cre8.capital\"><img style=\"height:25px;\" src=\"https://www.cre8.capital/images/tesseract.png\"></a>\n" +
    "	    		<a href=\"https://www.experiencenovo.io\"><img style=\"height:25px;\" src=\"https://www.experiencenovo.io/images/novo/tri.png\"></a>\n" +
    "	    		<a href=\"https://www.cre8bid.io\"><img style=\"height:25px;\" src=\"https://www.cre8bid.io/images/bidio_logo.png\"></a>\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div id=\"about-section5\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	    <div class=\"row\">\n" +
    "	        <div class=\"col-lg-6 col-lg-offset-3 col-md-10 col-md-offset-1\">\n" +
    "				<h3><b>Join Our Community</b></h3><hr>\n" +
    "	            <div class=\"login-form\">\n" +
    "	                <form role=\"form\" method=\"post\" action=\"/auth/local/register\">\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group\">\n" +
    "	                        <input class=\"form-control\" name=\"username\" placeholder=\"Username\" title=\"username\" type=\"text\"> \n" +
    "	                        <i class=\"fa fa-user\"></i>\n" +
    "	                    </div>\n" +
    "	                    <div class=\"form-group log-status\">\n" +
    "	                        <input class=\"form-control\" name=\"password\" placeholder=\"Password\" title=\"password\" type=\"password\"> \n" +
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
    "</div>-->\n" +
    "\n" +
    "\n" +
    "");
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
    "		<div class=\"spacing-10\"></div>\n" +
    "		<div class=\"row\">\n" +
    "		    <div class=\"card\">\n" +
    "		        <form style=\"display:flex;flex-direction:row;\">\n" +
    "		            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"{{searchQuery}}\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "		            <div style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "		                <a ng-click=\"keyPress(searchQuery)\" href=\"#\" role=\"button\">\n" +
    "		                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "		                </a>\n" +
    "		            </div>\n" +
    "		        </form>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"container\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li class=\"active\"><a href=\"\">Activity</a></li>\n" +
    "			<li><a href=\"/discover\">Content</a></li>\n" +
    "			<li><a href=\"/market\">Orders</a></li>\n" +
    "			<li><a href=\"/projects\">Projects</a></li>\n" +
    "			<li><a href=\"/tasks\">Tasks</a></li>\n" +
    "			<li style=\"float:right\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
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
    "		                    <a ng-show=\"item.market\" style=\"display:inline;font-weight:600\" href=\"market/{{item.market}}\">market {{item.market}}</a>\n" +
    "		                    <a ng-show=\"item.order\" style=\"display:inline;font-weight:600\" href=\"order/{{item.order}}\">order {{item.order}}</a>\n" +
    "		                    <a ng-show=\"item.post\" style=\"display:inline;font-weight:600\" href=\"content/{{item.post}}\">post {{item.post}}</a>\n" +
    "		                    <a ng-show=\"item.profile\" style=\"display:inline;font-weight:600\" href=\"member/{{item.profile}}\">profile {{item.profile}}</a>\n" +
    "		                    <a ng-show=\"item.project\" style=\"display:inline;font-weight:600\" href=\"project/{{item.project.urlTitle}}\">{{item.project.title}}</a>\n" +
    "		                    <a ng-show=\"item.task\" style=\"display:inline;font-weight:600\" href=\"task/{{item.task}}\">task {{item.task}}</a>\n" +
    "		                    <a ng-show=\"item.work\" style=\"display:inline;font-weight:600\" href=\"work/{{item.work}}\">work {{item.work}}</a>\n" +
    "		                </div>\n" +
    "		                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "		            </div>\n" +
    "		            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "		        </div>\n" +
    "		        <div class=\"card-footer\">\n" +
    "		            <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.plusCount}} like </a> \n" +
    "		            <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.minusCount}} dislike </a>\n" +
    "		            <a href=\"#\" ng-click=\"reply(item)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "		            <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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

angular.module("task/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<div class=\"container\">\n" +
    "\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div class=\"col-md-7\" style=\"padding:16px\">\n" +
    "                <h3>{{task.title}} | <a href=\"project/{{task.project.urlTitle}}\">{{task.project.title}}</a></h3>\n" +
    "                <div style=\"font-style:italic;color:gray\">\n" +
    "                    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(task.content)\"></span></p>\n" +
    "                </div>\n" +
    "\n" +
    "                <br>\n" +
    "                <br>\n" +
    "                <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item, 'plus')\">+</button>\n" +
    "                <button style=\"width:10%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyTask(item, 'minus')\">-</button>\n" +
    "\n" +
    "                 <div ng-repeat=\"verification in taskVerification\">\n" +
    "                    <a href=\"member/{{verification.user.username}}\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{verification.user.username}}\n" +
    "                    </a> | {{verification.score}}\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-5\" style=\"padding:16px;font-style:italic;color:gray\">\n" +
    "                <span style=\"color:gray\">Filter</span>\n" +
    "                <h4>{{task.verificationScore}} | General | Task Verification Score </h4>\n" +
    "                <!--relevant dimensions-->\n" +
    "                <p ng-repeat=\"tag in task.tags.split(',')\">0 | <a href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{task.id}}</a></p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "               \n" +
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
    "                <div style=\"font-style:italic;color:gray\">\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "                    <div>\n" +
    "                        <a ng-repeat=\"token in tokens\" href=\"market/{{token}}\">{{token}}, </a>\n" +
    "                    </div>\n" +
    "                    <!--<p><a href=\"market/{{task.id}}+onTime\">onTime+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onTimeStream\">onTimeStream+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onCompletion\">onCompletion+{{task.id}}</a></p>\n" +
    "                    <p><a href=\"market/{{task.id}}+onVerification\">onVerification+{{task.id}}</a></p>\n" +
    "                    <p><a ng-repeat=\"tag in task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{task.id}} </a></p>\n" +
    "                    <p><a href=\"market/{{task.project.urlTitle}}\">{{task.project.title}} (+{{task.project.id}})</a></p>\n" +
    "                    <p><a href=\"market/general\">general</a></p>-->\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--MARKET LINKS TO TOKEN LIQUIDITY RE ORDER ON BOOK FOR TASK TOKENS-->\n" +
    "                <!--<div class=\"col-md-6\" style=\"font-style:italic;color:gray\">\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <h4>Token Liquidity</h4>\n" +
    "                    <p>1 <a href=\"market/onTime+{{task.id}}\">onTime+{{task.id}}</a> / {{task.timeBountySet}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/onTime+{{task.id}}/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onTimeStream+{{task.id}}\">onTimeStream+{{task.id}}</a> / {{task.timeBountySet*1.4}} <a href=\"market/{{task.timeIdentifierSet}}\">{{task.timeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onTimeStream/{{task.timeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onCompletion+{{task.id}}\">onCompletion+{{task.id}}</a> / {{task.completeBountySet}} <a href=\"market/{{task.completeIdentifierSet}}\">{{task.completeIdentifierSet}}</a> / <a href=\"market/{{task.id}}+onCompletion/{{task.completeIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <p>1 <a href=\"market/onVerification+{{task.id}}\">onVerification+{{task.id}}</a> / {{task.verificationBountySet}} <a href=\"market/{{task.verificationIdentifierSet}}\">{{task.verificationIdentifierSet}}</a> / <a href=\"market/onVerification+{{task.id}}/{{task.verificationIdentifierSet}}\">MARKET</a></p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                </div>-->\n" +
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
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "<div class=\"container\">\n" +
    "    <div class=\"card\">\n" +
    "        <form style=\"display:flex;flex-direction:row;\">\n" +
    "            <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder= \"Seach | Filter\" ng-model=\"searchQuery\" ng-submit=\"keyPress(searchQuery)\">\n" +
    "            <div style=\"border:0px\" class=\"btn btn-default dropdown sort-dropdown noselect\" style=\"float:right\">\n" +
    "                <a href=\"#\" class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                    <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                </a>\n" +
    "            </div>\n" +
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
    "            <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
    "			<p>transparent contrubition, equatable representation</p>		\n" +
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
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<h3>Peer Network</h3>\n" +
    "			<p>13793 Peers on the CRE8 NETWORK</p>\n" +
    "			<p>1232 Txs a Second</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("work/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("work/index.tpl.html",
    "<div style=\"background:black\" ng-show=\"work.stream\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "    <div style=\"text-align:center\">\n" +
    "		<span style=\"display:inline\" ng-bind-html=\"renderContent(work.stream.content)\"></span>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "\n" +
    "			<div style=\"padding:16px\" class=\"col-md-6\">\n" +
    "				<h3><a href=\"task/{{work.task.id}}\">{{work.task.title}}</a> | {{work.amount}}</h3>\n" +
    "				<p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}\">{{tag.trim()}} </a></p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(work.content)\"></span></p>\n" +
    "				<p style=\"color:gray\" am-time-ago=\"work.createdAt\"></p>\n" +
    "				<a style=\"font-weight:700\" href=\"member/{{work.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "					{{work.user.username}}\n" +
    "				</a>\n" +
    "				<br>\n" +
    "				<br>		\n" +
    "				<button style=\"width:20%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'plus')\">+</button>\n" +
    "		        <button style=\"width:20%;\" class=\"btn btn-default log-btn\" ng-click=\"verifyWork(item, 'minus')\">-</button>\n" +
    "		        <div ng-repeat=\"verification in workVerification\">\n" +
    "		            <a href=\"member/{{verification.user.username}}\">\n" +
    "		                <img class=\"card-avatar\" ng-src=\"{{verification.user.avatarUrl}}\" src=\"{{verification.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		                {{verification.user.username}}\n" +
    "		            </a> | {{verification.score}}\n" +
    "					<div class=\"spacing-10\"></div>\n" +
    "		        </div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "			<div style=\"padding:16px\" class=\"col-md-4\">\n" +
    "\n" +
    "				<!--TODO: GRAULAR VERIFICATION | SCALE 0-1 (INFINITE DECIMAL)-->\n" +
    "				<!--TODO: DIMENSIONALITY-->\n" +
    "				<span style=\"color:gray\">Filter</span>\n" +
    "				<h4>{{work.verificationScore}} | General | Work Verification Score </h4>\n" +
    "				<!--relevant dimensions-->\n" +
    "				<p ng-repeat=\"tag in work.task.tags.split(',')\">0 | <a href=\"market/{{tag.trim()}}+{{work.task.id}}\">{{tag.trim()}}+{{work.task.id}}</a></p>\n" +
    "		        <div class=\"spacing-10\"></div>\n" +
    "		 \n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<!--TODO: TOKEN CLARITY-->\n" +
    "				<!--TODO: COLLAPSE UI-->\n" +
    "				<!--VERIFICATION BASED TOKEN LIQUIDITY | TAGS, DIMENSIONAL VERIFICATION-->\n" +
    "				<h4><a href=\"#\">Tokens <i class=\"fa fa-question-circle\"></i></a></h4>\n" +
    "				<div>\n" +
    "                    <a ng-repeat=\"token in tokens\" href=\"market/{{token}}\">{{token}}, </a>\n" +
    "				</div>\n" +
    "\n" +
    "\n" +
    "				<!--<p><a href=\"market/{{work.id}}+onTime\">onTime+{{work.id}}</a></p>\n" +
    "				<p><a href=\"market/{{work.id}}+onTimeStream\">onTimeStream+{{work.id}}</a></p>-->\n" +
    "				<!--work.id tokens are given 'bridge' liquidity to work.task.id tokens as verification | you get work.task.id tokens on verification | minting is based on verification protocol-->\n" +
    "				<!--does verification give liquidity to work.id tokens?--> <!--verification as staking?-->\n" +
    "				<!--<p><a href=\"market/{{work.task.id}}+onTime\">onTime+{{work.task.id}}</a></p>\n" +
    "			    <p><a href=\"market/{{work.task.id}}+onTimeStream\">onTimeStream+{{work.task.id}}</a></p>\n" +
    "			    <p><a ng-repeat=\"tag in work.task.tags.split(',')\" href=\"market/{{tag.trim()}}+{{task.id}}\">{{tag.trim()}}+{{work.task.id}} </a></p>\n" +
    "			    <p><a href=\"market/general\">general</a></p>-->\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<!--TODO: REAL STREAM-->\n" +
    "	<!--<div class=\"row\" ng-show=\"work.stream\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "\n" +
    "				<div style=\"text-align:center;\"><div ng-bind-html=\"renderContent(work.stream.content)\"></div></div>\n" +
    "				<p><a style=\"font-weight:700\" href=\"member/{{work.user.username}}\">\n" +
    "					<img class=\"card-avatar\" ng-src=\"{{work.user.avatarUrl}}\" src=\"{{work.user.avatarUrl}}\">\n" +
    "					{{work.user.username}}\n" +
    "				</a> | <span am-time-ago=\"work.stream.createdAt\"></span></p>\n" +
    "\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a href=\"#\" ng-click=\"createReaction(work.stream, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{work.stream.plusCount}} like </a> \n" +
    "				<a href=\"#\" ng-click=\"createReaction(work.stream, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{work.stream.minusCount}} dislike </a>\n" +
    "				<a href=\"#\" ng-click=\"reply(work.stream)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "				<a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{work.stream.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>-->\n" +
    "\n" +
    "	<!--TODO: REAL STREAM-->\n" +
    "	<div class=\"row\" ng-show=\"!work.stream\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "		    	<h4>No Stream</h4>\n" +
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
    "					<div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(post.content)\"></span></div>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{post.plusCount}} like </a> \n" +
    "					<a href=\"#\" ng-click=\"createReaction(post, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{post.minusCount}} dislike </a>\n" +
    "					<a href=\"#\" ng-click=\"reply(post)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "					<a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{post.id}}\"><i class=\"fa fa-link grey\"></i></a>\n" +
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
