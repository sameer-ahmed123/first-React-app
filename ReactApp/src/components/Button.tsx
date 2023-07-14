import { ReactNode } from "react"

interface ButtonProps{
    children:ReactNode
    color?:"primary" | "secondary" | "danger" | "info" | "success" | "warning"
    onClick: ()=>void
}

function Button({children,onClick, color="primary"}:ButtonProps) {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>{children} </button>
  )
}

export default Button