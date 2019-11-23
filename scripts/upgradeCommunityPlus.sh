#!/usr/bin/env bash

git fetch origin $TAG
git rebase $TAG

node scripts/updateCommunityPlusVersion.js

exit 0