import {useContext, useEffect} from "react";
import {ToastContext} from "../context/ToastContext";
import {RiNotificationBadgeFill} from 'react-icons/ri'

function Toast() {
    const {heading, text, toastOpen, setToastOpen} = useContext(ToastContext)
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setToastOpen(false)
        }, 5000)
        return  ()=> clearTimeout(timer)
    }, [toastOpen])
    return (
        <div className={`toast ${toastOpen?'':'d-none'}`}>
            <div className="toast__header">
                <p>
                    <span><RiNotificationBadgeFill/></span>
                    {heading}h2312312
                </p>
            </div>
            <div className="toast__content">
                <p>{text}w2312312321</p>
            </div>

        </div>
    )
}

export default Toast