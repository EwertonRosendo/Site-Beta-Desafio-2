
let num = document.getElementById('num')

setInterval(()=>{
    let value = document.getElementById('num_real').value
    num.innerHTML = value
}, 100)

