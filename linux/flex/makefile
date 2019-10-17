test: test.yy.c -lfl
	gcc $< -o $@ -lfl
test.yy.c: test.l
	flex -o $@ $<
clean:
	rm -rf test.yy.c test
