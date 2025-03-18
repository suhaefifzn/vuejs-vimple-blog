import { getData } from "../api.config";

export class ArticleService {
    constructor() {
        this.endpoint = '/articles/public';
    }

    async getArticlesForHomePage() {
        return await getData(`${this.endpoint}/home?lang=en`);
    }

    async getArticlesByCategory(categoryName, page = 1) {
        return await getData(`${this.endpoint}?category=${categoryName}&page=${page}&lang=en`);
    }
    
    async getArticleBySlug(slug) {
        return await getData(`${this.endpoint}/${slug}?lang=en`);
    }
}