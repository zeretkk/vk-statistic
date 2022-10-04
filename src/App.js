import { usePlatform, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { useState } from 'react';
import {router} from './routes';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import "@vkontakte/vkui/dist/vkui.css";
import {UserContext} from './context/UserContext'
import {ToastContext} from "./context/ToastContext";
import Toast from "./components/Toast";

function App() {
  let platform = usePlatform()
  // const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [heading, setHeading] = useState(null)
  const [text, setText] = useState(null)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <>
    <ConfigProvider appearance="dark" platform={platform}>
      <AppRoot>
        <UserContext.Provider value={{user, setUser, token, setToken}}>
          {/* <Main/> */}
          <ToastContext.Provider value={{heading, setHeading, text, setText, toastOpen, setToastOpen}}>
            <Toast/>
            <RouterProvider router={router}/>
          </ToastContext.Provider>

        </UserContext.Provider>
      </AppRoot>
    </ConfigProvider>
    </>
  );
}

export default App;
