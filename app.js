var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type in words in the terminal and type Enter to exit? :', (str) => {
  // TODO: Log the answer in a database
  console.log(readlines(str));


});

//Question 1
function sequence (str){
 
  return str.split(',').reduce(function(acc, nextValue, i, arr){
      var divider= arr.length/2;

       if (i < divider){
             acc[0].push(nextValue);

       }else{
        acc[1].push(nextValue);
       }
              return acc;
  },[[],[]]);
}

//Question 2
function date (str){
var am_pm,time;
  str= str.toLowerCase().split(' ');
  if (str[str.length-1]==='am'||str[str.length-1]==='pm'){
             am_pm=str[str.length-1];
              time= str[0];
              time= time.split(':');

  }else{

    time= str[0];
              time= time.split(':');
  }
   if (am_pm==='am'){
        if (Number(time[0])>12||Number(time[0])<1){
          return 'Enter a valid date';
        }
       if (Number(time[0])===12){
           time[0]='00';
       }else if (Number(time[0])<10){
            time[0]='0'+ Number(time[0]);
       }
     return time.join(':');
   } 

    if (am_pm==='pm'){
       if (Number(time[0])>12||Number(time[0])<1){
          return 'Enter a valid date';
        }
       if (Number(time[0])<12){
           time[0]=Number(time[0])+12;
       
       }else if (Number(time[0])===12){
          time[0]='00';
       }
       return time.join(':');
     }

     if (am_pm===undefined){
       if (Number(time[0])>24||Number(time[0])<0){
          return 'Enter a valid date';
        }
        if (Number(time[0]) > 12){
                  var value=Number(time[0])-12;
                  time[0]='0'+value;
            return time.join(':') +' PM';
        }else if (Number(time[0]) < 12){
               time[0]='0'+Number(time[0]);
          return time.join(':') +' AM';
        }

     }

   
}

//Question 3
function readlines(str){

   return str.split('').sort().reduce(function(acc, currentValue){

   	    if (currentValue in acc){
   	    	acc[currentValue]++;
   	    }else{
   	    	if (currentValue!=" "){

   	    			acc[currentValue]=1;
   	    	}
			
   	    }
         return acc;
   },{})

}


//Question 4
function removeDuplicates(str){
  var duplicate=0;
  var str=str.replace(/[^a-zA-Z ]/g, "");
       var removedChar= str.split("");
       removedChar.sort(function(a,b){return a-b});               
  for (var i=1; i<removedChar.length-1; i++){
      for( var j=0; j<removedChar.length; j++){
        if (i!=j){
            if (removedChar[i]===removedChar[j]){
               duplicate++;
               removedChar.splice(j, 1);  
              
            }
         }
      }
  }
    return{
      uniques:removedChar.join(''),
      duplicates: duplicate
    }
}

function removeDuplicates(str){
  var duplicates=0;
  var total;
  var uniques=[];
   str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split('').sort().forEach(function(value, i, arr){
        if (arr.indexOf(value)!==arr.lastIndexOf(value)){
                   duplicates++;
                   removedChar.splice(i, 1);
        }else{
          uniques.push(value)
    
           total=arr.length-duplicates;
        }
   })

   return {
     duplicate:total,
     uniques: uniques.join('')
   }

}


//Question 5
function isIsogram(str){
    return str.split('').every(function(value){
         return arr.indexOf(value)===arr.lastIndexOf(value);
    })
}

//Question 6
var mySort = function (arr){
  var odd=[];
  var even=[];
    arr.forEach(function(int,i){
      int= Math.floor(int);
      if (typeof int ==='string'){
          arr.splice(i,1);
        }else if (int %2==1 ){
          odd.push(int);
        }else if (int%2==0){
          even.push(int);
        }
    });
    odd.sort(function(a, b){
    return a-b;
    });

    even.sort(function(a,b){
      return a-b;
    });
  
  return odd.concat(even);
}


//Question 7
function power( value1, value2){
        if(value2 === 0){
        return 1;
    }
    else{
        return value1 * power(value1,value2-1);
    }
}


//Question 8
function longest(str){
  return str.split(' ').reduce(function(acc,value){
         if (value.length>acc.length){
           acc=value;
         }
         return acc;
  },'');
}