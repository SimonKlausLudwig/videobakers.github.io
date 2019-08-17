function initFreshChat() {
    window.fcWidget.init({
        token: "70f2d1c1-dbc8-4535-b9de-f4fed67776ec",
        host: "https://wchat.freshchat.com",
        "config": {
            "cssNames": {
                "expanded": "custom_fc_expanded",
                "widget": "custom_fc_frame"
            }
        }
    });
}

function
initialize(i, t) {
    var e;
    i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
}

function
initiateCall() {
    initialize(document, "freshchat-js-sdk")
}

initiateCall();