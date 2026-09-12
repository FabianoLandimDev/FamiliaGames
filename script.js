document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. EASTER EGG: MODO ARCADE ---
    const logo = document.getElementById('main-logo');
    const body = document.body;
    let clickCount = 0;

    logo.addEventListener('click', () => {
        clickCount++;
        
        // Efeito visual imediato no clique
        logo.style.transform = 'scale(0.9)';
        setTimeout(() => logo.style.transform = 'scale(1)', 100);

        if (clickCount === 5) {
            body.classList.toggle('arcade-mode');
            
            // Mensagem no console para curiosos
            if (body.classList.contains('arcade-mode')) {
                console.log('%c MODO ARCADE ATIVADO! ', 'background: #000; color: #0f0; font-size: 20px; font-weight: bold;');
                alert('🕹️ MODO ARCADE ATIVADO! 🕹️\nBem-vindo aos anos 80!');
            } else {
                alert('🔙 Modo Normal Restaurado.');
            }
            clickCount = 0; // Reseta o contador
        }
    });

    // --- 2. BOTÃO DE DADOS (D20) ---
    const diceBtn = document.getElementById('dice-btn');
    const diceResult = document.getElementById('dice-result');

    diceBtn.addEventListener('click', () => {
        // Gera número entre 1 e 20
        const result = Math.floor(Math.random() * 20) + 1;
        
        diceResult.textContent = `🎲 ${result}`;
        diceResult.classList.add('show');

        // Esconde o resultado após 3 segundos
        setTimeout(() => {
            diceResult.classList.remove('show');
        }, 3000);

        // Animação simples no botão
        diceBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => diceBtn.style.transform = 'rotate(0deg)', 300);
    });

    // --- 3. ANIMAÇÃO AO ROLAR (SCROLL REVEAL) ---
    const observerOptions = {
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                // Para de observar depois que apareceu (opcional)
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
});
