#!/usr/bin/env bash

set -e

for file in $@; do
	unzip -t $file
done;