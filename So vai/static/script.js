function adicionarFila() {
  const tipo = document.getElementById("tipo").value;
  const preferencial = document.getElementById("preferencial").value;

  const agora = new Date();
  const hora = agora.getHours();

  if (hora >= 18) {
    alert("Atendimentos encerrados após as 18h.");
    return;
  }

  fetch(`/add/${encodeURIComponent(tipo)}/${preferencial}`)
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      }
    });
}
