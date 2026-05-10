import numpy as np

class NanoSimEngine:
    def __init__(self):
        # Viscosité du sang (approximative en Pascal-seconde)
        self.blood_viscosity = 0.0035 
        self.agent_pos = np.array([0.0, 0.0, 0.0])
        
    def calculate_magnetic_force(self, target_pos, field_intensity):
        """
        Calcule le vecteur de navigation vers la cible (ex: une tumeur)
        """
        direction = target_pos - self.agent_pos
        distance = np.linalg.norm(direction)
        
        if distance < 0.1:
            print("Cible atteinte ! Injection du médicament...")
            return np.array([0, 0, 0])
            
        # Normalisation du vecteur de mouvement
        unit_vector = direction / distance
        
        # La force magnétique doit compenser la traînée (drag force) du sang
        velocity = (unit_vector * field_intensity) / self.blood_viscosity
        self.agent_pos += velocity
        
        return self.agent_pos

# --- Test de l'unité de contrôle Jaki-Netwood ---
sim = NanoSimEngine()
tumor_location = np.array([5.0, 10.0, 2.0])

print(f"Démarrage de la navigation vers : {tumor_location}")
for second in range(5):
    new_coords = sim.calculate_magnetic_force(tumor_location, field_intensity=0.0005)
    print(f"Seconde {second}: Position actuelle {new_coords}")
