import { Movie } from "./movie";

export interface ListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
