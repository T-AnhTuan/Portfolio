//  --- HIỆU ỨNG GÕ CHỮ (TYPING EFFECT) CHO HERO SECTION ---
if (window.Typed) {
    new Typed('.name-highlight', {
        strings: ['Anh Tuấn', 'Business Analyst..', 'System Analyst..', 'Tech Enthusiast..'],
        typeSpeed: 50, backSpeed: 30, backDelay: 1500, loop: true, smartBackspace: true, showChar: '|'
    });
}
// 1. HEADER KÍNH MỜ
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

// 2. NÚT BACK TO TOP
const btt = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) btt.classList.add("show");
    else btt.classList.remove("show");
});
btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 3. HIỆU ỨNG TRƯỢT LÊN TỪ TỪ (REVEAL) CỰC KỲ MƯỢT
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// 4. HIỆU ỨNG ĐẾM SỐ (KÍCH HOẠT KHI LƯỚT TỚI KHỐI MÀU TÍM CUỐI TRANG)
const statsSection = document.getElementById('stats-trigger');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;
                const isFloat = target % 1 !== 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = isFloat ? target.toFixed(1) : target;
                        clearInterval(timer);
                    } else {
                        counter.innerText = isFloat ? current.toFixed(1) : Math.floor(current);
                    }
                }, stepTime);
            });
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}
