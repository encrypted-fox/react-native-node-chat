import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function ChatCard(props) {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/robot-prod.png")} style={styles.image}/>
            <View style={styles.main}>
                <Text style={styles.chatName}>{props.chatName}</Text>
                <Text style={styles.lastMessage}>{props.lastMessage}</Text>
            </View>
            <View style={styles.sub}>
                <Text style={styles.date}>{props.date}</Text>
                <Text style={styles.time}>{props.time}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: 350,
        justifyContent: "space-between",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 30,
    },
    chatName: {
        color: "#C88A27",
        fontSize: 24
    },
    image: {
        borderWidth: 2,
        borderColor: "#F0B24F",
        borderRadius: 20,
        width: 60,
        height: 60,
    },
    lastMessage: {
        color: "#F0B24F",
        fontSize: 16
    },
    date: {
        color: "#F0B24F",
        fontSize: 16
    },
    time: {
        color: "#F0B24F",
        fontSize: 16
    },
    sub: {
        width: 60,
        marginTop: -7
    },
    main: {
        flexGrow: 1,
        paddingHorizontal: 20,
        marginTop: -7
    }
});
