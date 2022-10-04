import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import { Icon36ClockOutline, Icon36Send } from '@vkontakte/icons';
function Profile() {
    const {user} = useContext(UserContext)
    const date =(date)=>{
        const calendar = {1:'Январь', 2:'Февраль', 3:'Март', 4:'Апрель', 5:'Май', 6:'Июнь', 7:'Июль', 8:'Август', 9:'Сентябрь', 10:'Октябрь', 11:'Ноябрь', 12:'Декабрь'}
        let ar = date.split('.')
        return `${ar[0]} ${calendar[+ar[1]]} ${ar.length>2?ar[2]:''}`
    }
    return (
        <div className={'col-container profile'}>
            <div className="profile__head">
                <img src={user['photo_200']} alt={user['first_name']}/>
                <p>{user['first_name']} {user['last_name']}</p>
                <p>{user['bdate'] && date(user['bdate'])}</p>
            </div>
            <div className="profile__statistics">
                <div className="card">
                    <Icon36Send/><p>{user['messages']}</p>
                </div>
                <div className="card">
                    <Icon36ClockOutline/><p>{user['time']}</p>
                </div>
            </div>
            <div className="profile__info"></div>
        </div>
    )
}

export default Profile