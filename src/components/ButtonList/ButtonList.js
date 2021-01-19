import React from 'react'
import styled from 'styled-components'
import { staticText } from '../../constants/resource'
import Button from '../Button/Button'

const Container = styled.div`
    padding: 50px;
    border-left: 1px solid ${({theme})=>theme.colors.borderGrey};
`
const ButtonList = ({ addText, zoomIn, zoomOut, rotate }) => {
    const actionButtons = [
        { title: staticText.newTextBlock, onClick: addText },
        { title: staticText.zoomIn, onClick: zoomIn },
        { title: staticText.zoomOut, onClick: zoomOut },
        { title: staticText.rotate, onClick: rotate },
    ]
    return (
        <Container>
            {actionButtons.map(({ title, onClick }, i) => <Button key={i} title={title} onClick={onClick} />)}
        </Container>
    )
}

export default ButtonList
