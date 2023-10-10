#!/bin/bash

echo "Updating submodules..."

git submodule update --remote

echo "Submodule module update complete..."

echo "Committing submodule changes"

git add bin/*
git commit -m "Chore: Update submodules to latest commit"

echo "Changes ready to be pushed to remote..."