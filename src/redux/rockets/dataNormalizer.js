/* eslint-disable camelcase */
const normalizer = (data) => {
  const cleanData = {};
  data.forEach((element) => {
    const {
      id, rocket_name, description, flickr_images,
    } = element;

    cleanData[id] = {
      id,
      rocket_name,
      description,
      flickr_images: flickr_images[0],
    };
  });

  return cleanData;
};
export default normalizer;
