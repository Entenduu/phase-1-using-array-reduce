const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// 0 + 1 + 2 + 3 + 4
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator += currentValue
}, 0);