import numpy as np
from ortools.sat.python import cp_model

# List of tasks
tasks = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']

# Number of tasks
num_tasks = len(tasks)

# Initialize an adjacency matrix with random values between 1 and 10
np.random.seed(42)  # For reproducibility
matrix = np.random.randint(1, 11, size=(num_tasks, num_tasks))

# Make the matrix symmetric and set diagonal to 1 (task related to itself)
for i in range(num_tasks):
    for j in range(i + 1, num_tasks):
        matrix[j, i] = matrix[i, j]
    matrix[i, i] = 1

# Print the matrix
print("Adjacency Matrix (Relatedness Values):")
print(matrix)

# Create the CP-SAT model
model = cp_model.CpModel()

# Define variables for start times and end times of tasks
start_times = [model.NewIntVar(0, 100, f'start_{i}') for i in range(num_tasks)]
end_times = [model.NewIntVar(0, 100, f'end_{i}') for i in range(num_tasks)]
durations = [model.NewIntVar(1, 10, f'duration_{i}') for i in range(num_tasks)]

# Define makespan (the total time to complete all tasks)
makespan = model.NewIntVar(0, 100, 'makespan')

# Add constraints for each task's duration and end time
for i in range(num_tasks):
    model.Add(end_times[i] == start_times[i] + durations[i])

# Add constraints to ensure all tasks are scheduled within the makespan
for i in range(num_tasks):
    model.Add(end_times[i] <= makespan)

# Add no-overlap constraints based on the adjacency matrix values
for i in range(num_tasks):
    for j in range(i + 1, num_tasks):
        if matrix[i, j] > 1:  # Only consider tasks that are not strongly related
            # Use linear constraints to avoid overlap
            model.Add(start_times[i] >= end_times[j] + 1)
            model.Add(start_times[j] >= end_times[i] + 1)

# Objective: minimize the makespan
model.Minimize(makespan)

# Create the solver and solve the model
solver = cp_model.CpSolver()
status = solver.Solve(model)

# Check the result
if status == cp_model.OPTIMAL or status == cp_model.FEASIBLE:
    print(f'Minimum makespan: {solver.Value(makespan)}')
    for i in range(num_tasks):
        print(f'Task {tasks[i]}: Start at {solver.Value(start_times[i])}, '
              f'End at {solver.Value(end_times[i])}, '
              f'Duration {solver.Value(durations[i])}')
else:
    print('No feasible solution found.')
