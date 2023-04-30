var up = document.getElementsByClassName("fa-caret-up");
var down = document.getElementsByClassName("fa-caret-down");
document.getElementById('request').addEventListener('click', getQueen)
document.getElementById('reqSeason').addEventListener('click', getSeason)
const list = document.getElementById('seasonalQueens')
document.querySelector('input[name="queen"]').addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getQueen();
  }
});
document.querySelector('input[name="season"]').addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    getSeason();
  }
});


function getQueen(){
    const queen = document.querySelector('input').value
    const url = `/api/${queen}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById('queen').classList.remove('sneaky')
      console.log(data)
      document.querySelector('#dragName').innerText = data.dragName
      document.querySelector('#age').innerText = data.age
      document.querySelector('#outcome1').innerText = `${data.outcomes[0]}` 
      document.querySelector('#season1').innerText = `Season ${data.seasons[0]}`
      document.getElementById('first').classList.remove('sneaky')

      if (data.seasons[1] != undefined){
        document.querySelector('#outcome2').innerText = `${data.outcomes[1]}`
        document.querySelector('#season2').innerText = `Season ${data.seasons[1]}`
      }
      if (document.querySelector('#season2').innerText == '' || data.seasons[1] == undefined ){
        document.getElementById('return').classList.add('sneaky')
      } else if (document.querySelector('#season2').innerText != '' || data.seasons[1] != undefined ){
        document.getElementById('return').classList.remove('sneaky')
      }
      if (data.outcomes.includes('Winner')){
        document.querySelector('#crown').src = '/img/crown.png'
      }
      if (!data.outcomes.includes('Winner')){
        document.querySelector('#crown').src = ''
      }
    })
}
function getSeason(){
  const season = document.getElementById('season').value
  document.getElementById('sNum').innerText = `${season}`
  const url = `/api/season/${season}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    let queens = []
    queens = data
    list.innerHTML = ''
    let uniqueQueens = new Set()
    console.log(data, 'data')
    document.getElementById('seasonal').classList.remove('sneaky')
    for (let queen of queens){
      let i = queen.seasons.indexOf(+season)
      console.log(season)
      if (!uniqueQueens.has(queen.dragName)){
      let li = document.createElement('li')
      li.appendChild(document.createTextNode(`${queen.dragName} ${queen.outcomes[i]}`))
      list.appendChild(li)
      uniqueQueens.add(queen.dragName)
    }
  }
  })
}

Array.from(up).forEach(function(element) {
      element.addEventListener('click', function(){
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const votes = parseFloat(this.parentNode.parentNode.childNodes[4].innerText)
        fetch('vote/up/', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'msg': msg,
            'votes':votes
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(down).forEach(function(element) {
      element.addEventListener('click', function(){
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const votes = parseFloat(this.parentNode.parentNode.childNodes[4].innerText)
        fetch('vote/down/', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'msg': msg,
            'votes':votes
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});