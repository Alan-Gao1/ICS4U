public class IntBSTNode {
    public int val;
    public IntBSTNode leftVal;
    public IntBSTNode rightVal;

    public IntBSTNode(){
        this.val = 0;
        this.leftVal = null;
        this.rightVal = null;
    }

    public IntBSTNode(int val){
        this.val = val;
        this.leftVal = null;
        this.rightVal = null;
    }

    public IntBSTNode(int val, IntBSTNode leftVal, IntBSTNode rightVal){
        this.val = val;
        this.leftVal = leftVal;
        this.rightVal = rightVal;
    }

    public int getVal(){
        return val;
    }

    public IntBSTNode getLeftVal(){
        return leftVal;
    }
    
    public IntBSTNode getRightVal(){
        return rightVal;
    }

    public void setVal(int in){
        val = in;
    }

    public void setLeftVal(IntBSTNode in){
        leftVal = in;
    }

    public void setRightVal(IntBSTNode in){
        rightVal = in;
    }

    public boolean hasLeftChild(){
        return leftVal != null;
    }

    public boolean hasRightChild(){
        return rightVal != null;
    }

    private IntBSTNode findLargest(IntBSTNode root){
        if(root.getRightVal() != null && root.getRightVal()!=null){
            return findLargest(root.getRightVal());
        }else if(root.getRightVal() != null){
            return root.getRightVal();
        }
        return root;
    }

    public boolean removeRecusrive(IntBSTNode leftChild, Integer val){
        if(leftChild.getVal() != val){
            removeRecusrive(leftChild.getLeftVal(), val);
        }else{
        }
        return false;
    }
}

