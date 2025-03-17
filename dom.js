let hd = document.getElementById('hed')
let bt = document.getElementById('btn')
bt.addEventListener('click',function () {
    hd.classList.toggle('hed-class')
    if (bt.innerHTML == 'add content') {
        bt.innerHTML = 'remove content'
    }else{
        bt.innerHTML = 'add content'
    }
})