import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const parkingApi = createApi({
    reducerPath: 'parkingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endpoints: (builder) => ({
        GetParkingByBasementNo: builder.query({
            query: (basementNo) => ({
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                url: `/api/myparking/${basementNo}`,
                method: 'GET',  
            })
        }),
        BookParking: builder.mutation({
            query: (basementNo, slotId, data) => ({
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                url: `/api/myparking/book/${basementNo}/${slotId}`,
                method: 'PATCH',
                body: data
            })
        })
    })
})



export const { useGetParkingByBasementNoQuery, useBookParkingMutation } = parkingApi