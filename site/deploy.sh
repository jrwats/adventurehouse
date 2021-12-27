#!/bin/bash

if git remote -v | grep -qE '^origin.*staging'; then
  prefix='staging.'
fi
echo "${prefix:-}adventurehouse.info" > static/CNAME

