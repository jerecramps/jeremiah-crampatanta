import { IBlogTags } from "../interfaces/blog-tags.interface";

export class BlogDetailsModel  {
    constructor(public blogId: number,
                public blogTitle: string,
                public blogContent: string,
                public blogContentOwner: string,
                public blogCreated: string)    {
                    this.blogId = blogId;
                    this.blogTitle = blogTitle;
                    this.blogContent = blogContent;
                    this.blogContentOwner = blogContentOwner;
                    this.blogCreated = blogCreated;
                }    

    public blogImage: string;
    
    public blogTags: Array<IBlogTags>;
}