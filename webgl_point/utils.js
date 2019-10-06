const initShader=(gl,VS_SOURCE,FS_SOURCE)=>{
	const program=createProgram(gl,VS_SOURCE,FS_SOURCE);
	gl.useProgram(program);
	gl.program=program;
	return true;
}

const createProgram=(gl,VS_SOURCE,FS_SOURCE)=>{
	const program=gl.createProgram();
	const vShader=loadShader(gl,gl.VERTEX_SHADER,VS_SOURCE);
	const fShader=loadShader(gl,gl.FRAGMENT_SHADER,FS_SOURCE);
	gl.attachShader(program,vShader);
	gl.attachShader(program,fShader);
	gl.linkProgram(program);
	const linked={
		status:	gl.getProgramParameter(program,gl.LINK_STATUS),
		log:	gl.getProgramInfoLog(program)
	}
	if (!linked.status){
		console.log(linked.log);
	}
	return program;
}


const loadShader=(gl,type,source)=>{
	const shader=gl.createShader(type);
	gl.shaderSource(shader,source);
	gl.compileShader(shader);
	const compiled={
		status:	gl.getShaderParameter(shader,gl.COMPILE_STATUS),
		log:	gl.getShaderInfoLog(shader)
	}
	if (!compiled.status){
		console.log(compiled.log);
	}
	return shader;
}
