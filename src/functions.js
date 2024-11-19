const createFaces = (quantity, features, keys, titles, names) => {
  const faces = [];
  const face = [];

  function populateFacesArray(features, n) {
    if (n > features.length - 1) {
      faces.push([...face]);
    } else {
      for (let i = 0; i < features[n].length; i++) {
        face.push(features[n][i]);
        populateFacesArray(features, n + 1);
        face.pop();
      }
    }
  }

  populateFacesArray(features, 0);

  const randomFaces = [];

  for (let i = 0; i < quantity; i++) {
    const randomFace = faces.splice(Math.random() * faces.length, 1)[0];
    let face = {};
    keys.forEach((elem, index) => (face[elem] = randomFace[index]));
    face["visible"] = true;
    face["titles"] = titles;
    face["name"] = names[i];
    randomFaces.push(face);
  }

  return randomFaces;
};

export default createFaces;
