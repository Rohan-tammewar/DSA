public class PrintNumbers {

  public static void main(String[] args) {
    printNumber(10);
    System.out.println("");
    printNumberReverse(10);
  }

  // printing 1 to N -> using induction base hypothesis
  //Hypothesis is creating a basic printNumber(int n) function which will print number-> 1 to 7
  //Induction is printing 7 as printNumber(n-1) will not return 7 -> 1 to 6
  //Base condition will be the smallest valid input which is 1
  public static void printNumber(int n) {
    if (n == 1) {
      System.out.print(n + " ");
      return;
    }
    printNumber(n - 1);
    System.out.print(n + " ");
  }

  // printing N to 1 -> using induction base hypothesis
  //Hypothesis is creating a basic printNumber(int n) function which will print number-> 7 to 1
  //Induction is printing 7 as printNumber(n-1) will not return 7 -> 6 to 1
  //Base condition will be the smallest valid input which is 1
  public static void printNumberReverse(int n) {
    if (n == 1) {
      System.out.print(n + " ");
      return;
    }
    System.out.print(n + " ");
    printNumberReverse(n - 1);
  }
}
