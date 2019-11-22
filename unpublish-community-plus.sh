#!/usr/bin/env bash

REGISTRY=https://npm.mrcr.ru

cd community-modules/grid-all-modules
npm unpublish --registry=$REGISTRY --force

cd ../../community-modules/grid-infinite-row-model
npm unpublish --registry=$REGISTRY --force

cd ../../community-modules/grid-csv-export
npm unpublish --registry=$REGISTRY --force

cd ../../community-modules/grid-core
npm unpublish --registry=$REGISTRY --force

cd ../../community-modules/grid-client-side-row-model
npm unpublish --registry=$REGISTRY --force

cd ../../enterprise-modules/grid-set-filter
npm unpublish --registry=$REGISTRY --force

