export default function Button(props){
    let className="border border-gray-300 rounded-full px-3 text-sm font-bold h-8 ";
    if(props.outline){
        className +="text-gray-300 ";
    }else{
        className += "bg-gray-300 text-redditDark ";
    };
    return(
      <button {...props} className={className + props.className}></button>  
    );
}