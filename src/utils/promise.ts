import { pieceData } from '../data';

/* 
  This is a API call representation
  In real world, there will be a services layer with
  its own configuration, state and stuff depending on the selection
  of the technology
  Ex. Axios, Axios with its own layer imp, React-Query etc.
*/

export const pieceDataFetcher = (id: string): Promise<typeof pieceData> => {
  return new Promise((resolve, reject) => {
    const data = pieceData;
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};
