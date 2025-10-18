import { bloomMeter } from "./Bloom";
let NewBloomMeter = new bloomMeter(100)
function startCharging(waitTime:number,alertTimes:Array<number>) {
    setInterval(() => {
        NewBloomMeter.bloomCharger();
        alertTimes.forEach(element => {
        if (NewBloomMeter.getCurrentBloom() === element) {
            console.log(element)
        }
    });
    }, waitTime*1000);
     
}
startCharging(1,[25,50,75,100])