/* eslint-disable default-case */
import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';
import ViewBox from '../View'
import DataInput from '../DataInput'
import DataViz from '../DataViz'

export default class extends Component {
  static defaultProps = {
    color: '#22D66A',
    theme: 'dark'
  };

  constructor() {
    super();
    this.state = {
      selected: 'Entry'
    }
  }

  render() {
    return (
      <NavPane openLength={200} push color={this.props.color} theme={this.props.theme}>
        {this.renderItem('Home', <ViewBox />)}
        {this.renderItem('Entry', <DataInput />)}
        {this.renderItem('Data Viz', <DataViz />)}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        icon={this.renderIcon(title)}
        theme="dark"
        background="#1b1b1b"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }

  renderIcon(name) {
    const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
    switch(name) {
    case 'Home':
      return (
        <svg width="19px" height="19px" viewBox="0 0 576 512"><path fill={fill} d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>

      );
    case 'Entry':
      return (
        <svg width="19px" height="19px" viewBox="0 0 576 512"><path fill={fill} d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"/></svg>
        );
    case 'Data Viz':
      return (
        <svg width="19px" height="19px" viewBox="0 0 512 512"><path fill={fill} d="M500 384c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v308h436zM372.7 159.5L288 216l-85.3-113.7c-5.1-6.8-15.5-6.3-19.9 1L96 248v104h384l-89.9-187.8c-3.2-6.5-11.4-8.7-17.4-4.7z"/></svg>
      );
    }
  }
}