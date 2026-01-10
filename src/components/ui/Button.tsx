import type { ButtonHTMLAttributes } from "react"
import { Link } from "react-router-dom"

type ButtonVariant = 'primary' | 'secondary'

type BaseProps = {
    variant?: ButtonVariant
    className?: string
}

type TextOnly = {
    text: string
    children?: never
}

type WithChildren = {
    children: React.ReactNode
    text?: never
}

type ContentProps = TextOnly | WithChildren

type LinkButtonProps = BaseProps &
    ContentProps & {
        as: 'link'
        to: string
    }

type NativeButtonProps = BaseProps &
    ContentProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button'
    }

type ButtonProps = LinkButtonProps | NativeButtonProps

const baseStyles = "flex items-center justify-center h-12 rounded-md font-semibold transition-colors duration-200 focus:outline-none w-[160px]"

const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-transparent border border-gray-200 duration-700 text-black hover:bg-black hover:text-white focus:ring-black transition-color",
}

const Button: React.FC<ButtonProps> = ({ children, className = '', text, variant = 'primary', ...props }) => {
    const styles = `${baseStyles} ${variantStyles[variant]} ${className}`
    const content = text ?? children

    if (props.as === 'link') {
        return <Link to={props.to} className={styles}>{content}</Link>
    }

    return (
        <button className={styles} {...props}>{content}</button>

    )
}

export default Button