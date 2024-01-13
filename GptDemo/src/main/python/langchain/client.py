from langserve import RemoteRunnable

remote_chain = RemoteRunnable("http://localhost:8000/category_chain/")

test = remote_chain.invoke({"text": "colors"})
print(test)
# >> ['red', 'blue', 'green', 'yellow', 'orange']