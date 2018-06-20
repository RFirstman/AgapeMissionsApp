import React, { Component } from "react";
import { StatusBar, Button, SafeAreaView, View, Text } from "react-native";

export default class GroupScreen extends Component {
    render() {
        const groupMembers = [
            "Watchman Irakoze",
            "Calla Lee",
            "Bree Lee",
            "Pierce Pittman",
            "Haley Arnold Dennis",
            "Wendell Dailey",
            "Katie Garcia"
        ];

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Group 1</Text>
                    <Text style={styles.subTitle}>Team Members</Text>
                    <Text style={styles.ul}>
                        {groupMembers.map(name => { return `\u2022 ${name}\n`;})}
                    </Text>
                    <Text style={styles.text}>Individual group information will go here.</Text>
                    <Button
                        title="Job Sites"
                        onPress={() => this.props.navigation.navigate("JobSites")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
