import styled from 'styled-components'
import pic1 from 'assets/images/image_1.png'
import pic2 from 'assets/images/image_2.png'
import Thumbnail from 'components/Thumbnail/Thumbnail'
import { useState } from 'react'
import DraggableText from 'components/DraggableText/DraggableText'
const Container = styled.div`
    width: 607px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImageContainer = styled.div`
    position: relative;
`
const Image = styled.img`
    margin-top: 10px;
    -webkit-user-drag: none;
`
const ImageList = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const images = [pic1, pic2]
const PosterViewer = ({ texts, setActiveItem }) => {
    const [activeImage, setActiveImage] = useState(images[0]);
    return (
        <Container>
            <ImageContainer>
                <Image src={activeImage} />
                {texts.map(({ title, zoom, rotate }, i) =><DraggableText key={i} index={i} title={title} zoom={zoom} rotate={rotate} setActiveItem={setActiveItem}/> )}
            </ImageContainer>
            <ImageList>
                {images.map((img, i) => <Thumbnail key={i} img={img} onClick={() => setActiveImage(img)} />)}
            </ImageList>
        </Container>
    )
}

export default PosterViewer
