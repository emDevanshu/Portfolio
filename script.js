var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sm = document.getElementById("sidemenu");

function openmenu(){
    sm.style.right = "0";
}
function closemenu(){
    sm.style.right = "-200px";
}

//  BOTTOM TO UP SUBTLE ANIMATION FOR CONTENT
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// Automatic Typing in front page
const typed = new Typed('.multiple-text', {
    strings : ['Programmer.','Frontend Developer.', 'Java Developer.', 'Youtuber.', 'Basketball lover.'],
    typeSpeed : 80,
    backSpeed : 80,
    backDelay : 1000,
    loop : true
});