

int findPoisonedDuration(int* timeSeries, int timeSeriesSize, int duration){
    if(timeSeriesSize == 0) {
        return 0;
    }
    
    int res = 0;
    for(int i = 0; i < timeSeriesSize; i++) {
        res += fmin(duration,timeSeries[i+1]-timeSeries[i]);
    }
    
    printf(res);
}