document.addEventListener("DOMContentLoaded", () => {
    // 1. ROLAGEM SUAVE PARA OS LINKS DO MENU E DO CABEÇALHO
    const links = document.querySelectorAll('nav a, .hero .btn');
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            
            // Certifica de aplicar a animação apenas para links de âncoras internas
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 2. CONTROLE DOS PLAYERS (IMPEDE DUAS MÚSICAS TOCANDO JUNTO)
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            // Pausa qualquer outro player ativo na página
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });

    // 3. EFEITO VISUAL NO MENU FIXO AO ROLAR A PÁGINA
    const nav = document.querySelector("nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.background = "#050505";
            nav.style.borderBottomColor = "#f00045"; // Destaca a borda em vermelho ao rolar
        } else {
            nav.style.background = "#050505ee";
            nav.style.borderBottomColor = "#222"; // Volta ao cinza original no topo
        }
    });
});
