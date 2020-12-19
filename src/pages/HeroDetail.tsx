import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Container from '../components/common/Container'

const RootContainer = styled(Container)`
  display:flex;
  justify-content: center;
`

const WrapperContent = styled(Container)`
  background-color: #4b5162;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15em;
  display: flex;
  flex-direction: column;
  backgound-color: back;
  align-items:center;
`
const ImageCard = styled.img`
  object-fit: fil;
  min-width: 250px;
  max-height: 150px
`
const TitleName = styled.h1`
  color: white;
`
const HeroeDetail: React.FC = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  return (
    <RootContainer>
      <WrapperContent>
        <TitleName>{query.get('localized_name') ?? ''}</TitleName>
        <ImageCard
          src={`http://cdn.dota2.com/apps/dota2/images/heroes/${
            query.get('imageName') ?? ''
          }_full.png`}
        />
      </WrapperContent>
    </RootContainer>
  )
}

export default HeroeDetail
