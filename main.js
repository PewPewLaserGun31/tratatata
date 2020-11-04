//буфферный массив пустых клеток
let unchecked = []
//буфферный массив помеченных клеток
let checked = []
//переменная для хранения времени
let startTime
//переменная для хранения очков
let score = 0


let startTratatata = () => {
  uncheckAll()
  unchecked = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4", "d1", "d2", "d3", "d4"]
  checked = []
  score = 0
  startTime = Date.now()

  $(".progress-bar2").css("width", "100%")
  ProgressBarAnimation(30000)

  let randomNumber = Math.floor(Math.random() * 16)
  let firstBox = unchecked[randomNumber]
  checked.push(firstBox)
  unchecked.splice(randomNumber, 1)

  randomNumber = Math.floor(Math.random() * 15)
  let secondBox = unchecked[randomNumber]
  checked.push(secondBox)
  unchecked.splice(randomNumber, 1)

  randomNumber = Math.floor(Math.random() * 14)
  let thirdBox = unchecked[randomNumber]
  checked.push(thirdBox)
  unchecked.splice(randomNumber, 1)

  let checkbox1 = $(`#${firstBox}`)
  let checkbox2 = $(`#${secondBox}`)
  let checkbox3 = $(`#${thirdBox}`)

  checkbox1.prop("checked", true)
  checkbox2.prop("checked", true)
  checkbox3.prop("checked", true)

}

//при нажатии на квадратик
let uncheck = (ctx) => {
  let id = ctx.id
  let inUnchecked = unchecked.includes(id)
  if (inUnchecked) {
    gameOver()
  } else {
    unchecked.push(id)
    checked.splice(checked.indexOf(id), 1)
    createNewCheck()
    score += 5
    $('#score').text(`${score}`)
  }
  if ((Date.now() - startTime) / 1000 > 30) {
    gameOver()
  }
}

//отмечает рандомный квадратик
let createNewCheck = () => {
  randomNumber = Math.floor(Math.random() * 14)
  let newCheck = unchecked[randomNumber]
  checked.push(newCheck)
  unchecked.splice(randomNumber, 1)

  let box = $(`#${newCheck}`)
  box.prop("checked", true)
  console.log(checked)
  console.log(unchecked)
}

//очищает все клеточки
let uncheckAll = () => {
  $(`.checkb`).prop("checked", false)
}

//конэць
let gameOver = () => {
  alert(`Game over
  your score: ${score}`)
  $(".progress-bar2").stop();
  $(".progress-bar2").css("width", 0)
}