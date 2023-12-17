import {useState,React} from 'react'

const useAlert = () => {
    const [useAlert, setUseAlert] = useState({show: false, text: "", type: "danger"});
    const showAlert = ({text,type='danger'}) => setUseAlert({
        show:true,
        text,
        type
    })
    const hideAlert = ({text,type='danger'}) => setUseAlert({
        show:false,
        text: "",
        type: 'danger'
    })
  return {alert,showAlert,hideAlert}
    
  
}

export default useAlert