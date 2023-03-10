function sum(a){
    return (b)=>{
      if(b)
        return sum(b+a);
      else
        return a;
    }
}

console.log(sum(1)(2)(3)(4)())