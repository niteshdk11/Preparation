
export default function ColorBoxLayout({children,left , right}){
    const isright = true ;
    
    return (
       <>
        {children}
        {/* {left}
        {right} */}
        {isright ? right : left}
       </>
    )
};