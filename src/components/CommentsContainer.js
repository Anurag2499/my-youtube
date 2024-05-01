import React from 'react';

const commentsData = [
  {
    name: 'Anurag',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [],
  },
  {
    name: 'Anurag',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Anurag',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
      {
        name: 'Anurag',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
  {
    name: 'Anurag',
    text: 'Lorem ipsum dolor sit amet, consectetur adip',
    replies: [
      {
        name: 'Anurag',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [
          {
            name: 'Anurag',
            text: 'Lorem ipsum dolor sit amet, consectetur adip',
            replies: [
              {
                name: 'Anurag',
                text: 'Lorem ipsum dolor sit amet, consectetur adip',
                replies: [
                  {
                    name: 'Anurag',
                    text: 'Lorem ipsum dolor sit amet, consectetur adip',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Anurag',
        text: 'Lorem ipsum dolor sit amet, consectetur adip',
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex  bg-gray-200 my-2 rounded-lg border border-gray-300">
      <div className="m-1 p-1">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/73/39/user-icon-male-person-symbol-profile-avatar-vector-20787339.jpg"
          alt=""
          className="h-8 cursor-pointer "
        />
      </div>
      <div className="mx-2 px-2">
        <h1>{name}</h1>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-6 border border-l-gray-500 rounded-lg">
        {comment?.replies && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-5 m-2 w-[1000px]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      {<CommentsList comments={commentsData} />}
    </div>
  );
};

export default CommentsContainer;
