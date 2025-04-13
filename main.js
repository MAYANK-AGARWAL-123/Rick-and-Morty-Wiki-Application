let currentPage = 1;
const characterGrid = document.getElementById('characterGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const themeToggle = document.getElementById('themeToggle');

function loadCharacters(page = 1) {
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(data => {
      characterGrid.innerHTML = '';
      data.results.slice(0, 6).forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${char.image}" alt="${char.name}" />
          <div class="card-content">
            <h3>${char.name}</h3>
            <p>${char.species} - ${char.status}</p>
          </div>
        `;
        card.onclick = () => {
          window.open(`character.html?id=${char.id}`, '_blank');
        };
        characterGrid.appendChild(card);
      });
    });
}

prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    loadCharacters(currentPage);
  }
};
nextBtn.onclick = () => {
  currentPage++;
  loadCharacters(currentPage);
};
randomBtn.onclick = () => {
  fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
      const max = data.info.count;
      const randomId = Math.floor(Math.random() * max) + 1;
      window.open(`character.html?id=${randomId}`, '_blank');
    });
};
themeToggle.onclick = () => {
  document.body.classList.toggle('dark-theme');
};

loadCharacters();