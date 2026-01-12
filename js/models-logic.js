document.addEventListener("DOMContentLoaded", () => {
    const demoButtons = document.querySelectorAll(".btn-demo");

    demoButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Se você quiser usar o models-demo.html como um wrapper, 
            // podemos passar o template via URL
            const templateTarget = button.getAttribute("href");
            
            // Opcional: Adicionar lógica de log de visualização
            console.log("Visualizando template:", templateTarget);
            
            // A navegação padrão do <a> continuará para a página do template
        });
    });

    // Lógica para o popstate (quando o usuário clica em 'Voltar' no navegador)
    window.addEventListener('popstate', () => {
        if (window.location.pathname.includes('models-demo.html')) {
            location.reload();
        }
    });
});