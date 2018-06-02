// const URL = "https://api.bundleport.com"
// const URL = "http://localhost:5000"
const URL = $("#url").val();

function sendReq(info) {
    console.log('info.url: ' + info.url);
    console.log('info.body: ' + JSON.stringify(info.body, null, 2));

    if (info.type.toUpperCase() === "POST"){
        $.post(info.url, info.body, info.callback);
    } else if (info.type.toUpperCase() === "GET") {
        $.get(info.url, info.body, info.callback);
    }
}
