import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import SvgUri from 'react-native-svg-uri';
import backArrow from "../assets/images/chevron-left-solid.svg";
import Svg from "react-native-svg";

export default function LinksScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style = {styles.menu}>
                <SvgUri
                    width="40"
                    height="40"
                    source={backArrow}
                />
                <Text style={styles.getStartedText}>Беседы</Text>
                <SvgUri
                    width="40"
                    height="40"
                    source={backArrow}
                />
            </View>
            <View></View>
            <View></View>
            <View></View>
        </ScrollView>
    );
}

LinksScreen.navigationOptions = {
    title: 'Chats',
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 40
    },
    back_img: {
        width: 40,
        height: 40,
    }
});
