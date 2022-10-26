/* --------------------------------- IMPORT --------------------------------- */
// Cores
import { useState } from 'react'
// Hooks
import useViewport from './hooks/_index.js'
// Plugins
import styled, { ThemeProvider } from 'styled-components'
// Styles
import { GlobalStyles, Theme } from './GlobalStyles'

/* ----------------------------------- APP ---------------------------------- */
export default function App() {
  // responsive viewport hook
  const viewportSize = useViewport()

  // auto theme by default
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(darkTheme ? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme === 'dark' ? Theme.dark : Theme.light}>
      <GlobalStyles />

      <Wrapper id='App' $height={viewportSize.height}>
        <Title>925 React App Boilerplate</Title>

        <Text>
          Width:{viewportSize.width} Height: {viewportSize.height}
        </Text>
      </Wrapper>
    </ThemeProvider>
  )
}

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
    color: ${({theme}) => theme.accentColor};
  `,

  Text: styled.h1`
    font-size: 32px;
    text-align: center;
    color: ${({theme}) => theme.textColor};
  `,
}

const { Wrapper, Title, Text } = styles
