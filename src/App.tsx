import './style.css'
import IMAGE from './react.png'
import { ClickCounter } from './ClickCounter'

export const App = (): any => {
  return (
    <>
      <h1>
        React Typescript starter - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <ClickCounter />
    </>
  )
}
