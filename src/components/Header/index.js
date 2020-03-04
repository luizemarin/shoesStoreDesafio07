import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo, ShopBasket } from './style';

export default function Header() {
    return (
        <Container>
            <Logo />
            <ShopBasket>
                <Icon name="basket" size={30} color="#eee" />
            </ShopBasket>
        </Container>
    );
}
