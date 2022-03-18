import { MovieListResult } from './movie-list-result';


export interface ListResponse {
    page: number;
    results: MovieListResult[];
    total_pages: number;
    total_results: number;
}
