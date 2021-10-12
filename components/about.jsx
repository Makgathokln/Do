import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, Button, FlatList, TextInput } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
//import { SafeAreaViewProvider } from 'react-native-safe-area-context';

import Users from './users';

const About =({route, navigation}) =>{

    const { itemId } = route.params
    const id = itemId

const [ title, setTitle] = useState()
const [subTitle, setSubTitle] = useState()
const [dsc, setDsc] =  useState()

useEffect( ()=>{
    Users.getDataById(id).once('value', snapshot =>{
        const data = snapshot.val()

        setTitle(data.title)
        setSubTitle(data.subTitle)
        setDsc(data.dsc)
    })
}, [])

const createUpdate = () => {
    Users.updateTodo(id, {
        title: title,
        subTitle: subTitle,
        dsc : dsc
    }),then(() => console.log('data updated')).catch(err => console.log(err))
}

const edit = () =>{
    const Todo = []
    Users.updateTodo(id,{
        title:title
    })
    .then(()=> console.log('updated'))
    .catch(err =>console.log(err))
    navigation.goBack()
}

const deleteTask = () => {
    Users.deleteTodo(id)
    
    .then(() => { console.log('todo deleted');
     navigation.navigate('Home')})
     .catch(err => console.log(err))
}

return(
    <>
    <SafeAreaView>
        <Header>
            <View>
                <Button onPress={() => navigation.getBack()} title={"Back"} />
            </View>
        </Header>

        <View>
            <Text>
                Todo's
            </Text>
        </View>    
        
        <View>
                <TextInput value={title}  onChangeText={ text => setTitle(text)} placeholder={"Please enter your title"}/>
                <TextInput value={subTitle}  onChangeText={ text => setSubTitle(text)} placeholder={"Please enter your subtitle"}/>
                <TextInput value={dsc}  onChangeText={ text => setDsc(text)} placeholder={"Please enter your description"}/>

            </View>
            <View>
                <Button title={"Update todos"} onPress={edit}/>
            </View>

            <View >
                <Button title={"create delete todo"} onPress={deleteTask}/>
            </View>
    </SafeAreaView>
    </>
)
}

export default About;