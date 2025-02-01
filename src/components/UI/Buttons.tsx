interface ButtonsProps {
    className:String,
    text:String,
    onClick?:() => void
}

const Button = ({className, text, onClick}:ButtonsProps) => {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>{text}</button>
  )
}

export default Button