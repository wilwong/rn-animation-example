import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function NaivePage() {
	const [opacity, setOpacity] = useState(1);

	function roundTo2dec(num){
		return Math.round(num *100) / 100;
	}

	function handleScrollToBlur(e){
		if(e.nativeEvent.contentOffset.y > 0){
			setOpacity(roundTo2dec( Math.abs(e.nativeEvent.contentOffset.y-300) /300 ) );
		}else{
			setOpacity(1);
		}
	}

	return(
		<View >
			{/* Check the console and how the image rerenders */}
			{console.log('Rerendering Opacity (naive): ' + opacity) }
			
			<Image 
				style={{
					...styles.heroImage,
					opacity: opacity
				}}
				source={require('../assets/product-1.jpeg')}
			/>

			<ScrollView onScroll={handleScrollToBlur} scrollEventThrottle={1}>
				<View style={styles.scrollWindow}>
					<Text style={styles.title}>A Naive Implementation</Text>
					<Text>The naive version is more straight forward but less performant. It retreives a value from the controlling component (the scrollview), saves it in state, and rerenders the image everytime the state changes. There is a console.log in the render portion of the code, and you can see it prints a message in the console everytime the view rerenders.
					</Text>
					<Text></Text>
					<Text></Text>
					<Text>Scroll up and try.</Text>
				</View>
			</ScrollView>
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