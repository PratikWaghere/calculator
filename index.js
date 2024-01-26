function myfuncation1(num1){
    document.getElementById("input").value += num1;
    document.getElementById("input").innerHTML = num1;
    
    };
    function myfuncationclr(){
        document.getElementById("input").value=' ';
    };
    function opration(opr){
          document.getElementById("input").value += opr;
          document.getElementById("input").innerHTML = opr;
        };
    function result(){
        if (document.getElementById("input").value == " ") {
            alert ("Please enter the values");
            } else{
                var x=document.getElementById("input").value;
                document.getElementById("input").value=eval(x);
                document.getElementById("input").innerHTML=eval(x);
                }
                history();
    };
    // function superpower(opra , num2){
    //      document.getElementById("input").value += opra;
    //      document.getElementById("input").innerHTML = opra;

    // }
    function power(){
        if (document.getElementById("input").value == " ") {
            alert ("Please enter the values");
            } else{
        var x = document.getElementById("input").value;
        document.getElementById("input").value = x*x;
        document.getElementById("input").innerHTML=x*x;
            }
            history();
    }
    function sqrt(){
        if (document.getElementById("input").value == " ") {
            alert ("Please enter the values");
            } else{
                var x = document.getElementById("input").value;
            document.getElementById("input").value = x**(1/2);
            document.getElementById("input").innerHTML = x**(1/2);
            }
            history();
    }
    function percentage(){
        if (document.getElementById("input").value == " ") {
            alert ("Please enter the values");
            } else{
        var x = document.getElementById("input").value;
        var y = prompt("Enter value for Percentage","");
        document.getElementById("input").value = x/y;
        document.getElementById("input").innerHTML = x +"/"+y+"="+x ;
            }
        }
        function fracation(){
            if (document.getElementById("input").value == " ") {
            alert ("Please enter the values");
            } else{
            var x = document.getElementById("input").value;
            document.getElementById("input").value = 1/x;
            document.getElementById("input").innerHTML = 1/x;
            }
            history();
        }
        
        function currclr(){
            var x = document.getElementById("input").value;
            var y = x.split('');
            y.pop();
            var z = y.join('');
            document.getElementById("input").value = z;
            document.getElementById.innerHTML = z;
        }
        function history(){
            var abc = document.getElementById("input").value;
            var arr = [];
            var arr2 = [];
            arr.push(abc);
            var n = arr.length;
            for(i=0;i<n; i++){
                arr2[i] = arr[i];
            }
            document.getElementById("his").value = arr2;
            document.getElementById("his").innerHTML = arr2;
            
            
        }