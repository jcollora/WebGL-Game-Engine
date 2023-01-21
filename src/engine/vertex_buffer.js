/* defines the module that supports the loading and using of the buffer that 
 * contains vertex positions of a square onto the gl context */
"use strict";

import * as core from "./core.js";

// reference to the vertex positions for the square in the gl context
let mGLVertexBuffer = null;
function get() { return mGLVertexBuffer; }

var mVerticesOfSquare = [
    0.5, 0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, -0.5, 0.0,
    -0.5, -0.5, 0.0
];

export function getSquare() {
    return mVerticesOfSquare;
}

let verticesOfTriangle = [
    0.0, 0.5, 0.0,
    -0.5, -0.5, 0.0,
    0.5, -0.5, 0.0
]

export function getTriangle() {
    return verticesOfTriangle;
}

let getVerticesOfCircle = function () {
    var vertexData = [0, 0, 0];
    for (var i = 0; i <= 360; i++) {
        var angle = i * Math.PI / 180;
        vertexData.push(0.5 * Math.cos(angle));
        vertexData.push(0.5 * Math.sin(angle));
        vertexData.push(0);
    }
    return vertexData;
}
const numverticies = 60;
let verticesOfCircle = getVerticesOfCircle();

export function getCircle() {
    return verticesOfCircle;
}

function init() {
    let gl = core.getGL();
    
    // Step A: Create a buffer on the gl context for our vertex positions
    mGLVertexBuffer = gl.createBuffer();
       
    // Step B: Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBuffer);

    // Step C: Loads mVerticesOfSquare into the vertexBuffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfSquare), gl.STATIC_DRAW);
}

 // export these symbols
export {init, get}