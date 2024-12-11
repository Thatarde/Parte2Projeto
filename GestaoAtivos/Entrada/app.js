// Seleção dos elementos
const menuToggle = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const signupPopup = document.getElementById("signup-popup");
const closePopupButton = document.getElementById("close-popup");
const mainButton = document.querySelector(".main-btn");  // Selecionando o botão

// Função para exibir o popup
const showSignupPopup = () => {
    signupPopup.classList.remove("hidden");
  }
  
  // Função para fechar o popup
  const closeSignupPopup = () => {
    signupPopup.classList.add("hidden");
  }
  
  // Abrir popup ao clicar no botão "Iniciar Jornada"
  mainButton.addEventListener("click", showSignupPopup);
  
  // Fechar popup ao clicar no botão "Fechar"
  closePopupButton.addEventListener("click", closeSignupPopup);

// Adiciona ou remove a classe "active" ao clicar no botão
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // Exibe ou esconde o menu
    menuToggle.classList.toggle("active"); // Anima o botão "hambúrguer"
});

// Função para scroll suave e fechar menu ao clicar em links
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const target = document.querySelector(targetID);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // Fecha o menu ao clicar no link (apenas em telas pequenas)
            if (window.innerWidth <= 768) {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        }
    });
});

// Selecionar os elementos
const startButton = document.getElementById('start-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopup = document.getElementById('close-popup');

// Mostrar o popup
startButton.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    popupOverlay.style.display = 'flex';
});

// Fechar o popup
closePopup.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
});

// Fechar ao clicar fora do popup
popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});