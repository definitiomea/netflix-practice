/*
1. 보유 페이지 3개
a. 홈페이지 b. 영화 페이지 c. 상세 페이지

2. 홈페이지에서 배너를 볼 수 있다.

3. 3가지 섹션의 영화를 볼 수 있다. (popular, top rated, upcoming)

4. 호버했을 때 정보 보여주기
a. 제목, 장르, 평점, 인기도, 청불 여부

5. 영화를 슬라이드로 넘기면서 볼 수 있다.

6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.
(포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등등..)

7. trailer를 누르면 예고편을 볼 수 있다.

8. 영화 리뷰도 볼 수 있다.

9. 관련된 영화도 볼 수 있다.

10. 영화 검색을 할 수 있다.

11. 영화 정렬을 할 수 있다.

12. 영화를 필터링 할 수도 있다.
*/

import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/movies:/id' element={<MovieDetail></MovieDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
