import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from "../database/firebase";

const UserScreen = (props) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    firebase.db.collection("p").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Registrar Nuevo Productos"
      />
        <Button
        onPress={() => props.navigation.navigate("About")}
        title="Acerca de"
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri:
                  "https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/35663323/1600839416236.jpg",
              }}
              
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
     
      
      
    </ScrollView>
    
  );
};

export default UserScreen;
