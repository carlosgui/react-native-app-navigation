import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default (props) => {
    const showProduto = props.route && props.route.params && props.route.params.numero ? 'Produto - '+numero : 'Nenhum produto encontrado'

    return (
        <TextoCentral bgColor="#e539c4">
            {showProduto}
        </TextoCentral>
    );
};
