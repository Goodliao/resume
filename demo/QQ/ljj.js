//获取class
function getClass(oParent, sClass) {
    if (window.getElementsByClassName) {
        return oParent.getElementsByClassName(sClass);
    } else {
        var reg = new RegExp('\\b' + sClass + '\\b');
        var arr = [];
        var _class = oParent.getElementsByTagName('*');
        for (var i = 0; i < _class.length; i++) {
            if (reg.test(_class[i].className)) {
                arr.push(_class[i])
            }
        }
        return arr;
    }
}

function $(id) {
    return document.getElementById(id);
}

//输入框
var oTextare = $('textarea');
//发布按钮
var oSend_btn = getClass(document.body, 'editor_hd')[0];

oTextare.onclick = function () {
    oSend_btn.style.display = 'block';
}

//发布按钮
var oSend_link = $('send_link');
var oCont_box = getClass(document.body, 'feed_box')[0];

//头像
var user_header = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var user_name = ['小泽', '班长', '摄影师', '导演', '编剧', '灯光'];

function double(n) {
    return n > 10 ? '' + n : '0' + n
};

function fnGetTime() {
    var oDate = new Date(),
        year = oDate.getFullYear(),
        mon = oDate.getMonth() + 1,
        date = oDate.getDate(),
        h = oDate.getHours(),
        m = oDate.getMinutes(),
        s = oDate.getSeconds();

    return year + '-' + double(mon) + '-' + double(date) + ' ' + double(h) + ':' + double(m) + ':' + double(s);
}


oSend_link.onclick = function () {
    //创建一个div
    var oDiv = document.createElement('div');
    oDiv.className = 'feed_friend';
    //发言的部分
    oDiv.innerHTML = '<div class="feed">' + '<div class="f_aside clearfix">' + '<div class="f_user_pto fl">' + '<img src="image/' + user_header[parseInt(Math.random() * user_header.length)] + '" alt="">' + '</div>' + '<div class="f_user_info">' + '<div>' + user_name[parseInt(Math.random() * user_name.length)] + '</div>' + '<p>' + fnGetTime() + '</p>' + '</div>' + '</div>' + '<p class="f_send_text">' + oTextare.value + '</p>'
    '</div>';

    oTextare.value = '';



    //回复区域
    var reDiv = document.createElement('div');
    reDiv.className = 'feed_input hide';
    reDiv.innerHTML = '<div class="f_input">' + '<input type="text">' + '</div>' + '<input type="button" value="回复" class="f_btn">';

    var reBtn = reDiv.getElementsByTagName('input')[1];

    reBtn.onclick = function () {
        console.log(Math.random());
    }

    //功能区域 （删除 置顶 评论）
    var features = document.createElement('div');
    features.className = 'feed_bar';
    var newDiv = document.createElement('div');
    newDiv.className = 'feed_var_inner';
    var arr = ['评论', '删除', '置顶'];

    for (var i = 0; i < arr.length; i++) {
        var oA = document.createElement('a');
        oA.href = 'javascript:;';
        oA.innerHTML = arr[i];
        oA.inct = arr[i];

        if (oA.inct == '删除') {
            oA.onclick = function () {
                oCont_box.removeChild(oDiv);
            }
        }
        if (oA.inct == '评论') {
            console.log(reDiv);
            oA.onclick = function () {
                reDiv.style.display = 'block';
            }
        }
        if (oA.inct == '置顶') {
            oA.onclick = function () {
                oCont_box.insertBefore(oDiv, oCont_box.children[0])
            }
        }

        newDiv.appendChild(oA);
    }
    features.appendChild(newDiv);

    oDiv.appendChild(features);

    oSend_btn.style.display = 'none';

    oDiv.appendChild(reDiv);


    oCont_box.appendChild(oDiv);
}