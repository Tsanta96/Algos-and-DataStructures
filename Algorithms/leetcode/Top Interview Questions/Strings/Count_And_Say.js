var countAndSay = function (n, str="1") {
    if (n === 1) {
        return str;
    }
    let newStr = "",
        count = 0;
        say = str[0];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === say) {
            count += 1;
        } else {
            newStr += count + say;
            count = 1;
            say = str[i];
        }
    }
    return countAndSay(n - 1, newStr + count + say);
};