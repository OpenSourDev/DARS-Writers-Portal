
const btn=document.getElementById('themeToggle');
if(localStorage.theme==='light')document.body.classList.add('light');
btn&&btn.addEventListener('click',()=>{
document.body.classList.toggle('light');
localStorage.theme=document.body.classList.contains('light')?'light':'dark';
});
document.querySelectorAll('.counter').forEach(el=>{
let t=+el.dataset.target,c=0;
const i=setInterval(()=>{c+=Math.ceil(t/60);if(c>=t){c=t;clearInterval(i)}el.textContent=c+'+'},25);
});
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active')})
});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const s=document.getElementById('searchInput');
if(s){
s.onkeyup=()=>{
let v=s.value.toLowerCase();
document.querySelectorAll('.searchable').forEach(c=>{
c.style.display=c.innerText.toLowerCase().includes(v)?'block':'none';
});
}
}
document.querySelectorAll(".read-more").forEach(button => {
    const card = button.parentElement;
    const content = card.querySelector(".note-content");

    // Check if content is actually longer than 4 lines
    if (content.scrollHeight <= content.clientHeight) {
        button.style.display = "none";
    }

    button.addEventListener("click", () => {
        content.classList.toggle("expanded");

        if (content.classList.contains("expanded")) {
            button.textContent = "Read less";
        } else {
            button.textContent = "Read more";
        }
    });
});


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Save preference
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

// Set initial icon
if (body.classList.contains("dark")) {
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

document.addEventListener('DOMContentLoaded', () => {

    const popup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('closePopup');

    const nav = performance.getEntriesByType("navigation")[0];

    if (
        nav &&
        nav.type !== "reload" &&
        document.referrer.includes(window.location.hostname)
    ) {
        popup.classList.add('popup-hidden');
        return;
    }

    closeBtn?.addEventListener('click', () => {
        popup.classList.add('popup-hidden');
    });

});