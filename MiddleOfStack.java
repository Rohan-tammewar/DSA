import java.util.*;

class MiddleOfStack {

  public static void main(String[] args) {
    Stack<Integer> stk = new Stack<Integer>();
    stk.push(78);
    stk.push(113);
    stk.push(90);
    stk.push(120);
    stk.push(190);
    stk.push(1230);
    stk.push(906);
    stk.push(1240);

    int k = (stk.size() / 2) + 1;

    System.out.println(removeMiddle(stk, k));
  }

  public static Stack removeMiddle(Stack s, int k) {
    if (k == 1) {
      System.out.println("Middle of the stack : " + s.pop());
      return s;
    }

    int popped = (int) s.pop();
    removeMiddle(s, k - 1);
    s.push(popped);

    return s;
  }
}
