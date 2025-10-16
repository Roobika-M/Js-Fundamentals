function pow(x,n){
    let mul = 1;
    for(let i=0; i<n; i++){
        mul = mul * x;
    }
}

pow(2,3); // 8
pow(4,2); // 16