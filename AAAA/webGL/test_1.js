function test1(){
	var canvas = document.createElement("canvas");
	canvas.style.width="900px";
	canvas.style.height="900px";
	canvas.width="1000";
	canvas.height="1000";
	canvas.style.border="1px solid black";
	var ctx = canvas.getContext("webgl");
	document.getElementById("view").appendChild(canvas);	
				
	var gl = ctx;
	var VSHADER_SOURCE=
	'	void main(){							'+
	'		gl_Position=vec4(0.0,0.0,0.0,1.0);	'+
	'		gl_PointSize=10.0;					'+
	'	}										';

	var FSHADER_SOURCE=
	'	void main(){							'+
	'		gl_FragColor=vec4(1.0,0.0,0.0,1.0);	'+
	'	}										';
	
	var vertexShader=gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader,VSHADER_SOURCE);
	gl.compileShader(vertexShader);

	var fragmentShader=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader,FSHADER_SOURCE);
	gl.compileShader(fragmentShader);

	var program=gl.createProgram();
	gl.attachShader(program,vertexShader);
	gl.attachShader(program,fragmentShader);
	gl.linkProgram(program);

	if(!gl.getProgramParameter(program,gl.LINK_STATUS)){
		var info = gl.getProgramInfoLog(program);
		throw "Could not compile WebGL program.";
	}

	gl.useProgram(program);

	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	gl.drawArrays(gl.PONTS,0,1);

	gl.deleteProgram(program);
}
