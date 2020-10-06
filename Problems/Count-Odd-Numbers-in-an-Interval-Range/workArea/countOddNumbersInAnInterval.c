int countOdds(int low, int high){
    /*
    int count = 0;
    for(int i = low; i <= high; i++) {
        if(i%2 != 0) {
            count++;
        } 
        else {
            continue;
        }
    }
    
    return count;*/
    return ((high+1) >> 1) - (low >> 1);
}