function pool(input){
let worldRecord = Number(input[0]);
let distance = Number(input[1]);
let secondsPerMeter = Number(input[2]);

let waterResistance = Math.floor(distance / 15);
let waterResistanceSeconds = waterResistance * 12.5 ; 
let ivanTimeWithoutResistance = distance * secondsPerMeter;
let ivanTime = ivanTimeWithoutResistance + waterResistanceSeconds

let differenceTime= Math.abs(worldRecord - ivanTime);
if (ivanTime < worldRecord){
console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
} else {
    console.log(`No, he failed! He was ${differenceTime.toFixed(2)} seconds slower.`)
}


}


pool(["10464","1500","20"])
pool(["55555.67","3017","5.03"])
