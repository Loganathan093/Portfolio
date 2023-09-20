const lg = document.getElementById('lg');
const lk = document.getElementById('lk');
var nme = document.getElementById('name');
var upb = document.getElementById('upb');
var onepos = document.getElementById('uppos');

function projectOpen()
{
    window.open("projects.html");
}

function p1()
{
    window.open("https://loganathan093.github.io/Guess-Number/");
}

function linkOpen()
{
    window.open("https://in.linkedin.com/");
}

setTimeout(function(){
    console.log(nme.textContent);
}, 2000)



function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           
            document.getElementById("upb").style.display = "none";
        } else {
            
            document.getElementById("upb").style.display = "block";
        }
    });
}





const observer = new IntersectionObserver(handleIntersection);


const target = document.getElementById("nv");


observer.observe(target);


window.onload = function() {
    // var randomDiv = document.querySelectorAll('#s');
    
    // // Generate random x and y positions
    // var maxX = window.innerWidth - randomDiv.offsetWidth;
    // var maxY = window.innerHeight - randomDiv.offsetHeight;
    
    // var randomX = Math.floor(Math.random() * maxX);
    // var randomY = Math.floor(Math.random() * maxY);
    
    // // Apply the random positions to the div
    // randomDiv.style.left = randomX + 'px';
    // randomDiv.style.top = randomY + 'px';


    var randomX = Math.floor(Math.random()*100);

    nme.style.left = randomX + 'px';


};

