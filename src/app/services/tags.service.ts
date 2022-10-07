import { TagAttributesProps } from "@interfaces";
import http from "../http-common";

class TagDataService {
    getAll() {
        return http.get("/tags?populate=*");
    }

    get(id: number) {
        return http.get(`/tags/${id}`);
    }

    create(data: TagAttributesProps) {
        return http.post("/tags", data);
    }

    update(id: number, data: TagAttributesProps) {
        return http.put(`/tags/${id}`, data);
    }

    delete(id: number) {
        return http.delete(`/tags/${id}`);
    }

    findByTitle(title: string) {
        return http.get(`/tags?title=${title}`);
    }
}

export default new TagDataService();
