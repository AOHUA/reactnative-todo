/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class Row extends Component {
  render() {
    const { complete } = this.props;
    const textComponent = (
      <TouchableOpacity style={styles.textWrap} onLongPress={() => this.props.onToggleEdit(true)}>
        <Text style={[styles.text, complete && styles.complete]}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
    const removeButton = (
      <TouchableOpacity onPress={this.props.onRemove}>
        <Text style={styles.destory}>Remove</Text>
      </TouchableOpacity>
    )
    const editingComponent = (
      <TextInput
        onChangeText={this.props.onUpdate}
        autoFocus
        value={this.props.text}
        style={styles.input}
        multiline
      />
    )
    const doneButton = (
      <TouchableOpacity style={styles.done} onPress={() => this.props.onToggleEdit(false)}>
        <Text style={styles.doneText}>Save</Text>
      </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={this.props.onComplete}
        />
        {
          this.props.editing ? editingComponent : textComponent
        }
        {
          this.props.editing ? doneButton : removeButton
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  text: {
    fontSize: 24,
    paddingTop: 2,
    color: '#4D4D4D'
  },
  destory: {
    color: '#785472',
    fontSize: 20,
    paddingTop: 4
  },
  done: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#23B390',
    padding: 5
  },
  doneText: {
    fontSize: 20,
    color: '#23B390'
  },
  input: {
    height: 100,
    flex: 1,
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 16,
    paddingRight: 16,
    color: '#4D4D4D'
  }
});
