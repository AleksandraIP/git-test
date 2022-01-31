const button = document.querySelector('.button')
const button1 = document.querySelector('.button1')
const main = document.querySelector('.main')
const link = document.querySelector('a')
const fakeLink = document.querySelector('.fake-link')

const buttons = document.querySelectorAll('.buttons')

function handleClick(event){
    event.stopPropagation()
    console.log('actual element that was clicked', event.target)
    console.log('this element', event.currentTarget)
    event.target.style.color ='red'
}
//event.target - element was clicked
//event.current - element where listener was fired

button.addEventListener('click',handleClick)//binding -привязывание к событию
button1.addEventListener('click',handleClick)

button.removeEventListener('click',handleClick)//unbinding

buttons.forEach(button => {
    button.addEventListener('click',function(){
        console.log('One from ten click')
    })
})

main.addEventListener('click',handleClick)

link.addEventListener('click', event => event.preventDefault())

fakeLink.addEventListener('click',()=> location.href = 'https://google.com') //div как ссылка не использовать

//почему семантика важна? - 1. SEO - search engine optimization; 2. accesibility - доступность