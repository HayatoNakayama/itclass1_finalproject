var money = 0;
var cart = [];

function register() {
  money = Number(document.getElementById('input_money').value);
  alert('所持金' + money + '円を登録しました。')
  return money;
}

function buy1() {
  alert('「頭の悪い人Tシャツ」を買い物かごに入れました.');
  money -= 2000;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('頭の悪い人Tシャツ')
  return money, cart;
}

function buy2() {
  alert('「すごい壺」を買い物かごに入れました.');
  money -= 150000;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('すごい壺')
  return money, cart;
}

function buy3() {
  alert('「盛り塩」を買い物かごに入れました.');
  money -= 10;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('盛り塩')
  return money, cart;
}

function buy4() {
  alert('「水素水」を買い物かごに入れました.');
  money -= 20000;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('水素水')
  return money, cart;
}

function buy5() {
  alert('「ヤバいタンクトップ」を買い物かごに入れました.');
  money -= 2000;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('ヤバいタンクトップ')
  return money, cart;
}

function buy6() {
  alert('「Diamond Rose iPhone 4 32GB」を買い物かごに入れました.');
  money -= 800000000;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('Diamond Rose iPhone 4 32GB')
  return money, cart;
}

function buy7() {
  alert('「高機能ゴミ箱」を買い物かごに入れました.');
  money -= 728800;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('高機能ゴミ箱')
  return money, cart;
}

function buy8() {
  alert('「丑の刻参りセット」を買い物かごに入れました.');
  money -= 7200;
  if (money >= 0) {
    alert('残金は' + money + '円です。')
  }else {
    alert('残金が足りません！お金がない人はお帰りください。')
  }
  cart.push('丑の刻参りセット')
  return money, cart;
}

function kago() {
  display = []
  for (var i = 0; i < cart.length; i++) {
    display.push(cart[i]+'\n')
  }
  alert(display);
} //谷村さんありがとう
