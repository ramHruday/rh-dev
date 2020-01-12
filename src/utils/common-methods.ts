/**
 * Deep clones the input be it
 * @param input array /object/array of objects
 */
export const returnADeepClone = <T>(input: T): T => {
  return JSON.parse(JSON.stringify(input));
};

/**
 * object to csv convertor
 * @param objArray an array of objects into csv string
 */
export const convertToCSV = (objArray: object | [] | string) => {
  var array = typeof objArray !== "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line !== "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
};

/**
 * ensure no. and shape of keys are similar as of first object in the while array
 * export data to .csv from array of objects (create link <a> and delete)
 * @param items
 * @param fileTitle
 */
export const exportCSVFile = (items: object[] | [], fileTitle: string) => {
  // defaultly takes keys from first object as headers
  let headers = Object.keys(
    returnADeepClone(items[0] ? items[0] : [])
  ) as never;
  items.unshift(headers);

  // Convert Object to JSON
  var jsonObject = JSON.stringify(items);

  var csv = convertToCSV(jsonObject);

  var exportedFilenmae = fileTitle + ".csv" || "export.csv";

  var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilenmae);
  } else {
    var link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilenmae);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

export const checkDissimilarity = (
  compareArray: string[] | undefined,
  arrayToBeCompared: string[]
) => {
  // get two arrays concat them assuming all the items are unique: that would be ideal diff [(A - B) U (B - A)]
  if (!arrayToBeCompared || arrayToBeCompared.length < 0) {
    arrayToBeCompared = [];
  }
  let difference: string[] = arrayToBeCompared.concat(
    compareArray ? compareArray : []
  );
  // reducing the comparisons, will check diff only if lengths are same
  if (
    compareArray &&
    arrayToBeCompared &&
    compareArray.length === arrayToBeCompared.length
  ) {
    difference = compareArray
      .filter(x => !arrayToBeCompared.includes(x))
      .concat(arrayToBeCompared.filter(x => !compareArray.includes(x)));
  }
  return difference ? difference.length < 1 : false;
};

// export const areSetsEqual = (a: Set<any>, b: Set<any>): boolean => {
//   if (a.size !== b.size) return false;

//   return [...a].every(el => b.has(el));
// };

/**
 * get date without time ago from refTime.
 * @param y no. of years ago
 * @param m no. of months ago
 * @param d no. of days ago
 * @parma refTime
 */
export const getDateAgoFromNow = (
  y: number,
  m: number,
  d: number,
  refTime: Date
) => {
  const date = new Date(
    refTime.getFullYear() - y,
    refTime.getMonth() - m,
    refTime.getDate() - d
  );

  return date.toISOString().substring(0, 19) + "Z";
};

export const downloadFromS3preSignUrl = (
  preSignedURL: string,
  fileName: string
) => {
  let a = document.createElement("a");
  a.download = fileName;
  a.href = preSignedURL;
  a.click();
};
