all:
	echo "abcdefghijklmnopqrstuvwxyz" > test.c
	@#echo "abcdefghijklmnopqrstuvwxyz" > /etc/null		#Error
	grep -q "abc" test.c
	echo $$?
	grep -q "aaa" test.c; \
	if test $$? -eq 0; \
	then echo "="; \
	else echo "!="; \
	fi

