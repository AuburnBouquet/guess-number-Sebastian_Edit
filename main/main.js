// Write your cade below:
function main(users_number, original_number) {
    let arr1 = users_number.split("");
    let arr2 = original_number.split("");
    let result = {A: 0, B: 0};
    for(var i in arr1){
        let temp1 = i; let temp2 = arr1[i];
        for(var j in arr2){
            if(temp1 === j && temp2 === arr2[j]){
                result.A++;
            }
            if(temp1 !== j && temp2 === arr2[j]){
                result.B++;
            }
        }
    }
    let feedback = result.A+'A'+result.B+'B';
    return feedback;
};

function getArray(){  // 随机生成4位不重复的数字
    let arr = []; getRandom(arr);
    let str = '';
    (arr).forEach((e)=>{ str += e.toString(); });
    return str;
}
function getRandom(array){
    let random = Math.floor(Math.random()*10); // 产生随机数并向下取整

    while(array.length < 4){                         //判断数组长度
        for(var i=0;i<=array.length;i++){             //遍历数组
            if(random==array[i]) break;                   //比较随机数
            else {
                if(i==array.length)
                {array.push(random);break;}
            }
        };
        getRandom(array);
    }
}
module.exports = main;
