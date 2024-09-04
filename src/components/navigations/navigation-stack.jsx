import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../../screens/home-screen"
import AboutScreen from "../../screens/about-screen"





const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}  />
            

        </Routes>

        </BrowserRouter>
    )
}
export default NavigationStack