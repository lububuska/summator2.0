const sumbtn = document.querySelector('#sum-btn')

sumbtn.addEventListener('click', () => {
    const num1 = document.querySelector('.number1').value
    const num2 = document.querySelector('.number2').value
    if (Math.abs(num1) < 512 && Math.abs(num2) < 512) {
        let sum = (parseInt(num1) + parseInt(num2)).toString(2)
        const sign = sum[0] == '-' ? 1 : 0
        sum = sum.replace('-', '')
        while (sum.length < 10) sum = '0' + sum
        if (sign) document.querySelector('.sign_heart>img').src = 'img/сердце1.png'
        else document.querySelector('.sign_heart>img').src = 'img/сердце2.png'
        const bits = document.querySelector('.bits').children
        console.log(sum)
        for(let i = 0; i<10; i++){
            if(parseInt(sum[i])) bits[i].querySelector('img').src = 'img/сердце1.png'
            else bits[i].querySelector('img').src = 'img/сердце2.png'
        }
    }
    else alert('Я слишком глупый, чтобы такое посчитать, извините🥺')
})