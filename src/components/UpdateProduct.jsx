import { useUpdateProductMutation } from "../app/services/dummyData"

const UpdateProduct = ({ productId }) => {

    const [updateProduct, { data, isError, isLoading }] = useUpdateProductMutation();

    if (isError) {
        return <h1>Error</h1>
    }

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    const handleUpdateProduct = async () => {
        try {
            const updateProductData = {
                title: "title update ❤️"
            };
            await updateProduct({
                id: productId,
                updateProduct: updateProductData,
            })
        } catch (err) {
            console.error("Error updating Products", err)
        }
    }



    return (
        <div>
            <h1>{data?.id}</h1>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>

            <button onClick={handleUpdateProduct} disabled={isLoading}>Update Products</button>
        </div>
    )
}

export default UpdateProduct