const PostList = () => {
  const arr = [
    {
      id: 1,
      title: "Hello World",
      content: "Try Reactjs is awesome. Can't wait to learn more",
      date: "12-04-2017",
      slug: "hello-world",
    },
    {
      id: 2,
      title: "Setup React",
      content: "Setting up react is easy. Learn more about it!",
      date: "1-28-2018",
      slug: "setup-react",
    },
  ];

  return (
    <>
      <h1>Hi This is a Title</h1>
      {arr.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title} </h1>
            <p> {item.content}</p>
          </div>
        );
      })}
    </>
  );
};

export default PostList;
