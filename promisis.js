let prom = new Promise((res,rej) => {
    let a = 2
    if (a == 2) {
        res('response : ' + 'yes')
    }else{
        rej('Error'+'no')
    }
})
let promis = new Promise((res,rej) => {
    let b = 2
    if (b == 2) {
        res('true')
    }else{
        rej('false')
    }
})
Promise.all([prom,promis]).then((s) => {
    console.log(s)
}).catch((e) => {
    console.log(e)
})
