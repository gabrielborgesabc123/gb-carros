
let prevbutton = document.getElementById('prev')
let nextbutton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indications')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')



let active = 0
let firstposition = 0
let lastposition = items.length -1



nextbutton.onclick = () =>{
    list.style.setProperty('--calculation',1)
    let itemold = container.querySelector('.list .item.active')
    itemold.classList.remove('active')
    let dotsold = indicator.querySelector('ul li.active')
    dotsold.classList.remove('active')
    dots[active].classList.add('active')
    indicator.querySelector('.number').innerHTML = "0" + (active + 1)

    active = active + 1 > lastposition ? 0 : active + 1
   
    items[active].classList.add('active')

   

}


prevbutton.onclick = () =>{
    list.style.setProperty('--calculation',-1)
    let itemold = container.querySelector('.list .item.active')
    itemold.classList.remove('active')
    let dotsold = indicator.querySelector('ul li.active')
    dotsold.classList.remove('active')
    dots[active].classList.add('active')
    indicator.querySelector('.number').innerHTML = "0" + (active + 1)

    active = active - 1 < firstposition ? lastposition : active - 1
    
    items[active].classList.add('active')

   
}

