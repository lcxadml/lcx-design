#!/bin/sh

set -e
echo "pnpm update:version..."
pnpm update:version
echo "update version success!"

echo "build:comp..."
pnpm run build
echo "build:comp success!"

cd packages/dist/lcx-design
npm publish
cd -

echo "✅ Publish completed"