var btns = document.querySelectorAll('.btn');
var result = document.getElementById('result');
var eqBtn = document.querySelector('.eq')
var clearBtn = document.querySelector('.clear')
var delBtn = document.querySelector('.del')

delBtn.addEventListener('click', del)

clearBtn.addEventListener('click', clear)
eqBtn.addEventListener('click',equal);

btns.forEach((btn) => {
    btn.addEventListener('click', function(){
      result.value += `${this.innerHTML}`
    })
});
function equal(){
  result.value = eval(result.value)
}
function clear(){
  result.value=''
}
function del(){
  
  var a = result.value.slice(0, -1)
  result.value=a
  
}

