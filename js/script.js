// VALIDAÇÃO DO FORMULÁRIO
document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@")) {
    alert("E-mail inválido!");
    return;
  }

  document.getElementById("msgResposta").innerText =
    "Mensagem enviada com sucesso!";

  this.reset();
});

// BOTÃO TEMA CLARO/ESCURO
document.getElementById("btnTema").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
