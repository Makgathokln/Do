import { Button, Image, SafeAreaView, Text, View, StyleSheet, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Avatar, Input, ListItem, Header } from 'react-native-elements';
import Users from './users';

const Adduser = ({navigation}) => {
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [dsc, setDsc] = useState()


    const createTodo= () =>{
        const todos = {
            title : title,
            subTitle : subTitle,
            dsc : dsc
        }
        Users.createTodo(todos).then(() => {console.log('todo created'); navigation.navigate('Home')}).catch(err => console.log(err))
    }
    return(
        <>
        <SafeAreaView>
            <Header>
                <Button title = {"Back"} onPress={()=> navigation.goBack()}/>
            </Header>

            <View>
            <Text >
                Add new Todo
            </Text>                    
            </View>

            <View>
                <TextInput onChangeText={ text => setTitle(text)} placeholder={"Please enter your title"}/>
                <TextInput onChangeText={ text => setSubTitle(text)} placeholder={"Please enter your sub-title"}/>
                <TextInput  onChangeText={ text => setDsc(text)} placeholder={"Please enter your description"}/>

            </View>

            <View >
                <Button title={"Create new todos"} onPress={createTodo}/>
            </View>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    viewCover : {
        padding: 2
    },
    button: {
        width: "100%"
    },
    cover:{
        backgroundColor:"red"
    },
})



export default Adduser;