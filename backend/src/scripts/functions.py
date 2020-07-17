'''
Module that holds the logic of the SLUE project.
'''

import csv

def read_tsv(filepath: str) -> list:
    '''Return the parsed content of the TSV file as a list of dicts, whose keys
    are the words present on the first row (header) of the TSV file.'''
    with open(filepath) as csvfile:
        reader = csv.DictReader(csvfile, dialect=csv.excel_tab)
        content = list(reader)
    return content
