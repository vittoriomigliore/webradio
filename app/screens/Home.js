import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Player } from '../components/Player';
import myRadio from '../config/myRadio'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Header
        iconUri={myRadio.getIconUri()}
    />
    <Player
        progressInterval = {2000} 
        radio = {myRadio}
    />
  </Container>
);
