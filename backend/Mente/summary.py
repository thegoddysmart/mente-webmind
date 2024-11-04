from transformers import pipeline
import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from collections import Counter
from heapq import nlargest

def abstractive_summary(text):
    # Load the summarization pipeline
    summarizer = pipeline("summarization")

    # text = """
    # In this chapter, you will learn how to develop user account functionalities to
    # create a social website, including user registration, password management,
    # profile editing, and authentication. We will implement social features on this
    # site in the next few chapters, to let users share images and interact with each
    # other. Users will be able to bookmark any image on the internet and share it
    # with other users. They will also be able to see activity on the platform from
    # the users they follow and like/unlike the images shared by them"""
    # Generate a summary
    summary = summarizer(text, max_length=100, min_length=25, do_sample=False)
    # print("Summary:")
    return summary[0]['summary_text']

def extractive_summary(text):
    # Load the spaCy model
    nlp = spacy.load('en_core_web_sm')

    # Create a doc object
    doc = nlp(text)

    # Tokenization and removing stopwords and punctuations
    tokens = [token.text.lower() for token in doc if not token.is_stop and token.text not in punctuation]

    # Word frequency calculation and normalization
    word_freq = Counter(tokens)
    max_freq = max(word_freq.values())
    word_freq = {word: freq / max_freq for word, freq in word_freq.items()}

    # Sentence tokenization and scoring
    sent_score = {}
    for sent in doc.sents:
        for word in sent:
            word_lower = word.text.lower()
            if word_lower in word_freq:
                sent_score[sent] = sent_score.get(sent, 0) + word_freq[word_lower]

    # Finding the top sentences
    num_sentences = 2
    top_sentences = nlargest(num_sentences, sent_score, key=sent_score.get)

    # Creating the summary
    summary = ' '.join([sent.text for sent in top_sentences])

    return summary
