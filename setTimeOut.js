function x(){
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 3000); 
    console.log("Hello World");
}

// x();

// console gets printed first ,then settimeout  -> settimeout waits till call stack execution & then runs 

function y(){
    for(var i=0;i<5;i++){ // var prints same value everytime , where as let changes as it has different block scope
        setTimeout(() => {
            console.log(i); // It prints based on reference to i , refers to same memory space
        },i * 1000)
    }
}

// y();


function z(){
    for(var i=0;i<5;i++){
        function close(x){
            setTimeout(() => {
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
}

z();