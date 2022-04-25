let x = 33;

const sleep = new Promise((resolve, reject) => {

if ((typeof x) === "number") {
        resolve(`slept for ${x} milli seconds`)
    } else {
        reject(`provide a number`);
    }

})

sleep.then(res => {
    console.log(res)
})
.catch(err=>{
    console.log(err)
})