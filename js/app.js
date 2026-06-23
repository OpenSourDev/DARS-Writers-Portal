
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


const translations = {

    am: {

        title_home: "ዋና ገፅ",
        title_note: "ማስታወሻዎች",
        title_download: "አውርድ",
        title_contact: "ያግኙን",
        title_desc: "ለ DARS ጸሐፊዎች የማስታወሻዎች፣ ቀድሞ የተዘጋጀ ቴምፕሌቶች፣ ማጣቀሻዎች እና ሙያዊ አጋዥ ይዘቶች መገኛ ማዕከል",
        title_nav: "የ DARS ፀሀፊዎች ፖርታል",
        browse_notes: "ወደ ማስታወሻዎች",
        browse_downloads: "ወደ ማውረጃ",
        title_span: "DARS ፀሀፊዎች",
        title_span_2: "ፖርታል",
        copyright: "2026 DARS ፀሀፊዎች ፖርታል",
        title_downloadd: "⬇️የሚወርዱ ሰነዶች",
        title_downloaddd: "የወረዱ ሰነድች",
        title_resourcess: "የሰነድ ክምችት",
        title_note: "ማስታወሻዎች",
        title_notee: "📚 ማስታወሻዎች",
        title_update: "🚀 አዳዲስ ማሻሻያዎች",
        title_pro: "የባለሙያ መመሪያዎች እና አጋዥ ማስታወሻዎች እና ሰነዶች",
        title_res: "የቅርብ ጊዜ ሰነድ ክምችቶች እና ማስታወሻዎች",
        title_tools: "መሳሪያዎች፣ ምሳሌዎች እና ሰነዶች።",
        title_search: "🔍 ማስታወሻዎችን ከዝርዝሩ ፈልግ...",
        title_search_dl: "🔍 ሰነዶችን ከዝርዝሩ ፈልግ...",
        down_res: "ሰነዶችን አውርድ",
        read_more: "የቀረውን አንብብ",
        


    },

};



const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const lang = button.dataset.lang;

        setLanguage(lang);

        localStorage.setItem("language", lang);

        langButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

    });

});


//Restore Saved Language
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-en]").forEach(element => {

        element.dataset.defaultText = element.textContent;

    });

});

function setLanguage(lang){

    document.querySelectorAll("[data-en]").forEach(element => {

        const key = element.dataset.en;

        // Handle placeholder fields
        if (element.hasAttribute("placeholder")) {

            if (lang === "en") {

                element.setAttribute(
                    "placeholder",
                    element.dataset.defaultPlaceholder
                );

            } else if (
                translations[lang] &&
                translations[lang][key]
            ) {

                element.setAttribute(
                    "placeholder",
                    translations[lang][key]
                );
            }

            return;
        }

        // Normal text elements
        if (lang === "en") {

            if (element.dataset.defaultHtml) {
                element.innerHTML =
                    element.dataset.defaultHtml;
            }

        } else if (
            translations[lang] &&
            translations[lang][key]
        ) {

            element.innerHTML =
                translations[lang][key];
        }

    });
}

document.querySelectorAll("[data-en]").forEach(element => {

    if (element.hasAttribute("placeholder")) {
        element.dataset.defaultPlaceholder =
            element.getAttribute("placeholder");
    }

    element.dataset.defaultHtml =
        element.innerHTML || "";

});

document.querySelectorAll("[data-en]").forEach(element => {

    if (element.hasAttribute("placeholder")) {
        element.dataset.defaultPlaceholder =
            element.getAttribute("placeholder");
    }

    element.dataset.defaultHtml =
        element.innerHTML || "";

});


const langToggle =
    document.getElementById("langToggle");

function updateLanguageButton(lang){

    langToggle.textContent =
        lang === "am" ? "አማ" : "EN";
}

langToggle.addEventListener("click", () => {

    const currentLanguage =
        localStorage.getItem("language") || "en";

    const newLanguage =
        currentLanguage === "en"
        ? "am"
        : "en";

    setLanguage(newLanguage);

    localStorage.setItem(
        "language",
        newLanguage
    );

    updateLanguageButton(
        newLanguage
    );

});