import { get } from "./http"
export const homeApi = () => get(`/api/rest/suggestions/hotWord`);