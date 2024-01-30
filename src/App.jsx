import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Question01 from './pages/Question01';
import Question02 from './pages/Question02';
import Question03 from './pages/Question03';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Hubdnc 코딩 테스트</h1>
      <ul>
        <li><Link to='/question01'>Question01</Link></li>
        <li><Link to='/question02'>Question02</Link></li>
        <li><Link to='/question03'>Question03</Link></li>
      </ul>
      <Routes>
        <Route path='/question01' element={<Question01 />} />
        <Route path='/question02' element={<Question02 />} />
        <Route path='/question03' element={<Question03 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App