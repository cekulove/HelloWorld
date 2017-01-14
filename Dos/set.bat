@echo off
cls
echo 【GCC编译环境】
mode con sols=100 lines=40 & color 0A
echo.
set gcc=D:\tools\CodeBlocks\MinGW
pushd %gcc%
call mingwvars.bat
echo.
popd
cmd
echo on
