/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

   2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

   3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

   4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */

   /* 1 */

   function AsalNumberFinder(...params){
       let asalMi ;
       for (let index = 0; index < params.length; index++) 
       {
            asalMi = true        
           for (let j = 2; j < params[index] ; j++) 
           {      

                if(params[index]%j == 0 || params[index]==1) asalMi = false;     

           }  
          console.log(asalMi)       
       }
    }
    // AsalNumberFinder(1, 67,24, 3,83,89,9)

    /* 2 */

    function ArkadasSayi(number1, number2){
        let total1 = 0; let total2 = 0; let enBuyuk;
        if(number1 > number2) enBuyuk = number1;
        else enBuyuk = number2;
 
        for (let j = 0; j < enBuyuk ; j++) {
            if(number1 % j == 0 && number1 != j){
                total1 += j;
            } 
            if(number2 % j == 0 && number2 != j){
                total2 +=j;
            }      
        }  
        if(total2 == number1 && total1 == number2){
            console.log("Bu sayılar arkadaş sayıdır.");
        }
        else{
            console.log("Bu sayılar arkdaş sayı değildir.");
        }
    }
    // ArkadasSayi(1184, 1210)

    /* 3 */

    function perfectNumber(){
        for (let index = 1; index < 1000; index++) {
            let total = 0;

            for (let j = 0; j < index ; j++) {
                
               if(index % j == 0){
                    total += j
               }        
            }  

            if(total == index){
                console.log("->",index);
            }
           console.log(asalMi)       
       } 
    }

    // perfectNumber();

    /* 4 */

    function AsalNumbersUpToThousand(){
        let asalMi ;
       for (let index = 2; index < 1000; index++) {
            asalMi = true

            for (let j = 2; j < index ; j++) {
                if(index % j == 0){
                    asalMi = false;
                }                              
            }  
            if(asalMi) console.log(index)   
                
       }
    }
    // AsalNumbersUpToThousand();