#!/usr/bin/env bash

REGISTRY=https://npm.mrcr.ru

cd community-modules/grid-infinite-row-model
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY

cd ../../community-modules/grid-csv-export
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY

cd ../../community-modules/grid-core
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY

cd ../../community-modules/grid-client-side-row-model
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY

cd ../../enterprise-modules/grid-set-filter
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY

cd ../../community-modules/grid-all-modules
npm install
npm run build
npm run package
npm publish --registry=$REGISTRY
