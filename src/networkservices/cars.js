import apiClient from "./graphql/client";
import Queries from './graphql/queries'

export const getCarsList = (queryParams) => {
    return apiClient.query({query: Queries.GET_CARS, variables: queryParams})
};