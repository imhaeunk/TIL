# clean up 

```js
function Hello() {
  useEffect(() => {
    console.log("created :")
    return () => console.log("destroyed")
  }, [])
  return <h1>Hello</h1>
}
```
그냥 함수이지만 컴포넌트가 사라지거나 없어질 때 무언가를 해줄 수 있음.
위 코드에서는 
```js 
return () => console.log("destroyed")
``` 
이 부분이 cleanup function 이 됨.