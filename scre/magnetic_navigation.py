import numpy as np

class NanoBot:
    def __init__(self, agent_id):
        self.agent_id = agent_id
        self.position = np.array([0.0, 0.0, 0.0]) # الإحداثيات في الدم
        self.velocity = 0.05 # سرعة البكتيريا 500nm
        
    def move_to_target(self, target_pos, magnetic_strength):
        """
        محاكاة تحريك البكتيريا نحو الهدف باستعمال قوة المغناطيس
        """
        direction = target_pos - self.position
        unit_direction = direction / np.linalg.norm(direction)
        
        # تحريك البكتيريا بناءً على القوة المغناطيسية
        self.position += unit_direction * self.velocity * magnetic_strength
        print(f"Agent {self.agent_id} is moving to: {self.position}")

# تجربة المحاكاة
jaki_bot = NanoBot(agent_id="MTB-01")
target = np.array([10.0, 20.0, 5.0]) # مكان الورم أو المرض

print("Starting Jaki-Netwood Navigation...")
for step in range(5):
    jaki_bot.move_to_target(target, magnetic_strength=1.5)
