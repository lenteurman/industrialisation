import React, { Component } from 'react';
import SampleState from '../components/SampleState';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';

export default class AnimationScreen extends Component {

  static navigationOptions = {
    title: 'Animation',
  };

  render() {
    return (
      <SampleState />
    );
  }
}
