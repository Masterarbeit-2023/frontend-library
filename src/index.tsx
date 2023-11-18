import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

interface ButtonProps {
  className: string;
}

export const LoginButton = ({className}: ButtonProps) => {
  return <button className={className}>Login</button>
}


export const LogoutButton = ({className}: ButtonProps) => {
  return <button className={className}>Logout</button>
}