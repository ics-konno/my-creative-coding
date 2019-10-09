const app = new PIXI.Application();

document.body.appendChild(app.view);

const shape = new PIXI.Graphics();
app.stage.addChild(shape);

const STAGE_WIDTH = 800;
const STAGE_HEIGHT = 600;
let DEFAULT_RADIUS = [200, 100, 50, 25, 12];

// shape.beginFill(0xff0000)
// shape.drawRect(0,0, 100 ,100)
PIXI.Ticker.shared.add(() => {
  shape.clear();
  const time = Date.now() / 30;
  const lineNum = 80;
  const segmentNum = 360 * 2;
  if (DEFAULT_RADIUS[0] === 200) {
  }
  if(DEFAULT_RADIUS[0] > 400){
    DEFAULT_RADIUS.push(10);
    DEFAULT_RADIUS.shift();
  }
  console.log(DEFAULT_RADIUS.length)

  DEFAULT_RADIUS[0] += 1
  DEFAULT_RADIUS[1] += 0.8
  DEFAULT_RADIUS[2] += 0.6
  DEFAULT_RADIUS[3] += 0.4
  DEFAULT_RADIUS[4] += 0.2
  DEFAULT_RADIUS.forEach(rad => {
    rad += 10;

    // const amplitude = STAGE_WIDTH / 3

    // for (let j = 0; j < lineNum; j++) {
    shape.lineStyle(2, 0xffffff);

    for (let i = 0; i < segmentNum; i++) {
      const radian = (i / segmentNum) * Math.PI + time;
      const radius =
        rad +
        (Math.sin(noise.perlin2(time / 10 + i / 10, time / 10 + i / 20)) *
          rad) /
          4;
      const x1 = Math.cos((Math.PI * i) / 360) * radius;
      const y1 = Math.sin((Math.PI * i) / 360) * radius;

      const x2 = Math.cos((Math.PI * (i + 1)) / 360) * radius;
      const y2 = Math.sin((Math.PI * (i + 1)) / 360) * radius;
      // const y = amplitude * noise.perlin2(time / 10 + j/40, (i / 5 + time) / 5+ j/30) + STAGE_HEIGHT / 2
      if (i === 0) {
        shape.moveTo(x1, y1);
      } else {
        shape.lineTo(x2, y2);
      }
    }
  });
  // }
  shape.x = 400;
  shape.y = 300;
});
