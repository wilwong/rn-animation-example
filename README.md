# React Native Animation Example

This repo showcase the methods of making an animation.

The naive version is more straight forward but less performant. It retreives a value from the controlling component (the scrollview), saves it in state, and rerenders the image everytime the state changes. There is a console.log in the render portion of the code, and you can see it prints a message in the console everytime the view rerenders.

The RN animated version uses the module `Animated` provided by `react-native`. Although the code suggests a value is retreived form the controlling component to save in the state as well, however, that's not what's happening under the hood. `Animated` is actually React Native's declaractive method to get components binded on the native realm of the app, without coming back to the javascript realm. There is also a console.log in the render portion of this code, and you can see it prints a message on the first render and never again, even when the image's opacity is reacting to the scroll.


## Usage

Assuming you have `yarn` and `expo-cli` installed:
```
yarn install
yarn start
```

then follow the instructions to start iOS/android simulations.

*This project doesn't work on the browser*