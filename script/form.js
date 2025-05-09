        function showForm(formType) {
            document.getElementById("loginForm").style.display = (formType === 'login') ? "block" : "none";
            document.getElementById("registerForm").style.display = (formType === 'register') ? "block" : "none";
        }
