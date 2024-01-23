// Promise = to handle callback Hell

// create a Promise
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        resolve("success"); // fulfill function will occur
        // reject("error occurred"); // rejected function will occur
    });
};


// Use of promise when fulfilled
let promise = getPromise(); // fulfilled function
promise.then((res) => {
    console.log("Promise fulfilled", res);
});

promise.catch((rej) => {    // rejected function
    console.log("rejected", rej);
});


// real time Promise Handling (mind boglling)
function getData(dataId, getNxtData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("error");
            if (getNxtData) {
                getNxtData();
            }
        }, 5000);
    });
}
