let currentPanel = 1;

// Função para controlar a navegação dos quadrinhos
function nextPanel(panelNumber) {
    const allPanels = document.querySelectorAll(".panel");
    allPanels.forEach(panel => panel.classList.remove("active"));
    document.getElementById("panel" + panelNumber).classList.add("active");
}

// Função para feedback do quiz
function chooseAction(choice) {
    const feedback = document.getElementById("feedback");

    if (choice === 'A') {
        feedback.textContent = "Boa escolha! Falar diretamente com o chefe pode ajudá-lo a expressar seus sentimentos de forma assertiva.";
        feedback.style.color = "green";
    } else if (choice === 'B') {
        feedback.textContent = "Evitar o confronto pode parecer mais fácil, mas a longo prazo pode piorar a situação.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Conversar com um colega pode ajudar, mas é importante também falar com alguém da área de recursos humanos.";
        feedback.style.color = "darkorange";
        feedback.style.fontSize = "20px";
        feedback.style.backgroundColor = "black";
        // Ajusta o fundo para o tamanho do texto e cria o efeito de piscar
        feedback.style.backgroundColor = "#FF8C00";  // Fundo laranja escuro
        feedback.style.padding = "5px";               // Espaçamento interno
        feedback.style.borderRadius = "5px";          // Bordas arredondadas
        feedback.style.display = "inline-block";      // O fundo acompanha o tamanho do texto
        feedback.style.animation = "blink 3s infinite"; // Animação de piscar mais lenta (3 segundos)
    
        // Define a animação "blink" via CSS
        const style = document.createElement('style');
        style.innerHTML = `
          @keyframes blink {
            0% { background-color: black; }
            50% { background-color: transparent; }
            100% { background-color: black; }
          }
        `;
        document.head.appendChild(style);
    }
    
}


// Função para alternar os painéis de quadrinhos
function nextPanel(panelNumber) {
    // Ocultar todos os painéis
    const allPanels = document.querySelectorAll(".panel");
    allPanels.forEach(panel => panel.classList.remove("active"));

    // Mostrar o painel correspondente
    document.getElementById("panel" + panelNumber).classList.add("active");
}

// Função para reiniciar a história
function resetStory() {
    // Ocultar todos os painéis
    const allPanels = document.querySelectorAll(".panel");
    allPanels.forEach(panel => panel.classList.remove("active"));

    // Mostrar o primeiro painel novamente
    document.getElementById("panel1").classList.add("active");
}

// Inicializar o primeiro painel como visível
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("panel1").classList.add("active");
});
