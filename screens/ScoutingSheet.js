import { Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar, Dimensions, SafeAreaView, TextInput } from 'react-native';
import React, { Component } from "react"
import { RadioButton } from 'react-native-paper';


const width_proportion = Dimensions.get('window').width;

export default class ScoutingSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamNumber: 0,
            matchNumber: 0,
            color: ''
        }
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
                <View style={styles.TopBottomBanner}>
                    <Text style={styles.Title}>Midknight Inventors Scouting App</Text>
                </View>
                <View style={styles.MainContent}>
                    <ScrollView>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 22 }}>Team #</Text>
                            <View style={styles.InputView}>
                                <TextInput
                                    style={styles.InfoInput}
                                    keyboardType='numeric'
                                    value={this.state.teamNumber}
                                    onChangeText={(Number) => { this.setState({ teamNumber: Number }) }}
                                >
                                </TextInput>
                            </View>
                            <Text style={styles.ArgText}>Match #</Text>
                            <View style={styles.InputView}>
                                <TextInput
                                    style={styles.InfoInput}
                                    keyboardType='numeric'
                                    value={this.state.matchNumber}
                                    onChangeText={(Number) => { this.setState({ matchNumber: Number }) }}
                                >
                                </TextInput>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 7, alignItems: 'center' }}>
                                <Text style={{ fontSize: 22 }}>Team Color:</Text>
                                <View style={styles.TeamColor}>
                                    <RadioButton.Android
                                        value="Red"
                                        status={this.state.color === 'Red' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ color: 'Red' })}
                                        color='red'
                                    />
                                    <Text style={{ fontSize: 20, color: 'red' }} >Red</Text>
                                </View>

                                <View style={styles.TeamColor}>
                                    <RadioButton.Android
                                        value="Blue"
                                        status={this.state.color === 'Blue' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ color: 'Blue' })}
                                        color='blue'
                                    />
                                    <Text style={{ fontSize: 20, color: 'blue' }}>Blue</Text>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    ArgText: {
        fontSize: 22,
        marginTop: 10,
    },
    TeamColor: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    TopBottomBanner: {
        backgroundColor: 'grey',
        flex: 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    MainContent: {
        flex: 0.95,
        padding: 10
    },
    InputView: {
        borderColor: 'grey',
        width: width_proportion * 0.8,
        borderWidth: 1,
        height: 35,
        borderRadius: 3,
        marginTop: 10
    },
    InfoInput: {
        padding: 5,
        fontSize: 23
    }
});
