let APIURL = "";

switch (window.location.hostname) {
    case "localhost" || "127.0.0.1":
        APIURL = "http://localhost:3001";
        break;
    case "bluebadge4.herokuapp.com":
        APIURL = "https://bluebadge4-server.herokuapp.com";
}
export default APIURL;