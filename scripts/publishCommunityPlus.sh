#!/usr/bin/env bash

cd ../enterprise-modules/grid-set-filter
npm install
npm run build
npm run package
npm publish --registry=$NPM_REGISTRY

exit 0