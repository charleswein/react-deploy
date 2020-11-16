const getQualFlippedCard = (board) => {
  let value = board.reduce((acum, elem) => {
    let newElem = elem.filter((elem) => elem.flipped);
    acum = acum + newElem.length;
    return acum;
  }, 0);
  return value;
};



let arr = [
  [{type: 'y', matched: false, flipped: true},{type: 'a', matched: false, flipped: false}],
  [{type: 'z', matched: false, flipped: false},{type: 'y', matched: false, flipped: false}]
]
const getArrayFlippedCard = (board) => {
  let value = board.reduce((acum, elem) => {
    let newElem = elem.filter((elem) => elem.flipped);
    acum.push(...newElem)
    return acum;
  }, []);
  return value;
};



export { getQualFlippedCard, getArrayFlippedCard};

