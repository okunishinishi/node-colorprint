#!/bin/bash

###
# Structure file permissions.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

chmod 755 bin/*
chmod 755 ci/bin/*.sh
chmod 755 ci/bin/**/*.sh