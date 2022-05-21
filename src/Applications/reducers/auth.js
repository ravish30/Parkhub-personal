import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    endpoints: (builder) => ({
        SendVerificationCode: builder.mutation({
            query: (data) => ({
                url: '/api/send-email',
                method: 'POST',
                body: data,
            })
        }),
        VerifyEmail: builder.mutation({
            query: (data) => ({
                url: '/api/verify-email',
                method: 'POST',
                body: data
            })
        }),
        CustomizeParking: builder.mutation({
            query: (data) => ({
                url: '/api/customize-parking',
                method: 'PATCH',
                body: data
            })
        }),
        SignInUser: builder.mutation({
            query: (data) => ({
                url: '/api/signin',
                method: 'POST',
                body: data
            })
        })
    })
})



export const { useSendVerificationCodeMutation, useVerifyEmailMutation, useCustomizeParkingMutation, useSignInUserMutation } = authApi