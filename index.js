// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  // Add preferences for Drax, Rocket, and Groot
  Drax: "Rock",
  Rocket: "R&B",
  Groot: "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  const playlists = {};

  for (const guardian in guardians) {
    const genre = guardians[guardian];
    playlists[guardian] = songs.filter((song) => song.genre === genre);
  }

  return playlists;
}

// Loop through each Guardian
for (const guardian in guardians) {
  // Filter songs based on the Guardian's preferred genre
  const playlistSongs = songs.filter(
    (song) => song.genre === guardians[guardian]
  );

  // Create playlist ContainerEl element
  const playlistContainerEl = document.createElement("div");
  playlistContainerEl.classList.add("playlist");

  // Create heading for the playlist
  const playlistHeading = document.createElement("h2");
  playlistHeading.textContent = `${guardian}'s Playlist (${guardians[guardian]})`;

  // Append heading to playlist ContainerEl
  playlistContainerEl.appendChild(playlistHeading);

  // Create list for songs
  const songList = document.createElement("ul");

  // Loop through playlist songs and create list items
  playlistSongs.forEach((song) => {
    const listItem = document.createElement("li");
    listItem.classList.add("song");
    listItem.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
    songList.appendChild(listItem);
  });

  // Append song list to playlist ContainerEl
  playlistContainerEl.appendChild(songList);

  // Append playlist ContainerEl to #playlists div in the HTML
  document.getElementById("playlists").appendChild(playlistContainerEl);
}
// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
