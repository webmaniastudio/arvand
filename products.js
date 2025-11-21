document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME LOGIC (اصلاح شده) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // تابع به‌روزرسانی آیکون
    function updateIcon(isDark) {
        if(themeIcon) {
            themeIcon.className = isDark ? 'bx bx-sun text-xl' : 'bx bx-moon text-xl';
        }
    }

    // بررسی وضعیت فعلی از روی تگ HTML
    const isDarkInitial = document.documentElement.classList.contains('dark');
    updateIcon(isDarkInitial);

    // رویداد کلیک دکمه تغییر تم
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const html = document.documentElement;
            
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateIcon(false);
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateIcon(true);
            }
        });
    }

    // --- 2. MOBILE MENU LOGIC ---
    // (این بخش کد قبلی شما سالم است، نیازی به تغییر نیست)
    const sidebar = document.getElementById('mobile-sidebar');
    const sidebarOverlay = document.getElementById('mobile-sidebar-overlay');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');

    function openMenu() {
        if(!sidebar) return;
        sidebarOverlay.classList.remove('invisible', 'opacity-0');
        sidebarOverlay.classList.add('visible', 'opacity-100');
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
    }

    window.closeMenu = function() {
        if(!sidebar) return;
        sidebarOverlay.classList.remove('visible', 'opacity-100');
        sidebarOverlay.classList.add('invisible', 'opacity-0');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        document.body.style.overflow = 'auto';
    }

    if(mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMenu);
    if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeMenu);
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', closeMenu);

    // --- 3. PRODUCTS DATA ---
    const products = [
        {
            id: 'npk202020',
            title: 'NPK 20-20-20',
            category: 'chemical',
            catName: 'کود شیمیایی',
            image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10191520251108_Nutrient%20Mang%20copy.png',
            desc: 'کود کامل پودری با حلالیت بالا شامل عناصر ماکرو و میکرو.',
            table: [{k:'Nitrogen', v:'20%'}, {k:'Phosphorus', v:'20%'}, {k:'Potassium', v:'20%'}]
        },
        {
            id: 'urea46',
            title: 'Urea 46%',
            category: 'chemical',
            catName: 'کود شیمیایی',
            image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png',
            desc: 'کود اوره گرانوله با درصد نیتروژن بالا برای رشد سریع.',
            table: [{k:'Nitrogen', v:'46%'}, {k:'Biuret', v:'1% Max'}]
        },
        {
            id: 'iron6',
            title: 'Iron Chelate 6%',
            category: 'micro',
            catName: 'ریز مغذی',
            image: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-02.jpg?ver=NJt-uIsFtMVaNwPAOm_eow%3d%3d',
            desc: 'کود آهن کلات شده با EDDHA مناسب برای خاک‌های آهکی.',
            table: [{k:'Iron (Fe)', v:'6%'}, {k:'Ortho-Ortho', v:'4.8%'}]
        },
        {
            id: 'humic_liq',
            title: 'Liquid Humic Acid',
            category: 'growth',
            catName: 'محرک رشد',
            image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10191520251108_Nutrient%20Mang%20copy.png',
            desc: 'اصلاح کننده خاک و افزایش دهنده جذب ریشه.',
            table: [{k:'Humic Acid', v:'12%'}, {k:'Fulvic Acid', v:'3%'}]
        },
        {
            id: 'imida',
            title: 'Imidacloprid',
            category: 'pesticides',
            catName: 'سموم و آفات',
            image: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10092620251108_Nutrient%20Iron%20copy.png',
            desc: 'حشره‌کش سیستمیک برای کنترل آفات مکنده.',
            table: [{k:'Active Ingredient', v:'350 g/l'}, {k:'Type', v:'SC'}]
        }
    ];

    // --- 4. FILTERING LOGIC ---
    const container = document.getElementById('products-container');
    const emptyState = document.getElementById('empty-state');
    const catTitle = document.getElementById('category-title');
    const countBadge = document.getElementById('product-count');

    window.filterProducts = function(category) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            // اصلاح کلاس‌های اکتیو برای دارک مود
            btn.classList.remove('active-filter', 'bg-pistachio-50', 'text-pistachio-600', 'dark:bg-pistachio-900/20', 'dark:text-pistachio-400');
            
            if(btn.dataset.cat === category) {
                btn.classList.add('active-filter', 'bg-pistachio-50', 'text-pistachio-600', 'dark:bg-pistachio-900/20', 'dark:text-pistachio-400');
            }
        });

        const titles = { 'all': 'همه محصولات', 'chemical': 'کودهای شیمیایی', 'micro': 'ریزمغذی‌ها', 'growth': 'محرک‌های رشد', 'pesticides': 'سموم و آفات' };
        if(catTitle) catTitle.innerText = titles[category] || 'محصولات';

        const filtered = category === 'all' ? products : products.filter(p => p.category === category);
        
        if(countBadge) countBadge.innerText = `${filtered.length} محصول`;
        renderGrid(filtered);
    };

    function renderGrid(items) {
        if(!container) return;
        container.innerHTML = '';
        
        if(items.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            items.forEach(product => {
                const card = document.createElement('div');
                card.className = 'bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer border border-gray-100 dark:border-gray-700';
                card.onclick = () => showProductDetail(product);
                
                card.innerHTML = `
                    <div class="h-56 overflow-hidden relative bg-gray-100 dark:bg-gray-700">
                        <img src="${product.image}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="${product.title}">
                    </div>
                    <div class="p-5 text-center">
                        <span class="text-xs font-bold text-pistachio-600 dark:text-pistachio-400 bg-pistachio-50 dark:bg-gray-900 px-2 py-1 rounded mb-2 inline-block">${product.catName}</span>
                        <h3 class="font-bold text-lg text-gray-800 dark:text-white ltr" dir="ltr">${product.title}</h3>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }

    // --- 5. SINGLE VIEW LOGIC ---
    const gridView = document.getElementById('product-grid-view');
    const singleView = document.getElementById('single-product-view');
    const crumbProducts = document.getElementById('crumb-products'); // حالا این المنت وجود دارد
    const crumbDetail = document.getElementById('crumb-detail');

    function showProductDetail(product) {
        gridView.classList.add('hidden');
        singleView.classList.remove('hidden');
        
        crumbDetail.classList.remove('hidden');
        crumbDetail.querySelector('span').innerText = product.title;
        
        if(crumbProducts) crumbProducts.classList.add('text-pistachio-500');

        document.getElementById('detail-img').src = product.image;
        document.getElementById('detail-title').innerText = product.title;
        document.getElementById('detail-cat').innerText = product.catName;
        document.getElementById('detail-desc').innerText = product.desc;
        
        const table = document.getElementById('detail-table');
        table.innerHTML = '';
        product.table.forEach(row => {
            table.innerHTML += `
                <div class="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0">
                    <span class="ltr font-medium text-gray-600 dark:text-gray-400">${row.k}</span>
                    <span class="font-bold text-pistachio-600 dark:text-pistachio-400">${row.v}</span>
                </div>`;
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.backToGrid = function() {
        singleView.classList.add('hidden');
        gridView.classList.remove('hidden');
        crumbDetail.classList.add('hidden');
        if(crumbProducts) crumbProducts.classList.remove('text-pistachio-500');
    };

    // Mobile Select Filter
    const mobileSelect = document.getElementById('mobile-category-select');
    if(mobileSelect) {
        mobileSelect.addEventListener('change', (e) => filterProducts(e.target.value));
    }

    // Initial Load
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('category') || urlParams.get('cat') || 'all';
    filterProducts(initialCat);
});