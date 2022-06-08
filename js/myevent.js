$(function () {

});

function goProject(pro) {
    switch (pro) {
        case 1:
            window.open("http://www.aiitone.com:20171/");
            break;
        case 2:
            window.open("https://github.com/Byube/deliveryAPI");
            break;
        case 3:
            window.open("https://github.com/Byube/Apiisfun");
            break;
        case 4:
            window.open("https://github.com/Byube/swa/tree/master/swa");
            break;
        case 6:
            window.open("https://www.grammarschool.ai/common/greeting.do");
            break;
        default:
            alert("소스 공개 불가");
            break;
    }
}