angular.module("templates-app", ["about/index.tpl.html", "account/index.tpl.html", "action/index.tpl.html", "app/index.tpl.html", "app/templates/associations.tpl.html", "app/templates/information.tpl.html", "app/templates/protocols.tpl.html", "apps/index.tpl.html", "association/index.tpl.html", "association/templates/content.tpl.html", "association/templates/information.tpl.html", "association/templates/tokens.tpl.html", "association/templates/validations.tpl.html", "attention/index.tpl.html", "block/index.tpl.html", "connection/index.tpl.html", "connection/templates/associations.tpl.html", "connection/templates/content.tpl.html", "connection/templates/information.tpl.html", "connection/templates/tokens.tpl.html", "content/index.tpl.html", "content/templates/associations.tpl.html", "content/templates/content.tpl.html", "content/templates/stats.tpl.html", "content/templates/tokens.tpl.html", "contentList/index.tpl.html", "developers/index.tpl.html", "discover/index.tpl.html", "event/index.tpl.html", "footer/index.tpl.html", "home/index.tpl.html", "home/templates/feed.tpl.html", "home/templates/intro.tpl.html", "item/index.tpl.html", "item/templates/actions.tpl.html", "item/templates/associations.tpl.html", "item/templates/components.tpl.html", "item/templates/history.tpl.html", "item/templates/market.tpl.html", "item/templates/tokens.tpl.html", "items/index.tpl.html", "login/index.tpl.html", "market/index.tpl.html", "market/templates/analysis.tpl.html", "market/templates/content.tpl.html", "market/templates/markets.tpl.html", "marketPair/index.tpl.html", "markets/index.tpl.html", "member/index.tpl.html", "member/templates/about.tpl.html", "member/templates/actions.tpl.html", "member/templates/activity.tpl.html", "member/templates/assets.tpl.html", "member/templates/associations.tpl.html", "member/templates/connections.tpl.html", "member/templates/content.tpl.html", "member/templates/followers.tpl.html", "member/templates/following.tpl.html", "member/templates/items.tpl.html", "member/templates/ledger.tpl.html", "member/templates/positions.tpl.html", "member/templates/projects.tpl.html", "member/templates/tasks.tpl.html", "member/templates/time.tpl.html", "member/templates/validations.tpl.html", "members/index.tpl.html", "nav/index.tpl.html", "nav/templates/cardDetail.tpl.html", "nav/templates/confirm.tpl.html", "nav/templates/create.tpl.html", "nav/templates/createAction.tpl.html", "nav/templates/createApp.tpl.html", "nav/templates/createConnection.tpl.html", "nav/templates/createContent.tpl.html", "nav/templates/createItem.tpl.html", "nav/templates/createOrder.tpl.html", "nav/templates/createProject.tpl.html", "nav/templates/createProtocol.tpl.html", "nav/templates/createTask.tpl.html", "nav/templates/createTime.tpl.html", "nav/templates/createTransaction.tpl.html", "nav/templates/createValidation.tpl.html", "nav/templates/filter.tpl.html", "nav/templates/information.tpl.html", "nav/templates/login.tpl.html", "nav/templates/market.tpl.html", "nav/templates/nav.tpl.html", "nav/templates/qr.tpl.html", "nav/templates/reaction.tpl.html", "nav/templates/register.tpl.html", "nav/templates/render.tpl.html", "nav/templates/renderAssociation.tpl.html", "nav/templates/renderAttention.tpl.html", "nav/templates/renderReputation.tpl.html", "nav/templates/share.tpl.html", "nav/templates/sort.tpl.html", "nav/templates/stats.tpl.html", "nav/templates/subNav.tpl.html", "nav/templates/timer.tpl.html", "nav/templates/tokens.tpl.html", "notifications/index.tpl.html", "notifications/templates/follow.tpl.html", "notifications/templates/reaction.tpl.html", "notifications/templates/transaction.tpl.html", "notifications/templates/validation.tpl.html", "order/index.tpl.html", "order/templates/content.tpl.html", "order/templates/information.tpl.html", "order/templates/liquidity.tpl.html", "order/templates/orders.tpl.html", "order/templates/transactions.tpl.html", "project/index.tpl.html", "project/templates/about.tpl.html", "project/templates/activity.tpl.html", "project/templates/assets.tpl.html", "project/templates/channels.tpl.html", "project/templates/charter.tpl.html", "project/templates/content.tpl.html", "project/templates/items.tpl.html", "project/templates/ledger.tpl.html", "project/templates/members.tpl.html", "project/templates/positions.tpl.html", "project/templates/projects.tpl.html", "project/templates/settings.tpl.html", "project/templates/tasks.tpl.html", "project/templates/time.tpl.html", "project/templates/validations.tpl.html", "projects/index.tpl.html", "protocol/index.tpl.html", "protocols/index.tpl.html", "reaction/index.tpl.html", "register/index.tpl.html", "search/index.tpl.html", "task/index.tpl.html", "task/templates/associations.tpl.html", "task/templates/content.tpl.html", "task/templates/stats.tpl.html", "task/templates/time.tpl.html", "task/templates/tokens.tpl.html", "tasks/index.tpl.html", "templates/cards/actionCard.tpl.html", "templates/cards/appCard.tpl.html", "templates/cards/attentionCard.tpl.html", "templates/cards/connectionCard.tpl.html", "templates/cards/contentCard.tpl.html", "templates/cards/itemCard.tpl.html", "templates/cards/memberCard.tpl.html", "templates/cards/orderCard.tpl.html", "templates/cards/projectCard.tpl.html", "templates/cards/taskCard.tpl.html", "templates/cards/timeCard.tpl.html", "templates/cards/timeCardLarge.tpl.html", "templates/cards/transactionCard.tpl.html", "templates/cards/validationCard.tpl.html", "time/index.tpl.html", "time/templates/associations.tpl.html", "time/templates/tokens.tpl.html", "token/index.tpl.html", "transaction/index.tpl.html", "transaction/templates/associations.tpl.html", "transaction/templates/content.tpl.html", "transaction/templates/stats.tpl.html", "transaction/templates/time.tpl.html", "transaction/templates/tokens.tpl.html", "transparency/index.tpl.html", "tutorial/index.tpl.html", "tutorial/templates/controls.tpl.html", "tutorial/templates/create.tpl.html", "tutorial/templates/intro.tpl.html", "tutorial/templates/memberApps.tpl.html", "tutorial/templates/memberInformation.tpl.html", "tutorial/templates/members.tpl.html", "tutorial/templates/projects.tpl.html", "tutorial/templates/tasks.tpl.html", "tutorial/templates/valueMap.tpl.html", "tutorial/templates/valueMapBuilder.tpl.html", "tutorial/templates/valueMapOrders.tpl.html", "tutorial/templates/valueMapQuestions.tpl.html", "tutorial/templates/valueMapUpdate.tpl.html", "validation/index.tpl.html", "validation/templates/content.tpl.html", "validation/templates/information.tpl.html", "validation/templates/tokens.tpl.html", "validation/templates/validations.tpl.html"]);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">CREATING VALUE\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"{{selectedVideo}}\" preload=\"auto\"autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline></video>\n" +
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
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-sm-9\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry,nature,pattern,creative,paint,aztec')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 class=\"imageContainerSmallDivH1\">SHARED VALUE WE CRE8 TOGETHER</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Share with us and create value.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Creation never stops. Watch the World Create.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\"><a href=\"/discover\" ui-sref=\"discover\"><b>Explore</b></a> the diversity of the network.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-3\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry,community,code')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 class=\"imageContainerSmallDivH1\" style=\"font-size:35px;\">CREATING INTENTIONAL COMMUNITY</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Coordinating around all goals, together we create a shared reality. Organized though intentionality that is context specific, participants create reputation and earn value though the interaction with decentralized protocols.</p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<p><a href=\"/members\" ui-sref=\"members\"><b>Members</b></a></p>\n" +
    "				<p><a href=\"/projects\" ui-sref=\"projects\"><b>Projects</b></a></p>\n" +
    "				<p><a href=\"/tasks\" ui-sref=\"tasks\"><b>Tasks</b></a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-9\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry,god,meditate,buddha,zen,tao')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 class=\"imageContainerSmallDivH1\">A SHARED WORLD</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">From time and space to digital and physical items, sharing networks reflect our commitment to one another.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">CRE8 promulgates sharing culture.</p>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p><a href=\"/items\" ui-sref=\"items\"><b>Marketplace</b></a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-3\">\n" +
    "				<div style=\"text-align:center;min-height:200px;background-color:black;position: relative;\">\n" +
    "					<img style=\"max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;\" src=\"images/hypercube.gif\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-12\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry,god,meditate,buddha,zen,tao')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 class=\"imageContainerSmallDivH1\">SHARED VALUE RELATIONSHIPS</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p><a href=\"/market\"><b>MULTIDIMENSIONAL MARKET</b></a></p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "\n" +
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
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Live Streaming & Complete Inclusivity create more connected paradigms.</p>\n" +
    "						<p style=\"font-style:italic;color:gray;margin:0px\">Transparency through Sharing Creates Abundance.</p>\n" +
    "					</div>\n" +
    "					<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uB4rItpM6k0\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-100\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"color:white;background-color:black;\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?goverment,congress,senate,united nations')\" class=\"imageContainerSmall\">\n" +
    "	    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "	        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			    <div class=\"container\">\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-md-12\">\n" +
    "							<h2>Collaborative Governance</h2>\n" +
    "							<h4 style=\"color:#a8a8a8;font-style:italic;margin:0px\">Context Specific Reputation Protocols give us a fair shot at accountable representation.</h4>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?collaborative,goverment,governance,congress,senate,coordination')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h2 class=\"imageContainerSmallDivH1\" style=\"font-size:30px\">WE CRE8</h2>\n" +
    "                				<h4 style=\"color:#a8a8a8;font-style:italic;\">A mechanism of value from consensus upon the relation of shared value</h4>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<h5 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Interoperable Governance Mechanisms</h5>\n" +
    "\n" +
    "				<p>Projects, Governance Rules & Charters, Reputation, Logic Mappings, Ownership, Application Interoperability</p>\n" +
    "				<p>Attention Tokenization, Transferrable Content Rights</p>\n" +
    "\n" +
    "				<h5 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Group Coordination</h5>\n" +
    "				<h5 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Human Validated Proof of Work</h5>\n" +
    "				<p>Multi Dimensional Voting and a Logic mapping in a connection defined by a charter.</p>\n" +
    "				<p>Validations, Associations, and Connections</p>\n" +
    "				<h5 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Token Market Traversal</h5>\n" +
    "			</div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "                <img style=\"height:200px;\" src=\"images/dna.gif\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-6\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?collaborative,goverment,governance,congress,peers,computer,code,iphone,android,robot,cell,natural')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h2 class=\"imageContainerSmallDivH1\" style=\"font-size:30px\">The Peer Network</h2>\n" +
    "                                <h4 style=\"font-style:italic;color:gray;margin:0px\">Our Decentralized Infrastructure</h4>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<h5 style=\"color:#a8a8a8;font-style:italic;\"><a href=\"/transparency\" ui-sref=\"transparency\"><b>Transparency in action</b></a></h5>\n" +
    "				<p>Custom Peer Compilation</p>\n" +
    "				<p>Context Specific Machine Attention</p>\n" +
    "				<p>Application Ecosystem</p>\n" +
    "				<style type=\"text/css\">.angular-google-map-container{height:350px;}</style>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "				\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"color:white;background-color:black;\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?code,goverment,governance,information,data,database')\" class=\"imageContainerSmall\">\n" +
    "	    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "	        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			    <div class=\"container\">\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-md-12\">\n" +
    "							<h2>Information is Income</h2>\n" +
    "							<h4 style=\"font-style:italic;color:gray;margin:0px\">Turn shared information into value</h4>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12 col-sm-5\">\n" +
    "                <img style=\"border:3px solid black\" ng-src=\"images/app.gif\">\n" +
    "            </div>\n" +
    "			<div class=\"col-xs-12 col-sm-7\">\n" +
    "				<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\"><a style=\"color:black\" href=\"/apps\" ui-sref=\"apps\">The Application Ecosystem</a></h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">An infinite playground. Create protocols to act as plugins to the token-string space.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Apps are modular and fully interoperable. Comprised of protocol bundles, token applications create an immense and interconnected decision space.</p>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<h4 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Complete Tokenization</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">CRE8 facilitates progression towards complete cryptoeconomic tokenization.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Interoperable protocols allow <b>developer</b> creativity.</p> \n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<!--Mapping idendity to data to balance.-->\n" +
    "				<h4 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Beauty in Simplicity</h4>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">String information is mapped to an identity mapped to an integer. Data is imbued in a tokenization layer.</p>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				`Identity->Data->Balance`\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<div>\n" +
    "                	<div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "                		<a class=\"btn btn-default log-btn\" href=\"/apps\" ui-sref=\"apps\">Application Ecosystem</a>\n" +
    "                		<div class=\"spacing-5\"></div>\n" +
    "                	</div>\n" +
    "					<div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "						<a class=\"btn btn-default log-btn\" href=\"/developers\" ui-sref=\"developers\">Developer Documentation</a>\n" +
    "						<div class=\"spacing-5\"></div>\n" +
    "					</div>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"color:white;background-color:black;\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?code,goverment,governance,information,data,database,exchange,finance')\" class=\"imageContainerSmall\">\n" +
    "	    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "	        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			    <div class=\"container\">\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "					<div class=\"row\">\n" +
    "						<div class=\"col-md-8\">\n" +
    "							<h2><a style=\"color:white;margin:0px\" href=\"/market\" ui-sref=\"markets\">Multidimensional Value Exchange</a></h2>\n" +
    "							<h4 style=\"font-style:italic;color:gray;margin:0px\">The Moment of Liquidity is Combinatorial.</h4>\n" +
    "						</div>\n" +
    "						<div class=\"col-md-4\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"spacing-50\"></div>\n" +
    "				</div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-8\">\n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "				<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Create Value Relationships</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">A powerful approach for defining and stating interrelated value.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create multidimensional value intention though creating positions in the market.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">True value intent is measured in its promulgating effects. All actions have value<!--mani-->.</p>\n" +
    "			</div>\n" +
    "            <div class=\"col-md-4 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "		</div>\n" +
    "		<div class=\"row\">\n" +
    "            <div class=\"col-md-8\">\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Your Dimensional Vote</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Create relationships in the <a href=\"/market\" ui-sref=\"markets\"><b>Multidimensional Token Market</b></a>.</p> \n" +
    "				<div class=\"spacing-50\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"col-md-4\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"background-color:white\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12 col-sm-9 col-md-7\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h2 class=\"imageContainerSmallDivH1\">Value Mapping</h2>\n" +
    "                                <h4 style=\"font-style:italic;color:gray;margin:0px\">Your Dimensional Vote</h4>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "				<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">It starts with you.</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">It is our responsibility to create an awakening of depth in collective value.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Our value mechanism is sourced though creating! Stating our beliefs in one another creates direct and interconnected empowerment. Value relationships are encoded as discrete positions on the market.</p>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">An empowering call to action.</h3>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px;\">Create Empowerment by clearly and distinctly elucidating your value map.</p>\n" +
    "				<p style=\"font-style:italic;color:gray;margin:0px\">Register to vote, map your value, and give rise to an emergent gestalt.</p>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-sm-3 col-md-5\" style=\"text-align:center\">\n" +
    "				<img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"spacing-50\"></div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
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
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\">\n" +
    "		    <div style=\"background:url('https://source.unsplash.com/1600x900/?settings')\" class=\"imageContainerSmall\">\n" +
    "		        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "		            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "		                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "		                    <i class=\"fas fa-globe\"></i>\n" +
    "		                </a>\n" +
    "		            </div> \n" +
    "		            <div style=\"margin-top: auto;margin-bottom: auto;padding:15px\">\n" +
    "		                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Account Settings</h1>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "	\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<div class=\"col-sm-4 col-xs-12\" style=\"padding-right:5px;padding-left:10px\">\n" +
    "			<div class=\"member-card\">\n" +
    "			    <div ng-click=\"editAccountToggle()\" class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "			        <a href=\"#\">\n" +
    "			        	<img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "			        </a>\n" +
    "			    </div>\n" +
    "			    \n" +
    "			    <!--\n" +
    "			    <a ng-click=\"editAccountToggle()\" href=\"#\" style=\"float:right;padding-right:5px;\">\n" +
    "		        	<p><i class=\"fa fa-upload\"></i></p>\n" +
    "				</a>\n" +
    "				-->\n" +
    "\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "			    <div class=\"member-card-info\" style=\"height:auto;\">\n" +
    "			        <h4><a href=\"member/{{currentUser.username}}\" ui-sref=\"member.activity({path:currentUser.username})\">{{currentUser.username}}</a></h4>\n" +
    "                   	\n" +
    "                   	<p style=\"font-size:8px;\" ng-click=\"$event.stopPropagation();memberQRToggle(currentUser);\"><a style=\"color:gray\"><i class=\"fas fa-qrcode\"></i> {{currentUser.id}}</a></p>\n" +
    "                    <p style=\"font-size:11px\">\n" +
    "                    	<a href=\"/member/{{currentUser.username}}/projects\" ui-sref=\"member.projects({path:currentUser.username})\">{{currentUser.projectCount || 0}} Projects</a> | \n" +
    "                    	<a href=\"/member/{{currentUser.username}}/followers\" ui-sref=\"member.followers({path:currentUser.username})\">{{currentUser.followerCount || 0}} Followers</a> | \n" +
    "                    	<a href=\"/member/{{currentUser.username}}/following\" ui-sref=\"member.following({path:currentUser.username})\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "                    </p>\n" +
    "                    <p style=\"font-size:11px\" style=\"color:gray\">\n" +
    "			        	<a href=\"#\" ng-click=\"renderReputationToggle(currentUser)\">{{currentUser.totalWork}} Reputation</a>\n" +
    "			        </p>\n" +
    "                   	<div class=\"spacing-5\"></div>\n" +
    "			        <p style=\"color:gray\"> <i style=\"color:#30b257\" class=\"fa fa-circle\"></i> {{currentUser.status}} Editing Account</p>\n" +
    "			        \n" +
    "			    </div>\n" +
    "\n" +
    "			    <!--\n" +
    "			    <div class=\"member-card-social\">\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "			        <a ng-show=\"true\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\"  target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "			    </div>\n" +
    "				-->\n" +
    "\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"col-sm-8 col-xs-12\" style=\"padding-left:5px;padding-right:0px\">\n" +
    "	        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"editAccountToggle()\">Edit Account</a></li>\n" +
    "	            <div style=\"clear:both\"></div>\n" +
    "	        </ul>\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "					<div style=\"float:right\"><img style=\"height:50px;text-align:left;margin-top:-5px\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{currentUser.id}}\"></div>\n" +
    "					<h4>{{currentUser.firstName}} {{currentUser.lastName}}</h4>\n" +
    "					<p>{{currentUser.email}}</p>\n" +
    "\n" +
    "					<!--\n" +
    "					<a ng-click=\"memberQRToggle(currentUser)\" href=\"#\">\n" +
    "						<span style=\"font-size:11px;color:gray\"><i class=\"fas fa-qrcode\"></i> {{currentUser.id}}</span>\n" +
    "					</a>\n" +
    "					-->\n" +
    "\n" +
    "					<!--\n" +
    "					<p>dob: {{currentUser.dateOfBirth | date :  \"MM-dd-y\"}}</p>\n" +
    "					<p>join:{{currentUser.createdAt | date :  \"MM-dd-y\"}}</p>\n" +
    "					<p>{{currentUser.email}}</p>\n" +
    "					-->\n" +
    "\n" +
    "					<p style=\"color:gray;font-size:12px;\"><a href=\"#\">Goverment ID</a> | <a href=\"#\">Social Accounts</a> | <a href=\"#\">BioMetric Data</a></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"editAccountToggleVar\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry,information,passport')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "		                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-passport\"></i></a>\n" +
    "		            </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Information</h1>\n" +
    "				            <h5 style=\"color:white\">{{currentUser.id}}</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		    <div style=\"padding:16px;\">\n" +
    "				<form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Avatar Url</h5><input type=\"text\" ng-model=\"newAccountInformation.avatarUrl\" placeholder=\"Avatar Url\" class=\"form-control\"></div>\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Cover Url</h5><input type=\"text\" ng-model=\"newAccountInformation.coverUrl\" placeholder=\"Cover Url\" class=\"form-control\"></div>\n" +
    "                  	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Username</h5><input type=\"text\" ng-model=\"newAccountInformation.username\" placeholder=\"Username\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Email</h5><input type=\"text\" ng-model=\"newAccountInformation.email\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
    "                	<div style=\"padding:0px\" class=\"col-xs-6\"><h5>Phone Number</h5><input type=\"text\" ng-model=\"newAccountInformation.phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\"></div>\n" +
    "					<div style=\"padding:0px\" class=\"col-xs-4\"><h5>First Name</h5><input type=\"text\" ng-model=\"newAccountInformation.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "					<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Last Name</h5><input type=\"text\" ng-model=\"newAccountInformation.lastName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                   	<div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-model=\"newAccountInformation.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-12\"><h5>Description</h5><text-angular ng-model=\"newAccountInformation.description\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular></div>\n" +
    "					<button type=\"submit\" class=\"btn btn-default log-btn\">Save</button>\n" +
    "	                <div style=\"clear:both\"></div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('APPS')\">Apps <i class=\"fas fa-universal-access\"></i></a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('HISTORY')\">History <i class=\"fas fa-history\"></i></a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"selectTab('MINING')\">Mining <i class=\"fas fa-seedling\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"selectedTab=='APPS'\">\n" +
    "		\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?applications,programming,idea')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Connected Applications</h1>\n" +
    "				            <h5 style=\"color:white\">Applications in the CRE8 ecosystem</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fas fa-passport\"></i> Passports & Wallets</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a ng-click=\"sortToggle()\" href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-repeat=\"app in apps\">\n" +
    "	        <div class=\"card\" ng-click=\"cardDetailToggle(app)\">\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?attention,intention,code');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "				    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "	                        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "	                    </div>\n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "				        	<div style=\"padding:15px\">\n" +
    "					            <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;font-weight:400;\"><a style=\"color:rgba(255,255,255,0.9);\" href=\"app/{{app.id}}\" ui-sref=\"app({id:app.id})\">{{app.title}}</a></h1>\n" +
    "					            <h5 style=\"color:white\">CRE8</h5>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div style=\"padding:16px;min-height:100px;max-height:100px\">\n" +
    "                    <p><span style=\"display:inline\" ng-bind-html=\"renderContent(app.description)\"></span></p>\n" +
    "					<div ng-click=\"$event.stopPropagation();\"><md-switch ng-change=\"editAccount()\" ng-model=\"app.information.isActive\"></md-switch></div>\n" +
    "				</div>\n" +
    "        	</div> \n" +
    "        </div> \n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"selectedTab=='HISTORY'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?history,code,logs')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "		                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "		                    <i class=\"fas fa-history\"></i>\n" +
    "		                </a>\n" +
    "		            </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Account History</h1>\n" +
    "				            <h5 style=\"color:white\">Logs of all your account's actions on the CRE8 network with detailed information.</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	    <div ng-repeat=\"item in humanAttention\"><div ng-include=\"'templates/cards/attentionCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "\n" +
    "  	<div class=\"row\" ng-show=\"selectedTab=='MINING'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?geometry,network,data')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "		                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "		                    <i class=\"fas fa-seedling\"></i>\n" +
    "		                </a>\n" +
    "		            </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer Network Contribution</h1>\n" +
    "				            <h5 style=\"color:white\">Mining & Machine Attention</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<p>\n" +
    "					Client Mining <a ng-click=\"informationToggle()\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a>\n" +
    "					<br>\n" +
    "					<span style=\"font-size:10px\">Runs a CRE8 node that powers the network. Machine attention is tokenized.</span><md-switch ng-model=\"browserMining\" aria-label=\"Browser Mining\"></md-switch>\n" +
    "				</p>\n" +
    "				<p ng-if=\"browerMining\">\n" +
    "					<h5>Peer Model</h5>\n" +
    "					{{peer}}\n" +
    "				</p>\n" +
    "			</div>\n" +
    "	    </div>\n" +
    "	    <div ng-repeat=\"item in machineAttention\"><div ng-include=\"'templates/cards/attentionCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("action/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("action/index.tpl.html",
    "<style>pre{padding:0px;background-color:#282c34;border:0px;padding-bottom:15px;margin:0px;border-radius:0px;}</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?{{app.tags}}')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Action</h1>\n" +
    "                <h5 style=\"color:white\">{{action.id}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                 <div>\n" +
    "                    <a ng-click=\"$event.stopPropagation();\" style=\"display:inline\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{action.user.avatarUrl}}\" src=\"{{action.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        <span style=\"font-weight:800\">{{action.user.username}}</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p>{{action.type}} | {{action.amount}} | <a href=\"#\">{{action.associatedModels[0].id}}</a></p>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{action.data.apps.attention.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(action, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{action.data.apps.reactions.plus || 0}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(action, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{action.data.apps.reactions.minus|| 0}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();reply(action)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a><p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"action.createdAt\"></p></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("app/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/index.tpl.html",
    "<style>pre{padding:0px;background-color:#282c34;border:0px;padding-bottom:15px;margin:0px;border-radius:0px;}</style>\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(app)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{app.tags}}');\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(app)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{app.title}}</h1>\n" +
    "                        <h5 style=\"color:white\">{{app.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS')\">Protocols</a></li>\n" +
    "                        <li ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\"><a>Associations</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr style=\"margin:0px;\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div ng-if=\"selectedTab =='INFORMATION'\" ng-include=\"'app/templates/information.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();renderAttentionToggle(app)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{app.data.apps.attention.general || 0}}</a>\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(app, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{app.data.apps.reactions.plus || 0}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(app, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{app.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();contentToggle(app)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();validationToggle(app)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"selectedTab =='PROTOCOLS'\" ng-include=\"'app/templates/protocols.tpl.html'\"></div>\n" +
    "    <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'app/templates/associations.tpl.html'\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?{{app.tags}}')\" class=\"imageContainerSmall\" ng-if=\"false\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{app.title}}</h1>\n" +
    "                <h5 style=\"color:white\">{{app.id}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\" ng-if=\"false\">\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\"><a>Information</a></li>\n" +
    "        <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS')\"><a>Protocols</a></li>\n" +
    "        <li ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\"><a>Associations</a></li>\n" +
    "        <!--STATS; TOKENS-->\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"$event.stopPropagation();cardDetailToggle(app);\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div style=\"float:right;text-align:right\">\n" +
    "                    <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(app);\" class=\"fa fa-chevron-down\"></i>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-show=\"selectedTab=='INFORMATION'\">\n" +
    "\n" +
    "                    <!--\n" +
    "                    <h5>Asset Manifold</h5>\n" +
    "                    <a href=\"market/{{app.manifold}}\" ui-sref=\"market({id:app.manifold})\"></a>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    -->\n" +
    "\n" +
    "                    <h5>Context</h5>\n" +
    "                    <p><a ng-repeat=\"tag in app.tags.split(',') track by $index\" ng-click=\"$event.stopPropagation();\">{{tag}} </a></p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <div><span style=\"display:inline\" ng-bind-html=\"renderContent(app.description)\"></span></div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <div ng-if=\"currentUser\" ng-click=\"$event.stopPropagation();\">\n" +
    "                        <p><b>Enable</b></p>\n" +
    "                        <p>\n" +
    "                        <md-switch ng-click=\"associateApp(app)\" ng-model=\"app.isAssociated\" aria-label=\"isAssociated\"></md-switch>\n" +
    "                        <p>Custom Data Parameters and Configuration</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-show=\"selectedTab=='PROTOCOLS'\">\n" +
    "                    <!--CODE.. FRONTEND TEMPLATING.. && BACKEND-->\n" +
    "                    <!--INHERITANCE; VERB APPS REQUIRE ITEMS ETC-->\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS-UI')\"><a>UI Extensions</a></li>\n" +
    "                        <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS-PROTOCOLS')\"><a>Protocols</a></li>\n" +
    "                    </ul>\n" +
    "                    <div hljs hljs-language=\"javascript\" hljs-source=\"app.protocols\"></div>\n" +
    "                    <!--UI EXTENSIONS-->\n" +
    "                    <!--OWN LANGUAGE TO COMPILE TO AGNOSTIC FRONTEND JS.. NATIVE APP?? .. GOTTA-->\n" +
    "                    <!--WRAPPERS TO WRITE TO REACT ETC-->\n" +
    "                    <!--PROTOCOLS.. VIEWS.. (REACT ELEMETS RENDERED FROM CHAIN)-->\n" +
    "                    <!--GLOBAL ELEMENTS.. NAV.. MEMBER NAV (ADDITIONAL TABS..).. PROJECT PLUGIN..-->\n" +
    "                    <!--GITHUB INPUT-->\n" +
    "                    <!--\n" +
    "                    JS(ON) Classes\n" +
    "                    {\n" +
    "                        string:\"New Contract\",\n" +
    "                        onCall:function(){\n" +
    "\n" +
    "                        },\n" +
    "                        onMyAction:function(){\n" +
    "\n" +
    "                        },\n" +
    "                        @decorators\n" +
    "                        @isProjectMember\n" +
    "                        identityFunction:function(){\n" +
    "\n" +
    "                        }\n" +
    "                    }\n" +
    "                    -->\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-show=\"selectedTab=='ASSOCIATIONS'\">\n" +
    "                    <h4>Members</h4>\n" +
    "                    <p>MEMBER-APP Association</p>\n" +
    "                    <p>Live peers mining in this context</p>\n" +
    "\n" +
    "                    <h5>Attention, Content, Reactions</h5>\n" +
    "                    <p>Implicit App-App by dependencies in shared code</p>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{app.data.apps.attention.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(app, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{app.data.apps.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(app, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{app.data.apps.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();contentToggle(app)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("app/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/templates/associations.tpl.html",
    "<div ng-if=\"app.associationModels.length>0\">\n" +
    "\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "        <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"card\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('MEMBERS')\"><a href=\"#\">Members / Peers</a></li>\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('ATTENTION')\"><a href=\"#\">Attention</a></li>\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('CONTENT')\"><a href=\"#\">Content</a></li>\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('REACTIONS')\"><a href=\"#\">Reactions</a></li>\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('APPS')\"><a href=\"#\">Apps</a></li>\n" +
    "                <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS')\"><a href=\"#\">Protocols</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div clas=\"spacing-10\"></div>\n" +
    "            \n" +
    "            <h4>Members / Peers</h4>\n" +
    "            <p>Members / Peers valuing data in this application context</p>\n" +
    "            <h4>Attention</h4>\n" +
    "            <p>Associated Attention</p>\n" +
    "            <h4>Content</h4>\n" +
    "            <p>Associated Content</p>\n" +
    "            <h4>Reactions</h4>\n" +
    "            <p>Associated Reactions</p>\n" +
    "            <h4>Apps</h4>\n" +
    "            <p>Implicit App-App by dependencies in shared code</p>\n" +
    "            <h4>Protocols</h4>\n" +
    "            <p>Associated Protocls</p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\" ng-repeat=\"item in app.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "        	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "    	<span ng-repeat=\"model in item.associatedModels\"><a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, </span>\n" +
    "    	<div class=\"spacing-5\"></div>\n" +
    "    	<a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a>\n" +
    "    	<span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "		<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("app/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/templates/information.tpl.html",
    "<h5>Context</h5>\n" +
    "<p><a ng-repeat=\"tag in app.tags.split(',') track by $index\" ng-click=\"$event.stopPropagation();\">{{tag}} </a></p>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div><span style=\"display:inline\" ng-bind-html=\"renderContent(app.description)\"></span></div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div ng-if=\"currentUser\" ng-click=\"$event.stopPropagation();\">\n" +
    "    <p><b>Enable</b></p>\n" +
    "    <p>\n" +
    "    <md-switch ng-click=\"associateApp(app)\" ng-model=\"app.isAssociated\" aria-label=\"isAssociated\"></md-switch>\n" +
    "    <p>Custom Data Parameters and Configuration</p>\n" +
    "</div>");
}]);

angular.module("app/templates/protocols.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("app/templates/protocols.tpl.html",
    "<div class=\"card\">\n" +
    "	<div style=\"padding:16px;\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS-UI')\"><a>UI Extensions</a></li>\n" +
    "		    <li ng-click=\"$event.stopPropagation();selectTab('PROTOCOLS-PROTOCOLS')\"><a>Protocols</a></li>\n" +
    "		</ul>\n" +
    "		<div hljs hljs-language=\"javascript\" hljs-source=\"app.protocols\"></div>\n" +
    "	</div>\n" +
    "</div>");
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
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://www.bidio.co/videos/energy.mp4\" preload=\"auto\" autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline></video>\n" +
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
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">APPS</h1>\n" +
    "                                <h5 style=\"color:white\">Apps and Token Protocols</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div style=\"padding:16px\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Apps are a set of modular protocols and plugins to an asset string space.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Application creation and collaboration is facilitated though <a href=\"/projects\" ui-sref=\"projects\"><b>projects</b></a>.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"/developers\" ui-sref=\"developers\"><b>Developer Documentation</b></a></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Help create value.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-5 col-sm-5\">\n" +
    "                <img style=\"border:3px solid black\" src=\"images/app.gif\">\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li ng-click=\"sortToggle()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\"><i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"appToggle()\">+ App</button></div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-sm-6\" ng-repeat=\"item in apps\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div ng-include=\"'templates/cards/appCard.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "    <div ng-if=\"false\" class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("association/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"cardDetailToggle(association)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "				    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "	                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(association)\">\n" +
    "	                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "	                    </a>\n" +
    "	                </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "			        	<div class=\"container\">\n" +
    "			            	<h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Association</h1>\n" +
    "			            	<h5 style=\"color:white\">{{association.id}}</h5>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"background-color:white\">\n" +
    "	            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "	                <div style=\"text-align:center\">\n" +
    "	                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('VALIDATIONS')\">Validations</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS')\">Tokens</a></li>\n" +
    "	                    </ul>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <hr style=\"margin:0px;\">\n" +
    "			<div style=\"padding:16px\"><div ng-if=\"selectedTab =='INFORMATION'\" ng-include=\"'association/templates/information.tpl.html'\"></div></div>\n" +
    "			<div class=\"card-footer\">\n" +
    "        		<a ng-click=\"$event.stopPropagation();renderAttentionToggle(association)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{association.data.apps.attention.general || 0}}</a>\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(association, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{association.data.apps.reactions.plus || 0}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(association, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{association.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "		       	<a ng-click=\"$event.stopPropagation();contentToggle(association)\" style=\"padding:5px;color:grey\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "			    <a ng-click=\"$event.stopPropagation();validationToggle(association)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		<div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'association/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'association/templates/tokens.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='VALIDATIONS'\" ng-include=\"'association/templates/validations.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("association/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/templates/content.tpl.html",
    "");
}]);

angular.module("association/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/templates/information.tpl.html",
    "<div>\n" +
    "    <!--<h4>Nodes</h4>-->\n" +
    "    <!--<h4>Associated Models</h4>-->\n" +
    "    <h4>Data</h4>\n" +
    "    <div ng-repeat=\"item in association.associatedModels\">\n" +
    "        <p>\n" +
    "            <b><a href=\"{{item.type.toLowerCase()}}/{{item.data.title || item.data.id}}\">{{item.data.title || item.data.id}}</a></b>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "\n" +
    "<div>\n" +
    "    <h4>Connection</h4>\n" +
    "    <!--<h4>Edge</h4>-->\n" +
    "    <b><a href=\"connection/self\" ui-sref=\"connection({id:connection.id})\">{{connection.title}}</a></b>\n" +
    "    <!--TEMPLATE..RENDER-->\n" +
    "    <p style=\"font-style:italic;color:gray\">{{connection.description}}</p>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <h5>Parameters</h5>\n" +
    "    <div hljs hljs-language=\"javascript\"  hljs-source=\"parameters\"></div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div>\n" +
    "    <h4>Association</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<!--GENERATED SUMMARY-->\n" +
    "<!--TREE OF VALIDATION-->\n" +
    "\n" +
    "<highchart config=\"associationColumn\"></highchart>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<p style=\"font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"association.createdAt\"></p>\n" +
    "");
}]);

angular.module("association/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in tokens\">\n" +
    "                    <td><a href=\"market/{{item.string}}\" ui-sref=\"market({id:item.string})\">{{item.string}}</a></td>\n" +
    "                    <td>{{item.amount}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("association/templates/validations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("association/templates/validations.tpl.html",
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in validations\" ng-click=\"cardDetailExpand(item)\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "        	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"validation/{{item.id}}\" ui-sref=\"validation({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "    	<span ng-repeat=\"model in item.associatedModels\"><a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, </span>\n" +
    "    	<div class=\"spacing-5\"></div>\n" +
    "    	<span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "		<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"validation/{{item.id}}\" ui-sref=\"validation({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("attention/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("attention/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "        	<div class=\"container\">\n" +
    "        		<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\"><i class=\"fas fa-eye\"></i></h1>\n" +
    "            	<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Attention</h1>\n" +
    "            	<h5 style=\"color:white\">{{attention.id}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"cardDetailToggle(attention)\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<h4>{{attention.string}}</h4>\n" +
    "				<h5>{{attention.app}}</h5>\n" +
    "				<p>{{attention.amount}}</p>\n" +
    "				<p>{{attention.data}}</p>\n" +
    "				<p>{{attention.associatedModels}}</p>\n" +
    "				<p>{{attention.createdAt}}</p>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "	            <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{attention.data.apps.attention.general || 0}}</a>\n" +
    "	            <a ng-click=\"$event.stopPropagation();createReaction(attention, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{attention.data.apps.reactions.plus}} like </a> \n" +
    "	            <a ng-click=\"$event.stopPropagation();createReaction(attention, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{attention.data.apps.reactions.minus}} dislike </a>\n" +
    "	            <a ng-click=\"$event.stopPropagation();contentToggle(attention)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("block/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Block</h1>\n" +
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
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Previous Block <a href=\"block/564365\" ui-sref=\"block({id:564365})\">564365</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Bits	172e6f88</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Size (bytes)	904469</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Version 536870912</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Nonce 1221514036</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\">Next Block <a href=\"block/564367\" ui-sref=\"block({id:564367})\">564367</a></p>\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "                    <a style=\"color:grey\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\">\n" +
    "                        <i class=\"fas fa-eye\"></i> {{item.attention.general || 0}}\n" +
    "                    </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                </div>\n" +
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
    "		                        <td><a href=\"tx/{{tx.id}}\" ui-sref=\"tx({id:tx.id})\">{{tx.id}}</a></td>\n" +
    "								<td>{{tx.data}}</td>\n" +
    "		                        <td><a href=\"tx/{{tx.id}}\" ui-sref=\"tx({id:tx.id})\">{{tx.id}}</a></td>\n" +
    "		                        <td><a href=\"tx/{{tx.id}}\" ui-sref=\"tx({id:tx.id})\">{{tx.id}}</a></td>\n" +
    "		                    </tr>\n" +
    "		                </tbody>\n" +
    "		            </table>\n" +
    "		        </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("connection/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"cardDetailToggle(connection)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "	                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(connection)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "	                </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "			            	<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{connection.info.title}}</h1>\n" +
    "			            	<h5 style=\"color:white\">Connection</h5>\n" +
    "			            	<h5 style=\"color:white\">{{connection.id}}</h5>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"background-color:white\">\n" +
    "	            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "	                <div style=\"text-align:center\">\n" +
    "	                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\">Associations</a></li>\n" +
    "	                    </ul>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <hr style=\"margin:0px;\">\n" +
    "			<div style=\"padding:16px\" ng-if=\"selectedTab =='INFORMATION'\">\n" +
    "				<h5>Description</h5>\n" +
    "        		<span style=\"display:inline\" ng-bind-html=\"renderContent(connection.info.description)\"></span>\n" +
    "				<h5>Associated Models</h5>\n" +
    "				<p>{{connection.dataModelAlpha}} - {{connection.dataModelBeta}}</p>\n" +
    "				<p>{{connection.information}}</p>\n" +
    "			</div>\n" +
    "			<div class=\"card-footer\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(connection)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{connection.data.apps.attention.general || 0}}</a>\n" +
    "		        <a ng-click=\"$event.stopPropagation();createReaction(connection, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{connection.data.apps.reactions.plus || 0}} like </a> \n" +
    "		        <a ng-click=\"$event.stopPropagation();createReaction(connection, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{connection.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "		        <a ng-click=\"$event.stopPropagation();contentToggle(connection)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "		        <a ng-click=\"$event.stopPropagation();validationToggle(connection)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "        <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'task/templates/associations.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'connection/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='STATS'\" ng-include=\"'connection/templates/stats.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'connection/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("connection/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"context in task.context\">{{context}}, </span>\n" +
    "                </div>\n" +
    "                <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in task.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in item.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("connection/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/templates/content.tpl.html",
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
    "            <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(content);\" class=\"fas fa-chevron-down\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline\" href=\"member/{{content.user.username}}\" ui-sref=\"member.activity({path:content.user.username})\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "        </div>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <div>\n" +
    "            <span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a style=\"color:grey\" href=\"content/{{content.id}}\" ui-sref=\"content({id:content.id})\" ng-click=\"tokensToggle(content)\"><i class=\"fas fa-eye\"></i> {{content.data.apps.attention.general || 0}}</a>\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{content.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{content.data.apps.reactions.minus|| 0}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"reply(content)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey;\" class=\"pull-right\" href=\"content/{{content.id}}\" ui-sref=\"content({id:content.id})\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"content.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createContent(content)\">\n" +
    "            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-include=\"'content/templates/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9;\" ng-show=\"content.showThread\">\n" +
    "    <div style=\"padding:16px;background-color:white;\">\n" +
    "        <i ng-click=\"toggleThread(content)\" class=\"fa fa-plus\"></i>\n" +
    "        <a style=\"display:inline;padding-left:5px\" href=\"member/{{content.user.username}}\" ui-sref=\"member.activity({path:content.user.username})\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\">{{content.reactions.plus-content.reactions.minus}}</p>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("connection/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/templates/information.tpl.html",
    "<div>\n" +
    "    <h5>Connection</h5>\n" +
    "    <b><a href=\"connection/self\" ui-sref=\"connection({id:connection.id})\">{{connection.title}}</a></b>\n" +
    "    <p>{{connection.description}}</p>\n" +
    "    <!--{{connection.context}}-->\n" +
    "    <!--ng-repeat-->\n" +
    "    <p>{{connection.modelAlpha}} - {{connection.modelBeta}}</p>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "    <h5>Connection Information</h5>\n" +
    "    <p>{{connection.information}}</p>\n" +
    "\n" +
    "    <!--\n" +
    "    {{connection.type}}\n" +
    "    {{connection.data}}\n" +
    "    -->\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<h5><b>Associated Models</b></h5>\n" +
    "<div ng-repeat=\"item in association.associatedModels\">\n" +
    "    <p>\n" +
    "        {{item.type}}\n" +
    "        <b><a href=\"{{item.type.toLowerCase()}}/{{item.data.title || item.data.id}}\">{{item.data.title || item.data.id}}</a></b>\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<!--SUMMARY OF CONTENT?-->\n" +
    "<!--GENERATED SUMMARY-->\n" +
    "<!--TREE OF VALIDATION-->\n" +
    "<!--\n" +
    "<table class=\"table table-striped table-hover\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>Context</th>\n" +
    "            <th>Score</th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"context in contextList track by $index\">\n" +
    "            <td>{{context[0]}}</td>\n" +
    "            <td>{{context[1]}}</td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "-->\n" +
    "\n" +
    "<highchart config=\"associationColumn\"></highchart>\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<p style=\"font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"association.createdAt\"></p>\n" +
    "");
}]);

angular.module("connection/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("connection/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in tokens\">\n" +
    "                    <td><a href=\"market/{{item.string}}\" ui-sref=\"market({id:item.string})\">{{item.string}}</a></td>\n" +
    "                    <td>{{item.amount}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("content/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/index.tpl.html",
    "<div ng-show=\"content.type=='video'\" style=\"background:black\">\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "    <div style=\"text-align:center\"><span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span></div>\n" +
    "	<div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "<div ng-show=\"content.type=='video'\" class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "    <div style=\"text-align:left\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "            <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS');\" >Associations</a></li>\n" +
    "            <li><a ng-click=\"$event.stopPropagation();selectTab('STATS')\">Stats</a></li>\n" +
    "            <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS');\">Tokens</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"content.type!='video'\" class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(content)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{content.tags}}');\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(content)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:30px\">\n" +
    "                            <span ng-if=\"content.title\">{{content.title}}</span>\n" +
    "                            <span ng-if=\"!content.title\">{{content.id}}</span>\n" +
    "                        </h1>\n" +
    "                        <h5 ng-if=\"content.contentModel\" ng-click=\"$event.stopPropagation();\"><a style=\"color:white\" href=\"content/{{content.contentModel}}\" ui-sref=\"content({id:content.contentModel})\">{{content.contentModel}}</a></h5>\n" +
    "                        <h5 ng-if=\"content.title\" style=\"color:white\">{{content.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS');\" >Associations</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('STATS')\">Stats</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS');\">Tokens</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div ng-if=\"selectedTab == 'CONTENT'\" class=\"row\">\n" +
    "		<div class=\"card\" style=\"background-color:#f9f9f9\">\n" +
    "\n" +
    "		    <div style=\"padding:16px;background-color:white\">\n" +
    "				<p ng-show=\"content.tags\"><a style=\"color:gray;\" ng-repeat=\"tag in content.tags.split(',')\">{{tag}} </a></p>\n" +
    "				<div>\n" +
    "					<a style=\"display:inline\" href=\"member/{{content.user.username}}\" ui-sref=\"member.activity({path:content.user.username})\">\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						<span style=\"font-weight:800\">{{content.user.username}}</span>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<div style=\"max-height:5000px;overflow:auto\" ng-show=\"content.type!='video'\">\n" +
    "					<span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "				</div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card-footer\" ng-click=\"\">\n" +
    "				<a style=\"color:grey\" ng-click=\"renderAttentionToggle(content)\"><i class=\"fas fa-eye\"></i> {{content.data.apps.attention.general || 0}}</a>\n" +
    "		        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{content.data.apps.reactions.plus || 0}} like </a> \n" +
    "		        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{content.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "                <a style=\"padding:5px;color:grey\" ng-click=\"reactionToggle(content)\"><i class=\"fas fa-plus\"></i> reaction </a>\n" +
    "		       	<a ng-click=\"contentToggle(content)\" style=\"padding:5px;color:grey\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();validationToggle(content)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div ng-if=\"selectedTab == 'CONTENT'\" class=\"row\">\n" +
    "        <ul ng-show=\"content.children.length > 0\" style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:right;font-size:14px\" ng-click=\"sortToggle()\"><a>Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "        </ul>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "        <div ng-include=\"'content/templates/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "        <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'content/templates/associations.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='STATS'\" ng-include=\"'content/templates/stats.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'content/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("content/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <!--ALL ASSOCIATIONS && SERLF-ASSOCIATIONS-&FILTER-->\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"(key,value) in content.context\">{{key}}: {{value}}, </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in content.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in item.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("content/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/templates/content.tpl.html",
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
    "            <i style=\"\" ng-click=\"$event.stopPropagation();cardDetailToggle(content);\" class=\"fas fa-chevron-down\"></i>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{content.user.avatarUrl}}\" src=\"{{content.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline\" href=\"member/{{content.user.username}}\" ui-sref=\"member.activity({path:content.user.username})\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "        </div>\n" +
    "\n" +
    "        <br>\n" +
    "\n" +
    "        <div>\n" +
    "            <span style=\"display:inline\" ng-bind-html=\"renderContent(content.content)\"></span>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a style=\"color:grey\" href=\"content/{{content.id}}\" ui-sref=\"content({id:content.id})\" ng-click=\"tokensToggle(content)\"><i class=\"fas fa-eye\"></i> {{content.data.apps.attention.general || 0}}</a>\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{content.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"createReaction(content, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{content.data.apps.reactions.minus|| 0}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" ng-click=\"reply(content)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey;\" class=\"pull-right\" href=\"content/{{content.id}}\" ui-sref=\"content({id:content.id})\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <!--TODO: NESTED -->\n" +
    "    <div ng-show=\"content.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createContent(content)\">\n" +
    "            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div ng-include=\"'content/templates/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"card\" style=\"margin:10px;background-color:#f9f9f9;\" ng-show=\"content.showThread\">\n" +
    "    <div style=\"padding:16px;background-color:white;\">\n" +
    "        <i ng-click=\"toggleThread(content)\" class=\"fa fa-plus\"></i>\n" +
    "        <a style=\"display:inline;padding-left:5px\" href=\"member/{{content.user.username}}\" ui-sref=\"member.activity({path:content.user.username})\"><span style=\"font-weight:800\">{{content.user.username}}</span></a>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\">{{content.reactions.plus-content.reactions.minus}}</p>\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"content.createdAt\"></p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("content/templates/stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/templates/stats.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"statsChart\"></highchart>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("content/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("content/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"tokenChart\"></highchart>\n" +
    "         <!--TODO MOBILE-->\n" +
    "         <!--UNIFITY TOKEN MODEL-->\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in sortableSet\">\n" +
    "                    <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                    <td>{{item[1]}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("contentList/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contentList/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\" style=\"text-align:center\">\n" +
    "                <h1>Content</h1>\n" +
    "                <h5 style=\"color:white\">{{contentCount}} {{selectedTag}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-4 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div ng-if=\"filterSet.associations.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div ng-repeat=\"association in filterSet.associations\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <a ng-click=\"filterContent(association.id)\"><b>{{association.title}}</b></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"filterSet.context.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create,content,creation');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div ng-repeat=\"context in filterSet.context\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <a ng-click=\"filterContent(context[0])\"><b>{{context[0]}}</b></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"filterSet.locations.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create,content,creation,map,globe');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div ng-repeat=\"location in filterSet.locations\" ng-click=\"$event.stopPropagation()\">\n" +
    "                        <a ng-click=\"filterContent(locations)\"><b>{{location}}</b></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-8\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "            <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Content</button></div>\n" +
    "            <div ng-repeat=\"item in contentList\"><div ng-include=\"'templates/cards/contentCard.tpl.html'\"></div></div>\n" +
    "            <div class=\"card\" ng-click=\"loadMore()\"><button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("developers/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("developers/index.tpl.html",
    "<style>\n" +
    "    body {overflow-x:hidden}\n" +
    "    pre{padding:0px;background-color:#282c34;border:0px;padding-bottom:15px;margin:0px;border-radius:0px;}\n" +
    "    h4, h5{font-family:'Titillium Web',sans-serif;font-weight:600;}\n" +
    "    .developers a {font-weight:700;}\n" +
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
    "    .ngCytoscape{height: 50vh;width:100%;}\n" +
    "    .developersHeader h4 {font-family:'Titillium Web',sans-serif;font-weight:600;}\n" +
    "    .subContents p{margin:0px;}\n" +
    "</style>\n" +
    "<div class=\"developers\">\n" +
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
    "<div style=\"background-color:white;min-height:70vh\">\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8 developersHeader\">\n" +
    "                <h2 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">Developers</h2>\n" +
    "                <hr>\n" +
    "                <p style=\"color:gray;font-style:italic\">Building Applications that further the promise of shared prosperity is a great public service.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Create the universe of tokenization. Build New Value & Change the world.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Participate in the development of tokenization protocols & applications.</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"DOCUMENTATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Documentation</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8 developersHeader\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <!--\n" +
    "                <p style=\"color:gray;font-style:italic\">Information about CRE8, decentralized computation, multidimensionality and pluralism, governance and coordination, and interoperable modular protocols. Token string language is explored.</p>\n" +
    "                -->\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <h4><b><a href=\"#CRE8VM\" du-smooth-scroll>The CRE8 Network</a></b></h4>\n" +
    "                <h4><b><a href=\"#APPDESIGN\" du-smooth-scroll>Application Design</a></b></h4>\n" +
    "                <h4><b><a href=\"#TOKENIZATION\" du-smooth-scroll>Tokenization Principles</a></b></h4>\n" +
    "                <h4><b><a href=\"#CRE8\" du-smooth-scroll>CRE8 CORE Protocols</a></b></h4>\n" +
    "                <h4><b><a href=\"#IDENTITY\" du-smooth-scroll>Identity</a></b></h4>\n" +
    "                <h4><b><a href=\"#API\" du-smooth-scroll>Conex API</a></b></h4>\n" +
    "                <h4><b><a href=\"#GROUPINTENTION\" du-smooth-scroll>Group Coordination</a></b></h4>\n" +
    "                <h4><b><a href=\"#VALIDATIONTRAVERSAL\" du-smooth-scroll>Association Exploration & Validation Traversals</a></b></h4>\n" +
    "                <h4><b><a href=\"#MULTIMARKET\" du-smooth-scroll>Multidimensional Market Relations & Traversal</a></b></h4>\n" +
    "                <h4><b><a href=\"#SYNTHETICTOKENIZATION\" du-smooth-scroll>Tokenization & Pattern Recognition</a></b></h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
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
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">The CRE8 Network</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">The CRE8 Network is formed though a decentralized peer network of state machienes and the sum of its computational potiental. An interlinked family of collaborative peers (both in their human and artifical elements) formalize gestalt interactions.</p>\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">In order to maximaize peer contrubition, the CRE8 peer client compiles to WebAssembly to run in-browser natively <a href=\"#\">[ ! ]</a>.</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Agent Centric, Custom Peer Compilation</h4>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--APPS-->\n" +
    "\n" +
    "                <h4>The State Machine</h4>\n" +
    "                <p><a href=\"#PEERMODEL\" du-smooth-scroll>Peers</a>, <a href=\"#TX\" du-smooth-scroll>Txs</a>, <a href=\"#BLOCK\" du-smooth-scroll>Blocks</a>, and <a>Protocols</p></p>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Forthright Data Organization: Mathmatical Principles</h4>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Networking Protocols, Data Storage, & High-bandwith Delivery</h4>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Context Specific Machine Attention</h4>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--<h4>A Methodology of Consensus</h4>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>-->\n" +
    "                \n" +
    "                <h4>Code Base</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Contribution is readily and excitedly accepted. All CRE8 Clients follow transparent governance principles.</p>\n" +
    "                <hr>\n" +
    "\n" +
    "                <div>\n" +
    "\n" +
    "                    <h4>\n" +
    "                        <a href=\"project/cre8-javascript-client\" ui-sref=\"project.activity({path:'cre8-javascript-client'})\">Javascript Front End Clients</a>\n" +
    "                    </h4>\n" +
    "                    <p>\n" +
    "                        <a href=\"project/cre8-angular-1-javascript-client\" ui-sref=\"project.activity({path:'cre8-rust-peer-client'})\">Angular 1.X (1.7.8)</a>, \n" +
    "                        <a href=\"project/cre8-vue-javascript-client\" ui-sref=\"project.activity({path:'cre8-rust-peer-client'})\">Vue (v2.6.1)</a>, \n" +
    "                        <a href=\"project/cre8-react-javascript-client\" ui-sref=\"project.activity({path:'cre8-rust-peer-client'})\">React (16.8)</a>\n" +
    "                    </p>\n" +
    "                    <hr>\n" +
    "\n" +
    "                    <h4>\n" +
    "                        <a href=\"project/cre8-peer-client\" ui-sref=\"project.activity({path:'cre8-peer-client'})\">Peer Clients</a>\n" +
    "                    </h4>\n" +
    "                    <p>\n" +
    "                        <a href=\"project/cre8-rust-peer-client\" ui-sref=\"project.activity({path:'cre8-rust-peer-client'})\">In-Browser WebAssembly (RUST)</a>, \n" +
    "                        <a href=\"project/cre8-python-peer-client\" ui-sref=\"project.activity({path:'cre8-python-peer-client'})\">Python</a>, \n" +
    "                        <a href=\"project/project/cre8-go-peer-client\" ui-sref=\"project.activity({path:'cre8-go-peer-client'})\">Go</a>\n" +
    "                    </p>\n" +
    "                    <hr>\n" +
    "\n" +
    "                    <h4>\n" +
    "                        <a href=\"project/cre8-native-client\" ui-sref=\"project.activity({path:'cre8-native-client'})\">Native Applications</a>\n" +
    "                    </h4>\n" +
    "                    <p>\n" +
    "                        <a href=\"project/cre8-android-native-client\" ui-sref=\"project.activity({path:'cre8-android-native-client'})\">Android</a>, \n" +
    "                        <a href=\"project/cre8-ios-native-client\" ui-sref=\"project.activity({path:'cre8-ios-native-client'})\">iOS</a>, \n" +
    "                        <a href=\"project/cre8-osx-native-client\" ui-sref=\"project.activity({path:'cre8-osx-native-client'})\">OSX</a>, \n" +
    "                        <a href=\"project/cre8-windows-native-client\" ui-sref=\"project.activity({path:'cre8-windows-native-client'})\">Windows</a>\n" +
    "                    </p>\n" +
    "                    <hr>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-4\">\n" +
    "                <img src=\"images/ifps.svg\">\n" +
    "                <img style=\"width:49%\"  src=\"images/hashtree.png\">\n" +
    "                <img style=\"width:49%\"  src=\"images/mining.jpg\">\n" +
    "                <img style=\"width:49%\" src=\"images/patricia-trie.png\">\n" +
    "                <img style=\"width:49%\" src=\"images/patricia-trie-insert.png\">\n" +
    "            </div>\n" +
    "\n" +
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
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">The Peer Network</h1>\n" +
    "                    <h5 style=\"color:white\">Transparency as Principle</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">  \n" +
    "                <style type=\"text/css\">.angular-google-map-container{height:350px;}</style>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a class=\"btn btn-default log-btn\" href=\"/transparency\">Peer Network Browser</a>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <div class=\"col-xs-12\">  \n" +
    "                <highchart config=\"peerChart\"></highchart>\n" +
    "            </div>\n" +
    "            -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"APPDESIGN\" style=\"background-color:white\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Application Design</h1>\n" +
    "                    <h5 style=\"color:white\">Interoperable Protocol Architecture</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6 col-xs-12\">  \n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <h4>Application Design</h4>\n" +
    "                <h5>An Immutable JSON Structure</h5>\n" +
    "                <hr>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Modularility of Structure</h4>\n" +
    "\n" +
    "                <h4>Permissioning</h4>\n" +
    "                <span>@decorations</span>\n" +
    "                <h4>Templating</h4>\n" +
    "                <span>JSX. Compiles to Peer Views</span>\n" +
    "\n" +
    "                <h5>String</h5>\n" +
    "\n" +
    "                <h5>Data Models</h5>\n" +
    "                <h5>Associations</h5>\n" +
    "\n" +
    "                <h5>STRUCTURE</h5>\n" +
    "                <h5>get</h5>\n" +
    "                <h5>create</h5>\n" +
    "                <h5>self</h5>\n" +
    "                <h5>export</h5>\n" +
    "                <h5>data</h5>\n" +
    "                <h5>views</h5>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6 col-xs-12\" style=\"padding-left:0px;max-width: none;\">\n" +
    "                <div class=\"bootstrapHack\">\n" +
    "                    <div style=\"margin-left:15px;\">\n" +
    "\n" +
    "<div hljs hljs-language=\"javascript\">\n" +
    "\n" +
    "Immutable JSON Connection\n" +
    "\n" +
    "{\n" +
    "    //CORE DATA\n" +
    "    string:\"New Protocol\",\n" +
    "\n" +
    "    //DEFINE DATA MODEL\n" +
    "    dataModels: [\n" +
    "        {\n" +
    "            title: 'Protocol',\n" +
    "            attributes:{\n" +
    "                title: {type:'string'},\n" +
    "                permissions: {type:'json'},\n" +
    "                logic: {type:'json'},\n" +
    "            }\n" +
    "        }\n" +
    "    ],\n" +
    "\n" +
    "    //DEFINE ASSOCIATIONS / IMPORTS\n" +
    "    associations:[\n" +
    "        {id:1, title:'STRUCTURE', type:'APP'},\n" +
    "        {id:2, title:'LANGUAGE', type:'APP'},\n" +
    "        {id:3, title:'CONGRUENCE', type:'APP'},\n" +
    "        {id:4, title:'MANIFOLD', type:'APP'},\n" +
    "    ],\n" +
    "\n" +
    "    //STRUCTURE FUNCTIONS\n" +
    "    get: function(req, res) {},\n" +
    "    create: function (req, res) {\n" +
    "        var newProtocol = req.body;\n" +
    "        if(logic){\n" +
    "            Protocol.create(newProtocol).then((newProtocol)=>{});\n" +
    "        }\n" +
    "    },\n" +
    "    self:function(req, res) {},\n" +
    "\n" +
    "    //ASSOCIATED DATA EXPORT\n" +
    "    export:function(req, res) {},\n" +
    "\n" +
    "    //ASSOCIATED APP(S) OVERRIDE\n" +
    "    data:{app:{reaction:{plus:function(req,res){}}}},\n" +
    "\n" +
    "    //CUSTOM FUNCTIONS\n" +
    "    custom: function (req, res) {console.log('can code plz?')},\n" +
    "    onCall:function(){},\n" +
    "    onMyAction:function(){},\n" +
    "\n" +
    "    @decorators\n" +
    "    @isProjectMember\n" +
    "    identityFunction:function(){}\n" +
    "\n" +
    "    //FRONTEND; JSX;\n" +
    "    views:{\n" +
    "        //APP DEFINED ROUTES. \n" +
    "        //-- COMPILES TO APP INBROWER & NATIVLY IN APP\n" +
    "        //CORE CONTAINS THE BUILDER\n" +
    "        //EXAMPLE - Explose templates from import\n" +
    "        templates:{\n" +
    "            nav:{},\n" +
    "            sidebar:{},\n" +
    "            feed:{},\n" +
    "        }\n" +
    "    }\n" +
    "}\n" +
    "\n" +
    "</div>\n" +
    "<div hljs hljs-language=\"javascript\"  hljs-source=\"humanReadableTokenModel\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12 col-xs-12\">  \n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a class=\"btn btn-default log-btn\" href=\"/apps\">Application Ecosystem</a>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"TOKENIZATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?token,code')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokenization Principles</h1>\n" +
    "                    <h5 style=\"color:white\">Tokenization from protocols.</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <h4 style=\"font-style:italic\">Token Language & String Interpretation</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tokenization from protocols.</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Expan upon Structure, Congruence, Language, CORE</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">String definitions, meta eight eight eight logic</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <h5>Data Obj Flattened to String</h5>\n" +
    "\n" +
    "<div hljs hljs-language=\"javascript\">\n" +
    "function getProtocolTokens(model){\n" +
    "    var protocolTokens = [];\n" +
    "    //DATA TO STRING INTREPRETER\n" +
    "    for (x in Object.keys(model)){\n" +
    "        var dataType = Object.keys(model)[x].toUpperCase();\n" +
    "        var data = model[Object.keys(model)[x]];\n" +
    "        var prefix = 'CRE8+MODEL';\n" +
    "        var string = prefix+'+'+dataType+'+'+data;\n" +
    "        protocolTokens.push(string);\n" +
    "    }\n" +
    "    return protocolTokens;\n" +
    "};\n" +
    "</div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4>Data & Value<h4>\n" +
    "            <h5>Data Model Specific Asset / Tokenization Rules</h5>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4>Pluralism</h4>\n" +
    "            <h5>Information as Income & then some</h5>\n" +
    "            <p>Data Models & Asset String Balance Mapping</p>\n" +
    "            <p>All data can be validated from the single balance mapping</p>\n" +
    "            <p>Data models paired with hashed balance mappings allow for simplicity.</p>\n" +
    "\n" +
    "            <h5>Custom mintTokens function standard in app design</h5>\n" +
    "\n" +
    "<div hljs hljs-language=\"javascript\">\n" +
    "\n" +
    "function mintTokens(){\n" +
    "    ...\n" +
    "}\n" +
    "</div>\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4>Hashed Data as Asset String</h4>\n" +
    "\n" +
    "<div hljs hljs-language=\"javascript\">\n" +
    "\n" +
    "var dataModel = {\n" +
    "    string:'some info',\n" +
    "    number:1,\n" +
    "    bool:true,\n" +
    "};\n" +
    "var hash = sha256(data); //99605A356244BC223A7E506DE253447C37F96947C58EF5FCB54264EBEBB5FAC0;\n" +
    "\n" +
    "//ADD TO DATA BALANCE\n" +
    "balance[id][hash]++;\n" +
    "</div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "\n" +
    "            <h4><a>Associations</a></h4>\n" +
    "            <p>ENFORCE UNIQUENESS IN MAIN NASETED BALANCE; EXTRA MAPPING</p>\n" +
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
    "<div id=\"CRE8\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?creative,protocol,code,programming')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">CRE8 Core Protocols</h1>\n" +
    "                    <h5 style=\"color:white\">Layered Adaptability</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12 col-sm-6\">\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <p style=\"color:gray;font-style:italic\">Protocols define logic and create 'logic manifolds' nested within a string token strucutre.</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `TOKEN_alpha+TOKEN_beta+TOKEN_gamma+cdots`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"STRUCTURE\">\n" +
    "                    <h4><b>STRUCTURE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Defining operations such as transferrable, the ability to create: meta defination. Effecient and congruent mappings for core data organization.</p>\n" +
    "                    `oplus, otimes, odot, triangle, RR`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"LANGUAGE\">\n" +
    "                    <h4><b>LANGUAGE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Vital to navigation of the token domain are language protocols and operators that define logic and interpretation</p>\n" +
    "                    `oplus, otimes, odot, triangle, RR`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"CONGRUENCE\">\n" +
    "                    <h4><b>CONGRUENCE</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Rotational Equalities via language interperlation & algebra(s) | a+b+c is congruent `cong` to c+b+a is congruent `cong` to b+c+a)</p>\n" +
    "                    `delta, nabla`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"RELATION\">\n" +
    "                    <h4><b>RELATION</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Traversals and Token Action Potientals; long form token string</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">a+b+c+d+.....+n+i+....</p>\n" +
    "                    `TOKEN_alpha+TOKEN_beta+TOKEN_gamma+cdots+TOKEN_omega+cdots`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"MANIFOLD\">\n" +
    "                    <h4><b>MANIFOLD</b></h4>\n" +
    "                    `B^n = {(x_1,x_2,cdots,x_n) in RR^n | x_1^2+x_2^2+cdots+x_n^2 lt 1}`\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">The manifold property, combined with LANGUAGE string interpretation grammer, defines compound token-strings. Recursive in nature, manifolds provide deep intentionality.</p>\n" +
    "                    `nabla,partial,therefore,because,infty,emptyset`\n" +
    "                    `{emptyset,infty}`\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div id=\"CORE\">\n" +
    "\n" +
    "                    <h4><b>CRE8 CORE Models & Manifolds</b></h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Defining Verbs in a string space; application(s)</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">\n" +
    "                        <a href=\"#ACTION\" du-smooth-scroll>ACTION</a>, \n" +
    "                        <a href=\"#APP\" du-smooth-scroll>APP</a>, \n" +
    "                        <a href=\"#ITEM\" du-smooth-scroll>CONTENT</a>,\n" +
    "                        <a href=\"#ITEM\" du-smooth-scroll>ITEM</a>,\n" +
    "                        <a href=\"#LOCATION\" du-smooth-scroll>LOCATION</a>,\n" +
    "                        <a href=\"#MEMBER\" du-smooth-scroll>MEMBER</a>,\n" +
    "                        <a href=\"#PROJECT\" du-smooth-scroll>PROJECT</a>, \n" +
    "                        <a href=\"#TASK\" du-smooth-scroll>TASK</a>, \n" +
    "                        <a href=\"#TIME\" du-smooth-scroll>TIME</a>, \n" +
    "                        <a href=\"#TRANSACTION\" du-smooth-scroll>TRANSACTION</a>, \n" +
    "                        <a href=\"#VALIDATION\" du-smooth-scroll>VALIDATION</a>, \n" +
    "                        <a href=\"#ORDER\" du-smooth-scroll>ORDER</a>,\n" +
    "                        <a href=\"#REACTION\" du-smooth-scroll>REACTION</a>\n" +
    "                    </p>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <p><b>+REPUTATION</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Immutable Balance Mapping</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>+CREDIT & +DEBT</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Asset Credit</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+CREDIT+[INTEREST]</p>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"market/CRE8+CREDIT+0.01\">CRE8+CREDIT+0.01</a></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"market/CRE8+DEBT+0.01\">CRE8+DEBT+0.01</a></p>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">+CREDIT+[ISSUE]+[TIMEDOMAIN]+[INTERESTASSETSET]+[INTERESTSET]</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>+FUTURE</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Asset Futures</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+FUTURE+[DATE]</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"market/CRE8+FUTURE+2019-09-10T21:24:31Z\">CRE8+FUTURE+1568150671</a></p>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>+OPTION</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Asset Options</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+OPTION+[ASSETSET]+[PRICESET]+[TIMEALPHA]+[TIMEBETA]</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">\n" +
    "                        <a href=\"market/CRE8+OPTION+TROVERMAN+100+2019-09-10T21:24:31Z+2019-10-10T21:24:31Z\">\n" +
    "                            CRE8+OPTION+TROVERMAN+100+2019-09-10T21:24:31Z+2019-10-10T21:24:31Z\n" +
    "                        </a>\n" +
    "                    </p>\n" +
    "\n" +
    "                   <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>+SPONSOR</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Asset Sponsorship</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+SPONSOR+[ADDRESS]</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\"><a href=\"market/CRE8+SPONSOR+569f0edcd3e4c517075be5d6\">CRE8+SPONSOR+569f0edcd3e4c517075be5d6</a></p>\n" +
    "\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p><b>Application Specific Manifolds</b></p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">+[APP]+</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"IDENTITY\" style=\"background-color:white\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?identity,connection')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Identity</h1>\n" +
    "                    <h5 style=\"color:white\">Protocols to manage user operations</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <div class=\"col-sm-6\">  \n" +
    "                <p style=\"color:gray;font-style:italic\">Passports are modular access points to executing requests on behalf of a member. </p>\n" +
    "\n" +
    "                <p>Interoperable & Context Specific Identity</p>\n" +
    "                <p>Local Identity Context - Admin of Peer</p>\n" +
    "                <p>Non-Local Identity Context - Network Peer Member</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Passports</h4>\n" +
    "                <p>Facebook, Youtube, Google , Twitter, STEEM, ...</p>\n" +
    "                <p>Biometric Authentication - Live Stream Face Id</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-6 col-xs-12\" style=\"padding-left:0px;max-width: none;\">\n" +
    "                <div class=\"bootstrapHack\">\n" +
    "                    <div hljs hljs-language=\"javascript\"  hljs-source=\"passportModel\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"API\" style=\"background-color:white;\">\n" +
    "\n" +
    "    <div id=\"CONEXAPIHEADER\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div class=\"container\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Conex API</h1>\n" +
    "                        <h5 style=\"color:white\">CRE8 CORE Peer Models</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"MODELS\" style=\"background-color:white;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Table of Contents</h1>\n" +
    "                            <h5 style=\"color:white\">Data Models</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\">\n" +
    "            <div class=\"row\">\n" +
    "                 <div class=\"col-xs-12\" style=\"text-align:left\">\n" +
    "                    <div class=\"modelList\">\n" +
    "                        <p><a href=\"#ACTION\" du-smooth-scroll>Action</a></p>\n" +
    "                        <p><a href=\"#ATTENTION\" du-smooth-scroll>Attention</a></p>\n" +
    "                        <p><a href=\"#APP\" du-smooth-scroll>App</a></p>\n" +
    "                        <p><a href=\"#ASSOCIATION\" du-smooth-scroll>Assoication</a></p>\n" +
    "                        <p><a href=\"#BLOCK\" du-smooth-scroll>Block</a></p>\n" +
    "                        <p><a href=\"#CONNECTION\" du-smooth-scroll>Connection</a></p>\n" +
    "                        <p><a href=\"#CONTENT\" du-smooth-scroll>Content</a></p>\n" +
    "                        <p><a href=\"#EVENT\" du-smooth-scroll>Event</a></p>\n" +
    "                        <p><a href=\"#ITEM\" du-smooth-scroll>Item</a></p>\n" +
    "                        <p><a href=\"#LOCATION\" du-smooth-scroll>Location</a></p>\n" +
    "                        <p><a href=\"#MEMBER\" du-smooth-scroll>Member</a></p>\n" +
    "                        <p><a href=\"#NOTIFICATION\" du-smooth-scroll>Notification</a></p>\n" +
    "                        <p><a href=\"#ORDER\" du-smooth-scroll>Order</a></p>\n" +
    "                        <p><a href=\"#PASSPORT\" du-smooth-scroll>Passport</a></p>\n" +
    "                        <p><a href=\"#PEERMODEL\" du-smooth-scroll>Peer</a></p>\n" +
    "                        <p><a href=\"#PROJECT\" du-smooth-scroll>Project</a></p>\n" +
    "                        <p><a href=\"#PROJECTCHARTER\" du-smooth-scroll>Project Charter</a></p>\n" +
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
    "           </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\">\n" +
    "\n" +
    "    <!--META MODEL || ABSTRACT APP!?-->\n" +
    "    <!--SEARCH MODEL-->\n" +
    "    <!--META MODEL..ASSOCIATION..CONTEXT..LOCATION..DATA-->\n" +
    "    <!--CORE?-->\n" +
    "    <!--APPS! (DATAMODEL) (set(PROTOCOL))-->\n" +
    "        <!--APP DOCUMENTATION??-->\n" +
    "        <!--PROTOCOL METADATA-->\n" +
    "\n" +
    "    <div id=\"QUERYLANGUAGE\" style=\"background-color:white;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Query Language</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">     \n" +
    "                    <div>\n" +
    "                        <h4><p style=\"color:gray;font-style:italic\">Filter & Search Parameters<p></h4>\n" +
    "                        <p style=\"color:gray;font-style:italic\">CRE8 Core Querying Language is recursive and compouding. Querys can be composed for deep programatic specification.</p>\n" +
    "\n" +
    "                        <h5>ModelParam</h5>\n" +
    "                        <h5>SortParam</h5>\n" +
    "                        <h5>Chain</h5>\n" +
    "\n" +
    "                    </div>\n" +
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
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "\n" +
    "    <div id=\"ACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Action</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>  \n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-xs-12\">           \n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Action Model. Agnositic Data Model. Supplies Model Inheritance. Vector actions upon items with direction (type) and quantity. `A_t circ I`</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">Permissions.. Authentatication.. etc</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/action</b></p>\n" +
    "                    <p><b>post /api/action</b></p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"actionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"ATTENTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Attention</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-xs-12\">             \n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Attention Model.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Attention Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Apps:</b> Application specific attention, a type with logic. e.g. Human, Machine </p> \n" +
    "                        <p><b>Associated Models:</b> Computed Associated data models in the <a>CRE8 Graph</a>.</p> \n" +
    "                        <p><b>Creator:</b> Id of creator.</p>\n" +
    "                        <p><b>Data:</b> Agnostic data layer used by external applications.</p> \n" +
    "                        <p><b>Id:</b> Sha-256 Hash of the data model.</p>\n" +
    "                        <p><b>String:</b> String Asset Representation of Attention Data.</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Attention Protocol</h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Attention Protocol.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Attention Information</h4>\n" +
    "                    <div>\n" +
    "                        <p>Multidimensional Attention</p>\n" +
    "                        <p>Mechanism of action -- Pay Attention --> [ CRE8+ATTENTION+GENERAL, CRE8+ATTENTION+{USERNAME} ]</p>\n" +
    "                        \n" +
    "                        <p>Attention Balance Mapping on Associated Data Modles</p>\n" +
    "                        <p>Content {balanceMapping} += attentionAmount</p>\n" +
    "                        \n" +
    "                        <p>Attention Balance Mapping on Data Creator / Owner Balances</p>\n" +
    "                        <p>Content_userId {balanceMapping} += attentionAmount</p>\n" +
    "\n" +
    "                        <p>Attention Balance Mapping on Attention Creator Balances</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"attentionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/attention</b></p>\n" +
    "                    <p><b>post /api/attention</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"APP\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,application,grow,nature,technology')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">App</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"spacing-15\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Apps are bundles of protocols that follow modular design patterns. Apps work within an APP+ Token Manifold.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">App Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Description:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Context:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Protocols:</b> Coming Soon! :)</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/app</b></p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"associationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"ASSOCIATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?connection,code,association,symbiotic')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Association</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Associations map the relationships between model types in the CRE8 ecosystem. Associations are of particular value in governance relating the model relationships of Projects, Tasks, & Time</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Association Information</h4>\n" +
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
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4>Directed multigraph</h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">A multigraph `G` is an ordered triple `G:=(V, E, r)` with</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">`V` a set of vertices or nodes,</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">`E` a set of edges or lines,</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">`r : E → {{x,y} : x, y ∈ V}`, assigning to each edge an ordered pair of endpoint nodes.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/association</b></p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"associationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"BLOCK\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?blockchain,technology,network,code,information,data')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Block</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">Blocks are machine verified bundles of <a href=\"#TX\" du-smooth-scroll>txs</a>. All data for the decentralized <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 VM</a> is stored as sequential validated blocks of information. Consensus on block information is obtained through <a href=\"#\">Peer Coordination</a>.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Block Data Model</h4>\n" +
    "                    <div class=\"\">\n" +
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
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <img style=\"height:200px;\" style=\"\" src=\"images/blockheader.png\">\n" +
    "                    <img style=\"height:200px;\" src=\"images/blockchain.png\">\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"blockModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/block</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"CONNECTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Connection</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>  \n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Connection Model. Connections are abstract associations. Connections create charters. A set of connections form a Charter</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Connection Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Description:</b> Coming Soon! :)</p>\n" +
    "                        <p><b>Data:</b> Coming Soon! :)</p> \n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/connection</b></p>\n" +
    "                    <p><b>post /api/connection</b></p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6 col-xs-12\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"connectionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"CONTENT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?creative,paint,splash,technology,code,content,music')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Content</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Content is information. (with context)</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Content Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> Title of Content is a String</p>\n" +
    "                        <p><b>Content:</b> Content is a minified string of parsable markup language such as <i>sanatized</i> html, markdown, or bbcode, .. etc,</p>\n" +
    "                        <p><b>Context:</b> Context provide informational context, they are both a computed property via validation traversal and created by the content creator.</p>\n" +
    "                        <p><b>Type:</b> Type of Content is: 'AUDIO, IMAGE, LINK, MOTION, POST, VIDEO'</p>\n" +
    "                        <p><b>Location:</b> Location is a JSON obj with respective location information such as lat,lng and address.</p>\n" +
    "                        <p><b>Associated Models:</b> Computed via Association Traversal</p>\n" +
    "                        <p><b>Creator:</b> Address, Member or Project, who created Content</p>\n" +
    "                        <p><b>CreatedAt:</b> Timestamp of Creation</p>\n" +
    "                        <p><b>Data:</b> Coming Soon! :)</p> \n" +
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
    "                        <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/content</b></p>\n" +
    "                        <p>curl https://www.cre8.xyz/api/content?limit=1&skip=0</p>\n" +
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
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div id=\"DATA\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,information,data')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Data</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Data is information. Information to information mapping.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\" hljs-source=\"dataModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/data</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    -->\n" +
    "\n" +
    "    <div id=\"EVENT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,information,data,events')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Event</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Events are an agnostic logging of information. Contextual Filters to applications. Tuple (app/model,event,id)</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\" hljs-source=\"eventModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <p><b>[get, post] /api/event</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>-->\n" +
    "\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"ITEM\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?item,inventory,stuff,things')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Item</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Items .. provide depth to the capibilities of string based tokenization </p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Item Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b></p> \n" +
    "                        <p><b>associatedModels:</b> [when the item string token is sent in a transaction, item ownership is transferred.]</p> \n" +
    "                        <p><b>compontentItems:</b> Recursive nesting structure. Useful for transparent supply chains.</p> \n" +
    "                        <p><b>Context:</b> Computed from associated Models and self Associated Context.</p> \n" +
    "                        <p><b>Content:</b> Associated Content -- Item Description. Same as content (attention protocol)</p> \n" +
    "                        <p><b>Location:</b> Associated Item Location</p> \n" +
    "                        <p><b>Info:</b> For Sale? Physical? Delivery? .. ETC</p> \n" +
    "                            <p><b>Status:</b> Status Linkage to Action (CONSUMED.. TRANSFORMED.. CLEAN.. ETC)</p> \n" +
    "                            <p><b>isGenerator:</b>If an item is a generator, on purchase or transfer, a new item is created. Useful for Inventory.</p> \n" +
    "                    \n" +
    "                        <p><b>State / Status:</b></p> \n" +
    "                        <p><b>Data:</b></p> \n" +
    "                        <p><b>Creator:</b> The Creator of the item. Can be Generated.</p> \n" +
    "                        <p><b>Owner:</b> The Owner of the item. Can be franctional.</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    \n" +
    "                    <h4 style=\"font-style:italic\">Item Information</h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Relationship with <a href=\"#ACTION\" du-smooth-scroll>Actions</a>; You can act upon an item via a verb / action type;<br>  Use Item, Consume Water, Wear Shirt, ...,  Actions are a vector with Type and Quantity</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/item</b></p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"itemModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"LOCATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?map,globe,spacetime,location')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Location</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Location</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Location Information</h4>\n" +
    "                    <p>Location Tokenization via Lat Lng Member Sharing --> Suggested Tasks to tokenize.. 'experience tasks' .. some protocol.. geobounded Proj, Task.., Validation... </p>\n" +
    "                    <p>Hanging at the Park; shaing location.. space and time --> Auto Task --> Time (--> Proj) with Task Location..</p>\n" +
    "                    <p>`(\\l\\a\\t,\\l\\n\\g) mapsto Task` : `(\\l\\a\\t,\\l\\n\\g) mapsto Project` </p>\n" +
    "                    <p>Location Context of Time</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"locationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p><b>[get, post] /api/location</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"MEMBER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?human,person,member,community')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Member</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Member Model</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Member Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>avatarUrl:</b> URL to an image file for Member Avatar</p> \n" +
    "                        <p><b>coverUrl:</b> URL to an image file for Member Cover</p> \n" +
    "                        <p><b>Username:</b> Unique Username String </p> \n" +
    "                        <p><b>Status:</b> Current Member Status , relaying information about latest network activity Online, Streaming, ... </p> \n" +
    "                        <p><b>Information:</b> </p> \n" +
    "                        <p><b>Balance:</b> String Asset Balance Mapping - multidimensional</p> \n" +
    "                        <p><b>Location:</b> </p> \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"memberModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>[get, post] /api/member</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"MARKET\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "             <div style=\"background:url('https://source.unsplash.com/1600x900/?node,market,connection,community,value')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Market</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">A market is a computed immutable structure based on filtered orders. Markets represent a combinatorial space of <a href=\"#TOKEN\" du-smooth-scroll>tokens</a>.</p>\n" +
    "                    <a href=\"#MULTIMARKET\">MultiMarket</a>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"marketModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/market</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"MARKETCONNECTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?node,market,connection,community,value')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Market Connection</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Token - Token Connection</p>\n" +
    "                    <a href=\"#MULTIMARKET\">Congruence with Connection - Association - Validation</a>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"marketModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/market</b></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"NOTIFICATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?notification,attention,hi,awesome')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Notification</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    \n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Notification Model. Notifications have privacy permission qualifiers.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <p>Notification Permissions</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Notification Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Priority:</b> Based on Notification Settings - Notification App Settings define notification threshold - App - Member Connection Data Model </p> \n" +
    "                        <p><b>Type:</b> Notification Type - Customized Notification permissions based on type. Defined in Apps, Ex. Reaction, Validation Request, ...</p> \n" +
    "                        <p><b>Content:</b> Notification Content .. </p> \n" +
    "                        <p><b>isRead:</b> True or False; combined with notification prefrences, weather or not to reder notification.</p> \n" +
    "                        <p><b>User:</b>The Indended User to recieve the notification - upconver to member || recipient </p> \n" +
    "                    </div>  \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p>Websocket Subscribe</p>\n" +
    "                    <p><b>get /api/notification</b></p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"notificationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"ORDER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?marketplace,order,finace,bid,ask')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Order</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    \n" +
    "                    <p style=\"color:gray;font-style:italic\">Order is a position in the Multidimensional Token Market. Establises connections between tokens relationally and with manifold logic based on protocol.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">The Anatomy of an Order</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Order Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Type</b>: <b>FoK</b>: Fill or Kill, <b>onBooks</b>: On the Books, <b>Limit</b>: Limit Order</p>\n" +
    "                        <p><b>Status</b>: <b>PENDING</b>,<b>CONTINUAL</b>,<b>COMPLETE</b></p>\n" +
    "                        <p><b>setAlpha</b>: [{assetIdentifier: amount}, ...]</p>\n" +
    "                        <p><b>setBeta</b>: [{assetIdentifier: amount}, ...]</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/order</b></p>\n" +
    "                        <div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"orderQuery\"></div>\n" +
    "                            <button ng-click=\"apiCall({model:'ORDER',limit:1,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Order</button>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div ng-show=\"results.order != '[{}]'\" hljs hljs-language=\"javascript\" hljs-source=\"results.order\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "        \n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-15\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"orderModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"PASSPORT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?passport,validate,auth,authentication,conenesus,connection')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Passport</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>  \n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    \n" +
    "                    <p style=\"color:gray;font-style:italic\">This is the Passport Model. Passports are modular access points to executing requests on behalf of a member. </p>\n" +
    "                    <p>2FA authentication protocols etc</p>\n" +
    "                    <a href=\"#IDENTITY\" du-smooth-scroll>Identity management</a>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Passport Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>App:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Provider:</b> Coming Soon! :)</p> \n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Passport Protocols</h4>\n" +
    "                    <div>\n" +
    "                        <p>create: </p>\n" +
    "                        <p>get: </p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>get /api/passport</b></p>\n" +
    "                        <p><b>post /api/passport</b></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"passportModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"PEERMODEL\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?community,peer,member,network,conenesus,decentralized,mesh')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div> \n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    \n" +
    "                    <p style=\"color:gray;font-style:italic\">Peers are the backbone of the CRE8 Network. Modular and Context Specific input allows for variability and upgradability in peer software.</p>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Peer Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Apps:</b> App bundle which defines the peer software.</p> \n" +
    "                        <p><b>Creator:</b> Id of the Creator.</p> \n" +
    "                        <p><b>versionHash:</b> Hash of application bundle which composes the peer.</p> \n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Peer Protocols</h4>\n" +
    "                    <div>\n" +
    "                        <p>create: </p>\n" +
    "                        <p>get: </p>\n" +
    "                        <p>Imported Modules: Attention, Member, .. </p>\n" +
    "                        <p>Codified Machine Attention</p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>get /api/peer</b></p>\n" +
    "                        <p><b>post /api/peer</b></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"peerModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"PROJECT\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?project,group,community,connenction,conenesus,coordination,voting,government')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Project</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "\n" +
    "                    <p style=\"color:gray;font-style:italic\">Projects are organized groups of members with self governing principles; a charter.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Project Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> A Project Title is a Human Readable Short Description of the Project</p> \n" +
    "                        <p><b>Description:</b> Long Form Content Assocation for a project. Manifest as a <a>Self Association</a>.</p> \n" +
    "                        <p><b>AvatarUrl:</b> String Url of an image for the Project Avatar</p> \n" +
    "                        <p><b>urlTitle:</b> A computed property of the project title. \".toLowerCase().replace(' ','-')\"</p> \n" +
    "                        <p><b>stringManifold:</b>Project Charter Defined String Asset Manifold</p> \n" +
    "                        <p><b>Context:</b> Computed Property from the set of Project Associations</p> \n" +
    "                        <p><b>Location:</b> Lat, Lng, Address of Project, Location Application Input</p> \n" +
    "                        <p><b>Creator:</b> Creator Id -- depreciate</p> \n" +
    "                        <p><b>Data:</b> Meta-Model Data layer for associated Apps</p> \n" +
    "                    </div>\n" +
    "                    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Project Protocols</h4>\n" +
    "                    <div>\n" +
    "                        <p>\n" +
    "                            <b>create: </b>\n" +
    "                            <span style=\"color:gray;font-style:italic\">the operations and permission structure around the creation of a <a href=\"#PROJECT\" du-smooth-scroll>Project</a> (and its applications on cre8's api)</span>\n" +
    "                        </p>\n" +
    "                        <p>\n" +
    "                            <b>get: </b>\n" +
    "                            <span style=\"color:gray;font-style:italic\">get Projects, Compatable with <a>Complex Queries</a></p>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/project</b></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectModel\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectController\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"PROJECTCHARTER\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?vote,validate,create,government,conenesus,charter,constution,rules,code')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Project Charter</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">ProjectCharters are .. modular adaptions with governance and decision making. Specific protocols that dynamically adjust project configurations. from initial conditions to reputationatation decay.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Reputation & Verification Dimensions</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Validation Types</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Member Types</p>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>get /api/project/{id}/charter</b></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <h5>TBD</h5>\n" +
    "                    <p>Connection of connection is multiplicative / defined in the charter</p>\n" +
    "                    <p>Category Theory 2-Category ... recursive validation</p>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"projectCharterModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"PROTOCOL\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Protocol</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    \n" +
    "                    <p style=\"color:gray;font-style:italic\">Protocols are structured code that interact with information in Txs on the CRE8 VM.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Protocol Information</h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">In creating layered and interoperable protocols, application architecture adopts core principles - which espouse a meta consensus mechanism. The CRE8 governing body defines the core.</p>\n" +
    "                    \n" +
    "                    <p>Immutable structure; json; smart contract language</p>\n" +
    "                    <p>Abstraction of {Language Abstraction} working with the <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 virtual machine</a></p>\n" +
    "                    <p>Wrappers APP (NATIVE) RUST vs. APP (CREATE LANGUAGE) (BOTH ARE WRAPPED)</p>\n" +
    "                    <p>Meta Data && Context Specific Machine Attention </p>\n" +
    "\n" +
    "                    <!--MAP IT OUT-->\n" +
    "                    <!--META DATA (ASSOCIATED APPS - CONSENSUS APP.. ATTENTION), PROTOCOL DATA MODEL-->\n" +
    "                    <!--[PROTOCOL]-APP-->\n" +
    "                    <!--[APP]-PEER-->\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>[get, post] /api/protocol</b></p>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"protocolModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"REACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?like,dislike,react,love,create,action,reaction')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Reaction</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Reaction is an application which allows for applications to have the functionality of reacting on data models. Protocols propogate String Assets to associated data and data creators. </p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Reaction Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Amount:</b> Reactions can have a scalar 'amount' property. Reaction App plugins modify mappings and logic betwen type and amount.</p> \n" +
    "                        <p><b>Type:</b> The context of the reaction. Reaction App plugins codify logic attached to reaction types.</p> \n" +
    "                        <p><b>Creator:</b> Id of reaction creator.</p> \n" +
    "                        <p><b>associatedModels:</b> Connected Data Models.</p> \n" +
    "                        <p><b>Data:</b> Agnostic data layer used by external applications.</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/reaction</b></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"reactionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"SEARCH\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?search,filter,find,code,discover,order,crystal,connection,lattice')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Search</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Search is .. model agnostic query endpoint... unify with examples? .. unify with query</p>\n" +
    "                    <div>\n" +
    "                        <p>CONTENT ABOUT COMPLEX SEARCH QUERIES.. IE FINISH FILTER & DOCUMENT</p>\n" +
    "                        <p><b>Filter</b>: Obj Types -- Context;QUERY;LOCATION;MODEL;TYPE;ASSETINPUT;ASSETOUTPUT;ASSOCIATIONS...</p>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <p>QUERY BUILDER</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <p><b>get /api/search</b></p>\n" +
    "                    <p>curl https://www.cre8.xyz/api/search?limit=1&skip=0&Model='TRANSACTION'&...</p>\n" +
    "\n" +
    "                    <button ng-click=\"apiCall({model:'SEARCH',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get</button>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <div ng-show=\"results.search!='[{}]'\" style=\"max-height:100vh;overflow:scroll\" hljs hljs-language=\"javascript\" hljs-source=\"results.search\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"queryModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"TASK\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?time,intention,responsibility,planning,calendar,coordination,shared,goals')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Task</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Tasks are a relay of context. Layers of validation intention create association. The principles of responsibility sets. Shared crystalized responsibility; validated intention of time.</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Crystalized responsibility; tasks with high connectivity and associativity via associatedModels</p>\n" +
    "                    <div>\n" +
    "                        <p><b>Title:</b> Title of the Task</p> \n" +
    "                        <p><b>Content:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Location:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Context:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Creator:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>associatedModels:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Data:</b> Meta-Model Data layer for associated Apps</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/task</b></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"taskModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"TIME\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "             <div style=\"background:url('https://source.unsplash.com/1600x900/?clock,time,spacetime,physics,universe,mystery,intention')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Time</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Time & intention is the foundation of energy. Time is the base of CRE8.</p>\n" +
    "                    <div>\n" +
    "                        <p><b>Amount:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>startTime:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Content:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Context:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>associatedModels:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Location:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Data:</b> Meta-Model Data layer for associated Apps</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/time</b></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"timeModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"TOKEN\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?value,validate,token,conenesus,money,cash')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Token</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">A token is a discrete piece of information with the following properties:</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <p style=\"color:gray;font-style:italic\">A token within the context of CRE8's multidimensional token market is scaffolding information the string balance mapping that builds the market.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/token</b></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"tokenModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"TRANSACTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,send,money,value,conenesus')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Transaction</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Transactions are core to transferable value. Contains a sender and reciever address, as well as an asset weighted struct.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Transaction Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>To:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>From:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>amountSet:</b> Set Transactions</p> \n" +
    "                        <p><b>Content:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Context:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Location:</b> Coming Soon! :)</p> \n" +
    "                        <p><b>Data:</b> Meta-Model Data layer for associated Apps</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/transaction</b></p>\n" +
    "                        <p>curl https://www.cre8.xyz/api/transaction?limit=1&skip=0</p>\n" +
    "                        <div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"transactionQuery\"></div>\n" +
    "                            <button ng-click=\"apiCall({model:'TRANSACTION',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Transaction</button>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\" hljs-source=\"results.transaction\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"transactionModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"TX\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?block,transaction,data,code,discrete,blockchain')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Tx</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Every state update in the <a href=\"#CRE8VM\" du-smooth-scroll>CRE8 virtual machine</a> is represented by a tx. <a href=\"#BLOCK\" du-smooth-scroll>Blocks</a> are <a href=\"#ATTENTION\">machine validated</a> bundles of txs.</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Tx Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Data:</b> Binary Data</p> \n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                        <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/tx</b></p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"txModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    <div id=\"VALIDATION\" style=\"background-color:white;min-height:70vh\">\n" +
    "        <div class=\"container\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?vote,validate,create,connenction,conenesus')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Validation</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <p style=\"color:gray;font-style:italic\">Like Votes, the building block for group agreement - consensus and decision making. \n" +
    "                    <p style=\"color:gray;font-style:italic\">The Anatomy of a Validation</p>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">Validation Data Model</h4>\n" +
    "                    <div>\n" +
    "                        <p><b>Reputation:</b> {context:reputationInt}, Reputation is used as a multiplier for association computation via the Project Charter</p>\n" +
    "                        <p><b>Validation:</b> {context:validationInt}</p>\n" +
    "                        <p><b>Type:</b> Human (CRE8), Machine (CRE8), APP</p>\n" +
    "                        <p><b>Associated Models:</b> TODO: REPLACE CONTENT.. SHARED DATA ATTRIBUTE.. </p>\n" +
    "                        <p><b>Validation Models:</b> Binary relation of Two Models to be associated.</p>\n" +
    "                        <p><b>Creator:</b> Address of Member who created Validation</p>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <h4 style=\"font-style:italic\">Validation Information</h4>\n" +
    "                    <p>Reputation & Validation</p>\n" +
    "                    <p>Interoperable Validation Types</p>\n" +
    "                    <p>Composite Validation (CRE8), Human Validated Proof of Work, Machine Validation, and App Specific Validation</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <h5>Association Space</h5>\n" +
    "                    <nvd3 options=\"graphOptions\" data=\"graphData\" class=\"with-3d-shadow with-transitions\"></nvd3>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p>`Validation | {V_N} = sum_(i=0)^n {V_{V_i}}_[a-z]`</p>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Layered & Nested Recursion (Validation-Validation)</p>\n" +
    "                    <p>Validation `hArr_D` Validation</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <h4>Project Charter Association Rules</p>\n" +
    "                    <p>Project `hArr` Connection `hArr` Connection</p>\n" +
    "\n" +
    "                    <p>Project `hArr` Item</p>\n" +
    "                    <p>Project `hArr_D` Content</p>\n" +
    "                    <p>Project `hArr` Member</p>\n" +
    "                    <p>Project `hArr` Order</p>\n" +
    "                    <p>Project `hArr_D` Task</p>\n" +
    "                    <p>Project `hArr_D` Task `hArr_D` Time</p>\n" +
    "                    <p>Validation `hArr_D` Validation</p>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    <p>Compound Associations</p> \n" +
    "                    `(A hArr B) hArr C`\n" +
    "                    `A hArr (B hArr C)`\n" +
    "                    <p>Decompose Project `hArr_D` Task `hArr_D` TIME</p>\n" +
    "                    `(Project hArr Task) hArr Time`\n" +
    "                    `Project hArr (Task hArr Time)`\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h4 style=\"font-style:italic\">End Points & Verbs</h4>\n" +
    "                    <div>\n" +
    "                         <p>Websocket Subscribe</p>\n" +
    "                        <p><b>[get, post] /api/validation</b></p>\n" +
    "                        <p>curl https://www.cre8.xyz/api/validation?limit=1&skip=0</p>\n" +
    "                        <div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"validationQuery\"></div>\n" +
    "                            <button ng-click=\"apiCall({model:'VALIDATION',limit:10,skip:0,sort:'createdAt DESC'})\" class=\"btn btn-default log-btn\">Get Validation</button>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\" hljs-source=\"results.validation\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                        <div style=\"margin-left:15px;\">\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div hljs hljs-language=\"javascript\"  hljs-source=\"validationModel\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-100\"></div> \n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"VALIDATIONTRAVERSAL\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,validate')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Association Exploration & Traversal</h1>\n" +
    "                    <h5 style=\"color:white\">The Organizational Complex</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <h4>Association Types</h4>\n" +
    "                <p><a href=\"#CONNECTION\" du-smooth-scroll>Connections</a>, <a href=\"#ASSOCIATION\" du-smooth-scroll>Associations</a>, <a href=\"#VALIDATION\" du-smooth-scroll>Validations</a></p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <h4>Validation Traversal</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">From a Set of Validations Compute the Association `A_{D_{1-n}` </p>\n" +
    "                <p>`Association, A = sum_(i=0)^n {V_N}_[a-z]`</p>\n" +
    "                <p>`Validation, {V_N} = sum_(i=0)^n {V_{V_i}}_[a-z]`</p>\n" +
    "                <p>`therefore A = sum_(i=0)^n sum_(i=0)^n V_[a-z]`</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <h4>Definitions & Tensor Notation</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Associations between data models are computed though sets of recursive validations which are governed though association rules</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p>`Association: D_(T1) -> D_(T2)`</p>\n" +
    "                <p>`TreeLevel_1: V_(((T1,T2)_1)_1), V_(((T1,T2)_2)_1), V_(((T1,T2)_3)_1), ..., V_(((T1,T2)_N)_1)`</p>\n" +
    "                <p>`TreeLevel_2: ... `</p>\n" +
    "                <p>`TreeLevel_3: ... `</p>\n" +
    "                <p>`TreeLevel_L: ... `</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p>Compute Association Level L</p>\n" +
    "                <p>1. Reduce `Set [V_(L_n,k)] -> A_(L_n,k)` by `odot_(A_R)`</p>\n" +
    "                <p>`[A_L] = [Sum(V_D otimes_(A_R) Rep_D)]/N`</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p>2. Traverse Level by `otimes_(A_R)`</p>\n" +
    "                <p>`V_L -> A_(L-1) = V_L otimes_(A_R) A_(L-1)`<p>\n" +
    "                <p>`where otimes_(A_R)` is an Association Rule `R`</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p>Go to 1</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <h5>Topology</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">An Immutable Object Structure; TOPOLOGY OF VALIDATIONS (HIGHER ORDER)</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <h4>Asset Action Potientals</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Community Planning Around the Organization of Localized Responsibility Sets</p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
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
    "<div id=\"MULTIMARKET\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?market,graph,liquidity')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Multidimensional Market Relations & Traversal Exploration</h1>\n" +
    "                    <h5 style=\"color:white\">A Study of the Multidimensional Asset Market</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <h4>A Discrete Order Structure</h4>\n" +
    "                <h5>Sets Equalities & Statements of Exchange</h5>\n" +
    "                <h5>A Value Map</h5>\n" +
    "                <h4>Order Types</h4>\n" +
    "                <p>Set vs discrete, types: continuous order</p>\n" +
    "                <h4>Manifold Action Assets & Staked Positions</h4>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"newOrderModel\"></div>\n" +
    "            </div>\n" +
    "        </div>  \n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Matching Engine</h1>\n" +
    "                                <h5 style=\"color:white\">An Immutable Object Structure</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "\n" +
    "                <h4>The moment of liquidity is combinatorial</h4>\n" +
    "\n" +
    "                <p style=\"color:gray;font-style:italic\">Priority of Prefrence for Higher Dimensional Orders; types</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Set for Set (Logic encoding in multimarket comb positions)</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Given a set of equations, we formalize an Immutable Structure to define a Multidimensional Order Book</p>\n" +
    "                \n" +
    "                <h5>Market Types</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Binary Books to Multi Books, logic encoding potiental</p>\n" +
    "                <p>Rank of connection `n` by size of the market `m` <br> degress of connection</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `{({}_1, =, alpha_1A,+,beta_1B,=,gamma_1C),({}_2, =, alpha_2A,+,beta_2B,=,gamma_2C),(vdots,,,,,,),({}_n, =, delta_nA,+,epsilon_nB,=,zeta_nC):}`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `alpha_1 = ((beta_1),(vdots),(beta_n)) circ [[a_11,cdots,a_m1],[vdots, ddots, vdots],[a_1n,cdots,a_mn]]`\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div hljs hljs-language=\"javascript\"  hljs-source=\"orderBookTensor\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <h5>Tensor Asset Properties</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tensor Structure of Assets; Layering and Braiding</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tensor Assets; and immutable Structure</p>\n" +
    "\n" +
    "                <h5>Tensor Market</h5>\n" +
    "\n" +
    "                `A = [[[...]]]; B = [[[...]]]`\n" +
    "                `A = ((beta_1),(vdots),(beta_n)) circ [[a_11,cdots,a_m1],[vdots, ddots, vdots],[a_1n,cdots,a_mn]]`\n" +
    "\n" +
    "                `A otimes B = A,B`\n" +
    "                `A otimes B = A -> B` \n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <h5>Tensor Operations</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tensor Product, Tensor Permuting, Assets as tensors, Layered Tensors as encoded traversals</p>\n" +
    "                <h5>Generating a Lattice</h5>\n" +
    "                <p style=\"color:gray;font-style:italic\">Building a tensor braid.. a powerset</p>\n" +
    "\n" +
    "                `a -> (P(S)_M -> (P(S)_M -> ... )` ... `sigma`\n" +
    "                `P(S) = {...}`\n" +
    "                \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `oplus, otimes, odot, triangle, RR`\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                `((a_(11), cdots , a_(1n)),(vdots, ddots, vdots),(a_(m1), cdots , a_(mn)))`\n" +
    "                \n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Market Objects & Character</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <h4>Market Objects and their Traversal Character</h4>\n" +
    "                        <p style=\"color:gray;font-style:italic\">For every n-object there exists nCm objects of rank m</p>\n" +
    "                        \n" +
    "                        `((n),(m)) = (n!)/(m!(n-m)!)`\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        `a_(n1_m) otimes b_(n2_m) = a,b_((n1+n2)_m)`\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <h4>Embedding Spaces and Group Theoretics</h4>\n" +
    "                        <p>Powerset [De]Composition</p>\n" +
    "                        <p>Downward Traversal Propagation</p>\n" +
    "\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <h4>The Connection Lattice and the Traversal Facet (inverted Facet)</h4>\n" +
    "                        <p>Direction of connection & Asset flow</p>\n" +
    "                        <p>Asset Space, N Size Market, Traversal Logic</p>\n" +
    "                        <p>'Assets' Vs Markets</p>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <h4>Market Graph Object</h4>\n" +
    "                        <p>Nodes: Assets or Markets (Combinatorials)</p>\n" +
    "                        <p>Edges: Generalized Absolute Graph Connections</p>\n" +
    "                        <p>Links: Number of 1D Connections</p>\n" +
    "                        <p style=\"color:gray;font-style:italic\">AB-C: 1 Edge; 3 Links; 2 Forward; 1 Back</p>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <h4>M Combinatorial in Market Size N</h4>\n" +
    "                        <p>M-N-Combinatorial Market</p>\n" +
    "                        <p>(NxM)/2 Nodes</p> \n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                        <!--\n" +
    "                        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();selectTab('COMBINATORIAL5')\">Information</a></li>\n" +
    "                        </ul>\n" +
    "                        -->\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--DO BETTER EXPLORER!!!-->\n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">2 Space</h1>\n" +
    "                                    <h5 style=\"color:white\">Binary Market Space</h5>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "\n" +
    "                                <h4>2 Space Traversal</h4>\n" +
    "                                <p>Depth First Traversal</p>\n" +
    "                                <p>Breadth First Traversal</p>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h4>2-2 \"Combinatorial 2\"</h4>\n" +
    "                                <p>A Binary Market</p>\n" +
    "                                <p>2 nodes</p>\n" +
    "                                <p>1 edge</p>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5 ng-click=\"classicMarketGenerator(['A','B','C'])\">2-3</h5>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5 ng-click=\"classicMarketGenerator(['A','B','C','D'])\">2-4</h5>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5 ng-click=\"classicMarketGenerator(['A','B','C','D','E'])\">2-5</h5>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5>2-N Market</h5>\n" +
    "                                <p>Classic Market</p>\n" +
    "                                <p>`N` nodes</p>\n" +
    "                                <p>`N(N−1)/2` Edges</p>\n" +
    "                                <p>Links == Edges</p>\n" +
    "\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <cytoscape style=\"height: 300px;width:100%;\" graph-options=\"options\" graph-elements=\"classicElementsObj\" graph-layout=\"layout\" graph-style=\"style\" graph-ready=\"graphReady\"></cytoscape>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                \n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">3 Space</h1>\n" +
    "                                    <h5 style=\"color:white\">Markets with a third combinatorial dimension</h5>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <h4>3-3 \"Combinatorial 3\"</h4>\n" +
    "                                <p>A fully Connected 3-3-Combinatorial-Market</p>\n" +
    "\n" +
    "                                <p>6 nodes</p>\n" +
    "                                <p>15 edges - links</p>\n" +
    "\n" +
    "                                <p>Connection Lattice</p>\n" +
    "                                <img style=\"height:135px;\" src=\"images/comb3.png\">\n" +
    "                                \n" +
    "                                <p>Traversal Facet</p>\n" +
    "                                <img style=\"height:135px;\" src=\"images/comb3a.png\">\n" +
    "\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5>3-4</h5>\n" +
    "                                <p>Fully 3-linked 4 market</p>\n" +
    "                                <p>Related to 4 Decompose</p>\n" +
    "                                <p>4 combinatorial 3 Objects</p>\n" +
    "                                <p><b>Symmetry</b></p>\n" +
    "                                <p>24 NODES</p>\n" +
    "                                <p>60 EDGES</p>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5>3-5</h5>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <h5>3-N</h5>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <cytoscape style=\"height: 300px;width:100%;\" graph-options=\"options\" graph-elements=\"elementsObj\" graph-layout=\"layout\" graph-style=\"style\" graph-ready=\"graphReady\"></cytoscape>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">4 Space</h1>\n" +
    "                                    <h5 style=\"color:white\">4 Asset MultiMarket Connection Lattice(s)﻿</h5>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <h4>4-4 \"Combinatorial 4\"</h4>\n" +
    "                        <p>16 nodes</p>\n" +
    "                        <p>24 edges</p>\n" +
    "                        <p>`N` links</p>\n" +
    "                        <img style=\"height:135px;\" src=\"images/comb4.png\">\n" +
    "                        <img style=\"height:135px;\" src=\"images/comb4a.png\">\n" +
    "                        <img style=\"height:135px;\" src=\"images/comb4b.png\">\n" +
    "                        <img style=\"height:135px;\" src=\"images/comb4c.png\">\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                        <h5>4-5</h5>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                        <h5>4-N</h5>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div ng-if=\"selectedCombinatorial == 'COMBINATORIAL5'\">\n" +
    "                    <p><b>Combinatorial 5</b></p>\n" +
    "                    <p>SET OF COMB OBJECTS IN N SPACE</p>\n" +
    "                    <p>MAP COMP 5 -> COMP 7</p>\n" +
    "                    <p>HOW MANY 5 in 7?</p>\n" +
    "                    <p>PASCAL</p>\n" +
    "                    <div>\n" +
    "                        <p>5-5</p>        \n" +
    "                        <p>nodes</p>\n" +
    "                        <p>edges</p>\n" +
    "                        <p>links</p>\n" +
    "                        <p>5-6</p>  \n" +
    "                        <p>5-7</p>  \n" +
    "                        <p>5-N</p>  \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                \n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">N Space</h1>\n" +
    "                                    <h5 style=\"color:white\">Higher Dimensional Combinatorials</h5>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "\n" +
    "                        <h4>Combinatorial Rank</h4>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B'])\">2</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C'])\">3</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C','D'])\">4</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C','D','E'])\">5</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C','D','E','F'])\">6</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C','D','E','F','G'])\">7</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"combinatorialGenerator(['A','B','C','D','E','F','G','H'])\">8</a>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "                        \n" +
    "                        <h4>Traversal Facet</h4>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"inverseFacetGenerator(['A','B'])\">2</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"inverseFacetGenerator(['A','B','C'])\">3</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"inverseFacetGenerator(['A','B','C','D'])\">4</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"inverseFacetGenerator(['A','B','C','D','E'])\">5</a>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "                        \n" +
    "                        <h4>Pure Market Generator</h4>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"pureMarketGenerator(3, ['A','B','C','D'])\">3-4</a>\n" +
    "                        <a class=\"btn btn\" href=\"#\" ng-click=\"pureMarketGenerator(3, ['A','B','C','D','E'])\">3-5</a>\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "                    \n" +
    "                        <cytoscape graph-options=\"options\" graph-elements=\"elementsObj\" graph-layout=\"layout\" graph-style=\"style\" graph-ready=\"graphReady\"></cytoscape>\n" +
    "\n" +
    "\n" +
    "                        <p>Goals: 3-Space lattice connections over all assets 3-∞</p> \n" +
    "\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Layered Deep Learning</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <p style=\"color:gray;font-style:italic\">Computed Higher Dimensional Combinatorials</p>\n" +
    "                        <p style=\"color:gray;font-style:italic\">Computed Higher Dimensional Pathways</p>\n" +
    "                        <p style=\"color:gray;font-style:italic\">Through training on these principles we generate potential set for set traversals paths fulfilling the matching engine logic.</p>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                \n" +
    "                <div>\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?protocol,code,contract,developer,engineer,computer,complex')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Contextualized Portfolio Allocation</h1>\n" +
    "                                    <h5 style=\"color:white\">CRE8.CAPITAL</h5>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <h5>Investment and Generalized Portfolio Allocation</h5>\n" +
    "                        <p>Capital Asset Pricing Model..</p>\n" +
    "                        `E(R_i)=R_f+beta_i(E(R_m)-R_f)`\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                        <h5>Probability Density Analysis</h5>\n" +
    "                        <p style=\"color:gray;font-style:italic\">The backbone of market predictions and Intelligent Suggestion Engines; applicable for all string assets. Emergent Intelligence based Coordinated Intentional Time and Consumption for the present.</p>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                        <h4><a href=\"https://www.cre8.capital\"><b>CRE8.CAPITAL</b></a></h4>\n" +
    "                        <h5><a href=\"https://www.cre8.capital/api/data/marketImage\">Immutable Market Image</a></h5>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                        <p style=\"color:gray;font-style:italic\">Community Asset Pool & Management</p>\n" +
    "                        <p style=\"color:gray;font-style:italic\">Reduce risk, equalize investment returns, allow for emergent value intelligence</p>\n" +
    "\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"GROUPINTENTION\" style=\"background-color:white;min-height:70vh\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?community,planning,coordination')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Group Coordination</h1>\n" +
    "                    <h5 style=\"color:white\">Community Planning Around the Organization of Governance Rules, Responsibility Sets, & Intentional Time</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <h4>A Project Charter</h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Action Potential From Protocol.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Sets of Data Model Connections Rules which define mechanisms such as Democracy.</p>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h4>Associated Tasks, Responsibility Sets, & Intentional Time</a></h4>\n" +
    "                <p style=\"color:gray;font-style:italic\">Community Planning Around the Organization of Localized Responsibility Sets</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"bootstrapHack\" style=\"z-index:auto;\">\n" +
    "                    <div style=\"margin-left:15px;\">\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div hljs hljs-language=\"javascript\"  hljs-source=\"projectCharterModel\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
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
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokenization & Pattern Recognition</h1>\n" +
    "                    <h5 style=\"color:white\">Modular Validation</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-8\">\n" +
    "                <p style=\"color:gray;font-style:italic\">Deep Learning and video feeds validate, contextualize, and tokenize time.</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Application Defined ' Deep Learning ' Modules</p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tokenization with a high degree of consensus on context through multidimensional validation.</p>\n" +
    "                <p>\n" +
    "                <p style=\"color:gray;font-style:italic\">Tokenizing Public Spaces Though AI</p>\n" +
    "                <img src=\"images/aitoken.gif\">\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-4\" style=\"text-align:right\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "</div>");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("discover/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\" style=\"text-align:center\">\n" +
    "            	<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Discover</h1>\n" +
    "                <h5 ng-if=\"location.lat\" style=\"color:white\">{{location.lat}}, {{location.lng}}</h5>\n" +
    "                <h5 ng-if=\"searchQuery.context\" style=\"color:white\"> <span ng-repeat=\"item in searchQuery.context\">{{item.text}} </span></h5>\n" +
    "            	<h5 ng-if=\"true\">\n" +
    "            		<b><a style=\"color:white\" href=\"/apps\" ui-sref=\"apps\">Apps</a></b>\n" +
    "            		<b><a style=\"color:white\" href=\"/content\" ui-sref=\"contentList\">Content</a></b>\n" +
    "					<b><a style=\"color:white\" href=\"/items\" ui-sref=\"items\">Items</a></b>\n" +
    "					<b><a style=\"color:white\" href=\"/market\" ui-sref=\"markets\">Markets</a></b>\n" +
    "					<b><a style=\"color:white\" href=\"/members\" ui-sref=\"members\">Members</a></b>\n" +
    "					<b><a style=\"color:white\" href=\"/projects\" ui-sref=\"projects\">Projects</a></b>\n" +
    "					<b><a style=\"color:white\" href=\"/tasks\" ui-sref=\"tasks\">Tasks</a></b>\n" +
    "            	</h5>\n" +
    "            	<h5>\n" +
    "					<b ng-click=\"shuffleActivity()\"><a style=\"color:white\"><i class=\"fa fa-random\"></i></a></b>\n" +
    "            	</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "	    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet, null)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "		   	<li ng-if=\"currentUser\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getMyFollowers()\"><i class=\"fa fa-users\"></i> Following</a></li>\n" +
    "            <li ng-if=\"currentUser\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getMyProjects()\"><i class=\"fas fa-project-diagram\"></i> My Projects</a></li>\n" +
    "		    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		   	<div style=\"clear:both\"></div>\n" +
    "		</ul>\n" +
    "		<div class=\"card\">\n" +
    "            <tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "	    </div>\n" +
    "		<!--\n" +
    "		<div class=\"card\">	\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				FILTER\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		-->\n" +
    "	</div>\n" +
    "	<div ng-if=\"!stateIsLoading\" class=\"row\">\n" +
    "\n" +
    "		<!--TODO TEMPLATE -->\n" +
    "    	<div class=\"col-md-4 mobileHide\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "		    	<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "	                <div ng-click=\"$event.stopPropagation()\">\n" +
    "	                	<tags-input style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery.context\"></tags-input>\n" +
    "	                </div>\n" +
    "			        <div style=\"padding:16px;\">\n" +
    "			            <div ng-repeat=\"tag in sortedTagArray.slice(0,10)\" ng-click=\"$event.stopPropagation()\">\n" +
    "			                <a ng-click=\"$event.stopPropagation();filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "		    	<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolire,wonder');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "	                <div ng-click=\"$event.stopPropagation()\">\n" +
    "	                	<tags-input style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery.associations\"></tags-input>\n" +
    "	                </div>\n" +
    "        			<div style=\"padding:16px;\">\n" +
    "			            <div ng-repeat=\"association in sortedAssociationArray.slice(0,10)\" ng-click=\"$event.stopPropagation()\">\n" +
    "			                <a ng-click=\"$event.stopPropagation();filterContent(association.element.text)\"><b>{{association.element.text}}</b></a>\n" +
    "			            </div>\n" +
    "		            </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		    <div class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "		    	<div style=\"background:url('https://source.unsplash.com/1600x900/?city,mountain,forest');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<style type=\"text/css\">.angular-google-map-container{height:200px;}</style>\n" +
    "				<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "				    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "				        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "				            <div>\n" +
    "				                <div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div>\n" +
    "				            </div>\n" +
    "				        </ui-gmap-window>\n" +
    "				    </ui-gmap-marker>\n" +
    "                    <ui-gmap-circle center='map.center' radius='5000' fill='0.15' stroke='0.25'>\n" +
    "				</ui-gmap-google-map>\n" +
    "		        <div style=\"padding:16px;\">\n" +
    "	                <div ng-click=\"$event.stopPropagation()\">\n" +
    "		                <tags-input style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery.locations\"></tags-input>\n" +
    "		                <div layout=\"\">\n" +
    "		                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">Distance (km)</span></div>\n" +
    "		                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"newLocation.distance\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "		                </div>\n" +
    "		            </div>\n" +
    "        			<div style=\"padding:16px;\">\n" +
    "			            <div ng-repeat=\"location in sortedLocationArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "			                <a ng-click=\"$event.stopPropagation();filterContent(location.element)\"><b>{{location.element}}</b></a>\n" +
    "			            </div>\n" +
    "	                </div>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "    	<div class=\"col-md-8\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "    		<!--FILTER CARD-->\n" +
    "	    	<div class=\"card\" ng-if=\"true || locationFilter\">\n" +
    "	    		<div  ng-if=\"false && lat\" style=\"background:url('https://source.unsplash.com/1600x900/?city,mountain,forest');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1  style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "					            	<i class=\"fas fa-map-marker\"></i> {{lat}}, {{lng}}\n" +
    "					            </h5>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "				<div>\n" +
    "		    		<style type=\"text/css\">.angular-google-map-container{height:200px;}</style>\n" +
    "					<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "					    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "					        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "					            <div><div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div></div>\n" +
    "					        </ui-gmap-window>\n" +
    "					    </ui-gmap-marker>\n" +
    "                        <ui-gmap-circle center='map.center' radius='5000' fill='0.15' stroke='0.25'>\n" +
    "					</ui-gmap-google-map>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-repeat=\"item in activity\">\n" +
    "            	<div ng-if=\"item.model=='CONTENT'\"  ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "            	<div ng-if=\"item.model=='PROJECT'\"  ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "            	<div ng-if=\"item.model=='TASK'\"  ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "	            <div ng-if=\"item.model=='TRANSACTION'\" ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div>\n" +
    "			</div>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("event/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("event/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Event</h1>\n" +
    "            	<h5 style=\"color:white\">{{event.id}}</h5>\n" +
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
    "\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Chain ID:</b> <a>1</a>(Main Chain)</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Block Height:</b> 564366</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Block Number:</b> <a href=\"block/564365\" ui-sref=\"block({id:564365})\">564365</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Address:</b> <a href=\"#\">caf644ab582c42a56759764a15226ed2a1fa</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Verification Type:</b> <a href=\"\">Proof Of Work</a> (PoeT 141.112)</p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Peer(s):</b> <a href=\"member/troverman\" ui-sref=\"member.activity({path:'troverman'})\">caf644ab582c42a56759764a15226ed2a1fa</a></p>\n" +
    "					<p style=\"font-style:italic;color:gray;margin:0px\"><b>Block</b> <a>564366</a></p>\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "				</div>\n" +
    "				<div class=\"card-footer\">\n" +
    "                    <a style=\"color:grey\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\">\n" +
    "                        <i class=\"fas fa-eye\"></i> {{item.attention.general || 0}}\n" +
    "                    </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "                    <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<div style=\"padding-left:0px;padding-right:0px;\" class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"footer-links\" style=\"padding:3px;float:none\">\n" +
    "\n" +
    "			<!--\n" +
    "			<div style=\"float:right\"><a href=\"/\" ui-sref=\"home\"><img src=\"images/hyper.gif\"></a></div>\n" +
    "			<a style=\"font-weight:bold;font-size:15px;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" href=\"/\" ui-sref=\"home\">CRE8.XYZ</a>\n" +
    "			<br>\n" +
    "			<a href=\"/about\" ui-sref=\"about\">About</a>\n" +
    "			<a href=\"/discover\" ui-sref=\"discover\">Discover</a>\n" +
    "			<a href=\"/market\" ui-sref=\"markets\">Market</a>\n" +
    "			<a href=\"/projects\" ui-sref=\"projects\">Projects</a>\n" +
    "			<a href=\"/tasks\" ui-sref=\"tasks\">Tasks</a>\n" +
    "			<a href=\"/transparency\" ui-sref=\"transparency\">Transparency</a>\n" +
    "			-->\n" +
    "\n" +
    "			<div style=\"text-align:center\">\n" +
    "				<a href=\"/\"><img src=\"images/hypercube.gif\"></a>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<a style=\"font-weight:bold;font-size:15px;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" href=\"/\" ui-sref=\"home\">CRE8.XYZ</a>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<a href=\"/about\" ui-sref=\"about\">About</a>\n" +
    "				<a href=\"/apps\" ui-sref=\"apps\">Apps</a>\n" +
    "				<a href=\"/developers\" ui-sref=\"developers\">Developers</a>\n" +
    "				<a href=\"/transparency\" ui-sref=\"transparency\">Peer Network</a>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<a href=\"/discover\" ui-sref=\"discover\">Discover</a>\n" +
    "				<a href=\"/market\" ui-sref=\"markets\">Market</a>\n" +
    "				<a href=\"/items\" ui-sref=\"items\">Items</a>\n" +
    "				<a href=\"/members\" ui-sref=\"members\">Members</a>\n" +
    "				<a href=\"/projects\" ui-sref=\"projects\">Projects</a>\n" +
    "				<a href=\"/tasks\" ui-sref=\"tasks\">Tasks</a>\n" +
    "				<div class=\"spacing-5\"></div>\n" +
    "				<a ng-if=\"!currentUser\"  href=\"/login\" ui-sref=\"login\">Login</a>\n" +
    "				<a ng-if=\"!currentUser\"  href=\"/register\" ui-sref=\"register\">Register</a>\n" +
    "\n" +
    "				<a ng-if=\"currentUser\" href=\"/notifications\" ui-sref=\"notifications\">Notifications</a>\n" +
    "				<a ng-if=\"currentUser\" href=\"/account\" ui-sref=\"account\">Settings</a>\n" +
    "				<a ng-if=\"currentUser\" href=\"/logout\">Logout</a>\n" +
    "\n" +
    "			</div>\n" +
    "			<!--\n" +
    "			<div>\n" +
    "				<div style=\"float:right\"><a href=\"/\" ui-sref=\"home\"><img style=\"height:100px\" src=\"images/hyper.gif\"></a></div>\n" +
    "				<a style=\"font-weight:bold;font-size:15px;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" href=\"/\" ui-sref=\"home\">CRE8.XYZ</a>\n" +
    "				<br>\n" +
    "\n" +
    "				<a href=\"/about\" ui-sref=\"about\">About</a>\n" +
    "				<br>\n" +
    "\n" +
    "				<a href=\"/discover\" ui-sref=\"discover\">Discover</a>\n" +
    "				<br>\n" +
    "				\n" +
    "				<a href=\"/market\" ui-sref=\"markets\">Market</a>\n" +
    "				<a href=\"/marketplace\" ui-sref=\"marketPlace\">Marketplace</a>\n" +
    "				<a href=\"/members\" ui-sref=\"members\">Members</a>\n" +
    "				<a href=\"/projects\" ui-sref=\"projects\">Projects</a>\n" +
    "				<a href=\"/tasks\" ui-sref=\"tasks\">Tasks</a>\n" +
    "				<br>\n" +
    "\n" +
    "				<a href=\"/transparency\" ui-sref=\"transparency\">Peer Network</a>\n" +
    "			</div>\n" +
    "			-->\n" +
    "\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<!--\n" +
    "		<div class=\"sub-footer\">\n" +
    "			Terms Privacy Social etc\n" +
    "		</div>\n" +
    "		-->\n" +
    "\n" +
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
    "<!--TODO: CONTROLLER && STATE: RENAME TO INTO-->\n" +
    "<div ng-if=\"isTutorial\" ng-include=\"'tutorial/index.tpl.html'\"></div>\n" +
    "<div ng-if=\"!isTutorial\" class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-4 col-xs-12\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "    \n" +
    "            <div class=\"member-card\" style=\"margin-left:10px;margin-right:10px;margin-bottom:0px\" ng-click=\"subNavToggle(currentUser)\">\n" +
    "                <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "                    <a href=\"member/{{currentUser.username}}\" ui-sref=\"member.activity({path:currentUser.username})\">\n" +
    "                        <img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"member-card-info\">\n" +
    "\n" +
    "                    <h4><a href=\"member/{{currentUser.username}}\" ui-sref=\"member.activity({path:currentUser.username})\">{{currentUser.username}}</a></h4>\n" +
    "                    \n" +
    "                    <p style=\"font-size:12px;\" ng-click=\"$event.stopPropagation();memberQRToggle(currentUser);\"><a style=\"color:gray\"><i class=\"fas fa-qrcode\"></i> {{currentUser.id}}</a></p>\n" +
    "\n" +
    "                    <p style=\"color:gray;font-size:12px;\">\n" +
    "                        <span><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online</span>\n" +
    "                        <span ng-if=\"currentUser.status\"><br>{{currentUser.status}}</span>\n" +
    "                    </p>\n" +
    "\n" +
    "                    <p style=\"font-size:13px;\">\n" +
    "                        <a href=\"member/{{currentUser.username}}/projects\" ui-sref=\"member.projects({path:currentUser.username})\">{{currentUser.projectCount || 0}} Projects</a> | \n" +
    "                        <a href=\"member/{{currentUser.username}}/followers\" ui-sref=\"member.followers({path:currentUser.username})\">{{currentUser.followerCount || 0}} Followers</a> | \n" +
    "                        <a href=\"member/{{currentUser.username}}/following\" ui-sref=\"member.following({path:currentUser.username})\">{{currentUser.followingCount || 0}} Following</a>\n" +
    "                    </p>\n" +
    "                    \n" +
    "                    <p style=\"color:gray\"><a href=\"member/{{currentUser.username}}/assets\" ui-sref=\"member.assets({path:currentUser.username})\">{{currentUser.totalWork}} Reputation</a></p>\n" +
    "\n" +
    "                </div> \n" +
    "            </div>\n" +
    "\n" +
    "            <!--TODO: DISCOVERABILITY AREA HERE-->\n" +
    "            <div class=\"mobileFix\">\n" +
    "                <div class=\"card\" ng-if=\"sortedTagArray.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolore,wonder,connection');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation();filterContent(tag.element)\">\n" +
    "                            <a><b>{{tag.element}}</b></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card\" ng-if=\"sortedAssociationArray.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolire,wonder,data,city');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div ng-repeat=\"association in sortedAssociationArray\" ng-click=\"$event.stopPropagation();filterContent(tag.element)\">\n" +
    "                            <a><b>{{association.element}}</b></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card\" ng-if=\"locations.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolire,wonder,city,country,forest,mountain,fire,mesa');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div class=\"container\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px;\">\n" +
    "                        <div ng-repeat=\"location in locations\" ng-click=\"$event.stopPropagation();filterContent(tag.element)\">\n" +
    "                            <a>{{location}}</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-8 col-xs-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');min-height:135px\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75);height:135px\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                            <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                        </div> \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center;padding:15px\">\n" +
    "                            <!--PERSONALIZED MESSAGE??-->\n" +
    "                            <h1 style=\"text-transform: capitalize;;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{selectedTab.toLowerCase()}}</h1>\n" +
    "                            <h5 style=\"color:white\">{{currentUser.username}}</h5>\n" +
    "                            <!--Feed-->\n" +
    "                            <!--SELECTED /ACTIVE FILTERS-->\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div style=\"background-color:white\">\n" +
    "                    <div class=\"member-tab-container\" style=\"padding-left:0px\">\n" +
    "                        <div style=\"text-align:center\">\n" +
    "                            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                                <li ng-click=\"$event.stopPropagation();selectTab('ACTIVITY');\" style=\"font-size:14px\"><a><i class=\"fas fa-th-list\"></i> Activity</a></li>\n" +
    "                                <li ng-click=\"$event.stopPropagation();selectTab('BALANCES');\" style=\"font-size:14px\"><a><i class=\"fas fa-universal-access\"></i> Balances</a></li>\n" +
    "                                <li ng-click=\"$event.stopPropagation();selectTab('SUGGESTIONS');\" style=\"font-size:14px\"><a><i class=\"fas fa-exclamation\"></i><i class=\"fas fa-question\"></i> Suggestions</a></li>\n" +
    "                                <li ng-click=\"$event.stopPropagation();selectTab('VALUE MAP');\" style=\"font-size:14px\"><a><i class=\"fas fa-globe\"></i> Value Map</a></li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--TODO: DISCOVERABILITY AREA HERE-->\n" +
    "            <div ng-if=\"selectedTab =='ACTIVITY'\">\n" +
    "\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "\n" +
    "                <div class=\"card\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                    <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoadingFeed\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\" style=\"margin-top:0px;\"><button class=\"btn btn-default log-btn\" ng-click=\"cre8Toggle()\">CRE8</button></div>\n" +
    "                <div class=\"card\" ng-show=\"activity.length == 0\"><div style=\"padding:16px;\"><span style=\"color:gray\" >There's nothing here..</span></div></div>\n" +
    "\n" +
    "                <div ng-repeat=\"item in activity\">\n" +
    "                    <div ng-if=\"item.model=='CONTENT'\" ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='PROJECT'\" ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='TASK'\" ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='TIME'\" ng-include=\"'templates/cards/timeCard.tpl.html'\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <!--TODO: TEMPALTE-->\n" +
    "            <div ng-if=\"selectedTab =='BALANCES'\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <div><highchart config=\"balanceChart\"></highchart></div>\n" +
    "                        <h5>Balance Lookup <br><span style=\"font-size:11px;color:gray\">{{currentUser.id}}</span></h5>\n" +
    "                        <form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                            <input ng-model=\"$root.balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Asset\">\n" +
    "                            <div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                        <div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "                            <h5>\n" +
    "                                <img style=\"border-radius:100%;height:32px;padding-right:5px;\" ng-src=\"http://identicon-1132.appspot.com/{{balanceLook}}?s=8&p=8&f=png\">\n" +
    "                                <a href=\"market/{{balanceLook}}\" ui-sref=\"market({id:balanceLook})\">{{balanceLook}}</a>: {{balanceLookupValue}}\n" +
    "                            </h5>\n" +
    "                        </div>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <table class=\"table table-striped table-hover\">\n" +
    "                            <thead>\n" +
    "                                <tr>\n" +
    "                                    <th>Identifer</th>\n" +
    "                                    <th>Value</th>\n" +
    "                                </tr>\n" +
    "                            </thead>\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"item in sortableSet\">\n" +
    "                                    <td><img style=\"border-radius:100%;height:32px;padding-right:5px;\" ng-src=\"http://identicon-1132.appspot.com/{{balanceLook}}?s=8&p=8&f=png\"><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                                    <td>{{item[1]}}</td>\n" +
    "                                </tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--MODIFIED FEED FORMAT WITH CARDS.. TO START THE ACTION -->\n" +
    "            <!--ACTIONS AND CREATES -->\n" +
    "            <div ng-if=\"selectedTab =='SUGGESTIONS'\">\n" +
    "                <div class=\"card\" ng-repeat=\"item in suggestions\">\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <h3><a href=\"{{item.model.toLowerCase()}}/{{item.id}}\">{{item.title}}</a></h3>\n" +
    "                        <p>{{item.description}}</p>\n" +
    "                        <!--<button class=\"btn btn-default log-btn\" ng-click=\"shuffleSuggestions()\">Create</button>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"shuffleSuggestions()\">More</button></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--PAST SUMMARY; UPCOMING SCHEDULE-->\n" +
    "\n" +
    "            <div ng-if=\"selectedTab =='VALUE MAP'\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <h5>Position Lookup<br><span style=\"font-size:11px;color:gray\">{{currentUser.id}}</span></h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <!--TEMP-->\n" +
    "                <div ng-include=\"'tutorial/templates/valueMapBuilder.tpl.html'\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/templates/intro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/templates/intro.tpl.html",
    "<div class=\"intro\" style=\"margin-top:-50px\">\n" +
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
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "\n" +
    "                <!--\n" +
    "                CREATE IS EMPOWERMENT\n" +
    "                CREATE IS INCLUSIVITY\n" +
    "                CREATE IS UNITY\n" +
    "                -->\n" +
    "                <!--<h3>WE ARE ALL VALUABLE</h3>-->\n" +
    "\n" +
    "                <h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">WE ARE VALUABLE</h3>\n" +
    "\n" +
    "                <!--<h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">INFORMATION IS VALUABLE</h3>-->\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Sharing creates value, from imagination and intention to work and organization.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Sharing reflects abundance. With inclusivity maximalism, you get what you give.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Information is valuable. Sharing information creates value & multidimensional income.</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/about\" ui-sref=\"about\">learn more</a>\n" +
    "                <div class=\"spacing-100\"></div>\n" +
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
    "                <div class=\"spacing-100\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <h3 style=\"font-family:'Titillium Web',sans-serif;font-weight:600\">BUILD AN EGALITARIAN WORLD</h3>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Everyone & everything has value. What is your Story?</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">What do you believe is valuable? Sharing your values creates a mechanism of empowerment. <!--Share your values to create a mechanism of empowerment. --> We create value in each other!</p> <!--we value each other!-->\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/register\" ui-sref=\"register\">Join Our Community</a>\n" +
    "                <div class=\"spacing-50\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "        <!--\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?connection,intention,pray')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div class=\"container\">\n" +
    "                                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">INTENTIONALITY</h1>\n" +
    "                                <h5 style=\"color:white\">Coordination through Decentralized Peer Governance</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Validation asserts earned reputation which naturally organizes group dynamics. Interoperable Organization Protocols give rise to diverse operant frameworks.</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Human Validated Proof of Work is a voting mechanism weighted by context-specific reputation.</p>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px\" src=\"https://www.voetr.com/images/voetr-about.png\"/>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-100\"></div>\n" +
    "        -->\n" +
    "\n" +
    "        <!--\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?dimension,creating,creation,nature,code')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">MULTIDIMENSIONALITY</h1>\n" +
    "                                <h5 style=\"color:white\">The Moment of Liquidity is Combinatorial</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Multidimensionality & Gestalt Princples</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Tokenization & Pluralism in a Market Space</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Token Language Defined by An Interoperable Application Ecosystem</p>\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">Asset Relations & The empowering mechanism of creating a value map</p>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <div class=\"row\"><div class=\"col-md-6\"><a style=\"width:100%\" class=\"btn btn-default log-btn\" href=\"/market\">EXPLORE THE MARKET</a></div></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-100\"></div>\n" +
    "        -->\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?intelligence,camera,eye,watching,future,city,patterns')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">\n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">TRANSPARENCY</h1>\n" +
    "                                <h5 style=\"color:white\">The Creation of Emergent Intelligence</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">App specific interoperable validation protocols allow for value validation though Machine Learning & Artificial Intelligence. Information and Intention create emergent intelligence in programatic value.</p>\n" +
    "                -->\n" +
    "\n" +
    "                <p style=\"font-style:italic;margin:0px;color:gray\">The <a href=\"/transparency\" ui-sref=\"transparency\"><b>Decentralized Network</b></a> is you! Decentralized peers create the network.</p>\n" +
    "\n" +
    "                <!--<p style=\"font-style:italic;margin:0px;color:gray\">Finding congruence with human and machine consensus.</p>-->\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"col-md-6 mobileHide\" style=\"text-align:center\">\n" +
    "                <img style=\"height:200px;\" src=\"images/latticespin.gif\">\n" +
    "                <img style=\"height:200px;\" src=\"images/dna.gif\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-100\"></div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?code,create,collaborate,future,city,awesome,love')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">WE CREATE THE FUTURE TODAY</h1>\n" +
    "                                <h5 style=\"color:white\">Worldwide and always expanding, help cocreate our shared vision.</h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "                <h5><a href=\"/apps\" ui-sref=\"apps\"><b>Application Ecosystem</b></a></h5>\n" +
    "                <h5><a href=\"/developers\" ui-sref=\"developers\"><b>Developer Documentation</b></a></h5>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-100\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry')\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div style=\"padding:15px\">\n" +
    "                                    <h1 class=\"imageContainerSmallDivH1\">Join Our Community</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <form role=\"form\">\n" +
    "                            <div class=\"form-group\"><input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"><i class=\"fa fa-envelope\" autocomplete=\"email\"></i></div>\n" +
    "                            <div class=\"form-group\"><input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\" autocomplete=\"username\"><i class=\"fa fa-user\"></i></div>\n" +
    "                            <div class=\"form-group\"><input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\" autocomplete=\"new-password\"><i class=\"fa fa-lock\"></i></div>\n" +
    "                            <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                            <br><br>\n" +
    "                            <div class=\"social-log\">\n" +
    "                                <a href=\"/login\" ui-sref=\"login\"><h5 style=\"color: gray;font-style: italic;\"><b>Already A Member?</b></h5></a>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                        <div class=\"selfClear\"></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "            <!--\n" +
    "            <p style=\"font-style:italic;margin:0px;color:gray\">WHO WE ARE; WHAT WE DO; WHAT WE CREATE</p>\n" +
    "            <p style=\"font-style:italic;margin:0px;color:gray\">Inspiring Tasks, Member, & Projects</p>\n" +
    "            <p style=\"font-style:italic;margin:0px;color:gray\">Wanna Collab? Get Involved in your Local Community.</p>\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            -->\n" +
    "\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                            <div style=\"padding:15px\">\n" +
    "                                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"/discover\" ui-sref=\"discover\">Discover CRE8</a></h1>\n" +
    "                                <h5>\n" +
    "                                    <b><a style=\"color:white\" href=\"/apps\" ui-sref=\"apps\">Apps</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/content\" ui-sref=\"contentList\">Content</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/items\" ui-sref=\"items\">Items</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/market\" ui-sref=\"markets\">Market</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/members\" ui-sref=\"members\">Members</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/projects\" ui-sref=\"projects\">Projects</a></b>\n" +
    "                                    <b><a style=\"color:white\" href=\"/tasks\" ui-sref=\"tasks\">Tasks</a></b>\n" +
    "                                </h5>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoadingIntro\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div ng-if=\"!stateIsLoadingIntro\">\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getLatLng()\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "                    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "                <div class=\"card\">\n" +
    "                    <tags-input class=\"\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-repeat=\"item in activity\">\n" +
    "                    <div ng-if=\"item.model=='CONTENT'\" ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='PROJECT'\" ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='TASK'\" ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "                    <div ng-if=\"item.model=='TIME'\" ng-include=\"'templates/cards/timeCard.tpl.html'\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <div ng-show=\"false\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "            -->\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("item/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/index.tpl.html",
    "<style>.ngCytoscape{height: 200px;width:100%;}</style>\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1>{{item.title}}</h1>\n" +
    "                        <h5 style=\"color:white\">{{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"markers.length>0\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div>\n" +
    "                            <div style=\"font-size: 15px;\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();\" href=\"item/{{market.id}}\">{{marker.content}}</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ACTIVITY')\">Activity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ACTIONS')\">Actions</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\">Associations</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('COMPONENTS')\">Components</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('HISTORY')\" >History</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('MARKET')\">Liquidiy</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('STATS')\">Stats</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS')\">Tokens</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();orderToggle(null, item);\" class=\"btn btn-default\">Purchase</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr style=\"margin:0px;\">\n" +
    "        <div style=\"padding:16px;\" ng-if=\"selectedTab =='INFORMATION'\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" style=\"display:inline\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\"><span style=\"font-weight:800\">{{item.user.username}}</span></a>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <p><a ng-repeat=\"tag in item.tags.split(',')\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <div ng-click=\"$event.stopPropagation();\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            <div class=\"spacing-5\"></div>       \n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();reactionToggle(content)\" style=\"padding:5px;color:grey\"><i class=\"fas fa-plus\"></i> reaction </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fa fa-check\"></i> validate </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();actionToggle(item)\" style=\"padding:5px;color:grey\"><i class=\"fas fa-atom\"></i> action </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "        <div ng-if=\"selectedTab =='ACTIONS'\" ng-include=\"'item/templates/actions.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'item/templates/associations.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'item/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='HISTORY'\" ng-include=\"'item/templates/history.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='COMPONENTS'\" ng-include=\"'item/templates/components.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='MARKET'\" ng-include=\"'item/templates/market.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='STATS'\" ng-include=\"'item/templates/stats.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'item/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("item/templates/actions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/actions.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?blueprint,code,parts,components,designs');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Actions</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">   \n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"actionToggle(item)\">+ Action</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("item/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"context in item.context\">{{context}}, </span>\n" +
    "                </div>\n" +
    "                <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"association in item.associationModels\" ng-click=\"cardDetailExpand(association)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{association.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(association)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in association.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("item/templates/components.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/components.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?blueprint,code,parts,components,designs');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Components</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">   \n" +
    "        <!--ITEM ITEM ASSOCIATION-->\n" +
    "        <h5>Component Graph</h5>\n" +
    "        <h5>Single Item</h5>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("item/templates/history.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/history.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,exchange,history,item,transaction');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">History</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"card\">\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <h5>Item Created: {{item.createdAt | date}}</h5>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    " <div ng-repeat=\"item in transactions\">\n" +
    "    <div ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div></div>\n" +
    "</div>");
}]);

angular.module("item/templates/market.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/market.tpl.html",
    "<!--LIQUIDITY-->\n" +
    "<!--CONNECT PURCHASE TO ORDER FUILFUILMENT AND CONNECTIONG PROTOS > > >-->\n" +
    "<!--IF LIQDUID OR NOT .. AKA IF SELL ORDER FOR TOKEN NFT ..-->\n" +
    "<!--ORDER FUILFILMENT COMES FROM LINKED INFO IN ORDER-->\n" +
    "<!--ADDRESS.. NAME PARAM-->\n" +
    "<!--PURCHASE NEEDS TO BE VERY.. EASY..-->\n" +
    "<!--MARKET | TRAVERSAL-->\n" +
    "\n" +
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?code,exchange,cash,finance,graphs,explore');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Liquidity</h1>\n" +
    "                    <h5><a style=\"color:white\" href=\"market/{{item.id}}\" ui-sref=\"market({id:item.id})\">{{item.id}} Market</a></h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "            <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"orderToggle(item)\">+ Order</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"orders.length > 0\">\n" +
    "            <div ng-repeat=\"input in inputVector\">\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{input.text}}</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"inputVectorWeight[$index]\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"{{input}}\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{inputVectorWeight}}</span></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <cytoscape graph-options=\"options\" graph-elements=\"elementsObj\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape>\n" +
    "\n" +
    "            <!--<h5>InputVector: <span ng-repeat=\"input in inputVector\"><a href=\"market/{{input}}\">{{input.text}}</a> </span>-->\n" +
    "            <!--NEED TO DO HIGH DIMENSIONAL TRANING.. LEARNING SETS ARE REAL TRAVERSALS.. JUST DO INPUT OUTPUT VECTORS: BULK TRAIN--> \n" +
    "            <!--<h5>OutputVector: {{item.amountSet}} <span ng-repeat=\"output in outputVector\"><a href=\"market/{{output}}\">{{output.text}}</a> </span>-->\n" +
    "\n" +
    "            <form ng-submit=\"marketTraverse(tokens, outputVector)\">\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Input Vector\" ng-model=\"inputVector\"></tags-input>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Output Vector\" ng-model=\"outputVector\"></tags-input>\n" +
    "            </form>\n" +
    "            <!--TRAVERSAL PARAMETERS-->\n" +
    "            <p ng-repeat=\"result in marketOutput\" style=\"color:gray;font-style:italic;font-size:10px\">\n" +
    "                <span>[tokens] = {{result[0]}} <a href=\"market/{{result[1]}}\" ui-sref=\"market({id:result[1]})\">{{result[1]}}</a></span>\n" +
    "                <!--[IDENTITY] == 100% EACH .. OR WEIGHTED.. OR..-->\n" +
    "            </p>\n" +
    "\n" +
    "\n" +
    "            <!--IE TABLES FOR MARKET LOOKS-->\n" +
    "\n" +
    "            <!--VALUE MATRIX HERE-->\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--POTIENTALLY (EMBED) MARKET HERE-->\n" +
    "<div ng-repeat=\"item in orders\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div class=\"container\">\n" +
    "                        <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                            <a style=\"color:white;font-weight:700\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a>\n" +
    "                        </span>\n" +
    "                        <br>\n" +
    "                        <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                            <a style=\"color:white;font-weight:700\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a>\n" +
    "                        </span>\n" +
    "                        <h5 style=\"color:white;font-weight:400\"><span style=\"font-size:10px\">{{item.type}}</span></h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "           \n" +
    "            <p>\n" +
    "                <a ng-click=\"$event.stopPropagation();renderReputationToggle(item)\" style=\"display:inline\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    <span style=\"font-weight:800\">{{item.user.username}}</span>\n" +
    "                </a>\n" +
    "            </p>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "                    <div class=\"card\">\n" +
    "                        <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                    <div style=\"padding:15px\">\n" +
    "                                        <h2 style=\"color:white\">Set Alpha α</h2>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div style=\"padding:16px\">\n" +
    "                            <table class=\"table table-striped table-hover\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>Asset</th>\n" +
    "                                        <th>Amount</th>\n" +
    "                                    </tr>\n" +
    "                                </thead>\n" +
    "                                <tbody>\n" +
    "                                    <tr ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                                        <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                                        <td>{{value}}</td>\n" +
    "                                    <tr>\n" +
    "                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "                    <div class=\"card\">\n" +
    "                        <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,beta,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                    <div style=\"padding:15px\">\n" +
    "                                        <h2 style=\"color:white\">Set Beta β</h2>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div style=\"padding:16px\">\n" +
    "                            <table class=\"table table-striped table-hover\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>Asset</th>\n" +
    "                                        <th>Amount</th>\n" +
    "                                    </tr>\n" +
    "                                </thead>\n" +
    "                                <tbody>\n" +
    "                                    <tr ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                                        <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                                        <td>{{value}}</td>\n" +
    "                                    <tr>\n" +
    "                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <cytoscape graph-options=\"options\" graph-elements=\"item.directedGraph\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape>\n" +
    "\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a style=\"color:grey\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\"><i class=\"fas fa-eye\"></i> {{item.attention.general || 0}}</a>\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();reply(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\" ui-sref=\"order({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("item/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("item/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"tokenChart\"></highchart>\n" +
    "         <!--TODO MOBILE-->\n" +
    "         <!--UNIFITY TOKEN MODEL-->\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in sortableSet\">\n" +
    "                    <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                    <td>{{item[1]}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("items/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("items/index.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.angular-google-map-container{height: 200px;}\n" +
    "	.card tags-input .tags.focused{box-shadow:0 0 0px 0px rgba(255, 255, 255, 0);-webkit-box-shadow:0 0 0px 0px rgba(255, 255, 255, 0);}\n" +
    "	.card tags-input .host{margin:0px;border:0px;}\n" +
    "</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?{{searchQueryString}}')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\" style=\"text-align:center;\">\n" +
    "	            <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Items</h1>\n" +
    "	            <h5 style=\"color:white\">{{itemCount}} {{selectedTag}}</h5>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div ng-if=\"filterSet.context.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER',filterSet)\">\n" +
    "			 	<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"context in filterSet.context.slice(0,20)\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a ng-click=\"filterContent(context[0])\"><b>{{context[0]}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		    <div ng-if=\"filterSet.associations.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER',filterSet)\">\n" +
    "		    	<div style=\"background:url('https://source.unsplash.com/1600x900/?connection,code,explore,wonder,graph,node');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"association in filterSet.associations\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a ng-click=\"filterContent(association.id)\"><b>{{association.title}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div ng-if=\"filterSet.locations.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER',filterSet)\">\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?location,forest,city,map');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"location in locations\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a ng-click=\"filterContent(location)\"><b>{{location}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div ng-if=\"sortedAssetArray.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER',filterSet)\">\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?asset,token,money,code,value,people,energy');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Assets</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"asset in sortedAssetArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a ng-click=\"filterContent(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-9\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER',filterSet, item)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "		    <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "			<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"itemToggle()\">+ Item</button></div>\n" +
    "			<div ng-repeat=\"item in items\"><div ng-include=\"'templates/cards/itemCard.tpl.html'\"></div></div>\n" +
    "			<div ng-show=\"true\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
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
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\" ng-model=\"newLogin.identifier\" autocomplete=\"username\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\" autocomplete=\"current-password\" ng-model=\"newLogin.password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" ng-click=\"login()\">Sign in</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\" ui-sref=\"register\"><h5 style=\"color:gray;font-style:italic\"><b>Not A Member Yet?</b></h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<style>.ngCytoscape{height: 400px;width:100%;}</style>\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(market)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{token.string || stateParams.id}}')\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(market)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:center;font-size:30px\" class=\"container\">\n" +
    "                            <img style=\"height:50px;width:50px\" src=\"http://identicon-1132.appspot.com/{{token.id}}\"/>\n" +
    "                            {{token.string || stateParams.id}}\n" +
    "                        </h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('MARKETS')\"><i class=\"fa fa-exchange\"></i> Markets</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ANALYSIS')\"><i class=\"fas fa-project-diagram\"></i> Analysis</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\" ng-if=\"selectedTab=='INFORMATION'\">\n" +
    "        <div class=\"card\">\n" +
    "        	<div style=\"background:url('https://source.unsplash.com/1600x900/?lattice,geometry,crystal,code');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Information</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12\">\n" +
    "						<div>\n" +
    "							<h4 ng-if=\"markets.length\">Market Connectivity: {{markets.length}}</h4>\n" +
    "							<h4>Assets</h4>\n" +
    "							<div>\n" +
    "					    		<p><b><a ng-click=\"$event.stopPropagation();cardDetailToggle(token)\">{{token.string}}</a></b></p>	\n" +
    "								<p style=\"font-style:italic;color:gray\">In Circulation: {{token.information.inCirculation}}</p>\n" +
    "								<h5>Logic & Protocols</h5>\n" +
    "					    		<p style=\"font-style:italic;color:gray\">{{markets.protocols}}</p>\n" +
    "					    		<p style=\"font-style:italic;color:gray\">Transferrable: {{token.logic.transferrable}}</p>\n" +
    "					    		<p style=\"font-style:italic;color:gray\">Mint: {{token.logic.mint}}</p>\n" +
    "					    		<div>\n" +
    "						    		<p><b>Action</b></p>\n" +
    "									<p style=\"font-style:italic;color:gray\"><a href=\"{{token.model.toLowerCase()}}/{{token.id}}\">{{token.model.toUpperCase()}}</a></p>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div class=\"spacing-5\"></div>\n" +
    "			    	</div>\n" +
    "		    	</div>\n" +
    "    		</div>    		\n" +
    "    	</div>	\n" +
    "    </div>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div ng-if=\"selectedTab =='ANALYSIS'\" ng-include=\"'market/templates/analysis.tpl.html'\"></div>\n" +
    "		<div ng-if=\"selectedTab =='MARKETS'\" ng-include=\"'market/templates/markets.tpl.html'\"></div>\n" +
    "		<div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'market/templates/content.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("market/templates/analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/analysis.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?lattice,geometry,crystal,code');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Market Analysis</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <p>Size: {{markets.length}}</p>\n" +
    "        <p>Rank: {{stateParams.id.split(',').length}}\n" +
    "        <p>Nodes: {{graphDataPower.nodes.length}}, Connections: {{graphDataPower.links.length}}</p>\n" +
    "        <p>Computed Lattice Neighborhood</p>\n" +
    "        \n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        <div ng-if=\"orders.length>0\" class=\"col-md-12\">\n" +
    "            <cytoscape graph-options=\"directedGraphOptions\" graph-elements=\"elementsObj\" graph-layout=\"directedGraphLayout\" graph-style=\"directedGraphStyle\"></cytoscape>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        <!--TOP OWNERS??? WOULD BE COOL:)-->\n" +
    "        <!--GRAPH OF ...-->\n" +
    "\n" +
    "        <!--NEED (parallel || APROPO) of GRAPH-->\n" +
    "\n" +
    "        <!--CONJECTURE; ALL OR PATHS REDUCE TO POWERSET CONTAINED COMBINAORIAL-->\n" +
    "        <!--DO THE TRAVERSALS NEXT.. uhm..-->\n" +
    "        <!--BRAID..-->\n" +
    "        <!--remember eight d depth.. basal tensor to reduce computationals complexity - reflections contain . .\n" +
    "            a-b-c-d-d-f-g\n" +
    "                - power set in powerset \n" +
    "                    -eight powers of braids etc\n" +
    "            alg removes loops first then. .\n" +
    "        -->\n" +
    "\n" +
    "        <div>\n" +
    "\n" +
    "            <h4>Immutable Structure</h4>\n" +
    "            <div hljs hljs-language=\"javascript\"  hljs-source=\"renderImmutableMarket\"></div>\n" +
    "            <div hljs hljs-language=\"javascript\"  hljs-source=\"renderImmutableMarketNEW\"></div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <h4>Potiental Connection</h4>\n" +
    "            <div hljs hljs-language=\"javascript\"  hljs-source=\"renderImmutableMarketPower\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        <div>\n" +
    "\n" +
    "            <!--TEMP?-->\n" +
    "            <!--TABLE OF ORDERS-->\n" +
    "            <!--WERE DOING IMMUTALBE STRUCURE-->\n" +
    "            <h4>Orders</h4>\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>setAlpha</th>\n" +
    "                        <th>setBeta</th>\n" +
    "                        <th>Id</th>\n" +
    "                    </tr>\n" +
    "                <thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"order in orders\">\n" +
    "                        <td>{{order.setAlpha}}</td>\n" +
    "                        <td>{{order.setBeta}}</td>\n" +
    "                        <td><a href=\"order/{{order.id}}\" ui-sref=\"order({id:order.id})\">{{order.id}}</a></td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <h4>CRE8.CAPITAL <a href=\"https://www.cre8.capital\"><i class=\"fas fa-link\"></i></a></h4>\n" +
    "        <h5>Probability Density Functions</h5>\n" +
    "\n" +
    "        <!--COMBINITORIALS SERVED FIRST-->\n" +
    "        <!--DEPTH OF THE COMBINITORIAL SPACES-->\n" +
    "        <!--COMBINITORIAL & MANIFOLD MAPPING SPACE(S)-->\n" +
    "\n" +
    "        <!--VALUE VECTOR-->\n" +
    "        <!--1ST DEGREE-->\n" +
    "        <!--VALUE MATRIX-->\n" +
    "        <!--VALUE TENSOR-->\n" +
    "        <!--VALUE TENSOR NETWORK-->\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("market/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/content.tpl.html",
    "<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"contentToggle()\">+ Market Content</button></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\" ui-sref=\"member({path:item.user.username})\">{{item.user.username}}</a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "        </div> \n" +
    "        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "    </div>\n" +
    "    <div class=\"\" class=\"card-footer\">\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{item.reactions.,inus}} dislike </a>\n" +
    "        <a style=\"padding:5px;color:grey\" href=\"#\" ng-click=\"reply(item)\"><i class=\"far fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "    <div ng-show=\"item.showReply\" class=\"card-footer\">\n" +
    "        <form role=\"form\" ng-submit=\"createContent(item)\">\n" +
    "            <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','h2','bold','italics','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("market/templates/markets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("market/templates/markets.tpl.html",
    "<div class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "    <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"showManifold = !showManifold\"><i class=\"fas fa-infinity\"></i> Manifold Actions</a></li>\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-dna\"></i> Type <span style=\"font-size:10px;color:gray\"></span></a>\n" +
    "        </li>\n" +
    "        <li ng-click=\"sortToggle()\" style=\"float:right;font-size:14px\"><a href=\"#\">Sort By Base Volume <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"orderToggle(token)\">+ Market Order</button></div>\n" +
    "\n" +
    "    <div ng-show=\"!showManifold\" class=\"card\" ng-repeat=\"market in markets\" ng-click=\"cardDetailToggle(market)\">\n" +
    "      \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{market.string}}');height:100px;min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(market)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <a style=\"color:white;word-break:break-word\" ng-click=\"$event.stopPropagation();\" href=\"market/{{stateParams.id}}/{{market.string}}\" ui-sref=\"marketPair({ setAlpha: stateParams.id, setBeta:market.string })\">\n" +
    "                                {{token.string || stateParams.id}} - {{market.string}}\n" +
    "                            </a>\n" +
    "                        </h5>\n" +
    "                        <h5>\n" +
    "                            <a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"market/{{stateParams.id}}\" ui-sref=\"market({ id: market.string})\">\n" +
    "                                {{market.string}}\n" +
    "                            </a>\n" +
    "                        </h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-12\">\n" +
    "                    <p style=\"color:gray;font-size:10px\">Rate | Change | Depth</p>\n" +
    "                    <p style=\"color:gray;font-size:10px\">{{market.info.rate}} | {{market.info.dailyChange}} | {{market.info.marketDepth}}</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--MANIFOLD-->\n" +
    "    <div ng-show=\"showManifold\">\n" +
    "        <div class=\"card\" ng-repeat=\"item in manifolds\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?lattice,geometry,crystal,code');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"market/{{token.string}}{{item.title}}\" ui-sref=\"market({ id: token.string+item.title})\">{{item.title}}</a></h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <p><a href=\"market/{{token.string}}{{item.title}}{{item.manifolds}}\" ui-sref=\"market({ id: token.string+item.title+item.manifolds})\">{{item.manifolds}}</a></p>\n" +
    "            </div> \n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("marketPair/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("marketPair/index.tpl.html",
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(market)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:30px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <img style=\"height:50px;width:50px\" ng-src=\"http://identicon-1132.appspot.com/{{replace(market)}}\"/>\n" +
    "                            <span style=\"word-break:break-word\"><a style=\"color:white;font-weight:700\" href=\"market/{{market}}\" ui-sref=\"market({id:market})\">{{market}}</a></span>\n" +
    "                        </h1>\n" +
    "                        <h1 style=\"font-size:30px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <img style=\"height:50px;width:50px\" ng-src=\"http://identicon-1132.appspot.com/{{replace(market1)}}\"/>\n" +
    "			            	<span style=\"word-break:break-word\"><a style=\"color:white;font-weight:700\"  href=\"market/{{market1}}\" ui-sref=\"market({id:market1})\">{{market1}}</a></span>\n" +
    "                        </h1>\n" +
    "                        <!--\n" +
    "                        <h5 style=\"color:white\">\n" +
    "			        		<span style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "			        		<span style=\"color:green\">{{percentChange.toFixed(2)}}%</span> Daily Change | \n" +
    "			        		<span style=\"color:red\">{{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}}</span> Daily Trade Volume | \n" +
    "			        		<span>{{marketDepth.toFixed(2)}}</span> Total Market Depth\n" +
    "			        	</h5>\n" +
    "			        	<h5 style=\"color:white\">\n" +
    "			            	Last Trade Price: <span style=\"color:white\">{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "			            	Highest Bid <span style=\"color:white\">{{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}}</span> | \n" +
    "			            	Lowest Ask <span style=\"color:white\">{{bidAskChart.series[1].data[0][0].toFixed(2)}}</span>\n" +
    "			            </h5>\n" +
    "			        	-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('MANIFOLDS')\">Manifold Actions</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ORDERS')\" >Positions & Trades</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"market/{{market1}}/{{market}}\" ui-sref=\"marketPair({setAlpha:market1, setBeta:market})\"><i class=\"fa fa-refresh\"></i></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?scenic')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	        	<div class=\"row\">\n" +
    "	            	<div class=\"col-xs-10\">\n" +
    "			            <h1 style=\"text-align:left;font-size:30px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "			            	<span style=\"word-break:break-word\"><a style=\"color:white;font-weight:700\" href=\"market/{{market}}\" ui-sref=\"market({id:market})\">{{market}}</a></span>\n" +
    "			            	<br>\n" +
    "			            	<span style=\"word-break:break-word\"><a style=\"color:white;font-weight:700\"  href=\"market/{{market1}}\" ui-sref=\"market({id:market1})\">{{market1}}</a></span>\n" +
    "			            </h1>\n" +
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
    "						<a style=\"color:white\" href=\"market/{{market1}}/{{market}}\" ui-sref=\"marketPair({setAlpha:market1, setBeta:market})\"><i class=\"fa fa-refresh\"></i></a>\n" +
    "					</div>\n" +
    "	        	</div>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "\n" +
    "		<!--\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "		<ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "			<li ng-click=\"selectTab('INFORMATION')\"><a href=\"#\">Information</a></li>\n" +
    "            <li ng-click=\"selectTab('MANIFOLDS')\"><a href=\"#\">Manifold Actions</a></li>\n" +
    "            <li ng-click=\"selectTab('ORDERS')\"><a href=\"#\">Positions & Trades</a></li>\n" +
    "        </ul>\n" +
    "    	-->\n" +
    "        <!--ACTIONS ON ITEMS (eyes) protocols .. what manifolds in a market-->\n" +
    "\n" +
    "        <div ng-if=\"selectedTab =='INFORMATION'\">\n" +
    "			<div class=\"card\">\n" +
    "				<!--\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div style=\"padding:15px\">\n" +
    "	                            <h2 style=\"color:white\">Price</h2>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        	-->\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "					<!--<h5 style=\"\">\n" +
    "		        		<span>{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "		        		<span style=\"color:green\">{{percentChange.toFixed(2)}}%</span> Daily Change | \n" +
    "		        		<span style=\"color:red\">{{chart.series[1].data[chart.series[1].data.length-1][1].toFixed(2)}}</span> Daily Trade Volume | \n" +
    "		        		<span>{{marketDepth.toFixed(2)}}</span> Total Market Depth\n" +
    "		        	</h5>\n" +
    "		            <h5 style=\"color:white\">\n" +
    "		            	Last Trade Price: <span>{{chart.series[0].data[chart.series[0].data.length-1][1].toFixed(2)}}</span> | \n" +
    "		            	Highest Bid <span>{{bidAskChart.series[0].data[bidAskChart.series[0].data.length-1][0].toFixed(2)}}</span> | \n" +
    "		            	Lowest Ask <span>{{bidAskChart.series[1].data[0][0].toFixed(2)}}</span>\n" +
    "		            </h5>\n" +
    "		        	-->\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "			<!--TODO: ARRAY-->\n" +
    "			<!--combinatorial market string-->\n" +
    "			<!--MANIFOLDS ARE NESTED. . . -> INSTRUMENTS IN PROTOCOL.. SPONSOR, DERIVITATIVES-->\n" +
    "			<!--option tokens string inferance+time+option-->\n" +
    "			<!--\n" +
    "			Market Orders;@ price | fok; ioc; onbook;\n" +
    "			Limit Orders; sell no lower than, buy no higher than price\n" +
    "			array based; so multiD stops.. a gradiation in dimesnions\n" +
    "			-->\n" +
    "\n" +
    "			<div class=\"card\" ng-show=\"pluralistic\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset,lattice,dimension');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div style=\"padding:15px\">\n" +
    "	                            <h2 style=\"color:white\">Pluralistic Market</h2>\n" +
    "	                            <h5 style=\"color:white\">Order Paths and connections between the two markets. Computed Immutable Strucutre. Lattice / Graph.</h5>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<highchart config=\"parallelCoordinates\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--EMBEDDING SPACES-->\n" +
    "			<!--EMBEDDED MARKETS THE OR -->\n" +
    "\n" +
    "			<!--COMBINATORIAL DECOMPOSITIONS BASEDO ON ORDER TYPES\n" +
    "				BASED ON MARKET COMPUTATION\n" +
    "			-->\n" +
    "			\n" +
    "			<div class=\"card\">\n" +
    "                <cytoscape graph-options=\"options\" graph-elements=\"elementsObjCombinatorial\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape>\n" +
    "            </div>\n" +
    "\n" +
    "			<!--BASED ON GRAPH SELECTION-->\n" +
    "			<!--IF BINARY.. SELECTION IS ALREADY HERE??-->\n" +
    "			<!--CAN RENDER MULTI BOOKS...-->\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div style=\"padding:15px\">\n" +
    "	                            <h2 style=\"color:white\">Order Book</h2>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<highchart config=\"bidAskChart\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--TODO REDUCE AND COMPUTE..-->\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"padding:16px\">\n" +
    "					<div class=\"col-md-6\">\n" +
    "						<h5>Bids</h5>\n" +
    "		                <table class=\"table table-striped table-hover\">\n" +
    "							<thead>\n" +
    "								<th>Set Alpha</th>\n" +
    "								<th>Set Beta</th>\n" +
    "							</thead>\n" +
    "							<tbody>\n" +
    "								<tr ng-repeat=\"item in orders\">\n" +
    "									 <td><span ng-repeat=\"(key, value) in item.setAlpha\"><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b> <b>{{value}}</b> </a></span></td>\n" +
    "		 							 <td><span ng-repeat=\"(key, value) in item.setBeta\"><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b> <b>{{value}}</b> </a></span></td>\n" +
    "								</tr>\n" +
    "							</tbody>\n" +
    "		                </table>\n" +
    "		            </div>\n" +
    "		            <div class=\"col-md-6\">\n" +
    "						<h5>Asks</h5>\n" +
    "		                <table class=\"table table-striped table-hover\">\n" +
    "							<thead>\n" +
    "								<th>Set Alpha</th>\n" +
    "								<th>Set Beta</th>\n" +
    "							</thead>\n" +
    "							<tbody>\n" +
    "								<tr ng-repeat=\"item in mirrorOrders\">\n" +
    "									 <td><span ng-repeat=\"(key, value) in item.setAlpha\"><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b> <b>{{value}}</b> </a></span></td>\n" +
    "		 							 <td><span ng-repeat=\"(key, value) in item.setBeta\"><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b> <b>{{value}}</b> </a></span></td>\n" +
    "								</tr>\n" +
    "							</tbody>\n" +
    "		                </table>\n" +
    "		            </div>\n" +
    "	            </div>\n" +
    "\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"selectedTab =='MANIFOLDS'\">\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div style=\"padding:15px\">\n" +
    "	                            <h2 style=\"color:white\">Manifold Actions</h2>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"selectedTab =='ORDERS'\">\n" +
    "\n" +
    "			<div class=\"card\">\n" +
    "				<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "	                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                        <div style=\"padding:15px\">\n" +
    "	                            <h2 style=\"color:white\">Positions & Trades</h2>\n" +
    "	                        </div>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "				<div style=\"padding:16px;\">\n" +
    "					<div class=\"card\">\n" +
    "						<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle({id:market},{id:market1})\">+ Market Order</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			\n" +
    "			<!--TODO: Partially Filled Orders | TRADES-->\n" +
    "			<!--<div class=\"card\"><h5>{{market}} - {{market1}}</h5></div>-->\n" +
    "			<div ng-repeat=\"item in orders\">\n" +
    "       			<div ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "			</div>\n" +
    "\n" +
    "			<!--<div class=\"card\"><h5>{{market1}} - {{market}}</h5></div>-->\n" +
    "			<div ng-repeat=\"item in mirrorOrders\">\n" +
    "       			<div ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<style>\n" +
    "    .ngCytoscape{\n" +
    "        height: 500px;\n" +
    "        width:100%;\n" +
    "    }\n" +
    "</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?,geometry')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\" style=\"text-align:center\">\n" +
    "	            <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Markets</h1>\n" +
    "	            <h5 style=\"color:white\">{{tokenCount}} tokens in circulation </h5>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('MARKET')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<li style=\"float:right;font-size:14px\"><a href=\"#\"  ng-click=\"sortToggle()\">Sort By Connection <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "		</ul>\n" +
    "		<div style=\"clear:both\"></div>\n" +
    "	    <div class=\"card\">\n" +
    "	        <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	            <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "	                <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"><i class=\"fa fa-search\"></i></h5></a>\n" +
    "	            </div>\n" +
    "	        </form>\n" +
    "	    </div>\n" +
    "	    <div ng-repeat=\"token in tokens track by $index\" style=\"padding:0px\">\n" +
    "	    	<div class=\"card\" ng-click=\"cardDetailToggle(token)\">\n" +
    "	    		<div style=\"background:url('https://source.unsplash.com/1600x900/?lattice,geometry,crystal,code');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "					    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "	                        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(token)\"><span style=\"color:gray\"></span><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "	                        <div style=\"clear:both\"></div>\n" +
    "	                    </div>\n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;overflow:auto\">\n" +
    "				        	<div style=\"padding:15px\">\n" +
    "					            <h1 style=\"text-align:left;font-size:25px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "					            	<a ng-click=\"$event.stopPropagation();\" href=\"market/{{token.string}}\" style=\"color:white;word-break:break-word\" ui-sref=\"market({id:token.string})\">\n" +
    "					            		<img style=\"height:64px;padding:15px;\" ng-src=\"http://identicon-1132.appspot.com/{{token.id}}?s=8&p=8&f=png\">\n" +
    "					            		<span>{{token.string}}</span>\n" +
    "					            	</a>\n" +
    "					            </h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "			    <div style=\"padding:16px;\">\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "			    	<p style=\"color:gray\">Circulating: {{token.information.inCirculation}}</p>\n" +
    "			    	<p style=\"color:gray\">Market Connections: {{token.information.markets}}</p>\n" +
    "				    <p style=\"color:gray\">Apps & Protocols: <span ng-repeat=\"protocol in token.protocols\"><a href=\"/app/{{protocol}}\" ui-sref=\"app({id:protocol})\">{{protocol}}</a>, </span></p>\n" +
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
    "<div ui-view=\"member\">\n" +
    "	<div class=\"container\" style=\"padding:0px\">\n" +
    "		<div class=\"card\" ng-click=\"subNavToggle(member)\">\n" +
    "			<div class=\"imageContainerSmall\" style=\"background:url('{{member.coverUrl}}');\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.25);\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\" ng-click=\"\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px;text-align:center\">\n" +
    "                            <img style=\"height:150px;width:150px;border-radius:100%;background: #fff;padding: 0.25em;\" ng-src=\"{{member.avatarUrl}}\" err-src=\"/images/avatar.png\"/>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div style=\"text-align:left\">\n" +
    "					<div style=\"float:right\">\n" +
    "						<a style=\"padding:10px 15px;color:rgb(125,125,125);text-align:left\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle(member)\">+Transaction</a>\n" +
    "						<img ng-click=\"$event.stopPropagation();renderReputationToggle(member)\" style=\"height:50px;text-align:right;\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.id}}\">\n" +
    "					</div>\n" +
    "					<div style=\"float:right;margin:2.5px;\" ng-show=\"currentUser.id != member.id\">\n" +
    "						<a style=\"padding:10px 15px;color:rgb(125,125,125);text-align:left\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();follow(member)\">\n" +
    "							<span ng-if=\"!isFollowing\">Follow</span>\n" +
    "							<span ng-if=\"isFollowing\">UnFollow</span>\n" +
    "						</a>\n" +
    "					</div>\n" +
    "					<h2>{{member.firstName}} {{member.lastName}}</h2>\n" +
    "					<h3><a href=\"member/{{member.username}}\" ui-sref=\"member.activity({path:member.username})\">@{{member.username}}</a></h3>\n" +
    "					<p style=\"font-size:8px;\" ng-click=\"$event.stopPropagation();memberQRToggle(member);\"><a style=\"color:gray\"><i class=\"fas fa-qrcode\"></i> {{member.id}}</a></p>\n" +
    "        			<p style=\"color:gray;font-size:12px;\">\n" +
    "        				<span ng-if=\"member.loggedIn\">\n" +
    "			                <span><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online</span>\n" +
    "                			<span ng-if=\"member.status\"><br>{{member.status}}</span>\n" +
    "			            </span>\n" +
    "        				<span ng-if=\"!member.loggedIn\"><i class=\"fa fa-circle\"></i> Offline</span>\n" +
    "        			</p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<md-divider style=\"color:gray;padding:0px\"></md-divider>\n" +
    "			<div style=\"padding:0px\">\n" +
    "                <ul style=\"padding:10px 5px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "                    <li ng-click=\"$event.stopPropagation();filterToggle('DISCOVER');\" style=\"float:left;margin:5px;margin-top:10px;\">\n" +
    "                    	<a style=\"color:black\"><i class=\"fa fa-filter\"></i></a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <form ng-click=\"$event.stopPropagation();\" style=\"display:flex;flex-direction:row;float:left;min-width:60%\">\n" +
    "                            <tags-input style=\"border:0px;flex-grow:2;height:auto;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                        </form>\n" +
    "                    </li>\n" +
    "                    <li style=\"float:right;margin:5px;margin-top:10px;\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoadingActivity\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
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
    "		<div ui-view=\"memberValidations\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
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
    "           	<!--\n" +
    "            <div>\n" +
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
    "            <div class=\"spacing-5\"></div>\n" +
    "            -->\n" +
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
    "	<div ng-if=\"items.length == 0\" class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    <div ng-repeat=\"item in actions\"><div ng-include=\"'templates/cards/actionCard.tpl.html'\"></div></div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("member/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "    <div ng-if=\"false\" class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation();filterContent(tag.element)\">\n" +
    "                    <a><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedAssociationArray.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?location,forest,city,map');height:100px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"association in sortedAssociationArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(association.element)\"><b>{{association.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedLocationsArray.length > 0\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?location,forest,city,map');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px;\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"location in sortedLocationsArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a href=\"#\" ng-click=\"filterContent(location.element)\"><b>{{location}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--START ACTIVITY FEED WITH REGISTER.. ACTION!-->\n" +
    "    <!--ACTIONS (AND ACTIVITY)-->\n" +
    "    <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\" ng-if=\"activity.length>0\">\n" +
    "\n" +
    "        <!--TEMPLATE!-->\n" +
    "        <!--\n" +
    "        <div class=\"mobileHide\">\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "                <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                    <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                    <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                        <a href=\"#\" role=\"button\">\n" +
    "                            <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"cre8Toggle(member)\">CRE8</button></div>\n" +
    "        -->\n" +
    "\n" +
    "        <div ng-repeat=\"item in activity  track by $index\">\n" +
    "            <div ng-if=\"item.model=='ACTION'\" ng-include=\"'templates/cards/actionCard.tpl.html'\"></div>\n" +
    "            <div ng-if=\"item.model=='CONTENT'\" ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "            <div ng-if=\"item.model=='ITEM'\" ng-include=\"'templates/cards/itemCard.tpl.html'\"></div>\n" +
    "            <div ng-if=\"item.model=='ORDER'\" ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "            <div ng-if=\"item.model=='TIME'\" ng-include=\"'templates/cards/timeCard.tpl.html'\"></div>\n" +
    "            <div ng-if=\"item.model=='TRANSACTION'\" ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>");
}]);

angular.module("member/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/assets.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create,content,creation');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Balance</h1>\n" +
    "                        <h5><span style=\"font-size:11px;color:white\">{{member.id}}</span></h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	   		<form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	        	<input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Asset String\">\n" +
    "	        	<div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "				</div>\n" +
    "	    	</form>\n" +
    "	    	<div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "	    		<h5><a href=\"market/{{balanceLook}}\" ui-sref=\"market({id:balanceLook})\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "	    	</div>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<div><highchart config=\"balanceColumn\"></highchart>div>\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Identifer</th>\n" +
    "                        <th>Value</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"item in sortableSet\">\n" +
    "                        <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                        <td>{{item[1]}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "		</div>\n" +
    "	</div>	\n" +
    "</div>");
}]);

angular.module("member/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/associations.tpl.html",
    "");
}]);

angular.module("member/templates/connections.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/connections.tpl.html",
    "");
}]);

angular.module("member/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/content.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"contentList.length == 0\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <span style=\"color:gray\">There's nothing here..</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--\n" +
    "    <div class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,conntections');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,maps,map,globe');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    -->\n" +
    "\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <!--\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <div class=\"mobileFix\">\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "           <div ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("member/templates/followers.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/followers.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-6\" ng-repeat=\"item in followers\">\n" +
    "		<!--\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\">\n" +
    "			<div style=\"text-align:right;padding:15px;position:absolute;right:0;margin-right:10px\">\n" +
    "		        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(member)\">\n" +
    "		            <i class=\"fas fa-chevron-down\"></i>\n" +
    "		        </a>\n" +
    "		    </div> \n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.follower.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.follower.username}}\" ui-sref=\"member.activity({path:member.follower.username})\">\n" +
    "		        	<img ng-src=\"{{member.follower.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		        </a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\">\n" +
    "		        <h4>\n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.follower.username}}\" ui-sref=\"member.activity({path:member.follower.username})\">{{member.follower.username}}</a>\n" +
    "		        </h4>\n" +
    "		        <p style=\"font-size:13px;\">\n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.follower.username}}/projects\" ui-sref=\"member.projects({path:member.follower.username})\">{{member.follower.projectCount || 0}} Projects</a> | \n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.follower.username}}/followers\" ui-sref=\"member.followers({path:member.follower.username})\">{{member.follower.followerCount || 0}} Followers</a> | \n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.follower.username}}/following\" ui-sref=\"member.following({path:member.follower.username})\">{{member.follower.followingCount || 0}} Following</a>\n" +
    "		        </p>\n" +
    "		        <p style=\"color:gray\">Total Reputation: {{member.follower.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">{{member.follower.status}} Offline</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		-->\n" +
    "		<div ng-include=\"'templates/cards/memberCard.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("member/templates/following.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/following.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-6\" ng-repeat=\"item in following\">\n" +
    "		<!--\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(member)\">\n" +
    "			<div style=\"text-align:right;padding:15px;position:absolute;right:0;margin-right:10px\">\n" +
    "		        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(member)\">\n" +
    "		            <i class=\"fas fa-chevron-down\"></i>\n" +
    "		        </a>\n" +
    "		    </div> \n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{member.followed.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.followed.username}}\" ui-sref=\"member.activity({path:member.followed.username})\">\n" +
    "		        	<img ng-src=\"{{member.followed.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "		        </a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\">\n" +
    "		        <h4>\n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"member/{{member.followed.username}}\" ui-sref=\"member.activity({path:member.followed.username})\">{{member.followed.username}}</a>\n" +
    "		        </h4>\n" +
    "		        <p style=\"font-size:13px;\">\n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.followed.username}}/projects\" ui-sref=\"member.projects({path:member.followed.username})\">{{member.followed.projectCount || 0}} Projects</a> | \n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.followed.username}}/followers\" ui-sref=\"member.followers({path:member.followed.username})\">{{member.followed.followerCount || 0}} Followers</a> | \n" +
    "		        	<a ng-click=\"$event.stopPropagation();\" href=\"/member/{{member.followed.username}}/following\" ui-sref=\"member.following({path:member.followed.username})\">{{member.followed.followingCount || 0}} Following</a>\n" +
    "		        </p>\n" +
    "		        <p style=\"color:gray\">Total Reputation: {{member.followed.totalWork}}</p>\n" +
    "		        <p style=\"color:gray\">{{member.followed.status}} Offline</p>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		-->\n" +
    "		<div ng-include=\"'templates/cards/memberCard.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/items.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/items.tpl.html",
    "<div class=\"row\" ng-show=\"items.length == 0\"><div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div></div>\n" +
    "\n" +
    "<div class=\"row\" ng-show=\"items.length > 0\">\n" +
    "\n" +
    "    <div class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedAssociationArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,map,glob,explorer,spacce');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedLocationsArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-9\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        <!--\n" +
    "        <div class=\"mobileFix\">\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "               <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        -->\n" +
    "\n" +
    "        <div class=\"card\" ng-show=\"currentUser.id == member.id\"><button class=\"btn btn-default log-btn\" ng-click=\"itemToggle()\">+ Item</button></div>\n" +
    "        <div ng-repeat=\"item in items\"><div ng-include=\"'templates/cards/itemCard.tpl.html'\"></div></div>\n" +
    "        <div class=\"card\" ng-click=\"loadMore()\"><button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("member/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/ledger.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('LEDGER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	    	<li style=\"float:right\" ng-click=\"selectRevenue()\"><a href=\"\">Revenue</a></li>\n" +
    "			<li style=\"float:right\" ng-click=\"selectExpense()\"><a href=\"\">Expense</a></li>\n" +
    "			<li style=\"float:right\" ng-click=\"selectOverview()\"><a href=\"\">Overview</a></li>\n" +
    "			<div style=\"clear:both\"></div>\n" +
    "		</ul>\n" +
    "		<div class=\"card mobileFix\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-xs-6\">\n" +
    "						<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker style=\"display:inline\" ng-model=\"startDate\" md-placeholder=\"Start date\"></md-datepicker></div>\n" +
    "	      				<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\"></md-datepicker></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div ng-if=\"selectedState == 'OVERVIEW'\"><highchart config=\"chart\"></highchart></div>\n" +
    "					<div ng-if=\"selectedState == 'EXPENSE' || selectedState == 'REVENUE'\"><highchart config=\"tagChart\"></highchart></div>\n" +
    "					<div ng-if=\"selectedState == 'EXPENSE' || selectedState == 'REVENUE'\"><highchart config=\"assetChart\"></highchart></div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"pie\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-4 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,location,connection,asset,finance');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "	            <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                    <div style=\"padding:15px\">\n" +
    "	                        <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Assets</h1>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"asset in sortedTransactionAssets\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"selectAsset(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,location,connection');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"association in sortedTransactionAssociations\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"selectAssociation(association.element)\"><b>{{association.obj.username || association.obj.title}}</b></a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "	            <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                    <div style=\"padding:15px\">\n" +
    "	                        <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTransactionTags\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"selectTag(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-sm-8\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle(member)\">+ Transaction</button></div>\n" +
    "		<div ng-repeat=\"item in transactions\"><div ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "\n" +
    "	<!--NG IF-->\n" +
    "	<!--\n" +
    "	<div class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,market,asset');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Base Markets</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"market in baseMarkets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\"><b>{{market.text}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,market,asset');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Markets</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"market in markets\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\"><b>{{market.text}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,market,asset');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Type</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"type in types\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('POSITIONS')\"><b>{{type.text}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "\n" +
    "	<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"mobileFix\">\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('POSITIONS')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "	            <li style=\"float:left;font-size:14px\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\">\n" +
    "	                    <i class=\"fas fa-coins\"></i> Base Token <span style=\"font-size:10px;color:gray\">{{baseToken.text}}</span>\n" +
    "	                </a>\n" +
    "	            </li>\n" +
    "	            <li style=\"float:left;font-size:14px\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-infinity\"></i> Manifold <span style=\"font-size:10px;color:gray\">{{baseManifold.text}}</span></a>\n" +
    "	            </li>\n" +
    "	            <li style=\"float:left;font-size:14px\">\n" +
    "	                <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-dna\"></i> Type <span style=\"font-size:10px;color:gray\">{{orderType.text}}</span></a>\n" +
    "	            </li>\n" +
    "	           	<div style=\"clear:both\"></div>\n" +
    "	        </ul>\n" +
    "			<div class=\"card\">\n" +
    "	           <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\">\n" +
    "		 	<div style=\"background:url('https://source.unsplash.com/1600x900/?code,finance')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Value Map</h1>\n" +
    "                        <h5 style=\"color:white;\">{{member.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">				\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>	\n" +
    "	    <div ng-repeat=\"item in orders track by $index\">\n" +
    "			<div ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>	");
}]);

angular.module("member/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/projects.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-4 col-sm-6\" ng-repeat=\"item in projects\">\n" +
    "		<div class=\"member-card\" ng-click=\"cardDetailToggle(item.project)\">\n" +
    "			<div style=\"text-align:right;padding:15px;position:absolute;right:0;margin-right:10px\">\n" +
    "		        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "		            <i class=\"fas fa-chevron-down\"></i>\n" +
    "		        </a>\n" +
    "		    </div> \n" +
    "			<div class=\"member-card-image\" style=\"background-color:black\">\n" +
    "		        <a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.project.title}}\" ui-sref=\"project.activity({path:item.project.urlTitle})\"><img ng-src=\"{{item.project.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "		    <div class=\"member-card-info\">\n" +
    "		        <h4><a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.project.urlTitle}}\" ui-sref=\"project.activity({path:item.project.urlTitle})\">{{item.project.title}}</a></h4>\n" +
    "		       	<p style=\"color:gray\"><a ng-click=\"$event.stopPropagation();\" href=\"connection/{{item.connection.id}}\" ui-sref=\"connection({id:item.connection.id})\">{{item.connection.title}}</p>\n" +
    "		        <p style=\"color:gray\">{{item.project.title}}: {{item.context}}</p>\n" +
    "\n" +
    "		    </div>\n" +
    "		    <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "                <div style=\"clear:both\"></div>\n" +
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
    "<div class=\"row\" ng-show=\"tasks.length > 0\">\n" +
    "	<!--\n" +
    "	<div class=\"col-sm-3 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER')\">\n" +
    "        	<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-repeat=\"tag in sortedTagArray\" ng-click=\"$event.stopPropagation()\">\n" +
    "                    <a ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "-->\n" +
    "    <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "    	<!--\n" +
    "    	<div class=\"spacing-5\"></div>\n" +
    "    	<div class=\"mobileFix\">\n" +
    "	    	<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "	            <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	            <div style=\"clear:both\"></div>\n" +
    "	        </ul>\n" +
    "		    <div class=\"card\">\n" +
    "		        <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		-->\n" +
    "		<div ng-show=\"currentUser.id == member.id\" class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button></div>\n" +
    "		<div ng-repeat=\"item in tasks\"><div ng-include=\"'templates/cards/taskCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("member/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/time.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-if=\"time.length == 0\">\n" +
    "        <div style=\"padding:16px\"><p style=\"color:gray\">There's nothing here...</p></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "    <div class=\"col-xs-12 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-if=\"time.length > 0\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div ng-repeat=\"item in time\" ng-if=\"time.length > 0\">\n" +
    "            <div ng-include=\"'templates/cards/timeCardLarge.tpl.html'\"></div>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("member/templates/validations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("member/templates/validations.tpl.html",
    "");
}]);

angular.module("members/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("members/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\" style=\"text-align:center\">\n" +
    "                <h1>Members</h1>\n" +
    "                <h5 style=\"color:white\">{{memberCount}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-12\"><highchart config=\"totalMap\"></highchart></div>\n" +
    "                    <!--<div class=\"col-sm-12\"><highchart config=\"pieMap\"></highchart></div>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-6\" ng-repeat=\"item in members\" style=\"padding-left:10px;padding-right:10px;\"><div ng-include=\"'templates/cards/memberCard.tpl.html'\"></div></div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"skip + 100 > memberCount\" ng-click=\"loadMore()\" class=\"container\" style=\"text-align:center\">\n" +
    "    <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<div ng-controller=\"NavCtrl\">\n" +
    "\n" +
    "    <!--TODO: POP UP FROM BOTTOM SHEET EXPLORE FOR MOBILE... card detail.. etc - share. ux pattern-->\n" +
    "    <!--TODO: LOOP THROUGH INITALITIZED APPS AND TEMPLTES HERE : ) -->\n" +
    "\n" +
    "    <!--contentDetail, memberDetail, orderDetail, itemDetail, ... --> \n" +
    "    <div ng-include=\"'nav/templates/cardDetail.tpl.html'\"></div>\n" +
    "\n" +
    "    <!--APP MODEL ACTIONS...-->\n" +
    "    <div ng-include=\"'nav/templates/createAction.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createApp.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/create.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createConnection.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createContent.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createItem.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createOrder.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createProject.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createProtocol.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createTask.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createTime.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createTransaction.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/createValidation.tpl.html'\"></div>\n" +
    "\n" +
    "    <div ng-include=\"'nav/templates/filter.tpl.html'\"></div>\n" +
    "    <!--TODO: PROPER COLLAPSE ORDER-->\n" +
    "    <div ng-include=\"'nav/templates/information.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/login.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/market.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/nav.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/qr.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/register.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/reaction.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/render.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/renderAssociation.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/renderAttention.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/renderReputation.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/share.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/sort.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/stats.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/subNav.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/timer.tpl.html'\"></div>\n" +
    "    <div ng-include=\"'nav/templates/tokens.tpl.html'\"></div>\n" +
    "\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top header\" role=\"navigation\">\n" +
    "        <div class=\"container\">\n" +
    "            <span style=\"float:right;margin-top:3px;margin-left:-6px;\" ng-if=\"notificationCount > 0\">\n" +
    "                <span class=\"label label-danger\">{{notificationCount}}</span>\n" +
    "            </span>\n" +
    "            <button style=\"padding-right:0px;margin-right:0px;border:0px solid transparent;\" class=\"navIcon\" type=\"button\" ng-click=\"sideNavToggle()\">\n" +
    "                <span class=\"sr-only\">Toggle navigation``</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <div ng-click=\"timerToggle()\" ng-if=\"taskTime\" class=\"nav-links\" style=\"float:left;margin-top:13px;margin-right:15px;font-size:18px\">\n" +
    "                <a ng-if=\"taskTime == 0\"><i style=\"color:red\" class=\"fa fa-circle\"></i></a>\n" +
    "                <a ng-if=\"taskTime > 0\"><i style=\"color:red\" class=\"fa fa-pause\"></i></a>\n" +
    "                <a ng-if=\"taskTime > 0\">{{taskTime}}</a>\n" +
    "            </div>\n" +
    "            <!--TODO: REDO USER APPS-->\n" +
    "            <div ng-click=\"timerToggle()\" ng-if=\"currentUser && currentUser.apps.cre8.recordAttention\" class=\"nav-links\" style=\"float:left;margin-top:13px;margin-right:15px;font-size:18px\">\n" +
    "                <a><i style=\"color:#2ab995\" class=\"fa fa-eye\"></i></a>\n" +
    "            </div>\n" +
    "            <!--TODO: LOCATION DIM TIMER RECORD-->\n" +
    "            <!--\n" +
    "            <div ng-click=\"timerToggle()\" ng-if=\"currentUser && currentUser.apps.cre8.recordLocation\" class=\"nav-links\" style=\"float:left;margin-top:13px;margin-right:15px;font-size:18px\">\n" +
    "                <a><i style=\"color:#2ab995\" class=\"fa fa-map-marker\"></i></a>\n" +
    "            </div>\n" +
    "            -->\n" +
    "            <a class=\"navbar-brand\" href=\"/\"><span style=\"font-weight:bold;color:white\">CRE8.XYZ</span></a>\n" +
    "        </div>\n" +
    "        <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("nav/templates/cardDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/cardDetail.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"cardDetail\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\" style=\"width:100%\">\n" +
    "\n" +
    "                        <h1 style=\"text-align:left;font-size:14px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "\n" +
    "                            <span ng-if=\"item.model != 'TIME'\">\n" +
    "                                <span style=\"font-size:24px;color:white\" ng-if=\"item.title\">{{item.title}}</span>\n" +
    "                                <span style=\"font-size:24px;color:white\" ng-if=\"!item.title\">{{item.model}}</span>\n" +
    "                            </span>\n" +
    "\n" +
    "                            <span ng-if=\"item.model == 'TIME'\">\n" +
    "                                <span style=\"font-size:24px;color:white\">{{item.amount}} seconds</span>\n" +
    "                            </span>\n" +
    "\n" +
    "                            <br>\n" +
    "\n" +
    "                            <!--ui-sref-->\n" +
    "                            <span style=\"font-size:10px;color:white\"><a style=\"color:white\" href=\"{{item.model.toLowerCase()}}/{{item.id}}\">{{item.id}}</a></span>\n" +
    "\n" +
    "                            <!--\n" +
    "                            <a ng-if=\"item.model == 'CONTENT'\" href=\"content/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'ITEM'\" href=\"item/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'MARKET'\" href=\"market/{{item.string}}\" style=\"color:white\">{{item.string}}</a>\n" +
    "                            <a ng-if=\"item.model == 'ORDER'\" href=\"order/{{item.id}} style=\"color:white\"\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'PROJECT'\" href=\"project/{{item.urlTitle}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'TASK'\" href=\"task/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'TIME'\" href=\"time/{{item.id}}\" style=\"color:white\">{{item.amount}} Seconds</a>\n" +
    "                            <a ng-if=\"item.model == 'TRANSACTION'\" href=\"transaction/{{item.id}}\" style=\"color:white\">Transaction</a>\n" +
    "                            -->\n" +
    "\n" +
    "                        </h1>\n" +
    "                    \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4 ng-click=\"renderToggle(item)\" class=\"nav-links\"><a>Information <i style=\"float:right\" class=\"fas fa-info\"></i></a></h4>\n" +
    "\n" +
    "            <h4 ng-if=\"item.model=='ITEM'\" ng-click=\"actionToggle(item)\" class=\"nav-links\">\n" +
    "                <a>Create Action <i style=\"float:right\" class=\"fas fa-atom\"></i></a>\n" +
    "            </h4>\n" +
    "            <h4 ng-if=\"item.model=='ITEM'\" ng-click=\"\" class=\"nav-links\">\n" +
    "                <a ng-if=\"currentUser.id == item.user.id\" ng-click=\"transactionToggle(null, item.id)\">Send Item <i style=\"float:right\" class=\"fas fa-paper-plane\"></i></a>\n" +
    "                <a ng-if=\"currentUser.id != item.user.id\" ng-click=\"orderToggle(item)\">Purchase Item <i style=\"float:right\" class=\"fas fa-shopping-cart\"></i></a>\n" +
    "            </h4>\n" +
    "            <h4 ng-if=\"item.model=='ITEM'\" ng-click=\"renderMarketToggle(item)\" class=\"nav-links\">\n" +
    "                <a ng-if=\"currentUser.id == item.user.id\">Liquidity <i style=\"float:right\" class=\"fas fa-exchange-alt\"></i></a>\n" +
    "            </h4>\n" +
    "\n" +
    "            <h4 ng-if=\"item.model=='PROJECT'\" ng-click=\"validationToggle(item)\" class=\"nav-links\"><a>Request To Join <i style=\"float:right\" class=\"fas fa-users\"></i></a></h4>\n" +
    "            \n" +
    "            <h4 ng-if=\"item.model=='TASK'\" ng-click=\"timeToggle(item)\" class=\"nav-links\"><a>Create Time <i style=\"float:right\" class=\"fas fa-atom\"></i></a></h4>\n" +
    "            <!--<h4 ng-if=\"item.model=='TASK'\" ng-click=\"cre8Toggle(item)\" class=\"nav-links\"><a>Create <i style=\"float:right\" class=\"fas fa-atom\"></i></a></h4>-->\n" +
    "\n" +
    "            <h4 ng-click=\"renderAssociationToggle(item)\" class=\"nav-links\"><a>Associations <i style=\"float:right\" class=\"fas fa-bezier-curve\"></i></a></h4>\n" +
    "\n" +
    "            <h4 ng-click=\"statsToggle(item)\" class=\"nav-links\"><a>Stats <i style=\"float:right\" class=\"fa fa-eye\"></i></a></h4>\n" +
    "            <!--token action potiental-->\n" +
    "\n" +
    "            <h4 ng-if=\"item.model!='TOKEN'\"  ng-click=\"tokensToggle(item)\" class=\"nav-links\"><a>Tokens <i style=\"float:right\" class=\"fas fa-coins\"></i></a></h4>\n" +
    "            <h4 ng-click=\"shareToggle(item)\" class=\"nav-links\"><a>Share <i style=\"float:right\" class=\"fas fa-share\"></i></a></h4>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/confirm.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"confirm\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{confirm.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Success!</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div ng-if=\"confirm.model == 'ACTION'\">\n" +
    "                <h3>{{confirm.type}}</h3>\n" +
    "                <h5>{{confirm.amount}} - {{confirm.associatedModels}}</h5>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'CONTENT'\">\n" +
    "                <h3>{{confirm.title}}</h3>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.tags}}</p>\n" +
    "                <!--RENDER ASSOCIATIONS-->\n" +
    "                <!--GRAPH..? ETC-->\n" +
    "                <p>{{confirm.associatedModels}}</p>\n" +
    "                <p>{{confirm.type}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "            <!--\n" +
    "            <div ng-if=\"confirm.model == 'FOLLOW'\">\n" +
    "                <p>{{confirm.follower}}</p>\n" +
    "                <p>{{confirm.following}}</p>\n" +
    "            </div>\n" +
    "            -->\n" +
    "            <div ng-if=\"confirm.model == 'ITEM'\">\n" +
    "                <h3>{{confirm.title}}</h3>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.tags}}</p>\n" +
    "                <p>{{confirm.associatedModels}}</p>\n" +
    "                <p>{{confirm.location}}</p>\n" +
    "                <p>{{confirm.amountSet}}</p>\n" +
    "                <p>{{confirm.identifierSet}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'ORDER'\">\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.amountSetAlpha}}</p>\n" +
    "                <p>{{confirm.identifierSetAlpha}}</p>\n" +
    "                <p>{{confirm.amountSetBeta}}</p>\n" +
    "                <p>{{confirm.identifierSetBeta}}</p>\n" +
    "                <p>{{confirm.status}}</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'PROJECT'\">\n" +
    "                <h3>{{confirm.title}}</h3>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.associatedModels}}</p>\n" +
    "                <p>{{confirm.location}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.description)\"></span></p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'PROJECTMEMBER'\">\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.project}}</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'TASK'\">\n" +
    "                <h3>{{confirm.title}}</h3>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.associatedModels}}</p>\n" +
    "                <p>{{confirm.location}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'TIME'\">\n" +
    "                <p>{{confirm.amount}}</p>\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.type}}</p>\n" +
    "                <p>{{confirm.associatedModels}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'TRANSACTION'\">\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p>{{confirm.to}}</p>\n" +
    "                <p>{{confirm.from}}</p>\n" +
    "                <p>{{confirm.tags}}</p>\n" +
    "                <span ng-repeat=\"(key, value) in confirm.amountSet\"><p style=\"font-weight:800\">{{value}} <a href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></p></span>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"confirm.model == 'VALIDATION'\">\n" +
    "                {{confirm}}\n" +
    "                <p>{{confirm.user}}</p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(confirm.content)\"></span></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/create.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"cre8\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;text-align:center;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">CRE8</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"min-height:500px;max-height:100vh;overflow:hidden;\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <!--<h2 ng-click=\"actionToggle()\" class=\"nav-links\" style=\"padding:4px;\"><a>Action</a></h2>-->\n" +
    "                <h2 ng-click=\"contentToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Content</a></h2>\n" +
    "                <h2 ng-click=\"itemToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Item</a></h2>\n" +
    "                <h2 ng-click=\"orderToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Order</a></h2>\n" +
    "                <h2 ng-click=\"projectToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Project</a></h2>\n" +
    "                <!--<h2 ng-click=\"reactionToggle()\" class=\"nav-links\" style=\"padding:4px;\"><a>Reaction</a></h2>-->\n" +
    "                <h2 ng-click=\"taskToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Task</a></h2>\n" +
    "                <h2 ng-click=\"timeToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Time</a></h2>\n" +
    "                <h2 ng-click=\"transactionToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Transaction</a></h2>\n" +
    "                <!--<h2 ng-click=\"validationToggle()\" class=\"nav-links\" style=\"padding:4px;\"><a>Validation</a></h2>-->\n" +
    "            </div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,pattern,art,forest');height:100vh\" class=\"imageContainerSmall\"><div style=\"background:rgba(0,0,0,0.75);height:100vh\" class=\"imageContainerSmallDiv\"></div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/createAction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createAction.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"action\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:42px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Action</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Create action.. Verbs in our Value Language <a ng-click=\"informationToggle('CREATEACTION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createAction()\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <h5>Action</h5>\n" +
    "                        <input type=\"text\" placeholder=\"Action\" ng-model=\"newAction.type\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <h5>Amount</h5>\n" +
    "                        <input type=\"text\" placeholder=\"Amount\" ng-model=\"newAction.amount\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <h5>Associated Models</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Item\" ng-model=\"newAction.associatedModels\">\n" +
    "                    <auto-complete source=\"loadItems($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newAction.type\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/createApp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createApp.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"app\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Create App</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Create App.. <a ng-click=\"informationToggle('CREATEAPP')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createApp()\">\n" +
    "\n" +
    "                <h5>App Title</h5>\n" +
    "                <input type=\"text\" placeholder=\"App Title\" ng-model=\"newApp.title\" class=\"form-control\">\n" +
    "\n" +
    "                <h5>App Associated Models</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Associated Models\" ng-model=\"newApp.associatedModels\">\n" +
    "                    <auto-complete source=\"loadItems($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <h5>App Context</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newApp.context\">\n" +
    "                    <auto-complete source=\"loadItems($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <h5>App Description</h5>\n" +
    "                <text-angular ng-model=\"newApp.description\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "\n" +
    "                <hr>\n" +
    "\n" +
    "                <!--ngRepeat-->\n" +
    "                <p style=\"color:gray;font-style:italic\">Create a set of Protocols.. <a ng-click=\"informationToggle('CREATEPROTOCOL')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "                <h5>Accociated Protocols</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Accociated Protocols\" ng-model=\"newApp.protocol.associatedProtocols\">\n" +
    "                    <auto-complete source=\"loadItems($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <h5>Protocol Title</h5>\n" +
    "                <input type=\"text\" placeholder=\"Protocol Title\" ng-model=\"newApp.protocol.title\" class=\"form-control\">\n" +
    "                <h5>Protocol Code</h5>\n" +
    "                <text-angular ng-model=\"newApp.protocol.code\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "                <!--ngRepeat-->\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newApp.title\">create</button\n" +
    "                    >\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createConnection.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createConnection.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"connection\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?code,coordination,government')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Connection</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">A Connection Rule defines logic for Data Model Association & Validation <a ng-click=\"informationToggle('CREATE_CONNECTION_RULE')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <form role=\"form\" ng-submit=\"createConnection()\">\n" +
    "\n" +
    "                <h5>Title</h5>\n" +
    "                <input type=\"text\" placeholder= \"Title\" ng-model=\"newConnection.info.title\" class=\"form-control\">\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "     \n" +
    "                <h5>Associated Models</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Associated Models\" ng-model=\"newConnection.associatedModels\">\n" +
    "                    <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Function Builder</h5>\n" +
    "                <p>App Imports</p>\n" +
    "                <!--edit, self..-->\n" +
    "                <!--COINTINS A MAPPING SPACE KERNEL-->\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Mappings\" ng-model=\"newConnection.parameters.mapping\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <input type=\"text\" placeholder=\"Logic\" ng-model=\"newConnection.parameters.logic\" class=\"form-control\">\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>Context Logic </h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newConnection.context\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <div style=\"padding:16px\"> \n" +
    "                    <div ng-repeat=\"context in newConnection.context\">\n" +
    "                        \n" +
    "                        <h5>{{context.text}} Rules</h5>\n" +
    "                        \n" +
    "                        <p>Acceptance Threshold</p>\n" +
    "                        <input type=\"number\" step=\"0.1\"  placeholder=\"Acceptance Threshold\" ng-model=\"context.threshold\" class=\"form-control\">\n" +
    "                        <md-slider ng-model=\"context.threshold\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                        \n" +
    "                        <p>Modification Ratio</p>\n" +
    "                        <input type=\"number\" step=\"0.1\" placeholder=\"Modification Ratio\" ng-model=\"context.modificationRatio\" class=\"form-control\">\n" +
    "                        <md-slider ng-model=\"context.modificationRatio\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                        \n" +
    "                        <input type=\"text\" placeholder=\"Rules\" ng-model=\"context.requireValidation\" class=\"form-control\">        \n" +
    "                        <input type=\"text\" placeholder=\"Logic\" ng-model=\"context.logic\" class=\"form-control\">\n" +
    "                        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <h5>Description</h5>\n" +
    "                <text-angular placeholder=\"Description\" ng-model=\"newConnection.info.description\" ta-toolbar=\"''\"></text-angular>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newConnection.info.description\">create</button>\n" +
    "\n" +
    "            </form>\n" +
    "                \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createContent.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createContent.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"content\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?create,code,paint')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:42px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Content</h1>\n" +
    "                        <h5 style=\"color:white\" ng-if=\"item.id\">Reply to {{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <p style=\"color:gray;font-style:italic\">Well developed content earns more tokens. <a ng-click=\"informationToggle('CREATECONTENT')\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "            <div ng-click=\"createDetailToggle()\">\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <a ng-if=\"!createDetailToggleVar\"><b><i class=\"fas fa-bars\"></i> Show Details</b></a>\n" +
    "                <a ng-if=\"createDetailToggleVar\"><b><i class=\"fas fa-grip-lines\"></i> Hide Details</b></a>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <form role=\"form\" ng-submit=\"createContent()\">\n" +
    "\n" +
    "                <div ng-if=\"createDetailToggleVar\">\n" +
    "\n" +
    "                    <h5>Title</h5>\n" +
    "                    <input type=\"text\" placeholder=\"Title\" ng-model=\"newContent.title\" class=\"form-control\">\n" +
    "                \n" +
    "                    <!--WATCHER TO APPLY-->\n" +
    "                    <!--\n" +
    "                    <div ng-if=\"!associationsAreExpanded && newContent.associatedModels.length > 0\">\n" +
    "                        <h5>Context </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newContent.context\">\n" +
    "                            <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div>\n" +
    "                        <h5 ng-click=\"expandAssociations()\" >\n" +
    "                            Context \n" +
    "                            <a style=\"float:right\">\n" +
    "                                <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                                <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                            </a>\n" +
    "                        </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newContent.context\">\n" +
    "                            <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div ng-if=\"associationsAreExpanded\">\n" +
    "\n" +
    "                        <h5>Associations </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newContent.associatedModels\">\n" +
    "                            <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newContent.associatedModels\">\n" +
    "                                <h5 ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                    {{association.text}} \n" +
    "                                    <a style=\"float:right\">\n" +
    "                                        <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                        <b>{{association.connection[0].text || 'Default Connection'}}</b>\n" +
    "                                    </a>\n" +
    "                                </h5>\n" +
    "                                <div ng-if=\"association.isExpanded\">\n" +
    "\n" +
    "\n" +
    "                                    <h5>Default Connection</h5>\n" +
    "                                    <p>Parameters & Details<p>\n" +
    "                                    <span>{{association.connection}}</span>\n" +
    "\n" +
    "\n" +
    "                                </div>\n" +
    "                                <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\">\n" +
    "                                    <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                                </tags-input>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <div ng-repeat=\"context in association.context\">\n" +
    "                                    <div layout=\"\">\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                        <md-slider ng-model=\"context.score\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\">\n" +
    "                                            <p class=\"md-body-1\">{{context.score}}</p>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                                {{association.parameters}}\n" +
    "\n" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                                  \n" +
    "                    <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                        <li ng-class=\"{active: newContent.type=='AUDIO'}\" ng-click=\"selectType('AUDIO')\"><a>Audio</a></li>\n" +
    "                        <li ng-class=\"{active: newContent.type=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a>Image</a></li>\n" +
    "                        <li ng-class=\"{active: newContent.type=='LINK'}\" ng-click=\"selectType('LINK')\"><a>Link</a></li>\n" +
    "                        <li ng-class=\"{active: newContent.type=='POST'}\" ng-click=\"selectType('POST')\"><a>Post</a></li>\n" +
    "                        <li ng-class=\"{active: newContent.type=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a>Video</a></li>\n" +
    "                    </ul>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <text-angular ng-model=\"newContent.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "\n" +
    "                <div ng-if=\"newContent.type!='POST'\">\n" +
    "                    <input type=\"text\" placeholder=\"Link\" ng-model=\"newContent.link\" class=\"form-control\">\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newContent.content\">create</button>\n" +
    "\n" +
    "            </form>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createItem.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createItem.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"item\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern,scrap,assortment,clothes')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:42px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Item</h1>\n" +
    "                        <h5 style=\"color:white\">Sharing Creates Abundance</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "        <div style=\"padding:16px\">\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <form role=\"form\" ng-submit=\"createItem()\">\n" +
    "\n" +
    "                <h5>Title</h5>\n" +
    "                <input type=\"text\" placeholder=\"Title\" ng-model=\"newItem.title\" class=\"form-control\">\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <div>\n" +
    "                    <h5 ng-click=\"expandAssociations()\">\n" +
    "                        Context \n" +
    "                        <a style=\"float:right\">\n" +
    "                            <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                            <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                        </a>\n" +
    "                    </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newItem.context\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"associationsAreExpanded\">\n" +
    "                    <h5>Associations </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newItem.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newItem.associatedModels\">\n" +
    "                            <h5 ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                {{association.text}} \n" +
    "                                <a style=\"float:right\">\n" +
    "                                    <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                    <b>{{association.connection[0].text || 'Default Connection'}}</b>\n" +
    "                                </a>\n" +
    "                            </h5>\n" +
    "                            <div ng-if=\"association.isExpanded\">\n" +
    "                                <h4>Default Connection</h4>\n" +
    "                                <p>Details & Rules<p>\n" +
    "                            </div>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div ng-repeat=\"context in association.context\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                    <md-slider ng-model=\"context.score\"  step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                                <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>\n" +
    "                    <a ng-click=\"expandItem=!expandItem\">\n" +
    "                        <span ng-if=\"!expandItem\"><i class=\"fas fa-bars\"></i> Show Details</span>\n" +
    "                        <span ng-if=\"expandItem\"><i class=\"fas fa-grip-lines\"></i> Hide Details</span>\n" +
    "                    </a>\n" +
    "                </h5>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <div ng-if=\"expandItem\">\n" +
    "\n" +
    "                    <h4>Apps</h4>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Actions, Componets, Data, Delivery, Generator, Location, Status</p>\n" +
    "                    <!--VS ASSOCIATED MODELS..-->\n" +
    "                    <!--TYPE OF ASSOCIATION. 'TYPE' (SHOULD BE OF MODEL TYPE ITEM) (&OR DEPRECIATE CONTENT)--> \n" +
    "\n" +
    "                    <h5>Associated Actions <a ng-click=\"informationToggle('ITEM ACTIONS')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <p style=\"color:gray;font-style:italic\">App Defined Actions for the Item</p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associated Actions\" ng-model=\"newItem.associatedActions\">\n" +
    "                        <auto-complete></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Components <a ng-click=\"informationToggle('ASSOCIATION')\"><i class=\"fa fa-question-circle\"></i></a><i style=\"float:right\" class=\"fas fa-bezier-curve\"></i></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Item Components\" ng-model=\"newItem.associatedComponentModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Connections / Item Charter</h5>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Rules surrounding data association, and principles such as item ownership.</p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Item Connections\" ng-model=\"newItem.associatedConnections\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Generator <b>{{newItem.isGenerator}}</b><a ng-click=\"informationToggle('ITEM GENERATOR')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <p style=\"color:gray;font-style:italic\">The Generator Property denotes that an item is Abstract and generates discrete item copys on purchase. Useful for inventory.</p>\n" +
    "                    <md-switch ng-model=\"newItem.isGenerator\" aria-label=\"newItem.isGenerator\"></md-switch>\n" +
    "\n" +
    "                    <div class=\"\">\n" +
    "                        <h5>Location <a ng-click=\"informationToggle('LOCATION')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Location\" ng-model=\"newItem.location\"></tags-input>\n" +
    "                        <div class=\"\">\n" +
    "                            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                                    </ui-gmap-window>\n" +
    "                                </ui-gmap-marker>\n" +
    "                            </ui-gmap-google-map>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                    <h5>Item Status <a ng-click=\"informationToggle('ITEM STATUS')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <input placeholder=\"Status\" type=\"text\" ng-model=\"newItem.status\" class=\"form-control\">\n" +
    "\n" +
    "                    <h5>Associated Orders <a ng-click=\"informationToggle('ITEM IDENTIFER SET')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <p style=\"color:gray;font-style:italic\">If you wish to create liquidity with the item on create</p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associated Orders\" ng-model=\"newItem.associatedOrders\">\n" +
    "                        <auto-complete></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Fulfilment Protocol <a ng-click=\"informationToggle('ITEM DELIVERY PROTOCOL')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <p style=\"color:gray;font-style:italic\">Delivery etc</p>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Delivery Protocol\" ng-model=\"newItem.deliveryProtocol\">\n" +
    "                        <auto-complete></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>Time Ownership Protocol <a ng-click=\"informationToggle('Time Ownership Protocol')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Time Ownership Protocol\" ng-model=\"newItem.timeOwnershipProtocol\">\n" +
    "                        <auto-complete></auto-complete>\n" +
    "                    </tags-input>\n" +
    "\n" +
    "                    <h5>JSON Data <a ng-click=\"informationToggle('ITEM DATA')\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                    <input type=\"text\" placeholder=\"JSON Data\" ng-model=\"newItem.data\" class=\"form-control\">\n" +
    "                    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <text-angular ng-model=\"newItem.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newItem.title\">create</button>\n" +
    "            </form>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createOrder.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createOrder.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"order\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connections,network,pattern')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Order</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">An Order creates a position in the MultiDimensional Market <a ng-click=\"informationToggle('CREATEORDER')\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createOrder()\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <h5>\n" +
    "                            <span ng-show=\"!identiferSetAlpha\">Asset Identifer Set α</span>\n" +
    "                            <span ng-repeat=\"market in identiferSetAlpha track by $index\">{{market.text}} </span> \n" +
    "                        </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set α\" ng-model=\"identiferSetAlpha\">\n" +
    "                            <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 form-group\">\n" +
    "                        <div ng-repeat=\"market in identiferSetAlpha track by $index\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <h5>{{market.text}} Amount <span style=\"float:right\">{{balance[market.text] || 0}} Available</span></h5>\n" +
    "                                <input placeholder=\"{{market.text}} Amount\" type=\"number\" step=\"0.000000001\" ng-model=\"newOrder.setAlpha[market.text]\" class=\"form-control\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <h5>\n" +
    "                            <span ng-show=\"!identiferSetBeta\">Asset Identifer Set β</span>\n" +
    "                            <span ng-repeat=\"market in identiferSetBeta track by $index\">{{market.text}} </span> \n" +
    "                        </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Asset Identifer Set β\" ng-model=\"identiferSetBeta\">\n" +
    "                            <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6\">\n" +
    "                        <div ng-repeat=\"market in identiferSetBeta track by $index\">\n" +
    "                            <div class=\"col-sm-12\">\n" +
    "                                <h5>{{market.text}} Amount</h5>\n" +
    "                                <input placeholder=\"{{market.text}} Amount\" type=\"number\" step=\"0.000000001\" ng-model=\"newOrder.setBeta[[market.text]]\" class=\"form-control\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <!--\n" +
    "                    <div class=\"col-sm-12\" style=\"padding:20px;\">\n" +
    "                        <p ng-show=\"!inverted\" style=\"font-weight:800;\">\n" +
    "                            Sell <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span> \n" +
    "                            for <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> | \n" +
    "                            Buy <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> \n" +
    "                            with <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span>\n" +
    "                        </p>\n" +
    "                        <p ng-show=\"inverted\" style=\"font-weight:800;\">\n" +
    "                            Buy <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span> \n" +
    "                            with <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> | \n" +
    "                            Sell <span ng-repeat=\"market in identiferSetBeta\">{{newOrder.setBeta[market.text]}} {{market.text}} </span> \n" +
    "                            for <span ng-repeat=\"market in identiferSetAlpha\">{{newOrder.setAlpha[market.text]}} {{market.text}} </span>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    -->\n" +
    "                    \n" +
    "                    <div class=\"col-sm-12\" style=\"marking:10px\">\n" +
    "                        <h5>Order Type</h5>\n" +
    "                        <ul class=\"nav nav-pills nav-justified contentType\">\n" +
    "                            <li ng-class=\"{active: selectedOrderType=='ONBOOKS'}\" ng-click=\"selectOrderType('ONBOOKS')\"><a>Market onBooks <i ng-click=\"informationToggle('ONBOOKSORDER')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                            <li ng-class=\"{active: selectedOrderType=='FILLORKILL'}\" ng-click=\"selectOrderType('FILLORKILL')\"><a>Market Fill Or Kill <i ng-click=\"informationToggle('FILLORKILL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                            <li ng-class=\"{active: selectedOrderType=='IMMEDIATEORCANCEL'}\" ng-click=\"selectOrderType('IMMEDIATEORCANCEL')\"><a>Immediate or Cancel <i ng-click=\"informationToggle('IMMEDIATEORCANCEL')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                            <li ng-class=\"{active: selectedOrderType=='LIMIT'}\" ng-click=\"selectOrderType('LIMIT')\"><a> Limit <i ng-click=\"informationToggle('LIMIT')\" class=\"fa fa-question-circle\"></i></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newOrder.setAlpha\">create</button>\n" +
    "\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createProject.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createProject.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"project\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?code,coordination,government')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Project</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">A Project is a Self-Governing collective of individuals. <a ng-click=\"informationToggle('CREATEPROJECT')\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <form role=\"form\" ng-submit=\"createProject()\">\n" +
    "\n" +
    "                <h5>Title</h5>\n" +
    "                <input type=\"text\" placeholder= \"Title\" ng-model=\"newProject.title\" class=\"form-control\">\n" +
    "\n" +
    "                <!--\n" +
    "                <h5>Connections</h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Connections\" ng-model=\"newProject.associatedConnections\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                -->\n" +
    "\n" +
    "                <div>\n" +
    "                    <h5 ng-click=\"expandAssociations()\">\n" +
    "                        Context \n" +
    "                        <a style=\"float:right\">\n" +
    "                            <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                            <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                        </a>\n" +
    "                    </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newProject.context\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "\n" +
    "                <div ng-if=\"associationsAreExpanded\">\n" +
    "\n" +
    "                    <h5>Associations </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newProject.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newProject.associatedModels\">\n" +
    "\n" +
    "\n" +
    "                            <h5 ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                {{association.text}} \n" +
    "                                <a ng-if=\"association.connection[0].text\" style=\"float:right\">\n" +
    "                                    <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                    <b>{{association.connection[0].text}}</b>\n" +
    "                                </a>\n" +
    "                            </h5>\n" +
    "\n" +
    "                            <div ng-if=\"association.isExpanded\">\n" +
    "\n" +
    "                                <h5>Default Connection</h5>\n" +
    "                                <p>Parameters & Details<p>\n" +
    "                                <span>{{association.connection}}</span>\n" +
    "\n" +
    "                            </div>\n" +
    "\n" +
    "                            <!--NG REPEAT PARAMETERS-->\n" +
    "                                <!--PARAMETER TYPE | ( (NODE / CONNECTION) | (MODEL / ASSOCIATED MODEL) )-->\n" +
    "\n" +
    "                            <p style=\"color:grey\">{{association.description}}</p>\n" +
    "\n" +
    "                            <div ng-if=\"!association.description\">\n" +
    "                                <!--OBJECT EDITOR-->\n" +
    "                                <!--MAKE VARIABLE-->\n" +
    "                                <!--TODO: TEMPLATES-->\n" +
    "                                <!--CREATING AN OBJECT-->\n" +
    "                                <h5>Context</h5>\n" +
    "                                <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\">\n" +
    "                                    <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                                </tags-input>\n" +
    "\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                                <div ng-repeat=\"context in association.context\">\n" +
    "                                    <div layout=\"\">\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                        <md-slider ng-model=\"context.score\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                    </div>\n" +
    "                                    <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <!--LOCATION ASSOCIATION-->\n" +
    "                <h5>Location</h5>\n" +
    "                <input type=\"text\" placeholder=\"Location\" ng-model=\"newProject.location\" class=\"form-control\">\n" +
    "\n" +
    "                <!--\n" +
    "                <div class=\"\">\n" +
    "                    <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                        <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                            <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                            </ui-gmap-window>\n" +
    "                        </ui-gmap-marker>\n" +
    "                    </ui-gmap-google-map>\n" +
    "                </div>\n" +
    "                -->\n" +
    "\n" +
    "                <!--SELF(PROJECT=PROJECT CONNECTION {define data model here by apps}) ASSOCIATION-->\n" +
    "                <h5>Description</h5>\n" +
    "                <text-angular placeholder= \"Description\" ng-model=\"newProject.description\" ta-toolbar=\"''\"></text-angular>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newProject.title\">create</button>\n" +
    "            </form>\n" +
    "                \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createProtocol.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createProtocol.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"protocol\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div  ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Protocol</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Create Protocol.. <a ng-click=\"informationToggle('CREATEAPP')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createProtocol()\">\n" +
    "\n" +
    "                <!--OPTION STRUCTURED DAATA-->\n" +
    "                <h5>Protocol Title</h5>\n" +
    "                <input type=\"text\" placeholder=\"Protocol Title\" ng-model=\"newProtocol.title\" class=\"form-control\">\n" +
    "\n" +
    "                <h5>Protocol Description</h5>\n" +
    "                <text-angular ng-model=\"newProtocol.description\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "\n" +
    "                <h5>Protocol Code & Generator</h5>\n" +
    "                <text-angular ng-model=\"newProtocol.code\" ta-toolbar=\"[['p','h1','bold','italics','quote','ol','ul','insertLink','insertImage','html']]\"></text-angular>\n" +
    "                <hr>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newProtocol.title\">create</button\n" +
    "                    >\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createTask.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createTask.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"task\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?code')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Task</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Tasks are an abstraction of intentional time, they create linkages between Time & Token Protocols. <a ng-click=\"informationToggle('CREATETASK')\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createTask()\">\n" +
    "                <h5>Title</h5>\n" +
    "                <input type=\"text\" placeholder=\"Title\" ng-model=\"newTask.title\" class=\"form-control\">\n" +
    "                <div>\n" +
    "                    <h5 ng-click=\"expandAssociations()\" >\n" +
    "                        Context \n" +
    "                        <a style=\"float:right\">\n" +
    "                            <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                            <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                        </a>\n" +
    "                    </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newTask.context\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "                <div ng-if=\"associationsAreExpanded\">\n" +
    "                    <h5>Associations</h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTask.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newTask.associatedModels\">\n" +
    "                            <h5 ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                {{association.text}} \n" +
    "                                <a style=\"float:right\">\n" +
    "                                    <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                    <b>\n" +
    "                                        <span ng-if=\"!association.isExpanded\"> Expand</span> \n" +
    "                                        <span ng-if=\"association.isExpanded\"> Hide</span> \n" +
    "                                        {{association.connection[0].text || 'Connection'}}\n" +
    "                                    </b>\n" +
    "                                </a>\n" +
    "                            </h5>\n" +
    "                            <div ng-if=\"association.isExpanded\">\n" +
    "                                <h5>Default Connection</h5>\n" +
    "                                <p>Details & Rules<p>\n" +
    "                                <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.connection\"></tags-input>\n" +
    "                                <hr>\n" +
    "                            </div>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\"></tags-input>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div ng-repeat=\"context in association.context\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                    <md-slider ng-model=\"context.score\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                                <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <h5>Location</h5>\n" +
    "                <input type=\"text\" placeholder=\"Location\" ng-model=\"newTask.location\" class=\"form-control\">\n" +
    "                <!--\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "                -->\n" +
    "                <h5>Description</h5>\n" +
    "                <text-angular ng-model=\"newTask.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTask.title\">create</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createTime.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createTime.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"time\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?time')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Time</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Time & Intention unite. Token Protocols propogate value interactions. <a ng-click=\"informationToggle('CREATETIME')\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createTime()\">\n" +
    "                <div>\n" +
    "                    <h5 ng-click=\"expandAssociations()\">\n" +
    "                        Context \n" +
    "                        <a style=\"float:right\">\n" +
    "                            <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                            <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                        </a>\n" +
    "                    </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newTime.context\">\n" +
    "                        <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                </div>\n" +
    "                <div ng-if=\"associationsAreExpanded\">\n" +
    "                    <h5>Associations </h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTime.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newTime.associatedModels\">\n" +
    "                            <h5 ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                {{association.text}} \n" +
    "                                <a style=\"float:right\">\n" +
    "                                    <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                    <b>{{association.connection[0].text || 'Default Connection'}}</b>\n" +
    "                                </a>\n" +
    "                            </h5>\n" +
    "                            <div ng-if=\"association.isExpanded\">\n" +
    "                                <h4>Default Connection</h4>\n" +
    "                                <p>Details & Rules<p>\n" +
    "                            </div>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div ng-repeat=\"context in association.context\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                    <md-slider ng-model=\"context.score\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                                <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                    <li ng-class=\"{active: newTime.type=='PLANNED'}\" ng-click=\"selectTypeTime('PLANNED')\"><a>RETROACTIVE OR PLANNED</a></li>\n" +
    "                    <li ng-class=\"{active: newTime.type=='LIVE'}\" ng-click=\"selectTypeTime('LIVE')\"><a>LIVE</a></li>\n" +
    "                </ul>\n" +
    "                <div ng-if=\"newTime.type == 'LIVE'\">\n" +
    "                    <div ng-show=\"!recordingTime\">\n" +
    "                        <div ng-show=\"!streaming\">\n" +
    "                            <h3>Streaming?</h3>\n" +
    "                            <a class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</a>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <a class=\"btn btn-default log-btn\" ng-click=\"startTime()\">No</a>\n" +
    "                        </div>\n" +
    "                        <div ng-show=\"streaming\">\n" +
    "                            <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                            <input type=\"text\" placeholder=\"IFPS SECRET\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                            <input type=\"text\" placeholder=\"IFPS KEY\" ng-model=\"timeContent\" class=\"form-control\">\n" +
    "                            <a style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startTime()\">Start Stream</a>\n" +
    "                            <a style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"cancelStreaming()\">Back</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div ng-show=\"recordingTime\">\n" +
    "                        <h3>{{taskTime}}</h3>\n" +
    "                        <div ng-if=\"streaming\"> <div ng-bind-html=\"renderStream(streamUrl)\"></div></div>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                        <div class=\"spacing-5\"></div>\n" +
    "                        <a ng-click=\"createTime()\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</a>\n" +
    "                    </div>            \n" +
    "                </div>\n" +
    "                <div ng-if=\"newTime.type == 'PLANNED'\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-6\">\n" +
    "                            <h5>Start Time</h5>\n" +
    "                            <input type=\"datetime-local\" step=\"1\" placeholder=\"Start Time\" ng-model=\"newTime.startTime\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-6\">     \n" +
    "                            <h5>End Time</h5>\n" +
    "                            <input type=\"datetime-local\" step=\"1\" placeholder=\"Start Time\" ng-model=\"newTime.endTime\" class=\"form-control\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <h5>Amount</h5>\n" +
    "                    <input type=\"number\" step=\"1\" placeholder=\"Amount\" ng-model=\"newTime.amount\" class=\"form-control\">\n" +
    "                    \n" +
    "                    <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button ng-click=\"createTime()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTime.amount\">create</button>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createTransaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createTransaction.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"transaction\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?transaction,trade')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Transaction</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Send String Assets to any identifier.<br> All transactions are final. <a ng-click=\"informationToggle('CREATETRANSACTION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <form role=\"form\" ng-submit=\"createTransaction()\">\n" +
    "\n" +
    "                <h5>From</h5>\n" +
    "                <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"From\" ng-model=\"newTransaction.from\">\n" +
    "                    <auto-complete min-length=\"2\" source=\"loadAddress($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <h5>To</h5>\n" +
    "                <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"To\" ng-model=\"newTransaction.to\">\n" +
    "                    <auto-complete min-length=\"2\" source=\"loadAddress($query)\" max-results-to-show=\"1000\" highlight-matched-text=\"true\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <h5>Asset <a href=\"#\" ng-click=\"expandAssets()\" style=\"float:right\"><i class=\"fas fa-coins\"></i> My Assets</a></h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Asset Identifier\" ng-model=\"newTransaction.identifierSet\">\n" +
    "                    <auto-complete min-length=\"1\" highlight-matched-text=\"true\" load-on-empty=\"true\" max-results-to-show=\"1000\" source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <div class=\"row\" ng-if=\"assetsAreExpanded\">\n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <div class=\"col-xs-4\" ng-repeat=\"asset in sortedBalances\">\n" +
    "                        <p>\n" +
    "                            <img style=\"border-radius:100%;height:32px;padding-right:5px;\" ng-src=\"http://identicon-1132.appspot.com/{{asset[0]}}?s=8&p=8&f=png\">\n" +
    "                            <a href=\"#\" ng-click=\"addAssetToTransaction(asset[0])\"><b>{{asset[0]}}</b>: {{asset[1]}}</a>\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"\">\n" +
    "                    <div class=\"col-sm-12\" ng-repeat=\"asset in newTransaction.identifierSet\">\n" +
    "                        <h5>{{asset.text}} Amount | Available {{balance[asset.text] || 0}} <span style=\"text-align:right;float:right\"><a ng-click=\"informationToggle('IDENTIFERSET')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></span></h5>\n" +
    "                        <input placeholder=\"{{asset.text}} Amount\" type=\"number\" step=\"any\" ng-model=\"newTransaction.amountSet[asset.text]\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <h5 ng-click=\"expandAssociations()\">\n" +
    "                    Context \n" +
    "                    <a ng-if=\"newTransaction.context.length > 0\" style=\"float:right\">\n" +
    "                        <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                        <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                    </a>\n" +
    "                </h5>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newTransaction.context\">\n" +
    "                    <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <div ng-if=\"associationsAreExpanded\">\n" +
    "\n" +
    "                    <!--\n" +
    "                    <h5>\n" +
    "                        <a ng-if=\"newTransaction.context.length > 0\" href=\"#\" ng-click=\"expandAssociations()\">\n" +
    "                            <span ng-if=\"true\"><i class=\"fas fa-bezier-curve\"></i> Expand Details</span>\n" +
    "                            <span ng-if=\"false\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                        </a>\n" +
    "                    </h5>\n" +
    "\n" +
    "                    <h5>Associations <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"></h5>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTransaction.associatedModels\">\n" +
    "                        <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    -->\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "\n" +
    "                        <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newTransaction.associatedModels\">\n" +
    "                            <!--\n" +
    "                            <h5>{{association.text}} Context <a ng-click=\"informationToggle('ASSOCIATIONS')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "                            <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"association.context\">\n" +
    "                                <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                            </tags-input>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <div style=\"text-align:center\">\n" +
    "                                <a ng-click=\"expandConnection(association)\"><b>{{association.connection[0].text || 'Default Connection'}}</b></a>\n" +
    "                            </div>   \n" +
    "                            -->                     \n" +
    "                            <div ng-repeat=\"context in association.context\">\n" +
    "                                <div layout=\"\">\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                    <md-slider ng-model=\"context.score\"  step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                                <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <h5>Description</h5>\n" +
    "                <textarea style=\"height:100px;\" placeholder=\"Description\" type=\"text\" ng-model=\"newTransaction.content\" class=\"form-control\"></textarea>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-disabled=\"!newTransaction.amountSet\">create</button>\n" +
    "\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/createValidation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/createValidation.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"validation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div ng-if=\"currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?code,consensus')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Create Validation</h1>\n" +
    "                        <h5 style=\"color:white\" ng-if=\"item.id\">{{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">Validations create value linkages. They form the mechanisms which data is associated. <a ng-click=\"informationToggle('VALIDATION')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "            <!--IF WERE AN ASSOCIATION-->\n" +
    "            <div ng-repeat=\"associatedModel in item.associatedModels\" style=\"font-size:14px;\">\n" +
    "                <p class=\"valueMapButton\">\n" +
    "                    <!--TODO: APP INPUT-->\n" +
    "                    <span ng-if=\"associatedModel.type == 'TASK'\">{{associatedModel.data.username}}</span>\n" +
    "                    <span ng-if=\"associatedModel.type == 'MEMBER'\">{{associatedModel.data.username}}</span>\n" +
    "                    <span ng-if=\"associatedModel.type == 'PROJECT'\">{{associatedModel.data.title}}</span>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--IF WERE A MODEL-->\n" +
    "\n" +
    "\n" +
    "            <!--SELECTED MODEL-->\n" +
    "            <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newValidation.associatedModels\">\n" +
    "                <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "            </tags-input>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <!--BUDLE THE VALIDATIONS-->\n" +
    "            <h5>Parameters</h5>\n" +
    "            {{item.associationModels}}\n" +
    "            {{item.connection}}\n" +
    "            <!--CONNECTION-->\n" +
    "\n" +
    "            <h5>Context</h5>\n" +
    "            <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newValidation.context\">\n" +
    "                <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "            </tags-input>\n" +
    "\n" +
    "            <div ng-repeat=\"context in newValidation.context\">\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\">\n" +
    "                        <p><b>{{context.text}}</b></p>\n" +
    "                    </div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"context.score\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{key}}\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\">\n" +
    "                        <p class=\"md-body-1\">{{context.score}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <text-angular style=\"height:200px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <button ng-click=\"createValidation()\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/filter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/filter.tpl.html",
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"filter\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{model.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Filter</h1>\n" +
    "                        <h5><a style=\"color:white\" href=\"#\" ng-click=\"sortToggle()\">Sort</a></h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <!--DISCOVER-->\n" +
    "            <div ng-if=\"type=='DISCOVER'\">\n" +
    "\n" +
    "                <!--\n" +
    "                <p><b>Model</b></p>\n" +
    "                <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                    <li ng-class=\"{active: selectedType=='AUDIO'}\" ng-click=\"selectType('AUDIO')\"><a href=\"#\">Content</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Items</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='VIDEO'}\" ng-click=\"selectType('VIDEO')\"><a href=\"#\">Orders</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='IMAGE'}\" ng-click=\"selectType('IMAGE')\"><a href=\"#\">Project</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='LINK'}\" ng-click=\"selectType('LINK')\"><a href=\"#\">Task</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='MOTION'}\" ng-click=\"selectType('MOTION')\"><a href=\"#\">Time</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='POST'}\" ng-click=\"selectType('POST')\"><a href=\"#\">Transaction</a></li>\n" +
    "                </ul>\n" +
    "                -->\n" +
    "\n" +
    "                <p><b>Context</b> <i style=\"float:right\" class=\"fa fa-tags\"></i></p>\n" +
    "                <div>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"searchQueryNav.context\">\n" +
    "                        <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.context.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectTag(item[0])\"><b>{{item[0]}}</b></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Association</b> <i style=\"float:right\" class=\"fas fa-bezier-curve\"></i></p>\n" +
    "                <div>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Association\" ng-model=\"searchQueryNav.associations\">\n" +
    "                        <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.associations.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectAssociation(item.id)\"><b>{{item.title}}</b></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Location</b> <i style=\"float:right\" class=\"fa fa-map-marker\"></i></p>\n" +
    "                <div>\n" +
    "                    <tags-input min-length=\"1\" placeholder=\"Location\" ng-model=\"searchQueryNav.locations\">\n" +
    "                        <auto-complete source=\"loadLocation($query)\"></auto-complete>\n" +
    "                    </tags-input>\n" +
    "                    <div ng-repeat=\"item in item.locations.slice(0,10) track by $index\">\n" +
    "                        <a href=\"#\" ng-click=\"selectLocation(item.element)\"><b>{{item.element.address}}</b></a>\n" +
    "                    </div>\n" +
    "                    <div layout=\"\">\n" +
    "                        <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Distance (km)</span></div>\n" +
    "                        <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{locationFilter.distance}}</span></div>\n" +
    "                    </div>\n" +
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
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p ng-click=\"expandAdvancedFilter()\"><a><i class=\"fa fa-filter\"></i> <b>Custom Filter</b></a></p>\n" +
    "                <div ng-if=\"filtersAreExpanded\">\n" +
    "                    <!--\n" +
    "                    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">\n" +
    "                        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div style=\"padding:15px\">\n" +
    "                                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Filter Builder</h1>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    -->\n" +
    "                    <text-angular ng-model=\"filterBuilder\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"\">Submit</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        \n" +
    "            <!--LEDGER-->\n" +
    "            <!--AND VECTOR / SELF-TRANSACTION ASSOCIATIONS-->\n" +
    "            <div ng-if=\"type=='LEDGER'\">\n" +
    "\n" +
    "                <p><b>Asset Set</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Asset Set\" ng-model=\"selectedAssets\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"asset in item.assets.slice(0,10) track by $index\">\n" +
    "                    <a href=\"#\" ng-click=\"selectAsset(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <!--RELATED-->\n" +
    "                <p><b>Context</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"selectedTags\">\n" +
    "                    <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"asset in item.tags.slice(0,10) track by $index\">\n" +
    "                    <a href=\"#\" ng-click=\"selectTag(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Associations</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"selectedAssociations\">\n" +
    "                    <auto-complete source=\"loadAssociation($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"asset in item.associations.slice(0,10) track by $index\">\n" +
    "                    <a href=\"#\" ng-click=\"selectTag(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"type=='MANIFOLD'\">\n" +
    "\n" +
    "                <h5>{TOKEN}+[ACTION]+SPONSOR+(ADDRESS)</h5>\n" +
    "                <h5>+CREDIT+(TIME)</h5>\n" +
    "                <h5>+FUTURE+(TIME)</h5>\n" +
    "                <h5>+OPTION+(TIME)</h5>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--MARKET-->\n" +
    "            <div ng-if=\"type=='MARKET'\">\n" +
    "\n" +
    "                <!--\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                -->\n" +
    "\n" +
    "                <p><b>Models</b></p>\n" +
    "                <p ng-repeat=\"manifold in manifolds\">\n" +
    "                    <a ng-click=\"\">{{manifold}}</a>\n" +
    "                </p>\n" +
    "\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Asset\" ng-model=\"markets\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "\n" +
    "                <!--IDK-->\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Volume</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\"></span></div>\n" +
    "                </div>\n" +
    "\n" +
    "                <!--IDK-->\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"12\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"font-size:10px\">Combinitorial</span></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"locationFilter.distance\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\"></span></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"type=='NOTIFICATION'\">\n" +
    "\n" +
    "                <ul class=\"nav nav-pills nav-justified contentTyle\">\n" +
    "                    <li ng-class=\"{active: selectedType=='ALL'}\" ng-click=\"selectType('ALL')\"><a href=\"#\">All</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='READ'}\" ng-click=\"selectType('READ')\"><a href=\"#\">Read</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='UNREAD'}\" ng-click=\"selectType('UNREAD')\"><a href=\"#\">Unread</a></li>\n" +
    "                </ul>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Context</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Tags\" ng-model=\"searchQueryNav.tags\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"item in item.tags.slice(0,10) track by $index\">\n" +
    "                    <a href=\"#\" ng-click=\"selectTag(item)\">{{item}}</a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Type</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Type\" ng-model=\"searchQueryNav.type\">\n" +
    "                    <auto-complete source=\"loadType($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"item in item.type.slice(0,10) track by $index\">\n" +
    "                    <a href=\"#\" ng-click=\"selectTypeFilter(item)\">{{item}}</a>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <p><b>Priority</b></p>\n" +
    "                <div layout=\"\">\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"priorityFilter.priority\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"general\"></md-slider>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--POSTIONS | MAP-->\n" +
    "            <div ng-if=\"type=='POSITIONS'\">\n" +
    "                <p><b>Positions</b></p>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseMarkets\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Asset\" ng-model=\"markets\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"type=='VALUEMAP'\">\n" +
    "\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Base Asset\" ng-model=\"baseTokenSet\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <div ng-repeat=\"token in baseTokenSet\">\n" +
    "                    <h5>{{token.text}}</h5>\n" +
    "                    <p>{{token.description}}</p>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Manifold\" ng-model=\"baseManifold\">\n" +
    "                    <auto-complete source=\"loadAsset($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "                <h5>{{baseManifold.text}}</h5>\n" +
    "                <p>{{baseManifold.description}}</p>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "                <h5>{{orderType.text}}</h5>\n" +
    "                <p>{{orderType.description}}</p>\n" +
    "\n" +
    "                <ul class=\"nav nav-pills nav-stacked contentType\">\n" +
    "                    <li ng-class=\"{active: orderType.text=='Continual'}\" ng-click=\"selectType('CONTINUAL')\"><a href=\"#\">Continual on Books</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='DISCRETE'}\" ng-click=\"selectType('DISCRETE')\"><a href=\"#\">Discrete on Books</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='FOK'}\" ng-click=\"selectType('FOK')\"><a href=\"#\">Fill or Kill</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='IOC'}\" ng-click=\"selectType('IOC')\"><a href=\"#\">Immediate or Cancel</a></li>\n" +
    "                    <li ng-class=\"{active: selectedType=='LIMIT'}\" ng-click=\"selectType('LIMIT')\"><a href=\"#\">Limit</a></li>\n" +
    "                </ul>\n" +
    "\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/information.tpl.html",
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"information\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;max-width:100%;\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?code')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Information</h1>\n" +
    "                        <h5 style=\"color:white\">{{informationType}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "             <div ng-if=\"informationType == 'ASSOCIATIONS'\">\n" +
    "                <p>Associations are computed though validation traversal.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATEACTION'\">\n" +
    "                <p>Actions are a verb in the string Language. Actions extend items, and act as verbs upon items. 'USE+ITEM'</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATECONTENT'\">\n" +
    "                <p>Content is art; content can funnel attention, energy, and value. You can CREATE content. Content can be associated recursivly. Triggering Motions to validate where appropiate.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATEITEM'\">\n" +
    "                <p>Items are moments of information. They convey complex information, transend the string domain, and carry within them the ability of application input. Providing more functionality and carrying with them additional ancillar protocol inputs. Creating rich ownership of (items as) assets and liabilities[defined by protocol]. The Marketplace is supported by Deventalized Physically Validated Delivery (PVD) Protocols.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATEORDER'\">\n" +
    "                <p>Orders create the core of realational value. The are the linkages between assets which are weighted by the OrderBook i.e. Prices at which people are willing to by and sell respectively.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATEPROJECT'\">\n" +
    "                <p>Projects are Organization. They are the mechanism by which we are able to coordinate as a group around shared goals. Projects can own assests and are consequently shared by their members. Decision making is disintermediated democratically though wieghted voting though motions. Projects connect to Tasks and to Time.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATETASK'\">\n" +
    "                <p>Tasks act as a 'Bridge,' provide context to time, and shape broader the objectives of projects through the clear statement of responsibility.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATETIME'\">\n" +
    "                <p>Time is a core unit of value. Within the template of scarcity, time as intention manifests as value. Albeit not necessarily finanite, linearly it's tells a compelling narrative. Information on how we spend our time intuitivly creates shared value. Information as income.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATETRANSACTION'\">\n" +
    "                <p>Transactions allow for the exchange and transfer of tokens. They contain tags, content, and and amountSet. Transaction logic is governed by the TRANSACTION protocol.</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'CREATEVALIDATION'\">\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'IDENTIFERSET'\">\n" +
    "            </div>\n" +
    "             <!--DEP-->\n" +
    "            <div ng-if=\"informationType == 'MARKETLIQUIDITY'\">\n" +
    "                <p style=\"color:gray;font-style:italic\">\n" +
    "                    Enter your desired output for tokens based on liquidy in the MultiMarket. The CRE8 network will perform matching operations and create a series of orders which fulfill the token conversion. The perspective we look at the multimarket gives us traversing rules and computationally efficient conversion paths. Through the assistance of tensor-based neural networks we create a hyper-vector perspective formed though relations of the aggregate of our value maps.\n" +
    "                </p>\n" +
    "                `{({}_1, =, alpha_1A,+,beta_1B,=,gamma_1C),({}_2, =, alpha_2A,+,beta_2B,=,gamma_2C),(vdots,,,,,,),({}_n, =, delta_nA,+,epsilon_nB,=,zeta_nC):}`\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'PROTOCOLS'\">\n" +
    "                <p>Protocols create plugins to the string space; they create token action potientals though the interplay and interaction of data.</p>\n" +
    "                <p>A bundle of protocols create an Application.</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"informationType == 'Sharing Consent Agreement'\">\n" +
    "                <p>Engaging with peers in the network and sharing with them. Information is given tokenized value with awareness. This responsibility is two way, know that what you put out will be seen and consumed. Thereby, follow our <a>guidelines</a> & respect consentual sharing.</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"informationType == 'TOKEN'\">\n" +
    "                <p>The UniversalToken onMint Market Postion Signifies that the creator of the instrument will transfer UniversalToken onMint of the specified asset.</p>\n" +
    "                <p>Each Memeber is given 1 Universal Token per second</p>\n" +
    "            </div>  \n" +
    "            <div ng-if=\"informationType == 'VALUEMAP'\">\n" +
    "                <p>Value Map Controls</p>\n" +
    "            </div>\n" +
    "            <div ng-if=\"informationType == 'VALIDATION'\">\n" +
    "                <p>\n" +
    "                    Validations create linkages within the CRE8 ecosystem. Validations allow for context-specific consensus. CRE8 supports multiple validation types including human validated proof of work (HVpoW), probabilistic trained validation (PtV), and modular app-specific validation. The connections and validation intention within CRE8 is rich. Validations allow for recursive layering.\n" +
    "                </p>\n" +
    "                <!--VALIDATION IMAGE-->\n" +
    "                <p>Associations are computed though validation traversal.</p>\n" +
    "                <p>`A = sum_(i=0)^n sum_(i=0)^n V_{i_{a-z}`</p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/login.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"login\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div ng-if=\"!currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Login</h1>\n" +
    "                        <h5 style=\"color:white\">Welcome back!</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <input class=\"form-control\" name=\"identifier\" placeholder=\"Email or Username\" title=\"Username\" type=\"text\" ng-model=\"newLogin.identifier\" autocomplete=\"username\"> \n" +
    "                        <i class=\"fa fa-user\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group log-status\">\n" +
    "                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" title=\"password\" autocomplete=\"current-password\" ng-model=\"newLogin.password\"> \n" +
    "                        <i class=\"fa fa-lock\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\"align-right\">\n" +
    "                        <button class=\"btn btn-default log-btn\" ng-click=\"login()\">Sign in</button>\n" +
    "                    </div>\n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a style=\"text-align:center\" href=\"/register\" ui-sref=\"register\"><h5 style=\"color:gray;font-style:italic\">Not A Member Yet?</h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/market.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/market.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"market\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.id}}</h1>\n" +
    "                        <h5 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;\">Market</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <!--TODO-->\n" +
    "            LIQUIDITY\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/nav.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"nav\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;text-align:center\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div ng-if=\"currentUser\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\" style=\"width:100%\">\n" +
    "                            <h1 style=\"font-size:14px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                                <img src=\"{{currentUser.avatarUrl}}\" style=\"height:50px;width:50px;border-radius:100%\">\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <a style=\"font-size:24px;color:white\" href=\"member/{{currentUser.username}}\" ui-sref=\"member.activity({path:currentUser.username})\">{{currentUser.username}}</a>\n" +
    "                            </h1>\n" +
    "                            <h5 style=\"color:white;font-size:12px;\"><a href=\"#\" ng-click=\"memberQRToggle(currentUser)\" style=\"color:white\"><i style=\"color:white\" class=\"fas fa-qrcode\"></i> {{currentUser.id}}</a></h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <form style=\"padding:16px;\" role=\"search\" action=\"/search/\" onSubmit=\"location.href = 'search/' + document.getElementById('search-link').value; return false;\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input class=\"form-control\" style=\"margin-top:3px;border-radius:3px;\" ng-keyup=\"keyPress(searchValue)\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Search\">\n" +
    "                </div>\n" +
    "                <!--<tags-input min-length=\"1\" placeholder=\"Search\" ng-model=\"saerchValue\" ng-keyup=\"keyPress(searchValue)\">\n" +
    "                    <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                </tags-input>-->\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div style=\"min-height:500px;max-height:100vh;overflow:hidden\">\n" +
    "            <h4 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:4px;\"><a href=\"/about\" ui-sref=\"about\">About</a></h4>\n" +
    "            <h4 ng-show=\"currentUser\" class=\"nav-links\" ng-click=\"cre8Toggle()\" style=\"padding:8px;\"><a>CRE8</a></h4>\n" +
    "            <h4 class=\"nav-links\" style=\"padding:4px;\"><a href=\"/discover\" ui-sref=\"discover\">Discover</a></h4>\n" +
    "            <h4 class=\"nav-links\" style=\"padding:4px;\"><a href=\"/market\" ui-sref=\"markets\">Market</a></h4>\n" +
    "            <h4 class=\"nav-links\" style=\"padding:4px;\"><a href=\"/items\" ui-sref=\"items\">Items</a></h4>\n" +
    "            <h4 class=\"nav-links\" style=\"padding:4px;\"><a href=\"/projects\" ui-sref=\"projects\">Projects</a></h4>\n" +
    "            <h4 class=\"nav-links\" style=\"padding:4px;\"><a href=\"/tasks\" ui-sref=\"tasks\">Tasks</a></h4>\n" +
    "            <h4 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:8px;\">\n" +
    "                <a href=\"/notifications\" ui-sref=\"notifications\"> <span ng-if=\"notificationCount > 0\" class=\"label label-danger\">{{notificationCount}}</span> Notifications</a>\n" +
    "            </h4>\n" +
    "            <h4 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:4px;\"><a href=\"/account\" ui-sref=\"account\">Settings</a></h4>\n" +
    "            <h4 ng-show=\"currentUser\" class=\"nav-links\" style=\"padding:4px;\"><a href=\"/logout\">Logout</a></h4>\n" +
    "            <h4 ng-show=\"!currentUser\" ng-click=\"loginToggle()\" class=\"nav-links\" style=\"padding:4px;\"><a>Login</a></h4>\n" +
    "            <h4 ng-show=\"!currentUser\" class=\"nav-links\" style=\"padding:4px;\"><a href=\"/register\" ui-sref=\"register\">Register</a></h4>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,pattern,art,forest');height:100vh\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:100vh\" class=\"imageContainerSmallDiv\">\n" +
    "                    <div style=\"\">\n" +
    "                        <!--\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <a href=\"/\" ui-sref=\"home\"><img style=\"height:50px\" src=\"images/hypercube.gif\"></a>\n" +
    "                            <div class=\"spacing-5\"></div>\n" +
    "                            <a style=\"font-weight:bold;font-size:15px;color:white;font-family:Helvetica Neue,Helvetica,Arial,sans-serif\" href=\"/\" ui-sref=\"home\">CRE8.XYZ</a>\n" +
    "                        </div>\n" +
    "                        -->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/qr.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/qr.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"memberQR\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;color:white;width:70%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px;text-align:center;\">\n" +
    "                        <h1>\n" +
    "                            <a style=\"display:inline;font-weight:600;margin-left:5px;color:white\" href=\"member/{{item.username}}\" ui-sref=\"member.activity({path:item.user.username})\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.avatarUrl}}\" src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.username || item.title}}\n" +
    "                            </a>\n" +
    "                        </h1>\n" +
    "                        <h5 style=\"color:white\">\n" +
    "                            <span style=\"color:white;font-size:10px;\">\n" +
    "                                 {{item.id}}</a>\n" +
    "                            </span>\n" +
    "                        </h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <!--TODO-->\n" +
    "\n" +
    "\n" +
    "            <div style=\"text-align:center\">\n" +
    "                <span style=\"font-size:12px;\">SCAN ME</span>\n" +
    "                <br>\n" +
    "                <img style=\"height:100%;width:50vh;border:12px solid #c5c5c5;border-radius:100%\" src=\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=https://www.cre8.xyz/{{item.id}}\">\n" +
    "                <br>\n" +
    "                <span style=\"font-size:12px;\">CRE8.XYZ</span>\n" +
    "                <br>\n" +
    "            </div>\n" +
    "    \n" +
    "        </div>\n" +
    "    \n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/reaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/reaction.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"reaction\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;text-align:center;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Reaction</h1>\n" +
    "                        <h5 style=\"font-weight:400;color:white\">{{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"min-height:500px;max-height:100vh;overflow:hidden;\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <!--TODO: GRAPH-->\n" +
    "                <h2 ng-click=\"contentToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Plus</a></h2>\n" +
    "                <h2 ng-click=\"itemToggle(item)\" class=\"nav-links\" style=\"padding:4px;\"><a>Minus</a></h2>\n" +
    "                <tags-input min-length=\"1\" placeholder=\"Type\" ng-model=\"newReaction.type\"></tags-input>\n" +
    "                <!--<button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"createReaction()\">create</button>-->\n" +
    "            </div>\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?code,pattern,art,forest');height:100vh\" class=\"imageContainerSmall\"><div style=\"background:rgba(0,0,0,0.75);height:100vh\" class=\"imageContainerSmallDiv\"></div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/register.tpl.html",
    "<!--createMember-->\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"register\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div ng-if=\"!currentUser\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?connect,pattern')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Register</h1>\n" +
    "                        <h5 style=\"color:white\">Welcome to our Community!</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"><i class=\"fa fa-envelope\" autocomplete=\"email\"></i></div>\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\" autocomplete=\"username\"><i class=\"fa fa-user\"></i></div>\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\" autocomplete=\"new-password\"><i class=\"fa fa-lock\"></i></div>\n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\"><h5 style=\"color: gray;font-style: italic;\">Already A Member?</h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "        \n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/render.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/render.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"render\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:95%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div ng-hide=\"item.model == 'CONTENT' && !item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"width:100%;padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <a ng-if=\"item.model == 'CONTENT'\" href=\"content/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'ITEM'\" href=\"item/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'MARKET'\" href=\"market/{{item.string}}\" style=\"color:white\">{{item.string}}</a>\n" +
    "                            <a ng-if=\"item.model == 'ORDER'\" href=\"order/{{item.id}} style=\"color:white\"\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'PROJECT'\" href=\"project/{{item.urlTitle}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'TASK'\" href=\"task/{{item.id}}\" style=\"color:white\">{{item.title}}</a>\n" +
    "                            <a ng-if=\"item.model == 'TIME'\" href=\"time/{{item.id}}\" style=\"color:white\">{{item.amount}} Seconds</a>\n" +
    "                            <a ng-if=\"item.model == 'TRANSACTION'\" href=\"transaction/{{item.id}}\" style=\"color:white\">Transaction</a>\n" +
    "                        </h1>\n" +
    "                        <h5 style=\"color:white\"><a style=\"color:white\" href=\"{{item.model.toLowerCase()}}/{{item.id}}\">{{item.id}}</a></h5>\n" +
    "                        <!--<h5 style=\"color:white\"><span am-time-ago=\"item.createdAt\"></span></h5>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'CONTENT'\">\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'ITEM'\">\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--TODO-->\n" +
    "            <div ng-if=\"item.model == 'MARKET'\">\n" +
    "                <highchart config=\"bidAskChart\"></highchart>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'ORDER'\">\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'PROJECT'\">\n" +
    "\n" +
    "                <div ng-if=\"item.location\">\n" +
    "                    <p><b>Location</b></p>\n" +
    "                    <p ng-if=\"item.location.address\"><b>Address</b>: {{item.location.address}}</p>\n" +
    "                    <p ng-if=\"item.location.lat\"><b>Latitude</b>: {{item.location.lat}}, <b>Longitude</b>: {{item.location.lng}}</p>\n" +
    "                    <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "                    <div class=\"\">\n" +
    "                        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                            <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                                <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                                    <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                                </ui-gmap-window>\n" +
    "                            </ui-gmap-marker>\n" +
    "                        </ui-gmap-google-map>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p><b>Associations</b></p>\n" +
    "                <p><b>Members</b>: <a>{{item.memberCount || 0}}</a>, <b>Tasks</b>: <a>{{item.taskCount || 0}}</a>, <b>Time</b>: <a>{{item.timeCount||0 }}</a></p>\n" +
    "                \n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "                <p><b>Manifolds</b></p> \n" +
    "                <p><a href=\"market/{{item.urlTitle.toUpperCase()}}\">{{item.urlTitle.toUpperCase()}}+</a>, <a href=\"{{market/item.urlTitle.toUpperCase()}}+TASK+\">{{item.urlTitle.toUpperCase()}}+TASK+</a>, <a href=\"market/project/{{item.urlTitle.toUpperCase()}}+TIME+\">{{item.urlTitle.toUpperCase()}}+TIME+</a></p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'TASK'\">\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'TIME'\">\n" +
    "                <a ng-if=\"item.user\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.user.username}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.model == 'TRANSACTION'\">\n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"item.from.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.from.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"item.from.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.from.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                    <i class=\"fa fa-arrow-right\"></i>\n" +
    "                </div>\n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"item.to.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.to.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"item.to.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{item.to.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <span ng-repeat=\"(key, value) in item.amountSet track by $index\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\">{{key}}</a></p></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"item.tags\" class=\"spacing-5\"></div>\n" +
    "            <p ng-if=\"item.tags\"><b>Context</b></p> \n" +
    "            <p ng-if=\"item.tags\"><a ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\"> {{tag.trim()}}<span ng-show=\"!$last\">,</span></a></p>\n" +
    "            \n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            \n" +
    "            <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "            \n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            \n" +
    "            <span ng-if=\"item.content\" style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"background-color:#f9f9f9;height:100%\">\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                <a href=\"#\" ng-click=\"createReaction(item, 'minus')\"><i class=\"fa fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                <a href=\"#\" ng-click=\"reply(validation)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "                <a href=\"#\" ng-click=\"validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "            </div>\n" +
    "            <!--RENDER ASSOCIATED TIME-->\n" +
    "            <!--RENDER ASSOCIATED CONTENT-->\n" +
    "            <!--<div ng-include=\"'content/content.tpl.html'\" ng-repeat=\"content in content.children track by content.id\"></div>-->\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/renderAssociation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/renderAssociation.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderAssociation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%;overflow-x:hidden\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px;width:100%\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        <h5 style=\"color:white\">\n" +
    "\n" +
    "                            <span ng-if=\"item.model != 'TIME'\">{{item.title}}</span>\n" +
    "                            <span ng-if=\"item.model == 'TIME'\">\n" +
    "                                <span style=\"font-size:10px;color:white\"> \n" +
    "                                    {{item.amount}} seconds {{(item.amount/60).toFixed(2)}} minutes, {{(item.amount/3600).toFixed(2)}} hours\n" +
    "                                </span>\n" +
    "                            </span>\n" +
    "\n" +
    "                        </h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>           \n" +
    "            \n" +
    "            <!--\n" +
    "            <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "            </tags-input>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-sm-3\">\n" +
    "                    <div style=\"max-height:500px;overflow:auto\">\n" +
    "                        <div ng-repeat=\"association in item.associatedModels\">\n" +
    "                            <p ng-click=\"filterAssociation()\"><b>{{association.id}}</b></p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-9\">\n" +
    "                    <cytoscape graph-ready=\"graphReady\" graph-options=\"directedGraphOptions\" graph-elements=\"directedGraphElements\" graph-layout=\"directedGraphLayout\" graph-style=\"directedGraphStyle\"></cytoscape>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            \n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <highchart config=\"validationColumnRender\"></highchart>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Member</th>\n" +
    "                        <th>Models</th>\n" +
    "                        <th>Dimension</th>\n" +
    "                        <th>Validation Score</th>\n" +
    "                        <th>Id</th>\n" +
    "                    </tr>\n" +
    "                <thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"validation in validations\">\n" +
    "                        <td>\n" +
    "                            <a href=\"member/{{validation.user.username}}\" ui-sref=\"member.activity({path:validation.user.username})\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{validation.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                <span style=\"font-weight:700\">{{validation.user.username}}</span>\n" +
    "                            </a>\n" +
    "                        </td>\n" +
    "\n" +
    "                        <td>\n" +
    "\n" +
    "                            <span ng-if=\"validation.associatedModels[0].type=='PROJECT'\"><a href=\"project/{{validation.associatedModels[0].info.urlTitle}}\">{{validation.associatedModels[0].info.title}}</a></span>\n" +
    "                            <span ng-if=\"validation.associatedModels[0].type=='TASK'\"><a href=\"task/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.title}}</a></span>\n" +
    "                            <span ng-if=\"validation.associatedModels[0].type=='TIME'\"><a href=\"time/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[0].info.amount}} Seconds</a></span>\n" +
    "\n" +
    "                            <i class=\"fa fa-arrows-h\"></i> \n" +
    "\n" +
    "                            <span ng-if=\"validation.associatedModels[1].type=='PROJECT'\"><a href=\"project/{{validation.associatedModels[0].info.urlTitle}}\">{{validation.associatedModels[1].info.title}}</a></span>\n" +
    "                            <span ng-if=\"validation.associatedModels[1].type=='TASK'\"><a href=\"task/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[1].info.title}}</a></span>\n" +
    "                            <span ng-if=\"validation.associatedModels[1].type=='TIME'\"><a href=\"time/{{validation.associatedModels[0].address}}\">{{validation.associatedModels[1].info.amount}} Seconds</a></span>\n" +
    "\n" +
    "                        </td>\n" +
    "\n" +
    "                        <td>General</td>\n" +
    "                        <td>{{validation.validation.general}}</td>\n" +
    "                        <td><a href=\"validation/{{validation.id}}\" ui-sref=\"validation({id:validation.id})\">{{validation.id}}</a></td>\n" +
    "\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "            -->\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/renderAttention.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/renderAttention.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderAttention\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%;overflow-x:hidden\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px;width:100%\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Attention</h1>\n" +
    "                        <h5 style=\"color:white\">\n" +
    "                            <span>{{item.title}}</span>\n" +
    "                            <span>{{item.id}}</span>\n" +
    "                        </h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <!--ATTENTION MAPPING-->\n" +
    "            <highchart config=\"attentionChart\"></highchart>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/renderReputation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/renderReputation.tpl.html",
    "<!--RENDER MEMBER...-->\n" +
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"renderReputation\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div ng-if=\"true\" class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <div style=\"background: url('{{item.user.coverUrl}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px;text-align:center\">\n" +
    "                        <h1>\n" +
    "                            <a style=\"display:inline;font-weight:600;margin-left:5px;color:white\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">\n" +
    "                                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                                {{item.user.username}}\n" +
    "                            </a>\n" +
    "                        </h1>\n" +
    "                        <h5 style=\"color:white\">\n" +
    "                            <span style=\"color:white;font-size:10px;\">\n" +
    "                                <a href=\"#\" style=\"color:white\" ng-click=\"memberQRToggle(item.user)\"> <i style=\"color:white\" class=\"fas fa-qrcode\"></i> {{item.user.id}}</a>\n" +
    "                            </span>\n" +
    "                            <span ng-if=\"item.project\" style=\"color:gray;font-size:10px;\">\n" +
    "                                <a href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\" style=\"color:white\">, {{item.id}}</a>\n" +
    "                            </span>\n" +
    "                        </h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;text-align:center\">\n" +
    "\n" +
    "            <p style=\"font-size:14px;\">\n" +
    "                <a href=\"member/{{item.user.username}}/projects\" ui-sref=\"member.projects({path:item.user.username})\">{{item.user.projectCount || 0}} Projects</a> | \n" +
    "                <a href=\"member/{{item.user.username}}/followers\" ui-sref=\"member.followers({path:item.user.username})\">{{item.user.followerCount || 0}} Followers</a> | \n" +
    "                <a href=\"member/{{item.user.username}}/following\" ui-sref=\"member.following({path:item.user.username})\">{{item.user.followingCount || 0}} Following</a>\n" +
    "            </p>\n" +
    "            <p style=\"font-size:14px;\"><a href=\"member/{{item.user.username}}/assets\" ui-sref=\"member.assets({path:item.user.username})\">{{item.totalWork || 0}} Reputation</a></p>\n" +
    "            <p style=\"color:gray;font-size:12px;\">\n" +
    "                <span ng-if=\"item.user.loggedIn\">\n" +
    "                    <span><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online</span>\n" +
    "                    <span ng-if=\"item.user.status\"><br>{{item.user.status}}</span>\n" +
    "                </span>\n" +
    "                <span ng-if=\"!item.user.loggedIn\"><i class=\"fa fa-circle\"></i> Offline</span>\n" +
    "            </p>\n" +
    "            <div ng-if=\"currentUser.id != item.user.id\">\n" +
    "                <img ng-click=\"memberQRToggle(item.user)\" style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{item.user.id}}\" ng-src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{item.user.id}}\">\n" +
    "                <a style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Send Tokens</a>\n" +
    "                <a style=\"padding:10px 15px;color:rgb(125,125,125)\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();transactionToggle()\">Follow</button></a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            \n" +
    "            <!--FIX CRASH-->\n" +
    "            <highchart config=\"reputationChart\"></highchart>\n" +
    "            \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/share.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/share.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"share\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Share</h1>\n" +
    "                        <h5 style=\"text-align:left;font-size:14px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <h5>CRE8</h5>\n" +
    "            <p ng-click=\"validationToggle(item)\"><a><i class=\"fas fa-bezier-curve\"></i> Associate by Validation</a></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <h5>URL</h5>\n" +
    "            <p>{{url}} </p>\n" +
    "            <p style=\"width:auto\" class=\"btn btn-default log-btn\" ng-click=\"copyToClipBoard(url)\">copy <i class=\"fas fa-copy\"></i></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <h5>QR</h5>\n" +
    "            <img style=\"height:100px;width:100px\" src=\"https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl={{url}}\">\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "            <h5>JSON</h5>\n" +
    "            <p style=\"width:auto\" class=\"btn btn-default log-btn\" ng-click=\"copyToClipBoard(jsonObj)\">copy <i class=\"fas fa-copy\"></i></p>\n" +
    "            <div hljs hljs-language=\"javascript\"  hljs-source=\"jsonObj\"></div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/sort.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/sort.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"sort\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Sort</h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <!--LOOP THRU OBJ TYPE KEYS..-->\n" +
    "            <!--<h2><i class=\"fas fa-sort-amount-down\"></i></h2>-->\n" +
    "            <!--<h5><a>Trending</a></h5>-->\n" +
    "\n" +
    "            <h4 ng-click=\"selectSort('ATTENTION', 'DESC', '24h')\" class=\"nav-links\"><a href=\"#\"><i class=\"fas fa-eye\"></i> Attention <i class=\"fas fa-chevron-down\"></i></a></h4>\n" +
    "            \n" +
    "            <!--PAST 24 HOURS-->\n" +
    "            <!--ALL TIME..ETC-->\n" +
    "            <h5 ng-click=\"selectSort('ATTENTION', 'DESC', '24h')\" class=\"nav-links\"><a href=\"#\">Past 24 Hours</a></h5>\n" +
    "            <h5 ng-click=\"selectSort('ATTENTION', 'DESC', '1m')\" class=\"nav-links\"><a href=\"#\">Past Month</a></h5>\n" +
    "            <h5 ng-click=\"selectSort('ATTENTION', 'DESC', '1y')\" class=\"nav-links\"><a href=\"#\">Past Year</a></h5>\n" +
    "            <h5 ng-click=\"selectSort('ATTENTION', 'DESC', 'all')\" class=\"nav-links\"><a href=\"#\">All Time</a></h5>\n" +
    "\n" +
    "            <h4 ng-click=\"selectSort('REACTION', 'DESC', 'all')\" class=\"nav-links\"><a href=\"#\"><i class=\"fas fa-thumbs-up\"></i>  Reactions <i class=\"fas fa-chevron-down\"></i></a></h4>\n" +
    "            \n" +
    "            <h4 ng-click=\"selectSort('createdAt', 'DESC', null)\" class=\"nav-links\"><a href=\"#\">Creation Date</a></h4>\n" +
    "        \n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/stats.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"stats\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "    \n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "                        <h5 style=\"text-align:left;font-size:14px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <span ng-if=\"item.model != 'TIME'\">\n" +
    "                                <span style=\"font-size:16px;color:white\" ng-if=\"item.title\">{{item.title}}</span>\n" +
    "                                <span style=\"font-size:16px;color:white\" ng-if=\"!item.title\">{{item.model}}</span>\n" +
    "                            </span>\n" +
    "                            <span ng-if=\"item.model == 'TIME'\">\n" +
    "                                <span style=\"font-size:16px;color:white\">{{item.amount}} seconds</span>\n" +
    "                            </span>\n" +
    "                            <br>\n" +
    "                            <span style=\"font-size:10px;color:white\">{{item.id}}</span>\n" +
    "                        </h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <highchart config=\"chart\"></highchart>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
}]);

angular.module("nav/templates/subNav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/subNav.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"subNav\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:black\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;text-align:center;\">\n" +
    "        \n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?explode,erupt,action,create')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\" style=\"width:100%\">\n" +
    "                        <h1 style=\"font-size:14px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <a ng-if=\"item.title\" href=\"project/{{item.title}}\" ui-sref=\"project.activity({path:item.urlTitle})\">\n" +
    "                                <img  err-src=\"/images/avatar.png\" ng-src=\"{{item.avatarUrl}}\" style=\"height:50px;width:50px;border-radius:100%\">\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <span style=\"font-size:24px;color:white\">{{project.title}}</span>\n" +
    "                            </span>\n" +
    "                            <a ng-if=\"item.username\" href=\"member/{{item.username}}\" ui-sref=\"member.activity({path:item.username})\">\n" +
    "                                <img  err-src=\"/images/avatar.png\" ng-src=\"{{item.avatarUrl}}\" style=\"height:50px;width:50px;border-radius:100%\">\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <span style=\"font-size:24px;color:white\">{{item.username}}</span>\n" +
    "                            </a>\n" +
    "                        </h1>\n" +
    "                        <h5 style=\"color:white\" ng-click=\"memberQRToggle(item)\"><i style=\"color:white\" class=\"fas fa-qrcode\"></i> {{item.id}}</h5>\n" +
    "                        <!--<a style=\"color:white\" ng-if=\"item.username\" ng-click=\"renderReputationToggle(item)\"><i class=\"fas fa-plus\"></i></a>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <div ng-if=\"item.title\">\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/about\" ui-sref=\"project.about({path:item.urlTitle})\">About</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/assets\" ui-sref=\"project.assets({path:item.urlTitle})\">Assets</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/charter\" ui-sref=\"project.charter({path:item.urlTitle})\">Charter</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/content\" ui-sref=\"project.content({path:item.urlTitle})\">Content</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/items\" ui-sref=\"project.items({path:item.urlTitle})\">Items</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/ledger\" ui-sref=\"project.ledger({path:item.urlTitle})\">Ledger</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/members\" ui-sref=\"project.members({path:item.urlTitle})\">{{item.memberCount}} Members</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/positions\" ui-sref=\"project.positions({path:item.urlTitle})\">Positions</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/projects\" ui-sref=\"project.projects({path:item.urlTitle})\">Projects</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/tasks\" ui-sref=\"project.tasks({path:item.urlTitle})\">Tasks</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"project/{{item.urlTitle}}/time\" ui-sref=\"project.time({path:item.urlTitle})\">Time</a></h4>\n" +
    "                <!--<h4 class=\"nav-links\"><a href=\"project/{{project.urlTitle}}/charter\">Validations</a></h4>-->\n" +
    "            </div>\n" +
    "            <div ng-if=\"item.username\">\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/about\" ui-sref=\"member.about({path:item.username})\">About</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/actions\" ui-sref=\"member.actions({path:item.username})\">Actions</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/assets\" ui-sref=\"member.assets({path:item.username})\">Assets</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/content\" ui-sref=\"member.content({path:item.username})\">Content</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/followers\" ui-sref=\"member.followers({path:item.username})\">{{item.followerCount}} Followers</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/following\" ui-sref=\"member.following({path:item.username})\">{{item.followingCount}} Following</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/items\" ui-sref=\"member.items({path:item.username})\">Items</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/ledger\" ui-sref=\"member.ledger({path:item.username})\">Ledger</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/positions\" ui-sref=\"member.positions({path:item.username})\">Positions</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/projects\" ui-sref=\"member.projects({path:item.username})\">{{item.projectCount}} Projects</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/tasks\" ui-sref=\"member.tasks({path:item.username})\">Tasks</a></h4>\n" +
    "                <h4 class=\"nav-links\"><a href=\"member/{{item.username}}/time\" ui-sref=\"member.time({path:item.username})\">Time</a></h4>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/timer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/timer.tpl.html",
    "<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"timer\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;width:70%;max-width:100%\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?time')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Time</h1>\n" +
    "                        <h5 style=\"color:white\">Pay Attention!</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!--LOCATION.. (TASK) TIMER.. ATTENTION-->\n" +
    "        <!--ADD CONTEXT???-->\n" +
    "        <!--CREATE TIME SHOULD SPIN OFF A NEW INTERVAL WITH ID..-->\n" +
    "            <!--DOING IT TWICE WILL 'DOUBlE' NOW-->\n" +
    "        <div style=\"padding:16px;overflow:auto\">\n" +
    "\n" +
    "            <ul style=\"padding:0px;margin-top:0px;margin-bottom:0px;\" class=\"member-tabs\">\n" +
    "                <li ng-if=\"taskTime > 0\"><a ng-click=\"selectTab('TASK')\" href=\"#\">Intentional Time</a></li>\n" +
    "                <li><a ng-click=\"selectTab('ATTENTION')\" ng-click=\"\" href=\"#\">Live Attention</a></li>\n" +
    "                <li><a ng-click=\"selectTab('MACHINE')\" href=\"#\">Machine Attention</a></li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <div ng-if=\"selectedTab=='TASK'\">\n" +
    "                <!--PEOPLE CAN FORGET TO SUBMITE..-->\n" +
    "                <!--IF MULTI TASKS-->\n" +
    "                <!--SUBMIT, UPDATE, LIFE CYCLE-->\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <form role=\"form\" ng-submit=\"createTime()\">\n" +
    "                    <div>\n" +
    "                        <h5>\n" +
    "                            Context \n" +
    "                            <a ng-click=\"expandAssociations()\" style=\"float:right\">\n" +
    "                                <span ng-if=\"!associationsAreExpanded\"><i class=\"fas fa-bezier-curve\"></i> Expand</span>\n" +
    "                                <span ng-if=\"associationsAreExpanded\"><i class=\"fas fa-grip-lines\"></i> Hide</span>\n" +
    "                            </a>\n" +
    "                        </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Context\" ng-model=\"newTime.context\">\n" +
    "                            <auto-complete min-length=\"2\" source=\"loadTags($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"associationsAreExpanded\">\n" +
    "                        <h5>Associations </h5>\n" +
    "                        <tags-input min-length=\"1\" placeholder=\"Associations\" ng-model=\"newTime.associatedModels\">\n" +
    "                            <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                        </tags-input>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12 col-sm-12\" ng-repeat=\"association in newTime.associatedModels\">\n" +
    "                                <h5>\n" +
    "                                    {{association.text}} \n" +
    "                                    <a style=\"float:right\" ng-click=\"association.isExpanded=!association.isExpanded\">\n" +
    "                                        <i class=\"fas fa-compress-arrows-alt\"></i>\n" +
    "                                        <b>{{association.connection[0].text || 'Default Connection'}}</b>\n" +
    "                                    </a>\n" +
    "                                </h5>\n" +
    "                                <div ng-if=\"association.isExpanded\">\n" +
    "                                    <h4>Default Connection</h4>\n" +
    "                                    <p>Details & Rules<p>\n" +
    "                                </div>\n" +
    "                                <tags-input min-length=\"1\" placeholder=\"{{association.text}} Context\" ng-model=\"association.context\">\n" +
    "                                    <auto-complete source=\"loadTags($query)\"></auto-complete>\n" +
    "                                </tags-input>\n" +
    "                                <div class=\"spacing-5\"></div>\n" +
    "                                <div ng-repeat=\"context in association.context\">\n" +
    "                                    <div layout=\"\">\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\">{{context.text}}</span></div>\n" +
    "                                        <md-slider ng-model=\"context.score\" step=\"0.1\" flex=\"\" md-discrete=\"\" min=\"-100\" max=\"100\"></md-slider>\n" +
    "                                        <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p class=\"md-body-1\">{{context.score}}</p></div>\n" +
    "                                    </div>\n" +
    "                                    <div style=\"text-align:center\"><p style=\"font-size:9px\">{{context.score}}</p></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <h3>{{taskTime}}</h3>\n" +
    "                    <div ng-if=\"streaming\"> <div ng-bind-html=\"renderStream(streamUrl)\"></div></div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['p','h1','bold','italics','quote','insertLink', 'html']]\"></text-angular>\n" +
    "                    <div class=\"spacing-5\"></div>\n" +
    "                    <button type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"selectedTab=='ATTENTION'\">\n" +
    "                <highchart config=\"timeChart\"></highchart>\n" +
    "                <h4>{{timeModel.amount}}</h4>\n" +
    "                <div ng-repeat=\"time in timeQ.attention.slice(0,100) | orderBy:'-'\">\n" +
    "                    <p>{{time.context.string}} : <b>{{time.amount}}</b></p>\n" +
    "                    <!--LOCATION AS CONTEXT..?-->\n" +
    "                    <p><b>lat:</b> {{time.location.lat}}, <b>lng:</b> {{time.location.lng}}</p>\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div ng-if=\"selectedTab=='MACHINE'\">\n" +
    "\n" +
    "                <div ng-repeat=\"time in timeQ.mining.slice(0,100) | orderBy:'-'\">\n" +
    "                    <p>{{time.context.string}} : <b>{{time.amount}}</b></p>\n" +
    "                    <!--LOCATION AS CONTEXT..?-->\n" +
    "                    <!--FUNCTION CALLS-->\n" +
    "                    <p><b>lat:</b> {{time.location.lat}}, <b>lng:</b> {{time.location.lng}}</p>\n" +
    "                    <hr>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>");
}]);

angular.module("nav/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/templates/tokens.tpl.html",
    "<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"tokens\" md-is-locked-open=\"false\" style=\"position:fixed;background-color:white;min-width:50%;max-width:100%;overflow-x:hidden\">\n" +
    "    <div class=\"md-list-item-text\" layout=\"column\" style=\"height:100%;\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                        <h5 style=\"color:white\">{{item.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div style=\"padding:16px;\">\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <highchart config=\"tokenChart\"></highchart>\n" +
    "            <tags-input min-length=\"1\" ng-model=\"tokenFilter\" placeholder=\"Token Filter\"></tags-input>\n" +
    "            <h5 style=\"\">Protocols <a ng-click=\"informationToggle('PROTOCOLS', 'GENERAL', item)\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Identifer</th>\n" +
    "                        <th>Value</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"item in sortableSet\">\n" +
    "                        <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                        <td>{{item[1]}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "\n" +
    "            <!--\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"token in tokens\">\n" +
    "                        <td><a href=\"market/{{token}}\" ui-sref=\"market({id:token})\">{{token}}</a></td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h3 style=\"\">Market Liquidity<h3>\n" +
    "            <h5>Equality Traverse <a ng-click=\"informationToggle('MARKETLIQUIDITY')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></h5>\n" +
    "\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4>Asset Input</h4>\n" +
    "            <tags-input min-length=\"1\" ng-model=\"inputVector\" placeholder=\"Input\"></tags-input>\n" +
    "           \n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <h4>Desired Output</h4>\n" +
    "            <tags-input min-length=\"1\" ng-model=\"outputVector\" placeholder=\"Output\"></tags-input>\n" +
    "            \n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <button ng-click=\"marketTraverse();\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">+ Lookup</button>\n" +
    "            \n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "            <div ng-show=\"outputMatix.length > 0\" >\n" +
    "\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"token in inputVector track by $index\">\n" +
    "                            <td><a href=\"market/{{token.text}}\" ui-sref=\"market({id:token.text})\">{{token.text}}</a></td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <div style=\"text-align:center\"><img src=\"https://i.stack.imgur.com/PnXIo.png\"/></div>\n" +
    "\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Identifer</th>\n" +
    "                            <th>Value</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"assetVector in outputMatix track by $index\">\n" +
    "                            <td><a href=\"market/{{assetVector.identifer}}\" ui-sref=\"market({id:assetVector.identifer})\">{{assetVector.identifer}}</a></td>\n" +
    "                            <td>{{assetVector.value}}</td>\n" +
    "                        </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            -->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</md-sidenav>\n" +
    "");
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
    "			<li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "		</ul>\n" +
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
    "		<div ng-repeat=\"notification in notifications\" class=\"card\" ng-click=\"cardDetailToggle(notification)\">\n" +
    "\n" +
    "	    	<div style=\"background:url('https://source.unsplash.com/1600x900/?code,city,{{notification.content}},notification,{{notification.info.content.title}}');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div style=\"padding:15px;\">\n" +
    "				            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;text-transform: capitalize;\">{{notification.title}}</h1>\n" +
    "				            <!--<h5 style=\"color:white\" am-time-ago=\"notification.createdAt\"></h5>-->\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "\n" +
    "	        <div style=\"padding:16px;\">\n" +
    "	        	<div style=\"float:right;text-align:center\">\n" +
    "		            <span ng-if=\"notification.isRead\">\n" +
    "		            	<button class=\"btn btn-default\" ng-click=\"$event.stopPropagation();markRead(notification, false)\"><i class=\"fa fa-envelope-o\"></i></button>\n" +
    "						<br><span style=\"color:gray;font-size:10px;\">Read</span>\n" +
    "		            </span>\n" +
    "    		        <span ng-if=\"!notification.isRead\">\n" +
    "						<button ng-if=\"!notification.isRead\" class=\"btn btn-default\" ng-click=\"$event.stopPropagation();markRead(notification, true)\"><i style=\"color:red\" class=\"fa fa-envelope-o\"></i></button>\n" +
    "						<br><span style=\"color:gray;font-size:10px;\">Unread</span>\n" +
    "		            </span>\n" +
    "	        	</div>\n" +
    "\n" +
    "    	        <div ng-if=\"notification.type=='FOLLOW'\" ng-include=\"'notifications/templates/follow.tpl.html'\"></div>\n" +
    "    	        <div ng-if=\"notification.type=='REACTION'\" ng-include=\"'notifications/templates/reaction.tpl.html'\"></div>\n" +
    "    	        <div ng-if=\"notification.type=='TRANSACTION'\" ng-include=\"'notifications/templates/transaction.tpl.html'\"></div>\n" +
    "    	        <div ng-if=\"notification.type=='VALIDATION'\" ng-include=\"'notifications/templates/validation.tpl.html'\"></div>\n" +
    "\n" +
    "	        </div>\n" +
    "\n" +
    "	        <div  ng-if=\"notification.type=='VALIDATION'\"  class=\"card-footer\">\n" +
    "		        <a ng-if=\"notification.type=='VALIDATION'\" ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
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

angular.module("notifications/templates/follow.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/templates/follow.tpl.html",
    "<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "<a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{notification.data.app.member.username}}\" ui-sref=\"member.activity({path:notification.data.app.member.username})\">\n" +
    "    <img class=\"card-avatar\" ng-src=\"{{notification.data.app.member.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "    {{notification.data.app.member.username}}\n" +
    "</a>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<button ng-if=\"!notification.isFollowing\" ng-click=\"follow(notification)\" class=\"btn btn-default\">Follow</button>\n" +
    "<button ng-if=\"notification.isFollowing\" ng-click=\"follow(notification)\" class=\"btn btn-default\">Unfollow</button>\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px;margin-top:0px\" am-time-ago=\"notification.createdAt\"></p>\n" +
    "\n" +
    "");
}]);

angular.module("notifications/templates/reaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/templates/reaction.tpl.html",
    "<p>\n" +
    "    <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{notification.data.apps.user.username}}\" ui-sref=\"member.activity({path:notification.data.apps.user.username})\">\n" +
    "        <img class=\"card-avatar\" ng-src=\"{{notification.data.apps.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "        {{notification.data.apps.user.username}}\n" +
    "    </a>\n" +
    "</p>\n" +
    "<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "<!--<div ng-repeat=\"(object, key) in notification.data.apps\">-->\n" +
    "<div ng-if=\"notification.data.apps.content\">\n" +
    "	<p><a ng-click=\"$event.stopPropagation();\" href=\"content/{{notification.data.apps.content.id}}\" ui-sref=\"content({id:notification.data.apps.content.id})\">{{notification.data.apps.content.title}}</a></p>\n" +
    "	<p><a ng-click=\"$event.stopPropagation();\" href=\"content/{{notification.data.apps.content.id}}\" ui-sref=\"content({id:notification.data.apps.content.id})\">{{notification.data.apps.content.id}}</a></p>\n" +
    "</div>\n" +
    "<div ng-if=\"notification.data.apps.task\">\n" +
    "	<p><a ng-click=\"$event.stopPropagation();\" href=\"task/{{notification.data.apps.task.id}}\" ui-sref=\"task({id:notification.data.apps.task.id})\">{{notification.data.apps.task.title}}</a></p>\n" +
    "	<p><a ng-click=\"$event.stopPropagation();\" href=\"task/{{notification.data.apps.task.id}}\" ui-sref=\"task({id:notification.data.apps.task.id})\">{{notification.data.apps.task.id}}</a></p>\n" +
    "</div>\n" +
    "<div ng-if=\"notification.data.apps.transaction\">\n" +
    "	<p><a ng-click=\"$event.stopPropagation();\" href=\"transaction/{{notification.data.apps.transaction.id}}\" ui-sref=\"transaction({id:notification.data.apps.transaction.id})\">{{notification.data.apps.transaction.id}}</a></p>\n" +
    "</div>\n" +
    "<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px;margin-top:0px\" am-time-ago=\"notification.createdAt\"></p>\n" +
    "");
}]);

angular.module("notifications/templates/transaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/templates/transaction.tpl.html",
    "<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "    <span ng-click=\"$event.stopPropagation();\" ng-repeat=\"(key, value) in notification.info.transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation()\"  href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></p></span>\n" +
    "</div>\n" +
    "<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px;margin-top:0px\" am-time-ago=\"notification.createdAt\"></p>\n" +
    "");
}]);

angular.module("notifications/templates/validation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("notifications/templates/validation.tpl.html",
    "<div style=\"display:inline\">\n" +
    "    <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{notification.data.apps.member.username}}\" ui-sref=\"member.activity({path:notification.data.apps.member.username})\">\n" +
    "        <img class=\"card-avatar\" ng-src=\"{{notification.data.apps.member.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "        {{notification.data.apps.member.username}}\n" +
    "    </a>\n" +
    "    <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "        <i class=\"fa fa-arrow-right\"></i>\n" +
    "    </div>\n" +
    "    <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{notification.data.apps.project.urlTitle}}\" ui-sref=\"project.activity({path:notification.data.apps.project.urlTitle})\">\n" +
    "        <img class=\"card-avatar\" ng-src=\"{{notification.data.apps.project.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "        {{notification.data.apps.project.title}}\n" +
    "    </a>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<p><span style=\"color:gray\">{{notification.content}}</span></p>\n" +
    "<!--\n" +
    "<div ng-click=\"$event.stopPropagation();\">\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "    <div style=\"text-align:center\">\n" +
    "        <a ng-click=\"expandConnection(association)\"><b>{{association.connection[0].text || 'Default Connection'}}</b></a>\n" +
    "    </div>\n" +
    "    <div ng-repeat=\"(key, value) in notification.newValidation.validation\">\n" +
    "        <div layout=\"\">\n" +
    "            <div flex=\"10\" layout=\"\" layout-align=\"center center\">\n" +
    "                <p><b>{{key}}</b></p>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "            </div>\n" +
    "            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"notification.newValidation.context[key]\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{key}}\"></md-slider>\n" +
    "            <div flex=\"10\" layout=\"\" layout-align=\"center center\">\n" +
    "                <p class=\"md-body-1\">{{notification.newValidation.context[key]}}</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"text-align:center\"><p style=\"font-size:9px\">{{reputation[key] || 0}} | {{reputation[key]*notification.newValidation.validation[key]}}</p></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-click=\"$event.stopPropagation();\">\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "    <text-angular style=\"height:100px\" ng-model=\"newValidation.content\" ta-toolbar=\"''\"></text-angular>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div ng-click=\"$event.stopPropagation();\">\n" +
    "    <button ng-click=\"createValidation(notification.newValidation)\" type=\"submit\" style=\"width:100%\" class=\"btn btn-default log-btn\">create</button>\n" +
    "</div>\n" +
    "-->\n" +
    "<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px;margin-top:0px\" am-time-ago=\"notification.createdAt\"></p>\n" +
    "");
}]);

angular.module("order/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/index.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(order)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\"> \n" +
    "                    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Order</h1>\n" +
    "                            <h5 style=\"color:white\">{{order.id}}</h5>\n" +
    "                            <h5>\n" +
    "                                <span ng-repeat=\"(key, value) in order.setAlpha\">\n" +
    "                                    <a style=\"color:white\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}} </a>\n" +
    "                                </span>\n" +
    "                            </h5>\n" +
    "                            <h5>\n" +
    "                                <span ng-repeat=\"(key, value) in order.setBeta\">\n" +
    "                                    <a style=\"color:white\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}} </a>\n" +
    "                                </span>\n" +
    "                            </h5>\n" +
    "                            <h5 style=\"color:white\"><span style=\"font-size:10px\">{{order.type}}</span></h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('LIQUIDITY')\">Liquidity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ORDERS')\">Orders</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('TRANSACTIONS')\">Transactions</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr style=\"margin:0px;\">\n" +
    "            <div style=\"padding:16px\" ng-if=\"selectedTab =='INFORMATION'\" ng-include=\"'order/templates/information.tpl.html'\"></div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();renderAttentionToggle(order)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{order.data.apps.attention.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(order, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{order.data.apps.reactions.plus || 0}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(order, 'plus')\" ><i class=\"fas fa-angle-down\"></i> {{order.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();contentToggle(order)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"selectedTab =='LIQUIDITY'\" ng-include=\"'order/templates/liquidity.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='ORDERS'\" ng-include=\"'order/templates/orders.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TRANSACTIONS'\" ng-include=\"'order/templates/transactions.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'order/templates/content.tpl.html'\"></div>\n" +
    "    </div>	\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("order/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/templates/content.tpl.html",
    "");
}]);

angular.module("order/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/templates/information.tpl.html",
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<a href=\"member/{{order.user.username}}\" ui-sref=\"member.activity({path:order.user.username})\">\n" +
    "    <img class=\"card-avatar\" ng-src=\"{{order.user.avatarUrl}}\" src=\"{{order.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "    <b>{{order.user.username}}</b>\n" +
    "</a>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h2 style=\"color:white\">Set Alpha α</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Asset</th>\n" +
    "                            <th>Amount</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"(key, value) in order.setAlpha\">\n" +
    "                            <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                            <td>{{value}}</td>\n" +
    "                        <tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,beta,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h2 style=\"color:white\">Set Beta β</h2>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <table class=\"table table-striped table-hover\">\n" +
    "                    <thead>\n" +
    "                        <tr>\n" +
    "                            <th>Asset</th>\n" +
    "                            <th>Amount</th>\n" +
    "                        </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                        <tr ng-repeat=\"(key, value) in order.setBeta\">\n" +
    "                            <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                            <td>{{value}}</td>\n" +
    "                        <tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<cytoscape graph-options=\"options\" graph-elements=\"elementsObj\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape>\n" +
    "<cytoscape graph-options=\"options\" graph-elements=\"elementsObjCombinatorial\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape>\n" +
    "\n" +
    "<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"order.createdAt\"></p>\n" +
    "");
}]);

angular.module("order/templates/liquidity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/templates/liquidity.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h2 style=\"color:white\">Liquidity</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">   \n" +
    "        <p>Order Fuilfilment Paths</p>\n" +
    "        <p>{{alphaPower.length}} - {{betaPower.length}}</p>\n" +
    "        <div ng-repeat=\"itemAlpha in alphaPower\">\n" +
    "            <div ng-repeat=\"itemBeta in betaPower\">\n" +
    "                <a href=\"market/{{itemAlpha.join(',')}}/{{itemBeta.join(',')}}\" ui-sref=\"marketPair({setAlpha:itemAlpha.join(','), setBeta:itemBeta.join(',')})\">\n" +
    "                    {{itemAlpha.join(',')}}/{{itemBeta.join(',')}}\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("order/templates/orders.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/templates/orders.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h2 style=\"color:white\">Orders</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">   \n" +
    "        <h5>Matching..</h5>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"card\" ng-repeat=\"item in order.tokens\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                     <h4 style=\"color:white\">{{order.amountSet}} {{order.identiferSet}}</h4>\n" +
    "                     <h4 style=\"color:white\">{{order.amountSet1}} {{order.identiferSet1}}</h4>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">   \n" +
    "        <a href=\"member/{{order.user.username}}\" ui-sref=\"member.activity({path:order.user.username})\">\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{order.user.avatarUrl}}\" src=\"{{order.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "            <b>{{order.user.username}}</b>\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"createReaction(order, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{order.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"createReaction(order, 'plus')\" ><i class=\"fa fa-angle-down\"></i> {{order.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"contentToggle(order)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        <a style=\"color:grey\" class=\"pull-right\" href=\"order/{{item.id}}\" ui-sref=\"order({id:item.id})\"><i class=\"fa fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("order/templates/transactions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("order/templates/transactions.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h2 style=\"color:white\">Transactions</h2>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">  \n" +
    "        <h5>No Transactions</h5>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("project/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/index.tpl.html",
    "<style>.angular-google-map-container { height: 150px;} </style>\n" +
    "\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"subNavToggle(project)\">\n" +
    "        \n" +
    "        <div class=\"row\" style=\"margin:0px\">\n" +
    "            <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{project.tags}}');\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\" ng-click=\"\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px;text-align:center\">\n" +
    "                            <img style=\"height:50px;width:50px;border-radius:100%\" ng-src=\"{{project.avatarUrl}}\"/>\n" +
    "                            <h1>{{project.title}}</h1>\n" +
    "                            <h5 ng-if=\"projectNavigation\"><span ng-show=\"projectNavigation\" style=\"color:white;text-transform:capitalize;\">{{projectNavigation}}</span></h5>\n" +
    "                            <h5 ng-show=\"project.parent\">\n" +
    "                                <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"project/{{project.parent.urlTitle}}\" ui-sref=\"project.activity({path:project.parent.urlTitle})\">{{project.parent.title}}</a>\n" +
    "                            </h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-show=\"markers.length>0\">\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div>\n" +
    "                                <div style=\"font-size: 15px;\"><a ng-click=\"$event.stopPropagation();\" href=\"project/{{market.urlTitle}}\">{{marker.content}}</a></div>\n" +
    "                            </div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs subNav\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}\" ui-sref=\"project.activity\">Activity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/content\" ui-sref=\"project.content\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/items\" ui-sref=\"project.items\">Items</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/ledger\" ui-sref=\"project.ledger\">Ledger</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/members\" ui-sref=\"project.members\">Members</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/projects\" ui-sref=\"project.projects\">Projects</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/tasks\" ui-sref=\"project.tasks\">Tasks</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();\" href=\"project/{{project.urlTitle}}/time\" ui-sref=\"project.time\">Time</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();transactionToggle(project)\" class=\"btn btn-default\">Send Tokens</a></li>\n" +
    "                        <li style=\"float:right;margin-top:5px\"><a style=\"color:black\"><i class=\"fa fa-bars\"></i></a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"nav-toggle\" style=\"padding:0px\">\n" +
    "                <ul style=\"padding:10px 5px;margin-bottom:0px\" class=\"member-tabs\">\n" +
    "                    <li ng-click=\"$event.stopPropagation();filterToggle('DISCOVER');\" style=\"float:left;margin:5px\"><a style=\"color:black\"><i class=\"fa fa-filter\"></i></a></li>\n" +
    "                    <li>\n" +
    "                        <form ng-click=\"$event.stopPropagation();\" style=\"display:flex;flex-direction:row;float:left;width:70%\">\n" +
    "                            <tags-input style=\"border:0px;flex-grow:2;height:40px;margin-top: -7px;margin-bottom: 3px;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
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
    "    <div ui-view=\"projectValidations\"></div>\n" +
    "</div>\n" +
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
    "            <!--SELF ASSOCIATION-->\n" +
    "            <!--{{project.associationModels}}-->\n" +
    "\n" +
    "            <div style=\"text-align:center\">\n" +
    "                <h4>Avatar</h4>\n" +
    "                <img style=\"height:50px;width:50px\" src=\"{{project.avatarUrl}}\">\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <p>{{project.avatarUrl}}</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <h4>Title</h4>\n" +
    "            <p>{{project.title}}</p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h4>Description</h4>\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(project.description)\"></span></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h4><a href=\"project/{{project.urlTitle}}/charter\" ui-sref=\"project.charter({path:project.urlTitle})\">Charter</a></h4>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h4>Wallet</h4>\n" +
    "            <p ng-click=\"transactionToggle(project)\"><a><img style=\"height:50px;text-align:left\" src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{project.id}}\"> {{project.id}}</a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <div ng-if=\"project.location\">\n" +
    "                <h4>Location</h4>\n" +
    "                <p ng-if='project.location.lat'><b>Latitude</b>: {{project.location.lat}}, <b>Longitude</b>: {{project.location.lng}}</p>\n" +
    "                <p ng-if='project.location.address'><b>Address</b>: {{project.location.address}}</p>\n" +
    "                <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                            <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                        </ui-gmap-window>\n" +
    "                    </ui-gmap-marker>\n" +
    "                </ui-gmap-google-map>\n" +
    "                <div class=\"spacing-10\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--INFO.. COUNTS-->\n" +
    "\n" +
    "            <h4>Associations</h4>\n" +
    "            <p><b>Members</b>: <a>{{project.memberCount || 0}}</a>, <b>Tasks</b>: <a>{{project.taskCount || 0}}</a>, <b>Time</b>: <a>{{project.timeCount||0 }}</a></p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h4>Token Manifolds</h4>\n" +
    "            <p>\n" +
    "                <a href=\"market/PROJECT+{{project.urlTitle.toUpperCase()}}\" ui-sref=\"market({id:project.urlTitle.toUpperCase()})\">PROJECT+{{project.urlTitle.toUpperCase()}}+</a>, \n" +
    "                <a href=\"market/PROJECT+{{project.urlTitle.toUpperCase()}}+TASK\">PROJECT+{{project.urlTitle.toUpperCase()}}+TASK</a>, \n" +
    "                <a href=\"PROJECT+{{market/project.urlTitle.toUpperCase()}}+TIME\">PROJECT+{{project.urlTitle.toUpperCase()}}+TIME</a>\n" +
    "            </p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <h4>Apps</h4>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("project/templates/activity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/activity.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-if=\"activity.length == 0\">\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"cre8Toggle(project)\">CRE8</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"activity.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li class=\"mobileFix\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card mobileFix\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"cre8Toggle(project)\">CRE8</button></div>\n" +
    "        <div ng-repeat=\"item in activity\">\n" +
    "\n" +
    "            <!--<div ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>-->\n" +
    "            <!--TODO:RESTRUCT EVENT-->\n" +
    "\n" +
    "            <div ng-if=\"item.model=='CONTENT'\" ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/contentCard.tpl.html'\"></div></div>\n" +
    "            <div ng-if=\"item.model=='TASK'\" ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/taskCard.tpl.html'\"></div></div>\n" +
    "            <div ng-if=\"item.model=='TIME'\" ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/timeCard.tpl.html'\"></div></div>\n" +
    "            <div ng-if=\"item.model=='TRANSACTION'\" ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div></div>\n" +
    "        </div>      \n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>");
}]);

angular.module("project/templates/assets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/assets.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "		<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,connection,create,content,creation');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Balance</h1>\n" +
    "                        <h5><span style=\"font-size:11px;color:white\">{{project.id}}</span></h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "		<div style=\"padding:16px;\">\n" +
    "	   		<form ng-submit=\"lookupBalance()\" style=\"display:flex;flex-direction:row;\">\n" +
    "	        	<input ng-model=\"balanceLook\" style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Asset String\">\n" +
    "	        	<div ng-click=\"lookupBalance()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "	                <a href=\"#\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"> <i class=\"fa fa-search\"></i></h5></a>\n" +
    "				</div>\n" +
    "	    	</form>\n" +
    "	    	<div ng-show=\"balanceLookupValue !== undefined\">\n" +
    "	    		<h5><a href=\"market/{{balanceLook}}\" ui-sref=\"market({id:balanceLook})\">{{balanceLook}}</a> | {{balanceLookupValue}}</h5>\n" +
    "	    	</div>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <div><highchart config=\"balanceColumn\"></highchart></div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <table class=\"table table-striped table-hover\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th>Identifer</th>\n" +
    "                        <th>Value</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"item in sortableSet\">\n" +
    "                        <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                        <td>{{item[1]}}</td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/channels.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-3\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div class=\"\" ng-repeat=\"channel in channels\">\n" +
    "                    <h4><a href=\"#\">{{channel.title}}</a></h3>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button ng-click=\"contentToggle()\" class=\"btn btn-default log-btn\">+ Channel</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"col-sm-p\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card\" ng-click=\"contentToggle()\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">+ Content</button>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in contentList\">\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div style=\"float:right;text-align:right\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();tokensToggle(item)\"><span style=\"color:gray\"><i class=\"fa fa-chevron-down\"></i></span></a>\n" +
    "                    </div>\n" +
    "                    <div>\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "                        <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">{{item.user.username}}</a>\n" +
    "                        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "                    </div>\n" +
    "                    <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "                </div>\n" +
    "                <div class=\"card-footer\">\n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "                    <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "                    <a href=\"#\" ng-click=\"reply(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "                    <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/charter.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/charter.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-if=\"connections.length == 0\">\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"connectionToggle()\">+ Connection</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "        <!--NEED A PLACE TO DISCOVER OR RECCOMEND-->\n" +
    "    </div>\n" +
    "    <div ng-if=\"connections.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"spacing-5 mobileFix\"></div>\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"project/{{project.urlTitle}}/validations\" ui-sref=\"project.validations({path:project.urlTitle})\"><i></i> Motions & Validations</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i></i> Enacted Charter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\"  ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card mobileFix\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"connectionToggle()\">+ Connection</button></div>\n" +
    "        <div ng-repeat=\"item in connections\"><div ng-include=\"'templates/cards/connectionCard.tpl.html'\"></div></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/content.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"contentList.length == 0\">\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"contentToggle(project)\">+ Content</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"contentList.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"spacing-5 mobileFix\"></div>\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\"  ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card mobilFix\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"contentToggle(project)\">+ Content</button></div>\n" +
    "        <div ng-repeat=\"item in contentList\"><div ng-include=\"'templates/cards/contentCard.tpl.html'\"></div></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/items.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/items.tpl.html",
    "<div class=\"row\" >\n" +
    "    <div ng-show=\"items.length == 0\"> \n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"itemToggle(project)\">+ Item</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"items.length > 0\">\n" +
    "        <div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div class=\"spacing-5 mobileFix\"></div>\n" +
    "            <ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "                <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card mobileFix\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "            <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"itemToggle(project)\">+ Item</button></div>\n" +
    "            <div ng-repeat=\"item in items\"><div ng-include=\"'templates/cards/itemCard.tpl.html'\"></div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("project/templates/ledger.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/ledger.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "		<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "			<li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('LEDGER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "			<li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	    	<li style=\"float:right\" ng-click=\"selectRevenue()\"><a href=\"\">Revenue</a></li>\n" +
    "			<li style=\"float:right\" ng-click=\"selectExpense()\"><a href=\"\">Expense</a></li>\n" +
    "			<li style=\"float:right\" ng-click=\"selectOverview()\"><a href=\"\">Overview</a></li>\n" +
    "			<div style=\"clear:both\"></div>\n" +
    "		</ul>\n" +
    "		<div class=\"card mobileHide\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"row\">\n" +
    "					<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-xs-6\">\n" +
    "						<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker style=\"display:inline\" ng-model=\"startDate\" md-placeholder=\"Start date\"></md-datepicker></div>\n" +
    "	      				<div style=\"padding-left:0px;padding-right:0px;\" class=\"col-sm-6\"><md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\"></md-datepicker></div>\n" +
    "					</div>\n" +
    "					<div style=\"text-align:right;\" class=\"col-xs-6\">\n" +
    "						<h5>{{sumTransactions[sumTransactions.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Balance</h5>\n" +
    "						<h5>{{sumTo[sumTo.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Revenue</h5>\n" +
    "						<h5>{{sumFrom[sumFrom.length-1][1].toFixed(2)}} <a href=\"#\">{{assetSet[0].element}}</a> Expense</h5>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"chart\"></highchart>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<highchart config=\"pie\"></highchart>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-4 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,location,connection,asset,finance');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Assets</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"asset in sortedTransactionAssets\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                <a ng-click=\"selectAsset(asset.element)\"><b>{{asset.element}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "	            <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "	                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	                    <div style=\"padding:15px\">\n" +
    "	                        <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "	                    </div>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"tag in sortedTransactionTags\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                <a ng-click=\"selectTag(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"card\" ng-click=\"filterToggle('LEDGER', filterSet)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder,location,connection');height:50px;min-height:50px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "	            <div ng-repeat=\"tag in sortedTransactionTags\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                <a ng-click=\"selectTag(tag.element)\"><b>{{tag.element}}</b></a>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"col-sm-8\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"transactionToggle(project)\">+ Transaction</button></div>\n" +
    "		<div ng-repeat=\"item in transactions\"><div ng-include=\"'templates/cards/transactionCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/members.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/members.tpl.html",
    "<div class=\"row\">\n" +
    "	<ul ng-if=\"members.length>0\" style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet, null)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "	    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "	   	<div style=\"clear:both\"></div>\n" +
    "	</ul>\n" +
    "	<div ng-if=\"members.length>0\" class=\"card\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "    <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"createMemberValidate()\">+ motion to join</button></div>\n" +
    "</div>\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-6\" ng-repeat=\"item in members\" style=\"padding-left:10px;padding-right:10px;\">\n" +
    "		<div class=\"member-card\" ng-click=\"renderReputationToggle(item)\" style=\"margin-bottom:10px;\">\n" +
    "			<div style=\"text-align:right;padding:15px;position:absolute;right:0;margin-right:10px\">\n" +
    "		        <a style=\"color:white;\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "		    </div> \n" +
    "		    <div class=\"member-card-image\" style=\"background-image: url('{{item.user.coverUrl}}')\">\n" +
    "		        <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\"><img ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "		    </div>\n" +
    "            <div class=\"member-card-info\" style=\"padding:16px;height:auto;min-height:125px;\">\n" +
    "		        <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">{{item.user.username}}</a></h4>\n" +
    "		       	<p style=\"color:gray\"><a ng-click=\"$event.stopPropagation();\" href=\"connection/{{item.connection.id}}\" ui-sref=\"connection({id:item.connection.id})\">{{item.connection.title}}</p>\n" +
    "\n" +
    "		        <!--<p style=\"color:gray\">{{project.title}}: {{item.context}}</p>-->\n" +
    "\n" +
    "                <p style=\"color:gray;font-size:12px;\">\n" +
    "		            <span ng-if=\"item.user.loggedIn\">\n" +
    "		                <span><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online</span>\n" +
    "		                <span ng-if=\"item.user.status\"><br>{{item.user.status}}</span>\n" +
    "		            </span>\n" +
    "		            <span ng-if=\"!item.user.loggedIn\"><i class=\"fa fa-circle\"></i> Offline</span>\n" +
    "		        </p>\n" +
    "		    </div>\n" +
    "		   	<div class=\"card-footer\">\n" +
    "		   		<a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "		   	</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/positions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/positions.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		<div class=\"card mobileFix\">\n" +
    "            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "	    </div>	\n" +
    "		<div class=\"card\">\n" +
    "			<button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Motion to Create Order</button>\n" +
    "		</div>\n" +
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
    "				<div class=\"spacing-10\"></div>\n" +
    "				<highchart config=\"chart\"></highchart>\n" +
    "				<div class=\"spacing-10\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-repeat=\"item in orders\">\n" +
    "			<div ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/projects.tpl.html",
    "<!--GRAPH REPRESENTATION IN THE COMPUTERD ASSOCIATION NETWORK..-->\n" +
    "<!--TODO-->\n" +
    "<div ng-show=\"project.parent\">\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "	<h3>\n" +
    "		<a href=\"project/{{project.parent.urlTitle}}\" ui-sref=\"project.activity({path:project.parent.urlTitle})\">\n" +
    "			<img style=\"height:32px;border-radius:100%\" src=\"{{project.parent.avatarUrl}}\">\n" +
    "			<span>{{project.parent.title}}</span>\n" +
    "		</a>\n" +
    "	</h3>\n" +
    "	<div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<!--FILTER SORT-->\n" +
    "\n" +
    "<!--ASSOCIATIONS FOR TRAVERSAL-->\n" +
    "<div class=\"row\">\n" +
    "    <div ng-show=\"projects.length == 0\"> \n" +
    "		<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"projectToggle(project)\">+ Project</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"projects.length > 0\">\n" +
    "		<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"projectToggle(project)\">+ Project</button></div>\n" +
    "		<div ng-repeat=\"item in projects\" ng-click=\"cardDetailToggle(project)\"><div ng-include=\"'templates/cards/projectCard.tpl.html'\"></div></div>\n" +
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
    "            <p>Token Manifolds: {{project.title}}+</p>\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "</div>");
}]);

angular.module("project/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/tasks.tpl.html",
    "<div class=\"row\">\n" +
    "	<div ng-if=\"tasks.length == 0\">\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"taskToggle(project)\">+ Task</button></div>\n" +
    "	    <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"tasks.length > 0\" class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"spacing-5 mobileFix\"></div>\n" +
    "    	<ul style=\"padding:0px;\" class=\"member-tabs mobileFix\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card mobilFix\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "	    <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"taskToggle(project)\">+ Task</button></div>\n" +
    "		<div ng-repeat=\"item in tasks\"><div ng-include=\"'templates/cards/taskCard.tpl.html'\"></div></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("project/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/time.tpl.html",
    "<div class=\"row\">\n" +
    "    <div ng-show=\"time.length == 0\">\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"orderToggle()\">+ Time</button></div>\n" +
    "        <div class=\"card\"><div style=\"padding:16px;\"><span style=\"color:gray\">There's nothing here..</span></div></div>\n" +
    "    </div>\n" +
    "    <div ng-show=\"time.length > 0\" class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "        <div class=\"card mobileFix\">\n" +
    "            <form ng-submit=\"search()\" style=\"display:flex;flex-direction:row;\">\n" +
    "                <tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "                <div ng-click=\"search()\" style=\"border:0px;float:right\" class=\"btn btn-default\">\n" +
    "                    <a href=\"#\" role=\"button\"><h5 style=\"color:black;text-align:right\" class=\"noselect\"><i class=\"fa fa-search\"></i></h5></a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"timeToggle()\">+ Time</button></div>\n" +
    "        <div class=\"card\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <div fc fc-options=\"calendar\" ng-model=\"eventSources\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-repeat=\"item in time\" ng-if=\"time.length > 0\"><div ng-include=\"'templates/cards/timeCardLarge.tpl.html'\"></div></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("project/templates/validations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("project/templates/validations.tpl.html",
    "");
}]);

angular.module("projects/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/index.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 200px;} .selectedFilter:{color:green}</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\" style=\"text-align:center\">\n" +
    "                <h1>Projects</h1>\n" +
    "                <h5 ng-if=\"location.lat\" style=\"color:white\">{{location.lat}}, {{location.lng}}</h5>\n" +
    "                <h5 style=\"color:white\">{{projectCount}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li ng-if=\"!locationFilter\" style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"getLatLng()\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "            <li ng-if=\"locationFilter\" style=\"float:left;font-size:14px;\"><a style=\"color:#002c54\" href=\"#\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "            <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card\"><tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "        <div class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-click=\"$event.stopPropagation()\" ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "                <ui-gmap-circle center='map.center' radius='filter.location.radius' fill='0.15' stroke='0.25'>\n" +
    "            </ui-gmap-circle>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "        <div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"projectToggle()\">+ project</button></div>\n" +
    "        <div ng-repeat=\"item in projects\"><div ng-include=\"'templates/cards/projectCard.tpl.html'\"></div></div>\n" +
    "        <div ng-show=\"projectCount > projects.length\" ng-click=\"loadMore()\" class=\"card\">\n" +
    "            <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("protocol/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("protocol/index.tpl.html",
    "<style>pre{padding:0px;background-color:#282c34;border:0px;padding-bottom:15px;margin:0px;border-radius:0px;}</style>\n" +
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(app)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{app.tags}}');\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(app)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">{{protocol.title || 'PROTOCOL TEST'}}</h1>\n" +
    "                        <h5 style=\"color:white\">{{protocol.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\"><a>Associations</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr style=\"margin:0px;\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div ng-if=\"selectedTab =='INFORMATION'\" ng-include=\"'protocol/templates/information.tpl.html'\"></div>\n" +
    "            <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'protocol/templates/associations.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{app.data.apps.attention.general || 0}}</a>\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(app, 'plus')\"><i class=\"fa fa-angle-up\"></i> {{app.data.apps.reactions.plus || 0}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(app, 'minus')\" ><i class=\"fa fa-angle-down\"></i> {{app.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();contentToggle(app)\"><i class=\"fa fa-comment-o\"></i> comment </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("protocols/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("protocols/index.tpl.html",
    "<!--<div class=\"intro\" style=\"max-height:720px\">-->\n" +
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "            <symbol id=\"intro-desktop-text\">\n" +
    "                <text style=\"font-size:108px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:bold\" text-anchor=\"middle\" x=\"960\" y=\"488\" dy=\".35em\" class=\"medium-text\">CRE8.XYZ</text> \n" +
    "                <text style=\"font-size:28px;font-weight:bold;font-family:Titillium Web,Helvetica,Arial,sans-serif\" text-anchor=\"middle\" x=\"960\" y=\"570\" dy=\".35em\" class=\"medium-text\">PROTOCOLS\n" +
    "            </symbol>  \n" +
    "            <div class=\"intro-shade\"></div>  \n" +
    "        </svg> \n" +
    "        <div class=\"box-with-text\">\n" +
    "            <div class=\"text-fill\">\n" +
    "                <video itemscope itemtype=\"VideoObject\" class=\"video\" src=\"https://www.bidio.co/videos/energy.mp4\" preload=\"auto\" autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline></video>\n" +
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
    "                <input style=\"border:0px;flex-grow:2;\" class=\"form-control\" type=\"text\" placeholder=\"Search\" ng-model=\"searchQuery\">\n" +
    "                <div ng-click=\"search()\" style=\"border:0px\" class=\"btn btn-default\" style=\"float:right\">\n" +
    "                    <a  href=\"#\" role=\"button\">\n" +
    "                        <h5 style=\"color:black;text-align:right\" class=\"noselect\">Search <i class=\"fa fa-search\"></i></h5>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "        <div class=\"card\">\n" +
    "            <button class=\"btn btn-default log-btn\" ng-click=\"protocolToggle()\">+ Protocol</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-lg-6 col-sm-6\" ng-repeat=\"item in protocols\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "            <div ng-include=\"'templates/cards/appCard.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "    </div>   \n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("reaction/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("reaction/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,code,chain,nature,blockchian')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Reaction</h1>\n" +
    "                <h5 style=\"color:white\">{{reaction.type}}</h5>\n" +
    "                <h5 style=\"color:white\">{{reaction.id}}</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(reaction)\">\n" +
    "            <div style=\"padding:16px\">\n" +
    "                <p>\n" +
    "                    <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{reaction.user.username}}\" ui-sref=\"member.activity({path:reaction.user.username})\">\n" +
    "                        <img class=\"card-avatar\" ng-src=\"{{reaction.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                        {{reaction.user.username}}\n" +
    "                    </a>\n" +
    "                </p>\n" +
    "                <p>{{reaction.amount}}</p>\n" +
    "                <p>{{reaction.associatedModels}}</p>\n" +
    "                <p>{{reaction.createdAt}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{reaction.data.apps.reaction.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(reaction, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{reaction.data.apps.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(reaction, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{reaction.data.apps.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();contentToggle(reaction)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "            <div class=\"container\">\n" +
    "                <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Join Our Community!</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!--\n" +
    "<div class=\"container\" ng-if=\"showMap\">\n" +
    "    <div class=\"row\">\n" +
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
    "                    <button type=\"submit\" style=\"width:100%\" ng-click=\"changePage('FORWARD')\" class=\"btn btn-default log-btn\">Continue <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
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
    "                <li style=\"float:left;font-size:14px\">\n" +
    "                    <a href=\"#\" ng-click=\"filterToggle('MANIFOLD')\"><i class=\"fas fa-infinity\"></i> Manifold</a>\n" +
    "                    <span style=\"font-size:9px;color:gray;maring:0px\">+ONMINT+SPONSOR+(address)</span>\n" +
    "                </li>\n" +
    "                <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fa fa-eye\"></i> UNIVERSALTOKEN</a></li>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </ul>\n" +
    "            <div class=\"card\">\n" +
    "                <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search | Filter\" ng-model=\"searchQueryArray\"></tags-input>\n" +
    "            </div>\n" +
    "            <div class=\"card\">\n" +
    "                <div style=\"padding:16px;\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-3 col-xs-12\" style=\"max-height:50vh;overflow:auto\">\n" +
    "                            <div style=\"font-size:14px;font-weight:bold\" ng-repeat=\"item in sortedTagArray track by $index\">\n" +
    "                                <button ng-click=\"createPosition(item.element)\" class=\"btn btn-default log-btn\">{{item.element}}</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm-9 col-xs-12\">\n" +
    "                            <div layout=\"\">\n" +
    "                                <div flex=\"35\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"color:gray\">Token String <a ng-click=\"informationToggle('VALUEMAP')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></span></div>\n" +
    "                                <div flex=\"65\" layout=\"\" layout-align=\"center center\"><span class=\"md-body-1\" style=\"color:gray\">Token String / Base Token String <a ng-click=\"informationToggle('VALUEMAP')\" href=\"#\"><i class=\"fa fa-question-circle\"></i></a></span></div>\n" +
    "                            </div>\n" +
    "                            <div class=\"spacing-10\"></div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <div ng-repeat=\"item in newOrder\">\n" +
    "                                    \n" +
    "                                        <div layout=\"\">\n" +
    "                                            <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item[0].amount\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"Amount\"></md-slider>\n" +
    "                                        </div>\n" +
    "                                        \n" +
    "                                        <div layout=\"\">\n" +
    "                                            <div flex=\"10\" layout=\"\" layout-align=\"center center\">86400</div>\n" +
    "                                            <div flex=\"25\" layout=\"\" layout-align=\"center center\">\n" +
    "                                                <a>{{item[1].identifier.split('+')[2]}}</a>\n" +
    "                                                <p style=\"font-size:7px;color:gray\">+ONMINT+SPONSOR+(address)</p>\n" +
    "                                            </div>\n" +
    "\n" +
    "                                            <div flex=\"5\" layout=\"\" layout-align=\"center center\"><a href=\"#\" ng-click=\"informationToggle('MANIFOLD LOGIC')\"><i class=\"fa fa-exchange\"></i>*</a></div>\n" +
    "\n" +
    "                                            <div flex=\"30\" layout=\"\" layout-align=\"center center\">{{1/newOrder.length*item[0].amount/100}}</div>\n" +
    "                                            <div flex=\"30\" layout=\"\" layout-align=\"center center\"><a>Universal Token</a></div>\n" +
    "                                            <div flex=\"5\" layout=\"\" layout-align=\"center center\"><a href=\"#\" ng-click=\"removePosition(item)\"><i class=\"fas fa-remove\"></i></a></div>\n" +
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
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>First Name</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.firstName\" placeholder=\"First Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Last Name</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.lastName\" placeholder=\"Last Name\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Date Of Birth</h5><input type=\"date\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\"></div>\n" +
    "                    <div style=\"padding:0px\" class=\"col-xs-4\"><h5>Username</h5><input type=\"text\" ng-disabled=\"!consentAgreement\" ng-model=\"newMember.username\" placeholder=\"Email\" class=\"form-control\"></div>\n" +
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
    "        </div>\n" +
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
    "                                    <h4 ng-click=\"$event.stopPropagation()\"><a href=\"#\">{{newMember.username}}</a></h4>\n" +
    "                                    <p style=\"color:gray\"><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Creating Account</p>     \n" +
    "                                    <h4 ng-show=\"newMember.firstName\">{{newMember.firstName}} {{newMember.lastName}}</h4>\n" +
    "                                    <h5 ng-show=\"newMember.dateOfBirth\">{{newMember.dateOfBirth}}</h5>\n" +
    "                                    <h5 ng-show=\"newMember.email\"><i class=\"fas fa-envelope\"></i> {{newMember.email}}</h5>\n" +
    "                                    <h5 ng-show=\"newMember.phoneNumber\"><i class=\"fas fa-phone\"></i> {{newMember.phoneNumber}}</h5>\n" +
    "                                </div>\n" +
    "                                <div ng-show=\"false\" class=\"member-card-social\">\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-facebook facebook-icon\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.facebook.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-instagram\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.twitter.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-twitter twitter-icon\"></i></a>\n" +
    "                                    <a ng-show=\"false\" href=\"{{currentUser.socialAccounts.google.profileUrl}}\" target=\"_blank\"><i class=\"fa fa-google google-icon\"></i></a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"spacing-15\"></div>\n" +
    "                            <p style=\"color:gray;font-size:12px;font-style:italic\">Is this correct?</p>\n" +
    "                            <a ng-click=\"changePage(2)\" class=\"btn btn-default log-btn\"><b>Edit Information</b></a>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-12 col-sm-6 col-md-6\">\n" +
    "                            <h3>Value Map</h3>\n" +
    "                            <highchart config=\"chartMapTotal\"></highchart>\n" +
    "                            <div class=\"\" ng-repeat=\"order in newOrderNEW\">\n" +
    "                                <span style=\"color:gray\" ng-repeat=\"(asset, value) in order.setAlpha\">{{value}} <a href=\"#\">{{asset}}</a>, </span> | \n" +
    "                                <span style=\"color:gray\" ng-repeat=\"(asset, value) in order.setBeta\">{{value}} <a href=\"#\">{{asset}}</a>, </span>\n" +
    "                            </div>\n" +
    "                            <div class=\"spacing-15\"></div>\n" +
    "                            <p style=\"color:gray;font-size:12px;font-style:italic\">Do you want to keep working on your value map?</p>\n" +
    "                            <a ng-click=\"changePage(1)\" class=\"btn btn-default log-btn\"><b>Keep Creating</b></a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-10 col-md-offset-1\">\n" +
    "            <div class=\"login-form\">\n" +
    "                <form role=\"form\">\n" +
    "                    <input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"> \n" +
    "                    <input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\" autocomplete=\"username\"> \n" +
    "                    <input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\" autocomplete=\"new-password\"> \n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                    <div class=\"spacing-10\"></div>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\" ui-sref=\"login\"><h5 style=\"color: gray;font-style: italic;\"><b>Already A Member?</b></h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "            <div class=\"selfClear\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div class=\"\">\n" +
    "                <form role=\"form\">\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"email\" ng-model=\"newMember.email\" placeholder=\"Email\" title=\"email\" type=\"email\"><i class=\"fa fa-envelope\" autocomplete=\"email\"></i></div>\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"username\" ng-model=\"newMember.username\" placeholder=\"Username\" title=\"username\" type=\"text\" autocomplete=\"username\"><i class=\"fa fa-user\"></i></div>\n" +
    "                    <div class=\"form-group\"><input class=\"form-control\" name=\"password\" ng-model=\"newMember.password\" placeholder=\"Password\" title=\"password\" type=\"password\" autocomplete=\"new-password\"><i class=\"fa fa-lock\"></i></div>\n" +
    "                    <button class=\"btn btn-default log-btn\" ng-click=\"registerUser()\">Sign up</button>    \n" +
    "                    <br><br>\n" +
    "                    <div class=\"social-log\">\n" +
    "                        <a href=\"/login\" ui-sref=\"login\"><h5 style=\"color: gray;font-style: italic;\"><b>Already A Member?</b></h5></a>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "                <div class=\"selfClear\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div ui-view=\"search\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?{{searchQueryString}}')\" class=\"imageContainerSmall\">\n" +
    "	    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "	        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "	        	<div class=\"container\">\n" +
    "	            	<h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{searchQueryString}}</h1>\n" +
    "	            	<h5 style=\"color:white\">{{searchResults.length}} results</h5>\n" +
    "	        	</div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-5\"></div>\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-10\"></div>\n" +
    "		<div class=\"row\">\n" +
    "			<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "				<li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "				<div style=\"clear:both\"></div>\n" +
    "	        </ul>\n" +
    "			<div class=\"card\">\n" +
    "	            <tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"row\">\n" +
    "\n" +
    "			<!--TODO!!!!-->\n" +
    "			<div ng-if=\"false \"class=\"col-sm-2 mobileFix\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "		        <div class=\"card\" ng-if=\"sortedTagArray.length > 0\">\n" +
    "			        <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolire,wonder');height:100px;min-height:100px\" class=\"imageContainerSmall\">\n" +
    "					    <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "					        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "					        	<div class=\"container\">\n" +
    "						            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Tags</h1>\n" +
    "						        </div>\n" +
    "					        </div>\n" +
    "					    </div>\n" +
    "					</div>\n" +
    "		            <div style=\"padding:16px;\">\n" +
    "		                <div ng-repeat=\"tag in sortedTagArray\">\n" +
    "		                    <a href=\"#\" ng-click=\"filterContent(tag.element)\"><b>{{tag.element}}</b></a>\n" +
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
    "		    <!--TODO FILTER AREA-->\n" +
    "			<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "				<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "		            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER')\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "        	        <div style=\"clear:both\"></div>\n" +
    "		        </ul>\n" +
    "			    <div ng-if=\"searchResults.length > 0\" class=\"card\">\n" +
    "			        <style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "			        <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "		                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "		                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "		                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:market.url})\">{{marker.content}}</a></div>\n" +
    "		                    </ui-gmap-window>\n" +
    "		                </ui-gmap-marker>\n" +
    "                        <ui-gmap-circle center='map.center' radius='5000' fill='0.15' stroke='0.25'>\n" +
    "		            </ui-gmap-google-map>\n" +
    "			    </div>\n" +
    "		    </div>\n" +
    "\n" +
    "			<div class=\"col-sm-12\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "				<div ng-if=\"searchResults.length == 0\" class=\"card\">\n" +
    "			        <div style=\"padding:16px;\">\n" +
    "			            <span style=\"color:gray\">There's nothing here..</span>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "				<div ng-if=\"searchResults.length > 0\" ng-repeat=\"item in searchResults\">\n" +
    "					<!-- UNIFY ITEM AND CONTENT -->\n" +
    "					<!--TODO: RENEDER MODEL TYPE-->\n" +
    "					<div ng-if=\"item.model=='CONTENT'\" ng-include=\"'templates/cards/contentCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='ITEM'\" ng-include=\"'templates/cards/itemCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='MEMBER'\" ng-include=\"'templates/cards/memberCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='ORDER'\" ng-include=\"'templates/cards/orderCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='PROJECT'\" ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='TASK'\" ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "					<div ng-if=\"item.model=='TIME'\" ng-include=\"'templates/cards/timeCard.tpl.html'\"></div>\n" +
    "				</div>\n" +
    "				<!--TODO: MORE-->\n" +
    "				<div ng-if=\"false\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "	                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "	            </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("task/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/index.tpl.html",
    "<div class=\"container\" style=\"padding:0px\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(task)\">\n" +
    "        <div class=\"imageContainerSmall\" style=\"background:url('https://source.unsplash.com/1600x900/?{{task.context}}');\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);text-align:center\" class=\"imageContainerSmallDiv\">\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(task)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1>{{task.title}}</h1>\n" +
    "                        <h5 style=\"color:white\">{{task.id}}</h5>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-show=\"markers.length>0\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div>\n" +
    "                            <div style=\"font-size: 15px;\"><a ng-click=\"$event.stopPropagation();\" href=\"task/{{task.id}}\">{{marker.content}}</a></div>\n" +
    "                        </div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "        <div style=\"background-color:white\">\n" +
    "            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                        <li ng-if=\"false\"><a ng-click=\"$event.stopPropagation();selectTab('TIME')\">Activity</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\">Associations</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('TIME')\">Time</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('STATS')\">Stats</a></li>\n" +
    "                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS')\">Tokens</a></li>\n" +
    "                        <li ng-if=\"false\"><a ng-click=\"$event.stopPropagation();selectTab('HISTORY')\">History</a></li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <hr style=\"margin:0px;\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <p><a ng-repeat=\"context in task.context\" ng-click=\"$event.stopPropagation();filterContent(context)\">{{context}} </a></p>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <div ng-click=\"$event.stopPropagation();\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "            <div class=\"spacing-5\"></div> \n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a ng-click=\"$event.stopPropagation();renderAttentionToggle(task)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{task.data.apps.attention.general || 0}}</a>\n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{task.data.apps.reactions.plus || 0}} like </a> \n" +
    "            <a ng-click=\"$event.stopPropagation();createReaction(task, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{task.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();contentToggle(task)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            <a ng-click=\"$event.stopPropagation();validationToggle(task)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "            <!--<a ng-click=\"$event.stopPropagation();shareToggle(task)\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" ><i class=\"fas fa-share\"></i></a>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div ng-if=\"selectedTab =='TIME'\" ng-include=\"'task/templates/time.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'task/templates/associations.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'task/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='STATS'\" ng-include=\"'task/templates/stats.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'task/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>");
}]);

angular.module("task/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"context in task.context\">{{context}}, </span>\n" +
    "                </div>\n" +
    "                <!--LOOP THROUGH APP ASSOCITED MODEL TYPES-->\n" +
    "                <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                    <!--CAN EACH DISCRETE MODEL HAVE APP CONNECTION YEAH META: -->\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('APPS')\"><a href=\"#\">App</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('ATTENTION')\"><a href=\"#\">Attention</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('CONTENT')\"><a href=\"#\">Content</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('MEMBER')\"><a href=\"#\">Member</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('PROJECTS')\"><a href=\"#\">Project</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('TASK')\"><a href=\"#\">Task</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('TIME')\"><a href=\"#\">Time</a></li>\n" +
    "                    <li ng-click=\"$event.stopPropagation();selectTab('REACTIONS')\"><a href=\"#\">Reaction</a></li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in task.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in item.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("task/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/content.tpl.html",
    "<div ng-repeat=\"item in contentList\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div>\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">{{item.user.username}}</a>\n" +
    "                <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "            </div>\n" +
    "            <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "            <a href=\"#\" ng-click=\"createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.reactions.plus}} like </a> \n" +
    "            <a href=\"#\" ng-click=\"createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.reactions.minus}} dislike </a>\n" +
    "            <a href=\"#\" ng-click=\"contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "            <a style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("task/templates/stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/stats.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"statsChart\"></highchart>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("task/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/time.tpl.html",
    "<div class=\"card\" ng-if=\"taskTime == 0\"><button class=\"btn btn-default log-btn\" ng-click=\"timeToggle(task)\">Create Time</button></div>\n" +
    "<div ng-repeat=\"item in time\" ng-click=\"cardDetailToggle(item)\"><div ng-include=\"'templates/cards/timeCard.tpl.html'\"></div></div>");
}]);

angular.module("task/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("task/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"tokenChart\"></highchart>\n" +
    "         <!--TODO MOBILE-->\n" +
    "         <!--UNIFITY TOKEN MODEL-->\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in sortableSet\">\n" +
    "                    <td><a href=\"market/{{item[0]}}\" ui-sref=\"market({id:item[0]})\">{{item[0]}}</a></td>\n" +
    "                    <td>{{item[1]}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tasks/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tasks/index.tpl.html",
    "<style type=\"text/css\">.angular-google-map-container{height: 200px;}</style>\n" +
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?community');overflow:visible\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\" style=\"text-align:center\">\n" +
    "				<h1>Tasks</h1>\n" +
    "	            <h5 style=\"color:white\">{{taskCount}} {{selectedTag}}</h5>\n" +
    "        	</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "	    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "            <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-map-marker\"></i> Location</a></li>\n" +
    "			<li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "        <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "		<!--if location selected-->\n" +
    "		<div class=\"card\">\n" +
    "            <ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "                <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "                    <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "                        <div style=\"font-size: 15px;\"><a href=\"project/{{marker.url}}\" ui-sref=\"project.activity({path:marker.url})\">{{marker.content}}</a></div>\n" +
    "                    </ui-gmap-window>\n" +
    "                </ui-gmap-marker>\n" +
    "            </ui-gmap-google-map>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "	<div class=\"row\">\n" +
    "	    <div class=\"col-sm-4\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "	        <div ng-if=\"filterSet.context.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "			 	<div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,explore,wonder');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        		<div style=\"padding:15px;\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Context</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"context in filterSet.context\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a><b>{{context[0]}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "		    <div ng-if=\"filterSet.associations.length > 0\"  class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "		    	<div style=\"background:url('https://source.unsplash.com/1600x900/?location,forest,city,map');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        		<div style=\"padding:15px;\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"association in filterSet.associations\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a><b>{{association.title}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <div ng-if=\"filterSet.locations.length > 0\" class=\"card\" ng-click=\"filterToggle('DISCOVER', filterSet)\">\n" +
    "	        	<div style=\"background:url('https://source.unsplash.com/1600x900/?location,forest,city,map');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "				    <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "				        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        		<div style=\"padding:15px;\">\n" +
    "					            <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Locations</h1>\n" +
    "					        </div>\n" +
    "				        </div>\n" +
    "				    </div>\n" +
    "				</div>\n" +
    "	            <div style=\"padding:16px;\">\n" +
    "	                <div ng-repeat=\"location in filterSet.locations\" ng-click=\"$event.stopPropagation()\">\n" +
    "	                    <a><b>{{location}}</b></a>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	    </div>\n" +
    "	    <div class=\"col-sm-8\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "			<div class=\"card\"><button class=\"btn btn-default log-btn\" ng-click=\"taskToggle()\">+ Task</button></div>		\n" +
    "			<div ng-repeat=\"item in tasks\"><div ng-include=\"'templates/cards/taskCard.tpl.html'\"></div></div>\n" +
    "			<div ng-show=\"taskCount > tasks.length\" class=\"card\" style=\"text-align:center\" ng-click=\"loadMore()\">\n" +
    "                <button style=\"width:100%\" class=\"btn btn-default log-btn\">MORE <i class=\"fa fa-angle-down\"></i></button>\n" +
    "            </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("templates/cards/actionCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/actionCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "	<div ng-click=\"$event.stopPropagation();cardDetailToggle(item)\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                        <a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"action/{{item.associatedModels[0].id}}\" ui-sref=\"member.actions({id:item.associatedModels[0].id})\">{{item.type}}</a>\n" +
    "                        <a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"item/{{item.associatedModels[0].id}}\" ui-sref=\"item({id:item.associatedModels[0].id})\">{{item.associatedModels[0].title}}</a>\n" +
    "                    </h1>\n" +
    "                    <h5 style=\"color:white\">{{item.amount}}</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div>\n" +
    "            <a ng-click=\"$event.stopPropagation();renderReputationToggle(item)\" style=\"display:inline\"><!-- href=\"member/{{item.user.username}}\">-->\n" +
    "                <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                <span style=\"font-weight:800\">{{item.user.username}}</span>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <h5>{{item.type}} <a href=\"item/{{item.associatedModels[0].id}}\" ui-sref=\"item({id:item.associatedModels[0].id})\">{{item.associatedModels[0].title}}</a></h5>\n" +
    "        <p>{{item.amount}}</p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"action/{{item.id}}\" ui-sref=\"action({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/appCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/appCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}},code');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "                    <i class=\"fas fa-chevron-down\"></i>\n" +
    "                </a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:30px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"app/{{item.id}}\" ui-sref=\"app({id:item.id})\">{{item.title}}</a>\n" +
    "                    </h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;min-height:100px;max-height:100px\">\n" +
    "        <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0 }} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"app/{{item.id}}\" ui-sref=\"app({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/attentionCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/attentionCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div style=\"float:right;text-align:right\">\n" +
    "            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "        </div>\n" +
    "        <h5>{{item.amount}} {{item.string}}</h5>\n" +
    "        <p style=\"font-size:11px\">{{item.data.device.title}}</p>\n" +
    "        <p style=\"font-size:11px\">{{item.data.version}}</p>\n" +
    "        <p style=\"color:gray;font-size:10px;\">\n" +
    "            <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> •  \n" +
    "            <span style=\"color:gray\">{{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</span>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}}  like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}}  dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"attention/{{item.id}}\" ui-sref=\"attention({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/connectionCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/connectionCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.info.title}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"connection/{{item.id}}\" ui-sref=\"connection({id:item.id})\">{{item.info.title}}</a>\n" +
    "                    </h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <h5>{{item.dataModelAlpha}} - {{item.dataModelBeta}}</h5>\n" +
    "        <div ng-bind-html=\"renderContent(item.info.description)\"></div>\n" +
    "        <p><span am-time-ago=\"item.createdAt\"></span></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item, model)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"connection/{{item.id}}\" ui-sref=\"connection({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        <a ng-if=\"item.associationId\" ng-click=\"$event.stopPropagation();\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" href=\"association/{{item.associationId}}\" ui-sref=\"association({id:item.associationId})\"><i class=\"fas fa-bezier-curve grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/contentCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/contentCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div ng-if=\"item.title\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"width:100%;padding:15px\">\n" +
    "                    <h1 ng-click=\"$event.stopPropagation();\" style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\">{{item.title}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div ng-if=\"!item.title\" style=\"text-align:right;float:right\">\n" +
    "            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">\n" +
    "                <img style=\"margin-right:5px\"  class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                {{item.user.username}}\n" +
    "            </a>\n" +
    "            <p style=\"font-size:10px;color:gray;margin-left:42px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "        </div>\n" +
    "        <span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fa fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        <a ng-if=\"item.associationId\" ng-click=\"$event.stopPropagation();\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" href=\"association/{{item.associationId}}\" ui-sref=\"association({id:item.associationId})\"><i class=\"fas fa-bezier-curve grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/itemCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/itemCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "	<div ng-click=\"$event.stopPropagation();cardDetailToggle(item)\" style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\"> \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"item/{{item.id}}\" ui-sref=\"item({id:item.id})\">{{item.title}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">\n" +
    "		<p><a ng-repeat=\"tag in item.tags track by $index\" ng-click=\"$event.stopPropagation();filterContent(tag)\">{{tag.trim()}} </a></p>\n" +
    "    	<div style=\"\"><span style=\"display:inline;height:100%\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "    	\n" +
    "\n" +
    "\n" +
    "        <!--\n" +
    "        <h5>{{item.amountSet}} <span ng-repeat=\"asset in item.identiferSet\"><a ng-click=\"$event.stopPropagation();\" href=\"market/{{asset}}\" ui-sref=\"market({id:asset})\">{{asset}}</a></h5>\n" +
    "        -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0 }} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"item/{{item.id}}\" ui-sref=\"item({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        <a ng-if=\"item.associationId\" ng-click=\"$event.stopPropagation();\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" href=\"association/{{item.associationId}}\" ui-sref=\"association({id:item.associationId})\"><i class=\"fas fa-bezier-curve grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/memberCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/memberCard.tpl.html",
    "<!--TODO: FACTOR INTO GOOD DESIGN-->\n" +
    "<!--\n" +
    "<div class=\"card\">\n" +
    "    <div ng-click=\"$event.stopPropagation();cardDetailToggle(item)\" style=\"background:url('{{item.coverUrl}}');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\"> \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "                    <i class=\"fas fa-chevron-down\"></i>\n" +
    "                </a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" ng-click=\"$event.stopPropagation();\" href=\"item/{{item.id}}\" ui-sref=\"item({id:item.id})\"><img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\"></a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "<div class=\"member-card\" style=\"margin-bottom:10px;background-color:white\" ng-click=\"renderReputationToggle(item)\">\n" +
    "    <div style=\"text-align:right;padding:15px;position:absolute;right:0;margin-right:10px\">\n" +
    "        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();subNavToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "    </div> \n" +
    "    <div class=\"member-card-image\" style=\"background-image: url('{{item.coverUrl}}')\">\n" +
    "        <a ng-click=\"$event.stopPropagation()\" href=\"member/{{item.username}}\" ui-sref=\"member.activity({path:item.username})\">\n" +
    "            <img ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"member-card-info\">\n" +
    "        <h2 ng-click=\"$event.stopPropagation()\" style=\"margin-bottom:3px\"><a href=\"member/{{item.username}}\" ui-sref=\"member.activity({path:item.username})\">{{item.username}}</a></h2>\n" +
    "        <p style=\"font-size:8px;\" ng-click=\"$event.stopPropagation();memberQRToggle(item);\"><a style=\"color:gray\"><i class=\"fas fa-qrcode\"></i> {{item.id}}</a></p>\n" +
    "        <p style=\"font-size:12px;\" ng-click=\"$event.stopPropagation()\">\n" +
    "            <a href=\"member/{{item.username}}/projects\" ui-sref=\"member.projects({path:item.username})\">{{item.projectCount || 0}} Projects</a> | \n" +
    "            <a href=\"member/{{item.username}}/followers\" ui-sref=\"member.followers({path:item.username})\">{{item.followerCount || 0}} Followers</a> | \n" +
    "            <a href=\"member/{{item.username}}/following\" ui-sref=\"member.following({path:item.username})\">{{item.followingCount || 0}} Following</a>\n" +
    "        </p>\n" +
    "        <p style=\"font-size:12px;\"><a ng-click=\"renderReputationToggle(item)\">{{item.totalWork || 0}} Reputation</a></p>\n" +
    "        <p style=\"color:gray;font-size:12px;\">\n" +
    "            <span ng-if=\"item.loggedIn\">\n" +
    "                <span><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online</span>\n" +
    "                <span ng-if=\"item.status\"><br>{{item.status}}</span>\n" +
    "            </span>\n" +
    "            <span ng-if=\"!item.loggedIn\"><i class=\"fa fa-circle\"></i> Offline</span>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\" style=\"text-align:center\">\n" +
    "        <!--<a ng-click=\"$event.stopPropagation();cre8Toggle(item)\"><i class=\"fas fa-expand\"></i> Create </a>-->\n" +
    "        <a ng-click=\"$event.stopPropagation();transactionToggle(item)\"><i class=\"fas fa-plus\"></i> Transaction </a>\n" +
    "        <a ng-show=\"!item.isFollowing\" ng-click=\"$event.stopPropagation();follow(item)\"><i class=\"fas fa-users\"></i> Follow </a>\n" +
    "        <a ng-show=\"item.isFollowing\" ng-click=\"$event.stopPropagation();follow(item)\"><i class=\"fas fa-user\"></i> Unfollow</button></a>\n" +
    "        <a ng-if=\"item.associationId\" ng-click=\"$event.stopPropagation();\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" href=\"association/{{item.associationId}}\" ui-sref=\"association({id:item.associationId})\"><i class=\"fas fa-bezier-curve grey\"></i></a>\n" +
    "\n" +
    "        <!--<a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>-->\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/orderCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/orderCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <span ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                        <a style=\"color:white\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a>\n" +
    "                    </span>\n" +
    "                    <br>\n" +
    "                    <span ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                        <a style=\"color:white\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a>\n" +
    "                    </span>\n" +
    "                    <h5 style=\"color:white\"><span style=\"font-size:10px\">{{item.type}}</span></h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,alpha,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div style=\"padding:15px\">\n" +
    "                                    <h2 style=\"color:white\">Set Alpha α</h2>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <table class=\"table table-striped table-hover\">\n" +
    "                            <thead>\n" +
    "                                <tr>\n" +
    "                                    <th>Asset</th>\n" +
    "                                    <th>Amount</th>\n" +
    "                                </tr>\n" +
    "                            </thead>\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"(key, value) in item.setAlpha\">\n" +
    "                                    <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                                    <td>{{value}}</td>\n" +
    "                                <tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\" style=\"padding:0px\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover,beta,asset');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                        <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                                <div style=\"padding:15px\">\n" +
    "                                    <h2 style=\"color:white\">Set Beta β</h2>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div style=\"padding:16px\">\n" +
    "                        <table class=\"table table-striped table-hover\">\n" +
    "                            <thead>\n" +
    "                                <tr>\n" +
    "                                    <th>Asset</th>\n" +
    "                                    <th>Amount</th>\n" +
    "                                </tr>\n" +
    "                            </thead>\n" +
    "                            <tbody>\n" +
    "                                <tr ng-repeat=\"(key, value) in item.setBeta\">\n" +
    "                                    <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\"><b>{{key}}</b></a></td>\n" +
    "                                    <td>{{value}}</td>\n" +
    "                                <tr>\n" +
    "                            </tbody>\n" +
    "                        </table>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "        <!--<div ng-if=\"item.directedGraph\"><cytoscape graph-options=\"options\" graph-elements=\"item.directedGraph\" graph-layout=\"layout\" graph-style=\"style\"></cytoscape></div>-->\n" +
    "        <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0 }} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0 }} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"order/{{item.id}}\" ui-sref=\"order({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>        \n" +
    "</div>");
}]);

angular.module("templates/cards/projectCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/projectCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-1 col-xs-2\">\n" +
    "                <a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.urlTitle}}\" ui-sref=\"project.activity({path:item.urlTitle})\">\n" +
    "                    <img style=\"width:50px;height:50px;max-width:1000%;border-radius:100%\" ng-src=\"{{item.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-11 col-xs-10\">\n" +
    "                <p style=\"float:right;text-align:right\">\n" +
    "                    <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    <!--\n" +
    "                    <span style=\"color:gray\" ng-if=\"item.location\">{{item.location.address}} <i class=\"fa fa-map-marker\"></i></span>\n" +
    "                    -->\n" +
    "                </p>\n" +
    "                <h3><a ng-click=\"$event.stopPropagation();\" href=\"project/{{item.urlTitle}}\" ui-sref=\"project.activity({path:item.urlTitle})\">{{item.title}}</a></h3>\n" +
    "                <div style=\"overflow:auto\">\n" +
    "                    <span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/taskCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/taskCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">\n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                        <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"task/{{item.id}}\" ui-sref=\"task({id:item.id})\">{{item.title}}</a>\n" +
    "                    </h1>\n" +
    "                    <h5 ng-click=\"$event.stopPropagation()\">\n" +
    "                        <a style=\"color:white\" href=\"task/{{item.id}}\" ui-sref=\"task({id:item.id})\">{{item.id}}</a>\n" +
    "                    </h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p><a ng-click=\"$event.stopPropagation();\" ng-repeat=\"context in item.context.split(',')\" href=\"market/{{context.trim()}}\" ui-sref=\"market({id:context.trim()})\">{{context.trim()}} </a></p>\n" +
    "        <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "        <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"task/{{item.id}}\" ui-sref=\"task({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "        <a ng-if=\"item.associationId\" ng-click=\"$event.stopPropagation();\" style=\";padding:0px;padding-right:5px\" class=\"pull-right\" href=\"association/{{item.associationId}}\" ui-sref=\"association({id:item.associationId})\"><i class=\"fas fa-bezier-curve grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/timeCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/timeCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div style=\"float:right;text-align:right\">\n" +
    "            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600;\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({path:item.user.username})\">\n" +
    "                <img style=\"margin-right:5px\" class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                {{item.user.username}}\n" +
    "            </a>\n" +
    "            <p style=\"display:inline\"><i class=\"fa fa-angle-right\"></i></p>\n" +
    "            <a ng-click=\"$event.stopPropagation()\" style=\"display:inline;font-weight:600\" href=\"time/{{item.id}}\" ui-sref=\"time({id:item.id})\">{{item.amount}}</a>\n" +
    "            <p style=\"color:gray;font-size:10px;margin-left:42px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "        </div>\n" +
    "        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></div>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation()\" style=\"padding:0px\" class=\"pull-right\" href=\"time/{{item.id}}\" ui-sref=\"time({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/timeCardLarge.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/timeCardLarge.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div class=\"container\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{item.amount}}</h1>\n" +
    "                    <h5 style=\"text-align:left;color:rgba(255,255,255,0.9);\">{{item.startTime | date:\"h:mma MM/dd/yyyy\"}} - {{item.endTime | date:\"h:mma MM/dd/yyyy\"}}</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px\"> \n" +
    "        <!--TODO: ASSOCIATIONS...-->\n" +
    "        <a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.task.id}}\">{{item.task.title}}</a>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <a ng-click=\"$event.stopPropagation()\" style=\"font-weight:700\" href=\"member/{{item.user.username}}\">\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"/images/avatar.png\"> {{item.user.username}}\n" +
    "        </a>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation()\" class=\"pull-right\" style=\"padding:0px;\" href=\"time/{{item.id}}\" ui-sref=\"time({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/transactionCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/transactionCard.tpl.html",
    "<div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div style=\"padding:16px\">\n" +
    "        <div style=\"float:right;text-align:right\">\n" +
    "            <a style=\"color:gray;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fa fa-chevron-down\"></i></a>\n" +
    "        </div>\n" +
    "        <div style=\"display:inline\">\n" +
    "            <span ng-if=\"item.from.username\">\n" +
    "                <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.from.username}}\" ui-sref=\"member.activity({path:item.from.username})\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.from.username}}\n" +
    "                </a>\n" +
    "            </span>\n" +
    "            <span ng-if=\"item.from.title\">\n" +
    "                <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.from.urlTitle}}\" ui-sref=\"project.activity({path:item.from.urlTitle})\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.from.avatarUrl}}\" src=\"{{item.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.from.title}}\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "            <i class=\"fa fa-arrow-right\"></i>\n" +
    "        </div>\n" +
    "        <div style=\"display:inline\">\n" +
    "            <span ng-if=\"item.to.username\">\n" +
    "                <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.to.username}}\" ui-sref=\"member.activity({path:item.to.username})\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.to.username}}\n" +
    "                </a>\n" +
    "            </span>\n" +
    "            <span ng-if=\"item.to.title\">\n" +
    "                <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{item.to.urlTitle}}\" ui-sref=\"project.activity({path:item.to.urlTitle})\">\n" +
    "                    <img class=\"card-avatar\" ng-src=\"{{item.to.avatarUrl}}\" src=\"{{item.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                    {{item.to.title}}\n" +
    "                </a>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(key, value) in item.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></p></span>\n" +
    "\n" +
    "\n" +
    "        <!--SELF AS CONTEXT..-->\n" +
    "        <!--{{item.associationModels}}-->\n" +
    "\n" +
    "        <!--COMPUTE-->\n" +
    "        <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"context in item.context.split(',')\">{{context.trim()}} </a></p>\n" +
    "        \n" +
    "        <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "        <p style=\"color:gray;font-size:10px\">\n" +
    "        	<span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span> •  \n" +
    "        	<span style=\"color:gray\">{{item.createdAt | date :  \"y MM-dd hh:mm.ss a\"}}</span>\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}}  like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}}  dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" class=\"pull-right\" style=\"padding:0px;\" href=\"transaction/{{item.id}}\" ui-sref=\"transaction({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("templates/cards/validationCard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/cards/validationCard.tpl.html",
    "");
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
    "	<!--TODO: TIME CREATION &+ VALIDATION INFORMATION TYPES..  RETORACTIVE | TIMER | STREAM | API DATA.. ETC -->\n" +
    "	<!--TODO: BASED MANIFOLD FILTER | IE MULTIPLE TASKS | PARENTS -->\n" +
    "	<!--TODO: BASED MANIFOLD FILTER | IE MULTIPLE TASKS | PROJECTS | CONTENT | VALIDATIONS | PARENTS -->\n" +
    "	<!--TODO: NESTED RENDER-->\n" +
    "	<!--TODO: USER AND CREATOR-->\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(time)\">\n" +
    "        	<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(time)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center;\">\n" +
    "			        	<div style=\"padding:15px\">\n" +
    "			            	<h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">{{time.amount}} Seconds</h1>\n" +
    "        			    	<h5 style=\"color:white\" ng-if=\"!time.stream\"><i class=\"fas fa-eye-slash\"></i> No Stream</h5> <!--TYPE.. RETROACTIVE.. TIMER ETC-->\n" +
    "			            	<h5 style=\"color:white\"><span style=\"font-size:10px;color:white\">{{(time.amount/60).toFixed(2)}} minutes, <span style=\"font-size:10px;color:white\">{{(time.amount/3600).toFixed(2)}} hours</span></h5>\n" +
    "			            	<!--<h5 style=\"color:white\"><span style=\"\" am-time-ago=\"time.createdAt\"></span></h5>-->\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"background-color:white\">\n" +
    "	            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "	                <div style=\"text-align:center\">\n" +
    "	                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION');\">Information</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS');\">Associations</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT');\">Content</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS');\">Tokens</a></li>\n" +
    "	                    </ul>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <hr style=\"margin:0px;\">\n" +
    "			<div style=\"padding:16px\">\n" +
    "				<div ng-if=\"selectedTab =='INFORMATION'\">\n" +
    "\n" +
    "					<a style=\"font-weight:700\" href=\"member/{{time.user.username}}\" ui-sref=\"member.activity({path:time.user.username})\">\n" +
    "						<img class=\"card-avatar\" ng-src=\"{{time.user.avatarUrl}}\" src=\"{{time.user.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "						{{time.user.username}}\n" +
    "					</a>\n" +
    "	                \n" +
    "	                <!--TODO-->\n" +
    "					<p><a ng-repeat=\"tag in time.context track by $index\" href=\"market/{{tag.trim()}}\" ui-sref=\"market({id:tag.trim()})\">{{tag.trim()}}<span ng-show=\"!$last\">,</span> </a></p>\n" +
    "\n" +
    "					<p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"time.createdAt\"></p>\n" +
    "\n" +
    "					<!--TODO: CONTENT UNITY // EMBED // ASSOCIATED CONTENT-->\n" +
    "\n" +
    "					<div style=\"text-align:center;\" ng-if=\"false\">\n" +
    "						<span style=\"display:inline\" ng-bind-html=\"renderContent(time.stream.content)\"></span>\n" +
    "					</div>\n" +
    "\n" +
    "					<div>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "		                <span style=\"display:inline\" ng-bind-html=\"renderContent(time.content)\"></span>\n" +
    "						<div class=\"spacing-10\"></div>\n" +
    "					</div>\n" +
    "\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div style=\"clear:both\"></div>\n" +
    "			<div class=\"card-footer\">\n" +
    "            	<a ng-click=\"$event.stopPropagation();renderAttentionToggle(time)\" style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{time.data.apps.attention.general || 0}}</a>\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(time, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{time.data.apps.reactions.plus || 0}} like </a> \n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(time, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{time.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "				<a ng-click=\"$event.stopPropagation();contentToggle(time)\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "		       	<a ng-click=\"$event.stopPropagation();validationToggle(time)\"><i class=\"fas fa-check\"></i> validate </a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "    	<div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'time/templates/associations.tpl.html'\"></div>\n" +
    "    	<div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'time/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("time/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("time/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"context in task.context\">{{context}}, </span>\n" +
    "                </div>\n" +
    "                <tags-input min-length=\"1\" max-tags=\"1\" placeholder=\"Associations\" ng-model=\"assoicationFilter\">\n" +
    "                    <auto-complete source=\"loadAssociations($query)\"></auto-complete>\n" +
    "                </tags-input>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input></div>\n" +
    "<div class=\"card\" ng-repeat=\"item in time.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in item.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("time/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("time/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p>Attention, Content, Associations, Validations</p>\n" +
    "        <highchart config=\"tokenChart\"></highchart>\n" +
    "         <!--TODO MOBILE-->\n" +
    "         <!--UNIFITY TOKEN MODEL-->\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"(key, value) in content.data.apps.tokens\">\n" +
    "                    <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></td>\n" +
    "                    <td>{{value}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
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
    "    <div class=\"row\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(transaction);\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{transaction.context}}')\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(transaction)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                    </div> \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                        <div class=\"container\">\n" +
    "                            <h1 style=\";font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Transaction</h1>\n" +
    "                            <h5 style=\"color:white\">{{transaction.id}}</h5>\n" +
    "                            <h5 style=\"color:white\"><span am-time-ago=\"transaction.createdAt\"></span> • {{transaction.createdAt}}</h5>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"background-color:white\">\n" +
    "                <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "                    <div style=\"text-align:center\">\n" +
    "                        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "                            <li ng-if=\"false\"><a ng-click=\"$event.stopPropagation();selectTab('ACTIVITY')\">Activity</a></li>\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();selectTab('ASSOCIATIONS')\">Associations</a></li>\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();selectTab('STATS')\">Stats</a></li>\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();shareToggle(transaction)\">Share</a></li>\n" +
    "                            <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS')\">Tokens</a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <hr style=\"margin:0px;\">\n" +
    "\n" +
    "            <div style=\"padding:16px\" ng-if=\"selectedTab =='INFORMATION'\">\n" +
    "        \n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"transaction.from.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.from.username}}\" ui-sref=\"member.activity({path:transaction.from.username})\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.from.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"transaction.from.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.from.urlTitle}}\" ui-sref=\"project.activity({path:transaction.from.urlTitle})\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.from.avatarUrl}}\" src=\"{{transaction.from.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.from.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "                <div style=\"display:inline;padding-left:5px;padding-right:5px;\">\n" +
    "                    <i class=\"fa fa-arrow-right\"></i>\n" +
    "                </div>\n" +
    "                <div style=\"display:inline\">\n" +
    "                    <span ng-if=\"transaction.to.username\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{transaction.to.username}}\" ui-sref=\"member.activity({path:transaction.to.username})\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.to.username}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                    <span ng-if=\"transaction.to.title\">\n" +
    "                        <a ng-click=\"$event.stopPropagation()\"  style=\"display:inline;font-weight:600;margin-left:5px\" href=\"project/{{transaction.to.urlTitle}}\" ui-sref=\"project.activity({path:transaction.to.urlTitle})\">\n" +
    "                            <img class=\"card-avatar\" ng-src=\"{{transaction.to.avatarUrl}}\" src=\"{{transaction.to.avatarUrl}}\" err-src=\"/images/avatar.png\">\n" +
    "                            {{transaction.to.title}}\n" +
    "                        </a>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                            \n" +
    "                <span ng-repeat=\"(key, value) in transaction.amountSet\"><p style=\"font-weight:800\">{{value}} <a ng-click=\"$event.stopPropagation();\" href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></p></span>\n" +
    "\n" +
    "                <p><a ng-repeat=\"context in transaction.context.split(',')\">{{context.trim()}} </a></p>\n" +
    "                <p>{{transaction.content}}</p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();renderAttentionToggle(transaction);\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{transaction.data.apps.attention.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{transaction.data.apps.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(transaction, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{transaction.data.apps.reactions.minus}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();contentToggle(transaction);\" style=\"padding:5px;color:grey\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();validationToggle(transaction)\" style=\"padding:5px;color:grey\" ><i class=\"fa fa-check\"></i> validate </a>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "        <div ng-if=\"selectedTab =='ASSOCIATIONS'\" ng-include=\"'transaction/templates/associations.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'transaction/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='STATS'\" ng-include=\"'transaction/templates/stats.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'transaction/templates/tokens.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("transaction/templates/associations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/templates/associations.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Associations</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <!--ALL ASSOCIATIONS && SERLF-ASSOCIATIONS-&FILTER-->\n" +
    "                <h4>Context</h4>\n" +
    "                <div>\n" +
    "                    <span ng-repeat=\"context in transaction.context\">{{context}}, </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"card\" ng-repeat=\"item in transaction.associationModels\" ng-click=\"cardDetailExpand(item)\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p ng-repeat=\"model in item.associatedModels\">\n" +
    "            <a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, \n" +
    "            <span>{{model.data.title}}</span>\n" +
    "        </p>\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "        <span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "        <p><b><a href=\"association/{{association.id}}\" ui-sref=\"association({id:association.id})\">{{association.id}}</a></b></p>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"association/{{item.id}}\" ui-sref=\"association({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("transaction/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/templates/content.tpl.html",
    "<div class=\"card\" ng-repeat=\"item in contentList\">\n" +
    "    <div style=\"padding:16px\" ng-click=\"\">\n" +
    "        <div>\n" +
    "            <img class=\"card-avatar\" ng-src=\"{{item.user.avatarUrl}}\" src=\"{{item.user.avatarUrl}}\" err-src=\"images/avatar.png\">\n" +
    "            <a style=\"display:inline;font-weight:600;margin-left:5px\" href=\"member/{{item.user.username}}\" ui-sref=\"member.activity({id:item.user.username})\">{{item.user.username}}</a>\n" +
    "            <p style=\"display:inline;font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"item.createdAt\"></p>\n" +
    "        </div> \n" +
    "        <div style=\"margin-left:42px\"><span style=\"display:inline\" ng-bind-html=\"renderMessage(item.content)\"></span></div>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();\"><i class=\"fas fa-eye\"></i> {{time.data.apps.attention.general || 0}} </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"padding:5px;color:grey\" ng-click=\"reply(item)\" ui-sref=\"content({id:item.user.username})\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "        <a ng-click=\"$event.stopPropagation();\" style=\"color:grey\" class=\"pull-right\" href=\"content/{{item.id}}\" ui-sref=\"content({id:item.user.username})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("transaction/templates/stats.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/templates/stats.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Stats</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"statsChart\"></highchart>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("transaction/templates/time.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/templates/time.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"padding:16px\">\n" +
    "\n" +
    "        <div ng-show=\"!recordingTime\">\n" +
    "\n" +
    "            <button ng-show=\"!question\" type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"askQuestion()\">Create Time</button>\n" +
    "            <div ng-show=\"question && !streaming\">\n" +
    "                <h3>Streaming?</h3>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startStreaming()\">Yes</button>\n" +
    "                <div class=\"spacing-5\"></div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default log-btn\" ng-click=\"startTime()\">No</button>\n" +
    "            </div>\n" +
    "            <div ng-show=\"streaming\">\n" +
    "                <input type=\"text\" placeholder=\"Link\" ng-model=\"streamUrl\" class=\"form-control\">\n" +
    "                <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"startTime()\">Start Stream</button>\n" +
    "            </div>\n" +
    "            \n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"recordingTime\">\n" +
    "\n" +
    "            <h3>{{taskTime}}</h3>\n" +
    "            <div ng-if=\"streaming\"><div ng-bind-html=\"renderStream(streamUrl)\"></div></div>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <tags-input min-length=\"1\" ng-model=\"newTime.context\" placeholder=\"Context\"></tags-input>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <text-angular ng-model=\"newTime.content\" ta-toolbar=\"[['bold','italics','p','h1','h2','quote','pre','insertLink', 'html']]\"></text-angular>\n" +
    "            <div class=\"spacing-5\"></div>\n" +
    "            <button style=\"width:100%;\" class=\"btn btn-default log-btn\" ng-click=\"submit()\">Submit Time</button>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"item in time\" ng-click=\"cardDetailToggle(item)\">\n" +
    "    <div ng-include=\"'templates/cards/timeCard.tpl.html'\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("transaction/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transaction/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <highchart config=\"tokenChart\"></highchart>\n" +
    "         <!--TODO MOBILE-->\n" +
    "         <!--UNIFITY TOKEN MODEL-->\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"(key, value) in task.data.apps.tokens\">\n" +
    "                    <td><a href=\"market/{{key}}\" ui-sref=\"market({id:key})\">{{key}}</a></td>\n" +
    "                    <td>{{value}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("transparency/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("transparency/index.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "        	<div class=\"container\">\n" +
    "	            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">THE CRE8 NETWORK</h1>\n" +
    "	        </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "        <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "            <li style=\"font-size:14px\"><a ng-click=\"selectTab('NETWORK')\" href=\"#\">Peer Network</a></li>\n" +
    "            <li style=\"font-size:14px\"><a ng-click=\"selectTab('STATS')\" href=\"#\">Stats</a></li>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "        </ul>\n" +
    "	</div>\n" +
    "	<div class=\"row\" ng-if=\"selectedTab == 'NETWORK'\">\n" +
    "		<div class=\"card\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?network')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "			        	<div class=\"container\">\n" +
    "				            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Peer Network</h1>\n" +
    "				            <h5 style=\"color:white\">{{peers.length}} Live Peers</h5>\n" +
    "				        </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<ui-gmap-google-map center=\"map.center\" zoom=\"map.zoom\" options=\"options\">\n" +
    "			    <ui-gmap-marker ng-repeat=\"marker in markers\" coords=\"marker.coords\" options=\"marker.options\" idkey=\"marker.id\">\n" +
    "			        <ui-gmap-window options=\"windowOptions\" closeClick=\"closeClick()\">\n" +
    "			            <div><div style=\"font-size: 15px;\"><a href=\"#\">{{marker.content}}</a></div></div>\n" +
    "			        </ui-gmap-window>\n" +
    "			    </ui-gmap-marker>\n" +
    "			</ui-gmap-google-map>\n" +
    "			<div style=\"padding:16px;\">\n" +
    "				<div class=\"col-md-12\">\n" +
    "					<table class=\"table table-striped table-hover\">\n" +
    "		                <thead>\n" +
    "		                    <tr>\n" +
    "		                    	<th>Peer</th>\n" +
    "								<th>Location</th>\n" +
    "								<th>Device</th>\n" +
    "								<th>Version</th>\n" +
    "								<th>Reputation (general)</th>\n" +
    "							</tr>\n" +
    "		                </thead>\n" +
    "		                <tbody>\n" +
    "		                    <tr ng-repeat=\"peer in peers\">\n" +
    "		                        <td><a href=\"member/{{peer.creator.username}}\" ui-sref=\"member.activity({path:peer.creator.username})\">{{peer.title}}: {{peer.creator.username}}</a></td>\n" +
    "								<td><b>lat:</b> {{peer.info.location.lat}}, <b>lng:</b> {{peer.info.location.lng}}</td>\n" +
    "								<td>{{peer.info.device.title}}, {{peer.info.device.processor}} <!--PROCESSORREP MULTI.. --></td>\n" +
    "								<td><a href=\"project/cre8-rust-peer-client\" ui-sref=\"project.activity({path:'cre8-rust-peer-client'})\">{{peer.versionHash}}</td>\n" +
    "								<td>{{peer.reputation.general}}</td>\n" +
    "		                    </tr>\n" +
    "		                </tbody>\n" +
    "		            </table>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\" ng-if=\"selectedTab == 'STATS'\">\n" +
    "		<div class=\"card\">\n" +
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
    "</div>");
}]);

angular.module("tutorial/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/index.tpl.html",
    "<!--TODO: SHOW INTRO IN HEADER-->\n" +
    "<!--TODO: INTRO CONTROLLER.. & SHOW PAGE PROGRESS.. eight pages-->\n" +
    "<!--<div ng-include=\"'tutorial/templates/intro.tpl.html'\"></div>-->\n" +
    "<!--<div ng-if=\"consentAgreement\">-->\n" +
    "<div ng-show=\"pageNumber == 0\"><div ng-include=\"'tutorial/templates/intro.tpl.html'\"></div></div>\n" +
    "\n" +
    "	<!--INFO-->\n" +
    "	<!--APPS-->\n" +
    "	<!--\n" +
    "	<div ng-show=\"pageNumber == 1\"><div class=\"container\" ng-include=\"'tutorial/templates/memberInformation.tpl.html'\"></div></div>\n" +
    "	<div ng-show=\"pageNumber == 2\"><div class=\"container\" ng-include=\"'tutorial/templates/memberApps.tpl.html'\"></div></div>\n" +
    "	-->\n" +
    "\n" +
    "<div ng-show=\"pageNumber == 1\"><div class=\"container\" ng-include=\"'tutorial/templates/valueMap.tpl.html'\"></div></div>\n" +
    "<div ng-if=\"pageNumber == 2\"><div class=\"container\" ng-include=\"'tutorial/templates/projects.tpl.html'\"></div></div>\n" +
    "<div ng-if=\"pageNumber == 3\"><div class=\"container\" ng-include=\"'tutorial/templates/tasks.tpl.html'\"></div></div>\n" +
    "<div ng-if=\"pageNumber == 4\"><div class=\"container\" ng-include=\"'tutorial/templates/members.tpl.html'\"></div></div>\n" +
    "<div ng-if=\"pageNumber == 5\"><div class=\"container\" ng-include=\"'tutorial/templates/valueMapUpdate.tpl.html'\"></div></div>\n" +
    "<div ng-if=\"pageNumber == 6\"><div class=\"container\" ng-include=\"'tutorial/templates/create.tpl.html'\"></div></div>\n" +
    "<!--</div>-->\n" +
    "<!--TODO: BETTER CONTROLS-->\n" +
    "	<!--SHOW PAGE NUM AND PAGE LIST-->\n" +
    "");
}]);

angular.module("tutorial/templates/controls.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/controls.tpl.html",
    "<div class=\"row\">\n" +
    "	<div class=\"card\">\n" +
    "	    <div style=\"padding:0px\" class=\"col-md-9\" ng-click=\"changePage()\" style=\"text-align:center\">\n" +
    "	    	<button ng-disabled=\"stateIsLoadingFeed\" class=\"btn btn-default log-btn\">CONTINUE <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "	    </div>\n" +
    "	    <div style=\"padding:0px\" class=\"col-md-3\" ng-click=\"changePage(-1)\" style=\"text-align:center\">\n" +
    "	    	<button ng-disabled=\"stateIsLoadingFeed\" class=\"btn btn-default log-btn\">SKIP <i class=\"fa fa-angle-double-right\"></i></button>\n" +
    "	    </div>\n" +
    "		<!--<md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoadingFeed\" md-mode=\"indeterminate\"></md-progress-linear>-->\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("tutorial/templates/create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/create.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?business,service,civic,create,art,movies,action')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-plus\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center;\">\n" +
    "                    <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Let's Create!</h1>\n" +
    "                    <p style=\"color:white;\">My First Post</p>\n" +
    "                    <!--CONGRATS SUGGESTIONS INFORMATION? ETC-->\n" +
    "                    <!--GENERAL CREATETOGGLE-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            <div class=\"card\"><button ng-click=\"contentToggle()\" style=\"width:100%\" class=\"btn btn-default log-btn\">+ CONTENT</button></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>");
}]);

angular.module("tutorial/templates/intro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/intro.tpl.html",
    "<div style=\"background:url('https://source.unsplash.com/1600x900/?settings')\" class=\"imageContainerSmall\">\n" +
    "    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "        <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center\">\n" +
    "            <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Welcome to CRE8!</h1>\n" +
    "            <h5 style=\"color:white\">Let's get started.</h5>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "\n" +
    "        <div class=\"col-xs-12\" style=\"padding-right:10px;padding-left:10px\">\n" +
    "            <div style=\"max-width:600px;margin:0 auto;\" class=\"member-card\" ng-click=\"subNavToggle(currentUser)\">\n" +
    "                <!--\n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div>\n" +
    "                -->\n" +
    "                <div class=\"member-card-image\" style=\"background-image: url('{{currentUser.coverUrl}}')\">\n" +
    "                    <a href=\"#\"><img ng-src=\"{{currentUser.avatarUrl}}\" err-src=\"/images/avatar.png\"></a>\n" +
    "                </div>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "                <div class=\"member-card-info\" style=\"height:auto;padding-left:0%\">\n" +
    "                    <h4 ng-click=\"$event.stopPropagation()\"><a href=\"member/{{currentUser.username}}\" ui-sref=\"member.activity({path:currentUser.username})\">{{currentUser.username}}</a></h4>\n" +
    "                    <p style=\"font-size:12px;\" ng-click=\"$event.stopPropagation();memberQRToggle(currentUser);\"><a style=\"color:gray\"><i class=\"fas fa-qrcode\"></i> {{currentUser.id}}</a></p>\n" +
    "                    <p style=\"color:gray\"><i style=\"color:#30b257\" class=\"fa fa-circle\"></i> Online<!--<br>{{currentUser.status}}--></p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <div style=\"padding:16px;text-align:center\">\n" +
    "                <p style=\"color:gray;font-style:italic\">All information shared with CRE8 comes from a place of <b>mutual consent</b>.<p>\n" +
    "                <p style=\"font-size:11px\"><a ng-click=\"informationToggle('Sharing Consent Agreement')\" href=\"#\"> <i class=\"fa fa-question-circle\"></i> Learn More</a></p> \n" +
    "                <div layout=\"row\" layout-align=\"center center\" flex=\"100\">\n" +
    "                    <p><md-switch style=\"\" ng-model=\"consentAgreement\" aria-label=\"Consent Agreement\"></md-switch></p>\n" +
    "                </div>\n" +
    "                <p><b>I agree.</b></p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-if=\"consentAgreement\" class=\"col-xs-12 animationIf\" style=\"padding-right:0px;padding-left:0px\">\n" +
    "            <div ng-include=\"'tutorial/templates/memberInformation.tpl.html'\"></div>\n" +
    "            <div ng-include=\"'tutorial/templates/memberApps.tpl.html'\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div ng-if=\"consentAgreement\" ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "</div>");
}]);

angular.module("tutorial/templates/memberApps.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/memberApps.tpl.html",
    "<div class=\"card\" style=\"margin-top:0px;\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?personal,energy,joyful,humuan,data,code')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"padding:15px;margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">App Connections</h1>\n" +
    "                <h5 style=\"color:white\">CRE8 your experience</h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-lg-12 col-sm-12\" ng-repeat=\"item in apps\" style=\"padding-left:0px;padding-right:0px;\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}},code');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                    <div style=\"padding:15px\">\n" +
    "                        <h1 style=\"text-align:left;font-size:30px;color:rgba(255,255,255,0.9);font-weight:400;\">\n" +
    "                            <a ng-click=\"$event.stopPropagation();\" style=\"color:white\" href=\"app/{{item.id}}\" ui-sref=\"app({id:item.id})\">{{item.title}}</a>\n" +
    "                        </h1>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;min-height:100px;\">\n" +
    "            <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.description)\"></span></p>\n" +
    "            <div ng-click=\"$event.stopPropagation();\">\n" +
    "                <div layout=\"row\" layout-align=\"left\" flex=\"100\">\n" +
    "                    <form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "                        <md-switch ng-change=\"editAccount()\" ng-model=\"newAccountInformation.apps.cre8[item.title]\" aria-label=\"Location Attention\"></md-switch>\n" +
    "                    </form>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div style=\"clear:both\"></div>\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<p style=\"text-align:center\"><a href=\"/account\" ui-sref=\"account\"><b><i class=\"fas fa-passport\"></i> More Apps in Account Settings</b></a></p>\n" +
    "<!--TODO ACTIVE APPS-->\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "<div class=\"card\">\n" +
    "    <button type=\"submit\" class=\"btn btn-default log-btn\"><span ng-if=\"!stateIsLoadingFeed\">Compile Peer</span> <span ng-if=\"stateIsLoadingFeed\">Compiling Peer</span></button>\n" +
    "    <md-progress-linear style=\"height:2px\" ng-if=\"stateIsLoadingFeed\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "</div>\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "");
}]);

angular.module("tutorial/templates/memberInformation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/memberInformation.tpl.html",
    "<div class=\"card\" style=\"margin-top:0px;\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?personal,energy,joyful,humuan,data,code')\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-passport\"></i></a>\n" +
    "            </div> \n" +
    "            <div style=\"padding:15px;margin-top: auto;margin-bottom: auto;text-align:center\">\n" +
    "                <!--\n" +
    "                <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Share With Us</h1>\n" +
    "                <h5><a style=\"color:white\" href=\"/account\"  ui-sref=\"account\"><i class=\"fas fa-passport\"></i> Account Information</a></h5>\n" +
    "                -->\n" +
    "                <h1><a style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\" href=\"/account\"  ui-sref=\"account\">Account Information</a></h1>\n" +
    "                <!--<h5><a style=\"color:white\" href=\"/account\"  ui-sref=\"account\">{{currentUser.id}}</a></h5>-->\n" +
    "                <h5><a style=\"color:white\" href=\"/account\"  ui-sref=\"account\">Share With Us</a></h5>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <form role=\"form\" ng-submit=\"editAccount()\">\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>Avatar URL</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.avatarUrl\" placeholder=\"Avatar Url\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>Cover URL</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.coverUrl\" placeholder=\"Cover Url\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-12\">\n" +
    "                <h5>Username</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.username\" placeholder=\"Username\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>Email</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.email\" placeholder=\"Email\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>Phone Number</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.phoneNumber\" placeholder=\"Phone Number\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>First Name</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.firstName\" placeholder=\"First Name\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-6\">\n" +
    "                <h5>Last Name</h5>\n" +
    "                <input type=\"text\" ng-model=\"newAccountInformation.lastName\" placeholder=\"Last Name\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"padding:0px\" class=\"col-xs-12\">\n" +
    "                <h5>Date Of Birth</h5>\n" +
    "                <input type=\"date\" ng-model=\"newAccountInformation.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control\">\n" +
    "            </div>\n" +
    "\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "            <button type=\"submit\" class=\"btn btn-default log-btn\">Save Information</button>\n" +
    "\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("tutorial/templates/members.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/members.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailExpand()\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?friendship,skills,engineering,code,computer,technology,value,fintech')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chart-bar\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center;\">\n" +
    "                    <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;\">Members</h1>\n" +
    "                    <p style=\"color:white;\">CRE8's Community encompasses a wide breadth of skill, interests, and known intention.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\"><div class=\"card\"><div style=\"padding:16px;\"><highchart config=\"totalMap\"></highchart></div></div></div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-sm-6\" ng-repeat=\"item in members\" style=\"padding-left:10px;padding-right:10px;\">\n" +
    "        <div ng-include=\"'templates/cards/memberCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</div>\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("tutorial/templates/projects.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/projects.tpl.html",
    "<div class=\"row\"> \n" +
    "    <div class=\"card\" ng-click=\"cardDetailExpand()\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?coordination,cities,city,community,work')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-users\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center;\">\n" +
    "                    <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Projects</h1>\n" +
    "                    <p style=\"color:white;\">The CRE8 Network is globally present. Our members coordinate around all types of shared initiatives. Get Involved.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>  \n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\"> \n" +
    "    <div ng-repeat=\"item in projects\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-click=\"$event.stopPropagation()\" style=\"float:right\">\n" +
    "                    <button ng-click=\"$event.stopPropagation();join(item);\" ng-if=\"!item.isMember\" class=\"btn btn-default\">Join</button>\n" +
    "                    <button ng-click=\"$event.stopPropagation();join(item);\" ng-if=\"item.isMember\" class=\"btn btn-default\">Leave</button>\n" +
    "                </div>\n" +
    "                <a ng-click=\"$event.stopPropagation()\">\n" +
    "                    <img ng-click=\"$event.stopPropagation()\" style=\"height:64px;float:left;margin-right:10px;\" ng-src=\"{{item.avatarUrl}}\">\n" +
    "                    <h3 style=\"margin-top:0px\">{{item.title}}</h3>\n" +
    "                </a>\n" +
    "                <div><span ng-bind-html=\"renderContent(item.description)\"></span></div>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("tutorial/templates/tasks.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/tasks.tpl.html",
    "<div class=\"row\"> \n" +
    "    <div class=\"card\" ng-click=\"cardDetailExpand()\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?business,service,civic,create,art,movies,action')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-layer-group\"></i> </a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center\">\n" +
    "                    <h1 style=\"font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Tasks</h1>\n" +
    "                    <p style=\"color:white;\">Coordinate with Intention. Get Involved.</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in tasks\" class=\"col-xs-12\" style=\"padding:0px\">\n" +
    "        <div class=\"card\" ng-click=\"cardDetailToggle(item)\">\n" +
    "            <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:100px\" class=\"imageContainerSmall\">\n" +
    "                <div style=\"background:rgba(0,0,0,0.75);height:100px\" class=\"imageContainerSmallDiv\">\n" +
    "                    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                        <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\">\n" +
    "                            <i class=\"fas fa-chevron-down\"></i>\n" +
    "                        </a>\n" +
    "                    </div> \n" +
    "                    <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                        <div style=\"padding:15px\">\n" +
    "                            <h1 style=\"text-align:left;font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\"><a ng-click=\"$event.stopPropagation()\" href=\"task/{{item.id}}\" ui-sref=\"tasks\" style=\"color:white\">{{item.title}}</a></h1>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div style=\"padding:16px;\">\n" +
    "                <div ng-click=\"$event.stopPropagation()\" style=\"float:right\">\n" +
    "                    <button ng-click=\"$event.stopPropagation();interested(item)\" ng-if=\"!item.isAssociated\" class=\"btn btn-default\"><i class=\"fas fa-check\"></i> Interested</button>\n" +
    "                    <button ng-click=\"$event.stopPropagation();interested(item)\" ng-if=\"item.isAssociated\" class=\"btn btn-default\"><i class=\"fas fa-remove\"></i> Cancel Interest</button>\n" +
    "                </div>\n" +
    "                <p><a ng-click=\"$event.stopPropagation()\" ng-repeat=\"tag in item.tags track by $index\" href=\"market/{{tag.trim()}}\" ui-sref=\"market({id:tag.trim()})\">{{tag.trim()}} </a></p>\n" +
    "                <p><span style=\"display:inline\" ng-bind-html=\"renderContent(item.content)\"></span></p>\n" +
    "                <span style=\"color:gray\" am-time-ago=\"item.createdAt\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"card-footer\">\n" +
    "                <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus || 0}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus || 0}} dislike </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" ui-sref=\"task({id:item.id})\"><i class=\"far fa-comment\"></i> comment </a>\n" +
    "                <a ng-click=\"$event.stopPropagation();reply(item)\" href=\"task/{{item.id}}\" ui-sref=\"task({id:item.id})\" style=\"padding:0px\" class=\"pull-right\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</div>\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("tutorial/templates/valueMap.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/valueMap.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailExpand()\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;font-size:50px;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Create Your Value Map</h1>\n" +
    "                    <p style=\"color:white;\">What do you believe is valuable?</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a ng-click=\"selectTab('QUESTIONS')\" href=\"#\"><i class=\"fas fa-question\"></i> Questions</a></li>\n" +
    "    <li style=\"float:left;font-size:14px\"><a ng-click=\"selectTab('BUILDER')\" href=\"#\"><i class=\"fas fa-cubes\"></i> Builder</a></li>\n" +
    "    <li style=\"float:left;font-size:14px\"><a ng-click=\"selectTab('ORDERS')\" href=\"#\"><i class=\"fas fa-poll\"></i> Orders</a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div ng-if=\"selectedTab =='BUILDER'\" ng-include=\"'tutorial/templates/valueMapBuilder.tpl.html'\"></div>\n" +
    "    <div ng-if=\"selectedTab =='QUESTIONS'\" ng-include=\"'tutorial/templates/valueMapQuestions.tpl.html'\"></div>\n" +
    "    <div ng-if=\"selectedTab =='ORDERS'\" ng-include=\"'tutorial/templates/valueMapOrders.tpl.html'\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("tutorial/templates/valueMapBuilder.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/valueMapBuilder.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolore,wonder,connection');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-cubes\"></i></a>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;padding:15px\">\n" +
    "                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Builder</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p style=\"color:gray;font-size:12px;font-style:italic\">Creating a value map furthers a self-empowering mechanism. We create value; though sharing our values and relating them we create value in ourselves, in what we do, and in each other. What you believe is valuable?</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-sm-12 col-xs-12\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-coins\"></i> Base Token <span style=\"font-size:10px;color:gray\">{{baseToken.text}}</span></a>\n" +
    "        </li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-infinity\"></i> Manifold <span style=\"font-size:10px;color:gray\">{{baseManifold.text}}</span></a>\n" +
    "        </li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-dna\"></i> Type <span style=\"font-size:10px;color:gray\">{{orderType.text}}</span></a>\n" +
    "        </li>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "    </ul>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry');min-height:150px;\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:150px;\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;\">{{baseTokenSet[0].text}}</h1>\n" +
    "                    <h5 style=\"color:white;\">{{baseManifold[0].text}}</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQueryArray\"></tags-input></div>\n" +
    "    \n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic\">{{baseToken[0].description}}</p>\n" +
    "            <p style=\"color:gray;font-style:italic\">{{baseManifold[0].description}}</p>\n" +
    "            <p style=\"color:gray;font-style:italic\">{{orderType.description}}</p>\n" +
    "            <div class=\"spacing-10\"></div>\n" +
    "            <p style=\"color:gray;font-style:italic;font-weight:bold\">Select the following of interest to you.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- PRE POPULATE WITH MEMBER ASSOCIATIONS (SELECTED IN TUTORIAL)-->\n" +
    "    <div ng-repeat=\"item in memberTasks\">\n" +
    "        <div ng-if=\"item.model=='TASK'\"  ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--SELECT PROJECT ACTIONS-->\n" +
    "    <div ng-repeat=\"item in memberProjects\">\n" +
    "        <div ng-if=\"item.model=='PROJECT'\"  ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"item in memberProjects\">\n" +
    "        <div ng-if=\"item.model=='PROJECT'\"  ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--SELECT ASSOCIATIONS IS EXCITE-->\n" +
    "\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"font-size:14px;font-weight:bold\">\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in sortedTagArray\">\n" +
    "                <p class=\"valueMapButton\">{{item.element}}</p>\n" +
    "            </span>\n" +
    "\n" +
    "\n" +
    "            <!--ELEMENTALS?-->\n" +
    "            <!--CONTEXT PACK.-->\n" +
    "\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in projects\">\n" +
    "                <p class=\"valueMapButton\">Project {{item.title}}</p>\n" +
    "            </span>\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in tasks\">\n" +
    "                <p class=\"valueMapButton\">Task {{item.title}}</p>\n" +
    "            </span>\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in members\">\n" +
    "                <p class=\"valueMapButton\">Member {{item.username}}</p>\n" +
    "            </span>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div ng-include=\"'tutorial/temapltes/valueMapPositions.tpl.html'\"></div>-->\n" +
    "\n" +
    "    <div class=\"card\" ng-if=\"newOrder.length > 0\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry');min-height:150px;\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:150px;\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;\">My Positions</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\" ng-if=\"newOrder.length > 0\" ng-repeat=\"item in newOrder\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div ng-repeat=\"association in item.associatedModels\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <span>{{association.direction}}</span>\n" +
    "                    <span>{{association.amount}}</span>\n" +
    "                    <!-- <span>{{1/newOrder.length*item[0].amount/100}}</span> -->\n" +
    "                    <a href=\"#\">{{association.market}}</a>\n" +
    "                </div>\n" +
    "                <div layout=\"\">\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"association.amount\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"Amount\"></md-slider>\n" +
    "                </div>\n" +
    "            </div>  \n" +
    "            <a href=\"#\" ng-click=\"removePosition(item)\"><i class=\"fas fa-remove\"></i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\"><button ng-click=\"createOrder()\" style=\"width:100%\" class=\"btn btn-default log-btn\">CREATE POSITION</button></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("tutorial/templates/valueMapOrders.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/valueMapOrders.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolore,wonder,connection');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-poll\"></i></a>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;padding:15px\">\n" +
    "                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Orders</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p style=\"color:gray;font-size:12px;font-style:italic\">Your Orders on the Multidimensional Token Market</p>\n" +
    "        <p style=\"color:gray;font-size:12px;font-style:italic\">These Discrete Market positions codify your value map and create relation in value; a self-empowering mechanism.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "    <div ng-repeat=\"item in positions\"><div ng-include=\"'templates/cards/orderCard.tpl.html'\"></div></div>\n" +
    "</div>");
}]);

angular.module("tutorial/templates/valueMapQuestions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/valueMapQuestions.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?details,notes,exolore,wonder,connection');min-height:50px\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:50px\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-question\"></i></a>\n" +
    "                <div style=\"clear:both\"></div>\n" +
    "            </div> \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;padding:15px\">\n" +
    "                <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Questions</h1>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <p style=\"color:gray;font-size:12px;font-style:italic\">Select what you believe is worthwile.</p>\n" +
    "        <p style=\"color:gray;font-size:12px;font-style:italic\">Creating a value map furthers a self-empowering mechanism. We create value; though sharing our values and relating them we create value in ourselves, in what we do, and within each other.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-xs-12\" style=\"padding-left:0px;padding-right:0px\">\n" +
    "\n" +
    "    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "        <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\">\n" +
    "                <i class=\"fas fa-coins\"></i> Base Token <span style=\"font-size:10px;color:gray\">{{baseToken.text}}</span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-infinity\"></i> Manifold <span style=\"font-size:10px;color:gray\">{{baseManifold.text}}</span></a>\n" +
    "        </li>\n" +
    "        <li style=\"float:left;font-size:14px\">\n" +
    "            <a href=\"#\" ng-click=\"filterToggle('VALUEMAP')\"><i class=\"fas fa-dna\"></i> Type <span style=\"font-size:10px;color:gray\">{{orderType.text}}</span></a>\n" +
    "        </li>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "    </ul>\n" +
    "   \n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry');;min-height:150px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);;height:150px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">Value Map Questions</h1>\n" +
    "                    <h5 style=\"color:white\">{{baseToken.text}}</h5>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\"><tags-input class=\"\" style=\"border:0px;flex-grow:2;\" min-length=\"1\" placeholder=\"Search\" ng-model=\"searchQueryArray\"></tags-input></div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <span style=\"font-size:14px;font-weight:bold\" ng-click=\"selectPack(item)\" ng-repeat=\"item in packs\"><p class=\"valueMapButton\">{{item.title}}</p></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry');;min-height:100px\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);;height:100px\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;font-size:35px\">{{selectedPack.title}}</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div style=\"padding:16px;\">\n" +
    "            \n" +
    "            <!--TODO: DYNAMIC-->\n" +
    "            <p style=\"font-style:italic;color:gray;margin:0px;font-size:12px\">{{selectedPack.description}}</p>\n" +
    "\n" +
    "            <div ng-repeat=\"item in selectedQuestions\">\n" +
    "                <h5>{{item.question}}</h5>\n" +
    "                <!--TODO: QUESTION TYPES-->\n" +
    "                <!--TYPE 1 DIMENSION SLIDER-->\n" +
    "                <div layout=\"\">\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p><b>{{item.answer[0]}}</b></p></div>\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"item.response\" step=\"1\" min=\"-100\" max=\"100\" aria-label=\"{{item.question}}\"></md-slider>\n" +
    "                    <div flex=\"10\" layout=\"\" layout-align=\"center center\"><p><b>{{item.answer[1]}}</b></p></div>\n" +
    "                </div>\n" +
    "                <div style=\"text-align:center\"><p>{{item.assetString}}</p></div><!--HMM-->\n" +
    "                <hr>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"card\"><button ng-click=\"createOrder()\" style=\"width:100%\" class=\"btn btn-default log-btn\">CREATE POSITION</button></div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("tutorial/templates/valueMapUpdate.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tutorial/templates/valueMapUpdate.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-click=\"cardDetailExpand()\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?math,geometry,fractal,data,finance')\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;text-align:center\">\n" +
    "                    <h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Update Your Value Map</h1>\n" +
    "                    <p style=\"color:white;\">Now that we know more about you</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- PRE POPULATE WITH MEMBER ASSOCIATIONS (SELECTED IN TUTORIAL)-->\n" +
    "<div class=\"row\">\n" +
    "    <div ng-repeat=\"item in memberTasks\">\n" +
    "        <div ng-if=\"item.model=='TASK'\"  ng-include=\"'templates/cards/taskCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--SELECT PROJECT ACTIONS-->\n" +
    "    <div ng-repeat=\"item in memberProjects\">\n" +
    "        <div ng-if=\"item.model=='PROJECT'\"  ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"item in memberProjects\">\n" +
    "        <div ng-if=\"item.model=='PROJECT'\"  ng-include=\"'templates/cards/projectCard.tpl.html'\"></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--SELECT ASSOCIATIONS IS EXCITE-->\n" +
    "    <div class=\"card\">\n" +
    "        <div style=\"font-size:14px;font-weight:bold\">\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in sortedTagArray\">\n" +
    "                <p class=\"valueMapButton\">{{item.element}}</p>\n" +
    "            </span>\n" +
    "            <!--ELEMENTALS?-->\n" +
    "            <!--CONTEXT PACK.-->\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in projects\">\n" +
    "                <p class=\"valueMapButton\">Project {{item.title}}</p>\n" +
    "            </span>\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in tasks\">\n" +
    "                <p class=\"valueMapButton\">Task {{item.title}}</p>\n" +
    "            </span>\n" +
    "            <span ng-click=\"createPosition(item)\" ng-repeat=\"item in members\">\n" +
    "                <p class=\"valueMapButton\">Member {{item.username}}</p>\n" +
    "            </span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-if=\"newOrder.length > 0\">\n" +
    "        <div style=\"background:url('https://source.unsplash.com/1600x900/?love,art,geometry');min-height:150px;\" class=\"imageContainerSmall\">\n" +
    "            <div style=\"background:rgba(0,0,0,0.75);height:150px;\" class=\"imageContainerSmallDiv\">  \n" +
    "                <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-universal-access\"></i></a>\n" +
    "                    <div style=\"clear:both\"></div>\n" +
    "                </div> \n" +
    "                <div style=\"margin-top: auto;margin-bottom: auto;padding:15px;\">\n" +
    "                    <h1 style=\"text-align:left;color:rgba(255,255,255,0.9);font-weight:400;\">My Positions</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"card\" ng-if=\"newOrder.length > 0\" ng-repeat=\"item in newOrder\">\n" +
    "        <div style=\"padding:16px\">\n" +
    "            <div ng-repeat=\"association in item.associatedModels\">\n" +
    "                <div style=\"text-align:center\">\n" +
    "                    <span>{{association.direction}}</span>\n" +
    "                    <span>{{association.amount}}</span>\n" +
    "                    <a href=\"#\">{{association.market}}</a>\n" +
    "                </div>\n" +
    "                <div layout=\"\">\n" +
    "                    <md-slider step=\"0.1\" flex=\"\" md-discrete=\"\" ng-model=\"association.amount\" step=\"1\" min=\"0\" max=\"100\" aria-label=\"Amount\"></md-slider>\n" +
    "                </div>\n" +
    "            </div>  \n" +
    "            <a href=\"#\" ng-click=\"removePosition(item)\"><i class=\"fas fa-remove\"></i></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<div ng-include=\"'tutorial/templates/controls.tpl.html'\"></div>\n" +
    "");
}]);

angular.module("validation/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"card\" ng-click=\"cardDetailToggle(validation)\">\n" +
    "			<div style=\"background:url('https://source.unsplash.com/1600x900/?explore,discover')\" class=\"imageContainerSmall\">\n" +
    "			    <div style=\"background:rgba(0,0,0,0.75)\" class=\"imageContainerSmallDiv\">  \n" +
    "			    <div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                    <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(validation)\">\n" +
    "                        <i class=\"fas fa-chevron-down\"></i>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "			        <div style=\"margin-top: auto;margin-bottom: auto;text-align:center;\">\n" +
    "			        	<div class=\"container\">\n" +
    "			            	<h1 style=\"font-size:35px;color:rgba(255,255,255,0.9);font-weight:400;\">Validation</h1>\n" +
    "			            	<h5 style=\"color:white\">{{validation.id}}</h5>\n" +
    "			            </div>\n" +
    "			        </div>\n" +
    "			    </div>\n" +
    "			</div>\n" +
    "			<div style=\"background-color:white\">\n" +
    "	            <div class=\"member-tab-container container\" style=\"padding-left:0px\">\n" +
    "	                <div style=\"text-align:center\">\n" +
    "	                    <ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('INFORMATION')\">Information</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('CONTENT')\">Content</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('VALIDATIONS')\">Validations</a></li>\n" +
    "	                        <li><a ng-click=\"$event.stopPropagation();selectTab('TOKENS')\">Tokens</a></li>\n" +
    "	                    </ul>\n" +
    "	                </div>\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "	        <hr style=\"margin:0px;\">\n" +
    "\n" +
    "	        <div style=\"padding:16px\">\n" +
    "				<div ng-if=\"selectedTab =='INFORMATION'\" ng-include=\"'validation/templates/information.tpl.html'\"></div>\n" +
    "			</div>\n" +
    "		\n" +
    "			<div class=\"card-footer\">\n" +
    "				<a ng-click=\"$event.stopPropagation();\" style=\"color:grey\"><i class=\"fas fa-eye\"></i>  {{validation.data.apps.attention.general || 0}}</a>\n" +
    "				<a ng-click=\"$event.stopPropagation();createReaction(validation, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{validation.data.apps.reactions.plus}} like </a> \n" +
    "                <a ng-click=\"$event.stopPropagation();createReaction(validation, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{validation.data.apps.reactions.minus}} dislike </a>\n" +
    "		       	<a ng-click=\"$event.stopPropagation();contentToggle(validation)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "		       	<a ng-click=\"$event.stopPropagation();validationToggle(validation)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "		    </div>\n" +
    "		</div>\n" +
    "		<div ng-if=\"selectedTab =='CONTENT'\" ng-include=\"'validation/templates/content.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='TOKENS'\" ng-include=\"'validation/templates/tokens.tpl.html'\"></div>\n" +
    "        <div ng-if=\"selectedTab =='VALIDATIONS'\" ng-include=\"'validation/templates/validations.tpl.html'\"></div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("validation/templates/content.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/templates/content.tpl.html",
    "");
}]);

angular.module("validation/templates/information.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/templates/information.tpl.html",
    "<a href=\"member/{{validation.user.username}}\" ui-sref=\"member.activity({path:validation.user.username})\">\n" +
    "    <img class=\"card-avatar\" ng-src=\"{{validation.user.avatarUrl}}\"/>\n" +
    "    <b>{{validation.user.username}}</b>\n" +
    "</a>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<p>Association</p>\n" +
    "\n" +
    "<p>Connection</p>\n" +
    "\n" +
    "{{validation.connection}}\n" +
    "\n" +
    "{{validation}}\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<p style=\"font-size:10px;color:gray;margin-left:5px\" am-time-ago=\"validation.createdAt\"></p>\n" +
    "\n" +
    "<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "<div ng-if=\"validation.content\">\n" +
    "    <span ng-bind-html=\"renderContent(validation.content)\"></span>\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<table class=\"table table-striped table-hover\">\n" +
    "    <thead>\n" +
    "        <tr>\n" +
    "            <th>Context</th>\n" +
    "            <th>Validation Score</th>\n" +
    "            <th>Connection Score (Reputation) </th>\n" +
    "            <th>Connection (Reputation) Weighted Score <a ng-click=\"informationToggle('REPUTATIONWEIGHTEDVALIDATIONSCORE')\"><i class=\"fa fa-question-circle\"></i></a></th>\n" +
    "        </tr>\n" +
    "    </thead>\n" +
    "    <tbody>\n" +
    "        <tr ng-repeat=\"validation in validationList track by $index\">\n" +
    "            <td>{{validation[0]}}</td>\n" +
    "            <td>{{validation[1]}}</td>\n" +
    "            <td>0</td>\n" +
    "            <td>0</td>\n" +
    "        </tr>\n" +
    "    </tbody>\n" +
    "</table>\n" +
    "\n" +
    "<div class=\"spacing-10\"></div>\n" +
    "\n" +
    "<highchart config=\"validationColumn\"></highchart>");
}]);

angular.module("validation/templates/tokens.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/templates/tokens.tpl.html",
    "<div class=\"card\">\n" +
    "    <div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\">Tokens</h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>Identifer</th>\n" +
    "                    <th>Value</th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"item in tokens\">\n" +
    "                    <td><a href=\"market/{{item.string}}\" ui-sref=\"market({id:item.string})\">{{item.string}}</a></td>\n" +
    "                    <td>{{item.amount}}</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("validation/templates/validations.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("validation/templates/validations.tpl.html",
    "<ul style=\"padding:0px;\" class=\"member-tabs\">\n" +
    "    <li style=\"float:left;font-size:14px\"><a href=\"#\" ng-click=\"filterToggle('DISCOVER', filterSet)\"><i class=\"fa fa-filter\"></i> Filter</a></li>\n" +
    "    <li style=\"float:right;font-size:14px\"><a href=\"#\" ng-click=\"sortToggle()\">Sort By Recent <i class=\"fa fa-angle-down\"></i></a></li>\n" +
    "    <div style=\"clear:both\"></div>\n" +
    "</ul>\n" +
    "<div class=\"card\">\n" +
    "    <tags-input style=\"border:0px;flex-grow:2;\" placeholder=\"Search\" ng-model=\"searchQuery\"></tags-input>\n" +
    "</div>\n" +
    "<div class=\"card\" ng-repeat=\"item in validations\" ng-click=\"cardDetailExpand(item)\">\n" +
    "	<div style=\"background:url('https://source.unsplash.com/1600x900/?{{item.tags}}');min-height:auto;\" class=\"imageContainerSmall\">\n" +
    "        <div style=\"background:rgba(0,0,0,0.75);height:auto\" class=\"imageContainerSmallDiv\">  \n" +
    "        	<div style=\"text-align:right;padding:15px;position:absolute;right:0\">\n" +
    "                <a style=\"color:white;\" ng-click=\"$event.stopPropagation();cardDetailToggle(item)\"><i class=\"fas fa-chevron-down\"></i></a>\n" +
    "            </div>\n" +
    "            <div style=\"margin-top: auto;margin-bottom: auto;\">\n" +
    "                <div style=\"padding:15px\">\n" +
    "                    <h1 style=\"text-align:left;font-size:20px;color:rgba(255,255,255,0.9);font-weight:400;\"><a style=\"color:white\" href=\"validation/{{item.id}}\" ui-sref=\"validation({id:item.id})\">{{item.id}}</a></h1>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div style=\"padding:16px;\">\n" +
    "    	<span ng-repeat=\"model in item.associatedModels\"><a href=\"{{model.type.toLowerCase()}}/{{model.id}}\">{{model.type}} - {{model.id}}</a>, </span>\n" +
    "    	<div class=\"spacing-5\"></div>\n" +
    "    	<span ng-repeat=\"(object, key) in item.context\"><b>{{object}}</b>:{{key}}, </span>\n" +
    "    </div>\n" +
    "    <div class=\"card-footer\">\n" +
    "        <a ng-click=\"$event.stopPropagation();renderAttentionToggle(item)\"  style=\"color:grey\"><i class=\"fas fa-eye\"></i> {{item.data.apps.attention.general || 0}}</a>\n" +
    "		<a ng-click=\"$event.stopPropagation();createReaction(item, 'plus')\"><i class=\"fas fa-angle-up\"></i> {{item.data.apps.reactions.plus}} like </a> \n" +
    "        <a ng-click=\"$event.stopPropagation();createReaction(item, 'minus')\" ><i class=\"fas fa-angle-down\"></i> {{item.data.apps.reactions.minus}} dislike </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();contentToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"far fa-comment\"></i> comment </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();validationToggle(item)\" style=\"padding:5px;color:grey\" ><i class=\"fas fa-check\"></i> validate </a>\n" +
    "       	<a ng-click=\"$event.stopPropagation();\" style=\"padding:0px\" class=\"pull-right\" href=\"validation/{{item.id}}\" ui-sref=\"validation({id:item.id})\"><i class=\"fas fa-link grey\"></i></a>\n" +
    "    </div>\n" +
    "</div>");
}]);
