'''
Module that holds the logic of the SLUE project.
'''

import csv

def read_tsv(filepath: str) -> str:
    '''Return the content of the TSV file.'''
    with open(filepath) as csvfile:
        reader = csv.DictReader(csvfile, dialect=csv.excel_tab)
        content = [row for row in reader]
    return content
