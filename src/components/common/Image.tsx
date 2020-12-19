import styled from 'styled-components'

const Button = styled.img`
  width: 50px;
  height: 78px;
  object-fit: cover;
  &:hover {
    transform: scale(1.5);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export default Button
