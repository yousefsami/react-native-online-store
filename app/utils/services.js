import { Image, Dimensions } from 'react-native';

export function getImageHeight(imageUri, maxWidth, maxHeight) {
  return new Promise((res, rej) => {
    Image.getSize(
      imageUri,
      (srcWidth, srcHeight) => {
        const _maxHeight = maxHeight
          ? maxHeight
          : Dimensions.get('window').height;
        const _maxWidth = maxWidth ? maxWidth : Dimensions.get('window').width;
        const ratio = Math.min(_maxWidth / srcWidth, _maxHeight / srcHeight);
        res({ width: srcWidth * ratio, height: srcHeight * ratio });
      },
      error => {
        rej(error);
      }
    );
  });
}

export function categorizeObject(arr, parent, keyName) {
  return new Promise(async res => {
    var out = [];
    for (var i in arr) {
      if (arr[i].parent == parent) {
        const children = await categorizeObject(arr, arr[i].id, keyName);
        if (children.length) {
          arr[i][keyName] = children;
        }
        out.push(arr[i]);
      }
    }
    res(out);
  });
}
