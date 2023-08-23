'use client'

import React, { useState, useEffect } from "react";
import postCategories from "../../lib/apiRequest/postCategories";
import postList from "../../lib/apiRequest/postList";
import Link from "next/link";

export default function Blog() {
    const [postCat, setPostCat] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const categories = await postCategories();
            setPostCat(categories);
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchPosts() {
            if (selectedPostId !== null) {
                const postListData = await postList(selectedPostId);
                setPosts(postListData);
            }
        }

        fetchPosts();
    }, [selectedPostId]);

    const handleClick = (postId) => {
        setSelectedPostId(postId);
    };

    return (
        <div>
            <div className='flex'>
                <div className='mx-auto py-4 flex'>
                    {postCat.map((post) => (
                        <div
                            key={post.id}
                            className='hover:scale-105 hover:font-bold cursor-pointer'
                            onClick={() => handleClick(post.id)}
                        >
                            <p className='px-3'>{post.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='my-6 mx-4'>
                <div className='flex'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {posts.map((post) => (
                            <div key={post.id}
                                className='shadow-lg hover:scale-95 transition delay-100'>
                                <Link href={`/single-blog/${post.id}`}>
                                    <img src={post.img} width={350} />
                                    <p className='font-bold py-2'>{post.title}</p>
                                    <p className='mt-1'>{post.short}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
