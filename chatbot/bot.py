import os
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import _tree
import pickle
from joblib import dump,load
import warnings

warnings.filterwarnings("ignore", category=DeprecationWarning)

file_root = os.path.dirname(os.path.abspath(__file__))
classifier = load(os.path.join(file_root,'entropy.joblib'))

f = open(os.path.join(file_root,'dimensionality_reduction'),'rb')
dimensionality_reduction = pickle.load(f)
f.close()

with open(os.path.join(file_root, 'features.pkl'), 'rb') as f:
    cols = pickle.load(f)

with open(os.path.join(file_root, 'classes.pkl'), 'rb') as f:
    classes = pickle.load(f)

print(len(cols))

le = LabelEncoder()
le.fit(classes)

# Method to simulate the working of a Chatbot by extracting and formulating questions
def execute_bot():

    print("Please reply with yes/Yes or no/No for the following symptoms") 
    def print_disease(node):
        #print(node)
        node = node[0]
        #print(len(node))
        val  = node.nonzero() 
        #print(val)
        disease = le.inverse_transform(val[0])
        # print(disease)
        return disease
    def tree_to_code(tree, feature_names):
        tree_ = tree.tree_
        #print(tree_)
        feature_name = [
            feature_names[i] if i != _tree.TREE_UNDEFINED else "undefined!"
            for i in tree_.feature
        ]
        #print("def tree({}):".format(", ".join(feature_names)))
        symptoms_present = []
        def recurse(node, depth):
            indent = "  " * depth
            if tree_.feature[node] != _tree.TREE_UNDEFINED:
                name = feature_name[node]
                threshold = tree_.threshold[node]
                print(name + " ?")
                ans = input()
                ans = ans.lower()
                if ans == 'yes':
                    val = 1
                else:
                    val = 0
                if  val <= threshold:
                    recurse(tree_.children_left[node], depth + 1)
                else:
                    symptoms_present.append(name)
                    recurse(tree_.children_right[node], depth + 1)
            else:
                present_disease = print_disease(tree_.value[node])
                print( "You may have " +  present_disease )
                red_cols = dimensionality_reduction.columns 
                symptoms_given = red_cols[dimensionality_reduction.loc[present_disease].values[0].nonzero()]
                print("symptoms present  " + str(list(symptoms_present)))
                print("symptoms given "  +  str(list(symptoms_given)) )  
                confidence_level = (1.0*len(symptoms_present))/len(symptoms_given)
                print("confidence level is " + str(confidence_level))
    
        recurse(0, 1)
    
    tree_to_code(classifier,cols)

if __name__ == '__main__':
    execute_bot()