class Solution:
    def dayOfYear(self, date: str) -> int:
        
        def dayDeterminer(year,month,day):
            if int(month) == 1:
                return int(day)
            else:
                sum = 0
                for i in range(0,int(month)-1):
                    sum += year[i]
                    
                return sum+int(day)
                
        
        def checkLeap(year):
            if int(year)%4 == 0 and int(year)%100 != 0 or int(year)%400 == 0:
                return [31,29,31,30,31,30,31,31,30,31,30,31]
            else:
                return [31,28,31,30,31,30,31,31,30,31,30,31]
            
            
        year, month, day = date[:4], date[5:7], date[8:]
        res_year = checkLeap(year)
        return dayDeterminer(res_year,month,day)
            
        '''if int(month) == 1:
            print('Cool')'''
        '''month = date[5:7]
        day = date[8:]'''
        
        # print(year,month,day)