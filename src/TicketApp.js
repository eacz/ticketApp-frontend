import SocketProvider from "./context/SocketContext"
import UiProvider from "./context/UiContext"
import RouterPage from "./pages/RouterPage"

const TicketApp = () => {
  return (
    <>
      <AppState>
        <RouterPage />
      </AppState>
    </>
  )
}

const AppState = ({children}) => {
  return (
    <SocketProvider>
      <UiProvider>
        {children}
      </UiProvider>
    </SocketProvider>
  )
}

export default TicketApp
