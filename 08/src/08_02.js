function scene2(){
    const MAX_LIFE = 300
    const particles = []
    const ball = {x: 400, y: 300, r: 80}

    const app = new PIXI.Application()

    document.body.appendChild(app.view)

    const shape = new PIXI.Graphics()
    app.stage.addChild(shape)

    const STAGE_WIDTH = 800
    const STAGE_HEIGHT = 600


    const blur = new PIXI.filters.BlurFilter()
    blur.blur = 5
    shape.blendMode = PIXI.BLEND_MODES.ADD

    const emit = () => {
        const angle = Math.random() * 2 * Math.PI
        const particle = {
            x: ball.x + ball.r * Math.cos(angle),
            y: ball.y + ball.r * Math.sin(angle),
            vx: -1 + Math.random() / 5,
            vy: -1 + Math.random() / 5,
            life: MAX_LIFE
        }
        particles.push(particle)
    }

    const update = () => {
        particles.forEach((particle, index) => {
            particle.x += particle.vx
            particle.y += particle.vy
            particle.life -= 1
            particle.scale = particle.life / MAX_LIFE
            if (particle.life < 0) {
                particles.splice(index, 1)
            }
        })
    }

    const draw = () => {
        shape.clear()
        particles.forEach(particle => {
            const random = Math.random() * 2
            if (random < 1) {
                shape.beginFill(0xff0000)
            } else {
                shape.beginFill(0xff4500)
            }
            // shape.beginFill(0xff0000, 0.6)
            shape.filters = [blur]
            shape.drawCircle(particle.x, particle.y, 10 * particle.scale)
        })
    }

    PIXI.ticker.shared.add(() => {
        for (let i = 0; i < 10; i++) {
            emit()
            update()
            draw()
        }
        shape.beginFill(0xffff00, 1)
        shape.drawCircle(ball.x, ball.y, ball.r - 10)
    })
}

scene2()