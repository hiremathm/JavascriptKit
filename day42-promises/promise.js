const myPromise = new Promise(function(resolve, reject){ 
    setTimeout(() => {
        let random = 9
        if(random % 2 == 0){
            resolve(random)
        }
        else {
            reject(random)
        }
    }, 2000);
})

myPromise
    .then(function(random){
        console.log("promise resolved for", random)
    })
    .catch(function(random){
        console.log("promise rejected for", random)
    })