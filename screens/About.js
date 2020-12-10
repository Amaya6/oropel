import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Avatar } from "react-native-elements";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
            OROPEL REGISTER Product S.A
            ------------------------------------
            Es una app elaborada por Rafael Amaya,
            para almacenar el nombre y precio de
            las fragancias que tenemos disponibles.
            para mas informacion visita:
            ------------------------------------
            oropel.company.site
        </Text>
        <Avatar
             source={{
              uri:
                'https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/35663323/1600839416236.jpg',
            }}
            rounded
            size="xlarge"
            
            />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: '#54829c',
    marginHorizontal: 20,
  },
  text: {
      color:'white',
    fontSize: 20,
    margin:20,
    fontWeight:"bold"
  },
});