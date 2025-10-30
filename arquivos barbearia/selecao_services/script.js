document.getElementById("confirmarBtn").addEventListener("click", () => {
   const servicosSelecionados = document.querySelectorAll(
      'input[name="servico"]:checked'
   );

   const logAcoesLista = document.getElementById("log-acoes");
   logAcoesLista.innerHTML = "";

   if (servicosSelecionados.length === 0) {
      console.log("Nenhum serviço foi selecionado.");
      logAcoesLista.innerHTML = "<li>Nenhum serviço selecionado.</li>";
      return;
   }

   if (servicosSelecionados.length > 1) {
      const nomesSelecionados = Array.from(servicosSelecionados).map(
         (cb) => cb.value
      );
      const aviso = document.createElement("li");
      aviso.textContent = `Você selecionou múltiplos serviços: ${nomesSelecionados.join(
         ", "
      )}`;
      aviso.style.fontWeight = "bold";
      logAcoesLista.appendChild(aviso);
   }

   console.log(
      `Iniciando processamento para ${servicosSelecionados.length} serviço(s)...`
   );

   servicosSelecionados.forEach((checkbox) => {
      const nomeDoServico = checkbox.value;
      console.log(`Processando o serviço: ${nomeDoServico}`);
      adicionarAoCarrinho(nomeDoServico);

      const listItem = document.createElement("li");
      listItem.textContent = `Ação para "${nomeDoServico}" foi executada.`;
      logAcoesLista.appendChild(listItem);
   });

   console.log("Processamento finalizado.");
});

function adicionarAoCarrinho(nomeServico) {
   console.log(
      `-> Lógica 'adicionarAoCarrinho' executada para: ${nomeServico}`
   );
}
document.getElementById("confirmarBtn").addEventListener("click", () => {
   const servicosSelecionados = document.querySelectorAll(
      'input[name="servico"]:checked'
   );

   const logAcoesLista = document.getElementById("log-acoes");
   logAcoesLista.innerHTML = "";

   if (servicosSelecionados.length === 0) {
      console.log("Nenhum serviço foi selecionado.");
      logAcoesLista.innerHTML = "<li>Nenhum serviço selecionado.</li>";
      return;
   }

   if (servicosSelecionados.length > 1) {
      const nomesSelecionados = Array.from(servicosSelecionados).map(
         (cb) => cb.value
      );
      const aviso = document.createElement("li");
      aviso.textContent = `Você selecionou múltiplos serviços: ${nomesSelecionados.join(
         ", "
      )}`;
      aviso.style.fontWeight = "bold";
      logAcoesLista.appendChild(aviso);
   }

   console.log(
      `Iniciando processamento para ${servicosSelecionados.length} serviço(s)...`
   );

   servicosSelecionados.forEach((checkbox) => {
      const nomeDoServico = checkbox.value;
      console.log(`Processando o serviço: ${nomeDoServico}`);
      adicionarAoCarrinho(nomeDoServico);

      const listItem = document.createElement("li");
      listItem.textContent = `Ação para "${nomeDoServico}" foi executada.`;
      logAcoesLista.appendChild(listItem);
   });

   console.log("Processamento finalizado.");
});

function adicionarAoCarrinho(nomeServico) {
   console.log(
      `-> Lógica 'adicionarAoCarrinho' executada para: ${nomeServico}`
   );
}
