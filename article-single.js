// --- 1. DATABASE: محتوای کامل مقالات ---
const fullArticlesDB = [
    {
        id: 1,
        title: 'زمان مناسب برای کوددهی پاییزه و اهمیت آن',
        category: 'آموزشی',
        date: '۲۵ اردیبهشت ۱۴۰۳',
        author: 'مهندس اکبری',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png',
        content: `
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
        `
    },
    {
        id: 2,
        title: 'کشاورزی دقیق با پهپادها: انقلابی در مدیریت مزرعه',
        category: 'تکنولوژی',
        date: '۲۰ اردیبهشت ۱۴۰۳',
        author: 'دکتر حسینی',
        image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png',
        content: `
            <p class="lead font-bold text-lg">تکنولوژی پهپاد (Drone) چهره کشاورزی سنتی را تغییر داده است. از سمپاشی دقیق تا پایش سلامت گیاهان، همه چیز هوشمند شده است.</p>
            
            <h2 class="text-2xl font-bold text-pistachio-600 mt-8 mb-4">مزایای استفاده از پهپاد</h2>
            <p>پهپادهای کشاورزی مجهز به دوربین‌های چندطیفی هستند که می‌توانند وضعیت سبزینگی، تنش آبی و آفات را قبل از اینکه با چشم غیرمسلح دیده شوند، تشخیص دهند.</p>
            
            <h3 class="text-xl font-bold mt-6 mb-2">۱. کاهش مصرف سموم</h3>
            <p>با سمپاشی نقطه‌ای (Spot Spraying)، فقط نقاط آلوده سمپاشی می‌شوند. این کار مصرف سم را تا ۳۰٪ کاهش می‌دهد.</p>

            <h3 class="text-xl font-bold mt-6 mb-2">۲. سرعت بالا</h3>
            <p>یک پهپاد می‌تواند در مدت ۱۰ دقیقه، یک هکتار زمین را سمپاشی کند، کاری که با تراکتور یا روش دستی ساعت‌ها طول می‌کشد.</p>
            
            <img src="https://plus.unsplash.com/premium_photo-1661963206926-3f9418cb315c?q=80&w=1000" class="w-full rounded-xl my-6 shadow-lg" alt="پهپاد سمپاش">

            <p>در نهایت، کشاورزی دقیق به معنای مدیریت بهتر منابع و افزایش سودآوری برای کشاورز است.</p>
        `
    },
    {
        id: 3,
        title: 'حضور مقتدرانه آروند در نمایشگاه بین‌المللی تهران',
        category: 'اخبار',
        date: '۱۵ اردیبهشت ۱۴۰۳',
        author: 'روابط عمومی',
        image: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d',
        content: `
            <p>شرکت آروند امسال نیز همانند سال‌های گذشته، با دست پر در بیست و پنجمین نمایشگاه بین‌المللی کشاورزی، نهاده‌ها و سیستم‌های نوین آبیاری حضور یافت.</p>
            <p class="mt-4">در این رویداد، از ۵ محصول جدید شرکت شامل کودهای مایع نانو و محرک‌های زیستی رونمایی شد که با استقبال بی‌نظیر کشاورزان و کارشناسان روبرو گردید.</p>
            <p class="mt-4">مدیرعامل شرکت آروند در حاشیه این نمایشگاه اعلام کرد: «هدف ما خودکفایی در تولید نهاده‌های باکیفیت و کاهش وابستگی به واردات است.»</p>
        `
    },
    // برای سایر مقالات، محتوای پیش‌فرض لود می‌شود
];

// --- 2. LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    
    // A. THEME TOGGLE (مشابه فایل‌های قبلی)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme', 'dark');
        if(themeIcon) themeIcon.className = 'bx bx-moon text-xl';
    } else {
        body.classList.add('dark-theme', 'dark');
        if(themeIcon) themeIcon.className = 'bx bx-sun text-xl';
    }

    if(themeToggleBtn){
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            body.classList.toggle('dark');
            
            if (body.classList.contains('dark-theme')) {
                themeIcon.className = 'bx bx-sun text-xl';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.className = 'bx bx-moon text-xl';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // B. LOAD ARTICLE DATA
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    // پیدا کردن مقاله در دیتابیس
    const article = fullArticlesDB.find(a => a.id === articleId);

    if (article) {
        // اگر مقاله پیدا شد، اطلاعات را جایگذاری کن
        document.title = `${article.title} | آروند`;
        document.getElementById('crumb-title').innerText = article.title;
        document.getElementById('art-category').innerText = article.category;
        document.getElementById('art-date').innerText = article.date;
        document.getElementById('art-title').innerText = article.title;
        document.getElementById('art-author').innerText = article.author;
        document.getElementById('art-image').src = article.image;
        document.getElementById('art-content').innerHTML = article.content;
    } else {
        // اگر مقاله پیدا نشد (یا ID اشتباه بود)
        document.getElementById('art-content').innerHTML = `
            <div class="text-center py-20">
                <i class='bx bx-error-circle text-6xl text-gray-300 mb-4'></i>
                <h2 class="text-2xl font-bold opacity-70">مقاله مورد نظر یافت نشد!</h2>
                <a href="articles.html" class="text-pistachio-500 mt-4 inline-block hover:underline">بازگشت به لیست مقالات</a>
            </div>
        `;
        document.getElementById('art-title').innerText = 'خطای ۴۰۴';
        document.getElementById('art-image').style.display = 'none';
    }
});