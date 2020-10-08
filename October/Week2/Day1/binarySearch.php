class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer
 */

function search($nums, $target) {
    $low = 0;
    $high = count($nums)-1;
    
    // return binarySearch($nums, $low, $high, $target);
    
    // echo $low, $high;
    while ($high >= $low) {
        $mid = ($low + $high)/2;
        
        if ($nums[$mid] == $target) {
            return floor($mid);
        }
        
        if ($nums[$mid] > $target) {
            $low = $mid+1;
        }
        
        if ($nums[$mid] < $target) {
            $high = $mid-1;
        }
    }
    
    return -1;
    // echo $low;
}
}