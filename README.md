# NotepadAppTeachReact

## Project set up
npx react-native init NotepadAppTeachReact --template react-native-template-typescript


# Prerequisites

### iOS

- Install Xcode (from App Store desktop app)
- Run Xcode ( install additional platform tools )


### Android

Install Android Studio, Android SDK


### React Native:

```
brew install yarn
bew install watchman
brew install cocoapods

yarn global add react-native-cli
```
watchman: a tool which allows to track changes in filesystem and is used by RN bundler

cocoapods: dependency manager for Swift/Objective-C which is used for iOS build

## Run project
`yarn install && (cd ios && pod install)`

ios:
`react-native run-ios`

android:
`react-native run-android`


## Handy
- add adb commant to PATH
- use pidcat to view android logs
- React Native Console plugin inside IntelliJ
- Node Version Manager for nvm versions
