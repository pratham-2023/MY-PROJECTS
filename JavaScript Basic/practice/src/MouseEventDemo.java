import java.awt.Button;
import java.awt.Color;
import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.Label;
import java.awt.TextField;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class MouseEventDemo extends Frame implements MouseListener{
	TextField tf;
	Button btn, closeBtn;
	Label usrLabel;
	public MouseEventDemo() {
		this.setTitle("Mouse Event Demo");
		this.setSize(300, 100);
		this.setLayout(new GridLayout(2,2, 10,10));
		
//		Add components
		usrLabel = new Label("Enter your Name : ");
		tf = new TextField();
		btn = new Button("Show Name");
		btn.addMouseListener(this);
		
		closeBtn = new Button("Close");
		closeBtn.setBackground(Color.red);
		closeBtn.setForeground(Color.white);
		closeBtn.addMouseListener(this);
		
		this.add(usrLabel);
		this.add(tf);
		
		this.add(closeBtn);
		this.add(btn);
	}
	
	public static void main(String[] args) {
		new MouseEventDemo().setVisible(true);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
//		System.out.println("Mouse is Clicked!");
//		System.out.println(((Button)e.getSource()).getLabel());
		if(((Button)e.getSource()).getLabel().equals("Close")) {
			System.exit(0);
		}
		else if(((Button)e.getSource()).getLabel().equals("Show Name")) {
			String usrName = tf.getText();
			System.out.println("Your Name is " + usrName);
		}
		
	}

	@Override
	public void mousePressed(MouseEvent e) {
//		System.out.println("Mouse is Pressed!");
		if(((Button)e.getSource()).getLabel().equals("Close")) {
			
		}
		else if(((Button)e.getSource()).getLabel().equals("Show Name")) {
		
		}
	}

	@Override
	public void mouseReleased(MouseEvent e) {
//		System.out.println("Mouse is Released!");
		if(((Button)e.getSource()).getLabel().equals("Close")) {
			
		}
		else if(((Button)e.getSource()).getLabel().equals("Show Name")) {
		
		}
	}

	@Override
	public void mouseEntered(MouseEvent e) {
//		System.out.println("Mouse is Entered!");

		if(((Button)e.getSource()).getLabel().equals("Close")) {
			
		}
		else if(((Button)e.getSource()).getLabel().equals("Show Name")) {
			this.btn.setBackground(Color.black);
			this.btn.setForeground(Color.white);		
		}
	}

	@Override
	public void mouseExited(MouseEvent e) {
//		System.out.println("Mouse is Exit!");

		if(((Button)e.getSource()).getLabel().equals("Close")) {
			
		}
		else if(((Button)e.getSource()).getLabel().equals("Show Name")) {
			this.btn.setBackground(Color.white);
			this.btn.setForeground(Color.black);	
		}
	}
}
