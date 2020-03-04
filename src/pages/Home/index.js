import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    ProductList,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    CartButton,
    ProductAmount,
    ProductAmountQtd,
    CartButtonText,
} from './style';

class Home extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        // eslint-disable-next-line react/no-unused-state
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('products');
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
    }

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    render() {
        const { products } = this.state;
        const { amount } = this.props;

        return (
            <Container>
                {products.map(product => (
                    <ProductList key={product.id}>
                        <ProductImage source={{ uri: product.image }} />
                        <ProductDetails>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductPrice>
                                {product.priceFormatted}
                            </ProductPrice>
                        </ProductDetails>
                        <CartButton
                            onPress={() => this.handleAddProduct(product.id)}
                        >
                            <ProductAmount>
                                <Icon
                                    name="cart-plus"
                                    size={24}
                                    color="#fdfcfc"
                                />
                                <ProductAmountQtd>0</ProductAmountQtd>
                            </ProductAmount>
                            <CartButtonText>
                                ADICIONAR AO CARRINHO
                            </CartButtonText>
                        </CartButton>
                    </ProductList>
                ))}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
