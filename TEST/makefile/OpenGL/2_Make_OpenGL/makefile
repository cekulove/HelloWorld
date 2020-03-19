VPATH=src
vpath %.c src

hello: HelloOpenGL.c
	cc $< -o $@ -lGL -lGLU -lglut

clean:
	rm -rf hello
