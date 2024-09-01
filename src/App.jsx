import { MainHead,Secondhead } from "./components/components/heading/headings.jsx"
import CustomList from "./components/components/list/list.jsx"
import { CustomOrderedList } from "./components/components/list/list.jsx"
// import { OrderTable } from "./components/components/table/table.jsx"
// import CustomImage from "./components/components/image/image.jsx"



const App =()=>{
  return(
    <div>

    <MainHead/>
    <Secondhead/>

      <CustomOrderedList/>
      <CustomList></CustomList>

      <OrderTable/>

    </div>
  )
}


export default App


// className (class is predefined keyword in react to create class component)
// using the React.createElement
// 







































