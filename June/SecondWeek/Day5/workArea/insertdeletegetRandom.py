import random
class RandomizedSet(object):
   def __init__(self):
      self.present = {}
      self.elements = []
   def insert(self, val):
      if val not in self.present or self.present[val] == 0:
         self.elements.append(val)
         self.present[val] = 1
         return True
      return False
   def remove(self, val):
      if val not in self.present or self.present[val] == 0:
         return False
      self.present[val] = 0
      index = self.elements.index(val)
      if index!=len(self.elements)-1:
         temp = self.elements[-1]
         self.elements[-1] = val
         self.elements[index]=temp
      self.elements.pop()
      return True
   def getRandom(self):
      return random.choice(self.elements)
ob = RandomizedSet()
print(ob.insert(1))
print(ob.remove(2))
print(ob.insert(2))
print(ob.getRandom())
print(ob.remove(1))
print(ob.insert(2))
print(ob.getRandom())