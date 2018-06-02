
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showBanks() {
    document.getElementById("bankDropdown").classList.toggle("show");
}

function proceedToPayment(){

    // alert("Make Payment Here. Assume Successful Payment.")

    location.href="/proceed_payment"


}

// Close the dropdown if the user clicks outside of it
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
    };

