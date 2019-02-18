<!--校验用户信息-->
function checkPara() {
  var uname = getEle('username');
  var upwd = getEle('password');
  if (uname === '') {
    confirm("用户名不得为空")
    return;
  }
  if (!/\d{3,8}/.test(uname)) {
    confirm('请输入3-8位数字用户名');
    return;
  }
  if (upwd === '') {
    confirm("密码不得为空")
    return;
  }
  if (!/\d{3,8}/.test(upwd)) {
    confirm('密码错误');
    return;
  }
  //  此时提交表单数据与数据库信息比对,可实现加密

}

function clearText(obj) {
  obj.placeholder = '';
}

function getEle() {
  return document.getElementById(arguments[0]).value;
}
