//navbar scroll behavior
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "yellow";
        document.getElementById("navbar").style.borderBottom = "1px solid gray";
    } else {
        document.getElementById("navbar").style.backgroundColor= "transparent";
        document.getElementById("navbar").style.borderBottom = "none";
    }
}