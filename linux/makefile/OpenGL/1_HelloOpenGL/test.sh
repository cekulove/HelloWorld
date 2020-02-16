#!/bin/bash
#cat HelloOpenGL.c | grep "GL/glut"
#grep "GL/glut.h" HelloOpenGL.c > /dev/null
cat HelloOpenGL.c | grep "GL/glut.h" > /dev/null
if test $? -eq 0
then
	gcc HelloOpenGL.c -o HelloOpenGL -lGL -lGLU -lglut
else
	gcc HelloOpenGL.c -o HelloOpenGL
fi
