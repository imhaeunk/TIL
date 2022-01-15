## 컴포넌트를 나눠서 props로 데이터 넘겨주기

- 영화 목록에서 각각의 영화들을 컴포넌트로 만든다. (Movie.jsx)
- 제목, 포스터, 장르, 요약 등 API에서 받은 정보를 Movie 컴포넌트에 넘겨준다.

### Movies.jsx

- 여기서 중요한 것은 key도 함께 넘겨주어야 한다는 것이다.
  (key는 React.js에서만, map안에서 component들을 render할 때 사용한다.)

```jsx
<div>
  {movies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      coverImg={movie.small_cover_image}
      genres={movie.genres}
      summary={movie.summary}
    />
  ))}
</div>
```

## Movie.jsx

```jsx
const Movie = ({ title, coverImg, genres, summary }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={coverImg} alt="poster" />
      {genres && genres.map((g) => <span key={g}>{g},</span>)}
      <p>{summary}</p>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string을 가진 배열
}
```

## React-Router

- 리액트 앱에서 페이지 전환

### react-router-dom 버전 6 변경사항

- Switch -> Routes
- Route태그의 exact 속성이 더이상 쓰이지 않음
- Route 컴포넌트 안에 자식 컴포넌트를 넣지 않고 element prop으로 자식컴포넌트를 할당

1.  react-router-dom 설치 (npm i react-router-dom)

2.  /src안에 routes폴더 생성 후 그 안에 Home 컴포넌트를 만들어준다.

3.  기존에 사용했던 App.js안에 Router를 정의해준다.

### App.js

```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
```

## Dynamic URL (동적 URL)

- 리액트 라우터는 동적 URL을 지원한다. 이 의미는 URL에 변수를 넣을 수 있다는 것.

### App.js

```jsx
<Route path="/movie/:id" element={<Detail />}></Route>
```

- :id 처럼 유저를 /movie/변수로 보낼 수 있다. ':'이 중요하다. 콜론이 없으면 /movie처럼 /id라는 경로가 되어버린다.

### Movie.jsx

```jsx
const Movie = ({ id, title, coverImg, genres, summary }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt="poster" />
      {genres.map((g) => (
        <span key={g}>{g}</span>
      ))}
      <p>{summary}</p>
    </div>
  )
}
```

- movie 컴포넌트에서 타이틀을 클릭하면 Detail을 보여주기 위해 /movie로 이동하기 때문에 클릭한 타이틀을 가진 영화의 id가 필요하다.

- prop으로 id를 넘겨받아서 Link의 to 속성에 지정해준다.
