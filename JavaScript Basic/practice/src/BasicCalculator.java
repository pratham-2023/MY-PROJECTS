import java.awt.BorderLayout;
import java.awt.Button;
import java.awt.Color;
import java.awt.Font;
import java.awt.Frame;
import java.awt.GridLayout;
import java.awt.Panel;
import java.awt.TextField;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class BasicCalculator extends Frame implements MouseListener{
//	Member variables or Objects
	TextField txtDisplay;
	Button btn[] = new Button[24];
	private final int ROWS = 6, COLS = 4;
	private final String BTN_LABELS[] = {"%", "CE", "C" , "DEL", "1/x", "x^2", "x^3", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+","+/-", "0", ".", "="};
	
	private int sum = 0;
	private int disNum1 = 0;
	private char operation = '\0'; //NULL
	public BasicCalculator() {
		this.setTitle("Calculator");
		this.setSize(300,500);
		
//		Add Panel - to the BorderLayout.CENTER
		Panel mainPanel = new Panel();
		this.add(mainPanel);
//		Set the layout of Panel to BorderLayout
		mainPanel.setLayout(new BorderLayout(5, 15));
		
//		Add Display section to mainPanel at TOP
		txtDisplay = new TextField();
		txtDisplay.setFont(new Font("Calibri", Font.BOLD, 30));
		txtDisplay.setText(""+disNum1);
		mainPanel.add(txtDisplay, BorderLayout.NORTH);
		
//		Add dash board to the mainPanel at CENTER
		Panel dashPanel = new Panel();
//		set the dash panel layout to GRID
		dashPanel.setLayout(new GridLayout(6, 4, 5, 5));
		
//		Add buttons component to the dash.
		int c = 0;
		for(int i = 0; i<ROWS; i++) {
			for(int j = 0; j<COLS; j++) {
				btn[i] = new Button(BTN_LABELS[c]);
				dashPanel.add(btn[i]);
				btn[i].addMouseListener(this);
				
				if(BTN_LABELS[c] == "=") {
					btn[i].setBackground(Color.blue);
					btn[i].setForeground(Color.white);
					
				}
				c++;
				btn[i].setFont(new Font("Algerian", Font.BOLD, 18));
			}
		}
		
//		Finally, add dash panel to the mainPanel
		mainPanel.add(dashPanel);
	}
	
	public static void main(String[] args) {
		new BasicCalculator().setVisible(true);
	}

	@Override
	public void mouseClicked(MouseEvent e) {
		Button temp = (Button)e.getSource();
		if(temp.getLabel() == "%") {
			operation = '%';
		}
		else if(temp.getLabel() == "CE") {
			operation = 's';
		}
		else if(temp.getLabel() == "C") {
			operation = 'c';
		}
		else if(temp.getLabel() == "DEL") {
			operation = 'd';
		}
		else if(temp.getLabel() == "7") {
			disNum1 = 7;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "8") {
			disNum1 = 8;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "9") {
			disNum1 = 9;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "/") {
			sum = sum / disNum1;
			operation = '/';
		}
		else if(temp.getLabel() == "4") {
			disNum1 = 4;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "5") {
			disNum1 = 5;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "6") {
			disNum1 = 6;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "X") {
			sum = sum * disNum1;
			operation = 'X';
		}
		else if(temp.getLabel() == "1") {
			disNum1 = 1;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "2") {
			disNum1 = 2;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "3") {
			disNum1 = 3;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == "+") {
			sum = sum + disNum1;
			txtDisplay.setText(""+sum);
			operation = '+';
		}
		else if(temp.getLabel() == "+/-") {
			
		}
		else if(temp.getLabel() == "0") {
			disNum1 = 0;
			txtDisplay.setText(""+disNum1);
		}
		else if(temp.getLabel() == ".") {
			
		}
		else if(temp.getLabel() == "=") {
			System.out.println("clicked on =");
			switch(operation) {
			case '+':
				System.out.println("= > + running" + sum + "  " + disNum1);
				sum = sum + disNum1;
				txtDisplay.setText(""+sum);
				break;
			case '-':
				sum -= disNum1;
				txtDisplay.setText(""+sum);
				break;
			case 'X':
				sum *= disNum1;
				txtDisplay.setText(""+sum);
				break;
			case '/':
				sum /= disNum1;
				txtDisplay.setText(""+sum);
				break;
			case '%':
				break;
			case 's': //clear
				txtDisplay.setText("");
				disNum1 = 0;
				sum = 0;
				break;
			case 'c': //clean
				break;
			case 'd': //delete
				break;
			case '1': //	1/x
				sum = 1/disNum1;
				txtDisplay.setText(""+sum);
				break;
			case '2': //square
				sum = disNum1 * disNum1;
				txtDisplay.setText(""+sum);
				break;
			case '3': //cube
				sum = disNum1 * disNum1 * disNum1;
				txtDisplay.setText(""+sum);
				break;
			}
			disNum1 = 0;
		}
		else if(temp.getLabel() == "1/x") {
			operation = '1';
		}
		else if(temp.getLabel() == "x^2") {
			operation = '2';
		}
		else if(temp.getLabel() == "x^3") {
			operation = '3';
		}
		else if(temp.getLabel() == "-") {
			operation = '-';
			sum = sum - disNum1;
		}
	
	}

	@Override
	public void mousePressed(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseReleased(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseEntered(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseExited(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}
}
