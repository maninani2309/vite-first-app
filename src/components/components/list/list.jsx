

const CustomList = ()=>{
    return(
        <ul>
           <ListItems/>
        </ul>
    )
}

export default CustomList

export const CustomOrderedList = ()=>{
    return(
        <ol>
           <ListItems/>
        </ol>
    )
}

const ListItems = ()=>{

    const fruits =["apple","mango","kiwi","orange"]
    return(
        <>

        {
            fruits.map((eachFruit)=>{
                return<li>{eachFruit}</li>
            })
        }
            {/* <li>{listItems[0]}</li>
            <li>{listItems[1]}</li> */}

        </>
    )
}










