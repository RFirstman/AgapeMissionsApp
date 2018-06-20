import React, { Component } from "react";
import { StatusBar, Button, SafeAreaView, View, Text } from "react-native";

export default class JobSitesScreen extends Component {

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Job Sites</Text>
                    <Text style={styles.subTitle}>Sheila Robertson</Text>
                    <Text style={styles.text}>
                        {"1316 Airport Dr. SW\nGainesville, GA 30501\n(678) 544-5469"}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
