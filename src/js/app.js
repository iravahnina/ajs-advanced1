export default function orderByProps(obj, order) {
    const keysArr = [];
    const sortArr = [];
  
    order.forEach((key) => {
      if (key in obj) {
        keysArr.push({
          key,
          value: obj[key],
        });
      }
    });
  
    for (const key in obj) {
      if (!key) {
        sortArr.push({
          key,
          value: sortArr[key],
        });
      }
    }

    sortArr.sort((a, b) => b.key - a.key);
    return [...keysArr, ...sortArr];
}