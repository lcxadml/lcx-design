#!/bin/sh

set -e
echo "pnpm update:version..."
pnpm update:icon-version

echo "update version success!"

echo "build:icon..."
pnpm run build:icon
echo "build:icon success!"
cd packages/lcx-design-icon/dist/lcx-design-icon
npm publish
cd -

echo "✅ Publish completed"