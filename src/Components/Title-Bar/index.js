import React, { Component } from 'react';
import { TitleBar } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: '#22D66A',
    theme: 'dark'
  };

  constructor(props) {
    super(props);
    this.state = { isMaximized: true };
  }

  close = () => console.log('close');
  minimize = () => console.log('minimize');
  toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

  render() {
    return (
      <TitleBar
        title="S H U O"
        controls
        isMaximized={this.state.isMaximized}
        theme={this.props.theme}
        background={this.props.color}
        onCloseClick={this.close}
        onMinimizeClick={this.minimize}
        onMaximizeClick={this.toggleMaximize}
        onRestoreDownClick={this.toggleMaximize}
      />
    );
  }
}