import { Pipe, PipeTransform } from '@angular/core';
import {Request} from './request/request.class'

@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[],searchCriteria: string):Request[] {
    let selectedRequests: Request[] = [];
    if(searchCriteria.length == 0) {
      return requests;
    }
    for(let request of requests) {
      if(
        request.id.toString().includes(searchCriteria)
        || request.user.id.toString().includes(searchCriteria)
        || request.description.toLowerCase().includes(searchCriteria.toLowerCase())
        || request.justification.toLowerCase().includes(searchCriteria.toLowerCase())
        || (request.rejectionreason != null && 
        request.rejectionreason.toLowerCase().includes(searchCriteria.toLowerCase()))
        || request.deliveryMode.toLowerCase().includes(searchCriteria.toLowerCase())
        || request.status.toLowerCase().includes(searchCriteria.toLowerCase())
        || request.total.toString().includes(searchCriteria)
      ) {
        selectedRequests.push(request);
      }
    }
    return selectedRequests;
  }

}
