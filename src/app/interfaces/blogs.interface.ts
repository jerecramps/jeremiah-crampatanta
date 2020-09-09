import {BlogDetailsModel} from '../models/blog-details.model';

export interface IBlogs{
    map(response : any) : {values : BlogDetailsModel, resultCount:number};
}