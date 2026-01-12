document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Lógica de Login
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Aqui você capturaria os dados para enviar ao backend futuramente
            const email = document.getElementById("loginEmail").value;
            
            console.log("Tentativa de login:", email);
            alert("Login realizado com sucesso! Bem-vindo.");
            
            // Simula persistência de sessão simples
            localStorage.setItem("userLoggedIn", "true");
            window.location.href = "index.html";
        });
    }

    // Lógica de Cadastro
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const name = document.getElementById("regName").value;
            console.log("Novo cadastro:", name);
            
            alert("Conta criada com sucesso! Você já pode fazer login.");
            window.location.href = "login.html";
        });
    }
});