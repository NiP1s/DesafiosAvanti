document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('btnBusca');

  function fazerBusca(event) {
    event.preventDefault(); // impede o comportamento padrão
    const termo = searchInput.value.trim();

    if (termo !== "") {
      alert(`Você buscou por: '${termo}'`);
    }
  }

  // Clique no botão
  searchBtn.addEventListener('click', fazerBusca);

  // Pressionar Enter no input
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      fazerBusca(event);
    }
  });
});
