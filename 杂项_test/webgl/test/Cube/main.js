function main(){
	let canvas=document.getElementById("webgl");
	let gl=canvas.getContext("webgl");
	let VS_SOURCE=document.querySelector("#vertex-shader").innerHTML;
	let FS_SOURCE=document.querySelector("#fragment-shader").innerHTML;
	initShaders(gl,VS_SOURCE,FS_SOURCE);
	let n=initVertexBuffers(gl);
	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.TRIANGLE_FAN,0,n);
}

function initVertexBuffers(gl){
	let vertices=new Float32Array([
		0.0,0.5,-0.0,
		-0.5,-0.5,-0.0,
		0.5,-0.5,-0.0
	])
	let n=3;
	let vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
	gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);
	let a_Position=gl.getAttribLocation(gl.program,"a_Position");
	gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(a_Position);
	return n;
}