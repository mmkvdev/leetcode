/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int fastPow(int base, int power){
      int res = 1;
      while(power > 0){
         if(power & 1) res *= base;
         base *= base;
         power >>= 1;
      }
      return res;
   }
   int countNodes(TreeNode* root) {
      int hr = 0;
      int hl = 0;
      TreeNode* l = root;
      TreeNode* r = root;
      while(l){
         hl++;
         l = l->left;
      }
      while(r){
         r = r->right;
         hr++;
      }
      if(hl == hr) return fastPow(2, hl) - 1;
      return 1 + countNodes(root->left) + countNodes(root->right);
   }
};