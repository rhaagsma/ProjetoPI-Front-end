import React from "react"


const Modal = ({ children }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
        <div className="p-3 py-10 bg-white rounded-md shadow-lg max-w-sm mx-auto max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      
      </div>
    )
  }

export default Modal