// Write your code here!
let main = document.querySelector('main#main')
main.remove()

let newHeader = document.createElement('hi')
newHeader.id = 'victory'
newHeader.innerHTML = "Johnson is the Champion"
document.body.appendChild(newHeader)
