import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/api` }),
    endpoints: (builder) => ({
      getPosts: builder.query({ query: () => '/post' }),
      getPostById: builder.query({ query: (postId) => `/post/${postId}` }),
      addPost: builder.mutation({
        query: (body) => ({
          url: '/post/add-post',
          method: 'POST',
          body
        }),
      }),
      updatePost: builder.mutation({
        query: ({ postId, titre, contenu}) => ({
          url: `/post/${postId}`,
          method: 'PUT',
          body: { titre, contenu }
        })
      }),
      deletePost: builder.mutation({
        query: ({ postId }) => ({
          url: `/post/${postId}`,
          method: 'DELETE'
        })
      }),
    })
  })
  
  export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
  } = postApi;
  