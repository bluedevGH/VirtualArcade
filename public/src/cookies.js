function setCookie(cname, cvalue) { // cookie name and then value  (css theme in this case)
    const d = new Date(new Date().getTime() + 31556952000); // 1 year in ms
    let expires = "expires="+ d.toUTCString(); // breaks it down so that it can handle special characters
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // writes out the cookie as if you were creating it manually
}

function getCookie(cname) { // take cookie name as parameter
    let name = cname + "="; // variable with text to search for (the cookie name)
    let decodedCookie = decodeURIComponent(document.cookie); // decode cookie string to handle special characters

    let ca = decodedCookie.split(';'); // split into an array called ca
    for (let i = 0; i < ca.length; i++) { // loop through array and read each value
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { // if cookie is found return value
            return c.substring(name.length, c.length);
        }
    }
    return ""; // if not found return empty
}

function checkCookie() { // ignore the error about this function never being used, it is used in themes.js
    let themeCookie = getCookie("theme") // sets themeCookie to value of cookie called theme
    if (!themeCookie || themeCookie === null || themeCookie === undefined) {
        setCookie("theme", "theme-default"); // if cookie called theme doesnt exist make it
        document.body.className = themeCookie;
        return "default";
    };
    document.body.className = themeCookie;
    return themeCookie;
    
};