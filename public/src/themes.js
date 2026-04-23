console.log("hi im sprint and going") // just to make sure script loads

document.addEventListener("DOMContentLoaded", function() {
    checkCookie(); // checks for theme cookie once content is loaded, if it is there set the theme
    document.querySelector('body').addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'light':
                setCookie("theme", "theme-default"); // set theme cookie to this theme
                document.body.className = getCookie("theme") // set class based on theme cookie value
                console.log('light'); // just debug stuff
                break;
            case 'dark':
                setCookie("theme", "theme-dark");
                document.body.className = getCookie("theme")
                console.log('dark');
                break;
            case 'navy':
                setCookie("theme", "theme-navy");
                document.body.className = getCookie("theme")
                console.log('navy');
                break;
            case 'Theme':
                const themeSettings = document.getElementById('theme-settings');
                if (themeSettings.style.display == "none") {themeSettings.style.display = "inline"} else {themeSettings.style.display = "none"};
                console.log(themeSettings.style);
                break;
        }
    });
});

/**
 * need to make it so that it loads based on cookie value, not class names hardcoded
 */