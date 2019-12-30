import { Industry } from '../interfaces/industry';
import { Industries } from '../data/industries';

export class IndustryService {

  constructor() {
  }

  getIndustryName(industryId: number) {
    return this.iterateThroughChildren(Industries, industryId).description;
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

}
