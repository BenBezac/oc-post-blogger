export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string, loveIts: number, created_at = null) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.created_at = created_at != null ? created_at : new Date();
    }
}
