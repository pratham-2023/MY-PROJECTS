import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Frame;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class ActionEventDemo extends Frame implements ActionListener{
	
	public ActionEventDemo() {
		this.setTitle("Action Event Demo");
		this.setSize(500,500);
		
		Button btn = new Button("Hello");
		btn.addActionListener(this);
		
		this.add(btn, BorderLayout.NORTH);
	}
	

	public static void main(String[] args) {
		new ActionEventDemo().setVisible(true);
	}


	@Override
	public void actionPerformed(ActionEvent e) {
		System.out.println("Button is clicked successfully...");
	}
}
