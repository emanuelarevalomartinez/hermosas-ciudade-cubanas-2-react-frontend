
interface Pros{
    name:string;
}


export function SectionTitle({name}:Pros){
    return(
        <>
        <p>{name}</p>
        </>
    )
}