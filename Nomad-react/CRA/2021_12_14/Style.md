# Style 적용

- react에서 스타일을 주는 법은 여러가지가 있지만,

```js
import Button from './Button'
import styles from './App.module.css'
import { useState } from 'react'
function App() {
  const [counter, setValue] = useState(0)
  return (
    <div>
      <h1 className={styles.title}>Welcome Back</h1>
      <Button text={'안녕'}></Button>
    </div>
```
앱이름.module.css를 이용하면, CRA가 마지막에 파일을 하나로 합칠 때 동일한 이름의(ex.title) 클래스가 있어도 알아서 브라우저 내에서 클래스이름을 고유하게 만들어서 붙인다.(개발자 도구에서 사용 가능)

