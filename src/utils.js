const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

const persianNumberToEnglishNumber = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
};

export const convertEnglishNumberToPersianNumber = englishText => {
    if (typeof englishText !== 'string') {
        return englishText;
    }
    let resultStr = englishText;
    for (let i = 0; i < 10; i += 1) {
        resultStr = resultStr.replace(RegExp(i, 'g'), persianNumbers[i]);
    }
    return resultStr;
};

export const convertPersianNumberToEnglishNumber = persianText => {
    if (typeof persianText !== 'string') {
        return persianText;
    }
    let resultStr = persianText;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const persianNumber in persianNumberToEnglishNumber) {
        resultStr = resultStr.replace(RegExp(persianNumber, 'g'), persianNumberToEnglishNumber[persianNumber]);
    }
    return resultStr;
};

export const removeNonNumbers = text => text.replace(/[^0-9.]/g, '');
