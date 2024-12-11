//Tema escuro
const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('tema-dark');
    if (document.body.classList.contains('tema-dark')) {
        themeBtn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
        localStorage.setItem('currentTheme', 'dark-theme')
    } else {
        themeBtn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
        localStorage.setItem('currentTheme', '')
    }
})

document.body.className = localStorage.getItem('currentTheme')
if (document.body.classList.contains('dark_theme')) {
    themeBtn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>'
    localStorage.setItem('currentTheme', 'dark-theme')
} else {
    themeBtn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>'
    localStorage.setItem('currentTheme', '')
}

// Carrega o tema ao carregar a página
if (localStorage.getItem('currentTheme') === 'dark-theme') {
    document.body.classList.add('dark-theme'); // Aplica o tema escuro
    themeBtn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
} else {
    themeBtn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
}

//Gráfico
const chart = document.getElementById('chart').getContext('2d');

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Ativo 1',
                data: [29364, 22537, 49631, 57828, 36684, 32692, 33572, 39974, 48847, 48116, 61004, 61004],
                borderColor: "purple",
                borderWidth: 2
            },
            {
                label: "Ativo 2",
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844, 24356],
                borderColor: "#bd56ff",
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
});

