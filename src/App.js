/* --------------------------------- IMPORT --------------------------------- */
// Cores
import { useState } from 'react'
// Hooks
import { useViewport, useTheme, useLocalStorage } from './hooks/_index.js'
// Plugins
import styled, { ThemeProvider } from 'styled-components'
// Styles
import { GlobalStyles, Theme } from './GlobalStyles'

/* ----------------------------------- APP ---------------------------------- */
export default function App() {
  /* VIEWPORT SIZE */
  const viewportSize = useViewport()

  /* THEMES */
  const [autoTheme, setAutoTheme] = useState(true)
  const [userTheme, setUserTheme] = useState(undefined)
  const theme = useTheme(autoTheme, userTheme)

  /* LOCAL STORAGE */
  const [name, setName] = useLocalStorage('name', '925 Studio')

  /* APP */
  return (
    <ThemeProvider theme={theme === 'dark' ? Theme.dark : Theme.light}>
      <GlobalStyles />

      <Wrapper id='App' $height={viewportSize.height}>
        <Title>925 React App Boilerplate</Title>

        <Text>
          Width:{viewportSize.width}, Height: {viewportSize.height}
        </Text>

        <Text>Current theme mode is: {autoTheme ? 'auto' : 'user'}</Text>

        <Button
          onClick={() => {
            setAutoTheme(!autoTheme)
            setUserTheme(userTheme === 'dark' ? 'dark' : 'light')
          }}
        >
          THEME MODE
        </Button>

        <Text>Texts below will be stored in local storage.</Text>

        <Input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Wrapper>
    </ThemeProvider>
  )
}

/* --------------------------------- STYLES --------------------------------- */
const styles = {
  Wrapper: styled.div`
    position: absolute;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    width: 100vw;
    height: ${({ $height }) => $height + 'px'};

    background-color: ${({ theme }) => theme.backgroundColor};
  `,

  Title: styled.h1`
    margin-bottom: 32px;

    font-size: 64px;
    text-align: center;
    color: ${({ theme }) => theme.accentColor};
  `,

  Text: styled.h1`
    margin-bottom: 32px;

    font-size: 32px;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  `,

  Button: styled.button`
    margin-bottom: 32px;
    padding: 16px;
  `,

  Input: styled.input`
    padding: 8px;

    text-align: center;
  `,
}

const { Wrapper, Title, Text, Button, Input } = styles
