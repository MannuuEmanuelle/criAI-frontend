const API_BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://criai-backend-2.onrender.com";


window.generatedSiteCode = "";

document.addEventListener("DOMContentLoaded", () => {
  const aiForm = document.getElementById("aiForm");
  const generateBtn = document.getElementById("generateBtn");
  const previewContainer = document.getElementById("previewContainer");
  const viewBtn = document.getElementById("viewBtn");

  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      if (window.generatedSiteCode) {
        
        const blob = new Blob([window.generatedSiteCode], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
      } else {
        alert("Nenhum site foi gerado ainda.");
      }
    });
  }
  
  if (aiForm) {
    aiForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const promptValue = document.getElementById("prompt").value.trim();

      generateBtn.disabled = true;
      generateBtn.innerText = "IA está construindo seu catálogo...";
      previewContainer.style.display = "none";

      try {
        const response = await fetch(`${API_BASE_URL}/api/generate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: promptValue })
        });

        const data = await response.json();

        if (data.html) {
          
          window.generatedSiteCode = data.html; 
          previewContainer.style.display = "block";
          alert("Seu site foi gerado pela IA!");
        }
      } catch (err) {
        console.error(err);
        alert("Erro ao gerar o site.");
      } finally {
        generateBtn.disabled = false;
        generateBtn.innerText = "Gerar Catálogo Agora";
      }
    });
  }
});
