function validMountainArray(arr: number[]): boolean {
    //initial condition
    if(arr.length < 3) {
        return false;
    }
    
    let i = 0;
    
    //find a montain peak
    while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
        i++;
    }
    
    if(i === arr.length - 1 || i === 0) {
        return false;
    }
    
    //check if after the peak numbers are decreasing
    for(i; i <= arr.length - 1; i++) {
        if(arr[i] <= arr[i + 1]) {
            return false;
        }
    }
    
    return true;
};