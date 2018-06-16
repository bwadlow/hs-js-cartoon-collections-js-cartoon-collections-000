function dwarfRollCall(dwarves) {
  return dwarves.map((elem, i) => i+1+'. '  + elem).join(' ')
}

function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(elem => elem.toUpperCase()+'!')
}

function longPlaneteerCalls(words) {
  let newArr=words.filter(elem => elem.length>4)
  return  !(newArr.length) ? false : true
}

function findTheCheese (foods) {
  let cheese=['cheddar','gouda','camembert']
  let newArr=foods.filter(elem => cheese.indexOf(elem) > -1)
  return !(newArr.length) ? 'no cheese!' : newArr[0]
}
