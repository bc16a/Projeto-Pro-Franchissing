#!/bin/bash

xcrun simctl shutdown all
defaults write com.apple.iphonesimulator ConnectHardwareKeyboard 0
rm -rf ~/.rncache/
rm -rf $TMPDIR/react-*
rm -rf node_modules/
rm -rf ios/build/
rm -rf android/build/
rm -rf android/app/build/
npm cache clean --force
watchman watch-del-all 
yarn cache clean 
yarn
yarn fix-third-party
cd ios && pod install
cd ..
npm cache clean
watchman watch-del-all && yarn cache clean && yarn install
yarn fix-third-party
cd ios && pod install
cd ..
yarn environment
ECHO  $'\n\n\n'
ECHO  $'OH NO, PANIC BRO!'
ECHO  $'\n\n\n'
ECHO  $'Abra o XCode e dê um Clean + Build (CMD+Opt+SHIFT+K ; CMD+B)\n\n'
ECHO  $'Em seguida, execute o comando abaixo: \n\n'
ECHO  $'yarn start -- --reset-cache \n\n'
