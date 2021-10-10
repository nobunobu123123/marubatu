'use strict';
//```javascript
{ 
　const inside = document.querySelectorAll('.a_point');

  const show_win = document.querySelector('#show_win');
  show_win.style.display = "none";
  let c = 0;
  let PWC =0;
  let EWC =0;


//敵を確認
let Enemy=""
const enemyCheck = () => {
// form要素を取得
let enemies = document.getElementById( "enemies" ) ;

// form要素内のラジオボタングループ(name="hoge")を取得
let enemyList = enemies.enemy;

// 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
Enemy = enemyList.value;

document.getElementById("enemy_name").textContent =("☓　"+Enemy);
}

//プレイヤー勝利
const playerWin = ()=>{
  PWC++;
  document.getElementById("1_score").textContent = PWC;
  show_win.textContent = ('Player1 win!');
  show_win.style.display = "block";
  document.getElementById('1_first').style.color="black";
  document.getElementById('2_first').style.color="black";
  reset.textContent="Next Game";
  reset.style.color="orangered";
}

//エネミー勝利
const enemyWin = ()=>{
  EWC++;
  document.getElementById("2_score").textContent = EWC;
  show_win.textContent =(Enemy+" win!");
  show_win.style.display = "block";
  document.getElementById('1_first').style.color="black";
  document.getElementById('2_first').style.color="black";
  reset.textContent="Next Game";
  reset.style.color="orangered";
}


//先攻決め
let first=0;
const decide_first = () =>{
  document.getElementById('1_first').style.color="orangered";
  document.getElementById('2_first').style.color="orangered";

  let rand = Math.random();
  if(rand <0.5){
    document.getElementById('1_first').textContent="先行";
    document.getElementById('2_first').textContent="後攻";
  }
  else{
    document.getElementById('1_first').textContent="後攻";
    document.getElementById('2_first').textContent="先行";
    --c;
    if(Enemy=="弱いCPU"){
      weakCPU();
    }
    if(Enemy=="絶対に負けないCPU"){
      strongCPU();
    }
  }
}


//勝利判定
  const win = function(){
      if((inside[0].textContent == inside[1].textContent && inside[0].textContent == inside[2].textContent && inside[0].textContent == "〇")||
      (inside[3].textContent == inside[4].textContent && inside[3].textContent == inside[5].textContent && inside[4].textContent == "〇")||
      (inside[6].textContent == inside[7].textContent && inside[6].textContent == inside[8].textContent && inside[6].textContent == "〇")||
      (inside[0].textContent == inside[3].textContent && inside[3].textContent == inside[6].textContent && inside[6].textContent == "〇")||
      (inside[1].textContent == inside[4].textContent && inside[4].textContent == inside[7].textContent && inside[7].textContent == "〇")||
      (inside[2].textContent == inside[5].textContent && inside[5].textContent == inside[8].textContent && inside[8].textContent == "〇")||
      (inside[0].textContent == inside[4].textContent && inside[4].textContent == inside[8].textContent && inside[8].textContent == "〇")||
      (inside[2].textContent == inside[4].textContent && inside[4].textContent == inside[6].textContent && inside[6].textContent == "〇")
      ){
        playerWin();
      } 

      else if((inside[0].textContent == inside[1].textContent && inside[0].textContent == inside[2].textContent && inside[0].textContent == "☓")||
      (inside[3].textContent == inside[4].textContent && inside[3].textContent == inside[5].textContent && inside[4].textContent == "☓")||
      (inside[6].textContent == inside[7].textContent && inside[6].textContent == inside[8].textContent && inside[6].textContent == "☓")||
      (inside[0].textContent == inside[3].textContent && inside[3].textContent == inside[6].textContent && inside[6].textContent == "☓")||
      (inside[1].textContent == inside[4].textContent && inside[4].textContent == inside[7].textContent && inside[7].textContent == "☓")||
      (inside[2].textContent == inside[5].textContent && inside[5].textContent == inside[8].textContent && inside[8].textContent == "☓")||
      (inside[0].textContent == inside[4].textContent && inside[4].textContent == inside[8].textContent && inside[8].textContent == "☓")||
      (inside[2].textContent == inside[4].textContent && inside[4].textContent == inside[6].textContent && inside[6].textContent == "☓")
      ){
        enemyWin();
      }
      else if(c > 8){
       show_win.textContent = "Draw";
       show_win.style.display = "block";
       reset.textContent="Next Game";
       reset.style.color="orangered";
      }
  }


  //弱いCPUの動き
const weakCPU = () =>{
  while(c % 2 !== 0){
  let p = Math.floor(Math.random()*9); 
  if (inside[p].textContent == "")
  {inside[p].textContent="☓";
  c++;
  win();
}}}

const strongCPU = () =>{

  //☓が二つならんでいる時の条件。
    if(inside[0].textContent == inside[1].textContent && inside[0].textContent == "☓" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }
    else if(inside[0].textContent == inside[2].textContent && inside[0].textContent == "☓" && inside[1].textContent == ""){
      inside[1].textContent = "☓"
    }
    else if(inside[1].textContent == inside[2].textContent && inside[1].textContent == "☓" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[3].textContent == inside[4].textContent && inside[3].textContent == "☓" && inside[5].textContent == ""){
      inside[5].textContent = "☓"
    }
    else if(inside[5].textContent == inside[3].textContent && inside[3].textContent == "☓" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[5].textContent && inside[5].textContent == "☓" && inside[3].textContent == ""){
      inside[3].textContent = "☓"
    }

    else if(inside[6].textContent == inside[7].textContent && inside[6].textContent == "☓" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[8].textContent == inside[6].textContent && inside[6].textContent == "☓" && inside[7].textContent == ""){
      inside[7].textContent = "☓"
    }
    else if(inside[7].textContent == inside[8].textContent && inside[8].textContent == "☓" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }

    else if(inside[0].textContent == inside[3].textContent && inside[0].textContent == "☓" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }
    else if(inside[6].textContent == inside[0].textContent && inside[0].textContent == "☓" && inside[3].textContent == ""){
      inside[3].textContent = "☓"
    }
    else if(inside[3].textContent == inside[6].textContent && inside[3].textContent == "☓" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[1].textContent == inside[4].textContent && inside[1].textContent == "☓" && inside[7].textContent == ""){
      inside[7].textContent = "☓"
    }
    else if(inside[7].textContent == inside[1].textContent && inside[1].textContent == "☓" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[7].textContent && inside[4].textContent == "☓" && inside[1].textContent == ""){
      inside[1].textContent = "☓"
    }

    else if(inside[2].textContent == inside[5].textContent && inside[2].textContent == "☓" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[8].textContent == inside[2].textContent && inside[2].textContent == "☓" && inside[5].textContent == ""){
      inside[5].textContent = "☓"
    }
    else if(inside[5].textContent == inside[8].textContent && inside[5].textContent == "☓" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }

    else if(inside[0].textContent == inside[4].textContent && inside[0].textContent == "☓" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[0].textContent == inside[8].textContent && inside[0].textContent == "☓" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[8].textContent && inside[4].textContent == "☓" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[2].textContent == inside[4].textContent && inside[2].textContent == "☓" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }
    else if(inside[6].textContent == inside[2].textContent && inside[2].textContent == "☓" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[6].textContent && inside[4].textContent == "☓" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }

   //丸が二つならんでいるときの条件
    else if(inside[0].textContent == inside[1].textContent && inside[0].textContent == "〇" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }
    else if(inside[0].textContent == inside[2].textContent && inside[0].textContent == "〇" && inside[1].textContent == ""){
      inside[1].textContent = "☓"
    }
    else if(inside[1].textContent == inside[2].textContent && inside[1].textContent == "〇" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[3].textContent == inside[4].textContent && inside[3].textContent == "〇" && inside[5].textContent == ""){
      inside[5].textContent = "☓"
    }
    else if(inside[5].textContent == inside[3].textContent && inside[3].textContent == "〇" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[5].textContent && inside[5].textContent == "〇" && inside[3].textContent == ""){
      inside[3].textContent = "☓"
    }

    else if(inside[6].textContent == inside[7].textContent && inside[6].textContent == "〇" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[8].textContent == inside[6].textContent && inside[6].textContent == "〇"　&& inside[7].textContent == ""){
      inside[7].textContent = "☓"
    }
    else if(inside[7].textContent == inside[8].textContent && inside[8].textContent == "〇" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }

    else if(inside[0].textContent == inside[3].textContent && inside[0].textContent == "〇" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }
    else if(inside[6].textContent == inside[0].textContent && inside[0].textContent == "〇" && inside[3].textContent == ""){
      inside[3].textContent = "☓"
    }
    else if(inside[3].textContent == inside[6].textContent && inside[3].textContent == "〇" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[1].textContent == inside[4].textContent && inside[1].textContent == "〇" && inside[7].textContent == ""){
      inside[7].textContent = "☓"
    }
    else if(inside[7].textContent == inside[1].textContent && inside[1].textContent == "〇" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[7].textContent && inside[4].textContent == "〇" && inside[1].textContent == ""){
      inside[1].textContent = "☓"
    }

    else if(inside[2].textContent == inside[5].textContent && inside[2].textContent == "〇" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[8].textContent == inside[2].textContent && inside[2].textContent == "〇" && inside[5].textContent == ""){
      inside[5].textContent = "☓"
    }
    else if(inside[5].textContent == inside[8].textContent && inside[5].textContent == "〇" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }

    else if(inside[0].textContent == inside[4].textContent && inside[0].textContent == "〇" && inside[8].textContent == ""){
      inside[8].textContent = "☓"
    }
    else if(inside[0].textContent == inside[8].textContent && inside[0].textContent == "〇" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[8].textContent && inside[4].textContent == "〇" && inside[0].textContent == ""){
      inside[0].textContent = "☓"
    }

    else if(inside[2].textContent == inside[4].textContent && inside[2].textContent == "〇" && inside[6].textContent == ""){
      inside[6].textContent = "☓"
    }
    else if(inside[6].textContent == inside[2].textContent && inside[2].textContent == "〇" && inside[4].textContent == ""){
      inside[4].textContent = "☓"
    }
    else if(inside[4].textContent == inside[6].textContent && inside[4].textContent == "〇" && inside[2].textContent == ""){
      inside[2].textContent = "☓"
    }

    //ここから通常時の条件
    else if(inside[4].textContent==""){
      　inside[4].textContent="☓"
    }
    else if (inside[0].textContent==""){
      inside[0].textContent="☓"
    }
    else if (inside[2].textContent==""){
      inside[2].textContent="☓"
    }
    else if (inside[6].textContent==""){
      inside[6].textContent="☓"
    }
    else if (inside[8].textContent==""){
      inside[8].textContent="☓"
    }
    else if (inside[1].textContent==""){
      inside[1].textContent="☓"
    }
    else if (inside[3].textContent==""){
      inside[3].textContent="☓"
    }
    else if (inside[5].textContent==""){
      inside[5].textContent="☓"
    }
    else if (inside[7].textContent==""){
      inside[7].textContent="☓"
    }
  c++;
  
  win();
}
  
 

　//○✖書き込み。
  document.querySelectorAll('.a_point').forEach((point) => {
    point.addEventListener('click', () => {
        if (point.textContent === "" && reset.textContent == "Surrender"){
            if (c % 2 === 0){
                point.textContent = '〇';
                c++;
                win();
                if(Enemy=="弱いCPU"){
                  weakCPU();
                }
                if(Enemy=="絶対に負けないCPU"){
                  strongCPU();
                }
            }
            else{
                point.textContent = '☓';
                c++;
                win();
                }
            }
        }
    );
  });
  

//勝利兼リセットボタン。
 const reset = document.getElementById("reset");
 reset.addEventListener('click', () => {

  if(reset.textContent == "Surrender"){
    if (c % 2 === 0){
      enemyWin();
    }
    else{
      playerWin();
    }
  }

 else{
   for(let i=0; i<9; i++){
     inside[i].textContent = ""; 
    }
    c = 0;

  　enemyCheck();
    decide_first();

    reset.textContent = "Surrender";
    reset.style.color = "black";
    show_win.style.display = "none";
 }
})

}
