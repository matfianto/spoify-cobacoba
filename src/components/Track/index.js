const Track = (props) => {
  const { imageUrl, albumName, songTitle, songArtist, onSelect, selectState } = props;

  return (
    <li className="song-track">
      <img src={imageUrl} alt={albumName} className="album-image" />
      <div className="song-info">
        <h1 className="song-title">{songTitle}</h1>
        <h2 className="song-artist">{songArtist}</h2>
        <button className="btn btn--select" onClick={onSelect}>
          {selectState ? "Deselect" : "Select"}
        </button>
      </div>
    </li>
  );
};

export default Track;
