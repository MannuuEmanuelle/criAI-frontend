const API_BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://criai-backend-2.onrender.com";

// Variável global
window.generatedSiteCode = "";

document.addEventListener("DOMContentLoaded", () => {
  const aiForm = document.getElementById("aiForm");
  const generateBtn = document.getElementById("generateBtn");
  const previewContainer = document.getElementById("previewContainer");

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

        if (!response.ok) {
          throw new Error("Erro na resposta do servidor");
        }

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
