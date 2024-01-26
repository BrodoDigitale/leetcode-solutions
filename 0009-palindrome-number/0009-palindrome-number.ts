function isPalindrome(x: number): boolean {
    if(x < 0) {
        return false;
    }
    
    //copy original number and create a reverse one
    let num = x;
    let reverse = 0;

    while (num > 0) {
        //current value
        const curr = num % 10;
    
        //multiply reverse by ten and add current
        reverse = reverse*10 + curr;
        //divide the number by 10 and round it
        num = Math.floor(num / 10);
    }

    //compare to the ORIGINAL number(num will be 0)
    return x === reverse;
};