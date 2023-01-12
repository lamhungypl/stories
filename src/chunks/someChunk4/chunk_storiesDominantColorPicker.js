__d(
  'storiesDominantColorPicker',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    const SOME_CONSTANT = 8;

    function getDefault() {
      return { blue: 0, clusterSize: 0, green: 0, red: 0 };
    }
    function rgbOffset(color, red, green, blue) {
      return (
        (color.red - red) * (color.red - red) +
        (color.green - green) * (color.green - green) +
        (color.blue - blue) * (color.blue - blue)
      );
    }

    const someFunction = () => {
      let index = 0;
      const b = 255 / 4;
      const arr = new Array(SOME_CONSTANT);

      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          for (let k = 0; k < 2; k++) {
            const indexItem = {
              blue: b * k + b / 2,
              clusterSize: 0,
              green: b * j + b / 2,
              red: b * i + b / 2,
            };
            arr[index] = indexItem;
            index++;
          }
        }
      }
      return arr;
    };

    const someCheck = (arr, colorArr, otherArr) => {
      let check = false;
      const chunkLength = arr.length / 4;

      for (let i = 0, j = 0; i < chunkLength; i++, j += 4) {
        const next4 = arr[j];
        const next5 = arr[j + 1];
        const next6 = arr[j + 2];
        let defaultValue = getDefault();
        let maxValue = Infinity;
        let someOffset = 0;

        for (let k = 0; k < SOME_CONSTANT; k++) {
          const someColorWeight = rgbOffset(colorArr[k], next4, next5, next6);

          if (someColorWeight < maxValue) {
            maxValue = someColorWeight;
            someOffset = k;
            defaultValue = colorArr[k];
          }
        }

        defaultValue.clusterSize++;

        if (otherArr[i] !== someOffset) {
          otherArr[i] = someOffset;
          check = true;
        }
      }
      return check;
    };

    function doStuff(arr, colorArr, otherArr) {
      const arr1 = new Array(SOME_CONSTANT);
      const arr2 = new Array(SOME_CONSTANT);
      const arr3 = new Array(SOME_CONSTANT);
      arr1.fill(0);
      arr2.fill(0);
      arr3.fill(0);

      const someLength = arr.length / 4;

      for (let i = 0, j = 0; i < someLength; i++, j += 4) {
        const arrItem1 = arr[j];
        const arrItem2 = arr[j + 1];
        const arrItem3 = arr[j + 2];
        const n = otherArr[i];
        arr1[n] += arrItem1;
        arr2[n] += arrItem2;
        arr3[n] += arrItem3;
      }
      for (let k = 0; k < SOME_CONSTANT; k++) {
        const colorItem = colorArr[k];
        if (colorItem.clusterSize > 0) {
          colorItem.red = arr1[k] / colorItem.clusterSize;
          colorItem.green = arr2[k] / colorItem.clusterSize;
          colorItem.blue = arr3[k] / colorItem.clusterSize;
          colorItem.clusterSize = 0;
        }
      }
    }

    const defaultFn = (arr) => {
      const length = arr.length;
      const colors = someFunction();
      const someArr = new Array(length);
      someArr.fill(-1);

      while (someCheck(arr, colors, someArr)) {
        doStuff(arr, colors, someArr);
      }
      return colors.sort(function (it1, it2) {
        return it2.clusterSize - it1.clusterSize;
      });
    };
    f['default'] = defaultFn;
  },
  66,
);
