// src/slices/usersApiSlice.js
import { apiSlice } from "./apiSlices"; // Import the base API slice
import { USERS_URL } from "../constants"; // Import the base URL for users

// Inject endpoints specific to user-related actions
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define the login endpoint
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`, // API endpoint for login
        method: "POST", // HTTP method
        body: data, // Request body containing login credentials
      }),
    }),
    // Define the register endpoint
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`, // API endpoint for registration
        method: "POST", // HTTP method
        body: data, // Request body containing registration data
      }),
    }),
    // Define the logout endpoint
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`, // API endpoint for logout
        method: "POST", // HTTP method
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMutation,
} = usersApiSlice;
