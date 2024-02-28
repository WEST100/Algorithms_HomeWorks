import static java.lang.Math.pow;


// алгоритм работает не корректно, я точно его написал не правильно, так как до конца не понимаю как надо, но я
// старался)))


public class towerIter {
    public static void main(String[] args) {
        int n = 3; // кол-во дисков
        towerOfHanoi(n, 'A', 'C', 'B');
    }

    public static void towerOfHanoi (int n, char from, char to, char help){

        int moves = (int) (pow(2, n)-1);
         if (n % 2 == 0) {
             towerOfHanoi(n-1, from, help, to);
             System.out.println("take disk from tower" + from + " to tower" + help );
         }

        for (int i = 1; i <= moves; i++) {
            if (i % 3 == 1) {
                towerOfHanoi(n-1, from, to, help);
                System.out.println("take disk from tower" + from + " to tower" + to );
            } else if (i % 3 == 2) {
                towerOfHanoi(n-1, from, help, to);
                System.out.println("take disk from tower" + from + " to tower" + help );
            } else if (i % 3 == 0) {
                towerOfHanoi(n-1, help, to, from);
                System.out.println("take disk from tower" + help + " to tower" + to );
            }
        }
    }
}
