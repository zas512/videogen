"use client";
import React, { useState } from "react";
import Image from "next/image";

type Comment = {
  id: number;
  text: string;
  user: string;
  replies: Comment[];
};

type Blog = {
  id: number;
  title: string;
  image: string;
  content: string;
  comments: Comment[];
};

const BlogPage: React.FC = () => {
  const [expandedComments, setExpandedComments] = useState<Record<number, boolean>>({});
  const [expandedReplies, setExpandedReplies] = useState<Record<number, boolean>>({});

  const toggleComments = (blogId: number) => {
    setExpandedComments((prev) => ({
      ...prev,
      [blogId]: !prev[blogId]
    }));
  };

  const toggleReplies = (commentId: number) => {
    setExpandedReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Understanding AI in Video Generation",
      image: "/images/1.jpg",
      content: "In this blog post, we explore how AI is revolutionizing the video generation industry...",
      comments: [
        {
          id: 1,
          text: "Great post! Really enjoyed it.",
          user: "Alice",
          replies: [
            { id: 101, text: "I agree! AI is changing everything.", user: "Bob", replies: [] },
            { id: 102, text: "Can't wait to see what's next!", user: "Charlie", replies: [] }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The Future of Video Editing",
      image: "/images/2.jpg",
      content: "Video editing is evolving rapidly with new technologies...",
      comments: [
        {
          id: 2,
          text: "Very informative!",
          user: "Charlie",
          replies: []
        }
      ]
    },
    {
      id: 3,
      title: "Top 10 Video Editing Tools",
      image: "/images/3.jpg",
      content: "Here are the top 10 tools you should consider for video editing...",
      comments: []
    },
    {
      id: 4,
      title: "How to Create Engaging Videos",
      image: "/images/4.jpg",
      content: "Creating engaging videos is an art and a science...",
      comments: []
    },
    {
      id: 5,
      title: "Video Marketing Strategies",
      image: "/images/5.jpg",
      content: "Effective video marketing strategies can boost your brand...",
      comments: []
    },
    {
      id: 6,
      title: "The Role of AI in Video Production",
      image: "/images/6.jpg",
      content: "AI is playing a crucial role in modern video production...",
      comments: []
    }
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <h1 className="font-mono text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">AI & Video Innovation Hub</h1>
      {blogs.map((blog) => (
        <article key={blog.id} className="space-y-4 border-b pb-6">
          <h2 className="text-lg font-medium md:text-xl xl:text-2xl 2xl:text-3xl">{blog.title}</h2>
          <Image src={blog.image} alt={blog.title} width={800} height={400} className="rounded-lg" />
          <p className="text-sm md:text-base xl:text-lg 2xl:text-xl">{blog.content}</p>
          <section className="space-y-4">
            <button onClick={() => toggleComments(blog.id)} className="text-blue-500 hover:underline">
              {expandedComments[blog.id] ? "Hide Comments" : "Show Comments"}
            </button>
            {expandedComments[blog.id] && (
              <div className="space-y-4">
                {blog.comments.map((comment) => (
                  <div key={comment.id} className="rounded-lg border p-4">
                    <p className="text-sm md:text-base xl:text-lg 2xl:text-xl">
                      <strong>{comment.user}:</strong> {comment.text}
                    </p>
                    {comment.replies.length > 0 && (
                      <div className="ml-6 mt-2 border-l-2 pl-4">
                        <button onClick={() => toggleReplies(comment.id)} className="text-blue-400 hover:underline">
                          {expandedReplies[comment.id] ? "Hide Replies" : "Show Replies"}
                        </button>
                        {expandedReplies[comment.id] && (
                          <div className="mt-2 space-y-2">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="rounded-md p-1">
                                <p className="text-sm md:text-base xl:text-lg 2xl:text-xl">
                                  <strong>{reply.user}:</strong> {reply.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        </article>
      ))}
    </div>
  );
};

export default BlogPage;
