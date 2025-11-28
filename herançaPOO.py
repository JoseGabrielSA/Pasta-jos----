class Animal:
    def __init__(self, nome):
        self.nome = nome

class Cachorro(Animal):
    super.__init__(self, nome)
    self.raca = raca
    def falar(self):
        return "Au Au!"
        
class Gato(Animal):
    super.__init__(self, nome)
    self.genero = genero
    def falar(self):
        return "Miau!"

