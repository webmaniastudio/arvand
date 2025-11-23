// --- 1. DATABASE (دیتابیس مقالات - دو زبانه) ---
const articlesDB = [
    {
        id: 1,
        category: 'educational',
        title: { fa: 'زمان مناسب برای کوددهی پاییزه', en: 'Best Time for Fall Fertilization' },
        excerpt: { 
            fa: 'کوددهی در فصل پاییز یکی از مهم‌ترین مراحل برای آماده‌سازی درختان جهت باردهی در سال آینده است. در این مقاله بهترین زمان و نوع کود را بررسی می‌کنیم.', 
            en: 'Fall fertilization is critical for preparing trees for next year\'s yield. We review the best time and fertilizer types.' 
        },
        date: { fa: '۲۵ اردیبهشت ۱۴۰۳', en: 'May 15, 2024' },
        author: { fa: 'مهندس اکبری', en: 'Eng. Akbari' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png'
    },
    {
        id: 2,
        category: 'tech',
        title: { fa: 'کشاورزی دقیق با پهپادها', en: 'Precision Agriculture with Drones' },
        excerpt: { 
            fa: 'استفاده از پهپادها برای سمپاشی و پایش مزارع باعث کاهش چشمگیر هزینه‌ها و افزایش بهره‌وری شده است. تکنولوژی‌های جدید چگونه کار می‌کنند؟', 
            en: 'Using drones for spraying and monitoring farms significantly reduces costs. How do these new technologies work?' 
        },
        date: { fa: '۲۰ اردیبهشت ۱۴۰۳', en: 'May 10, 2024' },
        author: { fa: 'دکتر حسینی', en: 'Dr. Hosseini' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png'
    },
    {
        id: 3,
        category: 'news',
        title: { fa: 'حضور آروند در نمایشگاه بین‌المللی', en: 'Arvand at International Exhibition' },
        excerpt: { 
            fa: 'شرکت آروند امسال با معرفی ۵ محصول جدید در نمایشگاه بین‌المللی کشاورزی تهران حضور خواهد داشت. منتظر دیدار شما در سالن ۳۸ هستیم.', 
            en: 'Arvand participates in the Tehran International Agricultural Exhibition introducing 5 new products. Visit us at Hall 38.' 
        },
        date: { fa: '۱۵ اردیبهشت ۱۴۰۳', en: 'May 5, 2024' },
        author: { fa: 'روابط عمومی', en: 'Public Relations' },
        image: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d'
    },
    {
        id: 4,
        category: 'educational',
        title: { fa: 'علائم کمبود آهن در گیاهان', en: 'Signs of Iron Deficiency' },
        excerpt: { 
            fa: 'زرد شدن برگ‌های جوان در حالی که رگبرگ‌ها سبز باقی می‌مانند، نشانه چیست؟ راهنمای کامل تشخیص و درمان کلروز آهن.', 
            en: 'Yellowing of young leaves while veins remain green? A complete guide to diagnosing and treating iron chlorosis.' 
        },
        date: { fa: '۱۰ اردیبهشت ۱۴۰۳', en: 'April 30, 2024' },
        author: { fa: 'مهندس سهرابی', en: 'Eng. Sohrabi' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/12332720251108_super%20sop%20copy.png'
    },
    {
        id: 5,
        category: 'educational',
        title: { fa: 'تأثیر هیومیک اسید بر ریشه‌زایی', en: 'Effect of Humic Acid on Rooting' },
        excerpt: { 
            fa: 'اسید هیومیک چگونه ساختار خاک را اصلاح می‌کند و باعث جذب بهتر مواد مغذی توسط ریشه می‌شود؟', 
            en: 'How does humic acid improve soil structure and enhance nutrient absorption by roots?' 
        },
        date: { fa: '۰۵ اردیبهشت ۱۴۰۳', en: 'April 25, 2024' },
        author: { fa: 'تیم تحقیقات', en: 'Research Team' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png'
    },
    {
        id: 6,
        category: 'tech',
        title: { fa: 'سیستم‌های آبیاری هوشمند', en: 'Smart Irrigation Systems' },
        excerpt: { 
            fa: 'کاهش مصرف آب تا ۴۰ درصد با استفاده از سنسورهای رطوبت خاک و کنترلرهای هوشمند آبیاری.', 
            en: 'Reduce water consumption by up to 40% using soil moisture sensors and smart irrigation controllers.' 
        },
        date: { fa: '۰۱ اردیبهشت ۱۴۰۳', en: 'April 20, 2024' },
        author: { fa: 'مهندس رضایی', en: 'Eng. Rezaei' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10191520251108_Nutrient%20Mang%20copy.png'
    }
];

// --- 2. CONFIG & TRANSLATIONS ---
const categoryColors = {
    'educational': 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
    'news': 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300',
    'tech': 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300'
};

const translations = {
    'fa': {
        'brand': 'آروند', 'nav_home': 'صفحه اصلی', 'nav_about': 'معرفی شرکت', 'nav_products': 'محصولات',
        'nav_gallery': 'خدمات و گالری', 'nav_articles': 'مقالات', 'nav_contact': 'تماس با ما',
        'menu_title': 'منوی خدمات', 'cat_chemical': 'کودهای شیمیایی', 'cat_micro': 'ریز مغذی‌ها', 'cat_pesticides': 'سموم و آفات',
        
        'crumb_articles': 'مقالات و دانستنی‌ها',
        'page_title': 'وبلاگ کشاورزی',
        'page_subtitle': 'جدیدترین اخبار و مقالات علمی حوزه کشاورزی',
        
        'filter_all': 'همه مطالب',
        'filter_edu': 'آموزشی',
        'filter_news': 'اخبار شرکت',
        'filter_tech': 'تکنولوژی',
        
        'cat_educational': 'آموزشی',
        'cat_news': 'اخبار',
        'cat_tech': 'تکنولوژی',
        
        'read_more': 'ادامه مطلب',
        'msg_empty': 'مقاله‌ای در این دسته یافت نشد.',
        'footer_copy': '© ۱۴۰۳ کلیه حقوق محفوظ است',
        'footer_design': 'طراحی:',
        'footer_dev': 'وب‌مانیا'
    },
    'en': {
        'brand': 'Arvand', 'nav_home': 'Home', 'nav_about': 'About Us', 'nav_products': 'Products',
        'nav_gallery': 'Gallery & Services', 'nav_articles': 'Articles', 'nav_contact': 'Contact Us',
        'menu_title': 'Services Menu', 'cat_chemical': 'Chemical Fertilizers', 'cat_micro': 'Micronutrients', 'cat_pesticides': 'Pesticides',
        
        'crumb_articles': 'Articles & Insights',
        'page_title': 'Agriculture Blog',
        'page_subtitle': 'Latest news and scientific articles in agriculture',
        
        'filter_all': 'All Posts',
        'filter_edu': 'Educational',
        'filter_news': 'Company News',
        'filter_tech': 'Technology',
        
        'cat_educational': 'Educational',
        'cat_news': 'News',
        'cat_tech': 'Technology',
        
        'read_more': 'Read More',
        'msg_empty': 'No articles found in this category.',
        'footer_copy': '© 2024 All Rights Reserved',
        'footer_design': 'Design:',
        'footer_dev': 'WebMania'
    }
};

// --- 3. STATE MANAGEMENT ---
let currentLang = localStorage.getItem('lang') || 'fa';
let currentFilter = 'all';

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Setup Components
    setupTheme();
    setupMobileMenu();
    
    // Setup Language
    updateLanguage(currentLang);

    // Event Listener for Lang Toggle
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fa' ? 'en' : 'fa';
            updateLanguage(newLang);
        });
    }
});

// --- 5. CORE FUNCTIONS ---

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    
    // Update Toggle Button Text
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.innerText = lang === 'fa' ? 'EN' : 'FA';
    
    // Translate Static Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if(el.tagName === 'OPTION') el.innerText = translations[lang][key];
            else if (el.querySelector('i') && !el.querySelector('span')) {
                 // Handle elements with icons but no span wrapper for text (rare case)
                 el.childNodes.forEach(node => {
                    if(node.nodeType === 3 && node.nodeValue.trim() !== '') node.nodeValue = translations[lang][key];
                 });
            } else if (el.querySelector('span') && !el.classList.contains('group')) {
                // Handle buttons with spans
                el.querySelector('span').innerText = translations[lang][key];
            } else {
                // Standard text replacement
                el.textContent = translations[lang][key];
            }
        }
    });

    localStorage.setItem('lang', lang);
    
    // Re-render Articles with new language
    renderArticles(currentFilter);
}

function renderArticles(filter) {
    currentFilter = filter;
    const container = document.getElementById('articles-container');
    container.innerHTML = ''; 

    const filteredArticles = (filter === 'all') 
        ? articlesDB 
        : articlesDB.filter(article => article.category === filter);

    let delay = 0;

    if (filteredArticles.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-20 opacity-60 dark:text-gray-300 text-lg">${translations[currentLang]['msg_empty']}</div>`;
        return;
    }

    filteredArticles.forEach(article => {
        // Get Localized Data
        const title = article.title[currentLang];
        const excerpt = article.excerpt[currentLang];
        const date = article.date[currentLang];
        const author = article.author[currentLang];
        
        // Get Localized Category Label
        const catKey = `cat_${article.category}`;
        const catLabel = translations[currentLang][catKey] || article.category;

        const card = document.createElement('article');
        card.className = 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-gray-700 flex flex-col h-full opacity-0 animate-fade-in-up';
        card.style.animationDelay = `${delay}ms`;
        delay += 100;

        // HTML Construction
        card.innerHTML = `
            <div class="relative h-52 overflow-hidden group">
                <img src="${article.image}" alt="${title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                <div class="absolute top-4 right-4 rtl:right-4 ltr:left-4 rtl:left-auto ltr:right-auto ${categoryColors[article.category]} text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    ${catLabel}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow text-gray-800 dark:text-gray-200">
                <div class="flex items-center gap-2 text-xs opacity-60 mb-3 dark:text-gray-400">
                    <i class='bx bx-calendar'></i>
                    <span>${date}</span>
                    <span class="mx-1">|</span>
                    <i class='bx bx-user'></i>
                    <span>${author}</span>
                </div>
                
                <a href="article-single.html?id=${article.id}" class="block">
                    <h2 class="text-xl font-bold mb-3 hover:text-pistachio-500 transition cursor-pointer leading-snug dark:text-white">
                        ${title}
                    </h2>
                </a>
                
                <p class="text-sm opacity-80 leading-7 mb-4 flex-grow text-justify dark:text-gray-300">
                    ${excerpt}
                </p>
                
                <div class="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <a href="article-single.html?id=${article.id}" class="text-pistachio-500 text-sm font-bold hover:text-pistachio-600 transition flex items-center gap-1 group/btn">
                        ${translations[currentLang]['read_more']}
                        <i class='bx bx-left-arrow-alt rtl:rotate-0 ltr:rotate-180 text-lg group-hover/btn:-translate-x-1 rtl:group-hover/btn:-translate-x-1 ltr:group-hover/btn:translate-x-1 transition'></i>
                    </a>
                    
                    <button class="text-gray-400 hover:text-red-500 transition" onclick="this.classList.toggle('text-red-500'); this.querySelector('i').classList.toggle('bxs-heart'); this.querySelector('i').classList.toggle('bx-heart')">
                        <i class='bx bx-heart text-xl'></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterArticles(cat) {
    // Update Buttons UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.cat === cat) {
            btn.className = 'filter-btn active bg-pistachio-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap transition shadow-md shadow-pistachio-500/20';
        } else {
            btn.className = 'filter-btn bg-transparent border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:border-pistachio-500 hover:text-pistachio-500 transition';
        }
    });
    // Render
    renderArticles(cat);
}

// --- 6. SHARED UTILS (Theme & Mobile Menu) ---

function setupTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    function setIcon() {
        if(html.classList.contains('dark')) {
            if(themeIcon) themeIcon.className = 'bx bx-sun text-xl';
        } else {
            if(themeIcon) themeIcon.className = 'bx bx-moon text-xl';
        }
    }
    setIcon();

    if (themeBtn) {
        const newBtn = themeBtn.cloneNode(true);
        themeBtn.parentNode.replaceChild(newBtn, themeBtn);
        newBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            setIcon();
        });
    }
}

function setupMobileMenu() {
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    if(openBtn) {
        openBtn.onclick = () => {
            overlay.classList.remove('invisible', 'opacity-0');
            overlay.classList.add('visible', 'opacity-100');
            sidebar.classList.remove('translate-x-full', 'rtl:translate-x-full', 'ltr:translate-x-full');
            sidebar.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        }
    }

    const closeMenu = () => {
        overlay.classList.remove('visible', 'opacity-100');
        overlay.classList.add('invisible', 'opacity-0');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full', 'rtl:translate-x-full', 'ltr:translate-x-full');
        document.body.style.overflow = 'auto';
    }

    if(closeBtn) closeBtn.onclick = closeMenu;
    if(overlay) overlay.onclick = closeMenu;
}