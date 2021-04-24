#include <iostream>
using namespace std;
#include <math.h>
void said(int son){
 int s=0,son1=son,son2=son;
    while(son>0){
	 son=son/10;
	 s++;
	}if(s>0&&s<=3){
	    if(s%2==0){
           son1=son1/pow(10,s-2);
		     int g=son1%10;
		       son1=son1-g;
	    }else
		son1=son1/pow(10,s-1);
    }if(s>3&&s<=6){
	 if(s%2!=0){
	   son1=son1/pow(10,s-2);
		int g=son1%10;
		 son1=son1-g;
	  }else
		son1=son1/pow(10,s-1);
    }if(s>6){
	 if(s%2==0){
       son1=son1/pow(10,s-2);
		 int g=son1%10;
		   son1=son1-g;
	 }else
	  son1=son1/pow(10,s-1);
    }switch(son1){
		case 1:cout<<"Bir";break;
		case 2:cout<<"Ikki";break;
		case 3:cout<<"Uch";break;
		case 4:cout<<"To`rt";break;
		case 5:cout<<"Besh";break;
		case 6:cout<<"0lti";break;
		case 7:cout<<"Yetti";break;
		case 8:cout<<"Sakkiz";break;
		case 9:cout<<"To'qqiz";break;
		case 10:cout<<"O'n";break;
		case 20:cout<<"Yigirma";break;
		case 30:cout<<"O'ttiz";break;
		case 40:cout<<"Qirq";break;
		case 50:cout<<"Ellik";break;
		case 60:cout<<"Oltmish";break;
		case 70:cout<<"Yetmish";break;
		case 80:cout<<"Sakson";break;
		case 90:cout<<"To'qson";break;
	}switch(s){
		case 1:
		case 2:
		case 5:
		case 8:
		case 11:
		case 14:cout<<"";break;
		case 3:
		case 6:
		case 9:
		case 12:cout<<"Yuz";break;
	    case 4:cout<<"Ming";break;
	    case 7:cout<<"Million";break;
	    case 10:cout<<"Milliard"; break;
	    case 13:cout<<"Trillion"; break;
	}int z=pow(10,s-1);
	  if(son1>0){ 
	  	son2=son2%z;
		  said(son2);
	    }
}
int main(){
int n;
cin>>n;
	cout<<endl;
	said(n);
	cout<<lengthof(int);
}
