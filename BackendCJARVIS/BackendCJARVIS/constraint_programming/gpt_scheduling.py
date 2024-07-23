from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

client = OpenAI(api_key=OPENAI_API_KEY)

tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  messages=[
    {"role": "system", "content": "You are the best tasks scheduler, integrating health recommendations and great lifestyle."},
    {"role": "user", "content": f"""You are the best scheduler.
                                  Knowing my free hours {free_hours}, propose a schedule for the given 
                                  tasks list based on health recommendations.
                                  Here is the tasks list: {tasks_list}. 
                                  After scheduling, give justification of that."""}
  ]
)
response = completion.choices[0].message.content
print(type(response))
print(response)
print()
print(type(response.content))
print(response.content)