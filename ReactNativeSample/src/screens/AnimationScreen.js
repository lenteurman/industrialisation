import React, { Component } from 'react';
import SampleState from '../components/SampleState';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {

    static navigationOptions = {
        title: 'Animation',
    };
    
    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
    }
  
    componentDidMount () {
        this.spin()
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
        this.spinValue,
        {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true
        },
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
        <View style={styles.container}>
            <Animated.Image
                style={{
                    flex: 1, 
                    width: null, 
                    height: null, 
                    resizeMode: 'contain',
                    transform: [{rotate: spin}]}}
                source={{uri: 'https://pics.me.me/random-beaver-shot-mematic-net-https-t-co-17pssxlfen-11233447.png'}}
            />
        </View>
        );
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
