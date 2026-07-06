class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pair = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
        for (const char of s) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char)
            } else {
                const str = stack.pop()
                if (pair[str] !== char) return false
            }
        }

        return stack.length === 0
    }
}
