exports.Window2 = function (g_Vars)
{
// Creation - GUI DO NOT TOUCH
// [an:PartOfTab][true][ta:PartOfTab][true][ph:PartOfTab][true][pa:PartOfTab][true][mw:PartOfTab][true][an:icon][/images/tab-duplicate-3.ico][ta:icon][/images/tab-duplicate-3.ico][ph:icon][/images/tab-duplicate-3.ico][pa:icon][/images/tab-duplicate-3.ico][mw:icon][/images/tab-duplicate-3.ico][an:name][Window2][ta:name][Window2][ph:name][Window2][pa:name][Window2][mw:name][Window2][an:backgroundColor][#ffffff][ta:backgroundColor][#ffffff][ph:backgroundColor][#ffffff][pa:backgroundColor][#ffffff][mw:backgroundColor][#ffffff][an:title][會員登入][ta:title][會員登入][ph:title][會員登入][pa:title][會員登入][mw:title][會員登入]
var win;
win = Titanium.UI.createWindow({
PartOfTab : true,
icon : '/images/tab-duplicate-3.ico',
name : 'Window2',
backgroundColor : '#ffffff',
title : '會員登入',
});

win.aoChildWindows = {};
// Creation - END

// Window2_close - BEGIN
win.addEventListener ('close', function (e) {
	Ti.API.fireEvent ('GUI_Window_Closed', { win : win});
});
// Window2_close - END




// Startup - GUI DO NOT TOUCH
var aoChildWindows = undefined;
var oTopMost = undefined; 
if (g_Vars.aoChildWindows['Tabs']) { oTopMost = g_Vars.aoChildWindows['Tabs']; aoChildWindows = g_Vars.aoChildWindows['Tabs'].aoChildWindows;  }
if (aoChildWindows) { aoChildWindows['Window2'] = win; oTopMost.aoChildWindows = aoChildWindows; }
var tab = Titanium.UI.createTab ({icon : '/images/tab-duplicate-3.ico', title : '會員登入', window : win, });
g_Vars.Tabs.addTab(tab);
win.pParentTab = g_Vars.Tabs;
g_Vars.Tabs.tabTab_Window2 = tab;
g_Vars.currentWindow = win;
// Startup - END

return win;
};
