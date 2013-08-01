'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});


function purge(url, cb) {
    var xmlHttp=new XMLHttpRequest();
    xmlHttp.open('PURGE', url, true);

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                cb(true);
            }
            else {
                cb(false);
            }
        }
    };
    xmlHttp.send(null);
    //cb((xmlHttp.status == 200) && (xmlHttp.statusText == 'Ban added.'));
}


chrome.browserAction.onClicked.addListener(function(tab) {
    purge(tab.url, function(status){
        if (status) { alert('PURGED'); }
    });
});
