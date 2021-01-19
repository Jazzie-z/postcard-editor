import styled from 'styled-components'

const BtnContainer = styled.div`
    background: ${({ theme }) => theme.colors.blue};
    min-width:108px;
    height: 30px;
    padding: 10px;
    box-sizing: border-box;
    text-transform: uppercase;
    display:flex;
    align-items:center;
    justify-content:center;
    width: fit-content;
    color:white;
    margin: 5px 0;
    font-size: 10px;
    line-height: 12px;
    cursor: pointer;
    user-select: none;
`
const Button = ({ title, onClick }) => {
    return (
        <BtnContainer onClick={onClick}>
            {title}
        </BtnContainer>
    )
}
Button.defaultProps = {
    title: 'button title',
    onClick: () => { }
}

export default Button
