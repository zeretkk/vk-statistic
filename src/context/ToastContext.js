import {createContext} from "react";

export const ToastContext = createContext({heading:null, setHeading:undefined, text:null, setText:undefined, toastOpen:false, setToastOpen:undefined})