import React from 'react'
import { useRecoilValueLoadable } from 'recoil'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/common/Container'
import Image from '../components/common/Image'
import IHero from '../interfaces/hero'
import { getHeroes } from '../store/hero'

const RootContainer = styled(Container)`
  display: flex;
  backgound-color: back;
  justifycontent: center;
  alignitem: center;
  padding-left: 20em;
  padding-right: 20em;
`
const WrapperHeroesGroup = styled.div`
  margin-top: 20px;
  flexdirection: row;
`

const FullImage = styled(Image)`
  margin: 1px;
`

const Heroes: React.FC = () => {
  const heroes = useRecoilValueLoadable(getHeroes)
  const history = useHistory()

  const handleOnClick = (localized_name: string, imageName: string) => {
    history.push(
      `/herodetail?localized_name=${localized_name}&imageName=${imageName}`
    )
  }
  return (
    <RootContainer>
      {heroes.state === 'loading' ? (
        <h2>Loading...</h2>
      ) : heroes.state === 'hasValue' && heroes.contents.length === 0 ? (
        <h2>No Heroes Data.</h2>
      ) : heroes.state === 'hasValue' && heroes.contents.length > 0 ? (
        <div>
          <WrapperHeroesGroup>
            <h2>Strength</h2>
            {heroes.contents
              .filter((value) => value.primary_attr === 'str')
                  .map((data: IHero, index: number) => {
                const imageName = data.name.substring(
                  14,
                  data.name.length
                )
                return (
                  <FullImage
                    onClick={ ()=> handleOnClick(data.localized_name ,imageName)}
                    key={index}
                    src={`http://cdn.dota2.com/apps/dota2/images/heroes/${imageName}_full.png`}
                  />
                )
              })}
          </WrapperHeroesGroup>
          <WrapperHeroesGroup>
            <h2>Agi</h2>
            {heroes.contents
              .filter((value) => value.primary_attr === 'agi')
                  .map((data: IHero, index: number) => {
                    const imageName = data.name.substring(
                      14,
                      data.name.length
                    )
                return (
                  <FullImage
                   onClick={ ()=> handleOnClick(data.localized_name ,imageName)}
                    key={index}
                    src={`http://cdn.dota2.com/apps/dota2/images/heroes/${data.name.substring(
                      14,
                      data.name.length
                    )}_full.png`}
                  />
                )
              })}
          </WrapperHeroesGroup>
          <WrapperHeroesGroup>
            <h2>Int</h2>
            {heroes.contents
              .filter((value) => value.primary_attr === 'int')
                  .map((data: IHero, index: number) => {
                    const imageName = data.name.substring(
                      14,
                      data.name.length
                    )
                return (
                  <FullImage
                   onClick={ ()=> handleOnClick(data.localized_name ,imageName)}
                    key={index}
                    src={`http://cdn.dota2.com/apps/dota2/images/heroes/${data.name.substring(
                      14,
                      data.name.length
                    )}_full.png`}
                  />
                )
              })}
          </WrapperHeroesGroup>
        </div>
      ) : (
        <h2>Somethign went wrong !!!</h2>
      )}
    </RootContainer>
  )
}

export default Heroes
