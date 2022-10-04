import { FcStatistics } from 'react-icons/fc'
import {Button} from '@vkontakte/vkui'
import bridge from '@vkontakte/vk-bridge'
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Main() {
    const [isLoading, setLoading] = useState(false)
    const {setToken} = useContext(UserContext)
    const navigate = useNavigate()
    const login =()=>{
        setLoading(true)
        bridge.send('VKWebAppGetAuthToken', {'app_id':51408739, "scope":'friends,wall,stories,status'})
        .then(data=>{
            console.log(data)
            setToken(data['access_token'])
            setLoading(false)
            navigate('/load')
        }).catch(err=>console.log(err))
    }
    return ( 
        <div className="col-container main">
                <div className="main__heading">
                    <div className="big-icon">
                        <FcStatistics/>
                    </div>
                    <h1>Привет!</h1>
                </div>
                <div className="main-discription">
                    <p>Для продолжения работы нам необходимо получить разрешение.</p>
                    <Button align='center' sizeY='regular' apperance='overlay' stretched size='l' loading={isLoading} onClick={()=>login()}>Разрешить</Button>
                    <p>Полученные данные расчитаны на основе формулы. Мы получили ее исследуя нашу фокус-группу</p>
                </div>
        </div>
     );
}

export default Main;