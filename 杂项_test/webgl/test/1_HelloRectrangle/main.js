function main(){
	let canvas=document.getElementById("webgl")
	let gl=canvas.getContext("webgl");
	let VS_SOURCE=document.querySelector("#vertex-shader").innerHTML;
	let FS_SOURCE=document.querySelector("#fragment-shader").innerHTML;
	initShaders(gl,VS_SOURCE,FS_SOURCE);
	let n=initVertexBuffers(gl);
	gl.drawArrays(gl.TRIANGLE_FAN,0,n);
}
function initVertexBuffers(gl){
	let vertices=new Float32Array([
		1.0,1.0, -1.0,1.0, -1.0,-1.0, 1.0,-1,0
	])
	let n=4;
	let vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
	gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);
	let a_Position=gl.getAttribLocation(gl.program,"a_Position");
	if (a_Position<0){
		console.log(gl.program);
		console.log(1);
	}
	gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(a_Position);
	return n;
}