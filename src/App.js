import { usePlatform, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { useState } from 'react';
import {router} from './routes';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import "@vkontakte/vkui/dist/vkui.css";
import {UserContext} from './context/UserContext'

function App() {
  let platform = usePlatform()
  // const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  return (
    <>
    <ConfigProvider appearance="dark" platform={platform}>
      <AppRoot>
        <UserContext.Provider value={{user, setUser, token, setToken}}>
          {/* <Main/> */}
          <RouterProvider router={router}/>
        </UserContext.Provider>
      </AppRoot>
    </ConfigProvider>
    </>
  );
}

export default App;
