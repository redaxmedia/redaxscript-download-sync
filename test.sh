#!/usr/bin/env bash

set -e;

for file in $@:1;
	do unzip -t $file;
done;

set +e;