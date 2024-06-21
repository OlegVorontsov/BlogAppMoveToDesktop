import { NEWS_URL, sendRequestWithToken } from "./commonService";

export async function getNewsByUser(userId) {
    const allNews = sendRequestWithToken(`${NEWS_URL}/${userId}`, 'GET');
    return allNews;
}

export async function createNews(newNews) {
    newNews.img = newNews.img.toString();
    const news = sendRequestWithToken(NEWS_URL, 'POST', newNews);
    return news;
}

export async function updateNews(newNews) {
    newNews.img = newNews.img.toString();
    const news = sendRequestWithToken(NEWS_URL, 'PATCH', newNews);
    return news;
}