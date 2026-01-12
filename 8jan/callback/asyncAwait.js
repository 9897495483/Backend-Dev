//async await = syntactic sugar for promises

function resolveAfter2Seconds() {   
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
asyncCall();
// Output:
// calling
// (after 2 seconds)
// resolved
