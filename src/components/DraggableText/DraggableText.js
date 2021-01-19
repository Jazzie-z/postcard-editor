import Draggable from 'react-draggable';
import styled from 'styled-components';
const TextContainer = styled.div`
    position: absolute;
    top: 15%;
    left: 32%;
`
const EditableText = styled.div`
    color: ${({theme})=>theme.colors.white};
    width: fit-content;    
    font-size: ${({ zoom }) => (16 + zoom) > 1 ? (16 + zoom) : 1}px;
    transform: rotate(${({ rotate }) => rotate}deg);
    &:focus{
        background: ${({theme})=>theme.colors.white};
        color: ${({theme})=>theme.colors.black};
        border: none;
        outline:none;
    }
`
const DraggableText = ({ index, title, zoom, rotate, setActiveItem }) => {
    return (
        <Draggable bounds="parent">
            <TextContainer>
                <EditableText
                    contentEditable
                    suppressContentEditableWarning 
                    zoom={zoom}
                    rotate={rotate}
                    onClick={() => setActiveItem(index)}>{title}</EditableText>
            </TextContainer>
        </Draggable>
    )
}

export default DraggableText
