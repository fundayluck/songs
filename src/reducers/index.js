const songsReducer = () => {
  return [
    { title: "jadikan bagian dari bahagia", duration: "4:30" },
    { title: "harga mati", duration: "3:00" },
    { title: "Jumpa Terakhir", duration: "2:30" },
    { title: "useless", duration: "4:30" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
