import { useAddNewProductMutation } from "../app/services/dummyData"


const AddNewProduct = () => {

    const [AddNewProduct, { data, isError, isLoading }] = useAddNewProductMutation()
    // console.log(res)

    if (isError) {
        return <h1>Error</h1>
    }
    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    const handleAddProduct = async () => {
        try {
            const newProductData = {
                id: 1,
                title: "Amazing T-shirt",
                description: "This is one of the best and amazing t-shirt in the market",
            }
            await AddNewProduct(newProductData)
        } catch (err) {
            console.err("Error Adding New Product", err)
        }

    }

    return (
        <div>
            <h1>{data?.id}</h1>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <button onClick={handleAddProduct} disabled={isLoading}>Add New Products</button>
        </div>
    )
}

export default AddNewProduct