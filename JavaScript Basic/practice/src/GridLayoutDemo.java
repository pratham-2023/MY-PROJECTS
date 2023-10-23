import java.awt.Button;
import java.awt.Frame;
import java.awt.GridLayout;

public class GridLayoutDemo {

	public static void main(String[] args) {	
		Frame frm = new Frame("Grid Layout Demo");
		frm.setSize(500,500);
//		set Layout
		GridLayout grid = new GridLayout(3,3, 5, 5);
		frm.setLayout(grid);
		
		Button b1 = new Button("B1");
		Button b2 = new Button("B2");
		Button b3 = new Button("B3");
		Button b4 = new Button("B4");
		Button b5 = new Button("B5");
		Button b6 = new Button("B6");
		Button b7 = new Button("B7");
		Button b8 = new Button("B8");
		Button b9 = new Button("B9");
		frm.add(b1); frm.add(b2);
		frm.add(b3); frm.add(b4);
		frm.add(b5); frm.add(b6);
		frm.add(b7); frm.add(b8);
		frm.add(b9);
		frm.setVisible(true);
		
	}
}
