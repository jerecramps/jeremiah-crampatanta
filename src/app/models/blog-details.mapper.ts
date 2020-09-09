import { IBlogs } from "../interfaces/blogs.interface";
import { BlogDetailsModel } from './blog-details.model';

export class BlogsMapper implements IBlogs {
    
    map(response: any) {
        
        let finalRes = response.map(res => {
            let result = new BlogDetailsModel(res.blog_id
                                            ,res.blog_title
                                            ,res.blog_content
                                            ,res.blog_content_owner
                                            ,res.blog_created);
           
            result.blogImage = res.blog_image;
            result.blogTags = res.blog_tags;
        return result;
        });
        return {values: finalRes, resultCount: response.length}
    }
}