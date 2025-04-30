/**
 * Moves all the zeros in the array to the end while maintaining the order of non-zero elements.
 * Time Complexity: O(n) — where n is the length of the input array (as we loop through it once).
 * Space Complexity: O(1) — as we are modifying the array in-place without using extra space.
 *
 * @param {number[]} nums 
 * @return {void} - This function modifies the input array in-place.
 */


function moveZeroes(nums) {
    // Pointer to keep track of where the next non-zero element should go
    let pos = 0; 

    for (let i = 0; i < nums.length; i++) {
        // If the current element is non-zero, move it to the 'pos' position
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++; // Move the 'pos' pointer to the next position
        }
    }

    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0;
    }
}

