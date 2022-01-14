import { Api } from "./api"

export const getRequest = (endPoint , params) => {
    return Api.get(endPoint , params)
}