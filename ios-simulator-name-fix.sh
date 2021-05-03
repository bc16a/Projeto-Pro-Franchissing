OS=$(uname);
MacOS="Darwin";
if [ "$OS" == "$MacOS" ]; then # If OS is Mac
    xCodeVersion=$(xcodebuild -version | grep Xcode | cut -d ' ' -f2 );
    xCodeVersionMajor=$(echo $xCodeVersion | cut -d . -f1);
    if [ "$xCodeVersionMajor" -ge "10" ]; then
        sed -i '' "s/version.startsWith('iOS')/version.startsWith('com.apple.CoreSimulator.SimRuntime.iOS')/g" ./node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js
    fi
fi