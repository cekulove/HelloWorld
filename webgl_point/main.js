const canvas=document.createElement("canvas");
canvas.width="1000";
canvas.height="1000";
canvas.style.width="1000px";
canvas.style.height="1000px";
canvas.style.border="1px solid #0f0";
document.body.appendChild(canvas);
document.body.backgroundColor="black";

const gl=canvas.getContext("webgl");
gl.clearColor(0.0, 0.0, 0.0, 1.0);

const VS_SOURCE=document.querySelector("#vertex-shader").innerHTML;
const FS_SOURCE=document.querySelector("#fragment-shader").innerHTML;
if (!initShader(gl,VS_SOURCE,FS_SOURCE)){
	console.log("Failed to get the rendering context for webgl");
}
const n=initVertexBuffer();
draw();

function draw()
{
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLE_FAN,0,n);
	requestAnimationFrame(draw);
}

function initVertexBuffer()
{
	const vertices=new Float32Array([
		0.5,0.5,
		-0.5,0.5,
		-0.5,-0.5,
		0.5,-0.5
	]);
	const vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo)
	gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);
	const a_Position=gl.getAttribLocation(gl.program,"a_Position");
	gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(a_Position);
	return 4;
}
