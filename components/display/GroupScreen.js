import React, { Component } from "react";
import { StatusBar, Button, SafeAreaView, View, Text } from "react-native";

export default class GroupScreen extends Component {
    render() {
        const groupMembers = [
            "Spencer Arnold",
            "Sammy Harris",
            "Kaitlyn Miller",
            "Mack Aldred",
            "Emily Briscoe",
            "Chris Lewis",
            "Emmaleigh Strickland",
            "Maddy Towles",
            "Caroline Vaverek"
        ];

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Group 5</Text>
                    <Text style={styles.subTitle}>Team Members</Text>
                    <Text style={styles.ul}>
                        {groupMembers.map(name => { return `\u2022 ${name}\n`;})}
                    </Text>
                    <Button
                        title="Job Sites"
                        onPress={() => this.props.navigation.navigate("JobSites")}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
