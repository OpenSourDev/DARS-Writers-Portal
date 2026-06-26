
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

    button.addEventListener("click", function() {

        const card = this.closest(".card");

        const content = card.querySelector(".note-content");

        content.classList.toggle("expanded");

        if (content.classList.contains("expanded")) {
            this.textContent = "Read less";
        } else {
            this.textContent = "Read more";
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
        popup_1: "እንኳን ወደ የኢትዮጵያ ፖስታ አገልግሎት ውል እና ማስረጃ ፀሀፊዎች ፖርታል በደህና መጡ",
        popup_2: "ይህንን ድህረ ገጽ መጠቀምዎን በመቀጠል፣ ይህንን ማስታወቂያ እንዳነበቡ እና እንደተረዱት ያረጋግጣሉ።",
        popup_3: "ይህ ድህረ ገጽ ለመረጃ እና ለትምህርታዊ ዓላማዎች ብቻ በባለቤቱ ራሱን የቻለ የተገነባ፣ የሚጠበቅ እና የሚስተናገድ ነው።",
        popup_4: " ከኢትዮጵያ የፖስታ አገልግሎት (EPS)፣ ከፌዴራል ሰነዶች ማረጋገጫ እና ምዝገባ አገልግሎት (FDARS)፣ ወይም ከማንኛውም ቅርንጫፎቻቸው፣ መምሪያዎቻቸው ወይም ተያያዥ አካላት ጋር የተቆራኘ፣ የተደገፈ፣ የተደገፈ ወይም በይፋ የተገናኘ አይደለም።",
        popup_5: "በዚህ ድህረ ገጽ ላይ የሚታዩት ሁሉም አርማዎች፣ የንግድ ምልክቶች፣ የአገልግሎት ምልክቶች፣ የንግድ ምልክቶች እና ሌሎች የአእምሯዊ ንብረቶች የEPS፣ FDARS ወይም ሌሎች የሶስተኛ ወገኖች ንብረት ሆነው ይቆያሉ።",
        popup_6: "በዚህ ድህረ ገጽ ላይ መታየታቸው፥ ለመለየት፣ ለማጣቀሻ ወይም ለመረጃ ዓላማዎች ብቻ ሲሆን ምንም አይነት ሽርክና፣ ድጋፍ፣ ፈቃድ ወይም ኦፊሴላዊ ግንኙነትን አያመለክትም።",
        popup_7: "የድረ ገጹ ባለቤት እዚህ ውስጥ በተጠቀሱት የሶስተኛ ወገን የንግድ ምልክቶች፣ አርማዎች ወይም የምርት ስም ንብረቶች ላይ የባለቤትነት ጥያቄ አያቀርብም።",
        popup_fi: "ተረድቼ፥ ተስማምቻለሁ❗",
        note_0: "የሽያጭ ውል በሶስተኛ ወገን ውክልና",
        note_00: "አንድ ግለሰብ ሶስተኛ ወገን ውክልና ይዞ ማንኛውንም የሚንቀሳቀስም ሆነ የማይንቀሳቀስ ንብረት ለመሸጥ ቢመጣ ሽያጩ ላይ መጀመሪያ የወከለው ግለሰብ እና ሶስተኛ ወገን ተወካዩ ናቸው የሚጠቀሱት።",
        note_0000: "የኪራይ ውል በ ኢ-ካርታ",
        note_000: "አንድ ወይም ከ አንድ በላይ የሆኑ ግለሰቦች ኤሌክትሮኒክ ካርታ/Electronic Map ኖሯቸው የሱን ከለር ፕሪንት አልያም ኮፒ/ግልባጭ ይዘው የኪራይ ውል ለመዋዋል ሲመጡ ውሉን ከ 3 ዓመት በላይ አድርገው መዋዋል አይችሉም።",
        note_ti3: "ስለ ብድር ውል ምስክር",
        note_ti33: "ማንኛውም ግለሰብ ወይም ድርጅት የብድር ውል በመያዣ ለመዋዋል ሲመጣ፥ ግዴታ ሁለት ምስክር ማቅረብ አለበት። የብድር ውሉ ያለመያዣ ከሆነ ግን ምስክር አያስፈልግም።",
        note_ti4: "ሙሉ ውክልና በጋብቻ ሰርተፍኬት",
        note_ti44: "ባል ወይም ሚስት የጋብቻ ሰርተፍኬታቸውን እና በሚስት ወይም ባል ስም የሚገኝ ሊብሬ ይዞ ወይም ይዛ ቢመጣ ወይም ብትመጣ እና ለሚስቴ ወይም ለባሌ መኪናውን በተመለከተ ሙሉ ውክልና ለመስጠት ነው ቢሉ ቀጥታ የቤተሰብ ውክልና አርጎ መስራት ብቻ ነው።",
        note_ti5: "ስለ ብድር ውል እና የጋብቻ ሁኔታ",
        note_ti55: "ማንኛውም አበዳሪ እና ተበዳሪ ግለሰብ /ድርጅቶችን አይጨምርም!/ የትኛውንም አይነት የብድር ውል ለመዋዋል ሲመጣ፥ ግዴታ የሁለቱም ወገን የትዳር ማስረጃ ማለትም ያገባ ከሆነ የጋብቻ ሰርተፍኬት እንዲሁም ያላገባ ከሆነ የያላገባ ሰርተፍኬት ማቅረብ አለባቸው።",
        note_ti6: "ስለ አራተኛ ወገን ውክልና",
        note_ti66: "ቀድሞ የተወከለ ሰው ውክልናውን ለሶስተኛ ወገን አሳልፎ ለመስጠት ሲመጣ ከሲስተም ላይ ውክልናቸውን ለሶስተኛ ወገን አሳልፎ መስጠት ሚለው መምረጥ አይቻልም!! ምክንያቱም ውክልናን ለአራተኛ ወገን አሳልፎ መስጠት አይቻልም።የሽያጭ ውል በሶስተኛ ወገን ውክልና",
        note_ti7: "በማይክሮፋይናንስ ብድር ስለተገዛ መኪና ውክልና",
        note_ti77: "የመኪና ውክልና ላይ አንድ ግለሰብ ከማንኛውም ማይክሮፋይናንስ በተገኘ ብድር ተገዝቶ ሊብሬው የተያዘ መኪናን ውክልና ለመስጠት ሲመጣ በማይክሮፋይናንሱ ስለመያዙ ከሚያሳየው ደብዳቤ በተጨማሪ የተጠቀሰው ማይክሮፋይናንስ በብሄራዊ ባንክ የተመዘገበበት ማስረጃ/ደብዳቤ አብሮ ተያይዞ መቅረብ አለበት።",
        note_ti8: "ቀድሞ የተከፈተ የባንክ አካውንትን የማስተዳደር ውክልና",
        note_ti88: "ቀድሞ የተከፈተ የባንክ አካውንት ላይ ተወካይ ገቢ እና ወጪ እንዲያደርግ ውክልና ለመስጠት የባንክ ቤት ደብዳቤ ሲያቀርቡ፥ የባንክ ቡክ ወይም ደብተር አብረው ማቅረብ አለባቸው። የባንክ ቡክ ቀድሞውኑ ከሌላቸው ደብዳቤው ላይ ያለደብተር ተብሎ መፃፍ አለበት። በሌላ ምክንያት የባንክ ደብተር ከሌለው ደብዳቤው ላይ ፎቶ መደረግ አለበት።",
        note_ti9: "ሽያጭ ውል በሶስተኛ ወገን ውክልና",
        note_ti99: "አንድ ግለሰብ ሶስተኛ ወገን ውክልና ይዞ ማንኛውንም የሚንቀሳቀስም ሆነ የማይንቀሳቀስ ንብረት ለመሸጥ ቢመጣ ሽያጩን ሲስተም ላይ ስናስገባ መጀመሪያ ውክልናውን የሰጠው ግለሰብ እና ሶስተኛ ወገን ተወካዩ ናቸው የሚጠቀሱት። መሀል ላይ የገባው/የተወከለው ሰው አይጠቀስም።",
        note_ti10: "የመኪና ሽያጭ ባል ወይም ሚስት በውክልና ሲስተም ላይ አገባብ",
        note_ti101: "የመኪና ሽያጭ ላይ ባል የሚስት ሙሉ ውክልና ወይም ሚስት የባል ሙሉ ውክልና ካለው ሊብሬውን ይዞ የመጣው አካል ተወካይ ተብሎ ወካዩ ደሞ በውክልናው ላይ አንዳለው ይሆናል።",
        note_ti11: "አጫጭር ማስታወሻዎች",
        note_ti111:"📢 የጉምሩክ ትራንዚት ውክልና ሲስተም ላይ ሲሰራ አስተዳደራዊ ውክና ላይ ነው የሚገባው። 📢 የመኪና ሽያጭ ላይ፥ የሰሌዳው ኮድ 03 ከሆነ ከመንገድ ትራንስፖርት ክሊራንስ መያዝ አለበት 📢 ውክልና ላይ የባንክ ቤት የብድር ውል እንዲፈርሙ መግባት ካለበት ግዴታ ልዩ ውክልና ላይ ነው መግባት ያለበት፥ አስተዳደራዊ ውክልና ላይ መግባት አይችልም።",
        note_ti12: "ነባር የባንክ ሂሳብን በተመለከ ውክልና ስለለመስጠት",
        note_ti121: "ውክልና ሲሰራ ነባር የባንክ ሂሳብ ማስተዳደርን በተመለከተ ከባንክ ቤት ደብዳቤ አፅፈው ቢመጡም እንኳ ሲሰራ ሲስተም ላይ ያለው ከባንክ ቤት ወጪና ገቢ ማድረግ የሚለው ቲክ አይደረግም። ከታች የባንኩ ስም እና የአካውንት ቁጥሩ ተጠቅሶ በሙሉ አረፍተ ነገር ተብራርቶ መፃፍ አለበት። ሞባይል ባንኪንግ እንዲሁም ሌሎች ከባንክ አካውንቱ ጋር ተያያዥነት ያላቸው ነገሮችም መጠቀስ ካለባቸው አብሮ በዝርዝር መፃፍ አለበት።",
        note_ti13: "የመኪና ሙሉ ውክና ላይ ተወካይ የንብረቱ ባለቤት ሲሆንአጫጭር ማስታወሻዎች",
        note_ti131: "አንድ ግለሰብ ከሌሎች ግለሰቦች ጋር የጋራ መኪና ኖሮት ሌሎቹ ግለሰቦች ለሱ ሙሉ ውክልና መስጠት ቢፈልጉ፥ ምንም እንኳ የሱ ስም ሊብሬው ላይ ቢጠቀስም ወካይ ላይ አናስገባውም።አጫጭር ማስታወሻዎች",
        note_ti14: "ግልሰቦች ለግለሰብ ኪራይ ውል",
        note_ti15: "ድርጅት ለግለሰብ ኪራይ ውል",
        note_ti17: "የሽርክና ማህበር መመስረቻ",
        note_ti18: "ቃለመሃላ ወደውጭ ለመውሰድ አባት ለእናት እንግሊዘኛ ብቻ",
        note_ti16: "ቃለጉባኤ የሽርክና ማህበር አዲስ አባል መጨመር",
        note_ti19: "ቃለመሃላ ለስፖርታዊ ውድድር እናትና አባት ለግለሰብ እንግሊዘኛ ብቻ",
        note_ti20: "የንግድ ቤት ኪራይ ባል እና ሚስት በተለያየ ውክልና ለድርጅት",
        note_ti21: "የንግድ ቤት ኪራይ ግልሰብ ከወኪል አድራጊ ባለቤቱ ጋር ለግለሰብ",
        note_ti22: "የመኪና ኪራይ ውል",
        note_ti23: "የንግድ ቤት ኪራይ የውክልና ውክልና ለግለሰብ",
        note_ti24: "የጠበቃ ውክልና ግለሰብ ለጠበቃ ሲስተም ላይ የተሰራ ምሳሌ የሚሆን",
        note_ti25: "ግለሰብ በተለያየ ውክልና ለድርጅት ኪራይ",
        note_ti26: "ከዩንቨርሲቲ ዶክመንት ለማውጣት የተሰጠ ውክልና ሲስተም ላይ የተሰራ ምሳሌ የሚሆን",
        note_ti27: "የጠበቃ ውክልና ድርጅት ለጠበቃ ሲስተም ላይ የተሰራ ምሳሌ የሚሆን",
        note_ti28: "ግለሰብ በተለያየ ውክልና ለድርጅት ኪራይ",
        note_ti29: "ለሁሉም አይነት ውክልናዎች መጨረሻ ላይ የሚቀጠሉግለሰብ በተለያየ ውክልና ለድርጅት ኪራይ",
        note_ti30: "የብድር ውል ማፍረሻ ፎርም",
        note_ti33: "የቤት ሽያጭ ውል ማፍረሻ ፎርም",
        dl: "አውርድ",




        
    },

};



document.querySelectorAll(".lang-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        const lang = this.dataset.lang;

        localStorage.setItem("language", lang);

        location.reload();

    });

});

const savedLang =
    localStorage.getItem("language") || "am";


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

function updateLanguageButton(lang) {
    langToggle.textContent =
        lang === "am" ? "EN" : "አማ";
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLang = localStorage.getItem("language") || "am";

    setLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {

        btn.classList.toggle(
            "active",
            btn.dataset.lang === savedLang
        );

    });

});

document.querySelectorAll(".lang-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const lang = btn.dataset.lang;

        localStorage.setItem("language", lang);

        setLanguage(lang);

        document.querySelectorAll(".lang-btn").forEach(b => {
            b.classList.remove("active");
        });

        btn.classList.add("active");

    });

});

document.addEventListener("DOMContentLoaded", () => {

    // Save original English text
    document.querySelectorAll("[data-en]").forEach(element => {

        element.dataset.defaultHtml = element.innerHTML;

        if (element.hasAttribute("placeholder")) {
            element.dataset.defaultPlaceholder =
                element.placeholder;
        }

    });

    // Get saved language
    const savedLang =
        localStorage.getItem("language") || "en";

    // Apply language immediately
    setLanguage(savedLang);

    // Update button text
    updateLanguageButton(savedLang);

});

document.querySelectorAll(".card").forEach(card => {

    const content = card.querySelector(".note-content");
    const button = card.querySelector(".read-more");

    if (content.scrollHeight <= 40) {
        button.style.display = "none";
    }

});