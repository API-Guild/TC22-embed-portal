# TC22-embed-portal

To run this application you will first need to have Python installed on your computer. 

You can verify the version of Python in your terminal by running:

```bash
python --version

# this should be version 3.8.8 or greater
```

Make sure that you already have Python version 3.8.8 or greater. If not, you will have to install it.

Next you will need to install dependencies which are declared in the `requirements.txt` file. If you use Python environments (as you should) then you can tailor this installation according to how you manage said environments.

A basic installation would look like this:

```bash
pip install -r requirements.txt
```

Finally to run the Flask server you will need to run this:

```bash
python EmbedPortal.py 
```

The terminal will output the URL for the app, open it with your browser to get started.