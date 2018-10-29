function myFunction1(){ //kad kliknemo na radio button (id zene), pozivamo funkciju da dodeli ove vrednosti u izbor aktivnosti
    let x1 =  document.getElementById("sedenje").name = 1.00;
    let y1 =  document.getElementById("uAktivan").name = 1.12;
    let z1 =  document.getElementById("aktivan").name = 1.27;
    let q1 =  document.getElementById("vAktivan").name = 1.45;
   //ovde dobijam zadate vrednosti koje mi trebaju!!1
};

function myFunction2(){ //kad kliknemo na radio button (id muskarci), pozivamo funkciju da dodeli ove vrednosti u izbor aktivnosti
   let x2 = document.getElementById("sedenje").name = 1.00;
   let y2 =  document.getElementById("uAktivan").name = 1.11;
   let z2 = document.getElementById("aktivan").name = 1.25;
   let q2 =  document.getElementById("vAktivan").name = 1.48;   
    //kad kliknemo na radio button (id muskarci), pozivamo funkciju da dodeli ove vrednosti u izbor aktivnosti
}

function myFunction3(){ //kad kliknemo na radio button (id devojcice), pozivamo funkciju da dodeli ove vrednosti u izbor aktivnosti
    let x3 = document.getElementById("sedenje").name = 1.00;
    let y3 = document.getElementById("uAktivan").name = 1.16;
    let z3 = document.getElementById("aktivan").name = 1.31;
    let q3 = document.getElementById("vAktivan").name = 1.56;    
}
function myFunction4(){ //kad kliknemo na radio button (id decaci), pozivamo funkciju da dodeli ove vrednosti u izbor aktivnosti
    let x4 =  document.getElementById("sedenje").name = 1.00;
    let y4 = document.getElementById("uAktivan").name = 1.13;
    let z4 = document.getElementById("aktivan").name = 1.26;
    let q4 = document.getElementById("vAktivan").name = 1.42;
}
function onSelected(){    
     var e = document.getElementById("izborAktivnosti");
    var myValue = e.options[e.selectedIndex].name;
    return myValue;
   // console.log(value);
}
function myFunction() {
    var V = document.getElementById("visina").value;
    var T = document.getElementById("tezina").value;
    var G = document.getElementById("godine").value;
    
   var select1 = document.getElementById("decaci").checked;
   var select2 = document.getElementById("devojcice").checked;
   var select3 = document.getElementById("muskarci").checked;
   var select4 = document.getElementById("zene").checked;
    
   var PA = onSelected();
    
    let fun;
    let fun1 = 88.5-(61.9*G)+PA*[(26.7*T)+(903*V)]+25;
    let fun2 =  135.3-(30.8*G)+PA*[(10*T)+(934*V)]+25;
    let fun3 =  662-(9.53*G)+PA*[(15.91*T)+(539.6*V)];
    let fun4 =  354-(6.91*G)+PA*[(9.36*T)+(726*V)];
    
          if(select1 == true){fun = fun1};
          if(select2 == true){fun = fun2};
          if(select3 == true){fun = fun3};
          if(select4 == true){fun = fun4};
   
   document.getElementById("rezultat").value = fun;
    //Formule za izracunavanje kalorija
    
    //Dečaci (3-18 god):    88.5 – (61.9 x G) + PA x [ (26.7 x T) + (903 x V) ] + 25
    //Devojčice (3-18 god):    135.3 – (30.8 x G) + PA x [ (10.0 x T) + (934 x V) ] + 25
    //Muškarci (više od 19 god):    662 – (9.53 x G) + PA x [ (15.91 x T) + (539.6 x V)]
    //Žene (više od 19god):    354 – (6.91 x G) + PA x [ (9.36 x T) + (726 x V)]

    //  Odredite svoj – PA
    //  Svoju težinu u kilogramima – T
    //  Svoju visinu u metrima – V
    //  Svoje godine – G


};
