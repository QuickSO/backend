const BOOLEAN = 16;
const STRING = 1043;
const DECIMAL = 1700;

const fillMissingData = (arr, fields) => {
  let results = [];
  let dataTypes = {};

  fields.forEach((item) => {
    dataTypes[item?.name] = item?.dataTypeID;
  });

  results = arr?.map((item) => {
    Object.keys(item)?.forEach((key) => {
      switch (dataTypes?.[key]) {
        case BOOLEAN: {
          item[key] = item?.[key] === true ? "Yes" : "No";
          break;
        }

        case DECIMAL: {
          item[key] = item?.[key] || 0;
          break;
        }

        case STRING: {
          item[key] = item?.[key] || "N/A";
          break;
        }
      }
    });

    return item;
  });

  return arr;
};

module.exports = {
  fillMissingData,
};
