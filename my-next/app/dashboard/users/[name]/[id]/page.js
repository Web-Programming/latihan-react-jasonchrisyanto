export default function Page({params}) {
    return(
        <div>
            <h1>Hello, {params.name}</h1>
            <h1>Your Id is : {params.id}</h1>
        </div>
    );
}