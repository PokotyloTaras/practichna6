class Stack{
    constructor(){
        this.items = []
        this.top = -1
    }

    push(element){
        this.top++
        this.items[this.top] = element
    }
    pop(){
        if(this.items.length === 0){
            return null
        }
        this.top--
        return this.items.pop()
    }
    peek(){
        if(this.items.length === 0){
            return null
        }
        return this.items[this.top]
    }
    clear(){
        this.items = []
        this.top = -1
    }
    count(){
        return this.items.length
    }
    size(){
        return this.items.length
    }
    toString(){
        if(this.items.length === 0){
            return null
        }
        return this.items.join(` -> `)
    }
} 

const stack = new Stack()

stack.push(12)
stack.push(15)
stack.push(16)
stack.push(142)
stack.push(531)

console.log(stack)
console.log(`Повернення та видалення елементу з вершини стеку`, stack.pop())
console.log(`після pop`,stack)

console.log('Повернення елементу з вершини стеку', stack.peek())
console.log('Повертає кількість елементів стеку', stack.count())
console.log('Повертає кількість елементів у стеку', stack.size())
console.log('Виводить усі елементи стеку без видалення', stack.toString())
console.log('Видаляє всі елементи стеку', stack.clear())
