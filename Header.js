import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 5,
        paddingTop: 5,
        position: "relative",
        height: 80
    },
    headerText: {
        fontSize: 18,
        color: "#000",
        textAlign: "center"
    },

});
export default Header;
