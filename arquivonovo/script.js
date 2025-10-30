// ====================================================================
// CONTEÚDO DO ARQUIVO: script.js
// ====================================================================

// Garante que o código será executado SÓ DEPOIS que a página HTML carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // VARIÁVEIS GLOBAIS
    const pages = ['home', 'servicos', 'agendamento', 'sobre', 'contato'];
    const pageContents = {};
    pages.forEach(id => {
        const el = document.getElementById(id + '-page');
        if (el) pageContents[id] = el;
    });

    let currentStep = 1;
    const totalSteps = 3;

    // 1. Lógica de Navegação entre as "Páginas" (Seções)
    function showPage(pageId) {
        Object.keys(pageContents).forEach(id => {
            pageContents[id].classList.remove('active'); // Esconde todas
        });
        if (pageContents[pageId]) {
            pageContents[pageId].classList.add('active'); // Mostra a selecionada
            window.scrollTo(0, 0); // Volta ao topo
        }

        if (pageId === 'agendamento') {
            resetAgendamento(); // Reinicia o formulário de agendamento
        }
    }

    // Adiciona event listeners para os links de navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // 2. Lógica do Wizard de Agendamento

    function updateSteps() {
        for (let i = 1; i <= totalSteps; i++) {
            const circle = document.getElementById(`step-${i}-circle`);
            const step = document.getElementById(`agendamento-step-${i}`);

            if (circle) {
                circle.classList.remove('active');
                if (i <= currentStep) {
                    circle.classList.add('active'); // Acende o círculo
                }
            }
            if (step) {
                step.classList.remove('active');
                if (i === currentStep) {
                    step.classList.add('active'); // Mostra o conteúdo
                }
            }
        }
        // Confirmação final
        document.getElementById('agendamento-confirmado').classList.remove('active');
        if (currentStep > totalSteps) {
            document.getElementById('agendamento-confirmado').classList.add('active');
        }
    }

    // Exporta as funções para serem chamadas pelos botões onclick="" no HTML
    window.nextStep = function(stepNumber) {
        // Passo 1: Validação simples
        if (stepNumber === 1 && (!document.getElementById('nome').value || !document.getElementById('telefone').value)) {
            alert("Por favor, preencha nome e telefone.");
            return;
        }

        // Passo 2: Coleta de dados para revisão
        if (stepNumber === 2) {
            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;
            const horaSlot = document.querySelector('.time-slot.selected');
            const hora = horaSlot ? horaSlot.getAttribute('data-time') : 'N/D';

            if (!servico || !data || !horaSlot) {
                alert("Por favor, selecione um serviço, uma data e um horário.");
                return;
            }

            // Atualiza a tela de revisão
            document.getElementById('review-nome').textContent = nome;
            document.getElementById('review-servico').textContent = servico.split('-')[0].trim();
            document.getElementById('review-data-hora').textContent = `${data} às ${hora}`;
        }

        // Passo 3: Confirmação final
        if (stepNumber === 3) {
            const dataHora = document.getElementById('review-data-hora').textContent;
            document.getElementById('confirm-details').textContent = dataHora; // Exibe os dados na tela final
            currentStep = totalSteps + 1; // Move para a tela de confirmação
            updateSteps();
            return;
        }

        if (currentStep <= totalSteps) {
            currentStep++;
            updateSteps();
        }
    }

    window.prevStep = function(stepNumber) {
        if (currentStep > 1) {
            currentStep--;
            updateSteps();
        }
    }

    function resetAgendamento() {
        currentStep = 1;
        updateSteps();
        // Remove seleção de horário
        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.classList.remove('selected', 'bg-custom-yellow', 'text-black');
        });
    }

    // 3. Seleção de Horário (Imita a seleção visual do vídeo)
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            document.querySelectorAll('.time-slot').forEach(s => {
                s.classList.remove('selected', 'bg-custom-yellow', 'text-black');
                s.classList.add('bg-gray-200');
            });
            slot.classList.add('selected', 'bg-custom-yellow', 'text-black');
            slot.classList.remove('bg-gray-200');
        });
    });

    // Execução inicial
    showPage('home');
});