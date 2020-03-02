import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, ScrollView } from 'react-native';

export default function RnAnimatedPage() {

	const [opacity, setOpacity] = useState(new Animated.Value(1));

	return(

		<View >
			{/* Check the console and see the magic;D */}
			{console.log('Rerendering Opacity (RN) : ' + opacity) }
			
			<Animated.Image 
				style={{
					...styles.heroImage,
					opacity: opacity.interpolate({
						inputRange: [0, 300],
						outputRange: [1, 0],
					})
				}} 
				source={require('../assets/product-2.jpeg')}
			/>

			<Animated.ScrollView onScroll={Animated.event(
					[{
						nativeEvent: {
							contentOffset: {y: opacity},
						},
					}],
					{useNativeDriver: true}, // <-- Add this
				)}
				scrollEventThrottle={1}>

				<View style={styles.scrollWindow}>
					<Text style={styles.title}>Animation with RN Animated and Interpolation</Text>
					<Text>The RN animated version uses the module Animated provided by react-native. Although the code suggests a value is retreived form the controlling component to save in the state as well, however, that's not what's happening under the hood. Animated is actually React Native's declaractive method to get components binded on the native realm of the app, without coming back to the javascript realm. There is also a console.log in the render portion of this code, and you can see it prints a message on the first render and never again, even when the image's opacity is reacting to the scroll.
					</Text>
					<Text></Text>
					<Text></Text>
					<Text>Scroll up and try.</Text>
				</View>
			</Animated.ScrollView>
		</View>
	);

}

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
	heroImage: {
		height:300,
		width:dimensions.width,
		position:'absolute'
	},
	scrollWindow:{
		backgroundColor: '#fff',
		marginTop: 300,
		padding: 16,
		minHeight:dimensions.height,
	},
	title:{
  	paddingTop: 15,
  	paddingBottom: 15,
  	fontSize: 16,
  	fontWeight: 'bold'
  }
});

