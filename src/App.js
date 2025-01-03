import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import GlobalStyle from './styles/GlobalStyle';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import ReviewPage from './pages/ReviewPage';
import ReviewCompletePage from './pages/ReviewCompletePage';
import RestaurantSearchPage from './pages/stamp/search/RestaurantSearchPage.jsx';
import RestaurantPage from './pages/stamp/RestaurantPage.jsx'

import DetailHomePage from './pages/stamp/detail/DetailHomePage.jsx';
import MapPage from './pages/MapPage';
import DetailMenuPage from './pages/stamp/detail/DetailMenuPage.jsx';
import DetailPicturePage from './pages/stamp/detail/DetailPicturePage.jsx';
import DetailReviewPage from './pages/stamp/detail/DetailReviewPage.jsx';
import { RestaurantProvider } from './utils/api/Restaurant.js';
import SignupPage from './pages/SignupPage';
import SignupDetailPage from './pages/SignupDetailPage';

import CafePage from './pages/stamp/CafePage';
import CafeDetailHomePage from './pages/stamp/detail/CafeDetailHomePage.jsx';
import CafeDetailMenuPage from './pages/stamp/detail/CafeDetailMenuPage.jsx';
import CafeDetailPicturePage from './pages/stamp/detail/CafeDetailPicturePage.jsx';
import CafeDetailReviewPage from './pages/stamp/detail/CafeDetailReviewPage.jsx';
import CafeSearchPage from './pages/stamp/search/CafeSearchPage.jsx';
import CafeReviewPage from './pages/CafeReviewPage.jsx'
import CafeReviewCompletePage from './pages/CafeReviewCompletePage.jsx';
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      <RestaurantProvider>
        <Routes>
        <Route path="/" element={<Navigate to="/restaurant" replace />} />
          {/* 예시 네비게이션이 필요한 페이지들 */}
          <Route path="/map" element={<Layout $hasNavigation><MapPage/></Layout>}/>
          <Route path="/mypage" element={<Layout hasNavigation> <MyPage/> </Layout>}/>
          <Route path="/home" element={<Layout $hasNavigation><LoginPage /></Layout>} />

            <Route path="/restaurant">
                <Route index element={<Layout $hasNavigation><RestaurantPage /></Layout>} />
                <Route path="detail/:id" element={<Layout><DetailHomePage /></Layout>} />
                <Route path="detail/:id/menu" element={<Layout><DetailMenuPage /></Layout>} />
                <Route path="detail/:id/picture" element={<Layout><DetailPicturePage /></Layout>} />
                <Route path="detail/:id/review" element={<Layout><DetailReviewPage /></Layout>} />
                <Route path="search" element={<Layout $hasNavigation><RestaurantSearchPage /></Layout>} />
                <Route path="review/:id" element={<Layout><ReviewPage /></Layout>} />
                <Route path="review/:id/complete" element={<Layout><ReviewCompletePage /></Layout>} />

              </Route>

              <Route path="/cafes">
                <Route index element={<Layout $hasNavigation><CafePage /></Layout>} />
                <Route path="detail/:id" element={<Layout><CafeDetailHomePage /></Layout>} />
                <Route path="detail/:id/menu" element={<Layout><CafeDetailMenuPage /></Layout>} />
                <Route path="detail/:id/picture" element={<Layout><CafeDetailPicturePage /></Layout>} />
                <Route path="detail/:id/review" element={<Layout><CafeDetailReviewPage /></Layout>} />
                <Route path="search" element={<Layout $hasNavigation><CafeSearchPage /></Layout>} />
                <Route path="review/:id" element={<Layout><CafeReviewPage /></Layout>} />
                <Route path="review/:id/complete" element={<Layout><CafeReviewCompletePage /></Layout>} />
              </Route>
          
            <Route path="/random" element={<Layout $hasNavigation> </Layout>}/>
            <Route path="/mypage" element={<Layout $hasNavigation> </Layout>}/>
            <Route path="/random" element={<Layout hasNavigation> </Layout>}/>
            <Route path="/map" element={<Layout $hasNavigation><MapPage /></Layout>} />
            <Route path="/mypage" element={<Layout hasNavigation> </Layout>}/>
            {/* 네비게이션이 필요 없는 페이지들 */}
            <Route path="/" element={<Layout></Layout>} />
            <Route path="/login" element={<Layout><LoginPage /></Layout>} />
            <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
            <Route path="/signup/detail" element={<Layout><SignupDetailPage /></Layout>} />
          </Routes>
          </RestaurantProvider>
      </Router>
    </>
  );
}

export default App;
