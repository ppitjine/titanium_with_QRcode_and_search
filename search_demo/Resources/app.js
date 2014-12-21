// Created by http://visual-ide.com

// Creation - GUI DO NOT TOUCH
//[tabgroup][Tabs]
var Globals = require ('Globals');
var g_Vars = Globals.Globals;
var Tabs;
function Create_Tabs ()
{
Tabs = require ('/Tabs/Tabs');
Tabs.Tabs(g_Vars);
}
function SaveAllGlobalVariables ()
{

}

function CheckClose (win, aoChildWindows)
{
	for(var label in aoChildWindows)
	{
		if (aoChildWindows[label] !== null)
		{
			if (win == aoChildWindows[label])
			{
				aoChildWindows[label] = null;
				return;
			}
			CheckClose (win, aoChildWindows[label].aoChildWindows);
		}
	}
}
Ti.App.addEventListener ('GUI_Window_Closed', function (e) {
	CheckClose (e.win, g_Vars.aoChildWindows);
});
// Creation - END


// Startup - GUI DO NOT TOUCH
Create_Tabs();
// Startup - END
