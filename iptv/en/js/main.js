// 语言切换
async function setLanguage(lang) {
    try {
        const response = await fetch(`i18n/${lang}.json`);
        const translations = await response.json();
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerHTML = translations[key];
            }
        });
        localStorage.setItem('language', lang);
        updateActiveButton(lang);
        // 选择语言后隐藏语言列表
        toggleLanguageList(); 
    } catch (e) {
        console.warn('Failed to load language JSON:', lang);
    }
}

function updateActiveButton(lang) {
    document.querySelectorAll('.language-switcher .btn-1').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}
// 自动检测国家语言
async function detectCountryLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        setLanguage(savedLang);
        return;
    }

    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const countryCode = data.country_code;

        // 定义支持的国家对应语言
        const countryLangMap = {
            FR: 'fr',
            ES: 'es',
            DE: 'de',
            GR: 'el'  // 希腊
        };

        const lang = countryLangMap[countryCode] || 'en';
        setLanguage(lang);
    } catch (e) {
        console.warn('GeoIP lookup failed. Defaulting to English.');
        setLanguage('en');
    }
}

// 切换语言列表显示状态
function toggleLanguageList() {
    const languageList = document.getElementById('languageList');
    languageList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    detectCountryLanguage();
});


const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

//toggle.addEventListener("click", function (event) {
//    nav.classList.toggle('show');
//});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    if (toggle && nav) {
        toggle.addEventListener("click", function (event) {
            nav.classList.toggle('show');
        });
    } else {
        console.warn('未找到 menuToggle 或 navLinks 元素');
    }
});
// 切换版本
function showVersion(version) {
document.getElementById('price-version-1').style.display = version === 1 ? 'block' : 'none';
document.getElementById('price-version-2').style.display = version === 2 ? 'block' : 'none';

// 更新按钮的激活状态
const buttons = document.querySelectorAll('.price-version-buttons button');
buttons.forEach((button, index) => {
    button.classList.toggle('active', index + 1 === version);
});
}

document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.menu-section .section-title, .bar-section .section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });
});

// whatsapp onclick
function Contact() {
    fbq('track', 'AddToCart');
    ttq.track('AddToCart');
    window.location.href = 'https://url66.xyz/s/EXAeqEMox';
}