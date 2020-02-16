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

		flutter:{
			language:'Dart'
			/*
			import 'package:flutter/material.dart';
			void main() => runApp(MyApp());
			class MyApp extends StatelessWidget {
			  final appTitle = 'CRE8.XYZ';
			  @override
			  Widget build(BuildContext context) {
			    return MaterialApp(title: appTitle, home: MyHomePage(title: appTitle));
			  }
			}
			class MyHomePage extends StatelessWidget {
			  final String title;
			  MyHomePage({Key key, this.title}) : super(key: key);
			  @override
			  Widget build(BuildContext context) {
			    return Scaffold(
			      appBar: AppBar(title: Text(title), backgroundColor: Colors.black),
			      body: Center(child: Text('We Create!')),
			      endDrawer: Drawer(
			        child: ListView(
			          padding: EdgeInsets.zero,
			          children: <Widget>[
			            DrawerHeader(
			              child: Text('Drawer Header', style:TextStyle(color: Colors.white.withOpacity(0.6))),
			              decoration: BoxDecoration(color: Colors.black),
			            ),
			            ListTile(title: Text('Project'),onTap: () {Navigator.pop(context);},),
			            ListTile(title: Text('Tasks'),onTap: () {},),
			          ],
			        ),
			      ),
			    );
			  }
			}
			*/
		}

	}
};
module.exports = App;