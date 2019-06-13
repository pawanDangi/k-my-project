const login = `auth/sign-in`;
const zones = `zones?page=0&pageSize=100000`;
const createZone = `zones/`;
const updateZone = `zones/`;
const deleteZone = `zones/{{zoneId}}`;
const zone = `zones/{{zoneId}}?page=0&pageSize=100000`;
const provisionedMovie = `zones/{{zoneId}}/provision/movies?page=0&pageSize=100000`;
const movies = `content/movies?page=0&pageSize=100000`;
const ingestedMovies = `zones/{{zoneId}}/ingested/movies`;
const provisionMovies = `zones/provision/movies`;
const createMovie = `content/movies`;
const appliances = `appliances/{{applianceId}}/movies?page=0&pageSize=100000`;
const createAppliance = `appliances`;
const updateAppliance = `appliances`;
const deleteAppliance = `appliances/{{applianceId}}`;
const movieInfo = `content/movies/`;

export {
  login,
  zones,
  createZone,
  updateZone,
  deleteZone,
  zone,
  provisionMovies,
  movies,
  provisionedMovie,
  ingestedMovies,
  createMovie,
  createAppliance,
  appliances,
  updateAppliance,
  deleteAppliance,
  movieInfo,
};
