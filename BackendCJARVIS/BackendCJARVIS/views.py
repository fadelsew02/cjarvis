def schedule_gemini(tasks_list, free_hours): 
    import google.generativeai as genai
    import os
    from dotenv import load_dotenv

    load_dotenv()
    GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-pro')

    # tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
    # free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

    response = model.generate_content(f"""You are the best scheduler.
                                    Knowing my free hours {free_hours}, propose a schedule for the given 
                                    tasks list based on health recommendations.
                                    Here is the tasks list: {tasks_list}. 
                                    After scheduling, give justification of that.""",
                                    generation_config=genai.types.GenerationConfig(temperature=1.0))
    
    return(response.text)


def schedule_gpt(tasks_list): 
    from openai import OpenAI
    import os
    from dotenv import load_dotenv

    load_dotenv()
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

    client = OpenAI(api_key=OPENAI_API_KEY)

    # tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
    # free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are the best tasks scheduler."},
            {"role": "user", "content": f"""Based on logic and the fact that the greater the value is, 
                                        the least tasks are related, give a {len(tasks_list)}*{len(tasks_list)}
                                        matrix in numpy format to show relation between tasks respecting the list,
                                        in order to perform graph theory for low cost optimization.
                                        Here is the tasks list: {tasks_list}. Values have to be between 1 and 10.
                                        Just give the matrix and nothing else."""}
        ]
    )
    response = completion.choices[0].message.content[9:-4]
    print(type(response))
    print(response)
    exec(response)
    print(matrix)
    
    return matrix


def low_cost_path(tasks_list, cost_matrix):
    pass

def scheduling_or_tools(tasks_list):
    import numpy as np

    from ortools.graph.python import min_cost_flow
    smcf = min_cost_flow.SimpleMinCostFlow()
    
    start_nodes = np.array([0, 0, 1, 1, 1, 2, 2, 3, 4])
    end_nodes = np.array([1, 2, 2, 3, 4, 3, 4, 4, 2])
    capacities = np.array([15, 8, 20, 4, 10, 15, 4, 20, 5])
    unit_costs = np.array([4, 4, 2, 2, 6, 1, 3, 2, 3])
    supplies = [20, 0, 0, -5, -15]

    # Add arcs, capacities and costs in bulk using numpy.
    all_arcs = smcf.add_arcs_with_capacity_and_unit_cost(
        start_nodes, end_nodes, capacities, unit_costs
    )

    # Add supply for each nodes.
    smcf.set_nodes_supplies(np.arange(0, len(supplies)), supplies)

    # Find the min cost flow.
    status = smcf.solve()

    if status != smcf.OPTIMAL:
        print("There was an issue with the min cost flow input.")
        print(f"Status: {status}")
        exit(1)
    print(f"Minimum cost: {smcf.optimal_cost()}")
    print("")
    print(" Arc    Flow / Capacity Cost")
    solution_flows = smcf.flows(all_arcs)
    costs = solution_flows * unit_costs
    for arc, flow, cost in zip(all_arcs, solution_flows, costs):
        print(
            f"{smcf.tail(arc):1} -> {smcf.head(arc)}  {flow:3}  / {smcf.capacity(arc):3}       {cost}"
        )
