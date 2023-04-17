import java.util.*;

class ReverseAStack {

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

    System.out.println(stk);
    System.out.println(reverse(stk));
  }

  //Hypothesis: if you wnat to reverse a stack you will empty the whole stack and then push all the elements: i/p a stack o/p reverse of it

  public static Stack reverse(Stack s) {
    //smallest possible is with one element in stack
    if (s.size() == 1) {
      return s;
    }
    int popped = (int) s.pop();
    reverse(s);
    //Induction: inserting the popped element at the bottom
    insert(s, popped);

    return s;
  }

  //Hypothesis: input a stack and element to be inserted
  public static Stack insert(Stack s, int popped) {
    //since we have to put the element at the bottom once the stack is empty we push the popped element
    if (s.size() == 0) {
      s.push(popped);
      return s;
    }
    int poppedFromInsert = (int) s.pop();
    insert(s, popped);
    //Induction: While considering smaller input we pop 1 item frm stack and hence putting it back att the top

    s.push(poppedFromInsert);

    return s;
  }
}
