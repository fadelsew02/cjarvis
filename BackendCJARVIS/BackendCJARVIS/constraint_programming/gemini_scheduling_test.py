import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')


genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

tasks_list = ['Go to gym', 'Learn python', 'Visit a friend', 'Work on a web project', 'Read a scientific book']
free_hours = ['8:15 AM to 10:45 AM', '1:00 PM to 5:00 PM']

response = model.generate_content(f"""You are the best scheduler.
                                  Knowing my free hours {free_hours}, propose a schedule for the given 
                                  tasks list based on health recommendations.
                                  Here is the tasks list: {tasks_list}. 
                                  After scheduling, give justification of that.""",
                                    generation_config=genai.types.GenerationConfig(
                                    temperature=1.0))

print(response.text)

# print(response['candidates'][0]['content']['parts'][0]['text'])