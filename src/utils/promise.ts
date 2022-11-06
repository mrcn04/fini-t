import { pieceData, data, data2 } from '../data';

/* 
  This is a API call representation
  In real world, there will be a services layer with
  its own configuration, state and stuff depending on the selection
  of the technology
*/

export const dataFetcher = (
  id: string,
): Promise<typeof data | typeof data2> => {
  return new Promise((resolve, reject) => {
    const exampleData = id === '1' ? data : data2;
    setTimeout(() => {
      resolve(exampleData);
    }, 300);
  });
};

export const pieceDataFetcher = (id: string): Promise<typeof pieceData> => {
  return new Promise((resolve, reject) => {
    const data = pieceData;
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};
