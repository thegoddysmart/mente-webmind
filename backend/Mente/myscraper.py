#!/usr/bin/python3

import requests
from bs4 import BeautifulSoup

def get_title(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')
    # return soup.title.text if soup.title else 'My Article Summary'
    return soup.find('h1').text

def get_about(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')
    # meta_description = soup.find(lambda tag: tag.name == 'meta' and 
    #                           (tag.get('name') == 'description' or tag.get('name') == 'og:description'))
    # return meta_description['content'] if meta_description and 'content' in meta_description.attrs else get_title(url)
    return soup.find('h2').text

def select_between(lst, end):
    # Flag to indicate when to start yielding elements
    for item in lst:
        if item == end:
            break  # Stop yielding when we reach the end item
        yield item
        
def get_body_text(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'lxml')
    paragraphs = soup.find_all('p')
    found_hello = False
    text = []
    for i in paragraphs:
        i = i.text
        if found_hello:
            text.append(i)
        if i == 'Share':
            found_hello = True 


    text1 = list(select_between(text, '--'))
    return ' '.join(text1)
