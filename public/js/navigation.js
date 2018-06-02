function clickedPersonIcon() {
    var cookie = getCookie('token')
    if (cookie === null||cookie === "") {
        window.location.href = '/login'
    }
    else {
        document.getElementById("myDropdown").classList.toggle("show");
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function clickedLogout() {
    logoutReq()
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function clickedListLogin() {
    var cookie = getCookie('token')
    if (cookie === null||cookie === "") {
        window.location.href = '/login'
        return
    }
    clickedLogout()
}

function isAdmin() {
    $.ajax(URL + "/api/v1/users/is_admin", {
        method: 'GET',
        data: null,
        crossDomain: true,
        redirect: 'follow',
        xhrFields: {
            withCredentials: true
        },
        success:function(res){
            var isAdmin = res.isAdmin
            if (isAdmin) {
                $("#adminOption").show()
            }
            else {
                $("#adminOption").hide()
            }
        },
        error: function(e){
            console.log('ajax call error');
            console.log('status: ' + e.status + ', message: ' + e.message);
            alert("Logout error");
        }
    });
}

$(document).ready(function(){
    var cookie = getCookie('token')
    $("#adminOption").hide()
    if (cookie === null||cookie === "") {
        $("#loginOption").text("LOGIN")
        $("#statusOption").hide()
        $("#orderOption").hide()
        $("#adminOption").hide()
    }
    else {
        $("#loginOption").text("LOGOUT")
        $("#statusOption").show()
        $("#orderOption").show()
        isAdmin()
    }
    })