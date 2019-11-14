function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

//This is a recursive function that can be applied to a binary tree to find the sum of all values in the tree.