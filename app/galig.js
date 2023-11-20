//const monAlphabets = 'а б в г д е ё ж з л м н о й и к л ө п р с т у ү ф х ц ч ш ь  ы э ю я';
// const monCapAph = "А Б В Г Д Э Ё Ж З Л М Н О Й И К Л Ө П Р С Т У Ү Ф Х Ц Ч Ш ь Ы Э Ю Я"
const vouwels = ["а" ,"о" ,"и" ,"ө"  ,"у" ,"ү","э"]
const en_vwls = ["a" ,"o" ,"i" ,"w"  ,"u" ,"q","e"]

export const galig =(initialText) => {

    const vouwelsCheck = (l)=>{

        let i = 0
        for (const el of vouwels){
            if (l == el){
                return vouwels[i]
            }
            i ++
        }

        return false
    }



function doubleCheck(a) {
    if (vouwelsCheck(a[0]) && a[1] == "i"){
        return `${vouwelsCheck(a[0])}й`
    }
    if (a === "цh") return "ч";
    if (a === "ыo") return 'ё';
    if (a === "ыe") return "е";
    if (a === "ыu") return "ю";
    if (a === "ыa") return "я";
    if (a === "сh") return "ш";
    return false;
}

function check(a, l) {
    const dc = doubleCheck(`${a}${l}`);
    const engAlphebets = "abcdefghijklmnopqrstuvwxyz'";
    const mon2Alphebets = "абцдэфгхижклмнопүрстувөxызь";
    const capAphebetsss = "АБЦДЭФГХИЖКЛМНОПҮРСТУВӨХЫЗь"

    let i = 0;
    if (!dc) {
        for (const el of engAlphebets) {
            const block = el;

            if (l === block || l === String.fromCharCode(block.charCodeAt(0) - 32)) {
                if (l === String.fromCharCode(block.charCodeAt(0) - 32)){
                    return capAphebetsss[i]
                }
                return mon2Alphebets[i];
            }
            i += 1;
        }
    }

    if (dc) {
        if (dc[1]){

            return `|${dc}`
        }else{
            return `~${dc}`;
        }
        
    }
    return l;
}

let final = "";
let i = 0;
for (const letter of initialText) {
    if (i > 0) {
        if (String(check(initialText[i - 1], letter))[0] === "|") {
            final += String(check(initialText[i - 1], letter))[2];
        }else {
            if (String(check(initialText[i - 1], letter))[0] === "~") {
                final = final.slice(0, -1);
                final += String(check(initialText[i - 1], letter))[1];
            } else {
                final += String(check(initialText[i - 1], letter));
            }
        }
        
    } else {
        final += String(check(initialText[i], letter));
    }

    i += 1;
}

return (final);


}
