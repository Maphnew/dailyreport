import pandas as pd

df1 = pd.DataFrame([['a', 'b'], ['c', 'd']], index=['row 1', 'row 2'], columns=['col 1', 'col 2'])

print(df1)

df1.to_excel('dailyreport2.xlsx', sheet_name='Sheet1', startrow=4, startcol=0)