function said(son){let s=0,son1=son,son2=son;
    while(son>0){
  son=Math.floor(son/10);
  s++;
 }if((s>0&&s<=3)||(s>6&&s<=9)||(s>12&&s<=15)){
     if(s%2==0){
      son1=Math.floor(son1/Math.pow(10,s-2));
       let g=son1%10;
         son1=son1-g;
     }else
     son1=Math.floor(son1/Math.pow(10,s-1));
    }if((s>3&&s<=6)||(s>9&&s<=12)||(s>15&&s<=18)){
  if(s%2!=0){
    son1=Math.floor(son1/Math.pow(10,s-2));
  let g=son1%10;
   son1=son1-g;
   }else
  son1=Math.floor(son1/Math.pow(10,s-1));
   }switch(son1){
  case 1:console.log("Bir");break;
  case 2:console.log("Ikki");break;
  case 3:console.log("Uch");break;
  case 4:console.log("To`rt");break;
  case 5:console.log("Besh");break;
  case 6:console.log("0lti");break;
  case 7:console.log("Yetti");break;
  case 8:console.log("Sakkiz");break;
  case 9:console.log("To'qqiz");break;
  case 10:console.log("O'n");break;
  case 20:console.log("Yigirma");break;
  case 30:console.log("O'ttiz");break;
  case 40:console.log("Qirq");break;
  case 50:console.log("Ellik");break;
  case 60:console.log("Oltmish");break;
  case 70:console.log("Yetmish");break;
  case 80:console.log("Sakson");break;
  case 90:console.log("To'qson");break;
 }switch(s){
  case 1:
  case 2:
  case 5:
  case 8:
  case 11:
  case 14:
  case 17:break;
  case 3:
  case 6:
  case 9:
  case 12:
  case 15:
  case 18:console.log("Yuz");break;
     case 4:console.log("Ming");break;
     case 7:console.log("Million");break;
     case 10:console.log("Milliard"); break;
     case 13:console.log("Trillion"); break;
     case 16:console.log("Quadrillion");break;
 }let z=Math.pow(10,s-1);
   if(son1>0){ 
    son2=son2%z;
    said(son2);
     }
}
let a=243463526476527463;
said(a);