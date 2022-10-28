import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageEditor, Linking, Dimensions } from 'react-native';
import React from "react"
const width_proportion = Dimensions.get('window').width * 0.85
const PlusMinus = (props) => {
    const imageWidthProportion = Dimensions.get('window').width * 0.75
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { this.setState({ AutonuppHubAtt: this.state.AutonuppHubAtt - 1 }) }}>
                <Text style={styles.ArgText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.ArgText}>{props.num}</Text>
            <TouchableOpacity onPress={() => { this.setState({ AutonuppHubAtt: this.state.AutonuppHubAtt + 1 }) }}>
                <Text style={styles.ArgText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ArgText: {
        fontSize: 22,
        marginTop: 10
    }
});

export default Video;