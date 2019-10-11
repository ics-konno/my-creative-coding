const app = new PIXI.Application()

document.body.appendChild(app.view)

const STAGE_WIDTH = 800
const STAGE_HEIGHT = 600

// shape.beginFill(0xff0000)
// shape.drawRect(0,0, 100 ,100)

let vx = 10;
let vy = 50
let ax = 0
let ay = -0.1
const g = 0.5

const curcleR = 50

const reflect = 0.8

let color = [10,20,30]

const shape1 = new PIXI.Graphics()
const shape2 = new PIXI.Graphics()
const shape3 = new PIXI.Graphics()
shape1.beginFill(PIXI.utils.rgb2hex(color))
shape1.beginFill(PIXI.utils.rgb2hex(color))
shape1.beginFill(PIXI.utils.rgb2hex(color))
shape1.drawCircle(0,0,curcleR)
shape2.drawCircle(100,100,curcleR)
shape3.drawCircle(200,200,curcleR)


for (let i = 0 ; i ++; i < 3) {
    app.stage.addChild(shape[i])

    shape[i].interactive = true
    shape[i].on("click", () => {
        vx = 50 * (Math.random() - 0.5)
        vy = 50 * (Math.random() - 0.5)
    })
}

PIXI.Ticker.shared.add(() => {

    color[0] += 100
    color[1] += 2
    color[2] += 10
    vx *= 0.99
    vy *= 0.99

    vx += ax //加速度
    vy += ay
    vy += g
    for (let i = 0 ; i ++; i < 3) {
        shape[i].x += vx
        shape[i].y += vy

        if (shape[i].x < curcleR) {
            shape[i].x = curcleR //マイナスの間に挟まるのを防ぐ
            vx *= -1 * reflect
        } else if (shape[i].x > STAGE_WIDTH - curcleR) {
            shape[i].x = STAGE_WIDTH - curcleR
            vx *= -1 * reflect
        }
        if (shape[i].y < curcleR) {
            shape[i].y = curcleR //マイナスの間に挟まるのを防ぐ
            vy *= -1 * reflect
        } else if (shape[i].y > STAGE_HEIGHT - curcleR) {
            shape[i].y = STAGE_HEIGHT - curcleR
            vy *= -1 * reflect
        }
    }
});
