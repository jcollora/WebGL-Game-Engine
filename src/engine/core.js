"use strict"; 

import * as vertexBuffer from "./vertex_buffer.js";
import SimpleShader from "./simple_shader.js";

// The graphical context to draw to
let mGL = null;
function getGL() { return mGL; }

// ---------------- SHADERS ----------------
// modify
let mShader = null;
function createShader() {
    mShader = new SimpleShader(
        "src/glsl_shaders/simple_vs.glsl",        // Path to the VertexShader 
        "src/glsl_shaders/simple_fs.glsl");       // Path to the FragmentShader
}

// ------------ DRAWABLE SHAPES ------------
function drawSquare (color, offset, scale) {
    mShader.shaderPrimitive(vertexBuffer.getSquare());
    mShader.activate(color, offset, scale);
    mGL.drawArrays(mGL.TRIANGLE_STRIP, 0, 4);
}

function drawTriangle (color, offset, scale) {
    mShader.shaderPrimitive(vertexBuffer.getTriangle());
    mShader.activate(color, offset, scale);
    mGL.drawArrays(mGL.TRIANGLE_STRIP, 0, 3);
}

function drawCircle (color, offset, scale) {
    mShader.shaderPrimitive(vertexBuffer.getCircle());
    mShader.activate(color, offset, scale);
    mGL.drawArrays(mGL.TRIANGLE_FAN, 0, vertexBuffer.getCircle().length / 3);
}

// ------- STANDARD PUBLIC FUNCTIONS -------
// initialize the WebGL
function initWebGL(htmlCanvasID) {
    let canvas = document.getElementById(htmlCanvasID);

    // Get the standard or experimental webgl and binds to the Canvas area
    // store the results to the instance variable mGL
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");

    if (mGL === null) {
        document.write("<br><b>WebGL 2 is not supported!</b>");
        return;
    }
}

// initialize the WebGL, and the vertex buffer
function init(htmlCanvasID) {
    initWebGL(htmlCanvasID);    // setup mGL
    vertexBuffer.init();        // setup mGLVertexBuffer
    createShader();             // create the shader 
}

// Clears the draw area and draws one square
function clearCanvas(color) {
    mGL.clearColor(color[0], color[1], color[2], color[3]);  // set the color to be cleared
    mGL.clear(mGL.COLOR_BUFFER_BIT);      // clear to the color previously set
}

// export these symbols
export { getGL, init, clearCanvas, drawSquare, drawTriangle, drawCircle }