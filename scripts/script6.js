alert("add two numbers");

// async script
"when we use script async, the html parsing and downloading of script happens simultaneously. But when the script is downloaded, it is executed immediately, which pauses the html parsing. After the script is being executed, the html will continue its parsing ."

// defer script
"when we use script defer, the html parsing and downloading of script happens simultaneously. But when the script is downloaded, it is not executed immediately. The script is executed only after the html parsing is completely done."