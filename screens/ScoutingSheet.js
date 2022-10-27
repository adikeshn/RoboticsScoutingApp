import { Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar, Dimensions, SafeAreaView } from 'react-native';
import React, { Component } from "react"



export default class ScoutingSheet extends Component {
    constructor(props) {
        super(props);
    }

    containerStyle = function (options) {
        return {
            flex: 1,
            backgroundColor: '#fff',
            flexDirection: 'column',
            marginTop: StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={this.containerStyle()}>
                <View>
                    <Text>Hello world!</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

});
