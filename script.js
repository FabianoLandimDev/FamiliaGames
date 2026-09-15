document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. EASTER EGG: MODO ARCADE (5 cliques no logo)
    // ==========================================
    const logo = document.getElementById('main-logo');
    const body = document.body;
    let clickCount = 0;

    if (logo) {
        logo.addEventListener('click', () => {
            clickCount++;
            logo.style.transform = 'scale(0.9)';
            setTimeout(() => logo.style.transform = 'scale(1)', 100);

            if (clickCount === 5) {
                body.classList.toggle('arcade-mode');
                if (body.classList.contains('arcade-mode')) {
                    console.log('%c MODO ARCADE ATIVADO! ', 'background: #000; color: #0f0; font-size: 20px; font-weight: bold;');
                    alert('🕹️ MODO ARCADE ATIVADO! 🕹️\nBem-vindo aos anos 80!');
                } else {
                    alert('🔙 Modo Normal Restaurado.');
                }
                clickCount = 0;
            }
        });
    }

    // ==========================================
    // 2. BOTÃO DE DADOS (D20)
    // ==========================================
    const diceBtn = document.getElementById('dice-btn');
    const diceResult = document.getElementById('dice-result');

    if (diceBtn && diceResult) {
        diceBtn.addEventListener('click', () => {
            const result = Math.floor(Math.random() * 20) + 1;
            diceResult.textContent = `🎲 ${result}`;
            diceResult.classList.add('show');

            setTimeout(() => {
                diceResult.classList.remove('show');
            }, 3000);

            diceBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => diceBtn.style.transform = 'rotate(0deg)', 300);
        });
    }

    // ==========================================
    // 3. ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
    // ==========================================
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    // ==========================================
    // 4. CONTADOR DE VISITANTES (LocalStorage)
    // ==========================================
    // Nota: Como o site é estático (sem banco de dados), este contador 
    // simula a experiência salvando no navegador do usuário. 
    // Para um contador global real, seria necessário um backend ou API paga.
    const countElement = document.getElementById('visitor-count');
    if (countElement) {
        let count = localStorage.getItem('familiaGames_visits');
        if (!count) {
            count = Math.floor(Math.random() * 50) + 10; // Começa com um número base aleatório para dar "prova social"
        } else {
            count = parseInt(count);
        }
        
        count++;
        localStorage.setItem('familiaGames_visits', count.toString());
        countElement.textContent = count.toLocaleString('pt-BR') + ' XP';
    }
});
