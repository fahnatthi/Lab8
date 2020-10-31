class Box {
  constructor() {
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }
}

class Item {
  constructor(name, size) {
    this.name = name
    this.size = size
  }
}

box = new Box()
box.add(new Item('doll', 'L'))
console.log(box.items)

box.add({ name: 'pen', size: 'XS' })
console.log(box.items)