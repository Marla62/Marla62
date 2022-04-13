public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

字节一面 to b
实现一个promise.all方法
求根节点到叶结点之和：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/