#!/bin/sh

set -e
echo "pnpm update:version"
pnpm update:icon-version

cd packages/lcx-design-icon/dist/lcx-design-icon
npm publish
cd -

echo "✅ Publish completed"