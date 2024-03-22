import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { build } from "vite";



export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({
        //Get All the Products (Reading Data)
        getAllProducts: builder.query({
            query: () => "/products",
        }),
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),

        addNewProduct: builder.mutation({
            query: (newProduct) => ({
                url: `/products/add`,
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: newProduct,
            })
        }),

        updateProduct: builder.mutation({
            query: ({ id, updateProduct }) => ({
                url: `/products/${id}`,
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: updateProduct,
            })
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method:"delete",
                
            })
        })

    }),
});


export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi


