const addText = () => {
  const message = document.createElement('p')
  message.appendChild(document.createTextNode('Hello'))
  document.body.appendChild(message)
}

const addImage = () => {
  const image = document.createElement('img')
  image.src = `https://www.placecage.com/200/30${getRandomInt(9)}`
  document.getElementById('root').appendChild(image)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const addList = () => {
  const list = document.createElement('ul')

  const todo1 = document.createElement('li')
  todo1.appendChild(document.createTextNode('Learn DOM'))

  const todo2 = document.createElement('li')
  todo2.appendChild(document.createTextNode('Profit'))

  list.appendChild(todo1)
  list.appendChild(todo2)

  document.getElementById('root').appendChild(list)
}

const moveToEnd = () => {
  const list = document.getElementsByTagName('ul')[0]
  const todo = list.children[0]
  list.appendChild(todo)
}

const setHtml = () => {
  document.body.innerHTML = '' +
    '<ul>' +
    '  <li>Learn DOM</li>' +
    '  <li>Practice innerHMTL</li>' +
    '</ul>'
}

const setText = () => {
  const title = document.getElementById('title')
  title.innerText = 'Goodbye'
}

const addFormInput = () => {
  const input = document.createElement('input')
  input.value = 'I love tea'
  document.body.appendChild(input)
}

const toggleVisibility = () => {
  const title = document.getElementById('title')
  title.classList.toggle('hidden')
  console.log('Is the title now hidden?', title.classList.contains('hidden'))
}
