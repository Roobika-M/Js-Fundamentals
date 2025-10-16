function days(day){
    switch(day){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Weekday"); 
            break;
        case 6:
        case 7:
            console.log("Weekend");
    }
}

days(3); // Output : Weekday
days(6); // Output : Weekend

//  so here the fall through is used to group multiple cases together and execute the same code block for those cases