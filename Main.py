import tkinter as tk

class DFADrawer:
    def __init__(self, root, states, alphabet, transitions, initial_state, accepting_states):
        self.root = root
        self.states = states
        self.alphabet = alphabet
        self.transitions = transitions
        self.initial_state = initial_state
        self.accepting_states = accepting_states
        self.canvas = tk.Canvas(root, width=800, height=600)
        self.canvas.pack()

        # Draw states
        self.state_positions = {}
        for state in states:
            x, y = self.get_state_position()
            self.state_positions[state] = (x, y)
            self.canvas.create_oval(x - 20, y - 20, x + 20, y + 20, fill='lightgray')
            self.canvas.create_text(x, y + 25, text=state)  # Added spacing below the state name

        # Draw transitions
        for state, transitions in transitions.items():
            x1, y1 = self.state_positions[state]
            for symbol, next_state in transitions.items():
                x2, y2 = self.state_positions[next_state]
                self.canvas.create_line(x1, y1, x2, y2, arrow=tk.LAST)
                self.canvas.create_text((x1 + x2) / 2, (y1 + y2) / 2, text=symbol)

        # Mark initial state
        x, y = self.state_positions[initial_state]
        self.canvas.create_oval(x - 15, y - 15, x + 15, y + 15, outline='blue', width=2)

        # Mark accepting states
        for state in accepting_states:
            x, y = self.state_positions[state]
            self.canvas.create_oval(x - 20, y - 20, x + 20, y + 20, outline='green', width=2)

    def get_state_position(self):
        return len(self.state_positions) * 100 + 100, 300

def main():
    states = {'q0', 'q1', 'q2'}
    alphabet = {'0', '1'}
    transitions = {
        'q0': {'0': 'q1', '1': 'q0'},
        'q1': {'0': 'q2', '1': 'q0'},
        'q2': {'0': 'q2', '1': 'q2'},
    }
    initial_state = 'q0'
    accepting_states = {'q2'}

    root = tk.Tk()
    root.title('DFA Transition Diagram')
    dfa_drawer = DFADrawer(root, states, alphabet, transitions, initial_state, accepting_states)
    root.mainloop()

if __name__ == "__main__":
    main()
