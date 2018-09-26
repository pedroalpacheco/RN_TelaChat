
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horario';
import Sobre from './src/Sobre';

const Navegador = TabNavigator({
  Home:{
    screen:Home
  },
  Contato:{
    screen:Contato
  },
  Horarios:{
    screen:Horarios
  },
  Sobre:{
    screen:Sobre
  }
});

export default Navegador;