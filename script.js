function generateStory() {
  const names = ["Giana", "Ziggy", "Professor Wobble"];
  const places = ["moon", "library", "underwater cave"];
  const actions = ["danced", "screamed", "teleported"];

  const name = names[Math.floor(Math.random() * names.length)];
  const place = places[Math.floor(Math.random() * places.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];

  const story = `${name} ${action} in the ${place}!`;
  document.getElementById("story").textContent = story;
}
