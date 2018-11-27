// console.log()
global.console.log("console is a global class");

// setTimeout()
global.setTimeout(() => {
    console.log("setTimeout() called after 2000ms");
}, 2000);

// setInterval()
let timesCalled = 0;
let timer = global.setInterval(() => {
    timesCalled++;
    console.log("setInterval() called after every 1000ms");
    if (timesCalled >= 5)
        global.clearInterval(timer);
}, 1000)

