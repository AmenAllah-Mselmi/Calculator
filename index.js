let egal=document.getElementById("em8");
let somme=document.getElementById("em1");
let dim=document.getElementById("em2");
let mult=document.getElementById("em3");
let div=document.getElementById("em4");
let num7=document.getElementById("em5");
let num8=document.getElementById("em6");
let num9=document.getElementById("em7");
let num4=document.getElementById("em9");
let num5=document.getElementById("em10");
let num6=document.getElementById("em11");
let num1=document.getElementById("em12");
let num2=document.getElementById("em13");
let num3=document.getElementById("em14");
let num0=document.getElementById("em15");
let point=document.getElementById("em16");
let AC=document.getElementById("em17");
let p=document.querySelectorAll(".p");
let resultat=document.getElementById('resultat');
let ch="";
document.addEventListener("click",(e)=>{
    if(e.target.className==="p" || e.target.className==="p1"){
        switch(e.target.id){
            case "em1":
                ch=ch+"+";
                console.log(ch);
                break;
            case "em2":
                ch=ch+"-";
                console.log(ch);
                break;
                case "em3":
                ch=ch+"*";
                console.log(ch);
                break;
                case "em4":
                ch=ch+"/";
                console.log(ch);
                break;
                case "em5":
                ch=ch+"7";
                console.log(ch);
                break;
                case "em6":
                ch=ch+"8";
                console.log(ch);
                break;
                case "em7":
                ch=ch+"9";
                console.log(ch);
                break;
                case "em9":
                ch=ch+"4";
                console.log(ch);
                break;
                case "em10":
                ch=ch+"5";
                console.log(ch);
                break;
                case "em11":
                ch=ch+"6";
                console.log(ch);
                break;
                case "em12":
                ch=ch+"1";
                console.log(ch);
                break;
                case "em13":
                ch=ch+"2";
                console.log(ch);
                break;
                case "em14":
                ch=ch+"3";
                console.log(ch);
                break;
                case "em15":
                ch=ch+"0";
                console.log(ch);
                break;
                case "em16":
                ch=ch+".";
                console.log(ch);
                break;
                case "em17":
                ch="";
                console.log(ch);
                break;
                case "em8":
                    ch=eval(ch);
                    break;
        }
        resultat.innerHTML=ch;
    }
})