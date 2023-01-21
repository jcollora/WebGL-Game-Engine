"use strict";  // Operate in Strict mode such that variables must be declared before used!

import * as engine from "../engine/core.js";

class MyGame {
    constructor(htmlCanvasID) {
        // Step A: Initialize the game engine
        engine.init(htmlCanvasID);
        // Step B: Clear the canvas
        engine.clearCanvas([0, 0.8, 0, 1]);

        var color1 = [0.6, 0.3, 0.4, 1];
        var color2 = [0.7, 0.2, 0.5, 1];
        var color3 = [0.8, 0.8, 0.9, 1];
        var color4 = [0.2, 0.2, 0.3, 1];
        var color5 = [0.2, 0.3, 0.4, 1];
        var s1 = [0.1, 0.2];
        var s2 = [0.3, 0.1];
        var s3 = [0.2, 0.2];
        var s4 = [0.3, 0.4];
        var s5 = [.4, .4];
        var col1 = -0.9;
        var col2 = -0.6;
        var col3 = -0.2;
        var col4 = 0.2;
        var col5 = 0.7;
        var squares = 0.7;
        var triangles = 0.0;
        var circles = -0.7;

        engine.drawSquare(color1, [col1, squares], s1);
        engine.drawSquare(color2, [col2, squares], s2);
        engine.drawSquare(color3, [col3, squares], s3);
        engine.drawSquare(color4, [col4, squares], s4);
        engine.drawSquare(color5, [col5, squares], s5);
        
        engine.drawTriangle(color1, [col1, triangles], s1);
        engine.drawTriangle(color2, [col2, triangles], s2);
        engine.drawTriangle(color3, [col3, triangles], s3);
        engine.drawTriangle(color4, [col4, triangles], s4);
        engine.drawTriangle(color5, [col5, triangles], s5);
        
        engine.drawCircle(color1, [col1, circles], s1);
        engine.drawCircle(color2, [col2, circles], s2);
        engine.drawCircle(color3, [col3, circles], s3);
        engine.drawCircle(color4, [col4, circles], s4);
        engine.drawCircle(color5, [col5, circles], s5);
    }
}

window.onload = function() {
    new MyGame('GLCanvas');
}
