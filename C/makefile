main: hello.o hello
hello.o: hello.c
	cc -c hello.c -o hello.o
hello: hello.o
	cc hello.o -o hello
clean:
	rm hello.o
