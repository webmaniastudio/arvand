document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME TOGGLE (Fix Conflict) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;

    function setIcon() {
        if(html.classList.contains('dark')){
            if(themeIcon) themeIcon.className = 'bx bx-sun text-xl';
        } else {
            if(themeIcon) themeIcon.className = 'bx bx-moon text-xl';
        }
    }
    setIcon();

    if (themeToggleBtn) {
        // Remove previous listeners
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
            // Update icon again
            const icon = document.getElementById('theme-icon');
            if(html.classList.contains('dark')){
                if(icon) icon.className = 'bx bx-sun text-xl';
            } else {
                if(icon) icon.className = 'bx bx-moon text-xl';
            }
        });
    }

    // --- 2. MOBILE MENU ---
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

    // --- 3. COUNTER ANIMATION (Stats Section) ---
    const counters = document.querySelectorAll('.counter');
    
    // استفاده از IntersectionObserver برای اجرای انیمیشن وقتی کاربر اسکرول کرد روی سکشن
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const speed = 200; // هرچه بیشتر باشد کندتر است

                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20); // سرعت آپدیت فریم
                    } else {
                        counter.innerText = target + "+"; // اضافه کردن + در انتها
                    }
                };
                
                updateCount();
                observer.unobserve(counter); // انیمیشن فقط یکبار اجرا شود
            }
        });
    }, { threshold: 0.5 }); // وقتی 50% المنت دیده شد

    counters.forEach(counter => {
        observer.observe(counter);
    });

});