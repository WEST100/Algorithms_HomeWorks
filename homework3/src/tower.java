public class tower {
    public static void main(String[] args) {
int n = 3;
towerOfHanoi(n, 'A', 'C', 'B');
    }

    public static void towerOfHanoi (int n, char from, char to, char help){
        if (n==1) {
            System.out.println("take disk from tower" + from + " to tower" + to );
            return;
        }
        towerOfHanoi(n-1, from, help, to);
        System.out.println("take disk from tower" + from + " to tower" + to );
        towerOfHanoi(n-1, help, to, from);
    }
}
