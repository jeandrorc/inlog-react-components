import React, { useEffect, useState } from 'react'
import {
  Atribute,
  Atributes,
  Header,
  Point,
  Points,
  Title,
  Wrapper
} from './styles'

interface StrengthProps {
  value: string
  validate: (value: boolean) => void
}

const StrengthPassword: React.FC<StrengthProps> = ({ value, validate }) => {
  const [color, setColor] = useState('')
  const [characters, setCharacters] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [strength, setStrength] = useState(0)
  const [specialCharacters, setSpecialCharacters] = useState(false)

  const strengthString = () => {
    let points = 100
    if (value.search(/[A-Z]/) < 0) {
      setUppercase(false)
      points = points - 100 / 6
    } else {
      setUppercase(true)
    }
    if (value.search(/[0-9]/) < 0) {
      setNumber(false)
      points = points - 100 / 6
    } else {
      setNumber(true)
    }
    if (value.length < 8) {
      setCharacters(false)
      points = points - 100 / 6
    } else {
      setCharacters(true)
    }
    if (value.search(/[a-z]/) < 0) {
      points = points - 100 / 6
    }
    if (value.search(/[a-z]/) < 0) {
      setLowercase(false)
      points = points - 100 / 5
    } else {
      setLowercase(true)
    }
    if (!['#', '@', '$', '&'].some((v) => value.includes(v))) {
      setSpecialCharacters(false)
      points = points - 100 / 6
    } else {
      setSpecialCharacters(true)
    }
    if (value !== '') {
      setStrength(points)
    }
    setColor(
      points <= 20
        ? 'dangerLight'
        : points <= 60
        ? 'warningLight'
        : points > 60
        ? 'successLight'
        : 'gray100'
    )
    return points === 100
  }

  useEffect(() => {
    validate(strengthString())
  }, [value])

  return (
    <Wrapper>
      <Header>
        <Title>Força da senha</Title>
        <Points>
          <Point
            color={value?.length > 0 && strength >= 20 ? color : 'gray100'}
          />
          <Point
            color={value?.length > 0 && strength >= 40 ? color : 'gray100'}
          />
          <Point
            color={value?.length > 0 && strength >= 60 ? color : 'gray100'}
          />
          <Point
            color={value?.length > 0 && strength >= 80 ? color : 'gray100'}
          />
          <Point
            color={value?.length > 0 && strength > 80 ? color : 'gray100'}
          />
        </Points>
      </Header>
      <Atributes>
        <Atribute
          color={
            value === ''
              ? ''
              : value?.length > 0 && !characters
              ? 'danger'
              : 'success'
          }
        >
          Pelo menos 8 caractere
        </Atribute>
        <Atribute
          color={
            value === ''
              ? ''
              : value?.length > 0 && !uppercase
              ? 'danger'
              : 'success'
          }
        >
          Pelo menos 1 letra maiúscula
        </Atribute>
        <Atribute
          color={
            value === ''
              ? ''
              : value?.length > 0 && !number
              ? 'danger'
              : 'success'
          }
        >
          Pelo menos 1 número
        </Atribute>
        <Atribute
          color={
            value === ''
              ? ''
              : value?.length > 0 && !specialCharacters
              ? 'danger'
              : 'success'
          }
        >
          Pelo menos 1 caracter especial ({'# @ $ &'})
        </Atribute>
        <Atribute
          color={
            value === ''
              ? ''
              : value?.length > 0 && !lowercase
              ? 'danger'
              : 'success'
          }
        >
          Pelo menos 1 letra minúscula
        </Atribute>
      </Atributes>
    </Wrapper>
  )
}

export default StrengthPassword
