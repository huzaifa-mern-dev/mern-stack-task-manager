import { apiSlice } from "../apiSlice";

const Task_URL = "/task";
export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
            getDashboardStats: builder.query({
                query: ()=> ({
                    url: `${Task_URL}/dashboard`,
                    method: "GET",
                    credentials: "include",
    
                }),
            }),

            getAllTask: builder.query({
                query: ({strQuery, isTrashed, search})=> ({
                    url: `${Task_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                    method: "GET",
                    credentials: "include",
    
                }),
            }),

            createTask: builder.mutation({
                query: (data)=> ({
                    url: `${Task_URL}/create`,
                    method: "POST",
                    body: data,
                    credentials: "include",
    
                }),
            }),

            duplicateTask: builder.mutation({
                query: (id)=> ({
                    url: `${Task_URL}/duplicate/${id}`,
                    method: "POST",
                    body: data,
                    credentials: "include",
    
                }),
            }),

            updateTask: builder.mutation({
                query: (data)=> ({
                    url: `${Task_URL}/update/${data._id}`,
                    method: "PUT",
                    body: data,
                    credentials: "include",
    
                }),
            }),
            trashTask: builder.mutation({
                query: ({id})=> ({
                    url: `${Task_URL}/${id}`,
                    method: "PUT",
                    credentials: "include",
    
                }),
            }),
            createSubTask: builder.mutation({
                query: ({data, id})=> ({
                    url: `${Task_URL}/create-subtask/${id}`,
                    method: "PUT",
                    body: data,
                    credentials: "include",

                }),
            }),
            getSingleTask: builder.query({
                query: (id)=> ({
                    url: `${Task_URL}/${id}`,
                    method: "GET",
                    credentials: "include",

                }),
            }),
            postTaskActivity: builder.mutation({
                query: ({data, id})=> ({
                    url: `${Task_URL}/activity/${id}`,
                    method: "POST",
                    body: data,
                    credentials: "include",

                }),
            }),

            deleteRestoreTask: builder.mutation({
                query: ({id, actionType})=> ({
                    url: `${Task_URL}/delete-restore/${id}?actionType=${actionType}`,
                    method: "DELETE",
                    credentials: "include",

                }),
            }),
        })
    })

    export const {useGetDashboardStatsQuery, useGetAllTaskQuery, useCreateTaskMutation,useDuplicateTaskMutation,useUpdateTaskMutation, useTrashTaskMutation, useCreateSubTaskMutation, useGetSingleTaskQuery, usePostTaskActivityMutation, useDeleteRestoreTaskMutation } = taskApiSlice;