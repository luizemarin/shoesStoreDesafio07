import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Logo, ShopBasket } from './style';

function Header({ navigation }) {
    return (
        <Container>
            <Logo />
            <ShopBasket onPress={() => navigation.navigate('Cart')}>
                <Icon name="basket" size={30} color="#eee" />
            </ShopBasket>
        </Container>
    );
}

export default connect(
    state => ({ cartSize: state.cart.length }),
    null
)(Header);
