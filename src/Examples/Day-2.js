/* 1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

    Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)

   2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

   3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

   4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */

   /* 1 */
   console.log("hello dostum")
   let asalMi ;

   function AsalNumberFinder(...params){
       for (let index = 0; index < params.length; index++) {
            asalMi = true

            for (let j = 2; j < params[index] ; j++) {
               console.log("newUzunluk", params[index].length -1)
               if(params[index]%j == 0 || params[index]==1){
                    asalMi = false;
               } 
                             
            }  
           console.log(asalMi)       
       }
    }
    AsalNumberFinder(1, 67,24, 3,83,89,9)

    /* 2 */

    function ArkadasSayi(number1, number2){

    }