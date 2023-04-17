import java.util.*;

class SortAStack {

  public static void main(String args[]) {
    Stack<Integer> stk = new Stack<Integer>();
    stk.push(78);
    stk.push(113);
    stk.push(90);
    stk.push(120);
    stk.push(190);
    stk.push(1230);
    stk.push(906);
    stk.push(1240);

    System.out.println(sort(stk));
  }

  public static Stack sort(Stack s) {
    if (s.size() == 0) {
      return s;
    }

    int poppedFromSort = (int) s.pop();
    sort(s);
    insertStack(s, poppedFromSort);
    return s;
  }

  public static Stack insertStack(Stack s, int poppedFromSort) {
    if (s.size() == 0 || (int) s.peek() <= poppedFromSort) {
      s.push(poppedFromSort);
      return s;
    }
    int poppedFromInsert = (int) s.pop();
    insertStack(s, poppedFromSort);
    s.push(poppedFromInsert);
    return s;
  }
}
