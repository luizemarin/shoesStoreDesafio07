import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    Product,
    ProductList,
    ProductImage,
    ProductDetails,
    ProductInfo,
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

export default function Cart() {
    return (
        <Container>
            <ProductList>
                <Product>
                    <ProductImage />
                    <ProductDetails>
                        <ProductInfo>Tenis legal</ProductInfo>
                        <ProductPrice>R$ 129,90</ProductPrice>
                    </ProductDetails>
                    <RemoveProduct>
                        <Icon />
                    </RemoveProduct>
                    <ProductAmountValue>
                        <RemoveItem>
                            <Icon />
                        </RemoveItem>
                        <ProductAmount />1
                        <AddItem>
                            <Icon />
                        </AddItem>
                        <TotalItem>R$ 129,90</TotalItem>
                    </ProductAmountValue>
                </Product>
                <TotalProduct>
                    <TotalText>Total</TotalText>
                    <TotalAmount>R$ 129,90</TotalAmount>
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
