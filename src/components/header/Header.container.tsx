import React, { FC, useCallback } from "react"
import Header from "./Header"

const HeaderContainer: FC = () => {

  const handlePrint = useCallback(() => {
    if(typeof window === "undefined") return
      setTimeout(() => { window.print() })
  }, [])

  return (
    <Header handlePrint={handlePrint} />
  )
}

export default HeaderContainer