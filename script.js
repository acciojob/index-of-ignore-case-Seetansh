function indexOfIgnoreCase(s1, s2) {
  // write your code 
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
	for(let i=0; i<s1.length; i++){
	    if(s2[0] == s1[i]){
	        return i;
	    }
	    else{
	        continue;
	    }
	}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
