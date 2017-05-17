/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button
} from 'react-native';

export default class MagicEightBall extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.questionTextInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="Enter your question here"
                />

                <Button
                    onPress={this.onPressSubmitQuestion}
                    title="Submit your question"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    onPressSubmitQuestion() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    questionTextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
