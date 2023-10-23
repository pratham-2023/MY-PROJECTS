

import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Color;
import java.awt.Frame;
import java.awt.Label;
import java.awt.Panel;

public class BorderLayoutDemo {
	public static void main(String[] args) {
		Frame frm = new Frame("Border Layout Demo");
		frm.setSize(600, 600);
		
//		Add components
//		Button btn = new Button("Login Button");
//		frm.add(btn, BorderLayout.SOUTH);
		Panel topPnl = new Panel();
		topPnl.setBackground(Color.BLUE);
//		Add components to TOP Panel
		Label titleLbl = new Label("GUI Application");
		topPnl.add(titleLbl);
		
		Panel leftPnl = new Panel();
		leftPnl.setBackground(Color.red);
		Panel rightPnl = new Panel();
		rightPnl.setBackground(Color.green);
		Panel bottomPnl = new Panel();
		bottomPnl.setBackground(Color.orange);
		Panel center = new Panel();
		center.setBackground(Color.black);
		
//		add panels to frame container.
		frm.add(topPnl, BorderLayout.NORTH);
		frm.add(leftPnl, BorderLayout.WEST);
		frm.add(rightPnl, BorderLayout.EAST);
		frm.add(bottomPnl, BorderLayout.SOUTH);
		frm.add(center,BorderLayout.CENTER);
		frm.setVisible(true);
	}
}
