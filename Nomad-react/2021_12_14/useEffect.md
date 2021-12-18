# useEffect

```js
const iRunOnlyOnce = () => {
    console.log('I run only once.')
  }

useEffect(iRunOnlyOnce, [])
```

컴포넌트가 처음 렌더될 때만 실행하고 싶을 때.
첫번째 Arg = 한번만 실행하고 싶은 코드
두번째 Arg = 빈 배열로 둘 경우, 컴포넌트가 처음 렌더링 될 때 한번만 실행.
 빈 배열에 어떤 값을 넣을 경우 그 값이 변할 때만 첫번째 Arg 코드가 실행 된다.

 ```js
 function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => setValue(prev => prev + 1)
  const onChange = e => setKeyword(e.target.value)

  useEffect(() => {
    console.log('I run only once')
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes")
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes")
  }, [counter])

 ```
 위에 useEffect는 세 개 모두 처음 렌더될 때 모두 한번씩 실행되고 
 두번째, 세번째 useEffect는 각각 keyword와 counter 값이 변경될 때마다 실행된다. 두번째와 세번째 코드는 아래처럼 써줄 수 도 있다.

 ```js
  useEffect(() => {
    console.log("I run when 'keyword' && 'counter' changes")
  }, [keyword, counter])
 ```