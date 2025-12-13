// Theme Toggle 
const iconToggle = document.getElementById("iconToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

iconToggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

//Back to Top Button
const btn = document.getElementById("backToTop");

//Show button when scrolling down
window.onscroll = () => {
    if ( window.scrollY > 200){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
};

//Scroll to top when clicked
btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
};