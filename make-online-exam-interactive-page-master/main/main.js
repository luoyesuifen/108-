window.onload = function(){
    document.getElementById("calc").onclick = function(){
        main();
    };
};
function main() {
    let sum = calc1()+calc2()+calc3()+calc4()+calc5();
    let res = document.getElementById("name").value + "本次测试的分数为"+sum.toString()+"分";
    alert(res);
}

function calc1(){
    let sum = 0;
    if(document.getElementById("first1").value==="统一建模语言") sum+=5;
    if(document.getElementById("first2").value==="封装性") sum+=5;
    if(document.getElementById("first3").value==="继承性") sum+=5;
    if(document.getElementById("first4").value==="多态性") sum+=5;
    return sum;
}
function calc2() {
    let sum = 0;
    if(document.getElementsByName("t1")[1].checked===true) sum+=10;
    if(document.getElementsByName("t2")[0].checked===true) sum+=10;
    return sum;
}
function calc3(){
    let sum=0;
    let list=document.getElementsByName("d1");
    if(list[0].checked===true && list[1].checked===true && list[2].checked===false && list[3].checked===true)
        sum+=10;
    let list2=document.getElementsByName("d2");
    if(list2[0].checked===true && list2[1].checked===true && list2[2].checked===true && list2[3].checked===false)
        sum+=10;
    return sum;
}
function calc4(){
    let sum=0;
    if(document.getElementsByName("p1")[1].checked===true) sum+=10;
    if(document.getElementsByName("p2")[0].checked===true) sum+=10;
    return sum;
}
function calc5(){
    let sum=0;
    const str = "模型是对现实世界的简化和抽像，模型是对所研究的系统、过程、事物或概念的一种表达形式，可以是物理实体，可以是某种图形，或者是一种数学表达方式。";
    if(document.getElementById("fifth").value===str)
        sum+=20;
    return sum;
}