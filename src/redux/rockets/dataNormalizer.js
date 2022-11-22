const normalizer = (data) => {
  const cleanData = {};
  data.forEach((element) => {
    const {
      id,
      rocket_name: name,
      description,
      flickr_images: image,
      active,
    } = element;

    cleanData[id] = {
      id,
      name,
      description,
      image: image[0],
      active,
    };
  });

  return cleanData;
};
export default normalizer;
