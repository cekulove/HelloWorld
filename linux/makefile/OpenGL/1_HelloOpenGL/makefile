HelloOpenGL: HelloOpenGL.c
clean:
	rm -rf HelloOpenGL

%: %.c
	@grep -wq "GL/glut.h" $< && gcc $< -o $@ -lGL -lGLU -lglut || gcc $< -o $@
	@#grep -wq "GL/glut.h" $< && echo "contain" || ech "not contain"
	@#gcc $< -o $@ -lGL -lGLU -lglut
	@#gcc $< -o $@
