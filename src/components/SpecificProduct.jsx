import { useGetProductByIdQuery } from "../app/services/dummyData"

export const SpecificProduct = () => {

    const { data, isError, isLoading } = useGetProductByIdQuery(2);

    if (isError) {
        return <h1>Ohhh Noo we got the errorr</h1>
    }

    if (isLoading) {
        return <h1>loading...</h1>
    }

    console.log(data)
    return (
        <div>
            <h1>{data?.brand}</h1>
            <h2>{data?.category}</h2>
            <p>{data?.description}</p>
        </div>
    )
}
