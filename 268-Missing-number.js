/**
 * LeetCode 268: Missing Number
 * 
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 * 
 * Approach: 
 * Use the formula for the sum of the first n natural numbers and 
 * subtract the actual sum of the array elements to find the missing number.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    
    let actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};
