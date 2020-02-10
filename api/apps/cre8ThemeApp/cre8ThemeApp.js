//CRE8.CRE8THEME.ALPHA
//INIT FRONT END THEME
//GRUNT / GULP APP? 
//async function buildClientFrontend(model){
	//await Association // MEMBER-APP
	//memberViewApp[x].views[y].controller()
		//memberViewApp[x].views[y].templates[z].data
	//aboutApp.views.about.controller();
	//views.about.controller();
	//views.about.controller();
	//views.about.controller();
	//views.about.controller();
//}
//views.about.controller();
var App = {
	//CORE MODULES
	//CARDS
	//NAV BAR
	//SIDEBAR
	views:{
		about:{
			route:'/',
			controller:function(){
				//renderAbout --> REACT?
			},
			templates:[{
				type:'HTML',
				data:'index.tpl.html'
					//JSX
			}],
		},
	}
};
module.exports = App;