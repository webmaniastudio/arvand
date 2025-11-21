// --- GLOBAL FUNCTIONS (برای دسترسی از طریق HTML) ---

// 1. Mobile Menu Functions
const sidebar = document.getElementById('mobile-sidebar');
const sidebarOverlay = document.getElementById('mobile-sidebar-overlay');

window.closeMobileMenu = function() {
    if(sidebar && sidebarOverlay) {
        sidebarOverlay.classList.remove('visible', 'opacity-100');
        sidebarOverlay.classList.add('invisible', 'opacity-0');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }
};

// 2. Modal Logic & Data
const products = {
    'iron': { 
        title: 'Nutrient Iron', 
        desc: 'کود آهن کلات شده با کیفیت بالا (EDDHA)، مناسب برای رفع سریع زردی برگ‌ها در خاک‌های آهکی و شور. حلالیت ۱۰۰٪ در آب.', 
        tbl: 'Fe: 6% | Solubility: 100%',
        img: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-02.jpg?ver=NJt-uIsFtMVaNwPAOm_eow%3d%3d'
    },
    'urea': { 
        title: 'Urea 46%', 
        desc: 'کود اوره گرانوله با درصد خلوص بالا جهت تامین نیتروژن مورد نیاز گیاه در مراحل اولیه رشد رویشی.', 
        tbl: 'N: 46% | Biuret: <1%',
        img: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png'
    },
    'npk': { 
        title: 'NPK 20-20-20', 
        desc: 'کود کامل حاوی عناصر ماکرو (ازت، فسفر، پتاسیم) با نسبت متعادل. مناسب برای تمام مراحل رشد گیاه جهت افزایش تناژ.', 
        tbl: 'N: 20% | P: 20% | K: 20%',
        img: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=500'
    },
    'humic': { 
        title: 'Humic Acid 95%', 
        desc: 'هیومیک اسید پودری جهت اصلاح ساختار خاک، افزایش جذب مواد مغذی و توسعه ریشه گیاهان. کاملاً ارگانیک.', 
        tbl: 'Humic: 70% | Fulvic: 15%',
        img: 'https://images.unsplash.com/photo-1615485925694-a031e934d010?q=80&w=500'
    },
    'delta': { 
        title: 'Deltamethrin 2.5%', 
        desc: 'سم حشره‌کش پایروتروئیدی با اثر تماسی و گوارشی سریع جهت مبارزه با انواع آفات مکنده و جونده.', 
        tbl: 'EC: 2.5% | Type: Pyrethroid',
        img: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10191520251108_Nutrient%20Mang%20copy.png'
    },
    'zinc': { 
        title: 'Zinc Sulfate', 
        desc: 'کود سولفات روی جهت جلوگیری از ریزش شکوفه‌ها و بهبود کیفیت محصول در درختان میوه و محصولات زراعی.', 
        tbl: 'Zn: 34% | Soluble: Yes',
        img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=500'
    }
};

window.openModal = function(id) {
    const p = products[id];
    if(!p) return;
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-desc').innerText = p.desc;
    document.getElementById('modal-table').innerHTML = `<div class="flex justify-between text-gray-600 dark:text-gray-300"><span>آنالیز دقیق:</span><span class="font-bold ltr">${p.tbl}</span></div>`;
    document.getElementById('modal-img').src = p.img;
    document.getElementById('product-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

window.closeModal = function() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

// --- DOM CONTENT LOADED LOGIC ---

document.addEventListener('DOMContentLoaded', () => {

    // 3. Mobile Menu Open Listener
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            if(sidebarOverlay && sidebar) {
                sidebarOverlay.classList.remove('invisible', 'opacity-0');
                sidebarOverlay.classList.add('visible', 'opacity-100');
                sidebar.classList.remove('translate-x-full');
                sidebar.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // 4. Support Button Logic
    const supportBtn = document.getElementById('support-btn');
    const options = document.getElementById('support-options');
    const iconOpen = document.getElementById('btn-icon-open');
    const iconClose = document.getElementById('btn-icon-close');
    let isOpen = false;

    if(supportBtn) {
        supportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isOpen = !isOpen;
            if (isOpen) {
                options.classList.remove('opacity-0', 'invisible', 'translate-y-10');
                iconOpen.classList.add('scale-0', 'opacity-0', 'rotate-90');
                iconClose.classList.remove('scale-0', 'opacity-0', '-rotate-90');
            } else {
                options.classList.add('opacity-0', 'invisible', 'translate-y-10');
                iconOpen.classList.remove('scale-0', 'opacity-0', 'rotate-90');
                iconClose.classList.add('scale-0', 'opacity-0', '-rotate-90');
            }
        });
    }
    document.addEventListener('click', (e) => {
        if (isOpen && !supportBtn.contains(e.target)) {
            isOpen = false;
            options.classList.add('opacity-0', 'invisible', 'translate-y-10');
            iconOpen.classList.remove('scale-0', 'opacity-0', 'rotate-90');
            iconClose.classList.add('scale-0', 'opacity-0', '-rotate-90');
        }
    });

    // 5. Hero Slider
    const sliderTrack = document.getElementById('hero-slider');
    const sliderDots = document.querySelectorAll('.slider-dot');
    if (sliderTrack && sliderDots.length > 0) {
        let currentSlide = 0;
        const totalSlides = sliderDots.length;
        const updateSlider = () => {
            sliderTrack.style.transform = `translateX(${currentSlide * 100}%)`;
            sliderDots.forEach((dot, index) => {
                dot.classList.toggle('bg-pistachio-500', index === currentSlide);
                dot.classList.toggle('w-8', index === currentSlide);
                dot.classList.toggle('bg-white/50', index !== currentSlide);
                dot.classList.toggle('w-3', index !== currentSlide);
            });
        }
        setInterval(() => { currentSlide = (currentSlide + 1) % totalSlides; updateSlider(); }, 5000);
        sliderDots.forEach((dot, index) => { dot.addEventListener('click', () => { currentSlide = index; updateSlider(); }); });
        updateSlider();
    }

    // 6. Scroll Spy
    const sections = document.querySelectorAll('section'); // فقط سکشن‌ها برای تشخیص موقعیت
    const navDots = document.querySelectorAll('.nav-dot');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + (window.innerHeight / 3);
        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) current = section.getAttribute('id');
        });
        navDots.forEach(dot => {
            dot.classList.remove('bg-pistachio-500', 'scale-125');
            dot.classList.add('bg-transparent');
            if (dot.getAttribute('data-target') === current) {
                dot.classList.remove('bg-transparent');
                dot.classList.add('bg-pistachio-500', 'scale-125');
            }
        });
    });

    // 7. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn){
        themeBtn.addEventListener('click', () => {
            const html = document.documentElement;
            const isDark = html.classList.toggle('dark');
            document.getElementById('theme-icon').className = isDark ? 'bx bx-sun text-xl' : 'bx bx-moon text-xl';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // --- 8. DESKTOP CUSTOM SCROLL (بازگردانده شده) ---
    // این بخش باعث می‌شود با چرخاندن موس، صفحه به صورت نرم به سکشن بعدی برود
    const allSectionsAndFooter = document.querySelectorAll('section, footer');
    let isThrottled = false;

    window.addEventListener('wheel', (e) => {
        // شرط‌ها: فقط دسکتاپ، وقتی مودال بسته است، و اسکرول سریع نیست
        if (window.innerWidth < 768) return;
        if (!document.getElementById('product-modal').classList.contains('hidden')) return;

        e.preventDefault(); // جلوگیری از اسکرول پیش‌فرض مرورگر

        if (isThrottled) return;
        if (Math.abs(e.deltaY) < 20) return; // حساسیت موس

        const direction = e.deltaY > 0 ? 1 : -1;
        let currentSectionIndex = 0;
        let minDistance = Infinity;

        // پیدا کردن سکشن فعلی
        allSectionsAndFooter.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const dist = Math.abs(rect.top - 80); // 80px آفست هدر
            if (dist < minDistance) {
                minDistance = dist;
                currentSectionIndex = index;
            }
        });

        let nextIndex = currentSectionIndex + direction;

        // محدود کردن ایندکس
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= allSectionsAndFooter.length) nextIndex = allSectionsAndFooter.length - 1;

        if (nextIndex === currentSectionIndex) return;

        isThrottled = true;
        const target = allSectionsAndFooter[nextIndex];
        const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // تاخیر برای جلوگیری از پرش سریع
        setTimeout(() => { isThrottled = false; }, 1000);
    }, { passive: false });

});