const r = require("raylib");
const geometry = require("./geometryu")

const windowWidth = 800;
const windowHeight = 500;
const windowTitle = "Center Rectangle";

const FPS = 60;

const rectangleWidth = 600;
const rectangleHeight = 400;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(windowWidth, windowHeight, windowTitle);
	r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
	const x = geometry.calcOffset(windowWidth, rectangleWidth);
	const y = geometry.calcOffset(windowHeight, rectangleHeight);

	r.BeginDrawing();

	r.ClearBackground(r.BLUE);

	r.DrawRectangle(x, y, rectangleWidth, rectangleHeight, r.WHITE);

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