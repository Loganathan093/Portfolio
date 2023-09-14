const lg = document.getElementById('lg');
const lk = document.getElementById('lk');
const nme = document.getElementById('name');
nme.addEventListener("mouseover", function(e)
{
    lg.textContent = "Loki"
    lk.textContent = "Loganathan"
})

nme.addEventListener("mouseleave", function(e)
{
    lk.textContent = "Loki"
    lg.textContent = "Loganathan"
})

function projectOpen()
{
    window.open("projects.html");
}

function linkOpen()
{
    window.open("https://in.linkedin.com/");
}