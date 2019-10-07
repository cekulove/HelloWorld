#!/bin/bash
echo "#include<GL/glut>" > test.c
cat test.c | grep "GL/glut"
if test $? -eq 0
then
    echo opengl
else
    echo simply
fi
