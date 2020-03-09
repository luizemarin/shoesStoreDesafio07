import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
    Container,
    Product,
    ProductList,
    ProductImage,
    ProductDetails,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    RemoveProduct,
    ProductAmountValue,
    RemoveItem,
    ProductAmount,
    AddItem,
    TotalItem,
    TotalProduct,
    TotalText,
    TotalAmount,
    ButtonCheckout,
    ButtonCheckoutText,
} from './style';

function Cart({
    navigation,
    cart,
    total,
    removeFromCart,
    updateAmountRequest,
}) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
    }

    return (
        <Container>
            <ProductList>
                {cart.map(product => (
                    <Product key={product.id}>
                        <ProductInfo>
                            <ProductImage source={{ uri: product.image }} />
                            <ProductDetails>
                                <ProductDesc>{product.title}</ProductDesc>
                                <ProductPrice>
                                    {product.priceFormatted}
                                </ProductPrice>
                            </ProductDetails>
                            <RemoveProduct
                                onPress={() => removeFromCart(product.id)}
                            >
                                <Icons
                                    name="trash-can"
                                    size={26}
                                    color="#7159c1"
                                />
                            </RemoveProduct>
                        </ProductInfo>
                        <ProductAmountValue>
                            <RemoveItem onPress={() => decrement(product)}>
                                <Icon
                                    name="remove-circle-outline"
                                    size={18}
                                    color="#7159c1"
                                />
                            </RemoveItem>
                            <ProductAmount value={product.amount} />
                            <AddItem onPress={() => increment(product)}>
                                <Icon
                                    name="add-circle-outline"
                                    size={18}
                                    color="#7159c1"
                                />
                            </AddItem>
                            <TotalItem>{product.subtotal}</TotalItem>
                        </ProductAmountValue>
                    </Product>
                ))}
                <TotalProduct>
                    <TotalText>Total</TotalText>
                    <TotalAmount>{total}</TotalAmount>
                    <ButtonCheckout>
                        <ButtonCheckoutText>
                            Finalizar Pedido
                        </ButtonCheckoutText>
                    </ButtonCheckout>
                </TotalProduct>
            </ProductList>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
        }, 0)
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
