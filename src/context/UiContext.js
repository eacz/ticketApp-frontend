import {createContext, useState} from 'react'

export const UiContext = createContext()

const UiProvider = ({children}) => {
  const [hiddenMenu, setHiddenMenu] = useState(true)
  const showMenu = () => {
    setHiddenMenu(false)
  }

  const hideMenu = () => {
    setHiddenMenu(true)
  }

  return (
    <UiContext.Provider
      value={{
        hiddenMenu,
        showMenu,
        hideMenu
      }}
    >
      {children}
    </UiContext.Provider>
  )
}

export default UiProvider
