import styled from 'styled-components'

const Image = styled.img`
    width: 35px;
    height: 52px;
    margin: 0 5px;
    cursor:pointer;
    -webkit-user-drag: none;
`
const Thumbnail = ({ img, onClick }) => <Image src={img} onClick={onClick} />

Thumbnail.defaultProps = {
    img: '',
    onClick: () => { }
}
export default Thumbnail
