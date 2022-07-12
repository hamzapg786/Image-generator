const randomImage = (size = 10) => {
  let imageUrls = [];
  const URL = "https://picsum.photos/700/700?random=";

  for (let i = 0; i < size; i++) {
    const newURL = URL + Math.floor(Math.random() * 100);
    imageUrls.push(newURL);
  }
  return imageUrls;
};

export default randomImage;
