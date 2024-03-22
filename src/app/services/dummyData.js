import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (builder) => ({

        //Get All the Products (Reading Data)
        getAllProducts: builder.query({
            query: () => "/products",
        }),
    }),
});


export const { useGetAllProductsQuery } = productApi


