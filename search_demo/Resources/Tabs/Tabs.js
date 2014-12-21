exports.Tabs = function (g_Vars)
{
// Creation - GUI DO NOT TOUCH
// [an:name][Tabs][ta:name][Tabs][ph:name][Tabs][pa:name][Tabs][mw:name][Tabs][an:autoCreate][1][ta:autoCreate][1][ph:autoCreate][1][pa:autoCreate][1][mw:autoCreate][1]
//[window][Window1]
//[window][Window2]
var Window1;
 var Window1_Win;
function Create_Window1 ()
{
Window1 = require ('/Tabs/Window1/Window1');
Window1_Win = Window1.Window1(g_Vars);
}
var Window2;
 var Window2_Win;
function Create_Window2 ()
{
Window2 = require ('/Tabs/Window2/Window2');
Window2_Win = Window2.Window2(g_Vars);
}
var tabGroup;
tabGroup = Titanium.UI.createTabGroup({
name : 'Tabs',
autoCreate : true,
});

g_Vars.aoChildWindows['Tabs'] = tabGroup;
g_Vars.Tabs = tabGroup;
var Tabs = tabGroup;
tabGroup.aoChildWindows = {};
// Creation - END


// Startup - GUI DO NOT TOUCH
Create_Window1();
Create_Window2();
tabGroup.open ();
// Startup - END

return tabGroup;
};
