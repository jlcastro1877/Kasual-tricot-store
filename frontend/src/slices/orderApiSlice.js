import { apiSlice } from "./apiSlices"; // Assuming apiSlices is your base API slice file
import { ORDERS_URL, PAYPAL_URL } from "../constants"; // Make sure this path is correct

// Define the ordersApiSlice using apiSlice.injectEndpoints
export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define a mutation for creating an order
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order }, // Send the order data as the request body
      }),
    }),
    // Define a query for getting order details by order ID
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`, // Construct the URL with the order ID
      }),
      keepUnusedDataFor: 5, // Optional: keeps the data in the cache for 5 seconds
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: "PUT",
        body: { ...details },
      }),
    }),
    getPayPalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Export hooks for use in functional components
export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetPayPalClientIdQuery,
} = ordersApiSlice;
