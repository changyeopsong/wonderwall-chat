const parser = require('@babel/parser');
const fs = require('fs');

/** @Important Node 가 export 키워드를 인식하지 못해, Constants.js 와 그에 연동된 페이지들을 전부다 바꿔야하는 상황이 생겨 수동으로 넣음.. */
const languages = ['ko', 'en'];

const parseObjectKeys = code => {
    if (code)
        return parser
            .parse(code, {
                sourceType: 'module',
                plugins: ['jsx']
            })
            .program.body.filter(node => node.type === 'ExportDefaultDeclaration')[0]
            .declaration.properties.map(node => node.key.name);
};

//최초 1회 모든 키 파일을 로딩합니다.
const keyArrays = (() => {
    let result = {};
    languages.forEach(lang => {
        let code = fs.readFileSync(`./src/_res/_strings/${lang}.tsx`).toLocaleString();
        result[lang] = parseObjectKeys(code);
    });
    return result;
})();

const checkAllLocaleFile = values => {
    for (const lang of languages) {
        for (const val of values) {
            if (!keyArrays[lang].includes(val)) {
                return {status: false, val, lang};
            }
        }
    }
    return {status: true};
};

/**
 *
 * getString(isFavorite ? 'class_floating_alarm_activated' : 'class_floating_alarm_on');
 * 같은 컨디셔널 Key 일 경우 1차 까지만 적용합니다. 2차를 사용하려면 따로 구현해야합니다.
 * ex)
 * getString(isFavorite ? (isHavePass ? 'class_have_pass' : 'class_not_have_pass' ) : 'class_floating_alarm_on');
 * 이런경우엔 파싱이 상당히 어렵습니다
 */

const getStringArgs = node => {
    const firstArg = node.arguments[0];
    if (!firstArg) return [];

    switch (firstArg.type) {
        case 'ConditionalExpression':
            return [firstArg.consequent.value || '', firstArg.alternate.value || ''];
        case 'Literal':
            return [firstArg.value || ''];
        case 'StringLiteral':
            return [firstArg.value || ''];
        case 'TemplateLiteral':
            return []; // getString(`get_string_temp_${temp}_ok_yes_${no}_test`)  와 같은 템플릿 리터럴 문법은 파싱이 어렵습니다. 어떤 변수가 들어올지 추적이 불가능함.
    }
    return [];
};

//console.log(parseObjectKeys(file_ko.toLocaleString()));

module.exports = {
    rules: {
        'no-key-locale': {
            create(context) {
                return {
                    CallExpression(node) {
                        if (node.callee.name === 'getString' && node.arguments.length > 0) {
                            const value = getStringArgs(node);
                            if (!value.length) return;

                            let result = checkAllLocaleFile(value);
                            if (result.status === false) {
                                context.report({
                                    node,
                                    message: `번역 에러 : ${result.val} 키가 번역파일 ${result.lang}.tsx 에 존재하지 않습니다.`
                                });
                            }
                        }
                    }
                };
            }
        }
    }
};
