function scene1() {
    const g = -3
    const MAX_LIFE = 200
    const particles = []

    const app = new PIXI.Application()

    document.body.appendChild(app.view)

    const shape = new PIXI.Graphics()
    app.stage.addChild(shape)

    const STAGE_WIDTH = 800
    const STAGE_HEIGHT = 600


    const blur = new PIXI.filters.BlurFilter()
    blur.blur = 10
    shape.blendMode = PIXI.BLEND_MODES.ADD
    shape.filters = [blur]
// const particle = new Particle(Math.random() * 400, 300, 10)
// app.stage.addChild(particle)

    const emit = () => {
        const style = Math.floor(Math.random() * 3)
        const particle = {
            // x: STAGE_WIDTH / 2 + (Math.random() - 1) * 200,
            x: STAGE_WIDTH * (Math.random() + Math.random()) / 2,
            y: STAGE_HEIGHT * 3 / 4,
            vy: 30 * (Math.random() - 0.5),
            life: MAX_LIFE,
            style
        }
        particles.push(particle)
    }

    const update = () => {
        particles.forEach((particle, index) => {
            particle.vy = -5
            particle.y += particle.vy
            particle.scale = particle.life / MAX_LIFE

            particle.life -= 2
            if (particle.life < 0) {
                particles.splice(index, 1)
            }
        })
    }

    const draw = () => {
        shape.clear()
        particles.forEach(particle => {
            if (particle.style < 1) {
                shape.beginFill(0xff7f50, 0.8)
                // shape.lineStyle(5, 0xffffff, 1)
                shape.drawCircle(particle.x, particle.y, 60 * particle.scale)
                shape.endFill()
            } else if (particle.style < 2) {
                shape.beginFill(0xff4500, 0.8)
                shape.lineStyle(0)
                shape.drawCircle(particle.x, particle.y, 60 * particle.scale)
                shape.endFill()
            } else {
                shape.beginFill(0xff0000, 0.8)
                shape.lineStyle(0)
                shape.drawCircle(particle.x, particle.y, 60 * particle.scale)
                shape.endFill()
            }
        })
    }

    PIXI.Ticker.shared.add(() => {
        emit()
        update()
        draw()
    });


}
scene1()