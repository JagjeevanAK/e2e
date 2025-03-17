#!/bin/bash

# set -e

# Filter non-markdown and non-docs files
CODE_FILES=$(echo "$1" | grep -E -v '\.md$|^docs/')
if [ -n "$CODE_FILES" ]; then
  echo "code_modified=true" >> "$GITHUB_OUTPUT"
else
  echo "code_modified=false" >> "$GITHUB_OUTPUT"
fi
