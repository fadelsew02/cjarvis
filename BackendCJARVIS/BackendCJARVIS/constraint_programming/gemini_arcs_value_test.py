import google.generativeai as genai
import json
import os

from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

response = model.generate_content(f"""You are the best scheduler.
                                  Based on logic and the fact that the greater the value is, 
                                  the least tasks are related, give a {len(tasks_list)}*{len(tasks_list)}
                                  matrix in numpy format to show relation between tasks respecting the list,
                                  in order to perform graph theory for low cost optimization.
                                  Here is the tasks list: {tasks_list}. Values have to be between 1 and 10.
                                  Just give the matrix and no more else.""",
                                    generation_config=genai.types.GenerationConfig(temperature=1.0))

# response = model.generate_content(f"""You are the best scheduler.
#                                   Based on logic and the fact that the greater the value is, 
#                                   the least tasks are related, give cost value in [0, 10] between each task and others
#                                   using this format 'node 1 - node 2 - cost' to show relation between task 
#                                   in order to perform graph theory for low cost optimization.
#                                   Here is the tasks list: {tasks_list}. 
#                                   After responding, give justification of that.""",
#                                     generation_config=genai.types.GenerationConfig(
#                                     temperature=1.0))

print(type(response.text))
print(response.text)
response_text = response.text[8:-3]
print(type(response_text))
print(response_text)
extract_response = json.dumps(response_text)
print(1, type(extract_response))
extract_response = json.loads(extract_response)
print(2, type(extract_response))

with open('test.json', "w") as file:
    file.write(f"{extract_response}")
# extract_response = json.loads(response_text)
# print(type(extract_response))
print(extract_response['matrix'])

# print(response['candidates'][0]['content']['parts'][0]['text'])