var playlist = {
  'Slow Dive': 'Allison',
  'My Bloody Valentine': 'Sometimes',
};


var updatePlaylist = (playlist, artistName, songTitle) => {
  updatePlaylist['Phil Ochs'] = 'Here\'s to the State of Mississippi';
  return updatePlaylist;
};

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist['Slow Drive'];
};