// print only odd numbers
for(let i = 1;i<21;i++){
    if(i%2!=0){
        console.log(i);
    }
    else{
        continue;
    }
}

// output : 1
// VM21:4 3
// VM21:4 5
// VM21:4 7
// VM21:4 9
// VM21:4 11
// VM21:4 13
// VM21:4 15
// VM21:4 17
// VM21:4 19

//stop the loop when i is 7
for(let i = 1;i<21;i++){
    if(i==7){
        break;
    }
    console.log(i);
}
// output : 1
// VM23:4 2
// VM23:4 3
// VM23:4 4
// VM23:4 5
// VM23:4 6     