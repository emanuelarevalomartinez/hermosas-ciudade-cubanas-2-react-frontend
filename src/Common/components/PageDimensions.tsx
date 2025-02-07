
interface Props{
    children: React.ReactNode,
}


export function PageDimensions({children}:Props){
    return(
        <>
        <div className="pt-20 sm:pt-28 px-4 sm:px-8">
          {children}
        </div>
        </>
    )
}