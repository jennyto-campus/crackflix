const apiConfig = {
  BASEURL: 'https://api.themoviedb.org/3/',
  apiKey:  '0b1d3d4afbde94967a0fa888ba2438d0',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig