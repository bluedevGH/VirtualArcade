console.log("hi im sprint and going")

document.addEventListener("DOMContentLoaded", function() {
    checkCookie()
    document.querySelector('body').addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'light':
                setCookie("theme", "theme-default");
                document.body.className = themeCookie;
                console.log('light');
                break;
            case 'dark':
                setCookie("theme", "theme-dark");
                document.body.className = 'theme-dark';
                console.log('dark');
                break;
            case 'navy':
                setCookie("theme", "theme-navy");
                document.body.className = 'theme-navy';
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