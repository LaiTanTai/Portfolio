import { OrbitControls } from '@react-three/drei';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Mainlayout = lazy(()=>import('./layouts/Mainlayout'));
const Loader = lazy(()=>import("./components/loader/Loader"))
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Mainlayout/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;