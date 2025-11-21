const fn = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error Message")
        }, 400);
    })
}

function retry(fn,retries,delay){
    return new Promise((resolve,reject) => {
     
        function attempt(){
            fn()
            .then(resolve)
            .catch((err) => {
                if(retries == 0) return reject(err)
                retries-- 
                console.log("re try log")
                setTimeout(() => {
                    attempt()
                }, delay);
            })
        }
        attempt()
    })
}

retry(fn,3,1000)
.then((data) => {
    console.log(data.json())
})
.catch((err) => {
    console.log(err)
})
