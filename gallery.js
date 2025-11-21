// --- Gallery Data ---
const galleryItems = [
    { id: 1, category: 'factory', src: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d', title: 'خط تولید کود مایع' },
    { id: 2, category: 'farm', src: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10092620251108_Nutrient%20Iron%20copy.png', title: 'برداشت محصول گندم' },
    { id: 3, category: 'lab', src: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/9183/12085120210920_img1.jpg', title: 'آنالیز نمونه خاک' },
    { id: 4, category: 'factory', src: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-01.jpg?ver=RgncwBsw8KnLVV4jkOJuOg%3d%3d', title: 'انبار محصولات' },
    { id: 5, category: 'farm', src: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/01083920251108_Universal%20copy.png', title: 'مزرعه آفتابگردان' },
    { id: 6, category: 'lab', src: 'https://www.pistaciahome.com/Portals/0/%D9%88%D8%B1%D9%88%D8%AF%DB%8C/Untitled-1-02.jpg?ver=NJt-uIsFtMVaNwPAOm_eow%3d%3d', title: 'آزمایشگاه کنترل کیفیت' },
    { id: 7, category: 'farm', src: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/02095220251108_Nutrient%20Zinc%20copy.png', title: 'آبیاری قطره‌ای' },
    { id: 8, category: 'factory', src: 'https://www.pistaciahome.com/Portals/Modules/Superlinks/14334/10200420251108_Nutrient%20Mixgold%20copy.png', title: 'بسته‌بندی کودها' },
];

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME & MENU LOGIC (Standard) ---
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

    if(themeBtn) {
        const newBtn = themeBtn.cloneNode(true);
        themeBtn.parentNode.replaceChild(newBtn, themeBtn);
        newBtn.addEventListener('click', () => {
            if(html.classList.contains('dark')){
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            setIcon();
        });
    }

    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('mobile-sidebar-overlay');
    const openBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-sidebar-btn');

    if(openBtn) openBtn.onclick = () => {
        overlay.classList.remove('invisible', 'opacity-0');
        overlay.classList.add('visible', 'opacity-100');
        sidebar.classList.remove('translate-x-full');
        sidebar.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
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

    // --- 2. GALLERY RENDER & FILTER ---
    const grid = document.getElementById('gallery-grid');

    window.renderGallery = function(filter) {
        grid.innerHTML = '';
        const items = filter === 'all' ? galleryItems : galleryItems.filter(i => i.category === filter);
        
        let delay = 0;
        items.forEach(item => {
            const div = document.createElement('div');
            // کلاس‌های کارت و انیمیشن
            div.className = 'relative h-64 rounded-2xl overflow-hidden group cursor-pointer animate-fade-in-up';
            div.style.animationDelay = `${delay}ms`;
            delay += 50;

            div.onclick = () => openLightbox(item.src, item.title);

            div.innerHTML = `
                <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 class="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">${item.title}</h3>
                </div>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <i class='bx bx-expand-alt text-xl'></i>
                </div>
            `;
            grid.appendChild(div);
        });
    };

    window.filterGallery = function(filter) {
        // Update Buttons
        document.querySelectorAll('.gallery-filter').forEach(btn => {
            if(btn.dataset.filter === filter) {
                btn.className = 'gallery-filter active bg-pistachio-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap transition hover:shadow-lg shadow-pistachio-500/30';
            } else {
                btn.className = 'gallery-filter bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-pistachio-500 hover:text-white transition';
            }
        });
        renderGallery(filter);
    };

    // Initial Render
    renderGallery('all');

    // --- 3. LIGHTBOX LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(src, title) {
        lightboxImg.src = src;
        lightboxCaption.innerText = title;
        lightbox.classList.remove('hidden');
        // Small delay for fade-in animation
        setTimeout(() => {
            lightbox.classList.remove('opacity-0');
            lightboxImg.classList.remove('scale-90');
            lightboxImg.classList.add('scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        lightboxImg.classList.remove('scale-100');
        lightboxImg.classList.add('scale-90');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
        }, 300);
        document.body.style.overflow = 'auto';
    }

    if(lightboxClose) lightboxClose.onclick = closeLightbox;
    
    // Close on background click
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeLightbox();
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    });

});