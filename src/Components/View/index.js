import React, { Component } from 'react';
import { View, Text } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#053D42',
    theme: 'dark'
  };

  render() {
    return (
      <View
        color={this.props.color}
        background
        padding="20px"
        horizontalAlignment="center"
        verticalAlignment="center"
        width="60vw"
        height="100vh"
      >
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Welcome to S H U O, an exam entry and analyzing program.</Text>
      </View>
    );
  }
}