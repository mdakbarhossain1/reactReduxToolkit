
import { useGetAllProductsQuery } from "../app/services/dummyData"


const AllProducts = () => {

    const { data, isError, isLoading } = useGetAllProductsQuery();
    if (isError) {
        return <h1>Ohhh Noo we got the errorr</h1>
    }

    if (isLoading) {
        return <h1>loading...</h1>
    }

    return (
        <div>
            {
                data?.products.map((p) => (
                    <h1 key={p.id}>{p.title}</h1>
                ))
            }
        </div>
    )
}

export default AllProducts