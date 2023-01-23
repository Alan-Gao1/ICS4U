public class IntArrayStack {
    Integer[] n;

    public IntArrayStack(Integer[] n){
        this.n = n;
    }

    public void push(Integer number){
        Integer[] newArray = new Integer[n.length+1];
        if(n.length != 0){
            for (int i = 0; i < n.length; i++) {
                newArray[i+1] = n[i];
            }
        }
        newArray[0] = number;
        n = newArray;
    }

    public Integer pop(){
        Integer[] newArray = new Integer[n.length-1];
        if(n.length != 0){
            for (int i = 0; i < n.length; i++) {
                newArray[i] = n[i+1];
            }
        }
        return n[0];
    }

    public Integer peek(){
        return n[0];
    }

    public boolean empty(){
        return n.length == 0;
    }

    public int search(Integer search){
        for (int i = 0; i < n.length; i++) {
            if(search == n[i]){
                return i+1;
            }
        }
        return -1;
    }
}
