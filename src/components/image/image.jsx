const CustomImage=(props)=>{
    console.log(props)

    const {source,width,alternateText,height}=props
    return(
        <img  src={source}   height={height} width={width} alt={alternateText}   />
        
        
    )
}
export default CustomImage