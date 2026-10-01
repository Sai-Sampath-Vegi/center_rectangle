const r = require("raylib");
const geometry = require("./geometry")

const window = {
	width: 800,
	height: 500,
	title: "Center Rectangle",
};

const FPS = 60;

const rectangle = {
	width: 600,
	height: 400,
};

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(window.width, window.height, window.title);
	r.SetTargetFPS(FPS);

	rectangle.x = geometry.calcOffset(window.width, rectangle.width);
	rectangle.y = geometry.calcOffset(window.height, rectangle.height);
}

function update() { }

function draw() {
	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangleRec(rectangle, r.WHITE);

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}