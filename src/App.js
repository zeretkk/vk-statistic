import { usePlatform, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import './App.scss';
import "@vkontakte/vkui/dist/vkui.css";
import {UserContext} from './context/UserContext'
import {ToastContext} from "./context/ToastContext";
import Toast from "./components/Toast";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Profile from "./components/Profile";
import bridge from "@vkontakte/vk-bridge";

function App() {
  let platform = usePlatform()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [heading, setHeading] = useState(null)
  const [text, setText] = useState(null)
  const [toastOpen, setToastOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    bridge.send('VKWebAppInit', {})
    navigate('/')
  },[])

  return (
    <>
    <ConfigProvider appearance="dark" platform={platform}>
      <AppRoot>
        <UserContext.Provider value={{user, setUser, token, setToken}}>
          <ToastContext.Provider value={{heading, setHeading, text, setText, toastOpen, setToastOpen}}>
            <Toast/>
            {/*<p>{window.location}</p>*/}
              <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/load'} element={<Loader/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
              </Routes>
          </ToastContext.Provider>
        </UserContext.Provider>
      </AppRoot>
    </ConfigProvider>
    </>
  );
}

export default App;
