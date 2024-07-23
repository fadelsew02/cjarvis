from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

client = OpenAI(api_key=OPENAI_API_KEY)

tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

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