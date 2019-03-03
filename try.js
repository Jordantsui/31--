$('.images>img:nth-child(1)').addClass('current')
$('.images>img:nth-child(2)').addClass('enter')
$('.images>img:nth-child(3)').addClass('enter')
let n=1
setInterval(()=>{
    $(`.images>img:nth-child(${f(n)})`).removeClass('current').addClass('leave')
    $(`.images>img:nth-child(${f(n+1)})`).removeClass('enter').addClass('current')
    $(`.images>img:nth-child(${f(n+2)})`).removeClass('leave').addClass('enter')
    n++
},3000)

f=function(n){
    if(n%3===1||n%3===2){
        return n%3
    }else{
        return (n%3)+3
    }
}