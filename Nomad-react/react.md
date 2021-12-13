# 리액트 내용 정리

##component
- 컴포넌트는 커스텀한 태그
- 컴포넌트는 어떠한 JSX를 반환하는 함수이다.

##props
- 부모컴포넌트에서 자식 컴포넌트에게 데이터를 내려주기 위함.
- props는 컴포넌트가 전달받는 첫번째 이자 유일한 인자. 
- props는 객체, 부모에서 보낸 모든 것들을 갖는 객체.


```javascript
    function Btn(props) {
      return <button style={{
        backgroundColor: "tomato",
        color:"white",
        padding: "10px",
        borderRadius:"10px" 
      }}>{props.title}</button>
    }
```
위에 코드 처럼 작동하는 방식이지만, 더 쉽게 쓰기 위해서 구조분해로 아래 코드처럼 props에서 데이터를 꺼내온다.

```javascript
  function Btn({title}) {
      return <button style={{
        backgroundColor: "tomato",
        color:"white",
        padding: "10px",
        borderRadius:"10px" 
      }}>{title}</button>
    }
```
- 컴포넌트 호출부에는 무엇을 넣든지 그냥 props가 될 뿐이다.(onClick 같은 이벤트리스너나, 스타일 적용 불가. 이런 것 들은 선언부에서 지정해주어야한다.) 
- 부모 컴포넌트에서 state가 바뀌면 자식 컴포넌트들은 모두 리렌더링 된다.

# React.memo()
 - memo를 이용하면 불필요한 리렌더링을 막을 수 있다.
 - props를 비교한다.

# Prop Types
- 

