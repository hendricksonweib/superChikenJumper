const person = document.getElementById('person')
const btn = document.getElementById('btn')

document.addEventListener('DOMContentLoaded', function() {
    const obst = document.getElementById('obstacle')
setInterval(function() {
    obst.style.transform = 'translateX(-5000%)'
    setTimeout(function() {
        obst.style.transform = 'translateX(100%)'
    }, 500) 
}, 1000)
})
