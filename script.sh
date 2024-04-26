#!/bin/bash
# This shell script creates all necessary files and folders for a SASS project
# Inspired by @abhagsain and @rveitch

echo "=========================="
echo "   SASS AUTOMATIC SETUP"
echo "=========================="
echo ""
echo "This program automatically creates all the files and folders you need for your SASS project."
echo ""
read -p "Press any key to continue... " -n1 -s
echo ""
echo "Please wait... Creating files and folders"
echo ""

# SASS Folder
echo "Creating SASS folder..."
if [ -d "sass" ]; then
    echo "- SASS folder already exists"
else
    mkdir sass
    echo "+ SASS folder creation: done."
fi

echo ""
echo "Moving to SASS folder"
cd sass
echo "Creating SASS Subfolders..."
echo ""

# Abstract folder
if [ -d "abstract" ]; then
    echo "- abstract folder already exists"
else
    mkdir abstract
    echo "+ Abstract folder creation: Done."
fi

# Pages folder
if [ -d "pages" ]; then
    echo "- pages folder already exists"
else
    mkdir pages
    echo "+ Pages folder creation: Done."
fi

# Layout folder
if [ -d "layout" ]; then
    echo "- layout folder already exists"
else
    mkdir layout
    echo "+ Layout folder creation: Done."
fi

# Base folder
if [ -d "base" ]; then
    echo "- base folder already exists"
else
    mkdir base
    echo "+ Base folder creation: Done."
fi

# Components folder
if [ -d "components" ]; then
    echo "- components folder already exists"
else
    mkdir components
    echo "+ Components folder creation: Done."
fi

echo ""
echo "Moving to Abstract..."
cd abstract
echo ""
echo "Creating Abstract files"
echo "-------------------"

# _function.scss
if [ -f "_function.scss" ]; then
    echo "- _function.scss already exists"
else
    touch _function.scss
    echo "+ _function.scss created"
fi

# _mixins.scss
if [ -f "_mixins.scss" ]; then
    echo "- _mixins.scss already exists"
else
    touch _mixins.scss
    echo "+ _mixins.scss created"
fi

# _variables.scss
if [ -f "_variables.scss" ]; then
    echo "- _variables.scss already exists"
else
    touch _variables.scss
    echo "+ _variables.scss created"
fi

echo "-------------------"
echo ""
echo "Moving to Base"
cd ..
cd base

echo "Creating base files"
echo "-------------------"

# _animations.scss
if [ -f "_animations.scss" ]; then
    echo "- _animations.scss already exists"
else
    touch _animations.scss
    echo "+ _animations.scss created"
fi

# _typography.scss
if [ -f "_typography.scss" ]; then
    echo "- _typography.scss already exists"
else
    touch _typography.scss
    echo "+ _typography.scss created"
fi

# _utilities.scss
if [ -f "_utilities.scss" ]; then
    echo "- _utilities.scss already exists"
else
    touch _utilities.scss
    echo "+ _utilities.scss created"
fi

# _base.scss
if [ -f "_base.scss" ]; then
    echo "- _base.scss already exists"
else
    touch _base.scss
    echo "+ _base.scss created"
fi

echo "-------------------"
echo ""
echo "You're all set up! Enjoy"
echo ""
echo "Psst... Before you go :"
echo "Use below imports in your main inde.scss file :"
echo ""
echo "@import './abstract/variables';"
echo "@import './layout/header';"
echo "@import './base/animations';"
echo "@import './base/typography';"
echo "@import './components/button';"
read -p "Press any key to finish... " -n1 -s
echo ""