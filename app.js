const forName = document.querySelector("#name")
const forAge = document.querySelector("#age")
const forMarried = document.querySelector("#married")
const box = document.querySelector(".text")

let h2Name = document.createElement('h2')
forName.addEventListener('input',function(e){
    h2Name.innerText = `Name: ${e.target.value}`
})
box.append(h2Name)

let h2Age = document.createElement('h2')
forAge.addEventListener('input',function(e){
    h2Age.innerText = `Age: ${e.target.value}`
})
box.append(h2Age)

let h2married = document.createElement('h2')
forMarried.addEventListener('input',function(e){
    h2married.innerText = `Married: ${e.target.value}`
})
box.append(h2married)