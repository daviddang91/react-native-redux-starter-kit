# React Native Redux Starter Kit

A starter boilerplate for a mobile app using React Native and Redux.

[![Dependency Status](https://david-dm.org/daviddang91/react-native-redux-starter-kit.svg?style=flat)](https://david-dm.org/daviddang91/react-native-redux-starter-kit)
[![devDependency Status](https://david-dm.org/daviddang91/react-native-redux-starter-kit.svg?style=flat)](https://david-dm.org/daviddang91/react-native-redux-starter-kit)

## Demo

iOS | Android
 :--:| :-----:
 ![ios-demo](./img/iOS.gif) | ![android-demo](./img/Android.gif)

## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [Android Marshmallow](https://www.android.com/versions/marshmallow-6-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React JS](https://reactjs.org/) is a JavaScript library
- [React Native](https://facebook.github.io/react-native/) `0.46.4` for building native apps using react
- [Redux](http://rackt.github.io/redux/index.html) `3.7.x` a predictable state container for Javascript apps
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [NativeBase](https://nativebase.io/) `2.3.3` a UI components for React Native
- [Immutable](https://facebook.github.io/immutable-js/) Immutable persistent data collections for Javascript
- [Navigation for React Native](https://reactnavigation.org/) a router based on new React Native Navigation API


## Libraries
- [NativeBase](https://nativebase.io/) `2.3.3`

## Get Started


#### 1. Installation

On the command prompt run the following commands

```sh
$ git clone git@github.com:daviddang91/react-native-redux-starter-kit.git

$ cd react-native-redux-starter-kit/

$ npm install
```

#### 2. Simulate for iOS

**Method One**

*	Open the project in Xcode from **ios/App.xcodeproj**.

*	Hit the play button.


**Method Two**

*	Run the following command in your terminal.

```sh
$ react-native run-ios
```

#### 3. Simulate for Android

*	Make sure you have an **Android emulator** installed and running.

*	Run the following command in your terminal.

```sh
$ react-native run-android
```

## Setup ES6+Babel+JSX Linting with Atom/Nuclide

This sets up Atom to properly lint ES6+Babel+JSX using Airbnb's .eslintrc as a starting point.

## Steps

1. Download [Atom](https://atom.io/) and get these two packages: [Linter](https://atom.io/packages/linter) and [Linter-ESLint](https://atom.io/packages/linter-eslint)
2. Run `npm i -D eslint eslint-config-airbnb babel-eslint eslint-plugin-babel eslint-plugin-react eslint-plugin-react-native eslint-plugin-import eslint-plugin-jsx-a11y` from your project root.
3. Add `"extends": "airbnb"` to your .eslintrc and `"plugins": [ "babel", "react", "react-native", "jsx-a11y" ]`
4. Run `apm install linter-eslint` this also installs `linter` which clashes with nuclide diagnostics
5. Run `apm disable linter` to stop the linter clashing with nuclide

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
