// --- 1. DATABASE: محتوای کامل مقالات (دو زبانه) ---
const fullArticlesDB = [
    {
        id: 1,
        title: { fa: 'زمان مناسب برای کوددهی پاییزه', en: 'Best Time for Fall Fertilization' },
        category: { fa: 'آموزشی', en: 'Educational' },
        date: { fa: '۲۵ اردیبهشت ۱۴۰۳', en: 'May 15, 2024' },
        author: { fa: 'مهندس اکبری', en: 'Eng. Akbari' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png',
        content: {
            fa: `
                <p class="lead font-bold text-lg">کوددهی در فصل پاییز یکی از کلیدی‌ترین اقدامات در مدیریت باغ است که تأثیر مستقیمی بر باردهی سال آینده دارد.</p>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">چرا کوددهی پاییزه مهم است؟</h2>
                <p>پس از برداشت محصول، درختان انرژی زیادی از دست داده‌اند. ریشه‌ها در پاییز و قبل از خزان کامل همچنان فعال هستند و می‌توانند مواد غذایی را جذب و ذخیره کنند. این ذخیره انرژی باعث می‌شود درخت در بهار با قدرت بیشتری شکوفه دهد.</p>
                <div class="bg-pistachio-50 dark:bg-pistachio-900/20 border-r-4 border-pistachio-500 p-4 my-6 rounded-l-lg">
                    <strong class="text-pistachio-700 dark:text-pistachio-400">نکته مهم:</strong> بهترین زمان برای چالکود پاییزه، زمانی است که برگ‌ها شروع به زرد شدن می‌کنند اما هنوز کاملاً نریخته‌اند.
                </div>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">چه کودهایی استفاده کنیم؟</h2>
                <ul class="list-disc list-inside space-y-2 marker:text-pistachio-500">
                    <li><strong>کودهای پتاسیم:</strong> برای افزایش مقاومت درخت در برابر سرمازدگی زمستانه.</li>
                    <li><strong>کودهای فسفر:</strong> برای تقویت ریشه‌زایی.</li>
                    <li><strong>کود دامی پوسیده:</strong> برای بهبود بافت خاک و گرم نگه داشتن ریشه.</li>
                </ul>
                <p class="mt-6">فراموش نکنید که استفاده از کودهای ازته (نیتروژن بالا) در این فصل توصیه نمی‌شود، زیرا باعث رشد رویشی بی‌موقع و حساس شدن درخت به سرما می‌گردد.</p>
            `,
            en: `
                <p class="lead font-bold text-lg">Fall fertilization is one of the key steps in orchard management that directly impacts next year's yield.</p>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">Why is Fall Fertilization Important?</h2>
                <p>After harvest, trees have lost a lot of energy. Roots remain active in the fall before full dormancy and can absorb and store nutrients. This energy reserve allows the tree to bloom more vigorously in the spring.</p>
                <div class="bg-pistachio-50 dark:bg-pistachio-900/20 border-l-4 border-pistachio-500 p-4 my-6 rounded-r-lg">
                    <strong class="text-pistachio-700 dark:text-pistachio-400">Important Note:</strong> The best time for fall deep placement fertilization is when leaves start to yellow but haven't fallen completely.
                </div>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">Which Fertilizers to Use?</h2>
                <ul class="list-disc list-inside space-y-2 marker:text-pistachio-500">
                    <li><strong>Potassium Fertilizers:</strong> To increase tree resistance against winter frost.</li>
                    <li><strong>Phosphorus Fertilizers:</strong> To enhance root development.</li>
                    <li><strong>Rotted Animal Manure:</strong> To improve soil texture and keep roots warm.</li>
                </ul>
                <p class="mt-6">Remember, using nitrogen-heavy fertilizers in this season is not recommended, as it triggers untimely vegetative growth and makes the tree sensitive to cold.</p>
            `
        }
    },
    {
        id: 2,
        title: { fa: 'کشاورزی دقیق با پهپادها', en: 'Precision Agriculture with Drones' },
        category: { fa: 'تکنولوژی', en: 'Technology' },
        date: { fa: '۲۰ اردیبهشت ۱۴۰۳', en: 'May 10, 2024' },
        author: { fa: 'دکتر حسینی', en: 'Dr. Hosseini' },
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png',
        content: {
            fa: `
                <p class="lead font-bold text-lg">تکنولوژی پهپاد (Drone) چهره کشاورزی سنتی را تغییر داده است. از سمپاشی دقیق تا پایش سلامت گیاهان، همه چیز هوشمند شده است.</p>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">مزایای استفاده از پهپاد</h2>
                <p>پهپادهای کشاورزی مجهز به دوربین‌های چندطیفی هستند که می‌توانند وضعیت سبزینگی، تنش آبی و آفات را قبل از اینکه با چشم غیرمسلح دیده شوند، تشخیص دهند.</p>
                <h3 class="text-xl font-bold mt-6 mb-2">۱. کاهش مصرف سموم</h3>
                <p>با سمپاشی نقطه‌ای (Spot Spraying)، فقط نقاط آلوده سمپاشی می‌شوند. این کار مصرف سم را تا ۳۰٪ کاهش می‌دهد.</p>
                <h3 class="text-xl font-bold mt-6 mb-2">۲. سرعت بالا</h3>
                <p>یک پهپاد می‌تواند در مدت ۱۰ دقیقه، یک هکتار زمین را سمپاشی کند، کاری که با تراکتور یا روش دستی ساعت‌ها طول می‌کشد.</p>
                <img src="https://plus.unsplash.com/premium_photo-1661963206926-3f9418cb315c?q=80&w=1000" class="w-full rounded-xl my-6 shadow-lg" alt="پهپاد سمپاش">
                <p>در نهایت، کشاورزی دقیق به معنای مدیریت بهتر منابع و افزایش سودآوری برای کشاورز است.</p>
            `,
            en: `
                <p class="lead font-bold text-lg">Drone technology has changed the face of traditional agriculture. From precise spraying to plant health monitoring, everything has become smart.</p>
                <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">Benefits of Using Drones</h2>
                <p>Agricultural drones are equipped with multispectral cameras that can detect greenery status, water stress, and pests before they are visible to the naked eye.</p>
                <h3 class="text-xl font-bold mt-6 mb-2">1. Reduced Pesticide Use</h3>
                <p>With Spot Spraying, only infected areas are sprayed. This reduces pesticide consumption by up to 30%.</p>
                <h3 class="text-xl font-bold mt-6 mb-2">2. High Speed</h3>
                <p>A drone can spray one hectare of land in 10 minutes, a task that takes hours with a tractor or manual method.</p>
                <img src="https://plus.unsplash.com/premium_photo-1661963206926-3f9418cb315c?q=80&w=1000" class="w-full rounded-xl my-6 shadow-lg" alt="Spraying Drone">
                <p>Ultimately, precision agriculture means better resource management and increased profitability for the farmer.</p>
            `
        }
    },
    {
        id: 3,
        title: { fa: 'حضور آروند در نمایشگاه بین‌المللی', en: 'Arvand at International Exhibition' },
        category: { fa: 'اخبار', en: 'News' },
        date: { fa: '۱۵ اردیبهشت ۱۴۰۳', en: 'May 5, 2024' },
        author: { fa: 'روابط عمومی', en: 'Public Relations' },
        image: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d',
        content: {
            fa: `
                <p>شرکت آروند امسال نیز همانند سال‌های گذشته، با دست پر در بیست و پنجمین نمایشگاه بین‌المللی کشاورزی، نهاده‌ها و سیستم‌های نوین آبیاری حضور یافت.</p>
                <p class="mt-4">در این رویداد، از ۵ محصول جدید شرکت شامل کودهای مایع نانو و محرک‌های زیستی رونمایی شد که با استقبال بی‌نظیر کشاورزان و کارشناسان روبرو گردید.</p>
                <p class="mt-4">مدیرعامل شرکت آروند در حاشیه این نمایشگاه اعلام کرد: «هدف ما خودکفایی در تولید نهاده‌های باکیفیت و کاهش وابستگی به واردات است.»</p>
            `,
            en: `
                <p>Arvand Company, like previous years, participated in the 25th International Agricultural Exhibition with a full range of inputs and modern irrigation systems.</p>
                <p class="mt-4">In this event, 5 new products including nano liquid fertilizers and biostimulants were unveiled, which were met with unparalleled reception from farmers and experts.</p>
                <p class="mt-4">The CEO of Arvand stated on the sidelines of the exhibition: "Our goal is self-sufficiency in producing high-quality inputs and reducing dependence on imports."</p>
            `
        }
    }
];

// --- 2. UI TRANSLATIONS (متون ثابت صفحه) ---
const translations = {
    'fa': {
        'brand': 'آروند', 'nav_home': 'صفحه اصلی', 'nav_about': 'معرفی شرکت', 'nav_products': 'محصولات',
        'nav_gallery': 'خدمات و گالری', 'nav_articles': 'مقالات', 'nav_contact': 'تماس با ما',
        'menu_title': 'منوی خدمات', 'cat_chemical': 'کودهای شیمیایی', 'cat_micro': 'ریز مغذی‌ها', 'cat_pesticides': 'سموم و آفات',
        'read_time': 'زمان مطالعه: ۵ دقیقه', 'share': 'اشتراک‌گذاری:', 
        'author_role': 'کارشناس ارشد گیاه پزشکی', 'author_bio': 'با بیش از ۱۰ سال تجربه در زمینه مشاوره کشاورزی و تغذیه گیاهی. علاقه‌مند به ترویج کشاورزی پایدار.',
        'related_arts': 'مقالات مرتبط',
        'related_1_title': 'زمان کوددهی پاییزه', 'related_1_date': '۲۵ اردیبهشت',
        'related_2_title': 'علائم کمبود آهن', 'related_2_date': '۱۰ اردیبهشت',
        'footer_copy': '© ۱۴۰۳ کلیه حقوق محفوظ است', 'footer_design': 'طراحی:', 'footer_dev': 'وب‌مانیا',
        'msg_not_found': 'مقاله مورد نظر یافت نشد!', 'back_list': 'بازگشت به لیست مقالات'
    },
    'en': {
        'brand': 'Arvand', 'nav_home': 'Home', 'nav_about': 'About Us', 'nav_products': 'Products',
        'nav_gallery': 'Gallery & Services', 'nav_articles': 'Articles', 'nav_contact': 'Contact Us',
        'menu_title': 'Service Menu', 'cat_chemical': 'Chemical Fertilizers', 'cat_micro': 'Micronutrients', 'cat_pesticides': 'Pesticides',
        'read_time': 'Read Time: 5 mins', 'share': 'Share:', 
        'author_role': 'Senior Plant Pathologist', 'author_bio': 'Over 10 years of experience in agricultural consulting and plant nutrition. Passionate about sustainable farming.',
        'related_arts': 'Related Articles',
        'related_1_title': 'Fall Fertilization Time', 'related_1_date': 'May 15',
        'related_2_title': 'Iron Deficiency Signs', 'related_2_date': 'April 30',
        'footer_copy': '© 2024 All Rights Reserved', 'footer_design': 'Design:', 'footer_dev': 'WebMania',
        'msg_not_found': 'Article not found!', 'back_list': 'Back to Articles'
    }
};

let currentLang = localStorage.getItem('lang') || 'fa';
const urlParams = new URLSearchParams(window.location.search);
const articleId = parseInt(urlParams.get('id'));

document.addEventListener('DOMContentLoaded', () => {
    
    // Initial Load
    updateLanguage(currentLang);

    // Lang Toggle
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fa' ? 'en' : 'fa';
            updateLanguage(newLang);
        });
    }
});

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.innerText = lang === 'fa' ? 'EN' : 'FA';
    
    // Translate Static UI
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if(el.tagName === 'OPTION') el.innerText = translations[lang][key];
            else if (el.querySelector('i') && !el.querySelector('span')) {
                 el.childNodes.forEach(node => {
                    if(node.nodeType === 3 && node.nodeValue.trim() !== '') node.nodeValue = translations[lang][key];
                 });
            } else if (el.querySelector('span') && !el.classList.contains('group')) {
                el.querySelector('span').innerText = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    localStorage.setItem('lang', lang);
    
    // Render Article Content
    renderArticleContent(lang);
}

function renderArticleContent(lang) {
    const article = fullArticlesDB.find(a => a.id === articleId);

    if (article) {
        document.title = `${article.title[lang]} | ${translations[lang]['brand']}`;
        document.getElementById('crumb-title').innerText = article.title[lang];
        document.getElementById('art-category').innerText = article.category[lang];
        document.getElementById('art-date').innerText = article.date[lang];
        document.getElementById('art-title').innerText = article.title[lang];
        document.getElementById('art-author').innerText = article.author[lang];
        document.getElementById('art-image').src = article.image;
        document.getElementById('art-content').innerHTML = article.content[lang];
    } else {
        document.getElementById('art-content').innerHTML = `
            <div class="text-center py-20">
                <i class='bx bx-error-circle text-6xl text-gray-300 mb-4'></i>
                <h2 class="text-2xl font-bold opacity-70">${translations[lang]['msg_not_found']}</h2>
                <a href="articles.html" class="text-pistachio-500 mt-4 inline-block hover:underline">${translations[lang]['back_list']}</a>
            </div>
        `;
        document.getElementById('art-title').innerText = '404';
        document.getElementById('art-image').style.display = 'none';
        document.getElementById('crumb-title').innerText = '404';
    }
}