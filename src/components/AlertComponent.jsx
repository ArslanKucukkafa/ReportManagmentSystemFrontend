import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AlertComponent(res) {

  const error = () => toast.error(res.message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const succes = () => toast.success(res.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  if(res.state===false){
    return(   
    <div>
      {error}
      <ToastContainer/>
    </div>)
  }

  return (
    <div>
      {succes}
      <ToastContainer/>
    </div>
  )
}

export default AlertComponent