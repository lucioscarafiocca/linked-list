function linkedList() {
  let list = {}
  const append = function (value) {
    if (list.head == undefined) {
      list.head = Node(value)
    } else {
      let name = list.head.value
      list[name] = list.head
      list.head = Node(value)
    }
  }
  const prepend = function (value) {
    if (list.tail == undefined) {
      list.tail = Node(value)
    } else {
      let name = list.tail.value
      list[name] = list.tail
      list.tail = Node(value)
    }
  }
  const size = () => {
    console.log(Object.keys(list).length)
  }
  const head = () => {
    console.log(list.head)
  }
  const tail = () => {
    console.log(list.tail)
  }
  const at = (index) => {
    let name = Object.keys(list)[[index]]
    console.log(list[name])
  }

  const pop = () => {
    let name = Object.keys(list)[[Object.keys(list).length - 1]]
    delete list[name]
  }

  const contains = (value) => {
    let values = [Object.keys(list)]
    if (values[0].includes(value)) {
      console.log(true)
    } else {
      console.log(false)
    }
  }

  const find = (value) => {
    let values = [Object.keys(list)]
    let result = values[0].indexOf(value)
    if (result !== -1) {
      console.log(result)
    } else {
      console.log(null)
    }
  }

  const toString = () => {
    let values = [Object.keys(list)]
    let head = list.head.value
    let tail = list.tail.value
    let headDelete = values[0].indexOf("head")
    let tailDelete = values[0].indexOf("tail")
    values[0].splice(headDelete, 1)
    values[0].splice(tailDelete - 1, 1)
    let result = ""
    values[0].forEach((element) => {
      result += ` -> (${element})`
    })
    result += ` -> (${head}) -> (${tail}) -> null`
    console.log(result)
  }
  const seeList = () => console.log(list)

  return {
    append,
    seeList,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  }
}

function Node(values) {
  if (values == undefined) {
    let value = null
    let nextNode = null
    return { value, nextNode }
  } else {
    let value = values
    let nextNode = null
    return { value, nextNode }
  }
}

//const list = linkedList()
//list.append("hello")
//list.prepend("goodbye")
//list.append("cock")
//list.append("martin")
//list.prepend("what")
//list.size()
//list.seeList()
//list.head()
//list.tail()
//list.at(1)
//list.pop()
//list.contains("hello")
//list.find("tail")
//list.toString()

const list = linkedList()
list.append("dog")
list.append("cat")
list.append("parrot")
list.append("hamster")
list.append("snake")
list.append("turtle")
list.prepend("goodbye")
list.toString()
