import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

 
  /*  <Purpose> Ellipsis Pipe </Purpose>
  <Parameters> 
  value - Input Value
  limit - Max length to be shorten
  </Parameters> 
  <Sample html code> 

  {{ selectedValue | 100 }}
  Format: Input | limit 

  </Sample html code>*/

  transform(value: any, limit?): any {
    if( value != null ) {
      return this.shortenMethod(value, limit);
    }
    return value;
  }
    shortenMethod(value: any, limit: number)
    {
      if(value.length > limit)
      {
        value = value.substr(0, limit) + " ...";
      }
      
      return value;
    }

    replaceMethod(value: any, replaceFrom: string, replaceTo:string) {
      value = value.replace(replaceFrom , replaceTo);
      return value; 
    }
}
