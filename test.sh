#!/usr/bin/env bash

for file in $@:1;
	do unzip -t $file;
done;