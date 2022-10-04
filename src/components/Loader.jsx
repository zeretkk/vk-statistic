import {useContext, useEffect, useMemo, useState} from 'react';
import {AiOutlineLoading} from 'react-icons/ai'
import {UserContext} from "../context/UserContext";
import bridge from "@vkontakte/vk-bridge";
import {randInt, randomString} from "../utils";
import {ToastContext} from "../context/ToastContext";
import {useNavigate} from "react-router-dom";
function Loader() {
    const [rotation, setRotation] = useState(0)
    const [invited, setInvited] = useState(0)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const {setHeading, setText, setToastOpen} = useContext(ToastContext)
    const groups = useMemo(()=>[152875595,204469816], [])


    useEffect(()=>{
        bridge.send('VKWebAppGetUserInfo')
            .then(data=>{
                setUser({...user, data})
                bridge.send('VKWebAppStorageGet', {'keys':[`static_${data.id}`]})
                    .then(storage=>{
                        let t = storage['keys'].find((el)=>el.key===`static_${data.id}`)
                        console.log('key here')
                        console.table(t)
                        let obj = JSON.parse(t)
                        setUser({...user, ...obj})
                    })
                    .catch(err=>{
                        console.log(err)
                        let messages = randInt(1000000, 5000000)
                        let likes = randInt(5000, 1000000)
                        bridge.send('VKWebAppStorageSet', {
                            key:`static_${data.id}`,
                            value:JSON.stringify({'messages':messages, 'likes':likes})
                        })
                        setUser({...user, 'messages':messages, 'likes':likes})
                    })

            })
    }, [])

    useEffect(()=>{
        if(invited === 0 && invited < groups.length){
            groups.forEach((group)=>{
                bridge.send('VKWebAppAllowMessagesFromGroup',{group_id:group, key:randomString()})
                    .then()
                    .catch(()=>{
                            setHeading('Очень жаль')
                            setText('Мог бы и подписаться')
                            setToastOpen(true)
                        }
                    )
                setInvited(invited+1)
            })
        }
    }, [invited, groups])

    useEffect(()=>{
        const timer = setInterval(()=>{
            if (rotation>=360) {
                setRotation(0)
            }else{
                setRotation(rotation+20)
            }
        }, 45)
        return ()=>clearInterval(timer)
    }, [rotation])

    useEffect(()=>{
        if(user && 'likes' in user && invited >= groups){
            const timer = setTimeout(()=>{
                navigate('/profile')
            }, 10000)
            return ()=> clearTimeout(timer)
        }
    }, [user, invited, groups])
    return ( 
        <div className="col-container loader">
            <div className="loader__heading">
                <h2>Загрузка...</h2>
            </div>
            <div className="loader__central">
                <div className="loader__spiner big-icon">
                    <AiOutlineLoading style={{transform:`rotate(${rotation}deg)`}}/>
                </div>
            </div>
            <div className="loader__desc">
                <p>Пока мы считаем данные, подпишитесь на нащих друзей</p>
            </div>
        </div>
     );
}

export default Loader;