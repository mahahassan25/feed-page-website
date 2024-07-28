

import PersonPost from "./pages/PersonPost";
import { Route,Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "./pages/Error";
import FeedPage from './pages/FeedPage'
function App() {
  const user=useSelector(store=>store.userSlice);
  return (

     <div className="flex flex-col  items-center bg-black h-full ">
    <Routes>
      <Route path="/" element={<FeedPage/> }></Route>
      <Route path={`/:${user.id}`} element={ <PersonPost/>}></Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
   </div>
  );
}

export default App;
