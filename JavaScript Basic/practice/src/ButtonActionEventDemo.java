import java.awt.Button;
import java.awt.Frame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ButtonActionEventDemo extends Frame  implements ActionListener{

	public ButtonActionEventDemo() {
		this.setTitle("Implenting Button Event");
		this.setSize(500,500);
		
		Button btn = new Button("Click Me!");
		btn.addActionListener(this);
		this.add(btn);
	}
	
	public static void main(String[] args) {
		ButtonActionEventDemo obj = new ButtonActionEventDemo();
		obj.setVisible(true);
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		System.out.println("BUtton is clicked....");
	}
}
