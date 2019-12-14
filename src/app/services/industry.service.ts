import { Industry } from '../interfaces/industry';
import { industries } from '../data/industries';

export class IndustryService {

  constructor() {
  }

  getTopLevelIndustry(industryIds: number[], digitsWanted: number) {
    // numbers are the industry ids
    // if id has more than x digits then go up until id with length digitsWanted is found
    const finalIndustries: number[] = [];
    industryIds.map((industryId) => {
      // if the industryId has a longer length than the digitsWanted length
      const trimmedToDigits = parseInt(industryId.toString().substr(0, digitsWanted), 10);
      if (!finalIndustries.includes(trimmedToDigits)) {
        finalIndustries.push(trimmedToDigits);
      }
    });
    return finalIndustries;
  }


  iterateThroughChildren(dataArray: Industry[], lastId): Industry {
    // we have a mother and we want the children
    // how to use if you want all subIndustries for id === 14 :
    // this.industryService.iterateThroughChildren(industries, 14)
    for (const dataItem of dataArray) {
      if (dataItem.id === lastId) {
        return dataItem;
        break;
      }
    }
    let concatSubs = [];
    for (const dataItem1 of dataArray) {
      if (dataItem1.subIndustries) {
        concatSubs = concatSubs.concat(dataItem1.subIndustries);
      }
    }
    return this.iterateThroughChildren(concatSubs, lastId);
  }

  isChildren(childId: number) {

  }
  //
  // getMother(arr: Industry[], industryId: number) {
  //   console.log('arr : ', arr, ' industryId : ', industryId);
  //   if (arr === undefined || !arr || arr.length === undefined) {
  //     return null;
  //   }
  //   // we have child, and we want the mother
  //   // how to use if you want the mother for id = 141010
  //   for (const industry of arr) {
  //     // industry is like 10, 11, 12, ...
  //     const subs = this.iterateThroughChildren(arr, industry.id);
  //     // // subs is like 1010 ...
  //     if (!subs) {
  //       return;
  //     }
  //     const lengthOfFoundResults = subs.filter(sub => sub.id === industryId);
  //     console.log('found ? ', lengthOfFoundResults.length);
  //     if (lengthOfFoundResults.length === 0) {
  //       return this.getMother(industry.subIndustries, industryId);
  //     } else {
  //       console.log('result : ', industry);
  //       return industry;
  //       break;
  //     }
  //   }
  // }

}
