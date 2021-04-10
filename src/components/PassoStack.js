import React from 'react';
import { View, Button } from 'react-native';

export default props => (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                {props.voltar? <Button title="Voltare" onPress={() => { props.navigation.goBack()} }/> : false }
                {props.avancar? <Button title="Avancare" onPress={() => { props.navigation.navigate(props.avancar)} }/> : false }
            </View>
            <View style={{ flex: 1 }}>
                {props.children}
            </View>
        </View>
  );