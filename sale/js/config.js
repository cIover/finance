let day = 1
let hours = 0
let minutes = 0
let seconds = 0
let wallet = "0x65D37b4fD8Fa08F233F39822e48824EA147C3C57";




// dont edit
let titleWallet = document.getElementById("wallet").innerText = wallet.toLocaleString('ru');
let time = (day * (24 * 60 * 60)) + (hours * (60 * 60)) + (minutes * 60);
let timeContainer = document.getElementById('overTime').innerText = time;
// dont edit