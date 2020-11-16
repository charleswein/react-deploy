
let arrayCard = [
  { type: "BOS-1", id: 'va'},
  { type: "BOS", id: 'vf' },
  { type: "CHI-1", id: 'vz' },
  { type: "CHI-2", id: 'vу'},
  { type: "CHI", id: 'vv' },
  { type: "CLE", id: 'vj' },
  { type: "DAL", id: 'vh' },
  { type: "GSW-1",id: 'vk'  },
  { type: "GSW", id: 'vs' },
  { type: "HOU" , id: 'vo' },
  { type: "LAC" , id: 'vu'  },
  { type: "LAL-1", id: 'vi' },
  { type: "LAL-2", id: 'vx' },
  { type: "LAL", id: 'vq'  },
  { type: "MIA-1", id: 'vl' },
  { type: "MIA", id: 'vt' },
  { type: "MIL", id: 'vr' },
  { type: "PHI",  id: 'vn' },
  { type: "PHO", id: 'vp' },
  { type: "SAS",  id: 'vw' },
];

function createBoardWithoutRow(num) {
  let arrayLevelEasy = arrayCard.slice(0, 10),
    arrayLevelMiddle = arrayCard.slice(0, 18),
    arrayLevelHard = [...arrayCard];
  let arrayLevel = [arrayLevelEasy, arrayLevelMiddle, arrayLevelHard];

  function sorty(array) {
    const _array = [...array];
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = _array[i];
      _array[i] = _array[randomIndex];
      _array[randomIndex] = temp;
    }
    return _array;
  }

  function init(arr) {
    let newArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = { ...newArr[i], key: Math.random().toString(36).substr(2,36), flipped: false, matched: false};
    }
    return sorty(newArr);
  }
  return init([...arrayLevel[num], ...arrayLevel[num]]);
}

function createBoardWithRow (num, col){
  const boardWithoutRow = createBoardWithoutRow(num);
  const container = []
  const boardWithRow = boardWithoutRow.reduce((acc, elem) => {
    container.push(elem)
    // console.log(container);
    if(container.length === col){
      acc = [...acc, [...container]]
      container.length = 0;
    }
    return acc;
  },[])
  return boardWithRow
}

export {createBoardWithRow};
