import { HomePage } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
