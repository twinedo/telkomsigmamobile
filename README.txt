what's needed:
1. nodejs (download https://nodejs.org/en/)
2. yarn (install https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
3. Android Studio (download https://developer.android.com/studio)
4. Android Emulator (include with Android Studio)
5. Xcode (for ios),
6. iPhone Simulator (for ios)
7. real device (android/iphone)
8. install cocoapods (for ios. download https://cocoapods.org/) 
9. vscode (text editor download https://code.visualstudio.com/)

how to run this project (android):
1. open this project,
2. or clone from repo with command "git clone https://github.com/twinedo/telkomsigmamobile.git"
3. open terminal, install node_modules with command "yarn install" / "npm install"
4. run react server with command "yarn start" / "npm start"
5. open emulator / real device
6. connect usb to real device
7. run app with "yarn android / npx react-native run-android"

how to run this project (ios):
1. open this project,
2. or clone from repo with command "git clone https://github.com/twinedo/telkomsigmamobile.git"
3. open terminal, install node_modules with command "yarn install" / "npm install"
4. command "cd ios && pod install", 
5. after successful type "cd .."
6. run react server with command "yarn start" / "npm start"
7. open simulator / real device
8. connect usb to real device
9. at folder ios/NameProject.xcworkspace, right click -> open finder 
10.at finder Macbook, right click NameProject.xcworkspace open with xcode
11. menu project -> Clean Build Folder
12. menu project -> Build
13. run app with logo play on the left task bar
14. or run with command in vscode "yarn ios / npx react-native run-ios"