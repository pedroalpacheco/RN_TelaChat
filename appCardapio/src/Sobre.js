import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Sobre extends Component{
    static navigationOptions = {
        tabBarLabel:'Sobre',
        tabBarIcon:({focused, tinColor})=>{
            if(focused){
                return(
                    <Image source={required('../assets/images/sobre_azul.png')} style={styles.icone}/>
                );
            }else{
                return(
                    <Image source={required('../assets/images/sobre_preto.png')} style={styles.icone}/>
                );
            }
        }
    };
    render(){
        return(
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
});