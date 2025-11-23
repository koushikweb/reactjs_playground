import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import UserData from './UserData'
import SaveData from './SaveData'
import Search from './component/Serach'

const SiteRouter = () =>  {
   return(
    <>
    <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path='/'/> 
          <Route path='/userlist' element={<UserData />}/> 
          <Route path="/savedata" element={<SaveData />}/>
          <Route path="/search" element={<Search />}/>
         </Routes>
      </BrowserRouter>
    </>
   );

}
export default SiteRouter;
