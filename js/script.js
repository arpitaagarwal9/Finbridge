document.addEventListener('DOMContentLoaded', function() {
    // Login Selection Modal
    const loginBtn = document.querySelector('.btn-login');
    const loginSelection = document.getElementById('loginSelection');
    const closeLogin = document.querySelector('.close-login');
    
    // // Show login selection modal when login button is clicked
    // loginBtn.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     loginSelection.style.display = 'flex';
    // });
    
    // // Close modal when X is clicked
    // closeLogin.addEventListener('click', function() {
    //     loginSelection.style.display = 'none';
    // });
    
    // // Close modal when clicking outside the modal content
    // loginSelection.addEventListener('click', function(e) {
    //     if (e.target === loginSelection) {
    //         loginSelection.style.display = 'none';
    //     }
    // });
    
    // // Handle login option selection
    // const businessLogin = document.getElementById('businessLogin');
    // const caLogin = document.getElementById('caLogin');
    
    // businessLogin.addEventListener('click', function() {
    //     // Redirect to business login page
    //     window.location.href = 'login-business.html';
    // });
    
    // caLogin.addEventListener('click', function() {
    //     // Redirect to CA login page
    //     window.location.href = 'login-ca.html';
    // });

    if (loginBtn && loginSelection && closeLogin) {
        // Show login selection modal when login button is clicked
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginSelection.style.display = 'flex';
        });

        // Close modal when X is clicked
        closeLogin.addEventListener('click', function() {
            loginSelection.style.display = 'none';
        });

        // Close modal when clicking outside the modal content
        loginSelection.addEventListener('click', function(e) {
            if (e.target === loginSelection) {
                loginSelection.style.display = 'none';
            }
        });

        // Handle login option selection
        const businessLogin = document.getElementById('businessLogin');
        const caLogin = document.getElementById('caLogin');

        if (businessLogin) {
            businessLogin.addEventListener('click', function() {
                // Redirect to business login page
                window.location.href = 'login-business.html';
            });
        }

        if (caLogin) {
            caLogin.addEventListener('click', function() {
                // Redirect to CA login page
                window.location.href = 'login-ca.html';
            });
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to steps on scroll
    const steps = document.querySelectorAll('.step');
    
    function animateSteps() {
        steps.forEach((step, index) => {
            const stepPosition = step.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (stepPosition < screenPosition) {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }
    
    // Set initial state for animation
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = 'all 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateSteps);
    window.addEventListener('scroll', animateSteps);

    // Business Login Form Submission
    const businessForm = document.getElementById('businessLoginForm');
    if (businessForm) {
        businessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const pwd = document.getElementById('businessPassword').value.trim();
            if (pwd === 'letmein123') {
                window.location.href = 'request-form.html';  // success redirect
            } else {
                alert('Incorrect password!');
            }
        });
    }

    // CA Login Form Submission
    const caForm = document.getElementById('caLoginForm');
    if (caForm) {
        caForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const pwd = document.getElementById('caPassword').value.trim();
            if (pwd === 'letmein123') {
                window.location.href = 'ca-dashboard.html';  // success redirect
            } else {
                alert('Incorrect password!');
            }
        });
    }

    // Request Form Validation
    const requestForm = document.querySelector('form[action="#"]');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            const description = document.getElementById('description').value.trim();
            const budget = document.getElementById('budget').value.trim();
            if (description.length < 20) {
                alert('Please provide a more detailed description (at least 20 characters).');
                e.preventDefault();
            }
            if (isNaN(budget.replace(/,/g, '')) && budget !== '') {
                alert('Budget must be a valid number (digits only).');
                e.preventDefault();
            }
        });

        // Live budget field formatting (optional)
        const budgetInput = document.getElementById('budget');
        if (budgetInput) {
            budgetInput.addEventListener('input', function () {
                let val = this.value.replace(/[^\d]/g, '');
                this.value = val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            });
        }
    }

    const dashboardTable = document.getElementById('requestTableBody');
    if (dashboardTable) {
        const requests = [
            {
                firmName: "ABC Pvt Ltd",
                entityType: "Private limited co.",
                turnover: "5,000,001 to 10,000,000",
                service: "GST return monthly",
                description: "Monthly GST filing required.",
                startDate: "2025-07-10",
                duration: "3 Months",
                budget: "25,000",
                phone: "9876543210"
            }
        ];

        requests.forEach(req => {
            const row = document.createElement("tr");
            for (const key in req) {
                const td = document.createElement("td");
                td.textContent = req[key];
                row.appendChild(td);
            }
            dashboardTable.appendChild(row);
        });
    }

});




