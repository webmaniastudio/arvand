// --- DATABASE (اطلاعات مقالات) ---
const articlesDB = [
    {
        id: 1,
        category: 'educational',
        title: 'زمان مناسب برای کوددهی پاییزه',
        excerpt: 'کوددهی در فصل پاییز یکی از مهم‌ترین مراحل برای آماده‌سازی درختان جهت باردهی در سال آینده است. در این مقاله بهترین زمان و نوع کود را بررسی می‌کنیم.',
        date: '۲۵ اردیبهشت ۱۴۰۳',
        author: 'مهندس اکبری',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png'
    },
    {
        id: 2,
        category: 'tech',
        title: 'کشاورزی دقیق با پهپادها',
        excerpt: 'استفاده از پهپادها برای سمپاشی و پایش مزارع باعث کاهش چشمگیر هزینه‌ها و افزایش بهره‌وری شده است. تکنولوژی‌های جدید چگونه کار می‌کنند؟',
        date: '۲۰ اردیبهشت ۱۴۰۳',
        author: 'دکتر حسینی',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png'
    },
    {
        id: 3,
        category: 'news',
        title: 'حضور آروند در نمایشگاه بین‌المللی',
        excerpt: 'شرکت آروند امسال با معرفی ۵ محصول جدید در نمایشگاه بین‌المللی کشاورزی تهران حضور خواهد داشت. منتظر دیدار شما در سالن ۳۸ هستیم.',
        date: '۱۵ اردیبهشت ۱۴۰۳',
        author: 'روابط عمومی',
        image: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d'
    },
    {
        id: 4,
        category: 'educational',
        title: 'علائم کمبود آهن در گیاهان',
        excerpt: 'زرد شدن برگ‌های جوان در حالی که رگبرگ‌ها سبز باقی می‌مانند، نشانه چیست؟ راهنمای کامل تشخیص و درمان کلروز آهن.',
        date: '۱۰ اردیبهشت ۱۴۰۳',
        author: 'مهندس سهرابی',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/12332720251108_super%20sop%20copy.png'
    },
    {
        id: 5,
        category: 'educational',
        title: 'تأثیر هیومیک اسید بر ریشه‌زایی',
        excerpt: 'اسید هیومیک چگونه ساختار خاک را اصلاح می‌کند و باعث جذب بهتر مواد مغذی توسط ریشه می‌شود؟',
        date: '۰۵ اردیبهشت ۱۴۰۳',
        author: 'تیم تحقیقات',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png'
    },
    {
        id: 6,
        category: 'tech',
        title: 'سیستم‌های آبیاری هوشمند',
        excerpt: 'کاهش مصرف آب تا ۴۰ درصد با استفاده از سنسورهای رطوبت خاک و کنترلرهای هوشمند آبیاری.',
        date: '۰۱ اردیبهشت ۱۴۰۳',
        author: 'مهندس رضایی',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10191520251108_Nutrient%20Mang%20copy.png'
    }
];

const categoryLabels = {
    'educational': 'آموزشی',
    'news': 'اخبار',
    'tech': 'تکنولوژی'
};

const categoryColors = {
    'educational': 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
    'news': 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300',
    'tech': 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300'
};

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLE LOGIC (Fix Conflict) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Set Initial Icon
    function setIcon() {
        if(html.classList.contains('dark')){
            if(themeIcon) themeIcon.className = 'bx bx-sun text-xl';
        } else {
            if(themeIcon) themeIcon.className = 'bx bx-moon text-xl';
        }
    }
    setIcon();

    if (themeToggleBtn) {
        // Clone node to remove any previous listeners from other scripts
        const newBtn = themeToggleBtn.cloneNode(true);
        themeToggleBtn.parentNode.replaceChild(newBtn, themeToggleBtn);

        newBtn.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            // Update Icon
            const icon = document.getElementById('theme-icon');
            if(html.classList.contains('dark')){
                if(icon) icon.className = 'bx bx-sun text-xl';
            } else {
                if(icon) icon.className = 'bx bx-moon text-xl';
            }
        });
    }

    // --- 2. MOBILE MENU LOGIC ---
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    if(openBtn) {
        openBtn.onclick = () => {
            overlay.classList.remove('invisible', 'opacity-0');
            overlay.classList.add('visible', 'opacity-100');
            sidebar.classList.remove('translate-x-full');
            sidebar.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        }
    }

    const closeMenu = () => {
        overlay.classList.remove('visible', 'opacity-100');
        overlay.classList.add('invisible', 'opacity-0');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }

    if(closeBtn) closeBtn.onclick = closeMenu;
    if(overlay) overlay.onclick = closeMenu;

    // --- 3. RENDER ARTICLES ---
    renderArticles('all');
});

// --- FUNCTIONS ---

function renderArticles(filter) {
    const container = document.getElementById('articles-container');
    container.innerHTML = ''; 

    const filteredArticles = (filter === 'all') 
        ? articlesDB 
        : articlesDB.filter(article => article.category === filter);

    let delay = 0;

    if (filteredArticles.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-20 opacity-60 dark:text-gray-300">مقاله‌ای در این دسته یافت نشد.</div>`;
        return;
    }

    filteredArticles.forEach(article => {
        const card = document.createElement('article');
        card.className = 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300 border border-transparent dark:border-gray-700 flex flex-col h-full opacity-0 animate-fade-in-up';
        card.style.animationDelay = `${delay}ms`;
        delay += 100;

        card.innerHTML = `
            <div class="relative h-52 overflow-hidden group">
                <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                <div class="absolute top-4 right-4 ${categoryColors[article.category]} text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    ${categoryLabels[article.category]}
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow text-gray-800 dark:text-gray-200">
                <div class="flex items-center gap-2 text-xs opacity-60 mb-3 dark:text-gray-400">
                    <i class='bx bx-calendar'></i>
                    <span>${article.date}</span>
                    <span class="mx-1">|</span>
                    <i class='bx bx-user'></i>
                    <span>${article.author}</span>
                </div>
                
                <a href="article-single.html?id=${article.id}" class="block">
                    <h2 class="text-xl font-bold mb-3 hover:text-pistachio-500 transition cursor-pointer leading-snug dark:text-white">
                        ${article.title}
                    </h2>
                </a>
                
                <p class="text-sm opacity-80 leading-7 mb-4 flex-grow text-justify dark:text-gray-300">
                    ${article.excerpt}
                </p>
                
                <div class="pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <a href="article-single.html?id=${article.id}" class="text-pistachio-500 text-sm font-bold hover:text-pistachio-600 transition flex items-center gap-1 group/btn">
                        ادامه مطلب
                        <i class='bx bx-left-arrow-alt text-lg group-hover/btn:-translate-x-1 transition'></i>
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
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.cat === cat) {
            btn.className = 'filter-btn active bg-pistachio-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap transition shadow-md shadow-pistachio-500/20';
        } else {
            btn.className = 'filter-btn bg-transparent border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:border-pistachio-500 hover:text-pistachio-500 transition';
        }
    });
    renderArticles(cat);
}