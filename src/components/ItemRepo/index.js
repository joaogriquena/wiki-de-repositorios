import React from 'react'
import { ItemContainer } from './styles'

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>Joao</h3>
            <p>dio/joao</p>
            <a href='/'>Ver Repositorio</a> <br />
            <a href='/' className='remover'>Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;
