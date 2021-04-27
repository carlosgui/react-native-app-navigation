import React from 'react';
import TextoCentral from '../components/TextoCentral';
import { View, Button } from 'react-native'

export default (props) => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1}}>
                <TextoCentral bgColor="#33fa72" ftColor='#000'>
                    Tela D
                </TextoCentral>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button 
                    title='Abrir'
                    onPress={() => props.navigation.openDrawer()}
                />
                <Button 
                    title='Fechar'
                    onPress={() => props.navigation.closeDrawer()}
                    // onPress={() => props.navigation.toggleDrawer()} if open close if close open
                />
            </View>
        </View>
        
    );
};
