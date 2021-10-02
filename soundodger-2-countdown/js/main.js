const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
let W = canvas.width;
let H = canvas.height;

const mouse = new MouseManager();

let date = Date.now();

const objects = [new GameArena(0, 0, 0.7, { main: "#800000", circle: "#80000030" })];

function resizeCanvas() {
    canvas.width = innerWidth * 2;
    canvas.height = innerHeight * 2;
    W = innerWidth * 2;
    H = innerHeight * 2;
}

function setup() {
    resizeCanvas();

    requestAnimationFrame(update);
}

function update() {
    let dt = (Date.now() - date) / 1000;
    date = Date.now();

    ctx.clearRect(0, 0, W, H);

    for (let obj of objects) {
        obj.tick(dt);
        obj.render(ctx);
    }

    requestAnimationFrame(update);
}

onresize = resizeCanvas;

setup();