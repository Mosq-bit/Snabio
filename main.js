 // Mobile Menu Toggle - ИСПРАВЛЕННЫЙ КОД
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const menuIcon = document.getElementById('menuIcon');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Правильное переключение иконок
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Закрытие мобильного меню при клике на ссылку
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
        
        // Закрытие мобильного меню при клике вне его
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navLinks.contains(event.target);
            const isClickOnMenuButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnMenuButton && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
        
        // Product category filtering
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const category = button.getAttribute('data-category');
                const products = document.querySelectorAll('.product-card');
                
                products.forEach(product => {
                    if (category === 'all' || product.getAttribute('data-category') === category) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission handling
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For this example, we'll just show an alert
            
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            
            alert(`Спасибо, ${name} из компании "${company}"! Ваш запрос отправлен. Наш менеджер свяжется с вами в ближайшее время.`);
            
            // Reset the form
            contactForm.reset();
        });
        
        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            }
        });