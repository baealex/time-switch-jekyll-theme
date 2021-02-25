---
---

var hasUtterances = false;

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;   
}

function setNightMode() {
    var setUtterancesTheme = function(theme) {
        const message = {
            type: 'set-theme',
            theme: theme
        };
        var utterances = document.querySelector('iframe');
        utterances.contentWindow.postMessage(message, 'https://utteranc.es');
    };

    if(getCookie('nightmode')) {
        document.getElementById('nightToggle').checked = true;
        $('body').addClass('dark');
        if(hasUtterances) {
            setUtterancesTheme('github-dark');
        }
    } else {
        $('body').removeClass('dark');
        if(hasUtterances) {
            setUtterancesTheme('github-light');
        }
    }
}

addEventListener('message', event => {
    if (event.origin !== 'https://utteranc.es') {
        return;
    }
    hasUtterances = true;
    setNightMode();
});

$('#nightToggle').on('click', function() {
    if(!getCookie('nightmode')) {
        var date = new Date();
        document.cookie='nightmode=true; expries='+ (date.getDate()+30) +'; path={{ site.baseurl }}';
    } else {
        document.cookie = 'nightmode=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path={{ site.baseurl }}';
    }
    setNightMode();
});

setNightMode();