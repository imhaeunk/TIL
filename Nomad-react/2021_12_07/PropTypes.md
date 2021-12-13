# PropTypes

propType은 내가 어떤 타입의 prop을 받고 있는지 체크해준다.

```javascript
function Btn({text, fontSize =16}) { 
  return (
    <button 
      style={{
      backgroundColor: "tomato",
      color:"white",
      padding: "10px",
      border: 0,
      borderRadius:"10px", 
      fontSize: fontSize
    }}>{text}</button>
  )
}
Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number.isRequired
}
```
만약 text가 숫자이거나, fontSize가 문자열일 겨우 에러를 발생시키는데 UI내에서는 에러를 보여주지 않고 console에서 보여준다. 코드 자체는 문제가 없기 때문.

propTypes는 React에게 "내가 사용할 변수의 자료형은 이것이니까, 만약에 내가 잘못쓰면 에러로 알려줘" 라고 하는 것이다.

```javascript
function Btn({text, fontSize =16}) { 
```
fontSize prop에 값을 주면 이 값은 기본 값이 된다. 컴포넌트를 호출할 때, fontSize라는 prop을 지정해주지 않을 경우 값은 16이 된다.


```javascript
Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number.isRequired
}
```
propTypes에서 뒤에 .isRequired가 붙으면 컴포넌트에 해당 prop가 없을 경우 콘솔에 경고가 나타난다.
