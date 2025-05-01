/**
 * Binary Search Algorithm
 * Returns the index if the target is found in the sorted array.
 * If not found, returns the index where it would be inserted to maintain the order.
 * 
 * @param {number[]} nums - A sorted array of distinct integers.
 * @param {number} target - The target value to search for.
 * @return {number} Index of the target or the insert position.
 */

//  * Time Complexity: O(log n)
//  * Space Complexity: O(1)


var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};
