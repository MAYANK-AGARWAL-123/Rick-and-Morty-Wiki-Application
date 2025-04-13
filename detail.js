const urlParams = new URLSearchParams(window.location.search);
const charId = urlParams.get('id');
const characterDetail = document.getElementById('characterDetail');

fetch(`https://rickandmortyapi.com/api/character/${charId}`)
  .then(res => res.json())
  .then(char => {
    const episodes = char.episode.map(ep => `<li>${ep}</li>`).join('');
    characterDetail.innerHTML = `
      <img src="${char.image}" alt="${char.name}" style="width: 300px;" />
      <h2>${char.name}</h2>
      <p>Status: ${char.status}</p>
      <p>Species: ${char.species}</p>
      <p>Type: ${char.type || 'N/A'}</p>
      <p>Gender: ${char.gender}</p>
      <p>Origin: ${char.origin.name}</p>
      <p>Location: ${char.location.name}</p>
      <p>Episode Count: ${char.episode.length}</p>
    `;
  });