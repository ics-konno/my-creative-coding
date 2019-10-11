const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

// shape.beginFill(0xff0000)
// shape.drawRect(0,0, 100 ,100)

// let vx = 10;
// let vy = 5
// let ax = 0
// let ay = -0.1
const g = 0.1

const curcleR = 10

const reflect = 0.9

let color = [10,20,30]

const list = []


class Ball extends PIXI.Graphics{
    constructor(){
        super()
        this.beginFill(0xffffff * Math.random())
        this.drawCircle(0,0,curcleR)

        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0


        this.interactive = true
        this.on("click", (event) => {
            this.vx = 50 * (Math.random() - 0.5)
            this.vy = 50 * (Math.random() - 0.5)
        })
    }
}

for(let i = 0; i < 100; i++){
    const shape = new Ball()
// shape.beginFill(PIXI.utils.rgb2hex(color))

    shape.x = STAGE_WIDTH * Math.random()
    shape.y = STAGE_HEIGHT * Math.random()

    app.stage.addChild(shape)

    list.push(shape)
}

console.log(list)


PIXI.Ticker.shared.add(() => {

    list.forEach(shape => {

        shape.vx *= 0.99
        shape.vy *= 0.99

        shape.vx += shape.ax //加速度
        shape.vy += shape.ay
        shape.vy += g
        shape.x +=shape. vx
        shape.y += shape.vy

        if(shape.x < curcleR){
            shape.x = curcleR //マイナスの間に挟まるのを防ぐ
            shape.vx *= -1 * reflect
        }else if(shape.x > STAGE_WIDTH - curcleR){
            shape.x = STAGE_WIDTH - curcleR
            shape.vx *= -1 * reflect
        }
        if(shape.y < curcleR){
            shape.y = curcleR //マイナスの間に挟まるのを防ぐ
            shape.vy *= -1 * reflect
        }else if(shape.y > STAGE_HEIGHT - curcleR){
            shape.y = STAGE_HEIGHT - curcleR
            shape.vy *= -1 * reflect
        }
    })

});
