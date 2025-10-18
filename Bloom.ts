export class bloomMeter {
    bloomLevel: number
    targetBloom: number
    constructor(targetBloom:number) {
        this.bloomLevel = 0
        this.targetBloom = targetBloom
    }
    bloomCharger() {
        this.bloomLevel++
    }
    getCurrentBloom(percentage:boolean = false):number {
        if (percentage){
            return this.bloomLevel / this.targetBloom
        } else {
            return this.bloomLevel
        }
    }
}