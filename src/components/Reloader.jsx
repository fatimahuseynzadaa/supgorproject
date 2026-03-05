import React from 'react'
import { Oval } from 'react-loader-spinner'
const Reloader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
   <Oval
  height={80}
  width={80}
  color="#4fa94d"
  visible={true}
  ariaLabel="oval-loading"
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/>
    </div>
  )
}

export default Reloader