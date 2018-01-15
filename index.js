function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild(){}

function increaseRankBy(n){
let rankList = document.querySelectorAll('ul.ranked-list li');

  for(let i = 0; i < rankList.length; i++){
  let currVal = parseInt(rankList[i].innerHTML);
  currVal += n;
  rankList[i].innerHTML = currVal;
  }
}
