import React, { useState } from 'react'
import PosterViewer from 'components/PosterViewer/PosterViewer'
import styled from 'styled-components'
import ButtonList from '../components/ButtonList/ButtonList'
import { staticText } from '../constants/resource'
const Container = styled.div`
    padding: 20px;
    display: flex;
`
const rotationValue = 90;
const maxRotationValue = 360;
const zoomValue = 1;
const PosterEditor = () => {
    const [texts, setTexts] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const addText = () => {
        if(!texts.length) setActiveItem(0)
        setTexts(prev => [...prev, { title: staticText.newText, zoom: 0, rotate: 0 }])
    }
    const changeZoom = (value) => {
        let payload = [...texts]
        if (payload[activeItem]) {
            payload[activeItem].zoom += value
            setTexts(payload)
        }
    }
    const rotate = () => {
        let payload = [...texts]
        if (payload[activeItem]) {
            payload[activeItem].rotate += rotationValue;
            if (payload[activeItem].rotate >= maxRotationValue) payload[activeItem].rotate = 0
            setTexts(payload)
        }
    }
    return (
        <Container>
            <PosterViewer texts={texts} setActiveItem={setActiveItem} />
            <ButtonList addText={addText} zoomIn={() => changeZoom(zoomValue)} zoomOut={() => changeZoom(-zoomValue)} rotate={rotate} />
        </Container>
    )
}

export default PosterEditor
