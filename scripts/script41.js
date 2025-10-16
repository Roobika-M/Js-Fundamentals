// sum of n numbers
//for loop
function sumTon(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum+=i;
    }
}

sumTon(7); // 28

// while loop
function sumTon2(n){
    let sum = 0;    
    let i = 1;
    while(i<=n){
        sum+=i;
        i++;
    }
}
sumTon2(9); // 45