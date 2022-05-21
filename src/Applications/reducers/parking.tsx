import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Slot } from '../models/slot.model'


export const parkingApi = createApi({
    reducerPath: 'parkingApi',
    tagTypes: ['Slot'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endpoints: (builder) => ({
        GetParkingByBasementNo: builder.query<Slot[], number>({
            query: (basementNo) => ({
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                url: `/api/myparking/${basementNo}`,
                method: 'GET',  
            }),
            providesTags: ['Slot']
        }),
        BookParking: builder.mutation<void, Slot>({
            query: ({ _id, basementNo, ...rest })=> ({
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                url: `/api/myparking/book/${basementNo}/${_id}`,
                method: 'PATCH',
                body: rest
            }),
            invalidatesTags: ['Slot']
        }),
        CancelParking: builder.mutation<void, Slot>({
            query: ({ _id, basementNo, ...rest }) => ({
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                url: `/api/myparking/cancel/${basementNo}/${_id}`,
                method: 'PATCH',
                body: rest
            }),
            invalidatesTags: ['Slot']
        })
    })
})



export const { useGetParkingByBasementNoQuery, useBookParkingMutation, useCancelParkingMutation } = parkingApi