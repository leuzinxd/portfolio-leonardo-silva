// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

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

// Alternar tema claro/escuro
document.getElementById("btnTema").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
