import { useEffect } from 'react';
import {BiLoaderAlt} from 'react-icons/bi'
function Loader() {

    useEffect(()=>{
        const timer = setTimeout()
    })
    return ( 
        <div className="col-container loader">
            <div className="loader__heading">
                <h2>Загрузка...</h2>
            </div>
            <div className="loader__central">
                <div className="loader__spiner big-icon">
                    <BiLoaderAlt/>
                </div>
            </div>
            <div className="loader__desc">
                <p>Пока мы считаем данные, подпишитесь на нащих друзей</p>
            </div>
        </div>
     );
}

export default Loader;