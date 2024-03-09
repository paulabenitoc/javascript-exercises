const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const LegendsStreamers = streamers.filter(streamer => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    return true;
  } else {
    return false;
  }
}).map(streamer => {
  if (streamer.age > 35) {
    return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()};
  } else {
    return streamer;
  }
});

console.log(LegendsStreamers);