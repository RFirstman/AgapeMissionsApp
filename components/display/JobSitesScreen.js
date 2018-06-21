import React, { Component } from "react";
import { StatusBar, Button, SafeAreaView, View, Text } from "react-native";

export default class JobSitesScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Job Sites</Text>
                    <Text style={styles.subTitle}>Mary Wallace</Text>
                    <Text style={styles.text}>
                        {"5827 Jim Crow Road\nFlowery Branch, GA 30501\n(770) 967 6448\n"}
                    </Text>
                    <Text style={styles.text}>Deck construction and ramp construction {"\n"}</Text>
                    <Text style={styles.subTitle}>Jack and Pat Bennett</Text>
                    <Text style={styles.text}>Deck construction and ramp construction</Text>
                </View>
            </SafeAreaView>
        );
    }
}
