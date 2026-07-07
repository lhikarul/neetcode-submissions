/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0
        
        function depth(node) {
            if (node === null) return 0

            const leftDepth = depth(node.left)
            const rightDepth = depth(node.right)

            diameter = Math.max(diameter, leftDepth + rightDepth)

            return Math.max(leftDepth, rightDepth) + 1
        }

        depth(root)

        return diameter
    }
}
