import { Linking, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar, Dimensions, SafeAreaView, TextInput, Button } from 'react-native';
import React, { Component } from "react"
import { RadioButton, Divider, Checkbox } from 'react-native-paper';


const width_proportion = Dimensions.get('window').width;

export default class ScoutingSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {

            teamNumber: 0,
            matchNumber: 0,
            color: '',
            crossTarmac: 0,

            AutonuppHubAtt: 0,
            AutonuppHubComp: 0,
            AutonlowerHubAtt: 0,
            AutonlowerHubComp: 0,

            TeleopuppHubAtt: 0,
            TeleopuppHubComp: 0,
            TeleoplowerHubAtt: 0,
            TeleoplowerHubComp: 0

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


                            {/* AUTON STARTS HERE*/}


                            <Text style={{ fontSize: 25, marginTop: 10 }}>Auton</Text>
                            <Divider style={{ marginTop: 5 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.ArgText}>Cross Tarmac</Text>
                                <View style={{ marginTop: 6, marginLeft: 5 }}>
                                    <Checkbox.Android
                                        status={this.state.crossTarmac == 1 ? 'checked' : 'unchecked'}
                                        onPress={() => this.state.crossTarmac == 1 ? this.setState({ crossTarmac: 0 }) : this.setState({ crossTarmac: 1 })}
                                        style={{ marginTop: 100 }}
                                    />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 7 }}>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Upper Attempted</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonuppHubAtt: this.state.AutonuppHubAtt - 1 }) }}>
                                            <Text style={styles.ArgText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.AutonuppHubAtt}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonuppHubAtt: this.state.AutonuppHubAtt + 1 }) }}>
                                            <Text style={styles.ArgText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Upper Completed</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonuppHubComp: this.state.AutonuppHubComp - 1 }) }}>
                                            <Text style={styles.ArgText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.AutonuppHubComp}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonuppHubComp: this.state.AutonuppHubComp + 1 }) }}>
                                            <Text style={styles.ArgText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 7 }}>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Lower Attempted</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonlowerHubAtt: this.state.AutonlowerHubAtt - 1 }) }}><Text style={styles.ArgText}>-</Text></TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.AutonlowerHubAtt}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonlowerHubAtt: this.state.AutonlowerHubAtt + 1 }) }}><Text style={styles.ArgText}>+</Text></TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Lower Completed</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonlowerHubComp: this.state.AutonlowerHubComp - 1 }) }}><Text style={styles.ArgText}>-</Text></TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.AutonlowerHubComp}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ AutonlowerHubComp: this.state.AutonlowerHubComp + 1 }) }}><Text style={styles.ArgText}>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>


                            {/* TELEOP STARTS HERE*/}


                            <Text style={{ fontSize: 25, marginTop: 10 }}>Teleop</Text>
                            <Divider style={{ marginTop: 5 }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 7 }}>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Upper Attempted</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleopuppHubAtt: this.state.TeleopuppHubAtt - 1 }) }}>
                                            <Text style={styles.ArgText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.TeleopuppHubAtt}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleopuppHubAtt: this.state.TeleopuppHubAtt + 1 }) }}>
                                            <Text style={styles.ArgText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Upper Completed</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleopuppHubComp: this.state.TeleopuppHubComp - 1 }) }}>
                                            <Text style={styles.ArgText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.TeleopuppHubComp}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleopuppHubComp: this.state.TeleopuppHubComp + 1 }) }}>
                                            <Text style={styles.ArgText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 7 }}>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Lower Attempted</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleoplowerHubAtt: this.state.TeleoplowerHubAtt - 1 }) }}><Text style={styles.ArgText}>-</Text></TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.TeleoplowerHubAtt}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleoplowerHubAtt: this.state.TeleoplowerHubAtt + 1 }) }}><Text style={styles.ArgText}>+</Text></TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 20 }}>Lower Completed</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleoplowerHubComp: this.state.TeleoplowerHubComp - 1 }) }}><Text style={styles.ArgText}>-</Text></TouchableOpacity>
                                        <Text style={styles.ArgText}>{this.state.TeleoplowerHubComp}</Text>
                                        <TouchableOpacity onPress={() => { this.setState({ TeleoplowerHubComp: this.state.TeleoplowerHubComp + 1 }) }}><Text style={styles.ArgText}>+</Text></TouchableOpacity>
                                    </View>
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
